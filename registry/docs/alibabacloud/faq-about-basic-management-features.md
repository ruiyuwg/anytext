This page answers common questions about managing File Storage NAS file systems, mount targets, permissions, and data retention.

## File system limits and creation

### What are the limits of NAS file systems?

Each Alibaba Cloud account can create up to 20 General-purpose NAS file systems and 200 Extreme NAS file systems per region.

Maximum capacity per file system type:

**File system type**

**Maximum capacity**

Capacity NAS

10 PiB

Performance NAS

1 PiB

Premium NAS

1 PiB

Extreme NAS

256 TiB

A General-purpose NAS file system supports up to **1 billion** files. An Extreme NAS file system supports up to **0.5 billion** files.

For the full list, see [Limits](/help/en/nas/product-overview/limits).

### Why is the "insufficient inventory" error returned when I create a file system?

No storage resources are available in the selected zone. Create the file system in a different zone.

### Why is the ENIRamRole.NotAuth error returned when I create a file system?

The **Default Service Authorization For Extreme NAS And CPFS** (AliyunNASManageENIRole) has not been granted. Extreme NAS file systems require this role to access resources in other cloud services such as VPC and Elastic Compute Service (ECS). By default, NAS assumes the AliyunNASManageENIRole role to access your resources in other cloud services.

To grant the authorization:

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  On the **Overview** page, in the **References** section on the right, click **Authorization Management**.
    
3.  On the **Authorize Extreme NAS and CPFS** card, click **Authorize Now**.
    
4.  On the **RAM Quick Authorization** page, confirm the role information and click **Authorize**.
    

### Why am I unable to create a NAS file system using the CSI plug-in and "The specified AZone inventory is insufficient" is returned?

When you create a NAS file system through the CSI (Container Storage Interface) plug-in, you may see this error:

```
ErrorCode: InvalidAZone.NotFound
Recommend:
RequestId: xxxxx
Message: The specified AZone inventory is insufficient.
```

The specified zone is invalid. Use the [DescribeZones](/help/en/nas/api-describezones) API operation (available on [OpenAPI](https://next.api.alibabacloud.com/api/NAS/2017-06-26/DescribeZones)) to retrieve all zones in your region and the NAS file system types supported in each zone.

Alternatively, create the file system through the [NAS console](https://nas.console.alibabacloud.com/). For more information, see [Create a file system](/help/en/nas/user-guide/create-a-file-system).

## Mount targets

### What is a mount target? What are the features of a mount target?

A **mount target** is an endpoint that compute nodes use to access a NAS file system. Compute nodes include ECS instances, Elastic High Performance Computing (E-HPC) clusters, and container service clusters. When you create a mount target, you select a network and a permission group. A compute node must reside in the selected network and satisfy the rules in the permission group to access the file system. Multiple compute nodes can use the same mount target to access a NAS file system at the same time.

### Can I change the network type of a mount target?

No. The network type of a mount target is fixed at creation. To switch network types, create a new mount target with the desired type and remount the file system.

-   If your NAS instance has two classic network mount targets, delete one before creating a VPC mount target. Perform this operation during off-peak hours.
    
-   Before replacing a classic network mount target with a VPC mount target, make sure the ECS instance has been migrated from the classic network to a VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc).
    

For example, to replace a classic network mount target with a VPC mount target on a Capacity NAS file system:

1.  Create a mount target in a VPC. For more information, see [Create a mount target](/help/en/nas/user-guide/manage-mount-targets).
    
2.  Unmount the file system from the classic network mount target. For more information, see [Unmount file systems](/help/en/nas/user-guide/unmount-a-file-system-from-a-linux-ecs-instance#task-f5r-3kk-2fb). Then, on the **Mount Targets** tab of the file system's details page in the [NAS console](https://nas.console.alibabacloud.com/), choose the actions icon > **Client List** in the **Actions** column for the mount target. Confirm that the **Client List** is empty.
    
3.  Mount the file system on the same destination path using the VPC mount target. For more information, see [Mount a file system](/help/en/nas/user-guide/usage-notes#concept-o3z-wfk-bfb).
    
4.  In the **Actions** column for the classic network mount target, choose the actions icon > **Disable**. Confirm the operation.
    
5.  After confirming that your business is not affected, choose the actions icon > **Delete**, and confirm the operation.
    

### Can I switch VPCs for a NAS file system?

Only General-purpose NAS file systems support VPC switching. Extreme NAS file systems do not because they allow only one mount target, and it must be VPC type.

> A General-purpose NAS file system supports a maximum of two mount targets. An Extreme NAS file system supports only one mount target, and the network type must be VPC.

To switch VPCs for a General-purpose NAS file system, use one of these approaches:

-   **Add a second mount target** (if only one mount target exists): [Add a mount target](/help/en/nas/user-guide/manage-mount-targets#section-6xi-a3u-zkq) in the new VPC, then mount the file system using the new mount target.
    
-   **Replace an existing mount target** (if two mount targets already exist):
    
    1.  Unmount the file system from the existing VPC. For more information, see [Unmount a file system in the NAS console](/help/en/nas/user-guide/unmount-a-file-system-from-a-linux-ecs-instance) or [Unmount a file system by running a command](/help/en/nas/user-guide/unmount-a-file-system-from-a-windows-ecs-instance).
        
    2.  Delete the existing mount target. For more information, see [Delete a mount target](/help/en/nas/user-guide/manage-mount-targets).
        
    3.  Create a mount target in the new VPC. For more information, see [Create a mount target](/help/en/nas/user-guide/manage-mount-targets).
        
    4.  Mount the file system using the new mount target. For more information, see [Scenarios](/help/en/nas/user-guide/usage-notes).
        

### How do I delete a mount target created by Cloud Shell, Cloud Backup, or PAI (Platform for AI)?

Several Alibaba Cloud services automatically create mount targets when they access NAS file systems. You can delete these mount targets through the NAS console or through the service that created them.

#### Cloud Shell mount targets

Cloud Shell automatically creates a mount target when you use it to manage a NAS resource.

**Delete from the NAS console:**

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select the resource group and region where your file system resides.
    
4.  On the **File System List** page, select **Delete** in the **Actions** column for the target file system.
    
5.  In the **Delete File System** dialog box, find the mount target created by Cloud Shell and click **Delete** in the Actions column. Hover over the information icon to verify this is the correct mount target.
    
6.  In the **Delete Mount Target** dialog box, confirm the information and click **OK**.
    
7.  Click **Cancel** to close the Delete File System dialog box.
    

**Delete from Cloud Shell:**

1.  Log on to [Cloud Shell](https://shell.aliyun.com).
    
2.  In the top menu bar, choose **Unmount File Storage**.
    
3.  In the **Unmount Storage Space** dialog box, confirm the file system ID to unmount.
    
    -   If the current RAM user created the mount target, select **Current User** and click **Unmount**.
        
    -   If another RAM user created the mount target, log on with your Alibaba Cloud account, select **RAM User**, and click **Unmount**.
        

#### Cloud Backup mount targets

Cloud Backup automatically creates a mount target when backing up a General-purpose NAS file system.

> After you delete a NAS backup mount target, backup jobs fail. Before deleting, make sure all backup plans are deleted and no backup or restore jobs are running.

**Delete from the NAS console:** Follow the same console procedure described above for Cloud Shell mount targets. In step 5, find the mount target created by Cloud Backup instead.

**Delete from the file backup entry:**

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Data Service** > **File Backup (Cloud Backup Service)**.
    
3.  In the top navigation bar, select the resource group and region where your file system resides.
    
4.  On the **File Backup** page, click **Manage Mounts**.
    
5.  In the **Manage Mounts** panel, locate the destination file system and click **Remove Mount Target**.
    
6.  In the confirmation dialog box, click **OK**.
    

#### PAI mount targets

PAI automatically creates a mount target when it uses a NAS file system as a dataset for data processing and modeling.

**Delete from the NAS console:** Follow the same console procedure described above for Cloud Shell mount targets. In step 5, find the mount target created by PAI instead. Hover over the information icon to verify this is the correct mount target.

### Why am I unable to create classic network mount targets?

Since November 21, 2022, classic network mount targets can no longer be created for General-purpose NAS file systems. Existing classic network mount targets created before this date continue to work.

## File and data management

### How do I calculate the number of mounted compute nodes?

Each ECS instance counts as one compute node. Each container also counts as one compute node.

### How can I view a list of clients on which a file system is mounted?

> Only General-purpose NAS file systems support viewing the mounted client list.

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select the resource group and region where your file system resides.
    
4.  On the **File System List** page, click the destination file system ID. Then click the **Mount Targets** tab.
    
5.  In the mount target list, click **Client List** in the **Actions** column for the desired mount target.
    

The **Client List** dialog box shows the IP addresses of clients with the file system mounted.

> The list includes only clients that accessed the NAS file system within the last minute. Mounted but idle clients may not appear.

### Why am I unable to delete files in a file system after the file system is mounted?

The IP address is likely denied access to the file system, or the account lacks the required permissions. Make sure the permission group grants read and write permissions, and that you are using the administrator account on Windows or the root user account on Linux.

### How do I quickly delete excessively large files stored in a file system?

Run parallel `rm -rf` commands on multiple, non-nested subdirectories. For example, open several terminals, navigate to the NAS mount point (such as `/mnt`), and simultaneously delete directories like `/mnt/dir1`, `/mnt/dir2`, and `/mnt/dir3`.

Do not simultaneously delete a parent directory and one of its subdirectories (such as `/mnt/dir1` and `/mnt/dir1/subdir`).

### What do I do if command execution is stuck in the mount directory of a deleted file system?

Comment out the NAS configuration from the `/etc/fstab` file and restart the server.

> Restart the server during a permitted maintenance window.

To prevent this issue, always unmount the file system from the operating system before deleting it. If automatic mounting is enabled, also delete or modify the automatic mounting configuration so the file system is no longer mounted at startup. For more information, see [Unmount a file system in the NAS console](/help/en/nas/user-guide/unmount-a-file-system-from-a-linux-ecs-instance), [Unmount a file system by running a command](/help/en/nas/user-guide/unmount-a-file-system-from-a-windows-ecs-instance), and [Delete a file system](/help/en/nas/user-guide/delete-a-file-system).

## Deletion and data retention

### Is the permission group associated with a file system deleted when I delete the file system?

No. The permission group and its rules are preserved when you delete a file system. However, the mount target is deleted. To delete a permission group, see [Manage permission groups](/help/en/nas/user-guide/manage-a-permission-group).

**Warning**

After a file system is deleted, the data on the file system cannot be restored. Proceed with caution.

### Can NAS files be restored after they are deleted by mistake?

No. Deleted NAS files cannot be restored.

To protect against accidental deletion, enable the snapshot, recycle bin, or file backup feature before you need them. For more information, see [Snapshots](/help/en/nas/user-guide/manage-snapshots#task-2071424), [Back up a General-purpose NAS file system](/help/en/nas/user-guide/back-up-files-from-a-general-purpose-nas-file-system), and [Recycle bin](/help/en/nas/user-guide/recycle-bin).

### Does a NAS file system still exist after the associated ECS instance is released?

Yes. Releasing an ECS instance does not affect the mounted NAS file system. The file system and its data are preserved.

### Does Alibaba Cloud still store my data after my NAS file system is released?

No. Data is immediately deleted when you release a NAS resource. Alibaba Cloud does not retain deleted data. For more information, see the [File Storage NAS Service Level Agreement](https://www.alibabacloud.com/help/en/legal/latest/network-attached-storage-service-level-agreement#topic-1863727).

If a General-purpose or Extreme NAS file system is suspended due to an overdue payment, it is retained for **15 days**. If you do not settle the payment within that period, Alibaba Cloud terminates the NAS service terms and deletes all data in the file system. The data cannot be restored. For more information, see [Overdue payments](/help/en/nas/product-overview/overdue-payments).

## Permissions and access control

### Why am I unable to delete a file system?

A RAM user must have full control over the file system to delete it. You cannot grant a RAM user view permissions for only a specific NAS file system. Instead, first grant the RAM user permissions to view all NAS file systems, then grant delete and modify permissions for the specific file system.

For more information, see [Procedure for granting permissions to a RAM user](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#section-iys-enj-m3k) and [Example 1: Grant a RAM user permissions on a file system](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#section-gq2-wj6-mgk).

## Monitoring and performance

### How do I view the throughput of an Extreme NAS file system?

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **File System List** page, click the ID of the file system to query.
    
5.  On the **Basic Information** tab, view the throughput based on the **Maximum Capacity** and **Bandwidth** parameters.
    

For more information about the bandwidth of Extreme NAS file systems, see [Performance metrics](/help/en/nas/product-overview/extreme-nas-file-systems).
