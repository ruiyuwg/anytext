## Introduction

tRPC allows you to
easily build & consume fully typesafe APIs without schemas or code generation.

As TypeScript and static typing increasingly becomes a best practice in web development, API contracts present a major pain point. We need better ways to **statically type** our API endpoints and **share those types** between our client and server (or server-to-server). We set out to build a simple library for building typesafe APIs that leverages the full power of modern TypeScript.

### An alternative to traditional REST or GraphQL

Currently, GraphQL is the dominant way to implement typesafe APIs in TypeScript ([and it's amazing!](../further/further-reading.md#relationship-to-graphql)). Since GraphQL is designed as a language-agnostic specification for implementing APIs, it doesn't take full advantage of the power of a language like TypeScript.

If your project is built with full-stack TypeScript, you can share types **directly** between your client and server, without relying on code generation.

<!--
### tRPC explained from a REST API background

tRPC can co-exist with a REST API, as it uses a single endpoint. On this specific endpoint tRPC will itself function as a router, meaning tRPC will redirect internally to the right handler on every incoming request.

Like an Express router, tRPC also supports middleware and registering handlers. Unlike Express, tRPC embraces TypeScript to its fullest, providing built-in input and output validation.

On the frontend, `@trpc/client` provides developers typesafety and autocompletion for the available endpoints. It shows what input is required and infers the output type of the endpoint. This ensures that in the case you make breaking changes to an endpoint on the server, TypeScript will warn you in the frontend.
-->

### Who is tRPC for?

tRPC is for full-stack TypeScript developers. It makes it easy to write endpoints that you can safely use in both the front and backend of your app. Type errors with your API contracts will be caught at build time, reducing the surface for bugs in your application at runtime.
