Network File System (NFS) is a distributed file system protocol that allows you to share files and file systems between different servers in a network. NFSv4.x introduces new features and improvements over earlier versions, but has some known issues. This topic describes the issues that may occur when NFS runs on Alibaba Cloud Linux instances and the solutions to the issues.

## A delegation conflict occurs in NFSv4.0

### **Problem description**

A delegation conflict between clients may occur in NFSv4.0. For more information, see [Delegation in NFS Version 4](https://docs.oracle.com/cd/E19253-01/816-4555/rfsrefer-140/index.html).

**Note**

Delegation is an NFSv4.0 feature that allows a server to temporarily delegate the management of a file or directory to a client. This way, the client can perform operations, such as read and write operations, without frequently communicating with the server. The delegation feature helps improve client performance and reduce network loads.

### **Solution**

If you use NFSv4.0 on an Alibaba Cloud Linux instance, we recommend that you do not enable the delegation feature. For information about how to disable the feature on the server side, see [How to Select Different Versions of NFS on a Server](https://docs.oracle.com/cd/E19253-01/816-4555/rfsadmin-965/index.html).

## A defect in NFSv4.1 and NFSv4.2 causes an application to fail to exit

### **Problem description**

In NFSv4.1 and NFSv4.2, if your application issues asynchronous I/O (AIO) requests for a file and closes the file descriptor before all I/O operations have completed, a livelock may be triggered. The livelock can prevent the process from exiting as expected.

### Solution

This issue is fixed in Alibaba Cloud Linux 2 starting with kernel version `4.19.30-10.al7`.

This issue is unlikely to occur. You can perform the following steps to upgrade the kernel version to resolve the issue.

**Important**

-   The kernel upgrade may result in a system boot failure. Proceed with caution when you perform the operation.
    
-   Before you upgrade the kernel, make sure that snapshots or custom images are created to back up data. For more information, see [Create a disk snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb) or [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).
    

1.  Run the `sudo yum update kernel -y` command to upgrade the kernel.
    
2.  After the upgrade is complete, restart the system.
