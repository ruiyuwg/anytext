# CLI Reference

Show statistics related to vacuum operations per table

This shows you stats about the vacuum activities for each table. Due to Postgres' [MVCC](https://www.postgresql.org/docs/current/mvcc.html) when data is updated or deleted new rows are created and old rows are made invisible and marked as "dead tuples". Usually the [autovaccum](https://supabase.com/docs/guides/platform/database-size#vacuum-operations) process will aysnchronously clean the dead tuples.

The command lists when the last vacuum and last auto vacuum took place, the row count on the table as well as the count of dead rows and whether autovacuum is expected to run or not. If the number of dead rows is much higher than the row count, or if an autovacuum is expected but has not been performed for some time, this can indicate that autovacuum is not able to keep up and that your vacuum settings need to be tweaked or that you require more compute or disk IOPS to allow autovaccum to complete.

```
        SCHEMA        │              TABLE               │ LAST VACUUM │ LAST AUTO VACUUM │      ROW COUNT       │ DEAD ROW COUNT │ EXPECT AUTOVACUUM?
──────────────────────┼──────────────────────────────────┼─────────────┼──────────────────┼──────────────────────┼────────────────┼─────────────────────
 auth                 │ users                            │             │ 2023-06-26 12:34 │               18,030 │              0 │ no
 public               │ profiles                         │             │ 2023-06-26 23:45 │               13,420 │             28 │ no
 public               │ logs                             │             │ 2023-06-26 01:23 │            1,313,033 │      3,318,228 │ yes
 storage              │ objects                          │             │                  │             No stats │              0 │ no
 storage              │ buckets                          │             │                  │             No stats │              0 │ no
 supabase_migrations  │ schema_migrations                │             │                  │             No stats │              0 │ no

```

supabase inspect db vacuum-stats

# CLI Reference

Generate a CSV output for all inspect commands

supabase inspect report \[flags]

# CLI Reference

Manage Supabase organizations

# CLI Reference

Create an organization

Create an organization for the logged-in user.

supabase orgs create

# CLI Reference

List all organizations

List all organizations the logged-in user belongs.

supabase orgs list

# CLI Reference

Manage Supabase projects

Provides tools for creating and managing your Supabase projects.

This command group allows you to list all projects in your organizations, create new projects, delete existing projects, and retrieve API keys. These operations help you manage your Supabase infrastructure programmatically without using the dashboard.

Project management via CLI is especially useful for automation scripts and when you need to provision environments in a repeatable way.

# CLI Reference

Create a project on Supabase

supabase projects create \[project name] \[flags]

# CLI Reference

List all Supabase projects

List all Supabase projects the logged-in user can access.

supabase projects list

# CLI Reference

List all API keys for a Supabase project

supabase projects api-keys \[flags]

# CLI Reference

Delete a Supabase project

supabase projects delete \[ref]

# CLI Reference

Manage Supabase project configurations

# CLI Reference

Pushes local config.toml to the linked project

Updates the configurations of a linked Supabase project with the local `supabase/config.toml` file.

This command allows you to manage project configuration as code by defining settings locally and then pushing them to your remote project.

supabase config push

# CLI Reference

Manage Supabase preview branches

# CLI Reference

Create a preview branch

Create a preview branch for the linked project.

supabase branches create \[name] \[flags]

# CLI Reference

List all preview branches

List all preview branches of the linked project.

supabase branches list

# CLI Reference

Retrieve details of a preview branch

Retrieve details of the specified preview branch.

supabase branches get \[name]

# CLI Reference

Update a preview branch

Update a preview branch by its name or ID.

supabase branches update \[name] \[flags]

# CLI Reference

Pause a preview branch

supabase branches pause \[name]

# CLI Reference

Unpause a preview branch

supabase branches unpause \[name]

# CLI Reference

Delete a preview branch

Delete a preview branch by its name or ID.

supabase branches delete \[name]

# CLI Reference

Manage Supabase Edge functions

Manage Supabase Edge Functions.

Supabase Edge Functions are server-less functions that run close to your users.

Edge Functions allow you to execute custom server-side code without deploying or scaling a traditional server. They're ideal for handling webhooks, custom API endpoints, data validation, and serving personalized content.

Edge Functions are written in TypeScript and run on Deno compatible edge runtime, which is a secure runtime with no package management needed, fast cold starts, and built-in security.

# CLI Reference

Create a new Function locally

Creates a new Edge Function with boilerplate code in the `supabase/functions` directory.

This command generates a starter TypeScript file with the necessary Deno imports and a basic function structure. The function is created as a new directory with the name you specify, containing an `index.ts` file with the function code.

After creating the function, you can edit it locally and then use `supabase functions serve`  to test it before deploying with `supabase functions deploy`.

supabase functions new

# CLI Reference

List all Functions in Supabase

List all Functions in the linked Supabase project.

supabase functions list \[flags]

# CLI Reference

Download a Function from Supabase

Download the source code for a Function from the linked Supabase project. If no function name is provided, downloads all functions.

supabase functions download \[Function name] \[flags]

# CLI Reference

Serve all Functions locally

Serve all Functions locally.

`supabase functions serve` command includes additional flags to assist developers in debugging Edge Functions via the v8 inspector protocol, allowing for debugging via Chrome DevTools, VS Code, and IntelliJ IDEA for example. Refer to the [docs guide](/docs/guides/functions/debugging-tools) for setup instructions.

1. `--inspect`
   - Alias of `--inspect-mode brk`.

2. `--inspect-mode [ run | brk | wait ]`
   - Activates the inspector capability.
   - `run` mode simply allows a connection without additional behavior. It is not ideal for short scripts, but it can be useful for long-running scripts where you might occasionally want to set breakpoints.
   - `brk` mode same as `run` mode, but additionally sets a breakpoint at the first line to pause script execution before any code runs.
   - `wait` mode similar to `brk` mode, but instead of setting a breakpoint at the first line, it pauses script execution until an inspector session is connected.

3. `--inspect-main`
   - Can only be used when one of the above two flags is enabled.
   - By default, creating an inspector session for the main worker is not allowed, but this flag allows it.
   - Other behaviors follow the `inspect-mode` flag mentioned above.

Additionally, the following properties can be customized via `supabase/config.toml` under `edge_runtime` section.

1. `inspector_port`
   - The port used to listen to the Inspector session, defaults to 8083.
2. `policy`
   - A value that indicates how the edge-runtime should forward incoming HTTP requests to the worker.
   - `per_worker` allows multiple HTTP requests to be forwarded to a worker that has already been created.
   - `oneshot` will force the worker to process a single HTTP request and then exit. (Debugging purpose, This is especially useful if you want to reflect changes you've made immediately.)

supabase functions serve \[flags]

# CLI Reference

Deploy a Function to Supabase

Deploy a Function to the linked Supabase project.

supabase functions deploy \[Function name] \[flags]

# CLI Reference

Delete a Function from Supabase

Delete a Function from the linked Supabase project. This does NOT remove the Function locally.

supabase functions delete  \[flags]

# CLI Reference

Manage Supabase secrets

Provides tools for managing environment variables and secrets for your Supabase project.

This command group allows you to set, unset, and list secrets that are securely stored and made available to Edge Functions as environment variables.

Secrets management through the CLI is useful for:

- Setting environment-specific configuration
- Managing sensitive credentials securely

Secrets can be set individually or loaded from .env files for convenience.

# CLI Reference

Set a secret(s) on Supabase

Set a secret(s) to the linked Supabase project.

supabase secrets set \<NAME=VALUE> ... \[flags]

# CLI Reference

List all secrets on Supabase

List all secrets in the linked project.

supabase secrets list

# CLI Reference

Unset a secret(s) on Supabase

Unset a secret(s) from the linked Supabase project.

supabase secrets unset \[NAME] ...

# CLI Reference

Manage Supabase Storage objects

# CLI Reference

List objects by path prefix

supabase storage ls \[path] \[flags]

# CLI Reference

Copy objects from src to dst path

supabase storage cp   \[flags]

# CLI Reference

Move objects from src to dst path

supabase storage mv   \[flags]

# CLI Reference

Remove objects by file path

supabase storage rm  ... \[flags]

# CLI Reference

Manage Single Sign-On (SSO) authentication for projects

# CLI Reference

Add a new SSO identity provider

Add and configure a new connection to a SSO identity provider to your Supabase project.

supabase sso add \[flags]

# CLI Reference

List all SSO identity providers for a project

List all connections to a SSO identity provider to your Supabase project.

supabase sso list

# CLI Reference

Show information about an SSO identity provider

Provides the information about an established connection to an identity provider. You can use --metadata to obtain the raw SAML 2.0 Metadata XML document stored in your project's configuration.

supabase sso show <provider-id> \[flags]

# CLI Reference

Returns the SAML SSO settings required for the identity provider

Returns all of the important SSO information necessary for your project to be registered with a SAML 2.0 compatible identity provider.

supabase sso info

# CLI Reference

Update information about an SSO identity provider

Update the configuration settings of a already added SSO identity provider.

supabase sso update <provider-id> \[flags]

# CLI Reference

Remove an existing SSO identity provider

Remove a connection to an already added SSO identity provider. Removing the provider will prevent existing users from logging in. Please treat this command with care.

supabase sso remove <provider-id>

# CLI Reference

Manage custom domain names for Supabase projects

Manage custom domain names for Supabase projects.

Use of custom domains and vanity subdomains is mutually exclusive.

# CLI Reference

Activate the custom hostname for a project

Activates the custom hostname configuration for a project.

This reconfigures your Supabase project to respond to requests on your custom hostname.

After the custom hostname is activated, your project's third-party auth providers will no longer function on the Supabase-provisioned subdomain. Please refer to [Prepare to activate your domain](/docs/guides/platform/custom-domains#prepare-to-activate-your-domain) section in our documentation to learn more about the steps you need to follow.

supabase domains activate

# CLI Reference

Create a custom hostname

Create a custom hostname for your Supabase project.

Expects your custom hostname to have a CNAME record to your Supabase project's subdomain.

supabase domains create \[flags]

# CLI Reference

Get the current custom hostname config

Retrieve the custom hostname config for your project, as stored in the Supabase platform.

supabase domains get

# CLI Reference

Re-verify the custom hostname config for your project

supabase domains reverify

# CLI Reference

Deletes the custom hostname config for your project

supabase domains delete

# CLI Reference

Manage vanity subdomains for Supabase projects

Manage vanity subdomains for Supabase projects.

Usage of vanity subdomains and custom domains is mutually exclusive.

# CLI Reference

Activate a vanity subdomain

Activate a vanity subdomain for your Supabase project.

This reconfigures your Supabase project to respond to requests on your vanity subdomain.
After the vanity subdomain is activated, your project's auth services will no longer function on the {project-ref}.{supabase-domain} hostname.

supabase vanity-subdomains activate \[flags]

# CLI Reference

Get the current vanity subdomain

supabase vanity-subdomains get

# CLI Reference

Checks if a desired subdomain is available for use

supabase vanity-subdomains check-availability \[flags]

# CLI Reference

Deletes a project's vanity subdomain

Deletes the vanity subdomain for a project, and reverts to using the project ref for routing.

supabase vanity-subdomains delete

# CLI Reference

Manage network bans

Network bans are IPs that get temporarily blocked if their traffic pattern looks abusive (e.g. multiple failed auth attempts).

The subcommands help you view the current bans, and unblock IPs if desired.

# CLI Reference

Get the current network bans

supabase network-bans get

# CLI Reference

Remove a network ban

supabase network-bans remove \[flags]

# CLI Reference

Manage network restrictions

# CLI Reference

Get the current network restrictions

supabase network-restrictions get

# CLI Reference

Update network restrictions

supabase network-restrictions update \[flags]

# CLI Reference

Manage SSL enforcement configuration

# CLI Reference

Get the current SSL enforcement configuration

supabase ssl-enforcement get

# CLI Reference

Update SSL enforcement configuration

supabase ssl-enforcement update \[flags]

# CLI Reference

Manage Postgres database config

# CLI Reference

Get the current Postgres database config overrides

supabase postgres-config get

# CLI Reference

Update Postgres database config

Overriding the default Postgres config could result in unstable database behavior.
Custom configuration also overrides the optimizations generated based on the compute add-ons in use.

supabase postgres-config update \[flags]

# CLI Reference

Delete specific Postgres database config overrides

Delete specific config overrides, reverting them to their default values.

supabase postgres-config delete \[flags]

# CLI Reference

Manage Supabase SQL snippets

# CLI Reference

List all SQL snippets

List all SQL snippets of the linked project.

supabase snippets list

# CLI Reference

Download contents of a SQL snippet

Download contents of the specified SQL snippet.

supabase snippets download <snippet-id>

# CLI Reference

Show versions of all Supabase services

supabase services

# CLI Reference

Generate the autocompletion script for the specified shell

Generate the autocompletion script for supabase for the specified shell.
See each sub-command's help for details on how to use the generated script.

# CLI Reference

Generate the autocompletion script for zsh

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

```
echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions in your current shell session:

```
source <(supabase completion zsh)
```

To load completions for every new session, execute once:

#### Linux:

```
supabase completion zsh > "${fpath[1]}/_supabase"
```

#### macOS:

```
supabase completion zsh > $(brew --prefix)/share/zsh/site-functions/_supabase
```

You will need to start a new shell for this setup to take effect.

supabase completion zsh \[flags]

# CLI Reference

Generate the autocompletion script for powershell

Generate the autocompletion script for powershell.

To load completions in your current shell session:

```
supabase completion powershell | Out-String | Invoke-Expression
```

To load completions for every new session, add the output of the above command
to your powershell profile.

supabase completion powershell \[flags]

# CLI Reference

Generate the autocompletion script for fish

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
supabase completion fish | source
```

To load completions for every new session, execute once:

```
supabase completion fish > ~/.config/fish/completions/supabase.fish
```

You will need to start a new shell for this setup to take effect.

supabase completion fish \[flags]

# CLI Reference

Generate the autocompletion script for bash

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
source <(supabase completion bash)
```

To load completions for every new session, execute once:

#### Linux:

```
supabase completion bash > /etc/bash_completion.d/supabase
```

#### macOS:

```
supabase completion bash > $(brew --prefix)/etc/bash_completion.d/supabase
```

You will need to start a new shell for this setup to take effect.

supabase completion bash
