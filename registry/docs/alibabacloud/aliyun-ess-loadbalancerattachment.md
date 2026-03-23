ALIYUN::ESS::LoadBalancerAttachment is used to add one or more Server Load Balancer (SLB) instances.

## Syntax

```
{
  "Type": "ALIYUN::ESS::LoadBalancerAttachment",
  "Properties": {
    "ScalingGroupId": String,
    "ForceAttach": Boolean,
    "LoadBalancers": List,
    "LoadBalancerConfigs": List
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

Specifies whether to attach all the instances in the current scaling group to the SLB instance as backend servers.

Valid values:

-   true
    
-   false (default)
    

LoadBalancers

List

No

No

The IDs of the Classic Load Balancer (CLB, formerly known as SLB) instances that you want to associate with your scaling group.

You can associate up to five SLB instances with a scaling group.

LoadBalancerConfigs

List

No

No

The CLB configurations.

For more information, see [LoadBalancerConfigs properties](#296ab8a568yht).

## LoadBalancerConfigs syntax

```
"LoadBalancerConfigs": [
  {
    "LoadBalancerId": String,
    "Weight": Integer
  }
]
```

## LoadBalancerConfigs properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

LoadBalancerId

String

No

No

The IDs of the CLB instances.

None.

Weight

Integer

No

No

The weight of an Elastic Compute Service (ECS) instance as a backend server of the associated CLB instance.

A higher weight specifies that a larger number of requests are forwarded to the ECS instance. If you set Weight to 0 for an ECS instance, no access requests are forwarded to the ECS instance. Valid values: 0 to 100.

## Return values

Fn::GetAtt

None.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ForceAttach:
        Description:
          en: 'Specifies whether to add all instances in the current scaling group to
            the backend server groups of the attached CLB instance. Valid values:
    
            true
    
            false
    
            Default value: false.'
        Type: Boolean
      LoadBalancerConfigs:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                LoadBalancerId:
                  Description:
                    en: The ID of the CLB instance.
                  Type: String
                Weight:
                  Description:
                    en: 'The weight of an Elastic Compute Service (ECS) instance as a
                      backend server in the backend server groups of the attached CLB
                      instance. If you increase the weight of an ECS instance, the number
                      of access requests that are forwarded to the ECS instance also increases.
                      If you set Weight to 0 for an ECS instance, no access requests are
                      forwarded to the ECS instance.
    
                      Valid values: 0 to 100.'
                  Type: Number
            Type: Json
        Description:
          en: Load balancer configuration list.
        MaxLength: 20
        Type: Json
      LoadBalancers:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            Description:
              en: The ID of load balancer.
            Type: String
        Description:
          en: 'The ID of CLB instance N that you want to attach to the scaling group.
            Valid values of N: 1 to 5.'
        MaxLength: 5
        Type: Json
      ScalingGroupId:
        Description:
          en: The ID of the scaling group.
        Type: String
    Resources:
      LoadBalancerAttachment:
        Properties:
          ForceAttach:
            Ref: ForceAttach
          LoadBalancerConfigs:
            Ref: LoadBalancerConfigs
          LoadBalancers:
            Ref: LoadBalancers
          ScalingGroupId:
            Ref: ScalingGroupId
        Type: ALIYUN::ESS::LoadBalancerAttachment
                            
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
          }
        },
        "ForceAttach": {
          "Type": "Boolean",
          "Description": {
            "en": "Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:\ntrue\nfalse\nDefault value: false."
          }
        },
        "LoadBalancers": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "Type": "String",
              "Description": {
                "en": "The ID of load balancer."
              }
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5."
          },
          "MaxLength": 5
        },
        "LoadBalancerConfigs": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "LoadBalancerId": {
                    "Type": "String",
                    "Description": {
                      "en": "The ID of the CLB instance."
                    }
                  },
                  "Weight": {
                    "Type": "Number",
                    "Description": {
                      "en": "The weight of an Elastic Compute Service (ECS) instance as a backend server in the backend server groups of the attached CLB instance. If you increase the weight of an ECS instance, the number of access requests that are forwarded to the ECS instance also increases. If you set Weight to 0 for an ECS instance, no access requests are forwarded to the ECS instance.\nValid values: 0 to 100."
                    }
                  }
                }
              },
              "Type": "Json"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "Load balancer configuration list."
          },
          "MaxLength": 20
        }
      },
      "Resources": {
        "LoadBalancerAttachment": {
          "Type": "ALIYUN::ESS::LoadBalancerAttachment",
          "Properties": {
            "ScalingGroupId": {
              "Ref": "ScalingGroupId"
            },
            "ForceAttach": {
              "Ref": "ForceAttach"
            },
            "LoadBalancers": {
              "Ref": "LoadBalancers"
            },
            "LoadBalancerConfigs": {
              "Ref": "LoadBalancerConfigs"
            }
          }
        }
      }
    }
                            
    ```
