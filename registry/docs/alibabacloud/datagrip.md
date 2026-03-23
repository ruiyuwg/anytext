DataGrip is a database IDE that supports connections to multiple databases from a single client. This topic describes how to connect DataGrip to a Hologres instance using the PostgreSQL driver.

## Prerequisites

Before you begin, make sure you have:

-   DataGrip installed. Download it from [jetbrains.com/datagrip](https://www.jetbrains.com/datagrip/). This topic uses DataGrip 2024.2.1 as an example.
    
-   A Hologres instance with a database created. See [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224) and [Create a database](/help/en/hologres/getting-started/create-a-database).
    
-   The public endpoint enabled for the instance. See [Instance details](/help/en/hologres/user-guide/instance-configurations#section-ldj-vsk-2to).
    

## Connect DataGrip to Hologres

1.  Open DataGrip. On the **Database Explorer** toolbar, click the ![创建连接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8464227461/p391923.png) icon to add a new data source.
    
2.  Select **Data Source** > **PostgreSQL**.
    
    ![Select PostgreSQL as the data source type](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0821996461/p391926.png)
    
3.  In the **Data Sources and Drivers** dialog, configure the following parameters. The URL field combines the Host, Port, and Database values:
    
    > If the `missing driver files` message appears, click **Download** to install the required driver files.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Name
    
    A display name for this connection
    
    —
    
    Host
    
    The public endpoint of the Hologres instance. In the [Hologres console](/help/en/hologres/user-guide/hologres-result-table#task-1997136), go to **Instance Details** > **Network Information**.
    
    `holodemo-cn-hangzhou.hologres.aliyuncs.com`
    
    Port
    
    The public port of the Hologres instance. Find it in **Instance Details** > **Network Information**.
    
    `80`
    
    Authentication
    
    Select **User & Password**.
    
    —
    
    User
    
    Your Alibaba Cloud AccessKey ID. Get it from the [AccessKey Management](https://ram.console.alibabacloud.com/profile/access-keys) page.
    
    —
    
    Password
    
    Your Alibaba Cloud AccessKey secret.
    
    —
    
    Database
    
    The name of the Hologres database to connect to. Find database names on the **Database Management** page in the Hologres console.
    
    `postgres`
    
    URL
    
    The connection URL generated automatically from the values above.
    
    `jdbc:postgresql://holodemo-cn-hangzhou.hologres.aliyuncs.com:80/postgres`
    
    ```
       jdbc:postgresql://holodemo-cn-hangzhou.hologres.aliyuncs.com:80/postgres
                         ^                                             ^  ^
                         |- Host                                  Port-|  |- Database
    ```
    
    ![Connection parameter configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0821996461/p391936.png)
    
4.  Click **Test Connection**. A success message confirms the connection is working.
    
    > For older versions of DataGrip, if the connection fails after driver installation, go to the **Options** tab, find the **Introspection** section, and select **Introspect using JDBC metadata**. Then retry the connection test. ![option选项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3431996461/p391964.png)
    
5.  Click **OK** to save the connection.
    

## What's next

After connecting DataGrip to Hologres, you can query and develop data. For DataGrip usage, see the [DataGrip documentation](https://www.jetbrains.com/help/datagrip/meet-the-product.html).

Common Hologres scenarios:

-   **Accelerating offline queries**: Query MaxCompute data directly through Hologres foreign tables. See [Accelerate queries of MaxCompute data using foreign tables](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070).
    
-   **Real-time data ingestion**: Write streaming data into Hologres sink tables. See [Hologres sink tables](/help/en/hologres/user-guide/hologres-result-table#task-1997136).
