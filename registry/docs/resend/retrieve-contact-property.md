# Retrieve Contact Property

Source: https://resend.com/docs/api-reference/contact-properties/get-contact-property

GET /contact-properties/:contact\_property\_id
Retrieve a contact property by its ID.

## Path Parameters

The Contact Property ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contactProperties.get(
  'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contactProperties->get('b6d24b8e-af0b-4c3c-be0c-359bbd97381');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

contact_property = resend.ContactProperties.get('b6d24b8e-af0b-4c3c-be0c-359bbd97381e')
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

property = Resend::ContactProperties.get("b6d24b8e-af0b-4c3c-be0c-359bbd97381e")
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

	property, err := client.ContactProperties.GetWithContext(ctx, "b6d24b8e-af0b-4c3c-be0c-359bbd97381e")
	if err != nil {
		panic(err)
	}
	fmt.Println(property)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _property = resend
    .contacts
    .get_property("b6d24b8e-af0b-4c3c-be0c-359bbd97381e")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    resend.contactProperties().get("b6d24b8e-af0b-4c3c-be0c-359bbd97381e");
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactPropRetrieveAsync( new Guid( "b6d24b8e-af0b-4c3c-be0c-359bbd97381e" ) );
Console.WriteLine( "Prop Id={0}", resp.Content.Id );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/contact-properties/b6d24b8e-af0b-4c3c-be0c-359bbd97381e' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact_property",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
  "key": "company_name",
  "type": "string",
  "fallback_value": "Acme Corp",
  "created_at": "2023-04-08T00:11:13.110779+00:00"
}
```
