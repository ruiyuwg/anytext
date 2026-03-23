Searches for resources in your current account that you are permitted to access.

## Operation description

-   You can search only for resources in your current account that you are permitted to access.
    
-   You can search only for the [Alibaba Cloud services and resource types that are supported by Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).
    
-   By default, the SearchResources operation returns a maximum of 20 entries. You can specify the `MaxResults` parameter to change the maximum number of entries that are returned.
    
-   If the response does not include a `NextToken` value, no more results are available. To retrieve the next page of results, include the `NextToken` value from the previous response in your next request. If you do not specify the `NextToken` parameter, the first page of results is returned.
    
-   You can set one or more filter conditions to narrow the search scope. For information about the supported filter parameters and matching methods, see the following sections. Multiple filter conditions are combined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a filter condition are combined by a logical `OR`. Resources that meet any value of the filter condition are returned.
    
-   For more query examples, see [API Explorer](https://api.aliyun.com/api-tools/demo/ResourceCenter).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/SearchResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/SearchResources)

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

resourcecenter:SearchResources

list

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

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 500.

Default value: 20.

10

Filter

array<object>

No

The filter conditions.

object

No

The filter condition.

Key

string

No

The key of the filter condition. For more information about the valid values, see the "`Supported filter parameters`" section below.

RegionId

MatchType

string

No

The matching method. Valid values:

-   Equals: Exact match.
    
-   Prefix: Prefix match.
    
-   Contains: Contains a value.
    
-   NotContains: Does not contain a value.
    
-   Exists: The key exists.
    
-   NotExists: The key does not exist.
    

Equals

Value

array

No

The value of the filter condition.

string

No

The value of the filter condition.

过滤条件值。

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmzawhxxc\*\*\*\*

SortCriterion

object

No

The sorting parameters.

Key

string

No

The sort key.

Set this parameter to `CreateTime`, which means the results are sorted by resource creation time.

CreateTime

Order

string

No

The sort order. Valid values:

-   ASC: Ascending order.
    
-   DESC: Descending order.
    

Default value: ASC.

ASC

SearchExpression

string

No

The search keyword. Resource Center filters and sorts the search results based on relevance. If you do not specify a sorting parameter, resources that better match the keyword are displayed with higher priority.

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

IpAddress

The IP address.

Equals, Contains

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

The filter condition.

Key

string

The key of the filter condition.

RegionId

MatchType

string

The matching method.

Equals

Values

array

The values of the filter condition.

string

The value of the filter condition.

cn-hangzhou

MaxResults

integer

The maximum number of entries returned per page.

10

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

RequestId

string

The request ID.

D696E6EF-3A6D-5770-801E-4982081FE4D0

Resources

array<object>

The information about the resources.

array<object>

The information about the resource.

AccountId

string

The ID of the Alibaba Cloud account.

151266687691\*\*\*\*

CreateTime

string

The time when the resource was created.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service to which the resource belongs.

2021-06-30T09:20:08Z

ExpireTime

string

The time when the resource expires.

2021-07-30T09:20:08Z

IpAddressAttributes

array<object>

The attributes of the IP addresses.

object

The attributes of the IP address.

IpAddress

string

The IP address.

192.168.1.2

NetworkType

string

The network type. Valid values:

-   **Public**: Internet
    
-   **Private**: Private network
    

Public

Version

string

The IP address version.

Ipv4

IpAddresses

array

The IP addresses.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service to which the resource belongs.

string

The IP address.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service to which the resource belongs.

192.168.1.2

RegionId

string

The region ID.

cn-hangzhou

ResourceGroupId

string

The resource group ID.

rg-acfmzawhxxc\*\*\*\*

ResourceId

string

The resource ID.

vtb-bp11lbh452fr8940s\*\*\*\*

ResourceName

string

The resource name.

group1

ResourceType

string

The resource type.

ACS::VPC::RouteTable

Tags

array<object>

The tags.

object

The tag.

Key

string

The tag key.

test\_key

Value

string

The tag value.

test\_value

ZoneId

string

The zone ID.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service to which the resource belongs.

cn-hangzhou-k

Deleted

boolean

Indicates whether the resource is deleted. Valid values:

-   true
    
-   false
    

true

## Examples

Success response

`JSON` format

```
{
  "Filters": [
    {
      "Key": "RegionId",
      "MatchType": "Equals",
      "Values": [
        "cn-hangzhou"
      ]
    }
  ],
  "MaxResults": 10,
  "NextToken": "eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****\t\n",
  "RequestId": "D696E6EF-3A6D-5770-801E-4982081FE4D0",
  "Resources": [
    {
      "AccountId": "151266687691****",
      "CreateTime": "2021-06-30T09:20:08Z",
      "ExpireTime": "2021-07-30T09:20:08Z",
      "IpAddressAttributes": [
        {
          "IpAddress": "192.168.1.2",
          "NetworkType": "Public",
          "Version": "Ipv4"
        }
      ],
      "IpAddresses": [
        "192.168.1.2"
      ],
      "RegionId": "cn-hangzhou",
      "ResourceGroupId": "rg-acfmzawhxxc****",
      "ResourceId": "vtb-bp11lbh452fr8940s****",
      "ResourceName": "group1",
      "ResourceType": "ACS::VPC::RouteTable",
      "Tags": [
        {
          "Key": "test_key",
          "Value": "test_value"
        }
      ],
      "ZoneId": "cn-hangzhou-k",
      "Deleted": true
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

NoPermission

You are not authorized to perform this operation.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The MaxResults parameter is invalid.

400

InvalidParameter.Filter.ResourceType

The specified parameter value of Filter.ResourceType is not valid.

400

InvalidParameter.Filter.IpAddress

The specified parameter Filter.n.IpAddress is not valid.

The specified parameter Filter.n.IpAddress is not valid.

400

InvalidParameter.Filter.Tag

The specified parameter Filter.n.Tag is not valid.

The specified parameter Filter.n.Tag is not valid.

400

InvalidParameter.Filter.CreateTime

The specified parameter Filter.n.CreateTime is not valid.

The specified parameter Filter.n.CreateTime is not valid.

409

InvalidParameter.SortCriterion.Key

The specified parameter SortCriterion.Key is not valid.

409

ExceedLimit.Filter

The maximum length of Filters is exceeded.

The number of objects specified in the Filter parameter exceeds the upper limit.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/SearchResources#workbench-doc-change-demo) for a complete list.
