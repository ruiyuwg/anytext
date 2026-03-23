# Open and Click Tracking

Source: https://resend.com/docs/dashboard/domains/tracking

Track open and click rates of your emails.

Open and click tracking is disabled by default for all domains.

You can enable it manually or programmatically.

````
Go to the **Domains** page and click on the domain you want to configure.

In the **Configuration** tab, you can enable open and/or click tracking.





You can also programmatically enable open and/or click tracking by using the API.


  ```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
  import { Resend } from 'resend';

  const resend = new Resend('re_xxxxxxxxx');

  const { data, error } = await resend.domains.update({
    id: 'b8617ad3-b712-41d9-81a0-f7c3d879314e',
    openTracking: false,
    clickTracking: true,
  });
  ```

  ```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
  $resend = Resend::client('re_xxxxxxxxx');

  $resend->domains->update(
    'b8617ad3-b712-41d9-81a0-f7c3d879314e',
    [
      'open_tracking' => false,
      'click_tracking' => true,
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
  }

  resend.Domains.update(params)
  ```

  ```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
  Resend.api_key = "re_xxxxxxxxx"

  Resend::Domains.update({
    id: "b8617ad3-b712-41d9-81a0-f7c3d879314e",
    open_tracking: false,
    click_tracking: true,
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
      .with_click_tracking(true);

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
      }
  );
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
  curl -X PATCH 'https://api.resend.com/domains/b8617ad3-b712-41d9-81a0-f7c3d879314e' \
       -H 'Authorization: Bearer re_xxxxxxxxx' \
       -H 'Content-Type: application/json' \
       -d $'{
    "open_tracking": false,
    "click_tracking": true
  }'
  ```


View the [API reference](/api-reference/domains/update-domain) for more details.
````

For best deliverability, we recommend disabling click and open tracking [for
sensitive transactional
emails](/dashboard/emails/deliverability-insights#disable-click-tracking).

## How Open Tracking Works

A 1x1 pixel transparent GIF image is inserted in each email and includes a unique reference to this image file. When the image is downloaded, Resend can tell exactly which message was opened and by whom.

## How Click Tracking Works

To track clicks, Resend modifies each link in the body of the HTML email. When recipients open a link, they are sent through a Resend server, and then immediately to the URL destination.

## Custom Tracking Domain

You can configure a custom domain for all click and open urls in your emails.

When configured, Resend modifies each link in the body of the HTML to pass through Resend servers using this domain.

Custom tracking domains are currently in private alpha and only available to a limited
number of users. APIs might change before GA.

To use the methods on this page, you must upgrade your Resend SDK:

````
```bash Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend@6.10.0-preview-tracking-domains.0
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
// PHP SDK is not available yet
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
# Python SDK is not available yet
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
# Ruby SDK is not available yet
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
// Go SDK is not available yet
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
// Rust SDK is not available yet
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
// Java SDK is not available yet
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
// C# SDK is not available yet
```
````

[Contact us](https://resend.com/contact) if you're interested in testing
this feature.

A tracking domain will always share the same root domain as your sending domain. This improves deliverability and brand
consistency.

Similar to verifying your sending domain, you will need to add a CNAME record to your DNS settings to verify your
tracking domain.

Once verified, all tracked links in your emails will use your custom tracking domain (e.g., `links.emails.yourdomain.com`).

Here's how to configure a custom tracking domain.

````
Look for the **Custom Tracking Domain** section, and click on **Configure**.



Then, you will need to add a CNAME record to verify your tracking domain.



Once verified, all tracked links in your emails will use your custom tracking domain.





You can also create a custom tracking domain by using the API.


  ```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
  import { Resend } from 'resend';

  const resend = new Resend('re_xxxxxxxxx');

  const { data, error } = await resend.domains.trackingDomains.create(
    'd91cd9bd-1176-453e-8fc1-35364d380206',
    {
      subdomain: 'links',
    },
  );
  ```

  ```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
  // PHP SDK is not available yet
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Python SDK is not available yet
  ```

  ```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Ruby SDK is not available yet
  ```

  ```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Go SDK is not available yet
  ```

  ```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Rust SDK is not available yet
  ```

  ```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Java SDK is not available yet
  ```

  ```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
  // C# SDK is not available yet
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
  curl -X POST 'https://api.resend.com/domains/d91cd9bd-1176-453e-8fc1-35364d380206/tracking-domains' \
    -H 'Authorization: Bearer re_xxxxxxxxx' \
    -H 'Content-Type: application/json' \
    -d '{"subdomain": "links"}'
  ```


Then, you will need to verify the tracking domain.


  ```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
  import { Resend } from 'resend';

  const resend = new Resend('re_xxxxxxxxx');

  const { data, error } = await resend.domains.trackingDomains.verify(
    'd91cd9bd-1176-453e-8fc1-35364d380206',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  );
  ```

  ```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
  // PHP SDK is not available yet
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Python SDK is not available yet
  ```

  ```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Ruby SDK is not available yet
  ```

  ```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Go SDK is not available yet
  ```

  ```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Rust SDK is not available yet
  ```

  ```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Java SDK is not available yet
  ```

  ```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
  // C# SDK is not available yet
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
  curl -X POST 'https://api.resend.com/domains/d91cd9bd-1176-453e-8fc1-35364d380206/tracking-domains/a1b2c3d4-e5f6-7890-abcd-ef1234567890/verify' \
    -H 'Authorization: Bearer re_xxxxxxxxx'
  ```


Once verified, all tracked links in your emails will use your custom tracking domain.
````
