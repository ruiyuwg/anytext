# Server headers

Learn how to set custom HTTP headers for all server route responses in Expo Router.

> Server headers are available in SDK 54 and later, and requires [`expo-server`](/versions/latest/sdk/server) to serve your exported application.

Server headers in Expo Router allow you to set custom HTTP headers for security, caching, cookies, and custom metadata on route responses. Headers **only** apply to HTML and API route responses, and are not applicable to static assets such as images, fonts, or JavaScript bundles.

## Setup

Configure headers in the `expo-router` plugin in your [app config](/versions/latest/config/app):

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "X-Frame-Options": "DENY"
          }
        }
      ]
    ]
  }
}
```

Start the development server or export for production:

```sh
npx expo start
npx expo export -p web
```

Headers are automatically applied to all HTML and API route responses.

## Configuration

Headers are configured as an object where keys are header names and values are either strings or arrays of strings.

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Set-Cookie": ["session=abc123; HttpOnly", "preference=dark; Path=/"]
          }
        }
      ]
    ]
  }
}
```

## Examples

Security headers

Add common security headers to protect your application:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "X-XSS-Protection": "1; mode=block"
          }
        }
      ]
    ]
  }
}
```

Cross-Origin headers for SharedArrayBuffer

Some web APIs like [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) require specific Cross-Origin headers. This is required for features like [`expo-sqlite` on web](/versions/latest/sdk/sqlite#web-setup).

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "Cross-Origin-Embedder-Policy": "credentialless",
            "Cross-Origin-Opener-Policy": "same-origin"
          }
        }
      ]
    ]
  }
}
```

Cache-Control headers

Set caching policies for your responses:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "Cache-Control": "public, max-age=3600, s-maxage=86400"
          }
        }
      ]
    ]
  }
}
```

Custom headers

Add custom headers with metadata about your app:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "headers": {
            "X-App-Version": "1.0.0",
            "X-Environment": "production"
          }
        }
      ]
    ]
  }
}
```

## How it works

### Output modes

Server headers work with both output modes configured in your app config:

- **`static`**: Headers are applied when serving pre-rendered HTML files with [`expo-server`](/versions/latest/sdk/server)
- **`server`**: Headers are applied to dynamically rendered responses

### Header precedence

Headers defined in the `expo-router` plugin are applied globally but do not override headers set by API routes. If an API route returns a response with a header that is also defined in the plugin configuration, the route-specific header takes precedence.

For example, if you configure `Cache-Control: public, max-age=3600` globally, but an API route that returns real-time data sets `Cache-Control: no-store`, the API route's header takes precedence.

## Known limitations

- **Redirects**: Headers do not apply to redirect responses
- **Static assets**: Headers are only applied to HTML and API route responses, not to static assets like images, fonts, or JavaScript bundles

## Related

[API Routes](/router/web/api-routes) — Learn how to create server endpoints with Expo Router.

[Server middleware](/router/web/middleware) — Learn how to create middleware that runs for every request to the server.

***

# Static rendering
