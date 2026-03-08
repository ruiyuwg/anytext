# React Compiler and Sanity

Sanity Studio v3.65.0 introduced support for the [React Compiler](https://react.dev/learn/react-compiler/introduction). The compiler improves performance by automatically optimizing component rendering. This reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback`.

If you use @sanity/pkg-utils and/or @sanity/plugin-kit to distribute custom plugins and tools on npm then it's also possible to use the compiler there.

## Sanity Studio

Install the babel and ESLint plugins for the compiler

```sh
npm install --save-dev babel-plugin-react-compiler eslint-plugin-react-hooks
```

Setup your ESLint config to include the compiler, it’s included in the recommended preset

**eslint.config.js**

```javascript
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  reactHooks.configs.flat.recommended,
]);
```

You don't need to fix all the warnings before you can start using the compiler, you can incrementally adopt it.

It's also recommended that you have [strictNullChecks](https://react.dev/learn/react-compiler#:~:text=example%2C%20by%20enabling-,strictNullChecks,-if%20using%20TypeScript) enabled.

### React 18

Install the [react-compiler-runtime package as a direct dependency](https://react.dev/reference/react-compiler/target#targeting-react-17-or-18)

```sh
npm install react-compiler-runtime
```

And add `reactCompiler` to your `sanity.cli.ts` configuration, and set `target` to `'18'`

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
   api: {
      projectId: 'abc123',
      dataset: 'production',
   },
   reactStrictMode: true,
   reactCompiler: {target: '18'},
})
```

### React 19

And add `reactCompiler` to your `sanity.cli.ts` configuration, and set `target` to `'19'`

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
   api: {
      projectId: 'abc123',
      dataset: 'production',
   },
   reactStrictMode: true,
   reactCompiler: {target: '19'},
})
```

Since React 19 has the compiler runtime built in there's no need to install `react-compiler-runtime`.

### Embedded Studios

If your studio is hosted inside something like a Next.js, Remix app or otherwise not using `sanity build` and `sanity dev` commands?

If so you'll have to enable the compiler through one of the methods documented [here](https://react.dev/learn/react-compiler/installation).

## Publishing Sanity plugins and tools

[Since the compiler needs to run on the original source code it's not possible for Sanity Studio's to compile the libraries they use.](https://react.dev/reference/react-compiler/compiling-libraries) Instead, library authors need to ship compiled code to npm.

At Sanity we use @sanity/pkg-utils to build our libraries. It handles ESM, CJS, and even the React Compiler. Libraries like react-rx, @sanity/ui and @portabletext/editor, sanity, and @sanity/vision, are already shipping compiled code this way.

Start off by installing the ESLint and Babel plugins

```sh
npm install --save-dev babel-plugin-react-compiler eslint-plugin-react-hooks
```

Since v7 of `eslint-plugin-react-hooks` the new React Compiler checks are included in the `recommended` preset.

**eslint.config.js**

```javascript
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  reactHooks.configs.flat.recommended,
]);
```

You don't need to fix all the warnings before you can start using the compiler, you can incrementally adopt it.

It's also recommended that you have [strictNullChecks](https://react.dev/learn/react-compiler#:~:text=example%2C%20by%20enabling-,strictNullChecks,-if%20using%20TypeScript) enabled.

You also need to install the react-compiler-runtime if you support react 18

```sh
npm install react-compiler-runtime
```

It's very important that the direct dependency you use, use an exact version number.

Next, you add two lines of code to your `package.config.ts`

```typescript
import {defineConfig} from '@sanity/pkg-utils'

export default defineConfig({
  // ... other stuff
  babel: {reactCompiler: true},
  reactCompilerOptions: {target: '18'}, // matches the minimum `react` major your library requires
})

```

## Troubleshooting

[Follow the official troubleshooting docs in case you run into problems.](https://react.dev/learn/react-compiler/debugging) In our experience it's incredibly rare for the compiler to create a regression, it typically choses to skip over optimizing components it deems unsafe, or too complex to safely memoize.

Should a rare problem occur it's often enough to add `'use no memo'` at the top of the affected file, to buy you time and find the fix. And then use ESLint with `eslint-plugin-react-hooks` to find issues that could be the root cause. Running React Strict Mode is also incredibly helpful to uncover root issues.

# Specify API version for studio client

In a previous version of the Sanity content studio, you could import a global, preconfigured Sanity client instance by importing `part:@sanity/base/client`.

Having a global client use a single API version is both restrictive and prevents utilizing the latest and greatest features of the Sanity API. This is why we have now deprecated using the global studio client without explicitly defining an API version to use.

## Old usage:

```javascript
import client from 'part:@sanity/base/client'

client.fetch('*[_type == "author"][0...10]')

```

## New usage:

```javascript
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})

client.fetch('*[_type == "author"][0...10]')

```

Details about getting your versioned client set up can be found under [API Versioning](https://www.sanity.io/docs/content-lake/api-versioning) and the [JavaScript Client](https://www.sanity.io/docs/js-client#api).

# Why give schema types a title?

We recommend to always give your schema types and fields a descriptive title. The title is used in different UI contexts, e.g on buttons and menus.

The title must be a string.

# Array type has a invalid value for property "of"

All array types must define what kind of items they may contain. The "`of`" property must be an array of objects that describes the type of a valid item. Each entry in `of`, must have a `type`-property which must be the name of a valid schema type.

```javascript
{
  type: 'array',
  name: 'items',
  of: [ // The "of"-property must be set, and it must be an array
    {
      type: 'author', // type is required
      title: 'Author'
    },
    {
      type: 'book',
      title: 'Book'
    }
  ]
}
```

Types must be unique, or named

In order to know which type description an array item belongs to, you can not add multiple entries to of with the same name, unless giving them a name to tell them apart. This is therefore not allowed:

```javascript
{
  type: 'array',
  name: 'items',
  of: [
    {
      type: 'author',
      title: 'Author'
    },
    {
      type: 'author', // 💥 ERROR will not be able to tell array items apart
      title: 'Another author'
    }
  ]
}
```

Instead, you can give items of the same type another name. This will work:

```javascript
{
  type: 'array',
  name: 'items',
  of: [
    {
      type: 'author',
      title: 'Author'
    },
    {
      type: 'author',
      name: 'anotherAuthor', // all good
      title: 'Another author'
    }
  ]
}
```

Items in this array will have their `_type` set to either `author` or `anotherAuthor`, depending on which of the types were selected when the item was added  e.g.:

```json
[
  {"_type": "author", "name": "Camilla Collett"},
  {"_type": "anotherAuthor", "name": "Henrik Ibsen"}
]
```
