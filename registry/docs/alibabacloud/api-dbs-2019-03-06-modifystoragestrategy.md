Modify the lifecycle of stored data in a backup plan.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dbs/2019-03-06/ModifyStorageStrategy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dbs/2019-03-06/ModifyStorageStrategy)

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

dbs:ModifyStorageStrategy

update

\*BackupPlan

`acs:dbs:{#regionId}:{#accountId}:backupplan/{#BackupPlanId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

BackupPlanId

string

Yes

Backup plan ID. Obtain this parameter's value by calling the [DescribeBackupPlanList](/help/en/dms/developer-reference/api-dbs-2019-03-06-describebackupplanlist) API.

dbsqdss5tmh\*\*\*\*

BackupRetentionPeriod

integer

Yes

Backup data retention period, in days. Valid values: 0 to 1825.

**Note**

Default value: 730 days.

730

DuplicationInfrequentAccessPeriod

integer

Yes

Time to convert to Infrequent Access storage. This value must be less than the Archive Storage period (DuplicationArchivePeriod parameter). For more information about Infrequent Access storage, see [Storage Type Overview](/help/en/oss/user-guide/overview-53/).

**Note**

Default value: 180 days.

190

DuplicationArchivePeriod

integer

Yes

Time to convert to Archive Storage. This value must be less than the backup data retention period (BackupRetentionPeriod parameter). For more information about Archive Storage, see [Storage Type Overview](/help/en/oss/user-guide/overview-53/).

**Note**

Default value: 365 days.

366

ClientToken

string

No

An arbitrary string used to ensure the idempotence of the request and prevent duplicate submissions.

dbstest

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Return parameter details.

HttpStatusCode

integer

HTTP status code.

200

RequestId

string

Request ID.

E995F91F-6F89-503B-9F7D-502F58FD\*\*\*\*

ErrCode

string

Error code.

Param.NotFound

Success

boolean

Indicates whether the request was successful. Return values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

ErrMessage

string

Error message.

findValidDBSJob error

BackupPlanId

string

Backup plan ID.

dbsqdss5tmh\*\*\*\*

NeedPrecheck

boolean

Indicates whether this modification triggers a precheck. Return values:

-   **true**: A precheck is triggered. Manually call the [StartBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-stopbackupplan) API to start the backup plan.
    
-   **false**: No precheck is triggered.
    

false

## Examples

Success response

`JSON` format

```
{
  "HttpStatusCode": 200,
  "RequestId": "E995F91F-6F89-503B-9F7D-502F58FD****",
  "ErrCode": "Param.NotFound",
  "Success": true,
  "ErrMessage": "findValidDBSJob error",
  "BackupPlanId": "dbsqdss5tmh****",
  "NeedPrecheck": false
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

Request.Forbidden

Have no Permissions

See [Error Codes](https://api.alibabacloud.com/document/Dbs/2019-03-06/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dbs/2019-03-06/ModifyStorageStrategy#workbench-doc-change-demo) for a complete list.
