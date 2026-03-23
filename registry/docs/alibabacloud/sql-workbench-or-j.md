This topic describes how to connect Hologres to SQL Workbench/J for visual analytics.

## Prerequisites

-   SQL Workbench/J is installed.
    
-   A Hologres instance is provisioned. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    

## Background information

SQL Workbench/J is a free, cross-platform SQL query and analysis tool. You can use it to connect to Hologres through a PostgreSQL driver for data development.

## Procedure

1.  Start SQL Workbench/J and create a new connection to Hologres.
    
2.  Configure the connection information.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5231013061/p65594.png)
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Driver
    
    PostgreSQL
    
    Use the PostgreSQL driver to connect to Hologres.
    
    None
    
    URL
    
    `jdbc:postgresql://endpoint:port/database`
    
    -   Endpoint: The public endpoint of the Hologres instance.
        
        Go to the instance details page in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) and obtain the endpoint from the **Network Information** tab.
        
    -   Port: The public port of the Hologres instance.
        
        Go to the instance details page in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) and obtain the port from the **Network Information** tab.
        
    -   Database: The name of the Hologres database to which you want to connect.
        
    
    `jdbc:postgresql://holodemo-cn-hangzhou.aliyun.com:80/postgres`
    
    This example is for reference only. Replace the parameter values with your actual values.
    
    Username
    
    The AccessKey ID of your Alibaba Cloud account.
    
    To obtain the AccessKey ID, click [AccessKey Management](https://ram.console.alibabacloud.com/profile/access-keys).
    
    None
    
    Password
    
    The AccessKey secret of your Alibaba Cloud account.
    
    None
    
3.  Set extended properties.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9484903061/p65608.png)
    
    1.  Click **Extended Properties** and set SSL to true.
        
    2.  Click **OK**.
        
4.  Click **OK** to connect Hologres to SQL Workbench/J.
    
    You can now use SQL Workbench/J to query and analyze data in Hologres.
