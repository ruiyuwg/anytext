Sessions refer to Spark sessions that are available in the workspaces in E-MapReduce (EMR) Serverless Spark. You must access SQL sessions to run SQL queries and perform scientific analysis of data. This topic describes how to create an SQL session.

## **Create an SQL** session

After you create an SQL session, you can select the session when you create an SQL job.

1.  Go to the Sessions page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the name of the workspace that you want to manage.
        
    4.  In the left-side navigation pane of the **EMR Serverless Spark** page, choose **Operation Center** > **Sessions**.
        
2.  On the **SQL Sessions** tab, click **Create SQL Session**.
    
3.  On the Create SQL Session page, configure parameters and click **Create**. The following table describes the parameters.
    
    **Important**
    
    We recommend that you set the Maximum Concurrency parameter of the resource queue that you use to a value that is greater than or equal to the number of compute units (CUs) required by the notebook session. You can view the value of the Maximum Concurrency parameter in the EMR console.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the SQL session.
    
    The name must be 1 to 64 characters in length and can contain letters, digits, hyphens (-), underscores (\_), and spaces.
    
    **Resource Queue**
    
    The resource queue in which the SQL session is deployed. Select a resource queue from the drop-down list. Only resource queues that are available in the development environment and resource queues that are available in both the development and production environments are displayed in the drop-down list.
    
    For more information about resource queues, see [Manage resource queues](/help/en/emr/emr-serverless-spark/user-guide/queue-management).
    
    **Engine Version**
    
    The version of the engine that is used by the SQL session. For more information about engine versions, see [Engine versions](/help/en/emr/emr-serverless-spark/product-overview/engine-version-introduction).
    
    **Use Fusion Acceleration**
    
    Specifies whether to enable Fusion acceleration. The Fusion engine helps accelerate the processing of Spark workloads and lower the overall cost of jobs. For more information about billing, see [Billing](/help/en/emr/emr-serverless-spark/product-overview/billing/). For more information about the Fusion engine, see [Fusion engine](/help/en/emr/emr-serverless-spark/product-overview/fusion-engine).
    
    **Auto Stop**
    
    By default, this switch is turned on. You can configure the time at which you want the SQL session to automatically stop after the SQL session becomes inactive.
    
    **Network Connection**
    
    The network connection that is used to access the data sources or external services in a virtual private cloud (VPC). For information about how to create a network connection, see [Configure network connectivity between EMR Serverless Spark and a data source across VPCs](/help/en/emr/emr-serverless-spark/user-guide/network-connection-between-emr-serverless-spark-and-other-vpcs).
    
    **spark.driver.cores**
    
    The number of CPU cores that are used by the driver of the Spark application. Default value: 1 CPU.
    
    **spark.driver.memory**
    
    The size of memory that is available to the driver of the Spark application. Default value: 3.5 GB.
    
    **spark.executor.cores**
    
    The number of CPU cores that can be used by each executor. Default value: 1 CPU.
    
    **spark.executor.memory**
    
    The size of memory that is available to each executor. Default value: 3.5 GB.
    
    **s****park.executor.instances**
    
    The number of executors that are allocated to the Spark application. Default value: 2.
    
    **Dynamic Allocation**
    
    By default, this feature is disabled. After you enable this feature, you must configure the following parameters:
    
    -   **Minimum Number of Executors**: Default value: 2.
        
    -   **Maximum Number of Executors**: If you do not configure the **spark.executor.instances** parameter, the default value 10 is used.
        
    
    **More Memory Configurations**
    
    -   **spark.driver.memoryOverhead**: the size of non-heap memory that is available to each driver. If you leave this parameter empty, Spark automatically assigns a value to this parameter based on the following formula: `max(384 MB, 10% × spark.driver.memory)`.
        
    -   **spark.executor.memoryOverhead**: the size of non-heap memory that is available to each executor. If you leave this parameter empty, Spark automatically assigns a value to this parameter based on the following formula: `max(384 MB, 10% × spark.executor.memory)`.
        
    -   **spark.memory.offHeap.size**: the size of off-heap memory that is available to the Spark application. Default value: 1 GB.
        
        This parameter is valid only if you set the `spark.memory.offHeap.enabled` parameter to `true`. By default, if you use the Fusion engine, the spark.memory.offHeap.enabled parameter is set to true and the spark.memory.offHeap.size parameter is set to 1 GB.
        
    
    **Spark Configurations**
    
    The Spark configurations. Separate the configurations with spaces, such as `spark.sql.catalog.paimon.metastore dlf`.
    

By default, the SQL session automatically enters the starting state. After the status of the SQL session changes from Starting to Running, the SQL session is successfully created. You can stop, modify, or delete the SQL session based on your business requirements.

## **View the jobs** **run** **by using a specific session**

You can view the jobs that are run by using a specific session on the Sessions page. Procedure:

1.  On the **Sessions** page, click the name of the desired session.
    
2.  On the page that appears, click the **Execution Records** tab.
    
    On the **Execution Records** tab, you can view the details of a job, such as the run ID and start time, and click the link in the Spark UI column to access the Spark UI.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1923745471/p948618.png)

## **References**

-   For information about the operations related to resource queues, see [Manage resource queues](/help/en/emr/emr-serverless-spark/user-guide/queue-management).
    
-   For information about the roles and permissions supported by sessions, see [Manage users and roles](/help/en/emr/emr-serverless-spark/user-guide/manage-users-and-roles).
    
-   For information about how to develop an SQL job, see [Get started with SQL jobs](/help/en/emr/emr-serverless-spark/getting-started/get-started-with-sql-task-development).
