# Many-to-many relations (/docs/v6/orm/more/troubleshooting/many-to-many-relations)

Modeling and querying many-to-many relations in relational databases can be challenging. This guide shows how to work with [implicit](/v6/orm/prisma-schema/data-model/relations/many-to-many-relations#implicit-many-to-many-relations) and [explicit](/v6/orm/prisma-schema/data-model/relations/many-to-many-relations#explicit-many-to-many-relations) many-to-many relations, and how to convert between them.

Implicit relations \[#implicit-relations]

Implicit many-to-many relations let Prisma ORM handle the [relation table](/v6/orm/prisma-schema/data-model/relations/many-to-many-relations#relation-tables) internally:

```prisma
model Post {
  id    Int    @id @default(autoincrement())
  title String
  tags  Tag[]
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}
```

Creating records \[#creating-records]

```ts
await prisma.post.create({
  data: {
    title: "Types of relations",
    tags: { create: [{ name: "dev" }, { name: "prisma" }] },
  },
});
```

Querying with relations \[#querying-with-relations]

```ts
await prisma.post.findMany({
  include: { tags: true },
});
```

Result:

```json
[
  {
    "id": 1,
    "title": "Types of relations",
    "tags": [
      { "id": 1, "name": "dev" },
      { "id": 2, "name": "prisma" }
    ]
  }
]
```

Connecting and creating tags simultaneously \[#connecting-and-creating-tags-simultaneously]

```ts
await prisma.post.update({
  where: { id: 1 },
  data: {
    title: "Prisma is awesome!",
    tags: { set: [{ id: 1 }, { id: 2 }], create: { name: "typescript" } },
  },
});
```

Explicit relations \[#explicit-relations]

Explicit relations are needed when you need to store extra fields in the relation table or when [introspecting](/orm/prisma-schema/introspection) an existing database:

```prisma
model Post {
  id    Int        @id @default(autoincrement())
  title String
  tags  PostTags[]
}

model PostTags {
  id     Int   @id @default(autoincrement())
  post   Post? @relation(fields: [postId], references: [id])
  tag    Tag?  @relation(fields: [tagId], references: [id])
  postId Int?
  tagId  Int?

  @@index([postId, tagId])
}

model Tag {
  id    Int        @id @default(autoincrement())
  name  String     @unique
  posts PostTags[]
}
```

Creating records with explicit relations \[#creating-records-with-explicit-relations]

```ts
await prisma.post.create({
  data: {
    title: "Types of relations",
    tags: {
      create: [{ tag: { create: { name: "dev" } } }, { tag: { create: { name: "prisma" } } }],
    },
  },
});
```

Querying with explicit relations \[#querying-with-explicit-relations]

```ts
await prisma.post.findMany({
  include: { tags: { include: { tag: true } } },
});
```

Mapping the response \[#mapping-the-response]

To get a cleaner response similar to implicit relations:

```ts
const result = posts.map((post) => {
  return { ...post, tags: post.tags.map((tag) => tag.tag) };
});
```

Converting implicit to explicit relations \[#converting-implicit-to-explicit-relations]

Sometimes you need to transition from implicit to explicit relations, for example to add metadata like timestamps to the relation.

Step 1: Add the explicit relation model \[#step-1-add-the-explicit-relation-model]

Keep the implicit relation while adding the new model:

```prisma
model User {
  id        Int        @id @default(autoincrement())
  name      String
  posts     Post[]
  userPosts UserPost[]
}

model Post {
  id        Int        @id @default(autoincrement())
  title     String
  authors   User[]
  userPosts UserPost[]
}

model UserPost {
  id        Int       @id @default(autoincrement())
  userId    Int
  postId    Int
  user      User      @relation(fields: [userId], references: [id])
  post      Post      @relation(fields: [postId], references: [id])
  createdAt DateTime  @default(now())

  @@unique([userId, postId])
}
```

Run the migration:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma migrate dev --name "added explicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate dev --name "added explicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate dev --name "added explicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate dev --name "added explicit relation"
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Step 2: Migrate existing data \[#step-2-migrate-existing-data]

```typescript
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  for (const user of users) {
    for (const post of user.posts) {
      await prisma.userPost.create({
        data: {
          userId: user.id,
          postId: post.id,
        },
      });
    }
  }

  console.log("Data migration completed.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Step 3: Remove implicit relation columns \[#step-3-remove-implicit-relation-columns]

After migrating the data, remove the implicit relation columns:

```prisma
model User {
  id        Int        @id @default(autoincrement())
  name      String
  userPosts UserPost[]
}

model Post {
  id        Int        @id @default(autoincrement())
  title     String
  userPosts UserPost[]
}
```

Run the migration:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma migrate dev --name "removed implicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate dev --name "removed implicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate dev --name "removed implicit relation"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate dev --name "removed implicit relation"
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This will drop the implicit table `_PostToUser`.
