# Affiliate Orchestrator Runbook

This runbook defines how the main Codex thread acts as Editorial Orchestrator and Release Gate for the English and Brazilian Portuguese affiliate SEO sites.

## Operating Model

The system uses a hub-and-spoke model:

- The main thread is the Editorial Orchestrator and final Release Gate.
- Scheduled automations and sub-agents are specialists.
- Content-changing work happens in dated task branches.
- Autopublish is controlled: only the orchestrator or release steward may promote a task branch after all hard gates pass.

Do not let multiple agents independently edit `data/site.ts` in the same run. It is the content model hotspot.

## Site Routing

| Site | Base branch | Task branch | Publish target | Remote |
| --- | --- | --- | --- | --- |
| English / intuitiveappz.com | `intuitiveappz/main` | `codex/auto-en-content-YYYY-MM-DD` | `intuitiveappz/main` | `intuitiveappz` |
| Brazil / global21.com.br | `global21/main` | `codex/auto-br-content-YYYY-MM-DD` | `global21/main` | `global21` |

`origin` is not a publishing remote for content operations unless the user explicitly asks for it.

## Lifecycle

1. Preflight
   - Run `git status --short --branch`.
   - Check remotes and upstreams.
   - Fetch only `intuitiveappz` and/or `global21` as needed.
   - Inspect worktrees, including detached Codex worktrees.
   - Detect local task branches ahead of their intended remote.
   - Check `docs/content-ops/editorial-memory.md` against actual branch state.
   - Check the latest GitHub Actions watchdog issue/report when available.
   - Do not delete dirty worktrees before salvage/report.

2. Weekly queue
   - Read the latest scout, quality monitor, strategy audit, and editorial memory.
   - Pick one site, one work mode, and one bounded task.
   - Create a structured brief using `handoff-templates.md`.

3. Specialist work
   - Use opportunity scout for candidates.
   - Use source/fact researcher for evidence packets.
   - Use SEO topic architect for cluster and internal-link design.
   - Use site-specific content producer for draft content.
   - Use technical integrator as the single writer for final structured content.
   - Use compliance/risk reviewer before publish.

4. Integration
   - Create or update only the task branch.
   - Keep English and Brazil changes separate.
   - Update `editorial-memory.md` with concise durable facts when the active branch contains the file.

5. QA gates
   - Source gate: official/primary sources support key claims.
   - Editorial gate: the branch follows exactly one primary work mode.
   - Search-intent gate: no duplicate slugs or keyword cannibalization.
   - Compliance gate: no profit guarantees, minimized risk, unsupported availability, or licensing claims.
   - Internal-link gate: new/refreshed content links naturally into the site graph.
   - Technical gate: lint and TypeScript pass when dependencies allow; build failures are reported honestly.
   - Branch gate: local and intended remote branch match after push.

6. Publish decision
   - If all gates pass, controlled autopublish may promote the task branch into the publish target.
   - If any gate fails, leave the branch review-only and write the blocker report.

7. Post-run
   - Record branch, commit, affected routes, checks, source URLs, publish decision, and follow-ups in the final report.
   - Update editorial memory with durable facts, not verbose logs.

## Failure Handling

| Failure | Action |
| --- | --- |
| Dirty unrelated file such as `next-env.d.ts` | Preserve it; do not stage or revert it |
| Dirty detached worktree | Report path and diff summary; salvage before cleanup |
| Prunable clean worktree | Safe to prune after confirming no path exists |
| Task branch ahead of remote | Push or mark as stuck; do not start a conflicting branch |
| Remote branch mismatch | Fetch intended remote, compare commits, report exact local/remote SHAs |
| Source claim unsupported | Soften or omit the claim |
| Compliance risk | Block autopublish until reviewed |
| Build failure from native optional dependencies | Report separately from content correctness |
| Local machine offline during a scheduled run | Read the cloud watchdog report, verify whether a task branch exists, then resume or record the missed cycle |

## Controlled Autopublish

Autopublish does not mean direct agent publishing. It means:

1. A task branch is produced.
2. The release steward validates all gates.
3. The steward promotes the task branch to the publish target only when gates are green.
4. The steward reports the promoted commit and target branch.

If GitHub PR tooling is unavailable, use git branch promotion and push. Do not rely on `gh`.

## Cloud Watchdog

GitHub Actions watchdog coverage is documented in `docs/content-ops/cloud-reliability.md`. It exists because local Codex automations do not run when the owner's computer is off or asleep.

The watchdog does not write AI content and does not publish. It runs in GitHub, checks the target branch, runs available technical checks, inventories remote task branches, and opens or updates an issue when attention is needed.

If the watchdog reports a blocker, release steward must treat the affected cycle as review-only until the issue is resolved. Do not autopublish over an unresolved watchdog issue.

## Current Known Recovery Items

As of 2026-06-15:

- 2026-06-17: English publish target migrated to `intuitiveappz/main`; `codex/english-version` is legacy and should not be used for new production routing.
- `codex/auto-br-content-2026-06-12` contains local commit `30d800a` but `global21/codex/auto-br-content-2026-06-12` still points at `a3501c4`.
- Detached Codex worktree `~/.codex/worktrees/a8f4/DropDomain Landings 2` contains uncommitted `data/site.ts` changes matching the Binance vs OKX Brazil guide candidate.
- `next-env.d.ts` is an unrelated dirty local file and must not be touched by content automation.
