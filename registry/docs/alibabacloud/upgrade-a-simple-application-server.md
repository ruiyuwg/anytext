As your business grows, the compute resources (vCPUs and memory), storage resources (system disk capacity), and network resources (data transfer quota and public bandwidth) of your server may no longer meet your business requirements. You can upgrade the configuration of your Simple Application Server by selecting a suitable plan.

## **Limits**

-   You can only upgrade plans. You cannot downgrade plans.
    
-   You can only upgrade the entire plan. You cannot upgrade individual resources, such as the system disk, memory, or bandwidth, separately.
    
-   You cannot upgrade across instance families or disk types.
    
    -   You cannot upgrade a server from one instance family to another. The instance families are: General-purpose, CPU-optimized, Multiple public IPs, International, Storage-optimized, and Previous generation.
        
    -   You cannot change the disk type when you upgrade a previous generation plan. For example, you cannot upgrade from a standard SSD to an enterprise SSD (ESSD).
        
-   If the current plan for the instance family is already the highest configuration, you cannot upgrade it.
    
    If you use a previous generation plan and the current plan for the disk type is already the highest configuration, you cannot upgrade it.
    
    The following alternative methods are available for an upgrade:
    
    -   Standard SSD: Create a custom image, use the custom image to create a new Simple Application Server, and select a plan with an ESSD at performance level (PL) 0. For more information, see [Create a custom image](/help/en/simple-application-server/user-guide/create-a-custom-image) and [Use a custom image to create a server](/help/en/simple-application-server/user-guide/use-a-custom-image-to-create-simple-application-servers).
        
    -   ESSD plan: Share the image to Elastic Compute Service (ECS) and then use the shared image to create an ECS instance that meets your business requirements. For more information, see [Share an image to ECS](/help/en/simple-application-server/user-guide/share-a-custom-image) and [Create an instance using a custom image or shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
        
    

## Impacts of an upgrade

**Affected Items**

**Description**

System disk

If the upgrade involves resizing the system disk, you must resize the partition and file system after the plan upgrade for the new disk capacity to take effect.

Bandwidth and traffic

-   If you used data transfer before the upgrade, the used amount is carried over and deducted from the new plan's monthly data transfer plan.
    
    **Example**
    
    Before an upgrade, your server has a data transfer quota of 400 GB and you have used 100 GB this month. After you upgrade to a plan with a 600 GB data transfer quota, the used data transfer for the month is still 100 GB, and the remaining quota is 500 GB.
    
-   Some plans do not include a fixed monthly data transfer plan. For these plans, data transfer fees are not calculated. However, if you upgrade from such a plan to one that includes a fixed monthly data transfer plan, monitor your usage. If you exceed the monthly quota, you must pay extra fees based on your actual usage. For more information, see [Billable items](/help/en/simple-application-server/product-overview/billable-items).
    

Business

The server restarts during the upgrade. Perform the upgrade during off-peak hours.

Other

The server's public and private IP addresses, operating system, firewall, snapshots, custom images, and expiration time remain unchanged.

## **Billing**

When you upgrade a plan, the system calculates the price difference between the old and new plans. You must pay this difference. The actual price difference is displayed on the upgrade page.

**Billing example:**

For example, you purchase Plan A for one year at $3.5/month with an 85% discount. After six months, you need to upgrade to Plan B at $4.5/month. A six-month subscription for Plan B has an 88% discount. The price difference is calculated as follows: (Price of Plan B - Price of Plan A) × Discount × Number of months, which is (4.5 - 3.5) × 0.88 × 6 = $5.28.

## Preparations

Before you upgrade, create a snapshot of the system disk for your Simple Application Server to back up your data. For more information, see [Create a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b).

**Warning**

An upgrade failure may cause data loss. Before you upgrade, create a snapshot to back up your data. Creating a snapshot takes some time. Wait for the snapshot creation process to complete.

## Procedure

### **Step 1: Upgrade the plan**

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  On the server card, choose **More** > **Upgrade**.
    
    **Note**
    
    If the Upgrade button is grayed out, the current plan is already the highest configuration and cannot be upgraded. For more information, see [Q2: Why is the Upgrade button grayed out?](#21fcb893478qc).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9963957271/p840944.png)
    
3.  In the **Precautions for Server Configuration Upgrade** dialog box, read the notes and click **Go to Upgrade Page**.
    
4.  In the **Plan Configuration** section, select the plan to which you want to upgrade.
    
    You can view the configuration fee in the lower-right corner of the page.
    
5.  In the **Terms of Service** section, read the agreements and confirm that you agree to them.
    
6.  Click **Buy Now**. On the **Payment** page, confirm the order information and complete the payment as prompted.
    
    Return to the Simple Application Server console. The server automatically restarts after the upgrade. The upgrade is successful when the server status changes to **Running**.
    

### **Step 2: (Conditionally required) Resize the partition and file system**

If the plan upgrade includes an increase in system disk capacity, you must resize the partition and file system for the new capacity to take effect. Otherwise, you can skip this step.

### **Resize the partition and file system (Linux)**

In this example, the system disk capacity is 40 GB before the upgrade and 50 GB after the upgrade.

**Note**

The default device name of the system disk in a Simple Application Server is `/dev/vda`.

1.  Remotely connect to the upgraded Linux server.
    
    For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#section-x54-mw9-9hc).
    
2.  View the information about the disk and partition on the server.
    
    1.  Run the following command to view the disk information of the server.
        
        ```
        sudo fdisk -lu
        ```
        
        Because the data disk on the server is not involved in the configuration upgrade, this example focuses on the system disk (`/dev/vda`).![adad566](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2483889761/p574970.png)The following describes the information in the figure:
        
        -   Area ① in the figure: The capacity of the system disk (`/dev/vda`) after the upgrade.
            
        -   Area ② in the figure: The `Device` column shows the partition name of the system disk. The `System` column shows the partition type. `Linux` indicates that the partition type is Master Boot Record (MBR). The default partition name of the system disk of a Simple Application Server is `/dev/vda1`, and the default partition type is MBR.
            
        
    2.  Run the following command to view the partition information.
        
        ```
        df -Th
        ```
        
        The default file system type of the system disk partition (`/dev/vda1`) in a Simple Application Server is `ext4`. The result in the following figure shows that the file system size is still 40 GB, which is the size before the upgrade. This means you need to resize the partition and the file system.![adad56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3483889761/p574982.png)
        
3.  Resize the partition.
    
    1.  Run the following command to install the growpart tool.
        
        The command that you need to run varies based on the operating system. The following commands are used as examples:
        
        ### Alibaba Cloud Linux 2/3, **CentOS 7 and later**
        
        ```
        sudo yum install -y cloud-utils-growpart
        ```
        
        ### **Debian 9 and later, Ubuntu 14 and later**
        
        1.  Update the software source.
            
            ```
            sudo apt-get update
            ```
            
        2.  Install cloud-guest-utils.
            
            ```
            sudo apt-get install -y cloud-guest-utils
            ```
            
        
    2.  Run the following command to resize the partition.
        
        **Note**
        
        In the command parameters, a space is required between `/dev/vda` and `1`. `1` is the partition number.
        
        ```
        sudo growpart /dev/vda 1
        ```
        
        The following figure shows the result.![adad6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7598699761/p574980.png)If an error occurs when you run the command in this step, you can manually troubleshoot the issue. For more information, see [FAQ](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance#section-kbf-7pc-g9o).
        
4.  Resize the file system.
    
    Because the default file system type of the system disk partition (`/dev/vda1`) in a Simple Application Server is ext4, this step describes how to resize an ext4 file system.
    
    1.  Run a command to resize the file system based on its type.
        
        -   ext4 file system
            
            ```
            sudo resize2fs /dev/vda1
            ```
            
        -   xfs file system
            
            ```
            sudo xfs_growfs /dev/vda1
            ```
            
    2.  Run the following command to check the result.
        
        ```
        df -Th
        ```
        
        The result in the following figure shows that the file system size is 50 GB, which indicates that the resize is successful.![adad566](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2483889761/p574985.png)After the resize is complete, verify that your data is intact.
        
        -   If the resize is successful and the applications on the server run as expected, the operation is complete.
            
        -   If the resize fails, roll back the disk using the snapshot backup. For more information, see [Roll back a disk using a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b).
            
        

### **Resize the file system (Windows)**

In this example, the server runs the 64-bit Windows Server 2012 R2 operating system. The system disk (C drive) capacity is 40 GB before the upgrade and 60 GB after the upgrade.

1.  Remotely connect to the upgraded Windows server.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#task310).
    
2.  In the lower-left corner of the Windows desktop, right-click the Start![开始](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5104954261/p278519.png) icon and click **Disk Management**.
    
    ![磁盘管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5104954261/p278522.png)
    
    As shown in the following figure, the **Disk Management** window displays the unallocated capacity of the system disk after the upgrade.![未分配](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5104954261/p278523.png)
    
3.  Right-click the primary partition of **Disk 0** and select **Extend Volume**.
    
    ![扩展卷](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6104954261/p278524.png)
    
4.  In the **Extend Volume Wizard**, follow the wizard and use the default settings to extend the volume.
    
    After the extend volume operation is complete, the new space is automatically added to the original volume, as shown in the following figure.![扩容完成](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6104954261/p278526.png)
    
    After the resize is complete, verify that your data is intact.
    
    -   If the resize is successful and the applications on the server run as expected, the operation is complete.
        
    -   If the resize fails, roll back the disk using the snapshot backup. For more information, see [Roll back a disk using a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b).
        
    

## **FAQ**

### **Q1: Can I upgrade resources in a plan, such as the system disk or bandwidth, separately?**

A1: No, you cannot. Simple Application Server is sold in plans. You can upgrade to a more suitable plan, but you cannot separately upgrade individual resources such as compute resources (vCPUs and memory), storage resources (system disk capacity), or network resources (data transfer quota and public bandwidth). However, you can resize a data disk separately. For more information, see [Resize a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk).

### **Q2: Why is the Upgrade button grayed out?**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4021521571/p842459.png)

A2: The Upgrade button is grayed out if the plan for a standard SSD or ESSD is already the highest available configuration and cannot be upgraded.

The following alternative methods are available for an upgrade:

-   Standard SSD: Create a custom image, use the custom image to create a new Simple Application Server, and select a plan with an ESSD at performance level (PL) 0. For more information, see [Create a custom image](/help/en/simple-application-server/user-guide/create-a-custom-image) and [Use a custom image to create a server](/help/en/simple-application-server/user-guide/use-a-custom-image-to-create-simple-application-servers).
    
-   ESSD plan: Share the image to Elastic Compute Service (ECS) and then use the shared image to create an ECS instance that meets your business requirements. For more information, see [Share an image to ECS](/help/en/simple-application-server/user-guide/share-a-custom-image) and [Create an instance using a custom image or shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    

## **References**

-   If your system disk has insufficient storage space, you can attach a data disk to increase the storage capacity. This is an alternative to upgrading the plan. For more information, see [Attach a data disk](/help/en/simple-application-server/user-guide/attach-a-data-disk).
    
-   If the used space on a data disk becomes insufficient due to business growth, you can resize the data disk to increase its storage capacity. For more information, see [Resize a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk).
