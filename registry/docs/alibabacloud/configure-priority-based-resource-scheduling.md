Custom elastic resource priority scheduling is an elastic scheduling policy provided by Alibaba Cloud. During application deployment or scale-out, you can define a ResourcePolicy to specify the order in which application instance pods are scheduled to different types of node resources. During scale-in, pods are removed in the reverse order of their scheduling.

**Warning**

Do not use system-reserved labels, such as `alibabacloud.com/compute-class` or `alibabacloud.com/compute-qos`, in the label selector of a workload, such as the `spec.selector.matchLabels` field of a Deployment. These labels may be modified by the system during custom priority scheduling, which causes the controller to frequently rebuild pods and affects application stability.

## Prerequisites

-   An ACK managed cluster Pro edition of version 1.20.11 or later is created. To upgrade the cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    
-   The scheduler version must meet the following requirements for different ACK cluster versions. For more information about the features supported by each scheduler version, see [kube-scheduler](/help/en/ack/product-overview/kube-scheduler#task-2280286).
    
    **ACK version**
    
    **Scheduler version**
    
    1.20
    
    v1.20.4-ack-7.0 or later
    
    1.22
    
    v1.22.15-ack-2.0 or later
    
    1.24 or later
    
    All versions are supported
    
-   To use ECI resources, the **ack-virtual-node** component must be deployed. For more information, see [Use ECI in ACK](/help/en/eci/use-ecis-in-ack-clusters#topic-1860167).
    

## Precautions

-   Starting from scheduler version v1.x.x-aliyun-6.4, the default value of the `ignorePreviousPod` field for custom elastic resource priority is changed to `False`, and `ignoreTerminatingPod` is changed to `True`. Existing ResourcePolicy objects and their subsequent updates are not affected.
    
-   This feature conflicts with [pod-deletion-cost](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#pod-deletion-cost) and cannot be used at the same time.
    
-   This feature cannot be used with ECI elastic scheduling that is implemented through ElasticResource. For more information, see [Use ElasticResource for elastic scheduling of ECI pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-elastic-container-instance-based-scheduling#task-2056413).
    
-   This feature uses a BestEffort policy and does not guarantee that pods are scaled in strictly in reverse order.
    
-   The max field is available only in clusters of version 1.22 or later with scheduler version 5.0 or later.
    
-   When used with elastic node pools, this feature may cause the node pools to create invalid nodes. To prevent this, include the elastic node pool in a unit and do not set the max field for that unit.
    
-   If your scheduler version is earlier than 5.0 or your cluster version is 1.20 or earlier, note that pods that exist before the ResourcePolicy is created are the first to be scaled in.
    
-   If your scheduler version is earlier than 6.1 or your cluster version is 1.20 or earlier, do not modify a ResourcePolicy while its associated pods are not completely deleted.
    

## Usage

Create a ResourcePolicy to define the elastic resource priority:

```
apiVersion: scheduling.alibabacloud.com/v1alpha1
kind: ResourcePolicy
metadata:
  name: test
  namespace: default
spec:
  selector:
    key1: value1
  strategy: prefer
  units:
  - nodeSelector:
      unit: first
    podLabels:
      key1: value1
    podAnnotations:
      key1: value1
    resource: ecs
  - nodeSelector:
      unit: second
    max: 10
    resource: ecs
  - resource: eci
  # Optional, Advanced Configurations
  preemptPolicy: AfterAllUnits
  ignorePreviousPod: false
  ignoreTerminatingPod: true
  matchLabelKeys:
  - pod-template-hash
  whenTryNextUnits:
    policy: TimeoutOrExceedMax
    timeout: 1m
```

-   `selector`: Specifies that the ResourcePolicy applies to pods that have the `label` `key1=value1` in the same namespace. If the `selector` is empty, the policy applies to all pods in the namespace.
    
-   `strategy`: The scheduling strategy. Currently, only `prefer` is supported.
    
-   `units`: User-defined scheduling units. During scale-out, pods are scheduled to resources in the order defined in `units`. During scale-in, pods are removed in the reverse order.
    
    -   `resource`: The type of elastic resource. The supported types are `eci`, `ecs`, `elastic`, and `acs`. The `elastic` type is available in clusters of version 1.24 or later with scheduler version 6.4.3 or later. The `acs` type is available in clusters of version 1.26 or later with scheduler version 6.7.1 or later.
        
        **Note**
        
        The `elastic` type is being deprecated. You can use auto-scaling node pools by setting `k8s.aliyun.com/resource-policy-wait-for-ecs-scaling: "true"` in \`podLabels\`.
        
        **Note**
        
        By default, the `acs` type adds the `alibabacloud.com/compute-class: default` and `alibabacloud.com/compute-class: general-purpose` labels to pods. You can overwrite these default values by specifying different values in \`podLabels\`. However, if `alpha.alibabacloud.com/compute-qos-strategy` is specified in \`podAnnotations\`, the `alibabacloud.com/compute-class: default` label is not added.
        
        **Note**
        
        The `acs` and `eci` types add tolerations for virtual node taints to pods by default. The scheduler adds these tolerations internally and they are not reflected in the pod spec. Pods can be scheduled to virtual nodes without requiring additional taint toleration configurations.
        
        **Important**
        
        In scheduler versions earlier than 6.8.3, you cannot use multiple units of the `acs` type at the same time.
        
    -   `nodeSelector`: Identifies the nodes in this scheduling unit using `labels` on the `node`.
        
    -   `max` (Available in scheduler version 5.0 or later): The maximum number of pod replicas that can be scheduled in this unit.
        
    -   `maxResources` (Available in scheduler version 6.9.5 or later): The maximum amount of resources that can be scheduled for pods in this unit.
        
    -   `podAnnotations`: The type is `map[string]string{}`. The key-value pairs configured in `podAnnotations` are updated to the pod by the scheduler. Only pods with these key-value pairs are counted when calculating the number of pods in the unit.
        
    -   `podLabels`: The type is `map[string]string{}`. The key-value pairs configured in `podLabels` are updated to the pod by the scheduler. Only pods with these key-value pairs are counted when calculating the number of pods in the unit.
        
        **Note**
        
        If the \`podLabels\` of a unit include the `k8s.aliyun.com/resource-policy-wait-for-ecs-scaling: "true"` label, or if the number of pods in the current unit is less than the \`max\` value, the scheduler keeps the pod in a waiting state in the current unit. You can set the waiting time in `whenTryNextUnits`. The `k8s.aliyun.com/resource-policy-wait-for-ecs-scaling: "true"` label is not applied to the pod and is not required for pod counting.
        
        **Note**
        
        When ResourcePolicy is used with auto-scaling, it must be used with instant elasticity. The cluster-autoscaler may otherwise trigger incorrect node pool scaling.
        
-   `preemptPolicy`: Specifies the preemption policy when a \`ResourcePolicy\` contains multiple `unit`s. \`BeforeNextUnit\` indicates that the scheduler attempts preemption each time it fails to schedule a unit. \`AfterAllUnits\` indicates that the scheduler attempts preemption only after it fails to schedule the last unit. The default value is \`AfterAllUnits\`. This parameter is available for scheduler v6.1 or later and does not apply to ACS.
    
    > You can enable preemption by configuring ACK Scheduler parameters. For more information, see [Enable preemption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-preemptive-scheduling).
    
-   `ignorePreviousPod` (Available in scheduler version 6.1 or later): Must be used with `max` in `units`. If this value is `true`, pods that were scheduled before the ResourcePolicy was created are ignored during pod counting.
    
-   `ignoreTerminatingPod` (Available in scheduler version 6.1 or later): Must be used with `max` in `units`. If this value is `true`, pods in the Terminating state are ignored during pod counting.
    
-   `matchLabelKeys` (Available in scheduler version 6.2 or later): Must be used with `max` in `units`. Pods are grouped based on the values of their labels. The `max` count is applied to each group of pods separately. If a pod is missing a label declared in `matchLabelKeys`, the pod is rejected by the scheduler.
    
-   `whenTryNextUnits` (Available in cluster version 1.24 or later with scheduler version 6.4 or later): Describes the conditions under which a pod is allowed to use resources from subsequent units.
    
    -   `policy`: The policy used by the pod. Valid values are `ExceedMax`, `LackResourceAndNoTerminating`, `TimeoutOrExceedMax`, and `LackResourceOrExceedMax` (default).
        
        -   `ExceedMax`: Allows a pod to use resources from the next unit if the \`max\` and \`maxResources\` fields are not set for the current unit, or if the number of pods in the current unit is greater than or equal to the \`max\` value, or if the resources used in the current unit plus the resources of the current pod exceed the \`maxResources\` value. This policy can be used with auto-scaling and ECI to prioritize the auto-scaling of node pools.
            
            **Important**
            
            -   Note that if the auto-scaling node pool cannot create nodes for a long time, this policy may cause pods to remain in the Pending state.
                
            -   Currently, the Cluster Autoscaler is not aware of the max limit in ResourcePolicy. The actual number of created instances may be greater than the value of max. This issue will be optimized in a future version.
                
            
        -   `TimeoutOrExceedMax`: When one of the following conditions is met:
            
            -   The max field of the current unit is set and the number of pods in the unit is less than the value of max, or the maxResources field is set and the scheduled resources plus the current pod's resources are less than the value of maxResources.
                
            -   The max field for the current unit is not set, and the podLabels of the current unit contain `k8s.aliyun.com/resource-policy-wait-for-ecs-scaling: "true"`.
                
            
            If the current unit has insufficient resources to schedule the pod, the pod waits in the current unit for a maximum duration specified by `timeout`. This policy can be used with auto-scaling and ECI to prioritize scaling out the node pool and automatically use ECI after the timeout.
            
            **Important**
            
            Note that if a node is created during the timeout period but is not in the Ready state, and the pod does not tolerate the NotReady taint, the pod is still scheduled to ECI.
            
        -   `LackResourceOrExceedMax`: Allows a pod to use resources from the next unit if the number of pods in the current unit is greater than or equal to the \`max\` value, or if the current unit runs out of resources. This is the default policy and is suitable for most basic requirements.
            
        -   `LackResourceAndNoTerminating`: Allows a pod to use resources from the next unit if the current unit lacks available resources or has reached its maximum pod count (\`max\`), and no pods in the current unit are in the \`Terminating\` state. This policy is suitable for rolling update strategies because it prevents new pods from being scheduled to subsequent units while pods in the current unit are terminating.
            
    -   `timeout` (This parameter is not supported for ACS units, which are limited only by \`max\`): The timeout duration when \`policy\` is set to `TimeoutOrExceedMax`. If this field is empty, the default value is 15 minutes.
        

## Scenario examples

**Scenario 1: Schedule based on node pool priority**

You need to deploy a Deployment. The cluster has two node pools: Node Pool A and Node Pool B. You want to schedule pods to Node Pool A first. If Node Pool A has insufficient resources, schedule the pods to Node Pool B. When scaling in, you want to remove pods from Node Pool B first, and then from Node Pool A. In this example, `cn-beijing.10.0.3.137` and `cn-beijing.10.0.3.138` belong to Node Pool A. `cn-beijing.10.0.6.47` and `cn-beijing.10.0.6.46` belong to Node Pool B. All nodes have 2 vCPUs and 4 GB of memory. The following steps describe how to schedule based on node pool priority:

1.  Use the following YAML content to create a ResourcePolicy to customize the node pool scheduling order.
    
    ```
    apiVersion: scheduling.alibabacloud.com/v1alpha1
    kind: ResourcePolicy
    metadata:
      name: nginx
      namespace: default
    spec:
      selector:
        app: nginx # This must be associated with the label of the pod that you will create later.
      strategy: prefer
      units:
      - resource: ecs
        nodeSelector:
          alibabacloud.com/nodepool-id: np7ec79f2235954e879de07b780058****
      - resource: ecs
        nodeSelector:
          alibabacloud.com/nodepool-id: npab2df797738644e3a7b7cbf532bb****
    ```
    
    **Note**
    
    You can obtain the node pool ID from the **Node Management > Node Pools** page of the cluster. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443).
    
2.  Use the following YAML content to create a Deployment with two pods.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          labels:
            app: nginx # This must be associated with the selector of the ResourcePolicy created in the previous step.
        spec:
          containers:
          - name: nginx
            image: nginx
            resources:
              limits:
                cpu: 2
              requests:
                cpu: 2
    ```
    
3.  Create the Nginx application and view the deployment result.
    
    1.  Run the following command to create the Nginx application.
        
        ```
        kubectl apply -f nginx.yaml
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx created
        ```
        
    2.  Run the following command to view the deployment result.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE   IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-b****   1/1     Running   0          17s   172.29.112.216   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-k****   1/1     Running   0          17s   172.29.113.24    cn-beijing.10.0.3.138   <none>           <none>
        ```
        
        The output shows that the first two pods are scheduled to the nodes in Node Pool A.
        
4.  Scale out the pods.
    
    1.  Run the following command to scale out the pods to four replicas.
        
        ```
        kubectl scale deployment nginx --replicas 4                      
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    2.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE    IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-b****   1/1     Running   0          101s   172.29.112.216   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-k****   1/1     Running   0          101s   172.29.113.24    cn-beijing.10.0.3.138   <none>           <none>
        nginx-9cdf7bbf9-m****   1/1     Running   0          18s    172.29.113.156   cn-beijing.10.0.6.47    <none>           <none>
        nginx-9cdf7bbf9-x****   1/1     Running   0          18s    172.29.113.89    cn-beijing.10.0.6.46    <none>           <none>
        ```
        
        The output shows that when the nodes in Node Pool A have insufficient resources, the new pods are scheduled to the nodes in Node Pool B.
        
5.  Scale in the pods.
    
    1.  Run the following command to scale in the pods from four replicas to two.
        
        ```
        kubectl scale deployment nginx --replicas 2
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    2.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS        RESTARTS   AGE     IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-b****   1/1     Running       0          2m41s   172.29.112.216   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-k****   1/1     Running       0          2m41s   172.29.113.24    cn-beijing.10.0.3.138   <none>           <none>
        nginx-9cdf7bbf9-m****   0/1     Terminating   0          78s     172.29.113.156   cn-beijing.10.0.6.47    <none>           <none>
        nginx-9cdf7bbf9-x****   0/1     Terminating   0          78s     172.29.113.89    cn-beijing.10.0.6.46    <none>           <none>
        ```
        
        The output shows that pods in Node Pool B are removed first, which is the reverse of the scheduling order.
        

**Scenario 2: Hybrid scheduling of ECS and ECI**

You need to deploy a Deployment. The cluster has three types of resources: subscription ECS instances, pay-as-you-go ECS instances, and ECI instances. To reduce resource costs, you want the service deployment to follow this priority order: subscription ECS, pay-as-you-go ECS, and then ECI. When scaling in, you want to remove pods from ECI instances first, then from pay-as-you-go ECS instances, and finally from subscription ECS instances. In this example, the nodes have 2 vCPUs and 4 GB of memory. The following steps describe how to perform hybrid scheduling of ECS and ECI:

1.  Run the following commands to add different `labels` to nodes of different billing methods. You can also use the node pool feature to automatically add `labels`.
    
    ```
    kubectl label node cn-beijing.10.0.3.137 paidtype=subscription
    kubectl label node cn-beijing.10.0.3.138 paidtype=subscription
    kubectl label node cn-beijing.10.0.6.46 paidtype=pay-as-you-go
    kubectl label node cn-beijing.10.0.6.47 paidtype=pay-as-you-go
    ```
    
2.  Use the following YAML content to create a ResourcePolicy to customize the node pool scheduling order.
    
    ```
    apiVersion: scheduling.alibabacloud.com/v1alpha1
    kind: ResourcePolicy
    metadata:
      name: nginx
      namespace: default
    spec:
      selector:
        app: nginx # This must be associated with the label of the pod that you will create later.
      strategy: prefer
      units:
      - resource: ecs
        nodeSelector:
          paidtype: subscription
      - resource: ecs
        nodeSelector:
          paidtype: pay-as-you-go
      - resource: eci
    ```
    
3.  Use the following YAML content to create a Deployment with two pods.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          labels:
            app: nginx # This must be associated with the selector of the ResourcePolicy created in the previous step.
        spec:
          containers:
          - name: nginx
            image: nginx
            resources:
              limits:
                cpu: 2
              requests:
                cpu: 2
    ```
    
4.  Create the Nginx application and view the deployment result.
    
    1.  Run the following command to create the Nginx application.
        
        ```
        kubectl apply -f nginx.yaml
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx created
        ```
        
    2.  Run the following command to view the deployment result.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE   IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-b****   1/1     Running   0          66s   172.29.112.215   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running   0          66s   172.29.113.23    cn-beijing.10.0.3.138   <none>           <none>
        ```
        
        The output shows that the first two pods are scheduled to nodes with the `label` `paidtype=subscription`.
        
5.  Scale out the pods.
    
    1.  Run the following command to scale out the pods to four replicas.
        
        ```
        kubectl scale deployment nginx --replicas 4
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    2.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE     IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-4****   1/1     Running   0          16s     172.29.113.155   cn-beijing.10.0.6.47    <none>           <none>
        nginx-9cdf7bbf9-b****   1/1     Running   0          3m48s   172.29.112.215   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-f****   1/1     Running   0          16s     172.29.113.88    cn-beijing.10.0.6.46    <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running   0          3m48s   172.29.113.23    cn-beijing.10.0.3.138   <none>           <none>
        ```
        
        The output shows that when nodes with the `label` `paidtype=subscription` have insufficient resources, the new pods are scheduled to nodes with the `label` `paidtype=pay-as-you-go`.
        
    3.  Run the following command to scale out the pods to six replicas.
        
        ```
        kubectl scale deployment nginx --replicas 6
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    4.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE     IP               NODE                           NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-4****   1/1     Running   0          3m10s   172.29.113.155   cn-beijing.10.0.6.47           <none>           <none>
        nginx-9cdf7bbf9-b****   1/1     Running   0          6m42s   172.29.112.215   cn-beijing.10.0.3.137          <none>           <none>
        nginx-9cdf7bbf9-f****   1/1     Running   0          3m10s   172.29.113.88    cn-beijing.10.0.6.46           <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running   0          6m42s   172.29.113.23    cn-beijing.10.0.3.138          <none>           <none>
        nginx-9cdf7bbf9-s****   1/1     Running   0          36s     10.0.6.68        virtual-kubelet-cn-beijing-j   <none>           <none>
        nginx-9cdf7bbf9-v****   1/1     Running   0          36s     10.0.6.67        virtual-kubelet-cn-beijing-j   <none>           <none>
        ```
        
        The output shows that when ECS resources are insufficient, the new pods are scheduled to ECI resources.
        
6.  Scale in the pods.
    
    1.  Run the following command to scale in the pods from six replicas to four.
        
        ```
        kubectl scale deployment nginx --replicas 4
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    2.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS        RESTARTS   AGE     IP               NODE                           NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-4****   1/1     Running       0          4m59s   172.29.113.155   cn-beijing.10.0.6.47           <none>           <none>
        nginx-9cdf7bbf9-b****   1/1     Running       0          8m31s   172.29.112.215   cn-beijing.10.0.3.137          <none>           <none>
        nginx-9cdf7bbf9-f****   1/1     Running       0          4m59s   172.29.113.88    cn-beijing.10.0.6.46           <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running       0          8m31s   172.29.113.23    cn-beijing.10.0.3.138          <none>           <none>
        nginx-9cdf7bbf9-s****   1/1     Terminating   0          2m25s   10.0.6.68        virtual-kubelet-cn-beijing-j   <none>           <none>
        nginx-9cdf7bbf9-v****   1/1     Terminating   0          2m25s   10.0.6.67        virtual-kubelet-cn-beijing-j   <none>           <none>
        ```
        
        The output shows that pods on ECI instances are removed first, which is the reverse of the scheduling order.
        
    3.  Run the following command to scale in the pods from four replicas to two.
        
        ```
        kubectl scale deployment nginx --replicas 2
        ```
        
        Expected output:
        
        ```
        deployment.apps/nginx scaled
        ```
        
    4.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS        RESTARTS   AGE     IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-4****   0/1     Terminating   0          6m43s   172.29.113.155   cn-beijing.10.0.6.47    <none>           <none>
        nginx-9cdf7bbf9-b****   1/1     Running       0          10m     172.29.112.215   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-f****   0/1     Terminating   0          6m43s   172.29.113.88    cn-beijing.10.0.6.46    <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running       0          10m     172.29.113.23    cn-beijing.10.0.3.138   <none>           <none>
        ```
        
        The output shows that pods on nodes with the `label` `paidtype=pay-as-you-go` are removed next, which is the reverse of the scheduling order.
        
    5.  Run the following command to check the pod status.
        
        ```
        kubectl get pods -o wide
        ```
        
        Expected output:
        
        ```
        NAME                    READY   STATUS    RESTARTS   AGE   IP               NODE                    NOMINATED NODE   READINESS GATES
        nginx-9cdf7bbf9-b****   1/1     Running   0          11m   172.29.112.215   cn-beijing.10.0.3.137   <none>           <none>
        nginx-9cdf7bbf9-r****   1/1     Running   0          11m   172.29.113.23    cn-beijing.10.0.3.138   <none>           <none>
        ```
        
        The output shows that only pods on nodes with the `label` `paidtype=subscription` remain.
        

## **References**

-   When you deploy services in an ACK cluster, you can use tolerations and node affinity to declare that only ECS or ECI elastic resources are used, or to automatically request ECI resources when ECS resources are insufficient. By configuring scheduling policies, you can meet different requirements for elastic resources in various workload scenarios. For more information, see [Specify resource allocation for ECS and ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling).
    
-   High availability (HA) and high performance are important requirements for running distributed tasks. In an ACK managed cluster Pro edition, you can use native Kubernetes scheduling semantics to discretize distributed tasks across zones to meet HA deployment requirements. You can also use native Kubernetes scheduling semantics to implement affinity-based deployment of distributed tasks in specified zones to meet high-performance deployment requirements. For more information, see [Implement zone-based discretization and affinity scheduling for ECI pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/spread-elastic-container-instance-based-pods-across-zones-and-configure-affinities).
