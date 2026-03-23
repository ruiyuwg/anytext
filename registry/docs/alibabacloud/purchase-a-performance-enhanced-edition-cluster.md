This topic describes how to purchase an ApsaraDB for HBase Performance-enhanced Edition cluster.

## Prerequisites

-   An Alibaba Cloud account is created.
    
-   An Alibaba Cloud virtual private cloud (VPC) is created. If no VPC is available, log on to the [VPC console](https://vpc.console.alibabacloud.com/) to create a VPC. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx). The region and the zone where the VPC is deployed must be the same as the region and the zone of the cluster that you want to purchase. Otherwise, the cluster cannot be accessed over the VPC.
    

## Procedure

1.  Log on to the [ApsaraDB for HBase console](https://hbase.console.alibabacloud.com). On the **Clusters** page, click **Create HBase Cluster**.
    
2.  On the buy page, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    Product Type
    
    Select **HBase Cluster Subscription** or **HBase Cluster PAYG**.
    
    -   HBase Cluster Subscription: You make an upfront payment for the resources when you purchase the cluster. The price is calculated based on your subscription.
        
    -   HBase Cluster PAYG: You are charged based on the actual usage of the purchased service.
        
    
    Service
    
    Select **HBaseUE**.
    
    Deploy Type
    
    Select **Single Zone** or **Multi-Zone**.
    
    Version
    
    Only 2.0 is supported.
    
    Cluster Name
    
    The name of the cluster. You can specify a custom name.
    
    Region
    
    The region where you want to deploy the cluster.
    
    **Important**
    
    -   You cannot change the region after you purchase the cluster. To accelerate access from users to the cluster, we recommend that you select a region that is close to the geographical location of the users.
        
    -   Make sure that the ApsaraDB for HBase cluster is deployed in the same region as the Elastic Compute Service (ECS) instance to which you want the ApsaraDB for HBase cluster to connect. If the ApsaraDB for HBase cluster and the ECS instance are deployed in different regions, they cannot communicate over an internal network. In this case, they must communicate over the Internet, and the ApsaraDB for HBase cluster cannot deliver optimal performance.
        
    
    Zone
    
    Select a zone that resides in the specified region. Zones are isolated physical locations in a region. Each zone has its own independent power supply and network. Zones within the same region are connected over private connections. When a zone fails, the other zones are not affected.
    
    Multi-Zone Combination
    
    The common combination of zones is automatically selected based on the region that you specified.
    
    **Note**
    
    This parameter is displayed only when you set the **Deploy Type** parameter to **Multi-Zone**.
    
    Network Type
    
    You can select only VPC.
    
    VPC
    
    Select a VPC from the drop-down list. For information about how to create a VPC, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx).
    
    Vswitch
    
    Select a vSwitch in the specified VPC. For information about how to create a vSwitch for a VPC, see [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
    **Note**
    
    This parameter is displayed only when you set the **Deploy Type** parameter to **Single Zone**.
    
    -   Primary Zone and Primary VSwitch
        
    -   Standby Zone and Standby VSwitch
        
    -   Arbiter Zone and Arbiter VSwitch
        
    
    The zone and the corresponding vSwitch for each role.
    
    **Note**
    
    These parameters are displayed only when you set the **Deploy Type** parameter to **Multi-Zone**.
    
    Master Node Specification
    
    By default, an ApsaraDB for HBase cluster contains two master nodes to provide high availability. For information about how to select a specification for master nodes, see [Cluster specifications](/help/en/hbase/product-overview/cluster-specifications#concept-2659152).
    
    MasterHA
    
    High Availability is selected by default.
    
    Core Node Disk Type
    
    The following disk types are available:
    
    -   Enhanced SSD (ESSD). This disk type is suitable for latency-sensitive online workloads. In most cases, ESSDs provide a latency as low as about 1 ms to 2 ms.
        
    -   Standard SSD. This disk type is suitable for the following scenarios:
        
        -   Scenarios in which data is frequently accessed or the I/O loads are high
            
        -   NoSQL databases, such as MongoDB, HBase, and Cassandra databases
            
    -   Ultra Disk. This disk type is suitable for the following scenarios:
        
        -   I/O-intensive applications
            
        -   Small and medium-sized relational databases
            
    -   Local HDD. This disk type is suitable for the following scenarios:
        
        -   Development and testing
            
        -   System disks
            
    -   Local SSD. This disk type is suitable for the following scenarios:
        
        -   Scenarios in which data is not frequently accessed or the I/O loads are low
            
        -   Applications that require low costs and support random I/O operations
            
    
    **Note**
    
    The disk types supported by core nodes vary based on regions. Select a disk type based on your business requirements.
    
    Encryption Type
    
    Select **NoEncrypt** or **CloudDisk**.
    
    Core Node Specification
    
    For information about how to select a specification for core nodes, see [Cluster specifications](/help/en/hbase/product-overview/cluster-specifications#concept-2659152).
    
    Core Nodes
    
    By default, an ApsaraDB for HBase cluster contains two core nodes. You can add more core nodes after the cluster is created.
    
    Single Core Node Capacity
    
    The default value and value range of this parameter vary based on disk types of core nodes. Configure this parameter based on your business requirements.
    
    Log Node Disk Type
    
    Select Standard SSD or Ultra Disk.
    
    Log Node Specification
    
    Select a specification for log nodes.
    
    **Note**
    
    This parameter is displayed only when you set the **Deploy Type** parameter to **Multi-Zone**.
    
    Log Nodes
    
    Select the number of log nodes.
    
    **Note**
    
    This parameter is displayed only when you set the **Deploy Type** parameter to **Multi-Zone**.
    
    Single Log Node Capacity
    
    The capacity of a single node. Valid values: 400 GB to 64,000 GB.
    
    **Note**
    
    This parameter is displayed only when you set the **Deploy Type** parameter to **Multi-Zone**.
    
    Whether to Use Cold Storage
    
    ApsaraDB for HBase allows you to store data on separate cold storage media. Cold storage is suitable for various cold data scenarios, such as data archiving and storage of less frequently accessed historical data.
    
    -   Select Yes if you want to enable the cold storage feature.
        
    -   Select No if you do not want to enable the cold storage feature.
        
    
    **Note**
    
    You cannot purchase cold storage if the Deploy Type parameter is set to Multi-Zone.
    
    **Cold Storage Capacity**
    
    The cold storage space of the cluster. Unit: GB.
    
    **Note**
    
    This parameter is displayed only when you set the **Whether to Use Cold Storage** parameter to **Yes**.
    
    Resource Group
    
    Resource groups allow you to group various cloud resources that belong to an Alibaba Cloud account and are deployed in different regions. This way, you can manage your resources in a centralized manner. You can select an existing resource group or create a resource group.
    
    Duration
    
    The subscription period of the cluster. This parameter is displayed only when you specify to create a subscription cluster. Valid monthly subscription periods range from one month to nine months. Valid yearly subscription periods range from one year to three years.
    
    **Note**
    
    If you want to enable auto-renewal for the cluster, select **Auto-renewal** and make sure that you have sufficient balance within your account before the system automatically renews the cluster.
    
3.  Click **Buy Now**.
    
4.  On the **Confirm Order** page, read and agree to the terms of service and click **Pay** to complete the payment.
    

## What to do next

After the cluster is purchased, refresh the page or log on to the console again. You can find the created cluster on the **Clusters** page.
