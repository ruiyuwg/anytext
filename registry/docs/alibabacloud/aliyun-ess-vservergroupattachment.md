ALIYUN::ESS::VServerGroupAttachment is used to associate vServer groups of a Sever Load Balancer (SLB) instance with a scaling group.

## Syntax

```
{
  "Type": "ALIYUN::ESS::VServerGroupAttachment",
  "Properties": {
    "ScalingGroupId": String,
    "ForceAttach": Boolean,
    "VServerGroups": List
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

ScalingGroupId

String

Yes

No

The ID of the scaling group.

None.

ForceAttach

Boolean

No

No

Specifies whether to add Elastic Compute Service (ECS) instances in the scaling group to the vServer group.

Valid values:

-   true
    
-   false (default)
    

VServerGroups

List

Yes

Yes

The information about the vServer groups.

For more information, see [VServerGroups properties](#0e4a29b3e4bd4).

## VServerGroups syntax

```
"VServerGroups": [
  {
    "LoadBalancerId": String,
    "VServerGroupAttributes": List
  }
]
```

## VServerGroups properties

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

The ID of the SLB instance to which the vServer group belongs.

None.

VServerGroupAttributes

List

Yes

No

The attributes of the vServer group.

For more information, see [VServerGroupAttributes properties](#7b4f74cfe06lg).

## VServerGroupAttributes syntax

```
"VServerGroupAttributes": [
  {
    "VServerGroupId": String,
    "Port": Integer,
    "Weight": Integer
  }
]
```

## VServerGroupAttributes properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

VServerGroupId

String

Yes

No

The ID of the vServer group.

None.

Port

Integer

Yes

No

The port number that is used by Auto Scaling to add ECS instances to the vServer group.

Valid values: 1 to 65535.

Weight

Integer

No

No

The weight of the ECS instances that are added to the vServer group by Auto Scaling.

Valid values: 0 to 100.

Default value: 50.

## Return values

Fn::GetAtt

ScalingGroupId: the ID of the scaling group.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ForceAttach:
        Description:
          en: 'If instances of scaling group are attached/removed from slb backend server
            when attach/detach vserver group from scaling group.
    
            Valid values:
    
            true
    
            false
    
            Default value: false.'
        Required: false
        Type: Boolean
      ScalingGroupId:
        Description:
          en: The ID of the scaling group.
        Required: true
        Type: String
      VServerGroups:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                LoadBalancerId:
                  Description:
                    en: Load balancer server ID of VServer Group.
                  Required: true
                  Type: String
                VServerGroupAttributes:
                  AssociationProperty: List[Parameters]
                  AssociationPropertyMetadata:
                    Parameters:
                      Port:
                        Description:
                          en: The port will be used for VServer Group backend server.
                        MaxValue: 65535
                        MinValue: 0
                        Required: true
                        Type: Number
                      VServerGroupId:
                        Description:
                          en: ID of VServer Group.
                        Required: true
                        Type: String
                      Weight:
                        Description:
                          en: 'The weight of an ECS instance attached to the VServer Group.
    
                            Default value: 50.'
                        MaxValue: 100
                        MinValue: 0
                        Required: false
                        Type: Number
                  Description:
                    en: A list of VServer Group attributes.
                  MaxLength: 5
                  MinLength: 1
                  Required: true
                  Type: Json
            Required: false
            Type: Json
        Description:
          en: A list of vserver groups attached on scaling group
        MaxLength: 5
        MinLength: 1
        Required: true
        Type: Json
    Resources:
      VServerGroupAttachment:
        Properties:
          ForceAttach:
            Ref: ForceAttach
          ScalingGroupId:
            Ref: ScalingGroupId
          VServerGroups:
            Ref: VServerGroups
        Type: ALIYUN::ESS::VServerGroupAttachment
    Outputs:
      ScalingGroupId:
        Description: The ID of the scaling group.
        Value:
          Fn::GetAtt:
          - VServerGroupAttachment
          - ScalingGroupId
                            
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ScalingGroupId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the scaling group."
          },
          "Required": true
        },
        "ForceAttach": {
          "Type": "Boolean",
          "Description": {
            "en": "If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.\nValid values:\ntrue\nfalse\nDefault value: false."
          },
          "Required": false
        },
        "VServerGroups": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "LoadBalancerId": {
                    "Type": "String",
                    "Description": {
                      "en": "Load balancer server ID of VServer Group."
                    },
                    "Required": true
                  },
                  "VServerGroupAttributes": {
                    "AssociationPropertyMetadata": {
                      "Parameters": {
                        "VServerGroupId": {
                          "Type": "String",
                          "Description": {
                            "en": "ID of VServer Group."
                          },
                          "Required": true
                        },
                        "Port": {
                          "Type": "Number",
                          "Description": {
                            "en": "The port will be used for VServer Group backend server."
                          },
                          "Required": true,
                          "MinValue": 0,
                          "MaxValue": 65535
                        },
                        "Weight": {
                          "Type": "Number",
                          "Description": {
                            "en": "The weight of an ECS instance attached to the VServer Group.\nDefault value: 50."
                          },
                          "Required": false,
                          "MinValue": 0,
                          "MaxValue": 100
                        }
                      }
                    },
                    "AssociationProperty": "List[Parameters]",
                    "Type": "Json",
                    "Description": {
                      "en": "A list of VServer Group attributes."
                    },
                    "Required": true,
                    "MinLength": 1,
                    "MaxLength": 5
                  }
                }
              },
              "Type": "Json",
              "Required": false
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "A list of vserver groups attached on scaling group"
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 5
        }
      },
      "Resources": {
        "VServerGroupAttachment": {
          "Type": "ALIYUN::ESS::VServerGroupAttachment",
          "Properties": {
            "ScalingGroupId": {
              "Ref": "ScalingGroupId"
            },
            "ForceAttach": {
              "Ref": "ForceAttach"
            },
            "VServerGroups": {
              "Ref": "VServerGroups"
            }
          }
        }
      },
      "Outputs": {
        "ScalingGroupId": {
          "Description": "The ID of the scaling group.",
          "Value": {
            "Fn::GetAtt": [
              "VServerGroupAttachment",
              "ScalingGroupId"
            ]
          }
        }
      }
    }
                            
    ```
