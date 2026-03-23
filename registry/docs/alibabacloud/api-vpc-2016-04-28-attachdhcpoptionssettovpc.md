Associates a DHCP options set with a virtual private cloud (VPC).

## Operation description

-   The **AttachDhcpOptionsSetToVpc** operation is asynchronous. After you send the request, the system returns a request ID. However, the operation is still being performed in the system background. You can call the [DescribeVpcAttribute](/help/en/vpc/api-describevpcattribute) operation to query the status of a DHCP options set:
    
    -   If the DHCP options set is in the **Pending** state, the DHCP options set is being associated.
    -   If the DHCP options set is in the **InUse** state, the DHCP options set is associated.
-   You cannot repeatedly call the **AttachDhcpOptionsSetToVpc** operation to associate DHCP options sets with a VPC within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AttachDhcpOptionsSetToVpc)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AttachDhcpOptionsSetToVpc)

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

vpc:AttachDhcpOptionsSetToVpc

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

The ID of the DHCP options set.

dopt-o6w0df4epg9zo8isy\*\*\*\*

VpcId

string

Yes

The ID of the VPC to be associated with the DHCP options set.

vpc-sfdkfdjkdf\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to check the request without performing the operation. Valid values:

**true**: checks the request without performing the operation. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is authorized, and whether the required parameters are set. If the request fails to pass the check, the corresponding error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.

**false** (default): sends the request. If the request passes the check, a 2XX HTTP status code is returned and the operation is performed.

false

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

Forbidden.OperateShareResource

You cannot operate shared resources.

Shared resources do not support this operation.

400

InvalidDhcpOptionsSetId.NotFound

The specified dhcpOptionsSetId does not exist.

The DHCP options set does not exist. Check whether the parameter is set to a valid value.

400

IncorrectStatus.DhcpOptionsSet

The DhcpOptionsSet status does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation. You can perform the operation after the status of the DHCP options set is stable.

400

InvalidVpcId.NotFound

Specified value of VpcId is not found in our record.

The VPC does not exist. Check whether the specified VPC is valid.

400

IncorrectStatus.VpcDhcpOptionsSet

The dhcpOptionsSet status of VPC does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation.

400

OperationFailed.AttachmentExist

The current VPC is already attached to a DHCP options set.

The VPC is associated with a DHCP options set. You can associate a VPC with only one DHCP options set.

400

QuotaExceeded.AttachVpcNumber

The maximum number of VPCs that can be attached to a DHCP options set is exceeded.

The number of VPCs that can be associated with a DHCP options set reaches the upper limit.

400

TaskConflict

The operation is too frequent. Please wait a moment and try again.

The system is unavailable. Try again later.

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

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AttachDhcpOptionsSetToVpc?updateTime=2025-12-12#workbench-doc-change-demo)

2025-11-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AttachDhcpOptionsSetToVpc?updateTime=2025-11-03#workbench-doc-change-demo)
