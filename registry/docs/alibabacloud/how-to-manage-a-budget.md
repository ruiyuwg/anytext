Control cloud spending by creating budgets with alert thresholds. Monitor actual and predicted costs in real time, and receive notifications when spending exceeds your budget.

## What is Budget Management?

Budget Management helps you monitor cloud spending and prevent unexpected costs. Set budgets for accounts, departments, projects, or specific services, then configure alert thresholds to receive notifications when spending exceeds your limits.

Budget Management supports two types:

-   **Cost budget**: Monitor monetary spending by setting budget amounts and alert thresholds based on accounts, products, regions, and other dimensions. Receive alerts when actual or predicted spending reaches the threshold.
    
-   **Usage or coverage budget**: Track how effectively you use savings plans, reserved instances, and Storage Capacity Units (SCUs). Set percentage thresholds and receive alerts when usage or coverage falls below your targets.
    

**Note**

Alerts notify you when thresholds are exceeded, but do not restrict resource usage. You must take action to control spending.

## Getting started

Before first use, activate Budget Management in the **Expenses and Costs** console. In the left navigation pane, click **[Budget Management](https://billing-cost-intl.aliyun.com/expense-manage/expense-budget/list)**, then click **Activate for Free**. After you activate the feature and your account has spending data, budget data appears within 24 hours.

## Create a budget

Creating a budget involves selecting the type, defining the scope, setting the budget amount and cycle, and configuring alert rules.

### Cost budget

1.  Log on to the **Expenses and Costs** console. On the [Budgets](https://billing-cost-intl.aliyun.com/expense-manage/expense-budget/list) page, click **Create Budget**.
    
2.  On the **Create Budget** page, select **Cost budget**, then click **Next**.
    
3.  Configure basic information:
    
    **Parameter**
    
    **Description**
    
    **Budget Name**
    
    Enter a name that describes the budget's purpose.
    
    **Enterprise/Organization/Account**
    
    Enterprise accounts only. Select the account scope for the budget:
    
    -   MA accounts with enterprise finance enabled can create budgets for the MA account or member accounts.
        
    -   Member accounts can only create budgets for themselves.
        
    
    **Budget Scope**
    
    Define the budget scope using dimensions such as cost center, product, region, and consumption type. Click **Add** to add multiple scopes.
    
    **Cycle**
    
    Set the aggregation period: **Month**, **Quarter**, or **Year**.
    
    **Start and End Dates**
    
    Select start and end dates for the budget. Maximum span: 24 aggregation periods.
    
    **Remarks**
    
    Optional. Add notes or context about this budget.
    
    After configuring basic information, a chart displaying historical and predicted spending appears.
    
4.  Configure the budget plan:
    
    **Parameter**
    
    **Description**
    
    **Budget Plan Type**
    
    Choose how to set budget amounts:
    
    -   **Monthly Fixed Value**: Set one amount for all aggregation periods.
        
    -   **Monthly Variable Value**: Customize amounts for each aggregation period (maximum: 12 monthly, 4 quarterly, or 3 annual periods).
        
    
    **Total Budget**
    
    Automatically calculated based on your aggregation periods and plan type.
    
    Click **Next** to continue.
    
5.  Configure alert rules. Click **+Add Alerts** to add alert groups (maximum: 5 per budget).
    
    **Parameter**
    
    **Description**
    
    **Alert Object**
    
    Select when to trigger alerts:
    
    -   **Actual cost (this period)**: Compares current aggregation period actual spending to current budget.
        
    -   **Predicted Value of Current Cycle**: Compares current aggregation period predicted spending to current budget.
        
    -   **Accumulative Predicted Value**: Compares cumulative predicted spending to total budget.
        
    -   **Accumulated actual**: Compares cumulative actual spending to total budget.
        
    
    **Threshold Type**
    
    -   **Fixed Value**: Trigger alert when spending exceeds a fixed amount.
        
    -   **Percentage**: Trigger alert when spending exceeds a percentage of the budget.
        
    
    **Threshold**
    
    Set the threshold value that triggers the alert.
    
    **Alert Remarks**
    
    Optional. Add notes about this alert rule.
    
    **Message Settings**
    
    Configure notification recipients in [Message Center](https://notifications.console.alibabacloud.com/subscribeMsg). Ensure recipients have verified email addresses.
    
6.  Click **Next**. Review all settings and click **Submit** to create the budget.
    

**Note**

-   Actual and predicted values become available after two days.
    
-   Alert notifications are sent the next day after thresholds are exceeded.
    
-   Alerts configured for future aggregation periods take effect at 12:00 PM (UTC+8) the following day.
    

### Usage or coverage budget

1.  Log on to the **Expenses and Costs** console. On the [Budgets](https://billing-cost-intl.aliyun.com/expense-manage/expense-budget/list) page, click **Create Budget**.
    
2.  Select **Usage or coverage budget** and click **Next**.
    
3.  Configure basic information:
    
    **Parameter**
    
    **Description**
    
    **Budget Name**
    
    Enter a name that describes the budget's purpose.
    
    **Enterprise/Organization/Account**
    
    Select the account scope (same rules as cost budgets).
    
    **Deduct Resources**
    
    Select resource type: Savings plans, reserved instances, or SCUs.
    
    **Usage or coverage budget**
    
    -   **Usage (%)**: Measures how efficiently resources are used.
        
    -   **Coverage**: Measures deduction ratio for pay-as-you-go resources.
        
    
    **Budget Scope**
    
    Define scope by resource type, instance ID, or other dimensions. Click **Add** to add multiple scopes.
    
    **Cycle**
    
    Set the aggregation period: **Month**, **Quarter**, or **Year**.
    
    **Start and End Dates**
    
    Select start and end dates. Maximum span: 24 aggregation periods.
    
    **Remarks**
    
    Optional. Add notes about this budget.
    
    After configuring basic information, a chart displaying historical utilization appears.
    
4.  Configure the budget plan:
    
    **Parameter**
    
    **Description**
    
    **Budget Plan Type**
    
    Choose how to set budget percentages:
    
    -   **Monthly Fixed Value**: Set one percentage for all aggregation periods.
        
    -   **Monthly Variable Value**: Customize percentages for each aggregation period (maximum: 12 monthly, 4 quarterly, or 3 annual periods).
        
    
    **Total Budget**
    
    Automatically calculated based on your aggregation periods and plan type.
    
    Click **Next** to continue.
    
5.  Configure alert rules. Click **+Add Alerts** to add alert groups (maximum: 5 per budget).
    
    **Parameter**
    
    **Description**
    
    **Threshold**
    
    Trigger alert when utilization or coverage falls below this percentage.
    
    **Alert Remarks**
    
    Optional. Add notes about this alert rule.
    
    **Message Settings**
    
    Configure notification recipients in [Message Center](https://notifications.console.alibabacloud.com/subscribeMsg).
    
6.  Review all settings and click **Submit** to create the budget.
    

**Note**

Actual utilization and coverage values become available the next day.

## View and manage budgets

On the [Budgets](https://billing-cost-intl.aliyun.com/expense-manage/expense-budget/list) page, view all your budgets and their current status.

### Budget list

The budget list displays fields including the following:

-   **Type**: Cost budget, or usage or coverage budget.
    
-   **Total Budget**: Total budget from start to end date.
    
-   **Actual Total Amount**: Cumulative actual spending from start date to current date.
    
-   **Estimated Total Amount**: Projected spending from start date to current date.
    
-   **Actual Total Amount/Total Budget**: Progress of actual spending against budget (percentage).
    

Available operations: **Edit**, **Copy**, **Delete**, or export the budget list.

### Budget analysis

Click **Estimate-to-Actual Analysis** in the **Actions** column to view detailed budget analysis.

**Note**

Predicted values are based on historical data and may differ from actual costs. Use predicted data as reference only.

-   **Forecast vs. Actual Trend**: Monthly growth trend comparing actual and predicted spending.
    
-   **Current Period Forecast vs. Actual**: Current aggregation period's actual and forecasted totals as a percentage of the current budget. Not available for usage and coverage budgets.
    
-   **Budget Records**: Actual values, budgeted values, and variances for each aggregation period.
    
-   **Detailed Analysis**: Click **Actual Expenses** in the **Actions** column to view detailed consumption data in Cost Analysis or Savings Plan Usage.
    

## Best practices

Follow these steps to create effective budgets that optimize costs without constraining business growth.

### Analyze historical spending

Review 3-6 months of billing data to establish a spending baseline:

-   **Fixed costs**: Identify stable monthly expenses such as long-running servers, reserved instances, and database services.
    
-   **Variable costs**: Observe periodic fluctuations between peak and off-peak periods. Exclude one-time spikes from performance testing, migrations, or unexpected events.
    

### Estimate future spending

Work with business and development teams to understand upcoming changes:

-   **New projects**: Estimate costs for new applications, services, or AI/ML workloads.
    
-   **Growth expectations**: Account for increased traffic, users, and resource requirements.
    
-   **Architecture changes**: Consider impacts from migrations, upgrades, or refactoring.
    
-   **Data growth**: Factor in increasing storage and backup needs.
    

### Define budget scope

Break down the overall budget into sub-budgets with clear ownership:

-   **By project or product**: One budget per product line or major project.
    
-   **By team or department**: Separate budgets for development, QA, and operations teams.
    
-   **By environment**: Distinct budgets for production, staging, and development to prevent resource misuse.
    
-   **By cost center**: For large enterprises, align with internal financial structures.
    

### Set amounts with buffer

Add 10-20% buffer to handle uncertainty:

`Budget = (Historical Baseline + Estimated Growth) × (1 + Buffer %)`

### Configure tiered alerts

Set multi-level alerts for proactive monitoring:

-   **50% threshold**: Informational notification to project owner.
    
-   **80% threshold**: Warning to team to check for anomalies.
    
-   **100% threshold**: Critical alert to owner and finance requiring immediate review.
    

**Predicted spending**: Alert when forecast reaches 100% to enable proactive adjustment.

### Review and iterate

Hold monthly or quarterly cost reviews to analyze budget variance, identify missed cost items, and adjust future budgets based on actual business needs.

## Legacy console

To access Budget Management in the legacy console: Log on to the **Expenses and Costs** console, then navigate to **Cost** > **[Budgets](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-budget/list)**. The workflow is the same as described above.
