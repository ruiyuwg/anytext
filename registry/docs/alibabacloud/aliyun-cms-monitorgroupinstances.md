ALIYUN::CMS::MonitorGroupInstances is used to add instances to an application group.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MonitorGroupInstances",
  "Properties": {
    "Instances": List,
    "GroupId": String
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

Instances

List

Yes

No

The instances.

For more information, see [Instances properties](#section-wzx-r0l-4fx).

GroupId

String

Yes

No

The ID of the application group.

None

## Instances syntax

```
"Instances": [
  {
    "InstanceName": String,
    "Category": String,
    "InstanceId": String,
    "RegionId": String
  }
]
```

## Instances properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

InstanceName

String

Yes

No

The name of the instance.

None

Category

String

Yes

No

The service name or specifications of the instance.

Valid values:

-   ecs: Elastic Compute Service (ECS)
    
-   rds: ApsaraDB RDS
    
-   ads: AnalyticDB for MySQL
    
-   slb: Server Load Balancer (SLB)
    
-   vpc: Virtual Private Cloud (VPC)
    
-   apigateway: API Gateway
    
-   cdn: Alibaba Cloud CDN (CDN)
    
-   cs: Container Service for Kubernetes (ACK)
    
-   dcdn: Dynamic Content Delivery Network (DCDN)
    
-   ddos: Anti-DDoS Pro and Anti-DDoS Premium
    
-   eip: Elastic IP Address (EIP)
    
-   elasticsearch: Elasticsearch
    
-   emr: E-MapReduce (EMR)
    
-   ess: Auto Scaling
    
-   hbase: ApsaraDB for HBase
    
-   iot\_edge: Link IoT Edge
    
-   k8s\_pod: pods in ACK
    
-   kvstore\_sharding: ApsaraDB for Redis (Cluster Architecture)
    
-   kvstore\_splitrw: ApsaraDB for Redis (Read/Write Splitting Architecture)
    
-   kvstore\_standard: ApsaraDB for Redis (Standard Architecture)
    
-   memcache: ApsaraDB for Memcache (OCS, New Version)
    
-   mns: Message Service (MNS)
    
-   mongodb: ApsaraDB for MongoDB (Replica Set Architecture)
    
-   mongodb\_cluster: ApsaraDB for MongoDB (Standalone Architecture)
    
-   mongodb\_sharding: ApsaraDB for MongoDB (Sharded Cluster Architecture)
    
-   mq\_topic: MNS topic
    
-   ocs: ApsaraDB for Memcache (OCS, Old Version)
    
-   opensearch: OpenSearch
    
-   oss: Object Storage Service (OSS)
    
-   polardb: PolarDB
    
-   petadata: HybridDB for MySQL
    
-   scdn: Secure CDN (SCDN)
    
-   sharebandwidthpackages: EIP Bandwidth Plan
    
-   sls: Simple Log Service
    
-   vpn: VPN Gateway
    

InstanceId

String

Yes

No

The ID of the instance.

None

RegionId

String

Yes

No

The region ID of the instance.

None

## Return values

Fn::GetAtt

GroupId: the ID of the application group.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Instance::InstanceId
  GroupId:
    Type: String
    Description: The ID of the application group.
Resources:
  MonitorGroupInstances:
    Type: ALIYUN::CMS::MonitorGroupInstances
    Properties:
      Instances:
        - InstanceName: TestECS
          Category: ecs
          InstanceId:
            Ref: InstanceId
          RegionId:
            Ref: ALIYUN::Region
      GroupId:
        Ref: GroupId
Outputs:
  GroupId:
    Description: The ID of the application group.
    Value:
      Fn::GetAtt:
        - MonitorGroupInstances
        - GroupId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId"
    },
    "GroupId": {
      "Type": "String",
      "Description": "The ID of the application group."
    }
  },
  "Resources": {
    "MonitorGroupInstances": {
      "Type": "ALIYUN::CMS::MonitorGroupInstances",
      "Properties": {
        "Instances": [
          {
            "InstanceName": "TestECS",
            "Category": "ecs",
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "RegionId": {
              "Ref": "ALIYUN::Region"
            }
          }
        ],
        "GroupId": {
          "Ref": "GroupId"
        }
      }
    }
  },
  "Outputs": {
    "GroupId": {
      "Description": "The ID of the application group.",
      "Value": {
        "Fn::GetAtt": [
          "MonitorGroupInstances",
          "GroupId"
        ]
      }
    }
  }
}
```
