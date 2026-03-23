This topic describes how to use elastic container instances to run Spark jobs in a Container Service for Kubernetes (ACK) cluster. You can configure scheduling policies to schedule pods to elastic container instances. This way, you can create Elastic Container Instance-based pods and pay only for the resources used by the pods. This reduces idle resources and prevents incurring unexpected costs. In addition, the cost-effectiveness and efficiency of Spark jobs are improved.

## Prerequisites

-   The ack-spark-operator component is installed. For more information, see [Step 1: Install the ack-spark-operator component](/help/en/ack/ack-managed-and-ack-dedicated/use-cases/use-spark-operator-to-run-spark-jobs-on-ack#Ba67u).
    
-   The ack-virtual-node component is deployed. This component is required when you use elastic container instances. For more information, see [Deploy ack-virtual-node in the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods#section-nz6-jj2-383).
    
-   A kubectl client is connected to the ACK cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## Advantages

You can dynamically schedule the driver pod and executor pods of a Spark job to [elastic container instances](/help/en/ack/serverless-kubernetes/user-guide/overview-of-elastic-container-instances) in an ACK cluster. This way, the job can run in serverless mode. The underlying computing resources of each elastic container instance are isolated by using lightweight virtual sandboxes. Elastic container instances do not affect each other.

Elastic container instances provide the following advantages for Spark jobs.

-   Ultra-large scale: You can create more than 50,000 pods in an ACK Serverless cluster without the need to add additional configurations or plan the size of the cluster.
    
-   Second-level scaling: You can create thousands of pods within a short period of time to handle traffic spikes.
    
-   Cost-effectiveness: You are charged for elastic container instances on a pay-as-you-go basis, which prevents incurring unexpected costs. In addition, you can configure multiple instance types to use preemptible elastic container instances. This further reduces the costs of computing resources.
    

## Configure resource scheduling based on ECS instances and elastic container instances

You can use [taints](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/terms#dt-8ux-ofx-yhx), [tolerations](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/terms#dt-97l-0hq-58x), and [node affinity rules](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/terms#dt-79r-3rf-rfo) to configure resource scheduling based on Elastic Compute Service (ECS) instances and elastic container instances. For example, you can use the preceding setting to enable the scheduler to use only ECS instances or elastic container instances, or allow the scheduler to automatically apply for elastic container instances when ECS instances are insufficient. For more information, see [Configure resource allocation based on ECS instances and elastic container instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling). Examples:

### Use only ECS instances

By default, the `virtual-kubelet.io/provider=alibabacloud:NoSchedule` taint is added to each elastic container instance in an ACK cluster. Therefore, the scheduler does not use elastic container instances by default. The following code block is used to create a SparkApplication that is scheduled only to ECS instances.

```
apiVersion: sparkoperator.k8s.io/v1beta2
kind: SparkApplication
metadata:
  name: spark-pi-ecs-only
  namespace: default
spec:
  type: Scala
  mode: cluster
  image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
  mainClass: org.apache.spark.examples.SparkPi
  mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
  arguments: 
  - "5000"
  sparkVersion: 3.5.2
  driver:
    cores: 1
    coreLimit: 1200m
    memory: 512m
    serviceAccount: spark-operator-spark
  executor:
    instances: 2
    cores: 2
    memory: 4g
```

### Use only elastic container instances

You can add specific tolerations to a Spark job to allow the scheduler to schedule the job to elastic container instances with matching taints. To enable the scheduler to schedule the job only to elastic container instances, you need to add node affinity rules to the job. Add a toleration to tolerate the `virtual-kubelet.io/provider=alibabacloud:NoSchedule` taint on elastic container instances. This way, the scheduler schedules the Spark job only to elastic container instances. The following code block is used to create a SparkApplication that is scheduled only to elastic container instances.

```
apiVersion: sparkoperator.k8s.io/v1beta2
kind: SparkApplication
metadata:
  name: spark-pi-eci-only
  namespace: default
spec:
  type: Scala
  mode: cluster
  image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
  mainClass: org.apache.spark.examples.SparkPi
  mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
  arguments: 
  - "5000"
  sparkVersion: 3.5.2
  driver:
    cores: 1
    coreLimit: 1200m
    memory: 512m
    serviceAccount: spark-operator-spark
    affinity:
      nodeAffinity:
        # Add an affinity rule to allow the job to be scheduled to elastic container instances.
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: type
              operator: In
              values:
              - virtual-kubelet
    tolerations:
    # Add a toleration to tolerate a specific taint on elastic container instances.
    - key: virtual-kubelet.io/provider
      operator: Equal
      value: alibabacloud
      effect: NoSchedule
  executor:
    instances: 2
    cores: 2
    memory: 4g
    affinity:
      nodeAffinity:
        # Add an affinity rule to allow the job to be scheduled to elastic container instances. 
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: type
              operator: In
              values:
              - virtual-kubelet
    tolerations:
    # Add a toleration to tolerate a specific taint on elastic container instances. 
    - key: virtual-kubelet.io/provider
      operator: Equal
      value: alibabacloud
      effect: NoSchedule
```

### Apply for elastic container instances when ECS instances are insufficient

A common scheduling solution is to enable the scheduler to apply for elastic container instances when ECS instances are insufficient. This prevents resource waste. In addition, this solution can scale your applications to handle traffic spikes during peak hours. The following code block is used to create a SparkApplication that can be scheduled to elastic container instances when ECS instances are insufficient.

```
apiVersion: sparkoperator.k8s.io/v1beta2
kind: SparkApplication
metadata:
  name: spark-pi-ecs-first
  namespace: default
spec:
  type: Scala
  mode: cluster
  image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
  mainClass: org.apache.spark.examples.SparkPi
  mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
  arguments: 
  - "5000"
  sparkVersion: 3.5.2
  driver:
    cores: 1
    coreLimit: 1200m
    memory: 512m
    serviceAccount: spark-operator-spark
    affinity:
      nodeAffinity:
        # Add an affinity rule to enable the scheduler to apply for elastic container instances when ECS instances are insufficient. 
        preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 1
          preference:
            matchExpressions:
            - key: type
              operator: NotIn
              values:
              - virtual-kubelet
    tolerations:
    # Add a toleration to tolerate a specific taint on elastic container instances. 
    - key: virtual-kubelet.io/provider
      operator: Equal
      value: alibabacloud
      effect: NoSchedule
  executor:
    instances: 2
    cores: 2
    memory: 4g
    affinity:
      nodeAffinity:
        # Add an affinity rule to enable the scheduler to apply for elastic container instances when ECS instances are insufficient.
        preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 1
          preference:
            matchExpressions:
            - key: type
              operator: NotIn
              values:
              - virtual-kubelet
    tolerations:
    # Add a toleration to tolerate a specific taint on elastic container instances.
    - key: virtual-kubelet.io/provider
      operator: Equal
      value: alibabacloud
      effect: NoSchedule
```

## Configure priority-based resource scheduling

The ACK scheduler supports priority-based resource scheduling. You can use a ResourcePolicy to specify the priorities of different types of nodes for pod scheduling. For more information, see [Configure priority-based resource scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-priority-based-resource-scheduling).

1.  Create a file named resourcepolicy.yaml and copy the following content to the file. The file is used to create a ResourcePolicy that specifies the priorities of ECS instances and elastic container instances for scheduling the pods of Spark jobs. The following code block is an example of the `resourcepolicy.yaml` file.
    
    ```
    apiVersion: scheduling.alibabacloud.com/v1alpha1
    kind: ResourcePolicy
    metadata:
      name: sparkapplication-resource-policy
      namespace: default                      # The ResourcePolicy takes effect only on pods in the default namespace. 
    spec:
      ignorePreviousPod: true     
      ignoreTerminatingPod: false     
      matchLabelKeys:
      - sparkoperator.k8s.io/submission-id    # Count pods based on the submission ID of the Spark job. 
      preemptPolicy: AfterAllUnits            # The preemption policy. It specifies that the scheduler attempts to preempt nodes only after it fails to schedule pods to all schedulable units contained in the ResourcePolicy. 
      selector:                               # The label used to select pods on which the ResourcePolicy takes effect. 
        sparkoperator.k8s.io/launched-by-spark-operator: "true"  # The ResourcePolicy takes effect only on pods launched by Spark Operator. 
      strategy: prefer              
      units:                                 # The ResourcePolicy contains two schedulable units. During a scale-out activity, pods are scheduled to nodes based on the priorities of the listed schedulable units in descending order. During a scale-in activity, pods are deleted from the nodes based on the priorities of the listed schedulable units in ascending order. 
      - max: 2                               # A maximum of two pods can be scheduled to the current unit. The current unit includes ECS nodes that have the kubernetes.io/arch=amd64 label. 
        resource: ecs               
        nodeSelector:
          kubernetes.io/arch: amd64  
      - max: 3                               # A maximum of three pods can be scheduled to the current unit. The current unit includes elastic container instances. 
        resource: eci      
    ```
    
2.  Run the following command to create a ResourcePolicy that takes effect only on Spark jobs:
    
    ```
    kubectl apply -f resourcepolicy.yaml
    ```
    
3.  Create a SparkApplication YAML file named `spark-pi.yaml`.
    
    The SparkApplication provisions one driver pod and five executor pods. When resources are sufficient, the driver pod and one executor pod are scheduled to AMD64 nodes and three executor pods are scheduled to elastic container instances. One executor pod remains in the Pending state because the number of pods scheduled to the schedulable units has reached the upper limit.
    
    ```
    apiVersion: sparkoperator.k8s.io/v1beta2
    kind: SparkApplication
    metadata:
      name: spark-pi
      namespace: default
    spec:
      type: Scala
      mode: cluster
      image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
      mainClass: org.apache.spark.examples.SparkPi
      mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
      arguments: 
      - "5000"
      sparkVersion: 3.5.2
      driver:
        cores: 1
        coreLimit: 1200m
        memory: 512m
        serviceAccount: spark-operator-spark
        tolerations:
        - key: virtual-kubelet.io/provider       # Add a toleration to tolerate a specific taint on elastic container instances. 
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
      executor:
        instances: 5
        cores: 1
        coreLimit: 1200m
        memory: 512m
        tolerations: 
        - key: virtual-kubelet.io/provider         # Add a toleration to tolerate a specific taint on elastic container instances. 
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
    ```
    
4.  Run the following command to submit a Spark job:
    
    ```
    kubectl apply -f spark-pi.yaml
    ```
    
5.  Run the following command to check the scheduling results of the pods created for the job:
    
    ```
    kubectl get pods  -o wide -l sparkoperator.k8s.io/app-name=spark-pi
    ```
    
    ```
    NAME                                        READY   STATUS      RESTARTS   AGE       IP                  NODE                          
    spark-pi-34c0998f9f832e61-exec-1            1/1     Running     0          28s       192.XXX.XX.34       cn-beijing.192.XXX.XX.250       
    spark-pi-34c0998f9f832e61-exec-2            1/1     Running     0          28s       192.XXX.XX.87       virtual-kubelet-cn-beijing-i   
    spark-pi-34c0998f9f832e61-exec-3            1/1     Running     0          28s       192.XXX.XX.88       virtual-kubelet-cn-beijing-i   
    spark-pi-34c0998f9f832e61-exec-4            1/1     Running     0          28s       192.XXX.XX.86       virtual-kubelet-cn-beijing-i   
    spark-pi-34c0998f9f832e61-exec-5            0/1     Pending     0          28s       <none>              <none>                         
    spark-pi-driver                             1/1     Running     0          34s       192.XXX.XX.37       cn-beijing.192.XXX.XXX.250       
    ```
    

## Use the ImageCache feature to accelerate image pulling

You can use image caches to accelerate image pulling when you deploy pods on elastic container instances. For more information, see [Use ImageCache to accelerate the creation of elastic container instances](/help/en/ack/serverless-kubernetes/user-guide/use-image-caches-to-accelerate-the-creation-of-pods).

This section compares the image pulling speed when a SparkApplication is deployed with and without an image cache. This section also describes how to enable automatic image cache creation and match.

```
apiVersion: sparkoperator.k8s.io/v1beta2
kind: SparkApplication
metadata:
  name: spark-pi
  namespace: default
spec:
  type: Scala
  mode: cluster
  image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
  mainClass: org.apache.spark.examples.SparkPi
  mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
  arguments: 
  - "5000"
  sparkVersion: 3.5.2
  driver:
    cores: 1
    coreLimit: 1200m
    memory: 512m
    serviceAccount: spark-operator-spark
  executor:
    instances: 2
    cores: 2
    memory: 4g
```

-   **Submit the Spark job without using an image cache**
    
    Submit the Spark job without using an image cache and then check the events of the driver pod.
    
    ```
    kubectl describe pod spark-pi-driver
    ```
    
    ```
    Events:
      ...
      Warning  ImageCacheMissed       24m   EciService         [eci.imagecache]Missed image cache.
      Normal   ImageCacheAutoCreated  24m   EciService         [eci.imagecache]Image cache imc-2zeXXXXXXXXXXXXXXXXX is auto created
      Normal   Pulling                24m   kubelet            Pulling image "registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2"
      Normal   Pulled                 23m   kubelet            Successfully pulled image "registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2" in 1m41.289s (1m41.289s including waiting)
      ...
    ```
    
    The events show that an image cache miss occurred and an image cache was created. It took about 100 seconds to pull the image.
    
-   **Submit the Spark job that uses an image cache**
    
    Add the following annotations to the driver configurations and executor configurations to specify an image cache.
    
    ```
    apiVersion: sparkoperator.k8s.io/v1beta2
    kind: SparkApplication
    metadata:
      name: spark-pi-eci-only
      namespace: default
    spec:
      type: Scala
      mode: cluster
      image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
      mainClass: org.apache.spark.examples.SparkPi
      mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
      arguments: 
      - "5000"
      sparkVersion: 3.5.2
      driver:
        annotations:
          # Specify the ID of the image cache that you want to use.
          k8s.aliyun.com/eci-image-snapshot-id: imc-2zeXXXXXXXXXXXXXXXXX
        cores: 1
        coreLimit: 1200m
        memory: 512m
        serviceAccount: spark-operator-spark
        affinity:
          nodeAffinity:
            # Add an affinity rule to allow the job to be scheduled to elastic container instances.
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: type
                  operator: In
                  values:
                  - virtual-kubelet
        tolerations:
        # Add a toleration to tolerate a specific taint on elastic container instances.
        - key: virtual-kubelet.io/provider
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
      executor:
        annotations:
          # Specify the ID of the image cache that you want to use.
          k8s.aliyun.com/eci-image-snapshot-id: imc-2zeXXXXXXXXXXXXXXXXX
        instances: 2
        cores: 2
        memory: 4g
        affinity:
          nodeAffinity:
            # Add an affinity rule to allow the job to be scheduled to elastic container instances.
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: type
                  operator: In
                  values:
                  - virtual-kubelet
        tolerations:
        # Add a toleration to tolerate a specific taint on elastic container instances.
        - key: virtual-kubelet.io/provider
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
    ```
    
    Submit the Spark job and then check the events of the driver pod.
    
    ```
     kubectl describe pod spark-pi-driver
    ```
    
    ```
    Events:
      ...
      Normal  SuccessfulHitImageCache  23s   EciService         [eci.imagecache]Successfully hit image cache imc-2zeXXXXXXXXXXXXXXXXX, eci will be scheduled with this image cache.
      Normal  Pulled                   4s    kubelet            Container image "registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2" already present on machine
      ...
    ```
    
    The events show that an image cache hit occurred and no image was pulled.
    
-   **Enable automatic image cache creation and match**
    
    To enable automatic image cache creation and match, add the `k8s.aliyun.com/eci-image-cache: "true"` annotation to the `.spec.[driver|executor].annotations` parameter. In this case, you do not need to specify an image cache ID.
    
    ```
    apiVersion: sparkoperator.k8s.io/v1beta2
    kind: SparkApplication
    metadata:
      name: spark-pi-eci-only
      namespace: default
    spec:
      type: Scala
      mode: cluster
      image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
      mainClass: org.apache.spark.examples.SparkPi
      mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
      arguments: 
      - "5000"
      sparkVersion: 3.5.2
      driver:
        annotations:
          # Enable automatic image cache creation and match.
          k8s.aliyun.com/eci-image-cache: "true"
        cores: 1
        coreLimit: 1200m
        memory: 512m
        serviceAccount: spark-operator-spark
        affinity:
          nodeAffinity:
            # Add an affinity rule to allow the job to be scheduled to elastic container instances.
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: type
                  operator: In
                  values:
                  - virtual-kubelet
        tolerations:
        # Add a toleration to tolerate a specific taint on elastic container instances.
        - key: virtual-kubelet.io/provider
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
      executor:
        annotations:
          # Enable automatic image cache creation and match.
          k8s.aliyun.com/eci-image-cache: "true"
        instances: 2
        cores: 2
        memory: 4g
        affinity:
          nodeAffinity:
            # Add an affinity rule to allow the job to be scheduled to elastic container instances.
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: type
                  operator: In
                  values:
                  - virtual-kubelet
        tolerations:
        # Add a toleration to tolerate a specific taint on elastic container instances.
        - key: virtual-kubelet.io/provider
          operator: Equal
          value: alibabacloud
          effect: NoSchedule
    ```
