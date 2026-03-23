By default, and ACK Serverless clusters schedule all workloads to x86 virtual nodes. If your cluster contains both Arm and non-Arm virtual nodes, such as x86 virtual nodes, you can use native Kubernetes scheduling configurations to ensure that Arm-only workloads run only on Arm virtual nodes, or that multi-architecture images are scheduled to Arm virtual nodes first.

## Prerequisites

-   Cluster:
    
    An ACK Serverless cluster that runs Kubernetes version 1.20 or later is created. For more information, see [Create a cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2#task-e3c-311-ydb) and [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
    **Note**
    
    Arm instances are available only in specific regions and zones. Ensure that your cluster is deployed in a supported region. To view the list of supported regions and zones, see [ECS instance types: Available regions overview](https://ecs-buy.alibabacloud.com/instanceTypes?spm=a2c4g.607899.0.0.3a0d566dsy5Yh8#/instanceTypeByRegion).
    
-   Component: The ack-virtual-node component of version 2.9.0 or later is installed. For more information, see [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node#task-2441973).
    

## **Precautions**

If your cluster runs a Kubernetes version earlier than 1.24, you must declare a toleration for the `kubernetes.io/arch=arm64:NoSchedule` taint when you use `nodeSelector` or `nodeAffinity` to schedule applications to Arm nodes. If your cluster runs Kubernetes version 1.24 or later, the scheduler automatically recognizes the `kubernetes.io/arch=arm64:NoSchedule` taint on Arm nodes. You do not need to manually declare this toleration.

## **Billing**

For more information about ARM-based ECS instance types and their pricing, see the following documents:

-   [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [ECS Instance Type Pricing](https://www.alibabacloud.com/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.54c3b91aOcTPKD#/commodity/vm_intl)
    
-   [Overview of ECS instance types available for purchase by region](https://ecs-buy.alibabacloud.com/instanceTypes?spm=a2c4g.607899.0.0.3a0d566dsy5Yh8#/instanceTypeByRegion)
    

## Step 1: Add an Arm virtual node

Before you deploy Arm workloads in your cluster, you must create an Arm virtual node. You can configure an ECI Profile to enable Arm architecture support. You can edit the `eci-profile` configuration file using one of the following methods. For more information about ECI Profiles, see [Configure an ECI profile](/help/en/eci/user-guide/configure-an-eci-profile).

## Console

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Configurations** > **ConfigMaps**.
    
3.  In the **Namespace** drop-down list, select **kube-system**. Find the **eci-profile** ConfigMap and click **Edit**. Change the value of the `enableLinuxArm64Node` key to `true`. Then, click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9257470171/p747577.png)
    
    **Note**
    
    If no vSwitch in your cluster's zones supports Arm instances, first create a vSwitch in a supported zone. Then, add the vSwitch ID to the `vSwitchIds` field. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    

## kubectl

### Prerequisites

[Obtain the KubeConfig file for the cluster and use kubectl to connect to the cluster.](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136)

### Procedure

Run the following command to edit the ConfigMap:

```
kubectl edit configmap eci-profile -n kube-system
```

1.  Set the `enableLinuxArm64Node` parameter to `true`.
    
2.  Set `vSwitchIds` to include at least one vSwitch from a zone that supports Arm instances.
    
    **Note**
    
    If no vSwitch in your cluster's zones supports Arm instances, first create a vSwitch in a supported zone. Then, add the vSwitch ID to the `vSwitchIds` field. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    

## Step 2: Schedule workloads to Arm virtual nodes

### Schedule Arm-only workloads to Arm virtual nodes

If your cluster contains both Arm-based nodes and other types of nodes, and your workloads support only the Arm architecture, you can schedule the workloads to run exclusively on Arm-based nodes. This prevents pods from being scheduled to other nodes, which would cause the pods to fail. By default, all Arm-based nodes have the `kubernetes.io/arch=arm64` label. You can use \`nodeSelector\` or \`nodeAffinity\` to deploy workloads to Arm-based nodes.

## nodeSelector

To use \`nodeSelector\` to schedule a pod to an Arm virtual node, add the following constraint to the pod specification. This constraint ensures that the workload runs only on nodes that have the \`arm64\` label. All Arm virtual nodes in and ACK Serverless clusters have this label.

```
nodeSelector:
  kubernetes.io/arch: arm64 # Schedule to Arm nodes.
```

The following example shows how to deploy a stateless application to an Arm virtual node.

**View YAML file**

**Note**

The following YAML file adds a toleration for `kubernetes.io/arch=arm64:NoSchedule`. If your cluster is an ACK Managed Cluster Pro that runs Kubernetes 1.24 or later, the ACK scheduler automatically detects this taint and you do not need to declare the toleration.

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
        kubernetes.io/arch: arm64 # Schedule to Arm nodes.
      tolerations:
      # Tolerate the virtual node taint.
        - key: virtual-kubelet.io/provider
          operator: Exists
          effect: NoSchedule
      # Tolerate the Arm virtual node taint.
        - key: kubernetes.io/arch
          operator: Equal
          value: arm64
          effect: NoSchedule
      containers:
      - name: nginx
        image: alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/nginx_optimized:20240221-1.20.1-2.3.0
```

## nodeAffinity

#### **Prerequisites**

Virtual node scheduling is enabled for your cluster. For more information, see [Enable virtual node scheduling](/help/en/ack/serverless-kubernetes/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy). Ensure that your cluster and component versions meet the requirements.

#### Example

You can add the following node affinity constraint to a pod to deploy the application to Arm64 nodes. This constraint specifies that the pod can be scheduled only on nodes that have the label `kubernetes.io/arm=arm64`.

If this constraint is present in the pod specification, the scheduler automatically adds a toleration for the `kubernetes.io/arch=arm64:NoSchedule` taint on the node.

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

The following example shows how to deploy a stateless application to an Arm virtual node.

**View YAML file**

**Note**

The following YAML file adds a toleration for `kubernetes.io/arch=arm64:NoSchedule`. If your cluster is an ACK Managed Cluster Pro that runs Kubernetes 1.24 or later, the ACK scheduler automatically detects this taint and you do not need to declare the toleration.

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
      tolerations:
       # Tolerate the virtual node taint.
        - key: virtual-kubelet.io/provider
          operator: Exists
          effect: NoSchedule
       # Tolerate the Arm virtual node taint.
        - key: kubernetes.io/arch
          operator: Equal
          value: arm64
          effect: NoSchedule         
      containers:
      - name: nginx
        image: nginx
```

### Schedule multi-architecture images to Arm virtual nodes

#### Prerequisites

Virtual node scheduling is enabled for your cluster. For more information, see [Enable virtual node scheduling](/help/en/ack/serverless-kubernetes/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy). Ensure that your cluster and component versions meet the requirements.

#### Example

By default, and ACK Serverless clusters schedule all workloads to x86 virtual nodes. If x86 resources are insufficient, the workloads wait for x86 resources to become available. If your application image supports multiple architectures, such as both x86 and Arm, you must configure cross-architecture node scheduling.

For example, you can use node affinity to prioritize scheduling to Arm or x86 virtual nodes. If the preferred node type has insufficient resources, the scheduler attempts to schedule the workloads to nodes of other architectures.

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

## Prefer Arm architecture

The following example shows how to prefer Arm virtual nodes.

**View YAML file**

**Note**

The following YAML file adds a toleration for `kubernetes.io/arch=arm64:NoSchedule`. If your cluster is an ACK Managed Cluster Pro that runs Kubernetes 1.24 or later, the ACK scheduler automatically detects this taint and you do not need to declare the toleration.

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
      tolerations:
      # Tolerate the virtual node taint.
      - key: virtual-kubelet.io/provider
        operator: Exists
        effect: NoSchedule
      # Tolerate the Arm virtual node taint.
      - key: kubernetes.io/arch
        operator: Equal
        value: arm64
        effect: NoSchedule
      # Prefer Arm architecture nodes.
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

## Prefer x86 architecture

The following example shows how to prefer x86 virtual nodes.

**View YAML file**

**Note**

The following YAML file adds a toleration for `kubernetes.io/arch=arm64:NoSchedule`. If your cluster is an ACK Managed Cluster Pro that runs Kubernetes 1.24 or later, the ACK scheduler automatically detects this taint and you do not need to declare the toleration.

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
      # Tolerate the virtual node taint.
      - key: virtual-kubelet.io/provider
        operator: Exists
        effect: NoSchedule
      # Tolerate the Arm virtual node taint.
      - key: kubernetes.io/arch
        operator: Equal
        value: arm64
        effect: NoSchedule     
      # Prefer x86 architecture nodes.
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

### Why does my pod schedule to an x86 ECS node even though I configured nodeAffinity to prefer Arm nodes?

By default, the cluster scheduler prefers ECS nodes and schedules workloads to virtual nodes only when ECS resources are insufficient. If you do not change the weights of the scheduler scoring plugin and your cluster has sufficient x86 ECS resources, the pod may still be scheduled to an x86 ECS node, even if you configured \`nodeAffinity\` to prefer Arm nodes. Therefore, the \`nodeAffinity\` settings in this topic control scheduling priority only among Arm and x86 virtual nodes, not between virtual nodes and ECS nodes.

### Can I use Arm-based spot instances?

Yes. Arm-based spot instances are available. For more information, see [Use spot instances](/help/en/ack/use-preemptible-instances).

### After creating a cluster in a region, how do I configure networking to support Arm virtual nodes?

After you create an or an ACK Serverless cluster in a supported zone, you must set the \`vSwitchIds\` field in the `eci-profile` to include a vSwitch from a zone that supports Arm instances. This ensures that Arm virtual nodes are created.

### What are the limitations of using Arm nodes in and ACK Serverless clusters?

Currently, the Arm architecture does not support Marketplace components. The Component Center supports only the following modules:

-   Core components
    
-   Logging and monitoring
    
-   Storage
    
-   Networking
    

## References

-   You can use Container Registry Enterprise Edition (ACR EE) to build multi-architecture container images. For more information, see [Build multi-architecture container images](/help/en/acr/user-guide/build-multi-schema-container-images).
    
-   For more information about how to create and manage standard Arm ECS nodes, see [Schedule workloads to Arm nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-workloads-to-arm-based-nodes).
    
-   If you run big data tasks and want to avoid managing the underlying cluster resources, see [Run Spark jobs on Arm-based virtual nodes](/help/en/doc-detail/2362817.html).
