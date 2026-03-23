This topic provides answers to some frequently asked questions about virtual nodes.

## **Index**

-   [How do I use virtual nodes to implement high availability for a service deployed across zones?](#c0beff1d8feny)
    
-   [Do virtual nodes support GPU resources?](#111529edb2y4b)
    
-   [How do I prioritize ECS instances over elastic container instances for pod scheduling and prioritize elastic container instances over ECS instances for pod scale-in?](#202dce6bc27rp)
    
-   [What do I do if certificate verification fails when a virtual node pulls images from a self-managed image repository over HTTPS?](#333568ffcabdw)
    
-   [After I create an Elastic Container Instance-based pod by specifying the number of vCPUs and memory size, is the pod billed based on the resource specification or the actual resource usage?](#2560bf2633hti)
    

## **How** do I use virtual nodes to implement high availability for a service deployed across zones?

You can specify the `vSwitchIds` field in the eci-profile to configure the vSwitches used by the virtual nodes (Elastic Container Instance-based pods) on which the service is deployed. For example, if you specify a vSwitch in Zone A and a vSwitch in Zone B, the cluster attempts to create virtual nodes in Zone A and Zone B. To implement high availability of the service, we recommend that you specify multiple vSwitches that belong to different zones. For more information, see [Configure an eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile).

## Do virtual nodes support GPU resources**?**

Yes. You can add annotations to the `metadata` parameter of the pod configurations to specify GPU-accelerated Elastic Compute Service (ECS) instance types. You can also add the `nvidia.com/gpu` field to the `resources` parameter of the pod configurations to specify the number of GPUs allocated to the pod. After you deploy the YAML template of the pod, an Elastic Container Instance-based pod is automatically created based on the specified specification. For more information, see [Create pods by using GPU-accelerated instance types](/help/en/eci/user-guide/create-a-pod-by-specifying-the-gpu-specification).

## **How do I prioritize ECS instances over elastic container instances for pod scheduling and prioritize elastic container instances over ECS instances for pod scale-in?**

You can configure ECS instances and elastic container instances for pod scheduling based on Kubernetes taints, toleration rules, and affinity rules. You can configure only ECS instances or only elastic container instances for pod scheduling. You can also prioritize ECS instances over elastic container instances for pod scheduling. In this case, elastic container instances are used when ECS instances are insufficient. In addition, the system preferentially scales in Elastic Container Instance-based pods. For more information, see [Configure resource allocation based on ECS instances and elastic container instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling).

When you use both ECS instances and elastic container instances for pod scheduling, you can also configure preferred rules based on the billing method. For example, you can schedule pods to instances with different billing methods in the following order of priority: subscription ECS instances, pay-as-you-go ECS instances, and elastic container instances. For more information, see [Configure priority-based resource scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-priority-based-resource-scheduling). In this case, pods are scaled in in the reverse order of priority: Elastic Container Instance-based pods, pay-as-you-go ECS instance-based pods, and subscription ECS instance-based pods.

For more information about different virtual node-based scheduling solutions, see [Introduction and comparison of virtual node-based scheduling solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

## **What do I do if certificate verification fails when a virtual node** pulls images from a self-managed image repository over HTTPS?

By default, an elastic container instance pulls images over HTTPS. If the self-managed image repository uses HTTP, elastic container instances cannot pull images from the repository. To resolve this issue, add annotations to an elastic container instance to enable the instance to use HTTP to interact with the image repository. For more information, see [Pull an image from a self-managed image repository](/help/en/eci/user-guide/use-self-managed-image-repositories-1).

## **After I create an Elastic Container Instance-based pod by specifying the number of vCPUs and memory size, is the pod billed based on the resource specification or the actual resource usage?**

In this mode, you are charged for elastic container instances based on the vCPU and memory specifications that you specify when you create the elastic container instances. If the vCPU and memory specifications that you specify are not supported by Elastic Container Instance, the system automatically adjusts the specifications. Then, the system charges you based on the adjusted specifications.

For more information, see [Billing of elastic container instances](/help/en/eci/product-overview/elastic-container-instances).
