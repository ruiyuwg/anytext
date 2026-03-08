# Create Webhook

Source: https://resend.com/docs/api-reference/webhooks/create-webhook

POST /webhooks
Create a webhook to receive real-time notifications about email events.

## Body Parameters

The URL where webhook events will be sent.

Array of event types to subscribe to.

See [event types](/webhooks/event-types) for available options.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.webhooks.create({
  endpoint: 'https://example.com/handler',
  events: ['email.sent'],
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->webhooks->create([
  'endpoint' => 'https://example.com/handler',
  'events' => ['email.sent'],
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

params: resend.Webhooks.CreateParams = {
    "endpoint": "https://example.com/handler",
    "events": ["email.sent"],
}

webhook = resend.Webhooks.create(params=params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

params = {
  endpoint: 'https://example.com/handler',
  events: ['email.sent']
}

webhook = Resend::Webhooks.create(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	params := &resend.CreateWebhookRequest{
		Endpoint: "https://example.com/handler",
		Events:   []string{"email.sent"},
	}

	client.Webhooks.Create(params)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{
  events::EmailEventType::{EmailSent},
  types::CreateWebhookOptions,
  Resend, Result,
};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let events = [EmailSent];
  let opts = CreateWebhookOptions::new("https://example.com/handler", events);
  let _webhook = resend.webhooks.create(opts).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;
import static com.resend.services.webhooks.model.WebhookEvent.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateWebhookOptions options = CreateWebhookOptions.builder()
              .endpoint("https://example.com/handler")
              .events(EMAIL_SENT)
              .build();

        CreateWebhookResponseSuccess response = resend.webhooks().create(options);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var data = new WebhookData()
{
    EndpointUrl = "https://example.com/handler",
    Events = [ WebhookEventType.EmailSent ],
    Status = WebhookStatus.Disabled,
};

var resp = await resend.WebhookCreateAsync( data );
Console.WriteLine( "Webhook Id={0}", resp.Content.Id );
Console.WriteLine( "Signing secret={0}", resp.Content.SigningSecret );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/webhooks' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d '{
  "endpoint": "https://example.com/handler",
  "events": ["email.sent"]
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "webhook",
  "id": "4dd369bc-aa82-4ff3-97de-514ae3000ee0",
  "signing_secret": "whsec_xxxxxxxxxx"
}
```
