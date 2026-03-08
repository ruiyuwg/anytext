# Update Topic

Source: https://resend.com/docs/api-reference/topics/update-topic

PATCH /topics/:topic\_id
Update an existing topic.

## Path Parameters

The Topic ID.

## Body Parameters

The topic name. Max length is `50` characters.

The topic description. Max length is `200` characters.

The visibility of the topic on the unsubscribe page. Possible values: `public` or `private`.

- `private`: only contacts who are opted in to the topic can see it on the unsubscribe page.
- `public`: all contacts can see the topic on the unsubscribe page.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.topics.update(
  'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
  {
    name: 'Weekly Newsletter',
    description: 'Weekly newsletter for our subscribers',
  },
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->topics->update('b6d24b8e-af0b-4c3c-be0c-359bbd97381e', [
  'name' => 'Weekly Newsletter',
  'description' => 'Weekly newsletter for our subscribers',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Topics.update(
    id="b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
    params={
        "name": "Monthly Newsletter",
        "description": "Subscribe to our monthly newsletter for updates",
    }
)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Topics.update(
  topic_id: "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
  name: "Weekly Newsletter",
  description: "Weekly newsletter for our subscribers"
)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
import (
	"context"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Topics.UpdateWithContext(context.TODO(), "b6d24b8e-af0b-4c3c-be0c-359bbd97381e", &resend.UpdateTopicRequest{
		Name:        "Weekly Newsletter",
		Description: "Weekly newsletter for our subscribers",
	})
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::UpdateTopicOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let update = UpdateTopicOptions::new()
    .with_name("Weekly Newsletter")
    .with_description("Weekly newsletter for our subscribers");

  let _topic = resend
    .topics
    .update("b6d24b8e-af0b-4c3c-be0c-359bbd97381e", update)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    UpdateTopicOptions updateTopicOptions = UpdateTopicOptions.builder()
      .name("Weekly Newsletter")
      .description("Weekly newsletter for our subscribers")
      .build();

    UpdateTopicResponseSuccess response = resend.topics().update(
      "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
      updateTopicOptions
    );
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.TopicUpdateAsync(
  new Guid( "b6d24b8e-af0b-4c3c-be0c-359bbd97381e" ),
  new TopicData() {
    Name = "Weekly Newsletter",
    Description = "Weekly newsletter for our subscribers",
    SubscriptionDefault = SubscriptionType.OptIn,
  }
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/topics/b6d24b8e-af0b-4c3c-be0c-359bbd97381e' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "name": "Weekly Newsletter",
  "default_subscription": "opt_in"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "topic",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
}
```
