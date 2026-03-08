# How do I avoid conflicts with my MX records?

Source: https://resend.com/docs/knowledge-base/how-do-i-avoid-conflicting-with-my-mx-records

Learn how to avoid conflicts with your existing MX records when setting up a Resend domain.

## What is an MX record?

MX (Mail Exchanger) records specify where incoming mail should be delivered on behalf of a domain. Every MX value has a unique priority (also known as preference) value. The lower the number, the higher the priority.

Resend requires that you setup a MX record on two occasions:

1. **[Enabling your domain to send emails](https://resend.com/docs/dashboard/emails/introduction)**: You need to setup an MX record on `send.yourdomain.com` to establish a return-path for bounce/complaint reports from Inbox Providers. We set this return path in the email headers of every email you send through Resend.

2. **[Enabling your domain to receive emails](https://resend.com/docs/dashboard/receiving/custom-domains)**: You can setup an MX record on your domain to route all received emails to Resend.

## Won't this conflict with my existing Inbox Provider?

Let's look at an example for each occasion Resend requires you to setup a MX record.

Say you're using G Suite for your email. You'll have an MX record that looks something like this:

```
yourdomain.com     MX    10 alt3.aspmx.l.google.com.
```

This records specifies that any incoming mail to `<anything>@yourdomain.com` should be delivered to the google servers.

Now, let's say you want to use Resend to send emails from `@yourdomain.com`. You'll need to add an MX record for `send.yourdomain.com` that looks something like this:

```
send.yourdomain.com     MX    10 feedback-smtp.us-east-1.amazonses.com
```

This **won't** conflict because the MX record is for `send.yourdomain.com`, not `yourdomain.com`. MX records only impact the subdomain they are associated to, so the Resend MX record will not affect your existing records on the root domain.

Now say you want to start receiving emails through Resend.

Because you already have the MX record `yourdomain.com`, you have two options:

1. **\[Recommended] Create a MX record for a subdomain** (e.g. `subdomain.yourdomain.com`). Now emails sent to `<anything>@yourdomain.com` will continue going to G Suite, and emails sent to `<anything>@subdomain.domain.com` will go to Resend.

2. **Create a MX record with the lowest priority** among the other MX record for your domain.
   Since on our example, you already had a MX record for `yourdomain.com` point to G Suite, you would create:

```
yourdomain.com    MX    9  inbound-smtp.us-east-1.amazonaws.com
```

Now this MX record priority has a lower value (higher priority) so it will be prioritized. But keep in mind that:

- This *will* route **all** emails destined to `<anything>@yourdomain.com` to Resend, insted of your previous provider(e.g. G Suite)
- If two MX records have the same priority value, this does **not** mean it will send to both servers — instead only one server will be chosen, randomly, per email delivery attempt.

## Solving common conflicts

```
If you already have a MX record set for `send.yourdomain.com`, you will need to remove it before adding the Resend MX record.

If you need to keep the existing record, you can add a subdomain to your domain (e.g. `sub.yourdomain.com`) which will move the Resend MX location to `send.sub.yourdomain.com`.



Each MX should have a unique priority value. We suggest using 10 for your MX record on `send.yourdomain.com`, but you can use a lower number (higher priority) if 10 is already in use.


  The lowest possible value (highest priority) is 0. So if you already have a record with this priority, you'll need to remove it in order to create the MX record for Resend.
```
