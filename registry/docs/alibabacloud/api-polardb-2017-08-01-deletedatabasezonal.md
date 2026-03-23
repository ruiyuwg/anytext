Deletes a database from a PolarDB edge cloud cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteDatabaseZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteDatabaseZonal)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
POST  HTTP/1.1
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

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBName

string

Yes

The name of the database.

testdb

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBName.Malformed

The specified parameter DBName is not valid.

The format of the specified database name is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DeleteDatabaseZonal#workbench-doc-change-demo) for a complete list.
