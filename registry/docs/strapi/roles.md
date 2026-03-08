### Roles

The Users & Permissions feature allows to create and manage roles for end users, to configure what they can have access to.

#### Creating a new role

**Path:**

<!---
Click the search button 



### Registration configuration

If you have added any additional fields in your User **model**  that need to be accepted on registration, you need to added them to the list of allowed fields in the `config.register` object of [the `/config/plugins` file](/cms/configurations/plugins), otherwise they will not be accepted.

The following example shows how to ensure a field called "nickname" is accepted by the API on user registration:



### Rate limiting configuration

Rate limiting is applied to authentication and registration endpoints to prevent abuse.  The following parameters can be configured to change its behavior. Additional configuration options are provided by the 



### Templating emails

By default this plugin comes with two templates: reset password and email address confirmation. The templates use 



### Security configuration

JWTs can be verified and trusted because the information is digitally signed. To sign a token a _secret_ is required. By default Strapi generates and stores it in `/extensions/users-permissions/config/jwt.js`.

This is useful during development but for security reasons it is recommended to set a custom token via an environment variable `JWT_SECRET` when deploying to production.

By default you can set a `JWT_SECRET` environment variable and it will be used as secret. If you want to use another variable you can update the configuration file.



#### Creating a custom callback validator

By default, Strapi SSO only redirects to the redirect URL that is exactly equal to the url in the configuration:



To log out of all sessions, send the following request:



#### Identifier

The `identifier` parameter sent with requests can be an email or username, as in the following examples:



#### Token usage

The `jwt` may then be used for making permission-restricted API requests. To make an API request as a user place the JWT into an `Authorization` header of the `GET` request.

Any request without a token will assume the `public` role permissions by default. Modify the permissions of each user's role in the admin dashboard.

Authentication failures return a `401 (unauthorized)` error.

The `token` variable is the `data.jwt` received when logging in or registering.

```js

const token = 'YOUR_TOKEN_HERE';

// Request API.
axios
  .get('http://localhost:1337/posts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    // Handle success.
    console.log('Data: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
```

#### User registration

Creating a new user in the database with a default role as 'registered' can be done like in the following example:

```js

// Request API.
// Add your own code here to customize or restrict how the public can register new users.
axios
  .post('http://localhost:1337/api/auth/local/register', {
    username: 'Strapi user',
    email: 'user@strapi.io',
    password: 'strapiPassword',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
```

#### User object in Strapi context

The `user` object is available to successfully authenticated requests.

The authenticated `user` object is a property of `ctx.state`.

```js
create: async ctx => {
  const { id } = ctx.state.user;

  const depositObj = {
    ...ctx.request.body,
    depositor: id,
  };

  const data = await strapi.services.deposit.add(depositObj);

  // Send 201 `created`
  ctx.created(data);
};
```



# Installation
Source: //cms/installation

# Installation

Strapi projects can be installed either locally on a computer or on a remote server. The following installation guide provides step-by-step instructions on how to install and create a new Strapi project on your local machine:

If you already have an existing Strapi project on your local machine, the following guide provides step-by-step instructions on creating a custom Docker image for your project:



# Additional resources for migrating to Strapi 5
Source: //cms/migration/v4-to-v5/additional-resources/introduction

# Additional resources for upgrading to Strapi 5

The following pages cover some dedicated topics for specific use cases when upgrading to Strapi 5. Please ensure you have read the [introduction to upgrading to Strapi 5](/cms/migration/v4-to-v5/introduction-and-faq) and [step-by-step guide](/cms/migration/v4-to-v5/step-by-step) before moving forward.



# Breaking changes
Source: //cms/migration/v4-to-v5/breaking-changes

# Strapi v4 to Strapi 5 breaking changes

The present page lists all the breaking changes introduced in Strapi 5.
Breaking changes are grouped into topic-related categories, and for each line in the following tables line you will find:

- a short description of the breaking change,
- and 2 other columns, "Affects plugins" and "Handled by codemods", that sum up whether the breaking change also affects plugins and whether the breaking change is automatically handled by a codemod from the [upgrade CLI tool](/cms/upgrade-tool).

You can click on the description of any breaking change in the following tables to jump to the corresponding page with more details.

* To view a full list of available codemods, run the `npx @strapi/upgrade codemods ls` command in your terminal.
* To have a deeper look at the code executed by the codemods, head over to the  in the GitHub repository.

## Database

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [Content types always have feature columns](/cms/migration/v4-to-v5/breaking-changes/database-columns) | Yes | No|
| [MySQL v5 is not supported anymore](/cms/migration/v4-to-v5/breaking-changes/mysql5-unsupported) | No | No |
| [Database identifiers longer than 55 characters will be automatically shortened](/cms/migration/v4-to-v5/breaking-changes/database-identifiers-shortened) | Yes | ✅ Yes |
| [Only the `better-sqlite3` package is supported for the SQLite client](/cms/migration/v4-to-v5/breaking-changes/only-better-sqlite3-for-sqlite) | No | ✅ Yes |
| [Only the `mysql2` package is supported for the MySQL client](/cms/migration/v4-to-v5/breaking-changes/only-mysql2-package-for-mysql) | No | ✅ Yes |

## Dependencies

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [The CLI default package manager is not yarn anymore](/cms/migration/v4-to-v5/breaking-changes/yarn-not-default) | No | No |
| [Vite is the default bundler in Strapi 5](/cms/migration/v4-to-v5/breaking-changes/vite) | Yes | No |
| [Strapi 5 uses `react-router-dom` v6](/cms/migration/v4-to-v5/breaking-changes/react-router-dom-6) | Yes | ✅ Yes |
| [Strapi 5 uses `koa-body` v6](/cms/migration/v4-to-v5/breaking-changes/koa-body-v6) | Yes | No |
| [Webpack aliases are removed in Strapi 5](/cms/migration/v4-to-v5/breaking-changes/webpack-aliases-removed) | Yes | No |
| [Apollo Server v3 upgraded to Apollo Server v4](/cms/migration/v4-to-v5/breaking-changes/upgrade-to-apollov4) | Yes | No |

## Configuration

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [Some `env`-only configuration options are handled by the server configuration](/cms/migration/v4-to-v5/breaking-changes/removed-support-for-some-env-options) | No | No |
| [Configuration filenames should meet strict requirements](/cms/migration/v4-to-v5/breaking-changes/strict-requirements-config-files) | No | No |
| [Server log level is `http`](/cms/migration/v4-to-v5/breaking-changes/server-default-log-level) | No | No |
| [Model config path uses uid instead of dot notation](/cms/migration/v4-to-v5/breaking-changes/model-config-path-uses-uid) | Yes | 👷 Partly |
| [The `webhooks.populateRelations` server configuration is removed](/cms/migration/v4-to-v5/breaking-changes/remove-webhook-populate-relations) | Yes | No |
| [The `defaultIndex` option is removed from the `public` middleware](/cms/migration/v4-to-v5/breaking-changes/default-index-removed) | No | No |
| [Server proxy configuration options are grouped under the `server.proxy` object](/cms/migration/v4-to-v5/breaking-changes/server-proxy) | No | No |

## Strapi objects, methods, packages, and back-end customization

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [`strapi.fetch` uses the native `fetch()` API](/cms/migration/v4-to-v5/breaking-changes/fetch) | Yes | No |
| [strapi factories import have changed](/cms/migration/v4-to-v5/breaking-changes/strapi-imports) | Yes | 👷 Partly |
| [The `isSupportedImage` method is removed in Strapi 5](/cms/migration/v4-to-v5/breaking-changes/is-supported-image-removed) | Yes | No |
| [`strapi-utils` has been refactored](/cms/migration/v4-to-v5/breaking-changes/strapi-utils-refactored) | Yes | ✅ Yes |
| [Core service methods use the Document Service API](/cms/migration/v4-to-v5/breaking-changes/core-service-methods-use-document-service) | Yes | No |
| [i18n is now part of the strapi core](/cms/migration/v4-to-v5/breaking-changes/i18n-content-manager-locale) | Yes | ✅ Yes |

## Plugins, providers, admin panel and front-end customization

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [Users & Permissions `register.allowedFields` defaults to `[]`](/cms/migration/v4-to-v5/breaking-changes/register-allowed-fields) | No | ✅ Yes |
| [The `helper-plugin` is removed](/cms/migration/v4-to-v5/breaking-changes/helper-plugin-deprecated) | Yes | 👷 Partly |
| [`injectContentManagerComponent()` is removed in favor of `getPlugin('content-manager').injectComponent()`](/cms/migration/v4-to-v5/breaking-changes/inject-content-manager-component) | Yes | No |
| [Some Mailgun provider legacy variables are not supported](/cms/migration/v4-to-v5/breaking-changes/mailgun-provider-variables) | Yes | No |
| [The `lockIcon` property has been replaced by `licenseOnly`](/cms/migration/v4-to-v5/breaking-changes/license-only) | Yes | No |
| [The `ContentManagerAppState` redux is modified](/cms/migration/v4-to-v5/breaking-changes/redux-content-manager-app-state) | Yes | No |
| [The `EditViewLayout` and `ListViewLayout` have been refactored](/cms/migration/v4-to-v5/breaking-changes/edit-view-layout-and-list-view-layout-rewritten) | Yes | No |
| [The Admin Panel RBAC redux store has been updated](/cms/migration/v4-to-v5/breaking-changes/admin-panel-rbac-store-updated) | Yes | No |
| [The `getWhere` method for permission provider instances has been removed](/cms/migration/v4-to-v5/breaking-changes/get-where-removed) | Yes | No |
| [The Design System has been upgraded](/cms/migration/v4-to-v5/breaking-changes/design-system) | Yes | No |

## Content API

| Description | Affects plugins | Handled by codemods |
|-------------|-----------------|---------------------|
| [Strapi 5 has a new, flattened response format for API calls](/cms/migration/v4-to-v5/breaking-changes/new-response-format) | Yes | No |
| [REST API input is validated by default in controllers](/cms/migration/v4-to-v5/breaking-changes/default-input-validation) | Yes | No |
| [The GraphQL API has been updated](/cms/migration/v4-to-v5/breaking-changes/graphql-api-updated) | Yes | No |
| [The Entity Service API is deprecated and replaced by the Document Service API](/cms/migration/v4-to-v5/breaking-changes/entity-service-deprecated) | Yes | 👷 Partly |
| [`documentId` should be used instead of `id` in API calls](/cms/migration/v4-to-v5/breaking-changes/use-document-id) | Yes | 👷 Partly |
| [Database lifecycle hooks are triggered differently based on Document Service API methods](/cms/migration/v4-to-v5/breaking-changes/lifecycle-hooks-document-service) | Yes | No |
| [The `publicationState` parameter is not supported and replaced by `status`](/cms/migration/v4-to-v5/breaking-changes/publication-state-removed) | Yes | ✅ Yes |
| [Content types with Draft & Publish disabled always have the publishedAt value set to a date](/cms/migration/v4-to-v5/breaking-changes/publishedat-always-set-when-dandp-disabled) | Yes | No |
| [Sorting by id is no longer possible to sort by chronological order](/cms/migration/v4-to-v5/breaking-changes/sort-by-id) | Yes | ✅ Yes |
| [There is no `findPage()` method with the Document Service API](/cms/migration/v4-to-v5/breaking-changes/no-find-page-in-document-service) | Yes | No |
| [Some attributes and content-types names are reserved by Strapi](/cms/migration/v4-to-v5/breaking-changes/attributes-and-content-types-names-reserved) | Yes | No |
| [Upload a file at entry creation is no longer possible](/cms/migration/v4-to-v5/breaking-changes/no-upload-at-entry-creation) | Yes | No |
| [Components and dynamic zones should be populated using the detailed population strategy](/cms/migration/v4-to-v5/breaking-changes/no-shared-population-strategy-components-dynamic-zones) | Yes | No |
| [Updating repeatable components with the Document Service API is not recommended](/cms/migration/v4-to-v5/breaking-changes/do-not-update-repeatable-components-with-document-service-api) | Yes | No |



# Upgrading to Strapi 5 - Introduction and FAQ
Source: //cms/migration/v4-to-v5/introduction-and-faq

# Upgrading to Strapi 5: Introduction and FAQ

The latest major version of Strapi is Strapi 5. Strapi v4 is still supported until April 2026.

Whenever you feel ready to upgrade to Strapi 5, the present page will help you. It lists all available resources for upgrading from Strapi 4 to Strapi 5 and answers general questions you might have.

## Available resources

All of the following available resources will help you upgrade your application and plugins to Strapi 5, from the most common to the most specific use cases:

## Frequently asked questions

The following questions and their answers should help you cover the most common use cases:


How can I handle the upgrade and the installation of the latest dependencies?How can I handle the breaking changes in the code and adapt my code to Strapi 5?

Strapi provides an [upgrade tool](/cms/upgrade-tool) to ease the process. The upgrade tool is a command line tool with some commands that handle the upgrade of the dependencies and the execution of **codemods** .

Follow the step-by-step guide to learn how to use this tool in the context of upgrading to Strapi 5.

Strapi 5 docs also provide a [complete breaking changes database](/cms/migration/v4-to-v5/breaking-changes) and [dedicated resources](/cms/migration/v4-to-v5/additional-resources/introduction) to cover specific use cases.





How can I handle the data migration, ensuring that in Strapi 5 the application will still be working?
Strapi 5 integrates a series of data migration scripts that are run once the application starts for the first time in Strapi 5.
However, please always backup your database (found at .tmp/data.db by default if using a SQL database) before performing any upgrade, as instructed in the step-by-step guide.




As a Strapi Cloud customer, how can I handle the entire upgrade and deployment of my Strapi 5 application?

1. [Create a backup](/cloud/projects/settings#backups) and update your code locally, following the step-by-step guide.
2. Run the `yarn deploy` or `npm run deploy` commands from the [Cloud CLI](/cloud/cli/cloud-cli).

Strapi Cloud will deploy the updated code in Strapi 5 and will automatically run the data migration script.





How do I keep the legacy attributes wrapper during the migration?

- For REST clients, add the `Strapi-Response-Format: v4` header while you refactor your code. The [new response format breaking change](/cms/migration/v4-to-v5/breaking-changes/new-response-format#migration) shows where to add the header in `curl`, `fetch`, and Axios requests.
- For GraphQL clients, enable `v4CompatibilityMode` and follow the steps of the [GraphQL API migration documentation](/cms/migration/v4-to-v5/breaking-changes/graphql-api-updated#migration) to gradually remove `attributes`.
- REST responses continue to expose both `id` (legacy) and [`documentId`](/cms/migration/v4-to-v5/breaking-changes/use-document-id) when the header is enabled. GraphQL never exposes numeric `id`, so update your queries to use `documentId` even before you turn compatibility mode off.

Once every consumer reads the flattened format, remove the header so Strapi emits the Strapi 5 response shape by default.






# Step-by-step guide to upgrade to Strapi 5
Source: //cms/migration/v4-to-v5/step-by-step

# Step-by-step guide to upgrade to Strapi 5

The latest major version of Strapi is Strapi 5.

The present page is meant to be used as step-by-step instructions for upgrading your Strapi v4 application to Strapi 5.

Your Strapi v4 application is already running on the latest v4 minor and patch version. If it's not, run the [upgrade tool](/cms/upgrade-tool) with the `minor` command to reach it: `npx @strapi/upgrade minor`.

## Step 1: Get ready to upgrade

Before getting into the upgrade process itself, take the following precautions:

1. **Backup your database**:
    * If you are using SQLite with the default configuration (the default database provided with Strapi), your database file is named `data.db` and is located in the `.tmp/` folder at the root of your Strapi application.
    * If you are using another type of database, please refer to their official documentation (see  and ).
    * If your project is hosted on Strapi Cloud, you can manually [create a backup](/cloud/projects/settings#creating-a-manual-backup).
2. **Backup your code**:
    * If your code is versioned with git, create a new dedicated branch to run the migration.
    * If your code is _not_ versioned with git, create a backup of your working Strapi v4 code and store it in a safe place.
3. **Ensure the plugins you are using are compatible with Strapi 5**.

  To do so, list the plugins you are using, then check compatibility for each of them by reading their dedicated documentation on the  website.

## Step 2: Run automated migrations

Strapi provides a tool to automate some parts of the upgrade to Strapi 5: the [upgrade tool](/cms/upgrade-tool).

1. **Run the upgrade tool**.  

  ```sh
  npx @strapi/upgrade major
  ```

  The command will execute the update and installation of the dependencies of Strapi 5, and run the codemods to handle some of the breaking changes that come with Strapi 5.

  The codemods will handle the following changes:

  | Codemod name and GitHub code link | Description |
  |-----------------------------------|-------------|
  |  | Comment out lifecycles files in favor of [Document Service Middlewares](/cms/migration/v4-to-v5/breaking-changes/lifecycle-hooks-document-service) | 
  |  | Remove the i18n plugin dependency as i18n is now integrated into the core of Strapi |
  |   | Upgrade the react and react-dom dependencies | 
  |   | Upgrade the react-router-dom dependency |
  |   | Upgrade the styled-components dependency |
  |   | Partly handle migrations from `@strapi/helper-plugin` |
  |             | Partly handle the migration from the Entity Service API to the new Document Service API |
  |             | Wrap the `accessKeyId` and `secretAccessKey` properties inside a `credentials` object for users using the `aws-s3` provider | 
  |                                                                     | Update the sqlite dependency to better-sqlite3 | 
  |                           | Transform `@strapi/strapi` imports to use the new public interface | 
  |                 | Replace string dot format for config get/set/has with uid format for 'plugin' and 'api' namespace where possible | 
  |                             | Update utils to use the new public interface | 

If you develop Strapi plugins, other codemods handle some aspects of the helper-plugin deprecation. See the [related breaking change](/cms/migration/v4-to-v5/breaking-changes/helper-plugin-deprecated) for more information.

2. Go over the changes made by the upgrade tool to **check if you have to manually complete some code updates**:

  Look for `__TODO__` automatically added to your code by the codemods. Some of them might have been added while migrating from the Entity Service API to the new Document Service API introduced in Strapi 5.
  
  :::info Document Service API
  Additional information about the Document Service API can be found in the [breaking change entry description](/cms/migration/v4-to-v5/breaking-changes/entity-service-deprecated), the [specific migration guide](/cms/migration/v4-to-v5/additional-resources/from-entity-service-to-document-service), and the [API reference](/cms/api/document-service).
  :::

## Step 3: Check and handle manual upgrades

The following main changes might affect your Strapi application and require you to do some manual actions.

For each of them, read the indicated breaking change entry and check if some manual actions are still required after the upgrade tool has run:

1. **Database migration**:
    1. MySQL v5 is not supported 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/mysql5-unsupported)
    2. Only better-sqlite3 is supported 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/only-better-sqlite3-for-sqlite)
    3. Only mysql2 is supported 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/only-mysql2-package-for-mysql)
    4. Lifecycle hooks are triggered differently 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/lifecycle-hooks-document-service)
2. **Configuration**:
    1. Some environment variables are handled by the server configuration 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/removed-support-for-some-env-options)
    2. Custom configuration must meet specific requirements 👉 see [breaking change](/cms/migration/v4-to-v5/breaking-changes/strict-requirements-config-files)
3. **Admin panel customization**:
    * The helper-plugin has been removed 👉 see [migration reference](/cms/migration/v4-to-v5/additional-resources/helper-plugin)

👉 Finally, go over the rest of the [breaking changes database](/cms/migration/v4-to-v5/breaking-changes) for any edge case you might be concerned about.

## Step 4: Migrate the API consuming side

Strapi 5 has updated both the REST and GraphQL APIs.

Follow the steps below and leverage retro-compatibility headers and guided migration resources to gradually update your code for Strapi 5.

### Migrate REST API calls

1. Enable the compatibility header everywhere you still expect `attributes`, by adding `Strapi-Response-Format: v4` to REST calls in HTTP clients, SDKs, and middleware (see the [breaking change entry](/cms/migration/v4-to-v5/breaking-changes/new-response-format#migration) for concrete examples).
2. While the header is on, audit existing payloads. Capture representative responses (including populated relations, components, and media) so you can verify that legacy consumers keep working during the transition.
3. Update and test each client by:
    - removing `data.attributes` access,
    - switching to the flattened payload,
    - and adopting [`documentId`](/cms/migration/v4-to-v5/breaking-changes/use-document-id) wherever the REST API was previously returning numeric `id` only.
4. Disable the compatibility header per endpoint or consumer: once tests pass for a given client, remove `Strapi-Response-Format: v4` from its requests. Repeat until no consumer depends on the legacy wrapper.

### Migrate GraphQL API calls

1. Enable the compatibility header by setting `v4CompatibilityMode` to `true` in the `graphql` plugin configuration, so clients can continue to rely on `data.attributes` while you refactor them.
2. Follow each step of the [breaking change entry for GraphQL](/cms/migration/v4-to-v5/breaking-changes/graphql-api-updated). This will guide you to swap `id` for `documentId`, adopt `_connection` queries, remove `attributes`, and finally switch to `nodes/pageInfo`.
3. Test Relay and non-Relay queries by confirming that pagination metadata still matches expectations when you remove `_connection` and `data` for clients that do not need Relay semantics.
4. Disable the `v4CompatibilityMode` compatibility header: after every query and mutation works with the flattened schema, set the header to `false` so the server emits the Strapi 5 format by default.



# Admin hooks
Source: //cms/plugins-development/admin-hooks

# Admin Panel API: Hooks

The Hooks API allows a plugin to create and register hooks, i.e. places in the application where plugins can add personalized behavior.



For predictable interoperability between plugins, use stable namespaced hook IDs such as `my-plugin/my-hook`.

## Subscribing to hooks

Subscribe to hooks with `registerHook()` during the [`bootstrap`](/cms/plugins-development/admin-panel-api#bootstrap) lifecycle, once all plugins are loaded. The callback receives arguments from the hook caller and should return the (optionally mutated) data.



Async callbacks are also supported:



## Running hooks

Hooks can be run in 3 modes:

| Mode | Function | Return value |
|---|---|---|
| Series | `runHookSeries` | Array of results from each function, in order |
| Parallel | `runHookParallel` | Array of resolved promise results, in order |
| Waterfall | `runHookWaterfall` | Single value after all transformations applied sequentially |

For `runHookWaterfall`, each subscriber must return the transformed value so that the next subscriber in the chain receives it. Failing to return a value will break the chain.

## Using predefined hooks

Strapi includes predefined hooks for the Content Manager's List and Edit views.

### `INJECT-COLUMN-IN-TABLE`

The `Admin/CM/pages/ListView/inject-column-in-table` hook can add or mutate columns in the List View of the [Content Manager](/cms/intro):

```tsx
runHookWaterfall(INJECT_COLUMN_IN_TABLE, {
  displayedHeaders: ListFieldLayout[],
  layout: ListFieldLayout,
});
```

The following example subscribes to this hook to add a custom "External id" column:



**ListFieldLayout and ListLayout type definitions**:

### `MUTATE-EDIT-VIEW-LAYOUT`

The `Admin/CM/pages/EditView/mutate-edit-view-layout` hook can mutate the Edit View layout of the [Content Manager](/cms/intro).

The following example subscribes to this hook to force all fields to full width:



**EditLayout and EditFieldLayout type definitions:**

The `EditLayout` and `ListLayout` shapes documented here come from the `useDocumentLayout` hook (see ). Internal package naming can vary, but plugin authors should rely on the `EditLayout` and `ListLayout` shapes exposed in this page.



# Admin injection zones
Source: //cms/plugins-development/admin-injection-zones

# Admin Panel API: Injection zones

Plugins can extend and customize existing admin panel sections by injecting custom React components into predefined areas. This allows you to add functionality to Strapi's built-in interfaces without modifying core code.



## Custom injection zones

Plugins can define their own injection zones to allow other plugins to extend their UI. Declare injection zones in the `registerPlugin` configuration:



### Rendering injection zones in components

In Strapi 5, the `InjectionZone` component from `@strapi/helper-plugin` is removed and has no direct replacement export. To render injected components, create your own component with `useStrapiApp` from `@strapi/strapi/admin`.



### Injecting into custom zones

Other plugins can inject components into your custom injection zones using the `injectComponent()` method in their `bootstrap` lifecycle:



## Injection component parameters

The `injectComponent()` method accepts the following parameters:

| Parameter | Type | Description |
|---|---|---|
| `view` | `string` | The view name where the component should be injected |
| `zone` | `string` | The zone name within the view where the component should be injected |
| `component` | `object` | Configuration object with `name` (unique string) and `Component` (React component to inject) |

## Content Manager data access

When injecting components into Content Manager injection zones, you can access the Edit View data using the `useContentManagerContext` hook:



The `useContentManagerContext` hook is currently exported as `unstable_useContentManagerContext`. The `unstable_` prefix indicates the API may change in future releases. This hook replaces the [deprecated `useCMEditViewDataManager`](/cms/migration/v4-to-v5/additional-resources/helper-plugin#usecmeditviewdatamanager) from `@strapi/helper-plugin` which is not available in Strapi 5.

## Best practices

- **Use descriptive zone names.** Choose clear names for your injection zones (e.g., `top`, `bottom`, `before`, `after`).

- **Check plugin availability.** Always verify that a plugin exists before injecting components into its zones:

  ```js
  bootstrap(app) {
    const targetPlugin = app.getPlugin('target-plugin');
    if (targetPlugin) {
      targetPlugin.injectComponent('view', 'zone', {
        name: 'my-component',
        Component: MyComponent,
      });
    }
  }
  ```

- **Use unique component names.** Ensure component names are unique to avoid conflicts with other plugins.

- **Handle missing zones gracefully.** Components should handle cases where injection zones might not be available.

- **Document your injection zones.** Clearly document which injection zones your plugin provides and their intended use.



# Admin localization
Source: //cms/plugins-development/admin-localization

# Admin Panel API: Localization

Plugins can provide translations for multiple languages to make the admin interface accessible to users worldwide. Strapi automatically loads and merges plugin translations with core translations, making them available throughout the admin panel.



### Function parameters

The `registerTrads` function receives an object with the following property:

| Parameter | Type | Description |
|---|---|---|
| `locales` | `string[]` | Array of locale codes configured in the admin panel (e.g., `['en', 'fr', 'de']`) |

### Return value

The function must return a `Promise` that resolves to an array of translation objects. Each object has the following structure:

```ts
{
  data: Record<string, string>; // Translation key-value pairs
  locale: string; // Locale code (e.g., 'en', 'fr')
}
```

### Translation key prefixing

Translation keys must be prefixed with your plugin ID to avoid conflicts with other plugins and core Strapi translations. For example, if your plugin ID is `my-plugin`, a key like `plugin.name` should become `my-plugin.plugin.name`.

Use the `prefixPluginTranslations` utility function to automatically prefix all keys:



For instance, if your translation file contains:

```json
{
  "plugin.name": "My Plugin",
  "settings.title": "Settings"
}
```

After prefixing with plugin ID `my-plugin`, these become:

- `my-plugin.plugin.name`
- `my-plugin.settings.title`

### Missing translation files

The `registerTrads` function should gracefully handle missing translation files by returning an empty object for that locale. The `.catch()` handler in the example above ensures that if a translation file does not exist, the plugin still returns a valid translation object:

```js
.catch(() => {
  return {
    data: {},
    locale,
  };
});
```

This allows plugins to provide translations for only some locales (e.g., only English) without breaking the admin panel for other locales.

## Translations in components

To use translations in your React components, use the `useIntl` hook from `react-intl`:



### Helper function for translation keys

To avoid repeating the plugin ID prefix, create a helper function:



Then use it in components:



## Translations in configuration

Translation keys are also used when configuring menu links, settings sections, and other admin panel elements:



## Plugin translation lifecycle

Strapi's admin panel automatically:

1. Calls `registerTrads` for all registered plugins during initialization
2. Merges translations from all plugins with core Strapi translations
3. Applies custom translations from the admin configuration (if any)
4. Makes translations available via `react-intl` throughout the admin panel

In practice, core admin translations are loaded first, plugin translations are merged on top, and project-level overrides in `config.translations` let you customize the labels displayed in the admin panel.

## Best practices

- **Always prefix translation keys.** Use `prefixPluginTranslations` or manually prefix keys with your plugin ID to avoid conflicts.
- **Provide default messages.** Always include `defaultMessage` when using `formatMessage` as a fallback if translations are missing.
- **Handle missing translations gracefully.** The `registerTrads` function should return empty objects for missing locales rather than throwing errors.
- **Use descriptive key names.** Choose clear, hierarchical key names (e.g., `settings.general.title` rather than `title1`).
- **Support at least English.** Providing English translations ensures your plugin works out of the box.
- **Verify behavior with multiple locales.** Test that your plugin works correctly when different locales are selected in the admin panel.

The `en` locale is always available in Strapi and serves as the fallback locale. If a translation is missing for a selected locale, Strapi uses the English translation.

To see which locales are available in your Strapi instance, check the `config.locales` array in your `src/admin/app.ts` or `src/admin/app.js` file. For programmatic access at runtime, see [Accessing the Redux store](/cms/plugins-development/admin-redux-store) (note that internal store structure may change between versions).



# Admin navigation & settings
Source: //cms/plugins-development/admin-navigation-settings

# Admin Panel API: Navigation & settings

Plugins can customize the admin panel's navigation sidebar and settings pages to provide access to their features. All functions described on this page are called within the [`register`](/cms/plugins-development/admin-panel-api#register) or [`bootstrap`](/cms/plugins-development/admin-panel-api#bootstrap) lifecycle functions of your plugin's entry file.



## Settings

The Settings API allows plugins to create new settings sections or add links to existing sections. Settings sections are organized groups of configuration pages accessible from the 



The `createSettingSection()` function accepts the following parameters:

* the first argument is the section configuration:

  | Parameter | Type | Required | Description |
  |---|---|---|---|
  | `id` | `string` | ✅ | Unique identifier for the settings section |
  | `intlLabel` | `object` | ✅ | Localized label for the section, following the 



`addSettingsLink` and `addSettingsLinks` both take a `sectionId` string as the first argument (e.g., `'global'` or `'permissions'`). The second argument is a single link object for `addSettingsLink` or an array of link objects for `addSettingsLinks`, using the same properties as the `links` array in [`createSettingSection()` (see table above)](#creating-a-new-settings-section).

### Available settings sections

Strapi provides built-in settings sections that plugins can extend:

- `global`: General application settings
- `permissions`: Administration panel settings

Creating a new settings section must be done in the `register` lifecycle function. Adding links to existing settings sections must be done in the `bootstrap` lifecycle function.

### Path conventions for `to`

The `to` parameter behaves differently depending on the context:

| Context | `to` value | Final URL |
|---|---|---|
| `addMenuLink` | `/plugins/my-plugin` | `http://localhost:1337/admin/plugins/my-plugin` |
| `createSettingSection` link | `my-plugin/general` | `http://localhost:1337/admin/settings/my-plugin/general` |
| `addSettingsLink` | `my-plugin/documentation` | `http://localhost:1337/admin/settings/my-plugin/documentation` |

For menu links, the path is relative to the admin panel root (`/admin`). For settings links, the path is relative to the settings route (`/admin/settings`). Do not include the `settings/` prefix in settings link paths.

The `permissions` parameter on links only controls visibility in the navigation. To fully protect your plugin pages and register RBAC actions, see the [Admin permissions for plugins](/cms/plugins-development/guides/admin-permissions-for-plugins) guide.



# Admin Panel API overview
Source: //cms/plugins-development/admin-panel-api

# Admin Panel API for plugins: An overview

A Strapi plugin can interact with both the back end and the front end of a Strapi application. The Admin Panel API is about the front end part, i.e. it allows a plugin to customize Strapi's [admin panel](/cms/intro).

For more information on how plugins can interact with the back end part of Strapi, see [Server API](/cms/plugins-development/server-api).

## General considerations

The admin panel of Strapi is a 



#### registerPlugin()

**Type:** `Function`

Registers the plugin to make it available in the admin panel. This function is called within the [`register()`](#register) lifecycle function and returns an object with the following parameters:

| Parameter        | Type                     | Description                                                                                        |
| ---------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| `id`             | String                   | Plugin id                                                                                          |
| `name`           | String                   | Plugin name                                                                                        |
| `apis`           | `Record<string, unknown>` | APIs exposed to other plugins                                                                      |
| `initializer`    | `React.ComponentType`   | Component for plugin initialization                                                                |
| `injectionZones` | Object                   | Declaration of available [injection zones](/cms/plugins-development/admin-injection-zones)          |
| `isReady`        | Boolean                  | Plugin readiness status (default: `true`)                                                          |

Some parameters can be imported from the `package.json` file.

**Example:**



### bootstrap()

**Type**: `Function`

Exposes the bootstrap function, executed after all the plugins are [registered](#register).

Within the bootstrap function, a plugin can, for instance:

* extend another plugin, using `getPlugin('plugin-name')`,
* register hooks (see [Hooks](/cms/plugins-development/admin-hooks)),
* [add links to a settings section](/cms/plugins-development/admin-navigation-settings#adding-links-to-existing-settings-sections),
* add actions and options to the Content Manager's List view and Edit view (see details on the [Content Manager APIs page](/cms/plugins-development/content-manager-apis)).

**Example:**



## Available actions

The Admin Panel API allows a plugin to take advantage of several small APIs to perform actions that will modify the user interface, user experience, or behavior of the admin panel. 

Use the following table as a reference to know which API and function to use, and where to declare them, and click on any function name to learn more:

| Action                                   | Function to use                                   | Related lifecycle function  |
| ---------------------------------------- | ------------------------------------------------- | --------------------------- |
| Add a new link to the main navigation    | [`addMenuLink()`](/cms/plugins-development/admin-navigation-settings#navigation-sidebar-menu-links)                      | [`register()`](#register)   |
| Create a new settings section            | [`createSettingSection()`](/cms/plugins-development/admin-navigation-settings#creating-a-new-settings-section) | [`register()`](#register)   |
| Add a single link to a settings section  | [`addSettingsLink()`](/cms/plugins-development/admin-navigation-settings#adding-links-to-existing-settings-sections)             | [`bootstrap()`](#bootstrap) |
| Add multiple links to a settings section | [`addSettingsLinks()`](/cms/plugins-development/admin-navigation-settings#adding-links-to-existing-settings-sections)           | [`bootstrap()`](#bootstrap) |
| Add panels, options, and actions to the Content Manager's Edit view and List view | [`addEditViewSidePanel()`](/cms/plugins-development/content-manager-apis#addeditviewsidepanel)[`addDocumentAction()`](/cms/plugins-development/content-manager-apis#adddocumentaction)[`addDocumentHeaderAction()`](/cms/plugins-development/content-manager-apis#adddocumentheaderaction)[`addBulkAction()`](/cms/plugins-development/content-manager-apis#addbulkaction) | [`bootstrap()`](#bootstrap) |
| Declare an injection zone                | [`registerPlugin()`](#registerplugin)             | [`register()`](#register)   |
| Inject a component in an injection zone  | [`injectComponent()`](/cms/plugins-development/admin-injection-zones)           | [`bootstrap()`](#bootstrap)  |
| Add a reducer                            | [`addReducers()`](/cms/plugins-development/admin-redux-store#adding-custom-reducers)                      | [`register()`](#register)   |
| Create a hook                          | [`createHook()`](/cms/plugins-development/admin-hooks)                    | [`register()`](#register)   |
| Register a hook                          | [`registerHook()`](/cms/plugins-development/admin-hooks)                    | [`bootstrap()`](#bootstrap)   |
| Provide translations for your plugin's admin interface | [`registerTrads()`](/cms/plugins-development/admin-localization#registertrads) | _(Handled in the async `registerTrads()` function itself)_ |


Click on any of the following cards to get more details about a specific topic:

The WYSIWYG editor can be replaced by taking advantage of [custom fields](/cms/features/custom-fields), for instance using the .

The admin panel supports dotenv variables.

All variables defined in a `.env` file and prefixed by `STRAPI_ADMIN_` are available while customizing the admin panel through `process.env`.



# Redux store & reducers
Source: //cms/plugins-development/admin-redux-store

# Admin Panel API: Redux store & reducers

Strapi's admin panel uses a global Redux store to manage application state. Plugins can access this store to read state, dispatch actions, and subscribe to state changes. This enables plugins to interact with core admin functionality like theme settings, language preferences, and authentication state.



## Reading state with `useSelector`

The most common way to access Redux state in your plugin components is using the `useSelector` hook from `react-redux`:



### Available state properties

The `admin_app` slice contains the following state properties:

| Property | Type | Description |
|---|---|---|
| `theme.currentTheme` | `string` | Current theme (`'light'`, `'dark'`, or `'system'`) |
| `theme.availableThemes` | `string[]` | Array of available theme names |
| `language.locale` | `string` | Current locale code (e.g., `'en'`, `'fr'`) |
| `language.localeNames` | `object` | Object mapping locale codes to display names |
| `token` | `string \| null` | Authentication token |
| `permissions` | `object` | User permissions object |

## Dispatching actions

To update the Redux store, use the `useDispatch` hook:

The examples below dispatch actions to core admin state (theme, locale) for illustration purposes. In practice, most plugins should dispatch actions to their own custom reducers rather than modifying global admin state.



### Available actions



The `admin_app` slice provides the following actions:

| Action type | Payload type | Description |
|---|---|---|
| `admin/setAppTheme` | `string` | Set the theme (`'light'`, `'dark'`, or `'system'`) |
| `admin/setAvailableThemes` | `string[]` | Updates `theme.availableThemes` in `admin_app` |
| `admin/setLocale` | `string` | Set the locale (e.g., `'en'`, `'fr'`) |
| `admin/setToken` | `string \| null` | Set the authentication token |
| `admin/login` | `{ token: string, persist?: boolean }` | Login action with token and persistence option |
| `admin/logout` | `void` | Logout action (no payload) |

When dispatching actions, use the Redux Toolkit action type format: `'sliceName/actionName'`. The admin slice is named `'admin'`, so actions follow the pattern `'admin/actionName'`.

## Accessing the store instance

For advanced use cases, you can access the store instance directly using the `useStore` hook:



## Complete example

The following example combines all 3 patterns (useSelector, useDispatch, useStore) described on the present page:

            
          

              {Object.keys(availableLocales).map((locale) => (
                
              ))}
            
          

              {lastChange && (
                
              )}
            
          
        
      
    
  );
};

```

</ExpandableContent>

<br/>

</TabItem>

            </Flex>
          </Box>

              {Object.keys(availableLocales).map((locale) => (
                
              ))}
            </Flex>
          </Box>

              {lastChange && (
                
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Main>
  );
};

```








## Best practices

- **Use `useSelector` for reading state.** Prefer [`useSelector`](#reading-state-with-useselector) over direct store access. It automatically subscribes to updates and re-renders components when the selected state changes.
- **Clean up subscriptions.** Always unsubscribe from store subscriptions in `useEffect` cleanup functions to prevent memory leaks.
- **Consider type safety.** For Redux state access in plugins, use `react-redux` hooks (`useSelector`, `useDispatch`) with plugin-local typing (for example `RootState` and `AppDispatch`). If you use Strapi admin utilities, import them from `@strapi/admin/strapi-admin` (not `@strapi/admin`). Avoid relying on undocumented typed Redux hooks as part of Strapi's public API until they are explicitly documented as stable.
- **Avoid unnecessary dispatches.** Only dispatch actions when you need to update state. Reading state does not require dispatching actions.
- **Respect core state.** Be careful when modifying core admin state (like theme or locale) as it affects the entire admin panel. Consider whether your plugin should modify global state or maintain its own local state.

To add your own state to the Redux store, see [Adding custom reducers](#adding-custom-reducers) above.



# Content Manager APIs
Source: //cms/plugins-development/content-manager-apis

# Content Manager APIs

Content Manager APIs are part of the [Admin Panel API](/cms/plugins-development/admin-panel-api). They are a way for Strapi plugins to add content or options to the [Content Manager](/cms/features/content-manager). The Content Manager APIs allow you to extend the Content Manager by adding functionality from your own plugin, just like you can do it with [Injection zones](/cms/plugins-development/admin-injection-zones).

  

- Passing a function that receives the current elements and return the new ones. This is useful if, for example, you want to add something in a specific position in the list, like in the following code:

  

### Components

You need to pass components to the API in order to add things to the Content Manager.

Components are functions that receive some properties and return an object with some shape (depending on the function). Each component's return object is different based on the function you're using, but they receive similar properties, depending on whether you use a ListView or EditView API.

Properties include important information about the document(s) you are viewing or editing.

#### ListViewContext

```jsx
interface ListViewContext {
  /**
   * Will be either 'single-types' | 'collection-types'
   */
  collectionType: string;
  /**
   * The current selected documents in the table
   */
  documents: Document[];
  /**
   * The current content-type's model.
   */
  model: string;
}
```

#### EditViewContext

```jsx
interface EditViewContext {
  /**
   * This will only be null if the content-type
   * does not have draft & publish enabled.
   */
  activeTab: 'draft' | 'published' | null;
  /**
   * Will be either 'single-types' | 'collection-types'
   */
  collectionType: string;
  /**
   * Will be undefined if someone is creating an entry.
   */
  document?: Document;
  /**
   * Will be undefined if someone is creating an entry.
   */
  documentId?: string;
  /**
   * Will be undefined if someone is creating an entry.
   */
  meta?: DocumentMetadata;
  /**
   * The current content-type's model.
   */
  model: string;
}
```

More information about types and APIs can be found in 



## Available APIs



### `addEditViewSidePanel`

Use this to add new panels to the Edit view sidebar, just like in the following example where something is added to the Releases panel:

![addEditViewSidePanel](/img/assets/content-manager-apis/add-edit-view-side-panel.png)

```jsx
addEditViewSidePanel(panels: DescriptionReducer<PanelComponent> | PanelComponent[])
```

#### PanelComponent

A `PanelComponent` receives the properties listed in [EditViewContext](#editviewcontext) and returns an object with the following shape:

```tsx
type PanelComponent = (props: PanelComponentProps) => {
  title: string;
  content: React.ReactNode;
};
```

`PanelComponentProps` extends the [EditViewContext](#editviewcontext).

### `addDocumentAction`

Use this API to add more actions to the Edit view or the List View of the Content Manager. There are 3 positions available:

- `header` of the Edit view:

    ![Header of the Edit view](/img/assets/content-manager-apis/add-document-action-header.png)
- `panel` of the Edit view:

    ![Panel of the Edit View](/img/assets/content-manager-apis/add-document-action-panel.png)
- `table-row` of the List view:

    ![Table-row in the List View](/img/assets/content-manager-apis/add-document-action-tablerow.png)

```jsx
addDocumentAction(actions: DescriptionReducer<DocumentActionComponent> | DocumentActionComponent[])
```

#### DocumentActionDescription

The interface and properties of the API look like the following: 

```jsx
interface DocumentActionDescription {
    label: string;
    onClick?: (event: React.SyntheticEvent) => Promise<boolean | void> | boolean | void;
    icon?: React.ReactNode;
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default 'panel'
     * @description Where the action should be rendered.
     */
    position?: DocumentActionPosition | DocumentActionPosition[];
    dialog?: DialogOptions | NotificationOptions | ModalOptions;
    /**
     * @default 'secondary'
     */
    variant?: ButtonProps['variant'];
    loading?: ButtonProps['loading'];
}

type DocumentActionPosition = 'panel' | 'header' | 'table-row' | 'preview' | 'relation-modal';

interface DialogOptions {
    type: 'dialog';
    title: string;
    content?: React.ReactNode;
    variant?: ButtonProps['variant'];
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void | Promise<void>;
}
interface NotificationOptions {
    type: 'notification';
    title: string;
    link?: {
        label: string;
        url: string;
        target?: string;
    };
    content?: string;
    onClose?: () => void;
    status?: NotificationConfig['type'];
    timeout?: number;
}
interface ModalOptions {
    type: 'modal';
    title: string;
    content: React.ComponentType<{
        onClose: () => void;
    }> | React.ReactNode;
    footer?: React.ComponentType<{
        onClose: () => void;
    }> | React.ReactNode;
    onClose?: () => void;
}
```

### `addDocumentHeaderAction`

Use this API to add more actions to the header of the Edit view of the Content Manager:

![addEditViewSidePanel](/img/assets/content-manager-apis/add-document-header-action.png)

```jsx
addDocumentHeaderAction(actions: DescriptionReducer<HeaderActionComponent> | HeaderActionComponent[])
```

#### HeaderActionDescription

The interface and properties of the API look like the following:

```jsx
interface HeaderActionDescription {
  disabled?: boolean;
  label: string;
  icon?: React.ReactNode;
  type?: 'icon' | 'default';
  onClick?: (event: React.SyntheticEvent) => Promise<boolean | void> | boolean | void;
  dialog?: DialogOptions;
  options?: Array<{
    disabled?: boolean;
    label: string;
    startIcon?: React.ReactNode;
    textValue?: string;
    value: string;
  }>;
  onSelect?: (value: string) => void;
  value?: string;
}

interface DialogOptions {
  type: 'dialog';
  title: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}
```

### `addBulkAction`

Use this API to add buttons that show up when entries are selected on the List View of the Content Manager, just like the "Add to Release" button for instance:

![addEditViewSidePanel](/img/assets/content-manager-apis/add-bulk-action.png)

```jsx
addBulkAction(actions: DescriptionReducer<BulkActionComponent> | BulkActionComponent[])
```

#### BulkActionDescription

The interface and properties of the API look like the following: 

```jsx
interface BulkActionDescription {
  dialog?: DialogOptions | NotificationOptions | ModalOptions;
  disabled?: boolean;
  icon?: React.ReactNode;
  label: string;
  onClick?: (event: React.SyntheticEvent) => void;
  /**
   * @default 'default'
   */
  type?: 'icon' | 'default';
  /**
   * @default 'secondary'
   */
  variant?: ButtonProps['variant'];
}
```



# Plugin creation & setup
Source: //cms/plugins-development/create-a-plugin

# Plugin creation

There are many ways to create a Strapi 5 plugin, but the fastest and recommended way is to use the Plugin SDK.

The Plugin SDK is a set of commands orientated around developing plugins to use them as local plugins or to publish them on NPM and/or submit them to the Marketplace.

With the Plugin SDK, you do not need to set up a Strapi project before creating a plugin.

The present guide covers creating a plugin from scratch, linking it to an existing Strapi project, and publishing the plugin. If you already have an existing plugin, you can instead retrofit the plugin setup to utilise the Plugin SDK commands (please refer to the [Plugin SDK reference](/cms/plugins-development/plugin-sdk) for a full list of available commands).

This guide assumes you want to develop a plugin external to your Strapi project. However, the steps largely remain the same if you want to develop a plugin within your existing project. If you are not [using a monorepo](#monorepo) the steps are exactly the same.




The path `my-strapi-plugin` can be replaced with whatever you want to call your plugin, including the path to where it should be created (e.g., `code/strapi-plugins/my-new-strapi-plugin`).

You will be ran through a series of prompts to help you setup your plugin. If you selected yes to all options the final structure will be similar to the default [plugin structure](/cms/plugins-development/plugin-structure).

### Linking the plugin to your project

In order to test your plugin during its development, the recommended approach is to link it to a Strapi project.

Linking your plugin to a project is done with the `watch:link` command. The command will output explanations on how to link your plugin to a Strapi project.

In a new terminal window, run the following commands:



In the above examples we use the name of the plugin (`my-strapi-plugin`) when linking it to the project. This is the name of the package, not the name of the folder.

Because this plugin is installed via `node_modules` you won't need to explicity add it to your `plugins` [configuration file](/cms/configurations/plugins), so running the [`develop command`](/cms/cli#strapi-develop) to start your Strapi project will automatically pick up your plugin.

Now that your plugin is linked to a project, run `yarn develop` or `npm run develop` to start the Strapi application.

You are now ready to develop your plugin how you see fit! If you are making server changes, you will need to restart your server for them to take effect.

### Building the plugin for publishing

When you are ready to publish your plugin, you will need to build it. To do this, run the following command:



The above commands will not only build the plugin, but also verify that the output is valid and ready to be published. You can then publish your plugin to NPM as you would any other package.

If you're upgrading from `@strapi/sdk-plugin` v5 to v6:
* Delete any `packup.config.ts` file from your plugin (it is no longer used).
* Rely on `package.json#exports` for build configuration (it is now derived automatically).
* Add `--sourcemap` to your build command if you need sourcemaps (they now default to off).

No other changes are required.

## Working with the Plugin SDK in a monorepo environment

If you are working with a monorepo environment to develop your plugin, you don't need to use the `watch:link` command because the monorepo workspace setup will handle the symlink. You can use the `watch` command instead.

However, if you are writing admin code, you might add an `alias` that targets the source code of your plugin to make it easier to work with within the context of the admin panel:

```ts

  config.resolve.alias = {
    ...config.resolve.alias,
    'my-strapi-plugin': path.resolve(
      __dirname,
      // We've assumed the plugin is local.
      '../plugins/my-strapi-plugin/admin/src'
    ),
  };

  return config;
};
```

Because the server looks at the `server/src/index.ts|js` file to import your plugin code, you must use the `watch` command otherwise the code will not be transpiled and the server will not be able to find your plugin.

### Configuration with a local plugin

Since the Plugin SDK is primarily designed for developing plugins, not locally, the configuration needs to be adjusted manually for local plugins.

When developing your plugin locally (using `@strapi/sdk-plugin`), your plugins configuration file looks like in the following example:

```js title="/config/plugins.js|ts"
myplugin: {
  enabled: true,
  resolve: `./src/plugins/local-plugin`,
},
```

However, this setup can sometimes lead to errors such as the following:

```js
Error: 'X must be used within StrapiApp';
```

This error often occurs when your plugin attempts to import core Strapi functionality, for example using:

```js

```

To resolve the issue, remove `@strapi/strapi` as a dev dependency from your plugin. This ensures that your plugin uses the same instance of Strapi's core modules as the main application, preventing conflicts and the associated errors.

## Setting a local plugin in a monorepo environment without the Plugin SDK

In a monorepo, you can configure your local plugin without using the Plugin SDK by adding 2 entry point files at the root of your plugin:

- server entry point: `strapi-server.js|ts`
- admin entry point: `strapi-admin.js|ts`

### Server entry point

The server entry point file initializes your plugin's server-side functionalities. The expected structure for `strapi-server.js` (or its TypeScript variant) is:

```js
module.exports = () => {
  return {
    register,
    config,
    controllers,
    contentTypes,
    routes,
  };
};
```

Here, you export a function that returns your plugin's core components such as controllers, routes, and configuration. For more details, please refer to the [Server API reference](/cms/plugins-development/server-api).

### Admin entry point

The admin entry point file sets up your plugin within the Strapi admin panel. The expected structure for `strapi-admin.js` (or its TypeScript variant) is:

```js

  register(app) {},
  bootstrap() {},
  registerTrads({ locales }) {},
};
```

This object includes methods to register your plugin with the admin application, perform bootstrapping actions, and handle translations. For more details, please refer to the [Admin Panel API reference](/cms/plugins-development/admin-panel-api).

For a complete example of how to structure your local plugin in a monorepo environment, please check out our .



# Developing plugins
Source: //cms/plugins-development/developing-plugins

# Developing Strapi plugins

Strapi allows the development of plugins that work exactly like the built-in plugins or 3rd-party plugins available from the 

Plugins can also be used to add [custom fields](/cms/features/custom-fields) to Strapi.

## Guides



The  can also include additional information useful while developing a Strapi plugin.



# How to create admin permissions from plugins
Source: //cms/plugins-development/guides/admin-permissions-for-plugins

# How to create admin permissions from plugins

When [developing a Strapi plugin](/cms/plugins-development/developing-plugins), you might want to create admin permissions for your plugin. By doing that you can hook in to the [RBAC system](/cms/features/rbac) of Strapi to selectively grant permissions to certain pieces of your plugin.

To create admin permissions for your Strapi plugin, you'll need to register them on the server side before implementing them on the admin side.

## Register the permissions server side

Each individual permission has to registered in the bootstrap function of your plugin, as follows:



## Implement permissions on the admin panel side

Before we can implement our permissions on the admin panel side we have to define them in a reusable configuration file. This file can be stored anywhere in your plugin admin code. You can do that as follows:

```js title="/src/plugins/my-plugin/admin/src/permissions.js|ts"
const pluginPermissions = {
  'accessOverview': [{ action: 'plugin::my-plugin.overview.access', subject: null }],
  'accessSidebar': [{ action: 'plugin::my-plugin.sidebar.access', subject: null }],
};

```

### Page permissions

Once you've created the configuration file you are ready to implement your permissions. If you've bootstrapped your plugin using the [plugin SDK init command](/cms/plugins-development/plugin-sdk#npx-strapisdk-plugin-init), you will have an example `HomePage.tsx` file. To implement page permissions you can do the following:

```js title="/src/plugins/my-plugin/admin/src/pages/HomePage.jsx|tsx" {2,5,12,16}

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    
    </Page.Protect>
  );
};

```

You can see how we use our permissions configuration file together with the `<Page.Protect>` component to require specific permissions in order to view this page.

### Menu link permissions

The previous example makes sure that the permissions of a user that visits your page directly will be validated. However, you might want to remove the menu link to that page as well. To do that, you'll have to make a change to the `addMenuLink` implementation. You can do as follows:

```js title="/src/plugins/my-plugin/admin/src/index.js|ts" {21-23,5}

  register(app) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        const { App } = await import('./pages/App');

        return App;
      },
      permissions: [
        pluginPermissions.accessOverview[0],
      ],
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },
};

```

### Custom permissions with the `useRBAC` hook

To get even more control over the permission of the admin user you can use the `useRBAC` hook. With this hook you can use the permissions validation just like you want, as in the following example:

```js title="/src/plugins/my-plugin/admin/src/components/Sidebar.jsx|tsx" 

const Sidebar = () => {
  const {
    allowedActions: { canAccessSidebar },
  } = useRBAC(pluginPermissions);

  if (!canAccessSidebar) {
    return null;
  }

  return (
    <div>Sidebar component</div>
  );
};

```



# How to create components for Strapi plugins
Source: //cms/plugins-development/guides/create-components-for-plugins

# How to create components for Strapi plugins

When [developing a Strapi plugin](/cms/plugins-development/developing-plugins), you might want to create reusable components for your plugin. Components in Strapi are reusable data structures that can be used across different content-types.

To create components for your Strapi plugin, you'll need to follow a similar approach to creating content-types, but with some specific differences.

## Creating components

You can create components for your plugins in 2 different ways: using the Content-Type Builder (recommended way) or manually.

### Using the Content-Type Builder 

The recommended way to create components for your plugin is through the Content-Type Builder in the admin panel. 

The [Content-Type Builder documentation](/cms/features/content-type-builder#new-component) provides more details on this process.

### Creating components manually

If you prefer to create components manually, you'll need to:

1. Create a component schema in your plugin's structure.
2. Make sure the component is properly registered.

Components for plugins should be placed in the appropriate directory within your plugin structure. You would typically create them within the server part of your plugin (see [plugin structure documentation](/cms/plugins-development/plugin-structure)).

For more detailed information about components in Strapi, you can refer to the [Model attributes documentation](/cms/backend-customization/models#components-json).

## Reviewing the component structure

Components in Strapi follow the following format in their definition:

```javascript title="/my-plugin/server/components/category/component-name.json"
{
  "attributes": {
    "myComponent": {
      "type": "component",
      "repeatable": true,
      "component": "category.componentName"
    }
  }
}
```

## Component schema example

A component schema defines the structure of a reusable data fragment. Here is an example of a component schema for a plugin:

```json title="my-plugin/server/components/my-category/my-component.json"
{
  "collectionName": "components_my_category_my_components",
  "info": {
    "displayName": "My Component",
    "icon": "align-justify"
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text"
    }
  }
}
```

This configuration ensures your components will be available in both the Content-Type Builder and Content Manager when used in a content-type that has `pluginOptions` visibility enabled.



# How to pass data from server to admin panel with a Strapi plugin
Source: //cms/plugins-development/guides/pass-data-from-server-to-admin

# How to pass data from server to admin panel with a Strapi plugin

Strapi is **headless** . The admin panel is completely separate from the server.

When [developing a Strapi plugin](/cms/plugins-development/developing-plugins) you might want to pass data from the `/server` to the `/admin` folder. Within the `/server` folder you have access to the Strapi object and can do database queries whereas in the `/admin` folder you can't.

Passing data from the `/server` to the `/admin` folder can be done using the admin panel's Axios instance:

To pass data from the `/server` to `/admin` folder you would first [create a custom admin route](#create-a-custom-admin-route) and then [get the data returned in the admin panel](#get-the-data-in-the-admin-panel).

## Create a custom admin route

Admin routes are like the routes that you would have for any controller, except that the `type: 'admin'` declaration hides them from the general API router, and allows you to access them from the admin panel.

The following code will declare a custom admin route for the `my-plugin` plugin:

```js title="/my-plugin/server/routes/index.js"
module.exports = {
  'pass-data': {
    type: 'admin',
    routes: [
      {
        method: 'GET',
        path: '/pass-data',
        handler: 'myPluginContentType.index',
        config: {
          policies: [],
          auth: false,
        },
      },
    ]
  }
  // ...
};
```

This route will call the `index` method of the `myPluginContentType` controller when you send a GET request to the `/my-plugin/pass-data` URL endpoint.

Let's create a basic custom controller that simply returns a simple text:

```js title="/my-plugin/server/controllers/my-plugin-content-type.js"
'use strict';

module.exports = {
  async index(ctx) {
    ctx.body = 'You are in the my-plugin-content-type controller!';
  }
}
```

This means that when sending a GET request to the `/my-plugin/pass-data` URL endpoint, you should get the `You are in the my-plugin-content-type controller!` text returned with the response.

## Get the data in the admin panel

Any request sent from an admin panel component to the endpoint for which we defined the custom route `/my-plugin/pass-data` should now return the text message returned by the custom controller.

So for instance, if you create an `/admin/src/api/foobar.js` file and copy and paste the following code example:

```js title="/my-plugin/admin/src/api/foobar.js"

const foobarRequests = {
  getFoobar: async () => {
    const data = await axios.get(`/my-plugin/pass-data`);
    return data;
  },
};

```

You will be able to use `foobarRequests.getFoobar()` in the code of an admin panel component and have it return the `You are in the my-plugin-content-type controller!` text with the data.

For instance, within a React component, you could use `useEffect` to get the data after the component initializes:

```js title="/my-plugin/admin/src/components/MyComponent/index.js"

const [foobar, setFoobar] = useState([]);
// …
useEffect(() => {
  foobarRequests.getFoobar().then(res => {
    setFoobar(res.data);
  });
}, [setFoobar]);
// …
```

This would set the `You are in the my-plugin-content-type controller!` text within the `foobar` data of the component's state.



# How to store and access data from a Strapi plugin
Source: //cms/plugins-development/guides/store-and-access-data

# How to store and access data from a Strapi plugin

To store data with a Strapi [plugin](/cms/plugins-development/developing-plugins), use a plugin content-type. Plugin content-types work exactly like other [content-types](/cms/backend-customization/models). Once the content-type is [created](#create-a-content-type-for-your-plugin), you can start [interacting with the data](#interact-with-data-from-the-plugin).

## Create a content-type for your plugin

To create a content-type with the CLI generator, run the following command in a terminal within the `server/src/` directory of your plugin:



The generator CLI is interactive and asks a few questions about the content-type and the attributes it will contain. Answer the first questions, then for the `Where do you want to add this model?` question, choose the `Add model to existing plugin` option and type the name of the related plugin when asked.


  
  The strapi generate content-type CLI generator is used to create a basic content-type for a plugin.




The CLI will generate some code required to use your plugin, which includes the following:

- the [content-type schema](/cms/backend-customization/models#model-schema)
- and a basic [controller](/cms/backend-customization/controllers), [service](/cms/backend-customization/services), and [route](/cms/backend-customization/routes) for the content-type

You may want to create the whole structure of your content-types either entirely with the CLI generator or by directly creating and editing `schema.json` files. We recommend you first create a simple content-type with the CLI generator and then leverage the [Content-Type Builder](/cms/features/content-type-builder) in the admin panel to edit your content-type.

If your content-type is not visible in the admin panel, you might need to set the `content-manager.visible` and `content-type-builder.visible` parameters to `true` in the `pluginOptions` object of the content-type schema:


Making a plugin content-type visible in the admin panel:

The following highlighted lines in an example `schema.json` file show how to make a plugin content-type visible to the Content-Type Builder and Content-Manager:

```json title="/server/content-types/my-plugin-content-type/schema.json" {13-20} showLineNumbers
{
  "kind": "collectionType",
  "collectionName": "my_plugin_content_types",
  "info": {
    "singularName": "my-plugin-content-type",
    "pluralName": "my-plugin-content-types",
    "displayName": "My Plugin Content-Type"
  },
  "options": {
    "draftAndPublish": false,
    "comment": ""
  },
  "pluginOptions": {
    "content-manager": {
      "visible": true
    },
    "content-type-builder": {
      "visible": true
    }
  },
  "attributes": {
    "name": {
      "type": "string"
    }
  }
}

```



### Ensure plugin content-types are imported

The CLI generator might not have imported all the related content-type files for your plugin, so you might have to make the following adjustments after the `strapi generate content-type` CLI command has finished running:

1. In the `/server/index.js` file, import the content-types:

  ```js {7,22} showLineNumbers title="/server/index.js"
  'use strict';

  const register = require('./register');
  const bootstrap = require('./bootstrap');
  const destroy = require('./destroy');
  const config = require('./config');
  const contentTypes = require('./content-types');
  const controllers = require('./controllers');
  const routes = require('./routes');
  const middlewares = require('./middlewares');
  const policies = require('./policies');
  const services = require('./services');

  module.exports = {
    register,
    bootstrap,
    destroy,
    config,
    controllers,
    routes,
    services,
    contentTypes,
    policies,
    middlewares,
  };

  ```

2. In the `/server/content-types/index.js` file, import the content-type folder:

  ```js title="/server/content-types/index.js"
  'use strict';

  module.exports = {
    // In the line below, replace my-plugin-content-type
    // with the actual name and folder path of your content type
    "my-plugin-content-type": require('./my-plugin-content-type'),
  };
  ```

3. Ensure that the `/server/content-types/[your-content-type-name]` folder contains not only the `schema.json` file generated by the CLI, but also an `index.js` file that exports the content-type with the following code:

  ```js title="/server/content-types/my-plugin-content-type/index.js
  'use strict';

  const schema = require('./schema');

  module.exports = {
    schema,
  };
  ```

## Interact with data from the plugin

Once you have created a content-type for your plugin, you can create, read, update, and delete data.

A plugin can only interact with data from the `/server` folder. If you need to update data from the admin panel, please refer to the [passing data guide](/cms/plugins-development/guides/pass-data-from-server-to-admin).

To create, read, update, and delete data, you can use either the [Document Service API](/cms/api/document-service) or the [Query Engine API](/cms/api/query-engine). While it's recommended to use the Document Service API, especially if you need access to components or dynamic zones, the Query Engine API is useful if you need unrestricted access to the underlying database.

Use the `plugin::your-plugin-slug.the-plugin-content-type-name` syntax for content-type identifiers in Document Service and Query Engine API queries.

**Example:**

Here is how to find all the entries for the `my-plugin-content-type` collection type created for a plugin called `my-plugin`:

```js
// Using the Document Service API
let data = await strapi.documents('plugin::my-plugin.my-plugin-content-type').findMany();

// Using the Query Engine API
let data = await strapi.db.query('plugin::my-plugin.my-plugin-content-type').findMany();
````

You can access the database via the `strapi` object which can be found in `middlewares`, `policies`, `controllers`, `services`, as well as from the `register`, `boostrap`, `destroy` lifecycle functions.



# Plugin SDK reference
Source: //cms/plugins-development/plugin-sdk

# Plugin SDK reference

The Plugin SDK is set of commands provided by the package  orientated around developing plugins to use them as local plugins or to publish them on NPM and/or submit them to the Marketplace.

The present documentation lists the available Plugin SDK commands. The [associated guide](/cms/plugins-development/create-a-plugin) illustrates how to use these commands to create a plugin from scratch, link it to an existing project, and publish it.

## npx @strapi/sdk-plugin init

Create a new plugin at a given path.

```bash
npx @strapi/sdk-plugin init
```

| Arguments |  Type  | Description        | Default                   |
| --------- | :----: | ------------------ | ------------------------- |
| `path`    | string | Path to the plugin | `./src/plugins/my-plugin` |

| Option        | Type | Description                             | Default |
| ------------- | :--: | --------------------------------------- | ------- |
| `-d, --debug` |  -   | Enable debugging mode with verbose logs | false   |
| `--silent`    |  -   | Do not log anything                     | false   |

## strapi-plugin build

Bundle the Strapi plugin for publishing.

```bash
strapi-plugin build
```

| Option         |  Type  | Description                                                                                                       | Default |
| -------------- | :----: | ----------------------------------------------------------------------------------------------------------------- | ------- |
| `--force`      | string | Automatically answer "yes" to all prompts, including potentially destructive requests, and run non-interactively. | -       |
| `-d, --debug`  |   -    | Enable debugging mode with verbose logs                                                                           | false   |
| `--silent`     |   -    | Do not log anything                                                                                               | false   |
| `--minify`     |   -    | Minify the output                                                                                                 | false   |
| `--sourcemap`  |   -    | Produce sourcemaps                                                                                                | false   |

As of v6, the build configuration is automatically derived from your `package.json` exports field. No configuration file (such as `vite.config.ts` or `rollup.config.ts`) is needed.

## strapi-plugin watch:link

Recompiles the plugin automatically on changes and runs `yalc push --publish`.

For testing purposes, it is very convenient to link your plugin to an existing application to experiment with it in real condition. This command is made to help you streamline this process.

```bash
strapi-plugin watch:link
```

| Option        | Type | Description                             | Default |
| ------------- | :--: | --------------------------------------- | ------- |
| `-d, --debug` |  -   | Enable debugging mode with verbose logs | false   |
| `--silent`    |  -   | Do not log anything                     | false   |

## strapi-plugin watch

Watch the plugin source code for any change and rebuild it everytime. Useful when implementing your plugin and testing it in an application.

```bash
strapi-plugin watch
```

| Option        | Type | Description                             | Default |
| ------------- | :--: | --------------------------------------- | ------- |
| `-d, --debug` |  -   | Enable debugging mode with verbose logs | false   |
| `--silent`    |  -   | Do not log anything                     | false   |

## strapi-plugin verify

Verify the output of the plugin before publishing it.

```bash
strapi-plugin verify
```

| Option        | Type | Description                             | Default |
| ------------- | :--: | --------------------------------------- | ------- |
| `-d, --debug` |  -   | Enable debugging mode with verbose logs | false   |
| `--silent`    |  -   | Do not log anything                     | false   |



# Plugin structure
Source: //cms/plugins-development/plugin-structure

# Plugin structure

When [creating a plugin with Plugin SDK](/cms/plugins-development/create-a-plugin), Strapi generates the following boilerplate structure for you in the `/src/plugins/my-plugin` folder:

A Strapi plugin is divided into 2 parts, each living in a different folder and offering a different API:

| Plugin part | Description | Folder       | API |
|-------------|-------------|--------------|-----|
| Admin panel | Includes what will be visible in the [admin panel](/cms/intro) (components, navigation, settings, etc.) | `admin/` |[Admin Panel API](/cms/plugins-development/admin-panel-api)|
| Backend server | Includes what relates to the [backend server](/cms/backend-customization) (content-types, controllers, middlewares, etc.) |`server/` |[Server API](/cms/plugins-development/server-api)|



- **Server-only plugin**: You can create a plugin that will just use the server part to enhance the API of your application. For instance, this plugin could have its own visible or invisible content-types, controller actions, and routes that are useful for a specific use case. In such a scenario, you don't need your plugin to have an interface in the admin panel.

- **Admin panel plugin vs. application-specific customization**: You can create a plugin to inject some components into the admin panel. However, you can also achieve this by creating a `/src/admin/index.js` file and invoking the `bootstrap` lifecycle function to inject your components. In this case, deciding whether to create a plugin depends on whether you plan to reuse and distribute the code or if it's only useful for a unique Strapi application.



The next steps of your Strapi plugin development journey will require you to use any of the Strapi plugins APIs.

2 different types of resources help you understand how to use the plugin APIs:

- The reference documentation for the [Admin Panel API](/cms/plugins-development/admin-panel-api) and [Server API](/cms/plugins-development/server-api) give an overview of what is possible to do with a Strapi plugin.
- [Guides](/cms/plugins-development/developing-plugins#guides) cover some specific, use-case based examples.



# Plugins extension
Source: //cms/plugins-development/plugins-extension

# Plugins extension

Strapi comes with plugins that can be installed from the [Marketplace](/cms/plugins/installing-plugins-via-marketplace#installing-marketplace-plugins-and-providers) or as npm packages. You can also create your own plugins (see [plugins development](/cms/plugins-development/developing-plugins)) or extend the existing ones.

* Any plugin update could break this plugin's extensions.
* New versions of Strapi will be released with migration guides when required, but these guides never cover plugin extensions. Consider forking a plugin if extensive customizations are required.
* Currently, the admin panel part of a plugin can only be extended using , but please consider that doing so might break your plugin in future versions of Strapi.

Plugin extensions code is located in the `./src/extensions` folder (see [project structure](/cms/project-structure)). Some plugins automatically create files there, ready to be modified.

 
Example of extensions folder structure

```bash
/extensions
  /some-plugin-to-extend
    strapi-server.js|ts
    /content-types
      /some-content-type-to-extend
        model.json
      /another-content-type-to-extend
        model.json
  /another-plugin-to-extend
    strapi-server.js|ts
```


Plugins can be extended in 2 ways:

- [extending the plugin's content-types](#extending-a-plugins-content-types)
- [extending the plugin's interface](#extending-a-plugins-interface) (e.g. to add controllers, services, policies, middlewares and more)

## Extending a plugin's content-types

A plugin's Content-Types can be extended in 2 ways: using the programmatic interface within `strapi-server.js|ts` and by overriding the content-types schemas.

The final schema of the content-types depends on the following loading order:

1. the content-types of the original plugin,
2. the content-types overridden by the declarations in the [schema](/cms/backend-customization/models#model-schema) defined in `./src/extensions/plugin-name/content-types/content-type-name/schema.json`
3. the content-types declarations in the [`content-types` key exported from `strapi-server.js|ts`](/cms/plugins-development/server-api#content-types)
4. the content-types declarations in the [`register()` function](/cms/configurations/functions#register) of the Strapi application

To overwrite a plugin's [content-types](/cms/backend-customization/models):

1. _(optional)_ Create the `./src/extensions` folder at the root of the app, if the folder does not already exist.
2. Create a subfolder with the same name as the plugin to be extended.
3. Create a `content-types` subfolder.
4. Inside the `content-types` subfolder, create another subfolder with the same [singularName](/cms/backend-customization/models#model-information) as the content-type to overwrite.
5. Inside this `content-types/name-of-content-type` subfolder, define the new schema for the content-type in a `schema.json` file (see [schema](/cms/backend-customization/models#model-schema) documentation).
6. _(optional)_ Repeat steps 4 and 5 for each content-type to overwrite.

## Extending a plugin's interface

When a Strapi application is initializing, plugins, extensions and global lifecycle functions events happen in the following order:

1. Plugins are loaded and their interfaces are exposed.
2. Files in `./src/extensions` are loaded.
3. The `register()` and `bootstrap()` functions in `./src/index.js|ts` are called.

A plugin's interface can be extended at step 2 (i.e. within `./src/extensions`) or step 3 (i.e. inside `./src/index.js|ts`).

If your Strapi project is TypeScript-based, please ensure that the `index` file has a TypeScript extension (i.e., `src/index.ts`) otherwise it will not be compiled.

### Within the extensions folder

To extend a plugin's server interface using the `./src/extensions` folder:

1. _(optional)_ Create the `./src/extensions` folder at the root of the app, if the folder does not already exist.
2. Create a subfolder with the same name as the plugin to be extended.
3. Create a `strapi-server.js|ts` file to extend a plugin's back end using the [Server API](/cms/plugins-development/server-api).
4. Within this file, define and export a function. The function receives the `plugin` interface as an argument so it can be extended.


Example of backend extension

```js title="./src/extensions/some-plugin-to-extend/strapi-server.js|ts"

module.exports = (plugin) => {
  plugin.controllers.controllerA.find = (ctx) => {};

  plugin.policies[newPolicy] = (ctx) => {};

  plugin.routes['content-api'].routes.push({
    method: 'GET',
    path: '/route-path',
    handler: 'controller.action',
  });

  return plugin;
};
```


The `strapi-server.js|ts` file is also where you can override the image function, by replacing the Upload plugin's `generateFileName()` function so that it generates custom image names.


Example of custom file-naming logic

```js title="./src/extensions/upload/strapi-server.js|ts"

module.exports = (plugin) => {
  plugin.services.upload.image.generateFileName = (file) => {
    // Example: prefix a timestamp before the original name
    return `${Date.now()}_${file.hash}${file.ext}`;
  };

  return plugin;
};

```



### Within the register and bootstrap functions

To extend a plugin's interface within `./src/index.js|ts`, use the `bootstrap()` and `register()` [functions](/cms/configurations/functions) of the whole project, and access the interface programmatically with [getters](/cms/plugins-development/server-api#usage).


Example of extending a plugin's content-type within ./src/index.js|ts

```js title="./src/index.js|ts"

module.exports = {
  register({ strapi }) {
    const contentTypeName = strapi.contentType('plugin::my-plugin.content-type-name')  
    contentTypeName.attributes = {
      // Spread previous defined attributes
      ...contentTypeName.attributes,
      // Add new, or override attributes
      'toto': {
        type: 'string',
      }
    }
  },
  bootstrap({ strapi }) {},
};
```




# Server API for plugins
Source: //cms/plugins-development/server-api

# Server API for plugins

A Strapi plugin can interact with both the back end and the front end of a Strapi application. The Server API is about the back-end part, i.e. how the plugin interacts with the server part of a Strapi application.

For more information on how plugins can modify the front end part of Strapi, see [front end](/cms/plugins-development/admin-panel-api).

You have [created a Strapi plugin](/cms/plugins-development/create-a-plugin).

The Server API includes:

- an [entry file](#entry-file) which export the required interface,
- [lifecycle functions](#lifecycle-functions),
- a [configuration](#configuration) API,
- and the ability to [customize all elements of the back-end server](#backend-customization).

Once you have declared and exported the plugin interface, you will be able to [use the plugin interface](#usage).

The whole code for the server part of your plugin could live in the `/server/src/index.ts|js` file. However, it's recommended to split the code into different folders, just like the [structure](/cms/plugins-development/plugin-structure) created by the Plugin SDK.

## Entry file

The `/src/server/index.js` file at the root of the plugin folder exports the required interface, with the following parameters available:

| Parameter type         | Available parameters                                                                                                                                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lifecycle functions    |  [register](#register)[bootstrap](#bootstrap)[destroy](#destroy)                                                                                                           |
| Configuration          | [config](#configuration) object                                                                                                                                                                                |
| Backend customizations | [contentTypes](#content-types)[routes](#routes)[controllers](#controllers)[services](#services)[policies](#policies)[middlewares](#middlewares) |

## Lifecycle functions



### register()

This function is called to load the plugin, before the application is [bootstrapped](#bootstrap), in order to register [permissions](/cms/features/users-permissions), the server part of [custom fields](/cms/features/custom-fields#registering-a-custom-field-on-the-server), or database migrations.

**Type**: `Function`

**Example:**



### bootstrap()

The [bootstrap](/cms/configurations/functions#bootstrap) function is called right after the plugin has [registered](#register).

**Type**: `Function`

**Example:**



### destroy()

The [destroy](/cms/configurations/functions#destroy) lifecycle function is called to cleanup the plugin (close connections, remove listeners, etc.) when the Strapi instance is destroyed.

**Type**: `Function`

**Example:**



## Configuration

`config` stores the default plugin configuration. It loads and validates the configuration inputted from the user within the [`./config/plugins.js` configuration file](/cms/configurations/plugins).

**Type**: `Object`

| Parameter   | Type                                           | Description                                                                                                                                              |
| ----------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`   | Object, or Function that returns an Object | Default plugin configuration, merged with the user configuration                                                                                         |
| `validator` | Function                                       | Checks if the results of merging the default plugin configuration with the user configuration is validThrows errors when the resulting configuration is invalid |

**Example:**



Once defined, the configuration can be accessed:

- with `strapi.plugin('plugin-name').config('some-key')` for a specific configuration property,
- or with `strapi.config.get('plugin::plugin-name')` for the whole configuration object.

Run `yarn strapi console` or `npm run strapi console` to access the strapi object in a live console.

## Backend customization

All elements of the back-end server of Strapi can be customized through a plugin using the Server API.

To better understand this section, ensure you have read through the [back-end customization](/cms/backend-customization) documentation of a Strapi application.

### Content-types

An object with the [content-types](/cms/backend-customization/models) the plugin provides.

**Type**: `Object`

Content-Types keys in the `contentTypes` object should re-use the `singularName` defined in the [`info`](/cms/backend-customization/models#model-information) key of the schema.

**Example:**



### Routes

An array of [routes](/cms/backend-customization/routes) configuration.

**Type**: `Object[]`

**Examples:**










### Controllers

An object with the [controllers](/cms/backend-customization/controllers) the plugin provides.

**Type**: `Object`

**Example:**



### Services

An object with the [services](/cms/backend-customization/services) the plugin provides.

Services should be functions taking `strapi` as a parameter.

**Type**: `Object`

**Example:**



### Policies

An object with the [policies](/cms/backend-customization/policies) the plugin provides.

**Type**: `Object`

**Example:**



### Middlewares

An object with the [middlewares](/cms/configurations/middlewares) the plugin provides.

**Type**: `Object`

**Example:**



## Usage

Once a plugin is exported and loaded into Strapi, its features are accessible in the code through getters. The Strapi instance (`strapi`) exposes both top-level getters and global getters:

- top-level getters imply chaining functions(e.g., `strapi.plugin('the-plugin-name').controller('the-controller-name'`),
- global getters are syntactic sugar that allows direct access using a feature's uid(e.g., `strapi.controller('plugin::plugin-name.controller-name')`).

```js
// Access an API or a plugin controller using a top-level getter 
strapi.api['api-name'].controller('controller-name')
strapi.plugin('plugin-name').controller('controller-name')

// Access an API or a plugin controller using a global getter
strapi.controller('api::api-name.controller-name')
strapi.controller('plugin::plugin-name.controller-name')
```


 Top-level getter syntax examples

```js
strapi.plugin('plugin-name').config
strapi.plugin('plugin-name').routes
strapi.plugin('plugin-name').controller('controller-name')
strapi.plugin('plugin-name').service('service-name')
strapi.plugin('plugin-name').contentType('content-type-name')
strapi.plugin('plugin-name').policy('policy-name')
strapi.plugin('plugin-name').middleware('middleware-name')
```




 Global getter syntax examples

```js
strapi.controller('plugin::plugin-name.controller-name');
strapi.service('plugin::plugin-name.service-name');
strapi.contentType('plugin::plugin-name.content-type-name');
strapi.policy('plugin::plugin-name.policy-name');
strapi.middleware('plugin::plugin-name.middleware-name');
```



To interact with the content-types, use the [Document Service API](/cms/api/document-service).



# Documentation plugin
Source: //cms/plugins/documentation

# Documentation plugin

The Documentation plugin automates your API documentation creation. It basically generates a swagger file. It follows the 



The Documentation plugin is not actively maintained and may not work with Strapi 5.



Once the plugin is installed, starting Strapi generates the API documentation.

## Configuration

Most configuration options for the Documentation plugin are handled via your Strapi project's code. A few settings are available in the admin panel.

### Admin panel settings

The Documentation plugin affects multiple parts of the admin panel. The following table lists all the additional options and settings that are added to a Strapi application once the plugin has been installed:

| Section impacted    | Options and settings         |
|------------------|-------------------------------------------------------------|
| Documentation    | Addition of a new Documentation option in the main navigation  which shows a panel with buttons to  open and  regenerate the documentation.        |
| Settings     | Addition of a "Documentation plugin" setting section, which controls whether the documentation endpoint is private or not (see [restricting access](#restrict-access)). 👉 Path reminder:  *Settings > Documentation plugin*    Activation of role based access control for accessing, updating, deleting, and regenerating the documentation. Administrators can authorize different access levels to different types of users in the *Plugins* tab and the *Settings* tab (see [Users & Permissions documentation](/cms/features/users-permissions)).👉 Path reminder:  *Settings > Administration Panel > Roles* | 

#### Restricting access to your API documentation

By default, your API documentation will be accessible by anyone.

To restrict API documentation access, enable the **Restricted Access** option from the admin panel:

1. Navigate to  *Settings* in the main navigation of the admin panel.
2. Choose **Documentation**.
3. Toggle **Restricted Access** to `ON`.
4. Define a password in the `password` input.
5. Save the settings.

### Code-based configuration

To configure the Documentation plugin, create a `settings.json` file in the `src/extensions/documentation/config` folder. In this file, you can specify all your environment variables, licenses, external documentation links, and all the entries listed in the . 

The following is an example configuration:

```json title="src/extensions/documentation/config/settings.json"
{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0",
    "title": "DOCUMENTATION",
    "description": "",
    "termsOfService": "YOUR_TERMS_OF_SERVICE_URL",
    "contact": {
      "name": "TEAM",
      "email": "contact-email@something.io",
      "url": "mywebsite.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "x-strapi-config": {
    "plugins": ["upload", "users-permissions"],
    "path": "/documentation"
  },
  "servers": [
    {
      "url": "http://localhost:1337/api",
      "description": "Development server"
    }
  ],
  "externalDocs": {
    "description": "Find out more",
    "url": "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"
  },
  "security": [
    {
      "bearerAuth": []
    }
  ]
}
```

If you need to add a custom key, prefix it by `x-` (e.g., `x-strapi-something`).

#### Creating a new version of the documentation

To create a new version, change the `info.version` key in the `settings.json` file:

```json title="src/extensions/documentation/config/settings.json"
{
  "info": {
    "version": "2.0.0"
  }
}
```

This will automatically create a new version.

#### Defining which plugins need documentation generated

If you want plugins to be included in documentation generation, they should be included in the `plugins` array in the `x-strapi-config` object. By default, the array is initialized with `["upload", "users-permissions"]`:

```json title="src/extensions/documentation/config/settings.json"
{
  "x-strapi-config": {
    "plugins": ["upload", "users-permissions"]
  }
}
```

To add more plugins, such as your custom plugins, add their name to the array.

If you do not want plugins to be included in documentation generation, provide an empty array (i.e., `plugins: []`).

#### Overriding the generated documentation

The Documentation plugins comes with 3 methods to override the generated documentation: [`excludeFromGeneration`](#excluding-from-generation), [`registerOverride`](#register-override), and [`mutateDocumentation`](#mutate-documentation).

##### excludeFromGeneration()

To exclude certain APIs or plugins from being generated, use the `excludeFromGeneration` found on the documentation plugin’s `override` service in your application or plugin's [`register` lifecycle](/cms/plugins-development/admin-panel-api#register).

`excludeFromGeneration` gives more fine-grained control over what is generated.

For example, pluginA might create several new APIs while pluginB may only want to generate documentation for some of those APIs. In that case, pluginB could still benefit from the generated documentation it does need by excluding only what it does not need.

*****

| Parameter | Type                       | Description                                              |
| --------- | -------------------------- | -------------------------------------------------------- |
| `api`       | String or Array of Strings | The name of the API/plugin, or list of names, to exclude |

```js title="Application or plugin register lifecycle"

module.exports = {
  register({ strapi }) {
    strapi
      .plugin("documentation")
      .service("override")
      .excludeFromGeneration("restaurant");
    // or several
    strapi
      .plugin("documentation")
      .service("override")
      .excludeFromGeneration(["address", "upload"]);
  }
}
```

##### registerOverride()

If the Documentation plugin fails to generate what you expect, it is possible to replace what has been generated.

The Documentation plugin exposes an API that allows you to replace what was generated for the following OpenAPI root level keys: `paths`, `tags`, `components` .

To provide an override, use the `registerOverride` function found on the Documentation plugin’s `override` service in your application or plugin's [`register` lifecycle](/cms/plugins-development/admin-panel-api#register).

| Parameter                     | Type                      | Description                                                                                                   |
| ----------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `override`                     | Object                    | OpenAPI object including any of the following keys paths, tags, components. Accepts JavaScript, JSON, or yaml |
| `options`                      | Object                    | Accepts `pluginOrigin` and `excludeFromGeneration`                                                               |
| `options.pluginOrigin`          | String                    | The plugin that is registering the override                                                                   |
| `options.excludeFromGeneration` | String or Array of String | The name of the API/plugin, or list of names, to exclude                                                      |

Plugin developers providing an override should always specify the `pluginOrigin` options key. Otherwise the override will run regardless of the user’s configuration.

The Documentation plugin will use the registered overrides to replace the value of common keys on the generated documentation with what the override provides. If no common keys are found, the plugin will add new keys to the generated documentation.

If the override completely replaces what the documentation generates, you can specify that generation is no longer necessary by providing the names of the APIs or plugins to exclude in the options key array `excludeFromGeneration`.

If the override should only be applied to a specific version, the override must include a value for `info.version`. Otherwise, the override will run on all documentation versions.

```js title="Application or plugin register lifecycle"

module.exports = {
  register({ strapi }) {
    if (strapi.plugin('documentation')) {
      const override = {
        // Only run this override for version 1.0.0
        info: { version: '1.0.0' },
        paths: {
          '/answer-to-everything': {
            get: {
              responses: { 200: { description: "*" }}
            }
          }
        }
      }

      strapi
        .plugin('documentation')
        .service('override')
        .registerOverride(override, {
          // Specify the origin in case the user does not want this plugin documented
          pluginOrigin: 'upload',
          // The override provides everything don't generate anything
          excludeFromGeneration: ['upload'],
        });
    }
  },
}
```

The overrides system is provided to try and simplify amending the generated documentation. It is the only way a plugin can add or modify the generated documentation.

##### mutateDocumentation()

The Documentation plugin’s configuration also accepts a `mutateDocumentation` function on `info['x-strapi-config']`. This function receives a draft state of the generated documentation that be can be mutated. It should only be applied from an application and has the final say in the OpenAPI schema.

| Parameter                   | Type   | Description                                                            |
| --------------------------- | ------ | ---------------------------------------------------------------------- |
| `generatedDocumentationDraft` | Object | The generated documentation with applied overrides as a mutable object |

```js title="config/plugins.js"

module.exports = {
  documentation: {
    config: {
      "x-strapi-config": {
        mutateDocumentation: (generatedDocumentationDraft) => {
          generatedDocumentationDraft.paths[
            "/answer-to-everything" // must be an existing path
          ].get.responses["200"].description = "*";
        },
      },
    },
  },
};
```

## Usage

The Documentation plugin visualizes your API using . To access the UI, select  in the main navigation of the admin panel. Then click **Open documentation** to open the Swagger UI. Using the Swagger UI you can view all of the endpoints available on your API and trigger API calls.

Once the plugin is installed, the plugin user interface can be accessed at the following URL:
`<server-url>:<server-port>/documentation/<documentation-version>`
(e.g., ).

### Regenerating documentation

There are 2 ways to update the documentation after making changes to your API:

- restart your application to regenerate the version of the documentation specified in the Documentation plugin's configuration,
- or go to the Documentation plugin page and click the **regenerate** button for the documentation version you want to regenerate.

### Authenticating requests

Strapi is secured by default, which means that most of your endpoints require the user to be authorized. If the CRUD action has not been set to Public in the [Users & Permissions feature](/cms/features/users-permissions#roles) then you must provide your JSON web token (JWT). To do this, while viewing the API Documentation, click the **Authorize** button and paste your JWT in the _bearerAuth_ _value_ field.



# GraphQL plugin
Source: //cms/plugins/graphql

# GraphQL plugin

By default Strapi create [REST endpoints](/cms/api/rest#endpoints) for each of your content-types. The GraphQL plugin adds a GraphQL endpoint to fetch and mutate your content. With the GraphQL plugin installed, you can use the Apollo Server-based GraphQL Sandbox to interactively build your queries and mutations and read documentation tailored to your content types.





Once installed, the GraphQL sandbox is accessible at the `/graphql` URL and can be used to interactively build your queries and mutations and read documentation tailored to your content-types.

Once the plugin is installed, the **GraphQL Sandbox** is accessible at the `/graphql` route (e.g., 



#### Dynamically enable Apollo Sandbox

You can use a function to dynamically enable Apollo Sandbox depending on the environment:



#### CORS exceptions for Landing Page

If the landing page is enabled in production environments (which is not recommended), CORS headers for the Apollo Server landing page must be added manually.

To add them globally, you can merge the following into your middleware configuration:

```javascript title="/config/middlewares"
{
  name: "strapi::security",
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "connect-src": ["'self'", "https:", "apollo-server-landing-page.cdn.apollographql.com"],
        "img-src": ["'self'", "data:", "blob:", "apollo-server-landing-page.cdn.apollographql.com"],
        "script-src": ["'self'", "'unsafe-inline'", "apollo-server-landing-page.cdn.apollographql.com"],
        "style-src": ["'self'", "'unsafe-inline'", "apollo-server-landing-page.cdn.apollographql.com"],
        "frame-src": ["sandbox.embed.apollographql.com"]
      }
    }
  }
}
```

To add these exceptions only for the `/graphql` path (recommended), you can create a new middleware to handle it. For example:



#### Shadow CRUD

To simplify and automate the build of the GraphQL schema, we introduced the Shadow CRUD feature. It automatically generates the type definitions, queries, mutations and resolvers based on your models.

**Example:**

If you've generated an API called `Document` using [the interactive `strapi generate` CLI](/cms/cli#strapi-generate) or the administration panel, your model looks like this:

```json title="/src/api/[api-name]/content-types/document/schema.json"

{
  "kind": "collectionType",
  "collectionName": "documents",
  "info": {
    "singularName": "document",
    "pluralName": "documents",
    "displayName": "document",
    "name": "document"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "richtext"
    },
    "locked": {
      "type": "boolean"
    }
  }
}
```

 
Generated GraphQL type and queries

```graphql
# Document's Type definition
input DocumentFiltersInput {
  name: StringFilterInput
  description: StringFilterInput
  locked: BooleanFilterInput
  createdAt: DateTimeFilterInput
  updatedAt: DateTimeFilterInput
  publishedAt: DateTimeFilterInput
  and: [DocumentFiltersInput]
  or: [DocumentFiltersInput]
  not: DocumentFiltersInput
}

input DocumentInput {
  name: String
  description: String
  locked: Boolean
  createdAt: DateTime
  updatedAt: DateTime
  publishedAt: DateTime
}

type Document {
  name: String
  description: String
  locked: Boolean
  createdAt: DateTime
  updatedAt: DateTime
  publishedAt: DateTime
}

type DocumentEntity {
  id: ID
  attributes: Document
}

type DocumentEntityResponse {
  data: DocumentEntity
}

type DocumentEntityResponseCollection {
  data: [DocumentEntity!]!
  meta: ResponseCollectionMeta!
}

type DocumentRelationResponseCollection {
  data: [DocumentEntity!]!
}

# Queries to retrieve one or multiple restaurants.
type Query  {
  document(id: ID): DocumentEntityResponse
  documents(
    filters: DocumentFiltersInput
    pagination: PaginationArg = {}
    sort: [String] = []
    publicationState: PublicationState = LIVE
):DocumentEntityResponseCollection
}

# Mutations to create, update or delete a restaurant.
type Mutation {
  createDocument(data: DocumentInput!): DocumentEntityResponse
  updateDocument(id: ID!, data: DocumentInput!): DocumentEntityResponse
  deleteDocument(id: ID!): DocumentEntityResponse
}
```



#### Customization

Strapi provides a programmatic API to customize GraphQL, which allows:

* disabling some operations for the [Shadow CRUD](#shadow-crud)
* [using getters](#using-getters) to return information about allowed operations
* registering and using an `extension` object to [extend the existing schema](#extending-the-schema) (e.g. extend types or define custom resolvers, policies and middlewares)

 
Example of GraphQL customizations





##### Disabling operations in the Shadow CRUD

The `extension` service provided with the GraphQL plugin exposes functions that can be used to disable operations on Content-Types:

| Content-type function | Description                                    | Argument type    | Possible argument values |
| --------------------  | ---------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `disable()`           | Fully disable the Content-Type                 | -                | -                                                                                                          |
| `disableQueries()`    | Only disable queries for the Content-Type      | -                | -                                                                                                          |
| `disableMutations()`  | Only disable mutations for the Content-Type    | -                | -                                                                                                          |
| `disableAction()`     | Disable a specific action for the Content-Type | String           | One value from the list:`create``find``findOne``update``delete`   |
| `disableActions()`    | Disable specific actions for the Content-Type  | Array of Strings | Multiple values from the list: `create``find``findOne``update``delete`  |

Actions can also be disabled at the field level, with the following functions:

| Field function     | Description                      |
| ------------------ | -------------------------------- |
| `disable()`        | Fully disable the field          |
| `disableOutput()`  | Disable the output on a field    |
| `disableInput()`   | Disable the input on a field     |
| `disableFilters()` | Disable filters input on a field |

**Examples:**

```js
// Disable the 'find' operation on the 'restaurant' content-type in the 'restaurant' API
strapi
  .plugin('graphql')
  .service('extension')
  .shadowCRUD('api::restaurant.restaurant')
  .disableAction('find')

// Disable the 'name' field on the 'document' content-type in the 'document' API
strapi
  .plugin('graphql')
  .service('extension')
  .shadowCRUD('api::document.document')
  .field('name')
  .disable()
```

##### Using getters

The following getters can be used to retrieve information about operations allowed on content-types:

| Content-type getter        | Description                                                       | Argument type | Possible argument values                                                                                              |
| -------------------------- | ----------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `isEnabled()`              | Returns whether a content-type is enabled                         | -             | -                                                                                                                     |
| `isDisabled()`             | Returns whether a content-type is disabled                        | -             | -                                                                                                                     |
| `areQueriesEnabled()`      | Returns whether queries are enabled on a content-type             | -             | -                                                                                                                     |
| `areQueriesDisabled()`     | Returns whether queries are disabled on a content-type            | -             | -                                                                                                                     |
| `areMutationsEnabled()`    | Returns whether mutations are enabled on a content-type           | -             | -                                                                                                                     |
| `areMutationsDisabled()`   | Returns whether mutations are disabled on a content-type          | -             | -                                                                                                                     |
| `isActionEnabled(action)`  | Returns whether the passed `action` is enabled on a content-type  | String        | One value from the list:`create``find``findOne``update``delete` |
| `isActionDisabled(action)` | Returns whether the passed `action` is disabled on a content-type | String        | One value from the list:`create``find``findOne``update``delete` |

The following getters can be used to retrieve information about operations allowed on fields:

| Field getter          | Description                                   |
| --------------------- | --------------------------------------------- |
| `isEnabled()`         | Returns whether a field is enabled            |
| `isDisabled()`        | Returns whether a field is disabled           |
| `hasInputEnabled()`   | Returns whether a field has input enabled     |
| `hasOutputEnabled()`  | Returns whether a field has output enabled    |
| `hasFiltersEnabled()` | Returns whether a field has filtering enabled |

###### Extending the schema

The schema generated by the Content API can be extended by registering an extension.

This extension, defined either as an object or a function returning an object, will be used by the `use()` function exposed by the `extension` [service](/cms/backend-customization/services) provided with the GraphQL plugin.

The object describing the extension accepts the following parameters:

| Parameter         | Type   | Description                                                                                  |
| ----------------- | ------ | -------------------------------------------------------------------------------------------- |
| `types`           | Array  | Allows extending the schema types using 





###### Custom configuration for resolvers

A resolver is a GraphQL query or mutation handler (i.e. a function, or a collection of functions, that generate(s) a response for a GraphQL query or mutation). Each field has a default resolver.

When [extending the GraphQL schema](#extending-the-schema), the `resolversConfig` key can be used to define a custom configuration for a resolver, which can include:

* [authorization configuration](#authorization-configuration) with the `auth` key
* [policies with the `policies`](#policies) key
* and [middlewares with the `middlewares`](#middlewares) key

The [advanced queries](/cms/api/graphql/advanced-queries) guide might contain additional information suitable for your use case, including multi-level queries and custom resolvers examples.

###### Authorization configuration

By default, the authorization of a GraphQL request is handled by the registered authorization strategy that can be either [API token](/cms/features/api-tokens) or through the [Users & Permissions plugin](#usage-with-the-users--permissions-plugin). The Users & Permissions plugin offers a more granular control.


 Authorization with the Users & Permissions plugin

With the Users & Permissions plugin, a GraphQL request is allowed if the appropriate permissions are given.

For instance, if a 'Category' content-type exists and is queried through GraphQL with the `Query.categories` handler, the request is allowed if the appropriate `find` permission for the 'Categories' content-type is given.

To query a single category, which is done with the `Query.category` handler, the request is allowed if the the `findOne` permission is given.

Please refer to the user guide on how to [define permissions with the Users & Permissions plugin](/cms/features/rbac#editing-a-role).


To change how the authorization is configured, use the resolver configuration defined at `resolversConfig.[MyResolverName]`. The authorization can be configured:

* either with `auth: false` to fully bypass the authorization system and allow all requests,
* or with a `scope` attribute that accepts an array of strings to define the permissions required to authorize the request.


 Examples of authorization configuration




###### Policies

[Policies](/cms/backend-customization/policies) can be applied to a GraphQL resolver through the `resolversConfig.[MyResolverName].policies` key.

The `policies` key is an array accepting a list of policies, each item in this list being either a reference to an already registered policy or an implementation that is passed directly (see [policies configuration documentation](/cms/backend-customization/routes#policies)).

Policies directly implemented in `resolversConfig` are functions that take a `context` object and the `strapi` instance as arguments.
The `context` object gives access to:

* the `parent`, `args`, `context` and `info` arguments of the GraphQL resolver,
* Koa's 





The [advanced policies](/cms/api/graphql/advanced-policies) guide might contain additional information suitable for your use case.

###### Middlewares

[Middlewares](/cms/backend-customization/middlewares) can be applied to a GraphQL resolver through the `resolversConfig.[MyResolverName].middlewares` key. The only difference between the GraphQL and REST implementations is that the `config` key becomes `options`.  

The `middlewares` key is an array accepting a list of middlewares, each item in this list being either a reference to an already registered middleware or an implementation that is passed directly (see [middlewares configuration documentation](/cms/backend-customization/routes#middlewares)).

Middlewares directly implemented in `resolversConfig` can take the GraphQL resolver's 





##### Security

GraphQL is a query language allowing users to use a broader panel of inputs than traditional REST APIs. GraphQL APIs are inherently prone to security risks, such as credential leakage and denial of service attacks, that can be reduced by taking appropriate precautions.

### Disable introspection and Sandbox in production

In production environments, disabling the GraphQL Sandbox and the introspection query is strongly recommended.
If you haven't edited the [configuration file](#available-options), it is already disabled in production by default.

###### Limit max depth and complexity

A malicious user could send a query with a very high depth, which could overload your server. Use the `depthLimit` [configuration parameter](/cms/plugins/graphql#code-based-configuration) to limit the maximum number of nested fields that can be queried in a single request. By default, `depthLimit` is set to 10 but can be set to a higher value during testing and development.

To increase GraphQL security even further, 3rd-party tools can be used. See the guide about 

You should see a new user is created in the `Users` collection type in your Strapi admin panel.

#### Authentication

To perform authorized requests, you must first get a JWT:

Then on each request, send along an `Authorization` header in the form of `{ "Authorization": "Bearer YOUR_JWT_GOES_HERE" }`. This can be set in the HTTP Headers section of your GraphQL Sandbox.

#### Usage with API tokens

To use API tokens for authentication, pass the token in the `Authorization` header using the format `Bearer your-api-token`.

Using API tokens in the the GraphQL Sandbox requires adding the authorization header with your token in the `HTTP HEADERS` tab:

```http
{
  "Authorization" : "Bearer



# Installing Plugins via the Marketplace
Source: //cms/plugins/installing-plugins-via-marketplace

# Using the Marketplace

Strapi comes with built-in plugins such as [Documentation](/cms/plugins/documentation), [GraphQL](/cms/plugins/graphql), and [Sentry](/cms/plugins/sentry). The Marketplace is where users can find additional plugins to customize Strapi applications, and additional providers to extend plugins. The Marketplace is located in the admin panel, indicated by  _Marketplace_. In the Marketplace, users can browse or search for plugins and providers, link to detailed descriptions for each, and submit new plugins and providers.

:::note strapi In-app Marketplace vs. Market website
The Marketplace in the admin panel displays all existing plugins, regardless of the version of Strapi they are for. All plugins can also be discoverable through the  website.

Keep in mind however that v4 and v5 plugins are not cross-compatible, but that providers are compatible both with v4 and v5 plugins.
:::

The Plugins and Providers tabs display each plugin/provider on individual cards containing:

- their name, sometimes followed by either of the following badges:
  - <img alt="maintained by Strapi icon" src="/img/strapi-logo.png" width="14px" style={{position: "relative", bottom:"2px", marginRight:"2px"}} /> to indicate it is made by Strapi,
  -  to indicate it was verified by Strapi.
- the number of times the plugin/provider was starred on GitHub and downloaded
- the description
- a **More**  button to be redirected to the Market website for additional information, including about the version of Strapi the plugin is for, and implementation instructions

In the top right corner of the Marketplace, the **Submit plugin** button redirects to the Strapi Market where it is possible to submit your own plugin and provider.

:::tip Tips

- The search bar displays incremental search results based on the plugin/provider name and description.
- Use the "Sort by" button or set filters to find plugins more easily.

:::

## Installing Marketplace plugins and providers

To install a new plugin or provider via the Marketplace:

1. Go to the  *Marketplace*.
2. Choose the **Plugins** tab to browse available plugins or the **Providers** tab to browse available providers.
3. Choose an available plugin/provider and click on the **More**  button.
4. Once redirected to the Strapi Market website, follow the plugin/provider-specific implementation instructions.

:::strapi Developing Strapi plugins
Can't find a plugin that suits your use case? Feel free to [create your own](/cms/plugins-development/developing-plugins)!
:::



# Sentry plugin
Source: //cms/plugins/sentry

# Sentry plugin

This plugin enables you to track errors in your Strapi application using Sentry.

</IdentityCard>

By using the Sentry plugin you can:

* Initialize a Sentry instance upon startup of a Strapi application
* Send Strapi application errors as events to Sentry
* Include additional metadata in Sentry events to assist in debugging
* Expose a global Sentry service usable by the Strapi server

## Installation

Install the Sentry plugin by adding the dependency to your Strapi application as follows:

</Tabs>

## Configuration

Create or edit your `/config/plugins` file to configure the Sentry plugin. The following properties are available:

| Property | Type | Default Value | Description |
| -------- | ---- | ------------- |------------ |
| `dsn` | string | `null` | Your Sentry 

</Tabs>

### Disabling for non-production environments

If the `dsn` property is set to a nil value (`null` or `undefined`) while `sentry.enabled` is true, the Sentry plugin will be available to use in the running Strapi instance, but the service will not actually send errors to Sentry. That allows you to write code that runs on every environment without additional checks, but only send errors to Sentry in production.

When you start Strapi with a nil `dsn` config property, the plugin will print the following warning:<br/>`info: @strapi/plugin-sentry is disabled because no Sentry DSN was provided`

You can make use of that by using the [`env` utility](/cms/configurations/guides/access-cast-environment-variables) to set the `dsn` configuration property depending on the environment.

</Tabs>

### Disabling the plugin completely

Like every other Strapi plugin, you can also disable this plugin in the plugins configuration file. This will cause `strapi.plugins('sentry')` to return `undefined`:

</Tabs>

## Usage

After installing and configuring the plugin, you can access a Sentry service in your Strapi application as follows:

```js
const sentryService = strapi.plugin('sentry').service('sentry');
```

This service exposes the following methods:

| Method | Description | Parameters |
| ------ | ----------- | ---------- |
| `sendError()` | Manually send errors to Sentry. | <ul><li><code>error</code>: The error to be sent.</li><li><code>configureScope</code>: Optional. Enables you to customize the error event.</li></ul> See the official  for more details. |
| `getInstance()` | Used for direct access to the Sentry instance. | - |

The `sendError()` method can be used as follows:

```js
try {
  // Your code here
} catch (error) {
  // Either send a simple error
  strapi
    .plugin('sentry')
    .service('sentry')
    .sendError(error);

  // Or send an error with a customized Sentry scope
  strapi
    .plugin('sentry')
    .service('sentry')
    .sendError(error, (scope, sentryInstance) => {
      // Customize the scope here
      scope.setTag('my_custom_tag', 'Tag value');
    });
  throw error;
}
```

The `getInstance()` method is accessible as follows:

```js
const sentryInstance = strapi
  .plugin('sentry')
  .service('sentry')
  .getInstance();
```



# Project structure
Source: //cms/project-structure

# Project structure

The structure of a Strapi project depends on whether the project was created with [TypeScript](/cms/typescript) (which is the default if you used the `--quickstart` option while creating the project) or with vanilla JavaScript, and looks like the following:



# Quick Start Guide - Strapi Developer Docs
Source: //cms/quick-start

# Quick Start Guide

Strapi offers a lot of flexibility. Whether you want to go fast and quickly see the final result, or would rather dive deeper into the product, we got you covered. For this tutorial, we'll go for the DIY approach and build a project and content structure from scratch, then deploy your project to Strapi Cloud to add data from there.

*Estimated completion time: 5-10 minutes*

:::strapi Hosted demo and LaunchPad
Strapi offers a [hosted demo](https://strapi.io/demo) so you can quickly try its Content Manager and learn how to edit content. In this hosted demo, Strapi runs in production mode, so the Content-Type Builder is [disabled by design](/cms/faq#why-cant-i-create-or-update-content-types-in-productionstaging).

If you also want to try the Content-Type Builder and learn how to build a content structure, install the [LaunchPad](https://github.com/strapi/launchpad) application locally.
:::

:::prerequisites

2. The terminal will prompt you to log in or sign up. Once you do, a 30-day trial of the 

    </Tabs>

3. Answer questions in the terminal, giving your project a name (you can press Enter to keep the default name), choosing the recommended NodeJS version, and selecting the region closer to your current place:

    ![Strapi Cloud terminal questions and answers](/img/assets/quick-start-guide/qsg-strapi-cloud-terminal-questions.png)

Within a few moments, your local project will be hosted on Strapi Cloud. 🚀 

Once it's done, the terminal will provide you a clickable link that starts with `https://cloud.strapi.io/projects`. Click on the link, or copy and paste it in your browser address bar, to visit the page.

You will see the Strapi Cloud project we've just created, `my-strapi-project`, visible in the Strapi Cloud dashboard. Click the **Visit app** button in the top right corner to access your deployed Strapi project.

:::callout  Congratulations!
Now your project is hosted on Strapi Cloud and accessible online. You can learn more about Strapi Cloud by reading [its dedicated documentation](/cloud/intro) or proceed to part D to log in into your online Strapi project and add your first data from there.
:::

:::tip
Feel free to play with the Content-Type Builder even further and add more fields to your content-types or create new content-types. Anytime you make such changes, deploy them again on Strapi Cloud, by running the appropriate `deploy` command, and see your hosted project updated within a few minutes. Magical, isn't it? 🪄
:::

##  Part D: Add content to your Strapi Cloud project with the Content Manager

Now that we have created a basic content structure with 2 collection types, "Restaurant" and "Category", and deployed your project to Strapi Cloud, let's use the Cloud to actually add content by creating new entries.

<details>
<summary>Step 1: Log in to the admin panel of your new Strapi Cloud project</summary>

### Step 1: Log in to the admin panel of your new Strapi Cloud project

Now that your Strapi Cloud project is created, let's log in into the project:

1. From your , click the `my-strapi-project` project.
3. Click the **Visit app** button.
4. In the new page that opens, complete the form to create the first administrator user of this Strapi Cloud project.

Logged in into our first Strapi Cloud project, we will now add data from there.

<details>
<summary> Additional information and tips about users and Strapi Cloud projects:</summary>

:::note Note: Local users and Strapi Cloud users are different
The databases for your Strapi Cloud project and your local project are different. This means that data is not automatically transferred from your local project to Strapi Cloud. This includes users that you previously created locally. That's why you are invited to create a new administrator account when logging in to your Strapi Cloud project for the first time.
:::

:::tip Tip: Directly accessing the admin panel of your Strapi Cloud project
Any project hosted on Strapi Cloud is accessible from its own URL, something like `https://my-strapi-project-name.strapiapp.com`. To access the admin panel of your online project, simply add `/admin` to the URL, for instance as in `https://my-strapi-project-name.strapiapp.com/admin`. URLs can be found in your Strapi Cloud dashboard and you can also directly access your Strapi Cloud projects from there by clicking on the name of your project then on the **Visit app** button.
:::

</details>

</details>

<details>
<summary>Step 2: Create an entry for the "Restaurant" collection type</summary>

### Step 2: Create an entry for the "Restaurant" collection type

1. Go to  _Content Manager > Collection types - Restaurant_ in the navigation.
2. Click on **Create new entry**.
3. Type the name of your favorite local restaurant in the _Name_ field. Let's say it's `Biscotte Restaurant`.
4. In the _Description_ field, write a few words about it. If you're lacking some inspiration, you can use `Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.`
5. Click **Save**.

The restaurant is now listed in the _Collection types - Restaurant_ view of the  _Content Manager_.

</details>

<details>
<summary>Step 3: Add Categories</summary>

#### Step 3: Add Categories

Let's go to  _Content Manager > Collection types - Category_ and create 2 categories:

1. Click on **Create new entry**.
2. Type `French Food` in the _Name_ field.
3. Click **Save**.
4. Go back to _Collection types - Category_, then click again on **Create new entry**.  
5. Type `Brunch` in the _Name_ field, then click **Save**.

The "French Food" and "Brunch" categories are now listed in the _Collection types - Category_ view of the  _Content Manager_.

Now, we will add a category to a restaurant:

1. Go to  _Content Manager > Collection types - Restaurant_ in the navigation, and click on "Biscotte Restaurant".
2. In the **Categories** drop-down list at the bottom of the page, select "French Food". Scroll back to the top of the page and click **Save**.

</details>

<details>
<summary>Step 4: Set Roles & Permissions</summary>

### Step 4: Set Roles & Permissions

We have just added a restaurant and 2 categories. We now have enough content to consume (pun intended). But first, we need to make sure that the content is publicly accessible through the API:

1. Click on _ Settings_ at the bottom of the main navigation.
2. Under _Users & Permissions Plugin_, choose _Roles_.
3. Click the **Public** role.
4. Scroll down under _Permissions_.
5. In the _Permissions_ tab, find _Restaurant_ and click on it.
6. Click the checkboxes next to **find** and **findOne**.
7. Repeat with _Category_: click the checkboxes next to **find** and **findOne**.
8. Finally, click **Save**.

</details>

<details>
<summary>Step 5: Publish the content</summary>

### Step 5: Publish the content

By default, any content you create is saved as a draft. Let's publish our categories and restaurant.

First, navigate to  _Content Manager > Collection types - Category_. From there:

1. Click the "Brunch" entry.
2. On the next screen, click **Publish**.
3. In the _Confirmation_ window, click **Yes, publish**.  

Then, go back to the Categories list and repeat for the "French Food" category.

Finally, to publish your favorite restaurant, go to  _Content Manager > Collection types - Restaurant_, click the "Biscotte Restaurant" entry, and **Publish** it.

</details>

<details>
<summary>Step 6: Use the API</summary>

### Step 6: Use the API

OK dear gourmet, we have just finished creating our content and making it accessible through the API. You can give yourself a pat on the back — but you have yet to see the final result of your hard work.

There you are: the list of restaurants should be accessible by visting the `/api/restaurants` path of your Strapi Cloud project URL (e.g., `https://beautiful-first-strapi-project.strapiapp.com/api/restaurants`).

Try it now! The result should be similar to the example response below 👇.

<details>
<summary>Click me to view an example of API response:</summary>

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "wf7m1n3g8g22yr5k50hsryhk",
      "Name": "Biscotte Restaurant",
      "Description": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers."
            }
          ]
        }
      ],
      "createdAt": "2024-09-10T12:49:32.350Z",
      "updatedAt": "2024-09-10T13:14:18.275Z",
      "publishedAt": "2024-09-10T13:14:18.280Z",
      "locale": null
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

</details>

</details>

:::callout  Congratulations!
Now your content is created, published, and you have permissions to request it through the API.
Keep on creating amazing content!
:::

:::tip Tip: Transfer data between your local and Strapi Cloud projects
The databases for your Strapi Cloud project and your local project are different. This means that data is not automatically synchronized between your Strapi Cloud and local projects. You can use the [data management system](/cms/features/data-management) to transfer data between projects.
:::

##  What to do next?

Now that you know the basics of creating and publishing content with Strapi, we encourage you to explore and dig deeper into some Strapi features:

 learn how to use Strapi's [REST](/cms/api/rest) API to query the content,<br/>
 learn more about Strapi features by browsing the  **Features** category,<br/>
 learn more about Strapi Cloud projects by reading the [Cloud Documentation](/cloud/intro),<br/>
 and [customize your Strapi back end](/cms/backend-customization) and [admin panel](/cms/admin-panel-customization) for advanced use cases.<br/>



# Templates
Source: //cms/templates

# Templates

Templates in Strapi 5 are standalone, pre-made Strapi applications designed for specific use cases.

Strapi 5 templates are folders that include all files and folders that you would find in a typical Strapi application (see [project structure](/cms/project-structure)).

## Using a template

To create a new Strapi project based on a template, run the following command:

</Tabs>

In addition to the mandatory `--template` parameter, you can pass the optional `--template-path` and `--template-branch` options to more precisely define the template to use.

The following table lists all the possible ways to define which template to use:

| Syntax | Description |
|--------|-------------|
| `--template website` | Using one of the  calling it by its (folder) name. |
| `--template strapi/strapi` | Using the template's GitHub repository shorthand.<br/>This will use the default repository branch. |
| `--template strapi/strapi/some/sub/path` | Using the template's GitHub repository shorthand and specifying a subpath.<br/>This will use the default repository branch. |
| `--template strapi/strapi`<br/>`--template-branch=xxx`<br/>`--template-path=some/sub/path` | The most verbose way, explicitly defining a template branch and a subpath. |
| `--template https://github.com/owner/some-template-repo` | Using a full repository URL.<br/>This will use the default repository branch. |
| `--template https://github.com/owner/some-template-repo --template-branch=xxx --template-path=sub/path` | Using a full repository URL, and specifying both the branch and the subpath for the template. |
| `--template https://github.com/strapi/strapi/tree/branch/sub/path` | Using a repository, branch, and subpath directly.<br/><br/>⚠️ _Warning: This won't work with branch names that include a `/`. In such cases, it's best to explicitly define `--template-branch` and `--template-path`._ |

## Creating a template

Creating a Strapi 5 template is as simple as creating a Strapi application. Create the application (see [CLI installation](/cms/installation/cli)) and the generated folder containing your Strapi 5 application can serve as a template. You can then pass it to the `--template` flag when creating a new Strapi 5 application to use it as a template.

An example of what a template could look like is the .



# Testing
Source: //cms/testing

# Unit and integration testing guide

The present guide provides a hands-on approach to configuring 

    </Tabs>

    * `Jest` provides the test runner and assertion utilities.
    * `Supertest` allows you to test all the `api` routes as they were instances of  utilities to recreate just the parts of the Strapi object and any request context that your code relies on.

### Controller example

Create a test file such as `./tests/todo-controller.test.js` that instantiates your controller with a mocked Strapi object and verifies every call the controller performs:

```js title="./tests/todo-controller.test.js"
const todoController = require('./todo-controller');

describe('Todo controller', () => {
  let strapi;

  beforeEach(() => {
    strapi = {
      plugin: jest.fn().mockReturnValue({
        service: jest.fn().mockReturnValue({
          create: jest.fn().mockReturnValue({
            data: {
              name: 'test',
              status: false,
            },
          }),
          complete: jest.fn().mockReturnValue({
            data: {
              id: 1,
              status: true,
            },
          }),
        }),
      }),
    };
  });

  it('creates a todo item', async () => {
    const ctx = {
      request: {
        body: {
          name: 'test',
        },
      },
      body: null,
    };

    await todoController({ strapi }).index(ctx);

    expect(ctx.body).toBe('created');
    expect(strapi.plugin('todo').service('create').create).toHaveBeenCalledTimes(1);
  });

  it('completes a todo item', async () => {
    const ctx = {
      request: {
        body: {
          id: 1,
        },
      },
      body: null,
    };

    await todoController({ strapi }).complete(ctx);

    expect(ctx.body).toBe('todo completed');
    expect(strapi.plugin('todo').service('complete').complete).toHaveBeenCalledTimes(1);
  });
});
```

The `beforeEach` hook rebuilds the mock so every test starts with a clean Strapi instance. Each test prepares the `ctx` request object that the controller expects, calls the controller function, and asserts both the response and the interactions with Strapi services.

### Service example

Services can be tested in the same test suite or in a dedicated file by mocking only the Strapi query layer they call into.

```js title="./tests/create-service.test.js"
const createService = require('./create-service');

describe('Create service', () => {
  let strapi;

  beforeEach(() => {
    strapi = {
      query: jest.fn().mockReturnValue({
        create: jest.fn().mockReturnValue({
          data: {
            name: 'test',
            status: false,
          },
        }),
      }),
    };
  });

  it('persists a todo item', async () => {
    const todo = await createService({ strapi }).create({ name: 'test' });

    expect(strapi.query('plugin::todo.todo').create).toHaveBeenCalledTimes(1);
    expect(todo.data.name).toBe('test');
  });
});
```

By focusing on mocking the specific Strapi APIs your code touches, you can grow these tests to cover additional branches, error cases, and services while keeping them fast and isolated.

## Set up a testing environment

For API-level testing with  that sets up and tears down Strapi instances for tests

### TypeScript compiler configuration

Create `tests/ts-compiler-options.js` with the following content:

```js title="./tests/ts-compiler-options.js"
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const projectRoot = path.resolve(__dirname, '..');
const tsconfigPath = path.join(projectRoot, 'tsconfig.json');

const baseCompilerOptions = {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2019,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  esModuleInterop: true,
  jsx: ts.JsxEmit.React,
};

const loadCompilerOptions = () => {
  let options = { ...baseCompilerOptions };

  if (!fs.existsSync(tsconfigPath)) {
    return options;
  }

  try {
    const tsconfigContent = fs.readFileSync(tsconfigPath, 'utf8');
    const parsed = ts.parseConfigFileTextToJson(tsconfigPath, tsconfigContent);

    if (!parsed.error && parsed.config && parsed.config.compilerOptions) {
      options = {
        ...options,
        ...parsed.config.compilerOptions,
      };
    }
  } catch (error) {
    // Ignore tsconfig parsing errors and fallback to defaults
  }

  return options;
};

module.exports = {
  compilerOptions: loadCompilerOptions(),
  loadCompilerOptions,
};
```

This file loads your project's TypeScript configuration and provides sensible defaults if the config file doesn't exist.

### TypeScript runtime loader

Create `tests/ts-runtime.js` with the following content:

```js title="./tests/ts-runtime.js"
const Module = require('module');
const { compilerOptions } = require('./ts-compiler-options');
const fs = require('fs');
const ts = require('typescript');

const extensions = Module._extensions;

if (!extensions['.ts']) {
  extensions['.ts'] = function compileTS(module, filename) {
    const source = fs.readFileSync(filename, 'utf8');
    const output = ts.transpileModule(source, {
      compilerOptions,
      fileName: filename,
      reportDiagnostics: false,
    });

    return module._compile(output.outputText, filename);
  };
}

if (!extensions['.tsx']) {
  extensions['.tsx'] = extensions['.ts'];
}

module.exports = {
  compilerOptions,
};
```

This file teaches Node.js how to load `.ts` and `.tsx` files by transpiling them to JavaScript on the fly.

### Main test harness

Create `tests/strapi.js` with the following content:

What the test harness does:

1. **TypeScript Support**: Patches Strapi's configuration loader to understand TypeScript files (`.ts`, `.cts`, `.mts`) in your config directory
2. **Configuration Validation**: Ensures only valid config files are loaded and warns about common mistakes (like naming a file `middleware.js` instead of `middlewares.js`)
3. **Database Normalization**: Maps database client names to their actual driver names (e.g., `sqlite` → `sqlite3`) and handles connection pooling
4. **Environment Setup**: Sets all required environment variables for testing, including JWT secrets and database configuration
5. **Automatic Route Registration**: Automatically registers a `/api/hello` test endpoint that you can use in your tests
6. **User Permission Helper**: Patches the user service to automatically assign the "authenticated" role to newly created users, simplifying authentication tests
7. **Cleanup**: Properly closes connections and removes temporary database files after tests complete

:::note
The code example for the `tests/strapi.js` harness highlights lines 313-321 because these are optional, to be used if you [seed predictable test data](#optional-seed-predictable-test-data).
:::

Once these files are in place, the harness handles several Strapi 5 requirements automatically, letting you focus on writing actual test logic rather than configuration boilerplate.

## (optional) Seed predictable test data

Some API tests benefit from having a known set of documents preloaded. You can expose your project seeding as a reusable function and call it from the harness behind an environment flag:

1. Export a seeding function from your project script (e.g. `./scripts/seed.js`):

    ```js title="./scripts/seed.js"
    async function seedExampleApp() {
      // In test environment, skip complex seeding and just log
      if (process.env.NODE_ENV === 'test') {
        console.log('Test seeding: Skipping complex data import (not needed for basic tests)');
        return;
      }

      const shouldImportSeedData = await isFirstRun();
      if (shouldImportSeedData) {
        try {
          console.log('Setting up the template...');
          await importSeedData();
          console.log('Ready to go');
        } catch (error) {
          console.log('Could not import seed data');
          console.error(error);
        }
      }
    }

    // Allow usage both as a CLI and as a library from tests
    if (require.main === module) {
      main().catch((error) => {
        console.error(error);
        process.exit(1);
      });
    }

    module.exports = { seedExampleApp };
    ```

2. In the test harness, call the function when `TEST_SEED=true` (see lines 313-321 highlighted in the code example from the [main test harness](#main-test-harness)).

3. Run your tests with seeding enabled:

    </Tabs>

Seeding runs after Strapi starts, so services, permissions, and uploads are available.

It's recommended to keep seeds deterministic to ensure stable assertions. If you publish entries, prefer fixed timestamps or assert on structural properties rather than transient dates.

## Create smoke tests

With the harness in place you can confirm Strapi boots correctly by adding a minimal Jest suite with the following **smoke tests**  in a `tests/app.test.js` as follows:

```js title="./tests/app.test.js"
const { setupStrapi, cleanupStrapi } = require('./strapi');

/** this code is called once before any test is called */
beforeAll(async () => {
  await setupStrapi(); // Singleton so it can be called many times
});

/** this code is called once before all the tests are finished */
afterAll(async () => {
  await cleanupStrapi();
});

it('strapi is defined', () => {
  expect(strapi).toBeDefined();
});

require('./hello');
require('./user');
```

Running `yarn test` or `npm run test` should now yield:

```bash
PASS tests/create-service.test.js
PASS tests/todo-controller.test.js

Test Suites: 6 passed, 6 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        7.952 s
Ran all test suites.
✨ Done in 8.63s.
```

:::caution
If you receive a timeout error for Jest, increase the timeout by calling `jest.setTimeout(30000)` in `tests/strapi.js` or at the top of your test file.
:::

## Test a basic API endpoint

Create `tests/hello.test.js` with the following:

```js title="./tests/hello.test.js"
const { setupStrapi, cleanupStrapi } = require('./strapi');
const request = require('supertest');

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it('should return hello world', async () => {
  await request(strapi.server.httpServer)
    .get('/api/hello')
    .expect(200)
    .then((data) => {
      expect(data.text).toBe('Hello World!');
    });
});
```

The harness registers the `/api/hello` route automatically, so the test only has to make the request.

## Test API authentication

Strapi uses a JWT token to handle authentication. We will create one user with a known username and password, and use these credentials to authenticate and get a JWT token. The patched `user.add` helper in the harness ensures the authenticated role is applied automatically.

Create `tests/auth.test.js`:

```js title="./tests/auth.test.js"
const { setupStrapi, cleanupStrapi } = require('./strapi');
const request = require('supertest');

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

// User mock data
const mockUserData = {
  username: 'tester',
  email: 'tester@strapi.com',
  provider: 'local',
  password: '1234abc',
  confirmed: true,
  blocked: null,
};

it('should login user and return JWT token', async () => {
  await strapi.plugins['users-permissions'].services.user.add({
    ...mockUserData,
  });

  await request(strapi.server.httpServer)
    .post('/api/auth/local')
    .set('accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({
      identifier: mockUserData.email,
      password: mockUserData.password,
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .then((data) => {
      expect(data.body.jwt).toBeDefined();
    });
});
```

You can use the JWT token returned to make authenticated requests to the API. Using this example, you can add more tests to validate that the authentication and authorization are working as expected.

## Advanced API testing with user permissions

When you create API tests, you will most likely need to test endpoints that require authentication. In the following example we will implement a helper to get and use the JWT token.

Create `tests/user.test.js`:

```js title="./tests/user.test.js"
const { setupStrapi, cleanupStrapi } = require('./strapi');
const request = require('supertest');

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

let authenticatedUser = {};

// User mock data
const mockUserData = {
  username: 'tester',
  email: 'tester@strapi.com',
  provider: 'local',
  password: '1234abc',
  confirmed: true,
  blocked: null,
};

describe('User API', () => {
  beforeAll(async () => {
    await strapi.plugins['users-permissions'].services.user.add({
      ...mockUserData,
    });

    const response = await request(strapi.server.httpServer)
      .post('/api/auth/local')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        identifier: mockUserData.email,
        password: mockUserData.password,
      });

    authenticatedUser.jwt = response.body.jwt;
    authenticatedUser.user = response.body.user;
  });

  it('should return users data for authenticated user', async () => {
    await request(strapi.server.httpServer)
      .get('/api/users/me')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + authenticatedUser.jwt)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((data) => {
        expect(data.body).toBeDefined();
        expect(data.body.id).toBe(authenticatedUser.user.id);
        expect(data.body.username).toBe(authenticatedUser.user.username);
        expect(data.body.email).toBe(authenticatedUser.user.email);
      });
  });
});
```

## Automate tests with GitHub Actions

To go further, you can run your Jest test suite automatically on every push and pull request with . Create a `.github/workflows/test.yaml` file in your project and add the workflow as follows:

```yaml title="./.github/workflows/test.yaml"
name: 'Tests'

on:
  pull_request:
  push:

jobs:
  run-tests:
    name: Run Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install modules
        run: npm ci
      - name: Run Tests
        run: npm run test
```

Pairing continuous integration with your unit and API tests helps prevent regressions before they reach production.



# TypeScript
Source: //cms/typescript

# TypeScript 

  </Tabs>

- Add TypeScript support to an existing Strapi project using the provided [conversion](/cms/typescript/adding-support-to-existing-project) steps.

<br />

:::strapi What to do next?
- Understand the [structure](/cms/project-structure) of a TypeScript-based Strapi project
- Learn about the [configuration options](/cms/configurations/typescript) options related to TypeScript
- Deep dive into TypeScript-related development [options and features](/cms/typescript/development)
- Read the [guides](/cms/typescript/guides) for specific use cases
:::



# TypeScript development
Source: //cms/typescript/development

# TypeScript development with Strapi

While developing a [TypeScript](/cms/typescript)-based application with Strapi, you can:

- access [typings for the `Strapi`](#use-strapi-typescript-typings) class with autocompletion,
- [generate typings](#generate-typings-for-content-types-schemas) for your project's content-types,
- [start Strapi programmatically](#start-strapi-programmatically),
- and follow some TypeScript-specific instructions for [plugins development](#develop-a-plugin-using-typescript).

:::strapi Documents and entries
More information and best practices on how to manipulate documents and entries with a TypeScript-based project can be found in the [dedicated guide](/cms/typescript/documents-and-entries).
:::

## Use `Strapi` TypeScript typings

Strapi provides typings on the `Strapi` class to enhance the TypeScript development experience. These typings come with an autocomplete feature that automatically offers suggestions while developing.

To experience TypeScript-based autocomplete while developing Strapi applications, you could try the following:

1. Open the `./src/index.ts` file from your code editor.
2. Import the `Core` types from `@strapi/strapi` and declare the `strapi` argument as type `Core.Strapi` within the global `register` method:

    ```typescript title="./src/index.ts"
    import type { Core } from '@strapi/strapi';

    export default {
      register({ strapi }: { strapi: Core.Strapi }) {
        // ...
      },
    };
    ```

3. Within the body of the `register` method, start typing `strapi.` and use keyboard arrows to browse the available properties.

4. Choose `runLifecyclesFunctions` from the list.

5. When the `strapi.runLifecyclesFunctions` method is added, a list of available lifecycle types (i.e. `register`, `bootstrap` and `destroy`) are returned by the code editor. Use keyboard arrows to choose one of the lifecycles and the code will autocomplete.

## Generate typings for content-types schemas

To generate typings for your project schemas use the [`ts:generate-types` CLI command](/cms/cli#strapi-ts). The `ts:generate-types` command creates the folder `types`, at the project root, which stores the typings for your project. The optional `--debug` flag returns a detailed table of the generated schemas.

To use `ts:generate-types`run the following code in a terminal at the project root:

</Tabs>

:::tip Tip: Automatically generate types
Types can be automatically generated on server restart by adding `autogenerate: true` to [the `config/typescript.js|ts` configuration file](/cms/configurations/typescript#strapi-specific-configuration-for-typescript).
:::

:::tip Tip: Using types in your front-end application
To use Strapi types in your front-end application, you can  until Strapi implements an official solution.
:::

### Fix build issues with the generated types

The generated types can be excluded so that the Entity Service doesn't use them and falls back on looser types that don't check the actual properties available in the content types.

To do that, edit the `tsconfig.json` of the Strapi project and add `types/generated/**` to the `exclude` array:

```json title="./tsconfig.json"
  // ...
  "exclude": [
    "node_modules/",
    "build/",
    "dist/",
    ".cache/",
    ".tmp/",
    ".strapi/",
    "src/admin/",
    "**/*.test.ts",
    "src/plugins/**",
    "types/generated/**"
  ]
  // ...
```

However, if you still want to use the generated types on your project, but don't want Strapi to use them, a workaround could be to copy those generated types and paste them outside of the `generated` directory (so that they aren't overwritten when the types are regenerated) and remove the `declare module '@strapi/types'` from the bottom of the file.

:::warning
Types should only be imported from `@strapi/strapi` to avoid breaking changes. The types in `@strapi/types` are for internal use only and may change without notice.
:::

## Start Strapi programmatically

To start Strapi programmatically in a TypeScript project the Strapi instance requires the compiled code location. This section describes how to set and indicate the compiled code directory.

### Use the `strapi()` factory {#use-the-createstrapi-factory}

Strapi can be run programmatically by using the `strapi()` factory. Since the code of TypeScript projects is compiled in a specific directory, the parameter `distDir` should be passed to the factory to indicate where the compiled code should be read:

```js title="./server.js"

const strapi = require('@strapi/strapi');
const app = strapi.createStrapi({ distDir: './dist' });
app.start(); 
```

### Use the `strapi.compile()` function

The `strapi.compile()` function should be mostly used for developing tools that need to start a Strapi instance and detect whether the project includes TypeScript code. `strapi.compile()` automatically detects the project language. If the project code contains any TypeScript code, `strapi.compile()` compiles the code and returns a context with specific values for the directories that Strapi requires:

```js
const strapi = require('@strapi/strapi');

strapi.compile().then(appContext => strapi(appContext).start());
```

## Develop a plugin using TypeScript

New plugins can be generated following the [plugins development documentation](/cms/plugins-development/developing-plugins), ensuring you select "TypeScript" when prompted by the CLI tool.

There are 2 important distinctions for TypeScript applications:

- After creating the plugin, run `yarn` or `npm install` in the plugin directory `src/admin/plugins/[my-plugin-name]` to install the dependencies for the plugin.
- Run `yarn build` or `npm run build` in the plugin directory `src/admin/plugins/[my-plugin-name]` to build the admin panel including the plugin.

:::note
It is not necessary to repeat the `yarn` or `npm install` command after the initial installation. The `yarn build` or `npm run build` command is necessary to implement any plugin development that affects the admin panel.
:::



# TypeScript Guides
Source: //cms/typescript/guides

# TypeScript guides

The following guides will help you on specific aspects of a [Typescript-based](/cms/typescript) Strapi project.



# Upgrade tool
Source: //cms/upgrade-tool

# Upgrade tool

The upgrade tool assists Strapi users in upgrading their Strapi application dependencies and code to a specific version.

Running the upgrade tool triggers the update of the application dependencies, their installation, and the execution of a series of **codemods** 

</Tabs>
