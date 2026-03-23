# vercel deploy

The `vercel deploy` command deploys Vercel projects, executable from the project's root directory or by specifying a path. You can omit 'deploy' in `vercel deploy`, as `vercel` is the only command that operates without a subcommand. This document will use 'vercel' to refer to `vercel deploy`.

## Usage

```bash filename="terminal"
vercel
```

*Using the \`vercel\` command from the root of a Vercel
project directory.*

## Extended usage

```bash filename="terminal"
vercel --cwd [path-to-project]
```

*Using the \`vercel\` command and supplying a path to the
root directory of the Vercel project.*

```bash filename="terminal"
vercel deploy --prebuilt
```

*Using the \`vercel\` command to deploy a prebuilt Vercel
project, typically with \`vercel build\`. See
vercel build and
Build Output API for more details.*

## Standard output usage

When deploying, `stdout` is always the Deployment URL.

```bash filename="terminal"
vercel > deployment-url.txt
```

*Using the \`vercel\` command to deploy and write
\`stdout\` to a text file. When deploying,
\`stdout\` is always the Deployment URL.*

### Deploying to a custom domain

In the following example, you create a bash script that you include in your CI/CD workflow. The goal is to have all preview deployments be aliased to a custom domain so that developers can bookmark the preview deployment URL. Note that you may need to [define the scope](/docs/cli/global-options#scope) when using `vercel alias`

```bash filename="deployDomain.sh"
# save stdout and stderr to files
vercel deploy >deployment-url.txt 2>error.txt

# check the exit code
code=$?
if [ $code -eq 0 ]; then
    # Now you can use the deployment url from stdout for the next step of your workflow
    deploymentUrl=`cat deployment-url.txt`
    vercel alias $deploymentUrl my-custom-domain.com
else
    # Handle the error
    errorMessage=`cat error.txt`
    echo "There was an error: $errorMessage"
fi
```

*The script deploys your project and assigns the deployment URL saved in
\`stdout\` to the custom domain using
\`vercel alias\`.*

## Standard error usage

If you need to check for errors when the command is executed such as in a CI/CD workflow,
use `stderr`. If the exit code is anything other than `0`, an error has occurred. The
following example demonstrates a script that checks if the exit code is not equal to 0:

```bash filename="checkDeploy.sh"
# save stdout and stderr to files
vercel deploy >deployment-url.txt 2>error.txt

# check the exit code
code=$?
if [ $code -eq 0 ]; then
    # Now you can use the deployment url from stdout for the next step of your workflow
    deploymentUrl=`cat deployment-url.txt`
    echo $deploymentUrl
else
    # Handle the error
    errorMessage=`cat error.txt`
    echo "There was an error: $errorMessage"
fi
```

## Unique options

These are options that only apply to the `vercel` command.

### Prebuilt

The `--prebuilt` option can be used to upload and deploy the results of a previous `vc build` execution located in the .vercel/output directory. See [vercel build](/docs/cli/build) and [Build Output API](/docs/build-output-api/v3) for more details.

#### When not to use --prebuilt

When using the `--prebuilt` flag, [System Environment Variables](/docs/environment-variables/system-environment-variables) will be missing at build time, so frameworks that rely on them at build time may not function correctly.

For Next.js projects, [Skew Protection](/docs/skew-protection) is supported with `--prebuilt` by configuring a custom deployment ID. See [Custom Deployment ID](/docs/skew-protection#custom-deployment-id) for setup instructions. Prebuilt deployments cannot use `dpl_` as a user-configured deployment ID prefix.

If you need System Environment Variables at build time, do not use the `--prebuilt` flag or use Git-based deployments.

```bash filename="terminal"
vercel --prebuilt
```

You should also consider using the [archive](/docs/cli/deploy#archive) option to minimize the number of files uploaded and avoid hitting upload limits:

```bash filename="terminal"
# Build the project locally
vercel build

# Deploy the pre-built project, archiving it as a .tgz file
vercel deploy --prebuilt --archive=tgz
```

This example uses the `vercel build` command to build your project locally. It then uses the `--prebuilt` and `--archive=tgz` options on the `deploy` command to compress the build output and then deploy it.

### Build env

The `--build-env` option, shorthand `-b`, can be used to provide environment variables to the [build step](/docs/deployments/configure-a-build).

```bash filename="terminal"
vercel --build-env KEY1=value1 --build-env KEY2=value2
```

*Using the \`vercel\` command with the
\`--build-env\` option.*

### Yes

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel project.
The questions will be answered with the provided defaults, inferred from `vercel.json` and the folder name.

```bash filename="terminal"
vercel --yes
```

*Using the \`vercel\` command with the
\`--yes\` option.*

### Env

The `--env` option, shorthand `-e`, can be used to provide [environment variables](/docs/environment-variables) at runtime.

```bash filename="terminal"
vercel --env KEY1=value1 --env KEY2=value2
```

*Using the \`vercel\` command with the
\`--env\` option.*

### Name

> **💡 Note:** The `--name` option has been deprecated in favor of
> [Vercel project linking](/docs/cli/project-linking), which allows you to link
> a Vercel project to your local codebase when you run
> `vercel`.

The `--name` option, shorthand `-n`, can be used to provide a Vercel project name for a deployment.

```bash filename="terminal"
vercel --name foo
```

*Using the \`vercel\` command with the
\`--name\` option.*

### Prod

The `--prod` option can be used to create a deployment for a production domain specified in the Vercel project dashboard.

```bash filename="terminal"
vercel --prod
```

*Using the \`vercel\` command with the
\`--prod\` option.*

### Skip Domain

> **⚠️ Warning:** This CLI option will override the [Auto-assign Custom Production
> Domains](/docs/deployments/promoting-a-deployment#staging-and-promoting-a-production-deployment)
> project setting.

Must be used with [`--prod`](#prod). The `--skip-domain` option will disable the automatic promotion (aliasing) of the relevant domains to a new production deployment. You can use [`vercel promote`](/docs/cli/promote) to complete the domain-assignment process later.

```bash filename="terminal"
vercel --prod --skip-domain
```

*Using the \`vercel\` command with the
\`--skip-domain\` option.*

### Public

The `--public` option can be used to ensure the source code is publicly available at the `/_src` path.

```bash filename="terminal"
vercel --public
```

*Using the \`vercel\` command with the
\`--public\` option.*

### Regions

The `--regions` option can be used to specify which [regions](/docs/regions) the deployments [Vercel functions](/docs/functions) should run in.

```bash filename="terminal"
vercel --regions sfo1
```

*Using the \`vercel\` command with the
\`--regions\` option.*

### No wait

The `--no-wait` option does not wait for a deployment to finish before exiting from the `deploy` command.

```bash filename="terminal"
vercel --no-wait
```

### Force

The `--force` option, shorthand `-f`, is used to force a new deployment without the [build cache](/docs/deployments/troubleshoot-a-build#what-is-cached).

```bash filename="terminal"
vercel --force
```

### With cache

The `--with-cache` option is used to retain the [build cache](/docs/deployments/troubleshoot-a-build#what-is-cached) when using `--force`.

```bash filename="terminal"
vercel --force --with-cache
```

### Archive

The `--archive` option compresses the deployment code into one or more files before uploading it. This option should be used when deployments include thousands of files to avoid rate limits such as the [files limit](https://vercel.com/docs/limits#files).

In some cases, `--archive` makes deployments slower. This happens because the caching of source files to optimize file uploads in future deployments is negated when source files are archived.

```bash filename="terminal"
vercel deploy --archive=tgz
```

### Logs

The `--logs` option, shorthand `-l`, also prints the build logs.

```bash filename="terminal"
vercel deploy --logs
```

*Using the \`vercel deploy\` command with the
\`--logs\` option, to view logs from the build process.*

### Meta

The `--meta` option, shorthand `-m`, is used to add metadata to the deployment.

```bash filename="terminal"
vercel deploy --meta KEY1=value1
```

> **💡 Note:** Deployments can be filtered using this data with [`vercel list   --meta`](/docs/cli/list#meta).

### target

Use the `--target` option to define the environment you want to deploy to. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

```bash filename="terminal"
vercel deploy --target=staging
```

### Guidance

The `--guidance` option displays suggested next steps and commands after deployment completes. This can help you discover relevant CLI commands for common post-deployment tasks.

```bash filename="terminal"
vercel deploy --guidance
```

*Using the \`vercel deploy\` command with the
\`--guidance\` option to receive command suggestions.*

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the  command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

title: "Deploying Projects from Vercel CLI"
description: "Learn how to deploy your Vercel Projects from Vercel CLI using the vercel or vercel deploy commands."
last\_updated: "2026-03-23T09:40:06.664Z"
source: "https://vercel.com/docs/cli/deploying-from-cli"
