This topic describes how to use Task Center for an ApsaraDB RDS instance.

## **Feature description**

To facilitate task management and improve O&M efficiency, you can view the progress of the current task and the details of historical tasks of your RDS instance on the Task Center page of the ApsaraDB RDS console. You can also specify the switching time for tasks and change the switching time for specific tasks on the Task Center page.

**Important**

-   Task Center is supported for RDS instances that run MySQL, PostgreSQL, and SQL Server.
    
-   You can view only the tasks within the last 30 days before the current time.
    

The following tables describe the tasks that you can manage and operations that are supported on the Task Center page.

## ApsaraDB RDS for MySQL

### **Tasks that you can manage in Task Center**

**Task**

**Local disk**

**Cloud disk**

Create an instance

Supported

Supported

Modify the parameters of an instance

Supported

Supported

Change the configuration of an instance

Supported

Supported

Restart an instance

Supported

Supported

Clone an instance

Supported

Supported

Update the minor engine version of an instance

Supported

Supported

Change an account

Supported

Supported

Change the specifications of an instance

Supported

Supported

Create a read-only instance

Supported

Supported

Start an instance

N/A

Supported

Suspend an instance

N/A

Supported

Change the network type of an instance

Supported

Supported

Manually back up an instance

Supported

Supported

Add a cluster node

Supported

Supported

Delete a cluster node

Supported

Supported

Upgrade the major engine version of an instance

Supported

N/A

Migrate an instance

Supported

Supported

Enable SSL encryption

Supported

Supported

Enable Transparent Data Encryption (TDE)

Supported

N/A

Create a privileged account and a standard account

Supported

Supported

Change the data replication mode

Supported

Supported

Change the category and performance level (PL) of a cloud disk

N/A

Supported

Change the endpoint of an instance

Supported

Supported

Upload snapshot backups to OSS

N/A

Supported

Restore individual databases and tables

Not supported

Supported

### **Operations that are supported by Task Center**

**Operation**

**Local disk**

**Cloud disk**

View the progress of the current task and details of historical tasks

Supported

Supported

Change the switching time for a task from the preset point in time to **Execute now**

Supported

Supported

Specify the switching time for a task

Supported

Supported

**Note**

Task Center allows you to change the switching time for the following tasks to **Execute now** or **Execute at specified time**:

-   Change the specifications of an instance
    
-   Change the type of a cloud disk
    
-   Update the minor engine version of an instance
    
-   Upgrade the major engine version of an instance
    
-   Migrate an instance
    
-   Enable SSL encryption
    
-   Enable TDE
    

## ApsaraDB RDS for PostgreSQL

### **Tasks that you can manage in Task Center**

**Task**

**Cloud disk**

Create an instance

Supported

Create a read-only instance

Supported

Clone an instance

Supported

Perform cloud migration with a few clicks

Supported

Upgrade the major engine version of an instance

Supported

Update the minor engine version of an instance

Supported

Restart an instance

Supported

Modify the parameters of an instance

Supported

Start an instance

Supported

Suspend an instance

Supported

Manually back up an instance

Supported

Migrate an instance

Supported

Change the specifications of an instance

Supported

Enable SSL encryption

Supported

Enable TDE

Supported

Create an account

Supported

Apply for a public endpoint for an instance

Supported

Delete the public endpoint of an instance

Supported

Change the endpoint of an instance

Supported

Perform a primary/secondary switchover

Supported

Change a vSwitch

Supported

Upload snapshot backups to OSS

Supported

Restore individual databases and tables

Supported

### **Operations that are supported by Task Center**

**Operation**

**Cloud disk**

View the progress of the current task and details of historical tasks

Supported

Change the switching time for a task from the preset point in time to **Execute now**

Supported

Specify the switching time for a task

Supported

**Note**

Task Center allows you to change the switching time for the following tasks to **Execute now** or **Execute at specified time**:

-   Update the minor engine version of an instance
    
-   Migrate an instance
    
-   Change the specifications of an instance
    
-   Perform a primary/secondary switchover
    

## ApsaraDB RDS for SQL Server

### **Tasks that you can manage in Task Center**

**Task**

**Cloud disk**

**Local disk**

Create an instance

Supported

Not supported

Create a read-only instance

Supported

Not supported

Clone an instance

Not supported

Not supported

Perform cloud migration with a few clicks

Not supported

Not supported

Upgrade the major engine version of an instance

Not supported

Not supported

Update the minor engine version of an instance

Not supported

Not supported

Restart an instance

Supported

Not supported

Modify the parameters of an instance

Not supported

Not supported

Start an instance

Not supported

Not supported

Manually back up an instance

Supported

Supported

Suspend an instance

Not supported

Not supported

Migrate an instance

Not supported

Not supported

Change the specifications of an instance

Supported

Not supported

Enable SSL encryption

Not supported

Not supported

Enable TDE

Not supported

Not supported

Create an account

Not supported

Not supported

Apply for a public endpoint for an instance

Not supported

Not supported

Delete the public endpoint of an instance

Not supported

Not supported

Change the endpoint of an instance

Not supported

Not supported

Perform a primary/secondary switchover

Supported

Not supported

Change a vSwitch

Not supported

Not supported

### **Operations that are supported by Task Center**

**Operation**

**Cloud disk**

**Local disk**

View the progress of the current task and details of historical tasks

Supported

Not supported

Change the switching time for a task from the preset point in time to **Execute now**

Not supported

Not supported

Specify the switching time for a task

Not supported

Not supported

## **Procedure**

1.  Use one of the following methods to go to the Task Center page:
    
    -   Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/dashboard/cn-hangzhou). In the left-side navigation pane, click **Tasks**.
        
    -   Go to the Task Center page from the instance details page:
        
        1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region where the RDS instance resides. Then, find the RDS instance and click the instance ID.
            
        2.  In the upper-right corner of the page that appears, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3026204761/p536206.png) icon.
            
2.  Query a task by using filter conditions such as the start time and end time of the task, keyword, and task status. The keyword can be a task ID or resource ID. Find the task that you want to manage and click **Details** in the **Actions** column to view the task details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2518347371/p827343.png)
    
3.  If the status of the task that triggers a switchover is **Pending Schedule**, click **Modify switching time** in the **Actions** column of the task to change the switching time of the task.
    
    -   In the dialog box that appears, select **Execute now**. The switchover is performed immediately.
        
    -   In the dialog box that appears, select **Execute at specified time**, specify a point in time, and then click **OK**. The switchover is performed at the specified point in time.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2026204761/p536212.png)
        

## **FAQ**

-   **Why is the progress of my task suspended?**
    
    The progress of your task is displayed in percentage and is not linearly changed. The progress varies based on different factors, such as the task type, data volumes, workloads, and resources of the host on which your RDS instance resides. In most cases, if the progress remains unchanged for a long period of time, time-consuming operations are being performed at the backend. These operations include migration, backups, downloads, and upgrades of major engine versions.
    
-   **Why is my task not displayed on the Task Center page after I perform an operation on my RDS instance in the ApsaraDB RDS console?**
    
    You can check whether the operation that you performed on your RDS instance is supported by Task Center. If the operation is not supported, the task for the operation is not displayed on the Task Center page. Tasks that are generated before Task Center is released are not displayed on the Task Center page.
    
-   **Can I cancel an ongoing task on the Task Center page?**
    
    No, you cannot cancel an ongoing task on the Task Center page because ongoing tasks may be related to operations, such as refund, data migration at the backend, and switchover.
