DATASOURCE::SLB::VServerGroups is used to query the server groups of a Classic Load Balancer (CLB) instance.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::VServerGroups",
  "Properties": {
    "LoadBalancerId": String,
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

LoadBalancerId

String

Yes

Yes

The ID of the CLB instance.

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

-   VServerGroupIds: the IDs of the server groups.
    
-   VServerGroups: details of the server groups.
    

**Property**

**Type**

**Description**

**Constraint**

VServerGroupIds

List

The IDs of the server groups.

None.

VServerGroups

List

Details of the server groups.

None.

AssociatedObjects

Map

The information about the associated items.

Example:

```
{
      "Listeners" : [ {
        "Port" : 80,
        "Protocol" : "tcp"
      } ],
      "Rules" : [ {
        "Url" : "/example",
        "Domain" : "www.example.com",
        "RuleName" : "test",
        "RuleId" : "rule-a3x3pg1yohq3lq****"
      } ]
    }
```

LoadBalancerId

String

The ID of the CLB instance.

None.

CreateTime

String

The time when the CLB instance was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.

VServerGroupId

String

The ID of the server group.

None.

VServerGroupName

String

The name of the server group.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Description: The ID of the CLB instance.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::VServerGroups
    Properties:
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  VServerGroupIds:
    Description: The list of VServer group IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VServerGroupIds
  VServerGroups:
    Description: The list of VServer groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VServerGroups
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "AssociationProperty":"ALIYUN::SLB::Instance::InstanceId",
      "Description": "The ID of the CLB instance."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::VServerGroups",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "VServerGroupIds": {
      "Description": "The list of VServer group IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VServerGroupIds"
        ]
      }
    },
    "VServerGroups": {
      "Description": "The list of VServer groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VServerGroups"
        ]
      }
    }
  }
}
```
