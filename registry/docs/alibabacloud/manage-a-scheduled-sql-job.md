On the Scheduled SQL page in the Simple Log Service console, you can view the basic information about a Scheduled SQL job and the instances of the Scheduled SQL job. You can also retry, modify, or delete the Scheduled SQL job.

## Prerequisites

A Scheduled SQL job is created. For more information, see [Process and save data from a Logstore to another Logstore](/help/en/sls/logstore-import-logstore#task-2098733), [Process and store data from a Logstore to a Metricstore](/help/en/sls/logstore-import-metricstore#task-2098745), or [Process and save data from a Metricstore to another Metricstore](/help/en/sls/metricstore-import-metricstore#concept-2098748).

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, choose **Job Management** > **Scheduled SQL**.
    
4.  Click the Scheduled SQL job.
    

## View the basic information about the Scheduled SQL job

In the **Basic Information** section, you can view the basic information about the Scheduled SQL job, including Created At, Last Modified At, and Job ID.

![SQL作业](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0105954561/p259819.png)

## View the instances of the Scheduled SQL job

When the Scheduled SQL job is run, Simple Log Service generates instances based on the scheduling interval that you specify. You can view all instances of the Scheduled SQL job in the **Instances** section. The following table describes the parameters.

![执行实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9005954561/p298057.png)

**Parameter**

**Description**

**Instance ID**

The unique identifier of the Scheduled SQL instance.

**Job Execution Time**

The time range during which the Scheduled SQL instance is run.

**SQL Query Range**

The time range that you specify for SQL analysis. The instance analyzes the data that is generated within the time range.

**Processed Data Size**

The size of the data that is involved in SQL analysis. The following information is displayed:

-   **Processed Rows**: the number of logs that the instance reads within the specified SQL time window. This parameter indicates the amount of data that is used in computation.
    
-   **Result Rows**: the number of logs in the analysis results. This parameter indicates the amount of data that is written to the destination Logstore or Metricstore.
    
-   **Processed Date Size**: the number of bytes of logs that the instance reads within the specified SQL time window. This parameter indicates the amount of data that is used in computation.
    
-   **Rows Written to Destination Logstore**: the number of logs that are obtained from the analysis results and written to the destination Logstore or Metricstore. This parameter indicates the amount of data that is written to the destination Logstore or Metricstore.
    

**Status**

The status of the Scheduled SQL instance. Valid values: Running, Retrying, Success, and Failed.

## Retry an instance of the Scheduled SQL job

If an instance of the Scheduled SQL job is in the Success or Failed state, you can run the instance again. To process historical data, you can retry successful instances. However, we recommend that you proceed with caution. In most cases, you need to only retry the failed instances of a Scheduled SQL job.

If an instance of the Scheduled SQL job is in the Failed state, you can move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2796499961/p708508.png) icon to view the cause of the failure and troubleshoot the issue, and click **Retry** in the Actions column.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2188299961/p708504.png)

## Delete the Scheduled SQL job

If you no longer require the Scheduled SQL job, you can click **Delete Job** in the upper-right corner of the Scheduled SQL page.

**Warning**

After you delete the Scheduled SQL job, the job cannot be restored. Proceed with caution.

## Modify the Scheduled SQL job

To modify the settings of the Scheduled SQL job, click **Modify Settings** in the upper-right corner of the Scheduled SQL page. For more information about the parameters, see [Process and save data from a Logstore to another Logstore](/help/en/sls/logstore-import-logstore#task-2098733), [Process and store data from a Logstore to a Metricstore](/help/en/sls/logstore-import-metricstore#task-2098745), or [Process and save data from a Metricstore to another Metricstore](/help/en/sls/metricstore-import-metricstore#concept-2098748).
