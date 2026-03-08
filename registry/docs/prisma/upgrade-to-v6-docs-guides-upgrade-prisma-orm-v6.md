# Upgrade to v6 (/docs/guides/upgrade-prisma-orm/v6)

Prisma ORM v6 introduces a number of **breaking changes** when you upgrade from an earlier Prisma ORM version. This guide explains how this upgrade might affect your application and gives instructions on how to handle any changes.

```
Questions answered in this page
```

- What changed in Prisma 6?
- How do I upgrade safely?
- Which breaking changes affect my app?

Update packages \[#update-packages]

To upgrade to Prisma ORM v6 from an earlier version, you need to update both the `prisma` and `@prisma/client` packages:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client@6
npm install -D prisma@6
```



```bash
pnpm add @prisma/client@6
pnpm add -D prisma@6
```



```bash
yarn add @prisma/client@6
yarn add --dev prisma@6
```



```bash
bun add @prisma/client@6
bun add --dev prisma@6
```





For yarn, use `yarn up prisma@6 @prisma/client@6`. For pnpm, use `pnpm upgrade prisma@6 @prisma/client@6`. For bun, use `bun add @prisma/client@6` and `bun add prisma@6 --dev`.





Before you upgrade, check each breaking change below to see how the upgrade might affect your application.
````

Breaking changes \[#breaking-changes]

This section gives an overview of breaking changes in Prisma ORM v6.

Minimum supported Node.js versions \[#minimum-supported-nodejs-versions]

The new minimum supported Node.js versions for Prisma ORM v6 are:

- for Node.js 18 the minimum supported version is **18.18.0**
- for Node.js 20 the minimum supported version is **20.9.0**
- for Node.js 22 the minimum supported version is **22.11.0**

There is *no* official support for Node.js 16, 17, 19 and 21.

Minimum supported TypeScript version \[#minimum-supported-typescript-version]

The new minimum supported TypeScript version for Prisma ORM v6 is: **5.1.0**.

```
This schema change only applies to PostgreSQL.\
If you are using CockroachDB, you do not need to take any action—the schema for implicit m-to-n relationships remains unchanged.
```

Schema change for implicit m-n relations on PostgreSQL \[#schema-change-for-implicit-m-n-relations-on-postgresql]

If you're using PostgreSQL and are defining [implicit many-to-many relations](/orm/prisma-schema/data-model/relations/many-to-many-relations#implicit-many-to-many-relations) in your Prisma schema, Prisma ORM maintains the [relation table](/orm/prisma-schema/data-model/relations/many-to-many-relations#relation-table-conventions) for you under the hood. This relation table has `A` and `B` columns to represent the tables of the models that are part of this relation.

Previous versions of Prisma ORM used to create a *unique index* on these two columns. In Prisma v6, this unique index is changing to a *primary key* in order to [simplify for the default replica identity behaviour](https://github.com/prisma/prisma/issues/25196).

```
Expand for an example
```

As an example, consider the following Prisma schema with an implicit m-n relation between `Post` and `Tag` models:

```prisma
model Post {
  id         Int    @id @default(autoincrement())
  title      String
  categories Tag[]
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}
```

In this case, Prisma ORM maintains the following relation table for you under the hood:

```sql
-- CreateTable
CREATE TABLE "_PostToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON "_PostToTag"("A", "B"); 

-- CreateIndex
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag"("B");

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

In Prisma v6, the `UNIQUE INDEX` is changing into a `PRIMARY KEY`:

```sql
-- CreateTable
CREATE TABLE "_PostToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PostToTag_AB_pkey" PRIMARY KEY ("A","B") 
);

-- CreateIndex
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag"("B");

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

If you're defining implicit m-n relations in your Prisma schema, **the next migration you'll create will contain `ALTER TABLE` statements for *all* the relation tables** that belong to these relations. These will look similar to this:

```sql
-- AlterTable
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PostToTag_AB_unique";
```

In order to isolate these schema changes (and not having them bundled with your next migration), **we recommend that you create a new migration *right after* having upgraded to Prisma v6**:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name upgrade-to-v6
```



```bash
pnpm dlx prisma migrate dev --name upgrade-to-v6
```



```bash
yarn dlx prisma migrate dev --name upgrade-to-v6
```



```bash
bunx --bun prisma migrate dev --name upgrade-to-v6
```
````

That way, you have a single, dedicated migration that takes care of this schema change and otherwise keeps your migration history clean.

Full-text search on PostgreSQL \[#full-text-search-on-postgresql]

The [`fullTextSearch`](/v6/orm/prisma-client/queries/full-text-search) Preview feature is promoted to General Availability only for MySQL. This means that if you're using PostgreSQL and currently make use of this Preview feature, you now need to use the new [`fullTextSearchPostgres`](/v6/orm/prisma-client/queries/full-text-search#enabling-full-text-search-for-postgresql) Preview feature:

Before \[#before]

```prisma title="schema.prisma"
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch"] 
}
```

After \[#after]

```prisma title="schema.prisma"
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"] 
}
```

Usage of Buffer \[#usage-of-buffer]

In an effort to improve compatibility between Prisma and new modern JavaScript runtimes, we're gradually moving away from Node.js-specific APIs in favor of standard JavaScript.

Prisma v6 replaces the usage of [`Buffer`](https://nodejs.org/api/buffer.html) with [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) to represent fields of type `Bytes`. Make sure to replace all your occurrences of the `Buffer` type with the new `Uint8Array`.

```
Expand to view how to convert between 

Buffer

 and 

Uint8Array
```

Conversion from Buffer to Uint8Array \[#conversion-from-buffer-to-uint8array]

You can directly use the `Buffer` instance as a `Uint8Array`:

```ts
const buffer: Buffer = Buffer.from([1, 2, 3, 4]);
const uint8Array: Uint8Array = buffer; // No conversion needed
```

Conversion from Uint8Array to Buffer \[#conversion-from-uint8array-to-buffer]

You can create a `Buffer` from a `Uint8Array` using `Buffer.from`:

```ts
const uint8Array: Uint8Array = new Uint8Array([1, 2, 3, 4]);
const buffer: Buffer = Buffer.from(uint8Array.buffer);
```

Before \[#before-1]

````
  Code



  Prisma schema




```ts
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany();

  const bytesCreated = await prisma.user.create({
    data: {
      bytes: Buffer.from([1, 2, 3, 4]),
    },
  });
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^
  // `bytesCreated` used to have type: {
  //    bytes: Buffer
  //    id: number
  // }

  for (const bytesFound of await prisma.user.findMany()) {
    bytesFound.bytes; // Buffer [ 1, 2, 3, 4 ]
  }
}

main();
```



```prisma
model User {
  id    Int   @id @default(autoincrement())
  bytes Bytes
}
```
````

After \[#after-1]

````
  Code



  Prisma schema




```ts
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany();

  const bytesCreated = await prisma.user.create({
    data: {
      bytes: Uint8Array.from([1, 2, 3, 4]),
    },
  });
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^
  // `bytesCreated` now has type: {
  //    bytes: Uint8Array
  //    id: number
  // }

  for (const bytesFound of await prisma.user.findMany()) {
    bytesFound.bytes; // Uint8Array [ 1, 2, 3, 4 ]
  }
}

main();
```



```prisma
model User {
  id    Int   @id @default(autoincrement())
  bytes Bytes
}
```
````

Removed NotFoundError \[#removed-notfounderror]

In Prisma v6, we removed the `NotFoundError` in favor of `PrismaClientKnownRequestError` with error code [`P2025`](/orm/reference/error-reference#p2025) in [`findUniqueOrThrow()`](/orm/reference/prisma-client-reference#finduniqueorthrow) and [`findFirstOrThrow()`](/orm/reference/prisma-client-reference#findfirstorthrow). If you've relied on catching `NotFoundError` instances in your code, you need to adjust the code accordingly.

Before \[#before-2]

```ts
import { PrismaClient, NotFoundError } from "@prisma/client";

// inside an `async` function
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 42 },
  });
  console.log(user);
} catch (error) {
  if (error instanceof NotFoundError) {
    // [!code highlight]
    console.error("User not found!"); // [!code highlight]
  } // [!code highlight]
  else {
    console.error("Unexpected error:", error);
  }
}
```

After \[#after-2]

```ts
import { PrismaClient, Prisma } from "@prisma/client";

// inside an `async` function
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 42 },
  });
  console.log(user);
} catch (error) {
  if (
    // [!code highlight]
    error instanceof Prisma.PrismaClientKnownRequestError && // [!code highlight]
    error.code === "P2025" // Specific code for "record not found" // [!code highlight]
  ) {
    // [!code highlight]
    console.error("User not found!"); // [!code highlight]
  } // [!code highlight]
  else {
    console.error("Unexpected error:", error);
  }
}
```

New keywords that can't be used as model names: async, await, using \[#new-keywords-that-cant-be-used-as-model-names-async-await-using]

With this release, you can't use `async`, `await` and `using` as model names any more.

Preview features promoted to General Availability \[#preview-features-promoted-to-general-availability]

In this release, we are promoting a number of [Preview](/orm/more/releases#preview) features to [General Availability](/orm/more/releases#generally-available-ga).

fullTextIndex \[#fulltextindex]

If you use the [full-text index](/orm/prisma-schema/data-model/indexes#full-text-indexes-mysql-and-mongodb) feature in your app, you can now remove `fullTextIndex` from the `previewFeatures` in your Prisma schema:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextIndex"] // [!code --]
}
```

fullTextSearch \[#fulltextsearch]

If you use the [full-text search](/v6/orm/prisma-client/queries/full-text-search) feature with **MySQL** in your app, you can now remove `fullTextSearch` from the `previewFeatures` in your Prisma schema:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch"] // [!code --]
}
```

If you are using it with **PostgreSQL**, you need to update the name of the feature flag to `fullTextSearchPostgres`:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"] // [!code highlight]
}
```
