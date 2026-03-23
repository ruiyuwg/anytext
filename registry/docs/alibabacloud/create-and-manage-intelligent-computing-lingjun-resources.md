Create Lingjun resource groups for AI training and inference in DSW, DLC, and EAS.

## Features

Lingjun resources provide RDMA high-speed networking, communication libraries, acceleration software, and GPU virtualization for AI workloads.

PAI offers fully managed Lingjun resources that you purchase and manage in the PAI console. If you own Lingjun hardware, add it as semi-managed resources.

## Limitations

-   Regions
    
    Supported: **China (Ulanqab)**, **Singapore**, **China (Shenzhen)**, **China (Beijing)**, **China (Shanghai)**, and **China (Hangzhou)**.
    
-   Users
    
    Lingjun resources support subscription and pay-as-you-go billing. Available to whitelisted users only. Contact your business manager to request access.
    
-   Task types
    
    Supported: TensorFlow, PyTorch, ElasticBatch, XGBoost, OneFlow, MPIJob, Slurm, and Ray training tasks.
    

## Account and permission requirements

-   Alibaba Cloud Account (Recommended): Perform all operations without granting additional permissions.
    
-   RAM user: An Alibaba Cloud account must [grant permissions to manage resource pools](/help/en/pai/user-guide/configure-custom-ram-authorization-policy#gHC6w) or [grant AliyunPAIFullAccess permission](/help/en/pai/activate-and-grant-permissions-on-required-cloud-services/#1532fe2fe2cv0).
    
    **Important**
    
    AliyunPAIFullAccess grants full control over all PAI resources. Use with caution. Use your Alibaba Cloud account to avoid security risks.
    

## Dependencies

Creating and using Lingjun resources requires other cloud products. Prepare these before starting.

### Virtual Private Cloud (Required)

When allocating Lingjun resources, bind them to a VPC in the same region and configure a vSwitch and Security Group. This ensures network connectivity with other cloud products.

### Internet NAT Gateway and Elastic IP Address (Optional)

To access the public internet (for custom images from public repositories), enable and configure SNAT for an Internet NAT Gateway and bind an EIP.

For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).

### OSS, NAS, or CPFS storage (Optional)

When using Lingjun resources for DLC tasks, provide a dataset from OSS, NAS, or CPFS. Prepare storage resources and create your dataset beforehand. For more information, see [Preparations: Prepare datasets](/help/en/pai/general-process#4b218170f3wr0).

## Procedure

Lingjun resources support subscription (pre-paid) and pay-as-you-go (post-paid) billing. After creating a resource group, purchase Lingjun resources. For billing details, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).

**Note**

Lingjun resources divide underlying computing resources into HZ (High-speed Interconnect Zones). Resources within the same HZ communicate over a high-speed network. Customize high-speed network affinity when purchasing, allocating, and using computing resources.

### Create a resource group

1.  Log on to the PAI console and go to the [AI Computing Resources > Resource Pools](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/group/ECS) page.
    
2.  On the Intelligent Computing Lingjun resources tab, click **Create Resource Group**.
    
3.  In the **Create Resource Group** dialog box, configure parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    Select **Dedicated Resource Group**.
    
    **Resource Group Name**
    
    Enter a name meeting the requirements shown on the interface.
    

### Purchase subscription resources

1.  On the Intelligent Computing Lingjun resources tab, find the resource group and click **Create Order** > **Create Subscription Order** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p990824.png)
    
    Alternatively, click the resource group name. In the upper-right corner, click **Create Order** > **Create Subscription Order**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p993169.png)
    
2.  On the purchase page, the resource group ID and region are automatically selected. Select **Node Specifications**, **Amount**, and **Duration**, then click **Buy Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1141514471/p783819.png)Common purchase errors:
    
    -   **Error: "The order does not contain information for the current resource group"**
        
        -   Cause: Region selected on purchase page does not match your resource group's region. This happens when you switch regions after starting the purchase.
            
        -   Solution: Switch to the region where your resource group was created.
            
    -   **Error: "The specified instance type is out of stock in zone"**
        
        -   Cause: Selected instance type is temporarily unavailable due to lack of inventory in the current region.
            
        -   Solution: Select a different node specification.
            
    -   **Error: "The current kind of instance is temporarily not supported"**
        
        -   Cause: Selected instance type is not offered for sale in the current region. This differs from being temporarily out of stock.
            
        -   Solution: Select a supported node specification for this region.
            
3.  After completing payment, purchased resources appear on the order list page.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p990820.png)The system splits purchases into separate orders for each node. This allows you to manage each node's subscription individually (for renewal or unsubscription).
    

### Purchase pay-as-you-go resources

**Note**

This feature is currently available to whitelist users only. Contact your sales manager to request access.

1.  On the **Intelligent Computing Lingjun resources** tab, find the resource group and click **Create Order** > **Create Pay-As-You-Go Order** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p990825.png)
    
    Alternatively, click the resource group name. In the upper-right corner, click **Create Order** > **Create Pay-As-You-Go Order**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p993174.png)
    
2.  On the **Create Pay-As-You-Go Order** page, **Region**, **Resource Type**, and **Resource Group** are selected by default. Select **Resource Specifications** and set **Quantity**. After configuring, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p997180.png)
    
3.  After purchase completes, filter by billing method to view subscription or pay-as-you-go orders.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3166915571/p990834.png)
    
    **Important**
    
    To avoid charges for unused pay-as-you-go Lingjun resources, go to the **Order Information** page and click **Stop** in the **Actions** column. Stopping a node causes running tasks to fail. Proceed with caution.
    

## What to do next

After creating a resource group and purchasing computing resources:

-   View and manage resource group information and purchased resources on its details page. For more information, see [Manage resources](/help/en/pai/user-guide/untitled-document-1699340310864#fb2791307den7).
    
-   Allocate these resources to training tasks by configuring a Resource Quota. For more information, see [Create a resource quota](/help/en/pai/user-guide/create-resource-quotas).
