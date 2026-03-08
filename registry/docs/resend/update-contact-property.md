# Update Contact Property

Source: https://resend.com/docs/api-reference/contact-properties/update-contact-property

PATCH /contact-properties/:contact\_property\_id
Update an existing contact property.

## Path Parameters

The Contact Property ID.

The `key` and `type` fields cannot be changed after creation. This preserves
data integrity for existing contact values.

## Body Parameters

The default value to use when the property is not set for a contact. Must
match the type of the property.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contactProperties.update({
  id: 'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
  fallbackValue: 'Example Company',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contactProperties->update('b6d24b8e-af0b-4c3c-be0c-359bbd97381', [
  'fallback_value' => 'Example Company',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

params = {
    "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
    "fallback_value": "Example Company",
}

contact_property = resend.ContactProperties.update(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

property = Resend::ContactProperties.update({
  id: "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
  fallback_value: "Example Company"
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

	params := &resend.UpdateContactPropertyRequest{
		Id:            "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
		FallbackValue: "Example Company",
	}

	property, err := client.ContactProperties.UpdateWithContext(ctx, params)
	if err != nil {
		panic(err)
	}
	fmt.Println(property)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::ContactPropertyChanges, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let update = ContactPropertyChanges::default().with_fallback("Example Company");
  let _contact_property = resend
    .contacts
    .update_property("b6d24b8e-af0b-4c3c-be0c-359bbd97381e", update)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    UpdateContactPropertyOptions options = UpdateContactPropertyOptions.builder()
      .id("b6d24b8e-af0b-4c3c-be0c-359bbd97381e")
      .fallbackValue("Example Company")
      .build();

    resend.contactProperties().update(options);
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactPropUpdateAsync(
  new Guid( "b6d24b8e-af0b-4c3c-be0c-359bbd97381e" ),
  new ContactPropertyUpdateData() {
    DefaultValue = "Example Company",
  }
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/contact-properties/b6d24b8e-af0b-4c3c-be0c-359bbd97381e' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "fallback_value": "Example Company"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact_property",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
}
```
