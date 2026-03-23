After you submit a Spark job on MaxCompute, you can use the LogView tool provided by MaxCompute or the Spark web UI to obtain the logs of the job and check whether the job is submitted and runs as expected.

## Background information

After you submit a Spark job by using spark-submit on MaxCompute, MaxCompute creates an instance and displays the LogView and tracking URLs of the instance in a log. You can track the status of the job based on the LogView or tracking URL. Logs are also generated when you use DataWorks to run Spark jobs.

-   LogView URL: the URL that starts with `logview.odps.aliyun.com`. LogView is a distributed job tracking tool developed for MaxCompute.
    
-   Tracking URL: the URL that allows you to access the Spark web UI.
    

The following section provides an example on how to view the LogView and tracking URLs of an instance.

1.  Submit a job.
    
    **Note**
    
    Spark on MaxCompute supports three running modes: Local mode, Cluster mode, and DataWorks execution mode. You can select an appropriate [running modes](/help/en/maxcompute/running-modes) based on your business requirements.
    
    ```
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class  SparkPi /tmp/spark-2.x-demo/target/AliSpark-2.x-quickstart-1.0-SNAPSHOT-shaded.jar
    ```
    
2.  View instance logs.
    
    ```
    19/01/05 20:36:47 INFO YarnClientImplUtil: logview url: http://logview.odps.aliyun.com/logview/?h=http://service.cn.maxcompute.aliyun.com/api&p=qn_beijing&i=xxx&token=xxx
    <If the following output is returned, the operation is successful. Other log information may also be displayed.>
    19/01/05 20:37:34 INFO Client:
       client token: N/A
       diagnostics: N/A
       ApplicationMaster host: 11.220.xxx.xxx
       ApplicationMaster RPC port: 30002
       queue: queue
       start time: 1546691807945
       final status: SUCCEEDED
       tracking URL: http://jobview.odps.aliyun.com/proxyview/jobview/?h=http://service.cn.maxcompute.aliyun-inc.com/api&p=project_name&i=xxx&t=spark&id=application_xxx&metaname=xxx&token=xxx
    ```
    

## Use LogView to perform diagnostics on a job

A URL that starts with `logview.odps.aliyun.com` is a LogView URL. LogView is a distributed job tracking tool developed for MaxCompute. LogView can be used to perform the following operations:

-   Obtain the status of a job.
    
-   Obtain the startup, termination, and scheduling information about each node in a job.
    
-   Obtain the standard input and output logs of each node in a job. We recommend that the Spark output be written into stdout. By default, Spark log4j logs are written into stderr.
    
-   Store execution log data. The data is retained for three to five days. When the local disk is fully occupied, stdout and stderr logs are cleared.
    

1.  Enter the LogView URL in the address bar of a browser and view the execution information about a job of the CUPID type.
    
    ![Logview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5682364951/p68012.png)
    
2.  On the page that appears, perform the following steps:
    
    1.  Click **Detail** to view the details of the job. **master-0** indicates the node on which Spark Driver resides.
        
    2.  Click **master-0** and select All Tab to view information about the node.
        
    3.  Click **StdOut** to view the output of the node.
        
    4.  Click **StdErr** to view the log4j log of the node.
        

## Use the Spark web UI to perform diagnostics on a job

If a tracking URL is generated in the log of a job, the job is submitted to MaxCompute. You can use the tracking URL to access the Spark web UI or History Server. The Spark web UI can be used to perform the following operations:

-   Obtain information about the native Spark web UI.
    
-   View information about a running job in real time.
    
-   Transfer events from Spark Driver to History Server after a job is complete. This process may require 1 to 3 minutes to complete. If you open the tracking URL immediately after a job is complete, the `Application application_1560240626712_2078769635 not found.` error message may be returned. If the error message is returned, try again later.
    

1.  Enter the tracking URL in the address bar of a browser and view the execution information about a Spark job.
    
    ![Tracking URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5682364951/p68021.png)
    
2.  On the page that appears, perform the following steps:
    
    1.  Click the **Environment** tab to check whether the parameters of the Spark job are correctly configured.
        
    2.  Click the **Executors** tab to check whether dead nodes exist and whether stdout and stderr logs are generated for Spark Driver.
        
    3.  Click **stdout** to view the output of the node.
        
    4.  Click **stderr** to view the log4j log of the node.
