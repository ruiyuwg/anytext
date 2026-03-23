EAS provides three types of resources for model deployment: public resources, EAS resource groups (including dedicated and virtual resource groups), and resource quotas. Each type is designed for different scenarios and has distinct billing models and features.

## **Resource type comparison**

**Resource type**

**Scenarios**

**Billing**

**Feature comparison**

[Public resources](/help/en/pai/user-guide/work-with-the-public-resource-group)

Ideal for testing or supplementing dedicated resource groups to handle traffic spikes.

-   Resources are provisioned on demand and billed after use.
    
-   Pay-as-you-go. For more information, see [Billing of EAS](/help/en/pai/billing-of-eas#concept-1822927).
    

-   Uses shared public compute resources. No separate purchase is required, but stable resource allocation is not guaranteed during peak hours.
    
-   Supports CPUs and GPUs (A10, P4, P100, T4, and V100).
    

[EAS resource groups](/help/en/pai/user-guide/work-with-dedicated-resource-groups)

Dedicated resource group

Ideal for reserving scarce resource types by purchasing them in advance.

-   Requires purchase in advance.
    
-   Supports subscription and pay-as-you-go. For more information, see [Billing of EAS](/help/en/pai/billing-of-eas#concept-1822927).
    

-   Provides exclusive, dedicated compute resources, enhancing security through resource isolation.
    
-   Supports CPUs and GPUs (A10, P4, P100, T4, and V100).
    
-   Supports the [GPU slicing](/help/en/pai/user-guide/advanced-configuration-gpu-sharing) feature.
    

Virtual resource group

Combines multiple resource types, such as public resources, resource quotas, and dedicated EAS resources, into a single logical group.

You are billed for the actual resources scheduled and used.

-   Enables you to deploy a single service across multiple resource types.
    
-   Supports setting scheduling priorities for resources.
    

Resource quota

Currently, only [Lingjun resources](/help/en/pai/user-guide/create-and-manage-intelligent-computing-lingjun-resources) are supported.

-   Resources are purchased before use.
    
-   Subscription. For more information, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).
    

-   [Manages integrated resources for model training and inference](/help/en/pai/user-guide/training-push-integrated-resource-management) to improve resource utilization.
    
-   Supports the [GPU slicing](/help/en/pai/user-guide/advanced-configuration-gpu-sharing) feature.
    

## **FAQ**

For more information, see [EAS FAQ](/help/en/pai/faq-about-eas).

## **References**

-   For information about how EAS supports end-to-end model development and deployment, see [Overview of EAS model services](/help/en/pai/user-guide/overview-2).
    
-   For information about how to configure log collection from a resource group to Simple Log Service (SLS), see [Configure log services for a resource group](/help/en/pai/user-guide/configure-log-collection-for-a-resource-group).
