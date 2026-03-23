Navicat is an application that lets you connect to multiple databases. You can use it to create, manage, and maintain databases. This topic uses Navicat for PostgreSQL as an example to describe how to connect to Hologres and perform data development.

## Prerequisites

-   Click [Navicat](https://www.navicat.com/en/products) to download and install the Navicat client.
    
-   Purchase a Hologres instance. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    

## Procedure

1.  Create a connection to Hologres.
    
    In the Navicat client, click **Connection** on the menu bar and select **PostgreSQL**.
    
2.  Configure the parameters in the **PostgreSQL-New Connection** dialog box.
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Connection Name
    
    A custom name for the connection.
    
    None
    
    Host
    
    The public endpoint of the Hologres instance.
    
    Go to the product page of the Hologres instance in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance). Obtain the host from the **Network Information** section.
    
    holodemo-cn-hangzhou.hologres.aliyuncs.com
    
    Port
    
    The public port of the Hologres instance.
    
    Go to the product page of the Hologres instance in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance). Obtain the port from the **Network Information** section.
    
    80
    
    Initial database
    
    The name of the Hologres database to which you want to connect.
    
    postgres
    
    Username
    
    The AccessKey ID of your Alibaba Cloud account.
    
    To obtain the AccessKey ID, go to the [AccessKey Management](https://ram.console.alibabacloud.com/profile/access-keys) page.
    
    None
    
    Password
    
    The AccessKey secret of your Alibaba Cloud account.
    
    None
    
    Test Connection
    
    Click **Test Connection**. If the **Connection Successful** dialog box appears, Navicat is connected to Hologres.
    
    None
    
3.  Click **OK**.
    
4.  Perform data development.
    
    After you connect Navicat to Hologres, you can perform data development. For more information, see [Navicat documentation](https://www.navicat.com/en/support/online-manual). Hologres is typically used in the following scenarios:
    
    -   Directly accelerate queries of offline data. For more information, see [Accelerate queries of MaxCompute data using foreign tables](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070).
        
    -   Write real-time data. For more information, see [Hologres sink tables](/help/en/hologres/user-guide/hologres-result-table#task-1997136).
