# Retrieve Email

Source: https://resend.com/docs/api-reference/emails/retrieve-email

GET /emails/:email\_id
Retrieve a single email.

## Path Parameters

The Email ID.

See all available `last_event` types in [the Email Events
overview](/dashboard/emails/introduction#understand-email-events).

```js Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.emails.get(
  '37e4414c-5e25-4dbc-a071-43552a4bd53b',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->get('37e4414c-5e25-4dbc-a071-43552a4bd53b');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"
resend.Emails.get(email_id="4ef9a417-02e9-4d39-ad75-9611e0fcc33c")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = "re_xxxxxxxxx"
email = Resend::Emails.get("4ef9a417-02e9-4d39-ad75-9611e0fcc33c")
puts email
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Emails.Get("4ef9a417-02e9-4d39-ad75-9611e0fcc33c")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _email = resend
    .emails
    .get("4ef9a417-02e9-4d39-ad75-9611e0fcc33c")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        Email email = resend.emails().get("4ef9a417-02e9-4d39-ad75-9611e0fcc33c");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.EmailRetrieveAsync( new Guid( "4ef9a417-02e9-4d39-ad75-9611e0fcc33c" ) );
Console.WriteLine( "Subject={0}", resp.Content.Subject );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/emails/4ef9a417-02e9-4d39-ad75-9611e0fcc33c' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "to": ["delivered@resend.dev"],
  "from": "Acme <onboarding@resend.dev>",
  "created_at": "2023-04-03T22:13:42.674981+00:00",
  "subject": "Hello World",
  "html": "Congrats on sending your first email!",
  "text": null,
  "bcc": [],
  "cc": [],
  "reply_to": [],
  "last_event": "delivered",
  "scheduled_at": null,
  "tags": [
    {
      "name": "category",
      "value": "confirm_email"
    }
  ]
}
```
