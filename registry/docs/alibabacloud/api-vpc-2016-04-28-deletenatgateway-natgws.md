Deletes a specified Internet NAT gateway.

## Operation description

## [](#description)[](#)Description

-   **DeleteNatGateway** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeNatGateways](/help/en/vpc/api-describenatgateways) to query the status of the task.
    
    -   If a NAT gateway is in the **Deleting** state, the NAT gateway is being deleted. In this case, you can query the NAT gateway but you cannot perform other operations.
        
    -   If the NAT gateway cannot be found, the NAT gateway is deleted.
        
        After you delete a NAT gateway, you cannot restore the NAT gateway. Proceed with caution.
        
-   You cannot repeatedly call the **DeleteNatGateway** operation to delete a NAT gateway within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteNatGateway)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteNatGateway)

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

vpc:DeleteNatGateway

delete

\*NatGateway

`acs:vpc:{#regionId}:{#accountId}:natgateway/{#natgatewayid}`

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

NatGatewayId

string

Yes

The ID of the NAT gateway that you want to delete.

ngw-bp1uewa15k4iy5770\*\*\*\*

Force

boolean

No

Specifies whether to forcefully delete the NAT gateway. Valid values:

-   **true** If you set the value to **true**:
    
    -   If the NAT gateway has SNAT entries, the system automatically deletes them.
    -   If the NAT gateway has DNAT entries, the system automatically deletes them.
    -   If the NAT gateway is associated with an elastic IP address (EIP), the system automatically disassociates the EIP from the NAT gateway.
    -   If the NAT gateway is associated with a NAT bandwidth plan, the system automatically disassociates the NAT bandwidth plan.
-   **false**(default): no If you set the value to **false**:
    
    -   If the NAT gateway is associated with a NAT bandwidth plan, disassociate the NAT bandwidth plan first.
    -   If the NAT gateway has SNAT entries, delete them first.
    -   If the NAT gateway has DNAT entries, delete them first.
    -   If the NAT gateway is associated with an EIP, disassociate the EIP from the NAT gateway first.

false

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

DependencyViolation.VpcEndpointService

The specified resource of %s depends on %s, so the operation cannot be completed.

You cannot perform the operation because the NAT gateway is associated with an endpoint service.

400

DependencyViolation.FullNatEntry

The specified resource of %s depends on %s, so the operation cannot be completed.

\-

400

DependencyViolation.RouterEntry

The specified resource of %s depends on %s, so the operation cannot be completed.

You cannot perform the operation because the NAT gateway is associated with a route entry.

400

DependencyViolation.BandwidthPackages

There are BandwidthPackages on specified NatGateway not deleted.

NAT service plans are associated with the NAT gateway. Disassociate the NAT service plans from the NAT gateway and try again.

400

DependencyViolation.EIPS

There are Eips on specified NatGateway, please unbind it first.

An EIP is associated with the NAT gateway. Disassociate the EIP from the NAT gateway first.

400

Forbidden.PrePaidNatGateway

The specified NatGateway is PrePaid.

\-

400

InvalidOperation.DeletionProtection

The instance cannnot delete because of deletion protecion.

\-

400

DependencyViolation.SnatEntry

The specified resource of %s depends on %s, so the operation cannot be completed.

The SnatEntry associated with NatIp or Ipv4Prefix cannot be deleted. Delete the dependent Snat and delete it again.

400

IncorrectStatus.SnatEntry

The status of %s \[%s\] is incorrect.

\-

400

DependencyViolation.ForwardEntry

The specified resource of %s depends on %s, so the operation cannot be completed.

\-

400

IncorrectStatus.ForwardEntry

The status of %s \[%s\] is incorrect.

The DNAT entry to be deleted is in an invalid state.

400

DependencyViolation.NatIp

The specified resource of %s depends on %s, so the operation cannot be completed.

You cannot perform the operation because the NAT gateway is associated with a NAT IP address.

400

IncorrectStatus.NatIp

The status of %s \[%s\] is incorrect.

The status of NatIp is incorrect.

400

DependencyViolation.NatIpCidr

The specified resource of %s depends on %s, so the operation cannot be completed.

You cannot perform the operation because the NAT gateway is associated with a NAT CIDR block.

404

INSTANCE\_NOT\_EXISTS

Instance not exists.

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidNatGatewayId.NotFound

The specified NatGatewayId does not exist in our records.

The value of the NatGatewayId parameter is invalid.

404

IncorrectStatus.NatGateway

%s

\-

404

ResourceNotFound.NatGateway

The specified resource of %s is not found.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteNatGateway?updateTime=2026-02-10#workbench-doc-change-demo)

2024-01-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteNatGateway?updateTime=2024-01-18#workbench-doc-change-demo)

2023-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteNatGateway?updateTime=2023-12-20#workbench-doc-change-demo)

2023-07-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteNatGateway?updateTime=2023-07-24#workbench-doc-change-demo)
