Deletes a DNAT entry.

## Operation description

## [](#description)[](#)Description

-   **DeleteForwardEntry** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeForwardTableEntries](/help/en/vpc/api-describeforwardtableentries) operation to query the status of the task.
    
    -   If the DNAT entry is in the **Deleting** state, the system is deleting the DNAT entry. In this case, you can only query the status of the DNAT entry, but cannot perform other operations.
    -   If the DNAT entry cannot be found, it is deleted.

**Note** If a DNAT table has DNAT entries in the **Pending** state, you cannot delete the DNAT entries.

-   You cannot repeatedly call the **DeleteForwardEntry** operation to delete a DNAT entry within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteForwardEntry)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteForwardEntry)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

vpc:DeleteForwardEntry

delete

\*ForwardTable

`acs:vpc:{#regionId}:{#accountId}:forwardtable/{#ForwardTableId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the NAT gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ForwardTableId

string

Yes

The ID of the DNAT table to which the DNAT entry belongs.

ftb-8vbx8xu2lqj9qb334\*\*\*\*

ForwardEntryId

string

Yes

The ID of the DNAT entry to be deleted.

fwd-8vbn3bc8roygjp0gy\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorretForwardEntryStatus

Some Forward entry status blocked this operation..

The operation is not supported because one or more DNAT entries in the DNAT table are in the Pending or Modifying state.

400

IncorretForwardEntryStatus

The Specified forwardEntry is not stable status, can not operation

\-

400

IncorretForwardEntryStatus

The Specified forwardEntry is not exist

The specified DNAT entry does not exist.

400

MissingParameter

Missing mandatory parameter

Required parameters are not specified. Check whether you have specified all required parameters before you call this operation.

400

IncorrectStatus.NATGW

The status of the specified NAT gateway is abnormal.

The status of the specified NAT gateway is abnormal.

400

IncorrectStatus.ForwardEntry

The status of %s \[%s\] is incorrect.

The DNAT entry to be deleted is in an invalid state.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidForwardEntryId.NotFound

Specified forward entry ID does not exist

The specified DNAT entry does not exist.

404

InvalidForwardTableId.NotFound

Specified forward table does not exist.

The specified DNAT table does not exist. Check the parameter and try again.

404

ResourceNotFound.ForwardEntry

The specified resource of %s is not found.

The specified %s resource does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteForwardEntry?updateTime=2025-11-04#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteForwardEntry?updateTime=2023-03-01#workbench-doc-change-demo)
