ALIYUN::SAE::SlbBinding is used to bind an SLB instance to an application.

## Syntax

```
{
  "Type": "ALIYUN::SAE::SlbBinding",
  "Properties": {
    "InternetSlbId": String,
    "AppId": String,
    "Intranet": String,
    "IntranetSlbId": String,
    "Internet": String
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

InternetSlbId

String

No

No

The ID of the Internet SLB instance.

Only non-shared instances are supported.

AppId

String

Yes

No

The ID of the deployed application.

None

Intranet

String

No

No

Bind the private network SLB instance. For example, \[{"port":80,"targetPort":8080,"protocol":"TCP"}\] indicates that port 8080 of the container is used to expose the service through port 80 of the SLB. The protocol is TCP.

None

IntranetSlbId

String

No

No

The ID of the intranet SLB instance.

Only non-shared instances are supported.

Internet

String

No

No

Bind an Internet SLB instance. For example, \[{"port":80,"targetPort":8080,"protocol":"TCP"}\] indicates that port 8080 of the container is used to expose the service through port 80 of the SLB. The protocol is TCP.

None

## Response parameters

Fn::GetAtt

-   AppId: the ID of the application.
-   ChangeOrderId: the ID of the release Form, which is used to query the task execution status.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      SlbInstanceId:
        AssociationProperty: ALIYUN::SLB::Instance::InstanceId
        Type: String
      AppId:
        Type: String
        Description: Successful application deployment target ID
    Resources:
      SlbBinding:
        Type: ALIYUN::SAE::SlbBinding
        Properties:
          AppId:
            Ref: AppId
          InternetSlbId:
            Ref: SlbInstanceId
    Outputs:
      AppId:
        Description: Successful application deployment target ID
        Value:
          Fn::GetAtt:
            - SlbBinding
            - AppId
      ChangeOrderId:
        Description: Return to release a single ID, used to query task execution status.
        Value:
          Fn::GetAtt:
            - SlbBinding
            - ChangeOrderId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "SlbInstanceId":{
          "AssociationProperty":"ALIYUN::SLB::Instance::InstanceId",
          "Type":"String",
        },
        "AppId": {
          "Type": "String",
          "Description": "Successful application deployment target ID"
        }
      },
      "Resources": {
        "SlbBinding": {
          "Type": "ALIYUN::SAE::SlbBinding",
          "Properties": {
            "AppId": {
              "Ref": "AppId"
            },
            "InternetSlbId": {
              "Ref": "SlbInstanceId"
            }
          }
        }
      },
      "Outputs": {
        "AppId": {
          "Description": "Successful application deployment target ID",
          "Value": {
            "Fn::GetAtt": [
              "SlbBinding",
              "AppId"
            ]
          }
        },
        "ChangeOrderId": {
          "Description": "Return to release a single ID, used to query task execution status.",
          "Value": {
            "Fn::GetAtt": [
              "SlbBinding",
              "ChangeOrderId"
            ]
          }
        }
      }
    }
    ```
