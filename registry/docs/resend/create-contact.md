# Create Contact

Source: https://resend.com/docs/api-reference/contacts/create-contact

POST /contacts
Create a contact.

## Body Parameters

The email address of the contact.

The first name of the contact.

The last name of the contact.

The Contact's global subscription status. If set to `true`, the contact will
be unsubscribed from all Broadcasts.

A map of custom property keys and values to create.

```
  The property key.



  The property value.
```

Array of objects. Each object must contain the ID of the segment that you'd like to add the contact to.

```
  The segment ID.
```

Array of topic subscriptions for the contact.

```
  The topic ID.



  The subscription status for this topic.
```

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contacts.create({
  email: 'steve.wozniak@gmail.com',
  firstName: 'Steve',
  lastName: 'Wozniak',
  unsubscribed: false,
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contacts->create(
  parameters: [
    'email' => 'steve.wozniak@gmail.com',
    'first_name' => 'Steve',
    'last_name' => 'Wozniak',
    'unsubscribed' => false
  ]
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Contacts.CreateParams = {
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": False,
}

resend.Contacts.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
}

Resend::Contacts.create(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	params := &resend.CreateContactRequest{
		Email:        "steve.wozniak@gmail.com",
		FirstName:    "Steve",
		LastName:     "Wozniak",
		Unsubscribed: false,
	}

	client.Contacts.Create(params)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateContactOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let contact = CreateContactOptions::new("steve.wozniak@gmail.com")
    .with_first_name("Steve")
    .with_last_name("Wozniak")
    .with_unsubscribed(false);

  let _contact = resend.contacts.create(contact).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateContactOptions params = CreateContactOptions.builder()
                .email("steve.wozniak@gmail.com")
                .firstName("Steve")
                .lastName("Wozniak")
                .unsubscribed(false)
                .build();

        CreateContactResponseSuccess data = resend.contacts().create(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactAddAsync(
    new ContactData()
    {
        Email = "steve.wozniak@gmail.com",
        FirstName = "Steve",
        LastName = "Wozniak",
        IsUnsubscribed = false,
    }
);
Console.WriteLine( "Contact Id={0}", resp.Content );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/contacts' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```
