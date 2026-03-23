Installs backup clients on one or more ECS instances.

## Operation description

-   This operation creates a background asynchronous task. The task uses Cloud Assistant to install backup clients on ECS instances.
    
-   Call the [DescribeTask](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describetask) operation to get the task result.
    
-   The task timeout is 15 minutes. After the task is created, wait 60 seconds before making the first query. Then, query the result every 30 seconds.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/InstallBackupClients)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/InstallBackupClients)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

hbr:InstallBackupClients

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceIds

object

Yes

The IDs of the ECS instances. You can specify a maximum of 20 instance IDs.

\["i-0xi5wj5\*\*\*\*\*v3j3bh2gj5"\]

CrossAccountType

string

No

The type of cross-account backup. Valid values:

-   SELF\_ACCOUNT: Backs up data within the current account.
    
-   CROSS\_ACCOUNT: Backs up data across accounts.
    

CROSS\_ACCOUNT

CrossAccountUserId

integer

No

The ID of the source account that is used for cross-account backup.

16392782xxxxxx

CrossAccountRoleName

string

No

The name of the RAM role that is created in the source account for cross-account backup.

BackupRole

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The return code. A value of 200 indicates that the operation is successful.

200

Message

string

The message that is returned. If the request is successful, successful is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TaskId

string

The ID of the asynchronous task. Call the DescribeTask operation to query the task result.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Success

boolean

Indicates whether the request is successful.

-   true: The request is successful.
    
-   false: The request failed.
    

true

InstanceStatuses

array<object>

The status of the ECS instances.

object

ValidInstance

boolean

Indicates whether a backup client can be installed on the ECS instance.

-   true: The backup client can be installed.
    
-   false: The backup client cannot be installed.
    

true

InstanceId

string

The ID of the ECS instance.

i-0xi5w\*\*\*v3j3bh2gj5

ErrorCode

string

The error code. Valid values:

-   An empty value indicates that the operation is successful.
    
-   **InstanceNotExists**: The ECS instance does not exist.
    
-   **InstanceNotRunning**: The ECS instance is not in the Running state.
    
-   **CloudAssistNotRunningOnInstance**: Cloud Assistant is not available.
    

InstanceNotExists

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
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

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/InstallBackupClients#workbench-doc-change-demo) for a complete list.
