# CORS (Cross-Origin Resource Sharing) support for Invoking from the browser

To invoke edge functions from the browser, you need to handle [CORS Preflight](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) requests.

See the [example on GitHub](https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/browser-with-cors/index.ts).

### Recommended setup

**For `@supabase/supabase-js` v2.95.0 and later:** Import CORS headers directly from the SDK to ensure they stay synchronized with any new headers added to the client libraries.

Import `corsHeaders` from `@supabase/supabase-js/cors` to automatically get all required headers:

```ts index.ts
import { corsHeaders } from '@supabase/supabase-js/cors'

console.log(`Function "browser-with-cors" up and running!`)

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name } = await req.json()
    const data = {
      message: `Hello ${name}!`,
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
```

This approach ensures that when new headers are added to the Supabase SDK, your Edge Functions automatically include them, preventing CORS errors.

#### For versions before 2.95.0

If you're using `@supabase/supabase-js` before v2.95.0, you'll need to hardcode the CORS headers. Add a `cors.ts` file within a [`_shared` folder](/docs/guides/functions/quickstart#organizing-your-edge-functions):

```ts _shared/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
```

Then import it in your function:

```ts index.ts
import { corsHeaders } from '../_shared/cors.ts'

// ... rest of your function code
```

# Dart Edge

Be aware that the Dart Edge project is currently not actively maintained due to numerous breaking changes in Dart's development of (WASM) support.

[Dart Edge](https://docs.dartedge.dev/) is an experimental project that enables you to write Supabase Edge Functions using Dart. It's built and maintained by [Invertase](https://invertase.io/).

For detailed information on how to set up and use Dart Edge with Supabase, refer to the [official Dart Edge documentation for Supabase](https://invertase.docs.page/dart_edge/platform/supabase).

# Local Debugging

Debug your Edge Functions locally using Chrome DevTools for easy breakpoint debugging and code inspection.

Since [v1.171.0](https://github.com/supabase/cli/releases/tag/v1.171.0) the Supabase CLI supports debugging Edge Functions via the v8 inspector protocol, allowing for debugging via [Chrome DevTools](https://developer.chrome.com/docs/devtools/) and other Chromium-based browsers.

### Inspect with Chrome Developer Tools

1. Serve your functions in inspect mode. This will set a breakpoint at the first line to pause script execution before any code runs.
   ```bash
   supabase functions serve --inspect-mode brk
   ```
2. In your Chrome browser navigate to `chrome://inspect`.
3. Click the "Configure..." button to the right of the Discover network targets checkbox.
4. In the Target discovery settings dialog box that opens, enter `127.0.0.1:8083` in the blank space and click the "Done" button to exit the dialog box.
5. Click "Open dedicated DevTools for Node" to complete the preparation for debugging. The opened DevTools window will now listen to any incoming requests to edge-runtime.
6. Send a request to your function running locally, e.g. via curl or Postman. The DevTools window will now pause script execution at first line.
7. In the "Sources" tab navigate to `file://` > `home/deno/functions/<your-function-name>/index.ts`.
8. Use the DevTools to set breakpoints and inspect the execution of your Edge Function.

![Debugging in Chrome DevTools.](/docs/img/guides/functions/debug-chrome-devtools.png)

Now you should have Chrome DevTools configured and ready to debug your functions.
