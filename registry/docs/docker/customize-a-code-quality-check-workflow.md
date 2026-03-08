Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[How to build an AI-powered code quality workflow with SonarQube and E2B](https://docs.docker.com/guides/github-sonarqube-sandbox/)

Build AI-powered code quality workflows using E2B sandboxes with Docker's MCP catalog to automate GitHub and SonarQube integration.

DevOps

40 minutes

[1](https://docs.docker.com/guides/github-sonarqube-sandbox/workflow/)

[Build workflow](https://docs.docker.com/guides/github-sonarqube-sandbox/workflow/)

[2](https://docs.docker.com/guides/github-sonarqube-sandbox/customize/)

[Customize workflow](https://docs.docker.com/guides/github-sonarqube-sandbox/customize/)

[3](https://docs.docker.com/guides/github-sonarqube-sandbox/troubleshoot/)

[Troubleshoot](https://docs.docker.com/guides/github-sonarqube-sandbox/troubleshoot/)

Resources:

- [E2B Documentation](https://e2b.dev/docs)
- [Docker MCP Catalog](https://hub.docker.com/mcp)
- [Sandboxes](https://docs.docker.com/ai/mcp-catalog-and-toolkit/sandboxes/)

[« Back to all guides](/guides/)

# Customize a code quality check workflow

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Now that you understand the basics of automating code quality workflows with GitHub and SonarQube in E2B sandboxes, you can customize the workflow for your needs.

## [Focus on specific quality issues](#focus-on-specific-quality-issues)

Modify the prompt to prioritize certain issue types:

TypeScript Python

```typescript
const prompt = `Using SonarQube and GitHub MCP tools:

Focus only on:
- Security vulnerabilities (CRITICAL priority)
- Bugs (HIGH priority)
- Skip code smells for this iteration

Analyze "${repoPath}" and fix the highest priority issues first.`;
```

```python
prompt = f"""Using SonarQube and GitHub MCP tools:

Focus only on:
- Security vulnerabilities (CRITICAL priority)
- Bugs (HIGH priority)
- Skip code smells for this iteration

Analyze "{repo_path}" and fix the highest priority issues first."""
```

## [Integrate with CI/CD](#integrate-with-cicd)

Add this workflow to GitHub Actions to run automatically on pull requests:

TypeScript Python

```yaml
name: Automated quality checks
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
      - run: npm install
      - run: npx tsx 06-quality-gated-pr.ts
        env:
          E2B_API_KEY: ${{ secrets.E2B_API_KEY }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONARQUBE_TOKEN: ${{ secrets.SONARQUBE_TOKEN }}
          GITHUB_OWNER: ${{ github.repository_owner }}
          GITHUB_REPO: ${{ github.event.repository.name }}
          SONARQUBE_ORG: your-org-key
```

```yaml
name: Automated quality checks
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.8"
      - run: pip install e2b python-dotenv
      - run: python 06_quality_gated_pr.py
        env:
          E2B_API_KEY: ${{ secrets.E2B_API_KEY }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONARQUBE_TOKEN: ${{ secrets.SONARQUBE_TOKEN }}
          GITHUB_OWNER: ${{ github.repository_owner }}
          GITHUB_REPO: ${{ github.event.repository.name }}
          SONARQUBE_ORG: your-org-key
```

## [Filter by file patterns](#filter-by-file-patterns)

Target specific parts of your codebase:

TypeScript Python

```typescript
const prompt = `Analyze code quality but only consider:
- Files in src/**/*.js
- Exclude test files (*.test.js, *.spec.js)
- Exclude build artifacts in dist/

Focus on production code only.`;
```

```python
prompt = """Analyze code quality but only consider:
- Files in src/**/*.js
- Exclude test files (*.test.js, *.spec.js)
- Exclude build artifacts in dist/

Focus on production code only."""
```

## [Set quality thresholds](#set-quality-thresholds)

Define when PRs should be created:

TypeScript Python

```typescript
const prompt = `Quality gate thresholds:
- Only create PR if:
  * Bug count decreases by at least 1
  * No new security vulnerabilities introduced
  * Code coverage does not decrease
  * Technical debt reduces by at least 15 minutes

If changes do not meet these thresholds, explain why and skip PR creation.`;
```

```python
prompt = """Quality gate thresholds:
- Only create PR if:
  * Bug count decreases by at least 1
  * No new security vulnerabilities introduced
  * Code coverage does not decrease
  * Technical debt reduces by at least 15 minutes

If changes do not meet these thresholds, explain why and skip PR creation."""
```

## [Next steps](#next-steps)

Learn how to troubleshoot common issues.

[Troubleshoot code quality workflows »](https://docs.docker.com/guides/github-sonarqube-sandbox/troubleshoot/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/github-sonarqube-sandbox/customize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fgithub-sonarqube-sandbox%2fcustomize%2f\&labels=status%2Ftriage)

Table of contents
