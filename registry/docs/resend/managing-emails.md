# Managing Emails

Source: https://resend.com/docs/dashboard/emails/introduction

Learn how to view and manage all sent emails on the Resend Dashboard.

## View email details

See all the metadata associated with an email, including the sender address, recipient address, subject, and more from the [Emails](https://resend.com/emails) page. Select any email to view its details.

Each email contains a **Preview**, **Plain Text**, and **HTML** version to visualize the content of your sent email in its various formats.

## Understand email events

Here are all the events that can be associated with an email:

- `bounced` - The recipient's mail server rejected the email. ([Learn more about bounced emails](/dashboard/emails/email-bounces))
- `canceled` - The scheduled email was canceled (by user).
- `clicked` - The recipient clicked on a link in the email.
- `complained` - The email was successfully delivered to the recipient's mail server, but the recipient marked it as spam.
- `delivered` - Resend successfully delivered the email to the recipient's mail server.
- `delivery_delayed` - The email couldn't be delivered to the recipient's mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.
- `failed` - The email failed to be sent.
- `opened` - The recipient opened the email. ([Open rates are not always accurate](/knowledge-base/why-are-my-open-rates-not-accurate))
- `queued` - The email created from Broadcasts or Batches is queued for delivery.
- `scheduled` - The email is scheduled for delivery.
- `sent` - The email was sent successfully.
- `suppressed` - The email was not sent because the recipient is on the suppression list. ([Learn more about the suppression list](/knowledge-base/why-are-my-emails-landing-on-the-suppression-list))

## Share email link

You can share a public link of a sent email, which is valid for 48 hours. Anyone with the link can visualize the email.

To share a link, click on the **dropdown menu** , and select **Share email**.

Then copy the URL and share it with your team members.

Anyone with the link can visualize the email without authenticating for 48 hours.

## See associated logs

You can check all the logs associated with an email. This will help you troubleshoot any issues with the request itself.

To view the logs, click on the dropdown menu, and select "View log".

This will take you to logs, where you can see all the logs associated with the email.

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
