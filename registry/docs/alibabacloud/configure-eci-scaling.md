When you deploy a service in an ACK cluster, you can use tolerations and node affinity to specify whether to use only ECS or ECI resources. You can also automatically request ECI resources when ECS resources are insufficient. This lets you configure scheduling policies to meet the elastic resource requirements for various workload scenarios.

## Related concepts

-   **Taints**: Rules set on a node that repel certain pods from being scheduled to it.
    
-   **Tolerations**: Properties applied to pods that allow them to ignore a node's taints during scheduling.
    
-   **Node affinity**: A pod property that schedules a pod to nodes with specific labels. It includes two types:
    
    -   `requiredDuringSchedulingIgnoredDuringExecution`: A hard requirement. The rule must be met for the scheduler to schedule the pod.
        
    -   `preferredDuringSchedulingIgnoredDuringExecution`: A soft requirement. The scheduler tries to find a node that meets the rule. If a matching node is not found, the scheduler still schedules the pod.
        

For more information, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) and [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/).

## Prerequisites

-   The cluster is an ACK Managed Cluster Pro Edition and its version is v1.22 or later.
    
-   The [ack-virtual-node](/help/en/ack/product-overview/ack-virtual-node) component of v2.10.0 or later is deployed in the cluster. For more information about how to install and upgrade the ack-virtual-node component, see [Virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-overview/).
    
-   The version of the [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) component in the cluster is v5.9 or later, and the virtual node scheduling policy is enabled.
    
    On the **Add-ons** page, find **Kube Scheduler**, click **Configuration**, and then confirm that **Enable Virtual Node-based Pod Scheduling** is selected.
    

## Configuration examples

Virtual nodes deployed in an ACK cluster have a default taint: `virtual-kubelet.io/provider=alibabacloud:NoSchedule`. This taint prevents the unintentional use of ECI resources. To schedule pods to virtual nodes and use ECI resources, you must configure a toleration for this taint.

```
      tolerations:
      - key: virtual-kubelet.io/provider
        operator: Equal
        value: alibabacloud
        effect: NoSchedule
```

You can combine tolerations and node affinity to implement hybrid scheduling policies with both preferred and required rules. This helps meet the different resource requirements of various services.

-   **Prioritize ECS**: Prioritize the use of ECS resources. When ECS resources in the cluster are insufficient, use ECI resources.
    
-   **Use only ECI**: Use only ECI resources and not the ECS resources in the cluster.
    
-   **Use only ECS**: Use only the existing ECS resources in the cluster.
    

## Prioritize ECS

To schedule pods to virtual nodes, you must add a toleration for the default taint on virtual nodes. You can also configure node affinity. Use `preferredDuringSchedulingIgnoredDuringExecution` to specify a scheduling preference that prioritizes nodes without the `type: virtual-kubelet` label (ECS nodes).

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecs-prefer
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      tolerations:
      - key: virtual-kubelet.io/provider
        operator: Equal
        value: alibabacloud
        effect: NoSchedule
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: type
                operator: NotIn
                values:
                - virtual-kubelet
      containers:
      - name: my-container
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
```

**Note**

When you configure node affinity, note the following:

-   If you specify multiple `matchExpressions` under `nodeSelectorTerms`, the pod is scheduled to a node if any expression is met (logical OR). If you specify multiple expressions within a single `matchExpressions`, the pod is scheduled to a node only if all expressions are met (logical AND).
    
-   Using `preferredDuringSchedulingIgnoredDuringExecution` to prioritize ECS scheduling does not guarantee that pods are scheduled to ECI only when ECS resources are insufficient. Pods may be scheduled to ECI even when ECS resources are available. For stricter requirements, use `requiredDuringSchedulingIgnoredDuringExecution` to configure more specific, required rules.
    

To prioritize deploying pods to ECS nodes with a specific label, such as `label_1=key_1`, and use virtual nodes for elastic scaling when those nodes lack resources, use the following YAML configuration.

Expand to view YAML details

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: some-ecs-prefer
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      tolerations:
      - key: virtual-kubelet.io/provider
        operator: Equal
        value: alibabacloud
        effect: NoSchedule
      affinity:
        nodeAffinity:
    # Specifies that the pod must be scheduled to a node with the label_1:key_1 or type:virtual-kubelet label.
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: label_1
                operator: In
                values:
                - key_1
            - matchExpressions:
              - key: type
                operator: In
                values:
                - virtual-kubelet
    # Specifies that the pod is preferentially scheduled to a node with the label_1:key_1 label, and then to a node with the type:virtual-kubelet label.
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: label_1
                operator: In
                values:
                - key_1
          - weight: 1
            preference:
              matchExpressions:
              - key: type
                operator: In
                values:
                - virtual-kubelet
      containers:
      - name: my-container
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
```

## Use only ECI

To schedule pods to virtual nodes, you must add a toleration for their default taint and configure node affinity. Use `requiredDuringSchedulingIgnoredDuringExecution` to require that pods are scheduled only to nodes with the `type: virtual-kubelet` label (virtual nodes).

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eci-only
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      tolerations:
      - key: virtual-kubelet.io/provider
        operator: Equal
        value: alibabacloud
        effect: NoSchedule
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: type
                operator: In
                values:
                - virtual-kubelet
      containers:
      - name: my-container
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            
```

## Use only ECS

Virtual nodes have a default taint. If you do not configure a toleration for this taint, pods are scheduled only to ECS nodes.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecs-only
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
```
