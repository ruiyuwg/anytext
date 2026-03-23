Workspace administrators can configure resource usage rules for modules in a workspace to accommodate different business scenarios. These rules include usage limits, priorities, auto-shutdown policies, and cost control policies.

**Note**

A **Non-workspace Member** is a user who has not been added to the workspace by an administrator but has been granted the required RAM permissions by an Alibaba Cloud account to use resources and submit jobs. You can define separate constraints for these users.

## **Resource usage**

You can configure the usage scope of the resource quota for the current workspace. This lets you specify which modules and roles can use the resources, and limit the amount of resources they can consume. If you do not require fine-grained control, no configuration is necessary, and resources can be used freely across all product modules in the workspace.

-   **Resource usage modules**: Limits the resource quota to specific modules, such as DSW and DLC.
    
-   **Resource usage roles**: Limits the use of this resource quota to specific roles.
    
-   **Resource usage amount**: Limits the maximum number of GPUs, CPU cores, and memory from this resource quota that can be used by different roles when they submit jobs within a specified priority range.
    
    **Important**
    
    **If a user is subject to multiple constraints, the strictest constraint applies.** For example, for a specific resource quota, User A is subject to both the administrator constraint (100 GPUs for priorities 1-7) and the Member A constraint (10 GPUs for priorities 7-9). When User A submits a priority 7 job, they can use a maximum of 10 GPUs from this resource quota.
    
-   **Resource specification template**: If a resource specification template is set for a resource quota, users must select the template to use resources when creating a DSW instance or a DLC job.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8779730671/p1014218.png)

## **DLC**

-   **Maximum runtime**: Sets the maximum runtime for a job. The job is automatically stopped if it exceeds this runtime.
    
-   **Job priority**: Limits the maximum priority of jobs that different roles or members can submit.
    
-   **Allow public resources**: If this option is disabled, users cannot create pay-as-you-go DLC jobs in the current workspace. This helps prevent unexpected costs.
    
-   **Maximum job wait time**: Sets the timeout for job waiting, queuing, and environment preparation for the resource quota. A notification is sent if a timeout occurs.
    
    **Note**
    
    To receive timeout alerts, you must also configure notification rules for DLC jobs on the **Event Notification Configuration** page. Otherwise, alerts will not be sent based on this setting alone.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8779730671/p1014219.png)

## **DSW**

-   **Auto-shutdown policy**:
    
    -   **Shutdown policy**: Triggers auto-shutdown based on instance runtime or resource usage (such as idle time or CPU, memory, and GPU utilization) to save costs.
        
    -   **Exclusion policy**: Sets DSW instances to be excluded from auto-shutdown based on their priority and name.
        
-   **Instance priority**: Limits the maximum priority of instances that different roles or members can create.
    
-   **Allow public resources**: If this option is disabled, users cannot create pay-as-you-go DSW instances in the current workspace. This helps prevent unexpected costs.
    
-   **Maximum instance wait time**: Sets timeout rules for resource quota usage. The instance is stopped if its queuing time or environment preparation time exceeds the configured threshold.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8779730671/p1014222.png)
