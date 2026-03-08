# How to Handle API Keys

Source: https://resend.com/docs/knowledge-base/how-to-handle-api-keys

Learn our suggested practices for handling API keys.

API Keys are secret tokens used to authenticate your requests. They are unique to your account and should be kept confidential. You can create API keys in two ways:

- [via the Resend Dashboard](/dashboard/api-keys/introduction)
- [via the API](/api-reference/api-keys/create-api-key)

  For more help creating, deleting, and managing API keys, see the [API Keys
  documentation](/dashboard/api-keys/introduction).

## Best Practices

It's crucial you handle your API keys securely. Do not share your API key with others or expose it in the browser or other client-side code.

Here are some general guidelines:

- Store API keys in environment variables.
- Never commit API keys to version control.
- Never hard-code API keys in your code or share them publicly.
- Rotate API keys regularly. If an API key hasn't been used in the last 30 days, consider deleting it to keep your account secure.

  When you create an API key in Resend, you can view the key only once. This
  practice helps encourage these best practices.

## Key Rotation

Resend API keys do not expire automatically. Keys remain valid until you manually delete them. Resend includes no built-in expiration date or automatic rotation mechanism, but it is a good security practice to rotate keys regularly.

To rotate an API key:

1. **Create a new key** in the [API Keys Dashboard](https://resend.com/api-keys) or [via the API](/api-reference/api-keys/create-api-key) with the same permission level and domain scope as the key you are replacing.
2. **Update your services** to use the new key. Deploy the change to all environments that reference the old key.
3. **Verify the new key is working** by [filtering by API Key on the logs page](https://resend.com/logs) and checking for recent requests.
4. **Delete the old key** once you have confirmed the new key is active across all services.

Do not delete the old key before the new key is deployed everywhere. Both keys
will work simultaneously, so ensure your new key is working before deleting
your old key so you do not experience downtime during the transition. You can
programmatically [create](/api-reference/api-keys/create-api-key),
[list](/api-reference/api-keys/list-api-keys), and
[delete](/api-reference/api-keys/delete-api-key) API keys to rotate keys.

We recommend rotating keys at least every 90 days, or immediately if you suspect a key has been compromised. Resend flags keys unused for 30+ days in the dashboard to help you identify keys that should be reviewed or deleted.

## Example

Many programming languages have built-in support for environment variables. Here's an example of how to store an API key in an environment variable in a Node.js application.

````
Once you create the API key, you can store it in an environment variable in a `.env` file.

```ts .env theme={"theme":{"light":"github-light","dark":"vesper"}}
RESEND_API_KEY = 're_xxxxxxxxx';
```



Add the `.env` file to your `.gitignore` file to prevent it from being committed to version control. Many frameworks already add `.env` to the `.gitignore` file by default.

```ts .gitignore theme={"theme":{"light":"github-light","dark":"vesper"}}
.env
```



```ts app.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const resend = new Resend(process.env.RESEND_API_KEY);
```


  The environment variables in your `.env` file will *not* be available automatically. You *must* load them. On Node.js `v20` and later, you can pass your `.env` file's variables to your script using the `--env-file=.env` flag. Alternatively, you can use the `dotenv` package to load the variables.
````
