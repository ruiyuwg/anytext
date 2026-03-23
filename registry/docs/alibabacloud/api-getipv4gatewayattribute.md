Queries an IPv4 gateway.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/GetIpv4GatewayAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/GetIpv4GatewayAttribute)

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

vpc:GetIpv4GatewayAttribute

get

\*Ipv4Gateway

`acs:vpc:{#regionId}:{#accountId}:ipv4gateway/{#Ipv4GatewayId}`

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

The region ID of the IPv4 gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

ap-southeast-6

Ipv4GatewayId

string

Yes

The ID of the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The details of the IPv4 gateway.

VpcId

string

The ID of the VPC with which the IPv4 gateway is associated.

vpc-5tsrxlw7dv074gci4\*\*\*\*

Status

string

The status of the IPv4 gateway. Valid values:

-   **Creating**
-   **Created**
-   **Modifying**
-   **Deleting**
-   **Deleted**
-   **Activating**

Created

Ipv4GatewayId

string

The ID of the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

RequestId

string

The request ID.

7F79A919-6FE9-50C4-967B-45705E1F9C38

Ipv4GatewayDescription

string

The description of the IPv4 gateway.

new

Enabled

boolean

Indicates whether the IPv4 gateway is activated. Valid values:

-   **true**
-   **false**

true

Ipv4GatewayRouteTableId

string

The ID of the route table associated with the IPv4 gateway.

vtb-5ts0ohchwkp3dydt2\*\*\*\*

Ipv4GatewayName

string

The name of the IPv4 gateway.

name

CreateTime

string

The time when the IPv4 gateway was created.

2022-02-24T09:02:36Z

ResourceGroupId

string

The ID of the resource group to which the IPv4 gateway belongs.

rg-bp67acfmxazb4ph\*\*\*\*

Tags

array<object>

The tag list.

Tag

object

Key

string

The key of tag N added to the resource.

FinanceDept

Value

string

The value of tag N added to the resource.

FinanceJoshua

## Examples

Sample success responses

`JSON`format

```
{
  "VpcId": "vpc-5tsrxlw7dv074gci4****",
  "Status": "Created",
  "Ipv4GatewayId": "ipv4gw-5tsnc6s4ogsedtp3k****",
  "RequestId": "7F79A919-6FE9-50C4-967B-45705E1F9C38",
  "Ipv4GatewayDescription": "new",
  "Enabled": true,
  "Ipv4GatewayRouteTableId": "vtb-5ts0ohchwkp3dydt2****",
  "Ipv4GatewayName": "name",
  "CreateTime": "2022-02-24T09:02:36Z",
  "ResourceGroupId": "rg-bp67acfmxazb4ph****",
  "Tags": [
    {
      "Key": "FinanceDept",
      "Value": "FinanceJoshua"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotFound.Ipv4Gateway

The specified resource ipv4Gateway is not found.

The IPv4 gateway is not found and cannot be deleted.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/GetIpv4GatewayAttribute?updateTime=2025-02-08#workbench-doc-change-demo)
