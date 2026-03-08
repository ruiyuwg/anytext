# How to write a good plugin

First, thank you for deciding to write a plugin for Fastify. Fastify is a minimal framework and plugins are its strength, so thank you.The core principles of Fastify are performance, low overhead and providing a good experience to our users. When writing a plugin, it is important to keep these principles in mind. Therefore, in this document we will analyze what characterizes a quality plugin.

*Need some inspiration? You can use the label ["plugin suggestion"](https://github.com/fastify/fastify/issues?q=is%3Aissue+is%3Aopen+label%3A%22plugin+suggestion%22) in our issue tracker!*

## Code[​](#code "Direct link to Code")

Fastify uses different techniques to optimize its code, many of them are documented in our Guides. We highly recommend you read [the hitchhiker's guide to plugins](https://github.com/fastify/fastify/blob/master/docs/Plugins-Guide.md) to discover all the APIs you can use to build your plugin and learn how use them.

Have you got some question or are you seeking for a suggestion? We are more than happy to help you! Just open an issue in our [help repository](https://github.com/fastify/help).

Once you submit a plugin to our [ecosystem list](https://github.com/fastify/fastify/blob/master/docs/Ecosystem.md), we will review your code and help you improve it if necessary.

## Documentation[​](#documentation "Direct link to Documentation")

Documentation is extremely important. If your plugin is not well documented we will not accept it to the ecosystem list. Lack of quality documentation makes it more difficult for people to use your plugin, and will likely result in it going unused.If you want to see some good examples on how to document a plugin take a look at:

- [`fastify-caching`](https://github.com/fastify/fastify-caching)
- [`fastify-compress`](https://github.com/fastify/fastify-compress)
- [`fastify-cookie`](https://github.com/fastify/fastify-cookie)
- [`point-of-view`](https://github.com/fastify/point-of-view)
- [`under-pressure`](https://github.com/fastify/under-pressure)

## License[​](#license "Direct link to License")

You can license your plugin as you prefer, we do not enforce any kind of license.We prefer the [MIT license](https://choosealicense.com/licenses/mit/) because we think it allows more people to use the code freely. For a list of alternative licenses see the [OSI list](https://opensource.org/licenses) or GitHub's [choosealicense.com](https://choosealicense.com/).

## Examples[​](#examples "Direct link to Examples")

Always put an example file in your repository. Examples are very helpful for users and give a very fast way to test your plugin. Your users will be grateful.

## Test[​](#test "Direct link to Test")

It is extremely important that a plugin is thoroughly tested to verify that is working properly.A plugin without tests will not be accepted to the ecosystem list. A lack of tests does not inspire trust nor guarantee that the code will continue to work among different versions of its dependencies.

We do not enforce any testing library. We use [`tap`](http://www.node-tap.org/) since it offers out of the box parallel testing and code coverage, but it is up to you to choose your library of preference.

## Code Linter[​](#code-linter "Direct link to Code Linter")

It is not mandatory, but we highly recommend you use a code linter in your plugin. It will ensure a consistent code style and help you to avoid many errors.

We use [`standard`](https://standardjs.com/) since it works without the need to configure it and is very easy integrate in a test suite.

## Continuous Integration[​](#continuous-integration "Direct link to Continuous Integration")

It is not mandatory, but if you release your code as open source it helps to use Continuous Integration to ensure contributions do not break your plugin and to show that the plugin works as intended. [Travis](https://travis-ci.org/) is free for open source projects and easy to setup.In addition you can enable services like [Greenkeeper](https://greenkeeper.io/), that will help you keep your dependencies up to date and discover if a new release of Fastify has some issues with your plugin.

## Let's start\![​](#lets-start "Direct link to Let's start!")

Awesome, now you know everything you need to know about how to write a good plugin for Fastify! After you've built one (or more!) let us know! We will add it to the [ecosystem](https://github.com/fastify/fastify#ecosystem) section of our documentation!

If you want to see some real world examples, checkout:

- [`point-of-view`](https://github.com/fastify/point-of-view) Templates rendering (*ejs, pug, handlebars, marko*) plugin support for Fastify.
- [`fastify-mongodb`](https://github.com/fastify/fastify-mongodb) Fastify MongoDB connection plugin, with this you can share the same MongoDb connection pool in every part of your server.
- [`fastify-multipart`](https://github.com/fastify/fastify-multipart) Multipart support for Fastify.
- [`fastify-helmet`](https://github.com/fastify/fastify-helmet) Important security headers for Fastify.

***

# Introduction

The documentation for Fastify is split into two categories:

- [Reference documentation](/docs/v3.29.x/Reference/.md)
- [Guides](/docs/v3.29.x/Guides/.md)

The reference documentation utilizes a very formal style in an effort to document Fastify's API and implementation details thoroughly for the developer who needs such. The guides category utilizes an informal, educational, style as a means to introduce newcomers to core, and advanced, Fastify concepts.

## Where To Start[​](#where-to-start "Direct link to Where To Start")

Complete newcomers to Fastify should first read our [Getting Started](/docs/v3.29.x/Guides/Getting-Started/.md) guide.

Developers experienced with Fastify should consult the [reference documentation](/docs/v3.29.x/Reference/.md) directly to find the topic they are seeking more information about.

## Additional Documentation[​](#additional-documentation "Direct link to Additional Documentation")

- Fastify's [Long Term Support (LTS)](/docs/v3.29.x/Reference/LTS/.md) policy

***

# Index

## Guides Table Of Contents[​](#guides-table-of-contents "Direct link to Guides Table Of Contents")

[]()

This table of contents is in alphabetical order.

- [Benchmarking](/docs/v3.29.x/Guides/Benchmarking/.md): This guide introduces how to benchmark applications based upon Fastify.
- [Contributing](/docs/v3.29.x/Guides/Contributing/.md): Details how to participate in the development of Fastify, and shows how to setup an environment compatible with the project's code style.
- [Ecosystem](/docs/v3.29.x/Guides/Ecosystem/.md): Lists all core plugins and many known community plugins.
- [Fluent Schema](/docs/v3.29.x/Guides/Fluent-Schema/.md): Shows how writing JSON Schema can be written with a fluent API and used in Fastify.
- [Getting Started](/docs/v3.29.x/Guides/Getting-Started/.md): Introduction tutorial for Fastify. This is where beginners should start.
- [Migration Guide (v3)](/docs/v3.29.x/Guides/Migration-Guide-V3/.md): Details how to migrate to Fastify v3 from earlier versions.
- [Plugins Guide](/docs/v3.29.x/Guides/Plugins-Guide/.md): An informal introduction to writing Fastify plugins.
- [Prototype Poisoning](/docs/v3.29.x/Guides/Prototype-Poisoning/.md): A description of how the prototype poisoning attack works and is mitigated.
- [Recommendations](/docs/v3.29.x/Guides/Recommendations/.md): Recommendations for how to deploy Fastify into production environments.
- [Serverless](/docs/v3.29.x/Guides/Serverless/.md): Details on how to deploy Fastify applications in various Function as a Service (FaaS) environments.
- [Style Guide](/docs/v3.29.x/Guides/Style-Guide/.md): Explains the writing style we use for the Fastify documentation for those who want to contribute documentation.
- [Testing](/docs/v3.29.x/Guides/Testing/.md): Explains how to write unit tests for Fastify applications.
- [Write Plugin](/docs/v3.29.x/Guides/Write-Plugin/.md): A set of guidelines for what the Fastify team considers good practices for writing a Fastify plugin.

***
