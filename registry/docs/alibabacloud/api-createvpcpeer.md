Creates a VPC peering connection

## Operation description

Before you create a VPC peering connection, take note of the following items:

-   **CreateVpcPeerConnection** is an asynchronous operation. The system returns an **instance ID** but the IPsec connection is not yet created and runs the task in the background. Call [GetVpcPeerConnectionAttribute](/help/en/vpc/api-createvpcpeer) to query the status of the task.
    
    -   If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.
        
    -   If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
        
    -   If the VPC peering connection is in the **Accepting** state, it is a cross-account connection. The connection needs to be accepted on the accepter side.
        
-   You cannot repeatedly call **CreateVpcPeerConnection** within the specified period of time.
    

When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for you.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/CreateVpcPeerConnection)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/CreateVpcPeerConnection)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

vpc:CreateVpcPeerConnection

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The ID of the region where you want to create a VPC peering connection.

Call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

VpcId

string

Yes

The ID of the requester VPC.

vpc-bp1gsk7h12ew7oegk\*\*\*\*

AcceptingAliUid

integer

Yes

The ID of the Alibaba Cloud account to which the accepter VPC belongs.

-   To create a VPC peering connection within your Alibaba Cloud account, enter the ID of your Alibaba Cloud account.
    
-   To create a VPC peering connection between your Alibaba Cloud account and another Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
    

**Note**

If the accepter is a RAM user, set **AcceptingAliUid** to the ID of the Alibaba Cloud account that created the RAM user.

1210123456123456

AcceptingRegionId

string

Yes

The region ID of the accepter VPC of the VPC peering connection that you want to create.

-   To create an intra-region VPC peering connection, enter a region ID that is the same as that of the requester VPC.
    
-   To create an inter-region VPC peering connection, enter a region ID that is different from that of the requester VPC.
    

cn-hangzhou

AcceptingVpcId

string

Yes

The ID of the accepter VPC.

vpc-bp1vzjkp2q1xgnind\*\*\*\*

Name

string

No

The name of the VPC peering connection.

The name must be 2 to 128 characters in length, and can contain digits, underscores (\_), and hyphens (-). It must start with a letter.

vpcpeer

Description

string

No

The description of the VPC peering connection.

The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.

description

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

For more information about resource groups, see [Resource groups](/help/en/resource-management/product-overview/what-is-resource-management).

rg-acfmxazb4ph6aiy\*\*\*\*

Bandwidth

integer

No

The bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be an integer greater than 0. Before you specify this parameter, make sure that you create an inter-region VPC peering connection.

100

LinkType

string

No

The link type of the VPC peering connection that you want to create. Valid values:

-   Platinum.
    
-   Gold: default value.
    

**Note**

-   If you need to specify this parameter, ensure that the VPC peering connection is an inter-region connection.
    

Gold

Tag

array<object>

No

The tags.

object

No

The tags.

Key

string

No

The tag key. You must specify at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The tag value. You must specify at least one tag value and can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceJoshua

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The request ID.

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

InstanceId

string

The ID of the instance on which the VPC peering connection is created.

pcc-lnk0m24khwvtkm\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "InstanceId": "pcc-lnk0m24khwvtkm****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.CdtNotOpened

The operation failed because the Cdt service is not opened.

The operation failed because CDT is not activated.

400

OperationFailed.CrossBorderCdtNotOpened

The operation failed because the CrossBorderCdt service is not opened.

400

IncorrectStatus.Vpc

The status of %s \[%s\] is incorrect.

The status of the initiator VPC instance is incorrect.

400

IncorrectStatus.AcceptingVpc

The status of %s \[%s\] is incorrect.

The receiving VPC status is incorrect.

400

ResourceAlreadyExist.RouterInterface

The specified resource of %s already exists.

The specified router interface already exists.

400

ResourceAlreadyExist.VpcPeer

The specified resource of %s already exists.

The specified VPC peering connection already exists.

400

OperationDenied.CloudBoxExistsInVpc

The operation is not allowed because the CloudBox device exists in vpc.

A cloud box instance exists in the initiator VPC, so it is not allowed to create a VpcPeer instance.

400

OperationDenied.CloudBoxExistsInAcceptingVpc

The operation is not allowed because the CloudBox device exists in accepting vpc.

Cloud box instances exist in the receiving end VPC, so VpcPeer instances are not allowed to be created.

400

QuotaExceeded.VpcPeerCountPerVpc

The quota of %s is exceeded, usage %s/%s.

The number of VPC peering connections to the VPC has reached the upper limit.

400

UnsupportedRegion

The feature of %s is not supported in the region of %s.

VPC peering connections are not supported in this region.

400

QuotaExceeded.VpcPeerCountPerUserPerRegion

The quota of %s is exceeded, usage %s/%s.

The number of VpcPeer instances in a region exceeds the threshold.

400

IncorrectBusinessStatus.VpcPeer

The business status of %s \[%s\] is incorrect.

The current instance status is abnormal and the current operation is not allowed.

400

OperationFailed.NotExist.ResourceGroup

The operation failed because the resource group does not exist.

The operation failed because the resource group does not exist.

400

OperationFailed.AcceptUserCdtNotOpened

The operation failed because the Cdt service of accept user is not opened.

The operation failed because CDT is not activated for the peer.

400

OperationFailed.AcceptUserCrossBorderCdtNotOpened

The operation failed because the CrossBorderCdt service of accept user is not opened.

The operation failed because the cross-border service of CDT is not activated for the peer.

400

IncorrectBusinessStatus.AcceptUserVpcPeer

The business status of %s \[%s\] is incorrect.

The peer VPC is in an invalid business state.

400

OperationFailed.ViolativeVpcPeer

The creation operation fails because it is not allowed to create a vpc peer instance between the originating region and the receiving region.

the creation operation fails because it is not allowed to create a vpc peer instance between the originating region and the receiving region.

400

QuotaExceeded.CrossRegionVpcPeerCountPerVpc

The quota of %s is exceeded, usage %s/%s.

The number of cross-region VpcPeer in the specified VPC exceeds the limit

400

QuotaExceeded.IntraRegionVpcPeerCountPerVpc

The quota of %s is exceeded, usage %s/%s.

The number of VpcPeer in the same region in the specified VPC exceeds the limit

400

OperationDenied.OperateShareResource

The operation is not allowed because of operating shared resource.

Operating on shared resources causes the operation to fail

400

IncorrectBusinessStatus.AcceptVpcPeer

The business status of peer account is incorrect.

The business status of the peer VpcPeer in an invalid state.

400

OperationFailed.InterRegionLinkTypeNotSupported

The same region not supported link type feature.

Link type characteristics are not supported in the same region.

400

OperationFailed.RegionIdNotSupportLinkType

The feature link type is not supported in the region.

The gold, silver and copper settings for this feature are not supported in the region.

400

OperationFailed.SpecificLinkTypeNotSupported

The operation failed because the special link type of user is not opened.

The account does not support special link types.

400

OperationFailed.CrossBusinessNotAllowed

Operation failed because receiver and accepter belong to different business site.

400

OperationFailed.ChargeTypeNotSupported

Operation failed because the CDT charge type of receiver or accepter does not support the Underlay link type.

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/CreateVpcPeerConnection#workbench-doc-change-demo) for a complete list.
