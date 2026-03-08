# Retrieve Webhook

Source: https://resend.com/docs/api-reference/webhooks/get-webhook

GET /webhooks/:webhook\_id
Retrieve a single webhook for the authenticated user.

## Path Parameters

The Webhook ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.webhooks.get(
  '4dd369bc-aa82-4ff3-97de-514ae3000ee0',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->webhooks->get('4dd369bc-aa82-4ff3-97de-514ae3000ee0');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

webhook = resend.Webhooks.get(webhook_id='4dd369bc-aa82-4ff3-97de-514ae3000ee0')
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

webhook = Resend::Webhooks.get('4dd369bc-aa82-4ff3-97de-514ae3000ee0')
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Webhooks.Get("4dd369bc-aa82-4ff3-97de-514ae3000ee0")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _webhook = resend
    .webhooks
    .get("4dd369bc-aa82-4ff3-97de-514ae3000ee0")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        GetWebhookResponseSuccess webhook = resend.webhooks().get("4dd369bc-aa82-4ff3-97de-514ae3000ee0");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.WebhookRetrieveAsync( new Guid( "559ac32e-9ef5-46fb-82a1-b76b840c0f7b" ) );
Console.WriteLine( "Endpoint={0}", resp.Content.EndpointUrl );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/webhooks/4dd369bc-aa82-4ff3-97de-514ae3000ee0' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "webhook",
  "id": "4dd369bc-aa82-4ff3-97de-514ae3000ee0",
  "created_at": "2023-08-22T15:28:00.000Z",
  "status": "enabled",
  "endpoint": "https://example.com/handler",
  "events": ["email.sent"],
  "signing_secret": "whsec_xxxxxxxxxx"
}
```
