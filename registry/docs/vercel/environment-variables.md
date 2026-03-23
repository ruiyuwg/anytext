# Environment variables

Environment variables are key-value pairs configured outside your source code so that each value can change depending on the [Environment](/docs/deployments/environments). These values are encrypted at rest and visible to any user that has access to the [project](/docs/projects/overview). It is safe to use both non-sensitive and sensitive data, such as tokens.

Your source code can read these values to change behavior during the [Build Step](/docs/deployments/configure-a-build) or during [Function](/docs/functions) execution.

Any change you make to environment variables are not applied to previous deployments, they only apply to new deployments.

## Creating environment variables

Environment variables can either be declared at the team or project level. When declared at the team level, they are available to all projects within the team. When declared at the project level, they are only available to that project.

To learn how to create and manage environment variables, see [Managing environment variables](/docs/environment-variables/managing-environment-variables).

## Environment variable size

Developers on all plans using the runtimes stated below can use a total of **64 KB** in Environments Variables **per-Deployment** on Vercel. This [limit](/docs/limits#environment-variables) is for all variables combined, and so no **single** variable can be larger than 64 KB. The total size includes any variables configured through the dashboard or the [CLI](/docs/cli).

With support for 64 KB of environment variables, you can add large values for authentication tokens, JWTs, or certificates.

Deployments using the following runtimes can support environment variables up to 64 KB:

- Node.js
- Python
- Ruby
- Go
- [PHP Community Runtime](https://github.com/vercel-community/php)

Vercel also provides support for custom runtimes, through the Build Output API. For information on creating custom runtime support, see the following guides:

- [Guides for runtime builders](https://github.com/vercel/vercel/blob/main/DEVELOPING_A_RUNTIME.md#supporting-large-environment)
- [Build Output API documentation](/docs/build-output-api/v3/primitives#base-config)

> **💡 Note:** While Vercel allows environment variables up to a total of 64KB in size, Edge
> Functions and Middleware using the `edge` runtime are limited to 5KB per
> Environment Variable.

## Environments

For each Environment Variable, you can select one or more Environments to apply the Variable to:

| Environment                                                                   | Description                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**Production**](/docs/deployments/environments#production-environment)       | When selected, the Environment Variable will be applied to your next Production Deployment. To create a Production Deployment, push a commit to the [Production Branch](/docs/git#production-branch) (usually `main`) or run `vercel --prod`.                                                                                  |
| [**Preview**](#preview-environment-variables)                                 | The Environment Variable is applied to your next Preview Deployment. Preview Deployments are created when you push to a branch that is not the [Production Branch](/docs/git#production-branch) or run `vercel`.                                                                                                               |
| [**Custom environments**](/docs/deployments/environments#custom-environments) | With custom environments you can choose to [import environment variables](/docs/custom-environments#import-variables-from-another-environment) from another environment and [detach](/docs/custom-environments#detaching-an-environment-variable) when you need to update the environment variable for your custom environment |
| **[Development](#development-environment-variables)**                         | The Environment Variable is used when running your project locally with `vercel dev` or your preferred development command. To download Development Environment Variables, run [`vercel env pull`](/docs/cli/env).                                                                                                             |

### Preview environment variables

> **💡 Note:** You need Vercel CLI version 22.0.0 or higher to use the features described in
> this section.

Preview environment variables are applied to deployments from any Git branch that does not match the [Production Branch](/docs/git#production-branch). When you add a preview environment variable, you can choose to apply to all non-production branches or you can select a specific branch.

![Image](`/docs-assets/static/docs/concepts/projects/environment-variables/env-var-section-light.png`)

Any branch-specific variables will override other preview environment variables with the same name. This means you don't need to replicate all your existing preview environment variables for each branch – you only need to add the values you wish to override.

### Development environment variables

> **💡 Note:** You need Vercel CLI version 21.0.1 or higher to use the features described in
> this section.

Environment variables for local development are defined in the `.env.local` file. This is a plain text file that contains `key=value` pairs of environment variables, that you can manually create in your project's root directory to define specific variables.

You can use the `vercel env pull` command to automatically create and populate the `.env` file (which serves the same purpose as `.env.local`) with the environment variables from your Vercel project:

This command creates a `.env` file in your project's current directory with the environment variables from your Vercel project's **Development** environment.

If you're using [`vercel dev`](/docs/cli/dev), there's no need to run `vercel env pull`, as `vercel dev` automatically downloads the Development Environment Variables into memory. For more information on the `vercel env` command, see the [CLI](/docs/cli/env) docs.

For more information, see [Environment variables for local development](/docs/deployments/local-env#environment-variables-for-local-development).

## Integration environment variables

[Integrations](/docs/integrations) can automatically add environment variables to your Project Settings.
In that case, the Integration that added the Variable will be displayed in your project settings:

![Image](`/docs-assets/static/docs/concepts/projects/environment-variables/integration-env-variable-light.png`)

title: "Reserved environment variables"
description: "Reserved environment variables are reserved by Vercel Vercel Function runtimes."
last\_updated: "2026-03-23T09:40:09.459Z"
source: "https://vercel.com/docs/environment-variables/reserved-environment-variables"

# Reserved environment variables

The following [environment variable](/docs/environment-variables) names are [reserved](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime) and therefore unavailable for use:

- `AWS_SECRET_KEY`
- `AWS_EXECUTION_ENV`
- `AWS_LAMBDA_LOG_GROUP_NAME`
- `AWS_LAMBDA_LOG_STREAM_NAME`
- `AWS_LAMBDA_FUNCTION_NAME`
- `AWS_LAMBDA_FUNCTION_MEMORY_SIZE`
- `AWS_LAMBDA_FUNCTION_VERSION`
- `NOW_REGION`
- `TZ`
- `LAMBDA_TASK_ROOT`
- `LAMBDA_RUNTIME_DIR`

## Allowed environment variables

The following [environment variable](/docs/environment-variables) names are [allowed](/kb/guide/how-can-i-use-aws-sdk-environment-variables-on-vercel) by Vercel Vercel Function runtimes:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SESSION_TOKEN`
- `AWS_REGION`
- `AWS_DEFAULT_REGION`

> **💡 Note:** These variables may appear in your Vercel Functions even if you don't set them in your project explicitly. These values do not grant any AWS permissions and are not usable as AWS credentials. Configure your own AWS credentials using environment variables or set up [OIDC](/docs/oidc/aws).

title: "Rotating environment variables"
description: "Safely rotate API keys, tokens, and other secrets in your Vercel environment variables."
last\_updated: "2026-03-23T09:40:09.472Z"
source: "https://vercel.com/docs/environment-variables/rotating-secrets"
