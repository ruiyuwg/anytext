DATASOURCE::ROS::StackInstance is used to query the information about a stack instance that is associated with a stack group.

## Syntax

```
{
  "Type": "DATASOURCE::ROS::StackInstance",
  "Properties": {
    "StackInstanceAccountId": String,
    "StackGroupName": String,
    "StackInstanceRegionId": String,
    "OutputOption": String,
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

StackInstanceAccountId

String

Yes

Yes

The ID of the account to which the stack instance belongs.

None.

StackGroupName

String

Yes

Yes

The name of the stack group.

None.

StackInstanceRegionId

String

Yes

Yes

The region ID of the stack instance.

None.

OutputOption

String

No

Yes

Specifies whether to return the outputs of the stack.  

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

-   Status: the state of the stack.
    
-   AccountId: the ID of the account to which the stack belongs.
    
-   StatusReason: the reason for the state.
    
-   ParameterOverrides: the parameters that are used to override specific parameters.
    
-   StackGroupName: the name of the stack group.
    
-   Outputs: the outputs of the stack.
    
-   RdFolderId: the folder ID of the resource directory.
    
-   DriftDetectionTime: the time when the most recent successful drift detection was performed on the stack.
    
-   StackGroupId: the ID of the stack group.
    
-   RegionId: the region ID of the stack.
    
-   StackDriftStatus: the drift status of the stack when the most recent successful drift detection was performed on the stack.
    
-   StackId: the stack ID.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  OutputOption:
    Description:
      en: Whether to return the Outputs parameter resource stack output list.
    Required: false
    Type: String
  StackGroupName:
    Description:
      en: 'Resource stack group name. Names are unique within a single region.

        The length must not exceed 255 characters, must start with a number or an
        English letter, and can contain numbers, English letters, dashes (-) and underscores
        (_)'
    Required: true
    Type: String
  StackInstanceAccountId:
    Description:
      en: "The target account ID to which the resource stack belongs. \nIn the self-service\
        \ management permission mode, the account is an Alibaba Cloud account.\nIn\
        \ service management permission mode, this account is a member account of\
        \ the resource directory."
    Required: true
    Type: String
  StackInstanceRegionId:
    Description:
      en: The region to which the resource stack belongs.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      OutputOption:
        Ref: OutputOption
      StackGroupName:
        Ref: StackGroupName
      StackInstanceAccountId:
        Ref: StackInstanceAccountId
      StackInstanceRegionId:
        Ref: StackInstanceRegionId
    Type: DATASOURCE::ROS::StackInstance
Outputs:
  AccountId:
    Description: The account id of the stack.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AccountId
  DriftDetectionTime:
    Description: The time when the resource stack group last successfully completed
      deviation detection.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DriftDetectionTime
  Outputs:
    Description: The outputs of the stack instance
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Outputs
  ParameterOverrides:
    Description: Override parameter list.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ParameterOverrides
  RdFolderId:
    Description: The resource folder ID of the resource directory.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - RdFolderId
  RegionId:
    Description: The region id of the stack.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - RegionId
  StackDriftStatus:
    Description: The status of the last successful deviation detection of the resource
      stack group.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackDriftStatus
  StackGroupId:
    Description: The resource stack group ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackGroupId
  StackGroupName:
    Description: The resource stack group name
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackGroupName
  StackId:
    Description: The stack id of stack instance.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackId
  Status:
    Description: Resource stack status.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Status
  StatusReason:
    Description: Status reason description.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StatusReason
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StackInstanceAccountId": {
      "Type": "String",
      "Description": {
        "en": "The target account ID to which the resource stack belongs. \nIn the self-service management permission mode, the account is an Alibaba Cloud account.\nIn service management permission mode, this account is a member account of the resource directory."
      },
      "Required": true
    },
    "StackGroupName": {
      "Type": "String",
      "Description": {
        "en": "Resource stack group name. Names are unique within a single region.\nThe length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)"
      },
      "Required": true
    },
    "StackInstanceRegionId": {
      "Type": "String",
      "Description": {
        "en": "The region to which the resource stack belongs."
      },
      "Required": true
    },
    "OutputOption": {
      "Type": "String",
      "Description": {
        "en": "Whether to return the Outputs parameter resource stack output list."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROS::StackInstance",
      "Properties": {
        "StackInstanceAccountId": {
          "Ref": "StackInstanceAccountId"
        },
        "StackGroupName": {
          "Ref": "StackGroupName"
        },
        "StackInstanceRegionId": {
          "Ref": "StackInstanceRegionId"
        },
        "OutputOption": {
          "Ref": "OutputOption"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "Resource stack status.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "AccountId": {
      "Description": "The account id of the stack.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountId"
        ]
      }
    },
    "StatusReason": {
      "Description": "Status reason description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StatusReason"
        ]
      }
    },
    "ParameterOverrides": {
      "Description": "Override parameter list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ParameterOverrides"
        ]
      }
    },
    "StackGroupName": {
      "Description": "The resource stack group name",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackGroupName"
        ]
      }
    },
    "Outputs": {
      "Description": "The outputs of the stack instance",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Outputs"
        ]
      }
    },
    "RdFolderId": {
      "Description": "The resource folder ID of the resource directory.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RdFolderId"
        ]
      }
    },
    "DriftDetectionTime": {
      "Description": "The time when the resource stack group last successfully completed deviation detection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DriftDetectionTime"
        ]
      }
    },
    "StackGroupId": {
      "Description": "The resource stack group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackGroupId"
        ]
      }
    },
    "RegionId": {
      "Description": "The region id of the stack.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RegionId"
        ]
      }
    },
    "StackDriftStatus": {
      "Description": "The status of the last successful deviation detection of the resource stack group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackDriftStatus"
        ]
      }
    },
    "StackId": {
      "Description": "The stack id of stack instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackId"
        ]
      }
    }
  }
}
                        
```
