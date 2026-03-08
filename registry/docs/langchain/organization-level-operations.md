## Organization-level operations

Organization-level operations are controlled by organization roles, which are separate from the RBAC feature. Learn more in the [Role-based access control](/langsmith/rbac#organization-roles) guide.

### Organization settings

| Operation                   | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| --------------------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| View organization info      |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| View organization dashboard |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Update organization info    |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| View billing info           |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| View company info           |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Set company info            |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### Workspaces

Organization-level workspace management operations.

| Operation           | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ------------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| List all workspaces |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create workspace    |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### Organization members

| Operation                       | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   | Notes                                                  |
| ------------------------------- | :-------: | :----------: | :------: | :--------: | --------------------- | ------------------------------------------------------ |
| View organization members       |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |                                                        |
| View active org members         |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |                                                        |
| View pending org members        |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |                                                        |
| Invite member to organization   |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator can only invite Org Users and Org Viewers |
| Invite members (batch)          |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator can only invite Org Users and Org Viewers |
| Add basic auth members          |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator can only add Org Users and Org Viewers    |
| Remove organization member      |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator cannot remove Org Admins                  |
| Update organization member role |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator can only modify Org Users and Org Viewers |
| Delete pending org member       |     ✓     |       ⚠      |     ✗    |      ✗     | `organization:manage` | Org Operator cannot delete pending Org Admin invites   |

### Roles and permissions

| Operation                  | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| -------------------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| List organization roles    |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| List available permissions |     ✓     |       ✓      |     ✓    |      ✓     | N/A (user-level)      |
| Create custom role         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Update custom role         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete custom role         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### SSO and authentication

| Operation                    | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ---------------------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| View SSO settings            |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create SSO settings          |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Update SSO settings          |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete SSO settings          |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| View login methods           |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Update allowed login methods |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Set default SSO provision    |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### SCIM

System for Cross-domain Identity Management for user provisioning.

| Operation         | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ----------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| List SCIM tokens  |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Get SCIM token    |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create SCIM token |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Update SCIM token |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete SCIM token |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### Access policies

Attribute-based access control (ABAC) policies for fine-grained permissions.

ABAC is in private beta.

| Operation                    | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ---------------------------- | :-------: | :----------: | :------: | :--------: | --------------------- |
| List access policies         |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Get access policy            |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create access policy         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete access policy         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Attach access policy to role |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### Billing and payments

| Operation                      | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ------------------------------ | :-------: | :----------: | :------: | :--------: | --------------------- |
| Create Stripe setup intent     |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Handle payment method creation |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Change payment plan            |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Create Stripe checkout session |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Confirm checkout completion    |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Create Stripe account links    |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |

### API keys

| Operation                                      | Org Admin | Org Operator | Org User | Org Viewer | Required Permission                                |
| ---------------------------------------------- | :-------: | :----------: | :------: | :--------: | -------------------------------------------------- |
| List org-scoped API keys                       |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`                                |
| Create org-scoped API key (workspace-scoped)\* |     ✓     |       ✓      |     ⚠    |      ✗     | `organization:pats:create`                         |
| Create org-scoped API key (org-wide)\*         |     ✓     |       ✗      |     ✗    |      ✗     | `organization:pats:create` + `organization:manage` |
| List personal access tokens                    |     ✓     |       ✓      |     ✓    |      ✗     | `organization:read`                                |
| Create personal access token                   |     ✓     |       ✓      |     ✓    |      ✗     | `organization:pats:create`                         |
| Delete personal access token                   |     ✓     |       ✓      |     ✓    |      ✗     | `organization:read`                                |

\* Organization Operators and Organization Users can create workspace-scoped API keys only for workspaces where they are a Workspace Admin. Org-wide API keys require the Organization Admin role.

### Organization charts and dashboards

| Operation                | Org Admin | Org Operator | Org User | Org Viewer | Required Permission   |
| ------------------------ | :-------: | :----------: | :------: | :--------: | --------------------- |
| List org charts          |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Get org chart by ID      |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create org chart         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Update org chart         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete org chart         |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Render org chart         |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Get org chart section    |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |
| Create org chart section |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Update org chart section |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Delete org chart section |     ✓     |       ✓      |     ✗    |      ✗     | `organization:manage` |
| Render org chart section |     ✓     |       ✓      |     ✓    |      ✓     | `organization:read`   |

### Usage and analytics

| Operation                                                                     | Org Admin | Org Operator | Org User |      Org Viewer     | Required Permission   |
| ----------------------------------------------------------------------------- | :-------: | :----------: | :------: | :-----------------: | --------------------- |
| View organization usage                                                       |     ✓     |       ✓      |     ✓    |          ✓          | `organization:read`   |
| [View granular billable usage](/langsmith/granular-usage)                     |     ✓     |       ✓      |     ✓    | `organization:read` |                       |
| [Export granular usage as CSV](/langsmith/granular-usage#export-usage-as-csv) |     ✓     |       ✓      |     ✓    | `organization:read` |                       |
| View TTL settings                                                             |     ✓     |       ✓      |     ✓    |          ✓          | `organization:read`   |
| Upsert TTL settings                                                           |     ✓     |       ✓      |     ✗    |          ✗          | `organization:manage` |
