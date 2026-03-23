Generates a Resource Access Management (RAM) policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/GenerateRamPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/GenerateRamPolicy)

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

hbr:GenerateRamPolicy

none

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RequireBasePolicy

boolean

No

Specifies whether to generate the policy based on an existing instance-specific rule. Valid values:

-   true
-   false

true

ActionType

string

Yes

The type of policy that you want to generate. Valid values:

-   BACKUP: the permission to back up data to a backup vault
-   RESTORE: the permission to restore data from a backup vault

system

VaultId

string

Yes

The ID of the backup vault.

v-0007al3m\*\*\*\*\*\*7ao

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PolicyDocument

string

The content of the policy.

{ "Version": "1", "Statement": \[ { "Effect": "Deny", "Action": \[ "hbr:CreateRestore", "hbr:CreateRestoreJob", "hbr:CreateHanaRestore", "hbr:CreateUniRestorePlan", "hbr:CreateSqlServerRestore" \], "Resource": \[ "acs:hbr:\*:1178\*\*\*\*\*\*531:vault/v-000\*\*\*\*\*\*blx06", "acs:hbr:\*:1178\*\*\*\*\*\*531:vault/v-000\*\*\*\*\*\*blx06/client/\*" \] } \] }

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PolicyDocument": {
    "Version": 1,
    "Statement": [
      {
        "Effect": "Deny",
        "Action": [
          "hbr:CreateRestore",
          "hbr:CreateRestoreJob",
          "hbr:CreateHanaRestore",
          "hbr:CreateUniRestorePlan",
          "hbr:CreateSqlServerRestore"
        ],
        "Resource": [
          "acs:hbr:*:1178******531:vault/v-000******blx06",
          "acs:hbr:*:1178******531:vault/v-000******blx06/client/*"
        ]
      }
    ]
  },
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
