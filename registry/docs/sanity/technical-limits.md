# Technical limits

This article describes various limits in the data store. Note that a project may have additional limits depending on its plan. See the [pricing page](https://www.sanity.io/pricing) for plan-specific details. The API rejects calls that exceed these limits with an error. If you need limits beyond these, contact Sanity support and we can customize limits for your needs.

We use standard SI units, so 1 MB is 1,000,000 bytes.

## Datasets

The following limits apply to datasets:

- Maximum number of documents: 10 million (customization possible for enterprise customers)

- Maximum total size of JSON documents: 10 GB

- Maximum number of unique attributes across all documents:- Free plan: 2,000 attributes

- Growth plan: 10,000 attributes

- Enterprise plan: Custom number of attributes

- Maximum dataset name length: 64 characters

> \[!TIP]
> Pro tip
> An attribute here is considered to be any unique attribute/datatype combination, so an attribute `attr` containing a string, integer, and null value (in different documents) counts as 3 attributes. Additionally, arrays count as 1 extra attribute per unique datatype they contain, so the array `[2.718, 3.14, "abc", "def", true]` counts as 4 attributes (1 for the array itself, and 3 for the datatypes float, string, and boolean).

## Documents

The following limits apply to individual documents:

- Maximum JSON document size: 32 MB

- Maximum number of attributes:- Free and growth plan: 1,000 attributes

- Enterprise plan: 8,000 attributes

- Maximum attribute nesting depth: 20 levels

- Maximum searchable term length: 1,024 UTF-8 characters (silently ignored without error)

## Listeners

Maximum concurrent listeners for the various project plans:

- Free plan: 1,000 listeners
- Growth plan: 5,000 listeners
- Enterprise plan: 10,000 listeners

> \[!TIP]
> Editor experience
> In the event you hit the maximum concurrent listener limit, you will get the error `Max listener limit exceeded at <LIMIT>`.

## API Calls

- Maximum working set retrieved from data backend: 500 MB
- Maximum query execution time: 1 minute
- Maximum mutation execution time: 3 minutes
- Maximum export execution time: 5 minutes
- Maximum listener connection lifetime: 30 minutes
- Maximum [scheduled publishing](https://www.sanity.io/docs/scheduling-api#dcb47be520d0) execution time: 1 minute

## Rate limits

### Resource rate limits

Creation limits are enforced for the following resources.

- Users are limited to 5 new organizations per hour.
- Organizations are limited to 5 new projects per hour.

### API rate limits

We have two rate-limits in place: one per source IP and one for number of concurrent queries.

#### API rate limits per IP

API rate limits are enforced per client IP address per second. If you exceed a rate limit, the API returns HTTP `429` responses for any further requests of that type until the next period begins.

- Maximum mutation rate: 25 req/s (`POST` to `/data/mutate`)
- Maximum upload rate: 25 req/s (`POST` to `/assets/`)
- Maximum global API call rate: 500 req/s
- Maximum global API Content Delivery Network (CDN) call rate: unlimited for cached responses

#### API Concurrent Rate Limits

We also rate limit concurrent API requests for each dataset:

- Maximum concurrent queries to API: 500
- Maximum concurrent mutations to API: 100

The API CDN itself isn't rate limited, but misses (uncached requests) will be subject to these concurrency limits.

## HTTP Requests

- Maximum combined request headers size: 15 KB
- Maximum request body size: 100 MB
- Maximum mutation request body size: 4 MB

> \[!TIP]
> Pro tip
> This implies that if your request exceeds 15KB in headers you probably want to switch from GET to POST and put the payload in body. See [Queries - The POST form](https://www.sanity.io/docs/http-query#the-post-form-J0Wj7Tip).

## API CDN HTTP Requests

The following limits apply to `/data` endpoints (not asset endpoints):

- Maximum POST size: 307,200 bytes

## Assets

The following limits apply to assets:

- Maximum image size: 256 megapixels

- Maximum output dimensions (from transforms): 8,192 pixels

- Supported image upload formats:- `png`

- `jpg`

- `jpeg`

- `bmp`

- `gif`

- `tiff`

- `svg`

- `psd`

- `webp`

- `heif`

- Maximum upload duration:- Dataset assets: 5 minutes

- Media library assets: 1 hour

### Animated Images with Transforms

Maximum size of animated images with transforms: 256 megapixels

- Calculated as: Width × Height × Frame Count = Total Pixels
- Divide total pixels by 1,000,000 to get megapixels

This limit applies to on-demand transforms for supported animated image formats.

## Users

- Maximum number of users per project: 1,000

[Please get in touch](https://sanity.io/contact) if you need more than 1,000 users on a single project.

## Content releases

- Maximum number of document versions in a release: 1,000
- Maximum total size of JSON documents in a release: 100 MB
- The total size of JSON documents in a release refers to the sum of the size of each JSON document in bytes.
- Releases batch in sets of 10 MB. Documents may not publish at the exact same moment if they exist in different 10 MB blocks.
