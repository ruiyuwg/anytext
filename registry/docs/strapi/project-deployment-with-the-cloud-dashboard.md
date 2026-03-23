# Project deployment with the Cloud dashboard

This is a step-by-step guide for deploying your project on Strapi Cloud for the first time, using the Cloud dashboard.

Before you can deploy your Strapi application on Strapi Cloud using the Cloud dashboard, you need to have the following prerequisites:

- Strapi version `4.8.2` or higher
- Project database must be compatible with PostgreSQL. Strapi does not support and does not recommend using any external databases, though it's possible to configure one (see [advanced database configuration](/cloud/advanced/database)).
- Project source code hosted on

5. Set up your Strapi Cloud project.

   5.a. Fill in the following information:

   | Setting name | Instructions                                                                                            |
   |--------------|---------------------------------------------------------------------------------------------------------|
   | Display name | The name is automatically populated based on the repository you selected, but you can edit it if needed. |
   | Git branch   | Choose from the drop-down the branch you want to deploy. |
   | Deploy on push | Tick this box to automatically trigger a deployment when changes are pushed to your selected branch. When disabled, you will need to manually deploy the latest changes. |
   | Region       | Choose the geographic location of the servers where your Strapi application is hosted. Selected region can either be US (East), Europe (West) or Asia (Southeast). |

   :::note
   The Git branch and "Deploy on push" settings can be modified afterwards through the project settings. However, the hosting region can only be chosen during the creation of the project (see [Project Settings](/cloud/projects/settings)).
   :::

   5.b. (optional) Click on **Show advanced settings** to fill in the following options:

   | Setting name | Instructions                                                                                            |
   |--------------|---------------------------------------------------------------------------------------------------------|
   | Base directory | Write the name of the directory where your Strapi app is located in the repository. This is useful if you have multiple Strapi apps in the same repository or if you have a monorepo. |
   | Environment variables | Click on **Add variable** to add environment variables used to configure your Strapi app (see [Environment variables](/cms/configurations/environment/) for more information). You can also add environment variables to your Strapi application by adding a `.env` file to the root of your Strapi app directory. The environment variables defined in the `.env` file will be used by Strapi Cloud. |
   | Node version | Choose a Node version from the drop-down. The default Node version will automatically be chosen to best match the version of your Strapi project. If you manually choose a version that doesn't match with your Strapi project, the build will fail but the explanation will be displayed in the build logs. |

   :::strapi Using Environment Variables
   You can use environment variable to connect your project to an external database rather than the default one used by Strapi Cloud (see [database configuration](/cms/configurations/database#environment-variables-in-database-configurations) for more details). If you would like to revert and use Strapi's default database again, remove your `DATABASE_` environment variables (no automatic migration implied).

   You can also set up here a custom email provider. Sendgrid is set as the default one for the Strapi applications hosted on Strapi Cloud (see [providers configuration](/cms/features/email#providers) for more details).
   :::

## Setting up billing details

If you chose the free plan, this billing step will be skipped as you will not be asked to share your credit card details at the creation of the project.

Skip to step 5 of the section below to finalize the creation of your project.

1. Click on the **Continue to billing** button. You will be redirected to the billing page where you can enter your payment details and review your invoice.

2. In the *Payment method* section, add a credit card. This card will be used for all project-related transactions, including add-ons and overages.

3. In the *Billing information* section, fill in your payment details and billing address.

4. Review the *Invoice* section. When purchasing a monthly subscription, the subscription price will be prorated for the remaining days in the current billing cycle. Optionally, expand the *Discount code* section to enter a code.

   :::note
   Taxes may be added to your invoice based on your billing address:

   - In the EU and UK, providing a valid VAT ID exempts you from VAT. If no valid VAT ID is provided, VAT will be added to your invoice.
   - In the US, applicable sales taxes are calculated based on your state and address.
     :::

5. Click on the **Subscribe** button to finalize the creation of your new Strapi Cloud project.

## Deploying your project

After confirming the project creation, you will be redirected to your *Project dashboard* where you will be able to follow its creation and first deployment.

While your project is deploying, you can already start configuring some of your [project settings](/cloud/projects/settings).

If an error occurs during the project creation, the progress indicator will stop and display an error message. You will see a **Retry** button next to the failed step, allowing you to restart the creation process.

Once your project is successfully deployed, the creation tracker will be replaced by your deployments list and you will be able to visit your Cloud hosted project. Don't forget to create the first Admin user before sharing your Strapi project.

## What to do next?

Now that you have deployed your project via the Cloud dashboard, we encourage you to explore the following ideas to have an even more complete Strapi Cloud experience:

- Invite other users to [collaborate on your project](/cloud/projects/collaboration).
- Check out the [deployments management documentation](/cloud/projects/deploys) to learn how to trigger new deployments for your project.

# Strapi Cloud - CLI deployment

Source: //cloud/getting-started/deployment-cli
