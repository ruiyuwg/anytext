Queries the resource groups within the management account or a member in a resource directory.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListMultiAccountResourceGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListMultiAccountResourceGroups)

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

MaxResults

integer

No

The number of entries to return on each page.

Maximum value: 100. Default value: 10.

20

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

AAAAAS2Nboi3t4xGrdlG5/Ks/Q1xPG9jzviYEuZydevXIkgF

AccountId

string

Yes

The ID of the management account or a member in the resource directory.

1394339739\*\*\*\*

ResourceGroupIds

array

No

The resource group IDs.

string

No

The resource group ID.

rg-acfmzawhxxc\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75

RequestId

string

The request ID.

0FF0A66E-781F-51EE-9531-928F197558F2

ResourceGroups

array<object>

The resource groups.

object

The resource group.

AccountId

string

The ID of the management account or a member in the resource directory.

1394339739\*\*\*\*

CreateDate

string

The time when the resource group was created.

2021-06-30T09:20:08Z

DisplayName

string

The display name of the resource group.

group1

Id

string

The resource group ID.

rg-acfmzawhxxc\*\*\*\*

Name

string

The unique identifier of the resource group.

my-project

Status

string

The status of the resource group.

-   Creating: The resource group is being created.
    
-   OK: The resource group is created.
    
-   PendingDelete: The resource group is pending deletion.
    

OK

## Examples

Success response

`JSON` format

```
{
  "NextToken": "AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75",
  "RequestId": "0FF0A66E-781F-51EE-9531-928F197558F2",
  "ResourceGroups": [
    {
      "AccountId": "1394339739****",
      "CreateDate": "2021-06-30T09:20:08Z",
      "DisplayName": "group1",
      "Id": "rg-acfmzawhxxc****",
      "Name": "my-project",
      "Status": "OK"
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

MultiAccountServiceNotEnabled

Multi account ResourceCenter service is not enabled.

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

The operator is not permitted for this account scope.

403

ServiceNotEnabled.SpecifiedAccount

ResourceCenter service of the specified account is not enabled.

The Resource Center service is not activated for the specified account.

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

404

NotExists.ResourceGroup

The specified ResourceGroup does not exist.

The specified resource group does not exist.

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

409

InvalidParameter.AccountId

The specified parameter AccountId is not valid.

409

InvalidParameter.ResourceGroupId

The specified parameter ResourceGroupId is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ListMultiAccountResourceGroups#workbench-doc-change-demo) for a complete list.
