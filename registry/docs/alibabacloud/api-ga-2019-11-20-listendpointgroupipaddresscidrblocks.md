Queries the public CIDR blocks to which the endpoint group IP addresses belong. The CIDR blocks can be used to configure ACLs in terminals.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ga/2019-11-20/ListEndpointGroupIpAddressCidrBlocks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ga/2019-11-20/ListEndpointGroupIpAddressCidrBlocks)

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

ga:ListEndpointGroupIpAddressCidrBlocks

get

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

The region ID of the GA instance. Set the value to **cn-hangzhou**.

cn-hangzhou

EndpointGroupRegion

string

Yes

The region ID of the endpoint group.

cn-hangzhou

AcceleratorId

string

No

The ID of the GA instance.

ga-bp17frjjh0udz4q\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

EndpointGroupRegion

string

The region ID of the endpoint group.

cn-hangzhou

IpAddressCidrBlocks

array

The CIDR blocks.

cidrBlockList

string

The CIDR block.

10.x.x.x/24

ResourceGroupId

string

The ID of the resource group to which the endpoint group belongs.

rg-aekztkx4zwc\*\*\*\*

State

string

The status of the endpoint group.

active

RequestId

string

The request ID.

4B6DBBB0-2D01-4C6A-A384-4129266E6B78

## Examples

Sample success responses

`JSON`format

```
{
  "EndpointGroupRegion": "cn-hangzhou",
  "IpAddressCidrBlocks": [
    "10.x.x.x/24"
  ],
  "ResourceGroupId": "rg-aekztkx4zwc****",
  "State": "active",
  "RequestId": "4B6DBBB0-2D01-4C6A-A384-4129266E6B78"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-20

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ga/2019-11-20/ListEndpointGroupIpAddressCidrBlocks?updateTime=2024-07-20#workbench-doc-change-demo)
