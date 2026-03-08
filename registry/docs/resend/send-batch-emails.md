# Send Batch Emails

Source: https://resend.com/docs/api-reference/emails/send-batch-emails

POST /emails/batch
Trigger up to 100 batch emails at once.

Instead of sending one email per HTTP request, we provide a batching endpoint that permits you to send up to 100 emails in a single API call.

## Body Parameters

Sender email address.

To include a friendly name, use the format `"Your Name <sender@domain.com>"`.

Recipient email address. For multiple addresses, send as an array of strings.
Max 50.

Email subject.

Bcc recipient email address. For multiple addresses, send as an array of
strings.

Cc recipient email address. For multiple addresses, send as an array of
strings.

Reply-to email address. For multiple addresses, send as an array of strings.

The HTML version of the message.

The plain text version of the message.

```
If not provided, the HTML will be used to generate a plain text version. You
can opt out of this behavior by setting value to an empty string.
```

The React component used to write the message. *Only available in the Node.js
SDK.*

Custom headers to add to the email.

The topic ID to receive the email.

- If the recipient is a contact and has opted-in to the topic, the email is sent.
- If the recipient is a contact and has opted-out of the topic, the email is not sent and will be marked as failed.
- If the recipient is not a contact, the email is sent if the topic default subscription value is set to `opt-in`.

Each email address (to, cc, bcc) is checked and handled separately.

Custom data passed in key/value pairs.

[See examples](/dashboard/emails/tags).

```
  The name of the email tag.

  It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (\_), or dashes (-).

  It can contain no more than 256 characters.



  The value of the email tag.

  It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (\_), or dashes (-).

  It can contain no more than 256 characters.
```

To send using a template, provide a `template` object with:

- `id`: the id *or* the alias of the published template
- `variables`: an object with a key for each variable (if applicable)

  If a `template` is provided, you cannot send `html`, `text`, or `react` in the payload, otherwise the API will return a validation error.

  When sending a template, the payload for `from`, `subject`, and `reply_to` take precedence over the template's defaults for these fields. If the template does not provide a default value for these fields, you must provide them in the payload.

The id of the published email template. Required if `template` is provided. Only published templates can be used when sending emails.

Template variables object with key/value pairs.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
variables: {
	CTA: 'Sign up now',
	CTA_LINK: 'https://example.com/signup'
}
```

When sending the template, the HTML will be parsed. If all the variables used in the template were provided, the email will be sent. If not, the call will throw a validation error.

See the [errors reference](/api-reference/errors) for more details or [learn more about templates](/dashboard/templates/introduction).

```
  The key of the variable.

  May only contain ASCII letters (a–z, A–Z), numbers (0–9), and underscores (\_). The following variable names are reserved and cannot be used: `FIRST_NAME`, `LAST_NAME`, `EMAIL`, `UNSUBSCRIBE_URL`.

  It can contain no more than 50 characters.



  The value of the variable.

  Observe these technical limitations:

  * `string`: maximum length of 2,000 characters
  * `number`: not greater than 2^53 - 1
```

## Headers

Add an idempotency key to prevent duplicated emails.

- Should be **unique per API request**
- Idempotency keys expire after **24 hours**
- Have a maximum length of **256 characters**

[Learn more about idempotency keys →](/dashboard/emails/idempotency-keys)

## Limitations

The `attachments` and `scheduled_at` fields are not supported yet.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.batch.send([
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['foo@gmail.com'],
    subject: 'hello world',
    html: 'it works!',
  },
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['bar@outlook.com'],
    subject: 'world hello',
    html: 'it works!',
  },
]);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->batch->send([
  [
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['foo@gmail.com'],
    'subject' => 'hello world',
    'html' => 'it works!',
  ],
  [
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['bar@outlook.com'],
    'subject' => 'world hello',
    'html' => 'it works!',
  ]
]);
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend
from typing import List

resend.api_key = "re_xxxxxxxxx"

params: List[resend.Emails.SendParams] = [
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["foo@gmail.com"],
    "subject": "hello world",
    "html": "it works!",
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["bar@outlook.com"],
    "subject": "world hello",
    "html": "it works!",
  }
]

resend.Batch.send(params)
```

```rb Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = 're_xxxxxxxxx'

params = [
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["foo@gmail.com"],
    "subject": "hello world",
    "html": "it works!",
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["bar@outlook.com"],
    "subject": "world hello",
    "html": "it works!",
  }
]

Resend::Batch.send(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"fmt"
	"os"

	"github.com/resend/resend-go/v3"
)

func main() {

  ctx := context.TODO()

  client := resend.NewClient("re_xxxxxxxxx")

  var batchEmails = []*resend.SendEmailRequest{
    {
      From:    "Acme <onboarding@resend.dev>",
      To:      []string{"foo@gmail.com"},
      Subject: "hello world",
      Html:    "it works!",
    },
    {
      From:    "Acme <onboarding@resend.dev>",
      To:      []string{"bar@outlook.com"},
      Subject: "world hello",
      Html:    "it works!",
    },
  }

  sent, err := client.Batch.SendWithContext(ctx, batchEmails)

  if err != nil {
    panic(err)
  }
  fmt.Println(sent.Data)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let emails = vec![
    CreateEmailBaseOptions::new(
      "Acme <onboarding@resend.dev>",
      vec!["foo@gmail.com"],
      "hello world",
    )
    .with_html("it works!"),
    CreateEmailBaseOptions::new(
      "Acme <onboarding@resend.dev>",
      vec!["bar@outlook.com"],
      "world hello",
    )
    .with_html("it works!"),
  ];

  let _emails = resend.batch.send(emails).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateEmailOptions firstEmail = CreateEmailOptions.builder()
            .from("Acme <onboarding@resend.dev>")
            .to("foo@gmail.com")
            .subject("hello world")
            .html("it works!")
            .build();

        CreateEmailOptions secondEmail = CreateEmailOptions.builder()
            .from("Acme <onboarding@resend.dev>")
            .to("bar@outlook.com")
            .subject("world hello")
            .html("it works!")
            .build();

        CreateBatchEmailsResponse data = resend.batch().send(
            Arrays.asList(firstEmail, secondEmail)
        );
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var mail1 = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "foo@gmail.com",
    Subject = "hello world",
    HtmlBody = "it works!",
};

var mail2 = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "bar@outlook.com",
    Subject = "hello world",
    HtmlBody = "it works!",
};

var resp = await resend.EmailBatchAsync( [ mail1, mail2 ] );
Console.WriteLine( "Nr Emails={0}", resp.Content.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails/batch' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'[
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["foo@gmail.com"],
    "subject": "hello world",
    "html": "it works!"
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["bar@outlook.com"],
    "subject": "world hello",
    "html": "it works!"
  }
]'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "data": [
    {
      "id": "ae2014de-c168-4c61-8267-70d2662a1ce1"
    },
    {
      "id": "faccb7a5-8a28-4e9a-ac64-8da1cc3bc1cb"
    }
  ]
}
```
