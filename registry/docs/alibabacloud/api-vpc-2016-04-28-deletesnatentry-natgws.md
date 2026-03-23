Deletes an SNAT entry.

## Operation description

DeleteSnatEntry is an asynchronous operation. After you make a request, the ID of the request is returned but the specified SNAT entry is not deleted. The system deletes the SNAT entry in the background. You can call the [DescribeSnatTableEntries](/help/en/vpc/api-describesnattableentries) operation to query the status of SNAT entries.

-   If the SNAT entries are in the **Deleting** state, the system is deleting the SNAT entries. In this case, you can only query the status of the SNAT entries, and cannot perform other operations.
-   If no SNAT entry is returned in the response, the SNAT entry is deleted.

If some SNAT entries are in the **Pending** state, you cannot delete these SNAT entries.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteSnatEntry)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteSnatEntry)

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

vpc:DeleteSnatEntry

delete

\*SnatTable

`acs:vpc:{#regionId}:{#accountId}:snattable/{#SnatTableId}`

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

SnatTableId

string

Yes

The ID of the SNAT table to which the SNAT entry belongs.

stb-bp190wu8io1vgev80\*\*\*\*

SnatEntryId

string

Yes

The ID of the SNAT entry that you want to delete.

snat-bp1vcgcf8tm0plqcg\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.

5A2CFF0E-5718-45B5-9D4D-70B3FF3898

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

IncorretSnatEntryStatus

Some Snat entry status blocked this operation..

One or more SNAT entries in the SNAT table are in the Pending or Modifying state.

400

IncorretSnatEntryStatus

The Specified SnatEntry is not stable status, can not operation

\-

400

IncorrectStatus.SnatEntry

The Specified SnatEntry is not stable status, can not operation

The specified SNAT entries are not in a stable state and cannot be operated.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidSnatEntryId.NotFound

Specified Snat entry ID does not exist

The specified SNAT entry does not exist. Check whether the SNAT entry is valid.

404

InvalidSnatTableId.NotFound

Specified SNAT table does not exist.

The specified SNAT table does not exist.

404

InvalidSnatEntryId.NotFound

Specified SNAT entry does not exist.

The specified SNAT entry does not exist. Check whether the SNAT entry is valid.

404

ResourceNotFound.SnatEntry

Specified SNAT entry does not exist.

The specified SNAT entry does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteSnatEntry?updateTime=2025-11-04#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteSnatEntry?updateTime=2023-03-01#workbench-doc-change-demo)
