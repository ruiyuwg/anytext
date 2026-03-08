# Custom Headers

Source: https://resend.com/docs/dashboard/emails/custom-headers

Customize how emails are sent with your own headers.

Email headers are typically hidden from the end user but are crucial for deliverability. They include information about the sender, receiver, timestamp, and more.

Resend already includes all the necessary headers for you, but now you can also add your own custom headers.

This is a fairly advanced feature, but it can be useful for a few things:

- Prevent threading on Gmail with the **`X-Entity-Ref-ID`** header ([Example](https://github.com/resend/resend-examples/tree/main/nextjs-resend-examples/typescript/src/app/prevent-threading))
- Include a shortcut for users to unsubscribe with the **`List-Unsubscribe`** header

Here's how you can add custom headers to your emails:

```ts Node.js {11} theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'hello world',
  html: 'it works!',
  headers: {
    'X-Entity-Ref-ID': 'xxx_xxxx',
  },
});
```

```php PHP {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->send([
  'from' => 'Acme <onboarding@resend.dev>',
  'to' => ['delivered@resend.dev'],
  'subject' => 'hello world',
  'html' => 'it works!',
  'headers' => [
    'X-Entity-Ref-ID' => 'xxx_xxxx',
  ]
]);
```

```python Python {11} theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Emails.SendParams = {
  "from": "onboarding@resend.dev",
  "to": ["delivered@resend.dev"],
  "subject": "hi",
  "html": "it works!",
  "headers": {
    "X-Entity-Ref-ID": "xxx_xxxx"
  }
}

email = resend.Emails.send(params)
print(email)
```

```rb Ruby {11} theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!",
  "headers": {
    "X-Entity-Ref-ID": "123"
  },
}

sent = Resend::Emails.send(params)
puts sent
```

```go Go {17} theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"fmt"

	"github.com/resend/resend-go/v3"
)

func main() {
  ctx := context.TODO()
  client := resend.NewClient("re_xxxxxxxxx")

  params := &resend.SendEmailRequest{
      From:        "Acme <onboarding@resend.dev>",
      To:          []string{"delivered@resend.dev"},
      Subject:     "hello world",
      Html:        "it works!",
      Headers:     map[string]string{
        "X-Entity-Ref-ID": "xxx_xxxx",
      }
  }

  sent, err := client.Emails.SendWithContext(ctx, params)

  if err != nil {
    panic(err)
  }
  fmt.Println(sent.Id)
}
```

```rust Rust {14} theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::{Attachment, CreateEmailBaseOptions, Tag};
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "hello world";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html("it works!")
    .with_header("X-Entity-Ref-ID", "xxx_xxxx");

  let _email = resend.emails.send(email).await?;

  Ok(())
}
```

```java Java {13} theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateEmailOptions params = CreateEmailOptions.builder()
                .from("Acme <onboarding@resend.dev>")
                .to("delivered@resend.dev")
                .subject("hello world")
                .html("it works!")
                .headers(Map.of(
                    "X-Entity-Ref-ID", "xxx_xxxx"
                ))
                .build();

        CreateEmailResponse data = resend.emails().send(params);
    }
}
```

```csharp .NET {12-15} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;
using System.Collections.Generic;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var message = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = "hello world",
    HtmlBody = "it works!",
    Headers = new Dictionary<string, string>()
    {
        { "X-Entity-Ref-ID", "xxx_xxxx" },
    },
};

var resp = await resend.EmailSendAsync( message );
Console.WriteLine( "Email Id={0}", resp.Content );
```

```bash cURL {10} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!",
  "headers": {
    "X-Entity-Ref-ID": "xxx_xxxx"
  }
}'
```
