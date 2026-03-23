Checks whether the disk of an ApsaraDB RDS for SQL Server instance can be resized online.

## Operation description

### [](#supported-database-engine)Supported database engine

SQL Server

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSupportOnlineResizeDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSupportOnlineResizeDisk)

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

rds:DescribeSupportOnlineResizeDisk

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

8B993DA9-5272-5414-94E3-4CA8BA0146C2

Success

boolean

Indicates whether the request was successful.

true

Code

string

The response code returned.

NotExists.InstanceId

Data

string

The response result set.

{"SupportOnlineResizeDisk":true,"DBInstanceName":"rm-uf6wjk5xxxxxxx"}

Message

string

The response code.

successful

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8B993DA9-5272-5414-94E3-4CA8BA0146C2",
  "Success": true,
  "Code": "NotExists.InstanceId",
  "Data": {
    "SupportOnlineResizeDisk": true,
    "DBInstanceName": "rm-uf6wjk5xxxxxxx"
  },
  "Message": "successful"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceEngineType.Format

the DB instance engine type does not support this operation.

This operation is not supported for the database engine of the instance.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
