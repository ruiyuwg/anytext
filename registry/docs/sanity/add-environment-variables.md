# Add environment variables

Environment variables allow you to keep secrets, like tokens or API keys, hidden and out of version control. Functions allow you to manage environment variables from the CLI so they are available to your deployed functions.

In this guide, you'll learn to add environment variables and access them from within your function code.

Prerequisites:

- Complete the [Functions quick start](https://www.sanity.io/docs/functions/functions-introduction), or be comfortable creating and deploying a function.
- `sanity` CLI v3.88.1 or higher is required to interact with Blueprints and Functions. You can always run the latest CLI commands with `npx sanity@latest`.

## Create a function

If you don't already have a Blueprint and function set up, create them now.

Initialize a Blueprint:

**CLI**

```sh
npx sanity@latest blueprints init
```

Add a function:

**CLI**

```sh
npx sanity blueprints add function
```

In this example, we'll set the function to trigger on **Document Publish**, use **TypeScript**, and set the name to **envExample**.

**Output**

```text
✔ Enter function name: envExample
✔ Choose function type: Document Publish
✔ Choose function language: TypeScript
```

This creates a function in the `functions/envExample` directory.

## Develop locally

Environment variables aren't available locally, but you can simulate them by appending the variable and value to your CLI commands.

Start by updating the function to display the variable. For this example we'll reference a variable called `SANITY_SECRET_SAUCE`.

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  console.log(`The secret: ${process.env.SANITY_SECRET_SAUCE}`)
})
```

**index.js (JavaScript)**

```javascript
export async function handler({context, event}) {
  console.log(`The secret: ${process.env.SANITY_SECRET_SAUCE}`)
}
```

All environment variables are accessible on `process.env`.

To test the function's access to a variable, we'll append it to the CLI command.

**CLI**

```sh
SANITY_SECRET_SAUCE="content operating system" npx sanity functions test envExample
```

If everything worked, you'll see this output:

**Output**

```text
Logs:
The secret: content operating system
```

Now that we know it works locally, let's make it work on Sanity's infrastructure.

## Add an environment variable

Before you can add environment variables, you need to deploy the blueprint.

**CLI**

```sh
npx sanity blueprints deploy
```

With the blueprint deployed, you can add environment variables to the function.

Add them with the `functions env add <function-name> <variable-name> <variable-value>` command.

**CLI**

```sh
npx sanity functions env add envExample SANITY_SECRET_SAUCE "content operating system"
```

Now make changes to your documents, and check the logs for the function. You should see a similar log to the one from the local test.

**CLI**

```sh
npx sanity functions logs envExample
```

You've now deployed and accessed an environment variable from a function.

As with other examples, if you're done with this function and blueprint, it's a good practice to `destroy` it to prevent unexpected billing.

**CLI**

```sh
npx sanity blueprints destroy
```

## Additional `env` commands

As we saw with the command earlier, environment variables are linked to individual functions. In addition to `add`, you can use the following commands to interact with them:

- `sanity functions env list <function-name>`: List all environment variables for the given function.
- `sanity functions env remove <function-name> <variable-name>`: removes the variable from the deployed function.

For additional usage information, add `--help` after each CLI command. You can read more about the CLI in the [Functions CLI reference](https://www.sanity.io/docs/cli-reference/functions).
