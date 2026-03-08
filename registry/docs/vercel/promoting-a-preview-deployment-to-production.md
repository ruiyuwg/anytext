# Promoting a preview deployment to production

Use this guide to verify a preview deployment and promote it to production. You'll find the right deployment, test it, and promote it to serve production traffic.

> **💡 Note:** This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
> `vercel link` in your project directory if you haven't already.

## Quick reference

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

```bash filename="terminal"
# 1. Find preview deployments
vercel list --status READY

# 2. Inspect the target deployment
vercel inspect <deployment-url>

# 3. Test the preview deployment
vercel curl /api/health --deployment <deployment-url>
vercel httpstat / --deployment <deployment-url>

# 4. Check for errors
vercel logs --deployment <deployment-url> --level error --limit 50

# 5. Promote to production (--yes skips confirmation prompt)
vercel promote <deployment-url> --yes
vercel promote status

# 6. Verify production
vercel logs --environment production --level error --since 5m
vercel httpstat /
```

## 1. Find the preview deployment

List recent deployments that have finished building and are ready to serve traffic:

```bash filename="terminal"
vercel list --status READY
```

This shows all READY deployments with their URLs, timestamps, and Git branches. Find the preview deployment you want to promote.

To filter by a specific environment:

```bash filename="terminal"
vercel list --environment preview
```

## 2. Inspect the deployment

Confirm that the deployment built successfully and check its metadata:

```bash filename="terminal"
vercel inspect <deployment-url>
```

This shows the Git commit, branch, build duration, and function configuration. Verify it matches the code you expect to promote.

To check the build logs for any warnings:

```bash filename="terminal"
vercel inspect <deployment-url> --logs
```

## 3. Test the preview deployment

Use `vercel curl` to send requests to the preview deployment. This automatically handles deployment protection, so you can test protected preview deployments:

```bash filename="terminal"
vercel curl /api/health --deployment <deployment-url>
```

Check the response status and body. For critical routes, test multiple endpoints:

```bash filename="terminal"
vercel curl / --deployment <deployment-url>
vercel curl /api/users --deployment <deployment-url>
```

To check response timing and verify there are no performance regressions:

```bash filename="terminal"
vercel httpstat / --deployment <deployment-url>
```

## 4. Check for errors

Review the deployment's logs for any errors that occurred during testing or from other traffic:

```bash filename="terminal"
vercel logs --deployment <deployment-url> --level error --limit 50
```

To expand truncated error messages and see full stack traces:

```bash filename="terminal"
vercel logs --deployment <deployment-url> --level error --expand
```

If the output is clean, the deployment is safe to promote.

## 5. Promote to production

Promote the preview deployment to production. This triggers a new production build using the same source code:

```bash filename="terminal"
vercel promote <deployment-url>
```

> **💡 Note:** Promoting a preview deployment to production triggers a complete rebuild with
> production [environment variables](/docs/environment-variables). If you have
> different variables set for preview and production, the production values will
> be used in the new build.

For non-interactive environments (CI/CD or automation), add `--yes` to skip the confirmation prompt:

```bash filename="terminal"
vercel promote <deployment-url> --yes
```

Monitor the promotion progress:

```bash filename="terminal"
vercel promote status
```

By default, the CLI waits up to three minutes for the promotion to complete. To change the timeout:

```bash filename="terminal"
vercel promote <deployment-url> --timeout 5m
```

## 6. Verify production

After the promotion completes, confirm that production is serving traffic correctly:

```bash filename="terminal"
vercel logs --environment production --level error --since 5m
```

Check that the production domain responds with the expected content:

```bash filename="terminal"
vercel httpstat /
```

## When the promotion causes issues

If you discover a problem after promoting, roll back to the previous production deployment:

```bash filename="terminal"
vercel rollback
```

This instantly restores the previous production deployment. See [Rolling back a production deployment](/docs/deployments/rollback-production-deployment) for a full recovery workflow.

## Related

- [vercel promote](/docs/cli/promote)
- [vercel inspect](/docs/cli/inspect)
- [vercel curl](/docs/cli/curl)
- [vercel logs](/docs/cli/logs)
- [Rolling back a production deployment](/docs/deployments/rollback-production-deployment)

title: "Promoting Deployments"
description: "Learn how to promote deployments to production on Vercel."
last\_updated: "2026-03-08T05:03:13.363Z"
source: "https://vercel.com/docs/deployments/promoting-a-deployment"
