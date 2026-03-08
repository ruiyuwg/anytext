[API reference](/reference/overview "API reference")@auth/prisma-adapter

# @auth/prisma-adapter

Official [Prisma](https://www.prisma.io/docs) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/prisma.svg)](https://www.prisma.io/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
```

```
pnpm add @prisma/client @auth/prisma-adapter
pnpm add prisma --save-dev
```

```
yarn add @prisma/client @auth/prisma-adapter
yarn add prisma --dev
```

```
bun add @prisma/client @auth/prisma-adapter
bun add prisma --dev
```

## PrismaAdapter()[](#prismaadapter)

```
function PrismaAdapter(prisma): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`prisma`

| `PrismaClient`<`PrismaClientOptions`, `never`, `DefaultArgs`\> | `DynamicClientExtensionThis`<`TypeMap`<`InternalArgs` & `InternalArgs`<{}, {}, {}, {}>, `PrismaClientOptions`\>, `TypeMapCb`, `InternalArgs`<{}, {}, {}, {}>, {}>

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

[client](/reference/solid-start/client "client")[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")
