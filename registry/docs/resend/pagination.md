# Pagination

Source: https://resend.com/docs/api-reference/pagination

Learn how pagination works in the Resend API.

## Overview

Several Resend API endpoints support **cursor-based pagination** to help you efficiently browse through large datasets. You can safely navigate lists with guaranteed stability, even if new objects are created or deleted while you're still requesting pages.

Paginated endpoints responses include:

- `object`: always set to `list`.
- `has_more`: indicates whether there are more elements available.
- `data`: the list of returned items.

You can navigate through the results using the following parameters:

- `limit`: the number of items to return per page.
- `after`: the cursor to use to get the next page of results.
- `before`: the cursor to use to get the previous page of results.

Use the `id` of objects as the cursor for pagination. The cursor itself is *excluded* from the results. For an example, see [pagination strategies below](#strategies).

## Currently-supported endpoints

Existing list endpoints can optionally return paginated results:

- [List Domains](/api-reference/domains/list-domains)
- [List API Keys](/api-reference/api-keys/list-api-keys)
- [List Broadcasts](/api-reference/broadcasts/list-broadcasts)
- [List Segments](/api-reference/segments/list-segments)
- [List Contacts](/api-reference/contacts/list-contacts)
- [List Receiving Emails](/api-reference/emails/list-received-emails)
- [List Receiving Email Attachments](/api-reference/emails/list-received-email-attachments)

  Note that for these endpoints, the `limit` parameter is optional. If you do
  not provide a `limit`, all items will be returned in a single response.

Newer list endpoints always return paginated results:

- [List Emails](/api-reference/emails/list-emails)
- [List Templates](/api-reference/templates/list-templates)
- [List Topics](/api-reference/topics/list-topics)

## Parameters

All paginated endpoints support the following query parameters:

The number of items to return per page. Default is `20`, maximum is `100`, and
minimum is `1`.

The cursor after which to start retrieving items. To get the next page, use
the ID of the last item from the current page. This will return the page that
**starts after** the object with this ID (excluding the passed ID itself).

The cursor before which to start retrieving items. To get the previous page,
use the ID of the first item from the current page. This will return the page
that **ends before** the object with this ID (excluding the passed ID itself).

You can only use either `after` or `before`, not both simultaneously.

## Response Format

Paginated endpoints return responses in the following format:

```json Response Format theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "object": "list",
  "has_more": true,
  "data": [
    /* Array of resources */
  ]
}
```

Always set to `list` for paginated responses.

Indicates whether there are more items available beyond the current page.

An array containing the actual resources for the current page.

## Strategies

### Forward Pagination

To paginate forward through results (newer to older items), use the `after` parameter with the ID of the **last item** from the current page:

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
const resend = new Resend('re_xxxxxxxxx');

// First page
const { data: firstPage } = await resend.contacts.list({ limit: 50 });

// Second page (if has_more is true)
if (firstPage.has_more) {
  const lastId = firstPage.data[firstPage.data.length - 1].id;
  const { data: secondPage } = await resend.contacts.list({
    limit: 50,
    after: lastId,
  });
}
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// First page
$firstPage = $resend->contacts->list(['limit' => 50]);

// Second page (if has_more is true)
if ($firstPage['has_more']) {
    $lastId = end($firstPage['data'])['id'];
    $secondPage = $resend->contacts->list([
        'limit' => 50,
        'after' => $lastId
    ]);
}
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

# First page
first_page = resend.Contacts.list(limit=50)

# Second page (if has_more is true)
if first_page['has_more']:
    last_id = first_page['data'][-1]['id']
    second_page = resend.Contacts.list(limit=50, after=last_id)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = "re_xxxxxxxxx"

# First page
first_page = Resend::Contacts.list(limit: 50)

# Second page (if has_more is true)
if first_page['has_more']
  last_id = first_page['data'].last['id']
  second_page = Resend::Contacts.list(limit: 50, after: last_id)
end
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	// First page
	firstPage, err := client.Contacts.List(&resend.ListContactsRequest{
		Limit: 50,
	})

	// Second page (if has_more is true)
	if firstPage.HasMore {
		lastId := firstPage.Data[len(firstPage.Data)-1].ID
		client.Contacts.List(&resend.ListContactsRequest{
			Limit: 50,
			After: lastId,
		})
	}
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result, types::ListContactOptions};

#[tokio::main]
async fn main() -> Result<()> {
    let resend = Resend::new("re_xxxxxxxxx");

    // First page
    let list_opts = ListContactOptions::default().with_limit(50);
    let first_page = resend.emails.list(list_opts).await?;

    // Second page (if has_more is true)
    if first_page.has_more {
        let last_id = &first_page.data.last().unwrap().id;
        let list_opts = ListContactOptions::default()
            .with_limit(10)
            .list_after(last_id);
        let second_page = resend.contacts.list(list_opts).await?;
    }

    Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        // First page
        ListEmailsResponse firstPage = resend.emails().list(10);

        // Second page (if has_more is true)
        if (firstPage.getHasMore()) {
            String lastId = firstPage.getData().get(firstPage.getData().size() - 1).getId();
            ListContactsResponse secondPage = resend.contacts().list(50, lastId, null);
        }
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;
using System.Linq;

IResend resend = ResendClient.Create("re_xxxxxxxxx");

// First page
var firstPage = await resend.EmailListAsync( new PaginatedQuery() {
  Limit = 50,
});

// Second page (if has_more is true)
if (firstPage.Content.HasMore)
{
    var lastId = firstPage.Content.Data.Last().Id;
    var secondPage = await resend.EmailListAsync( new PaginatedQuery() {
      Limit = 50,
      After = lastId.ToString(),
    });
}
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# First page
curl -X GET 'https://api.resend.com/contacts?limit=50' \
     -H 'Authorization: Bearer re_xxxxxxxxx'

# Second page
curl -X GET 'https://api.resend.com/contacts?limit=50&after=LAST_ID_FROM_PREVIOUS_PAGE' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

### Backward Pagination

To paginate backward through results (older to newer items), use the `before` parameter with the ID of the **first item** from the current page (or the most recent ID you have in your system):

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
const resend = new Resend('re_xxxxxxxxx');

// Start from a specific point and go backward
const page = await resend.contacts.list({
  limit: 50,
  before: 'some-contact-id',
});

if (page.data.has_more) {
  const firstId = page.data.data[0].id;
  const previousPage = await resend.contacts.list({
    limit: 50,
    before: firstId,
  });
}
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$resend = Resend::client('re_xxxxxxxxx');

// Start from a specific point and go backward
$page = $resend->contacts->list([
    'limit' => 50,
    'before' => 'some-contact-id'
]);

if ($page['has_more']) {
    $firstId = $page['data'][0]['id'];
    $previousPage = $resend->contacts->list([
        'limit' => 50,
        'before' => $firstId
    ]);
}
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend

resend.api_key = "re_xxxxxxxxx"

# Start from a specific point and go backward
page = resend.Contacts.list(limit=50, before="some-contact-id")

if page["has_more"]:
    first_id = page["data"][0]["id"]
    previous_page = resend.Contacts.list(limit=50, before=first_id)
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = "re_xxxxxxxxx"

# Start from a specific point and go backward
page = Resend::Contacts.list(limit: 50, before: 'some-contact-id')

if page['has_more']
  first_id = page['data'].first['id']
  previous_page = Resend::Contacts.list(limit: 50, before: first_id)
end
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import "github.com/resend/resend-go/v3"

func main() {
	client := resend.NewClient("re_xxxxxxxxx")

	// Start from a specific point and go backward
	page, err := client.Contacts.List(&resend.ListContactsRequest{
		Limit:  resend.Int(50),
		Before: resend.String("some-contact-id"),
	})

	if page.HasMore {
		firstId := page.Data[0].ID
		client.Contacts.List(&resend.ListContactsRequest{
			Limit:  resend.Int(50),
			Before: resend.String(firstId),
		})
	}
}
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::{Resend, Result, types::ListContactOptions};

#[tokio::main]
async fn main() -> Result<()> {
    let resend = Resend::new("re_xxxxxxxxx");

    // Start from a specific point and go backward
    let list_opts = ListContactOptions::default()
        .with_limit(50)
        .list_before("some-email-id");
    let page = resend.contacts.list(list_opts).await?;

    if page.has_more {
        let first_id = &page.data.first().unwrap().id;
        let list_opts = ListContactOptions::default()
            .with_limit(10)
            .list_before(first_id);
        let previous_page = resend.contacts.list(list_opts).await?;
    }

    Ok(())
}
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        // Start from a specific point and go backward
        ListContactsResponse page = resend.contacts().list(50, null, "some-contact-id");

        if (page.getHasMore()) {
            String firstId = page.getData().get(0).getId();
            ListContactsResponse previousPage = resend.contacts().list(50, null, firstId);
        }
    }
}
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;
using System.Linq;

IResend resend = ResendClient.Create("re_xxxxxxxxx");

// Start from a specific point and go backward
var page = await resend.EmailListAsync( new PaginatedQuery() {
  Limit = 50,
  Before = "some-email-id",
});

if (page.Content.HasMore)
{
    var firstId = page.Content.Data.First().Id;
    var prevPage = await resend.EmailListAsync( new PaginatedQuery() {
      Limit = 50,
      Before = firstId.ToString(),
    });
}
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X GET 'https://api.resend.com/contacts?limit=50&before=some-contact-id' \
     -H 'Authorization: Bearer re_xxxxxxxxx'
```

## Best Practices

```
Choose a `limit` that balances performance and usability. Smaller pages are good for real-time applications, while larger pages
(hundreds of items) work better for bulk processing.



Always check the `has_more` field before attempting to fetch additional pages.
This prevents unnecessary API calls when you've reached the end of the
dataset.



Be mindful of API rate limits when paginating through large datasets.
Implement appropriate delays or batching strategies if processing many
pages.
```

## Error Handling

Pagination requests may return the following validation errors:

| Error              | Description                                         |
| ------------------ | --------------------------------------------------- |
| `validation_error` | Invalid cursor format or limit out of range (1-100) |
| `validation_error` | Both `before` and `after` parameters provided       |

Example error response:

```json Error Response theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "name": "validation_error",
  "statusCode": 422,
  "message": "The pagination limit must be a number between 1 and 100. See https://resend.com/docs/pagination for more information."
}
```
