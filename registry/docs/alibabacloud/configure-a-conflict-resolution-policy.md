This topic describes how to configure a conflict resolution policy for two-way synchronization instances to maximize the stability of two-way synchronization instances through conflict detection and resolution.

## Background information

### **Supported DTS instances**

**Conflict resolution policy type**

**DTS instance**

Global conflict resolution policy

All two-way synchronization instances except for Tair (Enterprise Edition) instances. For DTS-supported two-way synchronization instances, see [Two-way synchronization](/help/en/dts/user-guide/synchronization-topologies#section-56c-5cy-dvl).

Independent conflict resolution policy

-   Two-way synchronization instances between **MySQL** databases.
    
-   Two-way synchronization instances between **PolarDB for MySQL** databases.
    

### **Supported conflict detection types**

## Two-way synchronization between ApsaraDB for MongoDB instances

-   Uniqueness Conflict Caused by INSERT
    
    When the record to be inserted by INSERT conflicts with an existing record in the destination instance, DTS automatically ignores the INSERT operation.
    
-   The Record to be Updated by UPDATE Does Not Fully Match
    
    When the record to be updated by UPDATE does not exist or conflicts with an existing record in the destination instance, DTS automatically ignores the UPDATE operation.
    
-   The Record to be Deleted by DELETE Does Not Exist
    
    When the record to be deleted by DELETE does not exist in the destination instance, DTS automatically ignores the DELETE operation.
    

## Two-way synchronization between other databases

-   Uniqueness conflicts caused by INSERT operations
    
    INSERT operations that do not comply with the uniqueness constraint cannot be synchronized. For example, if a record with the same primary key value is inserted into the two synchronization nodes at almost the same time, one of the inserted records fails to be synchronized. The synchronization fails because a record with the same primary key value already exists on the other node.
    
-   Inconsistent records caused by UPDATE operations
    
    -   If the records to be updated do not exist in the destination instance, DTS converts the UPDATE operation into an INSERT operation. However, uniqueness conflicts may occur.
        
    -   The primary keys or unique keys of the records to insert may conflict with those of existing records in the destination instance.
        
-   Non-existent records to be deleted
    
    The records to be deleted do not exist in the destination instance. In this case, DTS ignores the DELETE operation regardless of the conflict resolution policy that you specify.
    

### **Supported conflict resolution policies**

## Global conflict resolution policy

-   **Overwrite**
    
    If a conflict occurs during a data synchronization task, the conflicting records in the destination database are overwritten.
    
-   **TaskFailed**
    
    If a conflict occurs during a data synchronization task, the synchronization task reports an error and exits (enters the failed state), requiring you to intervene and fix the task.
    
-   **Ignore**
    
    If a conflict occurs during a data synchronization task, the synchronization task ignores the current statement and the task continues. The conflicting records in the destination database are used.
    

## Independent conflict resolution policy

-   **TaskFailed**
    
    If a conflict occurs during a data synchronization task, the synchronization task reports an error and exits (enters the failed state), requiring you to intervene and fix the task.
    
-   **Ignore**
    
    If a conflict occurs during a data synchronization task, the synchronization task ignores the current statement and the task continues. The conflicting records in the destination database are used.
    
-   **Overwrite**
    
    If a conflict occurs during a data synchronization task, the conflicting records in the destination database are overwritten.
    
-   **UseMax**
    
    During a data synchronization task, if a conflict arises, the system compares the conflicting records in the relevant column and writes the record with the higher value to the destination database. Should the target record be absent or the field type not meet the necessary criteria, the system resolves the conflict in the same manner as **Overwrite**.
    
-   **Use Min**
    
    During a data synchronization task, if a conflict arises, the system compares the two conflicting records in the relevant column and writes the record with the lesser value to the destination database. Should the target record be nonexistent or the field type fail to meet the requirements, the system resolves the conflict in the same manner as **Ignore**.
    

## **Prerequisites**

You can access the **Configure Objects** phase for either the forward or reverse task in a two-way synchronization instance.

**Note**

The **Synchronization Topology** for the two-way synchronization instance must be configured to **Two-way Synchronization**.

## Precautions

-   For two-way synchronization between ApsaraDB for MongoDB instances, the conflict resolution policy only supports **Ignore**.
    
-   Only incremental synchronization supports independent conflict resolution policies.
    
-   Columns with independent conflict resolution policies are not affected by global conflict resolution policies.
    
-   If an independent conflict resolution policy is not set for a two-way synchronization instance, you cannot set an independent conflict resolution policy when modifying the synchronization object.
    
-   Because the system time of both ends of data synchronization may be different and synchronization latency may occur, DTS cannot fully guarantee that the conflict detection mechanism can prevent all data conflicts. When using two-way synchronization, you need to make corresponding modifications at the business level to ensure that records with the same primary key, business primary key, or unique key are updated only at one node of the two-way synchronization.
    
-   To ensure data consistency, make sure that data records with the same primary key, business primary key, or unique key are updated only on one of the synchronization nodes. If data records are updated on both nodes, DTS responds to conflicts based on the conflict resolution policy that you specify for the data synchronization task.
    
-   If there is a delay after the synchronization task is paused or restarted, the configured conflict resolution policy does not take effect during the delay period, and the default is to overwrite the data on the destination side.
    

## Procedure

### Configure a global conflict resolution policy

Based on the actual situation, select a **Global Conflict Resolution Policy**. For a list of supported global conflict resolution policies, see [Supported conflict resolution policies](#99b3b5f4480m0).

**Note**

For two-way synchronization between ApsaraDB for MongoDB instances, the conflict resolution policy only supports **Ignore**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3154331471/p912133.png)

### Configure an independent conflict resolution policy

1.  In **Selected Objects**, right-click the database or table you want to sync.
    
2.  Enable the independent conflict resolution policy.
    
    ## Database level
    
    1.  In the dialog box that appears, within the **Independent Conflict Resolution Policy** area, you can set the **Enable Independent Conflict Resolution Policy** to **Yes**.
        
    2.  Select a **Conflict Resolution Policy**.
        
    3.  Click **Columns for Conflict Detection** on the right side of **Add Column**.
        
    4.  In the **Column Name** text box, enter the name of the column you want to assign a unique conflict resolution policy to.
        
        **Note**
        
        -   If the name of the target column uses the mapping feature, you need to enter the mapped column name.
            
        -   You can click **Columns for Conflict Detection** on the right side of **Add Column** to add additional columns that require unique conflict resolution policies.
            
        
    
    ## Table level
    
    1.  In the dialog box, in the **Column** area, select **Independent Conflict Resolution Policy**.
        
    2.  In the **Columns for Conflict Detection**, select the columns you want to assign an independent conflict resolution policy to.
        
        **Note**
        
        The columns with primary keys and unique constraints are selected by default.
        
    3.  Select a **Conflict Resolution Policy**.
        
        **Note**
        
        If the **Columns for Conflict Detection** is automatically selected by the system, you cannot select **UseMax** or **UseMin**.
        
    
3.  Click **OK** .
    

## FAQ

Q: Can I modify a conflict resolution policy?

A: You can modify the global conflict resolution policy by [modifying the objects to be synchronized](/help/en/dts/user-guide/modify-the-objects-to-be-synchronized).
