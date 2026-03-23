Upgrades the database version of an ApsaraDB for MongoDB instance.

## Operation description

The instance must be in the running state when you call this operation.

**Note**

-   The available database versions depend on the storage engine used by the instance. For more information, see [Upgrades of MongoDB major versions](/help/en/mongodb/product-overview/upgrades-of-mongodb-major-versions). You can also call the [DescribeAvailableEngineVersion](/help/en/mongodb/api-describeavailableengineversion) operation to query the available database versions.
    
-   You cannot downgrade the MongoDB version of an instance after you upgrade it.
    
-   The instance is automatically restarted for two to three times during the upgrade process. Make sure that you upgrade the instance during off-peak hours.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/UpgradeDBInstanceEngineVersion)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/UpgradeDBInstanceEngineVersion)

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

dds:UpgradeDBInstanceEngineVersion

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The ID of the instance.

dds-bpxxxxxxxx

EngineVersion

string

Yes

The database version to which you want to upgrade. Valid values: **3.4**, **4.0**, and **4.2**.

**Note**

This database version must be later than the current database version of the instance.

**Valid values:**

-   4.0 :
    
    4.0
    
-   5.0 :
    
    5.0
    
-   4.2 :
    
    4.2
    
-   6.0 :
    
    6.0
    
-   7.0 :
    
    7.0
    
-   4.4 :
    
    4.4
    
-   8.0 :
    
    8.0
    

4.0

SwitchMode

integer

No

The time when to perform the upgrade. Valid values:

-   **0**: immediately performs the upgrade.
    
-   **1**: performs the upgrade during the maintenance window.
    

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

C4907B00-A208-4E0C-A636-AA85140E406C

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C4907B00-A208-4E0C-A636-AA85140E406C"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EngineVersion.ERROR

Target engineVersion must be greater than the current one.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/UpgradeDBInstanceEngineVersion#workbench-doc-change-demo) for a complete list.
