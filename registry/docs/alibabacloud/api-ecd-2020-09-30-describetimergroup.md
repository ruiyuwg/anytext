Queries the details of a specified configuration group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeTimerGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeTimerGroup)

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

Region ID. This operation is not region-specific. Set this parameter to `cn-shanghai`.

**Valid values:**

-   cn-shanghai :
    
    cn-shanghai
    

cn-shanghai

GroupId

string

Yes

Timer group ID.

cg-hs3i1w39o68ma\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

Request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

Data

object

Timer group information.

GroupId

string

Timer group ID.

cg-75aazkg2tnqb2\*\*\*\*\*

Name

string

Timer group name.

定时任务

Description

string

Timer group description.

定时任务

Type

string

Timer group type.

**Valid values:**

-   Timer :
    
    Scheduled task
    

Timer

ProductType

string

Product type used by the timer group.

**Valid values:**

-   CLOUD\_DESKTOP :
    
    Cloud computer
    

CLOUD\_DESKTOP

ConfigTimers

array<object>

Configuration for scheduled tasks, listed as an array.

array<object>

Configuration for a scheduled task.

TimerType

string

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

Cron expression for the scheduled task.

0 0 16 ? \* 1,2,3,4,5,6,7

Interval

integer

Time interval in minutes.

10

Enforce

boolean

Force execution. If true, ignore desktop and connection status checks and run the scheduled task.

false

ResetType

string

Reset type for reset scheduled tasks.

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

Let end users configure scheduled tasks.

true

OperationType

string

Operation type for disconnect scheduled tasks.

**Valid values:**

-   Hibernate :
    
    Hibernate
    
-   Shutdown :
    
    Shut down
    

Shutdown

TriggerType

string

Trigger configuration type for inactivity-based scheduled tasks.

**Valid values:**

-   Advanced :
    
    Smart detection
    
-   Standard :
    
    Standard detection
    

Standard

ProcessWhitelist

array

Process whitelist for smart detection of inactivity-based scheduled tasks. If any process on this list is running, the inactivity-based scheduled task does not run.

string

Process name.

chrome

NotificationTime

integer

SegmentTimers

array<object>

object

StartCronExpression

string

EndCronExpression

string

OperationType

string

Interval

integer

TriggerType

string

ProcessWhitelist

array

string

NotificationTime

integer

TimerOrder

integer

Timezone

string

Enforce

boolean

ResetType

string

ImageId

string

Image ID for image-change scheduled tasks.

m-5b0vjqbiqu010XXXXXX

LockScreenTime

integer

Lock screen time for inactivity-based lock screen. Not supported for non-Active Directory desktops.

1800

AppointmentTimer

integer

Executes scheduled tasks at a specific time, ensuring they run as scheduled once the time is configured.

1764660600967

BindCount

integer

Number of resources bound to the timer group.

50

Status

string

Timer group status.

**Valid values:**

-   AVAILABLE :
    
    Active
    
-   UNAVAILABLE :
    
    Deleted
    
-   DELETING :
    
    Deleting
    
-   UPDATING :
    
    Updating
    

AVAILABLE

BindCountMap

object

Resource binding count information.

integer

Number of bound resources.

10

IsBind

boolean

Used for system scheduled task checks. Binding and unbinding are not supported for current scheduled tasks.

IsUpdate

boolean

Used for system scheduled task checks. Updating is not supported for current scheduled tasks.

InnerTimerName

string

Internal code for frontend display of system scheduled task names.

INNER\_TIMER\_10\_MINUTES\_HIBERNATE\_NO\_UPDATE

InnerTimerDesc

string

Internal code for frontend display of system scheduled task descriptions.

INNER\_TIMER\_10\_MINUTES\_HIBERNATE\_NO\_UPDATE\_DESC

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "Data": {
    "GroupId": "cg-75aazkg2tnqb2*****",
    "Name": "定时任务",
    "Description": "定时任务",
    "Type": "Timer",
    "ProductType": "CLOUD_DESKTOP",
    "ConfigTimers": [
      {
        "TimerType": "TimerBoot",
        "CronExpression": "0 0 16 ? * 1,2,3,4,5,6,7\n",
        "Interval": 10,
        "Enforce": false,
        "ResetType": "RESET_TYPE_SYSTEM",
        "AllowClientSetting": true,
        "OperationType": "Shutdown",
        "TriggerType": "Standard",
        "ProcessWhitelist": [
          "chrome"
        ],
        "NotificationTime": 0,
        "SegmentTimers": [
          {
            "StartCronExpression": "",
            "EndCronExpression": "",
            "OperationType": "",
            "Interval": 0,
            "TriggerType": "",
            "ProcessWhitelist": [
              ""
            ],
            "NotificationTime": 0,
            "TimerOrder": 0,
            "Timezone": "",
            "Enforce": false,
            "ResetType": "",
            "ImageId": "m-5b0vjqbiqu010XXXXXX",
            "LockScreenTime": 1800,
            "AppointmentTimer": 1764660600967
          }
        ]
      }
    ],
    "BindCount": 50,
    "Status": "AVAILABLE",
    "BindCountMap": {
      "key": 10
    },
    "IsBind": false,
    "IsUpdate": false,
    "InnerTimerName": "INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE",
    "InnerTimerDesc": "INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeTimerGroup#workbench-doc-change-demo) for a complete list.
