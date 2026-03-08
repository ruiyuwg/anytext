# Send customer emails

Configure and send invoicing emails to your customers.

Set up Stripe to send important email notifications and reminders to your customers. You can configure email notifications to contain a link to a Stripe-hosted page or your own custom URL that customers can use to confirm or update their payment details and manage their subscriptions.

> #### Invoice compliance
>
> Stripe *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) are [customizable](https://docs.stripe.com/invoicing/customize.md). Because you have a better understanding of your customers and your business than Stripe does, make sure that your invoices include all the necessary information.

## Customer emails

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

You can configure Stripe to send email notifications or reminders to your customer:

- Upon failed payment attempts.
- After Stripe [finalizes](https://docs.stripe.com/invoicing/integration/workflow-transitions.md#finalized) an invoice.
- With [receipts](https://dashboard.stripe.com/settings/emails) after invoices are paid.
- When a payment requires [3D Secure](https://docs.stripe.com/payments/3d-secure.md).
- When a card on file is about to expire.
- If a one-off invoice hasn’t been fully paid.
- When a credit note is created.
- When a refund is issued.
- When a subscription trial is ending.
- Upon cancellation of subscription.

Before you start sending email notifications and reminders, you can customize your [branding](https://dashboard.stripe.com/account/branding).
![Update card information](https://b.stripecdn.com/docs-statics-srv/assets/update-card-information.da9d6be4f5bad9e7eb686cc2ba205af6.png)

Remind your customers to update their card information

## Configure email reminders and notifications

Choose the emails to send to your customers and configure self-serve settings, including:

- How customers update their payment methods.
- How customers manage, update, or cancel their subscriptions.

These emails include a link to a Stripe-hosted customer portal or your own custom URL to allow your customers to update their payment method. You can also include a link for your customers to manage their subscriptions. You can’t mix and match Stripe-hosted and your custom URL for different emails.

When using custom URLs, Stripe appends a query parameter named `stripe_source` to identify which email type the customer opens the link from. The values for `stripe_source` are: `free_trial_ending`, `upcoming_invoice`, `invoice_receipt`, and `failed_payment`.

To enable emails for your customers:

1. In the Stripe Dashboard, go to **Settings** > **Billing** > [Subscriptions and emails](https://dashboard.stripe.com/settings/billing/automatic).
2. Under **Email notifications and customer management**, select the email notifications to send to your customers.
3. Configure **Payment method updates** settings to redirect your customers to a [Stripe-hosted customer portal](https://docs.stripe.com/customer-management.md) or your own subscription management page.
4. Configure **Subscription management** settings to redirect your customers to a [Stripe-hosted customer portal](https://docs.stripe.com/customer-management.md) or your own subscription management page.

> #### Regulatory compliance
>
> To [comply with FTC and California laws](https://support.stripe.com/questions/faq-ftc-california-subscription-law-changes-require-billing-updates), Stripe Billing offers a **near one-click cancellation** process, simplifying how customers manage their subscriptions. You must enable **Subscription Management** to include manage subscription links in your billing emails to avoid compliance risks.

### Automatic email reminders for unpaid invoices

To enable automatic reminders for customers regarding unpaid invoices:

1. In the Stripe Dashboard, go to **Settings** > **Billing** > [Subscriptions and emails](https://dashboard.stripe.com/settings/billing/automatic).
2. Under **Manage invoices sent to customers**, select **Send reminders if a recurring invoice hasn’t been paid**.
3. Select if you want Stripe to send the reminder before, when, or after the invoice is due. You can choose from a set of predefined options.

If you’ve set up and verified a [custom email domain](https://docs.stripe.com/get-started/account/email-domain.md), we send invoicing emails from that domain.

### Email reminders

You can send one-off invoice email reminders to your customers using the Dashboard or API. To send an email reminder about an expiring card, go to [Email notifications and customer management](https://dashboard.stripe.com/settings/billing/automatic) and enable **Send emails about expiring cards**.

#### Dashboard

To send a one-time invoice email reminder:

1. Navigate to the [Invoices page](https://dashboard.stripe.com/test/invoices).
2. Click the customer’s invoice > **Send invoice**. Before you resend an invoice, Stripe shows you a preview of the [hosted invoice page](https://docs.stripe.com/invoicing/hosted-invoice-page.md). To download the associated invoice PDF, click **Invoice PDF** on the **Invoice details** page.
   ![Hosted Invoice Page](https://b.stripecdn.com/docs-statics-srv/assets/hosted-invoice-page-guide.df3cc5a1e4180c338269aacdfa792180.png)

Hosted Invoice Page
![Invoice PDF](https://b.stripecdn.com/docs-statics-srv/assets/invoice-pdf-guide.d79c407ca08ee4b14dc0519fb3772309.png)

Invoice PDF

#### API

To send a one-off invoice email reminder, call the [Send](https://docs.stripe.com/api/invoices/send.md) endpoint:

```curl
curl -X POST https://api.stripe.com/v1/invoices/id/send \
  -u "<<YOUR_SECRET_KEY>>:"
```

When you use the API, the [collection\_method](https://docs.stripe.com/api/invoices/create.md#create_invoice-collection_method) is automatically set to `charge_automatically`. This means that Stripe automatically charges the customer’s payment method on file. If you’re an Invoicing Plus user and the charge fails, Stripe automatically retries the payment based on your [Subscriptions and emails settings](https://dashboard.stripe.com/settings/billing/automatic). Otherwise, Stripe marks the payment as failed.

Alternatively, you can set `collection_method` to `send_invoice`. This sends an email to the customer so they can initiate payment. When you use `send_invoice`, you must also specify [days\_until\_due](https://docs.stripe.com/api/invoices/create.md#create_invoice-days_until_due) or [due\_date](https://docs.stripe.com/api/invoices/create.md#create_invoice-due_date).

> Stripe sends the following API events during the [invoice lifecycle](https://docs.stripe.com/invoicing/overview.md#invoice-lifecycle): `invoice.created`, `invoice.finalized`, `invoice.sent`, `invoice.paid`.

### Email notifications

You can send email notifications to your customers by configuring your Dashboard settings under [Email notifications and customer management](https://dashboard.stripe.com/settings/billing/automatic).

- To send an email notification when a card payment fails, enable **Send emails when card payments fail**.
- To send an email reminder for an unpaid one-time invoice, go to [Advanced invoicing features](https://dashboard.stripe.com/settings/billing/invoice).
- To email finalized invoices, go to [Manage invoices sent to customers](https://dashboard.stripe.com/settings/billing/automatic) and select **Send finalized invoices and credit notes to customers**.
- To send an email notification with a receipt after a successful payment, go to your **Email settings**.

> Learn more about how you can use customer emails to [recover revenue](https://docs.stripe.com/billing/revenue-recovery/customer-emails.md).

#### 3D Secure payments

If charging a customer’s card on file requires them to complete 3D Secure authentication and you’ve enabled **Send a Stripe-hosted link for cardholders to authenticate when required** in your [3D Secure settings](https://dashboard.stripe.com/settings/billing/automatic), Stripe sends an email. The email links to a Stripe-hosted page where they can confirm the payment.

## Additional email recipients

You can provide additional recipients to your customer’s Billing emails (including receipts sent after successful payments) using the Dashboard.

> The Stripe API doesn’t currently support adding recipients to Billing emails.

1. Go to the [Customers page](https://dashboard.stripe.com/test/customers) in your Dashboard.
2. Click the customer you want to add email recipients for to open the customer’s detail page.
3. Click the **Edit** link in the **Details** section of the left pane to open the **Update customer** dialog. ![Details section with Edit link highlighted.](https://b.stripecdn.com/docs-statics-srv/assets/edit-emails.18a5f678dc05901c6d1e5ade713afdc1.png)
4. In the **Billing information** section of the **Update customer** dialog, unselect the **Same as account email** checkbox. ![Billing section with same as account checkbox unselected.](https://b.stripecdn.com/docs-statics-srv/assets/additional-emails.df018f8ddec164bb58653a0ede84d1a8.png)
5. (Optional) Set the value of the displayed field to a comma-separated list of emails that should be in the “To” line of Billing emails. If you leave this field blank, Stripe continues to use the account email.
6. Click the **Add more recipients** link to access the **Emails to CC** field. Set the value of the field to a comma-separated list of email addresses that you want in the CC line of Billing (Invoice and Subscription) emails.

If you add recipients to the Customer using the previous steps, Stripe automatically pre-populates these emails to invoices you send through the Dashboard.

## Change the Stripe invoice template

You can create your own custom email template to replace the Stripe prebuilt email by [configuring the invoice template](https://dashboard.stripe.com/settings/billing/invoice). Stripe applies your custom template to all new invoices.

## Stop sending customer emails for successful payments

To opt out of sending your customers emails for successful payments:

1. In the Stripe Dashboard, go to **Settings** > **Business** > [Customer emails](https://dashboard.stripe.com/settings/emails).
2. Under Payments, disable **Successful payments**.

If you [automatically charge](https://docs.stripe.com/invoicing/automatic-charging.md) a customer and you disable email notifications for successful payments, they don’t receive an [email receipt](https://docs.stripe.com/invoicing/dashboard.md#invoice-receipts). To set up automatic email receipts, see [Email receipts and paid invoices](https://docs.stripe.com/receipts.md#automatically-send-receipts).

## Disable Stripe invoice emails and send your own

Stripe can use *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) to notify you of changes to your invoices—when they’re finalized, paid, marked uncollectible, and so on. For each event that you receive, you can construct and deliver your own emails. If you disable finalized invoice emails, Stripe continues to send webhooks as a reminder for your own email solution. Learn more about [webhook endpoints and invoices](https://docs.stripe.com/billing/subscriptions/webhooks.md#understand).

## Email PDF attachments

When Stripe emails an invoice, we automatically include a PDF attachment of the same invoice to assist your customer with record keeping. If you turn on emails for successful payments—and an invoice is set to charge automatically—the receipt email includes a PDF attachment of both the original invoice and the invoice receipt. Visit the [Invoice settings](https://dashboard.stripe.com/settings/billing/invoice) to disable this behavior.

## Email logs

For the customer emails sent within the last 30 days, their logs are available to view within the [customer](https://dashboard.stripe.com/customers) page.

## See also

- [Use the Dashboard](https://docs.stripe.com/invoicing/dashboard.md)
- [Customize invoices](https://docs.stripe.com/invoicing/customize.md)
- [Hosted Invoice Page](https://docs.stripe.com/invoicing/hosted-invoice-page.md)
- [Automate customer emails](https://docs.stripe.com/billing/revenue-recovery/customer-emails.md)
