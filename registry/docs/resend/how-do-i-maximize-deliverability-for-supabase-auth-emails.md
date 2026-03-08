# How do I maximize deliverability for Supabase Auth emails?

Source: https://resend.com/docs/knowledge-base/how-do-i-maximize-deliverability-for-supabase-auth-emails

Everything you should do before you start sending authentication emails with Resend and Supabase.

If you haven't yet, [configure your own Supabase
integration](https://resend.com/settings/integrations)!

Below are **five steps to improve the deliverability of your authentication emails**.

Prefer watching a video? Check out our video walkthrough below.

## 1. Setup a custom domain on Supabase

By default, Supabase generates a `supabase.co` domain for your project, and uses that domain for the links in your authentication emails (e.g., verify email, reset password).

Once you are ready to go live, though, it is important to setup a custom domain. The key benefit here is to align the domains used in your `from` address and the links in your emails. Especially for something as sensitive as email verification and magic links, **giving confidence to the inbox providers that the origin of the email and the links in the body are the same** can be very impactful.

This changes your links from:

```
https://039357829384.supabase.co/auth/v1/{code}
```

To something like this:

```
https://auth.yourdomain.com/auth/v1/{code}
```

Supabase has a helpful guide for [Setting up a custom domain](https://supabase.com/docs/guides/platform/custom-domains).

## 2. Setup a dedicated subdomain

There are many benefits to using a subdomain vs your root domain for sending, one being that you can isolate the reputation of the subdomain from your root domain.

For authentication emails, using a subdomain is particularly helpful because it is a way to **signal your intention to the inbox provider**. For example, if you use `auth.yourdomain.com` for your authentication emails, you are communicating to the inbox provider that all emails from this subdomain are related to sending authentication emails.

This clarity is essential because it helps the inbox provider understand that this subdomain is not used for sending marketing emails, which are more likely to be marked as spam.

If you don't want a subdomain just for auth, you can also achieve this by
establishing one subdomain for all your transactional emails (e.g.,
`notifications.yourdomain.com`).

To add a subdomain to Resend, you can [add it as a domain on the dashboard](https://resend.com/domains).

## 3. Disable link and open tracking

Link and open tracking can be great for marketing emails but not for transactional emails. This kind of **tracking can actually hurt your deliverability**. Open tracking embeds a 1x1 pixel image in the email, and link tracking rewrites the links in the email to point to Resend's servers first. Both types can be seen as suspicious by the inbox provider and hurt your deliverability.

Also, Supabase has noted that link tracking is [known for corrupting verification links](https://supabase.com/docs/guides/platform/going-into-prod), making them unusable for your users.

You can disable link and open tracking by clicking on your domain and disabling at the bottom.

## 4. Prepare for link scanners

Some inbox providers or enterprise systems have email scanners that run a `GET` request on all links in the body of the email. This type of scan can be problematic since Supabase Auth links are single-use.

To get around this problem, consider altering the email template to replace the original magic link with a link to a domain you control. The domain can present the user with a "Sign-in" button, which redirects the user to the original magic link URL when clicked.

## 5. Setup DMARC

Like our human relationships, email deliverability is built on trust. The more inboxes can trust your emails, your domain, and your sending, the more likely your emails will be delivered to the inbox. This makes [Email Authentication a critical pillar](https://resend.com/blog/email-authentication-a-developers-guide) in the journey to excellent deliverability.

That is where DMARC comes in. As the industry standard for email authentication, **DMARC is a way to tell the inbox provider that you are who you say you are**. It is a way to signal to the inbox provider that you are a legitimate sender and that your emails should be delivered to the inbox.

Following security best practices like DMARC will show your validity and authenticity.

You can use our [DMARC setup guide to get started](/dashboard/domains/dmarc).
