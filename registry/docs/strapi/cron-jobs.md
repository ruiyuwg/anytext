# Cron jobs

The `cron.enabled` configuration option should be set to `true` in the `./config/server.js` (or `./config/server.ts` for TypeScript projects) [file](/cms/configurations/server).

`cron` allows scheduling arbitrary functions for execution at specific dates, with optional recurrence rules. These functions are named cron jobs. `cron` only uses a single timer at any given time, rather than reevaluating upcoming jobs every second/minute.

This feature is powered by the

Advanced example #1: Timezones

The following cron job runs on a specific timezone:

Advanced example #2: One-off cron jobs
The following cron job is run only once at a given time:

Advanced example #3: Start and end times

The following cron job uses start and end times:

### Using the key format

Using the key format creates an anonymous cron job which may cause issues when trying to disable the cron job or with some plugins. It is recommended to use the object format.

To define a cron job with the key format, create a file with the following structure:

## Enabling cron jobs

To enable cron jobs, set `cron.enabled` to `true` in the [server configuration file](/cms/configurations/server) and declare the jobs:

## Adding or removing cron jobs

Use `strapi.cron.add` anywhere in your custom code add CRON jobs to the Strapi instance:

```js title="./src/plugins/my-plugin/strapi-server.js"
module.exports = () => ({
  bootstrap({ strapi }) {
    strapi.cron.add({
      // runs every second
      myJob: {
        task: ({ strapi }) => {
          console.log("hello from plugin");
        },
        options: {
          rule: "* * * * * *",
        },
      },
    });
  },
});
```

Use `strapi.cron.remove` anywhere in your custom code to remove CRON jobs from the Strapi instance, passing in the key corresponding to the CRON job you want to remove:

```js
strapi.cron.remove("myJob");
```

Cron jobs that are using the [key as the rule](/cms/configurations/cron#using-the-key-format) can not be removed.

## Listing cron jobs

Use `strapi.cron.jobs` anywhere in your custom code to list all the cron jobs that are currently running:

```js
strapi.cron.jobs
```

# Database configuration

Source: //cms/configurations/database
