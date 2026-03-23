MongoDB Global Active Database (GAD) ensures business continuity and high availability through a cross-region active-active architecture. It delivers geo-disaster recovery and low-latency local access. GAD integrates seamlessly with MongoDB’s high-availability architecture and the Data Transmission Service (DTS) to provide a one-stop solution for data synchronization and disaster recovery.

## Solution architecture

-   Primary instance: Handles core read and write requests. Data is synchronized in real time to the disaster recovery instance.
    
-   Secondary instance (disaster recovery instance): Receives synchronized data from DTS. Supports read-only queries or disaster recovery switchovers.
    
-   DTS synchronization link: Provides low-latency, one-way data synchronization. Bandwidth is automatically adjusted in Serverless mode.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3710052771/CAEQThiBgICWrpn.zxkiIDVmZGUxY2FhYTkwNDRjNzU4NzhlNGI0M2Y4YTZjZjFm5202243_20250520173851.346.svg)

## Scenarios

This solution applies to various MongoDB instances:

-   **Geo-disaster recovery**
    
    Your application has extremely strict availability requirements and a very low Recovery Time Objective (RTO). To avoid region-level failures, your database must support cross-region high availability.
    
-   **Cross-region read-only instances**
    
    Your application requires read access across different geographical regions. This enables low-latency access for nearby users.
    

## Benefits

-   **Secure and reliable**
    
    -   Efficient, stable, and free of compatibility issues.
        
    -   Both MongoDB and DTS are backed by strict Service-Level Agreements (SLAs) to ensure the availability and security of the database and synchronization links.
        
-   **Easy to use**
    
    -   Provides a productized configuration interface. You can quickly build a GAD disaster recovery relationship through the MongoDB console.
        
    -   Offers built-in capabilities such as disaster recovery assessment, one-click switchover, and latency display. These cover the entire disaster recovery lifecycle.
        
-   **Cost-effective**
    
    -   The billing method for the secondary instance can differ from that of the primary instance. Choose a cost-effective MongoDB billing model for the secondary instance based on your needs.
        
    -   DTS provides network support for GAD. The network link uses Serverless technology to automatically adjust bandwidth. You are billed for the link based on actual usage.
        

## Billing description

When you create a Global Active Database instance group or add a secondary instance, no extra fees are charged for using an existing MongoDB instance. You are only charged for the data synchronization link.

**Data synchronization fee = Unit price of a data synchronization link × Number of links × Usage duration.**

The unit price of a one-way synchronization link is: 0.187969924812 USD/hour/link

## Limits

**Restriction type**

**Details**

Instance restrictions

-   MongoDB 4.0 or later. The major versions of the primary and secondary instances must be the same.
    
-   ReplicaSet and sharded cluster architectures are supported. The architectures of the primary and secondary instances must be the same.
    
-   The billing method must be pay-as-you-go or subscription.
    

Region restrictions

Supported regions: China (Qingdao), China (Beijing), China (Shanghai), China (Hangzhou), China (Hohhot), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Ulanqab), China (Heyuan), and China (Chengdu).

## Get started

**Important**

If this is your first time using Global Active Database, authorize DTS to access your cloud resources before you create an instance group. For details, see [Grant DTS access to cloud resources](/help/en/mongodb/user-guide/authorize-dts-to-access-cloud-resources).

### **Create a Global Active Geo-Redundancy Instance Group**

1.  Go to the [Global Active Database](https://mongodb.console.alibabacloud.com/globalDatabase) page. Click **Create Instance Group** or **Create Global Active Instance Group**.
    
2.  On the Create Global Active Database Instance Group page, configure the following parameters:
    
    **Configuration item**
    
    **Description**
    
    **Instance Group Name**
    
    Enter a custom name for the instance group. A name related to the business or purpose makes the instance group easy to find.
    
    Naming conventions: The name must start with a letter or a Chinese character, can contain digits, underscores (\_), or hyphens (-), and must be 2 to 126 characters in length.
    
    **Database Instance Type**
    
    Select MongoDB.
    
    **Instance Group Type**
    
    Select an instance group type. Currently, only **Disaster Recovery** is supported.
    
    This type is suitable for cross-region disaster recovery and disaster recovery drills. One-way data synchronization is used between the primary and secondary instances.
    
    **Instance Type**
    
    Select an instance type. **Replica Set** and **Sharded cluster** are supported.
    
    **Region of Primary Instance**
    
    By default, this is the same as the region selected in the MongoDB console. To select a different region, change the region at the top of the console.
    
    **Primary Instance**
    
    From the drop-down list, select the target MongoDB instance in the primary region.
    
    If no primary instances are available in the current region, click **Create Primary Instance** to go to the instance purchase page and [create a MongoDB instance](https://common-buy-intl.alibabacloud.com/dds/postpay). Then, create the Global Active Database instance group.
    
3.  Click **OK**.
    
    You can view the created instance group on the instance group list page. You can then add a secondary instance.
    

### Add a secondary instance

**Note**

-   In a Global Active Database instance group, the primary and secondary instances must be in different regions. Multiple secondary instances can be in the same region as each other.
    
-   A Global Active Database instance group can contain only one primary instance and up to four secondary instances, supporting up to five regions in total.
    
-   A MongoDB instance can be added to only one Global Active Database instance group, either as a primary or a secondary instance.
    
-   While a secondary instance is part of a Global Active Database instance group, you cannot release the instance (if it is pay-as-you-go) or cancel its subscription. To do so, you must first remove its secondary role and then [release the instance](/help/en/mongodb/user-guide/release-an-instance).
    
-   After adding a secondary instance to a Global Active Database group, do not write data to it. Writing to the secondary instance may cause data inconsistency between primary and secondary instances, affecting business reliability.
    

1.  Go to the [MongoDB Instances](https://mongodb.console.alibabacloud.com/replicate) list. Select a region at the top, and then click the ID of the target instance (the secondary instance).
    
2.  In the upper-right corner of the page, click **Add to Global Active Database Cluster**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p994786.png)
    
3.  In the dialog box that appears, configure the parameters for the target Global Active Database instance group.
    
4.  Click OK. The page redirects to the Global Active Database page. After the secondary instance is added and the synchronization link is created, you can click the target Global Active Database instance group ID to view the secondary instance and the DTS synchronization instance. See [View instance group information](#27d84fee9de9o) for details.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p998689.png)
    

### View instance group information

Go to the [Global Active Database](https://mongodb.console.alibabacloud.com/globalDatabase) page. In the instance group list, click the ID of the instance group that you want to view. On the instance group details page, you can view its basic information, topology, and configuration list.

-   **View basic information of the instance group**
    
    The basic information includes the instance group ID, name, type, database type, creation time, running status, and region.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p998694.png)
    
-   **View the topology of the instance group**
    
    The topology uses interconnected geometric shapes to visually display information about the links between primary and secondary instances, their statuses, and basic instance information.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p998695.png) To view the details of an instance, click its ID to go to the MongoDB console.
    
-   **View the configuration list of the instance group**
    
    The configuration list is divided into the MongoDB instance list and the DTS instance list. The details are as follows:
    
    -   MongoDB instance list
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p998696.png)
        
        -   The MongoDB instance list shows all instances in the group and their running status, region or zone, role, and creation time. Here, you can view and manage each instance in the group. Click an instance ID to view its details.
            
    -   DTS instance list
        
        The DTS instance list shows all DTS synchronization links in the group and their synchronization direction, region, running status, synchronization latency, and creation time. Here, you can view and manage the data synchronization links between instances.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p998697.png)
        
        -   Click Details for a synchronization link to view its detailed information.
            
        -   When you remove a secondary instance from the instance group, the DTS synchronization link attached to it is automatically released. No manual operation is required.
            

### Promote a secondary instance to primary

If all nodes of the primary instance in a Global Active Database instance group become unavailable, promote a secondary instance to become the new primary instance with a single click. The read-only secondary instance becomes a read/write primary instance to quickly restore service access for your application. This feature is suitable for scenarios such as disaster recovery drills and geo-disaster recovery.

**Note**

-   Promoting a secondary instance to primary carries a risk of data loss. Proceed with caution. **This process may cause transient connection breaks. Make sure your application has an automatic reconnection mechanism**.
    
-   The DTS synchronization link is one-way. After a secondary instance is promoted to primary, the original primary instance is removed from the Global Active Database instance group, and the DTS synchronization link is disconnected. Proceed with caution.
    
-   The removed MongoDB instance is not released. The data and the DTS synchronization account within the instance remain unchanged. You can still manage these instances on the [MongoDB Instances](https://mongodb.console.alibabacloud.com/replicate) page.
    
-   After you promote a secondary instance to primary, you can add the removed MongoDB instance back to the Global Active Database instance group as a secondary instance. For instructions, see Add a secondary instance.
    

1.  Go to the [Global Active Database](https://mongodb.console.alibabacloud.com/globalDatabase) page.
    
2.  On the Global Active Database list page, click the ID of the target instance group.
    
3.  In the MongoDB instance list at the bottom of the page, find the secondary instance and click **Switch to Primary Instance** in the Actions column.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3913590671/p994917.png)

4.  Read the impact description and click **OK**.
    

**Note**

After promoting a secondary instance (disaster recovery instance) to primary, evaluate your business needs and determine whether to change the endpoint in your application to the [endpoint of the new primary instance](/help/en/mongodb/user-guide/overview-of-instance-connections/).
