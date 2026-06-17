# Cloud Reliability Layer

The local Codex automations are useful while the owner's computer is online. They are not enough as the only scheduler when the computer can be powered off or asleep. The repository therefore includes a GitHub Actions watchdog that runs in GitHub and does not depend on the local machine.

## What Runs In The Cloud

`.github/workflows/content-ops-watchdog.yml` runs scheduled checks in GitHub:

- Monday morning before the scout/control-tower window;
- Tuesday and Friday after the content-growth windows;
- Thursday after the quality-monitor window;
- manually through GitHub Actions workflow dispatch.

The watchdog checks out the intended target branch, installs dependencies, runs lint/build when possible, inspects git state, lists remote task branches, checks required content-ops docs, and writes a report artifact. If it finds blockers, it creates or updates a GitHub issue named `[content-ops] Cloud watchdog report needs attention`.

This makes missed local runs visible even when the local computer was off.

## What This Does Not Do

The watchdog is not an AI content writer. It does not replace the local Codex app automations by itself. It does not publish content. It is a reliability and alerting layer.

Full cloud content generation requires an always-on runner with Codex CLI or another approved AI execution environment, plus the required authentication secrets. Until that exists, the cloud layer should be treated as:

- heartbeat;
- preflight;
- missed-run detector;
- branch/release health monitor;
- build/lint gate;
- issue-based alerting.

## Activation Requirement

GitHub scheduled workflows run from the repository default branch. To activate the watchdog for both sites, the workflow and script must exist on each GitHub repository's default branch:

- `artemgoryushin-tech/intuitiveappz.com`;
- `artemgoryushin-tech/global21.com.br`.

The workflow then infers the target branch:

- `intuitiveappz.com` checks `main`;
- `global21.com.br` checks `main`.

Manual dispatch can override the target branch.

## Operational Rule

If the watchdog opens an issue, the release steward treats the affected run as blocked until reviewed. A watchdog issue does not mean a site was changed. It means the cloud layer found a reason not to trust silent autopublish.

If the local computer was off and no Codex content branch was created, the next online orchestrator run should read the watchdog issue, run preflight, and either resume the missed task or explicitly skip it in `editorial-memory.md`.

## Upgrade Path

For true unattended operation, move from local-only automations to an always-on runner:

1. Keep GitHub Actions watchdog enabled.
2. Add a VPS or persistent self-hosted GitHub runner.
3. Install Node, git, project dependencies, and the Codex execution environment.
4. Store credentials as runner secrets, not in the repository.
5. Run the same orchestrator prompts and branch gates from the VPS.
6. Keep controlled autopublish unchanged: content agents push task branches, and release steward publishes only after all gates pass.
