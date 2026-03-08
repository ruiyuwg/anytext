# Plugins configuration

Plugin configurations are stored in `/config/plugins.js|ts` (see [project structure](/cms/project-structure)). Each plugin can be configured with the following available parameters:

| Parameter                  | Description                                                                                                                                                            | Type    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `enabled`                  | Enable (`true`) or disable (`false`) an installed plugin                                                                                                               | Boolean |
| `config`*Optional* | Used to override default plugin configuration ([defined in strapi-server.js](/cms/plugins-development/server-api#configuration)) | Object  |
| `resolve` *Optional, only required for local plugins*             | Path to the plugin's folder                                                                                                                                            | String  |

- Some core features of Strapi have historically been implemented as core plugins. This explains that their configuration is still defined in the `/config/plugins` file despite not technically being plugins in Strapi 5 anymore. This includes:

  - the [Upload configuration](/cms/features/media-library#available-options) for the package which powers the Media Library,
  - and the [Users & Permissions configuration](/cms/features/users-permissions#code-based-configuration).

  The detailed [GraphQL plugin configuration](/cms/plugins/graphql#code-based-configuration) is also documented in its dedicated plugin page.

- Additionally, providers configuration for the Media Library and the Email features are also defined in `/config/plugins`. Their configurations are detailed in the [Upload providers configuration](/cms/features/media-library#code-based-configuration) and the [Email providers configuration](/cms/features/email#providers).

**Basic example custom configuration for plugins:**

If no specific configuration is required, a plugin can also be declared with the shorthand syntax `'plugin-name': true`.

# Server configuration

Source: //cms/configurations/server
