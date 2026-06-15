# Affiliate Agent Handoff Templates

Use these templates for orchestrated runs and sub-agent delegation.

## Agent Brief

```text
site:
language:
base branch:
task branch:
publish target:
work mode:
candidate/task:
target routes:
files allowed:
files forbidden:
source requirements:
claims to verify:
claims to avoid:
internal-link requirements:
compliance notes:
quality gates:
expected output:
deadline/cadence:
```

## Source Packet

```text
candidate/topic:
sources:
  - url:
    source type:
    supports claims:
    confidence: verified | partial | avoid
verified claims:
partially verified claims:
claims to avoid:
recommended wording:
manual review notes:
```

## Content Producer Report

```text
summary:
work mode:
changed/proposed files:
affected routes:
sources used:
verified claims:
unverified claims softened or omitted:
internal links added:
internal links still recommended:
compliance risks:
checks run:
next recommendation:
```

## Compliance Review Report

```text
branch:
affected routes:
status: pass | needs changes | block
blocked claims:
softening required:
risk notices present:
unsupported availability/licensing statements:
clone-script brand-safety issues:
final notes:
```

## Release Steward Report

```text
site:
task branch:
publish target:
local commit:
remote task commit:
target commit before publish:
checks:
source gate:
compliance gate:
technical gate:
memory update:
decision: autopublish | review-only | blocked
publish commit:
follow-up:
```

## Final Run Report

```text
orchestrator summary:
site:
work mode:
branch:
commit:
publish decision:
affected routes:
changed files:
sources:
checks:
facts not claimed:
memory updates:
risks:
next opportunities:
```
