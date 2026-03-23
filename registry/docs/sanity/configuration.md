# Configuration

The `sanity` Command Line Interface (CLI) is a handy tool for managing your Sanity projects in your terminal. Note that there are some commands that can only be run in a project folder and global ones.

[Learn more about the Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli)

## Configuration file

Sanity CLI can read configuration from a `sanity.cli.js` (`.ts`) file in the same folder that the command is run in. It will fall back on the configuration in the `sanity.config.ts` file.

Use `defineCliConfig` from `sanity/cli` to configure the CLI with TypeScript type-checking:

**sanity.cli.ts**

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '<YOUR_PROJECT_ID>',
    dataset: '<YOUR_DATASET>',
  },
  server: {
    hostname: 'localhost',
    port: 3333,
  },
})
```

See the properties table below for all available options.

#### Properties

| Property | Description |
| --- | --- |
| api | Defines the projectId, dataset that the CLI should connect and run its commands on |
| deployment | appId: The ID of your studio or app. Generated when deploying your studio or app for the first time.

autoUpdates: Enable auto-updates for studios. |
| graphql | Defines the GraphQL APIs that the CLI can deploy and interact with. |
| mediaLibrary | aspectsPath: The path to the Media Library aspects directory. When using the CLI to manage aspects, this is the directory they will be read from and written to. |
| project | Contains the property basePath which lets you change the top-level slug for the Studio. You typically need to set this if you embed the Studio in another application where it is one of many routes. Defaults to an empty string. |
| reactCompiler |  |
| reactStrictMode | Wraps the Studio in \<React.StrictMode> root to aid in flagging potential problems related to concurrent features (startTransition, useTransition, useDeferredValue, Suspense). Can also be enabled by setting SANITY\_STUDIO\_REACT\_STRICT\_MODE="true"|"false".  It only applies to sanity dev in development mode and is ignored in sanity build and in production. Defaults to false. |
| server | Defines the hostname and port that the development server should run on. hostname defaults to localhost, and port to 3333. |
| vite | Exposes the default Vite configuration for the Studio so it can be changed and extended. |
| typegen | Configures automatic TypeScript type generation during sanity dev and sanity build. Properties include enabled, path, generates, and overloadClientMethods. See Sanity TypeGen for details. |
| schemaExtraction | Configures automatic schema extraction during sanity dev and sanity build. Properties: enabled, path, enforceRequiredFields, watchPatterns, workspace. |
| app | Configuration for App SDK applications. Properties: organizationId (required), entry (default: './src/App'). |

> \[!WARNING]
> Gotcha
> If you run `sanity --help` outside a folder with a project configuration file and without a specified `projectId` flag, you will only see the subset of commands that's non project specific.

## GraphQLAPIConfig

#### Properties

| Property | Description |
| --- | --- |
| id | ID of GraphQL API. Only (currently) required when using the --api flag for sanity graphql deploy, in order to only deploy a specific API. |
| workspace | Name of workspace containing the schema to deploy

Optional, defaults to default (eg the one used if no name is defined) |
| source | Name of source containing the schema to deploy, within the configured workspace

Optional, defaults to default (eg the one used if no name is defined) |
| tag | API tag for this API - allows deploying multiple different APIs to a single dataset

Optional, defaults to default |
| playground | Whether or not to deploy a "GraphQL Playground" to the API url - an HTML interface that allows running queries and introspecting the schema from the browser. Note that this interface is notsecured in any way, but as the schema definition and API route is generally open, this does notexpose any more information than is otherwise available - it only makes it more discoverable.
Optional, defaults to true |
| generation | Generation of API to auto-generate from schema. New APIs should use the latest (gen3).

Optional, defaults to gen3 |
| nonNullDocumentFields | Define document interface fields (\_id, \_type etc) as non-nullable. If you never use a document type as an object (within other documents) in your schemas,  you can (and probably should) set this to true. Because a document type could be used inside other documents, it is by default set to false, as in these cases these fields can be null.

Optional, defaults to false |
| filterSuffix | Suffix to use for generated filter types.

Optional, Defaults to Filter. |

## Commands

```text
usage: sanity [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   build      Builds the Sanity Studio configuration into a static bundle
   codemod    Runs a code modification script
   cors       Configures CORS settings for Sanity projects
   dataset    Manages datasets, like create or delete, within projects
   debug      Gathers information on Sanity environment
   deploy     Builds and deploys Sanity Studio to Sanity hosting
   dev        Starts a local dev server for Sanity Studio with live reloading
   docs       Opens the Sanity documentation
   documents  Manages documents in your Sanity Content Lake datasets
   exec       Executes a script within the Sanity Studio context
   graphql    Deploys changes to your project's GraphQL API(s)
   help       Displays help information about Sanity
   hook       Sets up and manages webhooks within your Sanity project
   init       Initialize a new Sanity Studio project
   install    Installs dependencies of the current project
   login      Authenticates against the Sanity.io API
   logout     Logs out of the Sanity.io session
   manage     Opens the Sanity project management UI
   migration  Manages content migrations for Content Lake datasets
   preview    Starts a server to preview a production build of Sanity Studio
   projects   Interact with projects connected to your logged in user
   schema     Interacts with Sanity Studio schema configurations
   start      Alias for `sanity preview`
   telemetry  Interact with telemetry settings for your logged in user
   undeploy   Removes the deployed Sanity Studio from Sanity hosting
   users      Manages users of your Sanity project
   versions   Shows the installed versions of Sanity CLI and core components

See 'sanity help <command>' for specific information on a subcommand.
```

> \[!NOTE]
> CLI option flag order
> For commands with option flags, add the option flag to the end after any arguments. When adding option flags to both commands and subcommands, make sure the command flags are before the subcommand. For example:
> `sanity COMMAND [args] [--command-flags] SUBCOMMAND [args] --[subcommand-flags]`
> You can always run `sanity COMMAND --help` for usage tips and examples.

## Changing .sanity.studio

To change the host name of your Sanity-hosted Studio (e.g., `https://<1oldHostName>.sanity.studio` to `https://<2newHostName>.sanity.studio`), please see [Undeploying the Studio](https://www.sanity.io/docs/studio/deployment).

## Debugging `sanity` commands

Not to be confused with [sanity debug](https://www.sanity.io/docs/cli-reference/debug), which returns information about your Sanity environment, you can use the `DEBUG` environment variable with your `sanity` commands to get more verbose results and troubleshoot potential issues.

For full debugger results, use a wildcard on its own (`DEBUG=* sanity <command>`). For more targeted results, you can specify a namespace followed by a wildcard (`DEBUG=sanity* sanity <command>` or `DEBUG=sanity:cli* sanity <command>`).

> \[!NOTE]
> Example
> Least verbose
> `sanity dataset import production.tar.gz dev`
> More verbose, returning all debuggers in the `sanity` namespace
> `DEBUG=sanity* sanity dataset import production.tar.gz dev`
> Most verbose, returning **all** debuggers
> `DEBUG=* sanity dataset import production.tar.gz dev`

Results can also be excluded by using a `-` prefix. `DEBUG=sanity*,-sanity:export* sanity dataset export production production.tar.gz` would return all debuggers in the `sanity` namespace except for `sanity:export` debuggers (e.g., `sanity:cli` and `sanity:client`) during export of the `production` dataset.

## Authorizing the CLI

In most cases, you'll use `sanity login` to authenticate with the Sanity API. When you need to run the CLI unattended, like in a CI/CD environment, set the `SANITY_AUTH_TOKEN` environment variable to a token. You can generate tokens in the [project management dashboard](https://sanity.io/manage).
