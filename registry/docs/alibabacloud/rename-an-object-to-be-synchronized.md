By default, after an object (such as a database or table) is synchronized from the source instance to the destination instance, the name of the object remains unchanged. You can use the object name mapping feature provided by Data Transmission Service (DTS) to rename the object in the destination instance.

## Precautions

You can rename an object only in the **Select Object to Be Synchronized** step when you configure a data synchronization task.

**Note**

We recommend that you do not rename objects after the data synchronization task is started. Otherwise, the task may fail.

## Procedure

1.  In the **Select Object to Be Synchronized** step, move the required objects to the **Selected** section, move the pointer over a database or table, and then click **Edit**.
    
    **Note**
    
    Different database types support different objects. If **Edit** appears when you move the pointer over an object, you can rename the object.
    
    ![Click Edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9489134161/p51469.png)
2.  In the dialog box that appears, specify a name for the object in the destination instance.
    
    -   Database name mapping
        
        In the **Edit Database Name** dialog box, enter the database name that you want to use in the destination instance.
        
        ![Specify a database name](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9489134161/p49062.png)
    -   Table name mapping
        
        In the **Edit Table** dialog box, enter the table name that you want to use in the destination instance.
        
        ![Specify a table name](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9489134161/p49063.png)
    -   Column name mapping
        
        In the **Edit Table** dialog box, enter a new name for each column.
        
        ![Specify column names](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9489134161/p49064.png)
        
        **Note**
        
        In this step, you can clear the columns that do not need to be synchronized.
        
3.  Click **OK**.
    
4.  Configure other parameters that are required for the data synchronization task.
