Queries the number of resources within the management account and multiple members of a resource directory.

## Operation description

You can query only resources supported by Resource Center. For more information, see [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountResourceCounts)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountResourceCounts)

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

resourcecenter:GetMultiAccountResourceCounts

get

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

GroupByKey

string

No

The dimension by which resources are queried. Valid values:

-   ResourceType: resource type
    
-   RegionId: region
    
-   ResourceGroupId: resource group
    

**Note**

If this parameter is not configured, the total number of resources that meet the conditions is returned.

ResourceType

Filter

array<object>

No

The filter condition.

object

No

The filter condition.

Key

string

No

The key of the filter condition. For more information, see `Supported filter parameters`.

RegionId

MatchType

string

No

The matching method.

Set the value to Equals, which indicates an exact match.

Equals

Value

array

No

The values of the filter condition.

string

No

The value of the filter condition.

cn-shanghai

Scope

string

No

The search scope. Valid values:

-   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
    
-   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
    
-   ID of a folder: Resources within all members in the folder are searched.
    
-   ID of a member: Resources within the member are searched.
    

For information about how to obtain the ID of a resource directory, the Root folder, a folder, or a member, see [GetResourceDirectory](/help/en/resource-management/api-getresourcedirectory), [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent), or [ListAccounts](/help/en/resource-management/api-listaccounts).

rd-r4\*\*\*\*

### Supported filter parameters

Parameter

Description

Supported matching method

ResourceType

The resource type.

Equals

RegionId

The region ID.

Equals

ResourceId

The resource ID.

Equals and Prefix

ResourceGroupId

The resource group ID.

Equals, Exists, and NotExists

ResourceName

The resource name.

Equals and Contains

Tag

The key-value pairs. The JSON format is `{ "key": $key, "value": $value }`, and at least one of the key and value must be specified. For example, specify `{ "key": "foo", "value": "bar" }` to query the tag key `foo` and the tag value `bar`, or specify `{ "key": "foo" }` to query the tag key `foo`.

Contains, NotContains, and NotExists

VpcId

The virtual private cloud (VPC) ID.

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

The filter condition.

object

The filter condition.

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

The dimension by which resources are queried.

ResourceType

RequestId

string

The request ID.

EFA806B9-7F36-55AB-8B7A-D680C2C5EE57

ResourceCounts

array<object>

The numbers of resources.

object

The number of resources.

Count

integer

The number of resources.

2

GroupName

string

The group name.

ACS::ECS::NetworkInterface

Scope

string

The search scope. Valid values:

-   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
    
-   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
    
-   ID of a folder: Resources within all members in the folder are searched.
    
-   ID of a member: Resources within the member are searched.
    

For information about how to obtain the ID of a resource directory, the Root folder, a folder, or a member, see [GetResourceDirectory](/help/en/resource-management/api-getresourcedirectory), [ListFoldersForParent](/help/en/resource-management/api-listfoldersforparent), or [ListAccounts](/help/en/resource-management/api-listaccounts).

rd-r4\*\*\*\*

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
  "RequestId": "EFA806B9-7F36-55AB-8B7A-D680C2C5EE57",
  "ResourceCounts": [
    {
      "Count": 2,
      "GroupName": "ACS::ECS::NetworkInterface"
    }
  ],
  "Scope": "rd-r4****"
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

MultiAccountServiceNotEnabled

Multi account ResourceCenter service is not enabled.

400

InvalidParameter.Filter.ResourceType

The specified parameter value of Filter.ResourceType is not valid.

400

MissingParameter.AccountScope

The specified parameter AccountScope is missing.

The specified parameter AccountScope is missing.

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

ServiceNotEnabled.SpecifiedAccount

ResourceCenter service of the specified account is not enabled.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetMultiAccountResourceCounts#workbench-doc-change-demo) for a complete list.
