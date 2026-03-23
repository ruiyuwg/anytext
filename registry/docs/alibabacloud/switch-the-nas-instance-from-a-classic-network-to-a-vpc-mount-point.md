This topic describes how to replace a mount target in the classic network with a mount target in a virtual private cloud (VPC) for a File Storage NAS (NAS) file system.

**Warning**

On and after November 21, 2022, NAS no longer lets you create mount targets in the classic network. Classic network mount targets will be disabled and will no longer be maintained from February 28, 2025. To prevent impacts on your business, we recommend that you replace classic network mount targets with VPC mount targets at your earliest opportunity.

## Prerequisites

Elastic Compute Service (ECS) instances that are deployed in the classic network are migrated to a VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc).

## Replace classic network mount targets with VPC mount targets

**Important**

If your file system has two mount targets and both are classic network mount targets, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl) to increase the number of mount targets.

1.  Add a VPC mount target.
    
    Add a VPC mount target and record the domain name of the mount target. For more information, see [Create a mount target](/help/en/nas/user-guide/manage-mount-targets#section-6xi-a3u-zkq).
    
2.  Unmount the file system that was mounted using the classic network mount target. For more information, see [Unmount a file system in the NAS console](/help/en/nas/user-guide/unmount-a-file-system-from-a-linux-ecs-instance#task-f5r-3kk-2fb).
    
    After the uninstallation is complete, log on to the [NAS console](https://nas.console.alibabacloud.com/). On the details page for the destination file system, click the **Mount Targets** tab. Find the mount target. In the **Actions** column, choose the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4817093571/p991510.png) icon **\>** **Client List** and verify that the **Client List** is empty. The client list displays clients that have used NAS within the past minute. Some clients that are mounted but not in use may not be displayed in this list.
    
3.  Use the VPC mount target created in [Step 1](#690ef8dd07fgn) to remount the file system to the original destination path. For more information, see [Mount NAS file systems on ECS instances](/help/en/nas/user-guide/usage-notes#concept-o3z-wfk-bfb).
    
4.  Disable the original classic network mount target. On the **Mount Targets** tab of the destination file system details page, find the mount target and in the **Actions** column, choose the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4817093571/p991510.png) icon **\>** **Disable**.
    
5.  After you confirm that your services are not affected, delete the original classic network mount target. On the details page of the destination file system, go to the **Mount Targets** tab. Find the original classic network mount target and in the **Actions** column, choose the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4817093571/p991510.png) icon **\>** **Delete**.
    

## Query affected NAS file systems

-   Use the console
    
    1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **File System** > **File System List**.
        
    3.  In the top menu bar, select the resource group and region where the file system is located.
        
    4.  On the **File System List** page, click **Mount** in the **Actions** column for the destination file system. Verify that the network type of the mount target is **Classic Network**.
        
-   Call API operations
    
    Call the [DescribeFileSystems](/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) operation to query the file system information in a specified region without specifying request parameters. If the value of the response parameter **NetworkType** is **classic**, the network type of the mount target is Classic Network.
