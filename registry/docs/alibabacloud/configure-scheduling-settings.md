If your task needs to be periodically run, you must go to the Scheduling Settings tab in DataStudio to enable periodic scheduling before you configure scheduling settings for the task. This way, the scheduling settings of the task can take effect. In addition, DataWorks allows you to specify a default resource group to periodically run the task. You can also configure default rerun properties, the number of times that an auto triggered task can be rerun, and the rerun interval for the task.

## Limits

The default scheduling settings take effect only for new auto triggered tasks.

## Modify the default scheduling settings for auto triggered tasks

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and Governance** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the lower-left corner of the DataStudio page, click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1013006071/p381101.png) icon. On the page that appears, click the **Scheduling Settings** tab.
    
3.  On the **Scheduling Settings** tab, click Change to configure the parameters.
    
    ![调度配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4312789661/p381085.png)The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Periodic scheduling**
    
    Specifies whether to enable periodic scheduling. Auto triggered tasks in the current workspace can be run as scheduled only if you turn on this switch.
    
    **Note**
    
    If you turn off this switch, the instances that have been generated for auto triggered tasks on the current day are still run as scheduled. However, DataWorks does not generate auto triggered task instances that are scheduled to run on the next day at night on the current day.
    
    **Time Zone for Scheduling**
    
    The time zone that is used for task scheduling. By default, the time zone that is used for task scheduling is the time zone of the server. If you select a region outside the Chinese mainland and you want to set the time zone that is used for task scheduling to UTC+8, [submit a ticket](https://smartservice.console.alibabacloud.com/).
    
    **Note**
    
    Before you modify this parameter, refer to [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#section-6y2-7ni-d1h) to understand the impact imposed by the modification.
    
    **Default Scheduling Cycle**
    
    The time when the task is scheduled to run. By default, the scheduling time is randomly generated within the range from `00:00 to 00:30`. You can specify a custom scheduling time based on your business requirements.
    
    **Resource group**
    
    The default resource group for scheduling that is used to schedule tasks.
    
    **Data integration resource group**
    
    The default resource group for Data Integration that is used to schedule Data Integration tasks.
    
    **Rerun**
    
    The default rerun policy for auto triggered tasks.
    
    **Note**
    
    If you set the **Rerun** parameter to Allow Regardless of Running Status or Allow upon Failure Only, make sure that the data idempotence of auto triggered tasks is not affected. Otherwise, data quality issues may occur after multiple reruns.
    
    **Number of reruns**
    
    The number of times that an auto triggered task can be rerun after it fails to run as scheduled.
    
    Valid values: 1 to 10. The value 1 indicates that the task is rerun once after it fails to run as expected. The value 10 indicates that the task is rerun ten times after it fails to run as expected. You can change the value of this parameter based on your business requirements.
    
    **Rerun interval**
    
    The default interval between two consecutive reruns.
    
    Valid values: 1 to 30. Unit: minutes.
    
    **Enable auto parsing when submitting a file**
    
    Specifies whether to enable automatic parsing for auto triggered tasks. If you enable automatic parsing, after a node is committed, DataWorks automatically parses the output names of the node and its ancestor nodes based on the latest code.
    
4.  Click **Save**.
    
    Then, new auto triggered tasks in the current workspace use the modified scheduling settings.
