# Commands (/docs/v6/platform/platform-cli/commands)

This document describes the Prisma Data Platform's integrated Prisma CLI commands, arguments, and options.

Getting started \[#getting-started]

To get started, ensure you have the [Prisma CLI](/v6/orm/tools/prisma-cli) updated to version `5.10.0` or later. This is necessary to access the Platform through the Prisma CLI.

<CalloutContainer type="info">
  <CalloutDescription>
    💡 When using commands, always start with `prisma platform` and include the `--early-access` flag to enable the use of the Prisma Data Platform whilst still in early access.
  </CalloutDescription>
</CalloutContainer>

Authentication \[#authentication]

platform \[#platform]

auth login \[#auth-login]

Opens a browser window that allows you to log into your Prisma Data Platform account or create a new one. Currently, GitHub is the only supported login method. We do have plan to add support for signing in with Google and email/password.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform auth login --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform auth login --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform auth login --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform auth login --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

auth logout \[#auth-logout]

Logs out of your Prisma Data Platform account.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform auth logout --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform auth logout --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform auth logout --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform auth logout --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

auth show \[#auth-show]

Displays information about the currently authenticated user.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform auth show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform auth show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform auth show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform auth show --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Workspace Management \[#workspace-management]

platform \[#platform-1]

workspace show \[#workspace-show]

Lists all workspaces available to your account.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform workspace show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform workspace show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform workspace show --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform workspace show --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Project Management \[#project-management]

platform \[#platform-2]

project show \[#project-show]

Lists all projects within the specified workspace.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform project show \
    --workspace $INSERT_WORKSPACE_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform project show \
    --workspace $INSERT_WORKSPACE_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform project show \
    --workspace $INSERT_WORKSPACE_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform project show \
    --workspace $INSERT_WORKSPACE_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments]

| Argument           | Type     | Required | Description                                                                                                                   |
| ------------------ | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `--workspace` `-w` | `string` | yes      | The workspace id.<br /><br /> **Hint:** You can view your workspace ids with the [`workspace show`](#workspace-show) command. |

project create \[#project-create]

Creates a new project within the specified workspace.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform project create \
    --workspace $INSERT_WORKSPACE_ID \
    --name "INSERT_PROJECT_NAME" \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform project create \
    --workspace $INSERT_WORKSPACE_ID \
    --name "INSERT_PROJECT_NAME" \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform project create \
    --workspace $INSERT_WORKSPACE_ID \
    --name "INSERT_PROJECT_NAME" \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform project create \
    --workspace $INSERT_WORKSPACE_ID \
    --name "INSERT_PROJECT_NAME" \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-1]

| Argument           | Type     | Required | Description                                                                                                                     |
| ------------------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `--workspace` `-w` | `string` | yes      | The workspace `id`.<br /><br /> **Hint:** You can view your workspace ids with the [`workspace show`](#workspace-show) command. |
| `--name` `-n`      | `string` | no       | The display name for the project.<br /><br /> If omitted, a default project name will be generated for you.                     |

project delete \[#project-delete]

Deletes the specified project.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform project delete \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform project delete \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform project delete \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform project delete \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-2]

| Argument         | Type     | Required | Description                                                                                                             |
| ---------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `--project` `-p` | `string` | yes      | The project `id`.<br /><br /> **Hint:** You can view your project ids with the [`project show`](#project-show) command. |

Environment Management \[#environment-management]

platform \[#platform-3]

environment show \[#environment-show]

Lists all environments within the specified project.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform environment show \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform environment show \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform environment show \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform environment show \
    --project $INSERT_PROJECT_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-3]

| Argument         | Type     | Required | Description                                                                                                            |
| ---------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `--project` `-p` | `string` | yes      | The project `id`.<br /><br />**Hint:** You can view your project ids with the [`project show`](#project-show) command. |

environment create \[#environment-create]

Creates a new environment within the specified project.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform environment create \
    --project $INSERT_PROJECT_ID \
    --name $INSERT_ENVIRONMENT_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform environment create \
    --project $INSERT_PROJECT_ID \
    --name $INSERT_ENVIRONMENT_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform environment create \
    --project $INSERT_PROJECT_ID \
    --name $INSERT_ENVIRONMENT_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform environment create \
    --project $INSERT_PROJECT_ID \
    --name $INSERT_ENVIRONMENT_NAME \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-4]

| Argument         | Type     | Required | Description                                                                                                             |
| ---------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `--project` `-p` | `string` | yes      | The project `id`.<br /><br /> **Hint:** You can view your project ids with the [`project show`](#project-show) command. |
| `--name` `-n`    | `string` | no       | The display name for the environment.<br /><br /> If omitted, a default environment name will be generated for you.     |

environment delete \[#environment-delete]

Deletes the specified environment.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform environment delete \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform environment delete \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform environment delete \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform environment delete \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-5]

| Argument             | Type     | Required | Description                                                                                                                             |
| -------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--environment` `-e` | `string` | yes      | The environment `id`.<br /><br /> **Hint:** You can view your environment ids with the [`environment show`](#environment-show) command. |

API Key Management \[#api-key-management]

platform \[#platform-4]

apikey show \[#apikey-show]

Lists all API keys for the specified environment.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform apikey show \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform apikey show \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform apikey show \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform apikey show \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-6]

| Argument             | Type     | Required | Description                                                                                                                             |
| -------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--environment` `-e` | `string` | yes      | The environment `id`.<br /><br /> **Hint:** You can view your environment ids with the [`environment show`](#environment-show) command. |

apikey create \[#apikey-create]

Creates a new API key for the specified project.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform apikey create \
    --environment $INSERT_ENVIRONMENT_ID \
    --name $INSERT_API_KEY_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform apikey create \
    --environment $INSERT_ENVIRONMENT_ID \
    --name $INSERT_API_KEY_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform apikey create \
    --environment $INSERT_ENVIRONMENT_ID \
    --name $INSERT_API_KEY_NAME \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform apikey create \
    --environment $INSERT_ENVIRONMENT_ID \
    --name $INSERT_API_KEY_NAME \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-7]

| Argument             | Type     | Required | Description                                                                                                                             |
| -------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--environment` `-e` | `string` | yes      | The environment `id`.<br /><br /> **Hint:** You can view your environment ids with the [`environment show`](#environment-show) command. |
| `--name` `-n`        | `string` | no       | The display name for the API key.<br /><br /> If omitted, a default API key name will be generated for you.                             |

apikey delete \[#apikey-delete]

Deletes the specified API Key.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform apikey delete \
    --apikey $INSERT_API_KEY_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform apikey delete \
    --apikey $INSERT_API_KEY_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform apikey delete \
    --apikey $INSERT_API_KEY_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform apikey delete \
    --apikey $INSERT_API_KEY_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-8]

| Argument   | Type     | Required | Description                                                                                                          |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `--apikey` | `string` | yes      | The API key `id`.<br /><br />**Hint**: You can view your API key ids with the [`apikey show`](#apikey-show) command. |

Prisma Accelerate \[#prisma-accelerate]

platform \[#platform-5]

accelerate enable \[#accelerate-enable]

Enables Prisma Accelerate for the specified environment.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform accelerate enable \
    --environment $INSERT_ENVIRONMENT_ID \
    --url "postgresql://username:password@host:port/database" \
    --region $INSERT_CONNECTION_POOL_REGION \
    --apikey true \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform accelerate enable \
    --environment $INSERT_ENVIRONMENT_ID \
    --url "postgresql://username:password@host:port/database" \
    --region $INSERT_CONNECTION_POOL_REGION \
    --apikey true \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform accelerate enable \
    --environment $INSERT_ENVIRONMENT_ID \
    --url "postgresql://username:password@host:port/database" \
    --region $INSERT_CONNECTION_POOL_REGION \
    --apikey true \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform accelerate enable \
    --environment $INSERT_ENVIRONMENT_ID \
    --url "postgresql://username:password@host:port/database" \
    --region $INSERT_CONNECTION_POOL_REGION \
    --apikey true \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-9]

| Argument             | Type      | Required | Description                                                                                                                                                                                                                                                                        |
| -------------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--environment` `-e` | `string`  | yes      | The environment `id`.<br /><br /> **Hint:** You can view your environment ids with the [`environment show`](#environment-show) command.                                                                                                                                            |
| `--url`              | `string`  | yes      | Your database connection string.                                                                                                                                                                                                                                                   |
| `--region`           | `string`  | no       | The region for Prisma Accelerate’s managed connection pool.<br /><br />View the list of available regions [here](/v6/accelerate/faq#what-regions-is-accelerates-connection-pool-available-in).<br /><br />**Hint**: Select the region *nearest* your database for optimal latency. |
| `--apikey`           | `boolean` | no       | If yes, a new API key will be generated for the associated environment.                                                                                                                                                                                                            |

accelerate disable \[#accelerate-disable]

Disables Prisma Accelerate for the specified environment.

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma platform accelerate disable \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma platform accelerate disable \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma platform accelerate disable \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma platform accelerate disable \
    --environment $INSERT_ENVIRONMENT_ID \
    --early-access
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Arguments \[#arguments-10]

| Argument             | Type     | Required | Description                                                                                                                             |
| -------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--environment` `-e` | `string` | yes      | The environment `id`.<br /><br /> **Hint:** You can view your environment ids with the [`environment show`](#environment-show) command. |

Help \[#help]

Have a question? Let us know, we’re here to help. Reach out to us on [Discord](https://pris.ly/discord?utm_source=docs\&utm_medium=generated_text_cta).
