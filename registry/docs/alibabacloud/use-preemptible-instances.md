Elastic Container Instance supports preemptible instances. You can run stateless applications that feature high scalability and fault tolerance and short-lived jobs on preemptible instances to reduce usage costs of instances. This topic describes how to create a preemptible Elastic Container Instance-based pod in a Kubernetes cluster.

## Background information

Preemptible elastic container instances are cost-effective. You can bid for unused Alibaba Cloud resources to create preemptible instances. When the market price exceeds your bid price for a preemptible instance or when the inventory resources are insufficient, the resources consumed by the instance are reclaimed and the instance is released.

Preemptible instances can be used to run short-lived jobs and stateless applications that feature high scalability and fault tolerance, such as scalable website services, image rendering, big data analysis, and large-scale parallel computing. Preemptible instances are suitable for applications that require wide distribution, high scalability, and high fault tolerance. Preemptible instances help you reduce costs and increase the throughput for these applications. For more information, see [Preemptible instances](/help/en/ecs/user-guide/what-is-a-spot-instance#concept-t3p-gv2-5db).

### Basic concepts

Before you create a preemptible instance, take note of the following items:

-   **Billing**
    
    The market price of a preemptible instance fluctuates based on the supply and demand for its instance specification. When you create a preemptible instance, you must specify a bid policy for the instance. If your bid price is higher than the real-time market price and the resource inventory of the instance specification is sufficient, the preemptible instance is created. After a preemptible instance is created, it enters a protection period during which the instance is billed based on the market price at the time of purchase. By default, the protection period is 1 hour. After the protection period expires, the instance is billed based on the real-time market price.
    
    **Note**
    
    Preemptible instances are billed at lower prices compared with pay-as-you-go instances. The price of a preemptible instance fluctuates based on the supply and demand for its instance specification. A preemptible instance is billed based on its actual duration of use. For more information, see the "Billing methods" section of the [Preemptible instances](/help/en/ecs/spot-instance#concept-1936192) topic.
    
-   **Reclaim mechanism**
    
    After the protection period of a preemptible instance expires, the system checks the market price and resource inventory of the instance specification every 5 minutes. If the real-time market price exceeds your bid price or the resource inventory is insufficient, the preemptible instance is released.
    
    **Note**
    
    -   A ready-for-release (SpotToBeReleased) event is generated about 3 minutes before the resources of a preemptible instance are reclaimed.
        
    -   After the resources of a preemptible instance are reclaimed, the information about the instance is retained, the billing on the instance stops, and the status of the instance changes to Expired.
        
    

### Precautions

Before you use preemptible instances, take note of the following items:

-   Select a suitable instance specification and place a suitable bid.
    
    You can call the following API operations of Elastic Compute Service (ECS) to query information about preemptible instances over the last 30 days. Then, you can select a suitable instance specification and place a bid.
    
    -   [DescribeSpotPriceHistory](/help/en/ecs/api-describespotpricehistory#doc-api-Ecs-DescribeSpotPriceHistory): queries the historical prices of preemptible instances.
        
    -   [DescribeSpotAdvice](/help/en/ecs/api-describespotadvice#doc-api-Ecs-DescribeSpotAdvice): queries information such as the average release rate and average discount rate of preemptible instances.
        
    
    **Important**
    
    When you place a bid, take into consideration the fluctuations in market prices and the price range that you are comfortable with. A good bid is usually higher than the average market price, but still within the range of your business requirements. In this way, requests for creating preemptible instances can be accepted and processed, and the created instances will not be released due to changes in market prices.
    
-   We recommend that you store important data in a storage medium that will not be affected if preemptible instances are released. For example, you can use independent disks that are not to be released along with their associated instances, or use external storage resources such as File Storage NAS file systems.
    

### Creation methods

You can create a preemptible instance by specifying ECS instance types or the number of vCPUs and memory size.

-   **Specify ECS instance types**
    
    The preemptible instance is billed at the real-time discounted pay-as-you-go price of the specified ECS instance type.
    
-   **Specify the number of vCPUs and memory size of the instance**
    
    This method has the same effect as the method of specifying ECS instance types. The system automatically selects an ECS instance type that meets your requirements for the number of vCPUs, memory size, and prices. The created preemptible instance is billed at the real-time discounted market price of the used ECS instance type, instead of the pay-as-you-go prices of the vCPU and memory resources that are used by the elastic container instance.
    
    Only the instances that provide two or more vCPUs can be created by using this method. The following table lists the supported vCPU and memory specifications. If the specifications that you specify are not supported by Elastic Container Instance, the system automatically uses supported higher specifications.
    
    **Number of vCPUs**
    
    **Memory (GiB)**
    
    2
    
    2, 4, 8, and 16
    
    4
    
    4, 8, 16, and 32
    
    8
    
    8, 16, 32, and 64
    
    12
    
    12, 24, 48, and 96
    
    16
    
    16, 32, 64, and 128
    
    24
    
    24, 48, 96, and 192
    
    32
    
    32, 64, 128, and 256
    
    52
    
    96, 192, and 384
    
    64
    
    128, 256, and 512
    

## Configuration description

You can add annotations to the metadata section in the configuration file of the pod to create a preemptible elastic container instance. The following table describes the annotations:

**Annotation**

**Example**

**Required**

**Description**

k8s.aliyun.com/eci-spot-strategy

SpotAsPriceGo

Yes

Specifies the bidding policy for the preemptible instance. Valid values:

-   SpotWithPriceLimit: The instance is created as a preemptible instance with a maximum hourly price. When you use this bid policy, you must add the k8s.aliyun.com/eci-spot-price-limit annotation to specify the maximum hourly price.
    
-   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
    
    **Important**
    
    If you set SpotStrategy to SpotAsPriceGo and the resources of the specified instance specification within the specified zone are insufficient, the value that you specify for the maximum hourly price of the instance must be approximate to the pay-as-you-go price of the instance. This can improve the success rate of the instance creation.
    

k8s.aliyun.com/eci-spot-price-limit

"0.5"

No

Specifies the maximum hourly price of the preemptible instance. This value can be accurate to up to three decimal places.

This annotation is valid only when k8s.aliyun.com/eci-spot-strategy is set to SpotWithPriceLimit.

k8s.aliyun.com/eci-spot-duration

"0"

No

Specifies the protection period of the preemptible instance. Unit: hour. Default value: 1. A value of 0 indicates no protection period.

k8s.aliyun.com/eci-spot-fallback

"true"

No

Specifies whether to automatically create a pay-as-you-go instance to ensure that an instance is created if inventory resources that meet the specification requirements for the preemptible instance are insufficient. Default value: false.

**Important**

-   Annotations must be added to the metadata of pods. For example, when you create a job, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

#### **Example 1: Specify an ECS instance type and use the SpotWithPriceLimit bid policy**

```
apiVersion: batch/v1
kind: Job
metadata:
  name: test
spec:
  template:
    metadata:
      labels:
        app: perl
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-use-specs : "ecs.c6.large"           # Specify an ECS instance type.
        k8s.aliyun.com/eci-spot-strategy: "SpotWithPriceLimit"  # Specify SpotWithPriceLimit as the bid policy.
        k8s.aliyun.com/eci-spot-price-limit: "0.25"            # Specify a maximum hourly price for the preemptible instance.
    spec:
      containers:
      - name: pi
        image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
```

The preceding YAML code can create a preemptible instance based on the ecs.c6.large instance type.

-   If inventory resources that meet the requirements for the instance type and maximum hourly price are insufficient, the instance cannot be created.
    
-   After the instance is created, you are guaranteed to use the instance for one hour. After the one-hour protection period elapses, if the market price is higher than your bid price or the inventory resources that meet the instance specification are insufficient, the preemptible instance is released.
    

#### **Example 2: Specify the number of vCPUs and memory size and use the SpotAsPriceGo bid policy**

-   Specify the number of vCPUs and memory size by using pod.spec.resources
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test
    spec:
      template:
        metadata:
          labels:
            app: perl
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-spot-strategy: "SpotAsPriceGo"  # Specify SpotAsPriceGo as the bid policy. The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
        spec:
          containers:
          - name: pi
            image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
            command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
            resources:
              limits:              # Specify 2 vCPUs and 4 GiB of memory for the pi container.
                cpu: 2000m
                memory: 4096Mi
          restartPolicy: Never
    ```
    
-   Specify the number of vCPUs and memory size by using annotations
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test
    spec:
      template:
        metadata:
          labels:
            app: perl
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-use-specs : "2-4Gi"             # Specify the number of vCPUs and memory size. The number of vCPUs must be 2 or larger.
            k8s.aliyun.com/eci-spot-strategy: "SpotAsPriceGo"  # Specify SpotAsPriceGo as the bid policy. The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
        spec:
          containers:
          - name: pi
            image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
            command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
          restartPolicy: Never
    ```
    

The preceding YAML code can create a preemptible instance that has 2 vCPUs and 4 GiB of memory.

-   If inventory resources that meet the requirements for the instance specification are insufficient, the instance cannot be created.
    
-   After the instance is created, you are guaranteed to use the instance for one hour. After the one-hour protection period elapses, if the market price is higher than your bid price or the inventory resources that meet the instance specification are insufficient, the preemptible instance is released.
    

#### **Example 3: Set no protection period**

```
apiVersion: batch/v1
kind: Job
metadata:
  name: test
spec:
  template:
    metadata:
      labels:
        app: perl
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-use-specs : "2-4Gi"             # Specify the number of vCPUs and memory size. The number of vCPUs must be 2 or larger.
        k8s.aliyun.com/eci-spot-strategy: "SpotAsPriceGo"  # Specify SpotAsPriceGo as the bid policy. The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
        k8s.aliyun.com/eci-spot-duration: "0"              # Set no protection period.
    spec:
      containers:
      - name: pi
        image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
```

The preceding YAML code can create a preemptible instance that has 2 vCPUs and 4 GiB of memory.

-   If inventory resources that meet the requirements for the instance specification are insufficient, the instance cannot be created.
    
-   After the instance is created, you are not ensured to use the instance. If the market price is higher than your bid price or the inventory resources that meet the instance specification are insufficient, the preemptible instance is released.
    

#### **Example 4: Automatically create a pay-as-you-go instance if inventory resources that meet the requirements for the instance specification are insufficient**

```
apiVersion: batch/v1
kind: Job
metadata:
  name: test
spec:
  template:
    metadata:
      labels:
        app: perl
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-use-specs : "ecs.c6.large"           # Specify an ECS instance type.
        k8s.aliyun.com/eci-spot-strategy: "SpotWithPriceLimit"  # Specify SpotWithPriceLimit as the bid policy.
        k8s.aliyun.com/eci-spot-price-limit: "0.05"            # Specify a maximum hourly price for the preemptible instance.
        k8s.aliyun.com/eci-spot-fallback: "true"                # Automatically create a pay-as-you-go instance if inventory resources that meet the requirements for the preemptible instance specification are insufficient.
    spec:
      containers:
      - name: pi
        image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
```

The preceding YAML code can create a preemptible instance based on the ecs.c6.large instance type.

-   If inventory resources that meet the requirements for the instance type and maximum hourly price are sufficient, a preemptible instance is created. After the instance is created, you are guaranteed to use the instance for one hour. After the one-hour protection period elapses, if the market price is higher than your bid price or the inventory resources that meet the instance specification are insufficient, the preemptible instance is released.
    
-   If inventory resources that meet the requirements for the instance type and maximum hourly price are insufficient, a pay-as-you-go instance is created. After the instance is created, the system does not automatically release the instance.
    
    After the instance is created, you can run the `kubectl describe pod` command to view the events of the corresponding pod to check whether the instance is a pay-as-you-go instance. If a SpotDegraded event is displayed, the instance is a pay-as-you-go instance.
    
    ![spot转按量事件..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9055284861/p667758.png)
    

## **Release of preemptible instances**

After a preemptible instance is created, it can run normally during the protection period. After the protection period expires, the preemptible instance is released if the market price is higher than your bid price or the inventory resources are insufficient. You can understand the release status of preemptible instances by performing the following operations:

-   **SpotToBeReleased event**
    
    A SpotToBeReleased event is generated approximately 3 minutes before a preemptible instance is released.
    
    **Important**
    
    Elastic Container Instance sends the event to the list of Kubernetes events. During the three-minute period, you can take measures to ensure that your business is not affected by the release of the preemptible instance. For more information, see [Graceful termination](#e8fd4adbd33b5).
    
    -   Run the `kubectl describe` command to view the details of the preemptible instance. The SpotToBeReleased event is displayed in the Events section of the command output. Example:
        
        ```
        Events:
          Type     Reason            Age    From          Message
          ----     ------            ----   ----          -------
          Warning  SpotToBeReleased  3m32s  kubelet, eci  Spot ECI will be released in 3 minutes
        ```
        
    -   Run the `kukubectl get events` command to view the event information. The SpotToBeReleased event is displayed in the command output. Example:
        
        ```
        LAST SEEN   TYPE      REASON             OBJECT         MESSAGE
        3m39s       Warning   SpotToBeReleased   pod/pi-frmr8   Spot ECI will be released in 3 minutes
        ```
        
-   **Status of the preemptible instance after it is released**
    
    After a preemptible instance is released, the instance information is still retained. The status of the instance is changed to Failed and the cause of the failure is BidFailed.
    
    -   Run the `kubectl get pod` command to view the instance information. The instance status that is displayed in the command output changes to BidFailed. Example:
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        pi-frmr8   1/1     BidFailed   0          3h5m
        ```
        
    -   Run the `kubectl describe` command to view the details of the preemptible instance. Then, view the details about the instance status in the command output. Example:
        
        ```
        Status:             Failed
        Reason:             BidFailed
        Message:            The pod is spot instance, and have been released at 2020-04-08T12:36Z
        ```
        

## **Graceful termination**

A SpotToBeReleased event is generated approximately 3 minutes before a preemptible instance is released. Meanwhile, the `ContainerInstanceExpired` parameter in the pod conditions is set to `true`. To avoid service interruptions caused by reclamation of preemptible instances, you can use notification mechanisms to gracefully terminate preemptible instances and rotate pods.

Virtual nodes allow you to configure graceful termination for preemptible instances. You can add the `k8s.aliyun.com/eci-spot-release-strategy: api-evict` annotation to the metadata of a preemptible Elastic Container Instance-based pod. This way, when the virtual node receives a notification about a SpotToBeReleased event, the virtual node calls the [Eviction API](https://kubernetes.io/docs/concepts/scheduling-eviction/api-eviction/) to evict the preemptible instance.

**Important**

To enable notifications on preemptible instance interruptions by using pod conditions and evict preemptible instances by using the Eviction API, you must update ack-virtual-node to 2.11.0 or later. For more information, see [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node).

The Eviction API is called in compliance with the configurations specified by the PodDisruptionBudget (PDB) and the terminationGracePeriodSeconds parameter configured for pods. Creating an Eviction object for a pod by calling the API is similar to performing the `DELETE` operation defined by the control policy of the pod. Procedure of graceful termination:

1.  **Make an API call**
    
    When a virtual node receives a notification about a SpotToBeReleased event, the node calls the Eviction API.
    
2.  **Check the PDB**
    
    The API server checks the PDB configured for the pod to be evicted.
    
3.  **Evict the preemptible instance**
    
    After the API server validates the eviction request, the pod is evicted through the following steps:
    
    1.  The pod updates its deletion timestamp so that the API server can recognize the pod to be terminated. The pod is also stamped with the grace period that you configured.
        
    2.  The kubelet of the virtual node on which the pod runs recognizes the pod and initiates graceful termination for the pod.
        
    3.  When the kubelet terminates the pod, the control plane of the cluster disassociates the pod from relevant Endpoints and Endpointslices. In this case, the pod controller no longer recognizes the pod as valid.
        
    4.  When the grace period ends, the kubelet forcefully terminates the pod.
        
    5.  The kubelet notifies the API server to delete the pod.
        
    6.  The API server deletes the pod.
        
4.  **Reconcile workloads**
    
    If a pod is managed by a controller, such as a ReplicaSet or StatefulSet, or a Job, SparkApplication, or workflow that is configured with fault tolerance settings, the controller automatically creates a new pod after the original pod is evicted.
    

**Note**

If the PDB used by the pod is incorrectly configured or a large number of pods are not in the Ready state when the node calls the Eviction API, the eviction process becomes stuck. If the eviction process is not completed when the preemptible instance expires, the instance is directly released.
