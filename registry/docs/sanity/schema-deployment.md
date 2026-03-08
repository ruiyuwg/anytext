# Schema Deployment

With the launch of version [3.88.0](https://www.sanity.io/changelog/525de82a-dd7b-40c7-bf38-12248136c339), Sanity Studio gains support for deploying a representation of your content model, in the form of a schema, to your dataset. This allows for robust integration between your finely tuned studios and apps like [Dashboard](https://www.sanity.io/docs/dashboard) and [Canvas](https://www.sanity.io/docs/canvas).

> \[!TIP]
> Working with AI? The [Sanity MCP Server](https://www.sanity.io/docs/ai/mcp-server) can also deploy your schema.

## Overview

The schema commands belong to the `sanity schema` group. They allow you to deploy your schemas at the workspace level to your corresponding combination of `dataset` and `projectId`, making them accessible to various Sanity apps and APIs.

For commands requiring a deploy token (when not logged in with proper privileges), use:

**Terminal**

```sh
SANITY_AUTH_TOKEN=<your-deploy-token> sanity schema <command>
```

## Available Commands

### `sanity schema deploy`

Deploys schema documents to workspace datasets. If you've already run `sanity login`, you typically have deploy permission by default. In CI environments where `sanity login` hasn't been executed, you'll need to provide a deploy token.

**Options:**

- `--workspace <workspace_name>` - Deploy for a specific workspace. Essential for studios with multiple projectIds.
- `--tag <tag>` - Add a tag suffix to the schema id for testing without overwriting existing schemas.
- `--manifest-dir <directory>` - Directory with manifest file (default: `./dist/static`). Crucial for embedded studios.
- `--no-extract-manifest` - Skip manifest generation when nothing has changed.
- `--verbose` - Show detailed deployment information, including the schemaId.

**Examples:**

**Terminal**

```sh
# Deploy all workspace schemas
sanity schema deploy

# Deploy schema for specific workspace
sanity schema deploy --workspace default

# Use existing manifest file
sanity schema deploy --no-extract-manifest
```

### `sanity schema list`

Lists all schemas in the current dataset. This is important for identifying the schema `id` needed for [agent actions](https://www.sanity.io/docs/agent-actions).

**Options:**

- `--json` - Get schema as JSON
- `--id <schema_id>` - Fetch a single schema by id
- `--manifest-dir <directory>` - Directory containing manifest file (default: `./dist/static`)
- `--no-extract-manifest` - Skip manifest generation

**Examples:**

**Terminal**

```sh
# List all schemas
sanity schema list

# Get specific schema
sanity schema list --id _.schemas.workspaceName

# Get schemas as JSON
sanity schema list --json
```

### `sanity schema delete`

Removes schema documents by id. Useful when you need to remove schemas from Canvas or Agent Actions.

**Options:**

- `--ids <schema_id_1,schema_id_2,...>` - Comma-separated list of schema ids to delete
- `--dataset <dataset_name>` - Delete schemas from a specific dataset
- `--manifest-dir <directory>` - Directory containing manifest file (default: `./dist/static`)
- `--no-extract-manifest` - Skip manifest generation

**Examples:**

**Terminal**

```sh
# Delete single schema
sanity schema delete --ids _.schemas.workspaceName

# Delete multiple schemas
sanity schema delete --ids _.schemas.workspaceName,_.schemas.otherWorkspace.tag.taggedSchema
```

### `sanity schema extract`

Extracts studio configuration as JSON files, which are used by other Sanity tools to understand your studio setup.

**Options:**

- `--path <directory>`: Custom destination directory for manifest files (default: `/dist/static`)
- `—-watch:` Run watch mode to run extract as changes to the schema occur.
- `--workspace <name>`: The name of the workspace to generate a schema for.
- `--path`: Optional path to specify destination of the schema file.
- \--enforce-required-fields: Makes the schema generated treat fields marked as required as non-optional. Defaults to false.
- `--format=[groq-type-nodes]`: Format the schema as GROQ type nodes. Only available format at the moment.
- `--watch`: Enable watch mode to re-extract schema on file changes.
- `--watch-patterns <glob>`: Additional glob pattern(s) to watch (can be specified multiple times).

**Examples:**

**Terminal**

```sh
# Extract schema to default location
sanity schema extract

# Extract to custom directory
sanity schema extract --path /public/static

# Extract to a directory with watch
sanity schema extract --path /public/static --watch
```

## Manifest File Structure

The extracted manifest follows this structure:

**manifest.ts**

```
interface CreateManifest {
  version: number        // Current version: 2
  createdAt: string      // ISO timestamp
  workspaces: ManifestWorkspaceFile[]
}

interface ManifestWorkspaceFile {
  name: string
  title?: string
  subtitle?: string
  basePath: string
  dataset: string
  projectId: string
  schema: string        // filename with serialized schema
  tools: string         // filename
  icon: string | null
}
```

## Integration with Other Commands

The manifest system works with several Sanity CLI commands:

1. **Schema Commands** - `deploy`, `list`, and `delete` use the manifest to identify schemas
2. **Build Process** - The manifest is generated during builds and used by Sanity tools

## Additional Commands

The following commands are only relevant for [Typegen](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen) and don't impact server-side schema functionality or compatibility with Dashboard, Canvas, or Agent Actions:

### `sanity schema validate`

Validates schema types in a workspace.

**Options:**

- `--workspace <name>` - Workspace to validate
- `--format <pretty|ndjson|json>` - Output format
- `--level <error|warning>` - Minimum reporting level (default: warning)

### `sanity manifest extract`

Extracts the studio configuration as one or more JSON manifest files.

**Options:**

- `--path`: Optional path to specify destination directory of the manifest files. Default: /dist/static

## Related Commands

- `sanity deploy` - Includes schema deployment in the process
- `sanity typegen generate` - Creates TypeScript types from schema types and GROQ queries

## Things to Remember

1. You don't need to keep your manifest in version control since it's derived from your codebase.
2. For embedded studios, ensure your manifest is located at `<studio-url>/static/create-manifest.json`. You can specify this using the `--path` option.
3. Most commands regenerate manifests by default. Use `--no-extract-manifest` to use existing files.
4. All schema commands require appropriate project permissions.

## Common Errors

- **Manifest Not Found** - Workspace schema file doesn't exist at specified path
- **Invalid Manifest Format** - The manifest file has formatting issues
- **Permission Errors** - Insufficient permissions to read schema from project/dataset
