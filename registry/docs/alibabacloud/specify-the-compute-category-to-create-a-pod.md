In most scenarios, if you do not require special Elastic Compute Service (ECS) instance types such as GPU-accelerated ECS instance types and ECS instance types with local disks, we recommend that you specify vCPU and memory specifications to create Elastic Container Instance-based pods (elastic container instances). In this case, you can further specify a compute category. For example, if you want to use a pod that has 0.25 to 8 vCPUs in a simple application scenario, you can set the compute category to economy to reduce the cost. If you want the instance to have one or more vCPUs, you can set the compute category to general to obtain high performance.

## **Description of the compute category feature**

To better meet your requirements for low cost or stable performance, Elastic Container Instance provides the compute category feature. When you create an elastic container instance by specifying vCPU and memory specifications, Elastic Container Instance selects an underlying architecture based on the economy and general compute categories. You can configure a compute category based on your requirements. The system automatically selects an underlying architecture that matches the vCPU and memory specifications.

-   **Economy compute category**
    
    The economy compute category supports instances that have 0.25 to 8 vCPUs. The unit price of instances of the economy compute category is lower than the unit price of instances of the general compute category.
    
-   **General compute category**
    
    The general compute category supports instances that have 1 to 64 vCPUs. The specification unit prices of instances of the general compute category are the same as the specification unit prices of instances that are created without the compute category feature enabled. Instances of the general compute category provide higher performance than instances with the same vCPU and memory specifications that are created without the compute category feature enabled.
    

## **How to select a compute category**

You can select a compute category based on your specific preferences for low cost, stable performance, or high availability. We recommend that you select a compute category based on the following rules:

-   If you want to use the elastic container instance in simple applications, you can select the economy compute category to reduce resource costs.
    
-   If you want the elastic container instance to provide high performance, you can select the general compute category.
    
-   If your business can tolerate certain performance fluctuations, you can specify multiple compute categories to prevent instance creation failure due to insufficient resources and ensure high availability.
    

## **Description of the compute categories**

This section describes the economy and general compute categories supported by Elastic Container Instance.

**Note**

By default, the temporary storage space of instances of the economy and general compute category is 30 GiB.

### Economy compute category

**Specifications supported in all regions where Elastic Container Instance is available**

**vCPU**

**Memory (GiB)**

**Baseline bandwidth (bidirectional, Gbit/s)**

0.25

0.5 and 1

0.08

0.5

1 and 2

0.08

1

2, 4, and 8

0.08

2

1, 2, 4, 8, and 16

0.2

4

2, 4, 8, 16, and 32

0.4

8

4, 8, 16, 32, and 64

0.8

**Specifications supported only in some regions**

**Important**

-   The specifications contained in the following table are supported only in some regions. When you create an elastic container instance that has one of the following specifications, make sure that the corresponding specifications are supported in the specified region and zone. Otherwise, the instance cannot be created because no resources exist in the region and zone.
    
    The regions that support the specifications contained in the following table include: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), and Singapore.
    
-   You cannot use the specifications in the following table to create preemptible instances.
    

**vCPU**

**Memory (GiB)**

**Baseline bandwidth (bidirectional, Gbit/s)**

2

6, 10, 12, and 14

0.2

4

6, 10, 12, 14, 18, 20, 22, 24, 26, 28, and 30

0.4

6

6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, and 48

0.8

8

10, 12, 14, 18, 20, 22, 24, 26, 28, 30, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, and 62

0.8

### General compute category

**Specifications supported in all regions where Elastic Container Instance is available**

**vCPU**

**Memory (GiB)**

**Baseline bandwidth (bidirectional, Gbit/s)**

1

2, 4, and 8

1

2

1, 2, 4, 8, and 16

1

4

2, 4, 8, 16, and 32

1.5

8

4, 8, 16, 32, and 64

2

12

12, 24, 48, and 96

2.5

16

16, 32, 64, and 128

3

24

24, 48, 96, and 192

4.5

32

32, 64, 128, and 256

6

52

96, 192, and 384

12.5

64

128, 256, and 512

20

**Specifications supported only in some regions**

**Important**

-   The specifications contained in the following table are supported only in some regions. When you create an elastic container instance that has one of the following specifications, make sure that the corresponding specifications are supported in the specified region and zone. Otherwise, the instance cannot be created because no resources exist in the region and zone.
    
    The regions that support the specifications contained in the following table include: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), and Singapore.
    
-   You cannot use the specifications in the following table to create preemptible instances.
    

**vCPU**

**Memory (GiB)**

**Baseline bandwidth (bidirectional, Gbit/s)**

2

6, 10, 12, and 14

1

4

6, 10, 12, 14, 18, 20, 22, 24, 26, 28, and 30

1.5

6

6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, and 48

1.5

8

10, 12, 14, 18, 20, 22, 24, 26, 28, 30, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, and 62

2.5

## **Billing rules**

**Important**

The economy and general compute categories are in public preview.

-   Economy compute category
    
    Compared with instances that are created without the compute category feature enabled, instances of the economy compute category are entitled to the same memory unit price and a lower vCPU unit price.
    
    -   Unit price of vCPUs: USD 0.00000424 per vCPU-second (USD 0.015264 per vCPU-hour)
        
    -   Unit price of the memory: USD 0.00000096 per GiB-second (USD 0.003456 per GiB-hour)
        
-   General compute category
    
    The specification unit prices of instances of the general compute category are the same as the specification unit prices of elastic container instances that are created without the compute category feature enabled.
    
    -   Unit price of vCPUs (1 vCPU): USD 0.0000077/second (USD 0.02772 hour)
        
    -   Unit price of memory (1 GiB): USD 0.00000096/second (USD 0.003456/hour)
        

**Important**

After a pod is created, you can run the `kubectl describe pod` command to view the details of the pod. You can check the actually used compute category of the pod in the `k8s.aliyun.com/eci-instance-compute-category` response annotation. You are charged based on the specification unit prices of the corresponding compute category.

## **Limits**

The following limits apply if you specify a compute category when you create pods:

-   This feature is valid only when you create elastic container instances by specifying vCPU and memory specifications.
    
    If you specify ECS instance types when you create elastic container instances, the ECS instance types take precedence. In this case, you cannot specify a compute category.
    
-   This feature is not supported when you create preemptible pods.
    
    If you configure annotations to set the pod category to preemptible and the compute category to economy, the system reports an error. The error code is FeatureBasedConstraintConflict.
    
-   This feature is not supported when you create Arm-based pods.
    
    If you schedule the pod to run on an Arm-based virtual node and set the compute category to economy in an annotation, the system reports an error. The error code is FeatureBasedConstraintConflict.
    
-   This feature cannot be used together with the following features:
    
    -   Specify or exclude ECS instance families
        
    -   Specify or exclude specific generations of ECS instance families
        

## **Configuration description**

You can use one of the following methods to specify vCPU and memory specifications when you create a pod:

-   Specify the number of vCPUs and memory size for each container in the pod by using the limits or requests parameter. We recommend that you use the limits parameter.
    
-   Specify the number of vCPUs and memory size for the pod by adding the annotation `k8s.aliyun.com/eci-use-specs` to the metadata section of the pod.
    

**Note**

If you do not specify limits, requests, or `k8s.aliyun.com/eci-use-specs`, or you specify all of them, the system creates a pod based on the scenario. For more information, see [Configuration description](/help/en/eci/user-guide/specify-the-number-of-vcpus-and-memory-size-to-create-a-pod-1#9a30b29038a30).

If you create a pod by specifying vCPU and memory specifications, you can further use the `k8s.aliyun.com/eci-compute-category` annotation to specify the compute category of the pod.

-   Valid values: `economy` and `general`.
    
-   You can specify multiple compute categories. The system selects the category for the pod based on the specified order of the compute categories.
    

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

## **Effective rules**

After you enable the compute category feature, the actually used specifications and compute category of the pod are determined based on the following rules:

**Important**

After a pod is created, you can run the `kubectl describe pod` command to view the details of the pod. You can check the actually used compute category of the pod in the `k8s.aliyun.com/eci-instance-compute-category` response annotation. You are charged based on the specification unit prices of the corresponding compute category.

**How you configure the instance during instance creation**

**Actually created instance**

No vCPU and memory specifications are specified, but a compute category is specified.

An instance that has 2 vCPUs and 4 GiB of memory is created. The instance uses the specified compute category.

vCPU and memory specifications and a compute category are specified, and the combination of conditions meets the specification requirements of elastic container instances.

An instance is created based on the specified conditions.

The specified number of vCPUs is less than 1, but the specified compute category is general.

The conditions do not meet the specification requirements of elastic container instances. The system automatically adjusts the number of vCPUs to 1 to meet the requirements of the general compute category.

The specified number of vCPUs is greater than 8, but the specified compute category is economy.

The conditions do not meet the specification requirements of elastic container instances. The system cannot automatically adjust the specification. An error is reported.

vCPU and memory specifications and a compute category are specified. The specified number of vCPUs is within the vCPU specification range of the compute category, but does not meet the specification requirements of elastic container instances.

The system automatically adjusts the specifications of the instance based on the specifications supported by Elastic Container Instance. When the system adjusts the specifications of the instance, the system selects the most similar specifications supported by Elastic Container Instance, and the selected vCPU and memory specifications are higher than or equal to the specified vCPU and memory specifications.

For example, if you set the vCPU and memory specifications to `7-13Gi` and the compute category to `general`, the system automatically adjusts the instance specifications to 8 vCPUs and 16 GiB of memory, which are the most similar specifications that support the general compute category.

Multiple vCPU and memory specifications or multiple compute categories are specified.

The system selects instance specifications based on the following rules:

-   The system creates the elastic container instance based on the specified order of the vCPU and memory specifications or compute categories.
    
-   Instance specifications have a higher priority than compute categories.
    
-   The combination of instance specifications and compute categories must meet the specification requirements of elastic container instances.
    

For example, if you set the vCPU and memory specifications to `4-8Gi,8-16Gi,16-32Gi` and the compute categories to `general,economy`, the system tries to create the instance in the following sequence:

1.  4-8Gi, general
    
2.  4-8Gi, economy
    
3.  8-16Gi, general
    
4.  8-16Gi, economy
    
5.  16-32Gi, general
    
6.  16-32Gi, economy (invalid and automatically ignored)
    

**Important**

Because instance specifications have a higher priority than compute categories, if multiple compute categories are specified and the specified vCPU and memory specifications do not meet the specification requirements of elastic container instances, the system considers all the compute categories and scales up the instance specifications to the most similar instance specifications. If the intended vCPU and memory specifications are not compatible with a given compute category, this compute category is not considered in the scheduling of the current vCPU and memory specifications.

For example, if you set the vCPU and memory specifications to `0.5-1.9Gi` and the compute categories to `general,economy`, the system adjusts the instance specifications to `0.5-2Gi` because the instance specifications of 0.5 vCPU and 2 GiB of memory belong to the economy compute category. However, because the instance specifications of 0.5 vCPU and 2 GiB of memory are not compatible with the general compute category, the scheduling of the current vCPU and memory specifications (`0.5-1.9Gi`) considers only the `0.5-2Gi` instance specifications and the `economy` compute category.

## **Configuration examples**

-   Example 1: Specify the limits parameter for each container and set the compute category to economy
    
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
          name: test
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-compute-category: "economy"  # Set the compute category to economy.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
            resources:
              limits:
                cpu: "500m"      # Specify 0.5 vCPU for the container named nginx.
                memory: "1024Mi"   # Specify 1 GiB of memory for the container named nginx.
          - name: busybox
            image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
            command: ["sleep"]
            args: ["999999"]
            resources:
              limits:
                cpu: "1000m"   # Specify 1 vCPU for the container named busybox.
                memory: "2048Mi"  # Specify 2 GiB of memory for the container named busybox.
    ```
    
-   Example 2: Specify the limits parameter for each container and set the compute category to general,economy.
    
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
          name: test
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-compute-category: "general,economy" # Set the compute category to general,economy. The system preferentially creates a pod of the general compute category. If the creation fails, the system creates a pod of the economy compute category.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
            resources:
              limits:
                cpu: "2000m"      # Specify 2 vCPUs for the container named nginx.
                memory: "4096Mi"   # Specify 4 GiB of memory for the container named nginx.
          - name: busybox
            image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
            command: ["sleep"]
            args: ["999999"]
            resources:
              limits:
                cpu: "2000m"   # Specify 2 vCPUs for the container named busybox.
                memory: "4096Mi"  # Specify 4 GiB of memory for the container named busybox. 
    ```
    
-   Example 3: Use the `k8s.aliyun.com/eci-use-specs` annotation to specify multiple vCPU and memory specifications and set the compute category to general
    
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
          name: test
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-use-specs : "2-4Gi,4-8Gi"    # Specify that the system first uses the specifications of 2 vCPUs and 4 GiB of memory to create the pod. If the creation fails, the system uses the specifications of 4 vCPUs and 8 GiB of memory.
            k8s.aliyun.com/eci-compute-category: "economy"  # Set the compute category to economy.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
