Queries the backup retention period of an SAP HANA database.

## Operation description

-   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
-   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaRetentionSetting)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaRetentionSetting)

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

hbr:DescribeHanaRetentionSetting

get

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

Yes

The ID of the backup vault.

v-000ii8t\*\*\*\*\*\*ntrt2

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-0002ys1i\*\*\*\*\*\*wwtf

DatabaseName

string

No

The database name.

C4P

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

280DD872-EE25-52E8-9CB4-491067173DD0

VaultId

string

The ID of the backup vault.

v-0006wkn7\*\*\*\*\*\*zkn

Schedule

string

The policy to update the retention period. Format: `I|{startTime}|{interval}`, which indicates that the retention period is updated at an interval of {interval} starting from {startTime}.

-   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
-   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.

I|0|P1D

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

DatabaseName

string

The database name.

Q01

Disabled

boolean

Indicates whether the backup is permanently retained. Valid values:

-   true: The backup is permanently retained.
-   false: The backup is retained for the specified number of days.

false

Code

string

The response code. The status code 200 indicates that the request was successful.

200

RetentionDays

long

The number of days for which the backup is retained. If the value of the Disabled parameter is false, the backup is retained for the number of days specified by this parameter.

3650

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

ClusterId

string

The ID of the SAP HANA instance.

cl-0003jyv\*\*\*\*\*\*fsku5m

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "280DD872-EE25-52E8-9CB4-491067173DD0",
  "VaultId": "v-0006wkn7******zkn",
  "Schedule": "I|0|P1D",
  "Success": true,
  "DatabaseName": "Q01",
  "Disabled": false,
  "Code": 200,
  "RetentionDays": 3650,
  "Message": "successful",
  "ClusterId": "cl-0003jyv******fsku5m"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
