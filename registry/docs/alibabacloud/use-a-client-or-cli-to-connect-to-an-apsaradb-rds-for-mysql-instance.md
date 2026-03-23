After you create an ApsaraDB RDS for MySQL instance and complete the required configurations, such as account creation and whitelist setting, you can connect to the RDS instance by using a client or the CLI. This topic describes how to connect to an RDS instance by using a client or the CLI through the Internet or internal networks. This topic also provides describes how to handle common errors related to connection failures.

## Prerequisites

-   [An RDS instance is created, and a database and an account are created for the RDS instance](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases).
    
-   [An IP address whitelist is configured](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb) for the RDS instance.
    

## Suggestions

-   To reduce latencies and improve stability, we recommend that you connect an Elastic Compute Service (ECS) instance to the RDS instance over an internal network. **If you want to connect the instance over an internal network, make sure that the following conditions are met:**
    
    The ECS instance and RDS instance are created by using the same Alibaba Cloud account and reside in the same region and virtual private cloud (VPC). The private IP address of the ECS instance is [added to an IP address whitelist of the RDS instance](/help/en/rds/configure-a-whitelist#concept-rpj-hs4-ydb).
    
    **Note**
    
    You can obtain the private IP address of the ECS instance on the [Instances](https://ecs.console.alibabacloud.com/#/server/region) page.
    
    ![公私网IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8551935361/p298428.png)
    
-   If you want to connect to the RDS instance over the Internet, we recommend that you use the instance endpoint.
    
    **Note**
    
    -   Run the `curl ipinfo.io/ip` or `curl ifconfig.me` command to obtain the public IP address of the on-premises device. We recommend that you run the `curl ipinfo.io/ip` command.
        
    -   The public IP address may change during the instance upgrade or specification change. If the public IP address of the on-premises device is added to an IP address whitelist but the connection still fails, you can resolve the issue based on [Why am I unable to connect to my ApsaraDB RDS for MySQL instance or ApsaraDB RDS for MariaDB instance from a local server over the Internet?](/help/en/rds/support/why-am-i-unable-to-connect-to-my-apsaradb-rds-for-mysql-or-apsaradb-rds-for-mariadb-instance-from-a-local-server-over-the-internet#concept-qfv-2g5-42b)
        
    

## **Procedure**

### Use the CLI to connect to an RDS instance

The following example describes how to connect to an RDS instance from a server that runs Linux. You must install MySQL on the server before the connection. You can run the following commands to install MySQL:

-   If you use a CentOS operating system, run the `sudo yum install mysql command`.
    
-   If you use an Ubuntu operating system, run the `sudo apt-get update` command and then the `sudo apt install mysql-server` command.
    

1.  Log on to the server from which you want to connect to the RDS instance. For example, the server can be an ECS instance or an on-premises device.
    
    **Note**
    
    For more information about how to log on to an ECS instance, see the "**Connect to an instance**" section in [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#section-fqu-flq-xvv).
    
2.  Run the connection command:
    
    ```
    mysql -hEndpoint -PPort -uUsername -pPassword
    ```
    
    **Note**
    
    -   You can enter the password after you run the command.
        
    -   The uppercase letter **P** specifies the port number, and the lowercase letter **p** specifies the password.
        
    
    -   Endpoint and port number: Enter the endpoint and port number that are used to connect to the RDS instance.
        
        **Scenario**
        
        **Endpoint to be obtained**
        
        **Method to obtain the endpoint**
        
        You want to connect to the RDS instance from an ECS instance. The ECS instance and the RDS instance meet the conditions for communication over an internal network.
        
        Internal endpoint of the RDS instance
        
        1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
            
        2.  In the Basic Information section of the page that appears, click **View Details** to the right of the Network Type parameter to view the endpoint and port number that are used to connect to the RDS instance. ![查看连接详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8551935361/p313371.png)
            
        
        **Note**
        
        -   The public endpoint is displayed only after a public endpoint is applied for the RDS instance by clicking **Apply for Public Endpoint**.
            
        -   You can modify the read/write endpoint of an RDS cluster in the **Cluster Read/Write Connection** section and modify the read-only endpoint of the RDS cluster in the **Cluster Read-only Connection** section.
            
        
        You want to connect to the RDS instance from an ECS instance. The ECS instance and the RDS instance do not meet the conditions for communication over an internal network.
        
        Public endpoint of the RDS instance
        
        You want to connect to the RDS instance from an on-premises device.
        
    -   Username and password: You can obtain the username and password of the account that is used to connect to the RDS instance from the **Accounts** page of the instance details page.
        
    
    Example command![示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8551935361/p314298.png)
    
    Connection established![连接成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8551935361/p314356.png)
    
    **Note**
    
    If connection errors occur, you can resolve the errors by following the instructions provided in [Common connection errors](#section-fbz-ym5-vdb).
    

### Use MySQL Workbench to connect to an RDS instance

You can use a general-purpose MySQL client to connect to an RDS instance. The following example describes how to use MySQL Workbench 8.0.29 to connect to an RDS instance. If you use a different client, the connection operations are similar.

1.  Install MySQL Workbench. For more information, visit the [MySQL Workbench download page](https://downloads.mysql.com/archives/workbench/).
    
2.  Start MySQL Workbench and choose **Database** > **Connect to Database**.
    
3.  Enter the connection information and click **OK**.
    
    ![连接界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411491661/p478554.png)
    
    -   **Hostname** and **Port**: Enter the endpoint and port number that are used to connect to the RDS instance.
        
        **Scenario**
        
        **Endpoint to be obtained**
        
        **Method to obtain the endpoint**
        
        You want to connect to the RDS instance from an ECS instance. The ECS instance and the RDS instance meet the conditions for communication over an internal network.
        
        Internal endpoint of the RDS instance
        
        1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
            
        2.  In the Basic Information section of the page that appears, click **View Details** to the right of the Network Type parameter to view the endpoint and port number that are used to connect to the RDS instance. ![查看连接详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8551935361/p313371.png)
            
        
        **Note**
        
        -   The public endpoint is displayed only after a public endpoint is applied for the RDS instance by clicking **Apply for Public Endpoint**.
            
        -   You can modify the read/write endpoint of an RDS cluster in the **Cluster Read/Write Connection** section and modify the read-only endpoint of the RDS cluster in the **Cluster Read-only Connection** section.
            
        
        You want to connect to the RDS instance from an ECS instance. The ECS instance and the RDS instance do not meet the conditions for communication over an internal network.
        
        Public endpoint of the RDS instance
        
        You want to connect to the RDS instance from an on-premises device.
        
    -   **Username** and **Password**: You can obtain the username and password of the account that is used to connect to the RDS instance from the **Accounts** page of the instance details page. .
        
    

## Use Navicat to connect to an RDS instance

1.  Start the Navicat client.
    
2.  In the toolbar, click **Connection** and select the type of the database to be connected.
    
    **Note**
    
    If your Navicat client is outdated, **Alibaba Cloud** is not displayed. You can select a database type such as **MySQL** or **PostgreSQL**.
    
    ![创建连接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2701378851/p88323.png)
    
3.  Enter information about the RDS instance to which you want to connect. The following table describes the required parameters.
    
    ![连接设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2701378851/p88327.png)
    
    **Parameter**
    
    **Description**
    
    **Connection Name**
    
    Enter a custom name for the connection.
    
    **Host**
    
    Enter the [internal or public endpoint](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb) of the RDS instance.
    
    -   If your client is deployed on an Elastic Compute Service (ECS) instance and the ECS instance is created by using the same Alibaba Cloud account and resides in the same region and virtual private cloud (VPC) as the RDS instance, use the internal endpoint.
        
    -   In other situations, use the public endpoint.
        
    
    **Port**
    
    Enter the [internal or public port](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance) of the RDS instance. For example, the default port of an ApsaraDB RDS for MySQL instance is 3306.
    
    **User Name**
    
    Enter the username of the account that is used to connect to the RDS instance.
    
    **Password**
    
    The password of the account that is used to connect to the RDS instance.
    
4.  Click **OK**.
    
    **Note**
    
    If the [enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-isolation-mode-of-an-apsaradb-rds-for-mysql-instance-to-the-enhanced-whitelist-mode) is enabled for your RDS instance and you want to connect your device to the instance over the Internet, you must add the public IP address of the device to the **IP address whitelist of the classic network type**.
    
    ![连接成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3701378851/p88329.png)
    

## **Cross-region or cross-account connections between an ECS instance and an RDS instance**

-   **Internet-based connection**: You can use the [public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance) of the RDS instance to establish a cross-region or cross-account Internet-based connection to the RDS instance. You are not charged for the inbound and outbound Internet traffic generated on the RDS instance.
    
-   **Internal network-based connection**: If the ECS instance and the RDS instance reside in different regions or within different Alibaba Cloud accounts, you cannot connect the instances over an internal network. VPCs are isolated from each other. However, you can use VPC peering connections or a Cloud Enterprise Network (CEN) instance to connect two different VPCs. This way, the ECS instance can connect to the RDS instance across regions or Alibaba Cloud accounts.
    
    -   [VPC peering connection](/help/en/vpc/vpc-peer-to-peer-connection): enables communication between VPCs across regions or Alibaba Cloud accounts at low costs. However, a VPC peering connection is relatively complex to configure. This method is suitable for simple scenarios in which a small number of VPCs need to be connected.
        
    -   [CEN instance](/help/en/cen/getting-started/inter-region-vpc-interworking): enables communication between VPCs across regions or Alibaba Cloud accounts at high costs. However, a CEN instance is simple to configure. This method is suitable for complex scenarios in which a large number of VPCs need to be connected.
        

## Common connection errors

mysql command not found

This error occurs because MySQL is not installed. Run the following commands to install MySQL:

-   If you use a CentOS operating system, run the `sudo yum install mysql` command.
    
-   If you use an Ubuntu operating system, run the `sudo apt-get update` command and then the `sudo apt install mysql-server` command.
    

SSL connection error: SSL is required but the server doesn't support it

You are using specific versions of MySQL Workbench. In these versions, standard TCP/IP connections require SSL encryption. However, the connected server does not support SSL encryption. In this case, you can download the version of MySQL Workbench that is described in this section to establish regular connections.

Error code 10060: Can't connect to MySQL server on 'rm-bpxxx.mysql.rds.aliyuncs.com'(10060)

-   In most cases, this error occurs because the IP address of your client is not added to the whitelist of the RDS instance
    
    Solution: [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb) for your RDS instance and check whether the IP address of your client is added to the whitelist. If you use a local client to connect to the RDS instance, you can run the `curl ipinfo.io/ip` command to query the public IP address of the client and then add the public IP address to the whitelist.
    
-   In a few cases, this error occurs because you connect to the RDS instance by using its internal endpoint but the RDS instance and the ECS instance do not meet the [conditions for connections over an internal network](#section-mpd-j8d-eys).
    
    Solution: [Apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance) for the RDS instance and use it to connect to the RDS instance.
    

Error code 113: Can't connect to MySQL server on 'rm-bpxxx.mysql.rds.aliyuncs.com'(113)

This error occurs because route conflicts occur. For more information, see [What do I do if I am unable to connect to an ApsaraDB RDS instance and the "Destination Host Unreachable" error message is displayed when I ping the internal endpoint of the instance?](/help/en/rds/support/destination-host-unreachable)

Cannot Connect to Database Server

-   In most cases, this error occurs because the IP address whitelists that you configure are inappropriate. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).
    
-   In a few cases, this error occurs because you connect to the RDS instance by using its internal endpoint but the RDS instance and the ECS instance do not meet the [conditions for connections over an internal network](#section-mpd-j8d-eys). In this case, [apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance) for the RDS instance and use it to connect to the RDS instance.
    

Your connection attempt failed for user 'xx" to the MySQL server

-   In most cases, this error occurs because the IP address whitelists that you configure are inappropriate. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).
    
-   In a few cases, this error occurs because you connect to the RDS instance by using its internal endpoint but the RDS instance and the ECS instance do not meet the [conditions for connections over an internal network](#section-mpd-j8d-eys). In this case, [apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance) for the RDS instance and use it to connect to the RDS instance.
    

The "Destination Host Unreachable" error message reported when you ping the internal endpoint of the RDS instance

This error occurs because route conflicts occur. For more information, see [What do I do if I am unable to connect to an ApsaraDB RDS instance and the "Destination Host Unreachable" error message is displayed when I ping the internal endpoint of the instance?](/help/en/rds/support/destination-host-unreachable)

Access denied for user 'xxx'@'xxx'(using password:YES)

This error occurs because the username and password that you entered are incorrect. You can obtain the correct username and password from the **Accounts** page of the instance details page.

Unknown MySQL server host 'xxx'(11001)

This error occurs because the endpoint that you entered is invalid. Valid endpoints are in the rm-xxxxxx.mysql.rds.aliyuncs.com format.

## FAQ

-   Do RDS instances support elastic IP addresses (EIPs)?
    
    No, RDS instances do not support EIPs.
    
-   How do I resolve the issue that I fail to use Telnet to connect my computer to an RDS instance?
    
    If you fail to use Telnet to connect your computer to an RDS instance, you can check the following items:
    
    -   Whether the service port of the RDS instance is correct and accessible over the Internet.
        
    -   Whether the security group or firewall rule of the RDS instance allows the access requests from the IP address of your computer.
        
    -   Whether the connection parameters, such as the hostname and port number, are correctly configured.
        
    -   Whether the firewall rule of your computer blocks the port that is used to connect to the RDS instance.
        
    -   Whether the issue is a Telnet-specific issue. You can use other methods, such as the `mysql` client or database management tool, to connect to the RDS instance for the check.
        
-   How do I allow a user to connect to my RDS for MySQL database?
    
    Perform the following steps to allow a user to connect to your RDS for MySQL database:
    
    1.  [Create a standard account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) and grant it permissions to access the RDS for MySQL instance.
        
    2.  [Apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance) for the instance.
        
    3.  [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance) for the instance. If the user uses an ECS instance to connect to your RDS instance, add the internal IP address or security group ID of the ECS instance to the whitelist. If the user uses a local MySQL client to connect to your RDS instance, add the IP address of the client to the whitelist.
        
    4.  Provide the connection information, including the public endpoint of your instance, the database name, the created database account, and the password of the account, to the user.
        
    5.  Let the user to [use the CLI to connect to your database](#129bf4824cyon).
        

## References

-   For more information about how to troubleshoot connection errors, see [What do I do if I fail to connect to an ApsaraDB RDS instance?](/help/en/rds/support/what-do-i-do-if-i-fail-to-connect-to-an-apsaradb-rds-instance#concept-cqq-x1d-sfb)
    
-   For more information about how to connect to an RDS instance in a more convenient and efficient manner, see [Use DMS to log on to an ApsaraDB RDS for MySQL instance](/help/en/doc-detail/284465.html#concept-2099025).
    
-   For more information about how to connect to an RDS instance that runs a different database engine, see the following topics:
    
    -   [Connect to an ApsaraDB RDS for SQL Server instance](/help/en/rds/connect-to-sql-server-instance#concept-y5f-rj1-wdb)
        
    -   [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance-1#concept-stt-3hg-wdb)
        
    -   [Connect to an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/connect-to-an-apsaradb-rds-for-mariadb-instance#concept-n1v-qpf-vdb)
