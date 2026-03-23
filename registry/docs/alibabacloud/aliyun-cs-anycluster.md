ALIYUN::CS::AnyCluster is used to create a Container Service for Kubernetes (ACK) cluster of a specific type.

## Syntax

```
{
  "Type": "ALIYUN::CS::AnyCluster",
  "Properties": {
    "ClusterConfig": Map
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

ClusterConfig

Map

Yes

No

The configurations of the cluster.

For more information, see [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster).

## Return values

Fn::GetAtt

-   ClusterId: the ID of the cluster.
    
-   TaskId: the ID of the task. The task ID is automatically assigned by the system and is used to query the status of the task.
    
-   WorkerRamRoleName: the name of the Resource Access Management (RAM) role for the worker nodes.
    
-   DefaultUserKubeConfig: the default kubeconfig file of the cluster credentials.
    
-   ScalingRuleId: the ID of the scaling rule.
    
-   ScalingGroupId: the ID of the scaling group.
    
-   PrivateUserKubConfig: the private kubeconfig file of the cluster credentials.
    
-   ScalingConfigurationId: the ID of the scaling configuration.
    
-   Nodes: the nodes in the cluster.
    
-   APIServerSLBId: the ID of the Server Load Balancer (SLB) instance that is used by the API server.
    
-   IngressSLBId: the ID of the SLB Ingress.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Label:
      en: VPC
       
  VSwitchIds:
    Type: CommaDelimitedList
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: VpcId
    Label:
      en: VSwitchIds
       
  KeyPairName:
    Type: String
    Label:
      en: Key Pair Name
       
    AssociationProperty: ALIYUN::ECS::KeyPair::KeyPairName
    Description:
      en: Please enter the name of the existing key pair. If you use the instance password Login, the key pair name does not need to be filled in
        
Resources:
  AnyCluster:
    Type: ALIYUN::CS::AnyCluster
    Properties:
      ClusterConfig:
        name: cluster-demo
        cluster_type: ManagedKubernetes
        disable_rollback: true
        timeout_mins: 60
        kubernetes_version: 1.22.3-aliyun.1
        region_id:
          Ref: ALIYUN::Region
        snat_entry: true
        cloud_monitor_flags: true
        endpoint_public_access: false
        deletion_protection: true
        node_cidr_mask: '26'
        proxy_mode: ipvs
        tags: []
        timezone: Asia/Shanghai
        addons:
          - name: flannel
          - name: csi-plugin
          - name: csi-provisioner
          - name: storage-operator
            config: '{"CnfsOssEnable":"false","CnfsNasEnable":"true"}'
          - name: logtail-ds
            config: '{"IngressDashboardEnabled":"true"}'
          - name: ack-node-problem-detector
            config: '{"sls_project_name":""}'
          - name: nginx-ingress-controller
            config: '{"IngressSlbNetworkType":"internet","IngressSlbSpec":"slb.s2.small"}'
          - name: ack-node-local-dns
          - name: arms-prometheus
          - name: alicloud-monitor-controller
            config: '{"group_contact_ids":"[2066]"}'
        cluster_spec: ack.pro.small
        load_balancer_spec: slb.s2.small
        os_type: Linux
        platform: AliyunLinux
        image_type: AliyunLinux
        runtime:
          name: containerd
          version: 1.4.8
        charge_type: PostPaid
        vpcid:
          Ref: VpcId
        container_cidr: 10.9.0.0/16
        service_cidr: 172.16.0.0/16
        vswitch_ids:
          Ref: VSwitchIds
        key_pair:
          Ref: KeyPairName
        logging_type: SLS
        cpu_policy: none
        is_enterprise_security_group: true
        controlplane_log_ttl: '30'
        controlplane_log_components:
          - apiserver
          - kcm
          - scheduler
          - ccm
        nodepools:
          - nodepool_info:
              name: default-nodepool
            scaling_group:
              vswitch_ids:
                Ref: VSwitchIds
              system_disk_category: cloud_efficiency
              system_disk_size: 120
              system_disk_performance_level: ''
              data_disks: []
              instance_types:
                - ecs.i2ne.xlarge
              tags: []
              instance_charge_type: PostPaid
              soc_enabled: false
              key_pair:
                Ref: KeyPairName
              is_enterprise_security_group: true
              platform: AliyunLinux
              image_id: aliyun_2_1903_x64_20G_alibase_20210726.vhd
              image_type: AliyunLinux
              rds_instances: []
            kubernetes_config:
              cpu_policy: none
              labels: []
              runtime: containerd
              runtime_version: 1.4.8
            count: 3
        num_of_nodes: 0
Outputs:
  TaskId:
    Description: Task ID. Automatically assigned by the system, the user queries the task status.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - TaskId
  ClusterId:
    Description: Cluster instance ID.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - ClusterId
  ScalingGroupId:
    Description: Scaling group id
    Value:
      Fn::GetAtt:
        - AnyCluster
        - ScalingGroupId
  ScalingRuleId:
    Description: Scaling rule id
    Value:
      Fn::GetAtt:
        - AnyCluster
        - ScalingRuleId
  DefaultUserKubeConfig:
    Description: Default user kubernetes config which is used for configuring cluster credentials.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - DefaultUserKubeConfig
  WorkerRamRoleName:
    Description: Worker ram role name.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - WorkerRamRoleName
  ScalingConfigurationId:
    Description: Scaling configuration id
    Value:
      Fn::GetAtt:
        - AnyCluster
        - ScalingConfigurationId
  PrivateUserKubConfig:
    Description: Private user kubernetes config which is used for configuring cluster credentials.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - PrivateUserKubConfig
  Nodes:
    Description: The list of cluster nodes.
    Value:
      Fn::GetAtt:
        - AnyCluster
        - Nodes
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Label": {
        "en": "VPC",
         
      }
    },
    "VSwitchIds": {
      "Type": "CommaDelimitedList",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "VpcId"
      },
      "Label": {
        "en": "VSwitchIds",
         
      }
    },
    "KeyPairName": {
      "Type": "String",
      "Label": {
        "en": "Key Pair Name",
         
      },
      "AssociationProperty": "ALIYUN::ECS::KeyPair::KeyPairName",
      "Description": {
        "en": "Please enter the name of the existing key pair. If you use the instance password Login, the key pair name does not need to be filled in",
          
      }
    }
  },
  "Resources": {
    "AnyCluster": {
      "Type": "ALIYUN::CS::AnyCluster",
      "Properties": {
        "ClusterConfig": {
          "name": "cluster-demo",
          "cluster_type": "ManagedKubernetes",
          "disable_rollback": true,
          "timeout_mins": 60,
          "kubernetes_version": "1.22.3-aliyun.1",
          "region_id": {
            "Ref": "ALIYUN::Region"
          },
          "snat_entry": true,
          "cloud_monitor_flags": true,
          "endpoint_public_access": false,
          "deletion_protection": true,
          "node_cidr_mask": "26",
          "proxy_mode": "ipvs",
          "tags": [],
          "timezone": "Asia/Shanghai",
          "addons": [
            {
              "name": "flannel"
            },
            {
              "name": "csi-plugin"
            },
            {
              "name": "csi-provisioner"
            },
            {
              "name": "storage-operator",
              "config": "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"true\"}"
            },
            {
              "name": "logtail-ds",
              "config": "{\"IngressDashboardEnabled\":\"true\"}"
            },
            {
              "name": "ack-node-problem-detector",
              "config": "{\"sls_project_name\":\"\"}"
            },
            {
              "name": "nginx-ingress-controller",
              "config": "{\"IngressSlbNetworkType\":\"internet\",\"IngressSlbSpec\":\"slb.s2.small\"}"
            },
            {
              "name": "ack-node-local-dns"
            },
            {
              "name": "arms-prometheus"
            },
            {
              "name": "alicloud-monitor-controller",
              "config": "{\"group_contact_ids\":\"[2066]\"}"
            }
          ],
          "cluster_spec": "ack.pro.small",
          "load_balancer_spec": "slb.s2.small",
          "os_type": "Linux",
          "platform": "AliyunLinux",
          "image_type": "AliyunLinux",
          "runtime": {
            "name": "containerd",
            "version": "1.4.8"
          },
          "charge_type": "PostPaid",
          "vpcid": {
            "Ref": "VpcId"
          },
          "container_cidr": "10.9.0.0/16",
          "service_cidr": "172.16.0.0/16",
          "vswitch_ids": {
            "Ref": "VSwitchIds"
          },
          "key_pair": {
            "Ref": "KeyPairName"
          },
          "logging_type": "SLS",
          "cpu_policy": "none",
          "is_enterprise_security_group": true,
          "controlplane_log_ttl": "30",
          "controlplane_log_components": [
            "apiserver",
            "kcm",
            "scheduler",
            "ccm"
          ],
          "nodepools": [
            {
              "nodepool_info": {
                "name": "default-nodepool"
              },
              "scaling_group": {
                "vswitch_ids": {
                  "Ref": "VSwitchIds"
                },
                "system_disk_category": "cloud_efficiency",
                "system_disk_size": 120,
                "system_disk_performance_level": "",
                "data_disks": [],
                "instance_types": [
                  "ecs.i2ne.xlarge"
                ],
                "tags": [],
                "instance_charge_type": "PostPaid",
                "soc_enabled": false,
                "key_pair": {
                  "Ref": "KeyPairName"
                },
                "is_enterprise_security_group": true,
                "platform": "AliyunLinux",
                "image_id": "aliyun_2_1903_x64_20G_alibase_20210726.vhd",
                "image_type": "AliyunLinux",
                "rds_instances": []
              },
              "kubernetes_config": {
                "cpu_policy": "none",
                "labels": [],
                "runtime": "containerd",
                "runtime_version": "1.4.8"
              },
              "count": 3
            }
          ],
          "num_of_nodes": 0
        }
      }
    }
  },
  "Outputs": {
    "TaskId": {
      "Description": "Task ID. Automatically assigned by the system, the user queries the task status.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "TaskId"
        ]
      }
    },
    "ClusterId": {
      "Description": "Cluster instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "ClusterId"
        ]
      }
    },
    "ScalingGroupId": {
      "Description": "Scaling group id",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "ScalingGroupId"
        ]
      }
    },
    "ScalingRuleId": {
      "Description": "Scaling rule id",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "ScalingRuleId"
        ]
      }
    },
    "DefaultUserKubeConfig": {
      "Description": "Default user kubernetes config which is used for configuring cluster credentials.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "DefaultUserKubeConfig"
        ]
      }
    },
    "WorkerRamRoleName": {
      "Description": "Worker ram role name.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "WorkerRamRoleName"
        ]
      }
    },
    "ScalingConfigurationId": {
      "Description": "Scaling configuration id",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "ScalingConfigurationId"
        ]
      }
    },
    "PrivateUserKubConfig": {
      "Description": "Private user kubernetes config which is used for configuring cluster credentials.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "PrivateUserKubConfig"
        ]
      }
    },
    "Nodes": {
      "Description": "The list of cluster nodes.",
      "Value": {
        "Fn::GetAtt": [
          "AnyCluster",
          "Nodes"
        ]
      }
    }
  }
}
            
```
