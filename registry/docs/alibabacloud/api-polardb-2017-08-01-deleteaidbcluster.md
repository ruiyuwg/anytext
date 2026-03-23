Deletes an AI cluster instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteAIDBCluster)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteAIDBCluster)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The ID of the AI cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

RequestId

string

The ID of the request.

3F9E6A3B-C13E-4064-A010-18582A\*\*\*\*\*\*

DBClusterId

string

The ID of the AI cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3F9E6A3B-C13E-4064-A010-18582A******",
  "DBClusterId": "pc-*****************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DeleteAIDBCluster#workbench-doc-change-demo) for a complete list.
