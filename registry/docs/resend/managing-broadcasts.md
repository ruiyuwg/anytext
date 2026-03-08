# Managing Broadcasts

Source: https://resend.com/docs/dashboard/broadcasts/introduction

Send marketing emails efficiently without code.

Broadcasts allow you to send email blasts to your customers using a no-code editor on Resend, or from our [Broadcast API](/api-reference/broadcasts/create-broadcast).

You can use this to send email blasts such as:

- Newsletters
- Product Launches
- Investor Updates
- Promotions
- Changelogs

## Sending a Broadcast from Resend

Our Broadcasts feature was made to enable your entire team to send email campaigns without having to ask for help from developers.

### No-Code Editor

### Markdown Support

You can also write your emails using Markdown. This works with headings, lists, italic, bold, links, and quotes.

You can easily copy and paste content from applications like Notion, Google Docs, iA Writter and many others maintaining formatting consistency.

### Custom Styling

You can customize the look and feel of your email by changing **global styles** such as the background color, link color, and container size, allowing you to create emails aligned with your brand identity.

To do this, click on **Styles** at the top left of the Broadcast editor. You can edit specific images or lines of texts by selecting or highlighting them prior to clicking on **Styles**.

You can also edit individual styles for each component, including the font size, font weight, and text alignment. You can also set custom properties for each component, such as image alt, button links, and social links,

### Personalize your content

When creating broadcasts, you can include dynamic audience data to personalize the email content.

- `{{{FIRST_NAME|fallback}}}`
- `{{{LAST_NAME|fallback}}}`
- `{{{EMAIL}}}`
- `{{{RESEND_UNSUBSCRIBE_URL}}}`

When you include the `{{{RESEND_UNSUBSCRIBE_URL}}}` placeholder in the call, Resend includes an unsubscribe link in the email to automatically handle unsubscribe requests.

Learn how to create a [custom Unsubscribe
Page](/dashboard/settings/unsubscribe-page).

### Testing & Sending

Once you're finished writing your email, you can preview it in your personal inbox or send it to your team for feedback.

To do this, click on **Test Email** on the top right of your screen. Enter in the email address you'd like to send your email to, and then click on **Send Test Email** to complete.

Once you're ready to send your email to your Audience, click on **Send**, and slide to confirm.

**Note**: Test emails do not include any custom Reply-To address that may have been configured. This behavior is limited to test mode and does not affect actual email sends.

## Managing Multiple Broadcasts

You can perform bulk actions on multiple broadcasts at once to efficiently manage your campaigns.

### Bulk Delete Drafts

To delete multiple draft broadcasts:

1. Select the broadcasts you want to delete by clicking the checkboxes next to each broadcast
2. Click **Delete** in the bottom action bar
3. Type the broadcast name (for single selection) or `DELETE N BROADCASTS` (for multiple) to confirm
4. Press **Cmd+Enter** or click **Delete broadcasts** to complete

You can also use keyboard shortcuts:

- **Cmd+A** to select all broadcasts on the current page
- **Backspace** to open the delete confirmation modal

  Only draft broadcasts can be deleted. Sent or queued broadcasts cannot be
  removed.

### Bulk Cancel Schedules

To cancel the schedule for multiple scheduled broadcasts:

1. Select the scheduled broadcasts you want to cancel
2. Click **Cancel schedule** in the bottom action bar
3. Type `CANCEL` to confirm
4. Press **Cmd+Enter** or click **Cancel schedules** to complete

When you cancel a scheduled broadcast, it returns to draft status and won't be sent at the scheduled time.

### Using Command Palette

You can also access bulk actions through the command palette (Cmd+K):

- **Select all** - Select all broadcasts on the current page
- **Delete selected** - Delete selected draft broadcasts
- **Cancel schedule** - Cancel schedules for selected broadcasts

## Clone as Template

You can turn any sent Broadcast into a [reusable Template](/dashboard/templates/introduction) by clicking the more options button  next to a Broadcast and choosing **Clone as template**.

Cloning reuses a Broadcast's design and content as a starting point for transactional emails.

## Sending a Broadcast from the Broadcast API

We also offer the option to send your Broadcasts from our [Broadcast API](/api-reference/broadcasts/create-broadcast).

The Broadcast API offers 6 endpoints for programmatically creating, updating, and sending broadcasts.

## Understand broadcast statuses

Here are all the statuses that can be associated with a broadcast:

- `draft` - The broadcast is a draft. Drafts can be edited, deleted, or scheduled for sending.
- `scheduled` - The broadcast is scheduled to be sent at a specific time. Scheduled broadcasts can have their schedule canceled, which returns them to draft status.
- `sent` - The broadcast was sent.
- `queued` - The broadcast is queued for delivery.

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

# Performance Tracking

Source: https://resend.com/docs/dashboard/broadcasts/performance-tracking

Track your Broadcasts email performance in real-time

Once your broadcast is sent, you can track its performance right away. The insights you can view are emails delivered, unsubscribed, click rate, and open rate.

You can view these insights by clicking on [Broadcast](https://resend.com/broadcasts) in the left column, and then clicking on the Broadcast that you want to view.

Please note, at times, open rates can be inaccurate for a number of reasons due to the way inbox providers handle incoming emails. You can [read more about this here.](https://resend.com/docs/knowledge-base/why-are-my-open-rates-not-accurate)
