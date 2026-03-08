# Getting Started with Edge Functions

Learn how to create, test, and deploy your first Edge Function using the Supabase CLI.

Before getting started, make sure you have the **Supabase CLI installed**. Check out the [CLI installation guide](/docs/guides/cli) for installation methods and troubleshooting.

You can also create and deploy functions directly from the Supabase Dashboard. Check out our [Dashboard Quickstart guide](/docs/guides/functions/quickstart-dashboard).

***

## Step 1: Create or configure your project

If you don't have a project yet, initialize a new Supabase project in your current directory.

```bash
supabase init my-edge-functions-project
cd my-edge-functions-project
```

Or, if you already have a project locally, navigate to your project directory. If your project hasn't been configured for Supabase yet, make sure to run the `supabase init` command.

```bash
cd your-existing-project
supabase init # Initialize Supabase, if you haven't already
```

After this step, you should have a project directory with a `supabase` folder containing `config.toml` and an empty `functions` directory.

***

## Step 2: Create your first function

Within your project, generate a new Edge Function with a basic template:

```bash
supabase functions new hello-world
```

This creates a new function at `supabase/functions/hello-world/index.ts` with this starter code:

```tsx
Deno.serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})
```

This function accepts a JSON payload with a `name` field and returns a greeting message.

After this step, you should have a new file at `supabase/functions/hello-world/index.ts` containing the starter Edge Function code.

***

## Step 3: Test your function locally

Start the local development server to test your function:

```bash
supabase start  # Start all Supabase services
supabase functions serve hello-world
```

The `supabase start` command downloads Docker images, which can take a few minutes initially.

**Function not starting locally?**

- Make sure Docker is running
- Run `supabase stop` then `supabase start` to restart services

**Port already in use?**

- Check what's running with `supabase status`
- Stop other Supabase instances with `supabase stop`

Your function is now running at [`http://localhost:54321/functions/v1/hello-world`](http://localhost:54321/functions/v1/hello-world). Hot reloading is enabled, which means that the server will automatically reload when you save changes to your function code.

After this step, you should have all Supabase services running locally, and your Edge Function serving at the local URL. Keep these terminal windows open.

***

## Step 4: Send a test request

Open a new terminal and test your function with curl:

**Need your `SUPABASE_PUBLISHABLE_KEY`?**

Run `supabase status` to see your local anon key and other credentials.

```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Functions"}'
```

After running this curl command, you should see:

```json
{ "message": "Hello Functions!" }
```

You can also try different inputs. Change `"Functions"` to `"World"` in the curl command and run it again to see the response change.

After this step, you should have successfully tested your Edge Function locally and received a JSON response with your greeting message.

***

## Step 5: Connect to your Supabase project

To deploy your function globally, you need to connect your local project to a Supabase project.

Create one at [database.new](https://database.new/).

First, login to the CLI if you haven't already, and authenticate with Supabase. This opens your browser to authenticate with Supabase; complete the login process in your browser.

```bash
supabase login
```

Next, list your Supabase projects to find your project ID:

```bash
supabase projects list
```

Next, copy your project ID from the output, then connect your local project to your remote Supabase project. Replace `YOUR_PROJECT_ID` with the ID from the previous step.

```bash
supabase link --project-ref [YOUR_PROJECT_ID]
```

After this step, you should have your local project authenticated and linked to your remote Supabase project. You can verify this by running `supabase status`.

***

## Step 6: Deploy to production

Deploy your function to Supabase's global edge network:

```bash
supabase functions deploy hello-world

# If you want to deploy all functions, run the `deploy` command without specifying a function name:
supabase functions deploy
```

The CLI automatically falls back to API-based deployment if Docker isn't available. You can also explicitly use API deployment with the `--use-api` flag:

```bash
supabase functions deploy hello-world --use-api
```

If you want to skip JWT verification, you can add the `--no-verify-jwt` flag for webhooks that don't need authentication:

```bash
supabase functions deploy hello-world --no-verify-jwt
```

**Use `--no-verify-jwt` carefully.** It allows anyone to invoke your function without authentication!

When the deployment is successful, your function is automatically distributed to edge locations worldwide.

Now, you should have your Edge Function deployed and running globally at `https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world`.

***

## Step 7: Test your live function

🎉 Your function is now live! Test it with your project's anon key:

```bash
curl --request POST 'https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Production"}'
```

**Expected response:**

```json
{ "message": "Hello Production!" }
```

The `SUPABASE_PUBLISHABLE_KEY` is different in development and production. To get your production anon key, you can find it in your Supabase dashboard under **Settings > API**.

Finally, you should have a fully deployed Edge Function that you can call from anywhere in the world.

***

## Usage

Now that your function is deployed, you can invoke it from within your app:

````
```jsx
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://[YOUR_PROJECT_ID].supabase.co', 'YOUR_ANON_KEY')

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'JavaScript' },
})

console.log(data) // { message: "Hello JavaScript!" }
```



```jsx
const response = await fetch('https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_ANON_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Fetch' }),
})

const data = await response.json()
console.log(data)
```
````
