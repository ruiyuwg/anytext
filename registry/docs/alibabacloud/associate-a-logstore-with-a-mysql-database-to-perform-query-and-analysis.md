This topic describes how to associate a Logstore with a MySQL database to perform query and analysis. In this topic, the logs of a gaming company are used as an example.

## Prerequisites

-   Logs are collected and stored in a Logstore. For more information, see [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   Indexes are created for the fields in the logs. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    
-   A MySQL database is available. For more information, see [Create a database and an account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b).
    

## Background information

Company A is a gaming company that has the following types of data: user game logs and user metadata. Simple Log Service (SLS) can collect user game logs in real time. A user game log contains event information such as the operation, targets, health points (HP), magic points (MP), network, payment method, click location, status code, and user ID. User metadata includes user information such as the gender, registration time, and region. In most cases, user metadata is stored in a database because metadata cannot be displayed in logs. Company A wants to perform association analysis on the user game logs and user metadata to obtain an optimal operations plan.

The query and analysis engine of SLS lets you associate Logstores with external stores to perform query and analysis. External stores include MySQL databases and Object Storage Service (OSS) buckets. To analyze the metrics that are related to user properties, use the SQL JOIN syntax to associate the user game logs with the user metadata. You can also write analysis results to external stores to process the results.![背景信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9784688951/p41587.png)

## Procedure

1.  Create a user property table in the MySQL database.
    
    Create a data table named join\_meta to store user IDs, usernames, genders, ages, account balance, registration time, and registration regions.
    
    ```
    CREATE TABLE `join_meta` ( 
      `uid` int(11) NOT NULL DEFAULT '0', 
      `user_nick` text, 
      `gender` tinyint(1) DEFAULT NULL, 
      `age` int(11) DEFAULT NULL, 
      `register_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
      `balance` float DEFAULT NULL, 
      `region` text, PRIMARY KEY (`uid`) 
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8
    ```
    
2.  Create a whitelist for the MySQL database.
    
    ### **RDS for MySQL database**
    
    Add the CIDR blocks 100.104.0.0/16, 11.194.0.0/16, and 11.201.0.0/16 to the whitelist. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).
    
    ### **Self-managed MySQL database on an ECS instance**
    
    Add security group rules to allow access from the 100.104.0.0/16, 11.194.0.0/16, and 11.201.0.0/16 CIDR blocks. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
    ### **ADB for MySQL database**
    
    Add the CIDR blocks 100.104.0.0/16, 11.194.0.0/16, and 11.201.0.0/16 to the whitelist. For more information, see [Configure a whitelist](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-an-ip-address-whitelist-user-guide).
    
3.  Create an external store.
    
    1.  Log on to the server where the CLI is installed. Run the `touch` command to create the /home/shell/config.json configuration file. Add the following script to the config.json file. Replace the values of the `region`, `vpc-id`, `host`, `port`, `username`, `password`, `db`, and `table` parameters with your actual values.
        
        1.  **Parameter description**
            
            ### Example
            
            ```
            {
                "externalStoreName":"sls_join_meta_store",
                "storeType":"rds-vpc",
                "parameter":{
                    "region":"cn-qingdao",
                    "vpc-id":"vpc-m5eq4irc1pucp*******",
                    "host":"rm-bp1******rm76.mysql.rds.aliyuncs.com",
                    "port":"3306",
                    "username":"user",
                    "password":"****",
                    "db":"scmc",
                    "table":"join_meta"
                }
            }
            ```
            
            `**externalStoreName**`
            
            The name of the ExternalStore. The name must be in lowercase.
            
            `**storeType**`
            
            The type of the data source. Set this parameter to `rds-vpc`.
            
            `**region**`
            
            The details of the region are as follows:
            
            -   If you use an ApsaraDB RDS for MySQL database, set the region parameter to the region of the RDS instance.
                
            -   If you use an ADB for MySQL database, set the region parameter to the region of the ADB instance.
                
            -   If you use a self-managed MySQL database on an ECS instance in a VPC, set the region parameter to the region of the ECS instance.
                
            
            **Important**
            
            The RDS instance, ADB instance, or ECS instance must be in the same region as the Simple Log Service project.
            
            `**vpc-id**`
            
            The ID of the VPC.
            
            -   For an RDS for PostgreSQL instance in a virtual private cloud (VPC), set vpc-id to the VPC ID.
                
            -   If the database is an ADB PostgreSQL database in a virtual private cloud (VPC), set vpc-id to the ID of the VPC that contains the ADB instance.
                
            -   If the Alibaba Cloud Hologres database is in a virtual private cloud (VPC), set vpc-id to the VPC ID.
                
            
            `**host**`  
            
            The address of the database.
            
            > In a VPC, if the IP address of a database instance changes after you create an external table, access to the external table is affected. For example, this can happen if the database instance is migrated. This issue occurs even if you use an internal endpoint in the configuration. This occurs because when the external table is created, the backend automatically resolves the domain name to an IP address and saves the IP address in the backend configuration. The IP address that corresponds to the domain name is not automatically refreshed. In this case, you must update or re-create the external table.
            
            -   If you use an ApsaraDB RDS for MySQL database in a VPC, set the host parameter to the internal address of the RDS instance. The internal address can be an internal endpoint or a private IP address.
                
            -   If you use an ADB for MySQL database in a VPC, set the host parameter to the internal address of the ADB instance. The internal address can be an internal endpoint or a private IP address.
                
            -   If you use a self-managed MySQL database on an ECS instance in a VPC, set the host parameter to the private IP address of the ECS instance.
                
            -   If the database is accessible over the public network, set this parameter to the public endpoint or public IP address.
                
            
            `**port**`
            
            The details for the port number are as follows:
            
            -   If you use an ApsaraDB RDS for MySQL database, set the port parameter to the port number of the RDS instance.
                
            -   If you use an ADB for MySQL database, set the port parameter to the port number of the ADB instance.
                
            -   If you use a self-managed MySQL database on an ECS instance, set the port parameter to the service port of MySQL on the ECS instance.
                
            
            `**username**`
            
            The username of the database account.
            
            `**password**`
            
            The password of the database account.
            
            `**db**`
            
            The name of the database.
            
            `**table**`
            
            The name of the database table. The following formats are supported:
            
            1.  table\_name, such as test.
                
            2.  schema\_name.table\_name, such as public.test.
                
            
4.  Use the SQL JOIN syntax to perform association query and analysis.
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
        
    2.  In the Projects section, click the project you want.
        
    3.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
        
    4.  Execute a query statement.
        
        Specify the userid field in the logs and the uid field in the database table in the query statement.
        
        -   Analyze the distribution of active users by gender.
            
            ```
            * | 
            select 
              case gender when 1 then 'Male' else 'Female' end as gender, 
              count(1) as pv 
            from log l join sls_join_meta_store u on l.userid = u.uid 
            group by gender 
            order by pv desc
            ```
            
            ![关联分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1812470061/p41594.png)
            
        -   Analyze the user engagement in different regions.
            
            ```
            * | 
            select region , count(1) as pv 
            from log l join sls_join_meta_store u on l.userid = u.uid 
            group by region 
            order by pv desc
            ```
            
            ![活跃度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1812470061/p41596.png)
            
        -   Analyze the consumption trends of users by gender.
            
            ```
            * | 
            select 
              case gender when 1 then 'Male' else 'Female' end as gender, 
              sum(money) as money 
            from log l join sls_join_meta_store u on l.userid = u.uid 
            group by gender 
            order by money desc
            ```
            
        
5.  Save the query and analysis results to the MySQL database.
    
    1.  Create a data table named report in the MySQL database to store the number of page views (PVs) per minute.
        
        ```
        CREATE TABLE `report` ( 
          `minute` bigint(20) DEFAULT NULL, 
          `pv` bigint(20) DEFAULT NULL 
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8
        ```
        
    2.  Create an external store for the report table. For more information, see [Step 3](#step-0km-oaj-g0d).
        
    3.  On the query and analysis page of the Logstore, execute the following query statement to save the results to the report table. sls\_report\_store indicates the name of the external store.
        
        ```
        * | insert into sls_report_store select __time__- __time__ % 300 as min, count(1) as pv group by min
        ```
        
        After the results are saved, view the results in the MySQL database.![SQL结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9784688951/p41597.png)
