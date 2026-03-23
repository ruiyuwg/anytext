# Upgrade to v1 (/docs/guides/upgrade-prisma-orm/v1)

This guide provides a comprehensive roadmap for migrating your project from Prisma 1 to the latest version of Prisma ORM. The migration process involves significant architectural changes and requires careful planning and execution.

Before you begin \[#before-you-begin]

- **Back up your database** before starting the migration
- Review the [Prisma ORM documentation](/orm) to understand the new architecture
- Set up a separate development environment for testing the migration
- Document your current Prisma 1 setup, including models, relations, and any custom configurations

Key changes \[#key-changes]

Architectural changes \[#architectural-changes]

| Feature                 | Prisma 1                      | Prisma ORM                                |
| ----------------------- | ----------------------------- | ----------------------------------------- |
| **Database Connection** | Uses Prisma Server as a proxy | Direct database connection                |
| **API**                 | GraphQL API for database      | Programmatic access via Prisma Client     |
| **Schema**              | GraphQL SDL + `prisma.yml`    | Unified Prisma schema                     |
| **Modeling**            | GraphQL SDL                   | Prisma Schema Language (PSL)              |
| **Workflow**            | `prisma deploy`               | `prisma migrate` and `prisma db` commands |

Feature changes \[#feature-changes]

- **Removed**: GraphQL API for database
- **New**: Type-safe database client
- **Improved**: Database introspection and migration tools
- **Enhanced**: Support for more database features and types

Migration Strategy \[#migration-strategy]

1. Preparation \[#1-preparation]

Install Prisma ORM \[#install-prisma-orm]

````
  npm



  pnpm



  yarn



  bun




```bash
# Initialize a new project
npm init -y
npm install prisma @prisma/client

# Initialize Prisma
npx prisma init
```



```bash
# Initialize a new project
pnpm init -y
pnpm add prisma @prisma/client

# Initialize Prisma
pnpm dlx prisma init
```



```bash
# Initialize a new project
yarn init -y
yarn add prisma @prisma/client

# Initialize Prisma
yarn dlx prisma init
```



```bash
# Initialize a new project
bun init -y
bun add prisma @prisma/client

# Initialize Prisma
bun x prisma init
```
````

Set up Database Connection \[#set-up-database-connection]

Update the `DATABASE_URL` in your `.env` file to point to your existing database:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/your_database?schema=public"
```

2. Schema Migration \[#2-schema-migration]

Introspect Database \[#introspect-database]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db pull
```



```bash
pnpm dlx prisma db pull
```



```bash
yarn dlx prisma db pull
```



```bash
bunx --bun prisma db pull
```
````

This will generate a `schema.prisma` file based on your existing database schema.

Update Schema \[#update-schema]

After introspection, you'll need to make several adjustments to the schema:

Default Values \[#default-values]

```prisma
// Before (Prisma 1)
model User {
  id        String   @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Relations \[#relations]

```prisma
// Before (Prisma 1)
type Post {
  id        ID!      @id
  title     String!
  author    User!    @relation(name: "UserPosts")
}

// After (Prisma ORM)
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

3. Data Model Adjustments \[#3-data-model-adjustments]

3.1 Handling Special Types \[#31-handling-special-types]

| Prisma 1 Type | Prisma ORM Equivalent         | Notes                      |
| ------------- | ----------------------------- | -------------------------- |
| `ID`          | `String @id @default(cuid())` | Add `@id` directive        |
| `DateTime`    | `DateTime`                    | No change needed           |
| `Json`        | `Json`                        | No change needed           |
| `Enum`        | `Enum`                        | Define enums in the schema |

3.2 Relation Handling \[#32-relation-handling]

Prisma ORM requires explicit relation fields and foreign keys:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  author   User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

4. Update Application Code \[#4-update-application-code]

4.1 Replace Prisma 1 Client with Prisma Client \[#41-replace-prisma-1-client-with-prisma-client]

```typescript
// Before (Prisma 1)
import { prisma } from './generated/prisma-client';

async function getUser(id: string) {
  return prisma.user({ id });
}

// After (Prisma ORM)
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getUser(id: number) {
  return prisma.user.findUnique({
    where: { id }
  });
}
```

4.2 Update Queries and Mutations \[#42-update-queries-and-mutations]

Fetching Data \[#fetching-data]

```typescript
// Before (Prisma 1)
const user = await prisma.user({ id: 1 });
const posts = await prisma.user({ id: 1 }).posts();

// After (Prisma ORM)
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});
const posts = user?.posts;
```

Creating Records \[#creating-records]

```typescript
// Before (Prisma 1)
const newUser = await prisma.createUser({
  name: 'Alice',
  email: 'alice@example.com'
});

// After (Prisma ORM)
const newUser = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@example.com'
  }
});
```

Testing and Validation \[#testing-and-validation]

1. Test Data Operations \[#1-test-data-operations]

Test all CRUD operations to ensure data consistency:

```typescript
// Test create
const user = await prisma.user.create({
  data: { name: 'Test', email: 'test@example.com' }
});

// Test read
const foundUser = await prisma.user.findUnique({
  where: { id: user.id }
});

// Test update
const updatedUser = await prisma.user.update({
  where: { id: user.id },
  data: { name: 'Updated Name' }
});

// Test delete
await prisma.user.delete({
  where: { id: user.id }
});
```

2. Test Relations \[#2-test-relations]

Verify that all relations work as expected:

```typescript
// Test relation queries
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true,
    profile: true
  }
});

// Test nested writes
const userWithNewPost = await prisma.user.create({
  data: {
    name: 'Bob',
    email: 'bob@example.com',
    posts: {
      create: {
        title: 'Hello World',
        content: 'This is my first post'
      }
    }
  },
  include: {
    posts: true
  }
});
```

Handling Special Cases \[#handling-special-cases]

1. Real-time Subscriptions \[#1-real-time-subscriptions]

Prisma ORM doesn't include built-in real-time subscriptions. Consider these alternatives:

Option 1: Database Triggers \[#option-1-database-triggers]

```sql
-- PostgreSQL example
CREATE OR REPLACE FUNCTION notify_new_post()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_post', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER new_post_trigger
AFTER INSERT ON "Post"
FOR EACH ROW EXECUTE FUNCTION notify_new_post();
```

Option 2: Application-Level Events \[#option-2-application-level-events]

```typescript
// Publish event when creating a post
const post = await prisma.post.create({
  data: {
    title: 'New Post',
    content: 'Content',
    author: { connect: { id: userId }}
  }
});

// Publish event to your pub/sub system
await pubsub.publish('POST_CREATED', { postCreated: post });
```

2. Authentication \[#2-authentication]

If you were using Prisma 1's built-in authentication, you'll need to implement your own solution:

```typescript
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');
  
  const valid = await compare(password, user.password);
  if (!valid) throw new Error('Invalid password');
  
  const token = sign({ userId: user.id }, process.env.APP_SECRET!);
  return { token, user };
}
```

Migration Tools \[#migration-tools]

Prisma 1 Upgrade CLI \[#prisma-1-upgrade-cli]

The [Prisma 1 Upgrade CLI](https://github.com/prisma/prisma1-upgrade) can help automate parts of the migration:

````
  npm



  pnpm



  yarn



  bun




```bash
# Install the upgrade CLI
npm install -g prisma1-upgrade

# Run the upgrade helper
prisma1-upgrade
```



```bash
# Install the upgrade CLI
pnpm add -g prisma1-upgrade

# Run the upgrade helper
prisma1-upgrade
```



```bash
# Install the upgrade CLI
yarn global add prisma1-upgrade

# Run the upgrade helper
prisma1-upgrade
```



```bash
# Install the upgrade CLI
bun add --global prisma1-upgrade

# Run the upgrade helper
prisma1-upgrade
```
````

This tool helps with:

- Converting your Prisma 1 datamodel to Prisma schema
- Identifying potential issues in your schema
- Providing migration recommendations

Performance Considerations \[#performance-considerations]

1. **Connection Pooling**: Configure connection pooling for better performance:
   ```typescript
   const prisma = new PrismaClient({
     log: ['query', 'info', 'warn', 'error'],
     datasources: {
       db: {
         url: process.env.DATABASE_URL + '&connection_limit=20'
       }
     }
   });
   ```

2. **Query Optimization**: Use `select` to fetch only needed fields:
   ```typescript
   const user = await prisma.user.findUnique({
     where: { id: 1 },
     select: {
       id: true,
       name: true,
       email: true
     }
   });
   ```

Next Steps \[#next-steps]

- [Prisma ORM Documentation](/orm)
- [Prisma Schema Reference](/orm/reference/prisma-schema-reference)
- [Prisma Client API Reference](/orm/reference/prisma-client-reference)
- [Prisma Migrate Guide](/orm/prisma-migrate)
- [Prisma Studio](https://www.prisma.io/studio)

Getting Help \[#getting-help]

If you encounter issues during migration:

1. Search the [GitHub Issues](https://github.com/prisma/prisma/issues)
2. Ask for help in the [Prisma Slack](https://slack.prisma.io/)
3. Open a [GitHub Discussion](https://github.com/prisma/prisma/discussions)
