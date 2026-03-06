## Automatic tracking of id using `tracked()` (recommended)

If you `yield` an event using our `tracked()`-helper and include an `id`, the client will automatically reconnect when it gets disconnected and send the last known ID.

You can send an initial `lastEventId` when initializing the subscription and it will be automatically updated as the browser receives data.

- For SSE, this is part of the [`EventSource`-spec](https://html.spec.whatwg.org/multipage/server-sent-events.html#the-last-event-id-header) and will be propagated through `lastEventId` in your `.input()`.
- For WebSockets, our `wsLink` will automatically send the last known ID and update it as the browser receives data.

If you're fetching data based on the `lastEventId`, and capturing all events is critical, make sure you setup the event listener before fetching events from your database as is done in [our full-stack SSE example](https://github.com/trpc/examples-next-sse-chat), this can prevent newly emitted events being ignored while yield'ing the original batch based on `lastEventId`.

```ts
import EventEmitter, { on } from 'events';
import type { Post } from '@prisma/client';
import { tracked } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const ee = new EventEmitter();

export const subRouter = router({
  onPostAdd: publicProcedure
    .input(
      z
        .object({
          // lastEventId is the last event id that the client has received
          // On the first call, it will be whatever was passed in the initial setup
          // If the client reconnects, it will be the last event id that the client received
          lastEventId: z.string().nullish(),
        })
        .optional(),
    )
    .subscription(async function* (opts) {
      // We start by subscribing to the ee so that we don't miss any new events while fetching
      const iterable = ee.toIterable('add', {
        // Passing the AbortSignal from the request automatically cancels the event emitter when the request is aborted
        signal: opts.signal,
      });

      if (opts.input.lastEventId) {
        // [...] get the posts since the last event id and yield them
        // const items = await db.post.findMany({ ... })
        // for (const item of items) {
        //   yield tracked(item.id, item);
        // }
      }
      // listen for new events
      for await (const [data] of on(ee, 'add', {
        signal: opts.signal,
      })) {
        const post = data as Post;
        // tracking the post id ensures the client can reconnect at any time and get the latest events this id
        yield tracked(post.id, post);
      }
    }),
});
```

## Pull data in a loop

This recipe is useful when you want to periodically check for new data from a source like a database and push it to the client.

```ts title="server.ts"
import type { Post } from '@prisma/client';
import { tracked } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const subRouter = router({
  onPostAdd: publicProcedure
    .input(
      z.object({
        // lastEventId is the last event id that the client has received
        // On the first call, it will be whatever was passed in the initial setup
        // If the client reconnects, it will be the last event id that the client received
        // The id is the createdAt of the post
        lastEventId: z.coerce.date().nullish(),
      }),
    )
    .subscription(async function* (opts) {
      // `opts.signal` is an AbortSignal that will be aborted when the client disconnects.
      let lastEventId = opts.input?.lastEventId ?? null;

      // We use a `while` loop that checks `!opts.signal.aborted`
      while (!opts.signal!.aborted) {
        const posts = await db.post.findMany({
          // If we have a `lastEventId`, we only fetch posts created after it.
          where: lastEventId
            ? {
                createdAt: {
                  gt: lastEventId,
                },
              }
            : undefined,
          orderBy: {
            createdAt: 'asc',
          },
        });

        for (const post of posts) {
          // `tracked` is a helper that sends an `id` with each event.
          // This allows the client to resume from the last received event upon reconnection.
          yield tracked(post.createdAt.toJSON(), post);
          lastEventId = post.createdAt;
        }

        // Wait for a bit before polling again to avoid hammering the database.
        await sleep(1_000);
      }
    }),
});
```

## Stopping a subscription from the server

If you need to stop a subscription from the server, simply `return` in the generator function.

```ts
import { publicProcedure, router } from '../trpc';

export const subRouter = router({
  onPostAdd: publicProcedure
    .input(
      z.object({
        lastEventId: z.string().coerce.number().min(0).optional(),
      }),
    )
    .subscription(async function* (opts) {
      let index = opts.input.lastEventId ?? 0;
      while (!opts.signal!.aborted) {
        const idx = index++;
        if (idx > 100) {
          // With this, the subscription will stop and the client will disconnect
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
  }),
});
```

On the client, you just `.unsubscribe()` the subscription.

## Cleanup of side effects

If you need to clean up any side-effects of your subscription you can use the [`try...finally`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return#using_return_with_try...finally) pattern, as `trpc` invokes the `.return()` of the Generator Instance when the subscription stops for any reason.

```ts
import EventEmitter, { on } from 'events';
import type { Post } from '@prisma/client';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const ee = new EventEmitter();

export const subRouter = router({
  onPostAdd: publicProcedure.subscription(async function* (opts) {
    let timeout;
    try {
      for await (const [data] of on(ee, 'add', {
        signal: opts.signal,
      })) {
        timeout = setTimeout(() => console.log('Pretend like this is useful'));
        const post = data as Post;
        yield post;
      }
    } finally {
      if (timeout) clearTimeout(timeout);
    }
  }),
});
```

## Error handling

Throwing an error in a generator function propagates to `trpc`'s `onError()` on the backend.

If the error thrown is a 5xx error, the client will automatically attempt to reconnect based on the last event id that is [tracked using `tracked()`](#tracked). For other errors, the subscription will be cancelled and propagate to the `onError()` callback.
