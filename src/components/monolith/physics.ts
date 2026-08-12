/**
 * Monolith Physics — cannon-es (OPTIONAL layer).
 *
 * Static ground plane + static monolith body + dynamic debris system.
 * Not wired into the scene by default — call `initPhysics(scene)` if
 * debris-settling physics is desired.
 *
 * @module monolith/physics
 */
import * as CANNON from "cannon-es";
import * as THREE from "three";

export interface PhysicsHandle {
  /** Steps the physics world by `dt` seconds. Call in the render loop. */
  step(dt: number): void;
  /** Syncs cannon body positions/rotations to Three.js meshes. */
  syncMeshes(): void;
  /** Adds a dynamic debris body at the given position. */
  addDebris(pos: THREE.Vector3): { body: CANNON.Body; mesh: THREE.Mesh };
  /** Removes all dynamic debris bodies and meshes. */
  clearDebris(): void;
  /** Disposes the physics world and all bodies. Idempotent. */
  dispose(): void;
}

/**
 * Initializes the physics world for the monolith scene.
 */
export function initPhysics(scene: THREE.Scene): PhysicsHandle {
  let disposed = false;

  const solver = new CANNON.GSSolver();
  solver.iterations = 8;

  const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0),
    solver,
  });
  world.broadphase = new CANNON.NaiveBroadphase();

  const groundMaterial = new CANNON.Material("ground");
  const debrisMaterial = new CANNON.Material("debris");

  const contactMaterial = new CANNON.ContactMaterial(
    groundMaterial,
    debrisMaterial,
    { friction: 0.4, restitution: 0.2 },
  );
  world.addContactMaterial(contactMaterial);

  // Ground plane (static)
  const groundBody = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Plane(),
    material: groundMaterial,
  });
  groundBody.quaternion.setFromAxisAngle(
    new CANNON.Vec3(1, 0, 0),
    -Math.PI / 2,
  );
  world.addBody(groundBody);

  // Monolith (static — immovable monument)
  const monolithBody = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Box(new CANNON.Vec3(1.3, 3, 1.3)),
    position: new CANNON.Vec3(0, 3, 0),
    material: groundMaterial,
  });
  world.addBody(monolithBody);

  const debris: { body: CANNON.Body; mesh: THREE.Mesh }[] = [];

  const debrisGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const debrisMat = new THREE.MeshStandardMaterial({
    color: 0xf5f5f5,
    roughness: 0.8,
    metalness: 0.1,
  });

  const clearDebrisImpl = () => {
    for (const { body, mesh } of debris) {
      world.removeBody(body);
      scene.remove(mesh);
    }
    debris.length = 0;
  };

  return {
    step(dt: number) {
      if (disposed) return;
      world.step(1 / 60, dt, 3);
    },

    syncMeshes() {
      if (disposed) return;
      for (const { body, mesh } of debris) {
        mesh.position.set(body.position.x, body.position.y, body.position.z);
        mesh.quaternion.set(
          body.quaternion.x,
          body.quaternion.y,
          body.quaternion.z,
          body.quaternion.w,
        );
      }
    },

    addDebris(pos: THREE.Vector3) {
      const body = new CANNON.Body({
        mass: 0.5,
        shape: new CANNON.Box(new CANNON.Vec3(0.1, 0.1, 0.1)),
        position: new CANNON.Vec3(pos.x, pos.y, pos.z),
        material: debrisMaterial,
        allowSleep: true,
        sleepSpeedLimit: 0.1,
        sleepTimeLimit: 1,
      });
      world.addBody(body);

      const mesh = new THREE.Mesh(debrisGeo, debrisMat);
      mesh.position.copy(pos);
      scene.add(mesh);

      const entry = { body, mesh };
      debris.push(entry);
      return entry;
    },

    clearDebris: clearDebrisImpl,

    dispose() {
      if (disposed) return;
      disposed = true;
      clearDebrisImpl();
      debrisGeo.dispose();
      debrisMat.dispose();
      world.clearForces();
    },
  };
}
