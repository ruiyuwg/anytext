# Request logs data reference

This article describes the file format and data structure delivered by the [API request log feature](https://www.sanity.io/docs/platform-management/request-logs).

### File Format

Files are GZIPPED in NDJSON format.

### File Content

The logs will contain detailed HTTP event information, with each line representing an individual event.

> \[!TIP]
> Protip
> Filter out `studioRequest` from your cost analysis.
> Requests from Sanity Studio are not counted towards API or bandwidth usage and do not incur any cost, so it might be useful to remove them from any workflow that involves monitoring or prediction of your billable data consumption.

### Available data

##### Available data

| Field ID | Field name | Type | Description | Mapping |
| --- | --- | --- | --- | --- |
| insertId | Insert ID | String | Unique identifier for log entry. Used in deduplication processes. | body.insertId |
| traceId | Trace ID | String | Can appear for multiple log entries. Useful for Sanity Support. | traceId |
| spanId | Span ID | String | Can appear for multiple log entries. Useful for Sanity Support. | spanId |
| timestamp | Timestamp | String | Time of request in RFC3339 UTC format. | timestamp |
| projectId | Project ID | String | Sanity Project ID associated with the request. | attributes.sanity.projectId |
| datasetName | Dataset Name | String | Sanity Dataset associated with the request. Not all APIs require a dataset name. | attributes.sanity.dataset |
| domain  | Request Type | String | Type of request (API, APICDN, CDN). Useful for understanding API vs API CDN and asset usage. | attributes.sanity.domain |
| requestMethod | Request Method | String | HTTP Verb used (e.g., GET, POST). Useful for differentiating request types. | body.requestMethod |
| requestUrl | Full URL | String | Unaltered URL received by Sanity including query parameters. | body.requestUrl |
| groqQueryIdentifier | GROQ Query Identifier | String | Hashed version of the GROQ query string without parameters. Useful for grouping similar queries. | attributes.sanity.groqQueryIdentifier |
| apiVersion | API Version | String | API version used, formatted as v\[number] or v\[YYYY-MM-DD]. Not applicable to asset requests. | attributes.sanity.apiVersion |
| tags | Tags | String\[] | Array of tags supplied by the caller. Useful for grouping requests by business needs. See  | attributes.sanity.tags |
| referer | Referrer | String | Referrer URL of the request, as defined in HTTP/1.1 Header Field Definitions. | body.referer |
| userAgent | User Agent | String | User agent sent by the client, optional. Example format provided. | body.userAgent |
| remoteIp | Remote IP | String | IP address (IPv4 or IPv6) of the client that issued the HTTP request. Includes port information if available. | body.remoteIp |
| studioRequest | Is Studio Request | Boolean | Indicates if the request was sent from Sanity Studio. | attributes.sanity.studioRequest |
| returnStatus | Return Status | Integer | Response code indicating the status of the response (e.g., 200, 404). | body.responseStatus |
| requestSize | Request Size | String | Size of the HTTP request message in bytes, in int64 format. | body.requestSize |
| responseSize | Response Size | String | Size of the HTTP response message sent back to the client in bytes, in int64 format. Used for metering bandwidth | body.responseSize |
| duration | Response Time | Decimal | Number of millisecond between request and response within the service. Useful for performance analysis. Does not account for network latency. | body.duration |
| endpoint | Endpoint | String | The endpoint used in the request, e.g. graphql is used for GraphQL calls while query or mutate are GROQ calls. | attributes.sanity.endpoint |

### Example output

```json
{
	"timestamp": "2024-01-03T13:36:56.87202961Z",
	"traceId": "b48b918db42f0f0786702fa3ef7f6451"
	"spanId": "be245ae33db3cdaf"
	"severityText": "info", // info = <400, warn = <500, error = >500
	"severityNumber": 9, // info = 9, warn = 13, error = 17
	"body": {
    "duration": 32,
		"insertId": "asdf93n03nasdf",
		"method": "GET",
		"referer": "",
    "remoteIp": "34.79.228.45",
    "requestSize": "421",
    "responseSize": "936",
    "status": 200,
    "url": "https://0ekpuoxg.apicdn.sanity.io/v2022-09-01/data/query/cache-delay?query=%0A%2A%5B_id+%3D%3D+%22cache-delay%22%5D%5B0%5D%7B%0A++++%22timestampUnixMs%22%3A+dateTime%28_updatedAt%29+-+dateTime%28%221970-01-01T00%3A00%3A00Z%22%29%2C%0A++++%22counter%22%3A+counter%0A%7D%0A",
    "userAgent": "python-requests/2.21.0"
	},
	"resource": {
		"service": {
			"name": "Sanity.io",
		},
		"sanity": {
			"type": "http_request",
			"version": "0.0.1",
		},
	}
	"attributes": { // information extracted/parsed from the glb log
		"sanity": {
			"projectId": "exx11uqh",
		  "dataset": "webhook-test",
		  "domain": "api",
			"endpoint": "query",
			"groqQueryIdentifier": "somehash",
			"apiVersion": "2022-09-01",
			"tags": [],
			"studioRequest": false
		}
	}
}

```

## File delivery for projects on enterprise plans

We key the object using Hive partitioning with the following format:

```
gs://event-logs/project_id=[string]/kind=[event-type:string]/dt=[date:DATE]/[file-name:string].ndjson.gz
```

This allows data to be loaded into various platforms with the project ID, data type, and date used as partitioning properties.

# User Guides

#### The Sanity Applications

[Content operators quick start guide](https://www.sanity.io/docs/user-guides/content-operations-cheatsheet)

[Media Library quick start guide](https://www.sanity.io/docs/user-guides/media-library-user-cheatsheet)

[Dashboard](https://www.sanity.io/docs/dashboard/dashboard-introduction)

[Canvas](https://www.sanity.io/docs/canvas/canvas-user-guide)

#### Studio Fundamentals

[Tasks for Sanity Studio](https://www.sanity.io/docs/studio/tasks)

[Comments for Sanity Studio](https://www.sanity.io/docs/studio/comments)

[Content releases](https://www.sanity.io/docs/user-guides/content-releases)

[Compare document versions](https://www.sanity.io/docs/studio/compare-document-versions)

[Copy and paste fields](https://www.sanity.io/docs/user-guides/field-copy-and-paste)
