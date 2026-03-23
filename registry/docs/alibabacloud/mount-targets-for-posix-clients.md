This topic describes how to manage Portable Operating System Interface (POSIX) client mount targets for Cloud Parallel File Storage (CPFS) file systems. You can add, view, and delete POSIX client mount targets. To manage Network File System (NFS) mount targets, see [Manage export directories](/help/en/cpfs/cpfsonecs/user-guide/manage-export-directories).

## Prerequisites

-   A CPFS file system has been created. For more information, see [Create a file system](/help/en/cpfs/cpfsonecs/user-guide/create-a-cpfs-file-system-1#section-pc6-ojb-jwj).
    
-   Before you add a POSIX client mount target, make sure that your Alibaba Cloud account balance, which includes your cash balance and vouchers, is at least CNY 100.00. This prevents the operation from failing. For more information, see [Available credit](/help/en/user-center/home-page#topic-2059539).
    

## Notes on POSIX mount targets

-   When you add a POSIX mount target, the CPFS file system automatically creates three pay-as-you-go Elastic Compute Service (ECS) instances in your Alibaba Cloud account. These instances are used to manage the CPFS client cluster. The ECS instance type is ecs.g\*.large (g6 or a later generation). Make sure that you can purchase this instance type in the specified zone.
    
    You can call the DescribeAvailableResource operation to query the available resources in the zone. For more information, see [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource#doc-api-Ecs-DescribeAvailableResource).
    
-   CPFS file systems support only mount targets in a virtual private cloud (VPC).
    

## Add a POSIX client mount target

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** **>** **File System List****.**
    
3.  In the top navigation bar, select a region.
    
4.  In the **Mount Target** column of the target file system, click **Add**.
    
5.  In the **Add Mount Target** dialog box, you can configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Mount Target Type**
    
    CPFS file systems only support **VPC** mount targets.
    
    **VPC Network**
    
    The system automatically selects the VPC that you chose when you created the CPFS file system.
    
    **vSwitch**
    
    Select a vSwitch that is created in the VPC.
    
    **Note**
    
    -   The CPFS file system consumes internal IP addresses from the vSwitch. It consumes one IP address for every 1.2 TiB of storage capacity, up to a maximum of 164 IP addresses. Select a vSwitch with many available IP addresses.
        
    -   For optimal performance, create the vSwitch in the same zone as the CPFS file system. Also, make sure the CPFS file system and the ECS instances are in the same zone.
        
    
6.  After completing the configuration, click **OK**.
    
    **Note**
    
    Creating a POSIX mount target takes approximately 15 to 20 minutes. The status of the mount target then changes from **Inactive** to **Active**.
    
    -   After a POSIX client mount target is created, the CPFS file system automatically creates three pay-as-you-go ECS instances in your Alibaba Cloud account to manage the POSIX client cluster. The ECS instance type is typically ecs.g\*.large (g6 or later instance types). You can view these ECS instances in the **Client Management node** list on the file system details page.
        
        The naming convention for a client control plane node ECS instance is: <FSID>-<GENID>-qr-<QRID>. <FSID> is the ID of the CPFS file system. <GENID> is the serial number of the mount target, which increments each time a CPFS mount target is created. <QRID> is the number of the client control plane node. The default numbers for the three nodes are 001, 002, and 003.
        
        **Warning**
        
        While the CPFS file system is running, do not delete, stop, or modify the POSIX client control plane node ECS instances. Also, do not modify or delete the software or configurations on the client control plane nodes. Otherwise, I/O operations on the CPFS file system will be affected.
        
    -   After a POSIX client mount target is created, the CPFS file system automatically creates a security group for the client control plane nodes in your Alibaba Cloud account. For more information, see [View control plane node security groups](/help/en/cpfs/cpfsonecs/user-guide/mount-a-cpfs-file-system-on-ubuntu-or-centos-ecs-instances-by-using-the-cpfs-posix-client#step-4xj-mqm-xnv).
        
        **Warning**
        
        While the CPFS file system is running, do not modify or delete this security group. Otherwise, I/O operations on the CPFS file system will be affected.
        
    

## View a POSIX client mount target

On the **File System List** page, find the target file system and click **Manage** to open the **File System Details** page. Click the **Mount and Use** tab to view information about the POSIX client mount target and client control plane nodes.

## Delete a POSIX client mount target

On the **File System List** page, find the target file system and click **Manage**. On the **File System Details** page, find the target POSIX client mount target and click **Delete** in the **Actions** column.

**Important**

-   If an ECS client has the CPFS file system mounted when you delete the POSIX mount target, the file system is automatically unmounted from the ECS client.
    
-   When you delete a POSIX mount target, the three associated control plane node ECS instances are also automatically deleted. Data on the control plane node ECS instances cannot be recovered. Proceed with caution.
    
-   When you delete a POSIX mount target, the associated control plane node security group is also automatically deleted.
