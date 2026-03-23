Creates a backup plan for an SAP HANA instance.

## Operation description

-   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
-   You can specify only one type of data source in a backup plan.
-   You can specify only one interval as a backup cycle in a backup plan.
-   Each backup plan allows you to back up data to only one backup vault.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaBackupPlan)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaBackupPlan)

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

hbr:CreateHanaBackupPlan

create

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

v-0002pcwhdn\*\*\*\*\*\*wmi

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-00024vyjj9\*\*\*\*\*\*v

PlanName

string

Yes

The name of the backup plan.

plan-20220110-113108

Schedule

string

Yes

The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.

-   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
-   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.

I|1602673264|P1D

BackupType

string

Yes

The backup type. Valid values:

-   COMPLETE: full backup
-   INCREMENTAL: incremental backup
-   DIFFERENTIAL: differential backup

COMPLETE

DatabaseName

string

Yes

The name of the database.

SYSTEMDB

BackupPrefix

string

No

The backup prefix.

DIFF\_DATA\_BACKUP

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmvnf22m7itha

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

33AA3AAE-89E1-5D3A-A51D-0C0A80850F68

PlanId

string

The ID of the backup plan.

pl-000756jdlk2zmqig2nea

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
  "RequestId": "33AA3AAE-89E1-5D3A-A51D-0C0A80850F68",
  "PlanId": "pl-000756jdlk2zmqig2nea",
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
