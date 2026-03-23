ALIYUN::SLS::Dashboard is used to create a dashboard.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Dashboard",
  "Properties": {
    "DashboardName": String,
    "Description": String,
    "ProjectName": String,
    "DisplayName": String,
    "Charts": List
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

DashboardName

String

Yes

No

The ID of the dashboard.

The dashboard ID must be unique in a project.

Description

String

No

Yes

The description of the dashboard.

None.

ProjectName

String

Yes

No

The name of the project.

None.

DisplayName

String

No

Yes

The name of the dashboard.

None.

Charts

List

Yes

Yes

The list of charts.

None.

## Return values

Fn::GetAtt

-   DashboardName: the ID of the dashboard.
-   DisplayName: the name of the dashboard.

## Examples

-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "DashboardName": {
          "Type": "String",
          "Description": "Dashboard name."
        },
        "ProjectName": {
          "Type": "String",
          "Description": "Project name:\n1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).\n2. Must start and end with lowercase letters and numbers.\n3. The name length is 3-63 characters.",
          "AllowedPattern": "^[a-zA-Z0-9_-]+$",
          "MinLength": 3,
          "MaxLength": 63
        }
      },
      "Resources": {
        "Dashboard": {
          "Type": "ALIYUN::SLS::Dashboard",
          "Properties": {
            "DashboardName": {
              "Ref": "DashboardName"
            },
            "ProjectName": {
              "Ref": "ProjectName"
            },
            "Charts": [
              {
                "action": {},
                "title": "new_title",
                "type": "map",
                "search": {
                  "logstore": "function-compute",
                  "topic": "new_topic",
                  "query": "* | SELECT type, COUNT(content) as ct_content GROUP BY type",
                  "start": "-86400s",
                  "end": "now"
                },
                "display": {
                  "xAxis": [
                    "type"
                  ],
                  "yAxis": [
                    "ct_content"
                  ],
                  "xPos": 0,
                  "yPos": 0,
                  "width": 10,
                  "height": 12,
                  "displayName": "test"
                }
              }
            ]
          }
        }
      },
      "Outputs": {
        "DashboardName": {
          "Description": "Dashboard name.",
          "Value": {
            "Fn::GetAtt": [
              "Dashboard",
              "DashboardName"
            ]
          }
        }
      }
    }
    ```
    
-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      DashboardName:
        Type: String
        Description: Dashboard name.
      ProjectName:
        Type: String
        Description: |-
          Project name:
          1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
          2. Must start and end with lowercase letters and numbers.
          3. The name length is 3-63 characters.
        AllowedPattern: ^[a-zA-Z0-9_-]+$
        MinLength: 3
        MaxLength: 63
    Resources:
      Dashboard:
        Type: ALIYUN::SLS::Dashboard
        Properties:
          DashboardName:
            Ref: DashboardName
          ProjectName:
            Ref: ProjectName
          Charts:
            - action: {}
              title: new_title
              type: map
              search:
                logstore: function-compute
                topic: new_topic
                query: '* | SELECT type, COUNT(content) as ct_content GROUP BY type'
                start: '-86400s'
                end: now
              display:
                xAxis:
                  - type
                yAxis:
                  - ct_content
                xPos: 0
                yPos: 0
                width: 10
                height: 12
                displayName: test
    Outputs:
      DashboardName:
        Description: Dashboard name.
        Value:
          Fn::GetAtt:
            - Dashboard
            - DashboardName
                        
    ```
