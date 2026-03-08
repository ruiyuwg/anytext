# Prisma

[Prisma](https://prisma.io) is an ORM that allows us to interact with databases in a type-safe manner.

It provides a way to define your database schema using a Prisma schema file, and then generates TypeScript types based on that schema.

### Prismabox

[Prismabox](https://github.com/m1212e/prismabox) is a library that generate TypeBox or Elysia validation models from Prisma schema.

We can use Prismabox to convert Prisma schema into Elysia validation models, which can then be used to ensure type validation in Elysia.

### How it works:

1. Define your database schema in Prisma Schema.
2. Add `prismabox` generator to generate Elysia schema.
3. Use the converted Elysia validation models to ensure type validation.
4. OpenAPI schema is generated from Elysia validation models.
5. Add [Eden Treaty](/eden/overview) to add type-safety to your frontend.

```
                                                    * ——————————————— *
                                                    |                 |
                                               | -> |  Documentation  |
* ————————— *             * ———————— * OpenAPI |    |                 |
|           |  prismabox  |          | ——————— |    * ——————————————— *
|  Prisma   | —————————-> |  Elysia  |
|           |             |          | ——————— |    * ——————————————— *
* ————————— *             * ———————— *   Eden  |    |                 |
                                               | -> |  Frontend Code  |
												    |                 |
												    * ——————————————— *

```

## Installation

To install Prisma, run the following command:

```bash
bun add @prisma/client prismabox && \
bun add -d prisma
```

## Prisma schema

Assuming you already have a `prisma/schema.prisma`.

We can add a `prismabox` generator to the Prisma schema file as follows:

```ts [prisma/schema.prisma]
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator prismabox { // [!code ++]
  provider = "prismabox" // [!code ++]
  typeboxImportDependencyName = "elysia" // [!code ++]
  typeboxImportVariableName = "t" // [!code ++]
  inputModel = true // [!code ++]
  output   = "../generated/prismabox" // [!code ++]
} // [!code ++]

model User {
  id    String  @id @default(cuid())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id    	String  @id @default(cuid())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  String
}
```

This will generate Elysia validation models in the `generated/prismabox` directory.

Each model will have its own file, and the models will be named based on the Prisma model names.

For example:

- `User` model will be generated to `generated/prismabox/User.ts`
- `Post` model will be generated to `generated/prismabox/Post.ts`

## Using generated models

Then we can import the generated models in our Elysia application:

```ts [src/index.ts]
import { Elysia, t } from 'elysia'

import { PrismaClient } from '../generated/prisma' // [!code ++]
import { UserPlain, UserPlainInputCreate } from '../generated/prismabox/User' // [!code ++]

const prisma = new PrismaClient()

const app = new Elysia()
    .put(
        '/',
        async ({ body }) =>
            prisma.user.create({
                data: body
            }),
        {
            body: UserPlainInputCreate, // [!code ++]
            response: UserPlain // [!code ++]
        }
    )
    .get(
        '/id/:id',
        async ({ params: { id }, status }) => {
            const user = await prisma.user.findUnique({
                where: { id }
            })

            if (!user) return status(404, 'User not found')

            return user
        },
        {
            response: {
                200: UserPlain, // [!code ++]
                404: t.String() // [!code ++]
            }
        }
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

This allows us to reuse the database schema in Elysia validation models.

***

For more information, please refer to the [Prisma](https://prisma.io), and [Prismabox](https://github.com/m1212e/prismabox) documentation.

***

# Integration with SvelteKit

With SvelteKit, you can run Elysia on server routes.

1. Create **src/routes/\[...slugs]/+server.ts**.
2. Define an Elysia server.
3. Export a **fallback** function that calls `app.handle`.

```typescript
// src/routes/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia()
    .get('/', 'hello SvelteKit')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

interface WithRequest {
	request: Request
}

export const fallback = ({ request }: WithRequest) => app.handle(request) // [!code ++]
```

You can treat the Elysia server as a normal SvelteKit server route.

### pnpm

If you use pnpm, [pnpm doesn't auto install peer dependencies by default](https://github.com/orgs/pnpm/discussions/3995#discussioncomment-1893230) forcing you to install additional dependencies manually.

```bash
pnpm add @sinclair/typebox openapi-types
```

## Prefix

If you place an Elysia server not in the root directory of the app router, you need to annotate the prefix to the Elysia server.

For example, if you place Elysia server in **src/routes/api/\[...slugs]/+server.ts**, you need to annotate prefix as **/api** to Elysia server.

```typescript twoslash
// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' }) // [!code ++]
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
```

This will ensure that Elysia routing will work properly in any location you place it.

Please refer to [SvelteKit Routing](https://kit.svelte.dev/docs/routing#server) for more information.

***
