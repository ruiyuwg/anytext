Generates a report for a pre-upgrade check.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/GenerateUpgradeReportForSyncClone)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/GenerateUpgradeReportForSyncClone)

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

polardb:GenerateUpgradeReportForSyncClone

create

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

DBType

string

No

The type of the database engine. Valid values:

-   **MySQL**
    
-   **Oracle**
    

PostgreSQL

DBName

string

No

The name of the database. You can specify only one database name.

**Note**

This parameter is supported only for PolarDB for PostgreSQL (Oracle Compatible) clusters.

testDB

RegionId

string

No

The region ID.

cn-hangzhou

SourceDBClusterId

string

Yes

The ID of the source instance.

pc-k2j96w169uhu868l8

DBVersion

string

Yes

The version of the destination database engine.

-   Valid values for MySQL:
    
    -   **5.6**
        
    -   **5.7**
        
    -   **8.0**
        
-   Valid value for Oracle: **14**.
    

5.6

CreationOption

string

Yes

The creation method. Valid values:

-   **MigrationFromRDS**: Migrate data from an existing RDS instance to a new PolarDB cluster. The created PolarDB cluster is in read-only mode and has binary logging enabled by default. For operations in the console, see [Upgrade an ApsaraDB RDS for MySQL instance to PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/overview-43).
    
-   **UpgradeFromPolarDB**: Upgrade and migrate data from a PolarDB cluster. See [Upgrade the major version](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/).
    

MigrationFromRDS

CreationCategory

string

Yes

The product series. Valid values:

-   **Normal**: Cluster Edition (default)
    
-   **SENormal**: Standard Edition
    

See [Product series](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series).

Normal

Reserve

string

No

A reserved parameter in the JSON string format.

{\\"targetTableMode\\":2}

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

CDB3258F-B5DE-43C4-8935-CBA0CA\*\*\*\*\*\*

SourceDBClusterId

string

The ID of the source instance.

pc-k2j96w169uhu868l8

TaskId

integer

The ID of the asynchronous task.

2312111

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CDB3258F-B5DE-43C4-8935-CBA0CA******",
  "SourceDBClusterId": "pc-k2j96w169uhu868l8\n",
  "TaskId": 2312111
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/GenerateUpgradeReportForSyncClone#workbench-doc-change-demo) for a complete list.
