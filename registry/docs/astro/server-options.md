## Server Options

[Section titled “Server Options”](#server-options)

Customize the Astro dev server, used by both `astro dev` and `astro preview`.

```js
{
  server: { port: 1234, host: true}
}
```

To set different configuration based on the command run (“dev”, “preview”) a function can also be passed to this configuration option.

```js
{
  // Example: Use the function syntax to customize based on command
  server: ({ command }) => ({ port: command === 'dev' ? 4321 : 4000 })
}
```

### server.host

[Section titled “server.host”](#serverhost)

**Type:** `string | boolean`\
**Default:** `false`

**Added in:** `astro@0.24.0`

Set which network IP addresses the server should listen on (i.e. non-localhost IPs).

- `false` - do not expose on a network IP address
- `true` - listen on all addresses, including LAN and public addresses
- `[custom-address]` - expose on a network IP address at `[custom-address]` (ex: `192.168.0.1`)

### server.port

[Section titled “server.port”](#serverport)

**Type:** `number`\
**Default:** `4321`

Set which port the server should listen on.

If the given port is already in use, Astro will automatically try the next available port.

```js
{
  server: { port: 8080 }
}
```

### server.allowedHosts

[Section titled “server.allowedHosts”](#serverallowedhosts)

**Type:** `Array<string> | true`\
**Default:** `[]`

**Added in:** `astro@5.4.0`

A list of hostnames that Astro is allowed to respond to. When the value is set to `true`, any hostname is allowed.

```js
{
  server: {
    allowedHosts: ['staging.example.com', 'qa.example.com']
  }
}
```

### server.open

[Section titled “server.open”](#serveropen)

**Type:** `string | boolean`\
**Default:** `false`

**Added in:** `astro@4.1.0`

Controls whether the dev server should open in your browser window on startup.

Pass a full URL string (e.g. “<http://example.com>”) or a pathname (e.g. “/about”) to specify the URL to open.

```js
{
  server: { open: "/about" }
}
```

### server.headers

[Section titled “server.headers”](#serverheaders)

**Type:** `OutgoingHttpHeaders`\
**Default:** `{}`

**Added in:** `astro@1.7.0`

Set custom HTTP response headers to be sent in `astro dev` and `astro preview`.
