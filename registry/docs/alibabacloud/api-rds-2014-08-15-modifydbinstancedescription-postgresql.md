You can call the ModifyDBInstanceDescription operation to modify the name of an instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceDescription)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceDescription)

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

rds:ModifyDBInstanceDescription

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

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

The ID of the instance.

rm-uf6wjk5\*\*\*\*

DBInstanceDescription

string

Yes

The name of the instance.

**Note** The name must be 2 to 64 characters in length.

Instance in Alibaba Cloud test environment

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

17F57FEE-EA4F-4337-8D2E-9C23CAA63D74

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "17F57FEE-EA4F-4337-8D2E-9C23CAA63D74"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceDescription.Format

Specified DB instance description is not valid.

\-

400

InvalidDBDescription.Format

Specified DB description is not valid.

The database description is invalid. Specify a valid description.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceDescription?updateTime=2022-10-28#workbench-doc-change-demo)

2022-06-23

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceDescription?updateTime=2022-06-23#workbench-doc-change-demo)
