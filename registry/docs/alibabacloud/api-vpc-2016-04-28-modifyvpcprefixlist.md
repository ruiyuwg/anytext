Modifies the configuration of a prefix list.

## Operation description

-   **ModifyVpcPrefixList** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListPrefixLists](/help/en/vpc/api-listprefixlists) to query the status of the task.
    
    -   If the prefix list is in the **Modifying** state, the configuration of the prefix list is being modified.
    -   If the prefix list is in the **Created** state, the configuration of the prefix list is modified.
    -   After the configuration of the prefix list is modified, you can call the [GetVpcPrefixListAssociations](/help/en/vpc/api-getvpcprefixlistassociations) operation to query the information about the network instances that are associated with the prefix list and determine whether the associated network instances use the new CIDR blocks. If the association **status** of the prefix list is **Created**, the new CIDR blocks are used by the network instances that are associated with the prefix list.
-   You cannot repeatedly call **ModifyVpcPrefixList** to modify the configuration of a prefix list within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyVpcPrefixList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyVpcPrefixList)

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

vpc:ModifyVpcPrefixList

update

\*PrefixList

`acs:vpc:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PrefixListId

string

Yes

The ID of the prefix list.

pl-0b7hwu67\*\*\*\*

PrefixListName

string

No

The new name of the prefix list.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

newname

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to only precheck the request. Valid values:

-   **true**: checks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.

false

AddPrefixListEntry

array<object>

No

The information about CIDR blocks to be added to the prefix list.

object

No

Cidr

string

No

The CIDR block to be added to the prefix list.

**Note** If the CIDR block already exists in the prefix list, you can only modify the description of the CIDR block by setting the **AddPrefixListEntry.N.Description** parameter.

172.16.0.0/12

Description

string

No

The description of the CIDR block to be added to the prefix list.

The description must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

newcidr

RemovePrefixListEntry

array<object>

No

The information about CIDR blocks to be deleted to the prefix list.

object

No

Cidr

string

No

The CIDR block that you want to delete from the prefix list.

192.168.0.0/16

Description

string

No

The description of the CIDR block that you want to delete.

cidr

RegionId

string

Yes

The region ID of the prefix list.

cn-hangzhou

PrefixListDescription

string

No

The new description of the prefix list.

The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.

newdescription

MaxEntries

integer

No

The maximum number of CIDR blocks supported by the prefix list after the configuration of the prefix list is modified.

20

## Response parameters

Parameter

Type

Description

Example

object

PrefixListId

string

The ID of the prefix list.

pl-0b7hwu67\*\*\*\*

RequestId

string

The ID of the request.

54B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Sample success responses

`JSON`format

```
{
  "PrefixListId": "pl-0b7hwu67****",
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotFound.PrefixList

The specified resource of prefixList is not found.

The prefix list does not exist.

400

OperationFailed.CidrCountExceedMaxCount

The operation is failed because of cidrCountExceedMaxCount.

\-

400

OperationDenied.RemoveCountExceedExistCount

The operation is not allowed because of remove-count exceed exist-count.

\-

400

DuplicatedParam.CidrBlock

The param of cidrBlock is duplicated.

The error message returned because a duplicate CIDR block is specified.

400

IllegalParam.CidrBlock

The param of cidrBlock is illegal.

The error message returned because the value of the cidrBlock parameter is invalid.

400

IllegalParam.CidrName

The param of cidrName is illegal.

\-

400

OperationDenied.SystemPrefixList

This is not allowed to operate system prefixList.

\-

400

OperationFailed.OperateShareResource

This is not allowed to operate shared prefixList.

\-

400

IncorrectStatus.PrefixList

The status of prefixList is incorrect.

The prefix list is in an unstable state.

400

QuotaExceeded.PrefixListCidrCount

The quota of prefixList entry maxEntry count is exceeded.

The number of allowed routes exceeds the upper limit.

400

QuotaExceeded

Route entry quota exceeded in associated route table.

The maximum number of routes supported by the prefix list exceeds the maximum number of routes supported by the associated route table.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyVpcPrefixList?updateTime=2025-12-11#workbench-doc-change-demo)

2025-12-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyVpcPrefixList?updateTime=2025-12-01#workbench-doc-change-demo)

2023-08-30

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyVpcPrefixList?updateTime=2023-08-30#workbench-doc-change-demo)
