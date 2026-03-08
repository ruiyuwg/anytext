# Why are my open rates not accurate?

Source: https://resend.com/docs/knowledge-base/why-are-my-open-rates-not-accurate

Learn why your open rate statistics are not accurate and what you can do about it.

## How are open rates tracked?

A 1x1 pixel transparent GIF image is inserted in each email and includes a unique reference. When the image is downloaded, an open event is triggered.

## Why are my open rates not accurate?

Open tracking is generally not accurate because each inbox handles incoming email differently.

**Clipped messages in Gmail** happen when you send a message over 102KB. A message over this size won’t be counted as an open unless the recipient views the entire message. Resend’s Deliverability Insights on the email will note if a message exceeds this threshold.

**Some inboxes do not download images by default** or block/cache assets with a corporate firewall. This approach can prevent the open event from being tracked.

**Other inboxes open the email prior to delivering** in order to scan for malware or to [protect user privacy](https://www.apple.com/newsroom/2021/06/apple-advances-its-privacy-leadership-with-ios-15-ipados-15-macos-monterey-and-watchos-8/). This approach can trigger an open event without the recipient reading your email.

**Emails sent with only a plain text version** will not include open tracking at all. Since open tracking relies on a 1x1 pixel image, plain text emails cannot trigger open events. Only emails with an HTML version can be tracked for opens.

Because of this, open tracking is **not a statistically accurate way** of detecting if your users are engaging with your content.

## Does open tracking impact inbox placement?

Though open tracking should not impact if your email is delivered, it most likely will impact your inbox placement. Trackers are generally **used by marketers and even spammers**. Because of this, inbox providers will often use open tracking as a signal that your email is promotional, or even spam, and categorize accordingly.

**We suggest disabling open rates for transactional email**, to maximize inbox placement.

## What's the alternative?

Instead of relying on open rates, there are a few other ways to still understand your sending.

1. **Track Clicks:** Monitoring the link clicks is an even more granular way to know how a recipient engaged with your email. By knowing if they clicked, you also know that they read parts of your email and took action.
2. **Track Outside the Inbox:** Often emails are sent as a means to an end. Maybe it's to increase page visits of an announcement or convert free users to paid. Tracking your sending by metrics outside of the inbox can be a great way to understand the true impact of your sending.
