# Manage Agent Builder

Source: https://docs.langchain.com/langsmith/agent-builder-self-hosted

[Agent Builder](/langsmith/agent-builder) allows users to create, deploy, and manage AI agents directly within LangSmith with no code. An agent created in Agent Builder is essentially an assistant on a LangSmith Deployment. This page explains how to manage Agent Builder on a [self-hosted LangSmith instance](/langsmith/self-hosted).

Agent Builder is available on [LangSmith Self-Hosted v0.13](https://changelog.langchain.com/announcements/langsmith-self-hosted-v0-13) and later. Self-hosted is an add-on to the Enterprise plan. For more details, refer to [Pricing](https://www.langchain.com/pricing). [Contact our sales team](https://www.langchain.com/contact-sales) if you want to get a license key to trial LangSmith in your environment.

## Prerequisites

Before enabling Agent Builder, you must complete the following setup steps:

1. Install the base LangSmith platform:
   - [Install on Kubernetes](/langsmith/kubernetes).
   - [Install on Docker](/langsmith/docker).
2. [Enable LangSmith Deployment](/langsmith/deploy-self-hosted-full-platform) (agent deployment capabilities).

## Components

Agent Builder consists of the following components:

- `agentBootstrap`: Job that deploys the LangSmith Deployment (agent) needed for Agent Builder.
- `agentBuilder`
  - `toolServer`: Provides MCP tool execution for agents.
  - `triggerServer`: Handles webhooks and scheduled triggers.
  - `agent`: The main agent that will handle agent generation and where all the assistants will be created.

## Enable Agent Builder

To enable Agent Builder, add the following to your `values.yaml`:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
backend:
  agentBootstrap:
    enabled: true

config:
  agentBuilder:
    enabled: true
    encryptionKey: "<key>"

agentBuilderToolServer:
  enabled: true

agentBuilderTriggerServer:
  enabled: true
```

### Generate an encryption key

Agent Builder requires a Fernet encryption key to securely store secrets. Generate one using Python:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"
```

You can store the encryption key in a predefined Kubernetes secret using the `agent_builder_encryption_key` parameter. See [Use an existing secret](/langsmith/self-host-using-an-existing-secret#parameters) for details.

## Enable OAuth tools and triggers (optional)

To enable OAuth-based tools (like Gmail, Slack, GitHub), configure the `oauthProviderOrgId` and add provider IDs for each integration you want to enable. You can enable any combination of providers.

### Available providers

| Provider                | Tools enabled                                   | Trigger enabled | Setup guide                           |
| ----------------------- | ----------------------------------------------- | --------------- | ------------------------------------- |
| `githubOAuthProvider`   | GitHub                                          | -               | [See below](#github-oauth-provider)   |
| `googleOAuthProvider`   | Gmail, Google Calendar, Google Sheets, BigQuery | Gmail           | [See below](#google-oauth-provider)   |
| `linearOAuthProvider`   | Linear                                          | -               | [See below](#linear-oauth-provider)   |
| `linkedinOAuthProvider` | LinkedIn                                        | -               | [See below](#linkedin-oauth-provider) |
| `slackOAuthProvider`    | Slack                                           | Slack           | [See below](#slack-oauth-provider)    |

### General configuration

Add the following to your `values.yaml`. Include only the providers you need.

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
backend:
  agentBootstrap:
    enabled: true

config:
  agentBuilder:
    # Organization ID where OAuth providers are configured
    oauthProviderOrgId: "<your-org-id>"
    oauth:
      # Add provider IDs for integrations you want to enable,
      # Slack requires additional configuration
      slackOAuthProvider: "<provider-id>"
      slackSigningSecret: "<signing-secret>"
      slackBotId: "<bot-id>"
      googleOAuthProvider: "<provider-id>"
      linkedinOAuthProvider: "<provider-id>"
      linearOAuthProvider: "<provider-id>"
      githubOAuthProvider: "<provider-id>"
```

The provider ID must be unique and cannot end with `-agent-builder` or `-oauth-provider`.

### Provider setup guides

````
To enable GitHub OAuth for Agent Builder, you need to create a GitHub OAuth app and configure it with the required permissions.


  
    Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers) and click **New OAuth App**.
  

  
    Fill in the application details. You can name it whatever you like and leave the default checkbox settings.
  

  
    Give the app read/write permissions to **Pull Requests** and **Issues**.
  

  
    Set the callback URL, replacing `<hostname>` with your LangSmith hostname and `<provider-id>` with your provider ID:

    ```
    https:///host-oauth-callback/<provider-id>
    ```
  

  
    Click **Generate a new client secret** and copy both the **Client ID** (shown at the top of the app page) and the **Client Secret**.
  

  
    In LangSmith, go to **Settings > OAuth Providers** and add a new provider:

    * **Client ID**: from GitHub app
    * **Client Secret**: from GitHub app
    * **Authorization URL**: `https://github.com/login/oauth/authorize`
    * **Token URL**: `https://github.com/login/oauth/access_token`
    * **Provider ID**: Unique string, for example: `github`
  

  
    Add the following to your `values.yaml` and deploy:

    ```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    config:
      agentBuilder:
        oauthProviderOrgId: "<your-org-id>"
        oauth:
          githubOAuthProvider: "<provider-id>"
    ```
  

  
    After creating the app, you need to:

    1. Authenticate the app to your GitHub account.
    2. Go to **Settings > Applications > Installed GitHub Apps** and install the app on the repositories you want it to access.

    
      For private repositories, you must explicitly install the app on each repository you want Agent Builder to access.
    
  




To enable Google OAuth for Agent Builder, you need to create an OAuth client in GCP and configure it with the required URLs and credentials.


  
    Create a new OAuth client app (Web application) in [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
  

  
    Add the following URLs to your OAuth client, replacing `<hostname>` with your LangSmith hostname and `<provider-id>` with the provider ID you'll use (e.g., `google`):

    **Authorized JavaScript origins:**

    * `https://<hostname>`

    **Authorized redirect URIs:**

    * `https://<hostname>/api-host/v2/auth/callback/<provider-id>`
    * `https://<hostname>/host-oauth-callback/<provider-id>`
  

  
    Copy the **Client ID** and **Client Secret** from the GCP OAuth app.
  

  
    In LangSmith, go to **Settings > OAuth Providers** and add a new provider:

    * **Client ID**: Find in GCP
    * **Client Secret**: Find in GCP
    * **Authorization URL**: `https://accounts.google.com/o/oauth2/auth`
    * **Token URL**: `https://oauth2.googleapis.com/token`
    * **Provider ID**: Unique string, for example: `google`
  

  
    Add the LangSmith OAuth provider ID to your `values.yaml` and deploy:

    ```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    config:
      agentBuilder:
        oauthProviderOrgId: "<your-org-id>"
        oauth:
          googleOAuthProvider: "<provider-id>"
    ```
  




To enable Linear OAuth for Agent Builder, you need to create a Linear OAuth app and configure it with the required credentials.


  
    Go to [Linear Settings > API > Applications](https://linear.app/settings/api/applications/new) and create a new OAuth application.
  

  
    Set the callback URL, replacing `<hostname>` with your LangSmith hostname and `<provider-id>` with your provider ID:

    ```
    https:///host-oauth-callback/<provider-id>
    ```
  

  
    After creating the app, copy the **Client ID** and **Client Secret**.
  

  
    In LangSmith, go to **Settings > OAuth Providers** and add a new provider:

    * **Client ID**: from Linear app
    * **Client Secret**: from Linear app
    * **Authorization URL**: `https://linear.app/oauth/authorize`
    * **Token URL**: `https://api.linear.app/oauth/token`
    * **Provider ID**: Unique string, for example: `linear`
  

  
    Add the following to your `values.yaml` and deploy:

    ```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    config:
      agentBuilder:
        oauthProviderOrgId: "<your-org-id>"
        oauth:
          linearOAuthProvider: "<provider-id>"
    ```
  




To enable LinkedIn OAuth for Agent Builder, you need to create a LinkedIn OAuth app and configure it with the required credentials.


  
    Go to [linkedin.com/developers/apps](https://www.linkedin.com/developers/apps/) and create a new app.
  

  
    In your app settings, go to the **Auth** tab.
  

  
    Add the following redirect URI, replacing `<hostname>` with your LangSmith hostname and `<provider-id>` with your provider ID:

    ```
    https:///host-oauth-callback/<provider-id>
    ```
  

  
    Copy the **Client ID** and **Client Secret** from the Auth tab.
  

  
    In LangSmith, go to **Settings > OAuth Providers** and add a new provider:

    * **Client ID**: from LinkedIn app
    * **Client Secret**: from LinkedIn app
    * **Authorization URL**: `https://www.linkedin.com/oauth/v2/authorization`
    * **Token URL**: `https://www.linkedin.com/oauth/v2/accessToken`
    * **Provider ID**: Unique string, for example: `linkedin`
  

  
    Add the following to your `values.yaml` and deploy:

    ```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    config:
      agentBuilder:
        oauthProviderOrgId: "<your-org-id>"
        oauth:
          linkedinOAuthProvider: "<provider-id>"
    ```
  




To enable Slack OAuth for Agent Builder, you need to create a Slack app and configure it with the required scopes, credentials, and event subscriptions.


  
    Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App**.
  

  
    In **OAuth & Permissions**, add the following scopes:

    * `channels:history`
    * `channels:read`
    * `chat:write`
    * `groups:history`
    * `groups:read`
    * `im:history`
    * `im:read`
    * `im:write`
    * `mpim:history`
    * `team:read`
    * `users:read`
    * `users:read.email`
  

  
    Copy the **Client ID**, **Client Secret**, and **Signing Secret** from the Slack app settings.
  

  
    In LangSmith, go to **Settings > OAuth Providers** and add a new provider:

    * **Client ID**: Find in Slack app
    * **Client Secret**: Find in Slack app
    * **Authorization URL**: `https://slack.com/oauth/v2/authorize`
    * **Token URL**: `https://slack.com/api/oauth.v2.access`
    * **Provider ID**: Unique string, for example: `slack`
  

  
    Add the following redirect URI to your Slack app under **OAuth & Permissions > Redirect URLs**, replacing `<hostname>` with your LangSmith hostname and `<provider-id>` with your provider ID (e.g., `slack`):

    ```
    https:///host-oauth-callback/<provider-id>
    ```
  

  
    1. Get the bot token from **OAuth & Permissions** in your Slack app.
    2. Run the following command:

    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    curl -X POST https://slack.com/api/auth.test \
      -H "Authorization: Bearer <bot-token>"
    ```

    3. Copy the `bot_id` from the response.
  

  
    Add the following to your `values.yaml` and deploy:

    ```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    config:
      agentBuilder:
        oauthProviderOrgId: "<your-org-id>"
        oauth:
          slackOAuthProvider: "<provider-id>"
          slackSigningSecret: "<signing-secret>"
          slackBotId: "<bot-id>"
    ```
  

  
    1. After deployment, go to **Event Subscriptions** in your Slack app and enable events.

    2. Set the **Request URL** to:

       ```
       https:///v1/triggers/webhooks/d809e66e-0000-4000-8000-000000000002
       ```

    3. Add the following bot events:
       * `message.channels`
       * `message.groups`
       * `message.im`
       * `message.mpim`
  

  
    1. Add the Slack bot to the channel you want it to read from.
    2. When configuring the Slack tool or trigger in Agent Builder, provide the **channel ID** and **channel name**.
  
````

## Disable Agent Builder

To disable Agent Builder, set the following to `false` in your `values.yaml`:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
config:
    agentBuilder:
        enabled: false
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/agent-builder-self-hosted.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
