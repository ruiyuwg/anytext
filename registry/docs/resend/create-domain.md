# Create Domain

Source: https://resend.com/docs/api-reference/domains/create-domain

POST /domains
Create a domain through the Resend Email API.

## Body Parameters

The name of the domain you want to create.

The region where emails will be sent from. Possible values: `'us-east-1' |
      'eu-west-1' | 'sa-east-1' | 'ap-northeast-1'`

For advanced use cases, choose a subdomain for the Return-Path address. The
custom return path is used for SPF authentication, DMARC alignment, and
handling bounced emails. Defaults to `send` (i.e., `send.yourdomain.tld`). Avoid
setting values that could undermine credibility (e.g. `testing`), as they may
be exposed to recipients.

Learn more about [custom return paths](/dashboard/domains/introduction#custom-return-path).

Track clicks within the body of each HTML email. When enabled, links are
rewritten to go through Resend and then redirect to the destination. Use
[custom tracking domains](/api-reference/domains/create-tracking-domain) to
serve click tracking from your own domain (e.g. `track.example.com`).

Track the open rate of each email. Use [custom tracking
domains](/api-reference/domains/create-tracking-domain) to serve open tracking
from your own domain (e.g. `track.example.com`).

```
  `opportunistic`: Opportunistic TLS means that it always attempts to make a
  secure connection to the receiving mail server. If it can't establish a
  secure connection, it sends the message unencrypted.



  `enforced`: Enforced TLS on the other hand, requires that the email
  communication must use TLS no matter what. If the receiving server does
  not support TLS, the email will not be sent.
```

Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.

```
  Enable or disable sending emails from this domain. Possible values: `'enabled' | 'disabled'`



  Enable or disable receiving emails to this domain. Possible values: `'enabled' | 'disabled'`
```

See all available `status` types in [the Domains
overview](/dashboard/domains/introduction#understand-a-domain-status).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.domains.create({ name: 'example.com' });
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->domains->create([
  'name' => 'example.com'
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Domains.CreateParams = {
  "name": "example.com",
}

resend.Domains.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = ENV["RESEND_API_KEY"]

params = {
  name: "example.com",
}
domain = Resend::Domains.create(params)
puts domain
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	params := &resend.CreateDomainRequest{
		Name: "example.com",
	}

	client.Domains.Create(params)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateDomainOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _domain = resend
    .domains
    .add(CreateDomainOptions::new("example.com"))
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateDomainOptions params = CreateDomainOptions
                .builder()
                .name("example.com").build();

        CreateDomainResponse domain = resend.domains().create(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.DomainAddAsync( "example.com" );
Console.WriteLine( "Domain Id={0}", resp.Content.Id );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/domains' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "name": "example.com"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "4dd369bc-aa82-4ff3-97de-514ae3000ee0",
  "name": "example.com",
  "created_at": "2023-03-28T17:12:02.059593+00:00",
  "status": "not_started",
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
      "name": "nhapbbryle57yxg3fbjytyodgbt2kyyg._domainkey",
      "value": "nhapbbryle57yxg3fbjytyodgbt2kyyg.dkim.amazonses.com.",
      "type": "CNAME",
      "status": "not_started",
      "ttl": "Auto"
    },
    {
      "record": "DKIM",
      "name": "xbakwbe5fcscrhzshpap6kbxesf6pfgn._domainkey",
      "value": "xbakwbe5fcscrhzshpap6kbxesf6pfgn.dkim.amazonses.com.",
      "type": "CNAME",
      "status": "not_started",
      "ttl": "Auto"
    },
    {
      "record": "DKIM",
      "name": "txrcreso3dqbvcve45tqyosxwaegvhgn._domainkey",
      "value": "txrcreso3dqbvcve45tqyosxwaegvhgn.dkim.amazonses.com.",
      "type": "CNAME",
      "status": "not_started",
      "ttl": "Auto"
    }
  ],
  "region": "us-east-1"
}
```
