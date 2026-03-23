DataWorks introduces the scheduling calendar feature. You can use the feature to define scheduling dates and scheduling methods in a more flexible manner. This topic describes the typical use scenarios of the scheduling calendar feature and how to configure and use a scheduling calendar.

## **Background information**

The scheduling calendar feature is suitable for industries and scenarios that require flexible scheduling dates. Examples:

-   In the financial industry, tasks cannot be run when the financial market is closed, such as on statutory holidays and weekends. You can configure an annual scheduling calendar and specify the dates on which you want to schedule the tasks in the calendar. This way, when you develop tasks, you can directly select the configured scheduling calendar, and the system can schedule the tasks based on the scheduling calendar.
    
-   If you want the system to periodically schedule a task by hour on specific days in a week, you can configure a scheduling calendar. For example, you can specify Monday, Tuesday, and Wednesday of each week as scheduling days and the other days as non-scheduling days in a scheduling calendar. When you configure scheduling settings for the task, you can select the configured scheduling calendar and set the scheduling cycle of the task to hour.
    

## Limits

-   Only an Alibaba Cloud account, a tenant administrator, or a RAM user to which the **AliyunDataWorksFullAccess** policy is granted can create a scheduling calendar. You can grant the required permissions by [adding members to the workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   The scheduling calendar feature is available only in DataWorks Enterprise Edition.
    
-   A maximum of 10 scheduling calendars can be created within each tenant.
    

## Go to the Schedule Calendar Management page

1.  Go to the Operation Center page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
    
2.  Go to the Schedule Calendar Management page.
    
    In the left-side navigation pane of the Operation Center page, click **Tenant Schedule Setting** to go to the **Schedule Calendar Management** page.
    

## **Create a scheduling calendar**

On the Schedule Calendar Management page, click **New Schedule Calendar**. In the New Schedule Calendar panel, configure the following parameters. After the configuration is complete, click **Submission**.

-   Configurations of basic parameters
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the scheduling calendar. The name must be unique within the current tenant.
    
    **Responsible Person**
    
    The owner of the scheduling calendar.
    
    **Applicable Work Space**
    
    The workspaces to which the scheduling calendar can be applied.
    
    You can select Applicable to all workspaces, or select specific workspaces. After the scheduling calendar is submitted, the scheduling calendar can be applied to the workspaces that you select.
    
    **Calendar Constraints**
    
    The strength type of the constraint that you want to impose on the scheduling calendar. The strength type determines whether you need to configure a validity period for the scheduling calendar. Valid values:
    
    -   Strong: If you set the parameter to this value, you must configure the Calendar Validity Period parameter for the scheduling calendar and specify the dates within the validity period as scheduling days or non-scheduling days. In addition, you must configure the Expiration Reminder parameter.
        
    -   Weak: If you set the parameter to this value, you do not need to configure the Calendar Validity Period parameter for the scheduling calendar. You need to specify only scheduling days.
        
    
-   Configurations of constraints on the scheduling calendar
    
    ## Required parameters for a strong constraint
    
    **Parameter**
    
    **Description**
    
    **Calendar Validity Period**
    
    The validity period of the scheduling calendar. After you specify a validity period, you must specify each date within the validity period as a scheduling day or a non-scheduling day for the **Scheduling Day Configuration** parameter.
    
    **Expiration Reminder**
    
    The period of time during which the system notifies the calendar owner of the expiration of the scheduling calendar. The system sends a text message to the owner at `9:30` every day during the specified period of time. If the validity period of the scheduling calendar is not updated one day before the expiration date, the system initiates a phone call to the owner on the expiration date. After the validity period ends, the system no longer reminds the owner.
    
    **Overtime Processing Policy**
    
    The processing policy for tasks that are scheduled based on the scheduling calendar after the validity period of the scheduling calendar ends.
    
    **Scheduling Day Configuration**
    
    The scheduling method for a specific date. The scheduling methods that you can specify vary based on the value of the Calendar Constraints parameter. You can specify scheduling methods by configuring parameters that are displayed in the New Schedule Calendar panel.
    
    ## Required parameters for a weak constraint
    
    **Parameter**
    
    **Description**
    
    **No Processing Policy Set**
    
    Some dates may not be specified as scheduling days or non-scheduling days for the **Scheduling Day Configuration** parameter. You can configure this parameter to specify how to schedule tasks on these dates.
    
    **Scheduling Day Configuration**
    
    The scheduling method for a specific date. The scheduling methods that you can specify vary based on the value of the Calendar Constraints parameter. You can specify scheduling methods by configuring parameters that are displayed in the New Schedule Calendar panel.
    

## **Reference the scheduling calendar**

When you configure scheduling settings for a task in a workspace to which the scheduling calendar can be applied, you can select Customize Calendar for the Scheduling Calendar parameter in the **Schedule** section of the **Properties** tab of nodes in Data Studio and then select the scheduling calendar from the drop-down list that appears. This way, the task can be scheduled based on the scheduling calendar.

**Note**

A scheduling calendar takes effect only if the scheduling type of your task is **normal scheduling**.

-   If the scheduling type of your task is **normal scheduling**, the task is scheduled based on the scheduling calendar that is selected for the task.
    
-   If the scheduling type of your task is **scheduling pause** or **dry run**, the task is scheduled based on the value of the Recurrence parameter configured for the task.
    

## View workspaces and tasks that reference the scheduling calendar

You can go to the Schedule Calendar Management page and click View Reference Tasks in the Operation column of the scheduling calendar to view the workspaces and tasks that reference the scheduling calendar.
