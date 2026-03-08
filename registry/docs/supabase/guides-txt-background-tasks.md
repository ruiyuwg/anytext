# Background Tasks

Run background tasks in an Edge Function outside of the request handler.

Edge Function instances can process background tasks outside of the request handler. Background tasks are useful for asynchronous operations like uploading a file to Storage, updating a database, or sending events to a logging service. You can respond to the request immediately and leave the task running in the background.

This allows you to:

- Respond quickly to users while processing continues
- Handle async operations without blocking the response

***

## Overview

You can use `EdgeRuntime.waitUntil(promise)` to explicitly mark background tasks. The Function instance continues to run until the promise provided to `waitUntil` completes.

```ts
// Mark the asyncLongRunningTask's returned promise as a background task.
// ⚠️ We are NOT using `await` because we don't want it to block!
EdgeRuntime.waitUntil(asyncLongRunningTask())

Deno.serve(async (req) => {
  return new Response(...)
})
```

You can call `EdgeRuntime.waitUntil` in the request handler too. This will not block the request.

```ts
Deno.serve(async (req) => {
  // Won't block the request, runs in background.
  EdgeRuntime.waitUntil(asyncLongRunningTask())

  return new Response(...)
})
```

You can listen to the `beforeunload` event handler to be notified when the Function is about to be shut down.

```tsx
EdgeRuntime.waitUntil(asyncLongRunningTask())

// Use beforeunload event handler to be notified when function is about to shutdown
addEventListener('beforeunload', (ev) => {
  console.log('Function will be shutdown due to', ev.detail?.reason)
  // Save state or log the current progress
})

Deno.serve(async (req) => {
  return new Response(...)
})
```

## Handling errors

We recommend using `try`/`catch` blocks within your background task function to handle errors.

You can also add an event listener to [`unhandledrejection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event) to handle any promises without a rejection handler.

```tsx
addEventListener('unhandledrejection', (ev) => {
  console.log('unhandledrejection', ev.reason)
  ev.preventDefault()
})
```

The maximum duration is capped based on the wall-clock, CPU, and memory limits. The function will shut down when it reaches one of these [limits](/docs/guides/functions/limits).

***

## Testing background tasks locally

When testing Edge Functions locally with Supabase CLI, the instances are terminated automatically after a request is completed. This will prevent background tasks from running to completion.

To prevent that, you can update the `supabase/config.toml` with the following settings:

```toml
[edge_runtime]
policy = "per_worker"
```

# Handling Compressed Requests

Handling Gzip compressed requests.

To decompress Gzip bodies, you can use `gunzipSync` from the `node:zlib` API to decompress and then read the body.

```ts
import { gunzipSync } from 'node:zlib'

Deno.serve(async (req) => {
  try {
    // Check if the request body is gzip compressed
    const contentEncoding = req.headers.get('content-encoding')
    if (contentEncoding !== 'gzip') {
      return new Response('Request body is not gzip compressed', {
        status: 400,
      })
    }

    // Read the compressed body
    const compressedBody = await req.arrayBuffer()

    // Decompress the body
    const decompressedBody = gunzipSync(new Uint8Array(compressedBody))

    // Convert the decompressed body to a string
    const decompressedString = new TextDecoder().decode(decompressedBody)
    const data = JSON.parse(decompressedString)

    // Process the decompressed body as needed
    console.log(`Received: ${JSON.stringify(data)}`)

    return new Response('ok', {
      headers: { 'Content-Type': 'text/plain' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response('Error processing request', { status: 500 })
  }
})
```

Edge functions have a runtime memory limit of 150MB. Overly large compressed payloads may result in an out-of-memory error.
