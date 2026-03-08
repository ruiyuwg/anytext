# List Broadcasts

Source: https://resend.com/docs/api-reference/broadcasts/list-broadcasts

GET /broadcasts
Retrieve a list of broadcast.

See all available `status` types in [the Broadcasts
overview](/dashboard/broadcasts/introduction#understand-broadcast-statuses).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.broadcasts.list();
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->broadcasts->list();
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Broadcasts.list()
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Broadcasts.list()
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Broadcasts.List()
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result, list_opts::ListOptions};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _broadcasts = resend.broadcasts.list(ListOptions::default()).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

ListBroadcastsResponseSuccess data = resend.broadcasts().list();
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.BroadcastListAsync();
Console.WriteLine( "Nr Broadcasts={0}", resp.Content.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/broadcasts' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
      "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf", // now called segment_id
      "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "status": "draft",
      "created_at": "2024-11-01T15:13:31.723Z",
      "scheduled_at": null,
      "sent_at": null,
      "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
    },
    {
      "id": "559ac32e-9ef5-46fb-82a1-b76b840c0f7b",
      "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf", // now called segment_id
      "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "status": "sent",
      "created_at": "2024-12-01T19:32:22.980Z",
      "scheduled_at": "2024-12-02T19:32:22.980Z",
      "sent_at": "2024-12-02T19:32:22.980Z",
      "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
    }
  ]
}
```
