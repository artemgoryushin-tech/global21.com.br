# Affiliate Agent Roles

This file defines the role architecture for ongoing management of the two affiliate SEO sites.

## Role Map

| Role | Type | Can edit repo? | Owns | Output |
| --- | --- | --- | --- | --- |
| Editorial Orchestrator | Main thread | Yes, final gate only | Priorities, briefs, branch routing, publish decision | Weekly brief, final report |
| Branch / Release Steward | Scheduled automation or sub-agent | Only release metadata/docs unless promoting | Remotes, upstreams, worktrees, local-vs-remote commits | Publish/review decision |
| Opportunity Scout | Scheduled automation | No by default | New brands, clusters, comparisons, guide angles | Ranked opportunity report |
| Source / Fact Researcher | Sub-agent | No | Official sources, terms, payout/traffic/availability evidence | Source packet |
| SEO Topic Architect | Sub-agent | No by default | Topic clusters, internal links, cannibalization checks | Cluster/link plan |
| English Content Producer | Scheduled automation or worker | Yes, task branch only | English copy/content entries | Draft or task branch |
| Brazil Content Producer / Localizer | Scheduled automation or worker | Yes, task branch only | pt-BR copy/content entries | Draft or task branch |
| Technical Content Integrator | Main or single worker | Yes, task branch only | `data/site.ts`, route compatibility, structured inputs | Final content diff |
| Compliance / Risk Reviewer | Sub-agent or main gate | No by default | Trading/forex/crypto/CFD claim safety | Block/approve notes |
| Quality Monitor | Scheduled automation | No by default | Page quality scoring and maintenance priorities | Ranked quality report |
| Memory Scribe | Main or steward | Yes, docs only | Durable operational memory | Concise memory entries |

## Single-Writer Rule

Only one role may perform final content integration for a run. This prevents conflicts in `data/site.ts`.

Allowed writers per run:

- English content branch: English Content Producer or Technical Content Integrator, not both independently.
- Brazil content branch: Brazil Content Producer / Localizer or Technical Content Integrator, not both independently.
- Memory-only update: Memory Scribe may edit `docs/content-ops/editorial-memory.md`.

## Role Boundaries

### Editorial Orchestrator

Owns:

- site selection;
- work mode selection;
- structured briefs;
- role assignment;
- source/compliance/publish decisions;
- conflict resolution;
- final report.

Does not:

- publish unsupported claims;
- let agents broaden scope without a new brief;
- use `origin` as a content publishing remote unless explicitly requested.

### Branch / Release Steward

Owns:

- `git status --short --branch`;
- intended remote and upstream checks;
- targeted fetches for `intuitiveappz` and `global21`;
- worktree and detached-worktree inventory;
- task branch local-vs-remote verification;
- controlled autopublish after gates pass.

Blocks publish when:

- branch is not on intended remote;
- local and remote commits differ unexpectedly;
- checks failed or were skipped without explanation;
- compliance/source gates are not green;
- unrelated dirty files are staged.

### Source / Fact Researcher

Returns a source packet:

- claim;
- source URL;
- source type;
- confidence: `verified`, `partial`, or `avoid`;
- note for wording.

Never writes final copy.

### SEO Topic Architect

Returns:

- target intent;
- primary and secondary keywords;
- existing page conflicts;
- internal links to add;
- affected clusters;
- suggested route/slug.

Never creates thin pages just because a keyword exists.

### Content Producers

Own:

- copy drafts;
- structured content entries;
- natural internal links;
- language quality.

Must not:

- invent payout, market, or availability facts;
- add unsupported legal/compliance claims;
- mix English and pt-BR content;
- change shared components unless explicitly briefed.

### Compliance / Risk Reviewer

Blocks:

- profit guarantees;
- easy-income claims;
- minimized trading/crypto/CFD risk;
- unsupported Brazil availability or licensing language;
- clone-script text implying affiliation or copying protected assets.

### Memory Scribe

Writes only durable memory:

- completed run;
- branch and commit;
- published/review-only status;
- rejected opportunities;
- source concerns;
- manual-review notes.

Avoid verbose logs.

## Standard Handoff Contract

Every role receives a brief and returns a report using `handoff-templates.md`.
