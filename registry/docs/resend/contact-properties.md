# Contact Properties

Source: https://resend.com/docs/dashboard/audiences/properties

Learn how to work with Contact Properties with Resend.

Contact Properties can be used to store additional information about your Contacts and then personalize your Broadcasts.

Resend includes a few default properties:

- `first_name`: The first name of the contact.
- `last_name`: The last name of the contact.
- `unsubscribed`: Whether the contact is unsubscribed from all Broadcasts.
- `email`: The email address of the contact.

## Add Custom Contact Properties

You can create additional custom Contact Properties for your Contacts to store additional information. These properties can be used to personalize your Broadcasts across all Segments.

Each Contact Property has a key, a value, and optional fallback value.

- `key`: The key of the property (must be alphanumeric and underscore only, max `50` characters).
- `value`: The value of the property (may be a `string` or `number`).
- `fallback_value`: The fallback value of the property (must match the type of the property).

You can also create Contact Properties [via the API or SDKs](/api-reference/contact-properties/create-contact-property).

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contactProperties.create({
  key: 'company_name',
  type: 'string',
  fallbackValue: 'Acme Corp',
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contactProperties->create([
  'key' => 'company_name',
  'type' => 'string',
  'fallback_value' => 'Acme Corp',
]);
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = 're_xxxxxxxxx'

params = {
    "key": "company_name",
    "type": "string",
    "fallback_value": "Acme Corp",
}

contact_property = resend.ContactProperties.create(params)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

property = Resend::ContactProperties.create({
  key: "company_name",
  type: "string",
  fallback_value: "Acme Corp"
})
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"context"
	"fmt"

	"github.com/resend/resend-go/v3"
)

func main() {
	ctx := context.TODO()
	apiKey := "re_xxxxxxxxx"

	client := resend.NewClient(apiKey)

	params := &resend.CreateContactPropertyRequest{
		Key:           "company_name",
		Type:          "string",
		FallbackValue: "Acme Corp",
	}

	property, err := client.ContactProperties.CreateWithContext(ctx, params)
	if err != nil {
		panic(err)
	}
	fmt.Println(property)
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{
  types::{CreateContactPropertyOptions, PropertyType},
  Resend, Result,
};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let contact_property = CreateContactPropertyOptions::new("company_name", PropertyType::String)
    .with_fallback("Acme Corp");

  let _contact_property = resend.contacts.create_property(contact_property).await?;

  Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
  public static void main(String[] args) {
    Resend resend = new Resend("re_xxxxxxxxx");

    CreateContactPropertyOptions options = CreateContactPropertyOptions.builder()
      .key("company_name")
      .type("string")
      .fallbackValue("Acme Corp")
      .build();

    resend.contactProperties().create(options);
  }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactPropCreateAsync( new ContactPropertyData() {
  Key = "company_name",
  PropertyType = ContactPropertyType.String,
  DefaultValue = "Acme Corp",
} );
Console.WriteLine( "Prop Id={0}", resp.Content );
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/contact-properties' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "key": "company_name",
  "type": "string",
  "fallback_value": "Acme Corp"
}'
```

## Add Properties to a Contact

When you create a Contact Property you can provide a fallback value. This value will be used whenever you don't provide a custom value for a Contact.

To provide a custom value for a Contact, you can use the dashboard:

1. Go to the [Contacts](https://resend.com/audience) page.
2. Click the **more options**  button and then **Edit Contact**.
3. Add the property key and value.
4. Click on the **Save** button.

You can also add properties to a Contact when you [create a Contact](/api-reference/contacts/create-contact).

```ts Node.js {10-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contacts.create({
  email: 'steve.wozniak@gmail.com',
  firstName: 'Steve',
  lastName: 'Wozniak',
  unsubscribed: false,
  properties: {
    company_name: 'Acme Corp',
  },
});
```

```php PHP {9-11} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

$resend->contacts->create(
  parameters: [
    'email' => 'steve.wozniak@gmail.com',
    'first_name' => 'Steve',
    'last_name' => 'Wozniak',
    'unsubscribed' => false,
    'properties' => [
      'company_name' => 'Acme Corp',
    ]
  ]
);
```

```python Python {10-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Contacts.CreateParams = {
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": False,
  "properties": {
    "company_name": "Acme Corp"
  }
}

resend.Contacts.create(params)
```

```ruby Ruby {10-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

params = {
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "company_name": "Acme Corp",
  }
}

Resend::Contacts.create(params)
```

```go Go {10-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
import "github.com/resend/resend-go/v3"

client := resend.NewClient("re_xxxxxxxxx")

params := &resend.CreateContactRequest{
  Email:        "steve.wozniak@gmail.com",
  FirstName:    "Steve",
  LastName:     "Wozniak",
  Unsubscribed: false,
  Properties: map[string]interface{} {
    "company_name": "Acme Corp",
  }
}

contact, err := client.Contacts.Create(params)
```

```rust Rust {11-12} theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::CreateContactOptions, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let contact = CreateContactOptions::new("steve.wozniak@gmail.com")
    .with_first_name("Steve")
    .with_last_name("Wozniak")
    .with_unsubscribed(false)
    .with_properties(vec![("company_name".to_string(), "Acme Corp".to_string())]);

  let _contact = resend.contacts.create(contact).await?;

  Ok(())
}
```

```java Java {12-13} theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateContactOptions params = CreateContactOptions.builder()
                .email("steve.wozniak@gmail.com")
                .firstName("Steve")
                .lastName("Wozniak")
                .unsubscribed(false)
                .properties(java.util.Map.of("company_name", "Acme Corp"))
                .build();

        CreateContactResponseSuccess data = resend.contacts().create(params);
    }
}
```

```csharp .NET {12-14} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

var resp = await resend.ContactAddAsync(
    new ContactData()
    {
        Email = "steve.wozniak@gmail.com",
        FirstName = "Steve",
        LastName = "Wozniak",
        IsUnsubscribed = false,
        Properties = new Dictionary<string, object> {
          { "company_name", "Acme Corp" }
        }
    }
);
Console.WriteLine( "Contact Id={0}", resp.Content );
```

```bash cURL {9-11} theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST 'https://api.resend.com/contacts' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "company_name": "Acme Corp",
  }
}'
```

Or you can update a Contact to add or change a property value [using the update contact endpoint](/api-reference/contacts/update-contact).

```ts Node.js {8-10, 16-18} theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Update by contact id
const { data, error } = await resend.contacts.update({
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  properties: {
    company_name: 'Acme Corp',
  },
});

// Update by contact email
const { data, error } = await resend.contacts.update({
  email: 'acme@example.com',
  properties: {
    company_name: 'Acme Corp',
  },
});
```

```php PHP {7-9, 17-19} theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Update by contact id
$resend->contacts->update(
  id: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
  parameters: [
    'properties' => [
      'company_name' => 'Acme Corp',
    ]
  ]
);

// Update by contact email
$resend->contacts->update(
  email: 'acme@example.com',
  parameters: [
    'properties' => [
      'company_name' => 'Acme Corp',
    ]
  ]
);
```

```python Python {8-10, 18-20} theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

# Update by contact id
params: resend.Contacts.UpdateParams = {
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "properties": {
    "company_name": "Acme Corp",
  }
}

resend.Contacts.update(params)

# Update by contact email
params: resend.Contacts.UpdateParams = {
  "email": "acme@example.com",
  "properties": {
    "company_name": "Acme Corp",
  }
}

resend.Contacts.update(params)
```

```ruby Ruby {8-10, 18-20} theme={"theme":{"light":"github-light","dark":"vesper"}}
require "resend"

Resend.api_key = "re_xxxxxxxxx"

# Update by contact id
params = {
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "properties": {
    "company_name": "Acme Corp",
  }
}

Resend::Contacts.update(params)

# Update by contact email
params = {
  "email": "acme@example.com",
  "properties": {
    "company_name": "Acme Corp",
  }
}

Resend::Contacts.update(params)
```

```go Go {8-10, 19-21} theme={"theme":{"light":"github-light","dark":"vesper"}}
import "github.com/resend/resend-go/v3"

client := resend.NewClient("re_xxxxxxxxx")

// Update by contact id
params := &resend.UpdateContactRequest{
  Id:           "e169aa45-1ecf-4183-9955-b1499d5701d3",
  Properties: new Dictionary<string, object> {
    { "company_name", "Acme Corp" }
  }
}
params.SetUnsubscribed(true)

contact, err := client.Contacts.Update(params)

// Update by contact email
params = &resend.UpdateContactRequest{
  Email:        "acme@example.com",
  Properties: new Dictionary<string, object> {
    { "company_name", "Acme Corp" }
  }
}
params.SetUnsubscribed(true)

contact, err := client.Contacts.Update(params)
```

```rust Rust {7} theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{types::ContactChanges, Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let changes = ContactChanges::new().with_properties(vec![("company_name".to_string(), "Acme Corp".to_string())]);

  // Update by contact id
  let _contact = resend
    .contacts
    .update("e169aa45-1ecf-4183-9955-b1499d5701d3", changes.clone())
    .await?;

  // Update by contact email
  let _contact = resend
    .contacts
    .update("acme@example.com", changes)
    .await?;

  Ok(())
}
```

```java Java {10, 16} theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        // Update by contact id
        UpdateContactOptions params = UpdateContactOptions.builder()
                .id("e169aa45-1ecf-4183-9955-b1499d5701d3")
                .properties(vec![("company_name".to_string(), "Acme Corp".to_string())])
                .build();

        // Update by contact email
        UpdateContactOptions params = UpdateContactOptions.builder()
                .email("acme@example.com")
                .properties(vec![("company_name".to_string(), "Acme Corp".to_string())])
                .build();

        UpdateContactResponseSuccess data = resend.contacts().update(params);
    }
}
```

```csharp .NET {12-14, 25-27} theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

IResend resend = ResendClient.Create( "re_xxxxxxxxx" ); // Or from DI

// By Id
await resend.ContactUpdateAsync(
    contactId: new Guid( "e169aa45-1ecf-4183-9955-b1499d5701d3" ),
    new ContactData()
    {
        FirstName = "Stevie",
        LastName = "Wozniaks",
        Properties = new Dictionary<string, object> {
          { "company_name", "Acme Corp" }
        }
    }
);

// By Email
await resend.ContactUpdateByEmailAsync(
    "acme@example.com",
    new ContactData()
    {
        FirstName = "Stevie",
        LastName = "Wozniaks",
        Properties = new Dictionary<string, object> {
          { "company_name", "Acme Corp" }
        }
    }
);
```

```bash cURL {6-8, 16-18} theme={"theme":{"light":"github-light","dark":"vesper"}}
# Update by contact id
curl -X PATCH 'https://api.resend.com/contacts/520784e2-887d-4c25-b53c-4ad46ad38100' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "properties": {
    "company_name": "Acme Corp",
  }
}'

# Update by contact email
curl -X PATCH 'https://api.resend.com/contacts/acme@example.com' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d $'{
  "properties": {
    "company_name": "Acme Corp",
  }
}'
```

When you create or update a Contact with properties, the properties are added to the Contact, but only if the property key already exists and the value type is valid. You can [list all Contact Properties](/api-reference/contact-properties/list-contact-properties) to see all available properties.

```
If the properties don't exist, they are not added to the Contact and the
call fails. An error is returned.



Yes, property keys are case sensitive. If you create a property with a key
of "company\_name", you cannot use "CompanyName" or "company\_Name" in your
Contacts.



If the value isn't the right type, the property value is not added to the
Contact and the call fails. An error is returned.
```

## Use Contact Properties in Broadcasts

You can use Contact Properties in your Broadcasts to personalize your emails.

You can also use Contact Properties in your Broadcast HTML and Text content when you [create a Broadcast using the API or SDKs](/api-reference/broadcasts/create-broadcast).
