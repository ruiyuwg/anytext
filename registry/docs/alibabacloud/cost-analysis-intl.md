The cost analysis feature allows you to view the cost trends of your cloud services and resources and predict the costs from multiple dimensions and in a graphical manner.

## View cost trends

If you have multiple accounts, establish associations among the accounts on the [Account Linking](https://usercenter2-intl.console.alibabacloud.com/finance/link-account/list) page. Then, log on to the **Expenses and Costs** console and choose Cost Management > [Cost Analysis](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze) in the left-side navigation pane. On the Cost Analysis page, you can view the cost data of all or some accounts associated with your main account.

**Note**

-   Cost analysis data is displayed one day after the data is generated.
    
-   If you select Current Amortization-Pretax Amount for the Cost Type parameter, you cannot view data at the hourly granularity or classify data by instance ID.
    
-   Cost prediction is performed based on your historical pay-as-you-go costs. The predicted pay-as-you-go costs may be different from the actual costs within the prediction period. The prediction data is for reference only. The system can predict the costs of at most 12 months. For more information, see the "Predict costs" section of this topic.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136345271/p625956.png)

On the Cost Trend tab, you can view cost trends from multiple dimensions.

-   **Category**: allows you to view cost trends from various dimensions, such as service, service detail, and cost center.
    
    -   Instance Tag: allows you to specify a tag. This way, you can view the cost trends of the resources with the specified tag.
        
    -   Instance ID: allows you to select up to 10 instances for cost trend analysis.
        
-   **Cost Type**: allows you to view the cost trends of a specific type. The following types are supported: pretax amount, pretax gross amount, and current amortization-pretax amount.
    
-   **Time Unit**: allows you to view data of a specific time range at the specified granularity, such as hour, day, and month.
    
    -   You can view data of up to 14 days by instance.
        
    -   You can view data of up to 14 days by hour.
        
-   **Graph Type**: allows you to view data in a chart of a specific type, such as stacked column bar, line chart, and bar chart.
    
-   **Filters**: allows you to filter out cost trends based on specific dimensions. By default, all filter dimensions are included. You can select Include or Exclude for each dimension. After you configure the filters, the data in the cost trend chart contains only information about the selected dimensions.
    
-   **Reports**: Click **Save** in the upper-left corner to save the cost analysis data as a report. Click **Reports** to go to the [Reports](https://usercenter2-intl.console.alibabacloud.com/expense-manage/template-manage) page. On this page, you can view and manage the full report data. For more information, see the "Manage reports" section of this topic.
    
    **Note**
    
    Only the top 10 items are displayed in a time granularity-based chart. Other items are displayed as Others. You can export data to view the details of all items.
    
-   **Data table**: allows you to preview or export data within the selected range. The value in the last column of the data table is the total cost of each item that you select. This way, you do not need to calculate the total cost.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136345271/p562596.png)
    
-   **Budget**: allows you to select a budget from the Budget Name drop-down list in the upper-right corner or create a budget to view the cost data at the specified time granularity.
    
    Click **Estimate-to-Actual Analysis** in the upper-right corner to go to the Estimate-to-Actual Analysis page. On this page, you can view the comparison between actual costs and the configured budgets.
    
    Click **Set Budget** to go to the [Budget Management](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-budget/list) page. On this page, you can create or manage budgets.
    
    **Note**
    
    For more information about how to manage budgets, see [Budget management](/help/en/user-center/budget-management).
    

## **Manage reports**

On the [Reports](https://usercenter2-intl.console.alibabacloud.com/expense-manage/template-manage) page, you can view all saved cost analysis reports and the filter conditions for each report.

-   Find the report that you want to view and click **View** in the Operations column to view the cost trend chart in the report.
    
-   Find the report that you want to delete and click **Delete** in the Operations column to delete the report. You can also select multiple reports and click **Delete** below the report list to delete the reports at a time.
    

You can save the cost trend chart that is generated based on the filter conditions you specify as a report and name the report.

![3-ch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4367855271/p249664.jpg)

## **Predict costs**

You can set the Time Unit parameter to a range that contains future dates to view the total costs predicted for the specified range.

1.  Enable prediction: If you set the Time Unit parameter to a range that contains future dates, you must click **Enable Forecast** in the dialog box that appears to enable the cost prediction feature.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136345271/p548485.png)

2.  View prediction trends: After you enable the cost prediction feature, you can view the prediction trend data for the next 12 months at most.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136345271/p625963.png)

**Note**

1.  After you activate the cost analysis feature, you need to wait for 48 hours before you can view the predicted payable amount.
    
2.  After you activate the cost amortization feature, you need to wait for 48 hours before you can view the predicted amortization cost.
    
3.  You must have used Alibaba Cloud services for more than 60 days, and your average daily consumption amount must be greater than USD 1.
    
4.  Cost prediction by day is supported only for the pay-as-you-go billing method. Cost prediction by month is supported for both the subscription and pay-as-you-go billing methods.
    
5.  Cost analysis only supports prediction of the total amount, but not the costs in detailed dimensions.
    
6.  The predicted costs may be different from the actual costs and are for reference only.
    

## **FAQ**

Q: What do I do if the cost data on the Cost Analysis page is different from the amount in amortization cost bills?

A: The two pages process data of different ranges. The Cost Analysis page only supports amortization data for bills of August 2021 or later. However, full data is displayed in amortization cost bills.
