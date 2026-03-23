This topic uses Hive on E-MapReduce as an example to describe how to create an external schema in MaxCompute and query Hive table data in Hadoop.

## **Usage notes**

This feature is supported only in the China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Hong Kong), Singapore, and Germany (Frankfurt) regions.

## **Procedure**

### **Step 1: Prerequisites**

Skip this step if you already have Hive data.

1.  [Activate E-MapReduce](https://emr.console.alibabacloud.com/).
    
2.  [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project).
    
    The MaxCompute project and the Hadoop cluster must be in the same region.
    
3.  Enable schema support for your MaxCompute project.
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
        
    2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
        
    3.  On the **Projects** page, click **Upgrade to Support Schemas** in the **Actions** column of the target project.
        

### **Step 2: Prepare Hive data**

Skip this step if you already have Hive data.

1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
    
2.  On the **My Clusters** page, click **Create Cluster**.
    
    1.  **Software Configuration**
        
        In the top menu bar, select a resource group. By default, all resources under your account are displayed. Configure the other parameters as follows.
        
        **Parameter**
        
        **Description**
        
        **Region**
        
        -   The cluster is created in the selected region. The region cannot be changed after the cluster is created.
            
        -   The MaxCompute project and the Hadoop cluster must be in the same region.
            
        
        **Business Scenario**
        
        For this example, select **Custom Cluster**.
        
        **Product Version**
        
        Select a version. The latest version is recommended.
        
        **High Service Availability**
        
        This feature is disabled by default. If you enable **High Service Availability**, EMR distributes master nodes across different underlying hardware to reduce the risk of failures.
        
        **Optional Services (Select One At Least)**
        
        For this example, select `HADOOP-COMMON(3.2.1)`, `HDFS(3.2.1)`, `HIVE(3.1.3)`, and `YARN(3.2.1)`.
        
        **Collect Service Operational Logs**
        
        Log collection is enabled by default.
        
        **if you want to collect service operational logs, you can modify the collection status on the Basic Information tab of the cluster details page.**
        
        **Metadata**
        
        This example uses a **Self-managed RDS** instance.
        
        For more information about how to create an RDS instance, see [Create an RDS for MySQL instance and configure the database](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases).
        
        -   **For an EMR cluster that is used in the production environment, we recommend that you use independent ApsaraDB RDS for MySQL. For example, you can use ApsaraDB RDS for MySQL 5.7 of Alibaba Cloud high-availability edition.**
            
        -   Configure the RDS connection information in **hivemetastore-site.xml**:
            
            -   **javax.jdo.option.ConnectionURL**
                
                The Java Database Connectivity (JDBC) metadata connection. For example: `jdbc:mysql://rds.host.name/hive_db_name`
                
            -   **javax.jdo.option.ConnectionUserName**
                
                The database account for the metadata.
                
            -   j**avax.jdo.option.ConnectionPassword**
                
                The database password for the metadata.
                
        
        The preceding configurations are for this example only. For more information about how to create a data lake analytics cluster in the E-MapReduce console, see [Create and use a DataLake cluster](/help/en/emr/emr-on-ecs/getting-started/quick-start-for-emr).
        
    2.  **Hardware Configuration**
        
        **Parameter**
        
        **Description**
        
        **Billing Method**
        
        -   **Subscription**
            
        -   **Pay-as-you-go**
            
        
        For testing, use **Pay-as-you-go**. After testing is complete, you can release the cluster and create a **Subscription** cluster for production.
        
        **Zone**
        
        The zone cannot be changed after the cluster is created. Choose carefully.
        
        **VPC**
        
        Select a virtual private cloud (VPC) in the region. If none exists, click **Create VPC**. After you create a VPC, click **Refresh** to select it.
        
        **vSwitch**
        
        Select a vSwitch in the zone of the selected VPC. If no vSwitch is available in the zone, create one.
        
        **Default Security Group**
        
        **Important**
        
        Advanced security groups created on ECS are not supported.
        
        If you have a security group in use, you can select it or create a new one.
        
        **Node Group**
        
        Configure the master, core, or task node groups based on your business needs. For more information, see [Select hardware and network](/help/en/emr/emr-on-ecs/user-guide/hardware-and-network-configurations).
        
        For this example, enable **Assign Public Network IP** for the master node group and use the default values for other parameters.
        
        **Cluster Scaling**
        
        Configure scaling rules.
        
    3.  **Basic Configuration**
        
        **Parameter**
        
        **Description**
        
        **Cluster Name**
        
        The name of the cluster. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
        
        **Identity Credentials**
        
        -   **Key Pair**: If you want to perform identity verification without entering a password, you can use a **Key Pair**. For more information, see [Manage SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/).
            
        -   **Password**: The password used to remotely log on to the master node of the cluster. Record this password. You will need it to log on to the cluster.
            
        
3.  Log on to the master node of the cluster and prepare data in Hive.
    
    1.  **Log on to the cluster master node**
        
        1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
            
        2.  Click **Nodes** for the target cluster.
            
        3.  On the **Nodes** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p899985.png) icon in the node group row, and then click the node ID to go to the **Instance** details page.
            
        4.  On the **Instance** page for the specified node, click **Connect**.
            
        5.  In the **Remote connection** dialog box, with the default **Workbench** option selected, click **Sign in now**.
            
        6.  In the logon window, enter the instance information as needed.
            
            **Note**
            
            When you create a key pair, the private key is automatically downloaded and saved as a .pem file. You can select Secure Shell (SSH) key authentication and upload the private key file to perform identity verification without a password.
            
    2.  **Prepare Hive test data.** After you log on to the cluster master node using Workbench, run the following commands in the terminal:
        
        ```
        [user@emr-node ~]$ hive
        
        -- Create a database.
        hive> CREATE database IF NOT EXISTS myhive;
        
        -- Switch to the database.
        hive> USE myhive;
        
        -- Create a non-partitioned table.
        hive> CREATE TABLE IF NOT EXISTS employees (
                id INT,
                name STRING,
                age INT,
                department STRING
              )
              ROW FORMAT DELIMITED
              FIELDS TERMINATED BY ','
              STORED AS TEXTFILE;
        
        -- Insert data.
        hive> INSERT INTO employees VALUES(1, 'John', 25, 'Sales'),
            (2, 'Jane', 30, 'Marketing'),
            (3, 'Mike', 35, 'Engineering'),
            (4, 'Sarah', 28, 'HR'),
            (5, 'David', 32, 'Finance'),
            (6, 'Linda', 29, 'IT'),
            (7, 'Robert', 31, 'Operations'),
            (8, 'Emily', 27, 'Research'),
            (9, 'Michael', 33, 'Development'),
            (10, 'Chris', 26, 'Support');
        
        -- Create a partitioned table.
        hive> CREATE TABLE employees_pt (
              id INT,
              name STRING,
              age INT
            )
          PARTITIONED BY (department STRING)
          ROW FORMAT DELIMITED FIELDS TERMINATED BY ',';
        
        -- Insert data.
        INSERT INTO employees_pt PARTITION (department='Sales') VALUES(1, 'John', 25),(2, 'Jane', 30),(3, 'Mike', 35);
        INSERT INTO employees_pt PARTITION (department='Marketing') VALUES(4, 'Sarah', 28),(5, 'David', 32);
        INSERT INTO employees_pt PARTITION (department='Engineering') VALUES(6, 'Linda', 29),(7, 'Robert', 31);
        INSERT INTO employees_pt PARTITION (department='HR') VALUES(8, 'Emily', 27),(9, 'Michael', 33),(10, 'Chris', 26);
        ```
        
        **Query the non-partitioned table and the partitioned table:**
        
        ```
        -- Query the non-partitioned table.
        hive> SELECT * FROM employees;
        
        1       John    25      Sales
        2       Jane    30      Marketing
        3       Mike    35      Engineering
        4       Sarah   28      HR
        5       David   32      Finance
        6       Linda   29      IT
        7       Robert  31      Operations
        8       Emily   27      Research
        9       Michael 33      Development
        10      Chris   26      Support
        
        -- Query the partitioned table.
        hive> SELECT * FROM employees_pt;
        
        6       Linda   29      Engineering
        7       Robert  31      Engineering
        8       Emily   27      HR
        9       Michael 33      HR
        10      Chris   26      HR
        4       Sarah   28      Marketing
        5       David   32      Marketing
        1       John    25      Sales
        2       Jane    30      Sales
        3       Mike    35      Sales
        ```
        

### **Step 3: Create a Hive+HDFS external data source**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
3.  On the **Foreign Server** page, click **Create Foreign Server**.
    
4.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    Required
    
    Select **Hive+HDFS**.
    
    **Foreign Server Name**
    
    Required
    
    Enter a custom name. The naming convention is as follows:
    
    -   The name must start with a letter and can contain only lowercase letters, underscores (\_), and digits.
        
    -   The name cannot exceed 128 characters.
        
    
    For example, hive\_hdfs\_mc.
    
    **Foreign Server Description**
    
    Optional
    
    Enter a description as needed.
    
    **Network Connection Object**
    
    Required
    
    The name of the network connection. Select or create a connection from MaxCompute to the Alibaba Cloud E-MapReduce or Hadoop VPC network.
    
    **Important**
    
    The VPC must be in the same region as the MaxCompute external data source and the project to which the external data source is attached.
    
    For more information about the parameters, see the **Create a network connection between MaxCompute and the target VPC network** step in [VPC access solution (direct connection)](/help/en/maxcompute/user-guide/network-connection-process/#section-tk5-9qp-hj7).
    
    **Cluster Name**
    
    Required
    
    The name used to refer to the NameNode in a high-availability (HA) Hadoop cluster.
    
    Take an EMR cluster as an example. To obtain the cluster name:
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
        
    2.  Click the **ID** of the target cluster to go to the cluster details page.
        
    3.  On the **Services** tab, click **Configure** for the **HDFS** service to go to the **Configure** page.
        
    4.  Switch to the **hdfs-site.xml** tab. In the **By Name** column, search for `**dfs.nameservices**`. The value of this configuration item is the **Cluster Name**.
        
    
    **NameNode Address**
    
    Required
    
    The endpoints and port numbers of the active and standby NameNode services of the target Hadoop cluster. The port number is usually 8020.
    
    Take an EMR cluster as an example. To obtain the NameNode address:
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
        
    2.  Click the **ID** of the target cluster to go to the cluster details page.
        
    3.  On the **Services** tab, click **Status** for the **HDFS** service to go to the **Status** page.
        
    4.  In the **Components** area, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9563682571/p986300.png) icon next to **NameNode** to expand the topology list.
        
    5.  Obtain the **Private IP Address** of the **master-1-1** node. The **NameNode Address** is in the format `**Internal IP:8020**`.
        
    
    **HMS Service Address**
    
    Required
    
    The endpoints and port numbers of the Hive metadata services of the active and standby NameNodes of the target Hadoop cluster. The port number is usually 9083.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/) and select a region in the upper-left corner.
        
    2.  Click the **ID** of the target cluster to go to the cluster details page.
        
    3.  On the **Services** tab, click **Status** for the **Hive** service to go to the **Status** page.
        
    4.  In the **Components** area, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9563682571/p986300.png) icon next to **HiveRuntime** to expand the topology list.
        
    5.  Obtain the **Private IP Address** of the **master-1-1** node. The **HMS Service Address** is in the format `**Internal IP:9083**`.
        
    
    **Authentication Type**
    
    This is required.
    
    Currently, only **No Authentication** is supported.
    
    **Create vSwitch**
    
    Required
    
    MaxCompute accesses the data source through a VPC. By default, the reverse access 2.0 solution is used. This solution requires you to configure a vSwitch in a specific zone to establish the metadata access link.
    
    The available zones for vSwitches in each region are described on the UI. In the VPC where the data source resides, select an existing vSwitch or create a new one that meets the zone requirements.
    
5.  Click **OK** to create the external data source.
    
6.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### **Step 4: Create an external schema**

1.  Connect to your MaxCompute project.
    
2.  Use the following code to create an external schema:
    
    ```
    -- Enable schema syntax. 
    SET odps.namespace.schema=true;
    
    CREATE EXTERNAL SCHEMA IF NOT EXISTS <YOUR_EXTERNAL_SCHEMA_NAME>
    WITH  <YOUR_EXTERNAL_DATASOURCE_NAME>
    ON 'myhive' ;
    ```
    
    **Parameter description**:
    
    -   your\_external\_schema\_name: The name of the external schema to create. For example, `ex_hms_hdfs`.
        
    -   your\_external\_datasource\_name: The name of the external data source created in MaxCompute in the previous step. The project to which the external schema belongs must be in the same region as the external data source. For example, `hive_hdfs_mc`.
        
    -   myhive: The name of the Hive database created when you prepared the Hive data.
        

### **Step 5: Use SQL to access Hadoop Hive data**

1.  Query tables in the external schema.
    
    ```
    SET odps.namespace.schema=true;
    SHOW tables IN <YOUR_EXTERNAL_SCHEMA_NAME>;
    
    -- The following result is returned:
    ALIYUN$xxx:employees
    ALIYUN$xxx:employees_pt
    
    OK
    ```
    
    **Important**
    
    If the query fails, log on to the [RDS console](https://rds.console.alibabacloud.com/detail/rm-uf667aj8rdh7u02v3/whiteListAndSecurityGroup?spm=5176.19907426.0.0.48ff4f97ClbLP4&region=cn-shanghai&DedicatedHostGroupId=) to check whether the VPC and security group of MaxCompute have been added to the RDS whitelist. It takes at least 5 minutes for the whitelist to take effect after the security group is added.
    
2.  Query the details of the external schema table.
    
    ```
    -- Query the non-partitioned table.
    SELECT * FROM <YOUR_EXTERNAL_SCHEMA_NAME>.employees;
    
    -- Result.
    +------------+------------+------------+------------+
    | id         | name       | age        | department | 
    +------------+------------+------------+------------+
    | 1          | John       | 25         | Sales      | 
    | 2          | Jane       | 30         | Marketing  | 
    | 3          | Mike       | 35         | Engineering | 
    | 4          | Sarah      | 28         | HR         | 
    | 5          | David      | 32         | Finance    | 
    | 6          | Linda      | 29         | IT         | 
    | 7          | Robert     | 31         | Operations | 
    | 8          | Emily      | 27         | Research   | 
    | 9          | Michael    | 33         | Development | 
    | 10         | Chris      | 26         | Support    | 
    +------------+------------+------------+------------+
    
    -- Query the partitioned table.
    SELECT * FROM <YOUR_EXTERNAL_SCHEMA_NAME>.employees_pt WHERE department='HR';
    
    -- Result.
    +------------+------------+------------+------------+
    | id         | name       | age        | department | 
    +------------+------------+------------+------------+
    | 8          | Emily      | 27         | HR         | 
    | 9          | Michael    | 33         | HR         | 
    | 10         | Chris      | 26         | HR         | 
    +------------+------------+------------+------------+
    ```
    

### **Step 6:** Add new data to the Hadoop data source

1.  Log on to the master node of the cluster created with EMR and insert new partition data into the Hive partitioned table:
    
    ```
    INSERT INTO employees_pt PARTITION (department='Computer') 
      VALUES(11, 'Cily', 29),(12, 'Miky', 35);
     
     -- Query the partitioned table on the Hive side.
     hive> SELECT * FROM employees_pt;
     
     -- Query result.
     OK
    11      Cily    29      Computer
    12      Miky    35      Computer
    6       Linda   29      Engineering
    7       Robert  31      Engineering
    8       Emily   27      HR
    9       Michael 33      HR
    10      Chris   26      HR
    4       Sarah   28      Marketing
    5       David   32      Marketing
    1       John    25      Sales
    2       Jane    30      Sales
    3       Mike    35      Sales
    ```
    
2.  Log on to the MaxCompute client and query the new partition data on the MaxCompute side:
    
    ```
    SELECT * FROM <YOUR_EXTERNAL_SCHEMA_NAME>.employees_pt WHERE department='Computer';
    
    -- Result.
    +------------+------------+------------+------------+
    | id         | name       | age        | department | 
    +------------+------------+------------+------------+
    | 11         | Cily       | 29         | Computer   | 
    | 12         | Miky       | 35         | Computer   | 
    +------------+------------+------------+------------+
    ```
    

### **Step 7:** Copy data from the federated external table to the data warehouse

```
-- Copy data from the federated external table to the data warehouse.
CREATE TABLE employees_copy AS SELECT * FROM <YOUR_EXTERNAL_SCHEMA_NAME>.employees;

-- Query the copied table data in the data warehouse.
SELECT * FROM employees_copy;

-- The following result is returned:
+------------+------------+------------+-------------+
| id         | name       | age        | department  | 
+------------+------------+------------+-------------+
| 1          | John       | 25         | Sales       | 
| 2          | Jane       | 30         | Marketing   | 
| 3          | Mike       | 35         | Engineering | 
| 4          | Sarah      | 28         | HR          | 
| 5          | David      | 32         | Finance     | 
| 6          | Linda      | 29         | IT          | 
| 7          | Robert     | 31         | Operations  | 
| 8          | Emily      | 27         | Research    | 
| 9          | Michael    | 33         | Development | 
| 10         | Chris      | 26         | Support     | 
+------------+------------+------------+-------------+
```
