# Retrieve Segment

Source: https://resend.com/docs/api-reference/segments/get-segment

GET /segments/:segment\_id
Retrieve a single segment.

## Path Parameters

The Segment ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.segments.get(
  '78261eea-8f8b-4381-83c6-79fa7120f1cf',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->segments->get('78261eea-8f8b-4381-83c6-79fa7120f1cf');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

segment = resend.Segments.get('78261eea-8f8b-4381-83c6-79fa7120f1cf')
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

segment = Resend::Segments.get("78261eea-8f8b-4381-83c6-79fa7120f1cf")
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

	segment, err := client.Segments.GetWithContext(ctx, "78261eea-8f8b-4381-83c6-79fa7120f1cf")
	if err != nil {
		panic(err)
	}
	fmt.Println(segment)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _segment = resend
    .segments
    .get("78261eea-8f8b-4381-83c6-79fa7120f1cf")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        GetSegmentResponseSuccess response = resend.segments().get("78261eea-8f8b-4381-83c6-79fa7120f1cf");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.SegmentRetrieveAsync( new Guid( "b6d24b8e-af0b-4c3c-be0c-359bbd97381e" ) );
Console.WriteLine( "Segment Id={0}", resp.Content.Id );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "segment",
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "name": "Registered Users",
  "created_at": "2023-10-06T22:59:55.977Z"
}
```

# List Segment Contacts

Source: https://resend.com/docs/api-reference/segments/list-segment-contacts

GET /segments/:segment\_id/contacts
Retrieve a list of contacts in a segment.

## Path Parameters

The Segment ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contacts.list({
  segmentId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contacts->list([
  'segment_id' => '78261eea-8f8b-4381-83c6-79fa7120f1cf',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

contacts = resend.Contacts.list('78261eea-8f8b-4381-83c6-79fa7120f1cf')
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _contacts = resend
    .contacts
    .list("78261eea-8f8b-4381-83c6-79fa7120f1cf", ListOptions::default())
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        ListContactsResponseSuccess response = resend.contacts().list("78261eea-8f8b-4381-83c6-79fa7120f1cf");
    }
}
```
