Storage-compute integrated instances are suitable for scenarios that require high query performance, such as Online Analytical Processing (OLAP) multidimensional analysis, high-concurrency queries, and real-time data analytics. This instance type stores data on cloud disks or local disks to ensure high data read and write efficiency. This topic describes how to create and use an EMR Serverless StarRocks storage-compute integrated instance with an Alibaba Cloud account.

## Prerequisites

-   Register an Alibaba Cloud account and complete identity verification.
    
-   If you are a Resource Access Management (RAM) user, grant the AliyunEMRStarRocksFullAccess system policy.
    
    **Note**
    
    The AliyunEMRStarRocksFullAccess system policy is required to create and manage StarRocks instances.
    

## **Precautions**

The runtime environment of the code is managed and configured by the owner of the environment.

## **Procedure**

### **Step 1: Create a storage-compute integrated StarRocks instance**

1.  Go to the EMR Serverless StarRocks instance list page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select the required region.
        
2.  On the **Instance List** page, click **Create Instance**.
    
3.  On the **E-MapReduce Serverless StarRocks** page, configure the instance parameters.
    
    **Configuration**
    
    **Example**
    
    **Description**
    
    **Product Type**
    
    Pay-as-you-go
    
    Select **Pay-as-you-go**. For billing details, see [Pay-as-you-go](/help/en/emr/emr-serverless-starrocks/product-overview/pay-as-you-go).
    
    **Region**
    
    China (Beijing)
    
    The physical location of the instance.
    
    **Important**
    
    You cannot change the region after the instance is created. Select the region with caution.
    
    **Network and Availability Zone**
    
    -   vpc\_Hangzhou/vpc-bp1f4epmkvncimpgs\*\*\*\*
        
    -   Zone I
        
    -   vsw\_i/vsw-bp1e2f5fhaplp0g6p\*\*\*\*
        
    
    Select a virtual private cloud (VPC), a zone, and the corresponding vSwitch.
    
    -   **Virtual private cloud**: A VPC is an isolated network environment that you define on Alibaba Cloud. You have full control over your VPC.
        
        Select an existing VPC, or click **Create a VPC** to go to the VPC console and create one. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
        
        **Note**
        
        -   When you create a VPC, the IPv4 CIDR block must be from one of the following private network segments defined in RFC 1918:
            
            -   `10.0.0.0/8` (10.0.0.0 - 10.255.255.255)
                
            -   `172.16.0.0/12` (172.16.0.0 - 172.31.255.255)
                
            -   `192.168.0.0/16` (192.168.0.0 - 192.168.255.255)
                
        -   If your Serverless StarRocks instance needs to access the Internet, for example, to import data or query foreign tables, make sure that its VPC has Internet access. You can deploy an Internet NAT gateway in the VPC and enable the SNAT feature. This allows the Serverless StarRocks instance to access Internet resources through the gateway. For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/vpc/user-guide/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
            
        
    -   **Zone**: The zone where the instance is located.
        
    -   **vSwitch**: A vSwitch is a basic network module of a VPC that connects different cloud resources.
        
        Select an existing vSwitch, or click **Create vSwitch** to go to the VPC console and create one. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    
    **Instance Type**
    
    Storage-compute integrated
    
    Suitable for scenarios that require high query performance, such as OLAP multidimensional analysis, high-concurrency queries, and real-time data analytics. This instance type stores data on cloud disks or local disks to ensure high data read and write efficiency.
    
    **Instance Edition**
    
    Standard Edition
    
    Supports **Basic Edition** and **Standard Edition**. For more information, see [Instance family descriptions](/help/en/emr/emr-serverless-starrocks/create-an-instance#section-u13-zhw-olf).
    
    **Note**
    
    Starter Edition is available only in the China (Beijing), China (Shanghai), China (Shenzhen), and China (Hangzhou) regions.
    
    **Kernel Version**
    
    3.3
    
    The community version number of StarRocks.
    
    **FE Specifications**
    
    -   Specification type: **Standard Specifications**
        
    -   Compute CU: 8 CU
        
    -   Data disk: PL1 ESSD,
        
    -   High availability: Enabled by default.
        
    -   Number of nodes: 3
        
    -   Load balancing: Built-in PrivateZone
        
    
    -   Specification Type: Different StarRocks **instance families** have different specification types for FE nodes.
        
        -   **Basic Edition**: Supports **Standard Specifications**.
            
        -   **Standard Edition**: Supports **Standard Specifications** and **Memory-optimized Specification**.
            
    -   **Compute CUs**: Select a compute unit (CU).
        
        Select CU specifications as needed. For more information about CU fees, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Data Disk**: Supports only PL1 ESSDs. The size of the data disk ranges from 100 GB to 65,000 GB in increments of 100 GB.
        
        For more information about cloud disks, see [ESSDs](/help/en/ecs/user-guide/essds).
        
    -   **HA**: Enabled by default. For the Standard Edition, if you enable high availability, the number of StarRocks frontend (FE) nodes increases from 1 to 3 to reduce the risk of failures.
        
        **Important**
        
        High availability is strongly recommended for production environments.
        
    -   **Number of Nodes**: The number of FE nodes. The value must be an odd number from 1 to 11.
        
    -   **Load balancing**: The following methods are supported.
        
        -   **Built-in PrivateZone**: Automatically distributes traffic using PrivateZone domain name resolution. This option incurs no additional costs and is suitable for lightweight scenarios or cost-sensitive environments.
            
            Suitable for non-production environments or services with low requirements for load balancing performance.
            
        -   **Load balancing SLB**: Provides high-performance load balancing by activating the SLB service. Recommended for production environments, especially for workloads that require high system performance and reliability.
            
            The feature that removes the FE leader from handling query traffic is available only after SLB is enabled.
            
            You need to enable the SLB service, which incurs additional fees. For more information, see [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/#concept-2240735).
            
    
    **BE Specifications**
    
    -   Specification type: **Standard Specifications**
        
    -   Compute CU: 8 CU
        
    -   Data disk: PL1 ESSD, 100 GB, 1
        
    -   Number of nodes: 3
        
    
    -   Specification type: The specification type of BE nodes varies depending on the StarRocks **instance family**.
        
        -   **Basic Edition**: Supports **Standard Specifications**.
            
        -   **Standard Edition**: Supports the following specifications.
            
            -   **Standard Specifications**: The default specifications. One CU is equal to 1 CPU core and 4 GiB of memory. Enterprise SSDs (ESSDs) are used for data storage.
                
            -   **Memory-optimized Specifications**: One CU is equal to 1 CPU core and 8 GiB of memory. This option is suitable for scenarios in which a large amount of memory resources are required, such as scenarios where complex queries are made or scenarios where high concurrency is required. ESSDs are used for data storage.
                
            -   **Network-enhanced Specifications**: One CU is equal to 1 CPU core and 4 GiB of memory. The network bandwidth is two or more times that of the standard specifications. This option is suitable for analysis of external tables that contain a large amount of data. ESSDs are used for data storage.
                
            -   **High-performance storage**: If you select this option, you must select the desired specifications based on your business requirements. This option is suitable for scenarios in which high storage I/O performance is required. Local SSDs are used for data storage.
                
            -   **High-specification Storage**: If you select this option, you must select the desired specifications based on your business requirements. Local HDDs are used for data storage. This option is suitable for scenarios in which a large volume of data needs to be stored and cost-effective storage is required, but high storage I/O performance is not required.
                
    -   **Compute CUs**: Select a computing unit (CU).
        
        Select the appropriate CU specifications based on your actual requirements. For more information about CU fees, see [Billing items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Data Disk**: Supports ESSD PL0, PL1 ESSD (recommended), PL2 ESSD, and PL3 ESSD. For more information, see [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds).
        
        The cache disk size ranges from 100 to 65,000 GB. The default number of cache disks is 1. The value ranges from 1 to 8, with a step size of 1.
        
        **Note**
        
        You can enter the required storage capacity, and the system automatically provides a default recommended configuration. If the disk capacity you select exceeds the recommended threshold, the system displays a prompt to help you make appropriate adjustments for optimal performance.
        
    -   **Number of Nodes**: The number of BE nodes. Valid range: 3 to 50.
        
    
    **Instance Name**
    
    Enter a custom instance name.
    
    The instance name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Administrator**
    
    admin
    
    The administrator username used to manage StarRocks. The default value is admin and cannot be changed.
    
    **Password** and **Confirm Password**
    
    Enter a custom password.
    
    The password for the built-in administrator, admin. You must record the password. The password is required when you manage and use the instance. If you forget the password, you can reset it. For more information, see [How to reset an instance password?](/help/en/emr/emr-serverless-starrocks/support/faq#04f836cb8ebn7)
    
    For more information about instance parameters, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).
    
4.  Select the Terms of Service, click **Create Instance**, and complete the payment as prompted.
    
    After the payment is complete, return to the instance list page to view the created instance. The instance is created when its **Status** changes to **Running**.
    

### **Step 2: Connect to the StarRocks instance**

1.  On the **Instance List** page, click **Connect** in the **Actions** column.
    
    You can also [connect to a StarRocks instance](/help/en/emr/emr-serverless-starrocks/instance-connection/) in other ways.
    
2.  Connect to the StarRocks instance.
    
    1.  On the **New Connection** tab, configure the following parameters.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5180993371/p751411.png)
        
        **Parameter**
        
        **Example**
        
        **Description**
        
        **Region**
        
        China (Hangzhou)
        
        Select the physical location of the created StarRocks instance.
        
        **Instance**
        
        StarRocks\_Serverless
        
        Select the name of the created StarRocks instance.
        
        **Connection Name**
        
        Connection\_Serverless
        
        Enter a custom connection name.
        
        The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
        
        **Username**
        
        Enter a value based on your actual needs.
        
        The default initial username is admin. You can use this username to connect or create other users as needed. For more information about how to create users, see [Manage Users and Data Authorization](/help/en/emr/emr-serverless-starrocks/manage-users-and-grant-permissions#task-2286650).
        
        **Password**
        
        Enter a value based on your requirements.
        
        The password that corresponds to the username created in the StarRocks instance.
        
    2.  Click **Test Network Connectivity**.
        
    3.  After the connection test is successful, click **OK**.
        
        On the **SQL Editor** page, you can execute SQL statements. For more information, see [Connect to a StarRocks instance using EMR StarRocks Manager](/help/en/emr/emr-serverless-starrocks/use-sql-editor-to-operate-a-starrocks-instance).
        

### **Step 3: Run SQL queries**

1.  On the **Querys** page of the **SQL Editor**, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5180993371/p709626.png) icon.
    
2.  In the **Create File** dialog box, click **Confirm**.
    
3.  In the new file, enter the following commands. Select all commands and click **Run**.
    
    ```
    /**Create a database**/
    CREATE DATABASE IF NOT EXISTS load_test;
    
    /**Use the database**/
    USE load_test;
    
    /**Create a table**/
    CREATE TABLE insert_wiki_edit
    (
        event_time DATETIME,
        channel VARCHAR(32) DEFAULT '',
        user VARCHAR(128) DEFAULT '',
        is_anonymous TINYINT DEFAULT '0',
        is_minor TINYINT DEFAULT '0',
        is_new TINYINT DEFAULT '0',
        is_robot TINYINT DEFAULT '0',
        is_unpatrolled TINYINT DEFAULT '0',
        delta INT SUM DEFAULT '0',
        added INT SUM DEFAULT '0',
        deleted INT SUM DEFAULT '0'
    )
    AGGREGATE KEY(event_time, channel, user, is_anonymous, is_minor, is_new, is_robot, is_unpatrolled)
    PARTITION BY RANGE(event_time)
    (
        PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),
        PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),
        PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),
        PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')
    )
    DISTRIBUTED BY HASH(user) BUCKETS 10
    PROPERTIES("replication_num" = "1");
    
    /**Insert data**/
    INSERT INTO insert_wiki_edit VALUES("2015-09-12 00:00:00","#en.wikipedia","GELongstreet",0,0,0,0,0,36,36,0),("2015-09-12 00:00:00","#ca.wikipedia","PereBot",0,1,0,1,0,17,17,0);
    
    /**Query data**/
    select * from insert_wiki_edit;
    ```
    

The following information is returned.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5180993371/p686273.png)

### **Step 4: Run a performance test**

For more information, see [Test Instructions](/help/en/emr/emr-serverless-starrocks/use-tpc-h-to-test-performance).

### **(Optional) Step 5: Release the instance**

**Important**

This operation deletes the instance and all its resources. This action cannot be undone. Proceed with caution.

When you no longer need an instance, release it to avoid incurring further charges.

1.  On the **Instance List** page, click **Release** in the Actions column of the instance.
    
2.  In the dialog box that appears, click **OK**.
    

## **References**

-   For more information about operations in the SQL Editor, see [SQL Editor](/help/en/emr/emr-serverless-starrocks/manage-connections-in-starrocks-manager).
    
-   To view the SQL query information of the current instance, analyze the SQL execution plan, and promptly diagnose and troubleshoot SQL issues, see [Diagnostics and analysis](/help/en/emr/emr-serverless-starrocks/diagnostics-and-analytics/).
    
-   To view and analyze all operations that occurred in the database, see [Audit log](/help/en/emr/emr-serverless-starrocks/manage-audit-logs).
    

## **Contact us**

If you have any questions, search for the DingTalk group ID **24010016636** and join the group to ask your questions.
