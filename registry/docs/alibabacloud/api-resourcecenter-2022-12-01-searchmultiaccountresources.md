Searches for resources in the management account and multiple member accounts of a resource directory.

## Operation description

-   You can search only for [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).
    
-   To search for resources across accounts as a RAM user or RAM role, you must have been attached the `resourcecenter:SearchMultiAccountResources` policy. For more information, see [Grant a RAM user the permissions to use Resource Center](/help/en/resource-management/resource-center/user-guide/permissions-for-a-ram-user-to-access-resource-center).
    
-   By default, this operation returns a maximum of 20 entries. To change the maximum number of entries that can be returned, specify the `MaxResults` parameter.
    
-   If the response does not include `NextToken`, no more data is available. To query the next page of results, set the `NextToken` parameter to the value that was returned from the previous call. If you do not specify the `NextToken` parameter, the first page of data is returned by default.
    
-   You can set one or more filter conditions to narrow the search scope. For information about supported filter parameters and matching methods, see the information below. Multiple filter conditions are joined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a single filter condition are joined by a logical `OR`. Resources that meet any value for a filter condition are returned.
    
-   For more query examples, visit [OpenAPI Portal](https://api.alibabacloud.com/api-tools/demo/ResourceCenter).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/SearchMultiAccountResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/SearchMultiAccountResources)

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

resourcecenter:SearchMultiAccountResources

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

Scope

string

Yes

The scope of the accounts in which you want to search for resources. Valid values:

-   The ID of a resource directory: Searches for resources in the management account and all its member accounts. For more information, see [GetResourceDirectory](/help/en/resource-management/api-getresourcedirectory).
    
-   The ID of the Root folder: Searches for resources in all member accounts under the Root folder and its subfolders. For more information, see [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent).
    
-   The ID of a folder: Searches for resources in all member accounts under the folder. For more information, see [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent).
    
-   The ID of a member account: Searches for resources in the member account. For more information, see [ListAccounts](/help/en/resource-management/api-listaccounts).
    

rd-r4\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page.

Valid values: 1 to 100.

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

The key of the filter condition. For more information, see the "`Supported filter parameters`" section below.

ResourceGroupId

MatchType

string

No

The matching method.

Set this parameter to `Equals`, which means an exact match.

Equals

Value

array

No

The values of the filter condition.

string

No

The value of the filter condition.

rg-aekzmrjn4ns\*\*\*\*

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

The token to retrieve the next page of results.

查询返回结果下一页的令牌。

RequestId

string

The request ID.

EFA806B9-7F36-55AB-8B7A-D680C2C5EE57

Resources

array<object>

The information about the resources.

array<object>

The information about the resource.

AccountId

string

The ID of the management account or a member account of the resource directory.

151266687691\*\*\*\*

CreateTime

string

The time when the resource was created.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.

2021-06-30T09:20:08Z

ExpireTime

string

The time when the resource expires.

2023-06-14T14:35:45Z

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

-   **Public**: Internet.
    
-   **Private**: Private network.
    

Public

Version

string

The IP address version.

Ipv4

IpAddresses

array

The IP addresses.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.

string

The IP address.

**Note**

Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.

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

Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.

cn-hangzhou-k

Scope

string

The scope of accounts in which the resources were searched. Valid values:

-   The ID of the resource directory. This indicates that resources were searched in the management account and all member accounts of the resource directory.
    
-   The ID of the Root folder. This indicates that resources were searched in all member accounts under the Root folder and its subfolders.
    
-   The ID of a folder. This indicates that resources were searched in all member accounts under the folder.
    
-   The ID of a member account. This indicates that resources were searched in the member account.
    

rd-r4\*\*\*\*

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
  "NextToken": "查询返回结果下一页的令牌。",
  "RequestId": "EFA806B9-7F36-55AB-8B7A-D680C2C5EE57",
  "Resources": [
    {
      "AccountId": "151266687691****",
      "CreateTime": "2021-06-30T09:20:08Z",
      "ExpireTime": "2023-06-14T14:35:45Z",
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
      "ResourceGroupId": "rg-acfmzawhxxc****\t\n",
      "ResourceId": "vtb-bp11lbh452fr8940s****",
      "ResourceName": "group1",
      "ResourceType": "ACS::VPC::RouteTable",
      "Tags": [
        {
          "Key": "test_key",
          "Value": "test_value"
        }
      ],
      "ZoneId": "cn-hangzhou-k"
    }
  ],
  "Scope": "rd-r4****\n"
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

MultiAccountServiceNotEnabled

Multi account ResourceCenter service is not enabled.

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

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

The operator is not permitted for this account scope.

404

NotExists.Resource

The specified resource does not exist.

The specified resource does not exist.

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

404

NotExists.ResourceDirectory.FolderId

The specified folder does not exist.

The specified folder does not exist.

409

InvalidParameter.Scope

The Scope is invalid.

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

409

InvalidParameter.SortCriterion.Key

The specified parameter SortCriterion.Key is not valid.

409

ExceedLimit.Filter

The maximum length of Filters is exceeded.

The number of objects specified in the Filter parameter exceeds the upper limit.

409

ServiceNotEnabled.SpecifiedAccount

ResourceCenter service of the specified account is not enabled.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/SearchMultiAccountResources#workbench-doc-change-demo) for a complete list.
