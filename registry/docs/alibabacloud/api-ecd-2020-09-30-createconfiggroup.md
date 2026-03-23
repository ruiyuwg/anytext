Creates a configuration group. A configuration group contains the settings for scheduled tasks on cloud desktops.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateConfigGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateConfigGroup)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

Region ID. This operation has no region dependency. Set this parameter to `cn-shanghai`.

**Valid values:**

-   cn-shanghai :
    
    cn-shanghai
    

cn-shanghai

Name

string

Yes

Configuration group name.

定时任务组

Description

string

No

Configuration group description.

定时任务描述内容

Type

string

Yes

Configuration group type.

**Valid values:**

-   Timer :
    
    Scheduled task
    

Timer

ProductType

string

Yes

Product type used by the configuration group.

**Valid values:**

-   CLOUD\_DESKTOP :
    
    Cloud computer
    

CLOUD\_DESKTOP

ConfigTimers

array<object>

No

List of scheduled task configurations.

array<object>

No

Scheduled task configuration.

TimerType

string

Yes

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
    

TIMER\_BOOT

CronExpression

string

No

Cron expression for the scheduled task.

**Important**

Use UTC time. For example, to run at 00:00 China Standard Time (UTC+8), use 0 0 16 ? \* 1,2,3,4,5,6,7.

0 0 16 ? \* 1,2,3,4,5,6,7

Interval

integer

No

Time interval in minutes.

10

Enforce

boolean

No

Force execution.

true

ResetType

string

No

Cloud Desktop reset type.

**Valid values:**

-   RESET\_TYPE\_SYSTEM :
    
    Reset system disk only
    
-   RESET\_TYPE\_USER\_DISK :
    
    Reset data disk only
    
-   RESET\_TYPE\_BOTH :
    
    Reset both system and data disks
    

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

Process whitelist for smart detection of inactivity-based scheduled tasks. If any whitelisted process is running, the inactivity-based task does not trigger.

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

ID of the runtime image to use for an image-change scheduled task.

m-5b0vjqbiqu010XXXXXX

LockScreenTime

integer

No

Lock screen time in seconds for inactivity-based lock screen. Not supported for non-Active Directory desktops.

1800

AppointmentTimer

integer

No

Timestamp for a one-time scheduled task. The task runs at the specified time.

1764660600967

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response

RequestId

string

Request ID.

EE9472BC-0B5D-5458-85CD-C52BDD\*\*\*\*\*\*

GroupId

string

Configuration group ID.

ccg-0ctwi5zbswtql\*\*\*\*

Message

string

Result message.

无

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EE9472BC-0B5D-5458-85CD-C52BDD******",
  "GroupId": "ccg-0ctwi5zbswtql****",
  "Message": "无"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

TestCode%sTestCode%sTestCode%s

TestCodeMsg.%s,TestCodeMsg.%s.TestCodeMsg,%s.

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateConfigGroup#workbench-doc-change-demo) for a complete list.
