After you register an E-MapReduce (EMR) cluster with DataWorks, you can configure the Kyuubi connection information for the EMR cluster. This lets you use a custom username and password to log on to Kyuubi to run related tasks. This topic describes how to configure the Kyuubi connection information for an EMR cluster in DataWorks.

## **Background information**

Apache Kyuubi is a distributed and multi-tenant gateway that provides query services, such as SQL queries, for data lake query engines such as Spark, Flink, and Trino. For more information, see [Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/).

## **Prerequisites**

-   The Kyuubi service is added to your EMR cluster. For more information, see [Add the Kyuubi service](/help/en/emr/emr-on-ecs/user-guide/add-services).
    
-   An EMR cluster is attached as a DataWorks computing resource. For more information, see Data Development (new version): Attach an EMR computing resource.
    
    **Note**
    
    You must complete the resource group initialization when you attach an EMR computing resource. Otherwise, you cannot find the Kyuubi configuration page.
    

## **Configure the Kyuubi connection information**

1.  Go to the Kyuubi configuration page.
    
    1.  Go to the SettingCenter page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the navigation pane on the left, click **Computing Resources**. The Computing Resources page appears.
        
    3.  Find the destination EMR cluster and click **Kyuubi Configuration** > **Edit Kyuubi Configuration** to open the Kyuubi configuration page.
        
2.  Configure the Kyuubi connection information.
    
    Select a connection mode:
    
    -   **Connection Information of Alibaba Cloud EMR Cluster**: If you select this connection mode, the **Default Access Identity** that you specified when you registered the EMR cluster is used to log on to Kyuubi. This mode is selected by default.
        
    -   **Custom Configuration Information**: If you select this connection mode, a custom username and password is used to log on to Kyuubi. The JDBC URL is in the `jdbc:hive2://host:port/;user=<logon username>;password=<logon password>` format.
        
        **Note**
        
        -   The first time you select **Custom Configuration Information**, the value of the JDBC URL parameter is automatically populated based on the account information that you configured when you registered the EMR cluster. You can modify the JDBC URL.
            
        -   If you select Pass Proxy User Information when you register the EMR cluster, the configuration information of `hive.server2.proxy.user` is appended to the JDBC URL after an EMR task runs in DataWorks. Concatenation rules:
            
            -   If the placeholder `DATAWORKS_PROXY_USER` is not specified in the JDBC URL for the **Custom Configuration Information**, the platform appends the configuration information of `hive.server2.proxy.user` to the end of the JDBC URL by default when the EMR task runs.
                
            -   If the placeholder `DATAWORKS_PROXY_USER` is specified in the JDBC URL for the **Custom Configuration Information**, the platform dynamically replaces the placeholder with the configuration information of `hive.server2.proxy.user` when the EMR task runs.
                
        

## **What to do next**

You can refer to the [Data development process guide](/help/en/dataworks/user-guide/common-development-process) to configure component environments and perform data development operations in DataWorks.
