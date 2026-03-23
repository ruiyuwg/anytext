# Local testing

Developing functions require a different mindset than developing your studio or front-end. They react to changes in your data. To avoid making a change, deploying, changing a document, and checking the logs of a function, you can take advantage of the included local testing tools to simulate how your functions will interact with your data.

Prerequisites:

- Complete the [Functions quick start](https://www.sanity.io/docs/functions/function-quickstart), or be comfortable writing and deploying a Sanity Function.
- The latest version of `sanity` CLI (`sanity@latest`) is recommended to interact with Blueprints and Functions as shown in this guide. You can always run the latest CLI commands with `npx sanity@latest`.
- Run the commands in this guide from the directory containing your blueprints configuration. If you're not already logged in, the CLI will prompt you to do so.

> \[!NOTE]
> Keep in mind that testing locally will still verify that any supplied data matches your projections, filters, and any other criteria you've set in your function.

There are two approaches to running Sanity Functions locally. The `dev` command launches the development playground—a visual interface where you can run functions, edit the test data, and view the output. The `test` command offers a more traditional CLI experience where you can pass settings and test data directly as you invoke functions.

## Development playground

The Functions CLI includes an interactive playground where you can test your functions and see results prior to deploying them to Sanity's infrastructure.

Run the following command from your blueprint directory:

**NPM**

```sh
npx sanity@latest functions dev
```

**PNPM**

```sh
pnpx sanity@latest functions dev
```

This starts a local server running at `http://localhost:8080`. You can also specify a port with the `--port` flag.

### Parts of the playground interface

![a screenshot of the functions developer playground](https://cdn.sanity.io/images/3do82whm/next/aa3a190578f91da76db32d2faca062fe705d7939-2784x1758.png)

1. Select which project, dataset, event type, and API version you want to use to test the function.
2. Select the function you wish to test.
3. Toggle **"With Token"** to supply a `token` to the function handler's `context.clientOptions` object. A token is omitted from local testing unless this is toggled.
4. Optionally, pass a valid document ID and select the **download icon** to fetch the document and populate the sample document field with real data.
5. You can edit the document field manually, or use the download document option (4). The input expects a document-like shape. The "After document" field is only available when an *update* or *publish* event is selected.
6. Output from the function is displayed in the console. You can toggle the **"Preserve log"** option to keep logs between runs.
7. Run the function locally with the **"Run"** button.

You can stop the playground at any time by returning to your terminal and pressing `Ctrl+C`.

## The CLI `test` command

If you prefer a CLI-based testing interface, you can run the following command:

**PNPM**

```sh
pnpx sanity@latest functions test functionName
```

**NPM**

```sh
npx sanity@latest functions test functionName
```

Output from your functions will log to the console.

### Common CLI flags

The CLI includes flags to help you supply data and configuration settings to your functions. The following are some common flags in use. To see a full list, see the [functions CLI reference documentation](https://www.sanity.io/docs/cli-reference/functions) or run `npx sanity functions test --help`.

#### Supply data from a document in your dataset

Use the `--dataset`, `--project-id`, and `--document-id` flags to fetch real documents to use as source data for your function.

```sh
pnpx sanity@latest functions test log-event --document-id 52df8926-1afe-413b-bd23-e9efbc32cea3 --project-id 123456 --dataset production
```

#### Simulate event triggers

Sometimes you have logic in your function that reacts to different events, like `delta::operation`. Use the `--event` flag to simulate different event types. The default is `create`.

```sh
pnpx sanity@latest functions test log-event --event delete
```

#### Supply data from a file or string

**JSON file**

```sh
pnpx sanity functions test log-event --file sample-document.json
```

**Data string**

```sh
pnpx sanity functions test log-event --data '{ "_type": "post", "_id": "123456", "content": "test content" }'
```

#### Before/After data for delta GROQ

When paired with `--event update`, you can use `-before` and `-after` on the `--document-id`, `--data`, and `--file` flags to supply changes between two documents for delta GROQ functions.

```sh
pnpx sanity@latest functions test log-event --event update --document-id-before 52df8926-1afe-413b-bd23-e9efbc32cea3 --document-id-after 52354-1ad-654d-4565 --dataset production
```

#### Include your personal token for API calls

Local invocations don't include a `token` by default. By setting the flag, the function handler will have access to it at `context.clientOptions.token`.

```sh
pnpx sanity@latest functions test log-event --with-user-token
```

## Tips and best practices

### Use real data that matches your event

Your blueprint defines a function's event, including the filter and projection. The testing tools respect these settings and won't invoke a function if the incoming document shape wouldn't trigger it in a production setting.

### Detect local invocation

Even when you test your functions locally, your code still executes. If you're interacting with a Sanity dataset or external API from within a function, be careful not to trigger writes accidentally.

You can avoid accidental writes by checking if a function is invoked locally. Both the `test` and `dev` command set the `context.local` value to `true`. It remains undefined in deployed functions.

```
if (context.local) {
  console.log('This code only runs when testing locally.')
}

if (!context.local) {
  console.log('This code only runs in the deployed function.')
}
```

You can also pair this with the `dryRun` functionality in many Sanity libraries and APIs. For example:

**Patch**

```
// will set dryRun to true in test / dev
client
  .patch('bike-123')
  .set({inStock: false})
  .inc({numSold: 1})
  .commit({ dryRun: context.local }) 
```

**Actions**

```
// will set dryRun to true in test
client.action({
    actionType: 'sanity.action.document.create',
    publishedId: 'bike-123',
    attributes: {name: 'Sanity Tandem Extraordinaire', _type: 'bike', seats: 1},
    ifExists: 'fail',
  },
  {dryRun: context.local}
)
```

**Agent Actions**

```
client.agent.action.generate({
  schemaId: 'your-schema-id',
  documentId: 'your-document-id',
  instruction: 'Write a summary for the following topic: $topic',
  instructionParams: {
    topic: 'Grapefruit',
  },
  target: {path: ['body']},
  noWrite: context.local
})
```
