### `astro:server:setup`

[Section titled “astro:server:setup”](#astroserversetup)

**Previous hook:** [`astro:config:done`](#astroconfigdone)

**Next hook:** [`astro:server:start`](#astroserverstart)

**When:** Just after the Vite server is created in “dev” mode, but before the `listen()` event is fired. [See Vite’s createServer API](https://vite.dev/guide/api-javascript.html#createserver) for more.

**Why:** To update Vite server options and middleware, or enable support for refreshing the content layer.

```js
'astro:server:setup'?: (options: {
  server: vite.ViteDevServer;
  logger: AstroIntegrationLogger;
  toolbar: ReturnType<typeof getToolbarServerCommunicationHelpers>;
  refreshContent: (options: {
    loaders?: Array<string>;
    context?: Record<string, any>;
  }) => Promise<void>;
}) => void | Promise<void>;
```

#### `server` option

[Section titled “server option”](#server-option)

**Type:** [`ViteDevServer`](https://vite.dev/guide/api-javascript.html#vitedevserver)

A mutable instance of the Vite server used in “dev” mode. For instance, this is [used by our Partytown integration](/en/guides/integrations-guide/partytown/) to inject the Partytown server as middleware:

```js
export default {
  name: 'partytown',
  hooks: {
    'astro:server:setup': ({ server }) => {
      server.middlewares.use(
        function middleware(req, res, next) {
          // handle requests
        }
      );
    }
  }
}
```

#### `toolbar` option

[Section titled “toolbar option”](#toolbar-option)

**Type:** `ReturnType<typeof getToolbarServerCommunicationHelpers>`

**Added in:** `astro@4.7.0`

An object providing callback functions to interact with the [dev toolbar](/en/reference/dev-toolbar-app-reference/):

##### `toolbar.on()`

[Section titled “toolbar.on()”](#toolbaron)

**Type:** `<T>(event: string, callback: (data: T) => void) => void`

A function that takes an event name as first argument and a callback function as second argument. This allows you to receive a message from a dev toolbar app with data associated to that event.

##### `toolbar.onAppInitialized()`

[Section titled “toolbar.onAppInitialized()”](#toolbaronappinitialized)

**Type:** `(appId: string, callback: (data: Record<string, never>) => void) => void`

A function fired when a dev toolbar app is initialized. The first argument is the id of the app that was initialized. The second argument is a callback function to run when the app is initialized.

##### `toolbar.onAppToggled()`

[Section titled “toolbar.onAppToggled()”](#toolbaronapptoggled)

**Type:** `(appId: string, callback: (data: { state: boolean; }) => void) => void`

A function fired when a dev toolbar app is toggled on or off. The first argument is the id of the app that was toggled. The second argument is a callback function providing the state to execute when the application is toggled.

##### `toolbar.send()`

[Section titled “toolbar.send()”](#toolbarsend)

**Type:** `<T>(event: string, payload: T) => void`

A function that sends a message to the dev toolbar that an app can listen for. This takes an event name as the first argument and a payload as the second argument which can be any serializable data.

#### `refreshContent()` option

[Section titled “refreshContent() option”](#refreshcontent-option)

**Type:** `(options: { loaders?: Array<string>; context?: Record<string, any>; }) => Promise<void>`

**Added in:** `astro@5.0.0`

A function for integrations to trigger an update to the content layer during `astro dev`. This can be used, for example, to register a webhook endpoint during dev, or to open a socket to a CMS to listen for changes.

By default, `refreshContent()` will refresh all collections. You can optionally pass a `loaders` property, which is an array of loader names. If provided, only collections that use those loaders will be refreshed. For example, A CMS integration could use this property to only refresh its own collections.

You can also pass a `context` object to the loaders. This can be used to pass arbitrary data such as the webhook body, or an event from the websocket.

my-integration.ts

```ts
{
  name: 'my-integration',
  hooks: {
    'astro:server:setup': async ({ server, refreshContent }) => {
      // Register a dev server webhook endpoint
      server.middlewares.use('/_refresh', async (req, res) => {
        if(req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed');
          return
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const webhookBody = JSON.parse(body);
            await refreshContent({
              context: { webhookBody },
              loaders: ['my-loader']
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Content refreshed successfully' }));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to refresh content: ' + error.message }));
          }
        });
      });
    }
  }
}
```

The loader can then access the `refreshContextData` property to get the webhook body. See the [`refreshContextData`](/en/reference/content-loader-reference/#refreshcontextdata) property for more information.

### `astro:server:start`

[Section titled “astro:server:start”](#astroserverstart)

**Previous hook:** [`astro:server:setup`](#astroserversetup)

**Next hook:** [`astro:server:done`](#astroserverdone)

**When:** Just after the server’s `listen()` event has fired.

**Why:** To intercept network requests at the specified address. If you intend to use this address for middleware, consider using `astro:server:setup` instead.

```js
'astro:server:start'?: (options: {
  address: AddressInfo;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `address` option

[Section titled “address option”](#address-option)

**Type:** `AddressInfo`

The address, family and port number supplied by the [`server.address()` method of the Node.js Net module](https://nodejs.org/api/net.html#serveraddress).

### `astro:server:done`

[Section titled “astro:server:done”](#astroserverdone)

**Previous hook:** [`astro:server:start`](#astroserverstart)

**When:** Just after the dev server is closed.

**Why:** To run any cleanup events you may trigger during the `astro:server:setup` or `astro:server:start` hooks.

```js
'astro:server:done'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

### `astro:build:start`

[Section titled “astro:build:start”](#astrobuildstart)

**Previous hook:** [`astro:config:done`](#astroconfigdone)

**Next hook:** [`astro:build:setup`](#astrobuildsetup)

**When:** After the `astro:config:done` event, but before the production build begins.

**Why:** To set up any global objects or clients needed during a production build. This can also extend the build configuration options in the [adapter API](/en/reference/adapter-reference/).

```js
'astro:build:start'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```
