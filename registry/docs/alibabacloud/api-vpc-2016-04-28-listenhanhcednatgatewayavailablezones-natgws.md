Queries the zones that support NAT gateways.

## Operation description

You can call this operation to query zones that support NAT gateways, including Internet NAT gateways and Virtual Private Cloud (VPC) NAT gateways.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListEnhanhcedNatGatewayAvailableZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListEnhanhcedNatGatewayAvailableZones)

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

vpc:ListEnhanhcedNatGatewayAvailableZones

list

\*All Resources

`*`

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

The ID of the region that you want to query.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

In this example, zones that support NAT gateways in the UAE (Dubai) region are queried.

me-east-1

AcceptLanguage

string

No

The language to display the results. Valid values:

-   **zh-CN** (default): Chinese
-   **en-US**: English

zh-CN

Filter

array<object>

No

The filter information. You can specify a filter key and a filter value.

object

No

Key

string

No

The filter key. Only **PrivateLinkEnabled** is supported.

PrivateLinkEnabled

Value

string

No

The value of the filter key.

**Note** If the filter key is set to **PrivateLinkEnabled**, you must specify a filter value. Valid values: **true** and **false**.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

8AE6F367-52EA-535D-9A3D-EF23D70527C8

Zones

array<object>

The list of zones.

Zone

object

ZoneId

string

The ID of the zone where the instance is deployed.

me-east-1a

LocalName

string

The name of the zone.

Dubai Zone A

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8AE6F367-52EA-535D-9A3D-EF23D70527C8",
  "Zones": [
    {
      "ZoneId": "me-east-1a",
      "LocalName": "Dubai Zone A"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListEnhanhcedNatGatewayAvailableZones?updateTime=2023-12-26#workbench-doc-change-demo)

2023-10-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListEnhanhcedNatGatewayAvailableZones?updateTime=2023-10-17#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListEnhanhcedNatGatewayAvailableZones?updateTime=2023-03-01#workbench-doc-change-demo)
