In a multi-team environment, you must properly allocate computing resources to ensure efficient operations. This topic describes how to create quotas and assign resources to different teams for efficient resource management.

## **Background information**

### **Example**

A total of 128 GPUs are purchased as AI computing resources for Team A, Team B, and Team C with the following requirements:

-   Team A runs inference services and requires guaranteed resources.
    
-   Team B and Team C run training jobs.
    
-   Inference services of Team A have higher priority than training jobs. When Team A needs more resources, the system can reclaim resources from training jobs to ensure inference services run properly.
    
-   Resources for Team B and Team C can be dynamically adjusted based on actual needs.
    
-   Team B and Team C can independently manage their own resources and jobs.
    

### **Overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1547798671/CAEQUBiBgMC_i7m52BkiIDVhZDBlMGE0OWNhMDRiMmU5ZmE1M2RhZGIwZTQ1MGYx4926017_20250212095850.430.svg)

The preceding figure illustrates the sample scenario. The solution is as follows:

-   Create a parent quota named Quota1 with 128 GPUs and enable child-level preemption. Then, create two child quotas: Quota1.1 (48 GPUs) and Quota1.2 (80 GPUs).
    
-   Create workspace-a for Team A and associate it with Quota1 to deploy EAS inference services.
    
-   Create workspace-b for Team B and associate it with Quota1.1 to run DLC training jobs.
    
-   Create workspace-c for Team C and associate it with Quota1.2 to run DSW instances for model development.
    

## **Procedure**

1.  Prepare AI computing resources (general computing resources or Lingjun resources). For more information, see [Resource pool](/help/en/pai/user-guide/general-training-resources/). Skip this step if you have already purchased AI computing resources.
    
2.  Create a quota.
    
    1.  Create a quota named Quota1 with the following key parameters. For more information, see [Create resource quotas](/help/en/pai/user-guide/create-resource-quotas) or [General computing resource quotas](/help/en/pai/overview-20).
        
        -   **Specifications/Resources**: Select a resource specification, such as 128 GPUs.
            
        -   **Child-level Preemption**: Enable this option.
            
    2.  In the **Actions** column of Quota1, click **New Child-level Resource Quota** to create child quotas. For more information, see [Create parent-child quotas](/help/en/pai/user-guide/manage-resource-quotas#961ac1b52516s).
        
        -   Create a child quota named Quota1.1 with 48 GPUs.
            
        -   Create a child quota named Quota1.2 with 80 GPUs.
            
3.  Create the following workspaces and associate the workspaces with quotas. For more information, see [Create and manage a workspace](/help/en/pai/user-guide/create-and-manage-workspaces).
    
    -   Create a workspace named workspace-a for Team A and associate the workspace with Quota1.
        
    -   Create a workspace named workspace-b for Team B and associate the workspace with Quota1.1.
        
    -   Create a workspace named workspace-c for Team C and associate the workspace with Quota1.2.
        
4.  Grant workspace administrator permissions to each team. For more information, see [Manage a workspace](/help/en/pai/user-guide/create-and-manage-workspaces#abbacbe7a0rvl). For information about other permission types, see [Appendix: Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions).
    
5.  Create an inference service and training jobs.
    
    -   Team A creates an inference service in workspace-a. For more information, see [Service deployment](/help/en/pai/user-guide/service-deployment/).
        
    -   Team B creates a DLC job in workspace-b. For more information, see [Create a training job](/help/en/pai/user-guide/create-a-training-task/).
        
    -   Team C creates a DSW instance in workspace-c. For more information, see [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances).
        

## **Scenarios**

### **Scenario 1: Inference service preempts resources from training jobs**

The administrator must go to the [Resource Quota](https://pai.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.55904ceeCHFPiz&regionId=cn-shanghai#/computing-resource/quota) page, click the parent quota Quota1, and enable the **Child-level Preemption** option on the **Overview** tab.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7032491471/p915400.png)

When Team A submits a new inference service in workspace-a but resources are insufficient due to training jobs from Team B and Team C, the system automatically reclaims resources from the training jobs to ensure the inference service runs properly.

### **Scenario 2: Reallocate resources between teams**

The administrator can reallocate resources between Quota1.1 and Quota1.2 by using the quota scaling feature. For more information, see [Scale quotas](/help/en/pai/user-guide/manage-resource-quotas#2da2d75cbe40r).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7032491471/p915150.png)

-   Increase the GPUs of Quota1.1 from 48 to 56 (+8 GPUs).
    
-   Decrease the GPUs of Quota1.2 from 80 to 72 (-8 GPUs).
    

### **Scenario 3: Isolate permissions between teams**

With Quota1.1 assigned to workspace-b (Team B) and Quota1.2 assigned to workspace-c (Team C), each team can independently manage permissions for resources and jobs in their own workspace. For more information, see [Workspace scheduling center](/help/en/pai/workspace-scheduling-center).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7032491471/p915042.png)
