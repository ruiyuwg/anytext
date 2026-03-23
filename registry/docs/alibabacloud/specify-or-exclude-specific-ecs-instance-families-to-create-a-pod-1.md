If you create an Elastic Container Instance pod by specifying the number of vCPUs and memory size, you may require specific Elastic Compute Service (ECS) instance types. For example, you want to use only the ecs.g6 instance family to create the pod. In this case, you can add the `k8s.aliyun.com/eci-instance-family` annotation to specify the desired ECS instance family. This topic describes how to specify or exclude specific ECS instance families when you create an Elastic Container Instance pod.

## **Feature description**

When you create a pod by specifying the number of vCPUs and memory size, the system uses multiple ECS instance types to support the creation. The system automatically selects ECS instance types that meet the vCPU and memory specification requirements and have sufficient resources. In this case, you can add the `k8s.aliyun.com/eci-instance-family` annotation to specify or exclude specific ECS instance families.

-   If you specify specific ECS instance families, the system selects ECS instance types only from the specified ECS instance families. If the resources of the specified ECS instance families are insufficient, the system does not create a pod.
    
-   If you exclude specific ECS instance families, the system selects instance types from other ECS instance families that are supported by Elastic Container Instance to create a pod.
    

**Note**

You can use the k8s.aliyun.com/eci-instance-family annotation together with the `k8s.aliyun.com/eci-instance-generation` annotation to implement finer-grained control on ECS instance types. k8s.aliyun.com/eci-instance-generation specifies or excludes specific generations of ECS instance families.

The following table describes the ECS instance families that you can specify or exclude.

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

-   Pods are billed based on the actual ECS instance type used, rather than the specified vCPU and memory specifications, when created based on specified or excluded ECS instance families.
    
    **Important**
    
    After a pod is created, you can run the `kubectl describe pod` command to view the YAML details of the pod. The value of the `k8s.aliyun.com/eci-instance-spec` field indicates the ECS instance type that is used by the pod. The pod is billed based on the ECS instance type.
    
-   When you specify or exclude specific ECS instance families, the system cannot automatically select specific instance types, including GPU-accelerated instance types such as those in the gn6i family and instance types with local disks such as those in the i2g family. If you want to create a pod by using specific ECS instance types, directly specify the instance types. For more information, see [Specify ECS instance types to create a pod](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-a-pod-1/).
    
-   The feature of specifying or excluding specific ECS instance families takes effect only if you create pods by specifying the number of vCPUs and memory size. If you create pods by specifying ECS instance types, the feature does not take effect.
    
-   When you create a preemptible elastic container instance, the system selects the most appropriate ECS instance type based on the specified or excluded instance families. The selection is determined by the sorting order of the instance families and the market price of the instance types, with the market price taking precedence over the sorting order. If you have strict requirements for ECS instance families, we recommend that you configure only one instance family.
    

## **Configuration description**

Valid values of the `k8s.aliyun.com/eci-instance-family` annotation are ECS instance families. Take note of the following items:

-   You can configure multiple ECS instance families supported by Elastic Container Instance.
    
    **Important**
    
    The eighth-generation ECS instance families support only the Arm architecture. To create a pod by using the eighth-generation ECS instance families, you must specify the nodeSelector field to schedule the pod to an Arm-based virtual node. You cannot use the 8th-generation ECS instance families together with those using the x86 architecture. You must separately specify or exclude the eighth-generation ECS instance families. For more information, see [Example 5: Specify Arm-based ECS instance families](#c8d6eea0584wd).
    
-   If you add a minus sign (`-`) before an instance family, the instance family is excluded when you create a pod.
    
    For example, `k8s.aliyun.com/eci-instance-family: "-ecs.c6, -ecs.c5"` specifies that the ecs.c6 and ecs.c5 instance families are excluded.
    
-   The system selects the specified instance families based on their sorting order.
    
    For example, the `k8s.aliyun.com/eci-instance-family: "ecs.c6, ecs.c5"` annotation specifies that the system preferentially uses the ecs.c6 instance family. If the resources of the ecs.c6 instance family that meet the vCPU and memory specification requirements are insufficient, the ecs.c5 instance family is used. If the resources of the ecs.c5 instance family are also insufficient, no pod is created.
    

Before you use the `k8s.aliyun.com/eci-instance-family` annotation, you must specify the vCPU and memory specifications by using one of the following methods:

-   Configure the limits or requests parameter of containers. We recommend that you configure the limits parameter.
    
-   Add the `k8s.aliyun.com/eci-use-specs` annotation to the metadata of the pod.
    

### Example 1: Specify specific ECS instance families

**Parameter**

**Effect**

-   The limits parameter is configured to define vCPU and memory resources (2 vCPUs and 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-family: "ecs.c6, ecs.g6"` annotation is configured. The annotation specifies that the system uses the ecs.c6 instance family and then the ecs.g6 instance family.
    

The system uses the ecs.c6.large instance type and then the ecs.g6.large instance type.

**Note**

The effect of this sample configuration is equivalent to the effect of `k8s.aliyun.com/eci-use-specs: "ecs.c6.large,ecs.g6.large"`.

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
      app: test
  template:
    metadata:
      name: test
      labels:
        app: test
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-instance-family: "ecs.c6,ecs.g6"    # Specifies that the ecs.c6 and ecs.g6 instance families are used in sequence.
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

### Example 2: Exclude specific ECS instance families

**Parameter**

**Effect**

-   The `k8s.aliyun.com/eci-use-specs: "2-4Gi"` annotation is configured to define vCPU and memory resources (2 vCPUs, 4 GiB of memory).
    
-   The `k8s.aliyun.com/eci-instance-family: "-ecs.hfg6,-ecs.hfg5"` annotation is configured to exclude the ecs.hfg6 and ecs.hfg5 instance families.
    

The system selects instance types from ECS instance families (except ecs.hfg6 and ecs.hfg5) that are supported by Elastic Container Instance and meet the vCPU and memory specification requirements.

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
        k8s.aliyun.com/eci-instance-family: "-ecs.hfg6,-ecs.hfg5"    # Excludes the ecs.hfg6 and ecs.hfg5 instance families.
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

### **Example 5: Specify Arm-based ECS instance families**

**Parameter**

**Effect**

-   The `k8s.aliyun.com/eci-use-specs: "2-4Gi,4-8Gi"` annotation is added to specify the vCPU and memory specifications (2 vCPUs and 4 GiB of memory, and 4 vCPUs and 8 GiB of memory are used in sequence).
    
-   The `k8s.aliyun.com/eci-instance-family: "ecs.c8y"` annotation is added to specify the ecs.c8y instance family.
    
-   The `alibabacloud.com/eci: "true"` and `kubernetes.io/arch: arm64` fields are specified to schedule the pod to an Arm-based virtual node.
    

The ecs.c8y.large and ecs.c8y.xlarge instance types are used in sequence.

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
        k8s.aliyun.com/eci-use-specs: "2-4Gi,4-8Gi"              # Specifies multiple vCPU and memory specifications.
        k8s.aliyun.com/eci-instance-family: "ecs.c8y"            # Specifies the ecs.c8y instance family.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
      nodeSelector:
        kubernetes.io/arch: arm64  # Schedules the pod to an Arm-based virtual node.
```

### **Example 6: Invalid settings**

The feature of specifying or excluding specific ECS instance families takes effect only when you create pods by specifying the number of vCPUs and memory size. If you create pods by specifying ECS instance types, the feature does not take effect. If the specified ECS instance families do not take effect, an IgnoreInstanceTypeFeatures event is generated.

**Event name**

**Type**

**Event message**

**Event description**

IgnoreInstanceTypeFeatures

Warning

\[eci.containergroup\]The instance type features will be ignored as the provided specifications, \[%s\],correspond exclusively to ECS instance types.

The `k8s.aliyun.com/eci-use-specs` annotation defines the ECS instance types. This way, other annotations to specify the ECS instance families are ignored.

In the following example, the annotation that specifies the ecs.c6 instance family is automatically ignored, and only the ecs.c5.large instance type is used to create the pod.

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
        k8s.aliyun.com/eci-instance-family: "ecs.c6"   # Specifies a specific ECS instance family. The setting does not take effect.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

The following figure shows the IgnoreInstanceTypeFeatures events in the Pod event.

![generation1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974359271/p577183.png)
