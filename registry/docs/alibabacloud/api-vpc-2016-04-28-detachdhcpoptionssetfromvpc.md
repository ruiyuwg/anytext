Disassociates a DHCP options set from a VPC.

## Operation description

## [](#description)[](#)Description

-   **DetachDhcpOptionsSetFromVpc** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeVpcAttribute](/help/en/vpc/api-describevpcattribute) operation to query the status of the task.
    
    -   If the DHCP options set is in the **Pending** state, the DHCP options set is being disassociated.
    -   If the DHCP options set is in the **UnUsed** state, the DHCP options set is disassociated.
-   You cannot repeatedly call the **DetachDhcpOptionsSetFromVpc** operation to disassociate a DHCP options set from a VPC within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DetachDhcpOptionsSetFromVpc)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DetachDhcpOptionsSetFromVpc)

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

vpc:DetachDhcpOptionsSetFromVpc

update

\*DhcpOptionsSet

`acs:vpc:{#regionId}:{#accountId}:dhcpoptionsset/{#DhcpOptionsSetId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

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

The region to which the DHCP options set belongs. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DhcpOptionsSetId

string

Yes

The ID of the DHCP options set to be disassociated from a VPC.

dopt-o6w0df4epg9zo8isy\*\*\*\*

VpcId

string

Yes

The ID of the VPC.

vpc-dfdgrgthhy\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

**true**: performs only a dry run. The system checks your AccessKey pair, the Resource Access Management (RAM) user permissions, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

**false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

## Response parameters

Parameter

Type

Description

Example

object

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

InvalidDhcpOptionsSetId.NotFound

The specified resource dhcpOptionsSetId is not found.

\-

400

OperationFailed.AttachmentNotExist

The current VPC is not attahced to a DHCP options set.

The VPC is not associated with a DHCP options set.

400

IncorrectStatus.VpcDhcpOptionsSet

The dhcpOptionsSet status of VPC does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation.

400

AttrMismatching.VpcDhcpOptionsSetId

The dhcpOptionsSetId does not match the VPC.

The ID of the DHCP options set does not match the VPC. Check whether the specified DHCP options set is associated with the VPC.

400

TaskConflict

The operation is too frequent. Please wait a moment and try again.

The system is unavailable. Try again later.

400

InvalidVpcId.NotFound

Specified value of VpcId is not found in our record.

The VPC does not exist. Check whether the specified VPC is valid.

400

IncorrectStatus.DhcpOptionsSet

The DhcpOptionsSet status does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation. You can perform the operation after the status of the DHCP options set is stable.

400

OperationUnsupported.DhcpOptionsSet

The DHCP options set feature in this region is not supported.

The current region does not support the DHCP options sets feature.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DetachDhcpOptionsSetFromVpc?updateTime=2025-12-12#workbench-doc-change-demo)

2024-04-22

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DetachDhcpOptionsSetFromVpc?updateTime=2024-04-22#workbench-doc-change-demo)
