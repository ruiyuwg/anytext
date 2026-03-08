# Managing environment variables across environments

Use this guide to manage environment variables across multiple environments. You'll audit what's configured, add variables to the right targets, handle sensitive values, and verify everything locally.

> **💡 Note:** This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
> `vercel link` in your project directory if you haven't already.

## Quick reference

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

```bash filename="terminal"
# 1. List available environments (including custom ones)
vercel target list

# 2. Audit existing variables per environment
vercel env ls production
vercel env ls preview
vercel env ls development

# 3. Add variables to specific environments
vercel env add DATABASE_URL production
vercel env add DATABASE_URL preview

# 4. Add a sensitive variable (hidden in dashboard, extra security)
vercel env add API_SECRET production --sensitive

# 5. Add a branch-specific preview variable
vercel env add DATABASE_URL preview feature-branch

# 6. Pull environment variables locally to verify
vercel pull --environment=production
vercel pull --environment=preview --git-branch=feature-branch

# 7. Run a command with specific environment variables
vercel env run -e preview -- npm test
vercel env run -e production -- npm run build
```

## 1. List your environments

Check which environments are available for your project. This includes the default environments (production, preview, development) and any custom environments:

```bash filename="terminal"
vercel target list
```

Custom environments let you create additional targets like `staging` or `qa` with their own environment variables.

## 2. Audit existing variables

Review what's currently configured in each environment to identify gaps or mismatches:

```bash filename="terminal"
vercel env ls production
```

```bash filename="terminal"
vercel env ls preview
```

```bash filename="terminal"
vercel env ls development
```

To check variables for a custom environment:

```bash filename="terminal"
vercel env ls staging
```

Compare the output across environments. Missing variables are a common cause of deployment failures where a preview works but production doesn't, or vice versa.

## 3. Add variables to specific environments

Add a variable to a single environment. The CLI reads the value from stdin, so it prompts you to enter it:

```bash filename="terminal"
vercel env add DATABASE_URL production
```

To pipe a value in without the prompt:

```bash filename="terminal"
echo "postgres://user:pass@host/db" | vercel env add DATABASE_URL production
```

To add the same variable to multiple environments, run the command for each one:

```bash filename="terminal"
vercel env add DATABASE_URL preview
vercel env add DATABASE_URL development
```

## 4. Add sensitive variables

For secrets like API keys and tokens, use the `--sensitive` flag. This adds extra security measures and hides the value in the Vercel Dashboard:

```bash filename="terminal"
vercel env add API_SECRET production --sensitive
```

Sensitive variables behave the same at runtime but their values are non-readable once created. They are only available in production and preview environments.

## 5. Add branch-specific variables

For preview deployments, you can set variables that only apply to a specific Git branch. This is useful for testing against a different database or API endpoint on a feature branch:

```bash filename="terminal"
vercel env add DATABASE_URL preview feature-branch
```

This variable only applies to preview deployments triggered from the `feature-branch` branch. Other preview deployments use the default preview variable.

## 6. Update existing variables

To change the value of an existing variable:

```bash filename="terminal"
vercel env update DATABASE_URL production
```

You can also pipe the new value:

```bash filename="terminal"
cat ~/.npmrc | vercel env update NPM_RC preview
```

## 7. Pull and verify locally

Pull environment variables to your local machine to verify they're set correctly:

```bash filename="terminal"
vercel pull --environment=production
```

For preview variables with a specific branch:

```bash filename="terminal"
vercel pull --environment=preview --git-branch=feature-branch
```

This writes the variables to `.vercel/.env.preview.local` (or the equivalent for your target environment). Check the file to confirm the values are correct.

## 8. Run commands with environment variables

Test your app locally using the environment variables from a specific environment without writing them to a file:

```bash filename="terminal"
vercel env run -e preview -- npm test
```

```bash filename="terminal"
vercel env run -e production -- npm run build
```

For branch-specific variables:

```bash filename="terminal"
vercel env run -e preview --git-branch feature-branch -- npm run dev
```

## When you need to remove a variable

To remove an environment variable from a specific environment:

```bash filename="terminal"
vercel env rm DATABASE_URL production
```

This prompts for confirmation. Use `--yes` to skip the prompt in automated workflows:

```bash filename="terminal"
vercel env rm DATABASE_URL production --yes
```

## Related

- [vercel env](/docs/cli/env)
- [vercel pull](/docs/cli/pull)
- [vercel target](/docs/cli/target)
- [Environment variables overview](/docs/environment-variables)
- [Deploying a project from the CLI](/docs/projects/deploy-from-cli)

title: "Managing environment variables"
description: "Learn how to create and manage environment variables for Vercel."
last\_updated: "2026-03-08T05:03:13.974Z"
source: "https://vercel.com/docs/environment-variables/managing-environment-variables"
