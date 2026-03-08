# Add Contact to Segment

Source: https://resend.com/docs/api-reference/contacts/add-contact-to-segment

POST /contacts/:contact\_id/segments/:segment\_id
Add an existing contact to a segment.

## Path Parameters

Either `id` or `email` must be provided.

The Contact ID.

The Contact Email.

The Segment ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Add by contact id
const { data, error } = await resend.contacts.segments.add({
  contactId: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});

// Add by contact email
const { data, error } = await resend.contacts.segments.add({
  email: 'steve.wozniak@gmail.com',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Add by contact id
$resend->contacts->segments->add(
  contact: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
);

// Add by contact email
$resend->contacts->segments->add(
  contact: 'steve.wozniak@gmail.com',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

# Add by contact id
params = {
    "segment_id": '78261eea-8f8b-4381-83c6-79fa7120f1cf',
    "contact_id": 'e169aa45-1ecf-4183-9955-b1499d5701d3',
}

response = resend.Contacts.Segments.add(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

# Add by contact id
result = Resend::Contacts::Segments.add(
  contact_id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segment_id: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
)

# Add by contact email
result = Resend::Contacts::Segments.add(
  email: 'steve.wozniak@gmail.com',
  segment_id: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
)
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

	// Add by contact id
	addParams := &resend.AddContactSegmentRequest{
		ContactId: "e169aa45-1ecf-4183-9955-b1499d5701d3",
		SegmentId: "78261eea-8f8b-4381-83c6-79fa7120f1cf",
	}

	response, err := client.Contacts.Segments.AddWithContext(ctx, addParams)
	if err != nil {
		panic(err)
	}
	fmt.Println(response)

	// Add by contact email
	addByEmailParams := &resend.AddContactSegmentRequest{
		Email:     "steve.wozniak@gmail.com",
		SegmentId: "78261eea-8f8b-4381-83c6-79fa7120f1cf",
	}

	response, err = client.Contacts.Segments.AddWithContext(ctx, addByEmailParams)
	if err != nil {
		panic(err)
	}
	fmt.Println(response)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  // Update by contact id
  let _contact = resend
    .contacts
    .add_contact_segment(
      "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "78261eea-8f8b-4381-83c6-79fa7120f1cf",
    )
    .await?;

  // // Update by contact email
  let _contact = resend
    .contacts
    .add_contact_segment(
      "steve.wozniak@gmail.com",
      "78261eea-8f8b-4381-83c6-79fa7120f1cf",
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

    // Add by contact id
    AddContactToSegmentOptions optionsById = AddContactToSegmentOptions.builder()
      .id("e169aa45-1ecf-4183-9955-b1499d5701d3")
      .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
      .build();

    resend.contacts().segments().add(optionsById);

    // Add by contact email
    AddContactToSegmentOptions optionsByEmail = AddContactToSegmentOptions.builder()
      .email("steve.wozniak@gmail.com")
      .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
      .build();

    resend.contacts().segments().add(optionsByEmail);
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.ContactAddToSegmentAsync(
    contactId: new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" ),
    segmentId: new Guid( "78261eea-8f8b-4381-83c6-79fa7120f1cf" )
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
// Update by contact id
curl -X POST 'https://api.resend.com/contacts/e169aa45-1ecf-4183-9955-b1499d5701d3/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

// Update by contact email
curl -X POST 'https://api.resend.com/contacts/steve.wozniak@gmail.com/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
}
```
