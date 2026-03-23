Metadata management is an important part of building a data lake. Effective centralized metadata management can enhance the value of data assets. This topic describes related operations of databases, tables, and functions in data lake formation.

## **Database**

### **Create a database**

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, select **Metadata** > **Metadata**.
    
3.  Click the **Database** tab, select the target **Catalog List**, and click **Create Database**.
    
4.  Configure the following database information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Catalog**
    
    Select the data catalog.
    
    **Database Name**
    
    Enter the database name.
    
    **Database Description**
    
    Optional. Enter the database description.
    
    **Select Path**
    
    Specify the Object Storage Service (OSS) path. You can store metadata in OSS to ensure the security and reliability of the metadata. This allows you to manage and maintain metadata in a centralized manner.
    
    **Note**
    
    Only OSS buckets of the Standard storage class are supported. If OSS buckets of the Standard storage class are not created in the current region, create the OSS buckets in the [OSS console](https://account.alibabacloud.com/login/login.htm?oauth_callback=https://oss.console.alibabacloud.com/index).
    

### **View the database details**

1.  Click the **Database** tab.
    
2.  In the database list, click the target database name to view the **Basic Information** of the database.
    
3.  Click the corresponding tabs to view the **Table List**, **Functions**, **Data Permission**, **Data Overview**, and **Storage Rule** of the database.
    

### **Edit** a database

1.  Click the **Database** tab, and select the target **Catalog List**.
    
2.  Find the target database and click **Edit** in the **Actions** column.
    
3.  Modify the following information and click **Update**.
    
    -   **Database Description**: Enter the database description.
        
    -   **Select Path**: Enter the location of the database.
        

### **Delete a database**

1.  Click the **Database** tab, and select the target **Catalog List**.
    
2.  Find the target database and click **Delete** in the **Actions** column.
    
3.  In the pop-up dialog box, click **Delete**.
    

**Note**

-   The default database is created by default in DLF and cannot be deleted. We recommend to use other databases in a production environment.
    
-   Deleting a database on the DLF page does not delete the data stored in OSS. To delete data, execute the Drop Database operation from the E-MapReduce/MaxCompute side.
    

## **Table**

### **Create a table**

1.  After creating a database, click the **Table** tab, select the target **Catalog List** and **Database Name**, and click **Create Table**.
    
2.  Configure the following data table information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Table Name**
    
    Enter the name of the table.
    
    **Catalog**
    
    Select the data catalog.
    
    **Database**
    
    Select the database under the data catalog.
    
    **Table Description**
    
    Optional. Enter the table description.
    
    **Data Storage Location**
    
    Select the location where the data in the table is stored.
    
    We recommend that the default storage location is `oss://[Database storage location]/[Table name]`.
    
    **Format and Serialization**
    
    Select the data format of the table. The Avro, CSV, JSON, Parquet, and ORC formats are supported.
    
    **Delimiter**
    
    Optional. When the data format is CSV, select the separator for the table.
    
    **Common Column**
    
    Manually define the common columns and partition key columns of the table. Specify column information, including the column name, data type, and description.
    
    **Partition Key Column**
    

### View the table details

1.  Click the **Table** tab.
    
2.  In the table list, click the target table name to view the **Basic Information** of the table.
    
3.  Click the corresponding tabs to view the **Data Permission**, **Data Overview**, **Version Management**, and **Storage Rule** of the table.
    
    For details about the **Data Overview** of the table, see [Data overview of data tables](/help/en/dlf/dlf-1-0/user-guide/data-table-data-overview).
    

### **Edit** a table

1.  Click the **Table** tab, and select the target **Catalog List** and **Database Name**.
    
2.  Find the target data table and click **Edit** in the **Actions** column.
    
3.  Modify the data table information and click **Update**.
    

### **Delete a table**

1.  Click the **Table** tab, and select the target **Catalog List** and **Database Name**.
    
2.  Find the target data table and click **Delete** in the **Actions** column.
    
3.  In the pop-up dialog box, click **Delete**.
    

**Note**

Deleting a table on the DLF page does not delete the data stored in OSS. To delete data, execute the Drop Table operation from the E-MapReduce/MaxCompute side.

## **Function**

### **Create a function**

1.  In the left-side navigation pane, select **Metadata** > **Metadata**.
    
2.  Click the **Function** tab, select the target **Catalog List** and **Database Name**, and click **Create Function**.
    
3.  Configure the following function information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Function Name**
    
    Enter the function name.
    
    **Function Type**
    
    Set this parameter to JAVA.
    
    **Catalog**
    
    Select the data catalog.
    
    **Database**
    
    Select the database under the data catalog.
    
    **Class Name**
    
    Optional. Enter the class name.
    
    **Resource URI**
    
    Optional. Click **Add Column**, and enter the **Type** and **URI**. Resource types support JAR, FILE, and ARCHIVE.
    

### **View the function details**

1.  Click the **Function** tab, and select the target **Catalog List** and **Database Name**.
    
2.  In the function list, click the target function name to view the basic information of the function.
    

### **Edit** a function

1.  Click the **Function** tab, and select the target **Catalog List** and **Database Name**.
    
2.  Find the target function and click **Edit** in the **Actions** column.
    
3.  Configure the **Class Name** information and click **OK**.
    

### **Delete** a function

1.  Click the **Function** tab, and select the target **Catalog List** and **Database Name**.
    
2.  Find the target function and click **Delete** in the **Actions** column.
    
3.  In the pop-up confirmation box, click **Delete**.
