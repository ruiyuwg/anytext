This topic describes how to switch over workloads between primary and secondary ApsaraDB RDS for MariaDB instances. You can enable automatic primary/secondary switchovers for your database system. This way, if the primary RDS instance fails, the system automatically switches your workloads over to the secondary RDS instance. After a primary/secondary switchover, the secondary RDS instance is promoted to run as the new primary RDS instance, and the endpoint that is used to connect to your database system remains unchanged. Your application can use the endpoint to connect to the new primary RDS instance. Automatic primary/secondary switchovers are used to ensure high availability. You can also manually switch your workloads over between the primary and secondary RDS instances.

If you use RDS High-availability Edition, a secondary RDS instance is provided as a standby for the primary RDS instance of your database system. The data of the primary RDS instance is synchronized in real time to the secondary RDS instance. You can access only the primary RDS instance. You cannot access the secondary RDS instance.

If the primary RDS instance fails, your workloads are automatically switched over to the secondary RDS instance.

## Usage notes

During a switchover, your service may be interrupted. Make sure that your application is configured to automatically reconnect to the instance.

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the top navigation bar, select the region in which the RDS instance resides.
    
3.  Find the RDS instance and click the ID of the instance.
    
4.  In the left-side navigation pane, click **Service Availability**.
    
5.  In the Availability Information section of the page that appears, click **Switch Primary/Secondary Instance**.
    
6.  In the dialog box that appears, specify a switching time. Then, click **OK**.
    
    During a primary/secondary switchover, you cannot perform a number of operations. For example, you cannot manage databases and accounts or change the network type. We recommend that you perform a primary/secondary switchover during the planned maintenance window.
    
    **Note**
    
    If you want to change the maintenance window, perform the following operations:
    
    1.  Click **modify** to the right of the Switch Within Maintenance Window option.
        
    2.  In the Configuration Information section of the page that appears, select a maintenance window and click **Yes**.
        
    3.  Go to the Service Availability page, refresh the page, and continue with the procedure.
        
    

## FAQ

-   Do I need to manually switch my workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover?
    
    No, you do not need to manually switch your workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover. The data in the primary RDS instance is the same as the data in the secondary RDS instance. After a primary/secondary switchover, the secondary RDS instance serves as the new primary RDS instance. No additional operations are required.
    
-   Each time a primary/secondary switchover is performed, my RDS instance does not run as expected 10 minutes after the primary/secondary switchover is complete. What are the possible causes? How do I handle the issue?
    
    If an exception on your RDS instance triggers a primary/secondary switchover to ensure high availability, your application may fail to identify and respond to the changes to the connections. If no timeout periods are specified for socket connections, your application waits for the database to return the results. In most cases, your application is disconnected after hundreds of seconds. During this period, some connections to the database cannot work as expected, and a large number of SQL statements fail to be executed. To avoid invalid connections, we recommend that you configure the **connectTimeout** and **socketTimeout** parameters to prevent your application from waiting for a long period of time due to network errors. This reduces the time required to recover from failures.
    
    You must configure these parameters based on your workloads and usage modes. For online transactions, we recommend that you set **connectTimeout** to 1 to 2 seconds and **socketTimeout** to 60 to 90 seconds. This configuration is for reference only.
