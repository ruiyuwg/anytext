# Get Template

Source: https://resend.com/docs/api-reference/templates/get-template

GET /templates/:template\_id
Get a template by ID.

## Path Parameters

The ID or alias of the template to get.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.templates.get(
  '34a080c9-b17d-4187-ad80-5af20266e535',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->templates->get('34a080c9-b17d-4187-ad80-5af20266e535');
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Templates.get("34a080c9-b17d-4187-ad80-5af20266e535")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Templates.get("34a080c9-b17d-4187-ad80-5af20266e535")
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Templates.GetWithContext(
		context.TODO(),
		"34a080c9-b17d-4187-ad80-5af20266e535",
	)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _template = resend
    .templates
    .get("34a080c9-b17d-4187-ad80-5af20266e535")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        GetTemplateResponseSuccess data = resend.templates().get("34a080c9-b17d-4187-ad80-5af20266e535");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var res = await resend.TemplateRetrieveAsync( new Guid( "34a080c9-b17d-4187-ad80-5af20266e535" ) );
Console.WriteLine( "Template Name={0}", res.Content.Name );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/templates/34a080c9-b17d-4187-ad80-5af20266e535' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "template",
  "id": "34a080c9-b17d-4187-ad80-5af20266e535",
  "current_version_id": "b2693018-7abb-4b4b-b4cb-aadf72dc06bd",
  "alias": "reset-password",
  "name": "reset-password",
  "created_at": "2023-10-06T23:47:56.678Z",
  "updated_at": "2023-10-06T23:47:56.678Z",
  "status": "published",
  "published_at": "2023-10-06T23:47:56.678Z",
  "from": "John Doe <john.doe@example.com>",
  "subject": "Hello, world!",
  "reply_to": null,
  "html": "Hello, world!",
  "text": "Hello, world!",
  "variables": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "key": "user_name",
      "type": "string",
      "fallback_value": "John Doe",
      "created_at": "2023-10-06T23:47:56.678Z",
      "updated_at": "2023-10-06T23:47:56.678Z"
    }
  ],
  "has_unpublished_versions": true
}
```
