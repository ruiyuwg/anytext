Cloud Parallel File Storage (CPFS) provides high throughput and high input/output operations per second (IOPS). It is ideal for high-performance computing (HPC) scenarios. A file system can be shared among multiple compute nodes, such as Elastic Compute Service (ECS) instances, containers, and Cloud Desktops, using the POSIX or NFS protocol. This topic describes how to create a CPFS file system.

## Prerequisites

-   CPFS is activated.
    
    If you log on to [the CPFS console](https://nas.console.alibabacloud.com/overview) for the first time, activate the CPFS service as prompted.
    
-   You have created a virtual private cloud (VPC) and a vSwitch in the region where you want to create the CPFS file system. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/getting-started/create-vpc-with-ipv4#section-ufw-rhv-rdb).
    

## **Create a CPFS file system**

> To create a CPFS file system with zone-redundant storage, see [Storage redundancy](/help/en/cpfs/cpfsonecs/user-guide/storage-redundancy). CPFS with zone-redundant storage provides a 99.99% Service-Level Agreement (SLA) and cross-zone disaster recovery. This feature is currently available only to whitelisted users.

1.  Log on to [the CPFS console](https://nas.console.alibabacloud.com/overview).
    
2.  In the **CPFS** section of the **Overview** page, click **Create**.
    
3.  On the **CPFS (Pay-As-You-Go)** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    Region
    
    Select the region where you want to create the file system.
    
    The file system and the ECS instance where it will be mounted must be in the same region. CPFS file systems and ECS instances in different regions cannot communicate with each other.
    
    Zone
    
    Select a zone.
    
    A zone is a physical area within a region that has independent power and network resources. Select the same zone as your ECS instance to reduce cross-zone access latency.
    
    Type
    
    Select **100 MB/s/TiB Baseline** or **200 MB/s/TiB Baseline**.
    
    For the same capacity, the 200 MB/s/TiB baseline type provides higher bandwidth. For more information, see [Specifications](/help/en/cpfs/cpfsonecs/product-overview/product-specifications).
    
    Capacity of CPFS File System
    
    Configure the capacity as needed.
    
    Estimate the maximum usage to prevent a "no space" error if usage exceeds the provisioned capacity.
    
    Resource Group
    
    Optional. A resource group can be selected for management purposes. If no resource group is specified, the file system is assigned to the default one. For more information, see [Best practices for designing resource groups](/help/en/resource-management/resource-group/use-cases/best-practices-for-designing-resource-groups).
    
    > To create a new resource group, click **Create Resource Group**. In the **Create Resource Group** dialog box, set **Resource Group Identifier** and **Resource Group Name**, and then click **OK**.
    
    VPC
    
    Select the same VPC network as the ECS instance.
    
    vSwitch
    
    Select a vSwitch in the VPC.
    
    For a better experience and optimal performance, select the same vSwitch as the ECS instance.
    
    Service-linked Role
    
    To create a CPFS file system, you must associate a service-linked role. This allows the CPFS service to configure the network and connect the CPFS service cluster to the VPC.
    
4.  Click **Buy Now** and complete the purchase as prompted.
    
    After the purchase is successful, go to the **File System > File System List**. View the CPFS instance that is being created. The creation process takes 15 to 20 minutes.
    

## **Next step**

After a file system is created, you must mount it on compute nodes, such as ECS instances, ACK clusters, or Cloud Desktops, to access the file system. Before mounting the file system, review the client descriptions and mounting scenarios in [Overview](/help/en/cpfs/cpfsonecs/user-guide/mounting-overview/) to select a suitable scenario for the intended business application.
