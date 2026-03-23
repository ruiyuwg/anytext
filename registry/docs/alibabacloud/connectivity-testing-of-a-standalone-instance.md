This topic describes how to test the connectivity of an ApsaraDB for MongoDB standalone instance. An Elastic Compute Service (ECS) instance is used to connect to the standalone instance.

## Prerequisites

1.  An ECS instance and an ApsaraDB for MongoDB standalone instance are created. For more information, see [Create a standalone instance](/help/en/mongodb/create-a-standalone-instance#task-hwt-zlx-p2b) and [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#task-2480939).
    
    The following table describes the settings of the instances.
    
    **Item**
    
    **ECS instance**
    
    **ApsaraDB for MongoDB standalone instance**
    
    **Description**
    
    Region and zone
    
    Hangzhou Zone H
    
    Hangzhou Zone H
    
    The two instances reside within the same region and zone.
    
    Network type
    
    Virtual Private Cloud (VPC)
    
    VPC
    
    The two instances reside within the same VPC.
    
    CPU and memory
    
    16 cores, 128 GB memory
    
    -   Specifications: 8 cores, 32 GB memory
        
    -   Disk space: 200 GB
        
    
    N/A
    
    Instance family
    
    ecs.hfr6
    
    General-purpose
    
    Instance type
    
    ecs.hfr6.4xlarge
    
    dds.sn4.2xlarge.1
    
    Storage type
    
    Enhanced SSD (ESSD)
    
    ESSD
    
    Image or engine version
    
    Alibaba Cloud Linux 3.2104 LTS 64-bit
    
    MongoDB 4.0
    
2.  Add the **public and private IP addresses** of the ECS instance to a whitelist of the ApsaraDB for MongoDB standalone instance. For more information, see [Configure a whitelist for an ApsaraDB for MongoDB instance](/help/en/mongodb/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance#task774).
    
3.  Install the open source YCSB tool on the ECS instance. For more information, visit [YCSB](https://github.com/brianfrankcooper/YCSB/tree/master/mongodb).
    

## Procedure

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/#/server) and connect to the ECS instance. For more information, see [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#task-2480939).
    
2.  Run the following command to load data to the ApsaraDB for MongoDB standalone instance:
    
    ```
    ./bin/ycsb load mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=30000000 -p mongodb.url="mongodb://root:123456Aa@dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717/admin" -threads 8
    ```
    
    Replace the following values with actual values:
    
    -   `123456Aa`: the password of the root account of the ApsaraDB for MongoDB standalone instance
        
    -   `dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717`: the endpoint of the primary node in the ApsaraDB for MongoDB standalone instance
        
        **Note**
        
        You can obtain the endpoint in the **Internal Connections - VPC** section of the **Database Connections** page in the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
        
    
3.  Run the commands described in the following table to start multiple YCSB processes for read and write testing.
    
    **Scenario**
    
    **Test command**
    
    **Description**
    
    8 concurrent operations
    
    ```
    ./bin/ycsb run mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=30000000 -p operationcount=50000000 -p readproportion=0.5 -p updateproportion=0.5 -p requestdistribution=zipfian -p mongodb.url="mongodb://root:123456Aa@dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717/admin" -threads 8
    ```
    
    Replace the following values with actual values:
    
    -   `123456Aa`: the password of the root account of the ApsaraDB for MongoDB standalone instance
        
    -   `dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717`: the endpoint of the primary node in the ApsaraDB for MongoDB standalone instance
        
        **Note**
        
        You can obtain the endpoint in the **Internal Connections - VPC** section of the **Database Connections** page in the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
        
    
    2,000 concurrent operations
    
    ```
    ./bin/ycsb run mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=30000000 -p operationcount=50000000 -p readproportion=0.5 -p updateproportion=0.5 -p requestdistribution=zipfian -p mongodb.url="mongodb://root:123456Aa@dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717/admin" -threads 2000
    ```
    
    10,000 concurrent operations
    
    ```
    ./bin/ycsb run mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=30000000 -p operationcount=50000000 -p readproportion=0.5 -p updateproportion=0.5 -p requestdistribution=zipfian -p mongodb.url="mongodb://root:123456Aa@dds-bp13e84d111a1a****.mongodb.rds.aliyuncs.com:3717/admin" -threads 10000
    ```
    
4.  View the number of connections to the ApsaraDB for MongoDB standalone instance.
    
    1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Replica Set Instances**.
        
    3.  In the upper-left corner of the page, select the resource group and region to which the desired instance belongs.
        
    4.  Click the ID of the instance or click **Manage** in the **Actions** column.
        
    5.  In the left-side navigation pane of the instance details page, click **Monitoring Data**.
        
    6.  On the **Basic Monitoring** tab, select the **latest hour** to view the **CPU Utilization**, **QPS**, and **Connections** charts.
        

## Test results

-   An ApsaraDB for MongoDB standalone instance that has 8 CPU cores and 32 GB of memory can handle 10,000 connections.
    
-   Instance connections consume CPU resources. We recommend that you keep the number of connections within a proper range.
    
-   When the number of concurrent operations reaches the threshold, the increase in the number of concurrent operations no longer contributes to higher CPU utilization and QPS. You must set the number of concurrent operations to a proper value based on your workloads.
