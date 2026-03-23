Installs one or more Cloud Backup clients on specified instances.

## Operation description

Before you call this operation, make sure that you fully understand the billing methods and pricing of Cloud Backup. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateClients)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateClients)

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

hbr:CreateClients

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

v-0001ufe\*\*\*\*\*\*kgm

AlertSetting

string

No

The alert settings. Valid value: INHERITED, which indicates that the HBR client sends alert notifications by using the same method configured for the backup vault.

INHERITED

ClientInfo

string

No

The installation information of the HBR clients.

\[ { "instanceId": "i-bp116lr\*\*\*\*\*\*te9q2", "accessKeyId": "", "accessKeySecret": "", "clusterId": "cl-000csy09q\*\*\*\*\*\*9rfz9", "sourceTypes": \[ "HANA" \] }, { "instanceId": "i-bp116lrux\*\*\*\*\*\*hte9q4", "accessKeyId": "", "accessKeySecret": "", "clusterId": "cl-000csy09q5094vw9rfz9", "sourceTypes": \[ "HANA" \] }\]

UseHttps

boolean

No

Specifies whether to transmit data over HTTPS. Valid values:

-   true: transmits data over HTTPS.
-   false: transmits data over HTTP.

false

ResourceGroupId

string

No

The ID of the resource group.

rg-aekzvx7d3c4kpny

CrossAccountType

string

No

The backup type. Valid values:

-   **SELF\_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
-   **CROSS\_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

158975xxxxx4625

CrossAccountRoleName

string

No

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

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

4A8A9AE4-F798-5E6D-853E-10F9F5A1BD4E

TaskId

string

The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.

t-000h9x5t02vhyksf1x7k

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

InstanceStatuses

array<object>

The status of the ECS instance. If you specify more than one instance IDs in the request and the status of an ECS instance does not meet the requirements to install an HBR client, an error message is returned based on the value of this parameter.

InstanceStatus

object

The status of the ECS instance. If you specify more than one instance IDs in the request and the status of an ECS instance does not meet the requirements to install an HBR client, an error message is returned based on the value of this parameter.

ValidInstance

boolean

Indicates whether an HBR client can be installed on the ECS instance. Valid values:

-   true: An HBR client can be installed on the ECS instance.
-   false: An HBR client cannot be installed on the ECS instance.

true

InstanceId

string

The ID of the ECS instance.

i-2zegp3cdu\*\*\*\*\*\*uj9i

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "4A8A9AE4-F798-5E6D-853E-10F9F5A1BD4E",
  "TaskId": "t-000h9x5t02vhyksf1x7k",
  "Success": true,
  "InstanceStatuses": {
    "InstanceStatus": [
      {
        "ValidInstance": true,
        "InstanceId": "i-2zegp3cdu******uj9i"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-05-22

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-05-22#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateClients?updateTime=2024-02-23#workbench-doc-change-demo)
