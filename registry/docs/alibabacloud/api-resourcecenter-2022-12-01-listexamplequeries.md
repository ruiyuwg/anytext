Queries all sample query templates.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListExampleQueries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListExampleQueries)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

MaxResults

string

No

The maximum number of entries per page.

Valid values: 1 to 50.

Default value: 50.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

ExampleQueries

array<object>

The information about the sample query templates.

object

Description

string

The description of the template.

返回所有有权限的资源，并按照资源类型和资源ID排列。

Name

string

The name of the template.

列出所有阿里云资源

QueryId

string

The ID of the template.

sq-0PfKy\*\*\*\*

MaxResults

string

The maximum number of entries per page.

10

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

RequestId

string

The request ID.

D696E6EF-3A6D-5770-801E-4982081FE4D0

## Examples

Success response

`JSON` format

```
{
  "ExampleQueries": [
    {
      "Description": "返回所有有权限的资源，并按照资源类型和资源ID排列。",
      "Name": "列出所有阿里云资源",
      "QueryId": "sq-0PfKy****"
    }
  ],
  "MaxResults": "10",
  "NextToken": "eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****",
  "RequestId": "D696E6EF-3A6D-5770-801E-4982081FE4D0"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ListExampleQueries#workbench-doc-change-demo) for a complete list.
