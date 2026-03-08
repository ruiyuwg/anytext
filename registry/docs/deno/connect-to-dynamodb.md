# Connect to DynamoDB

URL: https://docs.deno.com/deploy/classic/dynamodb

You are viewing legacy documentation for Deno Deploy Classic. We recommend
migrating to the new
Deno Deploy platform.

Amazon DynamoDB is a fully managed NoSQL database. To persist data to DynamoDB,
follow the steps below:

The tutorial assumes that you have an AWS and Deno Deploy Classic account.

## Gather credentials from DynamoDB

The first step in the process is to generate AWS credentials to programmatically
access DynamoDB.

Generate Credentials:

1. Go to https://console.aws.amazon.com/iam/ and go to the "Users" section.
2. Click on the **Add user** button, fill the **User name** field (maybe use
   `denamo`), and select **Programmatic access** type.
3. Click on **Next: Permissions**, then on **Attach existing policies
   directly**, search for `AmazonDynamoDBFullAccess` and select it.
4. Click on **Next: Tags**, then on **Next: Review** and finally **Create
   user**.
5. Click on **Download .csv** button to download the credentials.

## Create a project in Deno Deploy

Next, let's create a project in Deno Deploy Classic and set it up with the
requisite environment variables:

1. Go to <https://dash.deno.com/new> (Sign in with
   GitHub if you didn't already) and click on **+ Empty Project** under **Deploy
   from the command line**.
2. Now click on the **Settings** button available on the project page.
3. Navigate to **Environment Variables** Section and add the following secrets.

- `AWS_ACCESS_KEY_ID` - Use the value that's available under **Access key ID**
  column in the downloaded CSV.
- `AWS_SECRET_ACCESS_KEY` - Use the value that's available under **Secret access
  key** column in the downloaded CSV.

## Write code that connects to DynamoDB

AWS has an
[official SDK](https://www.npmjs.com/package/@aws-sdk/client-dynamodb) that
works with browsers. As most Deno Deploy's APIs are similar to browsers', the
same SDK works with Deno Deploy. To use the SDK in Deno, import from a cdn like
below and create a client:

```js
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "https://esm.sh/@aws-sdk/client-dynamodb?dts";

// Create a client instance by providing your region information.
// The credentials are automatically obtained from environment variables which
// we set during our project creation step on Deno Deploy, so we don't have to
// pass them manually here.
const client = new ApiFactory().makeNew(DynamoDB);

serve({
  "/songs": handleRequest,
});

async function handleRequest(request) {
  // async/await.
  try {
    const data = await client.send(command);
    // process data.
  } catch (error) {
    // error handling.
  } finally {
    // finally.
  }
}
```

## Deploy application to Deno Deploy Classic

Once you have finished writing your application, you can deploy it on Deno
Deploy Classic.

To do this, go back to your project page at
`https://dash.deno.com/projects/<project-name>`.

You should see a couple of options to deploy:

- [Github integration](ci_github)
- [`deployctl`](./deployctl.md)
  ```sh
  deployctl deploy --project=<project-name> <application-file-name>
  ```

Unless you want to add a build step, we recommend that you select the Github
integration.

For more details on the different ways to deploy on Deno Deploy Classic and the
different configuration options, read [here](how-to-deploy).

***

# Edge Cache

URL: https://docs.deno.com/deploy/classic/edge\_cache

You are viewing legacy documentation for Deno Deploy Classic. We recommend
migrating to the new
Deno Deploy platform.

The [Web Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) is
supported on Deno Deploy. The cache is designed to provide microsecond-level
read latency, multi-GB/s write throughput and unbounded storage, with the
tradeoff of best-effort consistency and durability.

```ts
const cache = await caches.open("my-cache");

Deno.serve(async (req) => {
  const cached = await cache.match(req);
  if (cached) {
    return cached;
  }

  const res = new Response("cached at " + new Date().toISOString());
  await cache.put(req, res.clone());
  return res;
});
```

Cached data is stored in the same Deno Deploy Classic region that runs your
code. Usually your isolate observes read-after-write (RAW) and write-after-write
(WAW) consistency within the same region; however, in rare cases recent writes
can be lost, out-of-order or temporarily invisible.

## Expiration

By default, cached data is persisted for an indefinite period of time. While we
periodically scan and delete inactive objects, an object is usually kept in
cache for at least 30 days.

Edge Cache understands standard HTTP response headers `Expires` and
`Cache-Control`. You can use them to specify an expiration time for every cached
object, for example:

```
Expires: Thu, 22 Aug 2024 01:22:31 GMT
```

or:

```
Cache-Control: max-age=86400
```

## Limitations

- If a response is not constructed from a `Uint8Array` or `string` body, the
  `Content-Length` header needs to be manually set.
- Deletion is not yet supported.

***
