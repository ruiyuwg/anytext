DATASOURCE::SLB::VServerGroup is used to query the information about a vServer group.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::VServerGroup",
  "Properties": {
    "VServerGroupId": String,
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

VServerGroupId

String

Yes

Yes

The ID of the vServer group.

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

-   VServerGroupId: the ID of the vServer group.
    
-   CreateTime: the time when the Classic Load Balancer (CLB) instance was created.
    
-   VServerGroupName: the name of the vServer group.
    
-   LoadBalancerId: the ID of the CLB instance.
    
-   BackendServers: the backend servers.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VServerGroupId:
    Type: String
    Description:
      en: The ID of the vServer group.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::VServerGroup
    Properties:
      VServerGroupId:
        Ref: VServerGroupId
Outputs:
  VServerGroupId:
    Description: The ID of the vServer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VServerGroupId
  CreateTime:
    Description: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  VServerGroupName:
    Description: The name of the vServer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VServerGroupName
  LoadBalancerId:
    Description: The ID of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerId
  BackendServers:
    Description: The list of backend servers.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BackendServers
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VServerGroupId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the vServer group."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::VServerGroup",
      "Properties": {
        "VServerGroupId": {
          "Ref": "VServerGroupId"
        }
      }
    }
  },
  "Outputs": {
    "VServerGroupId": {
      "Description": "The ID of the vServer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VServerGroupId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "VServerGroupName": {
      "Description": "The name of the vServer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VServerGroupName"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerId"
        ]
      }
    },
    "BackendServers": {
      "Description": "The list of backend servers.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BackendServers"
        ]
      }
    }
  }
}
                        
```
