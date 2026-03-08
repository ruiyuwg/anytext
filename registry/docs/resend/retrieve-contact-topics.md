# Retrieve Contact Topics

Source: https://resend.com/docs/api-reference/contacts/get-contact-topics

GET /contacts/:contact\_id/topics
Retrieve a list of topics subscriptions for a contact.

## Path Parameters

Either `id` or `email` must be provided.

The Contact ID.

The Contact Email.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Get by contact id
const { data, error } = await resend.contacts.topics.list({
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
});

// Get by contact email
const { data, error } = await resend.contacts.topics.list({
  email: 'steve.wozniak@gmail.com',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Get by contact id
$resend->contacts->topics->get('e169aa45-1ecf-4183-9955-b1499d5701d3');

// Get by contact email
$resend->contacts->topics->get('steve.wozniak@gmail.com');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

# Get by contact id
topics = resend.Contacts.Topics.list(contact_id='e169aa45-1ecf-4183-9955-b1499d5701d3')

# Get by contact email
topics = resend.Contacts.Topics.list(email='steve.wozniak@gmail.com')
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

# Get by contact id
contact_topics = Resend::Contacts::Topics.list(id: "e169aa45-1ecf-4183-9955-b1499d5701d3")

# Get by contact email
contact_topics = Resend::Contacts::Topics.list(id: "steve.wozniak@gmail.com")
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

	// Get by contact id
	topics, err := client.Contacts.Topics.ListWithContext(ctx, &resend.ListContactTopicsRequest{
		ContactId: "e169aa45-1ecf-4183-9955-b1499d5701d3",
	})
	if err != nil {
		panic(err)
	}
	fmt.Println(topics)

	// Get by contact email
	topics, err = client.Contacts.Topics.ListWithContext(ctx, &resend.ListContactTopicsRequest{
		Email: "steve.wozniak@gmail.com",
	})
	if err != nil {
		panic(err)
	}
	fmt.Println(topics)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{list_opts::ListOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _topics = resend
    .contacts
    .get_contact_topics(
      "e169aa45-1ecf-4183-9955-b1499d5701d3",
      ListOptions::default(),
    )
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
    resend.contacts().topics().list("e169aa45-1ecf-4183-9955-b1499d5701d3");

    // Get by contact email
    resend.contacts().topics().list("steve.wozniak@gmail.com");
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactListTopicsAsync( new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" ));
Console.WriteLine( "Nr Topics={0}", resp.Content.Data.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
// Get by contact id
curl -X GET 'https://api.resend.com/contacts/e169aa45-1ecf-4183-9955-b1499d5701d3/topics' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

// Get by contact email
curl -X GET 'https://api.resend.com/contacts/steve.wozniak@gmail.com/topics' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
      "name": "Product Updates",
      "description": "New features, and latest announcements.",
      "subscription": "opt_in"
    }
  ]
}
```
