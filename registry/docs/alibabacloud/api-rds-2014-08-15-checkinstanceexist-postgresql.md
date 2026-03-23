You can call the CheckInstanceExist operation to query whether an ApsaraDB RDS instance exists.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckInstanceExist)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckInstanceExist)

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

rds:CheckInstanceExist

get

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

## Response parameters

Parameter

Type

Description

Example

object

IsExistInstance

boolean

Indicates whether the instance exists. Valid values:

-   **true**: The instance exists.
-   **false**: The instance does not exist.

true

RequestId

string

The ID of the request.

11439B36-F703-49EB-8656-D3C87BE28B57

## Examples

Sample success responses

`JSON`format

```
{
  "IsExistInstance": true,
  "RequestId": "11439B36-F703-49EB-8656-D3C87BE28B57"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-22

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CheckInstanceExist?updateTime=2024-11-22#workbench-doc-change-demo)
