Security groups act as virtual firewalls and provide Stateful Packet Inspection (SPI) and packet filtering capabilities. You can use security groups to define security domains in the cloud. You can add security group rules to control inbound and outbound traffic of pods (elastic container instances) within security groups.

## Introduction to security groups

A security group is a logically isolated group of instances that reside in the same virtual private cloud (VPC). All instances in a security group are mutually trusted and protected under the same security group rules. Security group rules control access to or from the Internet or internal network for the elastic container instances in the security group. For more information about security groups, see [Overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

**Important**

-   Each security group can manage multiple elastic container instances within the same VPC.
    
-   Each elastic container instance must belong to a security group.
    

Security groups are classified into basic security groups and advanced security groups. If your business requires a large number of elastic container instances and high O&M efficiency, we recommend that you use advanced security groups. Compared with basic security groups, advanced security groups can accommodate more elastic container instances and make it easier to configure security group rules. For more information about the differences between the two types of security groups, see [Basic security groups and advanced security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups).

## **Assign security groups to a pod**

By default, when you create an Elastic Container Instance-based pod in a Container Service for Kubernetes (ACK) cluster, the pod is added to the security group that is specified in the eci-profile. You can also assign other security groups to the pod based on your business requirements. Before you assign other security groups to the pod, you must create security groups. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1).

**Important**

You cannot change the security group of an existing Elastic Container Instance-based pod. To use a pod that belongs to a different security group, create an identical pod in that security group.

### **Cluster configuration**

The eci-profile contains the security group configuration information. You can run the kubectl edit command to change the security group ID.

```
kubectl edit configmap eci-profile -n kube-system
```

**Note**

If the version of the Virtual Kubelet component is v2.0.0.90-15deb126e-aliyun or later, you can modify the eci-profile to implement hot updates of configurations. The Virtual Kubelet component is the ACK Virtual Node component. If your Virtual Kubelet version is earlier than v2.0.0.90-15deb126e-aliyun, we recommend that you upgrade Virtual Kubelet.

Modify the securityGroupId parameter in the data section. Example:

```
data:
  enableClusterIp: "true"
  enableHybridMode: "false"
  enablePrivateZone: "false"
  resourceGroupId: ""
  securityGroupId: sg-2ze0b9o8pjjzts4h**** # Specify a security group ID. Only one security group ID is supported.
  selectors: ""
  vSwitchIds: vsw-2zeet2ksvw7f14ryz****,vsw-2ze94pjtfuj9vaymf****  
  vpcId: vpc-2zeghwzptn5zii0w7****
```

### **Pod configuration**

For some Elastic Container Instance-based pods that have special requirements, you can add the `k8s.aliyun.com/eci-security-group` annotation to assign security groups. The following requirements must be met:

-   You can assign up to five security groups.
    
-   The assigned security groups must belong to the same virtual private cloud (VPC).
    
-   The assigned security groups must be of the same type.
    

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Example:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-security-group: "sg-bp1dktddjsg5nktv****,sg-2ze0b9o8pjjzts4h****"      # Assign security groups.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

## Add a security group rule

You can add a security group rule to an elastic container instance in a security group. The security group rule controls the access to the instance. Examples:

-   If the elastic container instance needs to communicate with a service outside the security group, you can add a security group rule to implement service interconnection.
    
-   When attacks that are performed by request sources are detected, you can add a security group rule to block access from the sources.
    

For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
