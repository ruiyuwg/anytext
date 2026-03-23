This topic describes how to register an Alibaba Cloud database instance with Data Management (DMS).

## Prerequisites

-   [The database instance that you want to register is supported by DMS](/help/en/dms/databases-supported-by-dms#section-00j-mwb-fsk).
    
-   You must be a database administrator (DBA) or a DMS administrator. For more information, see [View system roles](/help/en/dms/product-overview/view-system-roles#task-2121689).
    

## Precautions

-   To manage database instances in the DMS console, we recommend that you create a separate database account when you register a database instance. The following section describes requirements on database permissions:
    
    -   To manage all the databases on an instance, a DMS user must have permissions on all the databases.
        
    -   To manage one or more databases of an instance, a DMS user must have permissions on the specified databases.
        
    -   To insert, delete, modify, and query data in an instance and change table schemas, a DMS user must have the required DML permissions.
        
    -   To perform operations on objects, such as views, stored procedures, triggers, and functions on an instance, the database account must have the required permissions on these objects.
        
-   To prevent interference, do not add spaces or special characters before or after the information that you enter when you register a database instance.
    
-   In most cases, when you register a database instance with DMS, DMS prompts you to configure a whitelist. If no message is prompted and the database instance cannot be managed in DMS, you can [manually add DMS IP addresses and CIDR blocks to security settings](/help/en/dms/configure-an-ip-address-whitelist).
    

## Register a database instance

In this example, an ApsaraDB RDS for MySQL instance is registered with DMS.

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  In the left-side navigation pane of the Home page of the DMS console, click the ![add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8735290761/p466380.png) icon next to **Database Instances**.
    
    **Note**
    
    Alternatively, choose **Data Assets** > **Instances** in the top navigation bar. On the Instance List tab of the Instances page, click **New**.
    
3.  In the **Add Instance** dialog box, configure the parameters that are described in the following table.
    
    **Section**
    
    **Section**
    
    **Parameter**
    
    **Data Source**
    
    N/A
    
    The source of the database instance. By default, **Alibaba Cloud-MySQL** is selected. You can change the type of the database instance based on your business requirements.
    
    **Basic Information**
    
    **Database Type**
    
    The type of the database instance.
    
    **Note**
    
    This parameter is automatically refreshed after you configure the **Data Source** parameter.
    
    **Instance Region**
    
    The region in which the database instance resides.
    
    **Other primary accounts**
    
    This parameter is displayed if you click **Cross-Alibaba Cloud account instances**. The Alibaba Cloud account to which the database instance belongs.
    
    **Note**
    
    If the Alibaba Cloud account is not in the list, you can click **Add User** to add the Alibaba Cloud account that is used to purchase the database instance. For more information, see the [Add a user](/help/en/dms/manage-users#section-ekj-fgr-otn) section of the "Manage users" topic.
    
    **Connection Method**
    
    The method that you use to specify the information about the database instance. Valid values: **Instance ID** and **Connection string address**.
    
    **Instance ID** or **Connection String Address**
    
    The ID of the database instance or the connection string of the database instance.
    
    **Note**
    
    The connection string is in the following format: Internal network address:Port number. Example: rm-XXXXXXX.mysql.rds.aliyuncs.com:3306.
    
    **Access mode**
    
    Specifies whether to enable [security hosting](/help/en/dms/product-overview/security-hosting) for the database instance and how to log on to the database instance.
    
    If you enable security hosting for a database instance, you do not need to use a database account and password to log on to the database. This way, you can implement fine-grained control over the database instance.
    
    -   **Security Hosting - Automatic (Recommended)**: DMS automatically enables security hosting for the database instance and creates a database account and password for you to log on to DMS.
        
        **Note**
        
        -   This parameter appears only if you register an ApsaraDB RDS instance.
            
        -   You can view the account that is automatically created by DMS in the ApsaraDB RDS console. Modifying or deleting the account may affect the use of DMS. Proceed with caution.
            
        -   Accounts that are automatically created by DMS in ApsaraDB RDS instances, except in ApsaraDB RDS for PostgreSQL instances, do not have the permissions to create and manage database accounts.
            
        
    -   **Security Hosting - Manual**: DMS automatically enables security hosting for the database instance. However, you must manually enter the database account and password.
        
    -   **Security Hosting - KMS**: DMS automatically enables security hosting for the database instance. However, you must manually select the RDS credential that was created in Key Management Service (KMS) to log on to the database instance.
        
        **Note**
        
        This parameter appears only if you register an ApsaraDB RDS instance.
        
    -   **Disable Security Hosting (Not Recommended)**: If you disable security hosting for a database instance, you must use a database account and password every time you log on to the database if the logon session times out. This may affect the use of the database instance. We recommend that you do not select this option.
        
    
    **Advanced Feature Pack**
    
    Specifies the control mode in which the database instance is managed and whether to enable sensitive data protection for the database instance. Valid values:
    
    -   **Security Collaboration** and **Stable Change**: The [Security Collaboration](/help/en/dms/product-overview/control-modes) mode supports all features that are included in Stable Change mode and provides the DevOps feature to help you customize R&D processes and approval processes. The [Stable Change](/help/en/dms/product-overview/control-modes) mode provides solutions to allow databases to run more stably, such as lock-free changes and SQL review. You can select only one of the Security Collaboration and Stable Change modes.
        
        **Note**
        
        If you do not select the Security Collaboration or Stable Change mode, the database instance is managed in Flexible Management mode by default.
        
    -   **Sensitive Data Protection**: This feature allows you to control and mask sensitive data. You can enable the feature based on your business requirements. For more information, see [Enable the sensitive data protection feature](/help/en/dms/enable-the-sensitive-data-protection-feature#multiTask8447).
        
    
    **Security Rules**
    
    The parameter appears if you set the Advanced Feature Pack parameter to Security Collaboration.
    
    You can select the default or [custom security rules](/help/en/dms/manage-security-rules#multiTask1249) to implement fine-grained control over the database.
    
    **Classification template**
    
    This [Classification template](/help/en/dms/manage-dms-classification-and-grading-templates#task-2263894) parameter appears if you set the **Advanced Feature Pack** parameter to **Sensitive Data Protection**.
    
    You can bind a classification and grading template to an instance to identify whether the fields in databases and tables in the instance comply with the identification rules of the template. If the fields comply with the identification rules, the fields are labeled for classification and grading to protect the fields with high sensitivity levels.
    
    **Advanced Information**
    
    **Environment Type**
    
    The [type of the environment](/help/en/dms/change-the-environment-type-of-an-instance#section-j1y-izg-x19) in which the database instance is deployed.
    
    **Instance Name**
    
    The name that you specify for the database instance. This parameter cannot be modified if you select the **Automatically Synchronize Instance Name** option.
    
    **Note**
    
    If you register an Alibaba Cloud database instance for the first time, the name of the Alibaba Cloud database instance is synchronized to DMS. DMS does not synchronize the name if the Alibaba Cloud database instance is not registered for the first time. You can [modify database instances](/help/en/dms/modify-database-instances#multiTask2593) in the DMS console.
    
    **Lock-free Schema Change**
    
    Specifies whether to [enable the lock-free schema change feature](/help/en/dms/enable-the-lock-free-schema-change-feature#task-2058290). Valid values: **Enable (DMS OnlineDDL First)**, **Enable (MySQL Native OnlineDDL First)**, and **Close**.
    
    **Note**
    
    This parameter appears only for a MySQL database instance.
    
    **Enable SSL**
    
    **Note**
    
    This parameter appears only for a MySQL or Redis database instance.
    
    Specifies whether to allow DMS to connect to the database instance by using SSL connections. By default, DMS does not connect to the database instance by using SSL connections.
    
    If you want to use SSL connections to connect to the database instance, set this parameter to **Enable** and make sure that the SSL encryption feature is enabled for the database instance.
    
    SSL encrypts network connections at the transport layer to improve the security and integrity of data in transmission. However, SSL increases the response time of network connections.
    
    **DBA**
    
    The DBA of the database instance. The DBA can grant permissions to users.
    
    **Query Timeout(s)**
    
    The timeout period for the execution of an SQL query statement. If the execution of an SQL query statement lasts longer than the specified timeout period, the execution of the statement is terminated to protect the database.
    
    **Export Timeout(s)**
    
    The timeout period for the execution of an SQL export statement. If the execution of an SQL export statement lasts longer than the specified timeout period, the execution of the statement is terminated to protect the database.
    
4.  After you configure the preceding parameters, click **Test Connection** in the lower-left corner.
    
    **Note**
    
    If the connection test fails, check the specified instance information based on the error message.
    
5.  If the connection test is passed, click **Submit**.
    
    After the preceding steps are performed, the Alibaba Cloud database instance is registered with DMS. You can view and manage your database instance in the instance list of the DMS console.
    

## **Related operations**

-   When you enable security hosting, the system automatically generates an account and a password. Assume that you use the automatically generated account and password to log on to DMS first, then you change to another logon method, and finally you want to change back to the first logon method. In this case, DMS resets the password of the auto-generated account.
    
-   You can access or register a database instance in DMS across Alibaba Cloud accounts. For more information, see [Use DMS across Alibaba Cloud accounts](/help/en/dms/use-dms-across-alibaba-cloud-accounts).
    
-   After you register a database instance with DMS, you can perform the following operations:
    
    -   Manage the database instance, such as creating databases, creating tables in a database, and querying and modifying the table data. For more information, see [Manage a database on the SQLConsole tab](/help/en/dms/manage-a-database-on-the-sqlconsole-tab).
        
    -   Change a large amount of data in a table without locking the table. You can perform this operation by using the lock-free DML feature of DMS. For more information, see [Perform lock-free DML operations](/help/en/dms/perform-lock-free-dml-operations).
        
    -   [Export data](/help/en/dms/export-data-1).
        

## FAQ

-   Q: When I register an Alibaba Cloud database instance with DMS, the following whitelist error message appears. How do I resolve this issue?
    
    ![设置白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5160590161/p195893.png)
    
    A: You can click **Configure Whitelist** in the message. The system automatically adds the IP address of the DMS server to the whitelist of the Alibaba Cloud database instance. If the IP address fails to be automatically added to the whitelist, you need to manually add it. For more information, see [Add DMS IP addresses and CIDR blocks to security settings](/help/en/dms/configure-an-ip-address-whitelist#multiTask2945).
    
-   Q: Does DMS support the Flexible Management mode?
    
    A: Yes, DMS supports the Flexible Management mode. If you do not set the Advanced Feature Pack parameter to Stable Change or Security Collaboration when you register a database instance with DMS, the database instance is managed in the Flexible Management mode by default.
    
-   Q: I have enabled the SSL/TSL encryption protocol for an ApsaraDB for Redis instance, but the following error message appears when I log on to the ApsaraDB for Redis instance in the DMS console. What do I do to resolve this issue?
    
    A: To resolve this issue, you can [modify database instances](/help/en/dms/modify-database-instances):
    
    1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    2.  On the Home page of the DMS console, choose **Database Instances** > **Instances Disconnected** in the left-side navigation pane. In the instance list that appears, right-click the ApsaraDB for Redis instance to which you want to log on and click **Edit**.
        
    3.  In the **Advanced Information** section of the Edit dialog box, set the **Enable SSL** parameter to **Enable**.
        
    4.  Click **Test Connectivity**.
        
    5.  After the connection test is passed, click **Save**. Then, the database instance is connected to DMS.
        
    
    For more information, see [FAQ about database logon](/help/en/dms/support/log-on-to-the-database).
