# Create API key

Source: https://resend.com/docs/api-reference/api-keys/create-api-key

POST /api-keys
Add a new API key to authenticate communications with Resend.

## Body Parameters

The API key name. Maximum 50 characters.

The API key can have full access to Resend's API or be only restricted to send
emails. \* `full_access`: Can create, delete, get, and update any resource. \*
`sending_access`: Can only send emails.

Restrict an API key to send emails only from a specific domain. This is only
used when the `permission` is set to `sending_access`.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.apiKeys.create({ name: 'Production' });
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->apiKeys->create([
  'name' => 'Production'
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.ApiKeys.CreateParams = {
  "name": "Production",
}

resend.ApiKeys.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  name: "Production"
}
Resend::ApiKeys.create(params)
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")
	params := &resend.CreateApiKeyRequest{
		Name: "Production",
	}
	client.ApiKeys.Create(params)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateApiKeyOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let _api_key = resend
    .api_keys
    .create(CreateApiKeyOptions::new("Production"))
    .await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateApiKeyOptions params = CreateApiKeyOptions
                .builder()
                .name("Production").build();

        CreateApiKeyResponse apiKey = resend.apiKeys().create(params);
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ApiKeyCreateAsync( "Production" );
Console.WriteLine( "Token={0}", resp.Content.Token );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/api-keys' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "name": "Production"
}'
```

```json Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "id": "dacf4072-4119-4d88-932f-6202748ac7c8",
  "token": "re_c1tpEyD8_NKFusih9vKVQknRAQfmFcWCv"
}
```
