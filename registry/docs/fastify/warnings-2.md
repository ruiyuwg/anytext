# Warnings

**Table of contents**

- [Warnings](#warnings)

  - [Warnings In Fastify](#warnings-in-fastify)

  - [Fastify Warning Codes](#fastify-warning-codes)

    - [FSTWRN001](#FSTWRN001)
    - [FSTWRN002](#FSTWRN002)

  - [Fastify Deprecation Codes](#fastify-deprecation-codes)

    - [FSTDEP005](#FSTDEP005)
    - [FSTDEP006](#FSTDEP006)
    - [FSTDEP007](#FSTDEP007)
    - [FSTDEP008](#FSTDEP008)
    - [FSTDEP009](#FSTDEP009)
    - [FSTDEP010](#FSTDEP010)
    - [FSTDEP011](#FSTDEP011)
    - [FSTDEP012](#FSTDEP012)
    - [FSTDEP013](#FSTDEP013)
    - [FSTDEP014](#FSTDEP014)
    - [FSTDEP015](#FSTDEP015)
    - [FSTDEP016](#FSTDEP016)
    - [FSTDEP017](#FSTDEP017)
    - [FSTDEP018](#FSTDEP018)
    - [FSTDEP019](#FSTDEP019)
    - [FSTDEP020](#FSTDEP020)
    - [FSTDEP021](#FSTDEP021)
    - [FSTDEP022](#FSTDEP022)

## Warnings[​](#warnings "Direct link to Warnings")

### Warnings In Fastify[​](#warnings-in-fastify "Direct link to Warnings In Fastify")

Fastify utilizes Node.js's [warning event](https://nodejs.org/api/process.html#event-warning) API to notify users of deprecated features and known coding mistakes. Fastify's warnings are recognizable by the `FSTWRN` and `FSTDEP` prefixes on warning code. When encountering such a warning, it is highly recommended that the cause of the warning be determined through use of the [`--trace-warnings`](https://nodejs.org/api/cli.html#--trace-warnings) and [`--trace-deprecation`](https://nodejs.org/api/cli.html#--trace-deprecation) flags. These will produce stack traces pointing out where the issue occurs in the application's code. Issues opened about warnings without including this information may be closed due to lack of information.

In addition to tracing, warnings can also be disabled. It is not recommended to disable warnings as a matter of course, but if necessary, they can be disabled by using any of the following methods:

- setting the `NODE_NO_WARNINGS` environment variable to `1`
- passing the `--no-warnings` flag to the node process
- setting 'no-warnings' in the `NODE_OPTIONS` environment variable

For more information on how to disable warnings, see [node's documentation](https://nodejs.org/api/cli.html).

However, disabling warnings is not recommended as it may cause potential problems when upgrading Fastify versions. Only experienced users should consider disabling warnings.

### Fastify Warning Codes[​](#fastify-warning-codes "Direct link to Fastify Warning Codes")

| Code          | Description                                                                                                   | How to solve                         | Discussion                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| [FSTWRN001]() | The specified schema for a route is missing. This may indicate the schema is not well specified.              | Check the schema for the route.      | [#4647](https://github.com/fastify/fastify/pull/4647) |
| [FSTWRN002]() | The %s plugin being registered mixes async and callback styles, which will result in an error in `fastify@5`. | Do not mix async and callback style. | [#5139](https://github.com/fastify/fastify/pull/5139) |

### Fastify Deprecation Codes[​](#fastify-deprecation-codes "Direct link to Fastify Deprecation Codes")

Deprecation codes are further supported by the Node.js CLI options:

- [--no-deprecation](https://nodejs.org/api/cli.html#--no-deprecation)
- [--throw-deprecation](https://nodejs.org/api/cli.html#--throw-deprecation)
- [--trace-deprecation](https://nodejs.org/api/cli.html#--trace-deprecation)

| Code          | Description                                                                                                                            | How to solve                                                                                            | Discussion                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [FSTDEP005]() | You are accessing the deprecated `request.connection` property.                                                                        | Use `request.socket`.                                                                                   | [#2594](https://github.com/fastify/fastify/pull/2594)                                                       |
| [FSTDEP006]() | You are decorating Request/Reply with a reference type. This reference is shared amongst all requests.                                 | Do not use Arrays/Objects as values when decorating Request/Reply.                                      | [#2688](https://github.com/fastify/fastify/pull/2688)                                                       |
| [FSTDEP007]() | You are trying to set a HEAD route using `exposeHeadRoute` route flag when a sibling route is already set.                             | Remove `exposeHeadRoutes` or explicitly set `exposeHeadRoutes` to `false`                               | [#2700](https://github.com/fastify/fastify/pull/2700)                                                       |
| [FSTDEP008]() | You are using route constraints via the route `{version: "..."}` option.                                                               | Use `{constraints: {version: "..."}}` option.                                                           | [#2682](https://github.com/fastify/fastify/pull/2682)                                                       |
| [FSTDEP009]() | You are using a custom route versioning strategy via the server `{versioning: "..."}` option.                                          | Use `{constraints: {version: "..."}}` option.                                                           | [#2682](https://github.com/fastify/fastify/pull/2682)                                                       |
| [FSTDEP010]() | Modifying the `reply.sent` property is deprecated.                                                                                     | Use the `reply.hijack()` method.                                                                        | [#3140](https://github.com/fastify/fastify/pull/3140)                                                       |
| [FSTDEP011]() | Variadic listen method is deprecated.                                                                                                  | Use `.listen(optionsObject)`.                                                                           | [#3712](https://github.com/fastify/fastify/pull/3712)                                                       |
| [FSTDEP012]() | You are trying to access the deprecated `request.context` property.                                                                    | Use `request.routeOptions.config` or `request.routeOptions.schema`.                                     | [#4216](https://github.com/fastify/fastify/pull/4216) [#5084](https://github.com/fastify/fastify/pull/5084) |
| [FSTDEP013]() | Direct return of "trailers" function is deprecated.                                                                                    | Use "callback" or "async-await" for return value.                                                       | [#4380](https://github.com/fastify/fastify/pull/4380)                                                       |
| [FSTDEP014]() | You are trying to set/access the default route. This property is deprecated.                                                           | Use `setNotFoundHandler` if you want to custom a 404 handler or the wildcard (`*`) to match all routes. | [#4480](https://github.com/fastify/fastify/pull/4480)                                                       |
| [FSTDEP015]() | You are accessing the deprecated `request.routeSchema` property.                                                                       | Use `request.routeOptions.schema`.                                                                      | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| [FSTDEP016]() | You are accessing the deprecated `request.routeConfig` property.                                                                       | Use `request.routeOptions.config`.                                                                      | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| [FSTDEP017]() | You are accessing the deprecated `request.routerPath` property.                                                                        | Use `request.routeOptions.url`.                                                                         | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| [FSTDEP018]() | You are accessing the deprecated `request.routerMethod` property.                                                                      | Use `request.routeOptions.method`.                                                                      | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| [FSTDEP019]() | You are accessing the deprecated `reply.context` property.                                                                             | Use `reply.routeOptions.config` or `reply.routeOptions.schema`.                                         | [#5032](https://github.com/fastify/fastify/pull/5032) [#5084](https://github.com/fastify/fastify/pull/5084) |
| [FSTDEP020]() | You are using the deprecated `reply.getReponseTime()` method.                                                                          | Use the `reply.elapsedTime` property instead.                                                           | [#5263](https://github.com/fastify/fastify/pull/5263)                                                       |
| [FSTDEP021]() | The `reply.redirect()` method has a new signature: `reply.redirect(url: string, code?: number)`. It will be enforced in `fastify@v5`'. | [#5483](https://github.com/fastify/fastify/pull/5483)                                                   |                                                                                                             |
| [FSTDEP022]() | You are using the deprecated json shorthand schema on route %s. Specify full object schema instead. It will be removed in `fastify@v5` | [#5483](https://github.com/fastify/fastify/pull/0000)                                                   |                                                                                                             |

***

# Introduction

The documentation for Fastify is split into two categories:

- [Reference documentation](/docs/v5.0.x/Reference/.md)
- [Guides](/docs/v5.0.x/Guides/.md)

The reference documentation utilizes a very formal style in an effort to document Fastify's API and implementation details thoroughly for the developer who needs such. The guides category utilizes an informal educational style as a means to introduce newcomers to core and advanced Fastify concepts.

## Where To Start[​](#where-to-start "Direct link to Where To Start")

Complete newcomers to Fastify should first read our [Getting Started](/docs/v5.0.x/Guides/Getting-Started/.md) guide.

Developers experienced with Fastify should consult the [reference documentation](/docs/v5.0.x/Reference/.md) directly to find the topic they are seeking more information about.

## Additional Documentation[​](#additional-documentation "Direct link to Additional Documentation")

- Fastify's [Long Term Support (LTS)](/docs/v5.0.x/Reference/LTS/.md) policy

***
