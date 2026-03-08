# Reconcile users against internal systems

> \[!NOTE]
> This developer guide was contributed by Daniel Favand (Solution Engineer at Sanity.io, helping clients build great content experiences.).

Use Sanity API's to compare current project members against an internal list to remove those that no longer require access

You may need to automate some project hygiene activities when managing many members across multiple and long-lived Sanity projects, datasets, and roles.

This guide is for team administrators who need to perform bulk actions on projects that have many users, whether you use [SAML authentication](https://www.sanity.io/docs/developer-guides/sso-saml) or the default login options.

For example:

- You may be using Sanity, Google, or GitHub logins and want to validate the list of members against an internal list of employees and remove those who should not have access anymore.

- You may be using SAML logins and need to remove members no longer with your organization.- SAML validates users when they log in. Users without permission to log in via your identity provider (IdP) will not have access. However, their user account will not be removed automatically because the IdP does not send permissions updates other than when a user logs in.

- You may be migrating to SAML logins and want to remove the Sanity, Google, or GitHub logins for users who have moved to SAML.

These are all actions that can be done through scripts accessing the API.

## Definitions

See the [Platform Terminology page in the documentation](https://www.sanity.io/docs/platform-management/platform-terminology) for more details.

### Organization

An organization is a unit of billing and the central point of configuration for SAML integrations.

### Project

A project contains datasets and is the main unit a user is associated with.

### Member

A member is the person’s account, which may have a role in zero or more projects. Within the context of a project, they will have a “Project User ID.”

The terms “member” and “user” are used below, but these terms have no functional difference. For the purpose of this guide, we might consider “users” to be those who still actively require project access. While “members” refers to all accounts that have at some point been active in the project but may no longer be using it.

### Role

A role describes what a user can access within a project.

## Steps

You will create a script that uses the Sanity Client to:

1. Fetch a Sanity project’s members and their roles
2. Filter out users from a predefined list of allowed users
3. Remove the roles of the remaining users so they will no longer have access to your project

### Create a CLI script

The `sanity` package lets you run scripts in the shell that use Studio configuration and perform operations using your authentication. You can write these scripts in JavaScript or TypeScript, and they will be run and evaluated with the same tooling that the Studio uses. These scripts use the configuration defined in `sanity.cli.ts` in your project folder.

This makes it convenient to create scripts for your Sanity project for tasks like migration and administration.

Within your Sanity Studio folder, create a directory named `scripts` and within that, a file named `reconcileUsers.ts` (the location of this script is up to you, but the examples below will show this filename and path).

### Import the Sanity client

The Sanity client will enable you to access the API. When imported from `sanity/cli` it will use the Studio’s configuration and import its environment variables. These configurations are set in the `sanity.cli.ts` file in your Sanity Studio folder. You can then override any of these settings – such as the dataset name – from within your script if required.

You will also need the Project ID for some API endpoints, which will be taken from the Sanity client’s configuration.

```typescript
// ./scripts/reconcileUsers.ts

import { getCliClient } from "sanity/cli"

// Configure Sanity Client
// See docs on API Versioning: https://www.sanity.io/docs/api-versioning
const client = getCliClient({ apiVersion: '2022-03-20' })
const { projectId } = client.config()

console.log(`Reconciling users for ${projectId}`)
```

### Try running your script

To test the script is working from your Studio directory, run the following command:

```sh
npx sanity@latest exec ./scripts/reconcileUsers.ts
```

If you see the *“Reconciling users for…”* in your console, then your script ran successfully!

### Obtain your internal list of users

Next, obtain your internal list of users with their email addresses. This example assumes you have a list of email addresses.

```typescript
// ./scripts/reconcileUsers.ts

// ...Sanity Client, etc

// A list of users you want to keep
const internalUsers = [
  'myUser@example.com',
  'anotherUser@example.com'
].map(email => email.toLocaleLowerCase())
```

Please make sure the email addresses are lowercase to make it easier to match them against your project’s current users later.

### Generate a full list of project users

Now in a function called `run()`, using the Sanity Client, get all the human members of your Sanity project, and retrieve their email addresses.

```typescript
// ./scripts/reconcileUsers.ts

// ...Sanity Client, internalUsers, etc

interface UserDetail {
  id: string
  email: string
}

interface ProjectUser {
  projectUserId: string
  isRobot: boolean
  roles: {
    name: string
    title: string
  }[]
}

async function run() {
  // 1: Perform a query for the list of Sanity project members
  const projectUsers = await client.request<ProjectUser[]>({
    // See: https://www.sanity.io/docs/roles-reference#309c2896a315
    url: `/projects/${projectId}/acl/`,
  })

  // 2: Filter out the robot tokens
  const humanUsers = projectUsers.filter((user) => !user.isRobot)

  // 3: Query each member's details and map them to the user ID
  const unprocessedUsers = [...humanUsers]
  const userDetails: UserDetail[] = []
  while (unprocessedUsers.length > 0) {
    const batchUsers = unprocessedUsers.splice(0, 100)
    const batchIds = batchUsers.map((user) => user.projectUserId).join(',')

    // Each member's details contain the ID and email address
    const batchUserDetails = await client.request({
      url: `/projects/${projectId}/users/${batchIds}`,
    }).catch((error) => {
      throw new Error(error)
    })
    userDetails.push(...batchUserDetails)
  }

  // 4: Filter the results to only those users on the internal list
  const usersNotInList = userDetails.filter(
    (detail) => !internalUsers.includes(detail.email.toLowerCase())
  )

  console.log('Users not in list:', usersNotInList.map(user => user.email))
}

run()
```

> \[!WARNING]
> You may notice in your IDE that `client.request` gives a deprecation warning. You can overlook this for now when using it to make Sanity API requests. Future versions of the client may have built-in methods for Sanity API requests.

> \[!TIP]
> The `while` statement in the script above calls the API in sequence, not concurrently, and only once for every 100 members in your project.
> However, when writing scripts that call Sanity APIs repeatedly, you might also need to avoid hitting rate limits. Or benefit from the option to pause and continue the script. By calling the API from a queue.
> [p-queue](https://www.npmjs.com/package/p-queue) is a popular library for this and could be used in this script, or any other that repeatedly calls a Sanity API.

### Running the script with permissions

Run the script again now with the `--with-user-token` flag to use your personal token and permissions for the Sanity API client.

```sh
npx sanity@latest exec ./scripts/reconcileUsers.ts --with-user-token
```

You should see a list of project members that are not in the `internalUsers` array. These are the members that you’ll be removing from the project.

### Remove roles from Sanity users who are not on the internal list

For each user in the final list, remove each of their roles. When all roles are removed from a user, they will no longer be a project member.

> \[!WARNING]
> Be careful not to remove permissions from your account!
> Make sure that the email address associated with your user account is in the list of `internalUsers`.

```typescript
// ./scripts/reconcileUsers.ts

// ...Sanity Client, internalUsers, Types, usersNotInThisList etc

async function run() {
  // ...steps 1-4

  // 5: Find the roles of each member in this project
  for await (const user of usersNotInList) {
    const projectRoles = projectUsers.find(
      (projectUser) => projectUser.projectUserId === user.id
    )!.roles

    // Delete all roles from the member
    // A project member with no roles is removed from the project
    for await (const role of projectRoles) {
      await client.request({
        method: 'DELETE',
        url: `/projects/${projectId}/acl/${user.id}`,
        body: {
          roleName: role.name,
        },
      })
    }
  }
}

run()
```

## Full script

The full script is below, with Types and comments. You can run this with the same script as above, ensuring to include the `--with-user-token` flag.

```typescript
// ./scripts/reconcileUsers.ts

// This script will remove the roles from all project members
// that are not in the list of "internalUsers"

import {getCliClient} from 'sanity/cli'

interface UserDetail {
  id: string
  email: string
}

interface ProjectUser {
  projectUserId: string
  isRobot: boolean
  roles: {
    name: string
    title: string
  }[]
}

// Configure a Sanity client to make authenticated API calls
const client = getCliClient({apiVersion: '2022-03-20'})
const {projectId} = client.config()

// A list of users you want to keep
const internalUsers = [
  'myUser@example.com',
  'anotherUser@example.com'
].map(email => email.toLocaleLowerCase())

async function run() {
  // 1: Perform a query for the list of Sanity project members
  const projectUsers = await client.request<ProjectUser[]>({
    url: `/projects/${projectId}/acl/`,
  })

  // 2: Filter out the robot tokens
  const humanUsers = projectUsers.filter((user) => !user.isRobot)

  // 3: Query each user's details and map them to the user ID
  const unprocessedUsers = [...humanUsers]
  const userDetails: UserDetail[] = []
  while (unprocessedUsers.length > 0) {
    const batchUsers = unprocessedUsers.splice(0, 100)
    const batchIds = batchUsers.map((user) => user.projectUserId).join(',')

    // Each member's details contain the ID and email address
    const batchUserDetails = await client.request({
      url: `/projects/${projectId}/users/${batchIds}`,
    })
    userDetails.push(...batchUserDetails)
  }

  // 4: Filter the results to only those users on the internal list
  const usersNotInList = userDetails.filter(
    (detail) => !internalUsers.includes(detail.email.toLowerCase())
  )

  console.log('Users not in list:', usersNotInList)

  // 5: Find the roles of each member in this project
  for await (const user of usersNotInList) {
    const projectRoles = projectUsers.find(
      (projectUser) => projectUser.projectUserId === user.id
    )!.roles

    // Delete all roles from the member
    // A project member with no roles is removed from the project
    for await (const role of projectRoles) {
      await client.request({
        method: 'DELETE',
        url: `/projects/${projectId}/acl/${user.id}`,
        body: {
          roleName: role.name,
        },
      })
      console.log(`Removed ${role.name} from ${user.id}`)
    }
  }

  console.log('Complete')
}

run()
```

## Next steps

Now that you can automate the maintenance of project members that no longer require access, you may wish to take it further by importing the `internalUsers` list from a CSV file or API request.

Consider also what other bulk or maintenance operations might be streamlined with a CLI script, such as migrating content.
