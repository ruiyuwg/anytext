Disassociates a network access control list (ACL) from a vSwitch.

## Operation description

## [](#description)[](#)Description

-   **UnassociateNetworkAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeNetworkAclAttributes](/help/en/vpc/api-describenetworkaclattributes) operation to query the status of the task.
    
    -   If the network ACL is in the **UNBINDING** state, the network ACL is being disassociated from the vSwitch.
    -   If the network ACL is in the **UNBINDED** state, the network ACL is disassociated from the vSwitch.
-   You cannot repeatedly call the **UnassociateNetworkAcl** operation to disassociate a network ACL from a vSwitch within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateNetworkAcl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateNetworkAcl)

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

vpc:UnassociateNetworkAcl

update

\*NetworkAcl

`acs:vpc:{#regionId}:{#accountId}:networkacl/{#NetworkAclId}`

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#VSwitchId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Resource

array<object>

No

The information about the associated resource.

object

No

ResourceType

string

Yes

The type of the resource from which you want to disassociate the network ACL. Set the value to **VSwitch**.

Valid values of **N**: 0 to 29. You can disassociate a network ACL from at most 30 resources at a time.

VSwitch

ResourceId

string

Yes

The ID of the resource from which you want to disassociate the network ACL.

vsw-bp1de348lntdw\*\*\*\*

NetworkAclId

string

Yes

The ID of the network ACL that you want to disassociate from a resource.

nacl-a2do9e413e0sp\*\*\*\*

RegionId

string

Yes

The region ID of the network ACL.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

**true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

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

AD024BAA-2D91-48FD-810B-8FB7489B6EE6

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AD024BAA-2D91-48FD-810B-8FB7489B6EE6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ParameterMissing.AliUid

ParameterMissing.AliUid

\-

400

ParameterMissing.Bid

ParameterMissing.Bid

\-

400

ParameterMissing.RegionId

ParameterMissing.RegionId

\-

400

ParameterEmpty.RegionId

ParameterEmpty.RegionId

\-

400

ParameterMissing.NetworkAclId

ParameterMissing.NetworkAclId

\-

400

ParameterEmpty.NetworkAclId

ParameterEmpty.NetworkAclId

\-

400

ParameterMissing.Resources

ParameterMissing.Resources

\-

400

ParameterEmpty.Resources

ParameterEmpty.Resources

\-

400

InvalidNetworkAcl.NotFound

The special Network Acl is not found.

The network ACL is not found.

400

NetworkStatus.Modifying

The special Network Acl is in modifying.

The network ACL is being modified.

400

ResourceStatus.Error

The binding instance is in middle status.

The status of the instance is invalid.

400

InvalidResource.NotFound

The binding instance is not found.

\-

400

InvalidResource.VpcError

The network acl and resource not in same vpc.

\-

400

InvalidResource.NotBinding

The resource has not been binded.

\-

400

NotSupport.NetworkAcl

Network acl is not support now.

\-

400

Mismatch.NetworkAclAndVSwitch

The specified network ACL and vSwitch are not matched.

The error message returned because the specified network ACL is not associated with the vSwitch.

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateNetworkAcl?updateTime=2025-12-08#workbench-doc-change-demo)

2024-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateNetworkAcl?updateTime=2024-12-13#workbench-doc-change-demo)

2024-11-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateNetworkAcl?updateTime=2024-11-14#workbench-doc-change-demo)

2023-11-24

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateNetworkAcl?updateTime=2023-11-24#workbench-doc-change-demo)
