# Delete Contact

Source: https://resend.com/docs/api-reference/contacts/delete-contact

DELETE /contacts/:contact\_id
Remove an existing contact.

## Path Parameters

Either `id` or `email` must be provided.

The Contact ID.

The Contact email.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Delete by contact id
const { data, error } = await resend.contacts.remove({
  id: '520784e2-887d-4c25-b53c-4ad46ad38100',
});

// Delete by contact email
const { data, error } = await resend.contacts.remove({
  email: 'acme@example.com',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Delete by contact id
$resend->contacts->remove(
  id: '520784e2-887d-4c25-b53c-4ad46ad38100'
);

// Delete by contact email
$resend->contacts->remove(
  email: 'acme@example.com'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

# Delete by contact id
resend.Contacts.remove(
  id="520784e2-887d-4c25-b53c-4ad46ad38100"
)

# Delete by contact email
resend.Contacts.remove(
  email="acme@example.com"
)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

# Delete by contact id
Resend::Contacts.remove(
  id: "520784e2-887d-4c25-b53c-4ad46ad38100"
)

# Delete by contact email
Resend::Contacts.remove(
  email: "acme@example.com"
)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	// Delete by contact id
	client.Contacts.Remove("520784e2-887d-4c25-b53c-4ad46ad38100")

	// Delete by contact email
	client.Contacts.Remove("acme@example.com")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  // Delete by contact id
  let _deleted = resend
    .contacts
    .delete("520784e2-887d-4c25-b53c-4ad46ad38100")
    .await?;

  // Delete by contact email
  let _deleted = resend
    .contacts
    .delete("acme@example.com")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        // Delete by contact id
        resend.contacts().remove(ContactRequestOptions.builder()
                        .id("520784e2-887d-4c25-b53c-4ad46ad38100")
                        .build());

        // Delete by contact email
        resend.contacts().remove(ContactRequestOptions.builder()
                        .email("acme@example.com")
                        .build());
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

// By Id
await resend.ContactDeleteAsync(
    contactId: new Guid( "520784e2-887d-4c25-b53c-4ad46ad38100" )
);

// By Email
await resend.ContactDeleteByEmailAsync(
    "acme@example.com"
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# Delete by contact id
curl -X DELETE 'https://api.resend.com/contacts/520784e2-887d-4c25-b53c-4ad46ad38100' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

# Deleted by contact email
curl -X DELETE 'https://api.resend.com/contacts/acme@example.com' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact",
  "contact": "520784e2-887d-4c25-b53c-4ad46ad38100",
  "deleted": true
}
```
