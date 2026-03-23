# CLI errors

You may run into errors while using the CLI. Listed below are some explanations and common solutions for these errors.

> \[!WARNING]
> Gotcha
> Some error explanations may be missing. If you cannot find the error you are looking for, please use the feedback form to let us know or make a post in our [Slack Community](https://slack.sanity.io).

## Common errors while installing the CLI

### `Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`

This error often occurs when you do not have the correct permission to install packages with `npm`.

You can fix this by changing the owner of the global `node_modules` folder using the following command:

```sh
sudo chown -R $USER /usr/local/lib/node_modules

```

Another option to fix this issue is managing your node version(s) with a version manager like [nvm](https://github.com/nvm-sh/nvm) or [asdf](https://asdf-vm.com/).

### `Error: spawn cmd ENOENT` on Windows machines

If you're using a Windows computer and running into an error that resembles the one above while attempting to install (or use) the Sanity CLI, it's likely that there is an issue with the `$PATH` environment variable of your operating system.

To fix this, ensure the variable is correctly set before rerunning the CLI. More information on troubleshooting can be found in [this thread on Stack Overflow](https://stackoverflow.com/questions/57054403/problem-with-npm-start-error-spawn-cmd-enoent).

## Common errors while using the CLI

### Port 3333 is already in use

Sanity Studio's dev server defaults to port 3333 with strict port checking. If another process is using that port, the server exits with an error instead of switching to a different port.

#### Find and stop the process

**Mac/Linux:**

```bash
lsof -ti :3333 | xargs kill -9
```

**Windows:**

```bash
for /f "tokens=5" %a in ('netstat -ano ^| findstr :3333') do taskkill /PID %a /F
```

#### Use a different port

Pass the `--port` flag to run the dev server on another port:

```bash
sanity dev --port 3334
```

To make this permanent, set `server.port` in your [CLI configuration](https://www.sanity.io/docs/cli-reference/cli-config):

**sanity.cli.ts**

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '<YOUR_PROJECT_ID>',
    dataset: '<YOUR_DATASET>',
  },
  server: {
    port: 3334,
  },
})
```

If you change the port, add the new origin to your project's [CORS origins](https://www.sanity.io/docs/content-lake/cors).

### Command `(start|dev|deploy|...)` is not available outside of a Sanity project context

If you're seeing this error, it means that the CLI can not identify your Sanity project context.

To fix this, try the following:

1. Ensure that you're running the command within the correct directory. Your Sanity project directory should have a `package.json` and a `sanity.json` file.
2. Ensure that you have all of the necessary dependencies installed. Do this by running a `npm install` or `yarn install` if you're managing your dependencies with yarn.
3. Delete your `node_modules` folder, reinstall the project's dependencies, and try running the command again.

If these solutions don't solve the issue, please get in contact with us either through the feedback form at the bottom of the page or our [Slack community](http://slack.sanity.io/).

### Command failed with exit code 1 (EPERM): `npm install next-sanity@7`

If you're seeing this error, it's likely that you're on a Windows computer with insufficient permissions for installing dependencies with `npm`.

To fix this, try:

1. Running your command line program as an Administrator
2. Run `npm cache clean --force` and `npm cache verify`
3. Uninstall and reinstall Node.js

If these solutions don't solve the issue, please get in contact with us either through the feedback form at the bottom of the page or our [Slack community](http://slack.sanity.io/).

### `sanity.cli.(js|ts)` does not contain a project identifier

If you're seeing this error, first ensure that your `sanity.cli.(js|ts)` file contains a `projectId` and `dataset` in the `defineConfig` function. If that's not the case, add those details and retry the command you were attempting to execute.

If your `sanity.cli.(js|ts)` file looks correctly setup with those attributes present, try rerunning the CLI command with `npx`. For example, if you were previously trying to run `sanity deploy`, try running `npx sanity deploy`.

If the command executes without error, it's likely that your local CLI version is out of date. Try upgrading with `npm i -g @sanity/cli`.

If these solutions don't solve the issue, please get in contact with us either through the feedback form at the bottom of the page or our [Slack community](http://slack.sanity.io/).

### Unauthorized - You do not have access to the project with ID

This error occurs when you run a command without the appropriate permissions. Common causes can be:

- Incorrect or misspelled project ID in your `sanity.json`.
- You don't have the rights to deploy a project. Need to be an Administrator or have a deploy token to do this.
  For example: running `sanity graphql deploy` with Write or Read+Write access only will give you this error.

### Unauthorized - User is missing required grant sanity.project/deployStudio to perform this operation

This error occurs on `sanity deploy` when you have access to the studio but without the required permissions to deploy.

To fix this, ensure that you are logged into the CLI with the correct credentials for your project. You can easily do this by logging out of the CLI with the following command:

```sh
npx sanity logout
```

And logging back in again with the following command:

```sh
npx sanity login
```

### Unauthorized - Session not found

This can be one of several issues:

- A temporary issue, please try to run your command again.
- You have specified an invalid token with the `SANITY_AUTH_TOKEN` env variable.
- The session timed out. Try to log out and log in again with the `sanity logout` and `sanity login` CLI commands.
- There was an issue with your logged in user. Try to logout and login again.

# Renamed plugin sanity-plugin-vision

The plugin `sanity-plugin-vision` has been renamed to `@sanity/vision`.

### What should I do?

1. Install the `@sanity/vision` plugin with `sanity install @sanity/vision`
2. Remove `"vision"` from the `plugins` array in your `sanity.json`

# Part name format

A *part name* must start with `part:` and be followed by a prefix that matches the plugin that defines it, as well as an identifier for this particular part.

Ergo: `part:my-plugin/part-identifier`

# Array member type name is the same as a global type

This warning means you have an array type that has a member that is given the same name as one of your global schema types.

When defining an array type in your schema you have the option to quickly declare several "inline" object types and give each one of them their own name to be able to distinguish between them. For example, the following could be used to define an array that can hold different variations of contact info without having to declare `address` and `phone` as separate schema types.

This allows for "locally scoped", inline types that you don't want to re-use across other schema types.

```javascript
{
  name: 'contactInfo',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'address'
      title: 'Address',
      fields: [{name: 'street', type: 'string'}, /* … */]
    },
    {
      type: 'object',
      name: 'phone'
      title: 'Phone',
      fields: [{name: 'number', type: 'string', /* … */}]
    }
  ]
}
```

For inline object types we recommend not giving them the same name as an existing schema type, but either choose a different name, or refer to the globally defined schema type instead.

# Changes in block schema customization properties

As of sanity v3.1 decorators, annotations and styles will accept a `component` property that will handle any custom rendering of these types in the Portable Text input. This new property replaces the `blockEditor.render` property.

The `icon` property can be put directly on the root type as with all other schema types. This is replacing the `blockEditor.icon` property.

So if you previously did this in your block type schema:

```javascript
decorators: [
  {
    title: 'Highlight',
    value: 'highlight',
    blockEditor: {
      icon: MarkerIcon,
      render: highlightRender,
    },
  },
],
```

You should now do this:

```javascript
decorators: [
  {
    title: 'Highlight',
    value: 'highlight',
    icon: MarkerIcon,
    component: Highlight,
  },
],
```

Read more about customizing the [Portable Text Editor](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor)
