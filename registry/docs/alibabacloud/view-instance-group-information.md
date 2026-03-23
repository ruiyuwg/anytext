After you create a Global Active Database (GAD) instance group, you can view the basic information, topology, and configurations of the instance group on the instance group details page.

## **Prerequisites**

A [GAD instance group is created](/help/en/rds/apsaradb-rds-for-mysql/create-or-delete-an-instance-group).

## Procedure

Go to the [Global Active Instances](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou?spm=a2c4g.11186623.0.0.415d2aa52dtUMc) page and click the ID of the GAD instance group that you want to view. On the instance group details page, you can view the basic information, topology, and configurations of the instance group.

### **View the basic information about a GAD instance group**

In the Basic Information section, you can view the **Instance Group ID**, **Name**, **Type**, **Database Type**, **Created At**, **State**, and **Region** parameters.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5477522571/p842761.png)

### **View the topology of a GAD instance group**

A topology uses interrelated geometric objects to intuitively display the following information in an instance group: data synchronization tasks between the primary and secondary instances, instance statuses, and other information about the instances.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5477522571/p842764.png)

-   To view the details of an instance in the instance group, you can **click the ID of the instance** to go to the ApsaraDB RDS console.
    
-   To view the details of a data synchronization task, you can **click the ID of the data synchronization task** to go to the Data Transmission Service (DTS) console.
    

### **View the configurations of a GAD instance group**

The instance group configurations include the configurations of **ApsaraDB RDS Instances** and **DTS Instances**.

## ApsaraDB RDS instances

The ApsaraDB RDS Instances section displays the following information about all RDS instances in a GAD instance group: **State**, **Region****/Zone**, **Role**, and **Created At**. You can view and manage the instances in the instance group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5477522571/p842770.png)

-   You can click the ID of an instance to view the instance details.
    
-   In the ApsaraDB RDS Instances section, you can click **Add Secondary Instance** in the upper-right corner to [add an RDS instance as a secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role) to an instance group. You can also click **Remove** in the **Actions** column to remove a secondary instance from the instance group.
    

## DTS instances

The DTS Instances section displays the following information about all DTS instances in a GAD instance group: synchronization direction, **Region**, **State**, **Synchronization Latency**, and **Created At**. You can view and manage the DTS data synchronization tasks between the instances in the instance group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5477522571/p842774.png)

-   You can click the **DTS Instance ID** or **Details** to view the details of a DTS data synchronization task.
    
-   When you remove a secondary instance from an instance group, the DTS data synchronization task that is associated with the secondary instance is automatically released. You do not need to perform manual operations.
