# Cancel Email

Source: https://resend.com/docs/api-reference/emails/cancel-email

POST /emails/:email\_id/cancel
Cancel a scheduled email.

## Path Parameters

The Email ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.emails.cancel(
  '49a3999c-0ce1-4ea6-ab68-afcd6dc2e794',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->cancel('49a3999c-0ce1-4ea6-ab68-afcd6dc2e794');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"
resend.Emails.cancel(email_id="49a3999c-0ce1-4ea6-ab68-afcd6dc2e794")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Emails.cancel("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794")
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"fmt"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	canceled, err := client.Emails.Cancel("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794")
	if err != nil {
		panic(err)
	}
	fmt.Println(canceled.Id)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _canceled = resend
    .emails
    .cancel("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CancelEmailResponse canceled = resend
          .emails()
          .cancel("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.EmailCancelAsync( new Guid( "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794" ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/emails/49a3999c-0ce1-4ea6-ab68-afcd6dc2e794/cancel' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "email",
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}
```
