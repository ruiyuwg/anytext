Alibaba Cloud Hologres is deeply integrated with services such as Realtime Compute for Apache Flink, MaxCompute, and DataWorks. It provides an enterprise-grade, all-in-one data warehouse solution for both online and offline data processing. This topic describes how to purchase a Hologres instance.

## Procedure

1.  Go to the [Hologres product page](https://www.alibabacloud.com/zh/product/hologres).
    
2.  Click **Buy Now**.
    
    **Note**
    
    -   If you encounter a RAM permission issue, grant permissions to the current RAM user. For more information, see [Grant permissions to a RAM user](/help/en/hologres/getting-started/grant-permissions-to-a-ram-user).
        
    -   If this is your first time purchasing a Hologres instance, go to the **Service-linked Role** section at the bottom of the purchase page and click **Create Service-linked Role**.
        
    
3.  Select a **Product Type**.
    
    **Product Type**
    
    **Description**
    
    **Exclusive Instance**
    
    Provides dedicated computing resources for millisecond-level responses and a full range of features.
    
    -   **Subscription** : Ideal for long-term use. Offers significant discounts and lower prices.
        
    -   **Pay-As-You-Go** : Ideal for short-term use. Billed by the hour.
        
    
    You can switch between the **Subscription** and **Pay-As-You-Go** billing methods.
    
    **Shared Cluster****(Lakehouse Acceleration Edition)**
    
    Differences from an **Exclusive Instance**:
    
    -   Features: Supports only accelerated queries on data in MaxCompute and OSS. Does not support importing data into Hologres internal tables.
        
    -   Billing is based on the volume of data scanned by each query [billing](/help/en/hologres/user-guide/billing).
        
    
    Scenarios: Use this type when you only need to accelerate queries on data in MaxCompute and OSS, the query frequency is low, and you require sub-second responses.
    
    You cannot convert between dedicated instances and shared clusters. For more information, see [Comparison of dedicated instances and shared clusters](/help/en/hologres/user-guide/shared-cluster-lake-warehouse/).
    
4.  Select a **Region** and **Zone**.
    
    -   Hologres and an Alibaba Cloud service can directly interconnect through the private network only when they are in the same region and the same VPC. If they are in different regions, you must connect through the public network or use [VPC peering](/help/en/vpc/cross-vpc-interconnection-overview/) to achieve private network interconnection.
        
    -   You cannot change the region and zone after the instance is created.
        
    -   The choice of zone does not affect connectivity or performance.
        
5.  Configure the instance specifications based on the product type.
    

## Parameters for exclusive instances

**Parameter Type**

**Description**

**Instance Type**

-   **General-purpose**: Provides a wide range of features. Supports load isolation and horizontal scaling with read-only secondary instances.
    
-   **Virtual Warehouse**: Provides better load isolation, more flexible access control, and easier connection management than the General-purpose type. It also lets you set parameters for each compute group independently. The cost is higher than the General-purpose type due to Gateway fees, but it offers finer granularity for scaling specifications up or down.
    
-   **Serverless**: This type uses the pay-as-you-go billing method. You do not need to purchase compute resources in advance. You are charged for the actual usage of Serverless resources and the actual amount of storage that you use. For more information, see [What is a Hologres Serverless instance](/help/en/hologres/user-guide/what-is-a-hologres-serverless-instance).
    

For more information, see [Compute group instances](/help/en/hologres/user-guide/virtual-warehouses/).

Computing resources

-   If you select **General-purpose**, the following parameters are available:
    
    -   **Computing Resources**: You can select it on demand and scale it up or down later. For information about selecting specifications, see [Instance specifications overview](/help/en/hologres/user-guide/overview-of-instance-specifications).
        
-   If you select **Virtual Warehouse**, the following parameters are available:
    
    -   **Number of Gateway Nodes**: Gateways forward requests. A minimum of two nodes are required to ensure high availability. You can use the default value of 2 and adjust it later.
        
    -   **Reserved Compute Resources**: From 32 CU to 8192 CU in increments of 16 CU. You can scale this value up or down later. For information about how to select an instance type, see [Overview of Instance Types](/help/en/hologres/user-guide/overview-of-instance-specifications) .
        
        **Note**
        
        A single compute group requires at least 32 CUs. Purchase reserved computing resources based on the number of compute groups that you need. For information about compute group instances, see [Compute group instances](/help/en/hologres/user-guide/virtual-warehouses/).
        
    -   **Allocate to Initial Compute Group**: This is a static field. You do not need to configure it.
        

Serverless Computing

After you enable this feature, specific DML statements can use an independent Serverless resource pool. This prevents resource waste and contention.

**Note**

-   This feature is subject to region and zone limitations. For more information, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
    
-   You can also enable or disable this feature after the instance is created.
    

Storage resources

-   For subscription instances, you can purchase storage space (**Standard Storage**
    
-   **Storage Redundancy Type**: **Locally Redundant Storage** supports only single-zone deployment. Because your data is stored in a single zone, this deployment poses a high availability (HA) risk. If you require high cloud service availability, we recommend that you select **Zone-redundant Storage (ZRS)** (3AZ). For more information about different storage redundancy types, see [Multi-zone disaster recovery based on 3AZ](/help/en/hologres/user-guide/disaster-recovery-in-the-same-city-based-on-3az).
    

Network resources

-   **VPC**: Hologres and other Alibaba Cloud services can directly connect to each other over a private network only when they are in the same region and the same VPC. If they are in different regions, you must connect over the internet or use [a VPC peering connection](/help/en/vpc/cross-vpc-interconnection-overview/) to establish a private network connection.
    
-   **vSwitch**: The choice of vSwitch does not affect connectivity or performance.
    

**Note**

VPCs and vSwitches are free of charge.

## Parameters for shared clusters

Network resources:

-   **VPC**: When Hologres and an Alibaba Cloud service are in the same region and the same VPC, they can directly interconnect over the private network. If they are in different VPCs, you must connect over the public network or use [VPC peering](/help/en/vpc/cross-vpc-interconnection-overview/) to interconnect over the private network.
    
-   **vSwitch**: The choice of vSwitch does not affect connectivity or performance.
    

**Note**

VPCs and vSwitches are free of charge.

7.  Set the **Instance Name**, **Resource Group**, and **Duration** (for **Subscription** instances only), and then click **Buy Now**.
    
8.  On the **Confirm Order** page, review the parameter settings, read and select the terms of service, and then click **Activate Now**.
    
9.  On the **Activation Completed** page, confirm that the activation is successful. The Hologres instance will be created in a few minutes. Click **Management Console** .
    
10.  On the **Hologres** **Instances** page, view the instance details. If the **Status** is **Running**, the instance is successfully created.
     

## **What to do next**

[Create a database](/help/en/hologres/getting-started/create-a-database)

## **Related API operations**

[CreateInstance](/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance)

## **Tutorials**

-   [Build a real-time data warehouse based on Flink and Hologres](/help/en/hologres/use-cases/build-real-time-data-warehouse-based-on-flink-hologres#f1b3f9101cwn7)
    
-   [Build a real-time data dashboard based on Hologres and DataV](/help/en/hologres/use-cases/build-a-real-time-data-warehouse-and-display-data-analytics-results)
    
-   [Use Hologres to accelerate MaxCompute data queries](/help/en/hologres/use-cases/analyze-large-amounts-of-maxcompute-data-in-real-time)
