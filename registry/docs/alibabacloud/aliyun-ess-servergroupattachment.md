ALIYUN::ESS::ServerGroupAttachment is used to add one or more Server Load Balancer (SLB) server groups to a scaling group. Supported SLB server groups include Application Load Balancer (ALB) server groups and Network Load Balancer (NLB) server groups.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ServerGroupAttachment",
  "Properties": {
    "ServerGroups": List,
    "ScalingGroupId": String,
    "ForceAttach": Boolean
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

ServerGroups

List

Yes

No

The server groups.

You can add up to 100 server groups to a scaling group. For more information, see [ServerGroups properties](#1c7c5e5068wcp).

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

Specifies whether to add all the Elastic Compute Service (ECS) instances in the current scaling group to the newly added server group.

Valid values:

-   true
    
-   false (default)
    

## ServerGroups syntax

```
"ServerGroups": [
  {
    "Type": String,
    "Port": Integer,
    "ServerGroupId": String,
    "Weight": Integer
  }
]
```

## ServerGroups properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

Yes

No

The type of server group.

Valid values:

-   ALB
    
-   NLB
    

Port

Integer

Yes

No

The port number that is used by an ECS instance after it is added to the server group.

Valid values: 0 to 65535.

ServerGroupId

String

Yes

No

The ID of the server group.

None.

Weight

Integer

Yes

No

The weight of an ECS instance as a backend server of the associated server group.

A higher weight specifies that a larger number of requests are forwarded to the ECS instance. If you set Weight to 0 for an ECS instance, no access requests are forwarded to the ECS instance. Valid values: 0 to 100.

## Return values

Fn::GetAtt

ScalingActivityId: the ID of the scaling activity during which you add the server group and also add the ECS instances in your scaling group to the server group.

**Note**

This parameter is returned only when you set the ForceAttach property to true.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ServerGroups:
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                Type:
                  Type: String
                  Description:
                    en: |-
                      The type of backend server group.
                      Valid values:
                      ALB
                      NLB
                  AllowedValues:
                    - ALB
                    - NLB
                Port:
                  Type: Number
                  Description:
                    en: |-
                      The port number used by an ECS instance in the scaling group after Auto Scaling adds the ECS instance to backend server group.
                      ALB server group port range [1,65535], NLB server group port range [0,65535].
                  MinValue: 0
                  MaxValue: 65535
                ServerGroupId:
                  Type: String
                  Description:
                    en: The ID of backend server group.
                Weight:
                  Type: Number
                  Description:
                    en: |-
                      The weight of an ECS instance in the scaling group as a backend server after Auto Scaling adds the ECS instance to backend server group. Valid values: 0 to 100.
                      If you increase the weight of an ECS instance in a backend server group, the number of access requests that are forwarded to the ECS instance increases. If you set the Weight parameter for an ECS instance in a backend server group to 0, no access requests are forwarded to the ECS instance.
                  MinValue: 0
                  MaxValue: 100
            Type: Json
        AssociationProperty: List[Parameter]
        Type: Json
        Description:
          en: A collection of information about server groups.
        MinLength: 1
        MaxLength: 100
        Default:
          - Type: ALB
            Port: 80
            ServerGroupId: sgp-5yc3bd9lfyh*****
            Weight: 100
      ScalingGroupId:
        Type: String
        Description:
          en: The ID of the scaling group.
        Default: asg-bp1fo0dbtsbmqa9h****
      ForceAttach:
        Type: Boolean
        Description:
          en: |-
            Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
            true
            false
            Default value: false.
        Default: true
    Resources:
      ServerGroupAttachment:
        Type: ALIYUN::ESS::ServerGroupAttachment
        Properties:
          ServerGroups:
            Ref: ServerGroups
          ScalingGroupId:
            Ref: ScalingGroupId
          ForceAttach:
            Ref: ForceAttach
    Outputs:
      ScalingActivityId:
        Description: |-
          The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
          Note This parameter is returned only after you set the ForceAttach parameter to true.
        Value:
          Fn::GetAtt:
            - ServerGroupAttachment
            - ScalingActivityId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ServerGroups": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "Type": {
                    "Type": "String",
                    "Description": {
                      "en": "The type of backend server group.\nValid values:\nALB\nNLB"
                    },
                    "AllowedValues": [
                      "ALB",
                      "NLB"
                    ]
                  },
                  "Port": {
                    "Type": "Number",
                    "Description": {
                      "en": "The port number used by an ECS instance in the scaling group after Auto Scaling adds the ECS instance to backend server group.\nALB server group port range [1,65535], NLB server group port range [0,65535]."
                    },
                    "MinValue": 0,
                    "MaxValue": 65535
                  },
                  "ServerGroupId": {
                    "Type": "String",
                    "Description": {
                      "en": "The ID of backend server group."
                    }
                  },
                  "Weight": {
                    "Type": "Number",
                    "Description": {
                      "en": "The weight of an ECS instance in the scaling group as a backend server after Auto Scaling adds the ECS instance to backend server group. Valid values: 0 to 100.\nIf you increase the weight of an ECS instance in a backend server group, the number of access requests that are forwarded to the ECS instance increases. If you set the Weight parameter for an ECS instance in a backend server group to 0, no access requests are forwarded to the ECS instance."
                    },
                    "MinValue": 0,
                    "MaxValue": 100
                  }
                }
              },
              "Type": "Json"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "A collection of information about server groups."
          },
          "MinLength": 1,
          "MaxLength": 100,
          "Default": [
            {
              "Type": "ALB",
              "Port": 80,
              "ServerGroupId": "sgp-5yc3bd9lfyh*****",
              "Weight": 100
            }
          ]
        },
        "ScalingGroupId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the scaling group."
          },
          "Default": "asg-bp1fo0dbtsbmqa9h****"
        },
        "ForceAttach": {
          "Type": "Boolean",
          "Description": {
            "en": "Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:\ntrue\nfalse\nDefault value: false."
          },
          "Default": true
        }
      },
      "Resources": {
        "ServerGroupAttachment": {
          "Type": "ALIYUN::ESS::ServerGroupAttachment",
          "Properties": {
            "ServerGroups": {
              "Ref": "ServerGroups"
            },
            "ScalingGroupId": {
              "Ref": "ScalingGroupId"
            },
            "ForceAttach": {
              "Ref": "ForceAttach"
            }
          }
        }
      },
      "Outputs": {
        "ScalingActivityId": {
          "Description": "The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.\nNote This parameter is returned only after you set the ForceAttach parameter to true.",
          "Value": {
            "Fn::GetAtt": [
              "ServerGroupAttachment",
              "ScalingActivityId"
            ]
          }
        }
      }
    }
    ```
