This topic describes how to specify Arm-based Elastic Compute Service (ECS) instance types to create an Elastic Container Instance (ECI) pod. The pod runs on an Arm-based virtual node.

## **Prerequisites**

Arm-based virtual nodes are created in the cluster. For information about how to create an Arm-based virtual node in a cluster, see [Add an Arm-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture#42f0d9a058lbp).

## **Supported instance families**

Arm-based ECS instance types are based on the ARM architecture. Each vCPU corresponds to a physical core of a processor. They deliver stable performance and provide exclusive resources. They are suitable for scenarios such as containers, microservices, website and application servers, high-performance computing, and CPU-based machine learning.

**Category**

**Arm-based instance family**

General-purpose instance families

g8y

Compute-optimized instance families

c8y

Memory optimized instance families

r8y

For more information about ECS instance families, see the following topics:

-   [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [ECS Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)
    

## **Configurations**

In addition to adding the `k8s.aliyun.com/eci-use-specs` annotation to the metadata in the configuration file of the pod to specify Arm-based ECS instance types, you must set nodeSelector to kubernetes.io/arch: arm64. This allows Kubernetes to schedule the pod to an Arm-based virtual node.

Example:

1.  Make sure that Arm-based virtual nodes exist in the cluster.
    
    ```
    kubectl get node
    ```
    
    If the returned node name contains the `linux-arm64` suffix, the node is an Arm-based virtual node.
    
    ![ARM节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8196953861/p634602.png)
    
    **Note**
    
    For information about how to create an Arm-based virtual node in a cluster, see [Add an ARM-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture#42f0d9a058lbp).
    
2.  Specify Arm-based ECS instance types to create the pod.
    
    ```
    kubectl create -f arm-test.yaml
    ```
    
    Example of the arm-test.yaml file:
    
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
            k8s.aliyun.com/eci-use-specs: "ecs.c8y.large,ecs.g8y.large"   # Specifies Arm-based ECS instance types. You can specify a maximum of five instance types at a time. 
        spec:
          containers:
          - name: nginx
            image: arm64v8/centos:7.9.2009   # Uses an Arm-based image. 
            command: ["sleep"]
            args: ["999999"]
          nodeSelector:
            kubernetes.io/arch: arm64  # Schedules the pod to an Arm-based virtual node.
    ```
