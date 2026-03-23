ALIYUN::ALB::SecurityGroupAttachment is used to associate created security groups with an Application Load Balancer (ALB) instance.

## Syntax

```
{
  "Type": "ALIYUN::ALB::SecurityGroupAttachment",
  "Properties": {
    "LoadBalancerId": String,
    "SecurityGroupIds": List
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

No

The ID of the ALB instance.

None.

SecurityGroupIds

List

No

Yes

The IDs of the security groups.

You can associate up to four security groups.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    Description:
      en: The ID of ALB instance.
    Required: true
  SecurityGroupIds:
    AssociationPropertyMetadata:
      Parameter:
        AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
        Type: String
        Required: true
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: The IDs of the security group to which the ALB instance join.
    Required: false
    MinLength: 0
    MaxLength: 4
Resources:
  SecurityGroupAttachment:
    Type: ALIYUN::ALB::SecurityGroupAttachment
    Properties:
      LoadBalancerId:
        Ref: LoadBalancerId
      SecurityGroupIds:
        Ref: SecurityGroupIds
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of ALB instance."
      },
      "Required": true
    },
    "SecurityGroupIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
          "Type": "String",
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The IDs of the security group to which the ALB instance join."
      },
      "Required": false,
      "MinLength": 0,
      "MaxLength": 4
    }
  },
  "Resources": {
    "SecurityGroupAttachment": {
      "Type": "ALIYUN::ALB::SecurityGroupAttachment",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        },
        "SecurityGroupIds": {
          "Ref": "SecurityGroupIds"
        }
      }
    }
  }
}
                        
```
