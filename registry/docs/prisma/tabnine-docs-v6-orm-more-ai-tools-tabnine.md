# Tabnine (/docs/v6/orm/more/ai-tools/tabnine)

[Tabnine](https://www.tabnine.com/) is a an AI software development platform that comes as an [extension](https://www.tabnine.com/install/) for your IDE (e.g. VS Code, WebStorm, IntelliJ, ...).

Overview \[#overview]

It helps developers write code faster by:

- Providing context-aware [code completion](https://docs.tabnine.com/main/getting-started/getting-the-most-from-tabnines-code-completion) suggestions in the editor for small, repetitive coding tasks
- Offering an integrated [chat](https://docs.tabnine.com/main/getting-started/getting-the-most-from-tabnine-chat) for higher-level tasks and detailed instructions

Why use Prisma ORM with Tabnine? \[#why-use-prisma-orm-with-tabnine]

AI editors like Tabnine are powerful tools that can drastically improve developer productivity. It works especially well with the following workflows:

- Data modeling and database schema design
- Constructing and optimizing database queries
- Generating CRUD functionality and other boilerplate code
- Generating plain SQL queries that can be used with [TypedSQL](/v6/orm/prisma-client/using-raw-sql/typedsql)
- Generating code for unit and integrations tests
- Guiding through major refactorings
- Generating seeding scripts

Leveraging the Prisma schema \[#leveraging-the-prisma-schema]

Because Prisma has its own [schema](/v6/orm/prisma-schema/overview), Tabnine can understand the basic shape of your data and help you write code for the other parts of your stack.

We therefore recommend that you start out by defining your Prisma schema and then use Tabnine to build the application layer around it (inluding API calls, DTOs, business logic, 3rd party integrations, ...).

Data modeling and database schema design \[#data-modeling-and-database-schema-design]

How Tabnine helps \[#how-tabnine-helps]

Designing a database schema from scratch involves a lot of boilerplate and can be time-consuming.

Tabnine can accelerate this process by:

- Generating boilerplate for models, indexes, constraints, and relations.
- Keeping the schema consistent by sticking to naming and other conventions.
- Auto-completing model and field definitions based on common database patterns.
- Suggesting relationships and field types based on naming conventions.

Example: Defining a Prisma schema \[#example-defining-a-prisma-schema]

Prompt \[#prompt]

*Define a Prisma schema for a SaaS application with User, Organization, and Subscription models. Ensure relationships are properly set up.*

Generated code \[#generated-code]

```prisma
generator client {
  provider = "prisma-client"
  output   = "./generated"
}

datasource db {
  provider = "postgresql"
}

model User {
  id             Int          @id @default(autoincrement())
  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt
  email          String       @unique
  name           String
  organization   Organization @relation(fields: [organizationId], references: [id])
  organizationId Int
}

model Organization {
  id           Int           @id @default(autoincrement())
  name         String
  slug         String        @unique
  subscription Subscription?
  users        User[]
}

model Subscription {
  id             Int          @id @default(autoincrement())
  organization   Organization @relation(fields: [organizationId], references: [id])
  organizationId Int          @unique
  plan           String
  status         Status
}

enum Status {
  Active
  Paused
  Expired
}
```

Constructing and optimizing database queries \[#constructing-and-optimizing-database-queries]

How Tabnine helps \[#how-tabnine-helps-1]

Prisma ORM provides a convenient high-level API for writing database queries intuitively. However, queries involving filters, pagination and advanced patterns can still become complex to construct.

Tabnine can help by:

- Auto-completing Prisma queries based on the schema.
- Suggesting `where` clauses for filters and `skip` / `take` options for pagination logic.
- Helping with efficiency and performance optimizations.

Example: fetching data with relationships \[#example-fetching-data-with-relationships]

Prompt \[#prompt-1]

*Generate a Prisma query to fetch all active users from an organization with an active subscription. Include data about the users' organizations in the query result.*

Generated code \[#generated-code-1]

```ts
const activeUsers = await prisma.user.findMany({
  where: {
    organization: {
      subscription: {
        status: "ACTIVE",
      },
    },
  },
  include: {
    organization: true,
  },
});
```

Generating CRUD functionality and other boilerplate code \[#generating-crud-functionality-and-other-boilerplate-code]

How Tabnine helps \[#how-tabnine-helps-2]

Most applications require basic CRUD operations or other boilerplate code that's usually derived from the structure of the database schema. For example, an API layer may expose a set of HTTP endpoints that allow to create, read, update or delete records of a certain model. Similarly, a frontend will data fetching and state management logic to interact with these API endpoints and update the UI accordingly.

Instead of writing this code manually, Tabnine can speed up this process by:

- Generating Prisma `create`, `read`, `update`, and `delete` operations for the backend and UI components for the frontend.
- Auto-completing function names and argument types.
- Write boilerplate code while following best practices for using DTOs, error handling, consistent API design, ...

Example: Generating CRUD functionality with Next.js \[#example-generating-crud-functionality-with-nextjs]

Prompt \[#prompt-2]

*Generate CRUD functionality for a Next.js app based on the User model from the schema above.*

Generated code \[#generated-code-2]

API endpoints \[#api-endpoints]

```ts filename=app/api/users/routes.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    include: { organization: true },
  });
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      organization: {
        connect: { id: body.organizationId },
      },
    },
    include: { organization: true },
  });
  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const user = await prisma.user.update({
    where: { id: body.id },
    data: {
      email: body.email,
      name: body.name,
      organizationId: body.organizationId,
    },
    include: { organization: true },
  });
  return NextResponse.json(user);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json(user);
}
```

React components \[#react-components]

```ts filename=app/components/User.tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  name: string;
  organizationId: number;
}

const User: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ email: '', name: '', organizationId: 0 });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const createUser = async () => {
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    fetchUsers();
    setNewUser({ email: '', name: '', organizationId: 0 });
  };

  const deleteUser = async (id: number) => {
    await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    
      Users
      
        {users.map((user) => (
          
            {user.name} ({user.email}) - Org ID: {user.organizationId}
             deleteUser(user.id)}>Delete
          
        ))}
      
      Create New User
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="Organization ID"
        value={newUser.organizationId}
        onChange={(e) => setNewUser({ ...newUser, organizationId: Number(e.target.value) })}
      />
      Create User
    
  );
};

export default User;
```

Generating plain SQL queries for use with TypedSQL \[#generating-plain-sql-queries-for-use-with-typedsql]

How Tabnine helps \[#how-tabnine-helps-3]

While Prisma provides a high-level API for querying, sometimes a developer may need to drop down to raw SQL for more low-level control of a query. In these cases, they can use [TypedSQL](/v6/orm/prisma-client/using-raw-sql/typedsql) which provides full type safety for raq SQL queries in Prisma ORM.

One common use case are aggregation queries, such as calculating percentages of different subscription statuses in the schema example above.

Tabnine can assist by:

- Generating SQL queries based on your Prisma schema.
- Structuring complex aggregations without manual trial and error.
- Integrating the queries in your application code.

Example: Calculating the percentages of active, expired, and paused subscriptions \[#example-calculating-the-percentages-of-active-expired-and-paused-subscriptions]

Prompt \[#prompt-3]

*Generate a SQL query that returns the percentage of subscriptions that are Active, Paused, and Expired.*

Generated SQL query \[#generated-sql-query]

```sql title="prisma/sql/subscriptionsReport.sql"
SELECT
  status,
  COUNT(*) * 100.0 / (SELECT COUNT(*) FROM "Subscription") AS percentage
FROM "Subscription"
GROUP BY status;
```

Application code \[#application-code]

```ts
import { PrismaClient } from "../prisma/generated/client";
import { subscriptionsReport } from "../prisma/generated/client/sql";

const prisma = new PrismaClient();

const usersWithPostCounts = await prisma.$queryRawTyped(subscriptionsReport());
console.log(usersWithPostCounts);
```

Generating code for unit and integration tests \[#generating-code-for-unit-and-integration-tests]

How Tabnine helps \[#how-tabnine-helps-4]

Writing tests ensures that Prisma-based applications function correctly and behave according to requirements and expectations. However, writing tests is a time-consuming activity that often follows predictable and repetitive patterns.

Tabnine can drastically speed up writing tests by:

- Generating test boilerplate for both unit and integration tests.
- Suggesting mocks and fixtures for Prisma database interactions.
- Helping structure test cases to follow best practices.
- Providing integration test scaffolding for testing Prisma with a real or in-memory database.

Example: Writing a unit test for a Prisma service \[#example-writing-a-unit-test-for-a-prisma-service]

Prompt \[#prompt-4]

*Generate a Jest unit test for a Prisma service function that fetches all active users.*

Generated code \[#generated-code-3]

```ts filename=__tests__/userService.test.ts
import { prismaMock } from "../prisma/singleton";
import { getActiveUsers } from "../services/userService";

test("should return only active users", async () => {
  prismaMock.user.findMany.mockResolvedValue([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  const users = await getActiveUsers();
  expect(users).toHaveLength(2);
  expect(users[0].email).toBe("alice@example.com");
});
```

Guiding through major refactorings \[#guiding-through-major-refactorings]

How Tabnine helps \[#how-tabnine-helps-5]

Thanks to Prisma ORM's type safe queries, refactoring are more safe and predictable than with other ORMs: After making schema changes, the generated Prisma Client code will be updated and the TypeScript compiler will highlight all places that need a change.

However, there may still be more difficult situations during a refactoring, e.g. when business logic or complex queries need to be adjusted.

Tabnine can assist during refactorings by:

- Identifying patterns in your code and suggesting refactorings while maintaining consistency.
- Helping update database queries after schema changes and reducing manual effort.
- Providing function rewrites to simplify and optimize logic.
- Suggesting breaking changes that need to be handled across your codebase.

Example: Refactoring a Prisma query after a schema change \[#example-refactoring-a-prisma-query-after-a-schema-change]

Prompt \[#prompt-5]

*Refactor this Prisma query to support soft deletion using a `deletedAt` timestamp field in the User model.*

Initial code \[#initial-code]

```ts
const users = await prisma.user.findMany();
```

Refactored code \[#refactored-code]

```ts
const users = await prisma.user.findMany({
  where: { deletedAt: null },
});
```

Generating seeding scripts \[#generating-seeding-scripts]

How Tabnine helps \[#how-tabnine-helps-6]

Seeding a database with realistic test data can be cumbersome. Realistic seed data is helpful during development because it gives the developer a better impression of the application when it's used in the real-world. Tabnine can help with database seeding by:

- Generating scripts with structured seed data based on the schema and with specific requirements.
- Creating real-looking placeholder data that can be used to test the app.
- Generate specific data to cover edge cases.

Example: Creating a seed script \[#example-creating-a-seed-script]

Prompt \[#prompt-6]

*Generate a Prisma seed script for populating User, Organization, and Subscription models.*

Generated code \[#generated-code-4]

```ts
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.create({
    data: {
      name: "Prisma Corp",
      slug: "prisma-corp",
      subscription: {
        create: {
          plan: "PRO",
          status: "ACTIVE",
        },
      },
      users: {
        create: [
          { name: "Alice Doe", email: "alice@prisma.io" },
          { name: "Bob Smith", email: "bob@prisma.io" },
        ],
      },
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Using the Prisma VS Code extension to manage your database \[#using-the-prisma-vs-code-extension-to-manage-your-database]

The [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) is a powerful tool for building applications with [Prisma Postgres](/v6/postgres). If you are using Tabnine in an editor that allows you to install the Prisma VS Code extension and you are using Prisma Postgres, you should use it. The extension provides a dedicated UI for managing Prisma Postgres instances, both local and remote, making it easy to view, create, and delete instances, push local databases to the cloud, and visualize your schema.

Database management UI \[#database-management-ui]

With its built-in database management interface, the [Prisma VS Code extension](/v6/postgres/integrations/vscode) lets you easily work with local and remote Prisma Postgres instances from inside your editor.

Workflows \[#workflows]

The UI enables the following workflows:

- Authenticate with the [Prisma Console](https://console.prisma.io)
- View, create and delete Prisma Postgres instances (local & remote)
- "Push to cloud": Easily deploy a local Prisma Postgres instance
- View and edit data via an embedded Prisma Studio
- Visualize your database schema

Usage \[#usage]

To manage Prisma Postgres instances via the UI in the Prisma VS Code extension:

1. Ensure you have the latest version of the [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) installed
2. Find the Prisma logo in the **Activity Bar**
3. Click the **Sign in to get started** button
4. Authenticate with the [Prisma Console](https://console.prisma.io) using the sign-in prompt, then select a target [workspace](/v6/platform/about#workspace)

Prisma Studio built-in \[#prisma-studio-built-in]

Beyond managing your database instances, the Prisma VS Code extension embeds Prisma Studio directly in your editor, making it easy to perform create, update, and delete operations on your database right inside Windsurf. Follow these [easy steps](/v6/postgres/database/prisma-studio/studio-in-vs-code) to get started.
