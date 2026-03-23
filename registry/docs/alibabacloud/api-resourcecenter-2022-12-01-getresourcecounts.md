Queries the number of resources in your account that you have permission to access.

## Operation description

-   You can query the number of resources in your account that you have permission to access.
    
-   You can query only the [Alibaba Cloud services and resource types that are supported by Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetResourceCounts)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetResourceCounts)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

GroupByKey

string

No

The dimension by which the queried resources are grouped. Valid values:

-   ResourceType: The resource type.
    
-   RegionId: The region.
    
-   ResourceGroupId: The resource group ID.
    

ResourceType

Filter

array<object>

No

The filter conditions.

object

No

A filter condition.

Key

string

No

The key of the filter condition. For information about valid values, see the "`Supported filter parameters`" section below.

RegionId

MatchType

string

No

The matching method.

Set this parameter to `Equals`, which means an equal match.

Equals

Value

array

No

The values of the filter condition.

string

No

The value of the filter condition.

cn-shanghai

SearchExpression

string

No

The search keyword. Resource Center filters the search results based on relevance.

keywords

IncludeDeletedResources

boolean

No

Specifies whether to include deleted resources. Valid values:

-   true
    
-   false
    

true

### Supported filter parameters

**Parameter**

**Description**

**Supported matching methods**

ResourceType

The resource type.

Equals

RegionId

The region ID.

Equals

ResourceId

The resource ID.

Equals, Prefix

ResourceGroupId

The resource group ID.

Equals, Exists, NotExists

ResourceName

The resource name.

Equals, Contains

Tag

The key-value pair of a tag. The value must be a JSON string in the `{ "key": $key, "value": $value }` format. You must specify at least key or value. For example, if you want to query the tag key `foo` and tag value `bar`, set this parameter to `{ "key": "foo", "value": "bar" }`. If you want to query only the tag key `foo`, set this parameter to `{ "key": "foo" }`.

Contains, NotContains, NotExists

VpcId

The VPC ID.

Equals

VSwitchId

The vSwitch ID.

Equals

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

Filters

array<object>

The filter conditions.

object

A filter condition.

Key

string

The key of the filter condition.

RegionId

Values

array

The values of the filter condition.

string

The value of the filter condition.

cn-shanghai

GroupByKey

string

The dimension by which the queried resources are grouped.

ResourceType

RequestId

string

The request ID.

6D98D9B0-318D-56A4-910C-93B5F945AF2B

ResourceCounts

array<object>

The list of resource counts.

object

The resource count information.

Count

integer

The number of resources.

2

GroupName

string

The group name.

ACS::ECS::NetworkInterface

## Examples

Success response

`JSON` format

```
{
  "Filters": [
    {
      "Key": "RegionId",
      "Values": [
        "cn-shanghai"
      ]
    }
  ],
  "GroupByKey": "ResourceType",
  "RequestId": "6D98D9B0-318D-56A4-910C-93B5F945AF2B",
  "ResourceCounts": [
    {
      "Count": 2,
      "GroupName": "ACS::ECS::NetworkInterface"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.Filter.ResourceType

The specified parameter value of Filter.ResourceType is not valid.

400

InvalidParameter.Filter.CreateTime

The specified parameter Filter.n.CreateTime is not valid.

The specified parameter Filter.n.CreateTime is not valid.

400

InvalidParameter.Filter.IpAddress

The specified parameter Filter.n.IpAddress is not valid.

The specified parameter Filter.n.IpAddress is not valid.

400

InvalidParameter.Filter.Tag

The specified parameter Filter.n.Tag is not valid.

The specified parameter Filter.n.Tag is not valid.

409

ExceedLimit.FilterValue

The number of objects specified in the FilterValue parameter exceeds the upper limit.

The value of FilterValue exceeds the upper limit.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetResourceCounts#workbench-doc-change-demo) for a complete list.
