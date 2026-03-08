# Deliverability Insights

Source: https://resend.com/docs/dashboard/emails/deliverability-insights

Improve your deliverability with tailored insights based on your sending.

When you view your email within Resend, there is a "Insights" option. When selected, this will run deliverability best practice checks on your email and recommend possible changes to improve deliverability.

If a check passes, you'll get a nice green check. Resend will provide advice if it fails. We break these into two categories: Attention and Improvements.

## Attention Insights

Changes to your email that can improve deliverability.

#### Link URLs match sending domain

Ensure that the URLs in your email match the sending domain. Mismatched URLs can trigger spam filters.

For example, if your sending domain is `@widgets.com`, ensure links within the message point back to `https://widgets.com`.

#### DMARC Record is Valid

DMARC is a TXT record published in the DNS that specifies how email receivers should handle messages from your domain that don’t pass SPF or DKIM validation. [A valid DMARC record](/dashboard/domains/dmarc) can help improve email deliverability.

Starting in 2024, Gmail and Yahoo require senders to have a DMARC record published. When [viewing your domain](https://resend.com/domains) in Resend, we provide a suggested DMARC record if you’re unsure what to publish.

#### Include Plain Text Version

Including a plain text version of your email ensures that your message is accessible to all recipients, including those who have email clients that do not support HTML.

If you're using Resend's API, [plain text is passed via the `text` parameter](https://resend.com/docs/api-reference/emails/send-email).

This can also generate plain text using [React Email](https://react.email/docs/utilities/render#4-convert-to-plain-text).

#### Don't use "no-reply"

Indicating that this is a one-way communication decreases trust. Some email providers use engagement (email replies) when deciding how to filter your email. A valid email address allows you to communicate with your recipients easily if they have questions.

#### Keep email body size small

Gmail limits the size of each email message to 102 KB. Once that limit is reached, the remaining content is clipped and hidden behind a link to view the entire message. Keep your email body size small to avoid this issue.

This check will show the current size of your email.

#### Use full YouTube URLs

Gmail's spam filters are flagging emails containing shortened YouTube links (`youtu.be`) as potential phishing attempts. Use full YouTube URLs instead (`youtube.com/watch?v=...`).

For example, instead of using `https://youtu.be/abc123`, use `https://www.youtube.com/watch?v=abc123`.

## Improvement Insights

If you're diagnosing a deliverability issue, changing your email practices could be helpful.

#### Use a Subdomain

Using a subdomain instead of the root domain helps segment your sending by purpose. This protects different types of sending from impacting the reputation of others and clearly shows the sending purpose.

#### Disable Click Tracking

Click tracking modifies links, sometimes causing spam filters to flag emails as suspicious or phishing attempts. Disabling click tracking can help with email deliverability, especially for sensitive transactional emails like login or email verification.

If on, you can [disable click tracking on your domain in Resend](https://resend.com/domains).

#### Disable Open Tracking

Spam filters are sensitive to tracking pixels, flagging them as potential spam. Without these tracking elements, emails may bypass these filters more effectively, especially for sensitive transactional emails like login or email verification.

If on, you can [disable open tracking on your domain in Resend](https://resend.com/domains).

Open rates are not always accurate. Learn more about [why open rates may not
be accurate](/knowledge-base/why-are-my-open-rates-not-accurate).
