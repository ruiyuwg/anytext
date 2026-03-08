# Delete Segment

Source: https://resend.com/docs/api-reference/segments/delete-segment

DELETE /segments/:segment\_id
Remove an existing segment.

## Path Parameters

The Segment ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.segments.remove(
  '78261eea-8f8b-4381-83c6-79fa7120f1cf',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->segments->remove('78261eea-8f8b-4381-83c6-79fa7120f1cf');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

segment = resend.Segments.remove(id='78261eea-8f8b-4381-83c6-79fa7120f1cf')
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Segments.remove("78261eea-8f8b-4381-83c6-79fa7120f1cf")
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

	segment, err := client.Segments.RemoveWithContext(ctx, "78261eea-8f8b-4381-83c6-79fa7120f1cf")
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
    .delete("78261eea-8f8b-4381-83c6-79fa7120f1cf")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        RemoveSegmentResponseSuccess response = resend.segments().remove("78261eea-8f8b-4381-83c6-79fa7120f1cf");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.SegmentDeleteAsync( new Guid( "b6d24b8e-af0b-4c3c-be0c-359bbd97381e" ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X DELETE 'https://api.resend.com/segments/78261eea-8f8b-4381-83c6-79fa7120f1cf' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "segment",
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "deleted": true
}
```
