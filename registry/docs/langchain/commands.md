## Commands

**Usage**

````
The base command for the LangGraph CLI is `langgraph`.

```
langgraph [OPTIONS] COMMAND [ARGS]
```



The base command for the LangGraph.js CLI is `langgraphjs`.

```
npx @langchain/langgraph-cli [OPTIONS] COMMAND [ARGS]
```

We recommend using `npx` to always use the latest version of the CLI.
````

### `dev`

````
Run LangGraph API server in development mode with hot reloading and debugging capabilities. This lightweight server requires no Docker installation and is suitable for development and testing. State is persisted to a local directory.

Currently, the CLI only supports Python >= 3.11.


  If you need more information on when to use `langgraph dev` vs `langgraph up`, refer to the [Local development & testing guide](/langsmith/local-dev-testing) for a detailed comparison.


**Installation**

This command requires the "inmem" extra to be installed:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langgraph-cli[inmem]"
```

**Usage**

```
langgraph dev [OPTIONS]
```

**Options**

| Option                        | Default          | Description                                                                                                                                                                  |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-c, --config FILE`           | `langgraph.json` | Path to configuration file declaring dependencies, graphs and environment variables                                                                                          |
| `--host TEXT`                 | `127.0.0.1`      | Host to bind the server to                                                                                                                                                   |
| `--port INTEGER`              | `2024`           | Port to bind the server to                                                                                                                                                   |
| `--no-reload`                 |                  | Disable auto-reload                                                                                                                                                          |
| `--n-jobs-per-worker INTEGER` |                  | Number of jobs per worker. Default is 10                                                                                                                                     |
| `--debug-port INTEGER`        |                  | Port for debugger to listen on                                                                                                                                               |
| `--wait-for-client`           | `False`          | Wait for a debugger client to connect to the debug port before starting the server                                                                                           |
| `--no-browser`                |                  | Skip automatically opening the browser when the server starts                                                                                                                |
| `--studio-url TEXT`           |                  | URL of the Studio instance to connect to. Defaults to [https://smith.langchain.com](https://smith.langchain.com)                                                             |
| `--allow-blocking`            | `False`          | Do not raise errors for synchronous I/O blocking operations in your code (added in `0.2.6`)                                                                                  |
| `--tunnel`                    | `False`          | Expose the local server via a public tunnel (Cloudflare) for remote frontend access. This avoids issues with browsers like Safari or networks blocking localhost connections |
| `--help`                      |                  | Display command documentation                                                                                                                                                |



Run LangGraph API server in development mode with hot reloading capabilities. This lightweight server requires no Docker installation and is suitable for development and testing. State is persisted to a local directory.

**Usage**

```
npx @langchain/langgraph-cli dev [OPTIONS]
```

**Options**

| Option                        | Default          | Description                                                                                                                                                      |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-c, --config FILE`           | `langgraph.json` | Path to configuration file declaring dependencies, graphs and environment variables                                                                              |
| `--host TEXT`                 | `127.0.0.1`      | Host to bind the server to                                                                                                                                       |
| `--port INTEGER`              | `2024`           | Port to bind the server to                                                                                                                                       |
| `--no-reload`                 |                  | Disable auto-reload                                                                                                                                              |
| `--n-jobs-per-worker INTEGER` |                  | Number of jobs per worker. Default is 10                                                                                                                         |
| `--debug-port INTEGER`        |                  | Port for debugger to listen on                                                                                                                                   |
| `--wait-for-client`           | `False`          | Wait for a debugger client to connect to the debug port before starting the server                                                                               |
| `--no-browser`                |                  | Skip automatically opening the browser when the server starts                                                                                                    |
| `--studio-url TEXT`           |                  | URL of the Studio instance to connect to. Defaults to [https://smith.langchain.com](https://smith.langchain.com)                                                 |
| `--allow-blocking`            | `False`          | Do not raise errors for synchronous I/O blocking operations in your code                                                                                         |
| `--tunnel`                    | `False`          | Expose the local server via a public tunnel (Cloudflare) for remote frontend access. This avoids issues with browsers or networks blocking localhost connections |
| `--help`                      |                  | Display command documentation                                                                                                                                    |
````

### `build`

````
Build LangSmith API server Docker image.

**Usage**

```
langgraph build [OPTIONS]
```

**Options**

| Option                                | Default          | Description                                                                                                                                             |
| ------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--platform TEXT`                     |                  | Target platform(s) to build the Docker image for. Example: `langgraph build --platform linux/amd64,linux/arm64`                                         |
| `-t, --tag TEXT`                      |                  | **Required**. Tag for the Docker image. Example: `langgraph build -t my-image`                                                                          |
| `--pull / --no-pull`                  | `--pull`         | Build with latest remote Docker image. Use `--no-pull` for running the LangSmith API server with locally built images.                                  |
| `-c, --config FILE`                   | `langgraph.json` | Path to configuration file declaring dependencies, graphs and environment variables.                                                                    |
| `--build-command TEXT`\*   |                  | Build command to run. Runs from the directory where your `langgraph.json` file lives. Example: `langgraph build --build-command "yarn run turbo build"` |
| `--install-command TEXT`\* |                  | Install command to run. Runs from the directory where you call `langgraph build` from. Example: `langgraph build --install-command "yarn install"`      |
| `--help`                              |                  | Display command documentation.                                                                                                                          |

\*Only supported for JS deployments, will have no impact on Python deployments.



Build LangSmith API server Docker image.

**Usage**

```
npx @langchain/langgraph-cli build [OPTIONS]
```

**Options**

| Option              | Default          | Description                                                                                                     |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `--platform TEXT`   |                  | Target platform(s) to build the Docker image for. Example: `langgraph build --platform linux/amd64,linux/arm64` |
| `-t, --tag TEXT`    |                  | **Required**. Tag for the Docker image. Example: `langgraph build -t my-image`                                  |
| `--no-pull`         |                  | Use locally built images. Defaults to `false` to build with latest remote Docker image.                         |
| `-c, --config FILE` | `langgraph.json` | Path to configuration file declaring dependencies, graphs and environment variables.                            |
| `--help`            |                  | Display command documentation.                                                                                  |
````

### `deploy`

````
This command is in beta and under active development. Expect frequent updates and improvements.

Build and deploy a LangGraph image directly to [LangSmith Deployments](/langsmith/deployment). This command builds a Docker image locally, pushes it to a managed registry, and creates or updates a deployment—all in a single step.

**Prerequisites**

* **Docker** must be installed and the Docker daemon must be running. [Install Docker Desktop](https://docs.docker.com/get-docker/).
* **Docker Buildx** is required on non-x86\_64 machines (e.g., Apple Silicon) to cross-compile for linux/amd64. [Learn more about Buildx](https://docs.docker.com/build/install-buildx/).
* A [**LangSmith API key**](/langsmith/create-account-api-key) with access to Deployments.

Remote builds (no Docker required) are coming in a future update.

**Usage**

```
langgraph deploy [OPTIONS] [DOCKER_BUILD_ARGS]
```

This command also accepts all [`langgraph build`](#build) flags (`--platform`, `-t`, `--pull`, `--no-pull`, `-c`). For details, refer to `langgraph build --help`.

**Options**

| Option                   | Default                | Description                                                                                                                                                       |
| ------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--api-key TEXT`         |                        | API key for LangSmith Deployments. Can also be set via `LANGGRAPH_HOST_API_KEY`, `LANGSMITH_API_KEY`, or `LANGCHAIN_API_KEY` environment variable or `.env` file. |
| `--name TEXT`            | Current directory name | Deployment name. Can also be set via `LANGSMITH_DEPLOYMENT_NAME` environment variable or `.env` file.                                                             |
| `--deployment-id TEXT`   |                        | ID of an existing deployment to update. If omitted, `--name` is used to find or create the deployment.                                                            |
| `--deployment-type TEXT` | `dev`                  | Deployment type (`dev` or `prod`). Used when creating a new deployment.                                                                                           |
| `--no-wait`              | `False`                | Skip waiting for deployment status after pushing.                                                                                                                 |
| `--verbose`              | `False`                | Show detailed output including Docker build and push logs.                                                                                                        |
| `--help`                 |                        | Display command documentation.                                                                                                                                    |

**Example**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Deploy with API key from .env file
langgraph deploy

# Deploy with inline API key
LANGSMITH_API_KEY=lsv2_... langgraph deploy

# Update an existing deployment
langgraph deploy --deployment-id abc123

# Deploy with inline deployment name
LANGSMITH_DEPLOYMENT_NAME=my-agent langgraph deploy
```

The `langgraph deploy` command can only update deployments that were originally created by `langgraph deploy`. Deployments created through other methods (e.g., the LangSmith UI or GitHub integration) cannot be updated with this command.

#### `deploy list`

List LangSmith Deployments.

**Usage**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy list [OPTIONS]
```

**Options**

| Option                 | Default | Description                                                                                                                             |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--name-contains TEXT` |         | Only show deployments whose names contain this value.                                                                                   |
| `--api-key TEXT`       |         | API key. Can also be set via `LANGGRAPH_HOST_API_KEY`, `LANGSMITH_API_KEY`, or `LANGCHAIN_API_KEY` environment variable or `.env` file. |
| `--help`               |         | Show this message and exit.                                                                                                             |

#### `deploy revisions`

\[Beta] Manage deployment revisions.

**Usage**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy revisions [OPTIONS] COMMAND [ARGS]...
```

**Options**

| Option   | Default | Description                 |
| -------- | ------- | --------------------------- |
| `--help` |         | Show this message and exit. |

**Commands**

| Command | Description                                        |
| ------- | -------------------------------------------------- |
| `list`  | \[Beta] List revisions for a LangSmith Deployment. |

#### `deploy revisions list`

\[Beta] List revisions for a LangSmith Deployment.

Use [`deploy list`](#deploy-list) to list deployment IDs.

**Usage**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy revisions list [OPTIONS] DEPLOYMENT_ID
```

**Options**

| Option            | Default | Description                                                                                                                             |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--limit INTEGER` | `10`    | Maximum number of revisions to return.                                                                                                  |
| `--api-key TEXT`  |         | API key. Can also be set via `LANGGRAPH_HOST_API_KEY`, `LANGSMITH_API_KEY`, or `LANGCHAIN_API_KEY` environment variable or `.env` file. |
| `--help`          |         | Show this message and exit.                                                                                                             |

#### `deploy delete`

Delete a LangSmith Deployment.

Use [`deploy list`](#deploy-list) to find the deployment ID to delete.

**Usage**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy delete [OPTIONS] DEPLOYMENT_ID
```

**Options**

| Option           | Default | Description                                                                                                                             |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--force`        |         | Delete without prompting for confirmation.                                                                                              |
| `--api-key TEXT` |         | API key. Can also be set via `LANGGRAPH_HOST_API_KEY`, `LANGSMITH_API_KEY`, or `LANGCHAIN_API_KEY` environment variable or `.env` file. |
| `--help`         |         | Show this message and exit.                                                                                                             |

#### `deploy logs`

Fetch LangSmith Deployment logs. Use `deploy` for agent runtime logs, or `build` for remote build logs.

**Usage**

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy logs [OPTIONS]
```

**Options**

| Option                                            | Default                | Description                                                                                                                                        |
| ------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-f, --follow`                                    | `False`                | Continuously poll for new logs.                                                                                                                    |
| `--end-time TEXT`                                 |                        | ISO8601 end time. Example: `2026-03-08T00:00:00Z`.                                                                                                 |
| `--start-time TEXT`                               |                        | ISO8601 start time. Example: `2026-03-08T00:00:00Z`.                                                                                               |
| `-q, --query TEXT`                                |                        | Search string filter.                                                                                                                              |
| `--limit INTEGER`                                 | `100`                  | Max log entries to fetch.                                                                                                                          |
| `--level [DEBUG\|INFO\|WARNING\|ERROR\|CRITICAL]` |                        | Filter by log level.                                                                                                                               |
| `--revision-id TEXT`                              |                        | Specific revision ID. For build logs, defaults to the latest revision.                                                                             |
| `--type [deploy\|build]`                          | `deploy`               | Log stream to fetch. `deploy` shows agent server runtime logs. `build` shows remote build logs.                                                    |
| `--deployment-id TEXT`                            |                        | Deployment ID. If omitted, `--name` is used to find the deployment.                                                                                |
| `--name TEXT`                                     | Current directory name | Deployment name. Can also be set via `LANGSMITH_DEPLOYMENT_NAME` environment variable or `.env` file. Used when `--deployment-id` is not provided. |
| `--api-key TEXT`                                  |                        | API key. Can also be set via `LANGGRAPH_HOST_API_KEY`, `LANGSMITH_API_KEY`, or `LANGCHAIN_API_KEY` environment variable or `.env` file.            |
| `--help`                                          |                        | Show this message and exit.                                                                                                                        |
````

### `up`

````
Start LangGraph API server. For local testing, requires a LangSmith API key with access to LangSmith. Requires a license key for production use.


  If you need more information on when to use `langgraph dev` vs `langgraph up`, refer to the [Local development & testing guide](/langsmith/local-dev-testing) for a detailed comparison.


**Usage**

```
langgraph up [OPTIONS]
```

**Options**

| Option                       | Default                   | Description                                                                                                             |
| ---------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `--wait`                     |                           | Wait for services to start before returning. Implies --detach                                                           |
| `--base-image TEXT`          | `langchain/langgraph-api` | Base image to use for the LangGraph API server. Pin to specific versions using version tags.                            |
| `--image TEXT`               |                           | Docker image to use for the langgraph-api service. If specified, skips building and uses this image directly.           |
| `--postgres-uri TEXT`        | Local database            | Postgres URI to use for the database.                                                                                   |
| `--watch`                    |                           | Restart on file changes                                                                                                 |
| `--debugger-base-url TEXT`   | `http://127.0.0.1:[PORT]` | URL used by the debugger to access LangGraph API.                                                                       |
| `--debugger-port INTEGER`    |                           | Pull the debugger image locally and serve the UI on specified port                                                      |
| `--verbose`                  |                           | Show more output from the server logs.                                                                                  |
| `-c, --config FILE`          | `langgraph.json`          | Path to configuration file declaring dependencies, graphs and environment variables.                                    |
| `-d, --docker-compose FILE`  |                           | Path to docker-compose.yml file with additional services to launch.                                                     |
| `-p, --port INTEGER`         | `8123`                    | Port to expose. Example: `langgraph up --port 8000`                                                                     |
| `--pull / --no-pull`         | `pull`                    | Pull latest images. Use `--no-pull` for running the server with locally-built images. Example: `langgraph up --no-pull` |
| `--recreate / --no-recreate` | `no-recreate`             | Recreate containers even if their configuration and image haven't changed                                               |
| `--help`                     |                           | Display command documentation.                                                                                          |



Start LangGraph API server. For local testing, requires a LangSmith API key with access to LangSmith. Requires a license key for production use.

**Usage**

```
npx @langchain/langgraph-cli up [OPTIONS]
```

**Options**

| Option                                   | Default                                | Description                                                                                                   |
| ---------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `--wait`                    |                                        | Wait for services to start before returning. Implies --detach                                                 |
| `--base-image TEXT`         | `langchain/langgraph-api` | Base image to use for the LangGraph API server. Pin to specific versions using version tags.                  |
| `--image TEXT`              |                                        | Docker image to use for the langgraph-api service. If specified, skips building and uses this image directly. |
| `--postgres-uri TEXT`       | Local database                         | Postgres URI to use for the database.                                                                         |
| `--watch`                   |                                        | Restart on file changes                                                                                       |
| `-c, --config FILE`         | `langgraph.json`                       | Path to configuration file declaring dependencies, graphs and environment variables.                          |
| `-d, --docker-compose FILE` |                                        | Path to docker-compose.yml file with additional services to launch.                                           |
| `-p, --port INTEGER`        | `8123`                                 | Port to expose. Example: `langgraph up --port 8000`                                                           |
| `--no-pull`                 |                                        | Use locally built images. Defaults to `false` to build with latest remote Docker image.                       |
| `--recreate`                |                                        | Recreate containers even if their configuration and image haven't changed                                     |
| `--help`                    |                                        | Display command documentation.                                                                                |
````

### `dockerfile`

````
Generate a Dockerfile for building a LangSmith API server Docker image.

**Usage**

```
langgraph dockerfile [OPTIONS] SAVE_PATH
```

**Options**

| Option              | Default          | Description                                                                                                     |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `-c, --config FILE` | `langgraph.json` | Path to the [configuration file](#configuration-file) declaring dependencies, graphs and environment variables. |
| `--help`            |                  | Show this message and exit.                                                                                     |

Example:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph dockerfile -c langgraph.json Dockerfile
```

This generates a Dockerfile that looks similar to:

```dockerfile theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
FROM langchain/langgraph-api:3.11

ADD ./pipconf.txt /pipconfig.txt

RUN PIP_CONFIG_FILE=/pipconfig.txt PYTHONDONTWRITEBYTECODE=1 pip install --no-cache-dir -c /api/constraints.txt langchain_community langchain_anthropic langchain_openai wikipedia scikit-learn

ADD ./graphs /deps/__outer_graphs/src
RUN set -ex && \
    for line in '[project]' \
                'name = "graphs"' \
                'version = "0.1"' \
                '[tool.setuptools.package-data]' \
                '"*" = ["**/*"]'; do \
        echo "$line" >> /deps/__outer_graphs/pyproject.toml; \
    done

RUN PIP_CONFIG_FILE=/pipconfig.txt PYTHONDONTWRITEBYTECODE=1 pip install --no-cache-dir -c /api/constraints.txt -e /deps/*

ENV LANGSERVE_GRAPHS='{"agent": "/deps/__outer_graphs/src/agent.py:graph", "storm": "/deps/__outer_graphs/src/storm.py:graph"}'
```

The `langgraph dockerfile` command translates all the configuration in your `langgraph.json` file into Dockerfile commands. When using this command, you will have to re-run it whenever you update your `langgraph.json` file. Otherwise, your changes will not be reflected when you build or run the dockerfile.



Generate a Dockerfile for building a LangSmith API server Docker image.

**Usage**

```
npx @langchain/langgraph-cli dockerfile [OPTIONS] SAVE_PATH
```

**Options**

| Option              | Default          | Description                                                                                                     |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `-c, --config FILE` | `langgraph.json` | Path to the [configuration file](#configuration-file) declaring dependencies, graphs and environment variables. |
| `--help`            |                  | Show this message and exit.                                                                                     |

Example:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx @langchain/langgraph-cli dockerfile -c langgraph.json Dockerfile
```

This generates a Dockerfile that looks similar to:

```dockerfile theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
FROM langchain/langgraphjs-api:20

ADD . /deps/agent

RUN cd /deps/agent && yarn install

ENV LANGSERVE_GRAPHS='{"agent":"./src/react_agent/graph.ts:graph"}'

WORKDIR /deps/agent

RUN (test ! -f /api/langgraph_api/js/build.mts && echo "Prebuild script not found, skipping") || tsx /api/langgraph_api/js/build.mts
```

The `npx @langchain/langgraph-cli dockerfile` command translates all the configuration in your `langgraph.json` file into Dockerfile commands. When using this command, you will have to re-run it whenever you update your `langgraph.json` file. Otherwise, your changes will not be reflected when you build or run the dockerfile.
````

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/cli.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
