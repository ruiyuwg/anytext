Learn how to create a dedicated resource group and purchase general computing resources for AI development. This guide covers prerequisites, account requirements, step-by-step creation process, resource purchasing, and troubleshooting common issues to improve your development and training efficiency.

## Prerequisites

The service-linked role for Deep Learning Containers (DLC) is granted the required permissions. For more information, see [Grant permissions for DLC](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dlc#task314).

## Billing

To use a dedicated resource group, you must purchase computing resources. Dedicated resource groups use the pay-as-you-go billing method that allows you to use resources before you pay for them. For more information about billing, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).

## **Account and permission requirements**

-   Alibaba Cloud account: You can use an Alibaba Cloud account to perform all operations without additional authorization.
    
-   RAM user: Contact your Alibaba Cloud account to grant permissions to manage the resource pool or attach the [AliyunPAIFullAccess](/help/en/pai/appendix-aliyunpaifullaccess) policy to the RAM user. For more information, see the "Permissions to manage the resource pool" section in the [Custom policies for RAM users](/help/en/pai/user-guide/configure-custom-ram-authorization-policy#gHC6w) topic.
    
    **Important**
    
    The AliyunPAIFullAccess policy provides permissions to manage all resources and features of PAI. Exercise caution when you grant these permissions.
    

## **Create a dedicated resource group**

1.  Go to the [Resource Pool](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/group/ECS) page in the Platform for AI (PAI) console.
    
2.  On the **General Computing Resources** tab, click **Create Resource Group**.
    
3.  In the **Create Resource Group** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    Select **Dedicated Resource Group**.
    
    **VPC**
    
    Optional. Select a virtual private cloud (VPC), a vSwitch, and a security group from the drop-down lists. **Best practice:** Choose a VPC in the same region as your intended workload for optimal performance.
    
    **Important**
    
    When you plan your vSwitch CIDR block, avoid the system-reserved CIDR blocks 10.224.0.0/16 and 10.240.0.0/12.
    
    **Security group**
    
    **vSwitch**
    
    **Internet Gateway**
    
    If you want to access the Internet, use one of the following methods. **Choose based on your performance requirements:**
    
    -   **Public Gateway:** The instances use shared public bandwidth when accessing the Internet. The download rate may be slow in high concurrent scenarios.
        
    -   **Private Gateway** (Recommended for production): The instance uses dedicated bandwidth. You can configure the dedicated bandwidth based on your business requirements. If you select Private Gateway, you must configure an Internet NAT gateway for the selected VPC, associate an elastic IP address (EIP) with the Internet NAT gateway, and configure an SNAT entry. For more information, see [Improve Internet access speed using a private gateway](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway).
        
    

## **Purchase general computing resources**

Perform the following steps to purchase general computing resources for a dedicated resource group. For more information about the billing of general computing resources, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).

1.  On the **General Computing Resources** tab, click **Create Order** in the **Actions** column.
    
2.  On the AI Computing Resource Group (International Site) page, configure the following parameters based on your business requirements: **Node Specifications**, **Amount**, and **Duration**. Then, click **Buy Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2927614471/p938875.png)
    
    Possible issues and their solutions:
    
    -   The order does not contain information for the current resource group.
        
        -   Cause: You have switched to another region. Therefore, the resource group ID cannot match.
            
        -   Solution: Switch to the region where the resource group resides.
            
    -   The specified instance type is out of stock in zone.
        
        -   Cause: The selected node specification type is out of stock in the region or zone to which the VPC you select for the resource group belongs.
            
        -   Solution: Select another node specification type, or create a resource group, disable the VPC, and then try again.
            
    -   The current kind of instance is temporarily not supported. Please choose another kind of ecs to purchase.
        
        -   Cause: The selected node specification type is not supported in the region.
            
        -   Solution: Select another node specification type.
            
3.  After you complete the payment, the purchased general computing resources are displayed on the Orders tab of the resource group details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2927614471/p939081.png)
    
    The system automatically splits the orders based on the node instances you purchased. This helps you manage orders based on nodes, including operations such as renewal and unsubscription.
    

## **References**

After you create a resource group and purchase general computing resources, you can perform the following operations:

-   On the resource group details page, view basic information about the resource group and manage the purchased resources. For more information, see the "Manage resources" section in the [Overview](/help/en/pai/user-guide/untitled-document-1699340310864#fb2791307den7) topic.
    
-   Allocate the purchased resources to specific training jobs by configuring resource quotas. For more information, see [General computing resource quotas](/help/en/pai/overview-20).
    
-   If you want to perform online model inference by using subscription resources, see [Use EAS resource groups](/help/en/pai/user-guide/work-with-dedicated-resource-groups) and purchase resources accordingly.
