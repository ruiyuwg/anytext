# Forward Received Emails

Source: https://resend.com/docs/dashboard/receiving/forward-emails

Forward Received emails to another email address.

Received emails can also be forwarded to another email address.

Webhooks do not include the actual HTML or Plain Text body of the email. You
must call the [received emails
API](/api-reference/emails/retrieve-received-email) to retrieve them. This
design choice supports large payloads in serverless environments that have
limited request body sizes.

## Using the `forward` helper method

The Node.js SDK provides a `forward()` helper method that simplifies forwarding received emails. This method automatically handles fetching the email content and attachments.

Here's an example of forwarding an email in a Next.js application:

```js app/api/events/route.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

export const POST = async (request: NextRequest) => {
  const event = await request.json();

  if (event.type === 'email.received') {
    const { data, error } = await resend.emails.receiving.forward({
      emailId: event.data.email_id,
      to: 'delivered@resend.dev',
      from: 'onboarding@resend.dev',
    });

    if (error) {
      return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }

    return NextResponse.json(data);
  }

  return NextResponse.json({});
};
```

By default, the `forward` method forwards the email in a way that preserves the original email content and attachments exactly as received.

Alternatively, you can forward emails as if they had been forwarded through an email client, with the `forwarded message` footer. For that, use `passthrough: false` and provide custom text or HTML content. The original email will be shown after the `forwarded message` footer:

```js app/api/events/route.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.receiving.forward({
  emailId: event.data.email_id,
  to: 'delivered@resend.dev',
  from: 'onboarding@resend.dev',
  passthrough: false,
  text: 'See attached forwarded message.',
  html: '<p>See attached forwarded message.</p>',
});
```

## Manual forwarding

If you're not using Node.js or prefer not to use the `forward` helper method, you can manually forward received emails using the [Send Email API](/api-reference/emails/send-email).

The recommended approach is to download the raw email and parse it to properly extract content and attachments (especially for inline images). Then, you can send a new email with the extracted content and attachments using the [Send Email API](/api-reference/emails/send-email).

```js app/api/events/route.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { simpleParser } from 'mailparser';

const resend = new Resend('re_xxxxxxxxx');

export const POST = async (request: NextRequest) => {
  const event = await request.json();

  if (event.type === 'email.received') {
    // Get the email metadata
    const { data: email } = await resend
      .emails
      .receiving
      .get(event.data.email_id);

    // Download the raw email content if available
    if (!email?.raw?.download_url) {
      return new NextResponse('Raw email not available', { status: 500 });
    }

    const rawResponse = await fetch(email.raw.download_url);
    const rawEmailContent = await rawResponse.text();

    // Parse the raw email to extract content and attachments
    const parsed = await simpleParser(rawEmailContent, {
      skipImageLinks: true,
    });

    // Extract attachments with content_id for inline images
    const attachments = parsed.attachments.map((attachment) => {
      // Strip < and > from content IDs for proper inline image handling
      const contentId = attachment.contentId
        ? attachment.contentId.replace(/^<|>$/g, '')
        : undefined;

      return {
        filename: attachment.filename,
        content: attachment.content.toString('base64'),
        content_type: attachment.contentType,
        content_id: contentId || undefined,
      };
    });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: email.subject || '(no subject)',
      html: parsed.html || undefined,
      text: parsed.text || undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }

    return NextResponse.json(data);
  }

  return NextResponse.json({});
};
```

This example uses the [`mailparser`](https://www.npmjs.com/package/mailparser)
library (`npm install mailparser`) to parse the raw email. For other
languages/SDKs, you'll need an equivalent email parsing library capable of
processing emails compliant to [RFC
5322](https://datatracker.ietf.org/doc/html/rfc5322).
