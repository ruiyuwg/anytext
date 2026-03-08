# Verify Domain

Source: https://resend.com/docs/api-reference/domains/verify-domain

POST /domains/:domain\_id/verify
Verify an existing domain.

Calling this API endpoint triggers an **asynchronous domain verification
process**. The domain will be temporarily marked as `pending` regardless of
its current status while the verification is in progress. Since this request
initiates the complete domain verification cycle, it will trigger
`domain.updated` webhook events as the domain status changes during the
verification process.

## Path Parameters

The Domain ID.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.domains.verify(
  'd91cd9bd-1176-453e-8fc1-35364d380206',
);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->domains->verify('d91cd9bd-1176-453e-8fc1-35364d380206');
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"
resend.Domains.verify(domain_id="d91cd9bd-1176-453e-8fc1-35364d380206")
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = ENV["RESEND_API_KEY"]
Resend::Domains.verify("d91cd9bd-1176-453e-8fc1-35364d380206")
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	client.Domains.Verify("d91cd9bd-1176-453e-8fc1-35364d380206")
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  resend
    .domains
    .verify("d91cd9bd-1176-453e-8fc1-35364d380206")
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        VerifyDomainResponse verified = resend.domains().verify("d91cd9bd-1176-453e-8fc1-35364d380206");
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.DomainVerifyAsync( new Guid( "d91cd9bd-1176-453e-8fc1-35364d380206" ) );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/domains/d91cd9bd-1176-453e-8fc1-35364d380206/verify' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206"
}
```
