# Migrating from Audiences to Segments

Source: https://resend.com/docs/dashboard/segments/migrating-from-audiences-to-segments

Learn how to migrate from Audiences to Segments

We've recently changed how Contacts are segmented. Before, each Contact was part of one Audience and if you created another contact with the same email address in a different Audience, it would be a completely separate object.

In the new model, Contacts are now independent of Audiences, which are now called Segments. A Contact can be in zero, one or multiple Segments and still count as one when calculating your quota usage.

Contacts API endpoints that previously required an `audience_id` can now be used directly instead.

## What's changing?

We're moving to a **Global Contacts** model.

- **Before**: If a Contact with the same email appeared in multiple Segments, it was counted as multiple Contacts.
- **Now**: Each email address is treated as a single Contact across your team, even if it appears in multiple Segments.

The new model offers three concepts:

- **Contact**: a global entity linked to a specific email address.
- **Segment**: an internal segmentation tool for your team to organize sending.
- **Topic**: a user-facing tool for managing email preferences.

## Unsubscribing

Previously, when a contact clicked "unsubscribe," their contact status were marked was "Unsubscribed" only from the specific Audience used in that Broadcast.

From now on, contacts will see a preference page where they can:

- Unsubscribe from certain **Topics** (email's preference).
- Or unsubscribe from **everything** you send (update contact status).

## What you should do

If you've been using Audiences for both segmentation and unsubscribes, we recommend switching your unsubscribe logic to **Topics**:

1. Create a Topic for each type of email you send.
2. Assign the right users to each Topic.
3. Use Segments purely for your internal organization.

With this setup, when you send a Broadcast, your users can choose which Topics to unsubscribe from—or opt out completely.

For details on the new API endpoints view:

- [Contacts](/api-reference/contacts/create-contact)
- [Topics](/api-reference/topics/create-topic)
- [Segments](/api-reference/segments/create-segment)

## How can we help?

If you have a use case not covered here, [please reach out](https://resend.com/help). We'll make sure your transition is smooth.

# Managing Billing

Source: https://resend.com/docs/dashboard/settings/billing

Manage your account subscription and billing information

The [Billing](https://resend.com/settings/billing) page in the Settings section provides a clear view of your subscription details, billing email, payment method, and account invoices. From here, you can:

- View and manage your subscription - Upgrade, downgrade, or modify your current plan.
- Manage billing contacts - Ensure the right people receive billing-related notifications.
- Update payment information - Add or change your credit card or billing details.
- Add billing address - Provide your billing address for invoices.
- Add tax ID - Add your VAT number or tax ID for proper invoicing.
- Access invoices - Download past invoices for your records.

For any other billing inquiries, please [contact support](https://resend.com/help).

## How to cancel your subscription

1. Go to the [Billing](https://resend.com/settings/billing) page.
2. Click on the three dots  next to your plan.
3. Select **Cancel Subscription** from the dropdown menu.
