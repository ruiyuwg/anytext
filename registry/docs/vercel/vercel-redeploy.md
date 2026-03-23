# vercel redeploy

The `vercel redeploy` command is used to rebuild and [redeploy an existing deployment](/docs/deployments/managing-deployments).

## Usage

```bash filename="terminal"
vercel redeploy [deployment-id or url]
```

*Using \`vercel redeploy\` will rebuild and deploys an
existing deployment.*

## Standard output usage

When redeploying, `stdout` is always the Deployment URL.

```bash filename="terminal"
vercel redeploy https://example-app-6vd6bhoqt.vercel.app > deployment-url.txt
```

*Using the \`vercel redeploy\` command to redeploy and
write \`stdout\` to a text file. When redeploying,
\`stdout\` is always the Deployment URL.*

## Standard error usage

If you need to check for errors when the command is executed such as in a CI/CD workflow,
use `stderr`. If the exit code is anything other than `0`, an error has occurred. The
following example demonstrates a script that checks if the exit code is not equal to 0:

```bash filename="check-redeploy.sh"
# save stdout and stderr to files
vercel redeploy https://example-app-6vd6bhoqt.vercel.app >deployment-url.txt 2>error.txt

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

## Unique Options

These are options that only apply to the `vercel redeploy` command.

### No Wait

The `--no-wait` option does not wait for a deployment to finish before exiting from the `redeploy` command.

```bash filename="terminal"
vercel redeploy https://example-app-6vd6bhoqt.vercel.app --no-wait
```

*Using the \`vercel redeploy\` command with the
\`--no-wait\` option.*

### target

Use the `--target` option to define the environment you want to redeploy to. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

```bash filename="terminal"
vercel redeploy https://example-app-6vd6bhoqt.vercel.app --target=staging
```

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

title: "vercel redirects"
description: "Learn how to manage project-level redirects using the vercel redirects CLI command."
last\_updated: "2026-03-23T09:40:07.020Z"
source: "https://vercel.com/docs/cli/redirects"
