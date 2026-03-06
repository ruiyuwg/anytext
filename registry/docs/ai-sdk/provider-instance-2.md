### Provider Instance

You can import the default provider instance `vertex` from `@ai-sdk/google-vertex`:

```ts
import { vertex } from '@ai-sdk/google-vertex';
```

If you need a customized setup, you can import `createVertex` from `@ai-sdk/google-vertex` and create a provider instance with your settings:

```ts
import { createVertex } from '@ai-sdk/google-vertex';

const vertex = createVertex({
  project: 'my-project', // optional
  location: 'us-central1', // optional
});
```

Google Vertex supports multiple authentication methods depending on your runtime environment and requirements.

#### Node.js Runtime

The Node.js runtime is the default runtime supported by the AI SDK. It supports all standard Google Cloud authentication options through the [`google-auth-library`](https://github.com/googleapis/google-auth-library-nodejs?tab=readme-ov-file#ways-to-authenticate). Typical use involves setting a path to a json credentials file in the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. The credentials file can be obtained from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

If you want to customize the Google authentication options you can pass them as options to the `createVertex` function, for example:

```ts
import { createVertex } from '@ai-sdk/google-vertex';

const vertex = createVertex({
  googleAuthOptions: {
    credentials: {
      client_email: 'my-email',
      private_key: 'my-private-key',
    },
  },
});
```

##### Optional Provider Settings

You can use the following optional settings to customize the provider instance:

- **project** *string*

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** *string*

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleAuthOptions** *object*

  Optional. The Authentication options used by the [Google Auth Library](https://github.com/googleapis/google-auth-library-nodejs/). See also the [GoogleAuthOptions](https://github.com/googleapis/google-auth-library-nodejs/blob/08978822e1b7b5961f0e355df51d738e012be392/src/auth/googleauth.ts#L87C18-L87C35) interface.

  - **authClient** *object*
    An `AuthClient` to use.

  - **keyFilename** *string*
    Path to a .json, .pem, or .p12 key file.

  - **keyFile** *string*
    Path to a .json, .pem, or .p12 key file.

  - **credentials** *object*
    Object containing client\_email and private\_key properties, or the external account client options.

  - **clientOptions** *object*
    Options object passed to the constructor of the client.

  - **scopes** *string | string\[]*
    Required scopes for the desired API request.

  - **projectId** *string*
    Your project ID.

  - **universeDomain** *string*
    The default service domain for a given Cloud universe.

- **headers** *Resolvable\<Record\<string, string | undefined>>*

  Headers to include in the requests. Can be provided in multiple formats:

  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **baseURL** *string*

  Optional. Base URL for the Google Vertex API calls e.g. to use proxy servers. By default, it is constructed using the location and project:
  `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google`

#### Edge Runtime

Edge runtimes (like Vercel Edge Functions and Cloudflare Workers) are lightweight JavaScript environments that run closer to users at the network edge.
They only provide a subset of the standard Node.js APIs.
For example, direct file system access is not available, and many Node.js-specific libraries
(including the standard Google Auth library) are not compatible.

The Edge runtime version of the Google Vertex provider supports Google's [Application Default Credentials](https://github.com/googleapis/google-auth-library-nodejs?tab=readme-ov-file#application-default-credentials) through environment variables. The values can be obtained from a json credentials file from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

You can import the default provider instance `vertex` from `@ai-sdk/google-vertex/edge`:

```ts
import { vertex } from '@ai-sdk/google-vertex/edge';
```

The `/edge` sub-module is included in the `@ai-sdk/google-vertex` package, so
you don't need to install it separately. You must import from
`@ai-sdk/google-vertex/edge` to differentiate it from the Node.js provider.

If you need a customized setup, you can import `createVertex` from `@ai-sdk/google-vertex/edge` and create a provider instance with your settings:

```ts
import { createVertex } from '@ai-sdk/google-vertex/edge';

const vertex = createVertex({
  project: 'my-project', // optional
  location: 'us-central1', // optional
});
```

For Edge runtime authentication, you'll need to set these environment variables from your Google Default Application Credentials JSON file:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_PRIVATE_KEY_ID` (optional)

These values can be obtained from a service account JSON file from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

##### Optional Provider Settings

You can use the following optional settings to customize the provider instance:

- **project** *string*

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** *string*

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleCredentials** *object*

  Optional. The credentials used by the Edge provider for authentication. These credentials are typically set through environment variables and are derived from a service account JSON file.

  - **clientEmail** *string*
    The client email from the service account JSON file. Defaults to the contents of the `GOOGLE_CLIENT_EMAIL` environment variable.

  - **privateKey** *string*
    The private key from the service account JSON file. Defaults to the contents of the `GOOGLE_PRIVATE_KEY` environment variable.

  - **privateKeyId** *string*
    The private key ID from the service account JSON file (optional). Defaults to the contents of the `GOOGLE_PRIVATE_KEY_ID` environment variable.

- **headers** *Resolvable\<Record\<string, string | undefined>>*

  Headers to include in the requests. Can be provided in multiple formats:

  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

#### Express Mode

Express mode provides a simplified authentication method using an API key instead of OAuth or service account credentials. When using express mode, the `project` and `location` settings are not required.

```ts
import { createVertex } from '@ai-sdk/google-vertex';

const vertex = createVertex({
  apiKey: process.env.GOOGLE_VERTEX_API_KEY,
});
```

##### Optional Provider Settings

- **apiKey** *string*

  The API key for Google Vertex AI. When provided, the provider uses express mode with API key authentication instead of OAuth.
  It uses the `GOOGLE_VERTEX_API_KEY` environment variable by default.
