# Batch Sending

Source: https://resend.com/docs/dashboard/emails/batch-sending

Send up to 100 emails in a single API call.

Batch sending allows you to send multiple emails at once (up to 100) instead of making individual API requests for each email.

## When to use batch sending

Use batch sending when you need to:

- Send multiple transactional emails (e.g., order confirmations, notifications, etc.)
- Trigger emails to different recipients with unique content
- Reduce the number of API calls to improve performance

  For marketing campaigns, [use our no-code editor,
  Broadcasts](/dashboard/broadcasts/introduction), instead.

## Send batch emails

You can send up to 100 emails in a single API call using the batch endpoint. Each email in the batch can have different recipients, subjects, and content.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.batch.send([
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Welcome to Acme',
    html: 'Thanks for signing up!',
  },
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Order Confirmation',
    html: 'Your order has been confirmed.',
  },
]);

console.log(data);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->batch->send([
  [
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['delivered@resend.dev'],
    'subject' => 'Welcome to Acme',
    'html' => 'Thanks for signing up!',
  ],
  [
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['delivered@resend.dev'],
    'subject' => 'Order Confirmation',
    'html' => 'Your order has been confirmed.',
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
    "to": ["delivered@resend.dev"],
    "subject": "Welcome to Acme",
    "html": "Thanks for signing up!",
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Order Confirmation",
    "html": "Your order has been confirmed.",
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
    "to": ["delivered@resend.dev"],
    "subject": "Welcome to Acme",
    "html": "Thanks for signing up!",
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Order Confirmation",
    "html": "Your order has been confirmed.",
  }
]

Resend::Batch.send(params)
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

  var batchEmails = []*resend.SendEmailRequest{
    {
      From:    "Acme <onboarding@resend.dev>",
      To:      []string{"delivered@resend.dev"},
      Subject: "Welcome to Acme",
      Html:    "Thanks for signing up!",
    },
    {
      From:    "Acme <onboarding@resend.dev>",
      To:      []string{"delivered@resend.dev"},
      Subject: "Order Confirmation",
      Html:    "Your order has been confirmed.",
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
      vec!["delivered@resend.dev"],
      "Welcome to Acme",
    )
    .with_html("Thanks for signing up!"),
    CreateEmailBaseOptions::new(
      "Acme <onboarding@resend.dev>",
      vec!["delivered@resend.dev"],
      "Order Confirmation",
    )
    .with_html("Your order has been confirmed."),
  ];

  let _emails = resend.batch.send(emails).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateEmailOptions firstEmail = CreateEmailOptions.builder()
            .from("Acme <onboarding@resend.dev>")
            .to("delivered@resend.dev")
            .subject("Welcome to Acme")
            .html("Thanks for signing up!")
            .build();

        CreateEmailOptions secondEmail = CreateEmailOptions.builder()
            .from("Acme <onboarding@resend.dev>")
            .to("delivered@resend.dev")
            .subject("Order Confirmation")
            .html("Your order has been confirmed.")
            .build();

        CreateBatchEmailsResponse data = resend.batch().send(
            Arrays.asList(firstEmail, secondEmail)
        );
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create("re_xxxxxxxxx");

var mail1 = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = "Welcome to Acme",
    HtmlBody = "Thanks for signing up!",
};

var mail2 = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = "Order Confirmation",
    HtmlBody = "Your order has been confirmed.",
};

var resp = await resend.EmailBatchAsync([mail1, mail2]);
Console.WriteLine("Nr Emails={0}", resp.Content.Data.Count);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails/batch' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'[
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Welcome to Acme",
    "html": "Thanks for signing up!"
  },
  {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Order Confirmation",
    "html": "Your order has been confirmed."
  }
]'
```

## Response format

The batch endpoint returns an array of email IDs for successfully created emails.

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
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

If the request fails, the response will include an `error` object with a `message` property. You can find more information about the error in the [Errors](/api-reference/errors) section of the API Reference.

## Limitations

When using batch sending, keep in mind:

- Maximum of **100 emails** per batch request
- The `attachments` field is not supported yet
- The `scheduled_at` field is not supported yet
- Each email in the batch is processed independently
- The request will fail and return an error if any email in your payload is invalid (e.g., required fields are missing, fields contain invalid data, etc.).

## View batch emails

All emails sent via the batch endpoint appear in the [Emails](https://resend.com/emails) page of your dashboard, just like individually sent emails. Each email will have a `queued` status initially before being processed.

## API Reference

For complete API documentation, see the [Send Batch Emails API reference](/api-reference/emails/send-batch-emails).
