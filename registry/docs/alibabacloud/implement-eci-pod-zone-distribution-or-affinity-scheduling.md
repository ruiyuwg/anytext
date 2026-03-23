High availability and high performance are essential to distributed jobs. In Container Service for Kubernetes (ACK) Pro clusters or ACK Serverless Pro clusters, you can spread distributed tasks across zones based on Kubernetes-native scheduling semantics. You can also configure affinities to deploy distributed tasks in specific zones based on Kubernetes-native scheduling semantics. This improves the efficiency of task deployment. This topic describes how to spread Elastic Container Instance-based pods across zones and configure affinities for the pods.

## **Background information**

In certain scenarios, you may need to deploy pods across multiple zones or to a specific zone to achieve high availability or high performance. In such cases, you can use Kubernetes-native scheduling features, such as pod topology spread constraints (`topologySpreadConstraints`), node affinity (`nodeAffinity`), and pod affinity (`podAffinity`).

**Important**

Elastic Container Instance-based pods can be spread across zones or affinities can be configured for pods only when the `nodeAffinity`, `podAffinity`, `topologySpreadConstraints` parameters are configured for the pods, or when the pods match an existing resource policy.

For more information, see the following official Kubernetes documentation:

-   [Pod Topology Spread Constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)
    
-   [Assigning Pods to Nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
    
-   [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity)
    
-   [Pod affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity)
    
-   [maxSkew](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#spread-constraint-definition)
    

## **Prerequisites**

-   An ACK Pro cluster or ACK Serverless Pro cluster is created and the cluster meets the following requirements:
    
    -   The Kubernetes version of the cluster is 1.22 or later.
        
    -   The version of the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component in the cluster is 2.10.0 or later.
        
    -   The version of the [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) component in the cluster is 5.9 or later, and the virtual node-based pod scheduling feature is enabled for the cluster. For more information, see [Enable the virtual node-based pod scheduling policy for an ACK cluster](/help/en/ack/serverless-kubernetes/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy).
        
-   Multiple zones (vSwitches) are specified in the eci-profile. Pod can be scheduled to the multiple zones. For more information, see [Configure multiple zones to create a pod](/help/en/eci/user-guide/create-pods-in-multiple-zones).
    

## **Usage notes**

-   You must set the `topologyKey` parameter to `topology.kubernetes.io/zone`.
    
-   The feature discussed in this topic will not take effect in the following scenarios:
    
    -   The `k8s.aliyun.com/eci-schedule-strategy: "VSwitchOrdered"` annotation is used to declare a multi-zone scheduling strategy for pods that follows a specified vSwitch order.
        
    -   The `k8s.aliyun.com/eci-fail-strategy: "fail-fast"` annotation is used to set the fault handling policy of the pod to `fail-fast`.
        

## **Configuration examples**

In the following sections, an ACK Serverless Pro cluster whose Kubernetes version is 1.22 is used to explain how to spread pods across zones and configure affinity.

### Example 1: Use topologySpreadConstraints to spread pods across zones

**Note**

The following example shows how to configure a topology spread constraint. By default, Scheduler evenly schedules all pods to all zones, but does not consider the production results of pods. For more information, see [Strict Elastic Container Instance-based pod topology spread](#7d1302c130i29).

1.  Add a topology spread constraint to the configuration of a workload.
    
    Perform the following steps to specify a topology spread constraint in the `Spec` parameter in the configuration of a pod or in the `Spec` parameter in the configuration of a workload, such as a Deployment or Job.
    
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
    
    In this example, a Deployment whose pods are evenly distributed to multiple zones is created. For more information about the parameters, see [topologySpreadConstraints field](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#topologyspreadconstraints-field). The following code block shows the YAML template of the Deployment:
    
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
          topologySpreadConstraints:
            - maxSkew: 1
              topologyKey: topology.kubernetes.io/zone
              whenUnsatisfiable: DoNotSchedule
              labelSelector:
                matchLabels:
                  app: with-pod-topology-spread
          containers:
          - name: with-pod-topology-spread
            image: registry.k8s.io/pause:2.0
            resources:
              requests:
                cpu: "1"
                memory: "256Mi"
    ```
    
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
        
    

### Example 2: Use nodeAffinity and podAffinity to deploy pods to specific zones

1.  Add affinities to the configuration of a workload.
    
    In this example, a Deployment whose pods are deployed in a single zone is created. For more information about the parameters, see [Node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity). The following code block shows the YAML template of the Deployment:
    
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
          containers:
          - name: with-affinity
            image: registry.k8s.io/pause:2.0
    ```
    
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
    
    The following code block shows the sample code that contains the `nodeAffinity` parameter. Pods are deployed only in Beijing Zone A.
    
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
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: topology.kubernetes.io/zone
                    operator: In
                    values:
                    - cn-beijing-a
          containers:
          - name: with-affinity
            image: registry.k8s.io/pause:2.0
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

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1720344371/CAEQJRiBgMD41reI.xgiIDkyNmIzMTk5OWM3MTRmYjNiOWFkZmM5MWZkMWY1NDUw4110876_20231211141126.192.svg)

If the Elastic Container Instance-based pods in Zone B and Zone C fail to be created, two Elastic Container Instance-based pods run in Zone A, and no Elastic Container Instance-based pod runs in Zone B or Zone C. This violates the constraint specified by the maxSkew parameter.

In an ACK Serverless Pro cluster, you can enable strict Elastic Container Instance-based pod topology spread to ensure that pods are strictly spread across zones. After you enable strict Elastic Container Instance-based pod topology spread, kube-scheduler first schedules a pod to each of Zone A, Zone B, and Zone C. kube-scheduler does not schedule pending pods until the scheduled pods are created, as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1720344371/CAEQJRiBgIDV17eI.xgiIDk4NGY1YTkxNmJkNzQ5NDFhNTIxNDAxZWNiZjU3ZmUx4110876_20231211141126.192.svg)

Even if Pod A1 is created, pending pods are not scheduled. This is because if the pod in Zone B or Zone C fails to be created, the constraint specified by the maxSkew parameter is violated. After Pod B1 is created, kube-scheduler schedules a pod to Zone C. Pods with green shading are created.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1720344371/CAEQJRiBgMC82LeI.xgiIDFiYmNiOGRlNmNjNzRkNmJhNGIyOGZlYzQyZjZmMDNj4110876_20231211141126.192.svg)

If you want to disable strict Elastic Container Instance-based pod topology spread, set the `whenUnsatisfiable` parameter to `ScheduleAnyway`. For more information, see [Spread constraint definition](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/).
