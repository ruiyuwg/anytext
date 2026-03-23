ALIYUN::SLB::LoadBalancerClone is used to clone a Server Load Balancer (SLB) instance.

## Syntax

```
{
  "Type": "ALIYUN::SLB::LoadBalancerClone",
  "Properties": {
    "Tags": List,
    "ResourceGroupId": String,
    "VSwitchId": String,
    "LoadBalancerName": String,
    "SourceLoadBalancerId": String,
    "TagsPolicy": String,
    "BackendServersPolicy": String,
    "BackendServers": List,
    "InstanceChargeType": String,
    "LoadBalancerSpec": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

ResourceGroupId

String

No

No

The ID of the resource group to which the new SLB instance belongs.

None

VSwitchId

String

No

No

The ID of the vSwitch with which the new SLB instance is associated.

The vSwitch must be in the same virtual private cloud (VPC) as the source SLB instance. If you leave this property empty, the vSwitch of the source SLB instance is used.

SourceLoadBalancerId

String

Yes

No

The ID of the source SLB instance.

None

BackendServersPolicy

String

No

No

The clone policy. This policy allows you to configure the Elastic Compute Service (ECS) instances listened by the new SLB instance and the weight of each ECS instance.

Default value: clone. Valid values:

-   clone: The ECS instances listened by the source SLB instance and the weight of each ECS instance are cloned to the new SLB instance.
-   empty: No ECS instances are attached to the new SLB instance.
-   append: The ECS instances listened by the source SLB instance and the weight of each ECS instance are cloned to the new SLB instance. New ECS instances of which the weights are specified are also attached to the new SLB instance.
-   replace: New ECS instances of which the weights are specified are attached to the new SLB instance. However, the ECS instances listened by the source SLB instance and the weight of each ECS instance are not cloned to the new SLB instance.

BackendServers

List

No

Yes

The new ECS instances to be listened by the new SLB instance.

For more information about, see [BackendServers properties](#section-3xt-cew-nfq).

LoadBalancerName

String

No

No

The name of the new SLB instance.

You can specify a custom string as the instance name. The name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

Tags

List

No

Yes

The tags that you want to add to the new SLB instance.

You must specify key-value pairs for tags. You can add up to five tags.

For more information, see [Tags properties](#section-yi0-9mi-nsy).

TagsPolicy

String

No

No

The policy of the tags.

Default value: empty. Valid values:

-   clone: uses the tags of the source SLB instance.
-   empty: does not use tags.
-   append: retains the tags of the source SLB instance and adds new tags.
-   replace: deletes the tags of the source SLB instance and adds new tags.

InstanceChargeType

String

No

No

The billing method of the new SLB instance.

Default value: PayBySpec. Valid values:

-   PayBySpec: You are charged for the SLB instance based on its specification.
-   PayByCLCU: You are charged for the SLB instance based on its Load Balancer Capacity Unit (LCU).
    
    **Note** This property takes effect when the PayType property is set to PayOnDemand.
    

LoadBalancerSpec

String

No

No

The specification of the new SLB instance.

Default value: slb.s1.small. Valid values:

-   slb.s1.small
-   slb.s2.small
-   slb.s2.medium
-   slb.s3.small
-   slb.s3.medium
-   slb.s3.large
-   slb.s3.xlarge
-   slb.s3.xxlarge

The available specifications vary by region. For more information, see [FAQ about CLB](/help/en/slb/classic-load-balancer/user-guide/faq-about-clb-2#concept-umd-czv-tdb).

## BackendServers syntax

```
"BackendServers": [
  {
    "Type": String,
    "ServerId": String,
    "Description": String,
    "ServerIp": String,
    "Weight": Integer
  }
] 
```

## BackendServers properties

Property

Type

Required

Editable

Description

Constraint

ServerId

String

Yes

Yes

The ID of the backend server.

You can attach only running ECS instances to the new SLB instance as backend servers. You can attach up to 20 backend servers in a call.

You can attach elastic network interfaces (ENIs) as backend servers only to high-performance SLB instances.

Weight

Integer

Yes

Yes

The weight of the ECS instance that you want to attach to the new SLB instance.

Valid values: 0 to 100.

Default value: 100.

ServerIp

String

No

No

The IP address of the backend server.

None

Type

String

No

No

The type of the backend server.

Default value: ecs. Valid values:

-   ecs: ECS instance
-   eni: ENI
-   eci: elastic container instance

Description

String

No

Yes

The description of the backend server.

The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]  
```

## Tags properties

Property

Type

Required

Editable

Description

Constraint

Key

String

Yes

No

The key of the tag.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

LoadBalancerId: the ID of the new SLB instance.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      SourceSLBId:
        AssociationProperty: ALIYUN::SLB::Instance::InstanceId
        Type: String
        Description: Source load balancer id to clone
    Resources:
      LoadBalancerClone:
        Type: ALIYUN::SLB::LoadBalancerClone
        Properties:
          LoadBalancerName: DemoCloneLoadBalancer
          SourceLoadBalancerId:
            Ref: SourceSLBId
    Outputs:
      LoadBalancerId:
        Description: The id of load balance generated
        Value:
          Fn::GetAtt:
            - LoadBalancerClone
            - LoadBalancerId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "SourceSLBId": {
          "AssociationProperty": "ALIYUN::SLB::Instance::InstanceId",
          "Type": "String",
          "Description": "Source load balancer id to clone"
        }
      },
      "Resources": {
        "LoadBalancerClone": {
          "Type": "ALIYUN::SLB::LoadBalancerClone",
          "Properties": {
            "LoadBalancerName": "DemoCloneLoadBalancer",
            "SourceLoadBalancerId": {
              "Ref": "SourceSLBId"
            }
          }
        }
      },
      "Outputs": {
        "LoadBalancerId": {
          "Description": "The id of load balance generated",
          "Value": {
            "Fn::GetAtt": [
              "LoadBalancerClone",
              "LoadBalancerId"
            ]
          }
        }
      }
    }
    ```
