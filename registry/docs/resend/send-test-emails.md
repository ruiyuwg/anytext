# Send Test Emails

Source: https://resend.com/docs/dashboard/emails/send-test-emails

Simulate different events by sending test emails.

## How to send test emails

During development, it's important to test different deliverability scenarios.

> **Example**: When an email hard bounces or is marked as spam, it's important to stop sending emails to the recipient, as continuing to send emails to those addresses will damage your domain reputation. We recommend [creating a webhook endpoint](/webhooks/introduction) to capture these events and remove the addresses from your mailing lists.

When testing, avoid:

- sending to fake email addresses
- setting up a fake SMTP server

We provide the following test email addresses to help you simulate different email events without damaging your domain reputation. These test emails enable the safe use of Resend's Dashboard, Webhooks, and API when developing your application.

All test email addresses support labeling, which enables you to send emails to the same test address in multiple ways. You can add a label after the `+` symbol (e.g., `delivered+label1@resend.dev`) to help track and differentiate between different test scenarios in your application.

## Test delivered emails

To test that your emails are being successfully delivered, you can send an email to:

```
delivered@resend.dev
```

With labeling support, you can also use:

```
delivered+user1@resend.dev
delivered+user2@resend.dev
delivered+user3@resend.dev
```

## Test bounced emails

To test that the recipient's email provider rejected your email, you can send an email to:

```
bounced@resend.dev
```

With labeling support, you can also use:

```
bounced+user1@resend.dev
bounced+user2@resend.dev
bounced+user3@resend.dev
```

This will generate a SMTP 550 5.1.1 ("Unknown User") response code.

## Test "Marked as Spam" emails

To test that your emails are being received but marked as spam, you can send an email to:

```
complained@resend.dev
```

With labeling support, you can also use:

```
complained+user1@resend.dev
complained+user2@resend.dev
complained+user3@resend.dev
```

## Test suppressed emails

To test that your emails are being suppressed, you can send an email to:

```
suppressed@resend.dev
```

When using this test email, the suppression reason will indicate the address
was previously bounced

## Using labels effectively

The suppressed test email address does not support labeling yet

The labeling feature allows you to use any string as a label after the `+` symbol. This is particularly useful for:

- Testing different email flows (e.g., `delivered+signup@resend.dev`, `delivered+password-reset@resend.dev`)
- Tracking webhook responses for specific test scenarios
- Differentiating between multiple test runs
- Matching responses with the specific email address that triggered the event
