import type { AgentSpec } from "./types";

/**
 * Ground-truth data for the devin-autopilot multi-agent system.
 *
 * Sourced directly from the running system's repository:
 * `autopilot/config.py` (AGENTS, SCHEDULE, CONCURRENT_PAIRS, model selection,
 * SELF_RESTART_CYCLES, MAX_CONSECUTIVE_CRASHES), `autopilot/orchestrator.py`
 * (turn dispatch, error recovery), `autopilot/agents.py` (brain+agent ACP
 * session pairing), and ARCHITECTURE.md.
 */

export const AGENTS: AgentSpec[] = [
  {
    number: 1,
    name: "Coder",
    role: "Code Writer",
    purpose:
      "Receives one instruction per turn from its brain and implements it directly — writes/edits files, runs commands, runs tests. The only agent allowed to write source code.",
    writes: "Source files",
    outputContract: "RESULT: Status / Changed / Issues",
    does: [
      "Implement exactly the instruction",
      "Verify with build/test/lint",
      "Keep changes focused and minimal",
    ],
    doesNot: [
      "Review its own work (Agent 2)",
      "Reassign scope (Agent 3)",
      "Write tests-only turns unless asked (Agent 4)",
      "Edit unrelated files",
    ],
  },
  {
    number: 2,
    name: "Reviewer",
    role: "Output Reviewer / Next Steps",
    purpose:
      "Each turn, inspects the files Agent 1 just changed and runs checks (compile, tests, grep) to verify the work landed correctly. Proposes specific fixes with file:line references.",
    writes: "Nothing (read-only; small inline fixes only)",
    outputContract: "REVIEW: Verdict / Findings + NEXT STEPS: 1-3",
    does: [
      "Read actual files",
      "Run py_compile / tests",
      "Flag gaps with line refs",
      "Propose specific fixes for Agent 1",
    ],
    doesNot: [
      "Rewrite large chunks of code",
      "Set project direction (Agent 3)",
      "Add tests (Agent 4)",
      "Edit unrelated files",
    ],
  },
  {
    number: 3,
    name: "Director",
    role: "Project Director",
    purpose:
      "Owns project direction against the original prompt. Compares progress vs. goal each turn, cuts scope creep, re-prioritizes, and assigns concrete tasks to specific agents. Excluded from concurrency — it needs full sequential context.",
    writes: "Nothing (read-only)",
    outputContract: "DIRECTION: Milestone / Priorities 1-3 + owners / Risks",
    does: [
      "Compare progress vs. project goal",
      "Cut scope creep",
      "Re-prioritize and assign tasks with owners",
      "Track done / in-progress / not-started",
    ],
    doesNot: [
      "Write or edit code (Agent 1)",
      "Review diffs (Agent 2)",
      "Write tests (Agent 4)",
      "Implement features itself",
    ],
  },
  {
    number: 4,
    name: "Quality",
    role: "Quality & Longevity",
    purpose:
      "Owns durability: tests, architecture health, tech debt, security, and docs. Audits code quality and ranks findings by severity with concrete remediation steps for Agent 1.",
    writes: "Nothing (read-only)",
    outputContract:
      "QUALITY REPORT: Status / Findings [CRITICAL|HIGH|MEDIUM] / Tests needed",
    does: [
      "Audit quality, coverage, error handling, security, docs",
      "Propose test cases for untested paths",
      "Rank findings by severity",
      "Give concrete remediation steps",
    ],
    doesNot: [
      "Implement features (Agent 1)",
      "Review the latest diff (Agent 2)",
      "Set priorities (Agent 3)",
      "Rewrite working code",
    ],
  },
  {
    number: 6,
    name: "Documentation",
    role: "Documentation",
    purpose:
      "Owns project documentation — README.md, ARCHITECTURE.md, CHANGELOG.md, and per-module docs in docs/. Makes the codebase self-documenting so any new agent can understand it by reading the docs.",
    writes: ".md files only",
    outputContract: "DOCS: Updated / Summary / Gaps",
    does: [
      "Read the team log and recent changes each turn",
      "Maintain README / ARCHITECTURE / CHANGELOG / docs/",
      "Reference exact file paths and function names",
      "Write retroactive docs on the first turn",
    ],
    doesNot: [
      "Implement features (Agent 1)",
      "Review diffs (Agent 2)",
      "Audit quality or write tests (Agent 4)",
      "Edit source code files",
    ],
  },
  {
    number: 7,
    name: "Ideas",
    role: "Ideas & Objectives",
    purpose:
      "The creative engine — proposes 2-4 new ideas per turn (features, improvements, experiments, research directions), appends them to .autopilot/ideas.md, and injects the top pick into the team log for the Director to prioritize.",
    writes: ".autopilot/ideas.md only",
    outputContract: "IDEAS: 1-3 titled ideas + TOP PICK",
    does: [
      "Read project state and team log",
      "Propose 2-4 new ideas per turn",
      "Append each idea to ideas.md",
      "Inject the top idea into the team log",
    ],
    doesNot: [
      "Implement ideas (Agent 1)",
      "Set priorities (Agent 3)",
      "Review code (Agent 2)",
      "Repeat ideas already in ideas.md",
    ],
  },
];

/**
 * The repeating 13-turn cycle (config.py SCHEDULE).
 * Director opens and runs mid-cycle; Coder/Reviewer alternate through the
 * middle; Quality is penultimate, Documentation second-to-last, Ideas closes.
 * Agent 5 does not exist — the numbering skips it by design.
 */
export const TURN_ORDER: number[] = [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7];

export interface ConcurrentPair {
  /** The writing agent that holds the turn. */
  primary: number;
  /** Read-only companion agents that run simultaneously. */
  companions: number[];
}

/**
 * CONCURRENT_PAIRS (config.py): when a writer's turn comes up, its read-only
 * companions run simultaneously in a ThreadPoolExecutor. Companions' next
 * scheduled turns are then skipped (tracked in Orchestrator._ran_concurrent).
 */
export const CONCURRENT_PAIRS: ConcurrentPair[] = [
  { primary: 1, companions: [2, 4] },
  { primary: 6, companions: [7] },
];

export const CONCURRENCY = {
  mechanism: "ThreadPoolExecutor(max_workers = 1 + companions)",
  timeoutSeconds: 300,
  skipTracking:
    "Companions that ran concurrently are skipped at their next scheduled turn; the skip set clears at each new cycle.",
  throughputGain: "~30% per cycle (saves ~4 agent-execution slots per 13 turns)",
  directorExcluded: "Agent 3 is excluded — it needs full sequential context.",
  dynamicPairs:
    "spawn_pair() additionally creates ad-hoc background agent+brain pairs (pair_<id>), interleaved one turn per cycle without threading.",
} as const;

export const AGENTS_BY_NUMBER: Record<number, AgentSpec> = Object.fromEntries(
  AGENTS.map((a) => [a.number, a]),
);

/** SELF_RESTART_CYCLES = 10 (config.py). run.py re-execs via os.execv. */
export const SELF_RESTART = {
  interval: 10,
  description:
    "Every 10 cycles the orchestrator breaks its loop and run.py re-execs the process (os.execv) so code changes the agents made take effect immediately. Session IDs persist on disk and are resumed.",
} as const;

/** MAX_CONSECUTIVE_CRASHES = 5 (config.py). */
export const CRASH_THRESHOLD = {
  consecutive: 5,
  action: "bulk restart of all agents",
  abortAction: "abort with ExitReason.ERROR + crash report",
} as const;

/**
 * Model selection (config.py): the bootstrap cycle uses the first available
 * high-level model; after cycle 1 or on credit exhaustion the FREE_MODEL is
 * used. Rate limits back off 20 minutes (+30s padding) before retry.
 */
export const MODEL_SELECTION = {
  defaultModel: "swe-1.7",
  bootstrap: ["swe-1.7"],
  free: "swe-1.7",
  creditFallback: "fall back to FREE_MODEL mid-run when credits run out",
  rateLimitBackoff: "1200s default backoff + 30s padding, or the error's reset time",
  promptHints:
    "Keyword hints in the project prompt (webgl, 3d, physics, research, ...) can select the bootstrap model.",
} as const;

/**
 * Each agent is one `devin acp` subprocess hosting TWO ACP sessions:
 * an agent session (does the work) and a brain session (decides the work).
 * 6 agents × 2 sessions = 12 sessions across 6 subprocesses.
 */
export const BRAIN_AGENT_PAIRING = {
  sessionsPerAgent: 2,
  totalSessions: 12,
  subprocesses: 6,
  description:
    "Each agent is paired with a brain ACP session hosted in the same devin acp subprocess. Each turn, the brain sees the project prompt plus the tail of the shared team log and outputs a single focused instruction. That instruction is sent verbatim to the agent session, which executes it with full Devin tools.",
} as const;

/** All agents append to .autopilot/team_log.md; brains read the tail. */
export const SHARED_TEAM_LOG = {
  file: ".autopilot/team_log.md",
  description:
    "Every turn's output is appended to a shared team log from the main thread only (no locks needed). Brains read the tail of the log each turn to ground their next instruction in current project state.",
} as const;

// ─── System architecture (module structure) ────────────────────────────

export interface SystemModule {
  id: string;
  file: string;
  label: string;
  purpose: string;
  layer: "entry" | "core" | "infra" | "state" | "interface";
}

/** Module map of the real repository (ARCHITECTURE.md §1). */
export const SYSTEM_MODULES: SystemModule[] = [
  {
    id: "run",
    file: "run.py",
    label: "Entry / Re-exec Loop",
    purpose:
      "Entry point. CLI parsing plus the outer while-True loop: after the orchestrator returns, inspects ExitReason and either re-execs the process (SELF_RESTART, via os.execv) or exits cleanly.",
    layer: "entry",
  },
  {
    id: "orchestrator",
    file: "autopilot/orchestrator.py",
    label: "Orchestrator",
    purpose:
      "Owns the infinite schedule loop (itertools.cycle(SCHEDULE)), turn dispatch (single or concurrent), error recovery, self-restart trigger, command processing, and dynamic spawn_pair/stop_pair background pairs.",
    layer: "core",
  },
  {
    id: "agents",
    file: "autopilot/agents.py",
    label: "Agent (brain + agent sessions)",
    purpose:
      "Wraps one devin acp subprocess hosting 2 ACP sessions. take_turn() prompts the brain with project prompt + team-log tail, then sends the resulting instruction to the agent session.",
    layer: "core",
  },
  {
    id: "acp",
    file: "autopilot/acp_client.py",
    label: "ACP Client",
    purpose:
      "JSON-RPC over stdio to a devin acp subprocess. Raises typed errors (AcpProcessCrashed, AcpTransportError, AcpTimeoutError, AcpError) that the orchestrator catches for recovery.",
    layer: "infra",
  },
  {
    id: "config",
    file: "autopilot/config.py",
    label: "Config",
    purpose:
      "Agent role prompts, SCHEDULE, CONCURRENT_PAIRS, SELF_RESTART_CYCLES, crash thresholds, model selection, ExitReason enum, devin.exe discovery.",
    layer: "infra",
  },
  {
    id: "sessions",
    file: "autopilot/sessions.py",
    label: "Session Persistence",
    purpose:
      "Atomic JSON write/read (temp file + fsync + os.replace) of agent/brain session IDs so restarts resume the exact same ACP conversations.",
    layer: "state",
  },
  {
    id: "teamlog",
    file: ".autopilot/team_log.md",
    label: "Shared Team Log",
    purpose:
      "Append-only shared memory. Every agent's output lands here; every brain reads the tail for context. Written from the main thread only.",
    layer: "state",
  },
  {
    id: "webgui",
    file: "autopilot/web_gui.py",
    label: "Web Dashboard",
    purpose:
      "Stdlib-only HTTP dashboard on localhost:8765 — live turn/cycle/agent status, transcripts, team log, seed and wrap-up command injection, self-restart countdown.",
    layer: "interface",
  },
  {
    id: "sendcmd",
    file: "send_command.py",
    label: "Command Injection",
    purpose:
      "Standalone CLI writing atomic JSON commands (seed / wrap-up) to .autopilot/commands.json; the orchestrator checks the file between turns.",
    layer: "interface",
  },
  {
    id: "docsagent",
    file: "autopilot/docs_agent.py",
    label: "Docs Generator",
    purpose:
      "Stdlib AST-based generator producing README, ARCHITECTURE, CHANGELOG, and docs/api.md from source docstrings and git log.",
    layer: "interface",
  },
];

// ─── Per-turn data flow (ARCHITECTURE.md §1 "Data flow per turn") ──────

export interface TurnStep {
  index: number;
  actor: string;
  action: string;
  detail: string;
}

export const TURN_FLOW: TurnStep[] = [
  {
    index: 1,
    actor: "Orchestrator",
    action: "Schedule the next agent",
    detail:
      "run() iterates itertools.cycle(SCHEDULE) — one agent number per turn. cycle = (turn−1) // 13 + 1.",
  },
  {
    index: 2,
    actor: "Orchestrator",
    action: "Dispatch the turn",
    detail:
      "If the agent has companions in CONCURRENT_PAIRS, _run_concurrent_turn() submits writer + companions to a ThreadPoolExecutor; otherwise _run_single_turn() runs it directly.",
  },
  {
    index: 3,
    actor: "Brain session",
    action: "Compose the instruction",
    detail:
      "The brain is prompted with the project prompt + tail of team_log.md and replies with a single focused instruction — nothing else.",
  },
  {
    index: 4,
    actor: "Agent session",
    action: "Execute the instruction",
    detail:
      "The instruction is sent verbatim to the agent session, which executes it with full Devin tools: file edits, shell commands, tests.",
  },
  {
    index: 5,
    actor: "Orchestrator",
    action: "Append to the shared log",
    detail:
      "The agent's structured output (RESULT / REVIEW / DIRECTION / ...) is appended to .autopilot/team_log.md from the main thread for all downstream agents.",
  },
  {
    index: 6,
    actor: "Orchestrator",
    action: "Sleep, then next turn",
    detail:
      "time.sleep(turn_delay), commands.json is checked (seed / wrap-up), and the next scheduled agent runs. Every 10th cycle end triggers self-restart.",
  },
];

// ─── Error recovery (ARCHITECTURE.md §6) ───────────────────────────────

export interface RecoveryRule {
  exception: string;
  action: string;
}

export const ERROR_RECOVERY: RecoveryRule[] = [
  { exception: "AcpProcessCrashed", action: "log → stop + restart agent → delay" },
  { exception: "AcpTransportError", action: "log → stop + restart agent → delay" },
  { exception: "AcpTimeoutError", action: "log → delay (transient, no restart)" },
  { exception: "AcpError", action: "log → delay" },
  { exception: "Exception (catch-all)", action: "log → attempt restart → delay" },
  { exception: "KeyboardInterrupt", action: "re-raised → clean exit via run.py" },
];
