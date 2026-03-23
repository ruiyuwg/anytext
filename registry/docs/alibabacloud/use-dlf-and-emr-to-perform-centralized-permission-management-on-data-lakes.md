This topic describes how to use the Data Lake Formation (DLF) and E-MapReduce (EMR) products to manage permissions on data lakes in specific business scenarios.

## **Background information**

Metadata management and data permission control are foundational capabilities provided by the DLF product for building data lakes. By accessing lake data through the metadata view provided by DLF, we can resolve issues related to metadata consistency within the data lake and address challenges associated with data sharing. Various engines can obtain enterprise-level permission management capabilities by integrating with DLF permissions.

## **Concepts**

-   **EMR**: Alibaba Cloud E-MapReduce product. For more information, see [What is EMR on ECS?](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs).
    
-   **DLF Catalog**: DLF data catalog (DLF), the top-level entity of the DLF metadata architecture, can include metadata information such as databases and data tables. For more information, see [Data Catalog](/help/en/dlf/dlf-1-0/user-guide/catalog).
    
-   **DLF Data Permissions**: The data permission system provided by DLF for data lakes, supporting fine-grained permission control in four dimensions: databases, data tables, data columns, and functions. For more information, see [Overview](/help/en/dlf/dlf-1-0/user-guide/overview).
    

## **Business Scenarios**

A company has an EMR cluster with different engines such as the Hive, Spark, Presto, and Impala, and expects to use unified data permissions for different users in actual business scenarios. The main situations are as follows:

-   Super Administrator
    
    -   Has all permissions on data lake data and the ability to assign permissions to others.
        
-   Business A Data Administrator
    
    -   Has all data usage and access permissions related to db\_a of business A and the ability to assign database permissions to others.
        
-   Business A Data Developer
    
    -   Has all data usage and access permissions related to db\_a of business A.
        
-   Business A Data Analyst
    
    -   Has access permissions to some columns of some tables in db\_a related to business A, such as access to col1 and col2 in table1.
        

## **Procedure**

1.  Create an EMR cluster and use DLF as metadata.
    
    1.  Log on to the [E-MapReduce Console](https://emr.console.alibabacloud.com/).
        
    2.  Create an E-MapReduce cluster with the following options:
        
        -   **Business Scenario**: Select **Data Lake**.
            
        -   **Optional Services**: At least select the **Hive** and **DLF-Auth** components. Other components can be selected based on business needs.
            
        -   **Metadata**: Select **DLF Unified Metadata**.
            
        -   **DLF Catalog:** Select the default DLF Catalog or create a new data catalog. This example uses catalog\_test.
            
    3.  Continue with other configurations to complete the creation of the EMR cluster.
        
        **Note**
        
        -   If you already have an E-MapReduce cluster but have not installed the DLF-Auth component, you can add the DLF-Auth component through the Add Service method within the EMR cluster, then use DLF data permissions.
            
        -   If you already have an E-MapReduce cluster but the Hive metadata is not using DLF, you can migrate the metadata before using DLF database permission. You can contact us by DingTalk group: **33719678**.
            
        
2.  Initialize the relevant databases and data tables.
    
    1.  Log on to the EMR cluster. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster).
        
    2.  Connect to Hive SQL through Beeline.
        
        ```
        beeline -u jdbc:hive2://<primary node name>:10000
        ```
        
    3.  Execute the following statements to initialize data and create test data.
        
        ```
        --Create database and table
        create database db_a;
        create table db_a.table1(
        col1 string,
        col2 string,
        col3 string
        );
        create table db_a.table2(
        col1 string,
        col2 string,
        col3 string
        );
        
        create database db_b;
        create table db_b.table1(
        col1 string,
        col2 string,
        col3 string
        );
        
        --Initialize test data
        --db_a.table1
        insert overwrite table db_a.table1 values('1','aliyun','emrA1'),('2','aliyun','dlfA1');
        
        --db_a.table2
        insert overwrite table db_a.table2 values('1','aliyun','emrA2'),('2','aliyun','dlfA2');
        
        --db_b.table1
        insert overwrite table db_b.table1 values('1','aliyun','emrB1'),('2','aliyun','dlfB1');
        ```
        
3.  Initialize the RAM users required for each role login.
    
    -   Create a new RAM user for Super Administrator: dlf\_data\_admin.
        
    -   Create a new RAM user for Business A Data Administrator: dlf\_dba\_admin.
        
    -   Create a new RAM user for Business A Data Developer: dlf\_dba\_dev.
        
    -   Create a new RAM user for Business A Data Analyst: dlf\_dba\_analyst.
        
4.  Enable data permission control.
    
    Complete the following two steps to officially enable data permission control for the EMR cluster:
    
    1.  Enable data permission control in the EMR cluster. For more information, see [DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth).
        
    2.  Enable permission control for the Catalog in DLF. For more information, see [Configure permissions](/help/en/dlf/dlf-1-0/user-guide/configure-permissions).
        
        **Note**
        
        For production use, it is recommended to enable LDAP authentication to ensure that user identities are legally verified. The following example is a simple explanation of permission issues and does not enable LDAP authentication, so no password is required when connecting to Beeline.
        
5.  Grant the Super Administrator DLF console authorization permissions and access permissions for all data.
    
    1.  Log on to the [Data Lake Formation Console](https://dlf.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Data Permission** > **Role**.
        
    3.  In the **admin** role, add the user dlf\_data\_admin. Then, dlf\_data\_admin has the administrator permissions to manage all data in DLF. You can configure relevant data permissions for any user.
        
    4.  If dlf\_data\_admin needs to configure data permissions for RAM users in the DLF console, you must add permission policies for dlf\_data\_admin in the [RAM Console](https://ram.console.alibabacloud.com/): **AliyunDLFFullAccess**, **AliyunRAMReadOnlyAccess**.
        
    5.  Log on to the EMR cluster, connect to Hive by using dlf\_data\_admin, and execute HiveSQL.
        
        ```
        beeline -u jdbc:hive2://<primary node name>:10000 -n dlf_data_admin
        ```
        
        ```
        select * from db_a.table1;
        select * from db_b.table1;
        ```
        
        Once the above SQL queries are successful, and the user dlf\_data\_admin has access permissions to all databases and data tables.
        
6.  Grant the Business A Data Administrator DLF console authorization permissions for the db\_a database and access permissions for the db\_a database data.
    
    1.  Switch the Alibaba Cloud website login user to the dlf\_data\_admin user, and use this account to authorize data for other users.
        
    2.  Log on to the [Data Lake Formation Console](https://dlf.console.alibabacloud.com).
        
    3.  In the left-side navigation pane, choose **Data Permission** > **Data Permissions**, and click **Add Permission**.
        
    4.  Enter the following information:
        
        -   **Principal Type**: **RAM User/Role**.
            
        -   **Choose Principal**: dlf\_dba\_admin.
            
        -   **Resources**: **Resource Authorization**.
            
        -   **SelectCatalog List**: catalog\_test.
            
        -   **Enter an item.Database**: db\_a.
            
        -   **Permissions**:
            
            -   **Database**\-**Data Permission**: **ALL**.
                
            -   **Database**\-**Granted Permission**: **ALL**.
                
            -   **All Objects in Database**\-**Data Permission**: **ALL**.
                
            -   **All Objects in Database**\-**Granted Permission**: **ALL**.
                
    5.  Click **OK** to save the authorization information.
        
    6.  If dlf\_dba\_admin needs to configure data permissions for RAM users in the DLF console, you must add permission policies for dlf\_dba\_admin in the [RAM Console](https://ram.console.alibabacloud.com/): **Aliyundlffullaccess, Aliyunramreadonlyaccess**.
        
    7.  Log on to the EMR cluster, connect to Hive by using dlf\_dba\_admin, and execute HiveSQL.
        
        ```
        beeline -u jdbc:hive2://<primary node name>:10000 -n dlf_dba_admin
        ```
        
        ```
        select * from db_a.table1;
        select * from db_b.table1;
        ```
        
        Once the first SQL query is successful, the user dlf\_dba\_admin has all permissions of the db\_a database and all resources within the db\_a database.
        
        Once the second SQL query fails, the user dlf\_dba\_admin does not have permissions of the db\_a database and all resources within the db\_a database.
        
7.  Grant the Business A Data Developer query and modification permissions for the db\_a database data.
    
    1.  Switch the Alibaba Cloud website login user to the dlf\_dba\_admin user, and use this account to authorize data for other users.
        
    2.  Log on to the [Data Lake Formation Console](https://dlf.console.alibabacloud.com).
        
    3.  In the left-side navigation pane, choose **Data Permission**\>**Data Permissions**, and click **Add Permission**.
        
    4.  Enter the following information:
        
        -   **Principal Type**: **RAM User/role**.
            
        -   **Choose Principal**: dlf\_dba\_dev.
            
        -   **Resources**: **Resource Authorization**.
            
        -   **SelectCatalog List**: catalog\_test.
            
        -   **Enter an item.Database**: db\_a.
            
        -   **Permissions**:
            
            -   **Database-Data Permission**: **ALL**.
                
            -   **Database**\-**Granted Permission**: **ALL**.
                
            -   **All Objects in Database**\-**Data Permission**: **ALL**.
                
            -   **All Objects in Database**\-**Granted Permission**: **ALL**.
                
    5.  Click **OK** to save the authorization information.
        
    6.  Log on to the EMR cluster, connect to Hive by using dlf\_dba\_dev, and execute HiveSQL.
        
        ```
        beeline -u jdbc:hive2://<primary node name>:10000 -n dlf_dba_dev
        ```
        
        ```
        select * from db_a.table1;
        insert into table db_a.table1 values('3','aliyun','emrA1'),('4','aliyun','dlfA1');
        
        select * from db_b.table1;
        insert into table db_b.table1 values('3','aliyun','emrA1'),('4','aliyun','dlfA1');
        ```
        
        Once the first and second SQL queries are successful, the user dlf\_dba\_dev has query and modification permissions for the db\_a database and all resources within the db\_a database.
        
        Once the third and fourth SQL queries fail, the user dlf\_dba\_dev does not have query and modification permissions for the db\_b database and all resources within the db\_a database.
        
8.  Grant the Business A Data Analyst access permissions for table1(col1, col2) in the db\_a database.
    
    1.  On the Alibaba Cloud website, log in as the dlf\_dba\_admin user, and use this account to authorize data for other users.
        
    2.  Log on to the [Data Lake Formation Console](https://dlf.console.alibabacloud.com).
        
    3.  In the left-side navigation pane, choose **Data Permission>Data Permissions**, and click **Add Permission**.
        
    4.  Enter the following information:
        
        -   **Principal Type**: **RAM User/role**.
            
        -   **Choose Principal**: dlf\_dba\_analyst.
            
        -   **Resources**: **Resource Authorization**.
            
        -   **Resource Type**: **Column**.
            
        -   **SelectCatalog List**: catalog\_test.
            
        -   **SelectDatabase**: db\_a.
            
        -   **SelectTable**: table1.
            
        -   **Permissions**:
            
            -   **DataColumn**\-**Data Permission**: **ALL**.
                
    5.  Click **OK** to save the authorization information.
        
    6.  Log on to the EMR cluster, connect to Hive by using dlf\_dba\_analyst, and execute HiveSQL.
        
        ```
        beeline -u jdbc:hive2://<primary node name>:10000 -n dlf_dba_analyst
        ```
        
        ```
        select * from db_a.table1;
        select col1,col2 from db_a.table1;
        insert into table db_a.table1 values('5','aliyun','emrA1'),('6','aliyun','dlfA1');
        select * from db_b.table1;
        ```
        
        Once the second SQL query is successful, and the user dlf\_dba\_dev has query permissions for db\_a.table1(col1, col2).
        
        Once the first SQL query fails, and the user dlf\_dba\_dev does not have query permissions for db\_a.table1(col3).
        
        Once the third SQL query fails, and the user dlf\_dba\_dev does not have modification permissions for db\_a.table1 data.
        
        Once the fourth SQL query fails, and the user dlf\_dba\_dev does not have query permissions for the db\_b database data.
