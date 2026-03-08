# Create Contact Property

Source: https://resend.com/docs/api-reference/contact-properties/create-contact-property

POST /contact-properties
Create a custom property for your contacts.

## Body Parameters

The property key. Max length is `50` characters. Only alphanumeric characters
and underscores are allowed.

The property type. Possible values: `string` or `number`.

The default value to use when the property is not set for a contact. Must
match the type specified in the `type` field.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contactProperties.create({
  key: 'company_name',
  type: 'string',
  fallbackValue: 'Acme Corp',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contactProperties->create([
  'key' => 'company_name',
  'type' => 'string',
  'fallback_value' => 'Acme Corp',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

params = {
    "key": "company_name",
    "type": "string",
    "fallback_value": "Acme Corp",
}

contact_property = resend.ContactProperties.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

property = Resend::ContactProperties.create({
  key: "company_name",
  type: "string",
  fallback_value: "Acme Corp"
})
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

	params := &resend.CreateContactPropertyRequest{
		Key:           "company_name",
		Type:          "string",
		FallbackValue: "Acme Corp",
	}

	property, err := client.ContactProperties.CreateWithContext(ctx, params)
	if err != nil {
		panic(err)
	}
	fmt.Println(property)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{
  types::{CreateContactPropertyOptions, PropertyType},
  Resend, Result,
};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let contact_property = CreateContactPropertyOptions::new("company_name", PropertyType::String)
    .with_fallback("Acme Corp");

  let _contact_property = resend.contacts.create_property(contact_property).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    CreateContactPropertyOptions options = CreateContactPropertyOptions.builder()
      .key("company_name")
      .type("string")
      .fallbackValue("Acme Corp")
      .build();

    resend.contactProperties().create(options);
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactPropCreateAsync( new ContactPropertyData() {
  Key = "company_name",
  PropertyType = ContactPropertyType.String,
  DefaultValue = "Acme Corp",
} );
Console.WriteLine( "Prop Id={0}", resp.Content );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/contact-properties' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "key": "company_name",
  "type": "string",
  "fallback_value": "Acme Corp"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact_property",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
}
```
