[API reference](/reference/overview "API reference")@auth/sveltekit

# @auth/sveltekit

⚠️

`@auth/sveltekit` is currently experimental. The API _might_ change.

SvelteKit Auth is the official SvelteKit integration for Auth.js. It provides a simple way to add authentication to your SvelteKit app in a few lines of code.

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/sveltekit
```

```
pnpm add @auth/sveltekit
```

```
yarn add @auth/sveltekit
```

```
bun add @auth/sveltekit
```

## Usage[](#usage)

src/auth.ts

```
 
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [GitHub],
})
```

### Lazy initialization[](#lazy-initialization)

`@auth/sveltekit` supports lazy initialization where you can read the `event` object to lazily set the configuration. This is especially useful when you have to get the environment variables from `event.platform` for platforms like Cloudflare Workers.

src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [
      GitHub({
        clientId: event.platform.env.AUTH_GITHUB_ID,
        clientSecret: event.platform.env.AUTH_GITHUB_SECRET
      })
    ],
    secret: event.platform.env.AUTH_SECRET,
    trustHost: true
  }
  return authOptions
})
```

Re-export the handle in `src/hooks.server.ts`:

src/hooks.server.ts

```
export { handle } from "./auth"
```

Remember to set the `AUTH_SECRET` [environment variable](https://kit.svelte.dev/docs/modules#$env-dynamic-private). This should be a minimum of 32 characters, random string. On UNIX systems you can use `openssl rand -hex 32` or check out `https://generate-secret.vercel.app/32`.

When deploying your app outside Vercel, set the `AUTH_TRUST_HOST` variable to `true` for other hosting providers like Cloudflare Pages or Netlify.

The callback URL used by the [providers](https://authjs.dev/getting-started/providers) must be set to the following, unless you override [SvelteKitAuthConfig.basePath](sveltekit/types#basepath):

```
[origin]/auth/callback/[provider]
```

## Signing in and Signing out[](#signing-in-and-signing-out)

### Server-side[](#server-side)

`<SignIn />` and `<SignOut />` are components that `@auth/sveltekit` provides out of the box - they handle the sign-in/signout flow, and can be used as-is as a starting point or customized for your own components. This is an example of how to use the `SignIn` and `SignOut` components to login and logout using SvelteKit’s server-side form actions. Another example is available on [our svelte-auth-example repo](https://github.com/nextauthjs/sveltekit-auth-example).

You will need two things to make this work:

1.  Using the components in your SvelteKit app’s frontend (for instance `src/routes/+page.svelte`)
2.  Add the required `page.server.ts` at `/signin` (for `SignIn`) and `/signout` (for `SignOut`) to handle the form actions

src/routes/+page.svelte

```
<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { page } from "$app/stores"
</script>
 
<h1>SvelteKit Auth Example</h1>
<div>
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <img
        src={$page.data.session.user.image}
        class="avatar"
        alt="User Avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <SignOut>
      <div slot="submitButton" class="buttonPrimary">Sign out</div>
    </SignOut>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <SignIn>
      <div slot="submitButton" class="buttonPrimary">Sign in</div>
    </SignIn>
    <SignIn provider="facebook"/>
  {/if}
</div>
```

To set up the form actions, we need to define the files in `src/routes`:

src/routes/signin/+page.server.ts

```
import { signIn } from "../../auth"
import type { Actions } from "./$types"
export const actions: Actions = { default: signIn }
```

src/routes/signout/+page.server.ts

```
import { signOut } from "../../auth"
import type { Actions } from "./$types"
export const actions: Actions = { default: signOut }
```

These routes are customizeable with the `signInPage` and `signOutPage` props on the respective comopnents.

### Client-Side[](#client-side)

We also export two methods from `@auth/sveltekit/client` in order to do client-side sign-in and sign-out actions.

src/routes/+page.svelte

```
<script>
  import { signIn, signOut } from "@auth/sveltekit/client"
  let password
</script>
 
<nav>
  <p>
    These actions are all using the methods exported from
    <code>@auth/sveltekit/client</code>
  </p>
  <div class="actions">
    <div class="wrapper-form">
      <button on:click={() => signIn("github")}>Sign In with GitHub</button>
    </div>
    <div class="wrapper-form">
      <button on:click={() => signIn("discord")}>Sign In with Discord</button>
    </div>
    <div class="wrapper-form">
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input
          bind:value={password}
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button on:click={() => signIn("credentials", { password })}>
        Sign In with Credentials
      </button>
      <button on:click={() => signOut()}>
        Sign Out
      </button>
    </div>
  </div>
</nav>
```

## Managing the session[](#managing-the-session)

The above example checks for a session available in `$page.data.session`, however that needs to be set by us somewhere. If you want this data to be available to all your routes you can add this to `src/routes/+layout.server.ts`. The following code sets the session data in the `$page` store to be available to all routes.

```
import type { LayoutServerLoad } from './$types';
 
export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.auth()
  };
};
```

What you return in the function `LayoutServerLoad` will be available inside the `$page` store, in the `data` property: `$page.data`. In this case we return an object with the `session` property which is what we are accessing in the other code paths.

## Handling authorization[](#handling-authorization)

In SvelteKit there are a few ways you could protect routes from unauthenticated users.

### Per component[](#per-component)

The simplest case is protecting a single page, in which case you should put the logic in the `+page.server.ts` file. Notice in this case that you could also `await event.parent` and grab the session from there, however this implementation works even if you haven’t done the above in your root `+layout.server.ts`

```
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (!session?.user) throw redirect(303, '/auth');
  return {};
};
```

🚫

Make sure to ALWAYS grab the session information from the parent instead of using the store in the case of a `PageLoad`. Not doing so can lead to users being able to incorrectly access protected information in the case the `+layout.server.ts` does not run for that page load. For more information on SvelteKit’s `load` functionality behaviour and its implications on authentication, see this [SvelteKit docs section](https://kit.svelte.dev/docs/load#implications-for-authentication).

You should NOT put authorization logic in a `+layout.server.ts` as the logic is not guaranteed to propagate to leafs in the tree. Prefer to manually protect each route through the `+page.server.ts` file to avoid mistakes. It is possible to force the layout file to run the load function on all routes, however that relies certain behaviours that can change and are not easily checked. For more information about these caveats make sure to read this issue in the SvelteKit repository: [https://github.com/sveltejs/kit/issues/6315](https://github.com/sveltejs/kit/issues/6315)

### Per path[](#per-path)

Another method that’s possible for handling authorization is by restricting certain URIs from being available. For many projects this is better because:

-   This automatically protects actions and api routes in those URIs
-   No code duplication between components
-   Very easy to modify

The way to handle authorization through the URI is to override your handle hook. The handle hook, returned from `SvelteKitAuth` in your `src/auth.ts`, is a function that is designed to receive ALL requests sent to your SvelteKit webapp. You should export it from `src/auth.ts` and import it in your `src/hooks.server.ts`. To use multiple handles in your `hooks.server.ts`, we can use SvelteKit’s `sequence` to execute all of them in series.

src/auth.ts

```
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [GitHub]
}),
```

src/hooks.server.ts

```
import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';
 
async function authorizationHandle({ event, resolve }) {
  // Protect any routes under /authenticated
  if (event.url.pathname.startsWith('/authenticated')) {
    const session = await event.locals.auth();
    if (!session) {
      // Redirect to the signin page
      throw redirect(303, '/auth/signin');
    }
  }
 
  // If the request is still here, just proceed as normally
  return resolve(event);
}
 
// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(authenticationHandle, authorizationHandle)
```

Learn more about SvelteKit’s handle hooks and sequence [here](https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks-sequence).

Now any routes under `/authenticated` will be transparently protected by the handle hook. You may add more middleware-like functions to the sequence and also implement more complex authorization business logic inside this file. This can also be used along with the component-based approach in case you need a specific page to be protected and doing it by URI could be faulty.

## Notes[](#notes)

-   If you build your SvelteKit application with `prerender` enabled, pages which have an anchor tag to the default signin page (i.e. `<a href="/auth/signin" ...`) will have trouble building. Please use the [builtin functions or components](https://authjs.dev/getting-started/session-management/login?framework=sveltekit) to sign in or out instead.

Learn more about `@auth/sveltekit` [here](https://vercel.com/blog/announcing-sveltekit-auth).

## AuthError[](#autherror)

Base error class for all Auth.js errors. It’s optimized to be printed in the server logs in a nicely formatted way via the [`logger.error`](https://authjs.dev/reference/core#logger) option.

### Extends[](#extends)

-   [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Properties[](#properties)

#### cause?[](#cause)

```
optional cause: Record<string, unknown> & {
  err: Error;
};
```

##### Type declaration[](#type-declaration)

###### err?[](#err)

```
optional err: Error;
```

##### Overrides[](#overrides)

`Error.cause`

#### type[](#type)

```
type: ErrorType;
```

* * *

## CredentialsSignin[](#credentialssignin)

Can be thrown from the `authorize` callback of the Credentials provider. When an error occurs during the `authorize` callback, two things can happen:

1.  The user is redirected to the signin page, with `error=CredentialsSignin&code=credentials` in the URL. `code` is configurable.
2.  If you throw this error in a framework that handles form actions server-side, this error is thrown, instead of redirecting the user, so you’ll need to handle.

### Extends[](#extends-1)

-   [`SignInError`](core/errors#signinerror)

### Properties[](#properties-1)

#### code[](#code)

```
code: string;
```

The error code that is set in the `code` query parameter of the redirect URL.

⚠ NOTE: This property is going to be included in the URL, so make sure it does not hint at sensitive errors.

The full error is always logged on the server, if you need to debug.

Generally, we don’t recommend hinting specifically if the user had either a wrong username or password specifically, try rather something like “Invalid credentials”.

#### type[](#type-1)

```
static type: string;
```

* * *

## Account[](#account)

Usually contains information about the provider being used and also extends `TokenSet`, which is different tokens returned by OAuth Providers.

### Extends[](#extends-2)

-   [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`TokenEndpointResponse`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `undefined` | `JsonValue`

### Properties[](#properties-2)

#### access\_token?[](#access_token)

```
readonly optional access_token: string;
```

##### Inherited from[](#inherited-from)

`Partial.access_token`

#### authorization\_details?[](#authorization_details)

```
readonly optional authorization_details: AuthorizationDetails[];
```

##### Inherited from[](#inherited-from-1)

`Partial.authorization_details`

#### expires\_at?[](#expires_at)

```
optional expires_at: number;
```

Calculated value based on TokenEndpointResponse.expires\_in.

It is the absolute timestamp (in seconds) when the TokenEndpointResponse.access\_token expires.

This value can be used for implementing token rotation together with TokenEndpointResponse.refresh\_token.

##### See[](#see)

-   [https://authjs.dev/guides/refresh-token-rotation#database-strategy](https://authjs.dev/guides/refresh-token-rotation#database-strategy)
-   [https://www.rfc-editor.org/rfc/rfc6749#section-5.1](https://www.rfc-editor.org/rfc/rfc6749#section-5.1)

#### expires\_in?[](#expires_in)

```
readonly optional expires_in: number;
```

##### Inherited from[](#inherited-from-2)

`Partial.expires_in`

#### id\_token?[](#id_token)

```
readonly optional id_token: string;
```

##### Inherited from[](#inherited-from-3)

`Partial.id_token`

#### provider[](#provider)

```
provider: string;
```

Provider’s id for this account. E.g. “google”. See the full list at [https://authjs.dev/reference/core/providers](https://authjs.dev/reference/core/providers)

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

This value depends on the type of the provider being used to create the account.

-   oauth/oidc: The OAuth account’s id, returned from the `profile()` callback.
-   email: The user’s email address.
-   credentials: `id` returned from the `authorize()` callback

#### refresh\_token?[](#refresh_token)

```
readonly optional refresh_token: string;
```

##### Inherited from[](#inherited-from-4)

`Partial.refresh_token`

#### scope?[](#scope)

```
readonly optional scope: string;
```

##### Inherited from[](#inherited-from-5)

`Partial.scope`

#### token\_type?[](#token_type)

```
readonly optional token_type: Lowercase<string>;
```

NOTE: because the value is case insensitive it is always returned lowercased

##### Inherited from[](#inherited-from-6)

`Partial.token_type`

#### type[](#type-2)

```
type: ProviderType;
```

Provider’s type for this account

#### userId?[](#userid)

```
optional userId: string;
```

id of the user this account belongs to

##### See[](#see-1)

[https://authjs.dev/reference/core/adapters#adapteruser](https://authjs.dev/reference/core/adapters#adapteruser)

* * *

## DefaultSession[](#defaultsession)

### Extended by[](#extended-by)

-   [`Session`](sveltekit#session)

### Properties[](#properties-3)

#### expires[](#expires)

```
expires: string;
```

#### user?[](#user)

```
optional user: User;
```

* * *

## Profile[](#profile)

The user info returned from your OAuth provider.

### See[](#see-2)

[https://openid.net/specs/openid-connect-core-1\_0.html#StandardClaims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Indexable[](#indexable-1)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties-4)

#### address?[](#address)

```
optional address: 
  | null
  | {
  country: null | string;
  formatted: null | string;
  locality: null | string;
  postal_code: null | string;
  region: null | string;
  street_address: null | string;
};
```

#### birthdate?[](#birthdate)

```
optional birthdate: null | string;
```

#### email?[](#email)

```
optional email: null | string;
```

#### email\_verified?[](#email_verified)

```
optional email_verified: null | boolean;
```

#### family\_name?[](#family_name)

```
optional family_name: null | string;
```

#### gender?[](#gender)

```
optional gender: null | string;
```

#### given\_name?[](#given_name)

```
optional given_name: null | string;
```

#### id?[](#id)

```
optional id: null | string;
```

#### locale?[](#locale)

```
optional locale: null | string;
```

#### middle\_name?[](#middle_name)

```
optional middle_name: null | string;
```

#### name?[](#name)

```
optional name: null | string;
```

#### nickname?[](#nickname)

```
optional nickname: null | string;
```

#### phone\_number?[](#phone_number)

```
optional phone_number: null | string;
```

#### picture?[](#picture)

```
optional picture: any;
```

#### preferred\_username?[](#preferred_username)

```
optional preferred_username: null | string;
```

#### profile?[](#profile-1)

```
optional profile: null | string;
```

#### sub?[](#sub)

```
optional sub: null | string;
```

#### updated\_at?[](#updated_at)

```
optional updated_at: 
  | null
  | string
  | number
  | Date;
```

#### website?[](#website)

```
optional website: null | string;
```

#### zoneinfo?[](#zoneinfo)

```
optional zoneinfo: null | string;
```

* * *

## Session[](#session)

The active session of the logged in user.

### Extends[](#extends-3)

-   [`DefaultSession`](sveltekit#defaultsession)

### Properties[](#properties-5)

#### expires[](#expires-1)

```
expires: string;
```

##### Inherited from[](#inherited-from-7)

[`DefaultSession`](sveltekit#defaultsession).[`expires`](sveltekit#expires)

#### user?[](#user-1)

```
optional user: User;
```

##### Inherited from[](#inherited-from-8)

[`DefaultSession`](sveltekit#defaultsession).[`user`](sveltekit#user)

* * *

## User[](#user-2)

The shape of the returned object in the OAuth providers’ `profile` callback, available in the `jwt` and `session` callbacks, or the second parameter of the `session` callback, when using a database.

### Extends[](#extends-4)

-   [`DefaultUser`](core/types#defaultuser)

### Properties[](#properties-6)

#### email?[](#email-1)

```
optional email: null | string;
```

##### Inherited from[](#inherited-from-9)

[`DefaultUser`](core/types#defaultuser).[`email`](core/types#email)

#### id?[](#id-1)

```
optional id: string;
```

##### Inherited from[](#inherited-from-10)

[`DefaultUser`](core/types#defaultuser).[`id`](core/types#id)

#### image?[](#image)

```
optional image: null | string;
```

##### Inherited from[](#inherited-from-11)

[`DefaultUser`](core/types#defaultuser).[`image`](core/types#image)

#### name?[](#name-1)

```
optional name: null | string;
```

##### Inherited from[](#inherited-from-12)

[`DefaultUser`](core/types#defaultuser).[`name`](core/types#name-1)

* * *

## customFetch[](#customfetch)

```
const customFetch: unique symbol;
```

🚫

This option allows you to override the default `fetch` function used by the provider to make requests to the provider’s OAuth endpoints directly. Used incorrectly, it can have security implications.

It can be used to support corporate proxies, custom fetch libraries, cache discovery endpoints, add mocks for testing, logging, set custom headers/params for non-spec compliant providers, etc.

### Example[](#example)

```
import { Auth, customFetch } from "@auth/core"
import GitHub from "@auth/core/providers/github"
 
const dispatcher = new ProxyAgent("my.proxy.server")
function proxy(...args: Parameters<typeof fetch>): ReturnType<typeof fetch> {
  return undici(args[0], { ...(args[1] ?? {}), dispatcher })
}
 
const response = await Auth(request, {
  providers: [GitHub({ [customFetch]: proxy })]
})
```

### See[](#see-3)

-   [https://undici.nodejs.org/#/docs/api/ProxyAgent?id=example-basic-proxy-request-with-local-agent-dispatcher](https://undici.nodejs.org/#/docs/api/ProxyAgent?id=example-basic-proxy-request-with-local-agent-dispatcher)
-   [https://authjs.dev/guides/corporate-proxy](https://authjs.dev/guides/corporate-proxy)

* * *

## SvelteKitAuth()[](#sveltekitauth)

```
function SvelteKitAuth(config): {
  handle: Handle;
  signIn: Action;
  signOut: Action;
}
```

The main entry point to `@auth/sveltekit`

### Parameters[](#parameters)

Parameter

Type

`config`

| [`SvelteKitAuthConfig`](sveltekit/types#sveltekitauthconfig) | (`event`) => `PromiseLike`<[`SvelteKitAuthConfig`](sveltekit/types#sveltekitauthconfig)\>

### Returns[](#returns)

```
{
  handle: Handle;
  signIn: Action;
  signOut: Action;
}
```

#### handle[](#handle)

```
handle: Handle;
```

#### signIn[](#signin)

```
signIn: Action;
```

#### signOut[](#signout)

```
signOut: Action;
```

### See[](#see-4)

[https://sveltekit.authjs.dev](https://sveltekit.authjs.dev)

* * *

## SvelteKitAuthConfig[](#sveltekitauthconfig)

Re-exports [SvelteKitAuthConfig](sveltekit/types#sveltekitauthconfig)

[webauthn](/reference/nextjs/webauthn "webauthn")[actions](/reference/sveltekit/actions "actions")
