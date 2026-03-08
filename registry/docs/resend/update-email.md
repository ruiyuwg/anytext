# Update Email

Source: https://resend.com/docs/api-reference/emails/update-email

PATCH /emails/:email\_id
Update a scheduled email.

## Path Parameters

The Email ID.

## Body Parameters

Schedule email to be sent later. The date should be in ISO 8601 format (e.g:
2024-08-05T11:52:01.858Z).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const oneMinuteFromNow = new Date(Date.now() + 1000 * 60).toISOString();

const { data, error } = await resend.emails.update({
  id: '49a3999c-0ce1-4ea6-ab68-afcd6dc2e794',
  scheduledAt: oneMinuteFromNow,
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$oneMinuteFromNow = (new DateTime())->modify('+1 minute')->format(DateTime::ISO8601);

$resend->emails->update('49a3999c-0ce1-4ea6-ab68-afcd6dc2e794', [
  'scheduled_at' => $oneMinuteFromNow
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend
from datetime import datetime, timedelta

resend.api_key = "re_xxxxxxxxx"

one_minute_from_now = (datetime.now() + timedelta(minutes=1)).isoformat()

update_params: resend.Emails.UpdateParams = {
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
  "scheduled_at": one_minute_from_now
}

resend.Emails.update(params=update_params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

one_minute_from_now = (Time.now + 1 * 60).strftime("%Y-%m-%dT%H:%M:%S.%L%z")

update_params = {
  "email_id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
  "scheduled_at": one_minute_from_now
}

Resend::Emails.update(update_params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"time"

	"github.com/resend/resend-go/v3"
)

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	oneMinuteFromNow := time.Now().Add(time.Minute * time.Duration(1))
	oneMinuteFromNowIso := oneMinuteFromNow.Format("2006-01-02T15:04:05-0700")

	updateParams := &resend.UpdateEmailRequest{
		Id:          "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
		ScheduledAt: oneMinuteFromNowIso,
	}

	client.Emails.Update(updateParams)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use chrono::{Local, TimeDelta};
use resend_rs::types::UpdateEmailOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let one_minute_from_now = Local::now()
    .checked_add_signed(TimeDelta::minutes(1))
    .unwrap()
    .to_rfc3339();

  let update = UpdateEmailOptions::new()
    .with_scheduled_at(&one_minute_from_now);

  let _email = resend
    .emails
    .update("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794", update)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        String oneMinuteFromNow = Instant
          .now()
          .plus(1, ChronoUnit.MINUTES)
          .toString();

        UpdateEmailOptions updateParams = UpdateEmailOptions.builder()
                .scheduledAt(oneMinuteFromNow)
                .build();

        UpdateEmailResponse data = resend.emails().update("49a3999c-0ce1-4ea6-ab68-afcd6dc2e794", updateParams);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.EmailRescheduleAsync(
    new Guid( "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794" ),
    DateTime.UtcNow.AddMinutes( 1 ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/emails/49a3999c-0ce1-4ea6-ab68-afcd6dc2e794' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "scheduled_at": "2024-08-05T11:52:01.858Z"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "email",
  "id": "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794"
}
```
