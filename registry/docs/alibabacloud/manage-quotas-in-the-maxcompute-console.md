In a multi-tenant environment where multiple teams and applications share a common pool of MaxCompute subscription resources, you face challenges with resource contention, unpredictable job performance, and complex cost allocation. A single, resource-intensive query from one team can easily starve a time-sensitive, critical pipeline from another. Quota management solves this by partitioning your purchased compute resources into smaller, isolated, and manageable pools. By configuring these quotas, you can guarantee resources for high-priority workloads, prevent "noisy neighbor" issues, and implement fine-grained budget controls to ensure system stability, efficient resource use, and predictable costs.

## Introduction to quotas

A MaxCompute Quota is a unit of computing resources that provides the CPU and memory for compute jobs such as MaxCompute SQL, MapReduce, Spark, Mars, and PAI.

-   MaxCompute uses a two-level quota system:
    
    -   **Level-1 Quotas**: They act as resource pools for a subscription. You cannot run jobs directly against a level-1 quota.
        
    -   **Level-2 Quotas**: Subdivisions of a level-1 quota. Jobs consume Compute Units (CUs) from level-2 quotas. Resources can be shared among level-2 quotas within the same level-1 quota.
        
-   The unit of MaxCompute computing resources is the Compute Unit (CU). MaxCompute supports two billing methods: **subscription** and **pay-as-you-go**.
    
    -   [Compute fees (subscription)](/help/en/maxcompute/product-overview/computing-fees): Purchase reserved CUs on a monthly basis, and the system creates an exclusive Quota for them. You can purchase Elastic Reserved CUs on an hourly basis to supplement your monthly CUs. Billing is based on the purchased amount and duration. When a job runs within a subscription Quota, it can use a maximum number of CUs equal to the purchased amount for that Quota. You can customize the allocation of CUs to level-2 quotas within a level-1 quota to control your budget.
        
    -   [Compute costs (pay-as-you-go)](/help/en/maxcompute/product-overview/computing-pricing-pay-as-you-go): With the pay-as-you-go model, the system assigns your project to a shared, public level-2 quota. You cannot customize the CU allocation for this type of quota.
        

## View **quotas**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Quotas**.
    
3.  On the **Quotas** page, view the list of available quotas.
    
    Hover over the target level-1 or level-2 quota and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0141357571/p906733.png) icon to **Follow** the quota.
    
    On the **Overview** page, the **My Following** section lists the **Quotas** that you follow.
    
    The list displays level-1 and level-2 quotas in a tree structure. By default, the Alibaba Cloud account (primary account) and its RAM users can view this list.
    
    -   Subscription quota: Click the ![列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2749600861/p477483.png) icon to the left of a level-1 quota to expand the list of level-2 quotas and view their current configurations. After you purchase subscription resources, the system creates and allocates a level-1 and a level-2 quota by default.
        
    -   Pay-as-you-go quota: Click the ![列表.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6494232961/p696705.png) icon to the left of a level-1 quota to expand the list of level-2 quotas. After you enable [pay-as-you-go Standard Edition](/help/en/maxcompute/product-overview/pay-as-you-go), the system creates and allocates a default level-1 quota named `Default pay-as-you-go Quota_p` and the level-2 quota named `Default pay-as-you-go Quota`.
        
        **Note**
        
        -   The default level-2 quota for some pay-as-you-go quotas is named `aliyun_nick`. In regions outside of the Chinese mainland,  the name of the default level-1 quota for pay-as-you-go may not be displayed correctly. This is only a display issue and does not affect the quota's functionality.
            
        -   You can only create one pay-as-you-go Quota in each region, and it cannot be used across regions.
            
        

## Configure quotas

You can only configure subscription-based quotas. By default, the primary Alibaba Cloud account has this permission. You can grant this permission to RAM users through authorization. For more information, see [RAM permissions](/help/en/maxcompute/user-guide/ram-permissions#task-2249832). Quota configuration consists of two main parts: **Basic configurations** and **Scaling configuration**.

### **Basic configuration**

**Note**

Each level-1 quota supports a maximum of 100 level-2 quotas. Plan and configure your quotas based on your business scenarios.

Basic configuration lets you add or delete level-2 quotas and set their fundamental parameters, such as exclusivity, single-job CU limits, priority, non-reserved CUs, and scheduling policy. It also includes configuring reserved CUs and Elastic Reserved CUs, which only applies to the currently active configuration plan. If your resource needs are consistent throughout the day, basic configuration is all you need.

### **Scaling configuration**

Quota scaling configuration, also known as **time-based scaling**, lets you set different minimum and maximum reserved CUs or Elastic Reserved CUs for a Quota at different times of the day.

### **Configuration procedure**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Quotas**.
    
3.  On the **Quotas** page, find the target quota and click **Quota Configuration** in the **Actions** column.
    
    You can configure only quotas for which the **Billing Method** is **Subscription**.
    
4.  Configure basic Quota settings.
    
    1.  On the **Quota Configuration** page, click the **Basic Configurations** tab, and then click **Edit Basic Configurations**.
        
        The parameters are described as follows:
        
        **Parameter**
        
        **Description**
        
        **Quota Name**
        
        A custom name. The name must start with a letter and can contain letters, digits, and underscores (\_).
        
        **Type**
        
        -   **Batch**: A quota used to run batch jobs.
            
        -   **Interactive**: A quota dedicated to running query acceleration (MCQA) jobs. You do not need to configure it as the default compute quota for a project.
            
            -   If the default compute quota for a project is a subscription batch processing quota, jobs that hit query acceleration are automatically scheduled to an interactive quota for execution.
                
            -   If there are multiple interactive quotas, MCQA jobs are scheduled to the earliest created interactive quota by default. Therefore, you need to use quota rules to schedule MCQA jobs initiated by different projects to different interactive quotas. For more information about quota rules, see [Quota rules](/help/en/maxcompute/user-guide/use-of-computing-resources#section-p7z-v8r-ay9).
                
        
        **Reserved CUs \[minCU,maxCU\]**
        
        The monthly reserved CUs. minCU is the guaranteed value, and maxCU is the upper limit.
        
        -   The reserved CUs of a level-1 quota is the number of CUs purchased on a subscription basis (minCU=maxCU). To scale out or scale in, you must upgrade or downgrade the quota. This parameter cannot be edited here.
            
        -   If maxCU > minCU, the level-2 quotas are in **shared mode**. If the requested CUs exceed the min value, idle and non-exclusive CUs from other quotas will be preempted.
            
        -   The **sum** of the minCU values of all level-2 quotas equals the minCU value of the level-1 quota.
            
        -   The minCU of a level-2 quota must be **less than or equal to** its maxCU, which must be **less than or equal to** the minCU purchased for the level-1 quota.
            
        -   The minCU and maxCU of the **default** level-2 quota cannot be edited:
            
            -   `minCU of the default level-2 quota = [minCU of the level-1 quota] - [Sum of the minCU values of custom level-2 quotas]`;
                
            -   The maxCU value is the same as the maxCU value of the level-1 quota.
                
        
        -   The minCU of a level-2 quota cannot be set to 0 for now.
            
        -   For a new quota
            
            -   This configuration applies only to the currently active configuration plan.
                
            -   If multiple scaling configuration plans exist, the new quota is added to all of them after it is created. In plans other than the currently active one, the default reserved **minCU** is 1 (deducted from the default subscription level-2 quota). Therefore, to adjust the number of CUs, edit the configuration plans on the **Scaling Configuration** tab.
                
        
        **Elastically Reserved CUs**
        
        The number of elastic CUs reserved on an hourly basis. For more information about the billing of elastic reserved CUs, see [Compute costs (hourly billing)](/help/en/maxcompute/product-overview/computing-pricing-1).
        
        -   The elastic reserved CUs for a level-1 quota is the number of CUs you need to reserve. The default value is 0. The maximum value is the number of subscription reserved CUs purchased for the quota, and cannot exceed 10,000 CUs. This is also subject to inventory, which means an inventory check is performed during scale-out configuration. The scale-out capacity must be at least 50 CUs or a multiple of 50.
            
        -   The elastic reserved CUs for a level-2 quota are defined as follows:
            
            -   The sum of the elastic reserved CUs of all level-2 quotas equals the elastic reserved CUs of the level-1 quota.
                
            -   The elastic reserved CUs of the default level-2 quota cannot be edited. It is calculated by subtracting the sum of the elastic reserved CUs of custom level-2 quotas from the elastic reserved CUs of the level-1 quota.
                
        -   For a new quota
            
            -   This configuration applies only to the currently active configuration plan.
                
            -   If multiple scaling configuration plans exist, the new quota is added to all of them after it is created. In plans other than the currently active one, the default elastic reserved **CUs** is 0. Therefore, to adjust the number of CUs, edit the configuration plans on the **Scaling Configuration** tab.
                
        
        **Exclusive or Not**
        
        Specifies whether to make the quota strongly exclusive. If a quota is exclusive, its CUs cannot be occupied by other quota groups even if they are idle.
        
        -   This parameter can be configured only for level-2 quotas. If the level-2 quota type is **Interactive**, this parameter is set to exclusive by default and cannot be modified.
            
        -   This applies to quota groups that run services such as BI or ALGO. Jobs of this type may be used at any time. You must prevent them from being occupied by other quotas for a long time without being released. When the max value of a quota is greater than its min value, it may occupy other idle quotas.
            
        
        **Maximum Number of CUs for a Single Job**
        
        Sets the upper limit on concurrent CUs for jobs that run in this quota. An empty value indicates no limit. A value of `0` indicates an absolute limit. You can enter a positive integer to set a reasonable limit.
        
        -   If the level-2 quota type is Interactive, this parameter is unavailable by default.
            
        -   This prevents a single job from occupying many CUs for a long time, which would cause other jobs to wait for resources. You can also set a limit at the job level by running the `set odps.task.max.concurrent.cu=<CU_amount>;` command before the code to be executed. The job-level configuration has a higher priority than the quota-level configuration.
            
        
        **Enable Priority**
        
        The priority feature. For more information, see [Job priority](/help/en/maxcompute/user-guide/job-priority#concept-2554678).
        
        Jobs that run on this quota are executed with priority. This also takes effect if priority is enabled at the project level. If the level-2 quota type is **Interactive**, this parameter is unavailable by default.
        
        **Non-reserved CUs**
        
        The number of monthly non-reserved CUs.
        
        -   The non-reserved CUs of a level-1 quota is the number of non-reserved CUs purchased on a subscription basis. To scale out or scale in, you must upgrade or downgrade the quota. Scale-out is not possible due to current inventory shortages. This parameter cannot be edited here.
            
        -   The non-reserved CUs of a level-2 quota are defined as follows:
            
            -   The sum of the non-reserved CUs of all level-2 quotas equals the non-reserved CUs of the level-1 quota.
                
            -   The non-reserved CUs of the default level-2 quota cannot be edited. It is calculated by subtracting the sum of the non-reserved CUs of custom level-2 quotas from the non-reserved CUs of the level-1 quota.
                
        
        **Scheduling Policy**
        
        MaxCompute level-2 quota scheduling policies include FAIR and FIFO.
        
        -   FAIR (Fair scheduling)
            
            -   If jobs have the same priority, resources are evenly allocated to all jobs submitted at the same time.
                
            -   If jobs have different priorities, resources are first evenly allocated to higher-priority jobs. If resources remain, they are then evenly allocated to lower-priority jobs.
                
        -   FIFO (First in, first out)
            
            -   If jobs have the same priority, resources are allocated to the job that was submitted first.
                
            -   If jobs have different priorities, resources are allocated to the higher-priority job, even if it was submitted later than a lower-priority job.
                
        
        Select an appropriate scheduling policy as needed. You cannot set a scheduling policy for interactive level-2 quotas. For more information, see [Compute resources - Quota scheduling policies](/help/en/maxcompute/user-guide/quota-scheduling-policies#task-2348378).
        
        **Important**
        
        Starting from May 24, 2023, the default scheduling policy for new level-2 quotas in the China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and China (Chengdu) regions is FIFO. For level-2 quotas created in these regions before this date, the default scheduling policy is FAIR.
        
    2.  Delete a quota.
        
        On the **Quota Configuration** page, click the **Basic Configurations** tab, and then find the target quota and click **Delete** in the **Actions** column.
        
        When you delete a level-2 quota, the system removes it from all resource configuration plans. The corresponding `minCU` and Elastic Reserved CUs are added back to the default level-2 quota. To make adjustments, edit the configuration plans on the **Scaling Configuration** tab.
        
5.  Configure quota scaling.
    
    After you purchase a subscription MaxCompute project, each level-1 quota has a default resource configuration plan named `Default`.
    
    Each resource configuration plan contains the reserved CU and Elastic Reserved CU configurations for a level-1 quota and all its level-2 quotas. You can use multiple configuration plans with scheduled scaling management to handle scenarios where different configurations are needed at different times of the day. For example, if a level-2 quota has different CU requirements during the 00:00-08:00 and 08:00-24:00 periods, you can create two Quota configuration plans and use scheduled scaling management to switch between them.
    
    **Note**
    
    You can add up to 48 resource configuration plans. Each plan can have a different configuration to be enabled at different times of the day.
    
    1.  On the **Quota Configuration** page, click the **Scaling Configuration** tab.
        
    2.  On the **Scaling Configuration** tab, click **Add Configuration Plan**. In the **Add Configuration Plan** dialog box, enter a **Configuration Plan Name** and configure **Reserved CUs \[minCU,maxCU\]** and **Elastically Reserved CUs** for the level-2 quota.
        
    3.  Click **OK** to add the plan.
        
    4.  On the **Scaling Configuration** tab, find the target configuration plan and click **Apply Immediately** in the **Actions** column to apply it immediately. You can also use an existing plan when you configure **Scheduled Scaling Management**.
        
        You can click **Apply Immediately** for any configuration plan. If a time-based management schedule is set, the plan is overwritten by the next scheduled plan. Therefore, if you want to manually activate a specific plan and keep it active, you must clear all other time-based settings. This ensures that your action takes effect immediately and is not overwritten.
        
6.  (Optional) Perform other operations on resource configuration plans:
    
    -   View a configuration plan
        
        On the **Scaling Configuration** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3778759271/p847271.png) icon to the left of **Configuration Plan Name** to expand the plan details and view the information for each plan.
        
    -   Edit a configuration plan
        
        On the **Scaling Configuration** tab, find the target configuration plan and click **Edit** in the **Actions** column to update it.
        
        If you edit the currently active plan, you must also click **Apply Immediately** in the **Actions** column to apply the changes.
        
    -   Delete a configuration plan
        
        On the **Scaling Configuration** tab, find the target configuration plan and click **Delete** in the **Actions** column to delete it.
        
        The Default plan and the currently active plan cannot be deleted.
        
    -   Clone a configuration plan
        
        On the **Scaling Configuration** tab, find the target configuration plan and click **Clone** in the **Actions** column to create a copy of the plan.
        
7.  Configure time-based management.
    
    You can set different quota configuration plans to take effect at different times of the day. This allows for time-based management of quota configurations.
    
    **Note**
    
    Time-based scheduling may have a delay of up to 5 minutes.
    
8.  On the **Scaling Configuration** tab, click **Edit Time Plan** in the **Scheduled Scaling Management** area.
    
9.  Click **Add Effective Period** and select an **Effective Start Time** and a **Configuration Plan**.
    
    **Note**
    
    -   There is only one overall time plan. It has a default start time of 00:00, which cannot be modified or deleted, and it corresponds to the `Default` configuration plan, which can be modified. If you do not add other start times, the same configuration plan is used throughout the day.
        
    -   You can activate different configuration plans on the hour and half-hour. A single configuration plan can be activated multiple times.
        
    

## View quota consumption

View the consumption of CU resources within a level-1 quota. By default, the primary account and its RAM users can view this information.

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Quotas**.
    
3.  On the **Quotas** page, find the target quota and click **Configure Resources** in the **Actions** column.
    
4.  On the **Configure Resources** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0141357571/p997400.png) icon to the left of a Level-2 Quota to expand it and view the consumption trend chart, the quota, and the list of associated projects for **CPU Resources (Unit: Core)** and **Memory Resource (Unit: GB)**.
    
    -   For **CPU Resources (Unit: Core)** and **Memory Resource (Unit: GB)**, you can select different level-2 quotas and time ranges to view usage trends for different types of CUs. Click a time point to view the job snapshot list for that time.
        
    -   The **Quota and associated Project list** shows the projects that use the corresponding level-2 quota as their default compute Quota.
        

## Quota rules

You can configure Quota rules to schedule jobs that meet certain conditions to a specific Quota. For more information, see [Quota rules](/help/en/maxcompute/user-guide/use-of-computing-resources#section-p7z-v8r-ay9).

## Quota tag management

MaxCompute allows you to attach tags to or detach tags from level-1 subscription Quotas. For detailed usage and limitations of tags, see [What are tags?](/help/en/resource-management/tag/product-overview/tag-overview#concept-2407084).

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Quotas**.
    
3.  Create a tag.
    
    1.  On the **Quotas** page, view the list of available quotas.
        
    2.  Create a tag for a single level-1 quota.
        
        1.  Hover over the ![Edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8258981861/p551174.png) icon in the **Tag** column of the target top-level quota (for the **Subscription** billing method only), and click **Edit** or **Edit**.
            
            If no tags have been created, **Edit** is displayed. Otherwise, **Edit** is displayed.
            
        2.  In the **Configure Tags** dialog box, enter a **Tag Key** and a **Tag Value**.
            
        3.  Click **OK**. In the **Configure Tags successfully** dialog box, click **Close**.
            
        
    3.  Create tags for multiple level-1 quotas in a batch.
        
        1.  Select the level-1 quotas to which you want to add tags in batches and click **Batch Add Tag** at the bottom of the page.
            
        2.  In the **Configure Tags** dialog box, enter a **Tag Key** and a **Tag Value**.
            
        3.  Click **OK**. In the **Configure Tags successfully** dialog box, click **Close**.
            
4.  Filter by tag.
    
    On the **Quotas** page, click **Filter by Tag** to filter quotas by tag key and value.
    
5.  (Optional) Detach a tag.
    
    -   Detach a tag from a single level-1 quota.
        
        1.  Hover over the ![Edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8258981861/p551174.png) icon in the **Tag** column of the target level-1 quota, and click **Edit**.
            
        2.  In the **Configure Tags** dialog box, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8258981861/p551021.png) icon next to the tag that you want to detach.
            
        3.  Click **OK**. In the **Configure Tags successfully** dialog box, click **Close**.
            
    -   Detach tags from multiple level-1 quotas in a batch.
        
        1.  Select the level-1 quotas from which you want to detach tags in batches and click **Batch Remove Tag** at the bottom of the page.
            
        2.  In the **Delete Tags for Multiple Resources** dialog box, select the tags that you want to detach.
            
        3.  Click **Detach x Tags** (where x is the number of tags to detach). In the **Configure Tags successfully** dialog box, click **Close**.
