# Getting Started with OAuth 2.1 Server

This guide will walk you through setting up your Supabase project as an OAuth 2.1 identity provider, from enabling the feature to registering your first client application.

## Prerequisites

Before you begin, make sure you have:

- A Supabase project (create one at [supabase.com](https://supabase.com))
- Admin access to your project
- (Optional) [Supabase CLI](/docs/guides/cli) v2.54.11 or higher for local development

## Overview

Setting up OAuth 2.1 in your Supabase project involves these steps:

1. Enable OAuth 2.1 server capabilities in your project
2. Configure your authorization path
3. Build your authorization UI (frontend)
4. Register OAuth client applications

Testing OAuth flows is often easier on a Supabase project since it's already accessible on the web, no tunnel or additional configuration needed.

## Enable OAuth 2.1 server

OAuth 2.1 server is currently in beta and free to use during the beta period on all Supabase plans.

````
1.  Go to your project dashboard
2.  Navigate to **Authentication** > **OAuth Server** in the sidebar
3.  Enable OAuth 2.1 server capabilities



Edit your `supabase/config.toml` file and add the OAuth server configuration:

```toml
[auth.oauth_server]
enabled = true
authorization_url_path = "/oauth/consent"
allow_dynamic_registration = false  # Optional: enable dynamic client registration
```

Start or restart your local Supabase instance:

```bash
supabase start
# or if already running:
supabase stop && supabase start
```
````

Once enabled, your project will expose the necessary OAuth endpoints:

````
| Endpoint                   | URL                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------- |
| **Authorization endpoint** | `https://<project-ref>.supabase.co/auth/v1/oauth/authorize`                        |
| **Token endpoint**         | `https://<project-ref>.supabase.co/auth/v1/oauth/token`                            |
| **JWKS endpoint**          | `https://<project-ref>.supabase.co/auth/v1/.well-known/jwks.json`                  |
| **Discovery endpoint**     | `https://<project-ref>.supabase.co/.well-known/oauth-authorization-server/auth/v1` |
| **OIDC discovery**         | `https://<project-ref>.supabase.co/auth/v1/.well-known/openid-configuration`       |



| Endpoint                   | URL                                                                     |
| -------------------------- | ----------------------------------------------------------------------- |
| **Authorization endpoint** | `http://localhost:54321/auth/v1/oauth/authorize`                        |
| **Token endpoint**         | `http://localhost:54321/auth/v1/oauth/token`                            |
| **JWKS endpoint**          | `http://localhost:54321/auth/v1/.well-known/jwks.json`                  |
| **Discovery endpoint**     | `http://localhost:54321/.well-known/oauth-authorization-server/auth/v1` |
| **OIDC discovery**         | `http://localhost:54321/auth/v1/.well-known/openid-configuration`       |

### Expose local instance to the world

To test OAuth flows with external applications, you can expose your local Supabase instance using a tunnel solution (such as [ngrok](https://ngrok.com/) or [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)).

When using a tunnel, configure the `jwt_issuer` field in your `supabase/config.toml` to match your tunnel URL:

```toml
[auth]
jwt_issuer = "https://my-tunnel.url/auth/v1"
```

This ensures that JWTs issued by your local instance use the correct issuer claim for token validation, and serves the discovery endpoint at the correct location with accurate discovery information.
````

**Use asymmetric JWT signing keys for better security**

By default, Supabase uses HS256 (symmetric) for signing JWTs. For OAuth use cases, we recommend migrating to asymmetric algorithms like RS256 or ES256. Asymmetric keys are more scalable and secure because:

- OAuth clients can validate JWTs using the public key from your JWKS endpoint
- No need to share your JWT secret with third-party applications
- More resilient architecture for distributed systems

Learn more about [configuring JWT signing keys](/docs/guides/auth/signing-keys).

**Note:** If you plan to use OpenID Connect ID tokens (by requesting the `openid` scope), asymmetric signing algorithms are **required**. ID token generation will fail with HS256.

## Configure your authorization path

Before registering clients, you need to configure where your authorization UI will live.

1. In your project dashboard, navigate to **Authentication** > **OAuth Server**
2. Set the **Authorization Path** (e.g., `/oauth/consent`)

The authorization path is combined with your Site URL (configured in **Authentication** > **URL Configuration**) to create the full authorization endpoint URL.

Your authorization UI will be at the combined Site URL + Authorization Path. For example:

- Site URL: `https://example.com` (from **Authentication** > **URL Configuration**)
- Authorization Path: `/oauth/consent` (from **OAuth Server** settings)
- Your authorization UI: `https://example.com/oauth/consent`

When OAuth clients initiate the authorization flow, Supabase Auth will redirect users to this URL with an `authorization_id` query parameter. You'll use [Supabase JavaScript library OAuth methods](https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/src/GoTrueClient.ts#L2159-L2163) to handle the authorization:

- `supabase.auth.oauth.getAuthorizationDetails(authorization_id)` - Retrieve client and authorization details
- `supabase.auth.oauth.approveAuthorization(authorization_id)` - Approve the authorization request
- `supabase.auth.oauth.denyAuthorization(authorization_id)` - Deny the authorization request

## Build your authorization UI

This is where you build the **frontend** for your authorization flow. When third-party apps initiate OAuth, users will be redirected to your authorization path (configured in the previous step) with an `authorization_id` query parameter.

Your authorization UI should:

1. **Extract authorization\_id** - Get the `authorization_id` from the URL query parameters
2. **Authenticate the user** - If not already logged in, redirect to your login page (preserving the authorization\_id)
3. **Retrieve authorization details** - Use `supabase.auth.oauth.getAuthorizationDetails(authorization_id)` to get client information including requested scopes
4. **Display consent screen** - Show the user what app is requesting access and what scopes/permissions are being requested
5. **Handle user decision** - Call either `approveAuthorization(authorization_id)` or `denyAuthorization(authorization_id)` based on user choice

The authorization details include a `scope` field (singular) containing a space-separated string of scopes requested by the client (e.g., `"openid email profile"`). You should display these scopes to the user so they understand what information will be shared.

This is a **frontend implementation**. You're building the UI that displays the consent screen and handles user interactions. The actual OAuth token generation is handled by Supabase Auth after you call the approve/deny methods.

### Example authorization UI

Here's how to build a minimal authorization page at your configured path (e.g., `/oauth/consent`):

````
```tsx
// app/oauth/consent/page.tsx
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ConsentPage({
  searchParams,
}: {
  searchParams: { authorization_id?: string }
}) {
  const authorizationId = (await searchParams).authorization_id

  if (!authorizationId) {
    return Error: Missing authorization_id
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => (await cookies()).getAll(),
        setAll: async (cookiesToSet) => {
          const cookieStore = await cookies()
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    }
  )

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Redirect to login, preserving authorization_id
    redirect(`/login?redirect=/oauth/consent?authorization_id=${authorizationId}`)
  }

  // Get authorization details using the authorization_id
  const { data: authDetails, error } =
    await supabase.auth.oauth.getAuthorizationDetails(authorizationId)

  if (error || !authDetails) {
    return Error: {error?.message || 'Invalid authorization request'}
  }

  return (
    
      Authorize {authDetails.client.name}
      This application wants to access your account.

      
        
          Client: {authDetails.client.name}
        
        
          Redirect URI: {authDetails.redirect_uri}
        
        {authDetails.scope && authDetails.scope.trim() && (
          
            Requested permissions:
            
              {authDetails.scope.split(' ').map((scopeItem) => (
                {scopeItem}
              ))}
            
          
        )}
      

      
        
        
          Approve
        
        
          Deny
        
      
    
  )
}
```

```typescript
// app/api/oauth/decision/route.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const decision = formData.get('decision')
  const authorizationId = formData.get('authorization_id') as string

  if (!authorizationId) {
    return NextResponse.json({ error: 'Missing authorization_id' }, { status: 400 })
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => (await cookies()).getAll(),
        setAll: async (cookiesToSet) => {
          const cookieStore = await cookies()
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    }
  )

  if (decision === 'approve') {
    const { data, error } = await supabase.auth.oauth.approveAuthorization(authorizationId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Redirect back to the client with authorization code
    return NextResponse.redirect(data.redirect_to)
  } else {
    const { data, error } = await supabase.auth.oauth.denyAuthorization(authorizationId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Redirect back to the client with error
    return NextResponse.redirect(data.redirect_to)
  }
}
```



```tsx
// src/pages/OAuthConsent.tsx
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from './supabaseClient'

export function OAuthConsent() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const authorizationId = searchParams.get('authorization_id')

  const [authDetails, setAuthDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadAuthDetails() {
      if (!authorizationId) {
        setError('Missing authorization_id')
        setLoading(false)
        return
      }

      // Check if user is authenticated
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        navigate(`/login?redirect=/oauth/consent?authorization_id=${authorizationId}`)
        return
      }

      // Get authorization details using the authorization_id
      const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId)

      if (error) {
        setError(error.message)
      } else {
        setAuthDetails(data)
      }

      setLoading(false)
    }

    loadAuthDetails()
  }, [authorizationId, navigate])

  async function handleApprove() {
    if (!authorizationId) return

    const { data, error } = await supabase.auth.oauth.approveAuthorization(authorizationId)

    if (error) {
      setError(error.message)
    } else {
      // Redirect to client app
      window.location.href = data.redirect_to
    }
  }

  async function handleDeny() {
    if (!authorizationId) return

    const { data, error } = await supabase.auth.oauth.denyAuthorization(authorizationId)

    if (error) {
      setError(error.message)
    } else {
      // Redirect to client app with error
      window.location.href = data.redirect_to
    }
  }

  if (loading) return Loading...
  if (error) return Error: {error}
  if (!authDetails) return No authorization request found

  return (
    
      Authorize {authDetails.client.name}
      This application wants to access your account.

      
        
          Client: {authDetails.client.name}
        
        
          Redirect URI: {authDetails.redirect_uri}
        
        {authDetails.scope && authDetails.scope.trim() && (
          
            Requested permissions:
            
              {authDetails.scope.split(' ').map((scopeItem) => (
                {scopeItem}
              ))}
            
          
        )}
      

      
        Approve
        Deny
      
    
  )
}
```
````

### How it works

1. **User navigates to your authorization path** - When a third-party app initiates OAuth, Supabase Auth redirects the user to your configured authorization path (e.g., `https://example.com/oauth/consent?authorization_id=<id>`)
2. **Extract authorization\_id** - Your page extracts the `authorization_id` from the URL query parameters
3. **Check authentication** - Your page checks if the user is logged in, redirecting to login if not (preserving the authorization\_id)
4. **Retrieve details** - Call `supabase.auth.oauth.getAuthorizationDetails(authorization_id)` to get information about the requesting client
5. **Show consent screen** - Display a UI asking the user to approve or deny access
6. **Handle decision** - When the user clicks approve/deny:
   - Call `supabase.auth.oauth.approveAuthorization(authorization_id)` or `denyAuthorization(authorization_id)`
   - These methods handle all OAuth logic internally (generating authorization codes, etc.)
   - They return a `redirect_to` URL
7. **Redirect back** - Redirect the user to the `redirect_to` URL, which sends them back to the third-party app with either an authorization code (approved) or error (denied)

## Register an OAuth client

Before third-party applications can use your project as an identity provider, you need to register them as OAuth clients.

````
1.  Go to **Authentication** > **OAuth Apps** (under the **Manage** section)
2.  Click **Add a new client**
3.  Enter the client details:
    *   **Client name**: A friendly name for your application
    *   **Redirect URIs**: One or more URLs where users will be redirected after authorization
    *   **Client type**: Choose between:
        *   **Public** - For mobile and single-page apps (no client secret)
        *   **Confidential** - For server-side apps (includes client secret)
4.  Click **Create**

You'll receive:

*   **Client ID**: A unique identifier for the client
*   **Client Secret** (for confidential clients): A secret key for authenticating the client


  Store the client secret securely. It will only be shown once. If you lose it, you can regenerate a new one from the **OAuth Apps** page.


#### Token endpoint authentication method

When a client exchanges an authorization code or refreshes a token, it must authenticate with the token endpoint. The `token_endpoint_auth_method` controls how this authentication happens:

| Method                | Description                                                                                                                                               | Used by                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `none`                | No client authentication. Only `client_id` is sent in the request body.                                                                                   | Public clients (required) |
| `client_secret_basic` | Client credentials sent via HTTP Basic auth (`Authorization: Basic <base64(client_id:client_secret)>`). **This is the default for confidential clients.** | Confidential clients      |
| `client_secret_post`  | Client credentials sent in the request body (`client_id` and `client_secret` as form parameters).                                                         | Confidential clients      |

**Defaults:** Public clients default to `none`. Confidential clients default to `client_secret_basic` (per [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591#section-2)).

**Constraints:** Public clients must use `none`. Confidential clients cannot use `none`.

You can set this when registering a client via the dashboard or programmatically. See [OAuth Flows](/docs/guides/auth/oauth-server/oauth-flows#step-5-token-exchange) for examples of each method in action.



You can register clients programmatically using the SDK admin endpoints or by calling your project's auth server admin endpoint directly.


  
    ```typescript
    import { createClient } from '@supabase/supabase-js'

    const supabase = createClient(
      'https://your-project.supabase.co',
      'your-service-role-key' // Use service_role key for admin operations
    )

    // Create an OAuth client
    const { data, error } = await supabase.auth.admin.oauth.createClient({
      name: 'My Third-Party App',
      redirect_uris: ['https://my-app.com/auth/callback', 'https://my-app.com/auth/silent-callback'],
      client_type: 'confidential',
      // Optional: defaults to 'client_secret_basic' for confidential, 'none' for public
      token_endpoint_auth_method: 'client_secret_basic',
    })

    if (error) {
      console.error('Error creating client:', error)
    } else {
      console.log('Client created:', data)
      console.log('Client ID:', data.client_id)
      console.log('Client Secret:', data.client_secret) // Store this securely!
    }
    ```
  

  
    ```python
    from supabase import create_client

    supabase = create_client(
        'https://your-project.supabase.co',
        'your-service-role-key'  # Use service_role key for admin operations
    )

    # Create an OAuth client
    response = supabase.auth.admin.oauth.create_client({
        'name': 'My Third-Party App',
        'redirect_uris': [
            'https://my-app.com/auth/callback',
            'https://my-app.com/auth/silent-callback'
        ],
        'client_type': 'confidential',
        # Optional: defaults to 'client_secret_basic' for confidential, 'none' for public
        'token_endpoint_auth_method': 'client_secret_basic'
    })

    print('Client created:', response)
    print('Client ID:', response.client_id)
    print('Client Secret:', response.client_secret)  # Store this securely!
    ```
  

  
    **Production:**

    ```bash
    curl -X POST 'https://<project-ref>.supabase.co/auth/v1/admin/oauth/clients' \
      -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "My Third-Party App",
        "redirect_uris": [
          "https://my-app.com/auth/callback",
          "https://my-app.com/auth/silent-callback"
        ],
        "client_type": "confidential",
        "token_endpoint_auth_method": "client_secret_basic"
      }'
    ```

    **Local development:**

    ```bash
    curl -X POST 'http://localhost:54321/auth/v1/admin/oauth/clients' \
      -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Local Dev App",
        "redirect_uris": ["http://localhost:3000/auth/callback"],
        "client_type": "confidential",
        "token_endpoint_auth_method": "client_secret_post"
      }'
    ```

    Response:

    ```json
    {
      "client_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
      "client_secret": "verysecret-1234567890abcdef...",
      "name": "My Third-Party App",
      "redirect_uris": ["https://my-app.com/auth/callback", "https://my-app.com/auth/silent-callback"],
      "client_type": "confidential",
      "token_endpoint_auth_method": "client_secret_basic",
      "created_at": "2025-01-15T10:30:00.000Z"
    }
    ```
  



  For complete API documentation, see the [OAuth Admin API reference](/docs/reference/javascript/auth-admin-oauth-admin).


### List OAuth clients

To view all registered OAuth clients:


  
    ```typescript
    const { data, error } = await supabase.auth.admin.oauth.listClients()

    if (error) {
      console.error('Error listing clients:', error)
    } else {
      console.log('OAuth clients:', data)
    }
    ```
  

  
    ```python
    clients = supabase.auth.admin.oauth.list_clients()

    print('OAuth clients:', clients)
    ```
  

  
    **Production:**

    ```bash
    curl 'https://<project-ref>.supabase.co/auth/v1/admin/oauth/clients' \
      -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}"
    ```

    **Local development:**

    ```bash
    curl 'http://localhost:54321/auth/v1/admin/oauth/clients' \
      -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}"
    ```
  
````

## Customizing tokens (optional)

By default, OAuth access tokens include standard claims like `user_id`, `role`, and `client_id`. If you need to customize tokens—for example, to set a specific `audience` claim for third-party validation or add client-specific metadata—use [Custom Access Token Hooks](/docs/guides/auth/auth-hooks/access-token-hook).

Custom Access Token Hooks are triggered for all token issuance, including OAuth flows. You can use the `client_id` parameter to customize tokens based on which OAuth client is requesting them.

### Common use cases

- **Customize `audience` claim**: Set the `aud` claim to the third-party API endpoint for proper JWT validation
- **Add client-specific permissions**: Include custom claims based on which OAuth client is requesting access
- **Implement dynamic scopes**: Add metadata that RLS policies can use for fine-grained access control

For more examples, see [Token Security & RLS](/docs/guides/auth/oauth-server/token-security#custom-access-token-hooks).

## Redirect URI configuration

Redirect URIs are critical for OAuth security. Supabase Auth will only redirect to URIs that are explicitly registered with the client.

**Not to be confused with general redirect URLs**

This section is about **OAuth client redirect URIs** - where to send users after they authorize third-party apps to access your Supabase project. This is different from the general [Redirect URLs](/docs/guides/auth/redirect-urls) setting, which controls where to send users after they sign in TO your app using social providers.

**Exact matches only - No wildcards or patterns**

OAuth client redirect URIs require exact, complete URL matches. Unlike general redirect URLs (which support wildcards), OAuth client redirect URIs do NOT support wildcards, patterns, or partial URLs. You must register the full, exact callback URL.

### Best practices

- **Use HTTPS in production** - Always use HTTPS for redirect URIs in production
- **Register exact, complete URLs** - Each redirect URI must be the full URL including protocol, domain, path, and port if needed
- **Use separate OAuth clients per environment** - Create separate OAuth clients for development, staging, and production. This provides better security isolation, allows independent secret rotation, and improves auditability. If you need to use the same client across environments, you can register multiple redirect URIs, but separate clients are recommended.

## Next steps

Now that you've registered your first OAuth client, you're ready to:

- [Understand OAuth flows](/docs/guides/auth/oauth-server/oauth-flows) - Learn how the authorization code and refresh token flows work
- [Implement MCP authentication](/docs/guides/auth/oauth-server/mcp-authentication) - Enable AI agent authentication
- [Secure with RLS](/docs/guides/auth/oauth-server/token-security) - Control data access for OAuth clients
