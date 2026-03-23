DATASOURCE::FNF::Flows is used to query multiple flows at a time.

## Syntax

```
{
  "Type": "DATASOURCE::FNF::Flows",
  "Properties": {
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

-   FlowNames: the names of the flows.
    
-   Flows: details of the flows.
    

**Property**

**Type**

**Description**

**Constraint**

FlowNames

List

The names of the flows.

None.

Flows

List

Details of the flows.

None.

Definition

String

The definition of the flow.

The definition follows the Flow Definition Language (FDL) syntax.

Description

String

The description of the flow.

None.

FlowName

String

The flow name.

None.

RoleArn

String

The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is used to execute the flow.

None.

FlowId

String

The unique ID of the flow.

None.

LastModifiedTime

String

The most recent time when the flow was modified.

None.

Type

String

The flow type.

None.

CreateTime

String

The time when the flow was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Properties: {}
    Type: DATASOURCE::FNF::Flows
Outputs:
  FlowNames:
    Description: The list of flow names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - FlowNames
  Flows:
    Description: The details about flows.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Flows
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::FNF::Flows",
      "Properties": {}
    }
  },
  "Outputs": {
    "FlowNames": {
      "Description": "The list of flow names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "FlowNames"
        ]
      }
    },
    "Flows": {
      "Description": "The details about flows.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Flows"
        ]
      }
    }
  }
}
```
