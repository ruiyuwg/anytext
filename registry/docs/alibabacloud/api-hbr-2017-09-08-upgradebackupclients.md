Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.

## Operation description

-   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
-   You can call the DescribeTask operation to query the execution result of an asynchronous job.
-   The timeout period of an asynchronous job is 15 minutes.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpgradeBackupClients)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UpgradeBackupClients)

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

hbr:UpgradeBackupClients

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

InstanceIds

object

Yes

The IDs of Elastic Compute Service (ECS) instances. The total number of ECS instance IDs and Cloud Backup client IDs cannot exceed 100.

\["c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*"\]

ClientIds

object

Yes

The IDs of Cloud Backup clients. The total number of Cloud Backup client IDs and ECS instance IDs cannot exceed 100.

\["i-0xi5wj\*\*\*\*\*\*3j3bh2gj5"\]

CrossAccountType

string

No

Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:

-   SELF\_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
-   CROSS\_ACCOUNT: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

1283948272xxxxx

CrossAccountRoleName

string

No

The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

hbrcrossrole

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TaskId

string

The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

InstanceStatuses

array<object>

The status of the ECS instance. If the status of an ECS instance cannot meet the requirements to install an HBR client and the value of the InstanceIds parameter is greater than 1, an error message is returned based on the value of this parameter.

InstanceStatuses

object

ValidInstance

boolean

Indicates whether an HBR client can be installed on the ECS instance. Valid values:

-   true: An HBR client can be installed on the ECS instance.
-   false: An HBR client cannot be installed on the ECS instance.

true

InstanceId

string

The ID of the ECS instance.

i-0xi5w\*\*\*v3j3bh2gj5

ErrorCode

string

The error code that is returned. Valid values:

-   If the value is empty, the call is successful.
-   **InstanceNotExists**: The ECS instance does not exist.
-   **InstanceNotRunning**: The ECS instance is not running.
-   **CloudAssistNotRunningOnInstance**: Cloud Assistant is unavailable.

InstanceNotExists

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TaskId": "t-*********************",
  "Success": true,
  "InstanceStatuses": [
    {
      "ValidInstance": true,
      "InstanceId": "i-0xi5w***v3j3bh2gj5",
      "ErrorCode": "InstanceNotExists"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
