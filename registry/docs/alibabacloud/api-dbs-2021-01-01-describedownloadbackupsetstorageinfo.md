Queries the storage information for downloading a backup set.

## Operation description

### Applicable engines

-   RDS MySQL (cloud disk edition)
    
-   RDS PostgreSQL
    
-   PolarDB for MySQL
    
-   MongoDB
    

### Related documents

-   [Download an RDS MySQL backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Download an RDS PostgreSQL backup](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance)
    
-   [Download a PolarDB for MySQL backup](/help/en/polardb/polardb-for-mysql/user-guide/download-backup)
    
-   [Download a MongoDB backup](/help/en/mongodb/user-guide/download-backup-files)
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadBackupSetStorageInfo)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadBackupSetStorageInfo)

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

dbs:DescribeDownloadBackupSetStorageInfo

get

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

RegionCode

string

Yes

The ID of the region where the instance resides.

cn-hangzhou

Duration

string

Yes

If the download destination is a URL, this parameter specifies the validity period of the link.

-   The default validity period of a URL is 2 hours (7,200 seconds).
    
-   You can set the validity period to a value from 5 minutes (300 seconds) to 1 day (86,400 seconds).
    
-   Convert the value to seconds before you pass it. For example, to set the validity period to 5 minutes, pass 300.
    

300

InstanceName

string

No

The instance ID.

**Note**

If you specify **InstanceName**, you must also specify **BackupSetId**.

rm-uf6qqf569n435\*\*\*\*

TaskId

string

No

The ID of the download task.

-   If you do not specify **TaskId**, you must specify **BackupSetId** and **InstanceName**.
    
-   To view the task ID, click **Backup and Restoration** for the target instance and go to the **Backup Download** tab.
    

dt-s0ugzak9\*\*\*\*

BackupSetId

string

No

The ID of the backup set.

30\*\*\*\*

ClusterName

string

No

This parameter is required only for MongoDB instances. It specifies the name of the sharded cluster.

dds-example

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data.

RequestId

string

The request ID.

44B8C2F5-919D-5D29-BCD5-DEB03467\*\*\*\*

ErrCode

string

The error code.

DBS.ParamIsInValid

Success

string

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

ErrMessage

string

The error message.

Argument: regionCode Must not be empty

Code

string

The error code.

DBS.ParamIsInValid

Message

string

The error message.

Argument: regionCode Must not be empty

Data

object

The returned data.

PublicUrl

string

The public URL to download the backup set.

http://dbs-137383785969\*\*\*\*-cn-hangzhou-1iv12nblw\*\*\*\*.oss-cn-hangzhou.aliyuncs.com/dt-u7u4bufa\*\*\*\*/dbs\_target\_file\_path/test\_456

PrivateUrl

string

The private URL to download the backup set.

http://dbs-137383785969\*\*\*\*-cn-hangzhou-1iv12nblw\*\*\*\*.oss-cn-hangzhou-internal.aliyuncs.com/dt-u7u4bufa\*\*\*\*/dbs\_target\_file\_path/test\_123

ExpirationTime

integer

The validity period of the link.

**Note**

The value is a UNIX timestamp.

1661329050

## Examples

Success response

`JSON` format

```
{
  "RequestId": "44B8C2F5-919D-5D29-BCD5-DEB03467****",
  "ErrCode": "DBS.ParamIsInValid",
  "Success": "true",
  "ErrMessage": "Argument: regionCode Must not be empty",
  "Code": "DBS.ParamIsInValid",
  "Message": "Argument: regionCode Must not be empty",
  "Data": {
    "PublicUrl": "http://dbs-137383785969****-cn-hangzhou-1iv12nblw****.oss-cn-hangzhou.aliyuncs.com/dt-u7u4bufa****/dbs_target_file_path/test_456",
    "PrivateUrl": "http://dbs-137383785969****-cn-hangzhou-1iv12nblw****.oss-cn-hangzhou-internal.aliyuncs.com/dt-u7u4bufa****/dbs_target_file_path/test_123",
    "ExpirationTime": 1661329050
  }
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

See [Error Codes](https://api.alibabacloud.com/document/Dbs/2021-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dbs/2021-01-01/DescribeDownloadBackupSetStorageInfo#workbench-doc-change-demo) for a complete list.
