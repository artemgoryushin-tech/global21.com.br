# Affiliate Content Automation Playbook

This playbook defines how automated content work should improve the English and Brazilian Portuguese affiliate sites.

## Sites And Branches

| Site | Language | Base branch | Remote | Auto branch pattern |
| --- | --- | --- | --- | --- |
| intuitiveappz.com | English | `intuitiveappz/main` | `intuitiveappz` | `codex/auto-en-content-YYYY-MM-DD` |
| global21.com.br / AfiliadosPro Brasil | Brazilian Portuguese | `global21/main` | `global21` | `codex/auto-br-content-YYYY-MM-DD` |

Never push automated content directly to `main`. Push reviewable dated branches.

## Automation Roles

| Role | Purpose | Default output |
| --- | --- | --- |
| Editorial orchestrator | Chooses task, assigns roles, controls branch routing and publish decisions | Weekly brief and final run report |
| Opportunity scout | Finds new brands, programs, clusters, and creative angles | Ranked report, no code changes by default |
| Source/fact researcher | Verifies official sources and claim confidence | Source packet |
| SEO topic architect | Designs clusters, internal links, and cannibalization checks | Topic/link plan |
| English content growth | Produces small English content improvements | Reviewable branch and commit |
| Brazil content growth | Produces small pt-BR content improvements | Reviewable branch and commit |
| Compliance/risk reviewer | Blocks unsupported or unsafe financial/trading claims | Pass/block notes |
| Content quality monitor | Scores existing pages and identifies maintenance priorities | Ranked quality report, tiny fixes only if safe |
| Branch/release steward | Verifies remotes, worktrees, task branches, and publish readiness | Publish/review-only decision |
| Strategy audit | Monthly cross-site editorial planning | Strategic report and next-cycle priorities |

## Orchestrator Model

The main Codex thread is the Editorial Orchestrator and Release Gate. Specialist agents are constrained workers. They can research, draft, localize, score, review, or integrate only within the scope of a structured brief.

The orchestrator owns:

- site selection and work mode;
- task branch naming;
- role assignment;
- source and compliance decisions;
- final integration when `data/site.ts` is involved;
- controlled autopublish decisions;
- final run report and durable memory updates.

Sub-agents must not broaden scope, mix English and Brazil work, publish directly to deploy/base branches, or independently decide unsupported claims are safe.

## Work Modes

Each content-growth run should choose exactly one primary mode:

1. Brand Expansion: add one sourced affiliate program or brand review and connect it to rankings.
2. Existing Content Refresh: refresh 2-3 stale or high-value programs, reviews, or rankings.
3. Comparison or Collection: add or improve a commercial collection such as CPA, RevShare, sub-affiliate, creator traffic, crypto, software, or brand-vs-brand intent.
4. Practical Guide: add or deepen an operational guide with checklists, metrics, mistakes, negotiation angles, traffic validation, or compliance workflow.
5. Internal-Link and SEO Quality Pass: improve metadata, FAQ, JSON-LD inputs, source coverage, contentRoadmap, and internal links without adding thin pages.

Rotate modes over time. Avoid repeatedly publishing the same type of review.

## Candidate Scoring

Score candidate tasks from 1 to 5 before choosing work:

| Criterion | What good looks like |
| --- | --- |
| Commercial intent | Users are likely comparing offers, programs, tools, or launch options |
| Reader usefulness | The page helps affiliates make a better decision |
| Source availability | Official or primary sources exist for key claims |
| Coverage gap | The current site lacks this brand, model, market, or workflow |
| Freshness urgency | Existing `lastChecked` or public terms are old or likely changed |
| Internal-link potential | The topic connects reviews, rankings, guides, calculators, or white-label pages |
| Compliance risk | Risk is understood and can be handled conservatively |
| Implementation effort | The current data model and templates can render the change cleanly |

Choose smaller high-confidence work over broad low-confidence work.

## Source Policy

Use primary or authoritative sources for every factual claim about:

- commission, CPA, RevShare, hybrid, IB, or sub-affiliate terms;
- payout frequency, hold periods, reversals, or qualification rules;
- accepted markets, product availability, and country restrictions;
- accepted or prohibited traffic sources;
- brand bidding, paid ads, influencer, Telegram, or creator rules;
- regulatory, Brazil-specific, or compliance-sensitive statements.

Preferred sources:

- official affiliate or partner pages;
- partner terms, affiliate agreements, help-center pages, FAQs;
- broker, exchange, fintech, or platform official pages;
- regulator, ad-platform, or product-availability references where relevant.

Generic blogs can inspire research but cannot support key factual claims.

If a fact is not confirmed, say it must be confirmed with the affiliate manager. Do not present it as true.

## Branch And Release Safeguards

Use task branches, not permanent role branches:

- English task branches start from `intuitiveappz/main` and use `codex/auto-en-content-YYYY-MM-DD`.
- Brazil task branches start from `global21/main` and use `codex/auto-br-content-YYYY-MM-DD`.
- English publish target is `intuitiveappz/main`.
- Brazil publish target is `global21/main`.

Before any content-changing run:

- inspect `git status --short --branch`;
- fetch only the intended remotes;
- check upstream and remote routing;
- inventory normal, detached, dirty, and prunable worktrees;
- detect local task branches ahead of remote;
- compare branch state with `editorial-memory.md`.

Do not use `origin` for content publishing unless explicitly requested.

## Controlled Autopublish Gates

Autopublish is allowed only after all gates pass:

- source gate;
- editorial work-mode gate;
- search-intent and no-cannibalization gate;
- compliance/risk gate;
- internal-link gate;
- technical gate;
- branch local-vs-remote verification gate;
- memory update gate.

If any gate fails, leave the branch review-only and report the blocker.

## Cloud Reliability Layer

Local Codex automations can be missed when the owner's computer is powered off, asleep, or offline. GitHub Actions watchdog coverage is therefore part of the operating model.

The repository includes:

- `.github/workflows/content-ops-watchdog.yml`;
- `scripts/content-ops-cloud-watchdog.mjs`;
- `docs/content-ops/cloud-reliability.md`.

The watchdog runs in GitHub on the repository default branch, checks the intended content target branch, runs dependency install plus lint/build when possible, inventories remote task branches, and opens a GitHub issue when a blocker needs attention.

This does not replace Codex content production. It prevents silent failures and makes missed or stuck runs visible when the local machine was unavailable.

Release steward rule: if the cloud watchdog opens an issue, treat the affected cycle as blocked or review-only until the issue is read and resolved. Do not autopublish over an unresolved watchdog blocker.

## Minimum Quality SLA

New or refreshed brand/program pages should include:

- unique slug and no keyword cannibalization;
- official URL and official label;
- payout model and commission language grounded in sources;
- traffic notes, compliance notes, pros, cons, facts, and alternatives;
- `sources` with URLs and `lastChecked` only when those facts were checked;
- natural links from at least one ranking and to relevant guides where appropriate.

New guides or comparison pages should include:

- clear search intent and reader problem;
- practical decision framework, not generic explanation;
- at least 3 internal links where contextually appropriate;
- FAQ or structured-data inputs if the template supports them;
- conservative risk and compliance framing for trading, forex, CFDs, crypto, or digital options.

Existing refreshes should include:

- source re-checks for claims being touched;
- `lastChecked` updates only for verified facts;
- removal or softening of unsupported claims;
- improved internal links and alternatives when useful.

## Page Quality Score

Quality monitor runs should score important pages from 1 to 5:

| Dimension | Check |
| --- | --- |
| Source coverage | Are key claims attached to official/current sources? |
| Freshness | Is `lastChecked` or `editorialProfile.lastUpdated` recent enough? |
| Depth | Does the page answer terms, traffic, payout, risks, alternatives, and next steps? |
| Internal links | Does it connect to relevant reviews, rankings, guides, calculators, and white-label pages? |
| Search intent | Does title/H1/intro match likely user intent? |
| Compliance safety | Are claims conservative and risk notices present? |
| Differentiation | Does the page add something beyond a generic affiliate-program summary? |

Pages scoring 3 or lower in any key dimension should become candidates for the next refresh.

## Editorial Memory

Use `docs/content-ops/editorial-memory.md` to record:

- completed automation runs and branch names;
- brands or topics added;
- stale pages that need refresh;
- rejected or postponed opportunities and why;
- source-quality concerns;
- recurring risks or manual-review notes.

Do not let this file become a dumping ground. Keep entries concise and useful for future decisions.

## PR And Run Report

Every content-changing run should report:

- chosen work mode;
- candidate scoring summary;
- branch name and commit hash;
- changed files and affected routes;
- sources used;
- checks run;
- facts intentionally left unclaimed because they were not verified;
- recommended next opportunities.

## Safety Rules

- Do not alter unrelated local changes such as `next-env.d.ts`.
- Do not make broad refactors while doing content updates.
- Do not add pages that templates cannot render cleanly.
- Do not duplicate slugs or create near-identical pages for the same keyword.
- Do not use profit guarantees, easy-income language, or claims that minimize trading risk.
- Do not copy protected brand assets, interfaces, logos, or trade dress for clone-script pages.
- Do not delete dirty detached worktrees before salvage/report.
- Do not publish if local and intended remote branch commits do not match after push.
