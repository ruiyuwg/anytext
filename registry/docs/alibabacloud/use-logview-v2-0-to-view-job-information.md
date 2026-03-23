This topic describes the features and usage of LogView V2.0 (hereinafter referred to as LogView). You can access the URL of LogView to view job information.

## Overview

LogView is used to record and display the status of MaxCompute jobs. LogView provides the following features:

-   Provides an interactive directed acyclic graph (DAG) to display the logical architecture of job processing. You can also view the operators of a job.
    
-   Allows you to play back the job running process.
    
-   Allows you to view memory usage and CPU utilization by using Fuxi Sensor.
    

## Entry point

When you submit a MaxCompute job, the system automatically generates a URL that starts with `https://logview.aliyun.com/logview`.

-   If you use the MaxCompute client to submit the job, you must copy the URL to the address bar of a browser to access LogView.
    
-   If you use DataWorks to submit the job, you can click the URL to directly go to the LogView page.
    

The following figure shows the LogView page.![URL界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2547631061/p161406.png)

**No.**

**Section**

1

The title and functionality section. For more information, see [Title and functionality section](#section-rok-7rf-7dw).

2

The Basic Info section. For more information, see [Basic Info section](#section-cpk-fnd-egg).

3

The job details section. For more information, see [Job details section](#section-cdn-h0r-1j5).

## Title and functionality section

This section shows the job ID and job name. The job ID uniquely identifies a MaxCompute job. The job ID is generated when you submit the job. The job name is displayed only if the job is submitted by using an SDK. You can also click the icons on the right of this section to perform operations.

**Icon**

**Description**

![打开](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161417.png)

Open the Logview\_detail.txt file that contains job details. The file is saved on your computer.

![返回](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161420.png)

Return to the LogView V1.0 page.

![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161422.png)

Save the job details as a file to your computer.

## Basic Info section

This section shows the basic information about a job.

**Parameter**

**Description**

MaxCompute Service

The endpoint of MaxCompute on which the job runs. For more information about endpoints, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).

Project

The name of the MaxCompute project to which the job belongs.

Cloud account

The Alibaba Cloud account that is used to submit the job.

Type

The type of the job. Valid values: SQL, SQLRT, LOT, XLib, CUPID, AlgoTask, and Graph.

Status

The status of the job. Valid values:

-   Success: The job succeeds.
    
-   Failed: The job fails.
    
-   Canceled: The job is canceled.
    
-   Waiting: The job is being processed in MaxCompute but is not submitted to Job Scheduler.
    
-   Running: The job is being processed in Job Scheduler.
    
-   Terminated: The job is complete.
    

Start Time

The time at which the job was submitted.

End Time

The time at which the job is complete.

Latency

The period during which the job is run.

Progress

The progress of the job.

Priority

The priority of the job.

Queue

The position of the job in the queue in the resource quota group.

## Job details section

In the job details section, you can query details about a job. This section consists of the following tabs:

### Job Details

-   Progress chart
    
    In the upper part of the **Job Details** tab, the progress chart of a job is displayed. The progress chart shows the subtask dependencies from the following dimensions: Fuxi jobs, Fuxi tasks, and operators. The progress chart also provides a series of tools to help you identify issues. The following figure shows the upper part of the Job Details tab.![作业执行图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3547631061/p161495.png)
    
    **No.**
    
    **Description**
    
    1
    
    The breadcrumb navigation that is used to switch Fuxi jobs. JOB:\_SQL\_0\_0\_0\_job\_0 is the name of a Fuxi job.
    
    2
    
    The tool that is used to troubleshoot issues. You can use Progress Chart, Input Heat Chart, Output Heat Chart, TaskTime Heart Chart, and InstanceTime Heart Chart for troubleshooting.
    
    3
    
    You can click the ![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161505.png) icon to refresh the job status and click the ![全屏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161507.png) icon to zoom in or out on the progress chart. You can also click the ![帮助](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161508.png) icon to obtain MaxCompute Studio documentation and the ![切换层级](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161509.png) icon to switch to the upper level of the job.
    
    4
    
    The zoom tool.
    
    5
    
    The Fuxi task. A MaxCompute job consists of one or more Fuxi jobs. Each Fuxi job consists of one or more Fuxi tasks. Each Fuxi task consists of one or more Fuxi instances. If the amount of input data increases, MaxCompute starts more nodes for each task to process the data. A node is equivalent to a Fuxi instance. For example, a simple MapReduce job generates two Fuxi tasks: map task (M1) and reduce task (R2). If an SQL statement is complex, multiple Fuxi tasks may be generated.
    
    You can view the name of each Fuxi task on the execution page. For example, M1 indicates a map task. The 3 and 9 fields in R4\_3\_9 indicate that the map task can be run only after M3 and C9\_3 are complete. Similarly, M2\_4\_9\_10\_16 indicates that the M2 task can be run only after R4\_3\_9, C9\_3, R10\_1\_16, and C16\_1 are complete. R/W indicates the numbers of rows that the task reads and writes.
    
    Click or right-click a task to view the operator dependencies and operator graphs of the task.
    
    You can quickly view the input and output tables.
    
    6
    
    The Fuxi task playback. You can click the ![播放](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473340161/p161512.png) icon to start or stop the playback. You can also drag the progress bar. The start time and end time are displayed on the sides of the progress bar. The playing time is displayed in the middle.
    
    7
    
    The thumbnail.
    
    **Note**
    
    -   The playback feature is not applicable to Fuxi tasks that are in the Running state.
        
    -   An AlgoTask job, such as a Platform for AI (PAI) job, contains only one Fuxi task. Therefore, no progress charts are provided for these jobs.
        
    -   For non-SQL jobs, only Fuxi jobs and Fuxi tasks are displayed.
        
    -   If only one Fuxi job exists, the progress chart shows the dependencies among Fuxi tasks. If multiple Fuxi jobs exist, the progress chart shows the dependencies among the Fuxi jobs.
        
    
-   Job status
    
    In the lower part of the **Job Details** tab, detailed information about the job is displayed. The following figure shows the lower part of the Job Details tab.![运行结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4547631061/p161547.png)
    
    **No.**
    
    **Description**
    
    1
    
    The Fuxi Jobs tab. You can switch Fuxi jobs on this tab.
    
    2
    
    The details about the Fuxi tasks of the Fuxi job. Click a Fuxi task to display information about the Fuxi instance of this task. By default, information about the Fuxi instance of the first Fuxi task for the first Fuxi job is displayed.
    
    For AlgoTask jobs and jobs that run in the Cupid console, the **Sensor** column appears in this section. You can click the sensor that corresponds to a Fuxi task to view the CPU and memory information of the Fuxi instance. Fuxi jobs are classified into the following types:
    
    -   M: A job whose ID starts with M is a data scanning job.
        
    -   R: A job whose ID starts with R is a Reduce job.
        
    -   J: A job whose ID starts with J is a JOIN job.
        
    -   C: A job whose ID starts with C indicates a virtual node. The node does not involve calculation and is used only for branch selection.
        
    
    **Note**
    
    -   Fuxi Sensor is available in the China (Chengdu), China (Shenzhen), China (Shanghai), China (Hangzhou), China (Zhangjiakou), and China (Beijing) regions.
        
    -   If a Fuxi task is in the `Interrupted` state, the task may be rerun. In this case, the value in the Progress column indicates only the rerun progress. As a result, the entire job is successful but the progress of this Fuxi task is not `100%`. This condition is normal.
        
    
    3
    
    LogView divides instances into groups based on their status. You can click the value next to Failed to query information about faulty nodes.
    
    4
    
    Fuxi instances.
    
    -   In the preceding example, the ID of the Fuxi instance is `M1#0_0`. The first `0` in the ID of the Fuxi instance indicates the auto-increment ID of the Fuxi instance. The second `0` in the ID of the Fuxi instance indicates the number of times that the Fuxi task is rerun. The value `0` indicates that the Fuxi task fails to rerun.
        
    -   StdOut and StdErr. You can view the output messages, error messages, and information that you want to display. You can also download the information.
        
    -   Debug. You can debug and troubleshoot errors.
        
    -   Limits on the number of Fuxi instances.
        
        The number of Fuxi instances is limited to 1 when the SQL statement that you use meets one of the following conditions:
        
        -   The `LIMIT` clause is used.
            
        -   The `PARTITION BY KEY` clause is not included in the SQL statement that is used together with a window function.
            
        -   The `GROUP BY KEY` clause is not included in the SQL statement that is used together with an aggregate function.
            
        -   No equi-join key is included in the SQL statement that is used to perform JOIN operations.
            
        -   The `ORDER BY` clause is used.
            
        
    

### Fuxi Sensor

Fuxi Sensor is a resource view that displays information about a MaxCompute job in all dimensions. You can use Fuxi Sensor to view the memory usage and CPU utilization of a Fuxi instance. You can also use Fuxi Sensor to identify job issues and analyze job performance. For example, you can use Fuxi Sensor in the following scenarios:

-   If an out-of-memory (OOM) error occurs, analyze the size of memory that is used.
    

For example, you can use Fuxi Sensor to view the resource usage of a Fuxi instance.

-   CPU utilization
    
    The cpu\_usage chart has two lines. One line indicates the number of CPUs requested (cpu\_plan), and the other line indicates the number of CPUs used (cpu\_usage). In the y-axis, 400 indicates four processors. You can adjust the number of requested CPUs only by adjusting the number of processors. You cannot adjust the number of CPUs that can be used.![CPU](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5415341061/p161866.png)
    
-   Memory usage
    
    The mem\_usage chart has two lines. One line indicates the number of memory resources requested (mem\_plan), and the other line indicates the number of memory resources used (mem\_usage).
    
    mem\_usage contains Resident Set Size (RSS) and PageCache. RSS indicates the memory that is allocated after kernel page faults occur. RSS is used when you call Malloc to request memory by using non-file mappings. If the memory is insufficient, RSS cannot be reclaimed. PageCache is the memory that is occupied by the kernel to cache the files that are required by read and write requests, such as log files. If the memory is insufficient, PageCache can be reclaimed.
    
    -   Memory details![内存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5415341061/p161869.png)
        
    -   RSS usage![RSS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5415341061/p161943.png)
        
    -   PageCache usage![Page-cache](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5415341061/p161945.png)
        
    

### Result

The **Result** tab displays information based on the job status:

-   If the job is successfully run, the job result is displayed.
    
    -   You can use the following command to disable the display of the job result.
        
        ```
        setproject odps.forbid.fetch.result.by.bearertoken=true;
        ```
        
    -   You can configure the odps.sql.select.output.format parameter to specify the result display format.
        
        ```
        -- To display the result in the CSV format, set this parameter to csv.
        set odps.sql.select.output.format=csv;
        -- To display the result in the text format, set this parameter to HumanReadable.
        set odps.sql.select.output.format=HumanReadable;
        ```
        
-   If the job fails to run, the cause of the failure is displayed.
    

### SourceXML

-   **XML**
    
    Job levels and task-related information are displayed in the XML format on this tab.
    
-   **Settings**
    
    The settings of the current task are displayed on this tab.
    
-   **Command**
    
    The flag settings of the current task are displayed on this tab.
    

### SQL Script

The SQL script for the current task is displayed on this tab.

### History

The history of the current task is displayed on this tab.

### SubStatusHistory

The status of the current task is displayed on this tab.![substatus](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5547792761/p525441.png)

**Message for status code**

**Description**

Waiting for scheduling

The job is submitted and is waiting for the MaxCompute framework to schedule. In most cases, the waiting time is short.

Waiting for cluster resource

The job is waiting for resources because the MaxCompute framework identifies that the resources of the Fuxi computing cluster are insufficient.

Waiting for concurrent task slot

The project-level throttling is triggered. You can configure the number of SQL tasks that can be submitted at the same time for a project.

Waiting for data replication

The job is waiting for data to be replicated.

Waiting for execution slot

The system-level throttling is triggered.

Waiting for cleaning up of previous task attempt

The job is waiting for the cleanup operation of historical tasks to be complete.

Waiting for execution

The job is waiting to be distributed from the parent process queue to a child process. In most cases, the waiting time is short.

Preparing for execution

The job is going to be distributed to a child process. If the child process is abnormal, the preparation time may be long.

Task is executing

The job is being processed in the MaxCompute framework.

SQLTask is initializing

The SQL task is being initialized.

SQLTask is compiling query

The SQL task is being compiled.

SQLTask is optimizing query

The SQL task is optimizing queries. If the execution plan is complex, the optimization time is slightly long. If the optimization time is excessively long, an error may occur.

SQLTask is splitting data sources

The SQL task is splitting data sources for optimization.

SQLTask is generating execution plan

The SQL task is generating an execution plan. If this process tasks a long period of time, data may be read from an excessive number of partitions or small files.

SQLTask is submitting execution plan

The SQL task is submitting the execution plan.

Job has been submitted

The job is submitted to the computing cluster.

Offline Job Waiting for running

Before the job is submitted to the Fuxi computing cluster, the MaxCompute framework identifies that computing resources are available for the job. However, after the job is submitted, the MaxCompute framework identifies that no computing resources are available in the quota group. As a result, the job waits for computing resources. This status code appears only once and no longer appears even if no computing resources are available for the job.

Offline Job is running

If no resources are available for the Fuxi job that is running, this message appears. For example, high-priority jobs preempt resources. As a result, specific Fuxi instances cannot run and the instances are in the `ready` state.

Offline Job is failed

The Fuxi job fails to run.

Offline Job is succeed

The Fuxi job is successful.

SQLTask is updating meta information

The SQL task is updating the metadata information status and generating dynamic partitions. This process may be time-consuming.

SQLTask is finishing

The SQL task is complete.

Online Job is cancelled by fuxi

The job in `service mode` is canceled.

Task rerun

The job reruns. The job in `service mode` may fail to run and change to run in offline mode. Alternatively, data is replicated across different clusters.

Online Job Waiting for running

The job in `service mode` is waiting to be run.

Online Job is running

The job in `service mode` is running.

Online Job is failed

The job in `service mode` fails to run.

Online Job is succeed

The job in `service mode` is successful.

Online Job is cancelled by fuxi

The job in `service mode` is canceled.

Task key-path executing finished

The key path of the job is complete, but information such as DetailStatus is not generated.

Task key-path is finished

The key path of the job is complete.

Instance key-path is finished

The key path of the instance is complete.

Task execution is finished

The job is complete, and DetailStatus is generated.

Instance execution is finished

The job is complete.

Execution failed

The job fails to run.
