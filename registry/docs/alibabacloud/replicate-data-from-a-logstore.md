If you want to store multiple copies of log data in a Logstore, use the data transformation feature to replicate the data. This topic describes typical scenarios for replicating Logstore data and the procedure to follow.

## Scenarios

A company collects and stores access logs in multiple projects within a single Alibaba Cloud account. The company needs to replicate access logs from the `logstore-a` Logstore in the `project-a` project to the `logstore-b` Logstore in a new `project-b` project. This enables centralized query and analysis in `project-b`. Simple Log Service provides a replication function in its data transformation feature to copy data from `logstore-a` to `logstore-b`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0705833771/CAEQJhiBgIDvk9P_.xgiIGEyZDA2NDNlMGRiZDRhYmNiMmFkODZmZjQyMzZjYmRi4323610_20240327140754.265.svg)

## Prerequisites

-   Create the logstore-a Logstore and write data to it. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   Create the logstore-b Logstore. Evaluate and plan the performance of logstore-b, such as the number of shards. For more information, see [Performance guide](/help/en/sls/performance-guide#concept-2055068).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project-a project.
    
3.  On the **Log Storage** > **Logstores** tab, click the **logstore-a** Logstore.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6015195171/p785117.png)
    
4.  Click **Data Transformation** to enter data transformation mode.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6015195171/p785118.png)
    
5.  On the right side of the page, click **Preview Data**. For more information about previewing data, see [Preview and debug](/help/en/sls/preview-mode-overview/#task-2565077).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6015195171/p785129.png)
    
6.  On the right side of the page, click **Save as Transformation Job**.
    
7.  In the **Create Data Transformation Job** panel, configure the following parameters and click **OK**.
    
    **Note**
    
    For more information about other parameters, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job).
    
    **Parameter**
    
    **Description**
    
    **Job Name**
    
    The default name of the data transformation job.
    
    **Display Name**
    
    The custom name of the data transformation job. For example, enter `test`.
    
    **Authorization Method**
    
    Authorize Simple Log Service to read data from the logstore-a Logstore. Select **Default Role**.
    
    **Target Name**
    
    The name of the storage destination. Enter **test**.
    
    **Target Region**
    
    The region where the destination project resides. Select **China (Hangzhou)**.
    
    **Target Project**
    
    The name of the destination project. Enter **project-b**.
    
    **destination database**
    
    The name of the destination Logstore. Enter **logstore-b**.
    
    **Authorization Method**
    
    Authorize Simple Log Service to write data to the logstore-b Logstore.
    
    Select **Default Role**.
    
    **Time Range**
    
    The time range for the data transformation job. A value of All processes data in the source Logstore from the first log until you manually stop the job. Select **All**.
    

## View replication results

1.  View the status of the data transformation job. For parameter descriptions on the job page, see [Manage a data transformation job](/help/en/sls/manage-a-data-transformation-job).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0445195171/p785152.png)
    
2.  Open the project-b project. On the **Log Storage** > **Logstores** tab, select the logstore-b Logstore to go to the query and analysis page.
    
3.  In the upper-right corner, click **Enable Index**. For more information about indexes, see [Create indexes](/help/en/sls/create-indexes).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6015195171/p785140.png)
    
4.  View the data replicated from the `logstore-a` Logstore.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6015195171/p785139.png)
