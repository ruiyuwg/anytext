# Idempotency Keys

Source: https://resend.com/docs/dashboard/emails/idempotency-keys

Use idempotency keys to ensure that emails are sent only once.

Include an idempotency key in any email requests to ensure that the same email request is processed only once, even if it's sent multiple times.

Idempotency keys are currently supported on the `POST /emails` and the `POST
      /emails/batch` endpoints on the Resend API.

## How does it work?

When you send an email with an idempotency key, we check if an email with the same idempotency key has already been sent in the last 24 hours. **This is an optional feature** that simplifies managing retries on your side.

This makes it safe to retry requests that send an email. You don't have to worry about checking if the original request was sent -- you can just make the same request and our API will give the same response, without actually sending the email again.

## How to use idempotency keys?

Idempotency keys can be **up to 256 characters** and should be unique per API request.

We **recommend using a UUID** or other string that uniquely identifies that specific email.

If you have multiple events that trigger emails related to a single entity in your system, you can format your idempotency keys to take advantage of that entity's ID. One idea is to format idempotency keys like `<event-type>/<entity-id>`, for example `welcome-user/123456789`. The specific format you use is up to you.

Send the key in the `Idempotency-Key` HTTP header in your API requests. Our SDKs also provide a convenient way to set this header. If you're using SMTP, you can set the `Resend-Idempotency-Key` email header instead.

We keep idempotency keys in our system for **24 hours**. This should give you an ample window to retry any failed processes on your end without having to keep track of the sent status.

### `POST /emails` endpoint example

```ts Node.js {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
await resend.emails.send(
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'hello world',
    html: 'it works!',
  },
  {
    idempotencyKey: 'welcome-user/123456789',
  },
);
```

```php PHP {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->send([
  'from' => 'Acme <onboarding@resend.dev>',
  'to' => ['delivered@resend.dev'],
  'subject' => 'hello world',
  'html' => 'it works!',
], [
  'idempotency_key' => 'welcome-user/123456789',
]);
```

```python Python {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
params: resend.Emails.SendParams = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!"
}

options: resend.Emails.SendOptions = {
  "idempotency_key": "welcome-user/123456789",
}

resend.Emails.send(params, options)
```

```rb Ruby {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
params = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!"
}
Resend::Emails.send(
  params,
  options: { idempotency_key: "welcome-user/123456789" }
)
```

```go Go {13} theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	ctx := context.TODO()
	client := resend.NewClient("re_xxxxxxxxx")

	params := &resend.SendEmailRequest{
		From:    "onboarding@resend.dev",
		To:      []string{"delivered@resend.dev"},
		Subject: "hello world",
		Html:    "it works!",
	}
	options := &resend.SendEmailOptions{
		IdempotencyKey: "welcome-user/123456789",
	}
	_, err := client.Emails.SendWithOptions(ctx, params, options)
	if err != nil {
		panic(err)
	}
}
```

```rust Rust {14} theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "Hello World";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html("it works!")
    .with_idempotency_key("welcome-user/123456789");

  let _email = resend.emails.send(email).await?;

  Ok(())
}
```

```java Java {9} theme={"theme":{"light":"github-light","dark":"vesper"}}
CreateEmailOptions params = CreateEmailOptions.builder()
  .from("Acme <onboarding@resend.dev>")
  .to("delivered@resend.dev")
  .subject("hello world")
  .html("it works!")
  .build();

RequestOptions options = RequestOptions.builder()
  .setIdempotencyKey("welcome-user/123456789").build();

CreateEmailResponse data = resend.emails().send(params, options);
```

```csharp C# {11} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var key = IdempotencyKey.New( "welcome-user", 123456789 );
var resp = await resend.EmailSendAsync(key, new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = "hello world",
    HtmlBody = "it works!",
} );
Console.WriteLine( "Email Id={0}", resp.Content );
```

```bash cURL {4} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -H 'Idempotency-Key: welcome-user/123456789' \
     -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "it works!"
}'
```

```yaml SMTP {4} theme={"theme":{"light":"github-light","dark":"vesper"}}
From: Acme <onboarding@resend.dev>
To: delivered@resend.dev
Subject: hello world
Resend-Idempotency-Key: welcome-user/123456789

it works!
```

### `POST /emails/batch` endpoint example

Format your idempotency keys to take advantage of that entity's ID (i.e.,
`<event-type>/<entity-id>`). For batch sends, choose a key that represents the whole batch, like a team, workspace, or project (i.e., `team-quota/123456789`).

```ts Node.js {21} theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

await resend.batch.send(
  [
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
  ],
  {
    idempotencyKey: 'team-quota/123456789',
  },
);
```

```php PHP {19} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->batch->send(
  [
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
  ],
  [
    'idempotency_key' => 'team-quota/123456789',
  ]
);
```

```py Python {22} theme={"theme":{"light":"github-light","dark":"vesper"}}
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

options: resend.Batch.SendOptions = {
  "idempotency_key": "team-quota/123456789",
}

resend.Batch.send(params, options)
```

```rb Ruby {22} theme={"theme":{"light":"github-light","dark":"vesper"}}
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

Resend::Batch.send(
  params,
  options: { idempotency_key: "team-quota/123456789" }
)
```

```go Go {32} theme={"theme":{"light":"github-light","dark":"vesper"}}
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

  options := &resend.BatchSendEmailOptions{
    IdempotencyKey: "team-quota/123456789",
  }

  sent, err := client.Batch.SendWithOptions(ctx, batchEmails, options)

  if err != nil {
    panic(err)
  }
  fmt.Println(sent.Data)
}
```

```rust Rust {23} theme={"theme":{"light":"github-light","dark":"vesper"}}
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

  let _emails = resend.batch.send_with_idempotency_key(emails, "team-quota/123456789").await?;

  Ok(())
}
```

```java Java {23} theme={"theme":{"light":"github-light","dark":"vesper"}}
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
            Arrays.asList(firstEmail, secondEmail),
            Map.of("idempotency_key", "team-quota/123456789")
        );
    }
}
```

```csharp .NET {5} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var key = IdempotencyKey.New( "team-quota", 123456789 );

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

var resp = await resend.EmailBatchAsync(key, [ mail1, mail2 ] );
Console.WriteLine( "Nr Emails={0}", resp.Content.Count );
```

```bash cURL {4} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails/batch' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -H 'Idempotency-Key: team-quota/123456789' \
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

## Possible responses

After checking if an email with the same idempotency key has already been sent, Resend returns one of the following responses:

- **Successful responses** will return the email ID of the sent email.
- **Error responses** will return one of the following errors:
  - `400`: `invalid_idempotency_key` - the idempotency key has to be between 1-256 characters. You can retry with a valid key or without supplying an idempotency key.
  - `409`: `invalid_idempotent_request` - this idempotency key has already been used on a request that had a different payload. Retrying this request is useless without changing the idempotency key or payload.
  - `409`: `concurrent_idempotent_requests` - another request with the same idempotency key is currently in progress. As it isn't finished yet, Resend can't return its original response, but it is safe to retry this request later if needed.
