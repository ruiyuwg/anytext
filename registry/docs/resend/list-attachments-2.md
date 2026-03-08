# List Attachments

Source: https://resend.com/docs/api-reference/emails/list-received-email-attachments

GET /emails/receiving/:email\_id/attachments
Retrieve a list of attachments from a received email.

## Path Parameters

The Email ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.emails.receiving.attachments.list({
  emailId: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->receiving->attachments->list(
  emailId: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

attachments = resend.Emails.Receiving.Attachments.list(
  email_id='4ef9a417-02e9-4d39-ad75-9611e0fcc33c'
)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

attachments = Resend::Emails::Receiving::Attachments.list(
  email_id: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c'
)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Emails.Receiving.ListAttachmentsWithContext(
		context.TODO(),
		"4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
	)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{list_opts::ListOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _email = resend
    .receiving
    .list_attachments(
      "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      ListOptions::default(),
    )
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    ListAttachmentsResponse response = resend.receiving().listAttachments(
      "4ef9a417-02e9-4d39-ad75-9611e0fcc33c"
    );
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ReceivedEmailAttachmentListAsync( new Guid( "4ef9a417-02e9-4d39-ad75-9611e0fcc33c" ));
Console.WriteLine( "Nr Attachments={0}", resp.Content.Data.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/emails/receiving/4ef9a417-02e9-4d39-ad75-9611e0fcc33c/attachments' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
      "filename": "avatar.png",
      "size": 4096,
      "content_type": "image/png",
      "content_disposition": "inline",
      "content_id": "img001",
      "download_url": "https://inbound-cdn.resend.com/4ef9a417-02e9-4d39-ad75-9611e0fcc33c/attachments/2a0c9ce0-3112-4728-976e-47ddcd16a318?some-params=example&signature=sig-123",
      "expires_at": "2025-10-17T14:29:41.521Z"
    }
  ]
}
```
