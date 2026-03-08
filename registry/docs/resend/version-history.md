# Version History

Source: https://resend.com/docs/dashboard/templates/version-history

Best practices for using templates in production environments.

Templates in production require a workflow that lets you make changes safely without disrupting active emails. As you build your Template, your entire team can collaborate on the content and design in real-time with full version history.

## Draft vs Published

Templates start in a **draft** state and must be published before they can be used to send emails.

This separation allows you to:

- Test templates thoroughly before going live
- Make changes without affecting active emails
- Maintain version control over your email content

Once you **publish** a template, this published version will be used to send emails until you publish again. You can continue to work on a template in draft state without affecting the published version and the editor will automaticalyl save your progress.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
// Create template
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

await resend.templates.create({
  name: 'order-confirmation',
  from: 'Resend Store <store@resend.com>',
  subject: 'Thanks for your order!',
  html: "Name: {{{PRODUCT}}}Total: {{{PRICE}}}",
  variables: [
    {
      key: 'PRODUCT',
      type: 'string',
      fallbackValue: 'item'
    },
    {
      key: 'PRICE',
      type: 'number',
      fallbackValue: 20
    }
  ]
});

// Publish template
await resend.templates.publish('template_id');

// Or create and publish a template in one step
await resend.templates.create({ ... }).publish();
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Create template
$resend->templates->create([
  'name' => 'order-confirmation',
  'from' => 'Resend Store <store@resend.com>',
  'subject' => 'Thanks for your order!',
    'html' => "Name: {{{PRODUCT}}}Total: {{{PRICE}}}",
  'variables' => [
    [
      'key' => 'PRODUCT',
      'type' => 'string',
      'fallbackValue' => 'item'
    ],
    [
      'key' => 'PRICE',
      'type' => 'number',
      'fallbackValue' => 49.99
    ]
  ]
]);

// Publish template
$resend->templates->publish('template_id');
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

// Create template
params: resend.Templates.CreateParams = {
  "name": "order-confirmation",
  "from": "Resend Store <store@resend.com>",
  "subject": "Thanks for your order!",
  "html": "Name: {{{PRODUCT}}}Total: {{{PRICE}}}",
  "variables": [
    {
      "key": "PRODUCT",
      "type": "string",
      "fallbackValue": "item"
    },
    {
      "key": "PRICE",
      "type": "number",
      "fallbackValue": 20
    },
  ]
}

resend.Templates.create(params)

// Publish template
resend.Templates.publish('template_id');
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

// Create template
params = {
  "name": 'order-confirmation',
  "from": 'Resend Store <store@resend.com>',
  "subject": 'Thanks for your order!',
  "html": "Name: #{{{PRODUCT}}}Total: #{{{PRICE}}}",
  "variables": [{
      "key": 'PRODUCT',
      "type": 'string',
      "fallbackValue": 'item'
    },
    {
      "key": 'PRICE',
      "type": 'number',
      "fallbackValue": 20
    }
  ]
}

Resend::Templates.create(params)

// Publish template
Resend::Templates.publish('template_id');
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import "github.com/resend/resend-go/v2"

client := resend.NewClient("re_xxxxxxxxx")

// Create template
params := &resend.CreateTemplateRequest{
  Name: "order-confirmation",
  From: "Resend Store <store@resend.com>",
  Subject: "Thanks for your order!",
  Html: "Name: {{{PRODUCT}}}Total: {{{PRICE}}}",
  Variables: []resend.TemplateVariable{
    {
      Key: "PRODUCT",
      Type: "string",
      FallbackValue: "item",
    },
    {
      Key: "PRICE",
      Type: "number",
      FallbackValue: 20,
    },
  },
}

template, _ := client.Templates.Create(params)

// Publish template
client.Templates.Publish(template.Id)
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateTemplateOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  // Create template
  let name = "order-confirmation";
  let from = "Resend Store <store@resend.com>";
  let subject = "Thanks for your order!";
  let html = "Name: {{{PRODUCT}}}Total: {{{PRICE}}}";

  let variables = vec![
    TemplateVariable {
      key: "PRODUCT",
      type_: "string",
      fallback_value: Some("item"),
    },
    TemplateVariable {
      key: "PRICE",
      type_: "number",
      fallback_value: Some(20),
    },
  ];

  let opts = CreateTemplateOptions::new(name, from, subject)
    .with_html(html)
    .with_variables(variables);

  let _template = resend.templates.create(opts).await?;

  // Publish template
  resend.templates.publish(&template.id).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

// Create template
List variables = Arrays.asList(
  new TemplateVariable("PRODUCT", "string", "item"),
  new TemplateVariable("PRICE", "number", 20),
);

CreateTemplateOptions params = CreateTemplateOptions.builder()
  .name("order-confirmation")
  .from("Resend Store <store@resend.com>")
  .subject("Thanks for your order!")
    .html("Name: {{{PRODUCT}}}Total: {{{PRICE}}}")
  .variables(variables)
  .build();

CreateTemplateResponseSuccess data = resend.templates().create(params);

// Publish template
resend.templates().publish(data.content);
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create("re_xxxxxxxxx");

// Create template
var variables = new List
{
  new TemplateVariable() {
    Key = "PRODUCT",
    Type = TemplateVariableType.String,
    Default = "item",
  },
  new TemplateVariable() {
    Key = "PRICE",
    Type = TemplateVariableType.Number,
    Default = 20,
  },
};

var resp = await resend.TemplateCreateAsync(
  new TemplateData()
  {
    Name = "order-confirmation",
    From = "Resend Store <store@resend.com>",
    Subject = "Thanks for your order!",
    HtmlBody = @"
      Name: {{{PRODUCT}}}
      Total: {{{PRICE}}}
    ",
    Variables = variables,
  }
);

// Publish template
await resend.TemplatePublishAsync(resp.Content);

Console.WriteLine($"Template Id={resp.Content}");
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# Create template
curl -X POST 'https://api.resend.com/templates' \
 -H 'Authorization: Bearer re_xxxxxxxxx' \
 -H 'Content-Type: application/json' \
 -d $'{
  "name": "order-confirmation",
  "from": "Resend Store <store@resend.com>",
  "subject": "Thanks for your order!",
  "html": "Name: {{{PRODUCT}}}Total: {{{PRICE}}}",
  "variables": [
    {
      "key": "PRODUCT",
      "type": "string",
      "fallbackValue": "item"
    },
    {
      "key": "PRICE",
      "type": "number",
      "fallbackValue": 20
    }
  ]
}'

# Publish template
curl -X POST 'https://api.resend.com/templates/{template_id}/publish' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

After you publish a template, you can freely work on it through the editor or [via the API](/api-reference/templates/update-template) without affecting the published version. This allows you to test and validate new edits before sending them to users.

## Version History

As you work on a Template, your changes are saved as a draft, although you can also manually save drafts by pressing Cmd + S (Mac) or Ctrl + S (Windows). Only after publishing again will the changes be reflected in emails using the Template.

Each template contains a version history that helps you track changes your team has made over time. You can view the version history by clicking the three dots in the top right corner of the template editor and selecting **Version History**.

Through the version history, you can preview each version, who made them, and when they were made. You can also revert to a previous version if needed.

Reverting creates a new draft based on the selected version's content, without affecting the published template.

## Iterating on a template

You can work on a new draft version of your published template, update the design and messaging, then test it thoroughly before publishing it again. Your email sending will continue to use the current published version until you're ready to make the switch, without the need to create a new separate template or risk leaking your new logo.

This behavior is also useful to avoid breaking changes when you need to edit a template that's in production. Add or remove variables, update the design, and more without affecting your existing emails or raising validation errors.
