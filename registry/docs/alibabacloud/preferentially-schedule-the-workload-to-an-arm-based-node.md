By default, Container Service for Kubernetes (ACK) schedules all workloads to x86-based worker nodes. If your cluster contains ARM-based nodes and other nodes, such as x86-based nodes, you can configure Kubernetes scheduling to preferably schedule ARM workloads only to ARM-based nodes or schedule multi-arch workloads to ARM-based nodes.

## Prerequisites

-   A cluster that runs Kubernetes 1.20 or later is created. The operating system of the cluster is [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3). For more information, see [Create a cluster](/help/en/ack/create-a-cluster-1) and [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
    **Note**
    
    -   On the Add-ons page, only the **Core Components**, **Logs and Monitoring**, **Storage**, and **Networking** components can be used in ARM-based node pools.
        
    -   Components displayed on the Marketplace page of the ACK console cannot be deployed in ARM-based node pools.
        
    
-   The [kube-scheduler](/help/en/ack/product-overview/kube-scheduler#task-2280286) component is installed. For more information, see [Manage components](/help/en/ack/manage-system-components).
    

## **Usage notes**

If both ARM-based nodes and x86-based nodes exist in your cluster, we recommend that you add the `kubernetes.io/arch=arm64:NoSchedule` taint to ARM-based nodes. This avoids accidentally scheduling applications or components that do not support the ARM architecture to ARM-based nodes. When you configure `nodeSelector` or `nodeAffinity` to schedule applications to ARM-based nodes in an ACK cluster that runs a Kubernetes version earlier than 1.24, you need to add a `toleration` to tolerate the `kubernetes.io/arch=arm64:NoSchedule` taint. However, if the cluster runs Kubernetes 1.24 or later, the scheduler automatically tolerates the `kubernetes.io/arch=arm64:NoSchedule` taint. In this case, you do not need to add a `toleration` to tolerate the taint.

## **Billing**

For more information about the ECS instance types that use the ARM architecture and the pricing of these types, see the following topics:

-   [Instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.54c3b91aOcTPKD#/commodity/vm_intl)
    
-   [Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes?spm=a2c4g.607899.0.0.3a0d566dsy5Yh8#/instanceTypeByRegion)
    

## Create an ARM-based cluster or node pool

When you create an ACK cluster, you can add ARM-based nodes to obtain a cluster that contains only ARM-based nodes. You can also create an ARM-based node pool in an existing cluster to obtain a node pool that contains only ARM-based nodes.

## Create an ARM-based node pool when you create a cluster

When you configure the node pool for the cluster, select **Arm** for the **Architecture** parameter in the **Instance Type** section. Then, select g8m general-purpose instances and configure other parameters based on your business requirements. For more information about the required configuration items to create an ACK cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8980122371/p746950.png)

**Note**

You can go to the [ECS Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) page to view the instance types available in each region.

## Create a node pool

When you create a node pool, set the **Architecture** parameter to **ARM** in the **Instance Type** section. Then, configure other parameters based on your business requirements. For more information about node pool parameters, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8980122371/p746950.png)

**Note**

You can go to the [ECS Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) page to view the instance types available in each region.

## **Schedule ARM workloads to ARM-based nodes**

If your cluster contains ARM-based nodes and other nodes and all workloads use the ARM architecture, you must schedule the workloads only to ARM-based nodes. If pods are scheduled to other nodes, the pods cannot launch. By default, all ARM-based nodes have the `kubernetes.io/arch=arm64` label. You can use the nodeSelector or nodeAffinity setting to schedule workloads to the nodes.

## nodeSelector

Add the following constraint to pods. This way, the nodeSelector schedules pods to ARM-based nodes. The nodeSelector schedules the pods of the workload only to nodes that have the `arm64` label. All ARM-based nodes in the cluster have this label.

```
nodeSelector:
  kubernetes.io/arch: arm64 # Specify the label that is used to select an ARM-based node.
```

You can use the following YAML file to deploy a stateless application on an ARM-based node:

**Show YAML content**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: only-arm
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: nginx
    spec:
      nodeSelector:
        kubernetes.io/arch: arm64 # Specify the label that is used to select an ARM-based node. 
      containers:
      - name: nginx
        image: nginx
```

## nodeAffinity

You can add the following constraint to a pod to schedule the pod to an ARM-based node based on node affinity: After you add the constraint, the pod can be scheduled only to a node that has the `kubernetes.io/arm=arm64` label.

When the pod spec contains the constraint, the scheduler tolerates the `kubernetes.io/arch=arm64:NoSchedule` taint.

```
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/arch
          operator: In
          values:
          - arm64
```

You can use the following YAML file to deploy a stateless application on an ARM-based node:

**Show YAML content**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: only-arm
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: nginx
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/arch
                operator: In
                values:
                - arm64
      containers:
      - name: nginx
        image: nginx
```

## **Schedule multi-arch workloads to ARM-based nodes**

By default, ACK schedules all workloads to x86-based nodes. If x86 nodes are insufficient, pods become pending. If your application image is a multi-arch image, such as an image that supports the x86 and ARM architectures, you must configure cross-architecture node scheduling.

For example, you can configure node affinity to preferably schedule workloads to ARM-based or x86-based nodes. Then, schedule workloads to other types of nodes when ARM-based or x86-based nodes are insufficient.

```
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: kubernetes.io/arch
                operator: In
                values:
                - arm64
```

## Preferably schedule the workload to an ARM-based node

The following workload is preferably scheduled to ARM-based nodes.

**Show YAML content**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: arm-prefer
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
# Preferentially schedule the workload to an ARM-based node. 
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: kubernetes.io/arch
                operator: In
                values:
                - arm64
      containers:
      - name: my-container
        image: nginx
```

## Preferably schedule the workload to an x86-based node

The following workload is preferably scheduled to x86-based nodes.

**Show YAML content**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: amd-prefer
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      tolerations:
# Preferably schedule the workload to an x86-based node. 
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: kubernetes.io/arch
                operator: In
                values:
                - amd64
      containers:
      - name: my-container
        image: nginx
```

## FAQ

### Can I use ARM-based preemptible instances?

Yes, you can use ARM-based preemptible instances. For more information, see [Use preemptible instances](/help/en/ack/use-preemptible-instances).

### What are the limits on using ARM-based nodes in ACK clusters?

Only the following components support the ARM architecture:

-   Key component
    
-   Logging and monitoring components
    
-   Volume components
    
-   Network components
    

Components that are displayed on the Marketplace page of the ACK console do not support the ARM architecture.

## **Reference**

-   You can create ARM-based virtual nodes and preferably schedule workloads to ARM-based virtual nodes. For more information, see [Schedule workloads to ARM-based virtual nodes](/help/en/ack/serverless-kubernetes/user-guide/schedule-workloads-to-arm-based-virtual-nodes).
    
-   You can use Container Registry Enterprise Edition to build multi-arch container images. For more information, see [Build a multi-arch container image](/help/en/acr/user-guide/build-multi-schema-container-images).
    
-   If you want to run big data jobs without performing O&M on cluster resources, see [Run Spark jobs on ARM-based virtual nodes](/help/en/doc-detail/2362817.html).
