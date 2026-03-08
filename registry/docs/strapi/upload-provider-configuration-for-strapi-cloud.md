# Upload Provider Configuration for Strapi Cloud

Strapi Cloud comes with a local upload provider out of the box. However, it can also be configured to utilize a third-party upload provider, if needed.

Please be advised that Strapi is unable to provide support for third-party upload providers.

- A local Strapi project running on `v4.8.2+`.
- Credentials for a third-party upload provider (see

The file structure must match the above path exactly, or the configuration will not be applied to Strapi Cloud.

Each provider will have different configuration settings available. Review the respective entry for that provider in the

### Configure the Security Middleware

Due to the default settings in the Strapi Security Middleware you will need to modify the `contentSecurityPolicy` settings to properly see thumbnail previews in the Media Library.

To do this in your Strapi project:

1. Navigate to `./config/middleware.js` or `./config/middleware.ts` in your Strapi project.
2. Replace the default `strapi::security` string with the object provided by the upload provider.

**Example:**

Before pushing the above changes to GitHub, add environment variables to the Strapi Cloud project to prevent triggering a rebuild and new deployment of the project before the changes are complete.

### Strapi Cloud Configuration

1. Log into Strapi Cloud and click on the corresponding project on the Projects page.
2. Click on the **Settings** tab and choose **Variables** in the left menu.
3. Add the required environment variables specific to the upload provider.
4. Click **Save**.

**Example:**

## Deployment

To deploy the project and utilize the third-party upload provider, push the changes from earlier. This will trigger a rebuild and new deployment of the Strapi Cloud project.

Once the application finishes building, the project will use the new upload provider.

If you want to create a custom upload provider, please refer to the [Providers](/cms/features/media-library#providers) documentation in the CMS Documentation.

# Command Line Interface (CLI)

Source: //cloud/cli/cloud-cli
