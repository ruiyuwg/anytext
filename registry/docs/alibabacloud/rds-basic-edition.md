This topic describes RDS Basic Edition for ApsaraDB RDS for MySQL.

RDS Basic Edition is a cost-effective database solution that features decoupled compute and storage resources. RDS instances that run RDS Basic Edition are deployed in a standalone architecture.

**Important**

RDS Basic Edition does not provide a secondary RDS instance that serves as a hot standby. In RDS Basic Edition, if your RDS instance unexpectedly fails or you change the specifications or upgrade the database engine of the instance, your database service may become unavailable for an extended period of time. If you require high availability for your databases, we recommend that you select other RDS editions (such as RDS High-availability Edition) instead of RDS Basic Edition. Alternatively, you can upgrade your RDS instance from RDS Basic Edition to RDS High-availability Edition for instances of specific database engines. For more information, see [Upgrade the RDS edition from RDS Basic Edition to RDS High-availability Edition](#section-5sr-8hd-e8j).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2806408961/p725896.png)

The following figure shows a comparison between RDS Basic Edition and RDS High-availability Edition.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0091127471/CAEQMhiBgIDslujyoBkiIDgyMWM3NmYxZmE2ODRmNzg4NzRmNDE1ZjQ2ZmJjMWYx4030942_20231010134311.456.svg)

## Benefits

-   Performance
    
    The primary RDS instance does not need to replicate data to a secondary RDS instance. Therefore, no extra performance overheads are caused. If the instance configuration remains unchanged, RDS Basic Edition provides higher performance than RDS High-availability Edition.
    
-   Reliability
    
    -   Compute resources are decoupled from storage resources. This can prevent data loss when compute nodes fail.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0091127471/CAEQLBiBgMCo.I3YiRkiIDhlZTg3ZDRkMWQxMTQ3YmI5NjQyYjVmMWY4ZmYwODZj4030942_20231010135109.780.svg)
    -   The reliability of your database service is ensured by the ultra-large Apsara distributed operating system of Alibaba Cloud that keeps multiple copies of your data.
        
-   Costs
    
    RDS Basic Edition costs 50% less than RDS High-availability Edition.
    

## Features

RDS Basic Edition provides basic features, like IP address whitelist, monitoring and alerting, and backup and restoration. RDS Basic Edition does not provide the following features:

-   [Primary/secondary switchover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances)
    
-   [Read-only RDS instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb)
    

For more information about supported features, see [Features](/help/en/rds/apsaradb-rds-for-mysql/features).

## Scenarios

-   Small-sized websites and applications
    
    You can offload routine O&M tasks to Alibaba Cloud and focus on developing your applications.
    
-   Individual use
    
    If you are new to ApsaraDB RDS, you can use RDS Basic Edition for testing and learning.
    
-   Research and development (R&D) and testing
    
    RDS Basic Edition features lightning-fast provision, allowing you to flexibly scale your database with your business requirements. This significantly improves R&D and testing efficiency.
    

## Create an RDS instance on RDS Basic Edition

For more information about how to create an RDS instance that runs RDS Basic Edition, see [Step 1: Create an ApsaraDB RDS for MySQL instance and configure databases](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases).

## Get started with RDS Basic Edition

You can create and connect to RDS instances that run RDS Basic Edition in a quick manner. For more information, see [Quick start of ApsaraDB RDS for MySQL](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).

## Upgrade the RDS edition of an RDS instance from RDS Basic Edition to RDS High-availability Edition

You can upgrade the RDS edition of a regular or serverless RDS instance that runs RDS Basic Edition to RDS High-availability Edition. For more information, see [Upgrade the RDS edition from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701) and [Upgrade the RDS edition of a serverless instance from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless#868bd83b947ra).

**Note**

Downgrade from RDS High-availability Edition to RDS Basic Edition is not supported.

## FAQ

-   Why do database engine upgrades or specification changes on RDS instances on RDS Basic Edition take a long time to complete?
    
    RDS instances that run RDS Basic Edition are deployed in a standalone architecture. When you upgrade the database engine or change the specifications of your RDS instance, the system checks whether the physical server on which the primary RDS instance resides can provide sufficient resources. If the physical server cannot provide sufficient resources, the system migrates the data of your database system to another physical server and switches your database service over to the new physical server. During the switch, you will lose connectivity to your RDS instance. In extreme circumstances, the interruption can last more than 30 minutes. We recommend that you select RDS Enterprise Edition or RDS Cluster Edition. These editions are based on the high-availability architecture. This architecture allows you to replicate data from the secondary RDS instance without impacts on your workloads. This minimizes the downtime of your database system. For more information, see [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745) or [RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb).
    
-   Why does RDS Basic Edition provide a fewer features than other RDS editions? Which features are provided in RDS Basic Edition?
    
    RDS Basic Edition provides only one primary RDS instance. Therefore, some features that are supported by RDS High-availability Edition and RDS Cluster Edition may be unavailable in RDS Basic Edition. RDS Basic Edition is suitable in a small number of business scenarios. For more information, see [Features](/help/en/rds/apsaradb-rds-for-mysql/features#concept-2350230).
