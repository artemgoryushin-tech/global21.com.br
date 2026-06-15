# Editorial Memory

This file is the shared memory for automated content operations across the English and Brazilian Portuguese affiliate sites.

Keep entries short, dated, and useful for future automation runs.

## Active Automations

| Automation | Cadence | Purpose |
| --- | --- | --- |
| `affiliate-opportunity-scout` | Weekly, Monday 11:00 Moscow time | Discover and rank new content opportunities |
| `affiliate-orchestration-control-tower` | Weekly, Monday before scout | Preflight, weekly queue, branch/publish risk report |
| `english-affiliate-content-growth` | Weekly, Tuesday 10:00 Moscow time | Produce English content improvements |
| `affiliate-content-quality-monitor` | Weekly, Thursday 11:00 Moscow time | Score existing page quality and maintenance priorities |
| `brazil-affiliate-content-growth` | Weekly, Friday 10:00 Moscow time | Produce Brazilian Portuguese content improvements |
| `affiliate-release-steward` | After content-growth days | Verify branches, gates, and controlled autopublish readiness |
| `affiliate-content-strategy-audit` | Monthly, first Monday 11:00 Moscow time | Cross-site strategic audit |

## Current Editorial Rules

- Prefer primary sources over generic third-party blogs.
- Do not publish commission or availability claims without source support.
- Push reviewable branches, not direct `main` updates.
- Keep English and Brazilian Portuguese content separated by branch/site.
- Preserve conservative financial, trading, CFD, forex, crypto, and digital-options risk framing.

## Completed Runs

No automated content-growth runs have been recorded yet.

## Active Branch State

| Branch | Site | State | Note |
| --- | --- | --- | --- |
| `codex/english-version` | English | Tracks `intuitiveappz/codex/english-version` | Upstream corrected on 2026-06-15 |
| `codex/auto-br-content-2026-06-12` | Brazil | Local ahead of remote-tracking branch | Needs release-steward verification before publish |
| `codex/content-ops-playbook-br` | Brazil | Docs branch pushed to `global21` | Review/merge needed for playbook on BR base |

## Publish History

No controlled autopublish events recorded yet.

## Recovered Or Stuck Work

- 2026-06-15: `codex/auto-br-content-2026-06-12` has local commit `30d800a` for a Binance vs OKX Brazil guide, while `global21/codex/auto-br-content-2026-06-12` still points at `a3501c4` after fetch. See `docs/content-ops/recovery-2026-06-15.md`.
- 2026-06-15: detached worktree `~/.codex/worktrees/a8f4/DropDomain Landings 2` has uncommitted `data/site.ts` changes matching the Binance vs OKX candidate. Do not delete until verified.

## Priority Backlog

- Use the first strategy audit to identify stale `lastChecked` pages across both sites.
- Use the first opportunity scout to identify new partner programs with official affiliate pages.
- Use the first quality monitor to score internal-link depth for reviews, rankings, and guides.

## Rejected Or Postponed Opportunities

None recorded yet.

## Rejected Claims

None recorded yet.

## Source Concerns

None recorded yet.

## Manual Review Notes

- Keep an eye on any claims about Brazil availability, licensing, accepted traffic sources, and payout terms.
- Treat clone-script content as brand-safe educational content only; avoid implying affiliation or copying protected assets.
