By default, configuration changes for scheduled DataWorks Tasks take effect in `Next Day` mode. This means Instances generated the day after deployment use the new configuration. If you need changes for a new or modified Task to take effect on the same day, you can use the `Immediately After Deployment` mode.

## **How it works**

In DataWorks, after you modify a Task and **Submit** the changes, the new configuration affects Instance generation in one of two ways. These modes determine whether changes take effect on the same day or in the next scheduling cycle (the next day).

#### Mode A: Next Day (System Default)

This is the system default and recommended option. It isolates changes from the current day's running Instances to ensure production stability.

-   **How it works**:  
    A deployment on the **current day (Day T)** only updates the Task definition and does not affect Instance execution on that day.
    
-   **Impact on the current day (Day T):**
    
    -   Behavior: Only the Task's code and properties are updated. This does not affect any Instances already generated or scheduled for the current day. All Instances on Day T continue to run based on the pre-deployment configuration.
        
    -   Recommendation: If you need the new logic to take effect on Day T, we recommend performing a Backfill Data operation for the Day T Instances after deployment.
        
-   **Impact on the next day (Day T+1):**  
    All changes take effect starting from the first scheduled Instance on Day T+1. All Instances are generated and run using the new configuration.
    

#### Mode B: Immediately After Deployment

This mode applies Task changes as soon as possible on the day of deployment. Its core logic is to determine how to handle scheduled Instances for the **current day (Day T)** by using the deployment time as a baseline.

-   **How it works**:  
    The system compares the scheduling time of each scheduled Instance on Day T with the "deployment time + a 10-minute system buffer".
    
-   **Scheduling time < Deployment time + 10 minutes**
    
    -   Result: New Tasks perform a Dry Run. For modified Tasks, no new Instance is generated.
        
    -   Behavior: For a newly deployed Task, the Instance is considered "expired" and enters a Dry Run state, where its business logic does not execute. This prevents new code from running on an Instance that belongs to the pre-deployment configuration. For a modified and redeployed Task, an expired Instance is not generated.
        
-   **Scheduling time > Deployment time + 10 minutes**
    
    -   Result: Normal execution.
        
    -   Behavior: The system immediately generates and runs the Instance based on the new configuration.
        
-   **Impact on the next day (Day T+1):**  
    All scheduled Instances on Day T+1 will be generated based on the new configuration.
    

**Important**

To ensure deterministic cross-day scheduling, the system has a special "daily cutoff window" (for example, 23:30 to 24:00). For deployments submitted during this window, changes take effect on Day T+2, regardless of the selected mode.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8993052771/CAEQUxiBgIC_3tjl4RkiIGEyYzY4YjYyOTY1ODRkODZiNzEzMTMwNGI3N2E5MjQz6216269_20260113205235.262.svg)

## **Limitations**

-   **Effective time of changes**: The period from `23:30` to `24:00` each day is the system's batch Instance generation window. For deployment operations submitted during this time, the changes will take effect in the scheduled Instances generated on Day T+2.
    
-   **Data Source change limitation**: If you only modify the Data Source associated with a Task, even if you select `Immediately After Deployment`, already-generated scheduled Instances for the current day will not be updated. They will continue to run using the previous Data Source. To apply the change immediately, you must use the [Backfill Data](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#task-2105702) function.
    

## **Scenarios for Immediately After Deployment**

The **Immediately After Deployment** mode carries higher risks. If used improperly, it can lead to tangled Dependencies, accidental deletion or replacement of Instances, and can compromise the stability of the day's Tasks.

### **Recommended use cases**

Use this mode with caution and only in the following scenarios:

-   **New Tasks that must run on the same day**: For new Tasks without complex Upstream or Downstream Dependencies that need to run immediately after deployment.
    
-   **Replacing existing Instances**: To replace scheduled Instances that have been generated for the current day but have not yet run with a new configuration.
    

### **High-risk scenarios (not recommended)**

Do not use this mode in the following scenarios, as it may complicate daily Dependencies and could lead to scheduling anomalies:

-   **Modifying the Scheduling Configuration of a deployed Task**: This is especially risky for Tasks with complex Upstream and Downstream Dependencies. Changing the Scheduling Recurrence (for example, from daily to hourly) and deploying immediately can cause some old Instances to be retained while new ones are created, leading to dependency conflicts.
    
-   **Inconsistent generation modes between upstream and downstream Tasks**: For example, if an upstream Task uses the `Next Day` mode while a downstream Task uses `Immediately After Deployment`. This prevents the Downstream Task's Instance for the current day from finding its Upstream Dependency, making it an `Isolated Task` that cannot run automatically.
    

### **Alternative solution**

For deployed Tasks that require modification, the safer approach is to:

1.  Deploy the Task using the default `Next Day` mode.
    
2.  After the deployment is successful, perform a [Backfill Data](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#task-2105702) operation for the Task to manually trigger the Instances that need to run on the current day.
    

## **Practical scenarios**

### **Scenario 1: Deploy a new task**

After a new Task is deployed, its Instance execution depends on the relationship between its scheduling time and the deployment time (considering a 10-minute delay).

**Scheduling time**

**Status and behavior**

**Later than (Deployment time + 10 minutes)**

The system generates a normal **Scheduled Instance**, which runs at its scheduled time.

**Earlier than or equal to (Deployment time + 10 minutes)**

The system generates an **expired instance that is generated in real time**. This Instance performs a Dry Run and does not execute.

To process data for the current day, perform a Backfill Data operation for the previous business day. This operation also has a 10-minute time difference when generating the Instance. For more information, see [How it works](#a65e60fe278bv).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0710220771/p1050475.png)

Example: Assume a Task is deployed to the Production Environment at `12:00`. The effective time for real-time Instance generation is `12:10`.

-   If the Task's scheduling time is after `12:10`, the Task will be scheduled and run.
    
-   If the Task's scheduling time is before `12:10`, the Task will perform a Dry Run, and its Instance status will be **expired instance that is generated in real time**.
    

### **Scenario 2: Update scheduling recurrence**

If you update the scheduling time (that is, the Scheduling Recurrence and time) of a Production Task and deploy the change to the Production Environment, Instances from before and after the change may coexist on the same day. This can complicate the day's Dependencies.

**Note**

This scenario only occurs on the day of deployment. On the following day, the system generates Scheduled Instances normally based on the new configuration.

![已发布的任务更新调度频率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6871583761/p536058.png)The behavior is as follows:

-   **If the Task's scheduling time is in the future**
    
    DataWorks will replace the future Instances that have already been generated with new ones based on the latest Scheduling Configuration.
    
-   **If the Task's scheduling time is in the past**
    
    DataWorks will keep the Instances scheduled before the new time and **replace or delete** Instances scheduled after it.
    

### **Scenario 3: Inconsistent generation modes**

If both Upstream and Downstream Tasks are new and their generation modes are inconsistent (for example, the Upstream Task uses **Next Day** and the Downstream Task uses **Immediately After Deployment**), it will lead to an [Isolated Task scenario](/help/en/dataworks/user-guide/isolated-node#concept-2098729). An Isolated Task will not be scheduled to run automatically. If this Isolated Task has many Downstream Dependencies, it can prevent all subsequent Tasks from running normally, severely impacting downstream business.![实例生成方式不一致](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5871583761/p536102.png)

### **Scenario 4: Change upstream scheduling time**

When you modify the scheduling time of interdependent Upstream and Downstream Tasks that have different Scheduling Recurrences, the downstream Dependencies are set according to the latest Scheduling Configuration (daily, monthly, or hourly Dependency) of the Upstream Task.

**Note**

For a Production Task with a changed scheduling time, its Downstream Instances will depend on both new and unreplaced old Upstream Instances according to the latest Scheduling Configuration. For details on various hourly and minutely Dependency scenarios, see [Must-read: Principles and examples for scheduling configuration in complex dependency scenarios](/help/en/dataworks/user-guide/principles-and-samples-of-scheduling-configurations-in-complex-dependency-scenarios#task-2268397). This scenario only occurs when the Task version to be deployed is set to **Immediately After Deployment** and its scheduling time has been changed.

Example scenarios are as follows:

-   **Scenario 1: An Upstream Task's schedule is changed from every 6 hours to every 8 hours (00:00, 08:00, 16:00), and the Immediately After Deployment mode is selected.**![场景一](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6871583761/p536113.png)
    
-   **Scenario 2: An Upstream Task's schedule is changed from every 6 hours to once a day at 16:00, and the Immediately After Deployment mode is selected.**![场景二](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5871583761/p536116.png)
