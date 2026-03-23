Generates a downloadable inventory of global resources.

## Operation description

This topic provides an example of how to generate a downloadable inventory of global resources for the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GenerateResourceInventory)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GenerateResourceInventory)

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

config:GenerateResourceInventory

none

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

Regions

string

No

The regions where the resources are located. Separate multiple regions with commas (,).

cn-shanghai

ResourceTypes

string

No

The resource types. Separate multiple resource types with commas (,).

ACS::ECS::Instance

ResourceDeleted

integer

No

The resource status. Valid values:

-   1 (default): The resource is retained.
    
-   0: The resource is deleted.
    

**Valid values:**

-   0 :
    
    Deleted
    
-   1 :
    
    Retained
    

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

E1225EEA-B5F8-538F-8E37-A943986B6290

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E1225EEA-B5F8-538F-8E37-A943986B6290"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ResourceInventoryExceedMaxLimit

Exceed max resource inventory item max limit 200000.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GenerateResourceInventory#workbench-doc-change-demo) for a complete list.
