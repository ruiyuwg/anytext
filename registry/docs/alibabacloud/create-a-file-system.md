Create a CPFS for Lingjun file system to provide ultra-high-performance parallel storage with end-to-end RDMA networking for AI workloads such as AIGC and autonomous driving.

## Prerequisites

Before you begin, ensure that you have:

-   Activated CPFS service.
    
    On first login to the [File Storage NAS (NAS) console](https://nas.console.alibabacloud.com/), activate CPFS as prompted.
    
-   A whitelisted account for CPFS for Lingjun.
    
    CPFS for Lingjun is in invitational preview. To use CPFS for Lingjun, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1) to add your account to the whitelist.
    
-   An available Lingjun cluster. Note the cluster ID for file system configuration.
    

## Supported compute resources

CPFS for Lingjun supports only the following compute resources:

-   Platform for AI (PAI), including Lingjun resources, general computing resources of PAI, and single-tenant Lingjun resources
    
-   GPU-accelerated workloads deployed in high-performance networks in Container Compute Service (ACS)
    

**Important**

CPFS for Lingjun does not support Elastic Compute Service (ECS) instances. Verify that your compute environment uses PAI or ACS before creating a file system.

## **Procedure**

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  On the **Overview** tab of the Overview page, click **Create** below CPFS for Lingjun in the File System Selection Guide section.
    
3.  On the CPFS for Lingjun (pay-as-you-go) page, configure the following parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    Zone
    
    Yes
    
    Select the zone where your Lingjun cluster resides.
    
    Cluster ID
    
    Yes
    
    Select the Lingjun cluster for the file system.
    
    Capacity
    
    Yes
    
    Specify the maximum storage capacity. Estimate your data volume and allocate sufficient capacity. If usage exceeds the configured capacity, the file system returns a `no space` error.
    
    Resource Group
    
    No
    
    The resource group for the file system. Resource groups organize CPFS for Lingjun resources by category. Manage permissions, deploy resources, and monitor resources at the group level. For more information, see [Best practices for designing resource groups](/help/en/resource-management/resource-group/use-cases/best-practices-for-designing-resource-groups). If no resource group is selected, the file system defaults to the default resource group. To create a resource group, click **Create Resource Group**, specify the **Resource Group Identifier** and **Resource Group Name**, and then click **OK**.
    
4.  Click **Buy Now** and complete the payment as prompted.
    

## Verify the result

After payment, return to the NAS console and choose **File System > File System List**. The new file system appears with a creating status.

## **Next steps**

After creation, mount the file system to your compute resources. The mounting method varies by resource type:

-   [Mount a CPFS for Lingjun file system in PAI](/help/en/cpfs/bmcpfs/user-guide/mount-cpfs-for-lingjun-on-pai)
    
-   [Mount a CPFS for Lingjun file system in ACS](/help/en/cpfs/bmcpfs/user-guide/acs-mount-cpfs-smart-computing-version-file-system)
