# Cookie Strategy

Source: https://payloadcms.com/docs/authentication/cookies

Payload offers the ability to [Authenticate](./overview) via HTTP-only cookies. These can be read from the responses of `login`, `logout`, `refresh`, and `me` auth operations.

**Tip:** You can access the logged-in user from within [Access
Control](../access-control/overview) and [Hooks](../hooks/overview) through
the `req.user` argument. [More details](./token-data).

### Automatic browser inclusion

Modern browsers automatically include `http-only` cookies when making requests directly to URLs—meaning that if you are running your API on `https://example.com`, and you have logged in and visit `https://example.com/test-page`, your browser will automatically include the Payload authentication cookie for you.

### HTTP Authentication

However, if you use `fetch` or similar APIs to retrieve Payload resources from its REST or GraphQL API, you must specify to include credentials (cookies).

Fetch example, including credentials:

```ts
const response = await fetch('http://localhost:3000/api/pages', {
  credentials: 'include',
})

const pages = await response.json()
```

For more about including cookies in requests from your app to your Payload API, [read the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

**Tip:** To make sure you have a Payload cookie set properly in your browser
after logging in, you can use the browsers Developer Tools > Application >
Cookies > \[your-domain-here]. The Developer tools will still show HTTP-only
cookies.

### CSRF Attacks

CSRF (cross-site request forgery) attacks are common and dangerous. By using an HTTP-only cookie, Payload removes many XSS vulnerabilities, however, CSRF attacks can still be possible.

For example, let's say you have a popular app `https://payload-finances.com` that allows users to manage finances, send and receive money. As Payload is using HTTP-only cookies, that means that browsers automatically will include cookies when sending requests to your domain - **no matter what page created the request**.

So, if a user of `https://payload-finances.com` is logged in and is browsing around on the internet, they might stumble onto a page with malicious intent. Let's look at an example:

```ts
// malicious-intent.com
// makes an authenticated request as on your behalf

const maliciousRequest = await fetch(`https://payload-finances.com/api/me`, {
  credentials: 'include',
}).then((res) => await res.json())
```

In this scenario, if your cookie was still valid, malicious-intent.com would be able to make requests like the one above on your behalf. This is a CSRF attack.

### CSRF Prevention

Define domains that you trust and are willing to accept Payload HTTP-only cookie based requests from. Use the `csrf` option on the base Payload Config to do this:

```ts
// payload.config.ts

import { buildConfig } from 'payload'

const config = buildConfig({
  serverURL: 'https://my-payload-instance.com',
  // highlight-start
  csrf: [
    // whitelist of domains to allow cookie auth from
    'https://your-frontend-app.com',
    'https://your-other-frontend-app.com',
    // `config.serverURL` is added by default if defined
  ],
  // highlight-end
  collections: [
    // collections here
  ],
})

export default config
```

#### Cross domain authentication

If your frontend is on a different domain than your Payload API then you will not be able to use HTTP-only cookies for authentication by default as they will be considered third-party cookies by the browser.
There are a few strategies to get around this:

##### 1. Use subdomains

Cookies can cross subdomains without being considered third party cookies, for example if your API is at api.example.com then you can authenticate from example.com.

##### 2. Configure cookies

If option 1 isn't possible, then you can get around this limitation by [configuring your cookies](./overview#config-options) on your authentication collection to achieve the following setup:

```
SameSite: None // allows the cookie to cross domains
Secure: true // ensures it's sent over HTTPS only
HttpOnly: true // ensures it's not accessible via client side JavaScript
```

Configuration example:

```ts
{
  slug: 'users',
  auth: {
    cookies: {
      sameSite: 'None',
      secure: true,
    }
  },
  fields: [
    // your auth fields here
  ]
},
```

If you're configuring [cors](../production/preventing-abuse#cross-origin-resource-sharing-cors) in your Payload config, you won't be able to use a wildcard anymore, you'll need to specify the list of allowed domains.

**Good to know:** Setting up `secure: true` will not work if you're developing
on `http://localhost` or any non-https domain. For local development you
should conditionally set this to `false` based on the environment.

# JWT Strategy

Source: https://payloadcms.com/docs/authentication/jwt

Payload offers the ability to [Authenticate](./overview) via JSON Web Tokens (JWT). These can be read from the responses of `login`, `logout`, `refresh`, and `me` auth operations.

**Tip:** You can access the logged-in user from within [Access
Control](../access-control/overview) and [Hooks](../hooks/overview) through
the `req.user` argument. [More details](./token-data).

### Identifying Users Via The Authorization Header

In addition to authenticating via an HTTP-only cookie, you can also identify users via the `Authorization` header on an HTTP request.

Example:

```ts
const user = await fetch('http://localhost:3000/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'dev@payloadcms.com',
    password: 'password',
  }),
}).then((req) => await req.json())

const request = await fetch('http://localhost:3000', {
  headers: {
    Authorization: `JWT ${user.token}`,
  },
})
```

### Omitting The Token

In some cases you may want to prevent the token from being returned from the auth operations. You can do that by setting `removeTokenFromResponses` to `true` like so:

```ts
import type { CollectionConfig } from 'payload'

export const UsersWithoutJWTs: CollectionConfig = {
  slug: 'users-without-jwts',
  auth: {
    removeTokenFromResponses: true, // highlight-line
  },
}
```

## External JWT Validation

When validating Payload-generated JWT tokens in external services, use the processed secret rather than your original secret key:

```ts
import crypto from 'node:crypto'

const secret = crypto
  .createHash('sha256')
  .update(process.env.PAYLOAD_SECRET)
  .digest('hex')
  .slice(0, 32)
```

**Note:** Payload processes your secret using SHA-256 hash and takes the first
32 characters. This processed value is what's used for JWT operations, not
your original secret.
