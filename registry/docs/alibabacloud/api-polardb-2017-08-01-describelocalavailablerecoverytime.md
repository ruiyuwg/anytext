Queries the available time range to recover from a backup.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLocalAvailableRecoveryTime)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLocalAvailableRecoveryTime)

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

polardb:DescribeLocalAvailableRecoveryTime

get

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

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

pc-2ze3ngi149b313\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RecoveryEndTime

string

The end of the time range available for recovery.

**Note**

This is calculated based on level-1 backups and does not include level-2 backups.

2025-09-17T08:56:45Z

RecoveryBeginTime

string

The start of the time range available for recovery.

**Note**

This is calculated based on level-1 backups and does not include level-2 backups.

2025-09-10T14:19:48Z

RequestId

string

The request ID.

4EA0E6F8-BDB2-17B2-9567-591F6B3D7\*\*\*

DBClusterId

string

The cluster ID.

pc-2ze3ngi149b313\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RecoveryEndTime": "2025-09-17T08:56:45Z",
  "RecoveryBeginTime": "2025-09-10T14:19:48Z",
  "RequestId": "4EA0E6F8-BDB2-17B2-9567-591F6B3D7***",
  "DBClusterId": "pc-2ze3ngi149b313***"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingUserID

The request is missing a user\_id parameter.

You must specify the UserID parameter in the request.

400

MissingUID

The request is missing a uid parameter.

You must specify the UID parameter in the request.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeLocalAvailableRecoveryTime#workbench-doc-change-demo) for a complete list.
