# Send Email

Source: https://resend.com/docs/api-reference/emails/send-email

POST /emails
Start sending emails through the Resend Email API.

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

Schedule email to be sent later. The date should be in natural language (e.g.: `in 1 min`) or ISO 8601 format (e.g:
`2024-08-05T11:52:01.858Z`).

[See examples](/dashboard/emails/schedule-email)

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

Filename and content of attachments (max 40MB per email, after Base64 encoding of the attachments).

[See examples](/dashboard/emails/attachments)

```
  Content of an attached file, passed as a buffer or Base64 string.



  Name of attached file.



  Path where the attachment file is hosted



  Content type for the attachment, if not set will be derived from the filename property



  You can embed images using the content id parameter for the attachment. To show the image, you need to include the ID in the `src` attribute of the `img` tag (e.g., `<img src="cid:...">`) of your HTML. [Learn about inline images](/dashboard/emails/embed-inline-images).
```

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

[Learn more](/dashboard/emails/idempotency-keys)

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'hello world',
  html: 'it works!',
  replyTo: 'onboarding@resend.dev',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->send([
  'from' => 'Acme <onboarding@resend.dev>',
  'to' => ['delivered@resend.dev'],
  'subject' => 'hello world',
  'html' => 'it works!',
  'reply_to': 'onboarding@resend.dev'
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Emails.SendParams = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!",
  "reply_to": "onboarding@resend.dev"
}

email = resend.Emails.send(params)
print(email)
```

```rb Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!",
  "reply_to": "onboarding@resend.dev"
}

sent = Resend::Emails.send(params)
puts sent
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"context"
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
      ReplyTo:     "onboarding@resend.dev"
  }

  sent, err := client.Emails.SendWithContext(ctx, params)

  if err != nil {
    panic(err)
  }
  fmt.Println(sent.Id)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::{CreateEmailBaseOptions};
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "hello world";
  let html = "it works!";
  let reply_to = "onboarding@resend.dev";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html(html);

  let _email = resend.emails.send(email).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateEmailOptions params = CreateEmailOptions.builder()
                .from("Acme <onboarding@resend.dev>")
                .to("delivered@resend.dev")
                .subject("hello world")
                .html("it works!")
                .replyTo("onboarding@resend.dev")
                .build();

        CreateEmailResponse data = resend.emails().send(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.EmailSendAsync( new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = "hello world",
    HtmlBody = "it works!",
    ReplyTo = "onboarding@resend.dev",
} );
Console.WriteLine( "Email Id={0}", resp.Content );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!",
  "reply_to": "onboarding@resend.dev"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}
```
