This topic describes how to use Flink to create a Paimon DLF Catalog, read MySQL Change Data Capture (CDC) business data, and write the data to DLF. You can then use a MaxCompute external project to perform federated query and analysis on the data lake and write the results back to DLF. This topic uses the [new version of DLF](https://dlf-next.console.alibabacloud.com/cn-hangzhou/overview?spm=a2c4g.11186623.0.0.94be1555vWhM40), which differs from [DLF 1.0](https://dlf.console.alibabacloud.com/). For more information about the new version of DLF, see [Data Lake Formation](https://www.alibabacloud.com/help/zh/dlf/dlf-2-0).

## **Prerequisites**

-   You have activated the [OSS](https://oss.console.alibabacloud.com/overview) service.
    
-   You have activated the [DLF](https://dlf-next.console.alibabacloud.com/cn-hangzhou/) service.
    
-   You have activated the [Flink](https://realtime-compute.console.alibabacloud.com/) service.
    
-   You have created a [MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) and enabled [the schema switch for project-level metadata](/help/en/maxcompute/user-guide/external-project-1-0-migration-to-lake-warehouse-integrated-2-0-schema#ace56f45888li).
    
-   You have created an [RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1).
    

## **Procedure**

### Step 1: Prepare the source data

-   If you already have MySQL test data, skip this step.
    
-   This step simulates real-time data updates from a business system. Flink writes the data to the data lake in Paimon format.
    

1.  Log on to the [RDS console](https://rds.console.alibabacloud.com/dashboard/).
    
2.  In the navigation pane on the left, click **Instances**. Then, select a region in the upper-left corner.
    
3.  On the Instances page, click the target instance's **Instance ID/Name** to open its details page.
    
4.  In the left navigation pane, click **Databases**.
    
5.  Click **Create Database**. Configure the following parameters:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Example**
    
    **Database Name**
    
    Required
    
    -   The name must be 2 to 64 characters in length.
        
    -   It must start with a letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, underscores (\_), and hyphens (-).
        
    -   The database name must be unique within the instance.
        
    -   If the database name contains a hyphen (`-`), the hyphen (`-`) in the folder name of the created database is replaced with `@002d`.
        
    
    `dlf25_paimon`
    
    **Supported Character Set**
    
    Required
    
    Select a character set as needed.
    
    `utf8`
    
    **Authorized By**
    
    Optional
    
    -   Select the accounts that need to access this database. You can leave this parameter empty and [attach accounts](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb) after the database is created.
        
    -   Only standard accounts are displayed here. Privileged accounts have all permissions on all databases and do not require authorization.
        
    
    `Default`
    
    **Description**
    
    Optional
    
    Enter remarks about the database for future management. The remarks can be up to 256 characters in length.
    
    `Create a test database for the external project DLF 2.5.`
    
6.  Click **Log On to Database**. In the left navigation pane, select **Database Instances**. Double-click the database that you created. On the **SQLConsole** page, execute the following statements to create a test table and write test data.
    
    If the instance exists but the target database is not displayed after you expand the instance, the reason may be one of the following:
    
    -   **The logon account does not have access to the target database**: You can go to the **Accounts** page of the RDS instance to [modify the account permissions](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance) or [change the logon database account](/help/en/rds/apsaradb-rds-for-mysql/use-dms-to-log-on-to-an-apsaradb-rds-for-mysql-instance-1#ec9f51ac15xkc).
        
    -   **The metadata is not synchronized, which prevents the directory from being displayed**: Hover the mouse pointer over the instance that contains the target database. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7508324671/p1028808.png) button to the right of the instance name to refresh the database list.
        
    
    ```
    CREATE TABLE emp (
        empno    INT PRIMARY KEY,
        ename    VARCHAR(20),
        job      VARCHAR(20),
        mgr      INT,
        hiredate DATE,
        sal      DECIMAL(10,2),
        comm     DECIMAL(10,2),
        deptno   INT
    );
    
    INSERT INTO emp VALUES
    (7369,'SMITH','CLERK',7902,'2020-12-17', 800.00,NULL,20),
    (7499,'ALLEN','SALESMAN',7698,'2021-02-20',1600.00,300.00,30),
    (7521,'WARD','SALESMAN',7698,'2021-02-22',1250.00,500.00,30),
    (7566,'JONES','MANAGER',7839,'2021-04-02',2975.00,NULL,20),
    (7654,'MARTIN','SALESMAN',7698,'2021-09-28',1250.00,1400.00,30),
    (7698,'BLAKE','MANAGER',7839,'2021-05-01',2850.00,NULL,30),
    (7782,'CLARK','MANAGER',7839,'2021-06-09',2450.00,NULL,10),
    (7788,'SCOTT','ANALYST',7566,'2021-12-09',3000.00,NULL,20),
    (7839,'KING','PRESIDENT',NULL,'2021-11-17',5000.00,NULL,10),
    (7844,'TURNER','SALESMAN',7698,'2021-09-08',1500.00,0.00,30),
    (7876,'ADAMS','CLERK',7788,'2022-01-12',1100.00,NULL,20),
    (7900,'JAMES','CLERK',7698,'2021-12-03', 950.00,NULL,30),
    (7902,'FORD','ANALYST',7566,'2021-12-03',3000.00,NULL,20),
    (7934,'MILLER','CLERK',7782,'2022-01-23',1300.00,NULL,10),
    (8001,'DUKE','ENGINEER',7788,'2023-03-15',3500.00,NULL,20),
    (8002,'DANIEL','ENGINEER',7788,'2023-04-01',3400.00,NULL,20),
    (8003,'SANDRA','CONSULTANT',7698,'2023-05-10',2700.00,NULL,30),
    (8004,'KAREN','CLERK',7902,'2023-06-11',1200.00,NULL,20),
    (8005,'JOHN','MANAGER',7839,'2023-07-12',4000.00,NULL,10),
    (8006,'LISA','DESIGNER',7698,'2023-08-13',2200.00,NULL,30);
    ```
    
7.  Query the data in the test table.
    
    ```
    SELECT * FROM emp;
    ```
    
    The following result is returned:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008259.png)
    

### Step 2: Prepare a DLF metadatabase

1.  Log on to the [Data Lake Formation (DLF) console](https://dlf-next.console.alibabacloud.com/cn-hangzhou/overview) and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Catalog List**.
    
3.  On the Catalogs page, click **Create Catalog**.
    
4.  On the **Data Lake Formation (DLF)** page, enter the following parameters and then click **Create Catalog**:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Catalog Name**
    
    Required
    
    A custom catalog name. The name must start with a letter and can be 1 to 256 characters in length. It can contain letters, digits, and underscores (\_). For example, `db_dlf25_oss`.
    
    **Description**
    
    Optional
    
    A custom description.
    
    **Storage Type**
    
    Required
    
    Standard.
    
    **Storage Redundancy Type**
    
    Required
    
    -   Locally redundant storage: Data is stored in a single zone. If the zone where the data is stored becomes unavailable, the data becomes inaccessible. We recommend that you use zone-redundant storage.
        
    -   Zone-redundant storage: This is a multi-zone redundancy mechanism within the same region. If a single zone becomes unavailable, your data remains available. After a catalog is created, you cannot change its storage redundancy type from zone-redundant to locally redundant. Zone-redundant storage provides higher data availability than locally redundant storage but is more expensive. We recommend zone-redundant storage for data that requires high availability.
        
    

### Step 3: Create Paimon and MySQL catalogs using Flink

1.  **Create a Paimon catalog**
    
    1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
    2.  Click the name of the target workspace. In the navigation pane on the left, select **Catalogs** .
        
    3.  On the **Catalog List** page, click **Create Catalog** on the right. In the **Create Catalog** dialog box, select **Apache Paimon**, click **Next** , and configure the following parameters:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **metastore**
        
        Required
        
        The metastore type. In this example, select `dlf`.
        
        **catalog name**
        
        Required
        
        Select the DLF Catalog of the version you want to associate. Select DLF V2.5. In this example, it is `db_dlf25_oss` created in DLF.
        
2.  **Create a MySQL catalog**
    
    1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
    2.  Add an IP address to the whitelist.
        
        1.  In the **Actions** column for the target workspace, click **Details**.
            
            In the **Workspace Details** panel, copy the **CIDR Block** of the vSwitch.
            
        2.  Log on to the [RDS console](https://rds.console.alibabacloud.com/dashboard/).
            
            In the navigation pane on the left, click **Instances**. Then, select a region in the upper-left corner.
            
            On the Instances page, click the target instance's **Instance ID/Name** to open its details page.
            
        3.  In the navigation pane on the left, click **Whitelist and SecGroup**.
            
            On the **Whitelist Settings** tab, click **Modify**.
            
        4.  In the **Edit Whitelist** dialog box, add the copied CIDR block to the **IP Addresses** field, and then click **OK**.
            
    3.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
        Click the name of the target workspace. In the navigation pane on the left, select **Catalogs** .
        
    4.  On the **Catalog List** page, click **Create Catalog**. In the **Create Catalog** dialog box, select **MySQL**, click **Next**, and configure the following parameters:
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        **catalog name**
        
        Required
        
        A custom name for the MySQL catalog. For example, `mysql-catalog-dlf25`.
        
        **hostname**
        
        Required
        
        -   The IP address or hostname of the MySQL database.
            
        -   You can log on to the [RDS for MySQL console](https://rds.console.alibabacloud.com/). On the database instance details page, click **Database Connection** to view the database's **Internal Endpoint**, **Public Endpoint**, and **Internal Port**.
            
        -   When accessing across VPCs or over the Internet, you need to establish network connectivity. For more information, see [Network Connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
            
        
        **port**
        
        Default
        
        The port used to connect to the server. The default value is 3306.
        
        **default database**
        
        Required
        
        The default database name. For example, `dlf25_paimon`.
        
        **username**
        
        Required
        
        The username used to connect to the MySQL database server. You can log on to the [RDS for MySQL console](https://rds.console.alibabacloud.com/). On the instance details page, click **Account Management** to view the username.
        
        **password**
        
        Required
        
        The password used to connect to the MySQL database server. You can log on to the [RDS for MySQL console](https://rds.console.alibabacloud.com/). On the instance details page, click **Account Management** to view the password.
        

### **Step 4: Read MySQL data and write it to a Paimon table in DLF using Flink**

1.  Log on to the [Flink console](https://realtime-compute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
2.  Click the target workspace name, and then in the left navigation pane, select **Development** > **ETL**.
    
3.  On the **Drafts** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7508324671/p1029653.png) to create a new folder.
    
4.  Right-click the folder and select **New Blank Stream Draft**. In the **New Draft** dialog box, enter a **Name** and select an **Engine Version**.
    
5.  In the file, write and execute the following SQL statement. Make sure to modify the names in the code based on your actual environment.
    
    ```
    CREATE TABLE IF NOT EXISTS `db_dlf25_oss`.`default`.`emp`
    WITH (
      'bucket' = '4',
      'changelog-producer' = 'input'
    ) AS TABLE `mysql-catalog-dlf25`.`dlf25_paimon`.`emp`;
    ```
    
    1.  (Optional) In the upper-right corner, click **Validate** to validate the syntax of the job's Flink SQL statement.
        
    2.  Click **Deploy** in the upper-right corner. In the **Deploy draft** dialog box, specify the **Comment**, **Label**, and **Deployment Target**, and then click **Confirm**.
        
6.  Click the target workspace name. In the navigation pane on the left, select **O&M** > **Deployments**.
    
7.  On the **Deployments** page, click the name of the target job to open its **Configuration** page.
    
8.  In the upper-right corner of the deployment details page for the target job, click **Start**, select **Initial Mode**, and then click **Start**.
    
9.  **Query the Paimon data**
    
    In the left navigation pane, select **Development** > **Scripts**.
    
    On the **New Script** tab, you can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008251.png) to create a new query script.
    
    ```
    SELECT * FROM `db_dlf25_oss`.`default`.`emp`;
    ```
    
    The following result is returned:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008260.png)
    
10.  Log on to the [Data Lake Formation (DLF) console](https://dlf-next.console.alibabacloud.com/cn-hangzhou/overview). In the navigation pane, choose **Catalog List** > **Catalogs**. Click the data catalog to go to the database and view the details of the synchronized table.
     

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825568571/p1008261.png)

### Step 5: Create a Paimon\_DLF external data source in MaxCompute

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Foreign Server**.
    
3.  On the **Foreign Server** page, click **Create Foreign Server**.
    
4.  In the **Add Foreign Server** dialog box, configure the parameters. The following tables describe the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Foreign Server Type**
    
    Required
    
    Select **DLF+OSS**.
    
    **Foreign Server Name**
    
    Required
    
    A custom name. The naming conventions are as follows:
    
    -   The name must start with a letter and can contain only lowercase letters, underscores (\_), and digits.
        
    -   The name cannot exceed 128 characters in length.
        
    
    For example, `mysql_paimon_dlf25`.
    
    **Foreign Server Description**
    
    Optional
    
    Enter a description as needed.
    
    **Region**
    
    Required
    
    The default value is the current region.
    
    **DLF Endpoint**
    
    Required
    
    The default value is the DLF Endpoint of the current region.
    
    **OSS Endpoint**
    
    Required
    
    The default value is the OSS Endpoint of the current region.
    
    **RoleARN**
    
    Required
    
    The Alibaba Cloud Resource Name (ARN) of the RAM role. This role must have permissions to access both DLF and OSS.
    
    1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  In the **Basic Information** section, you can find the **ARN**.
        
    
    Example: `acs:ram::124****:role/aliyunodpsdefaultrole`.
    
    **Foreign Server Supplemental Properties**
    
    Optional
    
    Special attributes for the external data source. After you specify them, tasks that use this external data source can access the source system according to the defined behavior.
    
    **Note**
    
    For information about the supported parameters, see the official documentation. More parameters will be supported as the product evolves.
    
5.  Click **OK** to create the external data source.
    
6.  On the **Foreign Server** page, find the target data source and click **Details** in the **Actions** column.
    

### Step 6: Create a Paimon\_DLF external project in MaxCompute

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
    
3.  On the **External Project** tab, click **Create Project**.
    
4.  In the **Create Project** dialog box, configure the project information as prompted and click **OK**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Project Type**
    
    Required
    
    The default value is External Project.
    
    **Region**
    
    Required
    
    The default value is the current region. You cannot change it here.
    
    **Project Name (Globally Unique)**
    
    Required
    
    The name must start with a letter, contain letters, digits, and underscores (\_), and be 3 to 28 characters in length.
    
    **MaxCompute Foreign Server Type**
    
    Optional
    
    The default value is Paimon\_DLF.
    
    **MaxCompute Foreign Server**
    
    Optional
    
    -   **Use Existing**: A list of created external data sources appears.
        
    -   **Create Foreign Server**: Create and use a new external data source.
        
    
    **MaxCompute Foreign Server Name**
    
    Required
    
    -   Use Existing: Select the name of a created external data source from the drop-down list.
        
    -   New external data source: Use the name of the new external data source.
        
    
    **Authentication And Authorization**
    
    Required
    
    The identity of the task executor. If a service-linked role does not exist, you must create one before you can use this mode.
    
    **Service-linked Role**
    
    Required
    
    Generated by default.
    
    **Endpoint**
    
    Required
    
    Generated by default.
    
    **Data Catalog**
    
    Required
    
    The DLF data catalog.
    
    **Billing Method**
    
    Required
    
    **Subscription** or **Pay-as-you-go**.
    
    **Default Quota**
    
    Required
    
    Select an existing quota.
    
    **Description**
    
    Optional
    
    A custom project description.
    

### Step 7: Analyze data

1.  Use a [connection tool](/help/en/maxcompute/user-guide/prepare-an-environment-and-install-required-development-tools) to log on to the external project.
    
2.  List the schemas in the external project.
    
    ```
    -- Enable the schema syntax at the session level.
    SET odps.namespace.schema=true;
    SHOW schemas;
    
    -- The following result is returned.
    ID = 20250919****am4qb
    default
    system
    
    
    OK
    ```
    
3.  List the tables in the schema of the external project.
    
    ```
    USE schema default;
    SHOW tables;
    
    -- The following result is returned.
    ID = 20250919****am4qb
    acs:ram::<uid>:root  emp
    
    
    OK
    ```
    
4.  Read data from the Paimon table in DLF.
    
    ```
    SELECT * FROM emp;
    
    -- The following result is returned.
    +------------+------------+------------+------------+------------+------------+------------+------------+
    | empno      | ename      | job        | mgr        | hiredate   | sal        | comm       | deptno     | 
    +------------+------------+------------+------------+------------+------------+------------+------------+
    | 7521       | WARD       | SALESMAN   | 7698       | 2021-02-22 | 1250       | 500        | 30         | 
    | 7844       | TURNER     | SALESMAN   | 7698       | 2021-09-08 | 1500       | 0          | 30         | 
    | 7876       | ADAMS      | CLERK      | 7788       | 2022-01-12 | 1100       | NULL       | 20         | 
    | 7900       | JAMES      | CLERK      | 7698       | 2021-12-03 | 950        | NULL       | 30         | 
    | 7934       | MILLER     | CLERK      | 7782       | 2022-01-23 | 1300       | NULL       | 10         | 
    | 8005       | JOHN       | MANAGER    | 7839       | 2023-07-12 | 4000       | NULL       | 10         | 
    | 7369       | SMITH      | CLERK      | 7902       | 2020-12-17 | 800        | NULL       | 20         | 
    | 7566       | JONES      | MANAGER    | 7839       | 2021-04-02 | 2975       | NULL       | 20         | 
    | 7654       | MARTIN     | SALESMAN   | 7698       | 2021-09-28 | 1250       | 1400       | 30         | 
    | 7698       | BLAKE      | MANAGER    | 7839       | 2021-05-01 | 2850       | NULL       | 30         | 
    | 7839       | KING       | PRESIDENT  | NULL       | 2021-11-17 | 5000       | NULL       | 10         | 
    | 8002       | DANIEL     | ENGINEER   | 7788       | 2023-04-01 | 3400       | NULL       | 20         | 
    | 8006       | LISA       | DESIGNER   | 7698       | 2023-08-13 | 2200       | NULL       | 30         | 
    | 7499       | ALLEN      | SALESMAN   | 7698       | 2021-02-20 | 1600       | 300        | 30         | 
    | 7782       | CLARK      | MANAGER    | 7839       | 2021-06-09 | 2450       | NULL       | 10         | 
    | 7788       | SCOTT      | ANALYST    | 7566       | 2021-12-09 | 3000       | NULL       | 20         | 
    | 7902       | FORD       | ANALYST    | 7566       | 2021-12-03 | 3000       | NULL       | 20         | 
    | 8001       | DUKE       | ENGINEER   | 7788       | 2023-03-15 | 3500       | NULL       | 20         | 
    | 8003       | SANDRA     | CONSULTANT | 7698       | 2023-05-10 | 2700       | NULL       | 30         | 
    | 8004       | KAREN      | CLERK      | 7902       | 2023-06-11 | 1200       | NULL       | 20         | 
    +------------+------------+------------+------------+------------+------------+------------+------------+
    ```
    
5.  Query the emp table to retrieve the complete information of the employees who have the highest and lowest salaries in each department.
    
    ```
    WITH ranked AS (
        SELECT e.*,
               ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rn_desc,
               ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal ASC)  AS rn_asc
        FROM emp e
    )
    SELECT *
    FROM ranked
    WHERE rn_desc = 1 
       OR rn_asc  = 1
    ORDER BY deptno, sal DESC;
    
    -- The following result is returned.
    +-------+--------+-----------+------+------------+------+------+--------+------------+------------+
    | empno | ename  | job       | mgr  | hiredate   | sal  | comm | deptno | rn_desc    | rn_asc     |
    +-------+--------+-----------+------+------------+------+------+--------+------------+------------+
    | 7839  | KING   | PRESIDENT | NULL | 2021-11-17 | 5000 | NULL | 10     | 1          | 4          |
    | 7934  | MILLER | CLERK     | 7782 | 2022-01-23 | 1300 | NULL | 10     | 4          | 1          |
    | 8001  | DUKE   | ENGINEER  | 7788 | 2023-03-15 | 3500 | NULL | 20     | 1          | 8          |
    | 7369  | SMITH  | CLERK     | 7902 | 2020-12-17 | 800  | NULL | 20     | 8          | 1          |
    | 7698  | BLAKE  | MANAGER   | 7839 | 2021-05-01 | 2850 | NULL | 30     | 1          | 8          |
    | 7900  | JAMES  | CLERK     | 7698 | 2021-12-03 | 950  | NULL | 30     | 8          | 1          |
    +-------+--------+-----------+------+------------+------+------+--------+------------+------------+
    ```
    

### Step 8: Write the analysis results back to DLF

1.  In the external project from the previous step, create a table to store the SQL analysis results.
    
    ```
    CREATE TABLE emp_detail (
        empno    INT,
        ename    VARCHAR(20),
        job      VARCHAR(20),
        mgr      INT,
        hiredate DATE,
        sal      DECIMAL(10,2),
        comm     DECIMAL(10,2),
        deptno   INT
    );
    ```
    
2.  You can write the analysis results from Step 5 to a new table.
    
    ```
    WITH ranked AS (
        SELECT e.*,
               ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rn_desc,
               ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal ASC)  AS rn_asc
        FROM emp e
    )
    insert into emp_detail 
    SELECT 
        empno,ename,job,mgr,
        hiredate,sal,comm,deptno
    FROM ranked
    WHERE rn_desc = 1 
       OR rn_asc  = 1
    ORDER BY deptno, sal DESC;
    ```
    
3.  Query the new table.
    
    ```
    SELECT * FROM emp_detail;
    
    -- The following result is returned.
    +------------+------------+------------+------------+------------+------------+------------+------------+
    | empno      | ename      | job        | mgr        | hiredate   | sal        | comm       | deptno     | 
    +------------+------------+------------+------------+------------+------------+------------+------------+
    | 7839       | KING       | PRESIDENT  | NULL       | 2021-11-17 | 5000       | NULL       | 10         | 
    | 7934       | MILLER     | CLERK      | 7782       | 2022-01-23 | 1300       | NULL       | 10         | 
    | 8001       | DUKE       | ENGINEER   | 7788       | 2023-03-15 | 3500       | NULL       | 20         | 
    | 7369       | SMITH      | CLERK      | 7902       | 2020-12-17 | 800        | NULL       | 20         | 
    | 7698       | BLAKE      | MANAGER    | 7839       | 2021-05-01 | 2850       | NULL       | 30         | 
    | 7900       | JAMES      | CLERK      | 7698       | 2021-12-03 | 950        | NULL       | 30         | 
    +------------+------------+------------+------------+------------+------------+------------+------------+
    ```
    
4.  Log on to the [Data Lake Formation (DLF) console](https://dlf-next.console.alibabacloud.com/cn-hangzhou/overview). In the navigation pane on the left, choose **Catalog List**. The newly created `emp_detail` table appears in the list.
