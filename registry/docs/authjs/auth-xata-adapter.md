[API reference](/reference/overview "API reference")@auth/xata-adapter

# @auth/xata-adapter

Official [Xata](https://xata.io/docs/overview) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/xata.svg)](https://xata.io/)

## Installation[](#installation)

1.  Install Auth.js and the Xata adapter

npmpnpmyarnbun

```
npm install @auth/xata-adapter
```

```
pnpm add @auth/xata-adapter
```

```
yarn add @auth/xata-adapter
```

```
bun add @auth/xata-adapter
```

2.  Install the Xata CLI globally if you don’t already have it

npmpnpmyarnbun

```
npm install -g @xata.io/cli
```

```
pnpm add -g @xata.io/cli
```

```
yarn global add @xata.io/cli
```

```
bun add --global @xata.io/cli
```

3.  Login

```
xata auth login
```

## XataAdapter()[](#xataadapter)

```
function XataAdapter(client): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

[`XataClient`](xata-adapter/xata#xataclient)

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

[@auth/upstash-redis-adapter](/reference/upstash-redis-adapter "@auth/upstash-redis-adapter")[xata](/reference/xata-adapter/xata "xata")
