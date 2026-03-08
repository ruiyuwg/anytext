# What if an email says delivered but the recipient has not received it?

Source: https://resend.com/docs/knowledge-base/what-if-an-email-says-delivered-but-the-recipient-has-not-received-it

Learn the steps to take when an email is delivered, but the recipient does not receive it.

Some emails may be marked as `Delivered` but not reach the recipient's inbox due to various inbox sorting variables. This guide provides reasons for and advice on avoiding such issues.

## Why does this happen

When an email is sent, it is marked as `Delivered` once the recipient server accepts it with a `250 OK` response. However, the server can then direct the email to the inbox, queue it for later, route it to the spam folder, or even discard it. This is done by major inbox providers (e.g., Gmail, Yahoo, Outlook), as well as by IT departments and individual users who set up firewalls or filtering rules.

As a result, even though most legitimate emails should land in the intended inboxes, your message might end up in the spam/junk folder or, in rare cases, be deleted.

**Inbox Providers do not share any information on how the messages are later filtered.** Resend is only notified about the initial acceptance and marks the email as `Delivered`. Any subsequent events (e.g., open/click events, unsubscribes) require recipient engagement.

## How to avoid this

### If you are in contact with the user

The easiest way to solve this is by cooperating with the end user. If you have direct communication with the recipient, you can ask them to **check these places for your email**:

- Corporate spam filters or firewalls
- Personal inbox filtering
- Promotional, spam, or deleted folders
- Group inboxes or queues

If they find it, ask them to mark the email as `Not Spam` or add your domain to an allowlist.

### If you are not in contact with the user

Debugging without direct contact with the user is challenging. However, there are some optimizations that can **improve your chances of delivering to their inbox next time**:

- [Configure DMARC](/dashboard/domains/dmarc) to build trust with the inbox provider
- Warm up new domains slowly before sending large volumes
- Change all links in your email to use your own domain (matching your sender domain)
- Turn off open and click tracking
- Reduce the number of images in your email
- Improve wording to be succinct, clear, and avoid spammy words

We have an [extensive but practical deliverability guide](/knowledge-base/how-do-i-avoid-gmails-spam-folder) that covers these topics in more detail.
