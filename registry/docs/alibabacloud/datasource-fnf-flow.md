DATASOURCE::FNF::Flow is used to query the information about a flow.

## Syntax

```
{
  "Type": "DATASOURCE::FNF::Flow",
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

The name of the flow.

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

-   FlowId: the unique ID of the flow.
    
-   Type: the type of the flow.
    
-   Description: the description of the flow.
    
-   FlowName: the name of the flow.
    
-   CreateTime: the time when the flow was created.
    
-   Definition: the definition of the flow.
    
-   LastModifiedTime: the time when the flow was last modified.
    
-   RoleArn: the Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is used to execute the flow.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  FlowName:
    Type: String
    Description:
      en: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::FNF::Flow
    Properties:
      FlowName:
        Ref: FlowName
Outputs:
  FlowId:
    Description: The unique ID of the flow.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - FlowId
  Type:
    Description: The type of the flow. Valid values are FDL or DEFAULT.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Type
  Description:
    Description: The description of the flow.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  FlowName:
    Description: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - FlowName
  CreateTime:
    Description: The time when the flow was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  Definition:
    Description: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Definition
  LastModifiedTime:
    Description: The time when the flow was last modified.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastModifiedTime
  RoleArn:
    Description: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RoleArn
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FlowName": {
      "Type": "String",
      "Description": {
        "en": "The name of the flow. The name must be unique within a region for the same Alibaba Cloud account."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::FNF::Flow",
      "Properties": {
        "FlowName": {
          "Ref": "FlowName"
        }
      }
    }
  },
  "Outputs": {
    "FlowId": {
      "Description": "The unique ID of the flow.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "FlowId"
        ]
      }
    },
    "Type": {
      "Description": "The type of the flow. Valid values are FDL or DEFAULT.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Type"
        ]
      }
    },
    "Description": {
      "Description": "The description of the flow.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "FlowName": {
      "Description": "The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "FlowName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the flow was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "Definition": {
      "Description": "The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Definition"
        ]
      }
    },
    "LastModifiedTime": {
      "Description": "The time when the flow was last modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastModifiedTime"
        ]
      }
    },
    "RoleArn": {
      "Description": "The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RoleArn"
        ]
      }
    }
  }
}
                        
```
