# Update Webhook

Source: https://resend.com/docs/api-reference/webhooks/update-webhook

PATCH /webhooks/:webhook\_id
Update an existing webhook configuration.

## Path Parameters

The Webhook ID.

## Body Parameters

The URL where webhook events will be sent.

Array of event types to subscribe to.

See [event types](/webhooks/event-types) for available options.

The webhook status. Can be either `enabled` or `disabled`.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.webhooks.update(
  '430eed87-632a-4ea6-90db-0aace67ec228',
  {
    endpoint: 'https://new-webhook.example.com/handler',
    events: ['email.sent', 'email.delivered'],
    status: 'enabled',
  },
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->webhooks->update('430eed87-632a-4ea6-90db-0aace67ec228', [
  'endpoint' => 'https://new-webhook.example.com/handler',
  'events' => ['email.sent', 'email.delivered'],
  'status' => 'enabled',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

params: resend.Webhooks.UpdateParams = {
    "webhook_id": "430eed87-632a-4ea6-90db-0aace67ec228",
    "endpoint": "https://new-webhook.example.com/handler",
    "events": ["email.sent", "email.delivered"],
    "status": "enabled",
}

webhook = resend.Webhooks.update(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

params = {
  webhook_id: '430eed87-632a-4ea6-90db-0aace67ec228',
  endpoint: 'https://new-webhook.example.com/handler',
  events: ['email.sent', 'email.delivered'],
  status: 'enabled'
}

webhook = Resend::Webhooks.update(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	endpoint := "https://new-webhook.example.com/handler"
	status := "enabled"
	params := &resend.UpdateWebhookRequest{
		Endpoint: &endpoint,
		Events:   []string{"email.sent", "email.delivered"},
		Status:   &status,
	}

	client.Webhooks.Update("430eed87-632a-4ea6-90db-0aace67ec228", params)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{
  events::EmailEventType::{EmailDelivered, EmailSent},
  types::{UpdateWebhookOptions, WebhookStatus},
  Resend, Result,
};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let events = [EmailSent, EmailDelivered];
  let opts = UpdateWebhookOptions::default()
    .with_endpoint("https://new-webhook.example.com/handler")
    .with_events(events)
    .with_status(WebhookStatus::Enabled);

  let _webhook = resend
    .webhooks
    .update("430eed87-632a-4ea6-90db-0aace67ec228", opts)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;
import static com.resend.services.webhooks.model.WebhookEvent.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        UpdateWebhookOptions options = UpdateWebhookOptions.builder()
            .endpoint("https://new-webhook.example.com/handler")
            .events(EMAIL_SENT, EMAIL_DELIVERED)
            .status(WebhookStatus.ENABLED)
            .build();

        UpdateWebhookResponseSuccess response = resend.webhooks()
            .update("430eed87-632a-4ea6-90db-0aace67ec228", options);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.WebhookUpdateAsync(
    new Guid( "430eed87-632a-4ea6-90db-0aace67ec228" ),
    new WebhookData()
    {
      EndpointUrl = "https://new-webhook.example.com/handler",
      Events = [ WebhookEventType.EmailSent ],
      Status = WebhookStatus.Disabled,
    }
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/webhooks/430eed87-632a-4ea6-90db-0aace67ec228' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d '{
  "endpoint": "https://new-webhook.example.com/handler",
  "events": ["email.sent", "email.delivered"],
  "status": "enabled"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "webhook",
  "id": "430eed87-632a-4ea6-90db-0aace67ec228"
}
```

# Send emails with Base44 and Resend

Source: https://resend.com/docs/base44-integration

Learn how to add the Resend integration to your Base44 project.

[Base44](https://base44.com/) is a platform for building apps with AI. You can add Resend in a Base44 project by asking the chat to add email sending with Resend.

This integration requires backend functions, a feature available only on
Builder tier and above. Learn more about [Base44
pricing](https://base44.com/pricing).

## 1. Add the Resend integration in Base44

**If starting a new app:**

1. Click **Integration** in the top nav.
2. Search for **Resend**, select it, and choose **Use This Integration**.

**If adding Resend to an existing app:**

1. Enable backend functions.
2. Ask the chat: "Add the Resend email integration to my app. Prompt me to provide the API key and send a welcome email to new users."

See the [Base44
documenation](https://docs.base44.com/Integrations/Resend-integration) for
more information.

## 2. Add your Resend API key

However you add Resend to your project, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys). Do not share your API key with others or expose it in the browser or other client-side code.

Copy the API key and paste it into the **RESEND\_API\_KEY** field in Base44.

## 3. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in the Base44 backend function (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).

# Send emails with Bolt.new and Resend

Source: https://resend.com/docs/bolt-new-integration

Learn how to add the Resend integration to your Bolt.new project.

[Bolt.new](https://bolt.new) is a platform for building full-stack web and mobile apps via chat. You can add Resend in a Bolt.new project by asking the chat to add email sending with Resend.

## 1. Add your Resend API key

To use Resend with Bolt.new, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys). Do not share your API key with others or expose it in the browser or other client-side code.

To safely store your Resend API key, use a `.env` file. You may need to
include this instruction in your prompt to bolt.new. Learn more about
[handling API keys](/knowledge-base/how-to-handle-api-keys).

## 2. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in Bolt.new (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).

# Chat SDK

Source: https://resend.com/docs/chat-sdk

Build conversational email experiences using the Vercel Chat SDK and Resend.
