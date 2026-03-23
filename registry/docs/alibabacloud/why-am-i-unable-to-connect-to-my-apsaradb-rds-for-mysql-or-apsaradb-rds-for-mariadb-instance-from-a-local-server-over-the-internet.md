Before you connect to your RDS instance from a local server over the Internet, you must add the public IP address of the local server to an IP address whitelist of the RDS instance. This applies if the RDS instance runs MySQL or MariaDB. This topic describes how to obtain the public IP address of the local server.

## Problem description

The public IP address of the local server is obtained and added to an IP address whitelist of the RDS instance. However, the connection fails.

The possible cause of the failure is that the public IP address is invalid or dynamically changes.

**Note**

The solution that is provided in this topic is not applicable to scenarios in which you connect to the RDS instance from an Alibaba Cloud Elastic Compute Service (ECS) instance. If you want to connect to the RDS instance from an ECS instance, you can obtain the public and private IP addresses of the ECS instance in the ECS console.

## Usage notes

If the public IP address of the local server changes and the connection that is established between the local server and your RDS instance is used in the production environment, we recommend that you connect to the RDS instance over an internal network or add an appropriate public CIDR block of the local server to the IP address whitelist of the RDS instance. This way, the RDS instance remains connected even if the public IP address of the local server changes.

## Obtain the public IP address of the local server

1.  **Add the IP address to an IP address whitelist of the RDS instance.**
    
    Add the public CIDR block of the company or the entry 0.0.0.0/0 to an [IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance) of the RDS instance that runs MySQL or MariaDB.
    
    **Warning**
    
    The entry 0.0.0.0/0 indicates that all devices can access the RDS instance. This may cause potential security risks. Proceed with caution. If the entry 0.0.0.0/0 is added, we recommend that you immediately delete the entry when it is no longer required.
    
2.  **Obtain the public IP address** by using one of the following methods:
    
    -   **Method 1**: Run the `curl ipinfo.io/ip` command to query the public IP address of the local client. We recommend that you use this method.
        
        **Note**
        
        If the preceding command fails, you can run the `curl ifconfig.me` command to query the public IP address.
        
    -   **Method 2**: Execute SQL statements.
        
        1.  [Use a database client or the CLI to connect to the RDS instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance) from the local server.
            
            ```
            mysql -hEndpoint of the RDS instance -uUsername of the account -pPassword of the account -P3306
            ```
            
            ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1750937951/p33319.jpg)
            
        2.  Execute the following statement to obtain the actual egress IP address.
            
            ```
            show processlist
            ```
            
            The value of **Host** in the row in which **show processlist** is displayed is the actual egress IP address of the local server.
            
            ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1750937951/p33320.jpg)
            
3.  **Update the IP address whitelist.**
    
    1.  Delete the entry 0.0.0.0/0 from the IP address whitelist.
        
    2.  Add the public IP address that is obtained from Step 2 to the IP address whitelist.
        

## FAQ

-   I cannot connect to my RDS instance from a local server. How do I determine whether the connection fails because the public IP address of the local server dynamically changes?
    
    Add the entry 0.0.0.0/0 to an IP address whitelist of your RDS instance and wait for about 1 minute. Then, all devices are granted access to your RDS instance. Connect to your RDS instance from the local server. If your RDS instance can be connected, delete the entry 0.0.0.0/0 from the IP address whitelist and add the actual public IP address of the local server to the IP address whitelist. Then, connect to your RDS instance from the local server again. If your RDS instance cannot be connected, the public IP address that you added to the IP address whitelist is not the current public IP address of the local server. This indicates that the public IP address of the local server dynamically changes.
    
-   After I add the public IP address of a local server to an IP address whitelist of my RDS instance, why am I still unable to connect to my RDS instance from the local server?
    
    If the public IP address of the local server dynamically changes, add the current public IP address of the local server to an IP address whitelist of your RDS instance. The IP address whitelist requires about 1 minute to take effect.
    
    The connection failure may be caused by other issues. For more information, see [Troubleshoot failures in connecting to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-failures-in-connecting-to-an-apsaradb-rds-for-mysql-instance#concept-cqq-x1d-sfb).
