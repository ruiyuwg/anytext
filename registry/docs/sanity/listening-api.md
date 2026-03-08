# Listening API

> \[!TIP]
> Protip
> Searching for ways to update your sites or apps in real-time as your data changes? [The Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) is a more flexible, efficient choice.
> If you're looking to react to content as it changes, check out [GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks).

The Sanity data store supports realtime updates, allowing API clients to listen for content changes. This is used e.g. for collaborative editing in our content studio, where your view of the document is updated as other people make changes. These updates are available to your own apps as well, and have a wide range of uses, such as:

- Alerting end-users of breaking news stories.
- Updating client state in a multiplayer game.
- Transmitting chat messages between users.
- Controlling IoT (Internet-of-Things) devices such as home automation systems.

Listeners use the [Server-Sent Events protocol](https://www.w3.org/TR/eventsource/), by making an HTTPS request to:

`https://<project-id>.api.sanity.io/v2021-06-07/data/listen/<dataset>?query=<GROQ-query>`

The server will keep the connection open and stream events as they occur for any documents matching the provided [GROQ query](https://www.sanity.io/docs/content-lake/how-queries-work). Further parameters and details are listed in the [listeners reference](https://www.sanity.io/docs/http-reference/listen).

> \[!WARNING]
> Gotcha
> Listener queries do not support joins, since they operate on individual documents, and will ignore order-clauses and projections.

We recommend using one of our [client libraries](https://www.sanity.io/docs/client-libraries) to listen for updates, which will automatically decode events into native data structures and handle stuff like automatic reconnects. Here's an example using our [JavaScript library](https://www.sanity.io/docs/js-client):

```javascript
const query = '*[_type == "comment" && authorId != $ownerId]'
const params = {ownerId: 'myUserId'}

const subscription = client.listen(query, params)
  .subscribe(update => {
    const comment = update.result
    console.log(`${comment.author} commented: ${comment.text}`)
  })
```

## Events

> \[!TIP]
> Protip
> Client libraries may hide or automatically handle certain events, refer to its documentation for details.

### `welcome`

When the listener is set up and ready to serve mutations, you will receive the `welcome` event. It looks like this:

```text
event: welcome
data: {"listenerName": "Ua6BR3GwQ14cnZXrgwCdsF"}

```

You don't need to process this event, but it could be used to kick off other processing. If you are tracking changes to keep a document in sync on the client side, this is a good time to fetch the initial document using the [doc endpoint](https://www.sanity.io/docs/http-reference/doc). Fetching the document after the listener is ready ensures that you receive every subsequent mutation. If you fetch the initial document before setting up the listener, you may miss one or more mutations in the intervening time.

### `mutation`

The most common event is the `mutation` event, which looks like this:

```text
event: mutation
id: lqgiok-skp-eja-k6z-9wrng7k5e#38123cba-286c-45a0-a6d1-3cc4dc43748a
data: <JSON-payload on a single line>
```

The payload is a single line of JSON. The [listener reference](https://www.sanity.io/docs/http-reference/listen) has a complete list of fields and descriptions, but some of the most useful fields are summarized below:

- `documentId`: the ID of the modified document
- `transition`: type of event - `update`, `appear`, or `disappear`
- `identity`: the user making the changes
- `mutations`: an array of mutations as submitted to the [mutate endpoint](https://www.sanity.io/docs/http-reference/mutation)
- `result`: the complete document after the mutations are applied
- `previousRev`: the document revision ID before the mutation
- `resultRev`: the document revision ID after the mutation
- `timestamp`: time when the mutation was applied
- `visibility`: whether the change is visible to queries yet (`query`), or only to subsequent transactions (`transaction`).

> \[!WARNING]
> Gotcha
> Due to the distributed nature of the Sanity backend, mutation events may be sent out of order. A meticulous client would reassemble mutation events as an unbroken chain by comparing `previousRev` and `resultRev`, or use the most recent `result` document as determined by `timestamp`.

### `channelError`

Errors during processing will appear as `channelError` events. These are typically caused by syntax errors in the query, and look like this:

```
event: channelError
message: {"message": <the error message>}

```

### `disconnect`

Normally, if you are disconnected from a listener endpoint you should just immediately reconnect. However, if you receive the `disconnect` event, you should disconnect and stay away. Typically this means you just got a `channelError` that is considered fatal (e.g. a syntax error) and reconnecting will just repeat the ordeal. The event looks like this:

```
event: disconnect
data: {"reason": <a string describing the reason>}

```
