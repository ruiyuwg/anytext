## Session Options

[Section titled “Session Options”](#session-options)

**Added in:** `astro@5.7.0`

Configures session storage for your Astro project. This is used to store session data in a persistent way, so that it can be accessed across different requests. Some adapters may provide a default session driver, but you can override it with your own configuration.

See [the sessions guide](/en/guides/sessions/) for more information.

astro.config.mjs

```js
  {
    session: {
      // The name of the Unstorage driver
      driver: 'redis',
      // The required options depend on the driver
      options: {
        url: process.env.REDIS_URL,
      },
      ttl: 3600, // 1 hour
    }
  }
```

### session.driver

[Section titled “session.driver”](#sessiondriver)

**Type:** `string | undefined`

**Added in:** `astro@5.7.0`

The Unstorage driver to use for session storage. The [Node](/en/guides/integrations-guide/node/#sessions), [Cloudflare](/en/guides/integrations-guide/cloudflare/#sessions), and [Netlify](/en/guides/integrations-guide/netlify/#sessions) adapters automatically configure a default driver for you, but you can specify your own if you would prefer or if you are using an adapter that does not provide one.

The value is the “Driver name” from the [Unstorage driver documentation](https://unstorage.unjs.io/drivers).

astro.config.mjs

```diff
{
  adapter: vercel(),
  session: {
+    driver: "redis",
  },
}
```

Note

Some drivers may need extra packages to be installed. Some drivers may also require environment variables or credentials to be set. See the [Unstorage documentation](https://unstorage.unjs.io/drivers) for more information.

### session.options

[Section titled “session.options”](#sessionoptions)

**Type:** `Record<string, unknown> | undefined`\
**Default:** `{}`

**Added in:** `astro@5.7.0`

The driver-specific options to use for session storage. The options depend on the driver you are using. See the [Unstorage documentation](https://unstorage.unjs.io/drivers) for more information on the options available for each driver.

astro.config.mjs

```diff
{
   session: {
     driver: "redis",
+     options: {
+       url: process.env.REDIS_URL
+     },
   }
}
```

### session.cookie

[Section titled “session.cookie”](#sessioncookie)

**Type:** `string | AstroCookieSetOptions | undefined`\
**Default:** `{ name: "astro-session", sameSite: "lax", httpOnly: true, secure: true }`

**Added in:** `astro@5.7.0`

The session cookie configuration. If set to a string, it will be used as the cookie name. Alternatively, you can pass an object with additional options. These will be merged with the defaults.

astro.config.mjs

```diff
{
 session: {
   +// If set to a string, it will be used as the cookie name.
+   cookie: "my-session-cookie",
 }
}
```

astro.config.mjs

```diff
{
 session: {
   // If set to an object, it will be used as the cookie options.
+   cookie: {
+     name: "my-session-cookie",
+     sameSite: "lax",
+     secure: true,
+   }
 }
}
```

### session.ttl

[Section titled “session.ttl”](#sessionttl)

**Type:** `number | undefined`\
**Default:** Infinity

**Added in:** `astro@5.7.0`

An optional default time-to-live expiration period for session values, in seconds.

By default, session values persist until they are deleted or the session is destroyed, and do not automatically expire because a particular amount of time has passed. Set `session.ttl` to add a default expiration period for your session values. Passing a `ttl` option to [`session.set()`](/en/reference/api-reference/#set) will override the global default for that individual entry.

astro.config.mjs

```diff
{
 session: {
   +// Set a default expiration period of 1 hour (3600 seconds)
+   ttl: 3600,
 }
}
```

Note

Setting a value for `ttl` does not automatically delete the value from storage after the time limit has passed.

Values from storage will only be deleted when there is an attempt to access them after the `ttl` period has expired. At this time, the session value will be undefined and only then will the value be deleted.

Individual drivers may also support a `ttl` option that will automatically delete sessions after the specified time. See your chosen driver’s documentation for more information.

## Dev Toolbar Options

[Section titled “Dev Toolbar Options”](#dev-toolbar-options)

### devToolbar.enabled

[Section titled “devToolbar.enabled”](#devtoolbarenabled)

**Type:** `boolean`\
**Default:** `true`

Whether to enable the Astro Dev Toolbar. This toolbar allows you to inspect your page islands, see helpful audits on performance and accessibility, and more.

This option is scoped to the entire project, to only disable the toolbar for yourself, run `npm run astro preferences disable devToolbar`. To disable the toolbar for all your Astro projects, run `npm run astro preferences disable devToolbar --global`.

### devToolbar.placement

[Section titled “devToolbar.placement”](#devtoolbarplacement)

**Type:** `'bottom-left' | 'bottom-center' | 'bottom-right'`\
**Default:** `'bottom-center'`

**Added in:** `astro@5.17.0`

The default placement of the Astro Dev Toolbar on the screen.

The placement of the toolbar can still be changed via the toolbar settings UI. Once changed, the user’s preference is saved in `localStorage` and overrides this configuration value.
