Queries whether the current instance supports the Advanced Download feature.

## Operation description

### Applicable engines

-   RDS MySQL (with cloud disks)
    
-   RDS PostgreSQL
    
-   PolarDB for MySQL
    
-   MongoDB
    

### Related documents

You can create an Advanced Download task for a point in time or a specific backup set. You can specify a URL as the download destination or write the data directly to your Object Storage Service (OSS) bucket for data analytics and offline archiving.

-   [Download an RDS MySQL backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Download an RDS PostgreSQL backup](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance)
    
-   [Download a PolarDB for MySQL backup](/help/en/polardb/polardb-for-mysql/user-guide/download-backup)
    
-   [Download a MongoDB backup](/help/en/mongodb/user-guide/download-backup-files)
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadSupport)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadSupport)

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

dbs:DescribeDownloadSupport

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

The region ID of the instance. You can call the [DescribeDBInstanceAttribute](/help/en/rds/api-query-instance-details) operation to query the region ID.

cn-hangzhou

InstanceName

string

Yes

The instance ID.

rm-bp1a48p922r4b\*\*\*\*

ClusterName

string

No

The name of the sharded cluster. This parameter is required only for MongoDB sharded cluster instances.

dds-example

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

Data

string

Indicates whether the Advanced Download feature is supported. Valid values:

-   **true**: The feature is supported.
    
-   **false**: The feature is not supported.
    

true

RequestId

string

The request ID.

F1A186F7-7B34-5C11-A903-EE23876B\*\*\*\*

ErrCode

string

The error code returned if the call fails.

DBS.ParamIsInValid

Success

string

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

ErrMessage

string

The error message returned if the call fails.

Argument: regionCode Must not be empty

Code

string

The error code.

DBS.ParamIsInValid

Message

string

The error message.

Argument: regionCode Must not be empty

## Examples

Success response

`JSON` format

```
{
  "Data": "true",
  "RequestId": "F1A186F7-7B34-5C11-A903-EE23876B****",
  "ErrCode": "DBS.ParamIsInValid",
  "Success": "true",
  "ErrMessage": "Argument: regionCode Must not be empty",
  "Code": "DBS.ParamIsInValid",
  "Message": "Argument: regionCode Must not be empty"
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

See [Release Notes](https://api.alibabacloud.com/document/Dbs/2021-01-01/DescribeDownloadSupport#workbench-doc-change-demo) for a complete list.
