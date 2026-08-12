/**
 * Research paper content blocks for the Devin Autopilot study.
 *
 * Sole data source: `src/data/agents.ts` (AGENTS, TURN_ORDER,
 * CONCURRENT_PAIRS, SELF_RESTART, CRASH_THRESHOLD, MODEL_SELECTION,
 * BRAIN_AGENT_PAIRING, SHARED_TEAM_LOG).
 *
 * Voice: third-person passive for methodology, first-person plural for
 * discussion, no superlatives, no exclamation marks. Technical terms are
 * defined on first use.
 */

export interface PaperSection {
  /** Stable identifier used by components for routing and anchoring. */
  id: string;
  /** Human-readable section heading. */
  title: string;
  /** Section body. Markdown-style plain text; components handle rendering. */
  content: string;
}

const ABSTRACT = `Autonomous software improvement — the ability of a system to modify its own code without human intervention — remains an open problem. This paper presents a multi-agent architecture that addresses it through structural separation of concerns. Six agents (Coder, Reviewer, Director, Quality, Documentation, Ideas) operate in a fixed 13-turn cycle, each owning a single responsibility. Each agent is paired with a brain session that composes focused instructions from the project prompt and a shared team log. Two concurrent pairs allow read-only companions to run alongside the primary writer, enabling parallel inspection and ideation. Process resilience is handled through periodic self-restart (every 10 cycles, the process re-execs with the latest code) and crash detection (after 5 consecutive failures, a bulk restart is attempted; if crashes persist, the loop aborts with a diagnostic report). Model selection adapts to resource constraints, falling back from high-level to free models when credits are exhausted. The results section of this paper is unusual: this site is the output of the system it describes.`;

const METHODOLOGY = `The system is composed of six agents, each assigned a single concern. The Coder (agent 1) implements instructions directly — files are written, commands are run, tests are executed. The Reviewer (agent 2) inspects changed files, runs checks, and flags gaps. The Director (agent 3) owns project direction, compares progress against the stated goal, cuts scope creep, and assigns tasks. The Quality agent (agent 4) is responsible for durability: tests, architecture health, technical debt, security, and documentation. The Documentation agent (agent 6) maintains README, ARCHITECTURE, CHANGELOG, and per-module docs. The Ideas agent (agent 7) generates two to four new proposals per turn to keep the project evolving.

Agents are scheduled in a fixed 13-turn cycle: [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7]. The Director opens and closes each cycle, providing directional framing at both ends. The Coder and Reviewer alternate through the middle, producing and inspecting work in tight loops.

Each agent is paired with a brain session that composes the instruction for that agent's turn. The brain sees the project prompt and the recent team activity log, then outputs a focused instruction. The agent executes it. This separation allows instruction quality to be tuned independently of execution.

Two concurrent pairs are defined: agent 1 (Coder) runs with companions [2, 4] (Reviewer, Quality), and agent 6 (Documentation) runs with companion [7] (Ideas). Read-only companions run simultaneously with the primary writer, enabling parallel inspection, quality monitoring, and ideation without blocking the write turn.

All agents read and write to a shared team log (team_log.md). Each turn's output is appended. Brains read the last N characters to understand recent context, providing continuity across turns without a shared memory store.`;

const ARCHITECTURE = `The architecture rests on three principles: single-responsibility agents, a fixed turn schedule, and a shared log.

Single-responsibility agents ensure that no agent is asked to do two things. The Coder writes; the Reviewer inspects; the Director directs; the Quality agent guards durability; the Documentation agent records; the Ideas agent proposes. Concerns are not shared — they are sequenced through the turn cycle. This eliminates the coordination overhead of role negotiation: each agent knows its scope before its turn begins.

The fixed 13-turn cycle produces coherent progress without central planning. The schedule [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7] repeats indefinitely. The Director occupies the first and sixth slots, bookending each half of the cycle with directional input. The Coder and Reviewer alternate through the middle (turns 2-5 and 7-10), producing and inspecting in tight loops. Quality (turn 11), Documentation (turn 12), and Ideas (turn 13) close the cycle with durability, records, and forward-looking proposals. The repetition is the point: emergent behavior arises from simple rules applied consistently, not from adaptive planning.

The shared team log is the system's only state. There is no shared memory, no message bus, no database. Each turn appends its output to team_log.md. Brains read the tail of the log for context. This makes the system crash-resilient: state is a single append-only file that survives process restarts. It also makes the system auditable — the entire history of decisions and actions is in one file.

Brain-agent pairing separates instruction composition from instruction execution. The brain is a language model session that sees the project prompt and recent log entries; it outputs a focused instruction. The agent is a separate session that executes the instruction. This separation means instruction quality can be improved (by improving the brain) without changing the execution layer, and execution behavior can be constrained (by limiting the agent's tools) without changing the instruction layer.`;

const RESULTS = `The system described in this paper was applied to the construction of this website. The research paper you are currently reading, the 3D scene that surrounds it, the data files that define the agent roster, and the build configuration that deploys it were all produced by the six-agent architecture operating in the 13-turn cycle.

This is a self-referential result: the site is the output of the system it describes. The Abstract, Methodology, Architecture, and Discussion sections were drafted by the Coder, reviewed by the Reviewer, directed by the Director, checked by the Quality agent, documented by the Documentation agent, and enriched with creative proposals by the Ideas agent — all following the turn schedule [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7].

The team log (team_log.md) records every turn. It is the primary artifact: not a byproduct of the system, but the system's state made visible. A reader who inspects the log can trace any decision in the site back to the turn that produced it.

## Observed Outcomes

The system ran for 15 cycles to produce this site. The build passed on cycle 14. The intervening 13 cycles of red builds exposed four distinct failure modes that the architecture either absorbed or failed to absorb:

The groundhog-loop failure mode. The Coder (agent 1) retried the npm install command over 30 times across 14 cycles without recognizing that the exec tool was environment-wide broken, not transiently failing. Each retry was rejected with "Permission request failed due to a connection error." The Coder continued retrying the same command in the next turn despite the Reviewer flagging the pattern. The architecture has no mechanism to detect or break a retry loop — the brain composes an instruction, the agent executes it, and if the execution environment is broken, the agent simply tries again next turn. The Director eventually broke the loop by directing the Coder to use the edit tool instead of exec, but this required the Director to override the implicit assumption that the Coder's tool selection was correct.

Concurrent-pair efficiency. The Coder/Reviewer pair (agents 1 and 2) ran concurrently for 14 cycles. The Reviewer independently verified every code change the Coder made — reading the same files, running the same greps, confirming the same neutralizations. This caught real errors (SVG attribute casing across 4 files, an invalid VisibleTaskStrategy value, a duplicate object key) but also produced significant redundancy: the Reviewer's verification of stub neutralization was confirmed 4+ consecutive times with identical results. The concurrent-pair design reduced errors but did not reduce work — it doubled it. Whether this tradeoff is favorable depends on the cost of an undetected error relative to the cost of redundant verification.

Director stalemate-breaking. The Director (agent 3) progressively shifted strategy across 14 cycles: retry exec (cycles 1-9), accept exec is broken and use edit-tool workarounds (cycle 10), neutralize dead code to eliminate error surface (cycles 11-12), patch the build tooling itself to capture invisible errors (cycle 13), fix the revealed lint errors (cycle 14). Each shift was a directional override — the Coder and Reviewer were stuck in a tight loop that could not escape the exec block on their own. The Director's progressive strategy shifts were the mechanism by which the system escaped the groundhog-loop. Without the Director turn, the system would still be retrying npm install.

Brain-agent separation in practice. Each agent turn began with a brain-composed instruction derived from the project prompt and the tail of team_log.md. The brains consistently produced focused, scoped instructions ("neutralize the 3 stub files", "fix the 4 lint errors", "rewrite RESULTS with real 14-cycle data"). The agents executed those instructions literally. The separation worked as designed: instruction quality was tuned (the Director's brain composed progressively different strategies) without changing the execution layer (the Coder's tools remained constant). The brains never instructed an agent to verify whether the exec tool was fundamentally broken — they assumed the environment was functional. This is a limitation of the brain's context window, not the architecture.

No quantitative code-quality metrics are reported. The system does not measure code coverage, defect density, or cycle efficiency. The result is the artifact itself — a website that describes the architecture that built it, built by that architecture, including an honest account of where the architecture failed.`;

const DISCUSSION = `We observe that the fixed-cycle architecture produces steady forward motion without requiring adaptive planning. The repetition of the 13-turn schedule creates a rhythm: direction, implementation, inspection, direction, implementation, inspection, then quality, documentation, and ideas. We did not tune the schedule — it was specified once and has not changed. The system's behavior emerges from that specification, not from feedback-driven adjustment.

We note that brain-agent pairing is the architecture's most consequential design decision. By separating instruction composition from execution, we allow the brain to be verbose, contextual, and exploratory while the agent remains constrained to its tools. The brain can propose; the agent disposes. This mirrors the separation between architecture and implementation in traditional software — but here both layers are automated.

## Failure Modes Observed

The 14-cycle build stall exposed failure modes that the architecture's design did not anticipate:

Environmental fragility. The exec tool was broken environment-wide for the entire 14-cycle duration. The architecture assumes a functional execution environment — agents run commands, commands return output, output informs the next turn. When the environment is broken, the system has no fallback. The Coder retried the same failing command over 30 times because the brain kept composing instructions that assumed exec would work. The architecture lacks a health-check mechanism: no agent is responsible for verifying that the execution environment itself is functional before attempting work. A production deployment would need an environment-health agent or a pre-flight check that gates the cycle.

The cost of tight coder/reviewer loops when the blocker is environmental. The Coder and Reviewer ran in a tight loop for 14 cycles, producing and inspecting code changes that could not be verified via build. The Reviewer's static analysis was correct — it found no type errors because there were none — but static analysis cannot confirm a build passes. The pair produced high-confidence inferences ("the build should be green") without the ability to confirm them. This is the fundamental limitation of a coder/reviewer pair without an executor: they can agree the code is correct, but they cannot prove it runs.

When the director must override the turn schedule. The Director's progressive strategy shifts (retry, workaround, neutralize, diagnose, fix) were the mechanism that escaped the groundhog-loop. But the Director only acts on turns 1 and 6 of each 13-turn cycle. Between those turns, the Coder and Reviewer were free to continue the failing retry loop. The architecture does not allow the Director to interrupt a cycle mid-turn or issue a standing directive that persists across turns. Each Director turn re-derives the strategy from the team log tail. A standing-directive mechanism — where the Director's instruction persists until explicitly revoked — would have broken the groundhog-loop earlier.

Concurrent-pair redundancy versus efficiency. The Coder/Reviewer concurrent pair (agents 1 and 2 with companions 4) ran every cycle. The Reviewer's verification of the Coder's work was valuable when changes were made (it caught SVG casing, strategy values, duplicate keys) but redundant when no changes were made (it verified stub neutralization 4+ consecutive times with identical results). The architecture does not distinguish between "changes were made, verify them" and "no changes were made, skip verification." A diff-aware Reviewer — one that only verifies files that changed since its last turn — would eliminate the redundancy without losing the error-catching benefit.

## Limitations

The system operates on a single project at a time. Multi-project orchestration — where the same agent pool serves multiple repositories — is not implemented. The architecture does not include human-in-the-loop checkpoints: once a cycle begins, it runs to completion without pausing for approval. This is acceptable for a personal website but would require gating for production systems. The 14-cycle build stall would have been caught immediately by a human who noticed the exec tool was broken — the system lost 14 cycles to a problem a human would have diagnosed in one.

Model cost is a constraint. The system relies on language model inference for both brain and agent sessions. Bootstrap uses high-level models (opus, sonnet); when credits are exhausted, the system falls back to a free model (glm). The quality of output under the free model is lower, and the system does not currently detect or compensate for this degradation beyond automatic rate-limit backoff.

The free-model quality ceiling is real. Complex implementation tasks (3D shader code, intricate SVG layouts) that are feasible under high-level models may fail or produce lower-quality output under the free model. The system does not flag this — it continues operating, potentially accumulating technical debt that the Quality agent detects only in retrospect.

No formal verification is performed. The Quality agent runs tests and linting, but there is no proof that the system's output is correct, only that it passes the checks that were written. The checks themselves are written by the Coder, creating a self-certification loop. The 14-cycle build stall is itself an example: the system could not verify its own build passed until the environment provided an executor.

## Future Work

Environment-health gating. A pre-flight check that verifies the execution environment is functional before the cycle begins. If exec is broken, the system should detect this on turn 1 and pivot to edit-tool-only work for the remainder of the cycle, rather than discovering it through 30 failed retries.

Standing directives. A mechanism for the Director to issue a directive that persists across turns until explicitly revoked. This would allow the Director to break groundhog-loops without waiting for its next scheduled turn.

Diff-aware review. The Reviewer should only verify files that changed since its last turn. This eliminates redundant verification without losing error-catching benefit.

Multi-project orchestration is the most immediate extension. The 13-turn cycle could be applied per-project with a scheduler that rotates between active projects, or the agent pool could be expanded with project-specialized agents.

Human-in-the-loop checkpoints could be inserted at cycle boundaries. The Director turn (turn 1 and turn 6 of each cycle) is the natural insertion point: a human could approve, modify, or reject the directional framing before the cycle proceeds.

Agent specialization is unexplored. The current six agents are generalists within their concern. A larger pool of specialized agents (e.g., a Security agent, a Performance agent, an Accessibility agent) could be added without changing the cycle structure — they would simply take additional turns.

The shared team log is currently a flat file. A structured log (with typed entries, searchable metadata, and retention policies) would improve the brains' ability to extract relevant context from history. The current "last N characters" approach is a crude approximation of relevance — and during the 14-cycle stall, the log grew to over 14,000 lines, making the tail increasingly noisy.`;

export const PAPER_SECTIONS: PaperSection[] = [
  { id: "abstract", title: "Abstract", content: ABSTRACT },
  { id: "methodology", title: "Methodology", content: METHODOLOGY },
  { id: "architecture", title: "Architecture", content: ARCHITECTURE },
  { id: "results", title: "Results", content: RESULTS },
  { id: "discussion", title: "Discussion", content: DISCUSSION },
];
