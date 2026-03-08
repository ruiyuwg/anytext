# Error List

## Missing public directory

The [build step](/docs/deployments/configure-a-build) will result in an error if the output directory is missing, empty, or invalid (for example, it is not a directory). To resolve this error, you can try the following steps:

- Make sure the [output directory](/docs/deployments/configure-a-build#output-directory) is specified correctly in project settings
- If the output directory is correct, check the build command ([documentation](/docs/deployments/configure-a-build#build-command)) or the [root directory](/docs/deployments/configure-a-build#root-directory))
- Try running the build command locally and make sure that the files are correctly generated in the specified output directory

## Missing build script

> **💡 Note:** This is only relevant if you’re using Vercel CLI 16.7.3 or older.

Suppose your project contains a `package.json` file, no `api` directory, and no `vercel.json` configuration. In that case, it is expected to provide a `build` [script](https://docs.npmjs.com/misc/scripts) that performs a static build of your frontend and outputs it to a `public` directory at the root of your project.

When properly configured, your `package.json` file would look similar to this:

```json filename="package.json"
{
  "scripts": {
    "build": "[my-framework] build --output public"
  }
}
```

*An example build script in a
package.json file that specifies the output
directory.*

Once you have defined the `build` [script](https://docs.npmjs.com/misc/scripts), this error will disappear. Furthermore, it will not be displayed if you are using `package.json` purely to provide dependencies for your Vercel functions located inside the `api` directory.

## Maximum team member requests

The maximum amount of open requests to join a team is 10. In order to allow for more requests, the existing requests need to be approved or declined by a [Team Owner](/docs/rbac/access-roles#owner-role).

This ensures the list always remains manageable and protected against spam.

## Inviting users to team who requested access

If a user has already requested access to a team, it's impossible to invite them. Instead, their request must be approved by a [Team Owner](/docs/rbac/access-roles#owner-role) for the user to gain access.

This ensures no team invites are accidentally accepted.

## Request access with the required Git account

When the deployment for a commit fails with the message "Team access required to deploy.", the Git account of the commit author is not connected to a Hobby team that is a member of the team.

The link attached to the error allows someone to connect their Hobby team to the Git account of the commit author. If the Hobby team is connected to a different Git account, it will fail stating that a different Git account must be used to request access to the team.

Once the Git account is connected to the Hobby team on Vercel, it is possible to request access to the team. A [Team Owner](/docs/rbac/access-roles#owner-role) can then approve or decline this access request. If the request was approved, the failed commit would be retried, and the following commits would not fail due to missing team access.

## Blocked scopes

A deployment, project, user, or team on Vercel can be blocked if it violates our [fair use guidelines](/docs/limits/fair-use-guidelines) or [Terms of Service](/legal/terms).

Blocked deployments and projects will result in your website returning a 451 error. Blocked users and teams cannot create new deployments, and blocked users cannot be invited to a team. Please reach out to registration@vercel.com if you need help.

## Unused build and development settings

A [Project](/docs/projects/overview) has several settings that can be found in the dashboard. One of those sections, **Build & Development Settings**, is used to change the way a Project is built.

However, the **Build & Development Settings** are only applied to [zero-configuration](/kb/guide/upgrade-to-zero-configuration) deployments.

If a deployment defines the [`builds`](/docs/project-configuration#builds) configuration property, the **Build & Development Settings** are ignored.

## Unused Vercel Function region setting

A [project](/docs/projects/overview) has several settings that can be found in the dashboard. One of those settings, **Vercel Function Region**, is used to select the [region](/docs/regions) where your Vercel functions execute.

If a deployment defines the [`regions`](/docs/project-configuration#regions) configuration property in `vercel.json`, the **Vercel Function Region** setting is ignored.

If a CLI Deployment defines the [`--regions`](/docs/cli/deploy#regions) option, the **Vercel Function Region** setting is ignored.

## Invalid route source pattern

The `source` property follows the syntax from [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0), not the `RegExp` syntax.

For example, negative lookaheads must be wrapped in a group.

**Before**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "source": "/feedback/(?!general)",
  "destination": "/api/feedback/general"
}
```

**After**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "source": "/feedback/((?!general).*)",
  "destination": "/api/feedback/general"
}
```

## Invalid route destination segment

The `source` property follows the syntax from [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0).

A colon (`:`) defines the start of a [named segment parameter](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0#named-parameters).

A named segment parameter defined in the `destination` property must also be defined in the `source` property.

**Before**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "source": "/feedback/:type",
  "destination": "/api/feedback/:id"
}
```

**After**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "source": "/feedback/:id",
  "destination": "/api/feedback/:id"
}
```

## Failed to install builder dependencies

When running the `vercel build` or `vercel dev` commands, `npm install` errors can be encountered if `npm` was invoked to install Builders that are defined in your `vercel.json` file.

`npm install` may fail if:

- [`npm`](https://www.npmjs.com/get-npm) is not installed
- Your internet connection is unavailable
- The Builder that is defined in your configuration is not published to the npm registry

Double-check that the name and version of the Builder you are requesting is correct.

## Mixed routing properties

If you have [`rewrites`](/docs/project-configuration/vercel-json#rewrites), [`redirects`](/docs/project-configuration/vercel-json#redirects), [`headers`](/docs/project-configuration/vercel-json#headers), [`cleanUrls`](/docs/project-configuration/vercel-json#cleanurls) or [`trailingSlash`](/docs/project-configuration/vercel-json#trailingslash) defined in your [configuration](/docs/project-configuration) file, then [`routes`](/docs/project-configuration/vercel-json#routes) cannot be defined.

This is a necessary limitation because `routes` is a lower-level primitive that contains all of the other types. Therefore, it cannot be merged safely with the new properties.

See the [Upgrading Routes](/docs/project-configuration/vercel-json#upgrading-legacy-routes) section for examples of `routes` compared to the new properties.

## Conflicting configuration files

For backward compatibility purposes, there are two naming conventions for configuration files used by Vercel CLI (for example `vercel.json` and `now.json`). Both naming conventions are supported, however only *one* may be defined at a time. Vercel CLI will output an error message if both naming conventions are used at the same time.

These conflicting configuration errors occur if:

- Both `vercel.json` and `now.json` exist in your project.**Solution:** Delete the `now.json` file
- Both `.vercel` and `.now` directories exist in your project.**Solution:** Delete the `.now` directory
- Both `.vercelignore` and `.nowignore` files exist in your project.**Solution:** Delete the `.nowignore` file
- Environment Variables that begin with `VERCEL_` have a conflicting Environment Variable that begins with `NOW_`.**Solution:** Only define the `VERCEL_` prefixed Environment Variable

## Conflicting functions and builds configuration

There are two ways to configure Vercel functions in your project: [functions](/docs/project-configuration#functions) *or* [`builds`](/docs/project-configuration#builds). However, only one of them may be used at a time - they cannot be used in conjunction.

For most cases, it is recommended to use the `functions` property because it supports more features, such as:

- Allows configuration of the amount of memory that the Vercel Function is provided with
- More reliable because it requires a specific npm package version for the `runtime` property
- Supports "clean URLs" by default, which means that the Vercel functions are automatically accessible without their file extension in the URL

However, the [`builds`](/docs/project-configuration#builds) property will remain supported for backward compatibility purposes.

## Unsupported functions configuration with Nextjs

When using Next.js, only `memory` and `maxDuration` can be configured within the [functions](/docs/project-configuration#functions) property. Next.js automatically handles the other configuration values for you.

## Deploying Vercel functions to multiple regions

It's possible to deploy Vercel functions to multiple regions. This functionality is only available to [Enterprise teams](/docs/plans/enterprise).

On the [Pro plan](/docs/plans/pro-plan), the limitation has existed since the [launch](/blog/simpler-pricing) of the current pricing model but was applied on **July 10, 2020**. For Projects created on or after the date, it's no longer possible to deploy to multiple regions.

To select the region closest to you, read our [guide](/docs/functions/configuring-functions/region) on choosing deployment regions for Vercel functions.

## Unmatched function pattern

The [functions](/docs/project-configuration#functions) property uses a glob pattern for each key. This pattern must match Vercel Function source files within the `api` directory.

If you are using Next.js, Vercel functions source files can be created in the following:

- `pages/api` directory
- `src/pages/api` directory
- `pages` directory when the module exports [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- `src/pages` directory when the module exports [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

Additionally, if you'd like to use a Vercel Function that isn't written with Node.js, and in combination with Next.js, you can place it in the `api` directory (provided by the platform), since `pages/api` (provided by Next.js) only supports JavaScript.

**Not Allowed**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "users/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

**Allowed**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "api/users/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

**Allowed (Next.js)**

```json filename="vercel.json"
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "pages/api/users/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

## Cannot load project settings

If the Project configuration in `.vercel` belongs to a team you are not a member of, attempting to deploy the project will result in an error.

This can occur if you clone a Git repository that includes the `.vercel` directory, or you are logged in to the wrong Vercel account.
Additionally, authentication issues can occur if you don't comply with the [two-factor enforcement](/docs/two-factor-enforcement) policy of your team.

To fix, remove the `.vercel` directory and redeploy to link the project again by running these commands.

On macOS and Linux:

On Windows:

## Project name validation

Project names can only consist of up to one hundred alphanumeric lowercase characters. Hyphens can be used in between words in the name, but never at the start or end.

## Repository connection limitation

The amount of Vercel Projects that can be connected with the same Git repository is [limited depending on your plan](/docs/limits#general-limits).

If you have reached the limitation and would like to connect a new project to the repository, you will need to disconnect an existing project from the same Git repository.

To increase this limit, please [contact our Sales Team](/contact/sales).

## Domain verification through CLI

To verify your domain, point the domain to Vercel by configuring our nameservers or a DNS Record. You can learn more about what to do for your Domain by running `vercel domains inspect <domain>`, where `<domain>` is the domain you're interested in.

Alternatively, if you already added the domain to a project, read [the configuring a domain section](/docs/projects/custom-domains#step-4:-configuring-the-domain) of the custom domain documentation.

## Leaving the team

You cannot leave a team if you are the last remaining [Owner](/docs/rbac/access-roles#owner-role) or the last confirmed [Member](/docs/rbac/access-roles#member-role). In order to leave the Team, first designate a different confirmed [Member](/docs/rbac/access-roles#member-role) to be an [Team Owner](/docs/rbac/access-roles#owner-role).

If you are the only remaining [Member](/docs/rbac/access-roles#member-role), you should instead delete the Team.

## Git Default ignore list

Deployments created using Vercel CLI will automatically [ignore several files](/docs/deployments/build-features#ignored-files-and-folders) for security and performance reasons.

However, these files are *not* ignored for deployments created using [Git](/docs/git) and a warning is printed instead. This is because `.gitignore` determines which files should be ignored.

If the file was intentionally committed to Git, you can ignore the warning.

If the file was accidentally committed to Git, you can remove it using the following commands:

```shell filename="terminal"
git rm file.txt                   # remove the file
echo 'file.txt' >> .gitignore     # append file to .gitignore
git add .gitignore                # stage the change
git commit -m "Removed file.txt"  # commit the change
git push                          # deploy the change
```

## GitHub app installation not found

In some cases, signing up with GitHub fails due to GitHub's database inconsistencies.

When you connected your Hobby team with your GitHub account, the [Vercel GitHub App](https://github.com/apps/vercel) was installed on your GitHub account and then GitHub notified Vercel that the app was successfully installed.

However, Vercel was unable to retrieve the app installation from GitHub, which made it appear as if the [Vercel GitHub App](https://github.com/apps/vercel) was never installed.

In order to solve this issue, wait a couple of minutes and try connecting to GitHub again. If you are still unable to connect, please contact [GitHub Support](https://support.github.com/contact) to determine why the [Vercel GitHub App](https://github.com/apps/vercel) was not able to be installed.

## Preview branch used as production branch

If you have configured a custom Git branch for a domain or an environment variable, it is considered a preview domain and a preview environment variable. Because of this, the Git branch configured for it is considered a [preview branch](/docs/git#preview-branches).

When configuring the production branch in the project settings, it is not possible to use a preview branch.

If you still want to use this particular Git branch as a production branch, please follow these steps:

1. Assign your affected domains to the production environment (clear out the Git branch you've defined for them)
2. Assign your affected environment variables to the production environment (clear out the Git branch you've defined for them)

Afterwards, you can use the Git branch you originally wanted to use as a production branch.

## Lost Git repository access

In order for Vercel to be able to deploy commits to your Git repository, a Project on Vercel has to be connected to it.

This connection is interrupted if the Git repository is deleted, archived, or if the Vercel App was uninstalled from the corresponding Git account or Git organization. Make sure none of these things apply.

Additionally, when using GitHub, the connection is also interrupted if you or a [Team Member](/docs/rbac/access-roles#member-role) modifies the access permissions of the Vercel GitHub App installed on the respective personal GitHub account or GitHub organization.

To verify the access permissions of the Vercel GitHub App installed on your personal GitHub account, navigate to the [**Applications** page](https://github.com/settings/installations) and select **Vercel** under **Installed GitHub Apps**. You will see a list of Git repositories that the GitHub App has access to. Make sure that the Git repository you're looking to connect to a Vercel Project is listed there.

To verify the access permissions of the Vercel GitHub App installed on your GitHub organization, select **Vercel** under **Installed GitHub Apps** in the organization settings. You will see a list of Git repositories that the GitHub App has access to. Make sure that the Git repository you're looking to connect to a Vercel Project is listed there.

## Production deployment cannot be redeployed

You cannot redeploy a production deployment if a more recent one exists.

The reason is that redeploying an old production deployment would result in overwriting the most recent source code you have deployed to production.

To force an explicit overwrite of the current production deployment, select **Promote** instead.

## SSL certificate deletion denied

Certain SSL Certificates associated with your Hobby team or team (i.e. Wildcard SSL Certificates for your Vercel Project's staging domains) are automatically generated by the Vercel platform.

Because these SSL Certificates are managed by the Vercel platform, they cannot be manually deleted on the Vercel Dashboard – nor through Vercel CLI.

Custom SSL Certificates may be uploaded to teams on the [Enteprise plan](/docs/plans/enterprise), which are allowed to be manually deleted.

## Production branch used as preview branch

The Git branch that is configured using the [production branch](/docs/git#production-branch) field in the project settings, is considered the branch that contains the code served to your visitors.

If you'd like to assign a domain or environment variable to that particular Git branch, there's no need to manually fill it in.

By default, if no custom Git branch is defined for them, domains are already assigned to the production branch. The same is true for environment variables: If no custom Git branch is defined for them and **Production** is selected as an environment, they're already assigned to the production branch.

If you still want to enter a specific Git branch for a domain or an environment variable, it has to be a [preview branch](/docs/git#preview-branches).

## Command not found in vercel dev

The *"Command not found"* error message happens when a sub-process that `vercel dev` is attempting to create is not installed on your local machine. You need to install the particular program onto your operating system before `vercel dev` will work correctly.

For example, you may see the error *"Command not found: go"* if you are writing a Vercel Function in Go, but do not have the `go` binary installed. In this case you need to [install `go`](https://golang.org/doc/install) first, and then try invoking your Vercel Function again.

## Recursive invocation of commands

### Why this error occurred

You have configured one of the following for your Project:

- The [Build Command](/docs/deployments/configure-a-build#build-command) defined in the Project Settings invokes `vercel build`
- The [Development Command](/docs/deployments/configure-a-build#development-command) defined in the Project Settings invokes `vercel dev`

Because the Build Command is invoked by `vercel build` when deploying, it cannot invoke `vercel build` itself, as that would cause an infinite recursion.

The same applies to the Development Command: When developing locally, `vercel dev` invokes the Development Command, so it cannot invoke `vercel dev` itself.

### Possible ways to fix it

Adjust the Build and Development Commands defined for your Project to not invoke `vercel build` or `vercel dev`.

Instead, they should invoke the Build Command provided by your framework.

If you are unsure about which value to provide, disable the **Override** option in order to default to the preferred settings for the [Framework Preset](/docs/deployments/configure-a-build#framework-preset) you have selected.

## Pnpm engine unsupported

`ERR_PNPM_UNSUPPORTED_ENGINE` occurs when `package.json#engines.pnpm` does not match the currently running version of `pnpm`.

To fix, do one of the following:

- [Set the env var `ENABLE_EXPERIMENTAL_COREPACK` to 1](https://vercel.com/docs/deployments/configure-a-build#corepack), and make sure the `packageManager` value is set correctly in your `package.json`

```json filename="package.json"
{
  "engines": {
    "pnpm": "^7.5.1"
  },
  "packageManager": "pnpm@7.5.1"
}
```

- Remove the [`engines.pnpm`](https://pnpm.io/package_json#engines) value from your `package.json`

> **💡 Note:** You cannot use [`engine-strict`](https://pnpm.io/npmrc#engine-strict) to solve
> this error. `engine-strict` only handles dependencies.

## Yarn dynamic require of "util" is not supported

This error occurs when projects use yarn, corepack, and have a `package.json` with a `type` field set to `module`. This is a known [yarn issue](https://github.com/yarnpkg/berry/issues/5831).

To prevent this error, consider the following options:

- Remove `"type": "module"` from the project's `package.json`
- Install yarn into the project instead of using corepack with `yarn set version [desired-version] --yarn-path`

## Invalid Edge Config connection string

This error occurs when attempting to create a deployment where at least one of its environment variables contains an outdated Edge Config connection string. A connection string can be outdated if either the Edge Config itself was deleted or if the token used in the connection string is invalid or has been deleted.

To resolve this error, delete or update the environment variable that contains the connection string. In most cases, the environment variable is named `EDGE_CONFIG`.

## Globally installed `@vercel/speed-insights` or `@vercel/analytics` packages

You must reference `@vercel/speed-insights` or `@vercel/analytics` packages in your application's `package.json` file. This error occurs when you deploy your application with these packages globally available, but not referenced in your `package.json` file, like in a monorepo.

To fix this error, add the packages to your `package.json` file as a dependency.

## Oversized Incremental Static Regeneration page

[Incremental Static Regeneration](https://vercel.com/docs/incremental-static-regeneration) (ISR) responses that are greater than 20 MB result in pages not rendering in production with a [`FALLBACK_BODY_TOO_LARGE`](/docs/errors/FALLBACK_BODY_TOO_LARGE) error. This affects all Next.js build time pre-rendering, and other frameworks that use [Prerender Functions](/docs/build-output-api/v3/primitives#prerender-functions).

title: "Error Codes"
description: "Use this guide to find specific solutions and insights for common Vercel errors."
last\_updated: "2026-03-08T05:03:14.377Z"
source: "https://vercel.com/docs/errors"

# Error Codes

When developing your application with Vercel, you may encounter a variety of errors. They can reflect issues that happen with external providers such as domain services or internal problems at the level of your application's deployment or your usage of platform features.

For general error handling guidance, that covers dashboard related errors, see [General Errors](/docs/errors/error-list).

## Application errors

## Platform errors

title: "Getting started with Flags Explorer"
description: "Learn how to set up the Flags Explorer so you can see and override your application"
last\_updated: "2026-03-08T05:03:14.450Z"
source: "https://vercel.com/docs/flags/flags-explorer/getting-started"
