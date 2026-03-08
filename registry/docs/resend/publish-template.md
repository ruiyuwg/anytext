# Publish Template

Source: https://resend.com/docs/api-reference/templates/publish-template

POST /templates/:template\_id/publish
Publish a template.

## Path Parameters

The ID or alias of the template to publish.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.templates.publish(
  '34a080c9-b17d-4187-ad80-5af20266e535',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->templates->publish('34a080c9-b17d-4187-ad80-5af20266e535');
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Templates.publish("34a080c9-b17d-4187-ad80-5af20266e535")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Templates.publish("34a080c9-b17d-4187-ad80-5af20266e535")
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Templates.PublishWithContext(
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

  let _published = resend
    .templates
    .publish("34a080c9-b17d-4187-ad80-5af20266e535")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        PublishTemplateResponseSuccess data = resend.templates().publish("34a080c9-b17d-4187-ad80-5af20266e535");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.TemplatePublishAsync( new Guid( "34a080c9-b17d-4187-ad80-5af20266e535" ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/templates/34a080c9-b17d-4187-ad80-5af20266e535/publish' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "34a080c9-b17d-4187-ad80-5af20266e535",
  "object": "template"
}
```
