This topic describes how to specify Elastic Compute Service (ECS) instance types of the x86 architecture to create an Elastic Container Instance (ECI) pod.

## **Instance types**

ECS instance types of the x86 architecture fall into two categories based on whether they are suitable for enterprise scenarios: enterprise-level families and shared families.

**Enterprise-level x86 computing instance families**

x86-based instance types are built on the x86 architecture. Each vCPU corresponds to a hyper-thread of a processor core. They deliver stable performance and are suitable for various types and sizes of enterprise applications, database systems, video encoding and decoding, and data analytics.

**Category**

**Enterprise-level x86 instance family**

General-purpose

g9ae, g9a, g9i, g8a, g8i, g7a, g7, g6e, g6a, g6, g5, sn2ne, sn2

Compute-optimized

c9ae, c9a, c9i, c8a, c8i, c7a, c7, c6e, c6a, c6, c5, sn1ne, sn1

Memory-optimized

r9ae, r9a, r9i, r8a, r8i, r7a, r7, r6e, r6a, r6, r5, se1ne, se1

General-purpose computing

u2a, u2i, u1

Compute-intensive

ic5

High clock speed

-   hfg8i, hfg7, hfg6, hfg5
    
-   hfc8i, hfc7, hfc6, hfc5
    
-   hfr8i, hfr7
    

Big data

d1, d1ne

Local SSD

i2, i2g

Memory-enhanced

re6

**Shared x86 computing instance families**

Shared instance types are designed for small and medium-sized websites or individual developers. Compared with enterprise-level instance types, shared instance types use shared resources. This means the computing performance of an instance cannot be guaranteed, but the cost is lower.

**Category**

**Shared x86 instance family**

Economy

e

**Note**

Some of the preceding instance families use local disks, such as i2 and d1ne. To mount local disks, you must configure a volume. For more information, see [ECS instance types that use a local disk](/help/en/eci/user-guide/create-a-pod-by-specifying-the-specifications-of-a-local-disk).

For more information about ECS instance types, see the following topics:

-   [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [Overview of ECS Instance Types Available by Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)
    

## **Configurations**

You can specify ECS instance types by adding the `k8s.aliyun.com/eci-use-specs` annotation to the pod metadata. The following is a YAML example:

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
        k8s.aliyun.com/eci-use-specs: ecs.c6.large,ecs.c5.large  # Specify up to five ECS instance types as needed.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```
