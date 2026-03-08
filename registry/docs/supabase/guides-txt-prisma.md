# Prisma

This quickly shows how to connect your Prisma application to Supabase Postgres. If you encounter any problems, reference the [Prisma troubleshooting docs](/docs/guides/database/prisma/prisma-troubleshooting).

If you plan to solely use Prisma instead of the Supabase Data API (PostgREST), turn it off in the [API Settings](/dashboard/project/_/settings/api).

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a custom user for Prisma">
\*   In the [SQL Editor](/dashboard/project/_/sql/new), create a Prisma DB user with full privileges on the public schema.
\*   This gives you better control over Prisma's access and makes it easier to monitor using Supabase tools like the [Query Performance Dashboard](/dashboard/project/_/advisors/query-performance) and [Log Explorer](/dashboard/project/_/logs/explorer).

````
    For security, consider using a [password generator](https://bitwarden.com/password-generator/) for the Prisma role.
  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```sql
  -- Create custom user
  create user "prisma" with password 'custom_password' bypassrls createdb;

  -- extend prisma's privileges to postgres (necessary to view changes in Dashboard)
  grant "prisma" to "postgres";

  -- Grant it necessary permissions over the relevant schemas (public)
  grant usage on schema public to prisma;
  grant create on schema public to prisma;
  grant all on all tables in schema public to prisma;
  grant all on all routines in schema public to prisma;
  grant all on all sequences in schema public to prisma;
  alter default privileges for role postgres in schema public grant all on tables to prisma;
  alter default privileges for role postgres in schema public grant all on routines to prisma;
  alter default privileges for role postgres in schema public grant all on sequences to prisma;
  ```

  ```sql
  -- alter prisma password if needed
  alter user "prisma" with password 'new_password';
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Create a Prisma Project">
Create a new Prisma Project on your computer
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  Create a new directory

  ```bash Terminal
  mkdir hello-prisma
  cd hello-prisma
  ```

  Initiate a new Prisma project

  
    
      ```bash
      npm init -y
      npm install prisma typescript ts-node @types/node --save-dev

      npx tsc --init

      npx prisma init
      ```
    

    
      ```bash
      pnpm init -y
      pnpm install prisma typescript ts-node @types/node --save-dev

      pnpx tsc --init

      pnpx prisma init
      ```
    

    
      ```bash
      yarn init -y
      yarn add prisma typescript ts-node @types/node --save-dev

      npx tsc --init

      npx prisma init
      ```
    

    
      ```bash
      bun init -y
      bun install prisma typescript ts-node @types/node --save-dev

      bunx tsc --init

      bunx prisma init
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Add your connection information to your .env file">
\*   On your project dashboard, click [Connect](/dashboard/project/_?showConnect=true)
\*   Find your Supavisor Session pooler string. It should end with 5432. It will be used in your `.env` file.

````
    If you're in an [IPv6 environment](https://github.com/orgs/supabase/discussions/27034) or have the IPv4 Add-On, you can use the direct connection string instead of Supavisor in Session mode.
  

  *   If you plan on deploying Prisma to a serverless or auto-scaling environment, you'll also need your Supavisor transaction mode string.
  *   The string is identical to the session mode string but uses port 6543 at the end.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      In your .env file, set the DATABASE\_URL variable to your connection string

      ```text .env
      # Used for Prisma Migrations and within your application
      DATABASE_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@[DB-REGION].pooler.supabase.com:5432/postgres"
      ```

      Change your string's `[DB-USER]` to `prisma` and add the password you created in step 1

      ```md
      postgres://prisma.[PROJECT-REF]...
      ```
    

    
      Assign the connection string for Supavisor Transaction Mode (using port 6543) to the DATABASE\_URL variable in your .env file. Make sure to append "pgbouncer=true" to the end of the string to work with Supavisor.

      Next, create a DIRECT\_URL variable in your .env file and assign the connection string that ends with port 5432 to it.

      ```text .env # Used in your application (use transaction mode)
      DATABASE_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

      # Used for Prisma Migrations (use session mode or direct connection)
      DIRECT_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres"
      ```

      Change both your strings' `[DB-USER]` to `prisma` and then add the password created in step 1

      ```md
      postgres://prisma.[PROJECT-REF]...
      ```

      In your schema.prisma file, edit your `datasource db` configs to reference your DIRECT\_URL

      ```text schema.prisma
      datasource db {
        provider  = "postgresql"
        url       = env("DATABASE_URL")
        directUrl = env("DIRECT_URL")
      }
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Create your migrations">
If you have already modified your Supabase database, synchronize it with your migration file. Otherwise create new tables for your database
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    
      Create new tables in your prisma.schema file

      ```ts prisma/schema.prisma
      model Post {
        id        Int     @id @default(autoincrement())
        title     String
        content   String?
        published Boolean @default(false)
        author    User?   @relation(fields: [authorId], references: [id])
        authorId  Int?
      }

      model User {
        id    Int     @id @default(autoincrement())
        email String  @unique
        name  String?
        posts Post[]
      }
      ```

      commit your migration

      
        
          ```bash
          npx prisma migrate dev --name first_prisma_migration

          ```
        

        
          ```bash
          pnpx prisma migrate dev --name first_prisma_migration

          ```
        

        
          ```bash
          npx prisma migrate dev --name first_prisma_migration

          ```
        

        
          ```bash
          bunx prisma migrate dev --name first_prisma_migration

          ```
        
      
    

    
      Synchronize changes from your project:

      
        
          ```bash
          npx prisma db pull
          ```

          Create a migration file

          ```bash
          mkdir -p prisma/migrations/0_init_supabase
          ```

          Synchronize the migrations

          ```bash
            npx prisma migrate diff \
            --from-empty \
            --to-schema prisma/schema.prisma \
            --script > prisma/migrations/0_init_supabase/migration.sql
          ```

          
            If there are any conflicts, reference [Prisma's official doc](https://www.prisma.io/docs/orm/prisma-migrate/getting-started#work-around-features-not-supported-by-prisma-schema-language) or the [trouble shooting guide](/docs/guides/database/prisma/prisma-troubleshooting) for more details
          

          ```bash
          npx prisma migrate resolve --applied 0_init_supabase
          ```
        

        
          ```bash
          pnpx prisma db pull
          ```

          Create a migration file

          ```bash
          mkdir -p prisma/migrations/0_init_supabase
          ```

          Synchronize the migrations

          ```bash
            pnpx prisma migrate diff \
            --from-empty \
            --to-schema prisma/schema.prisma \
            --script > prisma/migrations/0_init_supabase/migration.sql
          ```

          
            If there are any conflicts, reference [Prisma's official doc](https://www.prisma.io/docs/orm/prisma-migrate/getting-started#work-around-features-not-supported-by-prisma-schema-language) or the [trouble shooting guide](/docs/guides/database/prisma/prisma-troubleshooting) for more details
          

          ```bash
          pnpx prisma migrate resolve --applied 0_init_supabase
          ```
        

        
          ```bash
          npx prisma db pull
          ```

          Create a migration file

          ```bash
          mkdir -p prisma/migrations/0_init_supabase
          ```

          Synchronize the migrations

          ```bash
            npx prisma migrate diff \
            --from-empty \
            --to-schema prisma/schema.prisma \
            --script > prisma/migrations/0_init_supabase/migration.sql
          ```

          
            If there are any conflicts, reference [Prisma's official doc](https://www.prisma.io/docs/orm/prisma-migrate/getting-started#work-around-features-not-supported-by-prisma-schema-language) or the [trouble shooting guide](/docs/guides/database/prisma/prisma-troubleshooting) for more details
          

          ```bash
          npx prisma migrate resolve --applied 0_init_supabase
          ```
        

        
          ```bash
          bunx prisma db pull
          ```

          Create a migration file

          ```bash
          mkdir -p prisma/migrations/0_init_supabase
          ```

          Synchronize the migrations

          ```bash
            bunx prisma migrate diff \
            --from-empty \
            --to-schema prisma/schema.prisma \
            --script > prisma/migrations/0_init_supabase/migration.sql
          ```

          
            If there are any conflicts, reference [Prisma's official doc](https://www.prisma.io/docs/orm/prisma-migrate/getting-started#work-around-features-not-supported-by-prisma-schema-language) or the [trouble shooting guide](/docs/guides/database/prisma-troubleshooting) for more details
          

          ```bash
          bunx prisma migrate resolve --applied 0_init_supabase
          ```
        
      
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Install the prisma client">
Install the Prisma client and generate its model
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    
      ```sh
      npm install @prisma/client
      npx prisma generate
      ```
    

    
      ```sh
      pnpm install @prisma/client
      pnpx prisma generate
      ```
    

    
      ```sh
      yarn add @prisma/client
      npx prisma generate
      ```
    

    
      ```sh
      bun install @prisma/client
      bunx prisma generate
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Test your API">
Create a index.ts file and run it to test your connection
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  ```ts index.ts
  const { PrismaClient } = require('@prisma/client');

  const prisma = new PrismaClient();

  async function main() {
    //change to reference a table in your schema
    const val = await prisma.<SOME_TABLE_NAME>.findMany({
      take: 10,
    });
    console.log(val);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    process.exit(1);
  });

  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

# Connecting with PSQL

[`psql`](https://www.postgresql.org/docs/current/app-psql.html) is a command-line tool that comes with Postgres.

## Connecting with SSL

You should connect to your database using SSL wherever possible, to prevent snooping and man-in-the-middle attacks.

You can obtain your connection info and Server root certificate from your application's dashboard:

![Connection Info and Certificate.](/docs/img/database/database-settings-ssl.png)

Download your [SSL certificate](#connecting-with-ssl) to `/path/to/prod-supabase.cer`.

Find your connection settings. Go to the project [**Connect** panel](/dashboard/project/_?showConnect=true\&method=session) and copy the URL from the `Session pooler` section, and copy the parameters into the connection string:

```shell
psql "sslmode=verify-full sslrootcert=/path/to/prod-supabase.cer host=[CLOUD_PROVIDER]-0-[REGION].pooler.supabase.com dbname=postgres user=postgres.[PROJECT_REF]"
```
