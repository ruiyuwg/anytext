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

# Troubleshoot code quality workflows

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This page covers common issues you might encounter when building code quality workflows with E2B sandboxes and MCP servers, along with their solutions.

If you're experiencing problems not covered here, check the [E2B documentation](https://e2b.dev/docs).

## [MCP tools not available](#mcp-tools-not-available)

Issue: Claude reports `I don't have any MCP tools available`.

Solution:

1. Verify you're using the authorization header:

   ```plaintext
   --header "Authorization: Bearer ${mcpToken}"
   ```

2. Check you're waiting for MCP initialization.

   ```typescript
   // typescript
   await new Promise((resolve) => setTimeout(resolve, 1000));
   ```

   ```python
   # python
   await asyncio.sleep(1)
   ```

3. Ensure credentials are in both `envs` and `mcp` configuration:

   ```typescript
   // typescript
   const sbx = await Sandbox.betaCreate({
     envs: {
       ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
       GITHUB_TOKEN: process.env.GITHUB_TOKEN!,
       SONARQUBE_TOKEN: process.env.SONARQUBE_TOKEN!,
     },
     mcp: {
       githubOfficial: {
         githubPersonalAccessToken: process.env.GITHUB_TOKEN!,
       },
       sonarqube: {
         org: process.env.SONARQUBE_ORG!,
         token: process.env.SONARQUBE_TOKEN!,
         url: "https://sonarcloud.io",
       },
     },
   });
   ```

   ```python
   # python
   sbx = await AsyncSandbox.beta_create(
       envs={
           "ANTHROPIC_API_KEY": os.getenv("ANTHROPIC_API_KEY"),
           "GITHUB_TOKEN": os.getenv("GITHUB_TOKEN"),
           "SONARQUBE_TOKEN": os.getenv("SONARQUBE_TOKEN"),
       },
       mcp={
           "githubOfficial": {
               "githubPersonalAccessToken": os.getenv("GITHUB_TOKEN"),
           },
           "sonarqube": {
               "org": os.getenv("SONARQUBE_ORG"),
               "token": os.getenv("SONARQUBE_TOKEN"),
               "url": "https://sonarcloud.io",
           },
       },
   )
   ```

4. Verify your API tokens are valid and have proper scopes.

## [GitHub tools work but SonarQube doesn't](#github-tools-work-but-sonarqube-doesnt)

Issue: GitHub MCP tools load but SonarQube tools don't appear.

Solution: SonarQube MCP server requires GitHub to be configured simultaneously. Always include both servers in your sandbox configuration, even if you're only testing one.

TypeScript Python

```typescript
// Include both servers even if only using one
const sbx = await Sandbox.betaCreate({
  envs: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN!,
    SONARQUBE_TOKEN: process.env.SONARQUBE_TOKEN!,
  },
  mcp: {
    githubOfficial: {
      githubPersonalAccessToken: process.env.GITHUB_TOKEN!,
    },
    sonarqube: {
      org: process.env.SONARQUBE_ORG!,
      token: process.env.SONARQUBE_TOKEN!,
      url: "https://sonarcloud.io",
    },
  },
});
```

```python
# Include both servers even if only using one
sbx = await AsyncSandbox.beta_create(
    envs={
        "ANTHROPIC_API_KEY": os.getenv("ANTHROPIC_API_KEY"),
        "GITHUB_TOKEN": os.getenv("GITHUB_TOKEN"),
        "SONARQUBE_TOKEN": os.getenv("SONARQUBE_TOKEN"),
    },
    mcp={
        "githubOfficial": {
            "githubPersonalAccessToken": os.getenv("GITHUB_TOKEN"),
        },
        "sonarqube": {
            "org": os.getenv("SONARQUBE_ORG"),
            "token": os.getenv("SONARQUBE_TOKEN"),
            "url": "https://sonarcloud.io",
        },
    },
)
```

## [Claude can't access private repositories](#claude-cant-access-private-repositories)

Issue: "I don't have access to that repository".

Solution:

1. Verify your GitHub token has `repo` scope (not just `public_repo`).

2. Test with a public repository first.

3. Ensure the repository owner and name are correct in your `.env`:

   TypeScript Python

   ```plaintext
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repository_name
   ```

   ```plaintext
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repository_name
   ```

## [Workflow times out or runs too long](#workflow-times-out-or-runs-too-long)

Issue: Workflow doesn't complete or Claude credits run out.

Solutions:

1. Use `timeoutMs: 0` (TypeScript) or `timeout_ms=0` (Python) for complex workflows to allow unlimited time:

   TypeScript Python

   ```typescript
   await sbx.commands.run(
     `echo '${prompt}' | claude -p --dangerously-skip-permissions`,
     {
       timeoutMs: 0, // No timeout
       onStdout: console.log,
       onStderr: console.log,
     },
   );
   ```

   ```python
   await sbx.commands.run(
       f"echo '{prompt}' | claude -p --dangerously-skip-permissions",
       timeout_ms=0,  # No timeout
       on_stdout=print,
       on_stderr=print,
   )
   ```

2. Break complex workflows into smaller, focused tasks.

3. Monitor your Anthropic API credit usage.

4. Add checkpoints in prompts: "After each step, show progress before continuing".

## [Sandbox cleanup errors](#sandbox-cleanup-errors)

Issue: Sandboxes aren't being cleaned up properly, leading to resource exhaustion.

Solution: Always use proper error handling with cleanup in the `finally` block:

TypeScript Python

```typescript
async function robustWorkflow() {
  let sbx: Sandbox | undefined;

  try {
    sbx = await Sandbox.betaCreate({
      // ... configuration
    });

    // ... workflow logic
  } catch (error) {
    console.error("Workflow failed:", error);
    process.exit(1);
  } finally {
    if (sbx) {
      console.log("Cleaning up sandbox...");
      await sbx.kill();
    }
  }
}
```

```python
async def robust_workflow():
    sbx = None

    try:
        sbx = await AsyncSandbox.beta_create(
            # ... configuration
        )

        # ... workflow logic

    except Exception as error:
        print(f"Workflow failed: {error}")
        sys.exit(1)
    finally:
        if sbx:
            print("Cleaning up sandbox...")
            await sbx.kill()
```

## [Environment variable not loading](#environment-variable-not-loading)

Issue: Script fails with "undefined" or "None" for environment variables.

Solution:

TypeScript Python

1. Ensure `dotenv` is loaded at the top of your file:

   ```typescript
   import "dotenv/config";
   ```

2. Verify the `.env` file is in the same directory as your script.

3. Check variable names match exactly (case-sensitive):

   ```typescript
   // .env file
   GITHUB_TOKEN = ghp_xxxxx;

   // In code
   process.env.GITHUB_TOKEN; // Correct
   process.env.github_token; // Wrong - case doesn't match
   ```

4. Ensure `dotenv` is loaded at the top of your file:

   ```python
   from dotenv import load_dotenv
   load_dotenv()
   ```

5. Verify the `.env` file is in the same directory as your script.

6. Check variable names match exactly (case-sensitive):

   ```python
   # .env file
   GITHUB_TOKEN=ghp_xxxxx

   # In code
   os.getenv("GITHUB_TOKEN")  # Correct
   os.getenv("github_token")  # Wrong - case doesn't match
   ```

## [SonarQube returns empty results](#sonarqube-returns-empty-results)

Issue: SonarQube analysis returns no projects or issues.

Solution:

1. Verify your SonarCloud organization key is correct.
2. Ensure you have at least one project configured in SonarCloud.
3. Check that your SonarQube token has the necessary permissions.
4. Confirm your project has been analyzed at least once in SonarCloud.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/github-sonarqube-sandbox/troubleshoot.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fgithub-sonarqube-sandbox%2ftroubleshoot%2f\&labels=status%2Ftriage)

Table of contents
