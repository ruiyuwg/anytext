# Delete Contact Segment

Source: https://resend.com/docs/api-reference/contacts/delete-contact-segment

DELETE /contacts/:contact\_id/segments/:segment\_id
Remove an existing contact from a segment.

## Path Parameters

Either `id` or `email` must be provided.

The Contact ID.

The Contact Email.

The Segment ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Remove by contact id
const { data, error } = await resend.contacts.segments.remove({
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});

// Remove by contact email
const { data, error } = await resend.contacts.segments.remove({
  email: 'steve.wozniak@gmail.com',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Remove by contact id
$resend->contacts->segments->remove(
  contact: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
);

// Remove by contact email
$resend->contacts->segments->remove(
  contact: 'steve.wozniak@gmail.com',
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

# Remove by contact id
params = {
    "segment_id": '78261eea-8f8b-4381-83c6-79fa7120f1cf',
    "contact_id": 'e169aa45-1ecf-4183-9955-b1499d5701d3',
}

response = resend.Contacts.Segments.remove(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require 'resend'

Resend.api_key = 're_xxxxxxxxx'

# Remove by contact id
removed = Resend::Contacts::Segments.remove(
  contact_id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  segment_id: '78261eea-8f8b-4381-83c6-79fa7120f1cf'
)

# Remove by contact email
removed = Resend::Contacts::Segments.remove(
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

	// Remove by contact id
	removeParams := &resend.RemoveContactSegmentRequest{
		ContactId: "e169aa45-1ecf-4183-9955-b1499d5701d3",
		SegmentId: "78261eea-8f8b-4381-83c6-79fa7120f1cf",
	}

	response, err := client.Contacts.Segments.RemoveWithContext(ctx, removeParams)
	if err != nil {
		panic(err)
	}
	fmt.Println(response)

	// Remove by contact email
	removeByEmailParams := &resend.RemoveContactSegmentRequest{
		Email:     "steve.wozniak@gmail.com",
		SegmentId: "78261eea-8f8b-4381-83c6-79fa7120f1cf",
	}

	response, err = client.Contacts.Segments.RemoveWithContext(ctx, removeByEmailParams)
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
    .delete_contact_segment(
      "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "78261eea-8f8b-4381-83c6-79fa7120f1cf",
    )
    .await?;

  // // Update by contact email
  let _contact = resend
    .contacts
    .delete_contact_segment(
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

    // Remove by contact id
    RemoveContactFromSegmentOptions optionsById = RemoveContactFromSegmentOptions.builder()
      .id("e169aa45-1ecf-4183-9955-b1499d5701d3")
      .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
      .build();

    resend.contacts().segments().remove(optionsById);

    // Remove by contact email
    RemoveContactFromSegmentOptions optionsByEmail = RemoveContactFromSegmentOptions.builder()
      .email("steve.wozniak@gmail.com")
      .segmentId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
      .build();

    resend.contacts().segments().remove(optionsByEmail);
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.ContactRemoveFromSegmentAsync(
    contactId: new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" ),
    segmentId: new Guid( "78261eea-8f8b-4381-83c6-79fa7120f1cf" )
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
// Update by contact id
curl -X DELETE 'https://api.resend.com/contacts/e169aa45-1ecf-4183-9955-b1499d5701d3/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

// Update by contact email
curl -X DELETE 'https://api.resend.com/contacts/steve.wozniak@gmail.com/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "deleted": true
}
```
