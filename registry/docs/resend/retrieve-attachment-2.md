# Retrieve Attachment

Source: https://resend.com/docs/api-reference/emails/retrieve-received-email-attachment

GET /emails/receiving/:email\_id/attachments/:attachment\_id
Retrieve a single attachment from a received email.

## Path Parameters

The Attachment ID.

The Email ID.

```js Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.emails.receiving.attachments.get({
  id: '2a0c9ce0-3112-4728-976e-47ddcd16a318',
  emailId: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->receiving->attachments->get(
  id: '2a0c9ce0-3112-4728-976e-47ddcd16a318',
  emailId: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

attachment = resend.Emails.Receiving.Attachments.get(
  email_id='4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
  attachment_id='2a0c9ce0-3112-4728-976e-47ddcd16a318'
)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

attachment = Resend::Emails::Receiving::Attachments.get(
  id: '2a0c9ce0-3112-4728-976e-47ddcd16a318',
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

	client.Emails.Receiving.GetAttachmentWithContext(
		context.TODO(),
		"4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
		"2a0c9ce0-3112-4728-976e-47ddcd16a318",
	)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _email = resend
    .receiving
    .get_attachment(
      "2a0c9ce0-3112-4728-976e-47ddcd16a318",
      "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
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

    AttachmentDetails attachment = resend.receiving().getAttachment(
      "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "2a0c9ce0-3112-4728-976e-47ddcd16a318"
    );
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ReceivedEmailAttachmentRetrieveAsync(
  emailId: new Guid( "4ef9a417-02e9-4d39-ad75-9611e0fcc33c" ),
  attachmentId: new Guid( "2a0c9ce0-3112-4728-976e-47ddcd16a318" )
);
Console.WriteLine( "URL={0}", resp.Content.DownloadUrl );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/emails/receiving/4ef9a417-02e9-4d39-ad75-9611e0fcc33c/attachments/2a0c9ce0-3112-4728-976e-47ddcd16a318' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "attachment",
  "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
  "filename": "avatar.png",
  "size": 4096,
  "content_type": "image/png",
  "content_disposition": "inline",
  "content_id": "img001",
  "download_url": "https://inbound-cdn.resend.com/4ef9a417-02e9-4d39-ad75-9611e0fcc33c/attachments/2a0c9ce0-3112-4728-976e-47ddcd16a318?some-params=example&signature=sig-123",
  "expires_at": "2025-10-17T14:29:41.521Z"
}
```
