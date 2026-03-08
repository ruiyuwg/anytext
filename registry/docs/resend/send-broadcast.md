# Send Broadcast

Source: https://resend.com/docs/api-reference/broadcasts/send-broadcast

POST /broadcasts/:broadcast\_id/send
Start sending broadcasts to your audience through the Resend API.

You can send broadcasts only if they were created via the API.

## Path Parameters

The broadcast ID.

## Body Parameters

Schedule email to be sent later. The date should be in natural language (e.g.:
`in 1 min`) or ISO 8601 format (e.g: `2024-08-05T11:52:01.858Z`).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.broadcasts.send(
  '559ac32e-9ef5-46fb-82a1-b76b840c0f7b',
  {
    scheduledAt: 'in 1 min',
  },
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->broadcasts->send('559ac32e-9ef5-46fb-82a1-b76b840c0f7b', [
  'scheduled_at' => 'in 1 min',
]);
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Broadcasts.SendParams = {
  "broadcast_id": "559ac32e-9ef5-46fb-82a1-b76b840c0f7b",
  "scheduled_at": "in 1 min"
}
resend.Broadcasts.send(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  broadcast_id: "559ac32e-9ef5-46fb-82a1-b76b840c0f7b",
  scheduled_at: "in 1 min"
}
Resend::Broadcasts.send(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	sendParams := &resend.SendBroadcastRequest{
		BroadcastId: "559ac32e-9ef5-46fb-82a1-b76b840c0f7b",
		ScheduledAt: "in 1 min",
	}

	client.Broadcasts.Send(sendParams)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::SendBroadcastOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let opts =
    SendBroadcastOptions::new("559ac32e-9ef5-46fb-82a1-b76b840c0f7b").with_scheduled_at("in 1 min");

  let _broadcast = resend.broadcasts.send(opts).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

SendBroadcastOptions params = SendBroadcastOptions.builder()
    .scheduledAt("in 1 min")
    .build();

SendBroadcastResponseSuccess data = resend.broadcasts().send(params,
    "498ee8e4-7aa2-4eb5-9f04-4194848049d1");
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

// Send now
await resend.BroadcastSendAsync( new Guid( "559ac32e-9ef5-46fb-82a1-b76b840c0f7b" ) );

// Send in 5 mins
await resend.BroadcastScheduleAsync(
    new Guid( "559ac32e-9ef5-46fb-82a1-b76b840c0f7b" ),
    DateTime.UtcNow.AddMinutes( 5 ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/broadcasts/559ac32e-9ef5-46fb-82a1-b76b840c0f7b/send' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "scheduled_at": "in 1 min"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}
```
