# Delete Broadcast

Source: https://resend.com/docs/api-reference/broadcasts/delete-broadcast

DELETE /broadcasts/:broadcast\_id
Remove an existing broadcast.

You can only delete broadcasts that are in the `draft` status. In addition, if you delete a broadcast that has already been scheduled to be sent, we will automatically cancel the scheduled delivery and it won't be sent.

## Path Parameters

The broadcast ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.broadcasts.remove(
  '559ac32e-9ef5-46fb-82a1-b76b840c0f7b',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->broadcasts->remove('559ac32e-9ef5-46fb-82a1-b76b840c0f7b');
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Broadcasts.remove(id="559ac32e-9ef5-46fb-82a1-b76b840c0f7b")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Broadcasts.remove("559ac32e-9ef5-46fb-82a1-b76b840c0f7b")
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Broadcasts.Remove("559ac32e-9ef5-46fb-82a1-b76b840c0f7b")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _deleted = resend
    .broadcasts
    .delete("559ac32e-9ef5-46fb-82a1-b76b840c0f7b")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

RemoveBroadcastResponseSuccess data = resend.broadcasts().remove("559ac32e-9ef5-46fb-82a1-b76b840c0f7b");
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.BroadcastDeleteAsync( new Guid( "559ac32e-9ef5-46fb-82a1-b76b840c0f7b" ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X DELETE 'https://api.resend.com/broadcasts/559ac32e-9ef5-46fb-82a1-b76b840c0f7b' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "broadcast",
  "id": "559ac32e-9ef5-46fb-82a1-b76b840c0f7b",
  "deleted": true
}
```
