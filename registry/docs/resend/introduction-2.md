# Introduction

Source: https://resend.com/docs/dashboard/api-keys/introduction

Visualize all the API Keys on the Resend Dashboard.

## What is an API Key

API Keys are secret tokens used to authenticate your requests. They are unique to your account and should be kept confidential.

## Add API Key

You can create a new API Key from the [API Key Dashboard](https://resend.com/api-keys).

1. Click **Create API Key**.
2. Give your API Key a name (maximum 50 characters).
3. Select **Full access** or **Sending access** as the permission.
4. If you select **Sending access**, you can choose the domain you want to restrict access to.

For security reasons, you can only view the API Key once. Learn more about
[API key best practices](/knowledge-base/how-to-handle-api-keys).

## Set API Key permissions

There are two different permissions of API Keys:

1. **Full access**: grants access to create, delete, get, and update any resource.
2. **Sending access**: grants access only to send emails.

With API Key permissions, you can isolate different application actions to different API Keys. Using multiple keys, you can view logs per key, detect possible abuse, and control the damage that may be done accidentally or maliciously.

## View all API Keys

The [API Dashboard](https://resend.com/api-keys) shows you all the API Keys you have created along with their details, including the **last time you used** an API Key.

Different color indicators let you quickly scan and detect which API Keys are being used and which are not.

## Edit API Key details

After creating an API Key, you can edit the following details:

- Name
- Permission
- Domain

To edit an API Key, click the **More options**  button and then **Edit API Key**.

You cannot edit an API Key value after it has been created.

## Delete inactive API Keys

If an API Key **hasn't been used in the last 30 days**, consider deleting it to keep your account secure.

You can delete an API Key by clicking the **More options**  button and then **Remove API Key**.

## View API Key logs

When visualizing an active API Key, you can see the **total number of requests** made to the key. For more detailed logging information, select the underlined number of requests to view all logs for that API Key.

## Export your data

Admins can download your data in CSV format for the following resources:

- Emails
- Broadcasts
- Contacts
- Segments
- Domains
- Logs
- API keys

Currently, exports are limited to admin users of your team.

To start, apply filters to your data and click on the "Export" button. Confirm your filters before exporting your data.

If your exported data includes 1,000 items or less, the export will download immediately. For larger exports, you'll receive an email with a link to download your data.

All admins on your team can securely access the export for 7 days. Unavailable exports are marked as "Expired."

All exports your team creates are listed in the
[Exports](https://resend.com/exports) page under **Settings** > **Team** >
**Exports**. Select any export to view its details page. All members of your
team can view your exports, but only admins can download the data.
