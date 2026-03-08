# Valibot

The modular and type safe schema library for validating structural data.

## Get started (guides)

### Introduction

Hello, I am Valibot and I would like to help you validate data easily using a schema. No matter if it is incoming data on a server, a form or even configuration files. I have no dependencies and can run in any JavaScript environment.

> I highly recommend you read the [announcement post](https://www.builder.io/blog/introducing-valibot), and if you are a nerd like me, the [bachelor's thesis](/thesis.pdf) I am based on.

#### Highlights

- Fully type safe with static type inference
- Small bundle size starting at less than 700 bytes
- Validate everything from strings to complex objects
- Open source and fully tested with 100 % coverage
- Many transformation and validation actions included
- Well structured source code without dependencies
- Minimal, readable and well thought out API

#### Example

First you create a schema that describes a structured data set. A schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to guarantee type safety of unknown data.

{/\* prettier-ignore \*/}

```ts
import * as v from 'valibot'; // 1.31 kB

// Create login schema with email and password
const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

// Infer output TypeScript type of login schema as
// { email: string; password: string }
type LoginData = v.InferOutput<typeof LoginSchema>;

// Throws error for email and password
const output1 = v.parse(LoginSchema, { email: '', password: '' });

// Returns data as { email: string; password: string }
const output2 = v.parse(LoginSchema, {
  email: 'jane@example.com',
  password: '12345678',
});
```

Apart from `parse` I also offer a non-exception-based API with `safeParse` and a type guard function with `is`. You can read more about it here.

#### Comparison

Instead of relying on a few large functions with many methods, my API design and source code is based on many small and independent functions, each with just a single task. This modular design has several advantages.

For example, this allows a bundler to use the import statements to remove code that is not needed. This way, only the code that is actually used gets into your production build. This can reduce the bundle size by up to 95 % compared to [Zod](https://zod.dev/).

In addition, it allows you to easily extend my functionality with external code and makes my source code more robust and secure because the functionality of the individual functions can be tested much more easily through unit tests.

#### Credits

My friend [Fabian](https://github.com/fabian-hiller) created me as part of his bachelor thesis at [Stuttgart Media University](https://www.hdm-stuttgart.de/en/), supervised by Walter Kriha, [Miško Hevery](https://github.com/mhevery) and [Ryan Carniato](https://github.com/ryansolid). My role models also include [Colin McDonnell](https://github.com/colinhacks), who had a big influence on my API design with [Zod](https://zod.dev/).

#### Feedback

Find a bug or have an idea how to improve my code? Please fill out an [issue](https://github.com/open-circle/valibot/issues/new). Together we can make the library even better!

#### License

I am completely free and licensed under the [MIT license](https://github.com/open-circle/valibot/blob/main/LICENSE.md). But if you like, you can feed me with a star on [GitHub](https://github.com/open-circle/valibot).

### Installation

Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project.

#### General

Except for this guide, the rest of this documentation assumes that you are using npm for the import statements in the code examples.

It does not make a difference whether you use individual imports or a wildcard import. Tree shaking and code splitting should work in both cases.

If you are using TypeScript, we recommend that you enable strict mode in your `tsconfig.json` so that all types are calculated correctly.

> The minimum required TypeScript version is v5.0.2.

```js
{
  "compilerOptions": {
    "strict": true,
    // ...
  }
}
```

#### For AI Agents

We provide an agent skill that teaches AI agents the correct patterns for generating Valibot schemas. You can install it by running the following command in your terminal:

```bash
npx skills add open-circle/agent-skills --skill valibot
```

You can learn more about the Valibot agent skill [here](https://github.com/open-circle/agent-skills).

#### From npm

For Node and Bun, you can add the library to your project with a single command using your favorite package manager.

```bash
npm install valibot     # npm
yarn add valibot        # yarn
pnpm add valibot        # pnpm
bun add valibot         # bun
```

Then you can import it into any JavaScript or TypeScript file.

```ts
// With individual imports
import { … } from 'valibot';

// With a wildcard import
import * as v from 'valibot';
```

#### From JSR

For Node, Deno and Bun, you can add the library to your project with a single command using your favorite package manager.

```bash
deno add jsr:@valibot/valibot      # deno
npx jsr add @valibot/valibot       # npm
yarn dlx jsr add @valibot/valibot  # yarn
pnpm dlx jsr add @valibot/valibot  # pnpm
bunx jsr add @valibot/valibot      # bun
```

Then you can import it into any JavaScript or TypeScript file.

```ts
// With individual imports
import { … } from '@valibot/valibot';

// With a wildcard import
import * as v from '@valibot/valibot';
```

In Deno, you can also directly reference me using `jsr:` specifiers.

```ts
// With individual imports
import { … } from 'jsr:@valibot/valibot';

// With a wildcard import
import * as v from 'jsr:@valibot/valibot';
```

#### From Deno

With Deno, you can reference the library directly through our deno.land/x URL.

```ts
// With individual imports
import { … } from 'https://deno.land/x/valibot/mod.ts';

// With a wildcard import
import * as v from 'https://deno.land/x/valibot/mod.ts';
```

### Quick start

A Valibot schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to truly guarantee type safety of unknown data.

#### Basic concept

Similar to how types can be defined in TypeScript, Valibot allows you to define a schema with various small functions. This applies to primitive values like strings as well as more complex data sets like objects.

```ts
import * as v from 'valibot';

// TypeScript
type LoginData = {
  email: string;
  password: string;
};

// Valibot
const LoginSchema = v.object({
  email: v.string(),
  password: v.string(),
});
```

#### Pipelines

In addition, pipelines enable you to perform more detailed validations and transformations with the `pipe` method. Thus, for example, it can be ensured that a string is an email that ends with a certain domain.

```ts
import * as v from 'valibot';

const EmailSchema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));
```

A pipeline must always start with a schema, followed by up to 19 validation or transformation actions. They are executed in sequence, and the result of the previous action is passed to the next. More details about pipelines can be found in this guide.

#### Error messages

If an issue is detected during validation, the library emits a specific issue object that includes various details and an error message. This error message can be overridden via the first optional argument of a schema or validation action.

```ts
import * as v from 'valibot';

const LoginSchema = v.object({
  email: v.pipe(
    v.string('Your email must be a string.'),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.')
  ),
  password: v.pipe(
    v.string('Your password must be a string.'),
    v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must have 8 characters or more.')
  ),
});
```

Custom error messages allow you to improve the usability of your software by providing specific troubleshooting information and returning error messages in a language other than English. See the i18n guide for more information.

#### Usage

Finally, you can use your schema to infer its input and output types and to parse unknown data. This way, your schema is the single source of truth. This concept simplifies your development process and makes your code more robust in the long run.

```ts
import * as v from 'valibot';

const LoginSchema = v.object({…});

type LoginData = v.InferOutput<typeof LoginSchema>;

function getLoginData(data: unknown): LoginData {
  return v.parse(LoginSchema, data);
}
```

### Use cases

Next, we would like to point out some use cases for which Valibot is particularly well suited. We welcome [ideas](https://github.com/open-circle/valibot/issues/new) for other use cases that we may not have thought of yet.

#### Server requests

Since most API endpoints can be reached via the Internet, basically anyone can send a request and transmit data. It is therefore important to apply zero trust security and to check request data thoroughly before processing it further.

This works particularly well with a schema, compared to if/else conditions, as even complex structures can be easily mapped. In addition, the library automatically type the parsed data according to the schema, which improves type safety and thus makes your code more secure.

#### Form validation

A schema can also be used for form validation. Due to Valibot's small bundle size and the possibility to individualize the error messages, the library is particularly well suited for this. Also, fullstack frameworks like Next.js, Remix, and Nuxt allow the same schema to be used for validation in the browser as well as on the server, which reduces your code to the minimum.

[Modular Forms](https://modularforms.dev/react/guides/validate-your-fields#schema-validation), for example, offers validation based on a schema at form and field level. In addition, the form can be made type-safe using the schema, which also enables autocompletion during development. In combination with the right framework, a fully type-safe and progressively enhanced form can be created with few lines of code and a great experience for developers and end-users.

#### Browser state

The browser state, which is stored using cookies, search parameters or the local storage, can be accidentally or intentionally manipulated by the user. To ensure the functionality of an application, it can help to validate this data before processing. Valibot can be used for this, which also improves type safety.

#### Config files

Library authors can also make use of Valibot, for example, to match configuration files with a schema and, in the event of an error, provide clear indications of the cause and how to fix the problem. The same applies to environment variables to quickly detect configuration errors.

#### Schema builder

Our schemas are plain JavaScript objects with a well-defined and fully type-safe structure. This makes Valibot a great choice for defining data structures that can be further processed by third-party code. For example, it is possible to build an ORM with custom metadata actions on top of Valibot to generate database schemas. Another example is our official `toJsonSchema` function, which uses Valibot's object API to output a JSON Schema that can be used for documentation purposes or to generate structured output with LLMs.

#### Data migration

Valibot can also be used to migrate data from one form to another in a type-safe way. The advantage of a schema library like Valibot is that transformations can be defined for individual properties instead of for the entire dataset. This can make data migrations more readable and maintainable. In addition, the schema can be used to validate the data before the migration, which increases the reliability of the migration process.

### Comparison

Even though Valibot's API resembles other solutions at first glance, the implementation and structure of the source code is very different. In the following, we would like to highlight the differences that can be beneficial for both you and your users.

#### Modular design

Instead of relying on a few large functions with many methods, Valibot's API design and source code is based on many small and independent functions, each with just a single task. This modular design has several advantages.

On one hand, the functionality of Valibot can be easily extended with external code. On the other, it makes the source code more robust and secure because the functionality of the individual functions as well as special edge cases can be tested much easier through unit tests.

However, perhaps the biggest advantage is that a bundler can use the static import statements to remove any code that is not needed. Thus, only the code that is actually used ends up in the production build. This allows us to extend the functionality of the library with additional functions without increasing the bundle size for all users.

This can make a big difference, especially for client-side validation, as it reduces the bundle size and, depending on the framework, speeds up the startup time.

{/\* prettier-ignore \*/}

```ts
import * as v from 'valibot'; // 1.37 kB

const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.')
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must have 8 characters or more.')
  ),
});
```

##### Comparison with Zod

For example, to validate a simple login form, [Zod](https://zod.dev/) requires [17.7 kB with esbuild](https://bundlejs.com/?q=zod\&treeshake=%5B%7B+object%2Cstring+%7D%5D) and 15.18 kB with Rolldown, whereas Valibot requires only [1.37 kB](https://bundlejs.com/?q=valibot\&treeshake=%5B%7B+email%2CminLength%2CnonEmpty%2Cobject%2Cstring%2Cpipe+%7D%5D). That's a 90 % reduction in bundle size. This is due to the fact that Zod's functions have several methods with additional functionalities, that cannot be easily removed by current bundlers when they are not executed in your source code.

{/\* prettier-ignore \*/}

```ts
// 17.7 kB with esbuild and 15.18 kB with Rolldown
import * as z from 'zod'; 

const LoginSchema = z.object({
  email: z.string()
    .min(1, 'Please enter your email.')
    .email('The email address is badly formatted.'),
  password: z.string()
    .min(1, 'Please enter your password.')
    .min(8, 'Your password must have 8 characters or more.'),
});
```

Zod v4 also introduces Zod Mini, a tree-shakable, functional variant aimed at reducing bundle size. For the same login form, Zod Mini requires approximately [6.88 kB with esbuild](https://bundlejs.com/?q=zod%2Fmini\&treeshake=%5B%7B+check%2Cemail%2CminLength%2Cobject%2Cstring+%7D%5D) and 3.94 kB with Rolldown, still about 3 to 5x larger than Valibot's [1.37 kB](https://bundlejs.com/?q=valibot\&treeshake=%5B%7B+email%2CminLength%2CnonEmpty%2Cobject%2Cstring%2Cpipe+%7D%5D), representing a ~73 % reduction when using Valibot over Zod Mini.

{/\* prettier-ignore \*/}

```ts
// 6.88 kB with esbuild and 3.94 kB with Rolldown
import * as z from 'zod/mini'; 

const LoginSchema = z.object({
  email: z.check(
    z.string(),
    z.minLength(1, 'Please enter your email.'),
    z.email('The email address is badly formatted.')
  ),
  password: z.check(
    z.string(),
    z.minLength(1, 'Please enter your password.'),
    z.minLength(8, 'Your password must have 8 characters or more.')
  ),
});
```

> You can migrate from Zod to Valibot using our [migration guide](/guides/migrate-from-zod/). It provides a codemod and a detailed overview of the differences between the two libraries.

#### Performance

With a schema library, a distinction must be made between startup performance and runtime performance. Startup performance describes the time required to load and initialize the library. This benchmark is mainly influenced by the bundle size and the amount of work required to create a schema. Runtime performance describes the time required to validate unknown data using a schema.

Since Valibot's implementation is optimized to minimize the bundle size and the effort of initialization, there is hardly any library that performs better in a [TTI](https://web.dev/articles/tti) benchmark. In terms of runtime performance, Valibot is in the midfield. Roughly speaking, the library is about twice as fast as [Zod](https://zod.dev/) v3, and has similar runtime performance to Zod v4 (including Zod Mini), but is much slower than [Typia](https://typia.io/) and [TypeBox](https://github.com/sinclairzx81/typebox), because we don't yet use a compiler that can generate highly optimized runtime code, and our implementation doesn't allow the use of the [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) constructor.

> Further details on performance can be found in the [bachelor's thesis](/thesis.pdf) Valibot is based on.

### Ecosystem

This page is for you if you are looking for frameworks or libraries that support Valibot.

> Use the button at the bottom left of this page to add your project to this ecosystem page. Please make sure to add your project to an appropriate existing category in alphabetical order or create a new category if necessary.

#### Frameworks

- [NestJS](https://docs.nestjs.com): A progressive Node.js framework for building efficient, reliable and scalable server-side applications
- [Qwik](https://qwik.dev): A web framework which helps you build instantly-interactive web apps at any scale without effort.

#### API libraries

- [Drizzle ORM](https://orm.drizzle.team/): TypeScript ORM that feels like writing SQL
- [GQLoom](https://gqloom.dev/): Weave GraphQL schema and resolvers using Valibot
- [Hono](https://hono.dev/): Ultrafast web framework for the Edges
- [next-safe-action](https://next-safe-action.dev) Type safe and validated Server Actions for Next.js
- [oRPC](https://orpc.unnoq.com/): Typesafe APIs Made Simple
- [piying-orm](https://github.com/piying-org/piying-orm): ORM for Valibot; Supports TypeORM, with more to come.
- [tRPC](https://trpc.io/): Move Fast and Break Nothing. End-to-end typesafe APIs made easy
- [upfetch](https://github.com/L-Blondy/up-fetch): Advanced fetch client builder

#### AI libraries

- [AI SDK](https://sdk.vercel.ai/): Build AI-powered applications with React, Svelte, Vue, and Solid

#### Form libraries

- [@rvf/valibot](https://github.com/airjp73/rvf/tree/main/packages/valibot): Valibot schema parser for [RVF](https://rvf-js.io/)
- [conform](https://conform.guide/): A type-safe form validation library utilizing web fundamentals to progressively enhance HTML Forms with full support for server frameworks like Remix and Next.js.
- [mantine-form-valibot-resolver](https://github.com/Songkeys/mantine-form-valibot-resolver): Valibot schema resolver for [@mantine/form](https://mantine.dev/form/use-form/)
- [maz-ui](https://maz-ui.com/composables/use-form-validator): Vue3 flexible and typed composable to manage forms simply with multiple modes and advanced features
- [Modular Forms](https://modularforms.dev/): Modular and type-safe form library for SolidJS, Qwik, Preact and React
- [piying-view](https://github.com/piying-org/piying-view): Frontend Form Solution; Supports Angular, Vue, React, with more to come.
- [React Hook Form](https://react-hook-form.com/): React Hooks for form state management and validation
- [regle](https://github.com/victorgarciaesgi/regle): Headless form validation library for Vue.js
- [Superforms](https://superforms.rocks): A comprehensive SvelteKit form library for server and client validation
- [svelte-jsonschema-form](https://x0k.dev/svelte-jsonschema-form/validators/valibot/): Svelte 5 library for creating forms based on JSON schema
- [TanStack Form](https://tanstack.com/form): Powerful and type-safe form state management for the web
- [VeeValidate](https://vee-validate.logaretm.com/v4/): Painless Vue.js forms
- [vue-valibot-form](https://github.com/IlyaSemenov/vue-valibot-form): Minimalistic Vue3 composable for handling form submit

#### Component libraries

- [Nuxt UI](https://ui.nuxt.com/): Fully styled and customizable components for Nuxt

#### Valibot to X

- [@gcornut/cli-valibot-to-json-schema](https://github.com/gcornut/cli-valibot-to-json-schema): CLI wrapper for @valibot/to-json-schema
- [@valibot/to-json-schema](https://github.com/open-circle/valibot/tree/main/packages/to-json-schema): The official JSON schema converter for Valibot
- [Hono OpenAPI](https://github.com/rhinobase/hono-openapi): A plugin for Hono to generate OpenAPI Swagger documentation
- [TypeMap](https://github.com/sinclairzx81/typemap/): Uniform Syntax, Mapping and Compiler Library for TypeBox, Valibot and Zod
- [TypeSchema](https://typeschema.com/): Universal adapter for schema validation
- [Valibot-Fast-Check](https://github.com/Eronmmer/valibot-fast-check): A library to generate [fast-check](https://fast-check.dev) arbitraries from Valibot schemas for property-based testing
- [valibot-serialize](https://github.com/gadicc/valibot-serialize): Serialize a schema to JSON and back again, or to (tree-shaking safe) static code

#### X to Valibot

- [@hey-api/openapi-ts](https://heyapi.dev/openapi-ts/plugins/valibot): OpenAPI to TypeScript codegen. Production-ready SDKs, Zod schemas, TanStack Query hooks, and 20+ plugins. Used by Vercel, OpenCode, and PayPal.
- [@traversable/valibot](https://github.com/traversable/schema/tree/main/packages/valibot): Build your own "Valibot to X" library, or pick one of 10+ off-the-shelf transformers
- [DRZL](https://github.com/use-drzl/drzl): Analyze Drizzle ORM schema(s) and auto-generate Valibot validators, typed services, and strongly typed routers (oRPC/tRPC/etc) via a modular pipeline.
- [graphql-codegen-typescript-validation-schema](https://github.com/Code-Hex/graphql-codegen-typescript-validation-schema): GraphQL Code Generator plugin to generate form validation schema from your GraphQL schema.
- [Prisma Valibot Generator](https://github.com/omar-dulaimi/prisma-valibot-generator): Generate Valibot validators from your Prisma schema so types and runtime stay in sync.
- [TypeBox-Codegen](https://sinclairzx81.github.io/typebox-workbench/): Code generation for schema libraries
- [TypeMap](https://github.com/sinclairzx81/typemap/): Uniform Syntax, Mapping and Compiler Library for TypeBox, Valibot and Zod
- [valibot-serialize](https://github.com/gadicc/valibot-serialize): From serialized JSON back to a schema instance or the (tree-shaking safe) code to create that instance

#### Utilities

- [@camflan/valibot-openapi-generator](https://github.com/camflan/valibot-openapi-generator): Functions to help build OpenAPI documentation using Valibot schemas
- [@nest-lab/typeschema](https://github.com/jmcdo29/nest-lab/tree/main/packages/typeschema): A ValidationPipe that handles many schema validators in a class-based fashion for NestJS's input validation
- [@traversable/valibot-test](https://github.com/traversable/schema/tree/main/packages/valibot-test): Random Valibot schema generator built for fuzz testing, includes generators for both valid and invalid data
- [@valibot/i18n](https://github.com/open-circle/valibot/tree/main/packages/i18n): The official i18n translations for Valibot
- [fastify-type-provider-valibot](https://github.com/qlaffont/fastify-type-provider-valibot): Fastify Type Provider with Valibot
- [valibot-env](https://y-hiraoka.github.io/valibot-env): Environment variables validator with Valibot
- [valibotx](https://github.com/IlyaSemenov/valibotx): A collection of extensions and shortcuts to core Valibot functions
- [valiload](https://github.com/JuerGenie/valiload): A simple and lightweight library for overloading functions in TypeScript
- [valimock](https://github.com/saeris/valimock): Generate mock data using your Valibot schemas using [Faker](https://github.com/faker-js/faker)
- [valipass](https://github.com/Saeris/valipass): Collection of password validation actions for Valibot schemas

### LLMs.txt

If you are using AI to generate Valibot schemas, you can use our LLMs.txt files to help the AI better understand the library.

#### What is LLMs.txt?

An [LLMs.txt](https://llmstxt.org/) file is a plain text file that provides instructions or metadata for large language models (LLMs). It often specifies how the LLMs should process or interact with content. It is similar to a robots.txt file, but is tailored for AI models.

#### Available routes

We provide several LLMs.txt routes. Use the route that works best with your AI tool.

- [`llms.txt`](/llms.txt) contains a table of contents with links to Markdown files
- [`llms-full.txt`](/llms-full.txt) contains the Markdown content of the entire docs
- [`llms-guides.txt`](/llms-guides.txt) contains the Markdown content of the guides
- [`llms-api.txt`](/llms-api.txt) contains the Markdown content of the API reference

> We also provide a Markdown version of every documentation page. You can access it by replacing the trailing slash (`/`) in the URL with `.md`. For example, `/guides/installation/` becomes `/guides/installation.md`.

#### For AI Agents

Our [`SKILL.md`](https://github.com/open-circle/agent-skills/blob/main/skills/valibot/SKILL.md) contains specialized instructions for AI agents to write, migrate, and optimize Valibot schemas according to the latest best practices.

#### How to use it

To help you get started, here are some examples of how the LLMs.txt files can be used with various AI tools.

> Please help us by adding more examples of other AI tools. If you use a tool that supports LLMs.txt files, please [open a pull request](https://github.com/open-circle/valibot/pulls) to add it to this page.

##### Cursor

You can add a custom documentation as context in Cursor using the `@Docs` feature. Read more about it [here](https://docs.cursor.com/context/@-symbols/@-docs).
