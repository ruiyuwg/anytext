By default, pods in Container Service for Kubernetes (ACK) clusters and ACK Serverless clusters are scheduled to run on x86-based virtual nodes when you schedule the pods to run as elastic container instances on virtual nodes. If your applications are deployed on an ARM architecture, you must add the nodeSelector field to specify the virtual nodes that you want to use when you schedule pods to run on virtual nodes. This topic describes how to schedule pods to an ARM-based virtual node.

## **Prerequisites**

The cluster meets the following requirements:

-   ARM-based elastic container instances are supported in the region in which the cluster resides.
    
    The g8y, c8y, and r8y ARM-based instance families of Elastic Compute Service (ECS) can be used to create elastic container instances. For information about the regions in which ARM-based elastic container instances can be created, see [ECS instance types available for each region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion).
    
-   The cluster runs Kubernetes 1.20 or later.
    
-   The version of the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component in the cluster supports ARM-based nodes.
    
-   The version of the [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) component in the cluster supports ARM-based nodes.
    

## **Precautions**

When you schedule pods to run on an ARM-based virtual node, you are charged for the corresponding elastic container instance based on the actual ARM specifications, instead of the used vCPU and memory specifications.

**Note**

After you create the Elastic Container Instance-based pod, you can run the `kubectl describe pod <pod name>` command to view the details of the pod and check the ECS instance type of the pod in the `k8s.aliyun.com/eci-instance-spec` field.

## **Add an ARM-based virtual node**

You can perform the following operations to modify the eci-profile and add an ARM-based virtual node to the cluster:

1.  Modify the eci-profile.
    
    ```
    kubectl edit configmap eci-profile -n kube-system
    ```
    
    Set the enableLinuxArm64Node parameter to true in the data field of the eci-profile. Make sure that at least one of the configured zones supports ARM-based elastic container instances. Example:
    
    ```
    data:
      enableClusterIp: "true"
      enableHybridMode: "false"
      enableLinuxArm64Node: "true"    # Enables the ARM-based node feature.
      enableLogController: "false"
      enablePVCController: "false"
      enablePrivateZone: "false"
      enableReuseSSLKey: "false"
      featureGates: MetricsVpcNet=true,ProtectionFinalizers=false,WaitForFirstConsumer=false
      resourceGroupId: ""
      securityGroupId: sg-2zeg1fci0oq1hljo6h0a
      selectors: ""
      slsMachineGroup: ""
      vSwitchIds: vsw-2zewa5mb19wr45g63****,vsw-2zevanrscmoiaxryx****,vsw-2ze94pjtfuj9vaymf****   # The vSwitch IDs. At least one vSwitch is deployed in a zone in which ARM-based elastic container instances can be created.
      vpcId: vpc-2zeghwzptn5zii0w7****
    ```
    
2.  View the ARM-based virtual node that is generated in the cluster.
    
    Run the `kubectl get node` command to view the information about the node. An ARM-based virtual node is automatically generated in the cluster.
    
    ![ARM节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8196953861/p634602.png)
    

## **Schedule pods to the ARM-based virtual node**

### **Configure the nodeSelector field**

In ACK clusters and ACK Serverless clusters, all ARM-based virtual nodes have the `kubernetes.io/arch: arm64` label. When you create an Elastic Container Instance-based pod, you can use the nodeSelector field to specify an ARM-based virtual node and schedule the pod to run on the node.

```
nodeSelector:
  kubernetes.io/arch: arm64 
```

Sample YAML file of a pod:

-   **No specifications are specified for the pod.**
    
    If you do not specify specifications for the pod, the system automatically uses the ARM-based ECS instance type (ecs.c8y.large) that has 2 vCPUs and 4 GiB of memory.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true"    # Schedules the pod to a virtual node. 
        spec:
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses an ARM-based image. 
            command: ["sleep"]
            args: ["999999"]
          nodeSelector:
            kubernetes.io/arch: arm64  # Specifies an ARM-based virtual node. 
    ```
    
-   **vCPU and memory specifications are specified.**
    
    If you specify vCPU and memory specifications, the system automatically selects an ARM-based ECS instance type that meets the vCPU and memory specifications from the ECS instance types supported by Elastic Container Instance.
    
    **Note**
    
    You can use the limits or requests parameters of containers to specify the vCPU and memory specifications. We recommend that you use the limits parameter. You can also add the `k8s.aliyun.com/eci-use-specs` annotation to specify the vCPU and memory specifications.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true"    # Schedules the pod to a virtual node. 
        spec:
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses an ARM-based image. 
            command: ["sleep"]
            args: ["999999"]
            resources:
              limits:
                cpu: "1000m"      # Specifies 1 vCPU. 
                memory: "4096Mi"   # Specifies that the memory size of the NGINX container is 4 GiB. 
          nodeSelector:
            kubernetes.io/arch: arm64  # Specifies an ARM-based virtual node. 
    ```
    
-   **An ARM-based ECS instance type is specified.**
    
    If you have specific requirements for ECS instance types, you can add the `k8s.aliyun.com/eci-use-specs` annotation to specify an ARM-based ECS instance type. For information about the ARM-based ECS instance types that can be used to create elastic container instances, see [Specify an ARM-based ECS instance type to create a pod](/help/en/eci/user-guide/create-a-pod-by-specifying-the-arm-specification).
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
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
            k8s.aliyun.com/eci-use-specs: "ecs.c8y.large,ecs.g8y.large"   # Specifies ARM-based ECS instance types. You can specify up to five ECS instance types. 
        spec:
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses an ARM-based image. 
            command: ["sleep"]
            args: ["999999"]
          nodeSelector:
            kubernetes.io/arch: arm64  # Schedules the pod to the ARM-based node. 
    ```
    

### Configure tolerations and nodeaffinity to schedule multi-architecture images

If your application image is a multi-architecture image and you want to configure pod scheduling across the x86 and ARM architectures, you can configure tolerations and nodeAffinity to preferentially schedule pods to ARM-based or x86-based virtual nodes.

**Important**

Before you use nodeAffinity to configure node affinity based on the following YAML file, make sure that the virtual node-based pod scheduling feature is enabled for the cluster. For more information, see [Enable the virtual node-based pod scheduling policy for an ACK cluster](/help/en/ack/serverless-kubernetes/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy).

Sample YAML file of a pod:

-   **Preferentially schedule the pod to an ARM-based virtual node**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true"    # Schedules the pod to a virtual node. 
        spec:
          tolerations:                 # Taints of nodes that tolerate the ARM architecture. 
          - key: kubernetes.io/arch
            operator: Equal
            value: arm64
            effect: NoSchedule
          affinity:                 
            nodeAffinity:     
              preferredDuringSchedulingIgnoredDuringExecution:
              - weight: 1
                preference:
                  matchExpressions:
                  - key: kubernetes.io/arch
                    operator: In
                    values:
                    - arm64       # Preferentially schedules the pod to the ARM-based virtual node. 
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses multi-architecture images. 
            command: ["sleep"]
            args: ["999999"]
    ```
    
-   **Preferentially schedule the pod to an x86-based virtual node**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true"    # Schedules the pod to a virtual node. 
        spec:
          tolerations:                 # Taints of nodes that tolerate the ARM architecture. 
          - key: kubernetes.io/arch
            operator: Equal
            value: arm64
            effect: NoSchedule
          affinity:                 
            nodeAffinity:     
              preferredDuringSchedulingIgnoredDuringExecution:
              - weight: 1
                preference:
                  matchExpressions:
                  - key: kubernetes.io/arch
                    operator: In
                    values:
                    - amd64         # Preferentially schedules the pod to the x86-based virtual node. 
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses multi-architecture images. 
            command: ["sleep"]
            args: ["999999"]
    ```
    

## **References**

-   ACK clusters: [Schedule workloads to ARM-based nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-workloads-to-arm-based-nodes)
    
-   ACK Serverless clusters: [Schedule workloads to ARM-based virtual nodes](/help/en/ack/serverless-kubernetes/user-guide/schedule-workloads-to-arm-based-virtual-nodes)
