If you do not have special requirements for pod specifications, such as for vGPUs and local disks, we recommend that you specify the number of vCPUs and memory size instead of Elastic Compute Service (ECS) instance types to create Elastic Container Instance pods. Then, the system can provide various ECS instance types based on the specified vCPUs and memory specifications for Elastic Container Instance to select a suitable instance type. This method provides better elasticity and resource provisioning than the method of specifying ECS instance types.

## Specification description

You can specify the number of vCPUs and memory size for the instance or containers in the instance when you create an elastic container instance. If the number of vCPUs or memory size that you specify is not supported by Elastic Container Instance, the system adjusts the number or size based on the specifications supported by Elastic Container Instance. When the system adjusts the number or size, the system selects the most similar specifications supported by Elastic Container Instance to create the instance, and the specifications selected by the system are higher than or equal to the specifications that you specified for the instance. For example, if you specify 7 vCPUs and 13 GiB of memory when you create an elastic container instance in the China (Hangzhou) region, the system creates an instance that contains 8 vCPUs and 14 GiB of memory.

The following tables describe the specifications supported by Elastic Container Instance.

**Note**

-   If you do not specify the number of vCPUs and memory size, the system uses 2 vCPUs and 4 GiB of memory to create an elastic container instance by default.
    
-   Each elastic container instance can have only one elastic network interface (ENI) bound.
    
-   The default temporary storage space for all specifications is 30 GiB in size.
    

**Specifications supported in all regions where Elastic Container Instance is available**

**vCPU**

**Memory (GiB)**

**Bandwidth (bidirectional, Gbit/s, theoretical upper limit)**

0.25

0.5 and 1

0.08

0.5

1 and 2

0.08

1

2, 4, and 8

0.1

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

**Bandwidth (bidirectional, Gbit/s, theoretical upper limit)**

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

## **Configuration description**

You can specify the number of vCPUs and memory size to create a pod by using one of the following methods:

-   Specify the number of vCPUs and memory size for each container in the pod by using the limits or requests parameter. We recommend that you use the limits parameter.
    
-   Specify the number of vCPUs and memory size for the pod by adding the annotation `k8s.aliyun.com/eci-use-specs` to the metadata section of the pod.
    

If you do not specify the limits, requests, or eci-use-specs parameter, or you specify all these parameters, the system creates a pod based on corresponding pod specifications.

**Scenario**

**Pod specification**

limits, requests, and eci-use-specs not specified

The system uses 2 vCPUs and 4 GiB of memory to create a pod.

Only limits specified

The system adds up the values of the limits parameter for all containers to create a pod.

Only requests specified

The system adds up the values of the requests parameter for all containers to create a pod.

Both limits and requests specified

The system adds up the values of the limits parameter for all containers to create a pod. The requests parameter for all containers is ignored.

Only eci-use-specs specified

The system creates a pod based on the value of the eci-use-specs parameter.

limits and eci-use-specs specified, or requests and eci-use-specs specified

The system creates a pod based on the value of the eci-use-specs parameter.

**Note**

If the sum of the values of the limits or requests parameter for all containers or the value of the eci-use-specs parameter is not supported by Elastic Container Instance, the system adjusts the pod specifications and then charges you based on the new specifications.

## **Specify the number of vCPUs and memory size for containers in a pod**

This method is the default method of creating pods in Kubernetes. You can create a maximum of 20 containers in each pod and configure the vCPU and memory specifications for each container. For each pod, the total vCPU and memory specifications of all containers must be lower than or equal to the vCPU and memory specifications of the pod.

**Note**

Elastic Container Instance allows you to set environment variables for a specific container, such as a sidecar container, to ignore the container when the system adjusts resources. This prevents waste of resources. For more information, see [Ignore specific containers when the system adjusts resources](/help/en/eci/user-guide/ignore-specific-containers-when-the-system-adjusts-resources-1#04377f8021wis).

You can specify the number of vCPUs and memory size in the limits parameter for a container. Sample configurations:

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
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "500m"      #Specify 0.5 vCPU for the container named nginx.
            memory: "1024Mi"   #Specify 1 GiB of memory for the container named nginx.
      - name: busybox
        image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
        command: ["sleep"]
        args: ["999999"]
        resources:
          limits:
            cpu: "1000m"   #Specify 1 vCPU for the container named busybox.
            memory: "2048Mi"  #Specify 2 GiB of memory for the container named busybox.
```

## **Specify the number of vCPUs and memory size for a pod**

The system provides multiple ECS instance types and selects a suitable one to achieve better elasticity and resource provisioning.

**Note**

If you have special requirements for instance families, for example, if you want to use only the sixth-generation ECS instance families, you can add an annotation to specify generations of ECS instance families. For more information, see [Specify generations of ECS instance families to create pods](/help/en/eci/user-guide/specify-or-exclude-specific-generations-of-ecs-instance-families-to-create-a-pod).

This method provides the following benefits:

-   You do not need to specify the number of vCPUs, memory size, or resource limits for containers in the pod. This provides the containers with greater flexibility to share resources.
    
-   In genetic computation and Istio scenarios, the service framework automatically deploys sidecar containers in pods. You can seamlessly connect Elastic Container Instance to the service framework by specifying the number of vCPUs and memory size for a pod.
    

You can add annotations to the metadata in the configuration file of a pod to specify the number of vCPUs and memory size for the pod. Sample configurations:

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
        k8s.aliyun.com/eci-use-specs : "2-4Gi"   # Specify 2 vCPUs and 4 GiB of memory for the pod.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
      - name: busybox
        image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
        command: ["sleep"]
        args: ["999999"]
        resources:
          limits:
            cpu: "500m"     #Specify the maximum number of vCPUs for a container.        
            memory: "1024Mi"   #Specify the maximum memory size for a container.
```
