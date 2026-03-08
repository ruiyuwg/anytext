# Update Domain

Source: https://resend.com/docs/api-reference/domains/update-domain

PATCH /domains/:domain\_id
Update an existing domain.

## Path Parameters

The Domain ID.

## Body Parameters

Track clicks within the body of each HTML email.

Track the open rate of each email.

```
  `opportunistic`: Opportunistic TLS means that it always attempts to make a
  secure connection to the receiving mail server. If it can't establish a
  secure connection, it sends the message unencrypted.



  `enforced`: Enforced TLS on the other hand, requires that the email
  communication must use TLS no matter what. If the receiving server does
  not support TLS, the email will not be sent.
```

Update the domain capabilities for sending and receiving emails. You can specify one or both fields. Omitted fields will keep their current value. At least one capability must remain enabled.

```
  Enable or disable sending emails from this domain. Possible values: `'enabled' | 'disabled'`



  Enable or disable receiving emails to this domain. Possible values: `'enabled' | 'disabled'`
```

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.domains.update({
  id: 'b8617ad3-b712-41d9-81a0-f7c3d879314e',
  openTracking: false,
  clickTracking: true,
  tls: 'enforced',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->domains->update(
  'b8617ad3-b712-41d9-81a0-f7c3d879314e',
  [
    'open_tracking' => false,
    'click_tracking' => true,
    'tls' => 'enforced',
  ]
);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Domains.UpdateParams = {
  "id": "b8617ad3-b712-41d9-81a0-f7c3d879314e",
  "open_tracking": False,
  "click_tracking": True,
  "tls": "enforced",
}

resend.Domains.update(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = "re_xxxxxxxxx"

Resend::Domains.update({
  id: "b8617ad3-b712-41d9-81a0-f7c3d879314e",
  open_tracking: false,
  click_tracking: true,
  tls: "enforced",
})
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	updateDomainParams := &resend.UpdateDomainRequest{
		OpenTracking:  false,
		ClickTracking: true,
		Tls:           resend.Enforced,
	}

	client.Domains.Update("b8617ad3-b712-41d9-81a0-f7c3d879314e", updateDomainParams)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::{DomainChanges, Tls}, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let changes = DomainChanges::new()
    .with_open_tracking(false)
    .with_click_tracking(true)
    .with_tls(Tls::Enforced);

  let _domain = resend
    .domains
    .update("b8617ad3-b712-41d9-81a0-f7c3d879314e", changes)
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend resend = new Resend("re_xxxxxxxxx");

UpdateDomainOptions params = UpdateDomainOptions.builder()
                .id("b8617ad3-b712-41d9-81a0-f7c3d879314e")
                .openTracking(false)
                .clickTracking(true)
                .tls(Tls.ENFORCED)
                .build();

resend.domains().update(params);
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

await resend.DomainUpdateAsync(
    new Guid( "b8617ad3-b712-41d9-81a0-f7c3d879314e" ),
    new DomainUpdateData()
    {
        TrackOpen = false,
        TrackClicks = true,
        TlsMode = TlsMode.Enforced,
    }
);
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X PATCH 'https://api.resend.com/domains/b8617ad3-b712-41d9-81a0-f7c3d879314e' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "open_tracking": false,
  "click_tracking": true,
  "tls": "enforced"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "domain",
  "id": "b8617ad3-b712-41d9-81a0-f7c3d879314e"
}
```
