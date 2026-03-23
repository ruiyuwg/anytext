Stops backup vault replication.

## Operation description

You can call this method in the region of the destination backup vault.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteVaultReplication)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteVaultReplication)

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

ReplicationSourceVaultId

string

Yes

The ID of the source backup vault.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ReplicationTargetVaultId

string

Yes

The ID of the destination backup vault.

r-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ReplicationSourceRegionId

string

No

The ID of the source region. If you leave this parameter empty, the region where you call the API is used.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The request ID.

C438054F-9088-5D1B-AED0-0EA86D9C65F4

Success

boolean

Indicates whether the request is successful.

-   true: The request is successful.
    
-   false: The request fails.
    

true

Code

string

The return code. A value of 200 indicates that the request is successful.

200

Message

string

The message returned. If the request is successful, `successful` is returned. If the request fails, an error message is returned.

successful

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C438054F-9088-5D1B-AED0-0EA86D9C65F4",
  "Success": true,
  "Code": "200",
  "Message": "successful"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DeleteVaultReplication#workbench-doc-change-demo) for a complete list.
