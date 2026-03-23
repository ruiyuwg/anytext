Retrieves a count of pending events for various task types.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePendingMaintenanceActions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePendingMaintenanceActions)

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

polardb:DescribePendingMaintenanceActions

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

RegionId

string

Yes

The region ID.

cn-hangzhou

IsHistory

integer

No

Specifies whether to return historical tasks. Valid values:

-   **0**: returns current tasks.
    
-   **1**: returns historical tasks.
    

Default value: **0**.

1

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

314127C2-B6C1-4F58-B1F6-E6B645\*\*\*\*\*\*

TypeList

array<object>

The details of pending events.

object

TaskType

string

The task type of the pending event. Valid values:

-   **DatabaseSoftwareUpgrading**: database software upgrade
    
-   **DatabaseHardwareMaintenance**: hardware maintenance and upgrade
    
-   **DatabaseStorageUpgrading**: database storage upgrade
    
-   **DatabaseProxyUpgrading**: proxy minor version upgrade
    

DatabaseSoftwareUpgrading

Count

integer

The number of pending events.

1

## Examples

Success response

`JSON` format

```
{
  "RequestId": "314127C2-B6C1-4F58-B1F6-E6B645******",
  "TypeList": [
    {
      "TaskType": "DatabaseSoftwareUpgrading",
      "Count": 1
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

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribePendingMaintenanceActions#workbench-doc-change-demo) for a complete list.
