Creates a route entry in the route table of an Enterprise Edition transit router.

## Operation description

**CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a route entry ID. The route entry is created in the background. You can call the **ListTransitRouterRouteEntries** operation to query the status of the route entry.

-   If a route entry is in the **Creating** state, the route entry is being created. In this state, you can only query the route entry and cannot perform other operations.
    
-   If a route entry is in the **Active** state, the route entry has been created.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterRouteEntry)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterRouteEntry)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:CreateTransitRouterRouteEntry

create

\*TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#centransitrouterroutetableId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each API request may be different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

TransitRouterRouteEntryName

string

No

The name of the route entry.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

testname

TransitRouterRouteEntryDescription

string

No

The description of the route entry.

The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.

testdesc

TransitRouterRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

TransitRouterRouteEntryNextHopType

string

Yes

The next hop type. Valid values:

-   **BlackHole**: The route is a blackhole route. All packets to the destination CIDR block are dropped. You do not need to specify a next hop.
    
-   **Attachment**: The next hop of the route is a network instance connection. You must specify the ID of the network instance connection. All packets to the destination CIDR block are forwarded to the specified network instance connection.
    

BlackHole

TransitRouterRouteEntryDestinationCidrBlock

string

Yes

The destination CIDR block of the route entry. IPv4 and IPv6 CIDR blocks are supported.

192.168.0.0/24

TransitRouterRouteEntryNextHopId

string

No

The ID of the network instance connection that is associated with the next hop.

tr-attach-nls9fzkfat8934\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **false** (default): sends a normal request. The route entry is created after the request passes the check.
    
-   **true**: sends a dry run request to check the request. The route entry is not created. The system checks the required parameters, request format, and service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

TransitRouterRouteEntryId

string

The ID of the route entry.

rte-75eg4jprkvk0pw\*\*\*\*

RequestId

string

The request ID.

835E7F4B-B380-4E0F-96A5-6EA572388047

## Examples

Success response

`JSON` format

```
{
  "TransitRouterRouteEntryId": "rte-75eg4jprkvk0pw****",
  "RequestId": "835E7F4B-B380-4E0F-96A5-6EA572388047"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

InvalidTransitRouterRouteTableId.NotFound

TransitRouterRouteTableId is not found.

The error message returned because the specified route table ID of the transit router does not exist.

400

TransitRouterRouteEntryNextHopId.NotFound

TransitRouterRouteEntryNextHopId is not found.

The error message returned because the specified next hop ID of the transit router does not exist.

400

OperationFailed.CreateRouteEntryWithCCNAttachment

Operation failed because Create RouteEntry to CCN Attachment does not support.

The error message returned because routes that point to a CCN attachment are not supported.

400

QuotaExceeded.TransitRouterRoutEntry

TransitRouterRoutEntry quota exceeded.

The error message returned because the number of routes has reached the upper limit.

400

IllegalParam.TransitRouterDestinationCidrBlock

TransitRouterDestinationCidrBlock is illegal.

The error message returned because the specified destination CIDR block for the transit router (TransitRouterDestinationCidrBlock) is invalid.

400

InstanceExist.TransitRouterRouteEntry

The instance TransitRouterRouteEntry already exists.

The error message returned because the route entry that you want to add already exists.

400

IncorrectStatus.TransitRouterRouteTable

TransitRouterRouteTable status is invalid.

The error message returned because the transit router is in an invalid state.

400

ParamExclusive.RouteEntryIdAndRouteTableIdOrDestCidrBlock

RouteEntryId and TransitRouterRouteTableIdOrDestCidrBlock is mutually exclusive.

The error message returned because the RouteEntryId, TransitRouterRouteTableId, or DestCidrBlock parameter conflicts with each other.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

IllegalParam.NextHopType

The NextHopType is illegal.

The error message returned because the NextHopType parameter is set to an invalid value.

400

MissingParam.TransitRouterRouteEntryNextHopId

The parameter TransitRouterRouteEntryNextHopId is mandatory

The error message returned because the TransitRouterRouteEntryNextHopId parameter is not set.

400

InvalidTransitRouterRouteEntryNextHopId.NotFound

TransitRouterRouteEntryNextHopId is not found

The error message returned because the specified ID of the next hop (TransitRouterRouteEntryNextHopId) specified for the transit router route entry does not exist.

400

OperationFailed.CreateRouteEntryWithSameDestinationCidrBlock

Operation failed because Create RouteEntry with same destination cidrblock does not support.

The error message returned because the destination CIDR block of each route entry in the route table must be unique.

400

InvalidDestinationCidrBlock.NotFound

DestinationCidrBlock is not found.

The error message returned because the specified destination CIDR block does not exist.

400

OperationFailed.CreateRouteEntryWithConnectAttachment

Operation failed because Create RouteEntry to connect Attachment does not support.

You cannot create a route that points to a connect attachment.

400

ParamExclusive.NextHopTypeBlackHoleAndNextHopId

TransitRouterRouteEntryNextHopType(BlackHole) and TransitRouterRouteEntryNextHopId is mutually exclusive.

If you set Blackhole Route to Yes, do not specify a next hop.

400

InvalidTransitRouterMode.NeedUpgrade

TransitRouter need to upgrade.

The error message returned because the specified transit router mode is not supported.

400

OperationFailed.CreateTransitRouterRouteEntryWithVPCAttachment

The specified VPC Attachment has not enable IPv6.

The specified VPC Attachment has not enable IPv6.

400

OperationFailed.CreateTransitRouterRouteEntryWithVPNAttachment

Create RouteEntry to VPN Attachment does not support IPv6.

Create RouteEntry to VPN Attachment does not support IPv6.

400

NotSupport.AttachmentRoute

Not support such attachment route.

This attachment route is not supported.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouterRouteEntry#workbench-doc-change-demo) for a complete list.
