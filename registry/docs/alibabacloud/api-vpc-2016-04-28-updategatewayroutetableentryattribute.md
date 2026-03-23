Modifies the next hop type and next hop of the route entry in a gateway route table.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute)

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

vpc:UpdateGatewayRouteTableEntryAttribute

update

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

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

The ID of the region to which the gateway route table that you want to modify belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

ap-southeast-6

IPv4GatewayRouteTableId

string

No

The ID of the gateway route table that you want to modify.

vtb-5ts0ohchwkp3dydt2\*\*\*\*

GatewayRouteTableId

string

Yes

The ID of the gateway route table that you want to modify.

vtb-5ts0ohchwkp3dydt2\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to precheck only this request. Valid values:

-   **true**: prechecks the request without modifying the gateway route table. The system checks the required parameters, request format, and service limits. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
-   **false**: sends the request. This is the default value. If the request passes the precheck, a 2xx HTTP status code is returned and the gateway route table is modified.

false

DestinationCidrBlock

string

Yes

The destination CIDR block of the route entry in the gateway route table.

47.100.XX.XX/16

NextHopType

string

Yes

The new next hop type of the route. Valid values:

-   **Instance**: Elastic Compute Service (ECS) instance
-   **NetworkInterface**: elastic network interface (ENI)
-   **Local**: local next hop

EcsInstance

NextHopId

string

No

The new next hop ID of the route entry.

-   If you set **NextHopType** to **Instance**, specify an ECS instance ID for **NextHopId**.
-   If you set **NextHopType** to **NetworkInterface**, specify an ENI ID for **NextHopId**.
-   If you set **NextHopType** to **Local**, leave **NextHopId** empty. This indicates a local next hop.

**Note** If the value of NextHopType is **Instance** or **NetworkInterface**, and you want to modify the next hop, you must set **NextHopType** to **Local** first. Then, set **NextHopType** to **Instance** or **NetworkInterface** and specify **NextHopId** based on your requirements. If the next hop type of a route entry is Instance or NetworkInterface, you cannot directly specify a different ENI ID or ECS instance ID for the NextHopId parameter.

i-bp18xq9yguxoxe7m\*\*\*\*

Name

string

No

The name of the gateway route table.

The name must be 2 to 128 characters in length and can contain letter, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

test

Description

string

No

The description of the gateway route table.

The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.

new

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.UpdateGatewayRouteEntry

The operation is not allowed because of need switch to local first.

The system failed to modify the route. You must first set the next hop to a local route before you can set a custom next hop.

400

IllegalParam.DestCidrBlock

The destCidrBlock is invalid.

The specified destination address is invalid.

400

ResourceNotFound.NetworkInterface

The specified resource nextHop is not found.

The next hop instance does not exist.

400

ResourceNotFound.RouteEntry

The specified resource routeEntry is not found.

The specified route entry does not exist

400

IncorrectStatus.RouteEntry

The status of %s \[%s\] is incorrect.

Route entry is in non-steady state

400

IncorrectStatus.Vswitch

The status of %s \[%s\] is incorrect.

The status of the specified vSwitch is incorrect.

400

ResourceNotFound.Instance

The specified resource nextHop is not found.

The next hop instance does not exist.

400

IncorrectStatus.NextHop

The status of %s \[%s\] is incorrect.

Specified next hop resource

400

OperationDenied.NextHopTypeNonsupport

The operation is not allowed because of nextHopType is nonsupport.

Specifying the next hop of the resource type is not supported.

400

OperationDenied.LocalEntryCanOnlyModifyNextHop

Only the nextHop parameter can be modified for a local route entry.

You can modify only the next hop of a local route.

400

ExclusiveParam.NextHopTypeAndNextHopId

The param of nextHopType and nextHopId are mutually exclusive.

The next hop type does not match the next hop instance.

400

ResourceNotFound.RouteTable

The specified resource gatewayRouteTable is not found.

The gateway route table does not exist.

400

InvalidRouterInterfaceId.NotFound

The specified RouterInterfaceId does not exist in our record.

The specified router interface does not exist.

400

OperationUnsupported.OnlySupportNormalNetworkInterface

Next hop only supports binding normal network Interface.

Next hop only supports binding to common ENIs

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2025-02-28#workbench-doc-change-demo)

2025-02-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2025-02-20#workbench-doc-change-demo)

2025-02-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2025-02-19#workbench-doc-change-demo)

2024-12-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2024-09-03#workbench-doc-change-demo)

2023-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2023-12-19#workbench-doc-change-demo)

2023-12-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2023-12-08#workbench-doc-change-demo)

2023-08-07

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2023-08-07#workbench-doc-change-demo)

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2023-07-20#workbench-doc-change-demo)

2023-05-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateGatewayRouteTableEntryAttribute?updateTime=2023-05-05#workbench-doc-change-demo)
