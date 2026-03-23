# Create Connection

Source: https://docs.langchain.com/api-reference/agent-connections-v2/create-connection

https://api.host.langchain.com/openapi.json post /v2/auth/agents/{agent\_id}/connections

# List Connections

Source: https://docs.langchain.com/api-reference/agent-connections-v2/list-connections

https://api.host.langchain.com/openapi.json get /v2/auth/agents/{agent\_id}/connections

# Remove Connection

Source: https://docs.langchain.com/api-reference/agent-connections-v2/remove-connection

https://api.host.langchain.com/openapi.json delete /v2/auth/agents/{agent\_id}/connections/{connection\_id}

# Authenticate

Source: https://docs.langchain.com/api-reference/auth-service-v2/authenticate

https://api.host.langchain.com/openapi.json post /v2/auth/authenticate
Get OAuth token or start authentication flow if needed.

# Check Oauth Token Exists

Source: https://docs.langchain.com/api-reference/auth-service-v2/check-oauth-token-exists

https://api.host.langchain.com/openapi.json get /v2/auth/tokens/exists
Return whether the current user has any tokens for a given provider (across agents).

# Check Workspace Slack Tokens Exist

Source: https://docs.langchain.com/api-reference/auth-service-v2/check-workspace-slack-tokens-exist

https://api.host.langchain.com/openapi.json get /v2/auth/tokens/workspace/slack/exists
Check if the workspace has any Slack tokens.

# Create Mcp Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/create-mcp-oauth-provider

https://api.host.langchain.com/openapi.json post /v2/auth/providers/mcp-discover
Create an OAuth provider via MCP auto-discovery.

# Create Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/create-oauth-provider

https://api.host.langchain.com/openapi.json post /v2/auth/providers
Create a new OAuth provider manually.

# Delete Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/delete-oauth-provider

https://api.host.langchain.com/openapi.json delete /v2/auth/providers/{provider\_id}
Delete an OAuth provider.

# Delete Oauth Tokens For User

Source: https://docs.langchain.com/api-reference/auth-service-v2/delete-oauth-tokens-for-user

https://api.host.langchain.com/openapi.json delete /v2/auth/tokens
Delete all tokens for the current user for the given provider (across agents).

# Delete Single Oauth Token

Source: https://docs.langchain.com/api-reference/auth-service-v2/delete-single-oauth-token

https://api.host.langchain.com/openapi.json delete /v2/auth/tokens/{token\_id}
Delete a specific OAuth token, revoking it at the provider first.

Only the token owner can delete it.

# Get Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/get-oauth-provider

https://api.host.langchain.com/openapi.json get /v2/auth/providers/{provider\_id}
Get a specific OAuth provider.

# List Oauth Providers

Source: https://docs.langchain.com/api-reference/auth-service-v2/list-oauth-providers

https://api.host.langchain.com/openapi.json get /v2/auth/providers
List OAuth providers.

# List Oauth Tokens For User

Source: https://docs.langchain.com/api-reference/auth-service-v2/list-oauth-tokens-for-user

https://api.host.langchain.com/openapi.json get /v2/auth/tokens
List the calling user's tokens for a provider.

# Oauth Callback

Source: https://docs.langchain.com/api-reference/auth-service-v2/oauth-callback

https://api.host.langchain.com/openapi.json post /v2/auth/callback/{provider\_id}

# Oauth Callback Get

Source: https://docs.langchain.com/api-reference/auth-service-v2/oauth-callback-get

https://api.host.langchain.com/openapi.json get /v2/auth/callback/{provider\_id}
Handle OAuth callback redirect from OAuth providers.

Processes the OAuth token exchange, then redirects to the frontend callback
page for a consistent UI experience.

# Oauth Setup Callback

Source: https://docs.langchain.com/api-reference/auth-service-v2/oauth-setup-callback

https://api.host.langchain.com/openapi.json get /v2/auth/setup/{provider\_id}
Handle OAuth setup callback redirect from GitHub Apps.

This endpoint handles the "Setup URL" callback from GitHub Apps, which is
triggered when a user installs or updates their GitHub App installation.

For "update" actions (user modified repo access via GitHub), we just show
a success page since no token exchange is needed.

For new installations with code/state, we process similar to the regular
OAuth callback.

# Revoke All Slack Tokens For Workspace

Source: https://docs.langchain.com/api-reference/auth-service-v2/revoke-all-slack-tokens-for-workspace

https://api.host.langchain.com/openapi.json delete /v2/auth/tokens/workspace/slack
Revoke ALL Slack tokens for the workspace. Admin-only action that disconnects Slack entirely.

This is a destructive operation that:

- Revokes all Slack tokens on Slack's side for all users in the workspace
- Deletes all Slack tokens from the database

# Update Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/update-oauth-provider

https://api.host.langchain.com/openapi.json patch /v2/auth/providers/{provider\_id}
Update an OAuth provider.

# Update Token Label

Source: https://docs.langchain.com/api-reference/auth-service-v2/update-token-label

https://api.host.langchain.com/openapi.json patch /v2/auth/tokens/{token\_id}/metadata
Update a token's provider\_account\_label. Only the token owner can update.

# Wait For Auth Completion

Source: https://docs.langchain.com/api-reference/auth-service-v2/wait-for-auth-completion

https://api.host.langchain.com/openapi.json get /v2/auth/wait/{auth\_id}
Wait for OAuth authentication completion.

# Create Deployment

Source: https://docs.langchain.com/api-reference/deployments-v2/create-deployment

https://api.host.langchain.com/openapi.json post /v2/deployments
Create a new deployment.

# Delete Deployment

Source: https://docs.langchain.com/api-reference/deployments-v2/delete-deployment

https://api.host.langchain.com/openapi.json delete /v2/deployments/{deployment\_id}
Delete a deployment by ID.

# Delete Deployments

Source: https://docs.langchain.com/api-reference/deployments-v2/delete-deployments

https://api.host.langchain.com/openapi.json delete /v2/deployments
Delete multiple deployments with partial success support.

Returns:
\- 200: All deployments deleted successfully
\- 207: Some deployments deleted successfully, some failed

# Get Deployment

Source: https://docs.langchain.com/api-reference/deployments-v2/get-deployment

https://api.host.langchain.com/openapi.json get /v2/deployments/{deployment\_id}
Get a deployment by ID.

# Get Revision

Source: https://docs.langchain.com/api-reference/deployments-v2/get-revision

https://api.host.langchain.com/openapi.json get /v2/deployments/{deployment\_id}/revisions/{revision\_id}
Get a revision by ID for a deployment.

# List Deployments

Source: https://docs.langchain.com/api-reference/deployments-v2/list-deployments

https://api.host.langchain.com/openapi.json get /v2/deployments
List all deployments.

# List Revisions

Source: https://docs.langchain.com/api-reference/deployments-v2/list-revisions

https://api.host.langchain.com/openapi.json get /v2/deployments/{deployment\_id}/revisions
List all revisions for a deployment.

# Patch Deployment

Source: https://docs.langchain.com/api-reference/deployments-v2/patch-deployment

https://api.host.langchain.com/openapi.json patch /v2/deployments/{deployment\_id}
Patch a deployment by ID.

# Redeploy Revision

Source: https://docs.langchain.com/api-reference/deployments-v2/redeploy-revision

https://api.host.langchain.com/openapi.json post /v2/deployments/{deployment\_id}/revisions/{revision\_id}/redeploy
Redeploy a specific revision ID.

# List GitHub Integrations

Source: https://docs.langchain.com/api-reference/integrations-v1/list-github-integrations

https://api.host.langchain.com/openapi.json get /v1/integrations/github/install
List available GitHub integrations for LangGraph Platfom Cloud SaaS.

# List GitHub Repositories

Source: https://docs.langchain.com/api-reference/integrations-v1/list-github-repositories

https://api.host.langchain.com/openapi.json get /v1/integrations/github/{integration\_id}/repos
List available GitHub repositories for an integration that are available to deploy to LangSmith Deployment.

# Create Listener

Source: https://docs.langchain.com/api-reference/listeners-v2/create-listener

https://api.host.langchain.com/openapi.json post /v2/listeners
Create a listener.

Creating a listener is only allowed for LangSmith organizations with self-hosted enterprise plans.

# Delete Listener

Source: https://docs.langchain.com/api-reference/listeners-v2/delete-listener

https://api.host.langchain.com/openapi.json delete /v2/listeners/{listener\_id}
Delete a listener by ID.

# Get Listener

Source: https://docs.langchain.com/api-reference/listeners-v2/get-listener

https://api.host.langchain.com/openapi.json get /v2/listeners/{listener\_id}
Get a listener by ID.

# List Listeners

Source: https://docs.langchain.com/api-reference/listeners-v2/list-listeners

https://api.host.langchain.com/openapi.json get /v2/listeners
List all listeners.

# Patch Listener

Source: https://docs.langchain.com/api-reference/listeners-v2/patch-listener

https://api.host.langchain.com/openapi.json patch /v2/listeners/{listener\_id}
Patch a listener by ID.
