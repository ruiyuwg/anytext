# How do I avoid Gmail's spam folder?

Source: https://resend.com/docs/knowledge-base/how-do-i-avoid-gmails-spam-folder

Learn how to improve inbox placement in Gmail.

This guide is adapted from Google's article to [Prevent mail from being
blocked or sent to
spam](https://support.google.com/mail/answer/81126?hl=en\&vid=1-635789122382665739-3305764358\&sjid=4594872399309427672-NA#thirdparty)

## Authenticate Your Email

All communication is built on trust, and email is no different. When you send an email, you want to be sure that the recipient (and Gmail) knows who you are and that you are a legitimate sender. Email authentication is a way to prove that an email is really from you. It also helps to prevent your email from being spoofed or forged.

| Authentication                    | Requires Setup | Purpose                                                      |
| --------------------------------- | -------------- | ------------------------------------------------------------ |
| **SPF**                           | No             | Proves you are allowed to send from this domain              |
| **DKIM**                          | No             | Proves your email originated from you                        |
| [DMARC](/dashboard/domains/dmarc) | Yes            | Proves you own the domain and instructs how to handle spoofs |
| [BIMI](/dashboard/domains/bimi)   | Yes            | Proves you are the brand you say you are                     |

**SPF** and **DKIM** are baseline requirements for all sending which is why both are automatically setup when you verify your domain with Resend. [DMARC](/dashboard/domains/dmarc) and [BIMI](/dashboard/domains/bimi) are both additional authentication methods that can build trust and further improve inbox placement.

**Action Items**

1. [Setup DMARC](/dashboard/domains/dmarc) for your domain
2. [Setup BIMI](/dashboard/domains/bimi) for your domain

## Legitimize Your Domain

Gmail is using many methods to identify who you are as a sender, and one way they do that is by looking at your domain. You should make sure that the domain you send with is the same domain where your website is hosted. If you send from `@example.com` but your website is hosted at `example.net`, Gmail won't be able to use your site to help legitimize you.

You can regularly check if your domain is listed as unsafe with [Google Safe Browsing](https://transparencyreport.google.com/safe-browsing/search?hl=en) to make sure Google isn't classifying your domain as suspicious.

**Action Items**

1. Host your website at the domain that you send from (especially for new domains)
2. Check if your domain is listed as unsafe with [Google Safe Browsing](https://transparencyreport.google.com/safe-browsing/search?hl=en)

## Manage your Mailing List

Gmail monitors your sending across all Gmail inboxes to see if recipients want to receive your emails. This is mainly measured by their engagement with your messages (opens, clicks, replies). If Gmail doesn't see this engagement, they will start to move your inbox placement towards promotional or even spam.

It would seem like adding open and click tracking would be ideal to gather this information, but this has been seen to negatively impact your inbox placement. Instead, focus on sending to recipients who want to receive your emails.

**Prevent sending to recipients who**:

- Didn't ask to be sent to (opt-in)
- Show no signs of engagement with your emails or product
- Requested to be unsubscribed
- Marked your emails as spam (complained)
- Never received your email (bounced)

**Action Items**

1. Make it easy to opt-out to your emails (including the [Unsubscribe Headers](https://resend.com/docs/dashboard/emails/add-unsubscribe-to-transactional-emails))
2. Use [Webhooks](/webhooks/introduction) to remove bounced or complained recipients from your list
3. Use [Gmail's Postmaster Tool](https://support.google.com/mail/answer/9981691?sjid=4594872399309427672-NA\&visit_id=638259770782293948-1913697299\&rd=1) to monitor your spam reports

## Monitor Affiliate Marketers

Affiliate marketing programs offer rewards to companies or individuals that send visitors to your website. However, spammers can take advantage of these programs. If your brand is associated with marketing spam, other messages sent by you might be marked as spam.

We recommend you regularly monitor affiliates, and remove any affiliates that send spam.

**Action Items**

1. Monitor your affiliate marketers for any spam

## Make Content People Want to Read

Trust is not only built with the domain, but also in the message. Sending content that people want to read and that is not misleading will help build trust with Gmail.

A few good rules for content:

- Less is more (keep it simple and to the point)
- Plain text over complex HTML
- Links should be visible and match the sending domain
- No content should be hidden or manipulative

**Action Items**

1. Reduce and simplify your email content
2. Make sure your links are using your sending domain

## Establish Sending Patterns

This is especially true for new domains since Gmail doesn't have any history of trust. Sending a large volume of emails from a new domain will likely result in poor inbox placement. Instead, start small and build up your sending volume over time.

A great way to start is by sending regular person-to-person email with your gmail account. These messages will have high engagement and built trust quickly, which will carry over when you start integrating with a sending service like Resend.

It can also be very helpful to segment your sending by sending address to give Gmail more indication of what type of sending you are doing. This allows Gmail to place your emails in the correct inbox tab (Primary, Promotions, etc.).

Some examples of helpful email addresses:

- **Personal emails** should come from an address with a name like <marissa@domain.com>
- **Transactional emails** should come from an address like <notifications@domain.com>
- **Marketing emails** should come from an address like <updates@domain.com>.

**Action Items**

1. Send emails from your gmail account before sending transactional
2. Send transactional emails before sending marketing emails
3. Choose dedicated sending addresses for each type of email

## Summary

Email deliverability is overwhelming. One way to simplify it is to think: **what would a phisher do?**

**Then do the opposite!**

Gmail's goal is to only show emails that their users want to see and malicious emails are at the very bottom of the list. Reverse engineer phishing sending habits and consider how you could prove to Gmail at each step that you clearly have no malicious intent.

Anything we missed? [Let us know](https://resend.com/help).
