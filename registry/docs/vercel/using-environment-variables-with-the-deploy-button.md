# Using Environment Variables with the Deploy Button

## Required environment variables

| Parameter | Type       | Value                                                         |
| --------- | ---------- | ------------------------------------------------------------- |
| `env`     | `string[]` | A comma-separated list of required environment variable keys. |

Use the `env` parameter to require users to fill in values for environment variables that your project needs to run.

The example below shows how to use the `env` parameter in a Deploy Button source URL:

```bash filename="env"
https://vercel.com/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=PUBLIC_API_KEY,API_SECRET_KEY
```

> **⚠️ Warning:** You cannot pass environment variable values using this parameter because the
> URL is saved in the browser history, making it insecure.

## Environment variables default values

| Parameter     | Type     | Value                                                                      |
| ------------- | -------- | -------------------------------------------------------------------------- |
| `envDefaults` | `string` | A JSON-encoded object mapping environment variable keys to default values. |

Set non-sensitive default values for required environment variables with the `envDefaults` parameter. When users click the Deploy Button, these defaults pre-populate the form so they can deploy faster or modify the values if needed.

Default values should only be used for non-sensitive configuration. Examples of appropriate use cases:

- Feature flags (e.g., `ENABLE_ANALYTICS=true`)
- Public API endpoints (e.g., `API_BASE_URL=https://api.example.com`)
- Default configuration values (e.g., `MAX_ITEMS_PER_PAGE=10`)
- Non-sensitive application settings

> **⚠️ Warning:** Never use default values for sensitive data like passwords, API keys, tokens,
> database credentials, or any secret values. Users should always enter these
> manually.

The parameter expects a JSON object where keys are the environment variable names (which must also be listed in the `env` parameter), and values are the default values. The JSON must be URI-encoded.

The example below shows how to use the `envDefaults` parameter:

```bash filename="envDefaults"
https://vercel.com/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=NEXT_PUBLIC_API_URL,ENABLE_FEATURE_X&envDefaults=%7B%22NEXT_PUBLIC_API_URL%22%3A%22https%3A%2F%2Fapi.example.com%22%2C%22ENABLE_FEATURE_X%22%3A%22true%22%7D
```

The decoded JSON in this example is:

```json
{
  "NEXT_PUBLIC_API_URL": "https://api.example.com",
  "ENABLE_FEATURE_X": "true"
}
```

> **💡 Note:** Default values only apply if the environment variable is listed in the `env`
> parameter. Users can still modify or clear these values before deploying.

## Environment variables description

| Parameter        | Type     | Value                                                     |
| ---------------- | -------- | --------------------------------------------------------- |
| `envDescription` | `string` | A short description of the required environment variables |

Add a description that explains what the required environment variables are used for with the `envDescription` parameter. The description should be URL-encoded.

> **💡 Note:** The description provided through this parameter only shows if required
> environment variables are set.

The example below shows how to use the `envDescription` parameter in a Deploy Button source URL:

```bash filename="envDescription"
https://vercel.com/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=PUBLIC_API_KEY&envDescription=Enter%20your%20public%20API%20Key.
```

## Environment variables link

| Parameter | Type     | Value                                                          |
| --------- | -------- | -------------------------------------------------------------- |
| `envLink` | `string` | A link to an explanation of the required environment variables |

Attach a link to external documentation that helps users find the values they need with the `envLink` parameter. This link should point to specific documentation about your environment variables, not top-level docs.

> **💡 Note:** The link provided through this parameter only shows if required environment
> variables are set.

The example below shows how to use the `envLink` parameter in a Deploy Button source URL. Make sure you provide users with a specific link instead of top-level documentation:

```bash filename="envLink"
https://vercel.com/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=PUBLIC_API_KEY&envLink=https%3A%2F%2Fvercel.com%2Fdocs
```

title: "Using Integrations with the Deploy Button"
description: "Learn how to use Integrations with the Vercel Deploy Button."
last\_updated: "2026-03-23T09:40:08.092Z"
source: "https://vercel.com/docs/deploy-button/integrations"
