Updates a filter.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/UpdateFilter)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/UpdateFilter)

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

resourcecenter:UpdateFilter

update

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

FilterName

string

Yes

The name of the filter.

我的筛选条件。

FilterConfiguration

string

Yes

The configurations of the filter.

{ "regions": \[\], "tagFilters": \[ \[{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }\], \[{ "tagKey": "xxx", "tagValue": "xxx" }\] \], "resourceTypes": \[ "ACS::ECS::AutoSnapshotPolicy" \] }

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

3C5CDBF6-4DB7-53E9-ADDC-5919E3FACF6F

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3C5CDBF6-4DB7-53E9-ADDC-5919E3FACF6F"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

409

InvalidParameter.FilterConfiguration

The specified parameter FilterConfiguration is not valid.

The FilterConfiguration parameter is invalid.

409

InvalidParameter.FilterName

The specified parameter FilterName is not valid.

The FilterName parameter is invalid.

409

LengthExceedLimit.FilterConfiguration

The length of parameter FilterConfiguration exceed limit.

The length of the value specified for the FilterConfiguration parameter exceeds the upper limit.

409

LengthExceedLimit.FilterName

The length of parameter FilterName exceed limit.

The length of the value specified for the FilterName parameter exceeds the upper limit.

409

NotExists.FilterName

The filter name of current user not exists.

The object indicated by the FilterName parameter does not exist.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/UpdateFilter#workbench-doc-change-demo) for a complete list.
