# Development

Sanity Studio is distributed as [a single package on npm](https://www.npmjs.com/package/sanity). It also comes with built-in tooling for local development based on [Vite](https://vitejs.dev). The package also exports the Studio as a React component, including a render function for mounting it on a DOM node in an HTML document.

> \[!TIP]
> Protip
> Sanity Studio always connects to a dataset in the hosted Content Lake, also when run locally. Your content is never stored locally. This means that you can have differences in the schema between a local and a hosted Studio. If the Studio finds content in a document that doesn't match its schema, it will display a warning.
> You can safely change schemas with the confidence that no existing content will be changed. To change content to comply with schema changes, you will need to run [a migration script](https://www.sanity.io/docs/content-lake/schema-and-content-migrations).

## Local development

You can start a local development server with the following command within the Studio project folder:

```sh
# For Studios initated with the CLI
npm run dev

# Alternative method
npx sanity dev
```

> \[!TIP]
> Official vscode extension
> Working in vscode or cursor? [Check out the official extension](https://open-vsx.org/extension/sanity-io/vscode-sanity/).

### To start the development server on a different port

The local development server will make the Studio available on `http://localhost:3333` by default. You can specify the port with the following command:

```sh
# For Studios initated with the CLI
npm run dev -- --port 3000

# Alternative method
npx sanity dev --port 3000
```

> \[!WARNING]
> Gotcha
> To run the Studio on a different port locally, you will have to [enable CORS origins for that domain with authenticated requests enabled](https://www.sanity.io/docs/content-lake/cors).
> You can add this with the Sanity CLI by running the following command in your Studio project folder:
> `npx sanity cors add http://localhost:3000 --credentials`

## Local production build

To build your Studio for production locally, run the following command in the Studio project folder:

```sh
# For Studios initated with the Sanity CLI
npm run build

# Alternative method
npx sanity build
```

The build command will bundle the Studio files into a dist folder by default. You can specify the production folder name (for example `public`) by passing it as a parameter:

```sh
# For Studios initated with the Sanity CLI
npm run build -- public

# To build the Studio to a folder named "public"
npx sanity build public
```

This can be useful if your hosting provider requires a specific filename when you are [self-hosting the Studio](https://www.sanity.io/docs/studio/deployment).

### Preview a production build locally

To preview the local \*production \*build, you can run the following command:

```sh
npx sanity preview

# To specify the folder ("./public") for the production build
npx sanity preview public
```

This will run a local server for the production build of the Studio on `http://localhost:3333` .

> \[!WARNING]
> Gotcha
> It's easy to forget that any changes you make to the Studio files won't get reflected when running the preview of the production build. To enable hot-module reloading, you have to run `npm run dev` or `npx sanity dev`.

## Customizing the built-in Vite configuration

To extend or change the built-in Vite configuration, you need [a configuration file for the Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli). Let‘s say you want to alias your root folder to enable relative imports like `import CustomComponent from '@/components/CustomComponent'`. The following code examples show you how you can overwrite certain properties in the Studio's Vite configuration to do so:

```javascript
// sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // the rest of the config...
  },
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    }
  },
})
```

You can learn more about configuring Vite [in their documentation](https://vitejs.dev/config/).
