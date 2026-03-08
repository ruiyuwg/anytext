# Connect to Neon Postgres

URL: https://docs.deno.com/deploy/classic/neon-postgres

You are viewing legacy documentation for Deno Deploy Classic. We recommend
migrating to the new
Deno Deploy platform.

This tutorial covers how to connect to a Neon Postgres database from an
application deployed on Deno Deploy.

## Setup Postgres

To get started, we need to create a new Postgres instance for us to connect to.
For this tutorial, we will be using [Neon Postgres](https://neon.tech/) as they
provide free, managed Postgres instances. If you like to host your database
somewhere else, you can do that too.

1. Visit https://neon.tech/ and click **Sign up** to sign up with an email,
   Github, Google, or partner account. After signing up, you are directed to the
   Neon Console to create your first project.
2. Enter a name for your project, select a Postgres version, provide a database
   name, and select a region. Generally, you'll want to select the region
   closest to your application. When you're finished, click **Create project**.
3. You are presented with the connection string for your new project, which you
   can use to connect to your database. Save the connection string, which looks
   something like this:

   ```sh
   postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require
   ```

   You will need the connection string in the next step.

## Create a project in Deno Deploy

Next, let's create a project in Deno Deploy Classic and set it up with the
requisite environment variables:

1. Go to <https://dash.deno.com/new> (Sign in with
   GitHub if you didn't already) and click on **Create an empty project** under
   **Deploy your own code**.
2. Now click on the **Settings** button available on the project page.
3. Navigate to **Environment Variables** Section and add the following secret.

- `DATABASE_URL` - The value should be set to the connection string you saved in
  the last step.

![postgres\_env\_variable](../docs-images/neon_postgres_env_variable.png)

## Write code that connects to Postgres

To read/write to Postgres using the
[Neon serverless driver](https://deno.com/blog/neon-on-jsr), first install it
using the `deno add` command:

```sh
deno add jsr:@neon/serverless
```

This will create or update your `deno.json` file with the dependency:

```json
{
  "imports": {
    "@neon/serverless": "jsr:@neon/serverless@^0.10.1"
  }
}
```

Now you can use the driver in your code:

```ts
import { neon } from "@neon/serverless";

// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a SQL query executor
const sql = neon(databaseUrl);

try {
  // Create the table
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL
    )
  `;
} catch (error) {
  console.error(error);
}
```

## Deploy application to Deno Deploy Classic

Once you have finished writing your application, you can deploy it on Deno
Deploy Classic.

To do this, go back to your project page at
`https://dash.deno.com/projects/<project-name>`.

You should see a couple of options to deploy:

- [Github integration](ci_github)
- [`deployctl`](./deployctl.md)
  ```sh
  deployctl deploy --project=<project-name> <application-file-name>
  ```

Unless you want to add a build step, we recommend that you select the GitHub
integration.

For more details on the different ways to deploy on Deno Deploy Classic and the
different configuration options, read [here](how-to-deploy).

***

# Organizations

URL: https://docs.deno.com/deploy/classic/organizations

You are viewing legacy documentation for Deno Deploy Classic. We recommend
migrating to the new
Deno Deploy platform.

**Organizations** allow you to collaborate with other users. A project created
in an organization is accessible to all members of the organization. Users
should first signup for Deno Deploy Classic before they can be added to an
organization.

Currently, all organization members have full access to the organization. They
can add/remove members, and create/delete/modify all projects in the
organization.

### Create an organization

1. On your Classic dashboard, click on the organization dropdown in the top left
   of the screen, in the navigation bar.
   ![organizations](../docs-images/organizations.png)
2. Select **Organization +**.
3. Enter a name for your organization and click on **Create**.

### Add members

1. Select the desired organization in the organization dropdown in the top left
   of the screen, in the navigation bar.
2. Click on the **Members** icon button.
3. Under the **Members** panel, click on **+ Invite member**.
   > **Note:** Users should first signup for Deno Deploy Classic using
   > [this link](https://dash.deno.com/signin) before you invite them.
4. Enter the GitHub username of the user and click on **Invite**.

Deno Deploy Classic will send the user an invite email. They can then can either
accept or decline your invite. Once they accept the invite, they're added to
your organization and shown in the members panel.

Pending invites are displayed in the **Invites** panel. You can revoke pending
invites by clicking on the delete icon next to the pending invite.

### Remove members

1. Select the desired organization in the organization dropdown in the top left
   of the screen, in the navigation bar.
2. Click on the **Members** icon button.
3. In the **Members** panel, click on the delete button beside the user you want
   to remove.

***
