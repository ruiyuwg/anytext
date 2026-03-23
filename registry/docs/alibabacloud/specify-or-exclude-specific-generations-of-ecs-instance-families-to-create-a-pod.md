If you create an Elastic Container Instance pod by specifying the number of vCPUs and memory size, you may require specific Elastic Compute Service (ECS) instance types. For example, you want to use only sixth-generation ECS instance families, such as g6 or c6, to create the pod. In this case, you can add the `k8s.aliyun.com/eci-instance-generation` annotation to specify the desired generation of ECS instance families. This topic describes how to specify or exclude specific generations of ECS instance families when you create a pod.

## **Feature description**

When you create an Elastic Container Instance pod by specifying the number of vCPUs and memory size, the system uses a variety of ECS instance types to support the creation and automatically selects the instance types that meet the vCPUs and memory requirements and have sufficient resources. In this case, you can add the `k8s.aliyun.com/eci-instance-generation` annotation to specify or exclude specific generations of ECS instance families.

-   If you specify specific generations of ECS instance families, the system selects ECS instance types only from the specified generations of ECS instance families. If the resources of the specified generations of ECS instance families are insufficient, the system does not create a pod.
    
-   If you exclude specific generations of ECS instance families, the system selects ECS instance types from other generations of ECS instance families that are supported by Elastic Container Instance to create a pod.
    

The following table describes the generations of ECS instance families that you can specify or exclude when you create pods. The following table also describes the ECS instance families of the generations.

**Architecture**

**Generation of ECS instance families**

**ECS instance family**

Arm

8

g8y, c8y, and r8y

x86

8

g8i, c8i, r8i, hfg8i, hfc8i, and hfr8i

7

g7, c7, r7, hfg7, hfc7, hfr7, and g7ne

6

g6e, g6, c6e, c6, r6e, r6, hfc6, and hfg6

5

u1, g5, g5ne, c5, r5, ic5, hfc5, and hfg5

4

sn2ne, sn1ne, se1ne, and se1

For more information about ECS instance families, see the following topics:

-   [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [ECS Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)
    

## **Precautions**

-   Pods that are created based on specific generations of ECS instance families are billed based on the actually used ECS instance type. The pods are not billed based on the specified number of vCPUs and memory size.
    
    **Important**
    
    After a pod is created, you can run the `kubectl describe pod` command to view the YAML details of the pod. The value of the `k8s.aliyun.com/eci-instance-spec` field indicates the ECS instance type that is used by the pod. The pod is billed based on the ECS instance type.
    
-   When you specify or exclude specific generations of ECS instance families, the system cannot automatically select specific instance types, including GPU-accelerated instance types such as those in the gn6i instance family and instance types with local disks such as those in the i2g instance family. If you want to create a pod by using specific ECS instance types, directly specify the instance types. For more information, see [Specify ECS instance types to create a pod](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-a-pod-1/).
    
-   You can specify or exclude specific generations of ECS instance families to create preemptible elastic container instances. In this scenario, the system selects the most suitable ECS instance type based on the market price and the sequence of the generations of ECS instance families that you configured. If you have strict requirements for the generations of ECS instance families, we recommend that you specify only one generation.
    
-   The feature of specifying or excluding specific generations of ECS instance families takes effect only when you create pods by specifying the number of vCPUs and memory size. If you first specify ECS instance types when you create pods, the feature does not take effect.
    

## **Configuration description**

Valid values of `k8s.aliyun.com/eci-instance-generation` are generations of ECS instance families. Take note of the following items:

-   You can configure multiple generations. Valid values are the generations of the ECS instance families that can be used to create pods.
    
    **Important**
    
    The eighth-generation ECS instance families support only the Arm architecture. To create a pod by using the eighth-generation ECS instance families, you must specify the nodeSelector field to schedule the pod to an Arm-based virtual node. You cannot use the 8th-generation ECS instance families together with those using the x86 architecture. When you create Arm-based pods, you do not need to specify or exclude specific generations of ECS instance families. For example, you do not need to exclude the 8th-generation ECS instance families. For more information, see [Schedule pods to an Arm-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture) and [ECS instance types of the Arm architecture](/help/en/eci/user-guide/create-a-pod-by-specifying-the-arm-specification).
    
-   If you add a minus sign (`-`) before a generation of ECS instance families, the generation is excluded.
    
    For example, `k8s.aliyun.com/eci-instance-generation: "-5,-4"` specifies that fifth- and fourth-generation ECS instance families are excluded and seventh- or six-generation ECS instance families are used.
    
-   The system selects the specified generations based on the order in which they are specified.
    
    For example, the `k8s.aliyun.com/eci-instance-generation: "6,5"` annotation specifies that the system preferentially uses sixth-generation ECS instance families. If the resources of sixth-generation ECS instance families that meet the required vCPU and memory specifications are insufficient, fifth-generation ECS instance families are used. If the resources of fifth-generation ECS instance families are also insufficient, no pod is created.
    

Before you use the `k8s.aliyun.com/eci-instance-generation` annotation, you must specify the number of vCPUs and memory size by using one of the following methods:

-   Specify the limits or requests parameter of containers. We recommend that you specify the limits parameter.
    
-   Add the `k8s.aliyun.com/eci-use-specs` annotation to the metadata of the pod.
    

### **Example 1: Specify specific generations of ECS instance families**

**Parameter**

**Effect**

-   The limits parameter is configured to define vCPU and memory resources (2 vCPUs and 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-generation: "6,5"` annotation is configured. The annotation specifies that the system uses the sixth-generation ECS instance families and then the fifth-generation ECS instance families.
    

-   The system preferentially selects instance types from the sixth-generation ECS instance families that meet the vCPU and memory specification requirements.
    
-   If the resources of the sixth-generation ECS instance families are insufficient, the system selects instance types from the fifth-generation ECS instance families.
    

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
        k8s.aliyun.com/eci-instance-generation: "6,5"    # Specifies that the sixth-generation ECS instance families and fifth-generation ECS instance families are used in sequence.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "2"       # Specifies the maximum number of vCPUs.        
            memory: "4Gi"  # Specifies the maximum memory size.
```

### **Example 2: Exclude specific generations of ECS instance families**

**Parameter**

**Effect**

-   The `k8s.aliyun.com/eci-use-specs: "2-4Gi"` annotation is configured to define vCPU and memory resources (2 vCPUs, 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-generation: "-5,-4"` annotation is configured to exclude the fifth-generation and fourth-generation ECS instance families.
    

The system selects instance types from seventh-generation and sixth-generation ECS instance families that meet the vCPU and memory specification requirements.

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
        k8s.aliyun.com/eci-use-specs: "2-4Gi"                    # Specifies the vCPU and memory specifications in fuzzy search mode.
        k8s.aliyun.com/eci-instance-generation: "-5,-4"          # Excludes the fifth-generation and fourth-generation ECS instance families.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

### **Example 3: Specify specific generations of ECS instance families and exclude specific ECS instance families**

**Parameter**

**Effect**

-   The `k8s.aliyun.com/eci-use-specs: "2-4Gi"` annotation is configured to define vCPU and memory resources (2 vCPUs, 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-generation: "6,5"` annotation is configured. The annotation specifies that the system uses the sixth-generation ECS instance families and then the fifth-generation ECS instance families.
    
-   The `k8s.aliyun.com/eci-instance-family: "-ecs.hfg5"` annotation is configured to exclude the ecs.hfg5 instance families.
    

-   The system preferentially selects instance types from the sixth-generation ECS instance families that meet the vCPU and memory specification requirements.
    
-   If the resources of the sixth-generation ECS instance families are insufficient, the system selects instance types from the fifth-generation ECS instance families (except ecs.hfg5) that are supported by Elastic Container Instance.
    

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
        k8s.aliyun.com/eci-use-specs: "2-4Gi"                   # Specifies the vCPU and memory specifications.
        k8s.aliyun.com/eci-instance-generation: "6,5"           # Specifies that the sixth-generation and fifth-generation ECS instance families are used in sequence.
        k8s.aliyun.com/eci-instance-family: "-ecs.hfg5"           # Excludes the ecs.hfg5 instance family.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

### **Example 4: Exclude specific generations of ECS instance families and specific ECS instance families**

**Parameter**

**Effect**

-   The `k8s.aliyun.com/eci-use-specs: "2-4Gi"` annotation is configured to define vCPU and memory resources (2 vCPUs, 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-generation: "-5,-4"` annotation is configured to exclude the fifth-generation and fourth-generation ECS instance families.
    
-   The `k8s.aliyun.com/eci-instance-family: "-ecs.hfg6"` annotation is configured to exclude the ecs.hfg6 instance family.
    

The system selects instance types from seventh-generation and sixth-generation ECS instance families (except ecs.hfg6) that meet the vCPU and memory specification requirements.

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
        k8s.aliyun.com/eci-use-specs: "2-4Gi"                    # Specifies the vCPU and memory specifications in fuzzy search mode.
        k8s.aliyun.com/eci-instance-generation: "-5,-4"          # Excludes the fifth-generation and fourth-generation ECS instance families.
        k8s.aliyun.com/eci-instance-family: "-ecs.hfg6"            # Excludes the ecs.hfg6 instance family.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

### **Example 5: Invalid settings**

The feature of specifying or excluding specific generations of ECS instance families takes effect only if you create pods by specifying the number of vCPUs and memory size. If you create pods by specifying ECS instance types, the feature does not take effect. If the specified generations of ECS instance families do not take effect, an IgnoreInstanceTypeFeatures event is generated.

**Event name**

**Type**

**Event message**

**Event description**

IgnoreInstanceTypeFeatures

Warning

\[eci.containergroup\]The instance type features will be ignored as the provided specifications, \[%s\],correspond exclusively to ECS instance types.

The `k8s.aliyun.com/eci-use-specs` annotation defines the ECS instance types. This way, other annotations to specify the generations of ECS instance families are ignored.

In the following example, the annotation that specifies the sixth-generation ECS instance families is automatically ignored, and only the ecs.c5.large instance type is used to create a pod:

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
        k8s.aliyun.com/eci-use-specs: "ecs.c5.large"   # Specifies a specific ECS instance type.
        k8s.aliyun.com/eci-instance-generation: "6"    # Specifies specific generations of ECS instance families. The setting does not take effect.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

The following figure shows the IgnoreInstanceTypeFeatures events in the Pod event.

![generation1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974359271/p577183.png)
