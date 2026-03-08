# Retrieve Domain

Source: https://resend.com/docs/api-reference/domains/get-domain

GET /domains/:domain\_id
Retrieve a single domain for the authenticated user.

## Path Parameters

The Domain ID.

See all available `status` types in [the Domains
overview](/dashboard/domains/introduction#understand-a-domain-status).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.domains.get(
  'd91cd9bd-1176-453e-8fc1-35364d380206',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->domains->get('d91cd9bd-1176-453e-8fc1-35364d380206');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

resend.Domains.get(domain_id="d91cd9bd-1176-453e-8fc1-35364d380206")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

Resend::Domains.get "d91cd9bd-1176-453e-8fc1-35364d380206"
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Domains.Get("d91cd9bd-1176-453e-8fc1-35364d380206")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _domain = resend
    .domains
    .get("d91cd9bd-1176-453e-8fc1-35364d380206")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        Domain domain = resend.domains().get("d91cd9bd-1176-453e-8fc1-35364d380206");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.DomainRetrieveAsync( new Guid( "d91cd9bd-1176-453e-8fc1-35364d380206" ) );
Console.WriteLine( "Domain Id={0}", resp.Content.Name );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/domains/d91cd9bd-1176-453e-8fc1-35364d380206' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "not_started",
  "created_at": "2023-04-26T20:21:26.347412+00:00",
  "region": "us-east-1",
  "capabilities": {
    "sending": "enabled",
    "receiving": "disabled"
  },
  "records": [
    {
      "record": "SPF",
      "name": "send",
      "type": "MX",
      "ttl": "Auto",
      "status": "not_started",
      "value": "feedback-smtp.us-east-1.amazonses.com",
      "priority": 10
    },
    {
      "record": "SPF",
      "name": "send",
      "value": "\"v=spf1 include:amazonses.com ~all\"",
      "type": "TXT",
      "ttl": "Auto",
      "status": "not_started"
    },
    {
      "record": "DKIM",
      "name": "resend._domainkey",
      "value": "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDsc4Lh8xilsngyKEgN2S84+21gn+x6SEXtjWvPiAAmnmggr5FWG42WnqczpzQ/mNblqHz4CDwUum6LtY6SdoOlDmrhvp5khA3cd661W9FlK3yp7+jVACQElS7d9O6jv8VsBbVg4COess3gyLE5RyxqF1vYsrEXqyM8TBz1n5AGkQIDAQA2",
      "type": "TXT",
      "status": "not_started",
      "ttl": "Auto"
    }
  ]
}
```
