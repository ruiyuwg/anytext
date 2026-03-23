This topic describes how to create, modify, and delete an export directory in the Cloud Parallel File Storage (CPFS) console.

## Prerequisites

-   A CPFS file system is created. For more information, see [Create a CPFS file system](/help/en/cpfs/cpfsonecs/user-guide/create-a-cpfs-file-system-1#section-pc6-ojb-jwj).
    
-   A protocol service is created. For more information, see the [Create a protocol service](/help/en/cpfs/manage-protocol-services#section-kxg-12c-uhh) section of the "Manage protocol services" topic.
    
-   A fileset is created if you want to create an export directory for the fileset. For more information, see the [Create a fileset](/help/en/cpfs/cpfsonecs/user-guide/manage-filesets#section-ik2-hky-ahp) section of the "Manage filesets" topic.
    
-   The vSwitch that you want to use to create an export directory has sufficient IP addresses. When you create an export directory, up to 32 IP addresses in the specified vSwitch are occupied.
    

## Limits

-   You can use a protocol service to create an export directory for up to 10 filesets or directories.
    
-   You can use a protocol service to publish export directories to up to two virtual private clouds (VPCs).
    

## Usage notes

-   To allow an Elastic Compute Service (ECS) instance to access the data of a fileset or directory in a CPFS file system over the Network File System (NFS) protocol, you must create an export directory for the fileset or directory and mount the fileset or directory to the ECS instance.
    
-   We recommend that you create a fileset-based export directory. Compared with a directory, a fileset provides more features such as dataflow and file quantity management.
    
-   When you create an export directory in a CPFS file system, you must specify a VPC and a vSwitch. Only ECS instances that reside in the specified VPC can access the CPFS file system by using a protocol service.
    
-   A protocol service generates a security group named in the <cpfs-fsid>-<vpc-id>-nfs-sg format in each specified VPC.
    

## Create an export directory

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** **>** **File System List****.**
    
3.  In the top navigation bar, select a region.
    
4.  On the **File System List** page, click the name of the file system.
    
5.  Find the protocol service that you want to export, click **Export Directory** in the **Actions** column. The **Export Directory** panel appears.
    
6.  Find the protocol service that you want to manage and click **Export Directory** in the **Actions** column. The **Export Directory** panel appears.
    
7.  Click **Add Export Directory**. In the Add Export Directory dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Export Agreement**
    
    Specify a fileset or directory for which you want to create an export directory in the CPFS file system by using the protocol service. We recommend that you specify a fileset. Compared with a directory, a fileset provides more features such as dataflow and file quantity management.
    
    **Note**
    
    -   You must specify a fileset or directory that exists in the CPFS file system.
        
    -   An exported folder has the following format:
        
        -   The path must be 1 to 1,024 characters in length.
            
        -   Use UTF-8 encoding.
            
        -   The path must start and end with a forward slash (/). If you want to specify the root directory, enter `/`.
            
    
    **Permission Group**
    
    Only **Default VPC permission group (all allowed)** is supported.
    
    **VPC Network**
    
    Select a VPC to allow the ECS instances in the VPC to access the CPFS file system by using the protocol service.
    
    **vSwitch**
    
    Select the vSwitch that is used by the ECS instances in the specified VPC. The vSwitch is used to publish the export directory to the specified VPC.
    
    **Note**
    
    Up to 32 IP addresses in the specified vSwitch are occupied to create a protocol service. Make sure that the specified vSwitch contains sufficient IP addresses.
    
8.  After the configuration is complete, click **OK**.
    

## View an export directory

After an export directory is created, you can view the information about the export directory.

1.  On the **Protocol Service** page, find the protocol service that you want to manage.
    
2.  Click **Export Directory** in the Actions column. In the Export Directory panel, view the export directory information.
    

## Modify an export directory

You can modify only the description of an export directory.

1.  In the **Export Directory** panel, find the export directory that you want to modify.
    
2.  Click **Modify** in the Actions column. In the Modify dialog box, modify the description of the export directory.
    
3.  Click **OK**.
    

## Delete an export directory

**Important**

-   If you delete an export directory, the data in the corresponding fileset or directory is not deleted, but all I/O operations that are performed on the fileset or directory are immediately interrupted. Proceed with caution.
    
-   It takes 2 to 5 minutes to delete an export directory.
    

1.  In the **Export Directory** panel, find the export directory that you want to delete.
    
2.  Click **Delete** in the Actions column.
    
3.  In the message that appears, click **OK**.
