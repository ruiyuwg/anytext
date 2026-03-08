# Warnings

**Table of contents**

- [Warnings](#warnings)

  - [Warnings In Fastify](#warnings-in-fastify)

  - [Fastify Warning Codes](#fastify-warning-codes)

    - [FSTWRN001](#FSTWRN001)
    - [FSTWRN002](#FSTWRN002)

  - [Fastify Deprecation Codes](#fastify-deprecation-codes)
    - [FSTDEP022](#FSTDEP022)

## Warnings[​](#warnings "Direct link to Warnings")

### Warnings In Fastify[​](#warnings-in-fastify "Direct link to Warnings In Fastify")

Fastify uses Node.js's [warning event](https://nodejs.org/api/process.html#event-warning) API to notify users of deprecated features and coding mistakes. Fastify's warnings are recognizable by the `FSTWRN` and `FSTDEP` prefixes. When encountering such a warning, it is highly recommended to determine the cause using the [`--trace-warnings`](https://nodejs.org/api/cli.html#--trace-warnings) and [`--trace-deprecation`](https://nodejs.org/api/cli.html#--trace-deprecation) flags. These produce stack traces pointing to where the issue occurs in the application's code. Issues opened about warnings without this information will be closed due to lack of details.

Warnings can also be disabled, though it is not recommended. If necessary, use one of the following methods:

- Set the `NODE_NO_WARNINGS` environment variable to `1`
- Pass the `--no-warnings` flag to the node process
- Set `no-warnings` in the `NODE_OPTIONS` environment variable

For more information on disabling warnings, see [Node's documentation](https://nodejs.org/api/cli.html).

Disabling warnings may cause issues when upgrading Fastify versions. Only experienced users should consider disabling warnings.

### Fastify Warning Codes[​](#fastify-warning-codes "Direct link to Fastify Warning Codes")

| Code          | Description                                                                                                   | How to solve                         | Discussion                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| [FSTWRN001]() | The specified schema for a route is missing. This may indicate the schema is not well specified.              | Check the schema for the route.      | [#4647](https://github.com/fastify/fastify/pull/4647) |
| [FSTWRN002]() | The %s plugin being registered mixes async and callback styles, which will result in an error in `fastify@5`. | Do not mix async and callback style. | [#5139](https://github.com/fastify/fastify/pull/5139) |

### Fastify Deprecation Codes[​](#fastify-deprecation-codes "Direct link to Fastify Deprecation Codes")

Deprecation codes are supported by the Node.js CLI options:

- [--no-deprecation](https://nodejs.org/api/cli.html#--no-deprecation)
- [--throw-deprecation](https://nodejs.org/api/cli.html#--throw-deprecation)
- [--trace-deprecation](https://nodejs.org/api/cli.html#--trace-deprecation)

| Code          | Description                                                                      | How to solve                 | Discussion                                            |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| [FSTDEP022]() | You are trying to access the deprecated router options on top option properties. | Use `options.routerOptions`. | [#5985](https://github.com/fastify/fastify/pull/5985) |

***

# Introduction

The documentation for Fastify is split into two categories:

- [Reference documentation](/docs/v5.8.x/Reference/.md)
- [Guides](/docs/v5.8.x/Guides/.md)

The reference documentation utilizes a very formal style in an effort to document Fastify's API and implementation details thoroughly for the developer who needs such. The guides category utilizes an informal educational style as a means to introduce newcomers to core and advanced Fastify concepts.

## Where To Start[​](#where-to-start "Direct link to Where To Start")

Complete newcomers to Fastify should first read our [Getting Started](/docs/v5.8.x/Guides/Getting-Started/.md) guide.

Developers experienced with Fastify should consult the [reference documentation](/docs/v5.8.x/Reference/.md) directly to find the topic they are seeking more information about.

## Additional Documentation[​](#additional-documentation "Direct link to Additional Documentation")

- Fastify's [Long Term Support (LTS)](/docs/v5.8.x/Reference/LTS/.md) policy

***
