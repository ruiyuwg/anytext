High availability and high performance are essential to distributed jobs. In an ACK managed Pro cluster, you can use Kubernetes-native scheduling semantics to spread distributed jobs across zones for high availability. You can also use Kubernetes-native scheduling semantics to deploy Elastic Container Instance-based pods in specific zones based on affinity settings for high availability and high performance.

## **Prerequisites**

-   An ACK Serverless Pro cluster is created and the cluster meets the following requirements:
    
    -   The cluster runs Kubernetes version 1.22 or later.
        
    -   The version of the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component in the cluster is 2.10.0 or later.
        
    -   The version of the [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) component in the cluster is 5.9 or later, and the virtual node-based pod scheduling feature is enabled for the cluster. For more information, see [Enable the virtual node-based pod scheduling policy for an ACK cluster](/help/en/ack/serverless-kubernetes/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy).
        
-   Multiple zones (vSwitches) are specified in the eci-profile so that pods can be scheduled to multiple zones. For more information, see [Configure an eci-profile](/help/en/ack/serverless-kubernetes/user-guide/configure-eci-profile).
    
-   Make sure that the `nodeAffinity`, `podAffinity`, and `topologySpreadConstraints` parameters are configured for the pods that you want to schedule or the pods match an existing resource policy.
    
    **Note**
    
    If you want to schedule pods to ARM-based virtual nodes, specify tolerations to tolerate the taints of the virtual nodes in the
    
    `tolerations` parameter of the pod configuration.
    

## **Prerequisites**

-   An ACK managed Pro cluster that meets the following requirements are created:
    
    -   The cluster runs Kubernetes 1.22 or later.
        
    -   The version of the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component in the cluster is 2.10.0 or later.
        
    -   The version of the [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) component in the cluster is 5.9 or later. In addition, [the virtual node-based pod scheduling policy is enabled for the cluster.](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy).
        
-   When you configure an Elastic Container Instance-based pod, multiple zones (vSwitches) are specified in the corresponding [eci-profile](/help/en/ack/serverless-kubernetes/user-guide/configure-eci-profile).
    
-   The `nodeAffinity`, `podAffinity`, and `topologySpreadConstraints` fields are specified in the pod configurations. Alternatively, a ResourcePolicy is configured for the pod.
    
    **Note**
    
    If you want to schedule a pod to an ARM-based virtual node, you must add specific tolerations that match the taints of the node to the pod.
    

## **Usage notes**

-   You must set the `topologyKey` parameter to `topology.kubernetes.io/zone`.
    
-   The feature discussed in this topic will not take effect in the following scenarios:
    
    -   The `k8s.aliyun.com/eci-schedule-strategy: "VSwitchOrdered"` annotation is used to declare a multi-zone scheduling strategy for pods that follows a specified vSwitch order.
        
    -   The `k8s.aliyun.com/eci-fail-strategy: "fail-fast"` annotation is used to set the fault handling policy of the pod to `fail-fast`.
        

## Spread Elastic Container Instance-based pods across zones and configure affinities

The following examples show how to spread Elastic Container Instance-based pods across zones and configure affinities in an ACK Pro cluster that runs Kubernetes 1.22.

### Example 1: Use topology spread constraints to spread Elastic Container Instance-based pods across zones

1.  Add a topology spread constraint to the configuration of a workload.
    
    Perform the following steps to specify a topology spread constraint in the `Spec` parameter in the configuration of a pod or the `Spec` parameter in the configuration of a workload, such as a Deployment or Job.
    
    ```
      topologySpreadConstraints:
        - maxSkew: <integer>
          minDomains: <integer> # This parameter is optional and is in the Beta phase in Kubernetes 1.25 and later. 
          topologyKey: <string>
          whenUnsatisfiable: <string>
          labelSelector: <object>
          matchLabelKeys: <list> # This parameter is optional and is in the Beta phase in Kubernetes 1.27 and later. 
          nodeAffinityPolicy: [Honor|Ignore] # This parameter is optional and is in the Beta phase in Kubernetes 1.26 and later. 
          nodeTaintsPolicy: [Honor|Ignore] # This parameter is optional and is in the Beta phase in Kubernetes 1.26 and later.
    ```
    
    In this example, a Deployment whose pods are evenly distributed to multiple zones is created. The following code block shows the YAML template of the Deployment:
    
    **Show YAML content**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: with-pod-topology-spread
      labels:
        app: with-pod-topology-spread
    spec:
      replicas: 10
      selector:
        matchLabels:
          app: with-pod-topology-spread
      template:
        metadata:
          labels:
            app: with-pod-topology-spread
        spec:
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
          topologySpreadConstraints:
            - maxSkew: 1
              topologyKey: topology.kubernetes.io/zone
              whenUnsatisfiable: DoNotSchedule
              labelSelector:
                matchLabels:
                  app: with-pod-topology-spread
          tolerations:
            - key: "virtual-kubelet.io/provider"
              operator: "Exists"
              effect: "NoSchedule"
          containers:
          - name: with-pod-topology-spread
            image: registry.k8s.io/pause:2.0
            resources:
              requests:
                cpu: "1"
                memory: "256Mi"
    ```
    
    **Parameter**
    
    **Description**
    
    ```
    preferredDuringSchedulingIgnoredDuringExecution:
    - weight: 1
      preference:
        matchExpressions:
        - key: type
          operator: NotIn
          values:
          - virtual-kubelet
    ```
    
    The configuration specifies that the pods are preferentially scheduled to Elastic Compute Service (ECS) nodes.
    
    For more information about the parameters, see [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity).
    
    ```
    topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: with-pod-topology-spread
    ```
    
    The configuration specifies that the pods are evenly deployed across multiple zones.
    
    For more information about the parameters, see [topologySpreadConstraints field](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#topologyspreadconstraints-field).
    
    ```
    tolerations:
      - key: "virtual-kubelet.io/provider"
        operator: "Exists"
        effect: "NoSchedule"
    ```
    
    kube-scheduler tolerates the taint of virtual nodes to schedule pods to the virtual nodes.
    
    For more information about the parameters, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).
    
    **Note**
    
    If you want to schedule pods to ARM-based virtual nodes, you must add a toleration to the pods to tolerate the taint of the ARM-based virtual nodes.
    
2.  Create a workload.
    
    Create a file named `deployment.yaml` and copy the preceding YAML template to the file. Then, run the following command to create a Deployment in the cluster:
    
    ```
    kubectl apply -f deployment.yaml
    ```
    
3.  Verify the scheduling result of the workload.
    
    -   Run the following command to query the nodes on which the Deployment deploys the pods:
        
        ```
        kubectl get po -lapp=with-pod-topology-spread -ocustom-columns=NAME:.metadata.name,NODE:.spec.nodeName --no-headers | grep -v "<none>"
        ```
        
    -   Run the following command to query the number of pods that are created by the Deployment in each zone:
        
        ```
        kubectl get po -lapp=with-pod-topology-spread -ocustom-columns=NODE:.spec.nodeName --no-headers | grep -v "<none>" | xargs -I {} kubectl get no {} -ojson | jq '.metadata.labels["topology.kubernetes.io/zone"]' | sort | uniq -c
        ```
        
    

### **Example 2: Configure pod affinities and node affinities to deploy pods in specific zones**

1.  Add affinities to the configuration of a workload.
    
    In this example, a Deployment whose pods are deployed in a single zone is created. The following code block shows the YAML template of the Deployment:
    
    **Show YAML content**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: with-affinity
      labels:
        app: with-affinity
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: with-affinity
      template:
        metadata:
          labels:
            app: with-affinity
        spec:
          affinity:
            podAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
              - labelSelector:
                  matchExpressions:
                  - key: app
                    operator: In
                    values:
                    - with-affinity
                topologyKey: topology.kubernetes.io/zone
            nodeAffinity:
              preferredDuringSchedulingIgnoredDuringExecution:
              - weight: 1
                preference:
                  matchExpressions:
                  - key: type
                    operator: NotIn
                    values:
                    - virtual-kubelet
          tolerations:
            - key: "virtual-kubelet.io/provider"
              operator: "Exists"
              effect: "NoSchedule"
          containers:
          - name: with-affinity
            image: registry.k8s.io/pause:2.0
    ```
    
    **Parameter**
    
    **Description**
    
    ```
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
          - key: app
            operator: In
            values:
            - with-affinity
    		topologyKey: topology.kubernetes.io/zone
    ```
    
    The configuration specifies that all pods are deployed in a single zone.
    
    For more information about the parameters, see [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity).
    
    ```
    nodeAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: type
            operator: NotIn
            values:
            - virtual-kubelet
    ```
    
    The configuration specifies that the pods are preferentially scheduled to ECS nodes.
    
    For more information about the parameters, see [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity).
    
    ```
    tolerations:
      - key: "virtual-kubelet.io/provider"
        operator: "Exists"
        effect: "NoSchedule"
    ```
    
    kube-scheduler tolerates the taint of virtual nodes to schedule pods to the virtual nodes.
    
    For more information about the parameters, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).
    
    If you want to deploy the pods in a specific zone, delete the `podAffinity` parameter and add the following constraint to the `nodeAffinity` parameter: The following configuration specifies that the pods must be deployed in Beijing Zone A.
    
    ```
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: topology.kubernetes.io/zone
          operator: In
          values:
          - cn-beijing-a
    ```
    
2.  Create a workload.
    
    Create a file named `deployment.yaml` and copy the preceding YAML template to the file. Then, run the following command to create a Deployment in the cluster:
    
    ```
    kubectl apply -f deployment.yaml
    ```
    
3.  Verify the scheduling result of the workload.
    
    -   Run the following command to query the nodes on which the Deployment deploys the pods:
        
        ```
        kubectl get po -lapp=with-affinity -ocustom-columns=NAME:.metadata.name,NODE:.spec.nodeName --no-headers | grep -v "<none>"
        ```
        
    -   Run the following command to query the number of pods that are created by the Deployment in each zone:
        
        ```
        kubectl get po -lapp=with-affinity -ocustom-columns=NODE:.spec.nodeName --no-headers | grep -v "<none>" | xargs -I {} kubectl get no {} -ojson | jq '.metadata.labels["topology.kubernetes.io/zone"]' | sort | uniq -c
        ```
        
    

## **Strict Elastic Container Instance-based pod topology spread**

By default, if you force the system to spread Elastic Container Instance-based pods across zones, kube-scheduler evenly deploys the pods of a workload across all zones. However, Elastic Container Instance-based pods may fail to be created in some zones. The following figure shows the scheduling result when the maxSkew parameter is set to 1. For more information about maxSkew, see [maxSkew](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#spread-constraint-definition).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7794655471/CAEQJBiBgIDWgcmJ.RgiIGVkN2U3YTNlNjhmOTQ0ZDI4MTBlNTcwNDZlZjdmNTE54110876_20231211141126.192.svg)

If the Elastic Container Instance-based pods in Zone B and Zone C fail to be created, two Elastic Container Instance-based pods run in Zone A, and no Elastic Container Instance-based pod runs in Zone B or Zone C. This violates the constraint specified by the maxSkew parameter.

You can enable strict Elastic Container Instance-based pod topology spread to ensure that pods are strictly spread across zones. After you enable strict Elastic Container Instance-based pod topology spread, kube-scheduler first schedules a pod to each of Zone A, Zone B, and Zone C. kube-scheduler does not schedule pending pods until the scheduled pods are created, as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7794655471/CAEQJBiBgIC0gsmJ.RgiIDkzMmNmMWExNjc1NzRiNjJhYjgxN2I3YTY0NTE2Nzhh4110876_20231211141126.192.svg)

Even if Pod A1 is created, pending pods are not scheduled. This is because if the pod in Zone B or Zone C fails to be created, the constraint specified by the maxSkew parameter is violated. After Pod B1 is created, kube-scheduler schedules a pod to Zone C. Pods with green shading are created.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7794655471/CAEQJBiBgICCg8mJ.RgiIGY1M2NhZDMzNDY1YzRmYzRiMzcyMjYxNzczMzEwMjVm4110876_20231211141126.192.svg)

If you want to disable strict Elastic Container Instance-based pod topology spread, set the `whenUnsatisfiable` parameter to `ScheduleAnyway`. For more information, see [Spread constraint definition](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/).
