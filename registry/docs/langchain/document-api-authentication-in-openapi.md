# Document API authentication in OpenAPI

Source: https://docs.langchain.com/langsmith/openapi-security

This guide shows how to customize the OpenAPI security schema for your LangSmith API documentation. A well-documented security schema helps API consumers understand how to authenticate with your API and even enables automatic client generation. See the [Authentication & Access Control conceptual guide](/langsmith/auth) for more details about LangGraph's authentication system.

**Implementation vs Documentation**
This guide only covers how to document your security requirements in OpenAPI. To implement the actual authentication logic, see [How to add custom authentication](/langsmith/custom-auth).

This guide applies to all LangSmith deployments (Cloud and self-hosted). It does not apply to usage of the LangGraph open source library if you are not using LangSmith.

## Default schema

The default security scheme varies by deployment type:

By default, LangSmith requires a LangSmith API key in the `x-api-key` header:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
components:
  securitySchemes:
    apiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key
security:
  - apiKeyAuth: []
```

When using one of the LangGraph SDK's, this can be inferred from environment variables.

By default, self-hosted deployments have no security scheme. This means they are to be deployed only on a secured network or with authentication. To add custom authentication, see [How to add custom authentication](/langsmith/custom-auth).

## Custom security schema

To customize the security schema in your OpenAPI documentation, add an `openapi` field to your `auth` configuration in `langgraph.json`. Remember that this only updates the API documentation - you must also implement the corresponding authentication logic as shown in [How to add custom authentication](/langsmith/custom-auth).

Note that LangSmith does not provide authentication endpoints - you'll need to handle user authentication in your client application and pass the resulting credentials to the LangGraph API.

````
```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "auth": {
    "path": "./auth.py:my_auth",  // Implement auth logic here
    "openapi": {
      "securitySchemes": {
        "OAuth2": {
          "type": "oauth2",
          "flows": {
            "implicit": {
              "authorizationUrl": "https://your-auth-server.com/oauth/authorize",
              "scopes": {
                "me": "Read information about the current user",
                "threads": "Access to create and manage threads"
              }
            }
          }
        }
      },
      "security": [
        {"OAuth2": ["me", "threads"]}
      ]
    }
  }
}
```



```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "auth": {
    "path": "./auth.py:my_auth",  // Implement auth logic here
    "openapi": {
      "securitySchemes": {
        "apiKeyAuth": {
          "type": "apiKey",
          "in": "header",
          "name": "X-API-Key"
        }
      },
      "security": [
        {"apiKeyAuth": []}
      ]
    }
  }
}
```
````

## Testing

After updating your configuration:

1. Deploy your application
2. Visit `/docs` to see the updated OpenAPI documentation
3. Try out the endpoints using credentials from your authentication server (make sure you've implemented the authentication logic first)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/openapi-security.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
