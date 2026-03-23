You can view the details of a scaling activity to learn the results of scaling activities triggered by scheduled tasks, event-triggered tasks, or manual execution of scaling rules.

## Background information

The possible states of a scaling activity include **Rejected**, **Executing**, **Successful**, **Warning**, and **Failed**. For more information, see [Status](/help/en/auto-scaling/user-guide/overview#section-02d-seh-4vm).

**Note**

If not all the Elastic Compute Service (ECS) instances that are involved in a scale-out are added to a scaling group, Auto Scaling rolls back the ECS instances that failed to be added and considers the scale-out as a complete scaling activity. In this case, the scaling activity enters the **Warning** state. For more information, see [ECS instance rollback](/help/en/auto-scaling/user-guide/overview#section-jp3-qxl-rxd).

## Procedure

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
2.  In the left-side navigation pane, click **Scaling Groups**.
3.  In the top navigation bar, select the region where Auto Scaling is activated.
4.  Find a scaling group and use one of the following methods to go to the scaling group details page:
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
    -   Click **Details** in the **Actions** column.
5.  In the upper part of the page that appears, click the **Scaling Activities** tab.
    
6.  Find the scaling activity whose details you want to view and click its ID in the **Scaling Activity ID** column.
    
    On the scaling activity details page, you can view the status and cause of the scaling activity. You can also view the total number of instances in the scaling group after the scaling activity is complete. Example:
    
    ![伸缩活动结果.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3279020071/p730207.png)
