If your database runs out of storage space, data writes may fail. This can lead to data loss or even a database crash, which can severely affect your business. PolarDB for MySQL supports automatic storage expansion when usage reaches a specified threshold. This process does not require an instance restart and occurs without service interruptions.

## **Scope**

Automatic storage expansion is available for PolarDB for MySQL clusters that use an enterprise SSD (ESSD) for their **Storage Class**. Supported ESSDs include ESSD PL0, ESSD PL1, ESSD PL2, ESSD PL3, and ESSD AutoPL.

**Note**

For PolarDB for MySQL clusters that use PSL4 or PSL5 for their **Storage Class**, the storage space automatically expands based on actual usage. You do not need to perform any operations.

## **Notes**

**Note**

When automatic storage expansion is enabled, the system automatically performs an elastic upgrade if the storage space is insufficient. During the storage space upgrade, you cannot create accounts or perform other operations.

-   Ensure that your Alibaba Cloud account has no overdue payments and has a sufficient balance to cover the expansion. Otherwise, the expansion fails.
    
-   Automatic expansion is triggered when any of the following storage resources are insufficient: capacity, Inode, or Blktag. The trigger conditions are as follows:
    
    -   The storage space is less than 120 GB and the remaining resource capacity is less than 50%.
        
    -   The storage space is greater than or equal to 120 GB but less than 1 TB, and the remaining resource capacity is less than 30%.
        
    -   The storage space is greater than or equal to 1 TB but less than 10 TB, and the remaining resource capacity is less than 20%.
        
    -   The storage space is greater than 10 TB and the remaining resource capacity is less than 10%.
        
-   Each automatic expansion increases the storage space by 20 GB or 15% of the current storage space, whichever is larger. The maximum size for a single expansion is 100 GB. For example, if the current storage space is 200 GB, it expands by 30 GB. If the current storage space is 100 GB, it expands by 20 GB.
    
-   You can cancel automatic expansion at any time after the instance is created. To do this, turn off the **Auto-expansion Switch** in the **Auto-expansion Configuration** section of the console.
    
-   Automatic storage expansion occurs without service interruptions.
    

## **Prerequisites**

**Note**

-   Before you enable automatic storage expansion, you must obtain the service-linked role for Database Autonomy Service (DAS). For more information, see [DAS service-linked role](/help/en/das/user-guide/aliyunservicerolefordas-role).
    
-   If you already have the service-linked role for DAS, you can proceed to enable automatic storage expansion.
    
-   If you do not have the service-linked role for DAS, you can perform the following steps to obtain it.
    

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/overview) with your Alibaba Cloud account.
    
2.  In the navigation pane on the left, choose **Identity Management** > **Roles**.
    
3.  On the **Roles** page, click **Create Role**.
    
4.  In the **Create Role** panel, set Trusted Entity Type to **Alibaba Cloud Service** and click **Next**.
    

![截图1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6012849271/p706622.png)

5.  Set Role Type to **Service-Linked Role**.
    
6.  Set Alibaba Cloud Service to **Database Autonomy Service**.
    
    After you select the Alibaba Cloud service, you can view the predefined role name, description, and access policy. You can click **View Policy Details** to view the details of the access policy.
    

![截图2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6012849271/p706623.png)

7.  Click **Complete**.
    
8.  Click **Close**.
    

## **Enable automatic storage expansion**

### **Enable auto-expansion when you purchase a cluster**

If you are purchasing a Standard Edition cluster, you can follow these steps to configure auto-expansion on the purchase page.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner of the console, select the region where you want to create the cluster.
    
3.  Click **Create New Cluster**.
    
4.  On the **Basic Configuration** page, complete the basic configuration for the cluster.
    

**Note**

For more information about the basic configuration requirements for the cluster, see [Scope](#9155a4e07aza7).

5.  In the **Storage Space** section, turn on the **Automatic Storage Expansion** switch and set the **Storage Auto-expansion Limit**. The default value is 64000 GB.
    

![64TB.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8982815371/p725969.png)

6.  Click **Next: Buy Now**.
    
7.  Click **Purchase**.
    

### Enable auto-expansion after you purchase a cluster

To enable auto-expansion for an existing Standard Edition cluster, you can follow these steps to configure it in the console.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner of the console, select the region where the cluster is located.
    
3.  Find the target cluster and click the cluster ID.
    
4.  In the **Database Distributed Storage** section, click the **Enable Auto-expansion** button in the upper-right corner.
    

![截图3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6012849271/p706624.png)

5.  In the **Auto-expansion Configuration** window, turn on the **Auto-expansion Switch** and set the **Storage Expansion Limit**. The default value is 64000 GB.
    

![64.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6012849271/p725956.png)

6.  Click **OK**.
    

## Other information

Insufficient storage space is usually caused by temporary files, log files, or data files. For information about solutions, see [FAQ about storage space issues](/help/en/polardb/polardb-for-mysql/user-guide/storage-space-common-problems-and-solutions/).

## **FAQ**

**Why does the storage space not expand by 15% after I enable automatic expansion for ESSD storage?**

The formula for the automatic expansion of an ESSD is as follows: max(min(current storage capacity × 15%, 100 GB), 20 GB). Examples:

-   If the current storage space is 200 GB, it expands by 30 GB each time.
    
-   If the current storage space is 100 GB, it expands by 20 GB each time.
    
-   If the current storage space is 1000 GB, it expands by 100 GB each time.
