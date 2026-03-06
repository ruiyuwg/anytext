## Provider Instance

You can import the default provider instance `bedrock` from `@ai-sdk/amazon-bedrock`:

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
```

If you need a customized setup, you can import `createAmazonBedrock` from `@ai-sdk/amazon-bedrock` and create a provider instance with your settings:

```ts
import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";

const bedrock = createAmazonBedrock({
  region: "us-east-1",
  accessKeyId: "xxxxxxxxx",
  secretAccessKey: "xxxxxxxxx",
  sessionToken: "xxxxxxxxx",
});
```

The credentials settings fall back to environment variable defaults described
below. These may be set by your serverless environment without your awareness,
which can lead to merged/conflicting credential values and provider errors
around failed authentication. If you're experiencing issues be sure you are
explicitly specifying all settings (even if `undefined`) to avoid any
defaults.

You can use the following optional settings to customize the Amazon Bedrock provider instance:

- **region** _string_

  The AWS region that you want to use for the API calls.
  It uses the `AWS_REGION` environment variable by default.

- **accessKeyId** _string_

  The AWS access key ID that you want to use for the API calls.
  It uses the `AWS_ACCESS_KEY_ID` environment variable by default.

- **secretAccessKey** _string_

  The AWS secret access key that you want to use for the API calls.
  It uses the `AWS_SECRET_ACCESS_KEY` environment variable by default.

- **sessionToken** _string_

  Optional. The AWS session token that you want to use for the API calls.
  It uses the `AWS_SESSION_TOKEN` environment variable by default.

- **credentialProvider** _() => Promise<{ accessKeyId: string; secretAccessKey: string; sessionToken?: string; }>_

  Optional. The AWS credential provider chain that you want to use for the API calls.
  It uses the specified credentials by default.

- **apiKey** _string_

  Optional. API key for authenticating requests using Bearer token authentication.
  When provided, this will be used instead of AWS SigV4 authentication.
  It uses the `AWS_BEARER_TOKEN_BEDROCK` environment variable by default.

- **baseURL** _string_

  Optional. Base URL for the Bedrock API calls.
  Useful for custom endpoints or proxy configurations.

- **headers** _Record\<string, string>_

  Optional. Custom headers to include in the requests.

- **fetch** _(input: RequestInfo, init?: RequestInit) => Promise\<Response>_

  Optional. Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.
