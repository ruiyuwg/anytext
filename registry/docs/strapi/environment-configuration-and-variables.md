# Environment configuration and variables

Strapi provides specific environment variable names. Defining them in an environment file (e.g., `.env`) will make these variables and their values available in your code.

An `env()` utility can be used to [retrieve the value of environment variables](/cms/configurations/guides/access-cast-environment-variables#accessing-environment-variables) and [cast variables to different types](/cms/configurations/guides/access-cast-environment-variables).

Additionally, specific [configurations for different environments](#environment-configurations) can be created.

## Strapi's environment variables

Strapi provides the following environment variables:

Setting                                                    | Description                                                                                                                                                                                                                                                                   | Type      | Default value   |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------------|
| `STRAPI_TELEMETRY_DISABLED`                                | Don't send telemetry usage data to Strapi                                                                                                                                                                                                                                     | `Boolean` | `false`         |
| `STRAPI_LICENSE`                                           | The license key to activate the Enterprise Edition                                                                                                                                                                                                                            | `String`  | `undefined`     |
| `NODE_ENV` | Type of environment where the application is running.`production` enables specific behaviors (see

With these configuration files the server will start on various ports depending on the environment variables passed:

```bash
yarn start                                   # uses host 127.0.0.1
NODE_ENV=production yarn start               # uses host defined in .env. If not defined, uses 0.0.0.0
HOST=10.0.0.1 NODE_ENV=production yarn start # uses host 10.0.0.1
```

To learn deeper about how to use environment variables in your code, please refer to the following guide:

# Features configuration

Source: //cms/configurations/features

# Features configuration

The `config/features.js|ts` file is used to enable feature flags. Currently this file only includes a `future` object used to enable experimental features through **future flags**.

Some incoming Strapi features are not yet ready to be shipped to all users, but Strapi still offers community users the opportunity to provide early feedback on these new features or changes. With these experimental features, developers have the flexibility to choose and integrate new features and changes into their Strapi applications as they become available in the current major version as well as assist us in shaping these new features.

Such experimental features are indicated by a

4. Rebuild the admin panel and restart the server:

## Future flags API

Developers can use the following APIs to interact with future flags:

- Features configuration is part of the `config` object and can be read with `strapi.config.get('features')` or with `strapi.features.config`.

- `strapi.features.future` returns the `isEnabled()` that can be used to determine if a future flag is enabled, using the following method: `strapi.features.future.isEnabled('featureName')`.

## Available future flags

| Property name | Related feature | Suggested environment variable name |
| ------------- | --------------- | ---------------------------------- |
| `experimental_firstPublishedAt` | [Draft & Publish](/cms/features/draft-and-publish#recording-the-first-publication-date) | `STRAPI_FUTURE_EXPERIMENTAL_FIRST_PUBLISHED_AT` |

# Lifecycle functions

Source: //cms/configurations/functions
