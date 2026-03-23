DATASOURCE::FC::Triggers is used to query triggers.

## Syntax

```
{
  "Type": "DATASOURCE::FC::Triggers",
  "Properties": {
    "FunctionName": String,
    "ServiceName": String,
    "Prefix": String,
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

FunctionName

String

Yes

Yes

The function name.

None.

ServiceName

String

Yes

Yes

The service name.

None.

Prefix

String

No

Yes

The prefix of the resource name.

The resource name must start with the value of this property.

For example, if you set Prefix to a, the names of the returned resources are prefixed with a.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   TriggerNames: the names of the triggers.
    
-   Triggers: details of the triggers.
    

**Property**

**Type**

**Description**

**Constraint**

TriggerNames

List

The names of the triggers.

None.

Triggers

List

Details of the triggers.

None.

TriggerName

String

The trigger name.

None.

TriggerId

String

The trigger ID.

None.

TriggerConfig

String

The configurations of the trigger.

None.

TriggerType

String

The trigger type.

Valid values:

-   `oss`: Object Storage Service (OSS) event trigger.
    
    For more information, see [Overview of OSS event triggers](/help/en/functioncompute/fc-2-0/user-guide/overview-of-oss-event-triggers#multiTask8408).
    
-   `log`: Simple Log Service (SLS) trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/overview-33#multiTask4600).
    
-   `timer`: timer trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/overview-38#concept-2260014).
    
-   `http`: HTTP trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-36#multiTask12687).
    
-   `tablestore`: Tablestore trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/overview-20#multiTask8694).
    
-   `cdn_events`: Alibaba Cloud CDN (CDN) event trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-27#multiTask6945).
    
-   `mns_topic`: Simple Message Queue (formerly MNS) (SMQ) topic trigger.
    
    For more information, see [Overview](/help/en/functioncompute/fc-2-0/overview-18#concept-2259991).
    

Description

String

The description of the trigger.

None.

InvocationRole

String

The Resource Access Management (RAM) role that is used by the event source such as OSS to invoke the function.

For more information, see [Trigger overview](/help/en/functioncompute/fc-2-0/user-guide/trigger-overview#concept-2259970).

CreatedTime

String

The time when the trigger was created.

None.

LastModifiedTime

String

The most recent time when the trigger was modified.

None.

Qualifier

String

The version of the service.

For more information, see [Manage versions](/help/en/functioncompute/fc-2-0/user-guide/manage-versions#task-2259910).

SourceArn

String

The Alibaba Cloud Resource Name (ARN) of the event source for the trigger.

None.

DomainName

String

The domain name.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FunctionName": {
      "Type": "String",
      "Description": "Function name."
    },
    "ServiceName": {
      "Type": "String",
      "Description": "Service name."
    }
  },
  "Resources": {
    "Triggers": {
      "Type": "DATASOURCE::FC::Triggers",
      "Properties": {
        "FunctionName": {
          "Ref": "FunctionName"
        },
        "ServiceName": {
          "Ref": "ServiceName"
        }
      }
    }
  },
  "Outputs": {
    "TriggerNames": {
      "Description": "The list of trigger names.",
      "Value": {
        "Fn::GetAtt": [
          "Triggers",
          "TriggerNames"
        ]
      }
    },
    "Triggers": {
      "Description": "The list of triggers.",
      "Value": {
        "Fn::GetAtt": [
          "Triggers",
          "Triggers"
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
  FunctionName:
    Type: String
    Description: Function name.
  ServiceName:
    Type: String
    Description: Service name.
Resources:
  Triggers:
    Type: DATASOURCE::FC::Triggers
    Properties:
      FunctionName:
        Ref: FunctionName
      ServiceName:
        Ref: ServiceName
Outputs:
  TriggerNames:
    Description: The list of trigger names.
    Value:
      Fn::GetAtt:
        - Triggers
        - TriggerNames
  Triggers:
    Description: The list of triggers.
    Value:
      Fn::GetAtt:
        - Triggers
        - Triggers
                    
```
