Modifies the description of a cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterDescriptionZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterDescriptionZonal)

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

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterDescription

string

Yes

The cluster name. The cluster name must meet the following requirements:

-   It cannot start with `http://` or `https://`.
    
-   It must be 2 to 256 characters in length.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ClientToken

string

No

A client token to ensure the idempotence of the request. The client generates this value. It must be unique among different requests. The token is case-sensitive and can contain up to 64 ASCII characters.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

65D7ACE6-4A61-4B6E-B357-8CB24A\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "65D7ACE6-4A61-4B6E-B357-8CB24A******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBClusterDescription.Malformed

The specified parameter DBClusterDescription is not valid.

The specified DBClusterDescription parameter is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyDBClusterDescriptionZonal#workbench-doc-change-demo) for a complete list.
