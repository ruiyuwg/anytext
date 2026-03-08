# List Templates

Source: https://resend.com/docs/api-reference/templates/list-templates

GET /templates
List all templates.

By default, the API will return the most recent 20 templates. You can optionally use the `limit` parameter to return a different number of templates or control the pagination of the results with the `after` or `before` parameters.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.templates.list({
  limit: 2,
  after: '34a080c9-b17d-4187-ad80-5af20266e535',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->templates->list([
  'limit' => 2,
  'after' => '34a080c9-b17d-4187-ad80-5af20266e535'
]);
```

```py Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Templates.list({
    "limit": 2,
    "after": "34a080c9-b17d-4187-ad80-5af20266e535",
})
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Templates.list(
  limit: 2,
  after: "34a080c9-b17d-4187-ad80-5af20266e535"
)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Templates.ListWithContext(context.TODO(), &resend.ListOptions{
		Limit: 2,
		After: "34a080c9-b17d-4187-ad80-5af20266e535",
	})
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{list_opts::ListOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let list_opts = ListOptions::default()
    .with_limit(2)
    .list_after("34a080c9-b17d-4187-ad80-5af20266e535");

  let _list = resend.templates.list(list_opts).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        ListParams params = ListParams.builder()
            .limit(2)
            .after("34a080c9-b17d-4187-ad80-5af20266e535")
            .build();

        ListTemplatesResponseSuccess data = resend.templates().list(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.TemplateListAsync();
Console.WriteLine( "Nr Templates={0}", resp.Content.Data.Count );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/templates?limit=2&after=34a080c9-b17d-4187-ad80-5af20266e535' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "name": "reset-password",
      "status": "draft",
      "published_at": null,
      "created_at": "2023-10-06T23:47:56.678Z",
      "updated_at": "2023-10-06T23:47:56.678Z",
      "alias": "reset-password"
    },
    {
      "id": "b7f9c2e1-1234-4abc-9def-567890abcdef",
      "name": "welcome-message",
      "status": "published",
      "published_at": "2023-10-06T23:47:56.678Z",
      "created_at": "2023-10-06T23:47:56.678Z",
      "updated_at": "2023-10-06T23:47:56.678Z",
      "alias": "welcome-message"
    }
  ],
  "has_more": false
}
```
