# Access Your Data (CORS)

For security reasons, your project defaults to only respond to queries from `localhost:3333` (the default local development server for Sanity Studio) and the hostname you used when deploying (if you used `sanity deploy`). This is primarily for reading private data and mutating data, like in Studio. Most front end apps connecting to your content won't need additional CORS configurations.

If you want to open up your project to any other origins, you need to add the host name to your allowed CORS origins (you can read more on [browser security & CORS](https://www.sanity.io/docs/content-lake/browser-security-and-cors) or [the technicalities of CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)).

Typical reasons you'd want to add a new CORS origin include:

- You are using a non-default port when developing, so you'd open up to `http://localhost:<your port>`.
- You are deploying a studio outside the Sanity infrastructure (not using the `sanity deploy` command).
- You want to try something out on [JSFiddle](https://jsfiddle.net/), you'd open to `https://fiddle.jshell.net`.

It's good practice to limit your origins to the smallest possible set, and never open a sensitive dataset to public playgrounds like JSFiddle. A JSFiddle example will be able to access projects you open to it with *your credentials *when you run it*.*

## Defining a CORS origin

A CORS origin will be defined using the following format:

```text
protocol://hostname[:port]
```

The protocol and host name are required while the port is optional. Wildcards (`*`) are allowed.

Some valid examples include:

- `https://example.org`
- `https://*.example.org`
- `https://fiddle.jshell.net`
- `http://localhost:3000`
- `http://localhost:3333`

### Allowing credentials

When adding a CORS origin, you will also need to decide whether or not to allow credentials. If you allow credentials, the origin will be allowed to send authenticated requests using the token or session of a logged in user.

If this origin hosts a studio, you will need to allow credentials. Otherwise, you should probably select **not** to allow credentials.

Allowing credentials from wildcard origins is dangerous. Any domain that matches the given pattern will be able to send requests **on the user's behalf** if they are logged in to your studio.

> \[!TIP]
> Common browser errors
> Are you getting one of these errors in your browser console when trying to access your studio?
> **Firefox:** `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://PROJECT_ID.api.sanity.io/v1/users/me. (Reason: expected ‘true’ in CORS header ‘Access-Control-Allow-Credentials’)`
> **Chrome:** `Access to XMLHttpRequest at 'https://PROJECT_ID.api.sanity.io/v1/auth/providers' from origin '<STUDIO_URL>' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'`
> **Safari:** `XMLHttpRequest cannot load https://PROJECT_ID.api.sanity.io/v1/users/me due to access control checks. Credentials flag is true, but Access-Control-Allow-Credentials is not "true".`
> Try allowing credentials on your CORS origin.

## How to add a CORS origin

You can add a CORS origin from your management console or using the command line interface (CLI).

> \[!NOTE]
> Permission required
> To add a CORS origin, you will need the [proper permissions](https://www.sanity.io/docs/user-guides/roles). If you are unable to add a CORS origin, please speak to your project Administrator.

### With the management console

To add a CORS origin from your management console:

1. Go to <https://www.sanity.io/manage>.
2. Pick your project from the list.
3. Go to **Settings**, and then to **API settings**.
4. Under **CORS Origins**, click the **Add CORS origin** button.
5. Enter your **Origin**, select whether or not to **Allow credentials**, and click **Save**. If your origin was added successfully, it will appear at the top of your CORS origins list.

### With the command line interface (CLI)

To add a CORS origin from the CLI:

1. Navigate to your project's folder in your terminal.
2. Run the command `sanity cors add [ORIGIN]`, where `[ORIGIN]` meets the requirements listed above.
3. When prompted, select whether or not to allow credentials.

You can confirm your origin was added with the statement `CORS origin added successfully` or by consulting the list returned by the command `sanity cors list`.
