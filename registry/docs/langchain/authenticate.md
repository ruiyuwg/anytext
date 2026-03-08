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

# Get Oauth Provider

Source: https://docs.langchain.com/api-reference/auth-service-v2/get-oauth-provider

https://api.host.langchain.com/openapi.json get /v2/auth/providers/{provider\_id}
Get a specific OAuth provider.

# List Oauth Providers

Source: https://docs.langchain.com/api-reference/auth-service-v2/list-oauth-providers

https://api.host.langchain.com/openapi.json get /v2/auth/providers
List OAuth providers.

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

# Create a Sandbox

Source: https://docs.langchain.com/api-reference/sandboxes-v2/create-a-sandbox

https://api.host.langchain.com/openapi.json post /v2/sandboxes/boxes
Create a new SandboxClaim in tenant's namespace.

If wait\_for\_ready is True (default), this will block until the sandbox
is ready or the timeout is reached.

The sandbox creation can fail for several reasons:

- Image pull errors (invalid image, registry auth issues)
- Container crashes (bad entrypoint, missing dependencies, health check failures)
- Scheduling failures (no suitable nodes available)

Sandbox creation is subject to quota limits (count, CPU, memory)
configured via Metronome org config.

On failure, the claim is automatically cleaned up and a descriptive error
is returned.

# Create a Sandbox Pool

Source: https://docs.langchain.com/api-reference/sandboxes-v2/create-a-sandbox-pool

https://api.host.langchain.com/openapi.json post /v2/sandboxes/pools
Create a new Sandbox Pool in tenant's namespace.

Pools pre-provision sandboxes from a template for faster claim binding.

Requirements:

- The referenced template must exist
- The template must not have any volume mounts (volumes are stateful)

Pool creation is subject to quota limits. The total resource usage
(replicas \* per-replica resources) is checked against the organization's
quota limits.

# Create a SandboxTemplate

Source: https://docs.langchain.com/api-reference/sandboxes-v2/create-a-sandboxtemplate

https://api.host.langchain.com/openapi.json post /v2/sandboxes/templates
Create a new SandboxTemplate in tenant's namespace.

# Create a Volume

Source: https://docs.langchain.com/api-reference/sandboxes-v2/create-a-volume

https://api.host.langchain.com/openapi.json post /v2/sandboxes/volumes
Create a new persistent volume in the tenant's sandbox namespace.

This creates both a PersistentVolume (PV) and PersistentVolumeClaim (PVC).
The volume can then be referenced in sandbox templates.

Volume creation is subject to quota limits (count and total storage)
configured via Metronome org config.

If wait\_for\_ready is True (default), this blocks until the PVC is bound
or the timeout is reached.

# Delete a Registry

Source: https://docs.langchain.com/api-reference/sandboxes-v2/delete-a-registry

https://api.host.langchain.com/openapi.json delete /v2/sandboxes/registries/{name}
Delete a private container registry.

This will fail if any templates reference this registry. Delete or update
those templates first before deleting the registry.

# Delete a Sandbox

Source: https://docs.langchain.com/api-reference/sandboxes-v2/delete-a-sandbox

https://api.host.langchain.com/openapi.json delete /v2/sandboxes/boxes/{name}
Delete a SandboxClaim from tenant's namespace.

# Delete a Sandbox Pool

Source: https://docs.langchain.com/api-reference/sandboxes-v2/delete-a-sandbox-pool

https://api.host.langchain.com/openapi.json delete /v2/sandboxes/pools/{name}
Delete a Sandbox Pool from tenant's namespace.

This will terminate all sandboxes in the pool.

# Delete a SandboxTemplate

Source: https://docs.langchain.com/api-reference/sandboxes-v2/delete-a-sandboxtemplate

https://api.host.langchain.com/openapi.json delete /v2/sandboxes/templates/{name}
Delete a SandboxTemplate from tenant's namespace.

Deletion will fail if the template is in use by any sandboxes or pools.

# Delete a Volume

Source: https://docs.langchain.com/api-reference/sandboxes-v2/delete-a-volume

https://api.host.langchain.com/openapi.json delete /v2/sandboxes/volumes/{name}
Delete a persistent volume (both PV and PVC) from tenant's namespace.

This will fail if any templates reference this volume. Delete or update
those templates first before deleting the volume.

# Get a Registry

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-a-registry

https://api.host.langchain.com/openapi.json get /v2/sandboxes/registries/{name}
Get a specific registry by name.

Returns metadata only -- credentials are never included in responses.

# Get a Sandbox

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-a-sandbox

https://api.host.langchain.com/openapi.json get /v2/sandboxes/boxes/{name}
Get a specific Sandbox by name in tenant's namespace.

This endpoint queries the database for fast performance.

# Get a Sandbox Pool

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-a-sandbox-pool

https://api.host.langchain.com/openapi.json get /v2/sandboxes/pools/{name}
Get a specific Sandbox Pool by name in tenant's namespace.

This endpoint queries the database for fast performance.

# Get a SandboxTemplate

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-a-sandboxtemplate

https://api.host.langchain.com/openapi.json get /v2/sandboxes/templates/{name}
Get a specific SandboxTemplate by name in tenant's namespace.

This endpoint queries the database for fast performance.

# Get a Volume

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-a-volume

https://api.host.langchain.com/openapi.json get /v2/sandboxes/volumes/{name}
Get a specific volume by name in the tenant's sandbox namespace.

This endpoint queries the database for fast performance.

# Get sandbox resource usage and quota limits

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-sandbox-resource-usage-and-quota-limits

https://api.host.langchain.com/openapi.json get /v2/sandboxes/usage
Return current resource consumption and organisation quota limits.

Sandbox counts include both direct claims and warmpool replicas.
For self-hosted deployments limit fields are 0 (quotas not enforced).

# Get Sandbox Status

Source: https://docs.langchain.com/api-reference/sandboxes-v2/get-sandbox-status

https://api.host.langchain.com/openapi.json get /v2/sandboxes/boxes/{name}/status
Lightweight endpoint for polling sandbox provisioning status.

Returns only status and status\_message -- no template resolution or
full claim data.  Designed for high-frequency polling by SDKs.

# List all Registries

Source: https://docs.langchain.com/api-reference/sandboxes-v2/list-all-registries

https://api.host.langchain.com/openapi.json get /v2/sandboxes/registries
List all registered private container registries for the tenant.

Returns metadata only -- credentials are never included in responses.
Supports optional pagination via `limit` and `offset` query parameters.

# List all Sandbox Pools

Source: https://docs.langchain.com/api-reference/sandboxes-v2/list-all-sandbox-pools

https://api.host.langchain.com/openapi.json get /v2/sandboxes/pools
List all Sandbox Pools in the tenant's namespace.

This endpoint queries the database for fast performance.
Supports optional pagination via `limit` and `offset` query parameters.

# List all Sandboxes

Source: https://docs.langchain.com/api-reference/sandboxes-v2/list-all-sandboxes

https://api.host.langchain.com/openapi.json get /v2/sandboxes/boxes
List all Sandboxes in the tenant's namespace.

This endpoint queries the database for fast performance.
Supports optional pagination via `limit` and `offset` query parameters.

# List all SandboxTemplates

Source: https://docs.langchain.com/api-reference/sandboxes-v2/list-all-sandboxtemplates

https://api.host.langchain.com/openapi.json get /v2/sandboxes/templates
List all SandboxTemplates in the tenant's sandbox namespace.

This endpoint queries the database for fast performance.
Supports optional pagination via `limit` and `offset` query parameters.

# List all Volumes

Source: https://docs.langchain.com/api-reference/sandboxes-v2/list-all-volumes

https://api.host.langchain.com/openapi.json get /v2/sandboxes/volumes
List all persistent volumes in the tenant's sandbox namespace.

This endpoint queries the database for fast performance.
Supports optional pagination via `limit` and `offset` query parameters.

# Register a Private Container Registry

Source: https://docs.langchain.com/api-reference/sandboxes-v2/register-a-private-container-registry

https://api.host.langchain.com/openapi.json post /v2/sandboxes/registries
Register a private container registry for pulling sandbox images.

Provide the registry URL, username, and password (or access token).
The backend builds the K8s dockerconfigjson secret internally.

The registry can then be referenced in sandbox templates via the
`registry_name` field to pull images from private registries.

# Update a Registry

Source: https://docs.langchain.com/api-reference/sandboxes-v2/update-a-registry

https://api.host.langchain.com/openapi.json patch /v2/sandboxes/registries/{name}
Update a registry's display name and/or credentials.

You can update:

- **name**: New display name (must be unique within the organization)
- **url**, **username**, **password**: New credentials (all three must be
  provided together)

# Update a Sandbox

Source: https://docs.langchain.com/api-reference/sandboxes-v2/update-a-sandbox

https://api.host.langchain.com/openapi.json patch /v2/sandboxes/boxes/{name}
Update a Sandbox's display name.

Currently only the display name can be updated.

# Update a Sandbox Pool

Source: https://docs.langchain.com/api-reference/sandboxes-v2/update-a-sandbox-pool

https://api.host.langchain.com/openapi.json patch /v2/sandboxes/pools/{name}
Update a Sandbox Pool's display name and/or replica count.

You can update:

- **name**: New display name (must be unique within the organization)
- **replicas**: New replica count (scaling up is subject to quota limits)

The template reference cannot be changed after creation.
Set replicas to 0 to pause the pool without deleting it.

# Update a SandboxTemplate

Source: https://docs.langchain.com/api-reference/sandboxes-v2/update-a-sandboxtemplate

https://api.host.langchain.com/openapi.json patch /v2/sandboxes/templates/{name}
Update a SandboxTemplate's display name.

Currently only the display name can be updated. The image, resources,
and volume mounts cannot be changed after creation.

# Update a Volume

Source: https://docs.langchain.com/api-reference/sandboxes-v2/update-a-volume

https://api.host.langchain.com/openapi.json patch /v2/sandboxes/volumes/{name}
Update a volume's display name and/or storage size.

You can update:

- **name**: New display name (must be unique within the organization)
- **size**: New storage size (only increases allowed, cannot decrease)

The storage increase is subject to quota limits configured via
Metronome org config.
