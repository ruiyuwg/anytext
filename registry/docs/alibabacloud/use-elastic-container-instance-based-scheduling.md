Elastic Container Instance-based scheduling is a scheduling policy that Alibaba Cloud provides for elastic resource scheduling. You can add annotations to specify the resources that you want to use when you deploy applications. You can specify that only Elastic Compute Service (ECS) instances or elastic container instances are used, or enable the system to request elastic container instances when ECS resources are insufficient. Elastic Container Instance-based scheduling can meet your resource requirements in different workload scenarios. This topic describes how to use Elastic Container Instance-based scheduling.

**Important**

Kubernetes versions 1.18 to 1.24 retain the elastic scheduling capability in Elastic Container Instance. Since May 2023, Container Service for Kubernetes (ACK) has discontinued maintenance of this feature for clusters that run Kubernetes v1.24 or later. We recommend that you use one of the following solutions:

-   [Configure resource allocation based on ECS instances and elastic container instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling): By using Kubernetes-native scheduling features, such as taints, tolerations, and node affinity, you can enforce scheduling policies such as Elastic Container Instance-only, ECS-only, or ECS-preferred for pods.
    
-   [Configure priority-based resource scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-priority-based-resource-scheduling): Compared to native Kubernetes scheduling, the ResourcePolicy enables more advanced and flexible strategies. Examples include:
    
    -   Priority scheduling to subscription-based ECS instances, followed by pay-as-you-go ECS instances, and finally elastic container instances.
        
    -   Reverse-order scale-down during resource reduction.
        
    -   Non-intrusive migration capabilities for running pods.
        

For detailed comparisons and recommendations on virtual node scheduling solutions, see [Schedule a pod to a virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

## Prerequisites

-   The cluster type is ACK managed Pro cluster.
    
-   You are using the following versions of the scheduler based on the Kubernetes version of the cluster. For more information about the features of different versions of the scheduler, see [kube-scheduler](/help/en/ack/product-overview/kube-scheduler#task-2280286).
    
    **Kubernetes version**
    
    **Scheduler version**
    
    1.18
    
    v1.18-ack-3.0 and later
    
    1.20
    
    v1.20.4-ack-4.0 and later
    
    1.22
    
    v1.22.3-ack-1.0 and later
    
    1.24
    
    v1.24.3-ack-2.0 and later
    
-   The **ack-virtual-node** component is deployed in the cluster. For more information, see [Schedule pods to elastic container instances through virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods).
    

## Configuration

To declare the type of elastic resources for a pod, add the `alibabacloud.com/burst-resource` annotation to the pod’s metadata. The valid values and usage rules are as follows:

**Note**

The annotation is added under the pod’s `metadata` section. For example, when creating a Deployment, add the annotation under `spec.template.metadata`.

-   If the value is left empty, only existing ECS resources in the cluster are used. This is the default setting.
    
-   `eci_only`: Only elastic container instances are used. The ECS resources in the cluster are not used.
    
-   `eci`: Elastic container instances are used when the ECS resources in the cluster are insufficient.
    
    **Important**
    
    `alibabacloud.com/burst-resource: eci` conflicts with `alibabacloud.com/fluid-sidecar-target: eci`. For usage examples of `alibabacloud.com/fluid-sidecar-target`, see [Accelerate data access in serverless cloud computing](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-data-access-in-serverless-cloud-computing/) and related topics.
    

Pod scheduling fails if:

-   The annotation value is not `eci` or `eci_only`.
    
-   The value is `eci_only` but no virtual node exists in the cluster.
    

In Kubernetes v1.22.15 and v1.24.6, the relation between pod scheduling failure and PodStatus message is as follows:

-   The value is not eci or eci\_only: `requesttypemustbeeci,eci_onlyorecs`.
    
-   The value is eci\_only but no virtual node exists: `doesn'tfitecitype:eci_only`.
    

## Example

1.  Create a file named `nginx-deployment.yaml` and copy the following content to the file:
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 4
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          annotations:
            alibabacloud.com/burst-resource: eci # Specify the types of resources that you want to use for elastic scheduling. 
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            resources:
              limits:
                cpu: 2
              requests:
                cpu: 2
    ```
    
2.  Run the following command to create pods that use Elastic Container Instance-based scheduling:
    
    ```
    kubectl apply -f nginx-deployment.yaml
    ```
