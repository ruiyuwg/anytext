## **Overview**

Global Active Database (GAD) integrates disaster recovery (DR) and active geo-redundancy capabilities to provide an end-to-end and cost-effective solution. GAD is developed on top of ApsaraDB RDS and Data Transmission Service (DTS). A GAD instance group uses a star architecture that consists of one primary instance and multiple secondary instances. In a GAD instance group, data is synchronized between the ApsaraDB RDS instances added to the GAD instance group across regions or zones in real time using DTS. This lets you access the nearest instance in a GAD group.

## **Benefits**

-   #### **Cost-effectiveness**
    
    GAD is provided as a product and lets you use cost-effective RDS instances, such as YiTian RDS instances, RDS clusters, and serverless RDS instances. Compared with instance groups directly created using ApsaraDB RDS and DTS, GAD instance groups use the serverless data synchronization tasks to reduce the data transmission cost by 60%. At the same time, you can use GAD instance groups together with database proxies that are provided free of charge to further reduce the overall deployment cost. In a GAD instance group, the DTS data synchronization tasks use the cost-effective serverless technology. If you also use relevant resource plans or a bottom line discount, the cost of data transmission across regions using GAD is significantly lower than the cost of data transmission across regions using network services such as Cloud Enterprise Network (CEN).
    
-   #### **Ease of use**
    
    GAD provides an end-to-end and stable geo-disaster recovery and active geo-redundancy solution. The solution provides you with fully managed RDS instances and DTS instances to flexibly create instance groups, enables automatic connections to the data synchronization links, supports quick primary/secondary switchovers on a GAD group, and implements DR drills with a few clicks. The solution lets you build a geo-disaster recovery architecture in three data centers across two regions within 5 minutes.
    
-   #### **Security and reliability**
    
    GAD provides secure and compliant links to facilitate the cross-border data transfer and going-global business of enterprises. GAD instance groups provide data consistency verification and correction to avoid dirty writes. ApsaraDB RDS and DTS ensure database availability and security in compliance with a strict service level agreement (SLA). GAD instance groups also provide active geo-redundancy and DR capabilities to meet the requirements for multi-region deployment and DR. In GAD instance groups, nearest data access can be implemented to reduce latency.
    

## **DR and active geo-redundancy**

GAD instance groups are classified into DR instance groups and active geo-redundancy instance groups. Each instance group consists of a primary instance and up to four secondary instances. Each instance in a GAD instance group is an independent RDS instance that runs RDS High-availability Edition or RDS Cluster Edition. You can configure one-way or two-way data synchronization between the primary and secondary instances in a GAD instance group.

## DR instance group

**Introduction:** A DR instance group consists of one primary instance that processes read and write requests and multiple secondary instances that process only read requests. You can configure **one-way or two-way data synchronization** between the primary and secondary instances. A DR instance group supports DR switchovers and DR drills and lets you efficiently build an architecture in three data centers across two regions for DR. You can use a DR instance group together with cost-effective RDS instances, such as YiTian RDS instances, RDS clusters, and RDS instances with the database proxy feature enabled. A DR instance group supports one primary instance and up to four secondary instances. If all nodes of the primary instance in a DR instance group become unavailable, you can use the primary/secondary switchover feature to promote a secondary instance in the DR instance group to the primary instance to quickly restore the workloads of your application.

**Scenarios: You want to achieve DR across regions or zones, perform DR drills, or meet the requirements for DR in other scenarios.**

**Important**

The RDS disaster recovery instance feature has been upgraded to Global Active Database. You can create a GAD instance group by adding a disaster recovery instance on the **Basic Information** page of a regular RDS instance ([click to view usage method](#gad usage method)). GAD integrates the one-click purchase and configuration experience of RDS and DTS, provides disaster recovery switchover capabilities, and meets both regulatory compliance and high data availability requirements.

![9371f30ab38a33337f885c21736d690b](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9887522571/p850332.png)

## Active geo-redundancy instance group

**Introduction:** An active geo-redundancy instance group consists of one primary instance and multiple secondary instances that can process read and write requests. You can configure **two-way data synchronization** between the primary and secondary instances. The architecture of active geo-redundancy that consists of one primary instance and multiple secondary instances can meet the requirements for multi-region deployment and DR. In an active geo-redundancy instance group, nearest data access can be implemented to reduce latency. Strict data verification and correction in an instance group can effectively overcome industry challenges such as double-write conflicts and replication loops and meet requirements such as processing high-concurrency read and write requests and ensuring data consistency.

**Scenarios: You want the read and write requests to be processed by multiple instances across regions and want to access business data at a low latency.**

![全球多活数据库集群](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9887522571/p844277.png)

## **Billing rules**

The fees for a GAD instance group include the **fee for the new RDS instance** and the **fee for data synchronization links of DTS**. If you use an existing RDS instance to create a GAD instance group or add an existing RDS instance as a secondary instance to an instance group, no fees are generated for the existing RDS instance. However, the fee for data synchronization links is generated.

-   #### **Fee for new RDS instances**
    
    When you use a new RDS instance to create an instance group or add the new RDS instance as a secondary instance to the instance group, you are charged for the [instance type and the storage capacity](/help/en/rds/apsaradb-rds-for-mysql/billable-items-billing-methods-and-pricing) of the RDS instance. The billing methods currently support subscription, pay-as-you-go, and serverless (**only secondary instances support serverless**).
    
-   #### **Fee for data synchronization links**
    
    When you add an RDS instance as a secondary instance to an instance group, the system automatically creates data synchronization links between the primary and secondary instances (active geo-redundancy instance groups use two-way synchronization by default, DR instance groups can use either one-way or two-way synchronization). You are charged for the data synchronization links based on the region, the link type, the number of links, and the usage duration. For more information, see the following table.
    
    The fee for data synchronization is calculated using the following formula: **Fee for data synchronization = Unit price of a one-way or two-way data synchronization task × Number of data synchronization tasks × Usage duration**
    
    **Synchronization link**
    
    **Unit price of one-way synchronization link (USD/hour/link)**
    
    **Unit price of two-way synchronization link (USD/hour/link)**
    
    Synchronization within mainland China
    
    0.187969924812
    
    0.375939849624
    
    Synchronization outside mainland China
    
    (China (Hong Kong) and regions outside China)
    
    0.375939849624
    
    0.751879699248
    
    Synchronization between mainland China and regions outside mainland China
    
    Not supported
    
    Not supported
    

## **Supported database versions and regions**

### **Supported database versions**

Currently, only MySQL 5.7 and 8.0 are supported.

### **Supported regions**

**Note**

Currently, **only synchronization within mainland China and outside mainland China (China (Hong Kong) and regions outside China) is supported**. Synchronization between mainland China and regions outside mainland China is not supported.

The primary and secondary instances must be deployed in different regions. Currently, the active geo-redundancy and DR features support the same regions, as listed below:

-   **Mainland China:** China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Hohhot), China (Ulanqab), China (Heyuan), China (Chengdu)
    
-   **China (Hong Kong)**
    
-   **Regions outside China:** Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)
    

## **How to use**

-   Method 1: Purchase a new RDS MySQL instance and add it as a GAD secondary instance
    
    1.  First, [create a GAD instance group](/help/en/rds/apsaradb-rds-for-mysql/create-or-delete-an-instance-group).
        
    2.  Then, create a new RDS MySQL instance and add it as a secondary instance to the GAD instance group. For more information, see [Method 1: Create a new instance and add it as a secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role#ca739a048a1ej).
        
-   Method 2: Add an existing RDS MySQL instance as a GAD secondary instance
    
    1.  First, [create a GAD instance group](/help/en/rds/apsaradb-rds-for-mysql/create-or-delete-an-instance-group).
        
    2.  Then, add an existing RDS MySQL instance as a secondary instance to the GAD instance group. For more information, see [Method 2: Add an existing instance as a secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role#1c832d90fdz8j).
