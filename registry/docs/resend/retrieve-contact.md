# Retrieve Contact

Source: https://resend.com/docs/api-reference/contacts/get-contact

GET /contacts/:contact\_id
Retrieve a single contact.

## Path Parameters

Either `id` or `email` must be provided.

The Contact ID.

The Contact Email.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Get by contact id
const { data, error } = await resend.contacts.get({
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
});

// Get by contact email
const { data, error } = await resend.contacts.get({
  email: 'steve.wozniak@gmail.com',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Get by contact id
$resend->contacts->get(
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3'
);

// Get by contact email
$resend->contacts->get(
  email: 'steve.wozniak@gmail.com'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

# Get by contact id
resend.Contacts.get(
  id="e169aa45-1ecf-4183-9955-b1499d5701d3",
)

# Get by contact email
resend.Contacts.get(
  email="steve.wozniak@gmail.com",
)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

# Get by contact id
params = {
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
}

Resend::Contacts.get(params)

# Get by contact email
params = {
  "email": "steve.wozniak@gmail.com",
}

Resend::Contacts.get(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	// Get by contact id
	client.Contacts.Get("e169aa45-1ecf-4183-9955-b1499d5701d3")

	// Get by contact email
	client.Contacts.Get("steve.wozniak@gmail.com")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  // Get by contact id
  let _contact = resend
    .contacts
    .get("e169aa45-1ecf-4183-9955-b1499d5701d3")
    .await?;

  // Get by contact email
  let _contact = resend
    .contacts
    .get("steve.wozniak@gmail.com")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        // Get by contact id
        GetContactOptions params = GetContactOptions.builder()
                .id("e169aa45-1ecf-4183-9955-b1499d5701d3")
                .build();

        // Get by contact email
        GetContactOptions params = GetContactOptions.builder()
                .email("steve.wozniak@gmail.com")
                .build();

        GetContactResponseSuccess data = resend.contacts().get(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

// Get by contact id
var resp1 = await resend.ContactRetrieveAsync(
    contactId: new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" )
);

// Get by contact email
var resp2 = await resend.ContactRetrieveByEmailAsync(
    email: "steve.wozniak@gmail.com"
);

Console.WriteLine( "Contact Email={0}", resp2.Content.Email );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# Get by contact id
curl -X GET 'https://api.resend.com/contacts/e169aa45-1ecf-4183-9955-b1499d5701d3' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

# Get by contact email
curl -X GET 'https://api.resend.com/contacts/steve.wozniak@gmail.com' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "created_at": "2023-10-06T23:47:56.678Z",
  "unsubscribed": false,
  "properties": {
    "company_name": "Acme Corp",
    "department": "Engineering"
  }
}
```
