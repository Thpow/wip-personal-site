/**
 * Mouse-Interactive Physics — cannon-es.
 *
 * Makes the monolith physically interactable with the mouse:
 * - The monolith is a dynamic body tethered to its home transform by a
 *   spring. Clicking it applies an impulse at the hit point — it tips,
 *   wobbles, and rights itself like a monument that refuses to fall.
 * - A field of floating debris shards orbits the monolith. Moving the
 *   pointer through them pushes them away; springs pull them back home.
 *
 * @module monolith/mouse-physics
 */
import * as CANNON from "cannon-es";
import * as THREE from "three";

export interface MousePhysicsHandle {
  /** Steps the world and syncs meshes. Call each frame with delta seconds. */
  update(dt: number): void;
  /** Removes listeners, bodies, and GPU resources. Idempotent. */
  dispose(): void;
}

const SHARD_COUNT = 26;
const SHARD_PUSH_RADIUS = 1.6;
const SHARD_PUSH_STRENGTH = 4;

export function initMousePhysics(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  domElement: HTMLElement,
  monolith: THREE.Object3D,
): MousePhysicsHandle {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, 0, 0) });
  world.broadphase = new CANNON.NaiveBroadphase();

  // ─── Monolith body — dynamic, spring-tethered to its home pose ──────
  const monolithHome = monolith.position.clone();
  const monolithBody = new CANNON.Body({
    mass: 40,
    // Approximate the wizard's robe: narrow top, wide hem.
    shape: new CANNON.Cylinder(0.5, 1.7, 4.4, 8),
    position: new CANNON.Vec3(monolithHome.x, monolithHome.y, monolithHome.z),
    linearDamping: 0.85,
    angularDamping: 0.85,
  });
  world.addBody(monolithBody);

  // ─── Debris shards — floating, spring back to home positions ────────
  const shardGeo = new THREE.TetrahedronGeometry(0.16);
  const shardMat = new THREE.MeshStandardMaterial({
    color: 0xf4f4f5,
    emissive: 0x22d3ee,
    emissiveIntensity: 0.25,
    roughness: 0.6,
    metalness: 0.1,
  });

  const shards: {
    body: CANNON.Body;
    mesh: THREE.Mesh;
    home: CANNON.Vec3;
  }[] = [];

  for (let i = 0; i < SHARD_COUNT; i++) {
    const angle = (i / SHARD_COUNT) * Math.PI * 2;
    const radius = 2.4 + (i % 5) * 0.4;
    const home = new CANNON.Vec3(
      monolithHome.x + Math.cos(angle) * radius,
      monolithHome.y - 0.5 + (i % 7) * 0.5,
      monolithHome.z + Math.sin(angle) * radius * 0.6,
    );
    const body = new CANNON.Body({
      mass: 0.2,
      shape: new CANNON.Sphere(0.16),
      position: home.clone(),
      linearDamping: 0.4,
      angularDamping: 0.2,
    });
    body.angularVelocity.set(
      Math.sin(i) * 0.5,
      Math.cos(i * 2) * 0.5,
      Math.sin(i * 3) * 0.5,
    );
    world.addBody(body);

    const mesh = new THREE.Mesh(shardGeo, shardMat);
    mesh.position.set(home.x, home.y, home.z);
    scene.add(mesh);

    shards.push({ body, mesh, home });
  }

  // ─── Pointer tracking + raycasting ───────────────────────────────────
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let pointerActive = false;

  const updatePointer = (event: PointerEvent) => {
    const rect = domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    pointerActive = true;
  };

  const onPointerMove = (event: PointerEvent) => {
    updatePointer(event);
  };

  const onPointerDown = (event: PointerEvent) => {
    updatePointer(event);
    // Shove the monolith at the clicked point
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(monolith, true);
    if (hits.length > 0) {
      const hit = hits[0]!;
      const dir = raycaster.ray.direction;
      const impulse = new CANNON.Vec3(dir.x * 60, dir.y * 60, dir.z * 60);
      const point = new CANNON.Vec3(hit.point.x, hit.point.y, hit.point.z);
      monolithBody.applyImpulse(
        impulse,
        point.vsub(monolithBody.position),
      );
    }
  };

  const onPointerLeave = () => {
    pointerActive = false;
  };

  domElement.addEventListener("pointermove", onPointerMove);
  domElement.addEventListener("pointerdown", onPointerDown);
  domElement.addEventListener("pointerleave", onPointerLeave);

  // Scratch vectors reused each frame to avoid allocation
  const springForce = new CANNON.Vec3();
  const closest = new THREE.Vector3();

  let disposed = false;
  return {
    update(dt: number) {
      if (disposed) return;

      // Spring pulling the monolith back to its home pose
      monolithHomeSpring(monolithBody, monolithHome, springForce);

      // Pointer ray pushes nearby shards
      if (pointerActive) {
        raycaster.setFromCamera(pointer, camera);
        for (const shard of shards) {
          closest.set(
            shard.body.position.x,
            shard.body.position.y,
            shard.body.position.z,
          );
          const distToRay = raycaster.ray.distanceToPoint(closest);
          if (distToRay < SHARD_PUSH_RADIUS) {
            const strength =
              (1 - distToRay / SHARD_PUSH_RADIUS) * SHARD_PUSH_STRENGTH;
            // Push away from the ray, perpendicular to view direction
            const onRay = raycaster.ray.closestPointToPoint(
              closest,
              new THREE.Vector3(),
            );
            const away = closest
              .clone()
              .sub(onRay)
              .normalize()
              .multiplyScalar(strength);
            shard.body.applyForce(
              new CANNON.Vec3(away.x, away.y, away.z),
              CANNON.Vec3.ZERO,
            );
          }
        }
      }

      // Springs pulling shards back to their home orbits
      for (const shard of shards) {
        shard.home.vsub(shard.body.position, springForce);
        springForce.scale(1.5, springForce);
        shard.body.applyForce(springForce, CANNON.Vec3.ZERO);
      }

      world.step(1 / 60, dt, 3);

      // Sync meshes to bodies
      monolith.position.set(
        monolithBody.position.x,
        monolithBody.position.y,
        monolithBody.position.z,
      );
      monolith.quaternion.set(
        monolithBody.quaternion.x,
        monolithBody.quaternion.y,
        monolithBody.quaternion.z,
        monolithBody.quaternion.w,
      );
      for (const shard of shards) {
        shard.mesh.position.set(
          shard.body.position.x,
          shard.body.position.y,
          shard.body.position.z,
        );
        shard.mesh.quaternion.set(
          shard.body.quaternion.x,
          shard.body.quaternion.y,
          shard.body.quaternion.z,
          shard.body.quaternion.w,
        );
      }
    },

    dispose() {
      if (disposed) return;
      disposed = true;
      domElement.removeEventListener("pointermove", onPointerMove);
      domElement.removeEventListener("pointerdown", onPointerDown);
      domElement.removeEventListener("pointerleave", onPointerLeave);
      for (const shard of shards) {
        world.removeBody(shard.body);
        scene.remove(shard.mesh);
      }
      world.removeBody(monolithBody);
      shardGeo.dispose();
      shardMat.dispose();
    },
  };
}

/**
 * Applies a spring force + torque returning the monolith to its home pose.
 */
function monolithHomeSpring(
  body: CANNON.Body,
  home: THREE.Vector3,
  scratch: CANNON.Vec3,
): void {
  // Positional spring
  scratch.set(
    home.x - body.position.x,
    home.y - body.position.y,
    home.z - body.position.z,
  );
  scratch.scale(120, scratch);
  body.applyForce(scratch, CANNON.Vec3.ZERO);

  // Orientation spring — torque toward identity rotation
  const q = body.quaternion;
  // Small-angle approximation: torque proportional to the vector part
  body.torque.x -= q.x * 300;
  body.torque.y -= q.y * 300;
  body.torque.z -= q.z * 300;
}
