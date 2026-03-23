DATASOURCE::SAE::Applications is used to query applications.

## Syntax

```
{
  "Type": "DATASOURCE::SAE::Applications",
  "Properties": {
    "NamespaceId": String,
    "FieldValue": String,
    "AppName": String,
    "FieldType": String,
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

NamespaceId

String

No

Yes

The namespace ID.

None.

FieldValue

String

No

Yes

The condition that is used to filter applications. You can search for applications by application name, application ID, IP address of the associated Server Load Balancer (SLB) instance, or IP address of the application instance.

None.

AppName

String

No

Yes

The application name.

None.

FieldType

String

No

Yes

The dimension based on which applications are filtered.

Valid values:

-   appName: application name.
    
-   appIds: application ID.
    
-   slbIps: IP address of the SLB instance.
    
-   instanceIps: IP address of the instance.
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Applications: details of the applications.
    
-   ApplicationIds: the IDs of the applications.
    

**Property**

**Type**

**Description**

**Constraint**

ApplicationIds

List

The IDs of the applications.

None.

Applications

List

Details of the applications.

None.

AppId

String

The application ID.

None.

AppName

String

The application name.

None.

AppDescription

String

The description of the application.

None.

ScaleRuleEnabled

Boolean

Indicates whether auto scaling is enabled.

Valid values:

-   true
    
-   false
    

Instances

Number

The number of application instances.

None.

RunningInstances

Number

The number of application instances that are running.

None.

AppDeletingStatus

Boolean

Indicates whether the application is being deleted.

Valid values:

-   true
    
-   false
    

RegionId

String

The region ID of the application.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AppName": {
      "Type": "String",
      "Description": "The name of application."
    }
  },
  "Resources": {
    "Applications": {
      "Type": "DATASOURCE::SAE::Applications",
      "Properties": {
        "AppName": {
          "Ref": "AppName"
        }
      }
    }
  },
  "Outputs": {
    "Applications": {
      "Description": "The list of applications.",
      "Value": {
        "Fn::GetAtt": [
          "Applications",
          "Applications"
        ]
      }
    },
    "ApplicationIds": {
      "Description": "The list of application IDs.",
      "Value": {
        "Fn::GetAtt": [
          "Applications",
          "ApplicationIds"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AppName:
    Type: String
    Description: The name of application.
Resources:
  Applications:
    Type: DATASOURCE::SAE::Applications
    Properties:
      AppName:
        Ref: AppName
Outputs:
  Applications:
    Description: The list of applications.
    Value:
      Fn::GetAtt:
        - Applications
        - Applications
  ApplicationIds:
    Description: The list of application IDs.
    Value:
      Fn::GetAtt:
        - Applications
        - ApplicationIds
```
