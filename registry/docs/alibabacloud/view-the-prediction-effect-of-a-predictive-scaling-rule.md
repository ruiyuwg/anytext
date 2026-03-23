This topic describes how to view the prediction of a predictive scaling rule. If you created a predictive scaling rule for your scaling group, you can refer to this topic to view the prediction of the predictive scaling rule.

## Background information

After a predictive scaling rule is executed, you can go to its details page to view the calculation. Then, you can check whether the calculation meets your expectations and determine whether any adjustment is required. For more information about scaling rules, see [Scaling rule types](/help/en/auto-scaling/user-guide/overview-2#section-ni6-i1u-2vg).

We recommend that you set the **Predictive Mode** parameter of your predictive scaling rule to **Predict Only** first. After your predictive scaling rule is executed, you can check whether the prediction of the rule meets your expectations. If the prediction meets your expectations, reset the **Predictive Mode** parameter to **Predict and Scale** to enable automatic adjustment of the minimum and maximum numbers of instances in your scaling group.

## Procedure

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the desired scaling group and use one of the following methods to open the scaling group details page.
    
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
        
    -   Click **Details** in the **Actions** column.
        
5.  In the upper part of the scaling group details page, click the **Scaling Rules and Tasks** tab.
    
6.  On the **Scaling Rules** tab, find the predictive scaling rule that you want to operate and click its ID in the **Scaling Rule ID/Name** column.
    
    You can go to the details page of the scaling rule to view multiple metrics that can help you evaluate the prediction. Examples:
    
    Figure 1. A comparison of CPU utilizations ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0678449951/p47840.png)
    
    Figure 2. A comparison of instance numbers in the scaling group ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0678449951/p47841.png)
    
    Figure 3. The scheduled tasks that are generated based on the predictive scaling rule![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0678449951/p47842.png)
    

## What to do next

After you confirm the prediction of your predictive scaling rule, you can reset the **Predictive Mode** parameter to **Predict and Scale**. For more information, see [Modify or delete a scaling rule](/help/en/auto-scaling/user-guide/manage-scaling-rules#section-l2v-k5s-gnr). If you initially set the **Predictive Mode** parameter to **Predict and Scale**, the predictive scaling rule can generate scheduled tasks based on its predictions.

-   **View the generated scheduled tasks**
    
    1.  In the left-side navigation pane, choose **Scaling Tasks** > **Scheduled Tasks**.
        
    2.  On the **Scheduled Tasks** page, view the details of the desired scheduled task.
        
        The naming format of a predictive scaling rule-based scheduled task is `PredictiveScaling-_Scaling rule name_-_Execution time_`.
        
        ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0678449951/p47843.png)
        
-   **View the details of a scheduled task**
    
    After a scheduled task is executed in a scaling group, the maximum and minimum numbers of instances in the scaling group are automatically adjusted. Auto Scaling automatically deletes scheduled tasks that are successfully executed. You can go to the **Scaling Activities** tab to view the execution information of a scheduled task, such as the task status, cause, details, and status description.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0678449951/p47844.png)
