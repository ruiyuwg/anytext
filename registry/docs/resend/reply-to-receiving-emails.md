# Reply to Receiving Emails

Source: https://resend.com/docs/dashboard/receiving/reply-to-emails

Reply to Receiving emails in the same thread.

Email clients thread emails by using the `message_id` metadata.

If you want to reply to an email, you should add the `In-Reply-To` header set to the `message_id` of the received email. We also recommend setting the subject to start with `Re:` so that email clients can group the replies together.

## Get the message ID

The `message_id` is included in the [webhook event](/webhooks/emails/received) payload when an email is received:

```json {5} theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.received",
  "data": {
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "message_id": "<example+123>",
    "subject": "Sending this example",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"]
  }
}
```

Use the `message_id` value from `event.data.message_id` as the `In-Reply-To` header when sending your reply.

## Send a reply in thread

Here's how you can reply in thread using each SDK:

```ts Node.js {13} theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const messageId = event.data.message_id;

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: `Re: ${event.data.subject}`,
  html: 'Thanks for your email!',
  headers: {
    'In-Reply-To': messageId,
  },
});
```

```php PHP {11} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$messageId = $event['data']['message_id'];

$data = $resend->emails->send([
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['delivered@resend.dev'],
    'subject' => "Re: {$event['data']['subject']}",
    'html' => 'Thanks for your email!',
    'headers' => [
        'In-Reply-To' => $messageId,
    ],
]);
```

```python Python {13} theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

message_id = event["data"]["message_id"]

params: resend.Emails.SendParams = {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": f"Re: {event['data']['subject']}",
    "html": "Thanks for your email!",
    "headers": {
        "In-Reply-To": message_id,
    },
}

email = resend.Emails.send(params)
```

```rb Ruby {13} theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

message_id = event["data"]["message_id"]

params = {
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Re: #{event['data']['subject']}",
    html: "Thanks for your email!",
    headers: {
        "In-Reply-To": message_id,
    },
}

sent = Resend::Emails.send(params)
```

```go Go {20} theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"fmt"
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
    ctx := context.TODO()
    client := resend.NewClient("re_xxxxxxxxx")

    messageId := event.Data.MessageId

    params := &resend.SendEmailRequest{
        From:    "Acme <onboarding@resend.dev>",
        To:      []string{"delivered@resend.dev"},
        Subject: fmt.Sprintf("Re: %s", event.Data.Subject),
        Html:    "Thanks for your email!",
        Headers: map[string]string{
            "In-Reply-To": messageId,
        },
    }

    sent, err := client.Emails.SendWithContext(ctx, params)

    if err != nil {
        panic(err)
    }
    fmt.Println(sent.Id)
}
```

```rust Rust {17} theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
    let resend = Resend::new("re_xxxxxxxxx");

    let message_id = &event.data.received.unwrap().message_id;
    let subject = format!("Re: {}", event.data.subject);

    let email = CreateEmailBaseOptions::new(
        "Acme <onboarding@resend.dev>",
        ["delivered@resend.dev"],
        &subject,
    )
    .with_html("Thanks for your email!")
    .with_header("In-Reply-To", message_id);

    let _email = resend.emails.send(email).await?;

    Ok(())
}
```

```java Java {15} theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        String messageId = event.getData().getMessageId();

        CreateEmailOptions params = CreateEmailOptions.builder()
                .from("Acme <onboarding@resend.dev>")
                .to("delivered@resend.dev")
                .subject("Re: " + event.getData().getSubject())
                .html("Thanks for your email!")
                .headers(Map.of(
                    "In-Reply-To", messageId
                ))
                .build();

        CreateEmailResponse data = resend.emails().send(params);
    }
}
```

```csharp .NET {16} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;
using System.Collections.Generic;

IResend resend = ResendClient.Create("re_xxxxxxxxx");

var messageId = eventData.MessageId;

var message = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = $"Re: {eventData.Subject}",
    HtmlBody = "Thanks for your email!",
    Headers = new Dictionary<string, string>()
    {
        { "In-Reply-To", messageId },
    },
};

var resp = await resend.EmailSendAsync(message);
```

```bash cURL {10} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "Re: Sending this example",
  "html": "Thanks for your email!",
  "headers": {
    "In-Reply-To": "<example+123>"
  }
}'
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
async fn example(
    State(state): State<Arc>,
    Json(event): Json<resend_rs::events::EmailEvent>,
) -> Response {
    if matches!(
        event.r#type,
        resend_rs::events::EmailEventType::EmailReceived
    ) {
        let email = CreateEmailBaseOptions::new(
            "Acme <onboarding@resend.dev>",
            vec!["delivered@resend.dev"],
            format!("Re: {}", event.data.subject),
        )
        .with_html("Thanks for your email!")
        .with_header("In-Reply-To", &event.data.received.unwrap().message_id);

        let data = state.resend.emails.send(email).await.unwrap();
        Json(data).into_response()
    } else {
        Json(Empty {}).into_response()
    }
}
```

## Replying multiple times in a thread

If you're replying multiple times within the same thread, make sure to also append
the previous `message_id`s to the `References` header, separated by spaces.
This helps email clients maintain the correct threading structure.

```ts Node.js {9-10} theme={"theme":{"light":"github-light","dark":"vesper"}}
const previousReferences = ['<msg_id1@domain.com>', '<msg_id2@domain.com>'];

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: `Re: ${event.data.subject}`,
  html: 'Thanks for your email!',
  headers: {
    'In-Reply-To': event.data.message_id,
    'References': [...previousReferences, event.data.message_id].join(' '),
  },
});
```

```php PHP {9-10} theme={"theme":{"light":"github-light","dark":"vesper"}}
$previousReferences = ['<msg_id1@domain.com>', '<msg_id2@domain.com>'];

$data = $resend->emails->send([
    'from' => 'Acme <onboarding@resend.dev>',
    'to' => ['delivered@resend.dev'],
    'subject' => "Re: {$event['data']['subject']}",
    'html' => 'Thanks for your email!',
    'headers' => [
        'In-Reply-To' => $event['data']['message_id'],
        'References' => implode(' ', [...$previousReferences, $event['data']['message_id']]),
    ],
]);
```

```python Python {9-10} theme={"theme":{"light":"github-light","dark":"vesper"}}
previous_references = ["<msg_id1@domain.com>", "<msg_id2@domain.com>"]

params: resend.Emails.SendParams = {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": f"Re: {event['data']['subject']}",
    "html": "Thanks for your email!",
    "headers": {
        "In-Reply-To": event["data"]["message_id"],
        "References": " ".join([*previous_references, event["data"]["message_id"]]),
    },
}

email = resend.Emails.send(params)
```

```rb Ruby {9-10} theme={"theme":{"light":"github-light","dark":"vesper"}}
previous_references = ["<msg_id1@domain.com>", "<msg_id2@domain.com>"]

params = {
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Re: #{event['data']['subject']}",
    html: "Thanks for your email!",
    headers: {
        "In-Reply-To": event["data"]["message_id"],
        "References": [*previous_references, event["data"]["message_id"]].join(" "),
    },
}

sent = Resend::Emails.send(params)
```

```go Go {11-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
previousReferences := []string{"<msg_id1@domain.com>", "<msg_id2@domain.com>"}

allReferences := append(previousReferences, event.Data.MessageId)

params := &resend.SendEmailRequest{
    From:    "Acme <onboarding@resend.dev>",
    To:      []string{"delivered@resend.dev"},
    Subject: fmt.Sprintf("Re: %s", event.Data.Subject),
    Html:    "Thanks for your email!",
    Headers: map[string]string{
        "In-Reply-To": event.Data.MessageId,
        "References":  strings.Join(allReferences, " "),
    },
}

sent, err := client.Emails.SendWithContext(ctx, params)
```

```rust Rust {13-14} theme={"theme":{"light":"github-light","dark":"vesper"}}
let previous_references = vec!["<msg_id1@domain.com>", "<msg_id2@domain.com>"];

let all_references = [previous_references, vec![&event.data.message_id]]
    .concat()
    .join(" ");

let email = CreateEmailBaseOptions::new(
    "Acme <onboarding@resend.dev>",
    ["delivered@resend.dev"],
    &subject,
)
.with_html("Thanks for your email!")
.with_header("In-Reply-To", &event.data.message_id)
.with_header("References", &all_references);

let _email = resend.emails.send(email).await?;
```

```java Java {12-13} theme={"theme":{"light":"github-light","dark":"vesper"}}
List previousReferences = List.of("<msg_id1@domain.com>", "<msg_id2@domain.com>");

List allReferences = new ArrayList<>(previousReferences);
allReferences.add(event.getData().getMessageId());

CreateEmailOptions params = CreateEmailOptions.builder()
        .from("Acme <onboarding@resend.dev>")
        .to("delivered@resend.dev")
        .subject("Re: " + event.getData().getSubject())
        .html("Thanks for your email!")
        .headers(Map.of(
            "In-Reply-To", event.getData().getMessageId(),
            "References", String.join(" ", allReferences)
        ))
        .build();

CreateEmailResponse data = resend.emails().send(params);
```

```csharp .NET {12-13} theme={"theme":{"light":"github-light","dark":"vesper"}}
var previousReferences = new List { "<msg_id1@domain.com>", "<msg_id2@domain.com>" };
previousReferences.Add(eventData.MessageId);

var message = new EmailMessage()
{
    From = "Acme <onboarding@resend.dev>",
    To = "delivered@resend.dev",
    Subject = $"Re: {eventData.Subject}",
    HtmlBody = "Thanks for your email!",
    Headers = new Dictionary<string, string>()
    {
        { "In-Reply-To", eventData.MessageId },
        { "References", string.Join(" ", previousReferences) },
    },
};

var resp = await resend.EmailSendAsync(message);
```

```bash cURL {10-11} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "Re: Sending this example",
  "html": "Thanks for your email!",
  "headers": {
    "In-Reply-To": "<example+123>",
    "References": "<msg_id1@domain.com> <msg_id2@domain.com> <example+123>"
  }
}'
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
let received = &event.data.received.unwrap();

let previous_references = [
    "<msg_id1@domain.com>",
    "<msg_id2@domain.com>",
    &received.message_id,
];

let email = CreateEmailBaseOptions::new(
    "Acme <onboarding@resend.dev>",
    vec!["delivered@resend.dev"],
    format!("Re: {}", event.data.subject),
)
    .with_html("Thanks for your email!")
    .with_header("In-Reply-To", &received.message_id)
    .with_header("References", &previous_references.join(" "));

let data = state.resend.emails.send(email).await.unwrap();
```
