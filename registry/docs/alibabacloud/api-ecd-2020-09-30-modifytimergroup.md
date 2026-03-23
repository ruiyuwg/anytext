Updates the settings of a timer group, such as its scheduled task configurations.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyTimerGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyTimerGroup)

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

ecd:ModifyTimerGroup

list

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

RegionId

string

No

Region ID. This operation does not depend on region. Set this parameter to `cn-shanghai`.

cn-shanghai

GroupId

string

Yes

Timer group ID.

cg-i1ruuudp92qpj\*\*\*\*

ConfigTimers

array<object>

No

Scheduled task configurations.

array<object>

No

Scheduled task configurations.

TimerType

string

No

Scheduled task type.

**Valid values:**

-   NoOperationDisconnect :
    
    Disconnect after inactivity
    
-   NoConnect :
    
    Disconnect task (requires OperationType)
    
-   TimerBoot :
    
    Start on schedule
    
-   TimerReset :
    
    Reset on schedule
    
-   NoOperationShutdown :
    
    Shut down after inactivity
    
-   NoOperationHibernate :
    
    Hibernate after inactivity
    
-   TimerShutdown :
    
    Shut down on schedule
    
-   NoOperationReboot :
    
    Restart after inactivity
    
-   TimerReboot :
    
    Restart on schedule
    

TimerBoot

CronExpression

string

No

Cron expression for the scheduled task.

**Note**

Use UTC time. For example, if you want the task to run at 00:00 China Standard Time (UTC+8), set the cron expression to 0 0 16 ? \* 1,2,3,4,5,6,7.

0 0 16 ? \* 1,2,3,4,5,6,7

Interval

integer

No

Time interval in minutes.

10

Enforce

boolean

No

Force execution. If true, ignore desktop and connection status checks and execute the scheduled task.

false

ResetType

string

No

Reset type. Determines whether to reset and which disks to reset.

**Valid values:**

-   RESET\_TYPE\_SYSTEM :
    
    Reset system disk
    
-   RESET\_TYPE\_USER\_DISK :
    
    Reset data disk
    
-   RESET\_TYPE\_BOTH :
    
    Reset system and data disks
    

RESET\_TYPE\_SYSTEM

AllowClientSetting

boolean

No

Allow end users to configure scheduled tasks.

true

OperationType

string

No

Operation type for scheduled tasks. Only disconnect tasks support this parameter.

**Valid values:**

-   Hibernate :
    
    Hibernate
    
-   Shutdown :
    
    Shut down
    

Shutdown

TriggerType

string

No

Trigger type for inactivity-based scheduled tasks.

**Valid values:**

-   Advanced :
    
    Smart detection
    
-   Standard :
    
    Standard detection
    

Standard

ProcessWhitelist

array

No

Process whitelist for smart detection of inactivity-based scheduled tasks. If any whitelisted process is running, the inactivity-based scheduled task will not trigger.

string

No

Process name.

chrome

NotificationTime

integer

No

SegmentTimers

array<object>

No

object

No

OperationType

string

No

StartCronExpression

string

No

EndCronExpression

string

No

Interval

integer

No

TriggerType

string

No

ProcessWhitelist

array

No

string

No

NotificationTime

integer

No

TimerOrder

integer

No

Timezone

string

No

Enforce

boolean

No

ResetType

string

No

ImageId

string

No

Image ID for image-change scheduled tasks.

m-5b0vjqbiqu010XXXXXX

LockScreenTime

integer

No

Lock screen time for inactivity-based lock screen. Not supported for non-AD desktops.

1800

AppointmentTimer

integer

No

Timestamp for scheduled task execution. The task runs at the specified time.

1764660600967

Name

string

No

Timer group name.

定时任务

Description

string

No

Timer group description.

定时任务

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema.

RequestId

string

Request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

GroupId

string

Timer group ID.

cg-i1ruuudp92qpj\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "GroupId": "cg-i1ruuudp92qpj****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationTooFrequent

The operation is too frequent, please try again later.

Operation is too frequent, please try again later

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyTimerGroup#workbench-doc-change-demo) for a complete list.
