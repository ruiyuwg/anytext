Queries the configurations of a resource within the current account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetResourceConfiguration)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetResourceConfiguration)

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

resourcecenter:GetResourceConfiguration

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

ResourceRegionId

string

Yes

The region ID of the resource.

cn-shanghai

ResourceType

string

Yes

The type of the resource.

For more information about the resource types supported by Resource Center, see [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

ACS::VPC::RouteTable

ResourceId

string

Yes

The ID of the resource.

eip-bp1kyg72m\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The ID of the request.

F1CE0D52-32DA-531A-87A4-B9A5B68D5D8E

ResourceType

string

The type of the resource.

ACS::VPC::VSwitch

CreateTime

string

The time when the resource was created.

2021-06-30T09:20:08Z

ExpireTime

string

The time when the resource expires.

2021-07-30T09:20:08Z

ResourceGroupId

string

The ID of the resource group to which the resource belongs.

rg-acfmv4k\*\*\*\*

ZoneId

string

The zone ID of the resource.

cn-hangzhou-k

AccountId

string

The ID of the Alibaba Cloud account to which the resource belongs.

151266687691\*\*\*\*

ResourceId

string

The ID of the resource.

vtb-uf6978gdqbi\*\*\*\*

ResourceName

string

The name of the resource.

group1

RegionId

string

The region ID of the resource.

cn-hangzhou

Tags

array<object>

The tags of the resource.

Tag

object

A tag.

Key

string

The tag key.

test-key

Value

string

The tag value.

test-value

IpAddresses

array

The IP addresses.

**Note** Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.

IpAddress

string

An IP address.

192.168.1.2

IpAddressAttributes

array<object>

The attributes of the IP address.

IpAddressAttribute

object

IpAddress

string

The IP address.

192.168.1.2

NetworkType

string

The network type. Valid values:

-   **Public**: the Internet
-   **Private**: internal network

Public

Version

string

The version.

Ipv4

Configuration

object

The configurations of the resource.

any

The configurations of the resource.

{\\"uid\\":\\"191432722631\*\*\*\*\\",\\"groupId\\":\\"MtxXXli4FfphQJyH9R3p00\*\*\*\*\\"}

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F1CE0D52-32DA-531A-87A4-B9A5B68D5D8E",
  "ResourceType": "ACS::VPC::VSwitch",
  "CreateTime": "2021-06-30T09:20:08Z",
  "ExpireTime": "2021-07-30T09:20:08Z",
  "ResourceGroupId": "rg-acfmv4k****",
  "ZoneId": "cn-hangzhou-k",
  "AccountId": "151266687691****",
  "ResourceId": "vtb-uf6978gdqbi****",
  "ResourceName": "group1",
  "RegionId": "cn-hangzhou",
  "Tags": [
    {
      "Key": "test-key",
      "Value": "test-value"
    }
  ],
  "IpAddresses": [
    "192.168.1.2"
  ],
  "IpAddressAttributes": [
    {
      "IpAddress": "192.168.1.2",
      "NetworkType": "Public",
      "Version": "Ipv4"
    }
  ],
  "Configuration": {
    "key": "{\\\"uid\\\":\\\"191432722631****\\\",\\\"groupId\\\":\\\"MtxXXli4FfphQJyH9R3p00****\\\"}"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform the operation.

403

NoPermission.Resource

The operator is not permitted for this resource.

You are not authorized to perform operations on the resource.

404

NotExists.Resource

The specified resource does not exist.

The specified resource does not exist.

409

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

The ResourceType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-21

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetResourceConfiguration?updateTime=2023-11-21#workbench-doc-change-demo)

2023-06-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetResourceConfiguration?updateTime=2023-06-02#workbench-doc-change-demo)
