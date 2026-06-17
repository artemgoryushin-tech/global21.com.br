#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { env } from "node:process";

function run(command, args, options = {}) {
  try {
    const stdout = execFileSync(command, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      ...options
    });
    return { ok: true, output: stdout.trim() };
  } catch (error) {
    const stdout = error.stdout ? String(error.stdout) : "";
    const stderr = error.stderr ? String(error.stderr) : "";
    return {
      ok: false,
      output: `${stdout}${stderr}`.trim(),
      code: typeof error.status === "number" ? error.status : 1
    };
  }
}

function commandBlock(value) {
  return value && value.length > 0 ? `\n\`\`\`\n${value}\n\`\`\`\n` : "\n_No output._\n";
}

function table(rows) {
  if (rows.length === 0) {
    return "_None found._\n";
  }

  return [
    "| Branch | Commit | Date | Subject |",
    "| --- | --- | --- | --- |",
    ...rows.map((row) => `| \`${row.branch}\` | \`${row.commit}\` | ${row.date} | ${row.subject.replaceAll("|", "\\|")} |`)
  ].join("\n");
}

function readJson(path) {
  if (!existsSync(path)) {
    return null;
  }

  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

const now = new Date();
const repository = env.GITHUB_REPOSITORY || "local";
const targetBranch = env.TARGET_BRANCH || run("git", ["branch", "--show-current"]).output || "unknown";
const siteKey =
  env.SITE_KEY ||
  (repository.toLowerCase().includes("global21")
    ? "br"
    : repository.toLowerCase().includes("intuitiveappz")
      ? "en"
      : targetBranch === "main"
        ? "br"
        : "en");

const expected = siteKey === "br"
  ? {
      site: "global21.com.br / AfiliadosPro Brasil",
      publishTarget: "global21/main",
      targetBranch: "main",
      taskPrefix: "origin/codex/auto-br-content-"
    }
  : {
      site: "intuitiveappz.com",
      publishTarget: "intuitiveappz/main",
      targetBranch: "main",
      taskPrefix: "origin/codex/auto-en-content-"
    };

const report = [];
const attention = [];
const warnings = [];

report.push(`# Affiliate Content Ops Cloud Watchdog`);
report.push("");
report.push(`- Time: ${now.toISOString()}`);
report.push(`- Repository: \`${repository}\``);
report.push(`- Site: ${expected.site}`);
report.push(`- Target branch checked: \`${targetBranch}\``);
report.push(`- Expected publish target: \`${expected.publishTarget}\``);
report.push("");

if (targetBranch !== expected.targetBranch) {
  attention.push(`Expected target branch \`${expected.targetBranch}\`, but checked \`${targetBranch}\`.`);
}

const status = run("git", ["status", "--short", "--branch"]);
const porcelain = run("git", ["status", "--porcelain"]);
const remotes = run("git", ["remote", "-v"]);
const head = run("git", ["log", "-1", "--format=%h %ci %s"]);
const diffCheck = run("git", ["diff", "--check"]);

report.push("## Git State");
report.push(`Latest commit:${commandBlock(head.output)}`);
report.push(`Status:${commandBlock(status.output)}`);
report.push(`Remotes:${commandBlock(remotes.output)}`);

if (porcelain.output) {
  attention.push("Target checkout is dirty after watchdog checkout/checks.");
}

if (!diffCheck.ok) {
  attention.push("git diff --check failed.");
  report.push("## Whitespace Check");
  report.push(commandBlock(diffCheck.output));
}

const docs = [
  "docs/content-ops/automation-playbook.md",
  "docs/content-ops/orchestrator-runbook.md",
  "docs/content-ops/agent-roles.md",
  "docs/content-ops/handoff-templates.md",
  "docs/content-ops/editorial-memory.md"
];
const missingDocs = docs.filter((path) => !existsSync(path));

report.push("## Content Ops Docs");
if (missingDocs.length > 0) {
  warnings.push(`Missing content ops docs on target branch: ${missingDocs.map((path) => `\`${path}\``).join(", ")}.`);
  report.push(missingDocs.map((path) => `- Missing: \`${path}\``).join("\n"));
} else {
  report.push("All required content ops docs are present.");
}

const packageJson = readJson("package.json");
if (!packageJson) {
  attention.push("package.json is missing or invalid.");
} else {
  report.push("");
  report.push("## Package Scripts");
  report.push(`- lint: ${packageJson.scripts?.lint ? "`present`" : "`missing`"}`);
  report.push(`- build: ${packageJson.scripts?.build ? "`present`" : "`missing`"}`);
}

const checkOutcomes = [
  ["npm ci", env.CHECK_NPM_CI_OUTCOME],
  ["lint", env.CHECK_LINT_OUTCOME],
  ["build", env.CHECK_BUILD_OUTCOME]
].filter(([, outcome]) => outcome);

if (checkOutcomes.length > 0) {
  report.push("");
  report.push("## GitHub Action Checks");
  for (const [name, outcome] of checkOutcomes) {
    report.push(`- ${name}: \`${outcome}\``);
    if (outcome !== "success" && outcome !== "skipped") {
      attention.push(`${name} finished with outcome \`${outcome}\`.`);
    }
  }
}

const taskRefs = run("git", [
  "for-each-ref",
  "--format=%(refname:short)|%(objectname:short)|%(committerdate:iso-strict)|%(contents:subject)",
  "refs/remotes/origin/codex"
]);

const taskRows = taskRefs.ok
  ? taskRefs.output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [branch, commit, date, ...subjectParts] = line.split("|");
        return {
          branch,
          commit,
          date,
          subject: subjectParts.join("|") || ""
        };
      })
      .filter((row) => row.branch.startsWith(expected.taskPrefix))
  : [];

const staleTaskRows = taskRows.filter((row) => {
  const date = new Date(row.date);
  if (Number.isNaN(date.getTime())) {
    return false;
  }

  const ageDays = (now.getTime() - date.getTime()) / 86_400_000;
  return ageDays > 14;
});

report.push("");
report.push("## Remote Task Branches");
report.push(table(taskRows));

if (staleTaskRows.length > 0) {
  warnings.push(`Found ${staleTaskRows.length} task branch(es) older than 14 days.`);
}

const memoryPath = "docs/content-ops/editorial-memory.md";
if (existsSync(memoryPath)) {
  const memory = readFileSync(memoryPath, "utf8");
  const mentionsOriginAsPublish = /origin\/(main|codex\/english-version)|publish target.*origin/i.test(memory);
  if (mentionsOriginAsPublish) {
    attention.push("editorial-memory may mention origin as a publish target. Review routing.");
  }
}

if (warnings.length > 0) {
  report.push("");
  report.push("## Warnings");
  report.push(warnings.map((item) => `- ${item}`).join("\n"));
}

if (attention.length > 0) {
  report.push("");
  report.push("## Needs Attention");
  report.push(attention.map((item) => `- ${item}`).join("\n"));
} else {
  report.push("");
  report.push("## Decision");
  report.push("No blocking watchdog issues were detected. Continue normal content ops.");
}

const reportText = `${report.join("\n")}\n`;
writeFileSync("content-ops-watchdog-report.md", reportText);

if (env.GITHUB_STEP_SUMMARY) {
  appendFileSync(env.GITHUB_STEP_SUMMARY, reportText);
}

if (env.GITHUB_OUTPUT) {
  appendFileSync(env.GITHUB_OUTPUT, `needs_attention=${attention.length > 0 ? "true" : "false"}\n`);
  appendFileSync(env.GITHUB_OUTPUT, `report_path=content-ops-watchdog-report.md\n`);
  appendFileSync(env.GITHUB_OUTPUT, `issue_title=[content-ops] Cloud watchdog report needs attention\n`);
}

console.log(reportText);
