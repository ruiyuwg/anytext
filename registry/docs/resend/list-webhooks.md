# List Webhooks

Source: https://resend.com/docs/api-reference/webhooks/list-webhooks

GET /webhooks
Retrieve a list of webhooks for the authenticated user.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.webhooks.list();
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->webhooks->list();
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

webhooks = resend.Webhooks.list()
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

webhooks = Resend::Webhooks.list
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Webhooks.List()
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{list_opts::ListOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _webhooks = resend.webhooks.list(ListOptions::default()).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        ListWebhooksResponseSuccess response = resend.webhooks().list();
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.WebhookListAsync();
Console.WriteLine( "Nr Webhooks={0}", resp.Content.Data.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/webhooks' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "7ab123cd-ef45-6789-abcd-ef0123456789",
      "created_at": "2023-09-10T10:15:30.000Z",
      "status": "disabled",
      "endpoint": "https://first-webhook.example.com/handler",
      "events": ["email.sent"]
    },
    {
      "id": "4dd369bc-aa82-4ff3-97de-514ae3000ee0",
      "created_at": "2023-08-22T15:28:00.000Z",
      "status": "enabled",
      "endpoint": "https://second-webhook.example.com/receive",
      "events": ["email.received"]
    }
  ]
}
```
