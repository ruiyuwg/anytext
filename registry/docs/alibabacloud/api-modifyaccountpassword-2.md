Changes the password of a database account for a specified PolarDB cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountPassword)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountPassword)

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

polardb:ModifyAccountPassword

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The username of the account.

testacc

NewAccountPassword

string

Yes

The new password of the account. The new password must meet the following requirements:

-   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
-   It must be 8 to 32 characters in length.
-   Special characters include `! @ # $ % ^ & * ( ) _ + - =`

Pw123456

PasswordType

string

No

The password type.

Tair

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

EngineMigration.ActionDisabled

Specified action is disabled while custins is in engine migration.

The specified operation is disabled when custins is being migrated across engines.

400

LockTimeout

The request processing has failed due to lock timeout.

Failed to process the request due to a lock timeout.

400

InvalidAccountPassword.Malformed

The specified parameter AccountPassword is not valid.

The specified AccountPassword parameter is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAccountPassword?updateTime=2024-03-13#workbench-doc-change-demo)

2023-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAccountPassword?updateTime=2023-12-12#workbench-doc-change-demo)

2023-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAccountPassword?updateTime=2023-09-12#workbench-doc-change-demo)
