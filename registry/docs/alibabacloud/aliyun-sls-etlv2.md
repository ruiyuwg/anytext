ALIYUN::SLS::EtlV2 is used to create a new version of data transformation task.

## Syntax

```
{
  "Type": "ALIYUN::SLS::EtlV2",
  "Properties": {
    "Configuration": Map,
    "DisplayName": String,
    "Name": String,
    "Project": String,
    "Description": String
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

Configuration

Map

Yes

No

The configurations of the task.

For more information, see [Configuration properties](#9c7bfd5417xm4).

DisplayName

String

Yes

No

The display name of the task.

None.

Name

String

Yes

No

The name of the task.

None.

Project

String

Yes

No

The name of the destination Log Service project of the task.

None.

Description

String

No

No

The description of the task.

None.

## Configuration syntax

```
"Configuration": {
  "Script": String,
  "Sinks": List,
  "Parameters": Map,
  "ToTime": Integer,
  "Logstore": String,
  "Lang": String,
  "FromTime": Integer,
  "RoleArn": String
}
```

## Configuration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Logstore

String

Yes

No

The source Logstore of the task.

None.

RoleArn

String

Yes

No

The Alibaba Cloud Resource Name (ARN) of the role that the user must assume by using Security Token Service (STS) to access the destination Logstore of the task.

None.

Script

String

Yes

No

The syntax of the task.

None.

Sinks

List

Yes

No

The storage destination configurations of the task.

Storage destinations include Log Service projects and Logstores. For more information, see [Sinks properties](#8b0b13c756c91).

FromTime

Integer

No

No

The start time of the task.

None.

Lang

String

No

No

The language type of the task.

**Important**

When SPL type is specified, a new version of data transformation is created. Otherwise, an old version of data transformation is created.

Parameters

Map

No

No

The configurations of advanced parameters of the task.

None.

ToTime

Integer

No

No

The end time of the task.

None.

## Sinks syntax

```
"Sinks": [
  {
    "Datasets": List,
    "Project": String,
    "Endpoint": String,
    "Logstore": String,
    "RoleArn": String,
    "Name": String
  }
]
```

## Sinks properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Logstore

String

Yes

No

The destination Logstore of the task.

None.

Name

String

Yes

No

The storage destination name of the task.

None.

Project

String

Yes

No

The destination Log Service project of the task.

None.

RoleArn

String

Yes

No

The Alibaba Cloud Resource Name (ARN) of the role that the user must assume by using Security Token Service (STS) to access the destination Logstore of the task.

None.

Datasets

List

No

No

The result datasets.

Supports up to 50 result datasets.

Endpoint

String

No

No

The endpoint of the server to which the destination Log Service project of the task belongs.

None.

## Return values

Fn::GetAtt

Name: the name of the ETL task.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Project:
    Type: String
    Description:
      en: The name of the project.
    Required: true
  Configuration:
    AssociationPropertyMetadata:
      Parameters:
        Script:
          Type: String
          Description:
            en: The script of the etl job.
          Required: true
        Sinks:
          AssociationPropertyMetadata:
            Parameter:
              AssociationPropertyMetadata:
                Parameters:
                  Datasets:
                    AssociationPropertyMetadata:
                      Parameter:
                        Type: String
                        Required: false
                    AssociationProperty: List[Parameter]
                    Type: Json
                    Description:
                      en: The processing result outputs the target list.
                    Required: false
                    MinLength: 1
                    MaxLength: 50
                  Project:
                    Type: String
                    Description:
                      en: The name of output target project.
                    Required: true
                  Endpoint:
                    Type: String
                    Description:
                      en: The endpoint of the region where the target Project resides.
                    Required: false
                  Logstore:
                    Type: String
                    Description:
                      en: Target Logstore name.
                    Required: true
                  RoleArn:
                    Type: String
                    Description:
                      en: The role ARN authorized to write the target Logstore.
                    Required: true
                  Name:
                    Type: String
                    Description:
                      en: Output target name.
                    Required: true
              Type: Json
              Required: false
          AssociationProperty: List[Parameter]
          Type: Json
          Description:
            en: The processing result outputs the target list.
          Required: true
          MinLength: 1
          MaxLength: 50
        Parameters:
          Type: Json
          Description:
            en: The parameters of the etl job.
          Required: false
        ToTime:
          Type: Number
          Description:
            en: Deadline of processing job, the default value is 0, which means that it will continue to consume until it is manually stopped.
          Required: false
          Default: 0
        Logstore:
          Type: String
          Description:
            en: Source Logstore name.
          Required: true
        Lang:
          Type: String
          Description:
            en: The language of the etl job.
          Required: false
        FromTime:
          Type: Number
          Description:
            en: The start time of the processing job, the default starts from the current time.
          Required: false
        RoleArn:
          Type: String
          Description:
            en: The role ARN authorized to read the source Logstore.
          Required: true
    Type: Json
    Description:
      en: The configuration of the etl job.
    Required: true
  DisplayName:
    Type: String
    Description:
      en: The display name of the etl job.
    Required: true
  Name:
    Type: String
    Description:
      en: The name of the etl job.
    Required: true
Resources:
  EtlV2:
    Type: ALIYUN::SLS::EtlV2
    Properties:
      Project:
        Ref: Project
      Configuration:
        Ref: Configuration
      DisplayName:
        Ref: DisplayName
      Name:
        Ref: Name
Outputs:
  Name:
    Description: ETL name.
    Value:
      Fn::GetAtt:
        - EtlV2
        - Name
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Project": {
      "Type": "String",
      "Description": {
        "en": "The name of the project."
      },
      "Required": true
    },
    "Configuration": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Script": {
            "Type": "String",
            "Description": {
              "en": "The script of the etl job."
            },
            "Required": true
          },
          "Sinks": {
            "AssociationPropertyMetadata": {
              "Parameter": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "Datasets": {
                      "AssociationPropertyMetadata": {
                        "Parameter": {
                          "Type": "String",
                          "Required": false
                        }
                      },
                      "AssociationProperty": "List[Parameter]",
                      "Type": "Json",
                      "Description": {
                        "en": "The processing result outputs the target list."
                      },
                      "Required": false,
                      "MinLength": 1,
                      "MaxLength": 50
                    },
                    "Project": {
                      "Type": "String",
                      "Description": {
                        "en": "The name of output target project."
                      },
                      "Required": true
                    },
                    "Endpoint": {
                      "Type": "String",
                      "Description": {
                        "en": "The endpoint of the region where the target Project resides."
                      },
                      "Required": false
                    },
                    "Logstore": {
                      "Type": "String",
                      "Description": {
                        "en": "Target Logstore name."
                      },
                      "Required": true
                    },
                    "RoleArn": {
                      "Type": "String",
                      "Description": {
                        "en": "The role ARN authorized to write the target Logstore."
                      },
                      "Required": true
                    },
                    "Name": {
                      "Type": "String",
                      "Description": {
                        "en": "Output target name."
                      },
                      "Required": true
                    }
                  }
                },
                "Type": "Json",
                "Required": false
              }
            },
            "AssociationProperty": "List[Parameter]",
            "Type": "Json",
            "Description": {
              "en": "The processing result outputs the target list."
            },
            "Required": true,
            "MinLength": 1,
            "MaxLength": 50
          },
          "Parameters": {
            "Type": "Json",
            "Description": {
              "en": "The parameters of the etl job."
            },
            "Required": false
          },
          "ToTime": {
            "Type": "Number",
            "Description": {
              "en": "Deadline of processing job, the default value is 0, which means that it will continue to consume until it is manually stopped."
            },
            "Required": false,
            "Default": 0
          },
          "Logstore": {
            "Type": "String",
            "Description": {
              "en": "Source Logstore name."
            },
            "Required": true
          },
          "Lang": {
            "Type": "String",
            "Description": {
              "en": "The language of the etl job."
            },
            "Required": false
          },
          "FromTime": {
            "Type": "Number",
            "Description": {
              "en": "The start time of the processing job, the default starts from the current time."
            },
            "Required": false
          },
          "RoleArn": {
            "Type": "String",
            "Description": {
              "en": "The role ARN authorized to read the source Logstore."
            },
            "Required": true
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "The configuration of the etl job."
      },
      "Required": true
    },
    "DisplayName": {
      "Type": "String",
      "Description": {
        "en": "The display name of the etl job."
      },
      "Required": true
    },
    "Name": {
      "Type": "String",
      "Description": {
        "en": "The name of the etl job."
      },
      "Required": true
    }
  },
  "Resources": {
    "EtlV2": {
      "Type": "ALIYUN::SLS::EtlV2",
      "Properties": {
        "Project": {
          "Ref": "Project"
        },
        "Configuration": {
          "Ref": "Configuration"
        },
        "DisplayName": {
          "Ref": "DisplayName"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "Name": {
      "Description": "ETL name.",
      "Value": {
        "Fn::GetAtt": [
          "EtlV2",
          "Name"
        ]
      }
    }
  }
}
                        
```
