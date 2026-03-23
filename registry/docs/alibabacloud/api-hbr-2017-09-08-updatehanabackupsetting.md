Updates the backup parameters of an SAP HANA database.

## Operation description

You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateHanaBackupSetting)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateHanaBackupSetting)

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

hbr:UpdateHanaBackupSetting

update

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

VaultId

string

No

The ID of the backup vault.

v-0005n\*\*\*\*\*\*rluw5

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-000ezvg\*\*\*\*\*\*8znz

DatabaseName

string

Yes

The name of the database.

SYSTEMDB

EnableAutoLogBackup

boolean

Yes

Specifies whether to enable automatic log backup. Valid values:

-   **true**: enables automatic log backup.
-   **false**: disables automatic log backup.

true

DataBackupParameterFile

string

No

The configuration file for data backup.

/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param

LogBackupParameterFile

string

No

The configuration file for log backup.

/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param

LogBackupUsingBackint

boolean

Yes

Specifies whether to use Backint to back up logs. Valid values:

-   true: Backint is used to back up logs.
-   false: Backint is not used to back up logs.

true

LogBackupTimeout

long

No

The interval at which logs are backed up. Unit: seconds.

900

CatalogBackupUsingBackint

boolean

Yes

Specifies whether to use Backint to back up catalogs. Valid values:

-   true: Backint is used to back up catalogs.
-   false: Backint is not used to back up catalogs.

true

CatalogBackupParameterFile

string

No

The configuration file for catalog backup.

/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

RequestId

string

The ID of the request.

4892D474-9A4A-5298-BCD3-E46112A1EFD0

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "4892D474-9A4A-5298-BCD3-E46112A1EFD0",
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
