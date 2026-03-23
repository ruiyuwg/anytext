Configures backup vault replication.

## Operation description

Call this method in the region where the destination backup vault is located. Before you use this API, review the billing methods and pricing of Cloud Backup.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateVaultReplication)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateVaultReplication)

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

The ID of the source region. If you do not specify this parameter, the region where the API is called is used.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

280DD872-EE25-52E8-9CB4-491067173DD0

TaskId

string

The ID of the backup vault initialization task. Use DescribeTask to query the task status.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request is successful, `successful` is returned. If the request fails, an error message is returned.

successful

## Examples

Success response

`JSON` format

```
{
  "RequestId": "280DD872-EE25-52E8-9CB4-491067173DD0",
  "TaskId": "t-*********************",
  "Success": true,
  "Code": "200",
  "Message": "successful"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateVaultReplication#workbench-doc-change-demo) for a complete list.
