# Update Template

Source: https://resend.com/docs/api-reference/templates/update-template

PATCH /templates/:template\_id
Update a template.

## Path Parameters

The ID or alias of the template to duplicate.

## Body Parameters

The name of the template.

The HTML version of the template.

The alias of the template.

Sender email address.

To include a friendly name, use the format `"Your Name <sender@domain.com>"`.

If provided, this value can be overridden when sending an email using the template.

Default email subject.

This value can be overridden when sending an email using the template.

Default Reply-to email address. For multiple addresses, send as an array of strings.

This value can be overridden when sending an email using the template.

The plain text version of the message.

```
If not provided, the HTML will be used to generate a plain text version. You can opt out of this behavior by setting value to an empty string.
```

The React component used to write the template. *Only available in the Node.js
SDK.*

The array of variables used in the template. Each template may contain up to 50 variables.

Each variable is an object with the following properties:

```
  The key of the variable. We recommend capitalizing the key (e.g. `PRODUCT_NAME`). The following variable names are reserved and cannot be used:
  `FIRST_NAME`, `LAST_NAME`, `EMAIL`, `RESEND_UNSUBSCRIBE_URL`, `contact`, and `this`.



  The type of the variable.

  Can be `'string'` or `'number'`



  The fallback value of the variable. The value must match the type of the variable.

  If no fallback value is provided, you must provide a value for the variable when sending an email using the template.




Before you can use a template, you must publish it first. To publish a
template, use the [Templates dashboard](https://resend.com/templates) or
[publish template API](/api-reference/templates/publish-template).

[Learn more about Templates](/dashboard/templates/introduction).
```

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.templates.update(
  '34a080c9-b17d-4187-ad80-5af20266e535',
  {
    name: 'order-confirmation',
    html: 'Total: {{{PRICE}}}Name: {{{PRODUCT}}}',
  },
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->templates->update('34a080c9-b17d-4187-ad80-5af20266e535', [
  'name' => 'order-confirmation',
  'html' => 'Total: {{{PRICE}}}Name: {{{PRODUCT}}}',
]);
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Templates.update({
    "id": "34a080c9-b17d-4187-ad80-5af20266e535",
    "name": "order-confirmation",
    "html": "Total: {{{PRICE}}}Name: {{{PRODUCT}}}",
})
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Templates.update("34a080c9-b17d-4187-ad80-5af20266e535", {
  name: "order-confirmation",
  html: "Total: {{{PRICE}}}Name: {{{PRODUCT}}}"
})
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Templates.UpdateWithContext(context.TODO(), "34a080c9-b17d-4187-ad80-5af20266e535", &resend.UpdateTemplateRequest{
		Name: "order-confirmation",
		Html: "Total: {{{PRICE}}}Name: {{{PRODUCT}}}",
	})
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{
  types::UpdateTemplateOptions,
  Resend, Result,
};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let name = "order-confirmation";
  let html = "Total: {{{PRICE}}}Name: {{{PRODUCT}}}";

  let update = UpdateTemplateOptions::new(name, html);

  let _template = resend
    .templates
    .update("34a080c9-b17d-4187-ad80-5af20266e535", update)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        UpdateTemplateOptions params = UpdateTemplateOptions.builder()
                .name("order-confirmation")
                .html("Total: {{{PRICE}}}Name: {{{PRODUCT}}}")
                .build();

        UpdateTemplateResponseSuccess data = resend.templates().update("34a080c9-b17d-4187-ad80-5af20266e535", params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.TemplateUpdateAsync(
    templateId: new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" ),
    new TemplateData()
    {
        HtmlBody = "Total: {{{PRICE}}}Name: {{{PRODUCT}}}",
    }
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/templates/34a080c9-b17d-4187-ad80-5af20266e535' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "name": "order-confirmation",
  "html": "Total: {{{PRICE}}}Name: {{{PRODUCT}}}"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "34a080c9-b17d-4187-ad80-5af20266e535",
  "object": "template"
}
```
