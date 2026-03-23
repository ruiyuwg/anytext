E-MapReduce (EMR) provides the resource monitoring feature. This feature allows you to monitor the number of consumed compute units (CUs), the number of consumed CPU cores, and the memory used in workspaces and queues. You can filter and analyze usage of CUs, CPU cores, or memory based on the time dimension.

## **Go to the Resource Observation tab**

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
    
3.  On the **Spark** page, find the desired workspace and click the name of the workspace.
    
4.  In the left-side navigation pane of the **EMR Serverless Spark** page, choose **Operation Center** > **Resources**.
    
5.  Click the **Resource Observation** tab.
    
    On the Resource Observation tab, select 1 hour, 3 hours, 6 hours, 12 hours, 1 day, 7 days, or a custom time period. The chart automatically refreshes to display data of the selected time period.
    

## **Metrics**

### **CU\*Hours**

**Metric**

**Description**

**Workspace CU\*Hours Consumption**

The total number of CU-hours consumed by all objects, such as jobs and sessions, in a workspace.

**Queue CU\*Hours Consumption**

The total number of CU-hours consumed by all objects, such as jobs and sessions, in a specific queue.

### **CU**

**Metric**

**Description**

**Workspace CU Consumption**

The total number of CUs consumed by all objects, such as jobs and sessions, in a workspace.

**Queue CU Consumption**

The total number of CUs consumed by all objects, such as jobs and sessions, in a specific queue.

### **CPU and Memory**

**Metric**

**Description**

**Workspace cpu Consumption**

The total number of CPU cores consumed by all objects, such as jobs and sessions, in a workspace.

**Workspace memory Consumption**

The total memory consumed by all objects, such as jobs and sessions, in the workspace.

**Queue cpu Consumption**

The total number of CPU cores consumed by all objects, such as jobs and sessions, in a scheduling queue.

**Queue memory Consumption**

The total memory consumed by all objects, such as jobs and sessions, in a scheduling queue.
