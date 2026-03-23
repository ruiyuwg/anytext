Upgrades the minor version of a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/UpgradeDBClusterVersionZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/UpgradeDBClusterVersionZonal)

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

polardb:UpgradeDBClusterVersionZonal

update

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*

UpgradePolicy

string

No

The upgrade policy for the kernel version. Valid values:

-   **HOT**: hot upgrade
    
-   **COLD**: cold upgrade. This upgrade method is supported only for PolarDB for MySQL 8.0 clusters.
    

HOT

UpgradeLabel

string

No

The label for the kernel version upgrade. Set the value to **INNOVATE**.

**Note**

-   This parameter is applicable only when you upgrade a PolarDB for MySQL 8.0.1 cluster to PolarDB for MySQL 8.0.2.
    
-   If you specify this parameter, you must set `UpgradePolicy` to **COLD**.
    

INNOVATE

PlannedStartTime

string

No

The earliest time to start the scheduled kernel upgrade. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time is in UTC.

**Note**

-   The start time can be any point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a time in the range of `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
    

-   If you do not specify this parameter, the upgrade task is executed immediately.
    

2022-04-28T14:00:00Z

PlannedEndTime

string

No

The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time is in UTC.

**Note**

-   The latest start time must be at least 30 minutes later than the earliest start time.
    
-   If you specify `PlannedStartTime` but not this parameter, the latest start time is 30 minutes after the value of `PlannedStartTime` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
    

2021-01-14T09:30:00Z

FromTimeService

boolean

No

Specifies whether to immediately perform or schedule the kernel upgrade. Valid values:

-   **false** (default): Schedules the upgrade.
    
-   **true**: Immediately performs the upgrade.
    

**Note**

You do not need to specify this parameter when you call this operation.

false

UpgradeType

string

No

The upgrade type. Valid values:

-   **PROXY**: Upgrades only the database proxy (PolarProxy).
    
-   **DB**: Upgrades only the kernel.
    
-   **ALL** (default): Upgrades both the database proxy (PolarProxy) and the kernel.
    

PROXY

TargetDBRevisionVersionCode

string

No

The version code of the target DB version. You can obtain this value by calling the [DescribeDBClusterVersion](/help/en/polardb/api-polardb-2017-08-01-describedbclusterversion) operation.

20230707

TargetProxyRevisionVersionCode

string

No

The version code of the target proxy version. You can obtain this value by calling the [DescribeDBClusterVersion](/help/en/polardb/api-polardb-2017-08-01-describedbclusterversion) operation.

20240702

ClientToken

string

No

A unique, case-sensitive token that you provide to ensure the idempotence of the request. The token can contain only ASCII characters and cannot exceed 64 characters in length.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

CAE6755F-B79A-4861-B227-801FE8\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CAE6755F-B79A-4861-B227-801FE8******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ScheduleTaskExist

The specified dbCluster already has a scheduled task.

The specified cluster already has a scheduled task.

400

InvalidUpgradeLabel.Malformed

The specified parameter UpgradeLabel is not valid.

The specified UpgradeLabel parameter is invalid.

400

InvalidEngine.Unsupported

The specified Engine does not support this feature.

This feature is not supported by the specified engine.

400

InvalidEngineMinorVersion.Malformed

The specified parameter MinorVersion is not valid.

The specified MinorVersion parameter is invalid.

400

InvalidEngineVersion.Unsupported

The specified engineVersion is not supported.

The specified engineVersion parameter is not supported.

400

InvalidUpgradePolicy.Malformed

The specified parameter UpgradePolicy is not valid.

The specified UpgradePolicy parameter is invalid.

400

InvalidSwitchTimeMode.Malformed

The specified parameter SwitchTimeMode is not valid.

The specified SwitchTimeMode parameter is invalid.

403

OperationDenied.UpgradeType

The operation is not permitted due to gdn limit

The current upgrade is not supported due to GDN limits.

403

IncorrectGdnStandbyDBVersion

Current gdn standby cluster is not the latest db version.

The current secondary cluster of the GDN does not run the latest database version.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/UpgradeDBClusterVersionZonal#workbench-doc-change-demo) for a complete list.
