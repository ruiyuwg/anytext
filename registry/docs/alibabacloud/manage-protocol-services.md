This topic describes how to manage Cloud Parallel File Storage (CPFS) protocol services in the console, including how to create, modify, and delete protocol services.

## Prerequisites

-   A CPFS file system is created. For more information, see [Create a file system](/help/en/cpfs/cpfsonecs/user-guide/create-a-cpfs-file-system-1#section-pc6-ojb-jwj).
    
-   A fileset is created if you want to use a fileset to export the directory. For more information, see the [Create a fileset](/help/en/cpfs/cpfsonecs/user-guide/manage-filesets#section-ik2-hky-ahp) section of the "Manage filesets" topic.
    
-   Up to 32 IP addresses in the specified vSwitch are occupied to create a protocol service. Make sure that the specified vSwitch contains sufficient IP addresses.
    

## Limits

-   Only CPFS V2.3.0 and later support protocol services.
    
-   Only one protocol service can be created in a CPFS file system.
    

## Usage notes

-   Billing
    
    -   General-purpose: You can use a general-purpose protocol service for free.
        
    -   Cache: You are charged for cache protocal services based on the highest internal bandwidth you use per hour. For more information, see [Billable item and billing methods](/help/en/cpfs/cpfsonecs/product-overview/billable-items#concept-fxv-4jd-2hb).
        
-   Specifications
    
    A CPFS file system provides two types of protocol services: general-purpose protocol service and cache protocol service. A cache protocol service can cache hot data. If the cache is hit, the bandwidth of a cache protocol service may exceed the bandwidth of the CPFS file system and reach the maximum bandwidth of the protocol service.
    
    -   A general-purpose protocol service allows you to access a CPFS file system over the NFS protocol and create directory-level mount targets for the CPFS file system. You do not need to create a quorum node cluster. For more information about directory-level mount targets, see [Manage export directories](/help/en/cpfs/cpfsonecs/user-guide/manage-export-directories#task-2207887). You are not charged for using a general-purpose protocol service.
        
    -   In addition to all features of a general-purpose protocol service, a cache protocol service provides the server memory cache feature based on the least recently used (LRU) cache policy. CPFS provides higher internal bandwidth when data is cached in the memory. A cache protocol service is available in two types of specifications: cache type 1 and cache type 2. The two types of cache protocol services provide different internal bandwidth sizes and memory cache sizes.
        
        Cache protocol services are not free of charge and are in invitational preview. For more information about the billing method of cache protocol services, see [Billable item and billing methods](/help/en/cpfs/cpfsonecs/product-overview/billable-items#concept-fxv-4jd-2hb). If you have feedback or questions, contact CPFS technical support in the DingTalk group (ID 31045006299).
        
-   Export directories
    
    -   Before you can access the data of the CPFS file system from an Elastic Compute Service (ECS) instance using a Network File System (NFS) protocol, you must create an export agreement to export a fileset or a directory.
        
    -   You can create export agreements with up to two virtual private clouds (VPCs) using a protocol service. When you create an export agreement with a VPC, a security group whose name is in the format of <cpfs-fsid>-<vpc-id>-nfs-sg is automatically created in the VPC.
        
    -   We recommend that you export filesets. A fileset can provide more features, such as the file quantity management and dataflow. Make sure that a fileset or a directory exists when you create an export agreement.
        
    -   When you export directories, you must specify a VPC and a vSwitch. Only the ECS instances in the VPC can access the CPFS file system using the protocol service. The IP addresses in the specified vSwitch are occupied to export directories. Make sure that the specified vSwitch contains sufficient IP addresses.
        

## Create a protocol service

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** **>** **File System List****.**
    
3.  In the top navigation bar, select a region.
    
4.  On the **File System List** page, click the name of the file system.
    
5.  On the details page of the file system, click **Protocol Service**.
    
6.  On the **Protocol Service** tab, click **Create Protocol Service** and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Protocol Service Configuration**
    
    The type of the protocol service. The default type is general-purpose.
    
    **Note**
    
    The bandwidth of a general-purpose protocol service is the same as that of the CPFS file system. A general-purpose protocol service does not support data caching and you are not charged for any fees.
    
    **Protocol Type**
    
    Only the NFSv3 protocol is supported.
    
    **VPC Network**
    
    The VPC in which the protocol service resides. This parameter is automatically set to the VPC in which the CPFS file system resides and cannot be modified.
    
    **vSwitch**
    
    The vSwitch that is used by the protocol service. This parameter is set to the vSwitch that is used by the CPFS file system. You can select another vSwitch in the VPC.
    
    **Note**
    
    Up to 32 IP addresses in the specified vSwitch are occupied to create a protocol service. Make sure that the specified vSwitch contains sufficient IP addresses.
    
    **Export Agreement**
    
    The fileset or directory that you want to export from the CPFS file system using the protocol service. We recommend that you specify a fileset, which provides features such as dataflow and file quantity management.
    
    **Note**
    
    -   You must specify a fileset or directory that exists in the CPFS file system.
        
    -   An exported folder has the following format:
        
        -   The path must be 1 to 1,024 characters in length.
            
        -   Use UTF-8 encoding.
            
        -   The path must start and end with a forward slash (/). If you want to specify the root directory, enter `/`.
            
    
    **Export VPC**
    
    Select the VPC in which the ECS instance to which you want to mount the protocol service resides. This way, the ECS instance in the VPC can access the CPFS file system using the protocol service.
    
    **Export vSwitch**
    
    Select the vSwitch that is used by the ECS instance to which you want to mount the protocol service. This way, the protocol service can use the vSwitch to export the protocol service to the VPC in which the ECS instance resides.
    
    **Note**
    
    Up to 32 IP addresses in the specified vSwitch are occupied to create a protocol service. Make sure that the specified vSwitch contains sufficient IP addresses.
    
    **Permission Group**
    
    Only the default permission group of the VPC is supported.
    
7.  After the configuration is complete, click **OK**.
    

## Delete a protocol service

**Warning**

After a protocol service is deleted, ECS instances cannot access the CPFS file system using the protocol service. Perform this operation with caution. It takes the system 5 to 10 minutes to delete a protocol service.

1.  On the **Protocol Service** tab, find the protocol service that you want to delete.
    
2.  Click **Delete** in the Actions column.
    
3.  In the message that appears, click **OK**.
    

## Modify a protocol service

You can modify the internal bandwidth and description of a protocol service. The changes take 2 to 5 minutes to take effect.

1.  On the **Protocol Service** tab, find the protocol service that you want to modify.
    
2.  Click **Modify** in the Actions column and modify the configuration.
    
3.  After the modification is complete, click **OK**.
    

## **Change the type of a protocol service**

-   Change the protocol service type from general-purpose to cache
    
    **Important**
    
    -   You cannot directly change a general-purpose protocol service to a cache protocol service. You must delete the general-purpose protocol service and create a cache one. Similarly, if you want to change the protocol service type from cache to general-purpose, you must delete the cache protocol service and create a general-purpose one. During the change, the service is interrupted. Reserve the change window before making the change.
        
    -   You must regenerate the export folder.
        
    
    1.  Delete the general-purpose protocol service
        
        On the **Protocol Service** tab, find the protocol service that you want to delete. Click **Delete** in the **Actions** column, and then click **OK**.
        
    2.  Create a cache protocol service
        
        For more information, see the [Create a protocol service](#section-kxg-12c-uhh) section in this topic.
        
-   Change the protocol service type from one cache type to another
    
    1.  On the **Protocol Service** tab, find the protocol service that you want to modify.
        
    2.  Click **Modify** in the Actions column and select another cache type.
        
    3.  After the modification is complete, click **OK**.
        

## View protocol services

You can view the created protocol services and export directories using the protocol services.

On the **Protocol Service** tab, view the information about the protocol services.
