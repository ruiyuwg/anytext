## Learn By Example[​](#learn-by-example "Direct link to Learn By Example")

The best way to learn the Fastify type system is by example! The following four examples should cover the most common Fastify development cases. After the examples there is further, more detailed documentation for the type system.

### Getting Started[​](#getting-started "Direct link to Getting Started")

This example will get you up and running with Fastify and TypeScript. It results in a blank http Fastify server.

1. Create a new npm project, install Fastify, and install typescript & Node.js types as peer dependencies:

```
npm init -y
npm i fastify
npm i -D typescript @types/node
```

2. Add the following lines to the `"scripts"` section of the `package.json`:

```
{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  }
}
```

3. Initialize a TypeScript configuration file:

```
npx tsc --init
```

or use one of the [recommended ones](https://github.com/tsconfig/bases#node-14-tsconfigjson).

*Note: Set `target` property in `tsconfig.json` to `es2017` or greater to avoid [FastifyDeprecation](https://github.com/fastify/fastify/issues/3284) warning.*

4. Create an `index.ts` file - this will contain the server code
5. Add the following code block to your file:

   ```
   import fastify from 'fastify'

   const server = fastify()

   server.get('/ping', async (request, reply) => {
     return 'pong\n'
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(1)
     }
     console.log(`Server listening at ${address}`)
   })
   ```
6. Run `npm run build` - this will compile `index.ts` into `index.js` which can be executed using Node.js. If you run into any errors please open an issue in [fastify/help](https://github.com/fastify/help/)
7. Run `npm run start` to run the Fastify server
8. You should see `Server listening at http://127.0.0.1:8080` in your console
9. Try out your server using `curl localhost:8080/ping`, it should return `pong` 🏓

🎉 You now have a working Typescript Fastify server! This example demonstrates the simplicity of the version 3.x type system. By default, the type system assumes you are using an `http` server. The later examples will demonstrate how to create more complex servers such as `https` and `http2`, how to specify route schemas, and more!

> For more examples on initializing Fastify with TypeScript (such as enabling HTTP2) check out the detailed API section [here](#fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance)

### Using Generics[​](#using-generics "Direct link to Using Generics")

The type system heavily relies on generic properties to provide the most accurate development experience. While some may find the overhead a bit cumbersome, the tradeoff is worth it! This example will dive into implementing generic types for route schemas and the dynamic properties located on the route-level `request` object.

1. If you did not complete the previous example, follow steps 1-4 to get set up.

2. Inside `index.ts`, define three interfaces `IQuerystring`,`IHeaders` and `IReply`:

   ```
   interface IQuerystring {
     username: string;
     password: string;
   }

   interface IHeaders {
     'h-Custom': string;
   }

   interface IReply {
     200: { success: boolean };
     302: { url: string };
     '4xx': { error: string };
   }
   ```

3. Using the three interfaces, define a new API route and pass them as generics. The shorthand route methods (i.e. `.get`) accept a generic object `RouteGenericInterface` containing five named properties: `Body`, `Querystring`, `Params`, `Headers` and `Reply`. The interfaces `Body`, `Querystring`, `Params` and `Headers` will be passed down through the route method into the route method handler `request` instance and the `Reply` interface to the `reply` instance.

   ```
   server.get<{
     Querystring: IQuerystring,
     Headers: IHeaders,
     Reply: IReply
   }>('/auth', async (request, reply) => {
     const { username, password } = request.query
     const customerHeader = request.headers['h-Custom']
     // do something with request data

     // chaining .statusCode/.code calls with .send allows type narrowing. For example:
     // this works
     reply.code(200).send({ success: true });
     // but this gives a type error
     reply.code(200).send('uh-oh');
     // it even works for wildcards
     reply.code(404).send({ error: 'Not found' });
     return `logged in!`
   })
   ```

4. Build and run the server code with `npm run build` and `npm run start`

5. Query the API

   ```
   curl localhost:8080/auth?username=admin&password=Password123!
   ```

   And it should return back `logged in!`

6. But wait there's more! The generic interfaces are also available inside route level hook methods. Modify the previous route by adding a `preValidation` hook:

   ```
   server.get<{
     Querystring: IQuerystring,
     Headers: IHeaders,
     Reply: IReply
   }>('/auth', {
     preValidation: (request, reply, done) => {
       const { username, password } = request.query
       done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
     }
   }, async (request, reply) => {
     const customerHeader = request.headers['h-Custom']
     // do something with request data
     return `logged in!`
   })
   ```

7. Build and run and query with the `username` query string option set to anything other than `admin`. The API should now return a HTTP 500 error `{"statusCode":500,"error":"Internal Server Error","message":"Must be admin"}`

🎉 Good work, now you can define interfaces for each route and have strictly typed request and reply instances. Other parts of the Fastify type system rely on generic properties. Make sure to reference the detailed type system documentation below to learn more about what is available.

### JSON Schema[​](#json-schema "Direct link to JSON Schema")

To validate your requests and responses you can use JSON Schema files. If you didn't know already, defining schemas for your Fastify routes can increase their throughput! Check out the [Validation and Serialization](/docs/v5.1.x/Reference/Validation-and-Serialization/.md) documentation for more info.

Also it has the advantage to use the defined type within your handlers (including pre-validation, etc.).

Here are some options on how to achieve this.

#### Fastify Type Providers[​](#fastify-type-providers "Direct link to Fastify Type Providers")

Fastify offers two packages wrapping `json-schema-to-ts` and `typebox`:

- [`@fastify/type-provider-json-schema-to-ts`](https://github.com/fastify/fastify-type-provider-json-schema-to-ts)
- [`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox)

And a `zod` wrapper by a third party called [`fastify-type-provider-zod`](https://github.com/turkerdev/fastify-type-provider-zod)

They simplify schema validation setup and you can read more about them in [Type Providers](/docs/v5.1.x/Reference/Type-Providers/.md) page.

Below is how to setup schema validation using the `typebox`, `json-schema-to-typescript`, and `json-schema-to-ts` packages without type providers.

#### TypeBox[​](#typebox "Direct link to TypeBox")

A useful library for building types and a schema at once is [TypeBox](https://www.npmjs.com/package/@sinclair/typebox). With TypeBox you define your schema within your code and use them directly as types or schemas as you need them.

When you want to use it for validation of some payload in a fastify route you can do it as follows:

1. Install `typebox` in your project.

   ```
   npm i @sinclair/typebox
   ```

2. Define the schema you need with `Type` and create the respective type with `Static`.

   ```
   import { Static, Type } from '@sinclair/typebox'

   export const User = Type.Object({
     name: Type.String(),
     mail: Type.Optional(Type.String({ format: 'email' })),
   })

   export type UserType = Static
   ```

3. Use the defined type and schema during the definition of your route

   ```
   import Fastify from 'fastify'
   // ...

   const fastify = Fastify()

   fastify.post<{ Body: UserType, Reply: UserType }>(
     '/',
     {
       schema: {
         body: User,
         response: {
           200: User
         },
       },
     },
     (request, reply) => {
       // The `name` and `mail` types are automatically inferred
       const { name, mail } = request.body;
       reply.status(200).send({ name, mail });
     }
   )
   ```

#### json-schema-to-typescript[​](#json-schema-to-typescript "Direct link to json-schema-to-typescript")

In the last example we used Typebox to define the types and schemas for our route. Many users will already be using JSON Schemas to define these properties, and luckily there is a way to transform existing JSON Schemas into TypeScript interfaces!

1. If you did not complete the 'Getting Started' example, go back and follow steps 1-4 first.

2. Install the `json-schema-to-typescript` module:

   ```
   npm i -D json-schema-to-typescript
   ```

3. Create a new folder called `schemas` and add two files `headers.json` and `querystring.json`. Copy and paste the following schema definitions into the respective files:

   ```
   {
     "title": "Headers Schema",
     "type": "object",
     "properties": {
       "h-Custom": { "type": "string" }
     },
     "additionalProperties": false,
     "required": ["h-Custom"]
   }
   ```

   ```
   {
     "title": "Querystring Schema",
     "type": "object",
     "properties": {
       "username": { "type": "string" },
       "password": { "type": "string" }
     },
     "additionalProperties": false,
     "required": ["username", "password"]
   }
   ```

4. Add a `compile-schemas` script to the package.json:

```
   {
     "scripts": {
       "compile-schemas": "json2ts -i schemas -o types"
     }
   }
```

`json2ts` is a CLI utility included in `json-schema-to-typescript`. `schemas` is the input path, and `types` is the output path. 5. Run `npm run compile-schemas`. Two new files should have been created in the `types` directory. 6. Update `index.ts` to have the following code:

```
   import fastify from 'fastify'

   // import json schemas as normal
   import QuerystringSchema from './schemas/querystring.json'
   import HeadersSchema from './schemas/headers.json'

   // import the generated interfaces
   import { QuerystringSchema as QuerystringSchemaInterface } from './types/querystring'
   import { HeadersSchema as HeadersSchemaInterface } from './types/headers'

   const server = fastify()

   server.get<{
     Querystring: QuerystringSchemaInterface,
     Headers: HeadersSchemaInterface
   }>('/auth', {
     schema: {
       querystring: QuerystringSchema,
       headers: HeadersSchema
     },
     preValidation: (request, reply, done) => {
       const { username, password } = request.query
       done(username !== 'admin' ? new Error('Must be admin') : undefined)
     }
     //  or if using async
     //  preValidation: async (request, reply) => {
     //    const { username, password } = request.query
     //    if (username !== "admin") throw new Error("Must be admin");
     //  }
   }, async (request, reply) => {
     const customerHeader = request.headers['h-Custom']
     // do something with request data
     return `logged in!`
   })

   server.route<{
     Querystring: QuerystringSchemaInterface,
     Headers: HeadersSchemaInterface
   }>({
     method: 'GET',
     url: '/auth2',
     schema: {
       querystring: QuerystringSchema,
       headers: HeadersSchema
     },
     preHandler: (request, reply, done) => {
       const { username, password } = request.query
       const customerHeader = request.headers['h-Custom']
       done()
     },
     handler: (request, reply) => {
       const { username, password } = request.query
       const customerHeader = request.headers['h-Custom']
       reply.status(200).send({username});
     }
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(0)
     }
     console.log(`Server listening at ${address}`)
   })
```

Pay special attention to the imports at the top of this file. It might seem redundant, but you need to import both the schema files and the generated interfaces.

Great work! Now you can make use of both JSON Schemas and TypeScript definitions.

#### json-schema-to-ts[​](#json-schema-to-ts "Direct link to json-schema-to-ts")

If you do not want to generate types from your schemas, but want to use them directly from your code, you can use the package [json-schema-to-ts](https://www.npmjs.com/package/json-schema-to-ts).

You can install it as dev-dependency.

```
npm i -D json-schema-to-ts
```

In your code you can define your schema like a normal object. But be aware of making it *const* like explained in the docs of the module.

```
const todo = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    done: { type: 'boolean' },
  },
  required: ['name'],
} as const; // don't forget to use const !
```

With the provided type `FromSchema` you can build a type from your schema and use it in your handler.

```
import { FromSchema } from "json-schema-to-ts";
fastify.post<{ Body: FromSchema<typeof todo> }>(
  '/todo',
  {
    schema: {
      body: todo,
      response: {
        201: {
          type: 'string',
        },
      },
    }
  },
  async (request, reply): Promise<void> => {

    /*
    request.body has type
    {
      [x: string]: unknown;
      description?: string;
      done?: boolean;
      name: string;
    }
    */

    request.body.name // will not throw type error
    request.body.notthere // will throw type error

    reply.status(201).send();
  },
);
```

### Plugins[​](#plugins "Direct link to Plugins")

One of Fastify's most distinguishable features is its extensive plugin ecosystem. Plugin types are fully supported, and take advantage of the [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) pattern. This example is broken up into three parts: Creating a TypeScript Fastify Plugin, Creating Type Definitions for a Fastify Plugin, and Using a Fastify Plugin in a TypeScript Project.

#### Creating a TypeScript Fastify Plugin[​](#creating-a-typescript-fastify-plugin "Direct link to Creating a TypeScript Fastify Plugin")

1. Initialize a new npm project and install required dependencies

   ```
   npm init -y
   npm i fastify fastify-plugin
   npm i -D typescript @types/node
   ```

2. Add a `build` script to the `"scripts"` section and `'index.d.ts'` to the `"types"` section of the `package.json` file:

   ```
   {
     "types": "index.d.ts",
     "scripts": {
       "build": "tsc -p tsconfig.json"
     }
   }
   ```

3. Initialize a TypeScript configuration file:

   ```
   npx typescript --init
   ```

   Once the file is generated, enable the `"declaration"` option in the `"compilerOptions"` object.

   ```
   {
     "compilerOptions": {
       "declaration": true
     }
   }
   ```

4. Create an `index.ts` file - this will contain the plugin code

5. Add the following code to `index.ts`
   ```
   import { FastifyPluginCallback, FastifyPluginAsync } from 'fastify'
   import fp from 'fastify-plugin'

   // using declaration merging, add your plugin props to the appropriate fastify interfaces
   // if prop type is defined here, the value will be typechecked when you call decorate{,Request,Reply}
   declare module 'fastify' {
     interface FastifyRequest {
       myPluginProp: string
     }
     interface FastifyReply {
       myPluginProp: number
     }
   }

   // define options
   export interface MyPluginOptions {
     myPluginOption: string
   }

   // define plugin using callbacks
   const myPluginCallback: FastifyPluginCallback = (fastify, options, done) => {
     fastify.decorateRequest('myPluginProp', 'super_secret_value')
     fastify.decorateReply('myPluginProp', options.myPluginOption)

     done()
   }

   // define plugin using promises
   const myPluginAsync: FastifyPluginAsync = async (fastify, options) => {
     fastify.decorateRequest('myPluginProp', 'super_secret_value')
     fastify.decorateReply('myPluginProp', options.myPluginOption)
   }

   // export plugin using fastify-plugin
   export default fp(myPluginCallback, '3.x')
   // or
   // export default fp(myPluginAsync, '3.x')
   ```

6. Run `npm run build` to compile the plugin code and produce both a JavaScript source file and a type definition file.

7. With the plugin now complete you can \[publish to npm] or use it locally.

   > You do not *need* to publish your plugin to npm to use it. You can include it in a Fastify project and reference it as you would any piece of code! As a TypeScript user, make sure the declaration override exists somewhere that will be included in your project compilation so the TypeScript interpreter can process it.

#### Creating Type Definitions for a Fastify Plugin[​](#creating-type-definitions-for-a-fastify-plugin "Direct link to Creating Type Definitions for a Fastify Plugin")

This plugin guide is for Fastify plugins written in JavaScript. The steps outlined in this example are for adding TypeScript support for users consuming your plugin.

1. Initialize a new npm project and install required dependencies

   ```
   npm init -y
   npm i fastify-plugin
   ```
2. Create two files `index.js` and `index.d.ts`
3. Modify the package json to include these files under the `main` and `types` properties (the name does not have to be `index` explicitly, but it is recommended the files have the same name):

   ```
   {
     "main": "index.js",
     "types": "index.d.ts"
   }
   ```
4. Open `index.js` and add the following code:

   ```
   // fastify-plugin is highly recommended for any plugin you write
   const fp = require('fastify-plugin')

   function myPlugin (instance, options, done) {

     // decorate the fastify instance with a custom function called myPluginFunc
     instance.decorate('myPluginFunc', (input) => {
       return input.toUpperCase()
     })

     done()
   }

   module.exports = fp(myPlugin, {
     fastify: '5.x',
     name: 'my-plugin' // this is used by fastify-plugin to derive the property name
   })
   ```
5. Open `index.d.ts` and add the following code:

   ```
   import { FastifyPluginCallback } from 'fastify'

   interface PluginOptions {
     //...
   }

   // Optionally, you can add any additional exports.
   // Here we are exporting the decorator we added.
   export interface myPluginFunc {
     (input: string): string
   }

   // Most importantly, use declaration merging to add the custom property to the Fastify type system
   declare module 'fastify' {
     interface FastifyInstance {
       myPluginFunc: myPluginFunc
     }
   }

   // fastify-plugin automatically adds named export, so be sure to add also this type
   // the variable name is derived from `options.name` property if `module.exports.myPlugin` is missing
   export const myPlugin: FastifyPluginCallback

   // fastify-plugin automatically adds `.default` property to the exported plugin. See the note below
   export default myPlugin
   ```

**Note**: [fastify-plugin](https://github.com/fastify/fastify-plugin) v2.3.0 and newer, automatically adds `.default` property and a named export to the exported plugin. Be sure to `export default` and `export const myPlugin` in your typings to provide the best developer experience. For a complete example you can check out [@fastify/swagger](https://github.com/fastify/fastify-swagger/blob/master/index.d.ts).

With those files completed, the plugin is now ready to be consumed by any TypeScript project!

The Fastify plugin system enables developers to decorate the Fastify instance, and the request/reply instances. For more information check out this blog post on [Declaration Merging and Generic Inheritance](https://dev.to/ethanarrowood/is-declaration-merging-and-generic-inheritance-at-the-same-time-impossible-53cp).

#### Using a Plugin[​](#using-a-plugin "Direct link to Using a Plugin")

Using a Fastify plugin in TypeScript is just as easy as using one in JavaScript. Import the plugin with `import/from` and you're all set -- except there is one exception users should be aware of.

Fastify plugins use declaration merging to modify existing Fastify type interfaces (check out the previous two examples for more details). Declaration merging is not very *smart*, meaning if the plugin type definition for a plugin is within the scope of the TypeScript interpreter, then the plugin types will be included **regardless** of if the plugin is being used or not. This is an unfortunate limitation of using TypeScript and is unavoidable as of right now.

However, there are a couple of suggestions to help improve this experience:

- Make sure the `no-unused-vars` rule is enabled in [ESLint](https://eslint.org/docs/rules/no-unused-vars) and any imported plugin are actually being loaded.
- In case you've the `@typescript-eslint/no-floating-promises` enabled, please double-check that your ESLint configuration includes a `allowForKnownSafePromises` property as described on the [`typescript-eslint no-floating-promises allowForKnownSafePromises documentation`](https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafepromises):

```
{
  "rules": {
    "@typescript-eslint/no-floating-promises": ["error", {
      "allowForKnownSafePromises": [
        { "from": "package", "name": "FastifyInstance", "package": "fastify" },
        { "from": "package", "name": "FastifyReply", "package": "fastify" },
        { "from": "package", "name": "SafePromiseLike", "package": "fastify" },
      ]
    }]
  }
}
```

- Use a module such as [depcheck](https://www.npmjs.com/package/depcheck) or [npm-check](https://www.npmjs.com/package/npm-check) to verify plugin dependencies are being used somewhere in your project.

Note that using `require` will not load the type definitions properly and may cause type errors. TypeScript can only identify the types that are directly imported into code, which means that you can use require inline with import on top. For example:

```
import 'plugin' // here will trigger the type augmentation.

fastify.register(require('plugin'))
```

```
import plugin from 'plugin' //  here will trigger the type augmentation.

fastify.register(plugin)
```

Or even explicit config on tsconfig

```
{
  "types": ["plugin"] // we force TypeScript to import the types
}
```

## Code Completion In Vanilla JavaScript[​](#code-completion-in-vanilla-javascript "Direct link to Code Completion In Vanilla JavaScript")

Vanilla JavaScript can use the published types to provide code completion (e.g. [Intellisense](https://code.visualstudio.com/docs/editor/intellisense)) by following the [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).

For example:

```
/**  @type {import('fastify').FastifyPluginAsync<{ optionA: boolean, optionB: string }>} */
module.exports = async function (fastify, { optionA, optionB }) {
  fastify.get('/look', () => 'at me');
}
```
