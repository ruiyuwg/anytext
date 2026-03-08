# How to write a good plugin

First, thank you for deciding to write a plugin for Fastify. Fastify is a minimal framework and plugins are its strength, so thank you.

The core principles of Fastify are performance, low overhead, and providing a good experience to our users. When writing a plugin, it is important to keep these principles in mind. Therefore, in this document, we will analyze what characterizes a quality plugin.

*Need some inspiration? You can use the label ["plugin suggestion"](https://github.com/fastify/fastify/issues?q=is%3Aissue+is%3Aopen+label%3A%22plugin+suggestion%22) in our issue tracker!*

## Code[​](#code "Direct link to Code")

Fastify uses different techniques to optimize its code, many of which are documented in our Guides. We highly recommend you read [the hitchhiker's guide to plugins](/docs/v5.4.x/Guides/Plugins-Guide/.md) to discover all the APIs you can use to build your plugin and learn how to use them.

Do you have a question or need some advice? We are more than happy to help you! Just open an issue in our [help repository](https://github.com/fastify/help).

Once you submit a plugin to our [ecosystem list](/docs/v5.4.x/Guides/Ecosystem/.md), we will review your code and help you improve it if necessary.

## Documentation[​](#documentation "Direct link to Documentation")

Documentation is extremely important. If your plugin is not well documented we will not accept it to the ecosystem list. Lack of quality documentation makes it more difficult for people to use your plugin, and will likely result in it going unused.

If you want to see some good examples of how to document a plugin take a look at:

- [`@fastify/caching`](https://github.com/fastify/fastify-caching)
- [`@fastify/compress`](https://github.com/fastify/fastify-compress)
- [`@fastify/cookie`](https://github.com/fastify/fastify-cookie)
- [`@fastify/under-pressure`](https://github.com/fastify/under-pressure)
- [`@fastify/view`](https://github.com/fastify/point-of-view)

## License[​](#license "Direct link to License")

You can license your plugin as you prefer, we do not enforce any kind of license.

We prefer the [MIT license](https://choosealicense.com/licenses/mit/) because we think it allows more people to use the code freely. For a list of alternative licenses see the [OSI list](https://opensource.org/licenses) or GitHub's [choosealicense.com](https://choosealicense.com/).

## Examples[​](#examples "Direct link to Examples")

Always put an example file in your repository. Examples are very helpful for users and give a very fast way to test your plugin. Your users will be grateful.

## Test[​](#test "Direct link to Test")

A plugin **must** be thoroughly tested to verify that is working properly.

A plugin without tests will not be accepted to the ecosystem list. A lack of tests does not inspire trust nor guarantee that the code will continue to work among different versions of its dependencies.

We do not enforce any testing library. We use [`node:test`](https://nodejs.org/api/test.html) since it offers out-of-the-box parallel testing and code coverage, but it is up to you to choose your library of preference. We highly recommend you read the [Plugin Testing](/docs/v5.4.x/Guides/Testing/.md#plugins) to learn about how to test your plugins.

## Code Linter[​](#code-linter "Direct link to Code Linter")

It is not mandatory, but we highly recommend you use a code linter in your plugin. It will ensure a consistent code style and help you to avoid many errors.

We use [`standard`](https://standardjs.com/) since it works without the need to configure it and is very easy to integrate into a test suite.

## Continuous Integration[​](#continuous-integration "Direct link to Continuous Integration")

It is not mandatory, but if you release your code as open source, it helps to use Continuous Integration to ensure contributions do not break your plugin and to show that the plugin works as intended. Both [CircleCI](https://circleci.com/) and [GitHub Actions](https://github.com/features/actions) are free for open source projects and easy to set up.

In addition, you can enable services like [Dependabot](https://github.com/dependabot), which will help you keep your dependencies up to date and discover if a new release of Fastify has some issues with your plugin.

## Let's start\![​](#lets-start "Direct link to Let's start!")

Awesome, now you know everything you need to know about how to write a good plugin for Fastify! After you have built one (or more!) let us know! We will add it to the [ecosystem](https://github.com/fastify/fastify#ecosystem) section of our documentation!

If you want to see some real world examples, check out:

- [`@fastify/view`](https://github.com/fastify/point-of-view) Templates rendering (*ejs, pug, handlebars, marko*) plugin support for Fastify.
- [`@fastify/mongodb`](https://github.com/fastify/fastify-mongodb) Fastify MongoDB connection plugin, with this you can share the same MongoDB connection pool in every part of your server.
- [`@fastify/multipart`](https://github.com/fastify/fastify-multipart) Multipart support for Fastify.
- [`@fastify/helmet`](https://github.com/fastify/fastify-helmet) Important security headers for Fastify.

***

# Write-Type-Provider

## How to write your own type provider[​](#how-to-write-your-own-type-provider "Direct link to How to write your own type provider")

Things to keep in mind when implementing a custom [type provider](/docs/v5.4.x/Reference/Type-Providers/.md):

### Type Contravariance[​](#type-contravariance "Direct link to Type Contravariance")

Whereas exhaustive type narrowing checks normally rely on `never` to represent an unreachable state, reduction in type provider interfaces should only be done up to `unknown`.

The reasoning is that certain methods of `FastifyInstance` are contravariant on `TypeProvider`, which can lead to TypeScript surfacing assignability issues unless the custom type provider interface is substitutable with `FastifyTypeProviderDefault`.

For example, `FastifyTypeProviderDefault` will not be assignable to the following:

```
export interface NotSubstitutableTypeProvider extends FastifyTypeProvider {
   // bad, nothing is assignable to `never` (except for itself)
  validator: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : never;
  serializer: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : never;
}
```

Unless changed to:

```
export interface SubstitutableTypeProvider extends FastifyTypeProvider {
  // good, anything can be assigned to `unknown`
  validator: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : unknown;
  serializer: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : unknown;
}
```

***
