# Configuration

The configuration of a Strapi project lives in the `/config` folder:

The block above is an excerpt from the project structure. You can click on any file name in purple to read the corresponding documentation. Visit the project structure page for the full version.

## Base configurations

From the `/config` folder, you can find and define the following base configurations:

| Configuration topic | File path | Required or optional |
|-----|----|----|
| [Database](/cms/configurations/database) | `config/database` | Required |
| [Server](/cms/configurations/server) | `config/server` | Required
| [Admin panel](/cms/configurations/admin-panel) | `config/admin` | Required |
| [Middlewares](/cms/configurations/middlewares) | `config/middlewares` | Required |
| [API calls](/cms/configurations/api) | `config/api` | Optional, used to define some general settings for responses and other REST-related parameters. |

## Additional configuration for specific features

Some specific features require additional configuration:

| Feature | Location | Required or optional |
|---------|------|------|
| [Plugins](/cms/configurations/plugins) | In the `config/plugins` file | Optional if using only built-in plugins with default presets.Required to enable, configure, or disable plugins.Can also be used to configure the Upload plugin (which handles the Media Library feature) and GraphQL. |
| [TypeScript](/cms/configurations/typescript) | In `tsconfig.json` for general [TypeScript-related configuration](/cms/configurations/typescript#project-structure-and-typescript-specific-configuration-files)In the `config/typescript` file for [dedicated TypeScript features](/cms/configurations/typescript#strapi-specific-configuration-for-typescript) specific to Strapi | Required to use TypeScript efficiently |
| [API tokens](/cms/features/api-tokens) | In the `config/admin` file | Required if using API tokens for authentication instead of the [Users & Permissions plugin](/cms/features/users-permissions) |
| [Lifecycle functions](/cms/configurations/functions) | In the `/src/index` file | Optionally used to perform various actions that happen during the server lifecycle. Includes the `register`, `bootstrap`, and `destroy` functions. |
| [Cron jobs](/cms/configurations/cron) | In the `/config/server` file to enable the featureIn a dedicated, optional `cron-tasks` file that can be used to declare the jobs | Required to setup CRON jobs for the server. |
| [Environment variables](/cms/configurations/environment) | In dedicated files and folders for the environment (e.g., `config/env/production/server`) | Optionally used to define different environments and their variables. |
| [Single Sign-On (SSO)](/cms/configurations/guides/configure-sso)   | In the `config/admin` file | Required to use the SSO feature if enabled on your project. |
| [Feature flags](/cms/configurations/features) | In the `config/features` file | Optional for a typical, stable Strapi application.Only required to enable [future flags](/cms/configurations/features).|

## Guides

The following guides will help you address specific use cases related to the Strapi configuration:

# API calls configuration

Source: //cms/configurations/api
