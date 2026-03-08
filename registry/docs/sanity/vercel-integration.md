# Vercel Integration

Sanity’s Vercel integration lets you connect your Vercel and Sanity projects. The Integration lets you manage features like billing and plan management directly in Vercel.

The integration adds environment variables to your Vercel project(s) with the Project ID, a given dataset name, and an editor token with read+write permissions. You can use these environment variables to connect your project on Vercel to Sanity’s Content Lake and fetch, create, and update data in it.

## Installation

Go to [Vercel's integrations marketplace](https://vercel.com/marketplace/sanity) and follow the instructions.

We recommend you to choose the **Native Integration** option as this lets you to have a deeper integration with Vercel’s ecosystem.

Select **Install** and follow the steps to set up the connection. These are a few key decisions you need to make:

- Specify a prefix for your environment variables: This guide uses the default, `NEXT_PUBLIC` in the examples below.
- Select a plan: we offer Free and Growth self-serve options through Vercel at this time. To sign up for an Enterprise plan, [contact sales](https://www.sanity.io/contact/sales).
- Select a project name, or use the default suggested one.

Once the installation completes, follow the getting started guide for your framework of choice.

## Usage

This integration adds your project information as environment variables. You can go to [Vercel's documentation](https://vercel.com/docs/environment-variables) to learn more about how to use and configure them.

The **project ID** will be exposed by the following environment variables in your Vercel project.

- `SANITY_API_PROJECT_ID`
- `SANITY_STUDIO_API_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`

*Project IDs are considered public.*

The **dataset** will be exposed by the following environment variables in your Vercel project.

- `SANITY_API_DATASET`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_STUDIO_API_DATASET`

*Dataset names are considered public.*

The **write** **token** will be exposed on the following environment variables in your Vercel project:

- `SANITY_API_WRITE_TOKEN`

Since write tokens give access to changing data in your dataset, they should be considered secret.

### Accessing environment variables

Here is an example of a serverless function that can be run on Vercel that will take a request with some data, and create a new document of that data in the Sanity Content Lake:

```javascript
const {createClient} = require('@sanity/client');

const config = {
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2021-03-25'
};

async function handleForm(req, res) {
  const payload = JSON.parse(req.body);
  try {
    const result = await createClient(config).create(payload);
    return res.status(200).send('ok');
  } catch (error) {
    return res.status(500)send('error');
  }
}

export default handleForm;
```

## Troubleshooting

### Select an authentication method in CLI or Studio

When you sign in to your studio, or when the CLI prompts you to authenticate, select the sign-in method that matches your Sanity account configuration:

- **If you connected a sign-in method earlier**: During the *Getting Started* guide, if you selected "Open in Sanity" on the integration Dashboard and linked a sign-in method in [Account Settings](https://www.sanity.io/manage/personal/account-settings), use that same method (GitHub or Google).
- **If you skipped that step**: Use GitHub or Google to login with the same email address you use for Vercel.
- **If neither applies**: Open the Sanity management interface from the Vercel integration Dashboard, navigate to [Account Settings](https://www.sanity.io/manage/personal/account-settings), and add a sign-in method to your account.

### Missing projects or data after signing in

If you've signed in to Sanity but don't see the projects or data you expect, you may have multiple accounts.

#### For existing Sanity users

If you used Sanity before the Vercel integration, you likely already had an account. During integration provisioning, a new account may have been created. To resolve this:

1. Add another sign-in method to consolidate your accounts in [Account Settings](https://www.sanity.io/manage/personal/account-settings).
2. Sign out of both the CLI and Sanity.
3. Continue with the *Getting Started* guide using your original account credentials.

#### For new Sanity users

You may have accidentally created a separate account. You have two options:

- **Keep the account**: Log out of both Sanity and the CLI, then continue with the *Getting Started* guide.
- **Delete the account**: Verify this is an unused account before proceeding. Deleted accounts cannot be recovered.

Before continuing with the *Getting Started* guide, add another sign-in method in [Account Settings](https://www.sanity.io/manage/personal/account-settings) to ensure seamless access between sign-in methods.

## Limitations

Projects set up via the Vercel integration need to be managed through the integration dashboard in Vercel.

Deleting a project via Sanity management interface is not supported. Plan changes need to happen through the integration Dashboard in Vercel.
