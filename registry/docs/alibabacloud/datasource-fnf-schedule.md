DATASOURCE::FNF::Schedule is used to query the information about a time-based schedule.

## Syntax

```
{
  "Type": "DATASOURCE::FNF::Schedule",
  "Properties": {
    "FlowName": String,
    "ScheduleName": String,
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

The name of the flow that is associated with the time-based schedule.

The name must be unique in a region and cannot be modified after the flow is created. The name must meet the following requirements:

-   The name can contain letters, digits, underscores (\_), and hyphens (-).
    
-   It must start with a letter or an underscore (\_).
    
-   It is case-sensitive.
    
-   It must be 1 to 128 characters in length.
    

ScheduleName

String

Yes

Yes

The name of the time-based schedule.

None.

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

-   Description: the description of the time-based schedule.
    
-   CreateTime: the time when the time-based schedule was created.
    
-   LastModifiedTime: the time when the time-based schedule was last modified.
    
-   Payload: the trigger message of the time-based schedule.
    
-   CronExpression: the cron expression.
    
-   ScheduleId: the ID of the time-based schedule.
    
-   ScheduleName: the name of the time-based schedule.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  FlowName:
    Type: String
    Description:
      en: |-
        The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
        The name can contain letters, digits, underscores (_), and hyphens (-).
        The name must start with a letter or an underscore (_).
        The name is case-sensitive.
        The name must be 1 to 128 characters in length.
    Required: true
  ScheduleName:
    Type: String
    Description:
      en: |-
        The name of the time-based schedule. The name must meet the following conventions:
        The name can contain letters, digits, underscores (_), and hyphens (-).
        The name must start with a letter or an underscore (_).
        The name is case-sensitive.
        The name must be 1 to 128 characters in length.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::FNF::Schedule
    Properties:
      FlowName:
        Ref: FlowName
      ScheduleName:
        Ref: ScheduleName
Outputs:
  Description:
    Description: The description of the time-based schedule to be created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  CreateTime:
    Description: The time when the time-based schedule was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  LastModifiedTime:
    Description: The time when the time-based schedule was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastModifiedTime
  Payload:
    Description: The trigger message of the time-based schedule to be created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Payload
  CronExpression:
    Description: The CRON expression of the time-based schedule to be created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CronExpression
  ScheduleId:
    Description: The ID of the time-based schedule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScheduleId
  ScheduleName:
    Description: The name of the time-based schedule to be created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScheduleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FlowName": {
      "Type": "String",
      "Description": {
        "en": "The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:\nThe name can contain letters, digits, underscores (_), and hyphens (-).\nThe name must start with a letter or an underscore (_).\nThe name is case-sensitive.\nThe name must be 1 to 128 characters in length."
      },
      "Required": true
    },
    "ScheduleName": {
      "Type": "String",
      "Description": {
        "en": "The name of the time-based schedule. The name must meet the following conventions:\nThe name can contain letters, digits, underscores (_), and hyphens (-).\nThe name must start with a letter or an underscore (_).\nThe name is case-sensitive.\nThe name must be 1 to 128 characters in length."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::FNF::Schedule",
      "Properties": {
        "FlowName": {
          "Ref": "FlowName"
        },
        "ScheduleName": {
          "Ref": "ScheduleName"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the time-based schedule to be created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the time-based schedule was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "LastModifiedTime": {
      "Description": "The time when the time-based schedule was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastModifiedTime"
        ]
      }
    },
    "Payload": {
      "Description": "The trigger message of the time-based schedule to be created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Payload"
        ]
      }
    },
    "CronExpression": {
      "Description": "The CRON expression of the time-based schedule to be created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CronExpression"
        ]
      }
    },
    "ScheduleId": {
      "Description": "The ID of the time-based schedule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScheduleId"
        ]
      }
    },
    "ScheduleName": {
      "Description": "The name of the time-based schedule to be created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScheduleName"
        ]
      }
    }
  }
}
                        
```
