# REST API: Sort & Pagination

Entries that are returned by queries to the [REST API](/cms/api/rest) can be sorted and paginated.

JavaScript query (built with the qs library):

### Example: Sort using 2 fields and set the order

Using the `sort` parameter and defining `:asc` or  `:desc` on sorted fields, you can get results sorted in a particular order.

JavaScript query (built with the qs library):

## Pagination

Queries can accept `pagination` parameters. Results can be paginated:

- either by [page](#pagination-by-page) (i.e., specifying a page number and the number of entries per page)
- or by [offset](#pagination-by-offset) (i.e., specifying how many entries to skip and to return)

Pagination methods can not be mixed. Always use either `page` with `pageSize` **or** `start` with `limit`.

### Pagination by page

To paginate results by page, use the following parameters:

| Parameter               | Type    | Description                                                               | Default |
| ----------------------- | ------- | ------------------------------------------------------------------------- | ------- |
| `pagination[page]`      | Integer | Page number                                                               | 1       |
| `pagination[pageSize]`  | Integer | Page size                                                                 | 25      |
| `pagination[withCount]` | Boolean | Adds the total numbers of entries and the number of pages to the response | True    |

JavaScript query (built with the qs library):

### Pagination by offset

To paginate results by offset, use the following parameters:

| Parameter               | Type    | Description                                                    | Default |
| ----------------------- | ------- | -------------------------------------------------------------- | ------- |
| `pagination[start]`     | Integer | Start value (i.e. first entry to return)                      | 0       |
| `pagination[limit]`     | Integer | Number of entries to return                                    | 25      |
| `pagination[withCount]` | Boolean | Toggles displaying the total number of entries to the response | `true`  |

The default and maximum values for `pagination[limit]` can be [configured in the `./config/api.js`](/cms/configurations/api) file with the `api.rest.defaultLimit` and `api.rest.maxLimit` keys.

JavaScript query (built with the qs library):

# Status

Source: //cms/api/rest/status

# REST API: `status`

The [REST API](/cms/api/rest) offers the ability to filter results based on their status, draft or published.

The [Draft & Publish](/cms/features/draft-and-publish) feature should be enabled.

Queries can accept a `status` parameter to fetch documents based on their status:

- `published`: returns only the published version of documents (default)
- `draft`: returns only the draft version of documents

In the response data, the `publishedAt` field is `null` for drafts.

Since published versions are returned by default, passing no status parameter is equivalent to passing `status=published`.

JavaScript query (built with the qs library):

# Upload files

Source: //cms/api/rest/upload
