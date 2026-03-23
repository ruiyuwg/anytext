ALIYUN::ESS::ScheduledTask is used to create a scheduled task by specifying properties.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ScheduledTask",
  "Properties": {
    "TaskEnabled": Boolean,
    "Description": String,
    "ScheduledTaskName": String,
    "LaunchExpirationTime": Integer,
    "LaunchTime": String,
    "RecurrenceEndTime": String,
    "RecurrenceType": String,
    "RecurrenceValue": String,
    "ScheduledAction": String,
    "MaxValue": Integer,
    "MinValue": Integer,
    "DesiredCapacity": Integer,
    "ScalingGroupId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

TaskEnabled

Boolean

No

Yes

Specifies whether to enable the scheduled task.

Valid values:

-   true (default)
    
-   false
    

Description

String

No

Yes

The description of the scheduled task.

The description must be 2 to 200 characters in length.

ScheduledTaskName

String

No

Yes

The display name of the scheduled task.

The display name must be 2 to 40 characters in length, and can contain digits, letters, underscores (\_), hyphens (-), and periods (.). It must start with a digit or letter.

The display name must be unique within an account in a region.

If you do not specify this property, the default value is the value of ScheduledScalingTaskId.

LaunchExpirationTime

Integer

No

Yes

The period of time during which the system retries the scheduled task if the scheduled task fails to be triggered.

Valid values: 0 to 21600.

Unit: seconds.

Default value: 600.

LaunchTime

String

Yes

Yes

The time at which the scheduled task is triggered.

Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format.

The time must be in UTC.

-   If you specify RecurrenceType, the scheduled task is repeatedly executed at the time that is specified by LaunchTime by default.
    
-   If you do not specify RecurrenceType, the scheduled task is executed only once at the time that is specified by LaunchTime.
    

You cannot specify a point in time that is later than 90 days from the day when the scheduled task is created or modified.

RecurrenceEndTime

String

No

Yes

The end time of the scheduled task that is repeatedly executed.

Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format.

The time must be in UTC.

You cannot specify a point in time that is later than 90 days from the day when the scheduled task is created or modified.

You must specify the following properties in a request: RecurrenceType, RecurrenceValue, and RecurrenceEndTime.

RecurrenceType

String

No

Yes

The interval at which the scheduled task is repeatedly executed.

Valid values:

-   Daily: The scheduled task is repeatedly executed every specified number of days.
    
-   Weekly: The scheduled task is repeatedly executed on the specified days of each week.
    
-   Monthly: The scheduled task is repeatedly executed on the specified days of each month.
    
-   Cron: The scheduled task is repeatedly executed based on the specified CRON expression.
    

You must specify the following properties in a request: RecurrenceType, RecurrenceValue, and RecurrenceEndTime.

RecurrenceValue

String

No

Yes

The recurrence value of the scheduled task that is repeatedly executed.

Valid values:

-   If you set RecurrenceType to Daily, you must set RecurrenceValue to a value that ranges from 1 to 31.
    
-   If you set RecurrenceType to Weekly, you must set RecurrenceValue to one or more values that range from 0 to 6. An integer in the range from 0 to 6 separately specifies the day of a week from Sunday to Saturday. Separate multiple values with commas (,)
    
-   If you set RecurrenceType to Monthly, you must set RecurrenceValue to two values in the A-B format. A and B range from 1 to 31. B must be greater than or equal to A.
    
-   If you set RecurrenceType to Cron, you must set RecurrenceValue to a CRON expression. The CRON expression indicates the UTC time and supports the following fields: minute, hour, day of a month, month, and day of a week. The CRON expression supports the L and W letters and the following special characters: , ? - \* # /
    

You must specify the following properties in a request: RecurrenceType, RecurrenceValue, and RecurrenceEndTime.

ScheduledAction

String

No

Yes

The operation that is performed when the scheduled task is triggered.

The value can be up to 200 characters in length.

Set the value to the unique identifier of the scaling rule.

MaxValue

Integer

No

Yes

The maximum number of instances in the scaling group if you specify ScalingGroupId.

None.

MinValue

Integer

No

Yes

The minimum number of instances in the scaling group if you specify ScalingGroupId.

None.

DesiredCapacity

Integer

No

Yes

The expected number of instances in the scaling group if you specify ScalingGroupId.

You must specify `DesiredCapacity` when you create a scaling group.

ScalingGroupId

String

No

Yes

The ID of the scaling group whose number of instances must be changed when the scheduled task is triggered.

If you specify `ScalingGroupId`, the scheduled task performs scaling based on the specified number of instances in the scaling group. In this case, you must specify at least one of the following properties: `MinValue`, `MaxValue`, and `DesiredCapacity`.

**Note**

You cannot specify both `ScheduledAction` and `ScalingGroupId`.

## Return values

Fn::GetAtt

ScheduledTaskId: the ID of the scheduled task. The ID is globally unique and is generated by the system.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      ScheduledTask:
        Type: ALIYUN::ESS::ScheduledTask
        Properties:
          TaskEnabled: 'true'
          Description: scheduledtask
          ScheduledTaskName: task1
          LaunchTime: 2014-08-17T16:52Z
          RecurrenceEndTime: 2014-08-17T16:55Z
          RecurrenceType: Daily
          RecurrenceValue: '1'
          ScheduledAction: ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6piOk
    Outputs:
      ScheduledTaskId:
        Value:
          FN::GetAtt:
            - ScheduledTask
            - ScheduledTaskId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "ScheduledTask": {
          "Type": "ALIYUN::ESS::ScheduledTask",
          "Properties": {
            "TaskEnabled": "true",
            "Description": "scheduledtask",
            "ScheduledTaskName": "task1",
            "LaunchTime": "2014-08-17T16:52Z",
            "RecurrenceEndTime": "2014-08-17T16:55Z",
            "RecurrenceType": "Daily",
            "RecurrenceValue": "1",
            "ScheduledAction": "ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6piOk"
          }
        }
      },
      "Outputs": {
        "ScheduledTaskId": {
          "Value": {
            "FN::GetAtt": [
              "ScheduledTask",
              "ScheduledTaskId"
            ]
          }
        }
      }
    }
    ```
