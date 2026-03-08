# Functions

The `./src/index.js` file (or `./src/index.ts` file in a [TypeScript-based](/cms/typescript) project) includes global [register](#register), [bootstrap](#bootstrap) and [destroy](#destroy) functions that can be used to add dynamic and logic-based configurations.

The functions can be synchronous, asynchronous, or return a promise.

### Asynchronous

Asynchronous functions use the `async` keyword to `await` tasks such as API calls or database queries before Strapi continues.

### Returning a promise

Promise-returning functions hand back a promise so Strapi can wait for its resolution before continuing.

## Lifecycle functions

Lifecycle functions let you place code at specific phases of Strapi's startup and shutdown.

- The `register()` function is for configuration-time setup before services start.
- The `bootstrap()` function is for initialization that needs Strapi's APIs.
- The `destroy()` function is for teardown when the application stops.

### Register

The `register` lifecycle function, found in `./src/index.js` (or in `./src/index.ts`), is an asynchronous function that runs before the application is initialized.

`register()` is the very first thing that happens when a Strapi application is starting. This happens *before* any setup process and you don't have any access to database, routes, policies, or any other backend server elements within the `register()` function.

The `register()` function can be used to:

- [extend plugins](/cms/plugins-development/plugins-extension#extending-a-plugins-interface)
- extend [content-types](/cms/backend-customization/models) programmatically
- load some [environment variables](/cms/configurations/environment)
- register a [custom field](/cms/features/custom-fields) that would be used only by the current Strapi application,
- register a [custom provider for the Users & Permissions plugin](/cms/configurations/users-and-permissions-providers/new-provider-guide).

More specifically, typical use-cases for `register()` include front-load security tasks such as loading secrets, rotating API keys, or registering authentication providers before the app finishes initializing.

### Bootstrap

The `bootstrap` lifecycle function, found in `./src/index.js` (or in `./src/index.ts`), is called at every server start.

`bootstrap()` is run *before* the back-end server starts but *after* the Strapi application has setup, so you have access to anything from the `strapi` object.

The `bootstrap` function can be used to:

- create an admin user if there isn't one
- fill the database with some necessary data
- declare custom conditions for the [Role-Based Access Control (RBAC)](/cms/configurations/guides/rbac) feature

More specifically, a typical use-case for `bootstrap()` is supporting editorial workflows. For example by seeding starter content, attaching webhooks, or scheduling cron jobs at startup.

You can run `yarn strapi console` (or `npm run strapi console`) in the terminal and interact with the `strapi` object.

### Destroy

The `destroy` function, found in `./src/index.js` (or in `./src/index.ts`), is an asynchronous function that runs before the application gets shut down.

The `destroy` function can be used to gracefully:

- stop [services](/cms/backend-customization/services) that are running
- [clean up plugin actions](/cms/plugins-development/server-api#destroy) (e.g. close connections, remove listeners, etc.)

More specifically, a typical use-case for `destroy()` is to handle operational clean-up, such as closing database or queue connections and removing listeners so the application can shut down cleanly.

## Usage

### Combined usage

All 3 lifecycle functions can be put together to configure custom behavior during application startup and shutdown.

1. Decide when your logic should run.
   - Add initialization-only tasks (e.g. registering a custom field or provider) in `register()`.
   - Add startup tasks that need full Strapi access (e.g. seeding or attaching webhooks) in `bootstrap()`.
   - Add cleanup logic (e.g. closing external connections) in `destroy()`.
2. Place the code in `src/index.js|ts`. Keep `register()` lean because it runs before Strapi is fully set up.
3. Restart Strapi to confirm each lifecycle executes in sequence.

```ts title="src/index.ts"
let cronJobKey: string | undefined;

  register({ strapi }) {
    strapi.customFields.register({
      name: 'color',
      type: 'string',
      plugin: 'color-picker',
    });
  },

  async bootstrap({ strapi }) {
    cronJobKey = 'log-reminders';

    strapi.cron.add({
      [cronJobKey]: {
        rule: '0 */6 * * *', // every 6 hours
        job: async () => {
          strapi.log.info('Remember to review new content in the admin panel.');
        },
      },
    });
  },

  async destroy({ strapi }) {
    if (cronJobKey) {
      strapi.cron.remove(cronJobKey);
    }
  },
};
```

You might find additional information in  about registering lifecycle functions.

# Middlewares configuration

Source: //cms/configurations/middlewares
