ALIYUN::SLS::ServiceLog is used to enable the service log feature.

## Syntax

```
{
  "Type": "ALIYUN::SLS::ServiceLog",
  "Properties": {
    "ServiceLogTypes": List,
    "ProjectName": String,
    "LogStorageLocation": String
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

ServiceLogTypes

List

Yes

No

The type of the service log.  

Valid values:

-   DetailedLogs: If you use this value and specify a project, the system automatically creates a Logstore and dashboard in the project. You are charged for Logstores.
    
-   ImportantLogs: If you use this value and specify a project, the system automatically creates a Logstore to store important logs, such as consumption delay logs of consumer groups and Logtail heartbeat logs. Logstores are free of charge.  
    
-   JobOperationalLogs: If you use this value and specify a project, the system automatically creates a Logstore named internal-diagnostic\_log in the project to record and store operational logs of data import jobs, Scheduled SQL jobs, and data shipping jobs. Logstores are free of charge.  
    

ProjectName

String

Yes

No

The name of the project for which you want to enable the service log feature.   

If the service log feature is already enabled for a project, you can specify the project name to enable the feature again.

LogStorageLocation

String

Yes

No

The location of the service log.

None.

## Return values

Fn::GetAtt

ProjectName: the project name.  

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      LogStorageLocation:
        Description:
          en: The location of the service log.
        Required: true
        Type: String
      ProjectName:
        Description:
          en: The name of the project that needs to be activated. If it has been activated,
            it will be reactivated again.
        Required: true
        Type: String
      ServiceLogTypes:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AllowedValues:
            - DetailedLogs
            - ImportantLogs
            - JobOperationalLogs
            Description:
              en: "Type of service log that needs to be activated. Allowed values: \n\
                DetailedLogs: If you turn on the Detailed Logs switch and select a project,\
                \ a Logstore and a dashboard are automatically created in the project.\
                \ You are charged for using the Logstore.\nImportantLogs: If you turn\
                \ on Important Logs and select a project, a Logstore is automatically\
                \ created in the project to store the logs, such as consumption delay\
                \ logs of consumer groups and Logtail heartbeat logs. The Logstore is\
                \ provided free of charge. \nJobOperationalLogs: A Logstore named internal-diagnostic_log\
                \ is created in the specified project to store job operational logs. The\
                \ operational logs of data import jobs, Scheduled SQL jobs, and data shipping\
                \ jobs are recorded. The Logstore is provided free of charge."
            Required: true
            Type: String
        Description:
          en: 'Types of service log that needs to be activated. '
        MaxLength: 3
        MinLength: 1
        Required: true
        Type: Json
    Resources:
      ServiceLog:
        Properties:
          LogStorageLocation:
            Ref: LogStorageLocation
          ProjectName:
            Ref: ProjectName
          ServiceLogTypes:
            Ref: ServiceLogTypes
        Type: ALIYUN::SLS::ServiceLog
    Outputs:
      ProjectName:
        Description: The name of the project that needs to be activated.
        Value:
          Fn::GetAtt:
          - ServiceLog
          - ProjectName
                            
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ServiceLogTypes": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "Type": "String",
              "Description": {
                "en": "Type of service log that needs to be activated. Allowed values: \nDetailedLogs: If you turn on the Detailed Logs switch and select a project, a Logstore and a dashboard are automatically created in the project. You are charged for using the Logstore.\nImportantLogs: If you turn on Important Logs and select a project, a Logstore is automatically created in the project to store the logs, such as consumption delay logs of consumer groups and Logtail heartbeat logs. The Logstore is provided free of charge. \nJobOperationalLogs: A Logstore named internal-diagnostic_log is created in the specified project to store job operational logs. The operational logs of data import jobs, Scheduled SQL jobs, and data shipping jobs are recorded. The Logstore is provided free of charge."
              },
              "AllowedValues": [
                "DetailedLogs",
                "ImportantLogs",
                "JobOperationalLogs"
              ],
              "Required": true
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "Types of service log that needs to be activated. "
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 3
        },
        "ProjectName": {
          "Type": "String",
          "Description": {
            "en": "The name of the project that needs to be activated. If it has been activated, it will be reactivated again."
          },
          "Required": true
        },
        "LogStorageLocation": {
          "Type": "String",
          "Description": {
            "en": "The location of the service log."
          },
          "Required": true
        }
      },
      "Resources": {
        "ServiceLog": {
          "Type": "ALIYUN::SLS::ServiceLog",
          "Properties": {
            "ServiceLogTypes": {
              "Ref": "ServiceLogTypes"
            },
            "ProjectName": {
              "Ref": "ProjectName"
            },
            "LogStorageLocation": {
              "Ref": "LogStorageLocation"
            }
          }
        }
      },
      "Outputs": {
        "ProjectName": {
          "Description": "The name of the project that needs to be activated.",
          "Value": {
            "Fn::GetAtt": [
              "ServiceLog",
              "ProjectName"
            ]
          }
        }
      }
    }
                            
    ```
