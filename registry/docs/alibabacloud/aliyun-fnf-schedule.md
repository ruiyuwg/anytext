ALIYUN::FNF::Schedule is used to create a time-based schedule.

## Syntax

```
{
  "Type": "ALIYUN::FNF::Schedule",
  "Properties": {
    "Description": String,
    "FlowName": String,
    "Enable": Boolean,
    "Payload": String,
    "CronExpression": String,
    "ScheduleName": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

Description

String

No

Yes

The description of the time-based schedule.

None

FlowName

String

Yes

No

The name of the flow that is bound to the time-based schedule.

None

Enable

Boolean

No

Yes

Specifies whether to enable the time-based schedule.

Valid values:

-   true
-   false

Payload

String

No

Yes

The trigger message of the time-based schedule.

The value of this parameter must be in the JSON format. Example: `"{\"key\": \"value\"}"`.

CronExpression

String

Yes

Yes

The cron expression of the time-based schedule.

None

ScheduleName

String

Yes

No

The name of the time-based schedule.

None

## Response parameters

Fn::GetAtt

-   FlowName: the name of the flow that is bound to the time-based schedule.
-   ScheduleId: the ID of the time-based schedule.
-   ScheduleName: the name of the time-based schedule.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Schedule:
        Type: ALIYUN::FNF::Schedule
        Properties:
          FlowName: TestFlow
          Enable: false
          Payload: '{"key": "value"}'
          CronExpression: 0 0 10 1 * ?
          ScheduleName: TestSchedule
    Outputs: {}
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Schedule": {
          "Type": "ALIYUN::FNF::Schedule",
          "Properties": {
            "FlowName": "TestFlow",
            "Enable": false,
            "Payload": "{\"key\": \"value\"}",
            "CronExpression": "0 0 10 1 * ?",
            "ScheduleName": "TestSchedule"
          }
        }
      },
      "Outputs": {
      }
    }
    ```
