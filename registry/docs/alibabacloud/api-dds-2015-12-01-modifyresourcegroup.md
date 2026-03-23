Moves an ApsaraDB for MongoDB instance to a specified resource group.

## Operation description

Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management)

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyResourceGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyResourceGroup)

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

dds:ModifyResourceGroup

update

\*dbinstance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the region ID.

cn-hangzhou

DBInstanceId

string

Yes

The ID of the instance.

dds-bp1366caac83\*\*\*\*

ResourceGroupId

string

Yes

The ID of the resource group. For more information, see [View basic information of a resource group](/help/en/resource-management/resource-group/user-guide/view-basic-information-of-a-resource-group).

rg-acfmyiu4ekp\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

5DD0DEC3-24A1-5268-8E0B-5B264CA1\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5DD0DEC3-24A1-5268-8E0B-5B264CA1****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ResourceGroupId.InValid

The Specified ResourceGroupId is not valid.

The specified ResourceGroupId is invalid.

404

InvalidDbInstanceId.NotFound

Specified instance does not exist.

404

InvalidStatus.NotFound

Instance status is invalid.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyResourceGroup#workbench-doc-change-demo) for a complete list.
