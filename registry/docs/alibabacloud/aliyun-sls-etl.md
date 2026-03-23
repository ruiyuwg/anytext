ALIYUN::SLS::Etl is used to create a data transformation task.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Etl",
  "Properties": {
    "Description": String,
    "Configuration": Map,
    "ProjectName": String,
    "Schedule": Map,
    "DisplayName": String,
    "Name": String
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

No

The description of the task.

None

Configuration

Map

Yes

No

The configurations of the task.

For more information, see [Configuration properties](#section-ksg-wmp-lnm).

ProjectName

String

Yes

No

The name of the destination Log Service project of the task.

None

Schedule

Map

Yes

No

The scheduling policy of the task.

For more information, see [Schedule properties](#section-kxq-s74-ep3).

DisplayName

String

Yes

No

The display name of the task.

None

Name

String

Yes

No

The name of the task.

None

## Configuration syntax

```
"Configuration": {
  "Script": String,
  "Sinks": List,
  "Parameters": Map,
  "ToTime": Number,
  "Version": Number,
  "Logstore": String,
  "FromTime": Number,
  "RoleArn": String
}
```

## Configuration properties

Property

Type

Required

Editable

Description

Constraint

Script

String

Yes

No

The syntax of the task.

None

Sinks

List

Yes

No

The storage destination configurations of the task.

Storage destinations include Log Service projects and Logstores.

For more information, see [Sinks properties](#section-8sd-ct0-9n0).

Parameters

Map

No

No

The configurations of advanced parameters of the task.

None

ToTime

Number

No

No

The time when the task ends.

Default value: None.

Version

Number

No

No

The script version of the task.

None

Logstore

String

Yes

No

The source Logstore of the task.

None

FromTime

Number

No

No

The time when the task starts.

The default start time is the current time.

RoleArn

String

No

No

The Alibaba Cloud Resource Name (ARN) of the role that the user must assume by using Security Token Service (STS) to access the destination Logstore of the task.

None

## Sinks syntax

```
"Sinks": [
  {
    "Project": String,
    "Type": String,
    "Endpoint": String,
    "Logstore": String,
    "RoleArn": String,
    "Name": String
  }
]
```

## Sinks properties

Property

Type

Required

Editable

Description

Constraint

Project

String

Yes

No

The destination Log Service project of the task.

None

Type

String

No

No

The storage destination type of the task.

Storage destinations include Log Service projects and Logstores.

Default value: AliyunLOG.

Endpoint

String

No

No

The endpoint of the server to which the destination Log Service project of the task belongs.

None

Logstore

String

Yes

No

The destination Logstore of the task.

None

RoleArn

String

No

No

The ARN of the role that the user must assume by using STS to access the destination Logstore of the task.

None

Name

String

Yes

No

The storage destination name of the task.

Storage destinations include Log Service projects and Logstores.

## Schedule syntax

```
"Schedule": {
  "Type": String
}
```

## Schedule properties

Property

Type

Required

Editable

Description

Constraint

Type

String

Yes

No

The scheduling policy type of the task.

Set the value to Resident.

## Response parameters

Fn::GetAtt

Name: the name of the task.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Etl:
        Type: ALIYUN::SLS::Etl
        Properties:
          Configuration:
            Logstore: actiontrail_log
            Parameters:
              test_key: test value
            RoleArn: acs:ram::17545809XXXXXXX:role/aliyunlogetlrole
            Script: |-
              e_json("event")
              e_drop_fields("event")
            Sinks:
              - Name: drds_service
                Project: test-project
                Logstore: drds_service_audit
                RoleArn: acs:ram::17545809XXXXXXX:role/aliyunlogetlrole
                Endpoint: cn-beijing-intranet.log.aliyuncs.com
                Type: AliyunLOG
              - Name: rds_service
                Project: test-project
                Logstore: rds_service_audit
                RoleArn: acs:ram::17545809XXXXXXX:role/aliyunlogetlrole
            Version: 2
          ProjectName: sls-audit
          Schedule:
            Type: Resident
          DisplayName: test_etl
          Name: test_etl_api
    Outputs:
      Name:
        Description: ETL name.
        Value:
          Fn::GetAtt:
            - Etl
            - Name
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Etl": {
          "Type": "ALIYUN::SLS::Etl",
          "Properties": {
            "Configuration": {
              "Logstore": "actiontrail_log",
              "Parameters": {
                "test_key": "test value"
              },
              "RoleArn": "acs:ram::17545809XXXXXXX:role/aliyunlogetlrole",
              "Script": "e_json(\"event\")\ne_drop_fields(\"event\")",
              "Sinks": [
                {
                  "Name": "drds_service",
                  "Project": "test-project",
                  "Logstore": "drds_service_audit",
                  "RoleArn": "acs:ram::17545809XXXXXXX:role/aliyunlogetlrole",
                  "Endpoint": "cn-beijing-intranet.log.aliyuncs.com",
                  "Type": "AliyunLOG"
                },
                {
                  "Name": "rds_service",
                  "Project": "test-project",
                  "Logstore": "rds_service_audit",
                  "RoleArn": "acs:ram::17545809XXXXXXX:role/aliyunlogetlrole"
                }
              ],
              "Version": 2
            },
            "ProjectName": "sls-audit",
            "Schedule": {
              "Type": "Resident"
            },
            "DisplayName": "test_etl",
            "Name": "test_etl_api"
          }
        }
      },
      "Outputs": {
        "Name": {
          "Description": "ETL name.",
          "Value": {
            "Fn::GetAtt": [
              "Etl",
              "Name"
            ]
          }
        }
      }
    }
    ```
