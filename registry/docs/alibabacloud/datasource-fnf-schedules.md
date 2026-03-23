DATASOURCE::FNF::Schedules is used to query time-based schedules.

## Syntax

```
{
  "Type": "DATASOURCE::FNF::Schedules",
  "Properties": {
    "FlowName": String,
    "RefreshOptions": String
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

FlowName

String

Yes

Yes

The name of the flow that is associated with the time-based schedules.

The name is unique in a region and cannot be changed after the time-based schedule is created. The name must meet the following requirements:

-   The name can contain letters, digits, underscores (\_), and hyphens (-).
    
-   It must start with a letter or an underscore (\_).
    
-   It is case-sensitive.
    
-   It must be 1 to 128 characters in length.
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Schedules: details of the time-based schedules.
    
-   ScheduleNames: the names of the time-based schedules.
    

**Property**

**Type**

**Description**

**Constraint**

ScheduleNames

List

The names of the time-based schedules.

None.

Schedules

List

Details of the time-based schedules.

None.

Status

Boolean

Indicates whether the time-based schedule is enabled.

Valid values:

-   true
    
-   false
    

ScheduleId

String

The ID of the time-based schedule.

None.

Description

String

The description of the time-based schedule.

None.

Payload

String

The trigger message of the time-based schedule.

None.

CronExpression

String

The CRON expression.

None.

ScheduleName

String

The name of the time-based schedule.

None.

LastModifiedTime

String

The most recent time when the time-based schedule was modified.

None.

CreateTime

String

The time when the time-based schedule was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
Resources:
  ExtensionDataSource:
    Properties:
      FlowName: Test
    Type: DATASOURCE::FNF::Schedules
Outputs:
  ScheduleNames:
    Description: The list of schedule names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ScheduleNames
  Schedules:
    Description: The queried time-based schedules.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Schedules
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::FNF::Schedules",
      "Properties": {
        "FlowName": "Test"
      }
    }
  },
  "Outputs": {
    "Schedules": {
      "Description": "The queried time-based schedules.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Schedules"
        ]
      }
    },
    "ScheduleNames": {
      "Description": "The list of schedule names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScheduleNames"
        ]
      }
    }
  }
}
```
