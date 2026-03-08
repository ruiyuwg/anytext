# Developing with Next.js on GitHub Codespaces

> \[!NOTE]
> This developer guide was contributed by Eric Streske (Senior Solution Architect @ Sanity).

## Overview

GitHub Codespaces provides a cloud-based development environment, but it presents unique challenges when working with:

- Dynamic URLs that change per codespace instance.
- Proxy headers that can cause CORS and Server Actions issues.
- WebSocket connections that don't work reliably through the Codespaces proxy.

This guide documents solutions to these challenges for a Next.js + Sanity Studio monorepo.

## Prerequisites

- GitHub repository with Next.js and Sanity Studio.- The examples in this guide follow the patterns from the [Turbo Start Sanity](https://www.sanity.io/templates/turbo-start-sanity) template.

- Sanity project with Project ID, Dataset, and API tokens.

## Setup

### Configure Sanity CORS origins

Sanity's API requires explicit CORS configuration to allow requests from your Codespaces URLs.

#### Add CORS origins to Sanity

- Go to [https://www.sanity.io/manage](https://www.sanity.io/docs/cli-reference/manage).

- Select your project.

- Navigate to\*\* API \*\*→ **CORS Origins.**

- Add the following origins:- https://\*.app.github.dev

- https://\*.github.dev

- https://\*.githubpreview.dev

- For each origin:- Check "**Allow Credentials**".

- Select "**Add**".

#### Why wildcards?

- Each Codespace has a unique name in the URL.
- Wildcards allow any Codespace to access your Sanity project.
- **Alternative**: Add specific Codespace URLs (less flexible).

#### Security notes

- These wildcards are safe for development environments.
- Remove them in production and use specific domains.

### Configure port forwardings

#### Make ports public

GitHub Codespaces ports are **private by default,** which prevents external services (like Sanity) from accessing your development servers.

**Method 1: VS Code UI**

- Open the **PORTS** tab in the terminal panel
- Right-click on port \*\*3000 \*\*-> \*\*Port Visibility \*\*-> **Public**
- Right-click on port \*\*3333 \*\*-> \*\*Port Visibility \*\*-> **Public**

**Method 2: CLI**

```sh
gh codespace ports visibility 3000:public -c $CODESPACE_NAME
gh codespace ports visibility 3333:public -c $CODESPACE_NAME
```

#### Why this matters?

- Sanity needs to make requests to your frontend for live preview.
- Studio needs to load the frontend in an iframe.
- Private ports block these cross-origin requests.

### Set up environment variables

#### Front-end environment file

Create `apps/web/.env` and add the following environment variables:

**apps/web/.env**

```text
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-29

# API Tokens (get from https://sanity.io/manage)
SANITY_API_READ_TOKEN=your-token-here
SANITY_API_WRITE_TOKEN=your-token-here

# Studio URL (optional - auto-detected in Codespaces)
NEXT_PUBLIC_SANITY_STUDIO_URL=https://${CODESPACE_NAME}-3333.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}
```

#### Studio environment file

Create `apps/studio/.env` and add the following environment variables:

**apps/studio/.env**

```text
# Sanity Studio Configuration
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_TITLE="Your Studio Title"

# Presentation URL (optional - auto-detected in Codespaces)
SANITY_STUDIO_PRESENTATION_URL=https://${CODESPACE_NAME}-3000.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}
```

#### How to create API tokens:

- Go to <https://www.sanity.io/manage>.
- Select your project.
- Navigate to \*\*API \*\*-> **Tokens.**
- Create tokens:- \*\*Read token: \*\*Viewer role
- \*\*Write token: \*\*Editor role

You can give these names like "Codespaces read" and "Codespaces write" to make them easier to recognize in the future.

## Code changes for Codespaces compatibility

### Detect Codespaces domain

In many cases (especially if using a starter template), the presentation tool URL defaults to `http://localhost:3000` in development mode, which doesn't work in Codespaces.

Update any helper functions that determine the frontend URL to auto-detect Codespaces environment.

```
/**
 * Determines the presentation URL based on the current environment.
 * Priority order:
 * 1. SANITY_STUDIO_PRESENTATION_URL environment variable (if set)
 * 2. Codespaces: Dynamically constructed URL using CODESPACE_NAME
 * 3. Local development: http://localhost:3000
 * @throws {Error} If URL cannot be determined in production
 */
export const getPresentationUrl = () => {
  // First priority: explicit environment variable
  const presentationUrl = process.env.SANITY_STUDIO_PRESENTATION_URL;
  if (presentationUrl) {
    return presentationUrl;
  }

  // Second priority: GitHub Codespaces (browser-side detection)
  // Codespaces URLs follow pattern: https://{codespace-name}-{port}.{domain}
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const codespacesMatch = hostname.match(/^(.+?)-(\d+)\.(.+)$/);
    
    if (codespacesMatch) {
      const [, codespaceName, , domain] = codespacesMatch;
      // Replace the current port (e.g., 3333 for studio) with 3000 for the web app
      return `https://${codespaceName}-3000.${domain}`;
    }

  // Third priority: Local development fallback
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // Production: must have explicit URL set
  throw new Error(
    "SANITY_STUDIO_PRESENTATION_URL must be set in production environment",
  );
};
```

### Allow Server Actions from Codespaces Proxy

Next.js blocks Server Actions requests when the `origin` header doesn't match the `x-forwarded-host` header. In Codespaces:

- `origin`: `localhost:3000` (internal routing)
- `x-forwarded-host`: `codespace-name-3000.app.github.dev` (public URL)

This causes 500 errors: `x-forwarded-host header does not match origin header from a forwarded Server Actions request. Aborting the action.`

To resolve this, configure Next.js to trust Codespaces proxy domains.

\*\*File: \*\*`next.config.ts` or `next.config.js`

**next.config.ts**

```
const nextConfig: NextConfig = {
  // ... other config
  experimental: {
    // ... other config
    // Allow Server Actions from Codespaces and other proxied environments
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "*.app.github.dev",
        "*.github.dev",
        "*.githubpreview.dev",
      ],
    },
  },
  // ... rest of config
};

export default nextConfig;
```

#### What this does:

- Tells Next.js to accept Server Actions from Codespaces URLs.
- Maintains security by limiting to specific domains.
- Allows localhost for local development.

#### Security considerations:

- Wildcards are safe for development environments.
- In production, use specific domains only.
- Never use `"*"` (all origins) in production.

## Let's make sure it works

### Start development servers

- Install dependencies.
- Start both development servers.

### Access your applications

Get your URLs (Codespaces URLs follow this pattern: `https://{CODESPACE_NAME}-{PORT}.app.github.dev`)

#### Frontend

Select port 3000 in the PORTS tab, or construct manually: `https://your-codespace-name-3000.app.github.dev`

#### Studio

Select port 3333 in the PORTS tab, or construct manually: `https://your-codespace-name-3333.app.github.dev`

### Verify

#### Open Studio (port 3333)

- You should see the Sanity Studio interface.
- If you see project ID errors, confirm your `.env` file has the correct project variables.

#### Open Presentation Tool

- Click **Presentation** in the Studio toolbar.
- You should see your frontend loaded in an iframe.

#### Test Live Editing

- Edit content in Studio.
- Changes should appear in Presentation.

## Troubleshooting

### Issue: 502 Bad Gateway on Port URLs

#### Cause:

Servers aren't running or ports aren't forwarded correctly.

#### Solution:

```sh
# Check if servers are running
lsof -i :3000  # Should show Node.js process
lsof -i :3333  # Should show Node.js process

# Test local access
curl http://localhost:3000  # Should return HTML
curl http://localhost:3333  # Should return HTML

# Verify port visibility
gh codespace ports  # Should show both ports as public
```

### Issue: "projectId can only contain a-z, 0-9, and dashes"

#### Cause:

Environment variables not loaded or `.env` file missing.

#### Solution:

```sh
cd apps/studio

# Check if .env exists
ls -la .env

# Verify project ID is set
cat .env | grep SANITY_STUDIO_PROJECT_ID

# If missing, create .env file with correct values
```

### Presentation Mode Shows Blank Screen

#### Cause:

Frontend URL not configured correctly, or CORS issues.

#### Solutions:

- **Check browser console** in the presentation iframe (right-click → Inspect).
- \*\*Verify CORS **origins in Sanity dashboard include** \*\*\*`.app.github.dev`.
- **Check frontend is accessible**: open port 3000 directly in a new tab.
- **Verify the presentation URL**: add `console.log(getPresentationUrl())` to debug.

### Issue: 500 Error - "Invalid Server Actions request"

#### Cause:

Origin mismatch between forwarded host and origin headers.

#### Solution:

Verify `next.config.ts` includes the `serverActions.allowedOrigins` configuration from *Allow Server Actions from Codespaces Proxy* above.

### Issue: WebSocket Connection Errors

#### Cause:

This is expected behavior in Codespaces due to the known proxy issues.

#### Solution:

Websocket errors that appear in the console can be safely ignored.  Live Editing should still work as expected.
