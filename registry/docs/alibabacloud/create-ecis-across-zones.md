In some cases, you need to create a large number of Elastic Container Instance-based pods to handle bursts of traffic or process jobs. However, if the resources in the zone that you specify are insufficient or the vSwitch that you specify does not have available IP addresses, no pods can be created. To address this issue, you can configure multiple zones to ensure sufficient available resources when you create Elastic Container Instance-based pods. This topic describes how to configure multiple zones to create pods.

## Prerequisites

vSwitches are created in different zones of the virtual private cloud (VPC) where you want to create an elastic container instance.

-   For information about how to create a vSwitch, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
-   For information about the regions and zones where Elastic Container Instance is available, see [Regions and zones](/help/en/eci/product-overview/regions-and-zones#topic-1860084).
    

## Background information

When you create an elastic container instance, you can specify multiple zones by specifying multiple vSwitches. Then, the system distributes the requests to all the specified zones at random. If requested resources are insufficient in a zone, the system tries to create the instance in a different zone.

When you specify multiple zones (vSwitches), take note of the following items:

-   The specified vSwitches must belong to the same VPC.
    
-   Up to 10 vSwitches can be specified.
    

You can specify multiple instance specifications and multiple zones at the same time to further improve the success rate of creating elastic container instances.

## **Configuration description**

You can specify multiple zones for a cluster or a pod.

-   If you want to specify multiple zones for a cluster, you need to specify multiple vSwitches for the cluster. The setting takes effect on all pods within the cluster.
    
-   If you want to specify multiple zones for a pod, you need to specify multiple vSwitches when you create the pod. The setting takes effect only on the pod.
    

### **Specify multiple zones when you create a cluster**

Before you create the cluster, we recommend that you create multiple vSwitches of different zones within the cluster VPC. When you create the cluster, you can select the VPC and then select multiple vSwitches to specify multiple zones. The following figure shows how to specify multiple vSwitches when you create a Container Service for Kubernetes (ACK) Serverless cluster in the ACK console.

![多可用区](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0979568071/p233084.png)

### **Specify multiple zones for an existing cluster**

The method of configuring multiple zones varies based on the version of the ack-virtual-node component that you use.

-   If the version of your ack-virtual-node component is v2.0.0.90-15deb126e-aliyun or later, modify the eci-profile.
    
-   If the version of your ack-virtual-node component is earlier than v2.0.0.90-15deb126e-aliyun, modify the value of the relevant environment variable.
    

### **Modify the eci-profile**

You can modify the eci-profile ConfigMap of an existing cluster and enter vSwitch IDs in the `data.vSwitchlds` field in the eci-profile to specify multiple zones. Perform the following operations:

1.  Edit the eci-profile.
    
    ```
    kubectl edit cm -n kube-system eci-profile
    ```
    
2.  Modify the value of the `vSwitchIds` field.
    
    Add vSwitch IDs. Separate multiple vSwitch IDs with commas (,).
    
    ```
    data:
      enableClusterIp: "true"
      enableHybridMode: "false"
      enablePrivateZone: "false"
      resourceGroupId: ""
      securityGroupId: sg-2ze0b9o8pjjzts4h****
      selectors: ""
      vSwitchIds: vsw-2zeet2ksvw7f14ryz****,vsw-2ze94pjtfuj9vaymf**** 
      vpcId: vpc-2zeghwzptn5zii0w7****
    ```
    
3.  Save the modification and exit.
    

### **Modify the value of the relevant environment variable**

**Note**

We recommend that you upgrade the ack-virtual-node component to the latest version to use new features.

To specify multiple zones, you can modify the value of the `ECI_VSWITCH` environment variable for a Deployment or StatefulSet based on how you deploy the ack-virtual-node component. The following example shows how to modify the value of the ECI\_VSWITCH environment variable for a Deployment:

1.  Edit the Deployment.
    
    ```
    kubectl -n kube-system edit deployment/virtual-node-controller
    ```
    
2.  Modify the value of the `ECI_VSWITCH` environment variable.
    
    Add vSwitch IDs to the value of the `ECI_VSWITCH` environment variable. Separate multiple vSwitch IDs with commas (,).
    
    ```
    - name:  ECI_VSWITCH
      value:  vsw-bp1xpiowfm5vo8o3c****,vsw-bp1rkyjgr1xwoho6k**** 
    ```
    
3.  Save the modification and exit.
    

### **Specify multiple zones when you create a pod**

You can add the following annotations to the metadata in the configuration file of a pod to specify multiple zones:

-   k8s.aliyun.com/eci-vswitch: the IDs of vSwitches that are used to specify multiple zones.
    
    **Note**
    
    If the `k8s.aliyun.com/eci-vswitch` annotation is added to the metadata in the configuration file of an Elastic Container Instance-based pod, the provisioner does not support the `WaitForFirstConsumer` StorageClass when a dynamically provisioned disk volume is mounted to the pod.
    
-   k8s.aliyun.com/eci-schedule-strategy: the multi-zone scheduling policy. Valid values: `VSwitchOrdered` and `VSwitchRandom`. The following table describes the scheduling policies.
    
    **Note**
    
    If you do not specify the k8s.aliyun.com/eci-schedule-strategy annotation, the VSwitchRandom policy is used by default.
    
    **Policy**
    
    **Scheduling description**
    
    VSwitchOrdered: The system schedules resources in the sorting sequence of the vSwitches.
    
    1.  If you want to mount a disk to the pod that you are creating, the zone of the disk must be the same as the zone of the pod. The zones that do not support the pod or disk are filtered out.
        
    2.  The system tries to create the pod in the order of the specified vSwitches that corresponds to specific zones. If available resources in the first zone are insufficient, the system tries the second zone, and so on, until the pod is created.
        
    
    VSwitchRandom: The system schedules resources based on the optimal inventory policy.
    
    1.  If you want to mount a disk to the pod that you are creating, the zone of the disk must be the same as the zone of the pod. The zones that do not support the pod or disk are filtered out.
        
    2.  Alibaba Cloud selects a vSwitch that corresponds to a zone, in which the inventory best suits your requirements.
        
    3.  If you specified specifications for the pod that you are creating, zones that have a reserved instance for the specified pod specifications are preferentially used to create the pod.
        
    4.  Zones that provide higher storage performance are preferentially used to create the pod. The following early zones are less preferentially used to create the pod:
        
        -   cn-beijing-e and cn-beijing-d
            
        -   cn-shenzhen-a, cn-shenzhen-b, and cn-shenzhen-c
            
        -   cn-hangzhou-b, cn-hangzhou-e, and cn-hangzhou-f
            
        -   cn-shanghai-a and cn-shanghai-c
            
    

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Sample configurations:

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
        k8s.aliyun.com/eci-vswitch: "vsw-bp1xpiowfm5vo8o3c****,vsw-bp1rkyjgr1xwoho6k****"    # Specifies multiple vSwitch IDs.
        k8s.aliyun.com/eci-schedule-strategy: "VSwitchOrdered"   # Configures a multi-zone scheduling policy.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

## What to do next

If you use a network address translation (NAT) gateway to access the Internet and you configure multiple zones (vSwitches) to create elastic container instances, you must check whether the number of source network address translation (SNAT) entries that you configured for the NAT gateway is sufficient for the number of zones that you configured.

For example, when you create a SNAT entry, you specify a vSwitch for it. If you specify multiple vSwitches when you create an elastic container instance, you must increase SNAT entries for the new vSwitches to ensure that the elastic container instances that are connected to the new vSwitches can access the Internet.

![SNAT](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4296172661/p474484.png)
