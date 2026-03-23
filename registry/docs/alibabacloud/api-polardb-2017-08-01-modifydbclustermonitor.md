Modifies the interval at which the monitoring data of a PolarDB cluster is collected.

## Operation description

-   When the monitoring data is collected every 5 seconds:
    
    -   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
    -   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
    -   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
    -   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
    -   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
-   When the monitoring data is collected every 60 seconds:
    
    -   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
    -   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
    -   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
    -   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterMonitor)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterMonitor)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

polardb:ModifyDBClusterMonitor

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Period

string

Yes

The interval at which monitoring data is collected. Valid values: **5** and **60**. Unit: seconds.

5

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

75B92353-73B4-447B-8477-C85F3C\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "75B92353-73B4-447B-8477-C85F3C******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

OperationDenied.DBInstanceMonitorPeriod

Current DB instance does not support this monitor period.

The monitoring cycle is not supported by the current cluster.

404

InvalidDBInstanceId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBInstanceId parameter does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
