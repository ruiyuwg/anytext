MaxCompute provides limited subscription computing resources. During actual data development, you may need to run multiple jobs simultaneously in MaxCompute. In this case, computing resources must be properly allocated to concurrent jobs. MaxCompute supports two types of policies to schedule level-2 subscription quotas: first-in-first-out (FIFO) scheduling and fair scheduling. You can configure a scheduling policy for level-2 subscription quotas to allocate resources appropriately.

## Usage notes

-   In actual resource scheduling, scheduling based on [job priorities](/help/en/maxcompute/user-guide/job-priority#concept-2554678) takes precedence over scheduling based on the quota policy. Resources are preferentially allocated to jobs with higher priorities. If jobs have the same priority, the system allocates resources based on the scheduling policy configured for level-2 quotas.
    
-   You cannot configure scheduling policies for level-2 quotas of the **Interactive** type.
    
-   From May 24, 2023, FIFO scheduling is used as the default scheduling policy for level-2 quotas of new projects in all regions. Fair scheduling is used as the default scheduling policy for level-2 quotas of projects created before May 24, 2023. For more information, see [Service notices](/help/en/maxcompute/product-overview/service-notices/#section-isv-feq-v19).
    

## Overview

**Features**

**Fair scheduling**

**FIFO scheduling**

Scheduling characteristics

-   In scenarios where jobs have the same priority, resources are evenly allocated to all jobs that are submitted at the same time.
    
-   In scenarios where jobs have different priorities, resources are evenly allocated to jobs with higher priorities. If remaining resources exist, the resources are then evenly allocated to jobs with lower priorities.
    

-   In scenarios where jobs have the same priority, resources are preferentially allocated to the jobs that are submitted earlier.
    
-   In scenarios where jobs have different priorities, resources are preferentially allocated to jobs with higher priorities even if jobs with lower priorities are submitted earlier.
    

Use scenarios

-   Human-computer interaction scenario: Multiple data engineers submit jobs at the same time and they all want their jobs to start running as early as possible.
    
-   Multi-baseline dependency scenario: Multiple baselines depend on a quota group. Tasks for each baseline must be run at the same time. Otherwise, the output of the baseline job is affected.
    

One-task scenario: Multiple submitted jobs are considered as one task. You focus only on the throughput and final completion time of all jobs, rather than the completion time of a single job.

Advantages

You can run multiple jobs at the same time.

The average operation time of a single job is short.

Risks

The average operation time of a single job is long.

A large job may occupy most resources. As a result, other jobs in the same quota group are always queued for compiling.

**Note**

-   You can use Logview to check the status of a job. If the sub-status of the job is **Waiting for cluster resource**, the job is queued for compiling.
    
-   To eliminate the risk, you can configure the maximum number of compute units (CUs) that can be consumed by a single job. For more information, see [Configure quotas](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#section-7ip-fnz-of6).
    

![策略特征](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8599493171/p673119.png)

## Configure a quota scheduling policy

-   Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com), and select a region in the top navigation bar.
    
-   In the navigation pane on the left, click **Quotas**.
    
-   On the **Quotas** page, find the level-1 quota that you want to configure and click **Quota Configuration** in the Actions column.
    
    **Note**
    
    Only quotas of the **subscription** standard computing resource type have the **Quota Configuration** option in the Actions column.
    
-   On the **Quota Configuration** page, click the **Basic Configurations** tab. You can click **Edit Basic Configurations** and select an appropriate scheduling method for the level-2 quota in the **Scheduling Policy** column as needed.
    
    **Parameter**
    
    **Description**
    
    Scheduling Policy
    
    In MaxCompute, level-2 quotas can be scheduled using the fair or FIFO scheduling policy.
    
-   Click **OK**. After the quota plan is configured, click **Apply Immediately** in the **Actions** column to enable the latest configuration.
    

## **References**

For more information about quota settings, see [Quota management for computing resources](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console).
