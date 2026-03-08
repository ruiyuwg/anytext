# Create Broadcast

Source: https://resend.com/docs/api-reference/broadcasts/create-broadcast

POST /broadcasts
Create a new broadcast to send to your contacts.

## Body Parameters

The ID of the segment you want to send to.

```
Audiences are now called Segments. Follow the [Migration
Guide](/dashboard/segments/migrating-from-audiences-to-segments).
```

Sender email address.

To include a friendly name, use the format `"Your Name <sender@domain.com>"`.

Email subject.

Reply-to email address. For multiple addresses, send as an array of strings.

The HTML version of the message. You can include Contact Properties in the
body of the Broadcast. Learn more about [Contact
Properties](/dashboard/audiences/contacts).

The plain text version of the message. You can include Contact Properties in the body of the Broadcast. Learn more about [Contact Properties](/dashboard/audiences/contacts).

```
If not provided, the HTML will be used to generate a plain text version. You
can opt out of this behavior by setting value to an empty string.
```

The React component used to write the message. *Only available in the Node.js
SDK.*

The friendly name of the broadcast. Only used for internal reference.

The topic ID that the broadcast will be scoped to.

Send the broadcast immediately after creation. Defaults to `false`.

```
When set to `true`, the broadcast will be sent or scheduled (if `scheduled_at` is provided) without requiring a separate call to the [Send Broadcast](/api-reference/broadcasts/send-broadcast) endpoint.
```

Schedule the broadcast to be sent later. The date should be in natural language (e.g.: `in 1 min`) or ISO 8601 format (e.g: `2024-08-05T11:52:01.858Z`).

```
This parameter requires `send` to be set to `true`.
```

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Create a draft broadcast
const { data, error } = await resend.broadcasts.create({
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  from: 'Acme <onboarding@resend.dev>',
  subject: 'hello world',
  html: 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
});

// Create and send immediately
const { data, error } = await resend.broadcasts.create({
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  from: 'Acme <onboarding@resend.dev>',
  subject: 'hello world',
  html: 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
  send: true,
});

// Create and schedule
const { data, error } = await resend.broadcasts.create({
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  from: 'Acme <onboarding@resend.dev>',
  subject: 'hello world',
  html: 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
  send: true,
  scheduledAt: 'in 1 hour',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Create a draft broadcast
$resend->broadcasts->create([
  'segment_id' => '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  'from' => 'Acme <onboarding@resend.dev>',
  'subject' => 'hello world',
  'html' => 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
]);

// Create and send immediately
$resend->broadcasts->create([
  'segment_id' => '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  'from' => 'Acme <onboarding@resend.dev>',
  'subject' => 'hello world',
  'html' => 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
  'send' => true,
]);

// Create and schedule
$resend->broadcasts->create([
  'segment_id' => '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  'from' => 'Acme <onboarding@resend.dev>',
  'subject' => 'hello world',
  'html' => 'Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}',
  'send' => true,
  'scheduled_at' => 'in 1 hour',
]);
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

// Create a draft broadcast
params: resend.Broadcasts.CreateParams = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
}
resend.Broadcasts.create(params)

// Create and send immediately
params: resend.Broadcasts.CreateParams = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
}
resend.Broadcasts.create(params)

// Create and schedule
params: resend.Broadcasts.CreateParams = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
  "scheduled_at": "in 1 hour",
}
resend.Broadcasts.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

// Create a draft broadcast
params = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "hello world",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
}
Resend::Broadcasts.create(params)

// Create and send immediately
params = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
}
Resend::Broadcasts.create(params)

// Create and schedule
params = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
  "scheduled_at": "in 1 hour",
}
Resend::Broadcasts.create(params)

```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

// Create a draft broadcast
params := &resend.CreateBroadcastRequest{
  SegmentId: "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  From:       "Acme <onboarding@resend.dev>",
  Html:       "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  Subject:    "Hello, world!",
}
broadcast, _ := client.Broadcasts.Create(params)

// Create and send immediately
params = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
}
broadcast, _ := client.Broadcasts.Create(params)

// Create and schedule
params = {
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello, world!",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
  "scheduled_at": "in 1 hour",
}
broadcast, _ := client.Broadcasts.Create(params)
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateBroadcastOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let segment_id = "78261eea-8f8b-4381-83c6-79fa7120f1cf";
  let from = "Acme <onboarding@resend.dev>";
  let subject = "hello world";
  let html = "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}";

  let opts = CreateBroadcastOptions::new(segment_id, from, subject).with_html(html);

  // Create a draft broadcast
  let _broadcast = resend.broadcasts.create(opts.clone()).await?;

  // Create and send immediately
  let _broadcast = resend
    .broadcasts
    .create(opts.clone().with_send(true))
    .await?;

  // Create and schedule
  let _broadcast = resend
    .broadcasts
    .create(opts.with_send(true).with_scheduled_at("in 1 hour"))
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

// Create a draft broadcast
CreateBroadcastOptions params = CreateBroadcastOptions.builder()
    .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
    .from("Acme <onboarding@resend.dev>")
    .subject("hello world")
    .html("Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}")
    .build();
CreateBroadcastResponseSuccess data = resend.broadcasts().create(params);

// Create and send immediately
CreateBroadcastOptions params = CreateBroadcastOptions.builder()
    .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
    .from("Acme <onboarding@resend.dev>")
    .subject("hello world")
    .html("Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}")
    .send(true)
    .build();
CreateBroadcastResponseSuccess data = resend.broadcasts().create(params);

// Create and schedule
CreateBroadcastOptions params = CreateBroadcastOptions.builder()
    .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
    .from("Acme <onboarding@resend.dev>")
    .subject("hello world")
    .html("Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}")
    .send(true)
    .scheduledAt("in 1 hour")
    .build();
CreateBroadcastResponseSuccess data = resend.broadcasts().create(params);
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

// Create a draft broadcast
var resp = await resend.BroadcastAddAsync(
    new BroadcastData()
    {
        DisplayName = "Example Broadcast",
        SegmentId = new Guid( "78261eea-8f8b-4381-83c6-79fa7120f1cf" ),
        From = "Acme <onboarding@resend.dev>",
        Subject = "Hello, world!",
        HtmlBody = "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
    }
);

Console.WriteLine( "Broadcast Id={0}", resp.Content );

// Create and send immediately
var resp = await resend.BroadcastAddAsync(
    new BroadcastData()
    {
        DisplayName = "Example Broadcast",
        SegmentId = new Guid( "78261eea-8f8b-4381-83c6-79fa7120f1cf" ),
        From = "Acme <onboarding@resend.dev>",
        Subject = "Hello, world!",
        HtmlBody = "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
        Send = true,
    }
);

Console.WriteLine( "Broadcast Id={0}", resp.Content );

// Create and schedule
var resp = await resend.BroadcastAddAsync(
    new BroadcastData()
    {
        DisplayName = "Example Broadcast",
        SegmentId = new Guid( "78261eea-8f8b-4381-83c6-79fa7120f1cf" ),
        From = "Acme <onboarding@resend.dev>",
        Subject = "Hello, world!",
        HtmlBody = "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
        Send = true,
        ScheduledAt = DateTime.UtcNow.AddHours( 1 ),
    }
);

Console.WriteLine( "Broadcast Id={0}", resp.Content );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# Create a draft broadcast
curl -X POST 'https://api.resend.com/broadcasts' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'
{
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "hello world",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}"
}'

# Create and send immediately
curl -X POST 'https://api.resend.com/broadcasts' \
 -H 'Authorization: Bearer re_xxxxxxxxx' \
 -H 'Content-Type: application/json' \
 -d $'
{
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "hello world",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true
}'

# Create and schedule
curl -X POST 'https://api.resend.com/broadcasts' \
 -H 'Authorization: Bearer re_xxxxxxxxx' \
 -H 'Content-Type: application/json' \
 -d $'
{
  "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "hello world",
  "html": "Hi {{{FIRST_NAME|there}}}, you can unsubscribe here: {{{RESEND_UNSUBSCRIBE_URL}}}",
  "send": true,
  "scheduled_at": "in 1 hour"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}
```
