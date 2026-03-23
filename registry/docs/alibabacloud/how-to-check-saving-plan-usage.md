This topic describes how to query savings plan usage and coverage metrics and use them to optimize your plan configuration.

## Query savings plan usage

#### **What is savings plan usage?**

Usage reflects the extent to which your savings plan is utilized. A high usage rate indicates that your committed consumption is being used efficiently.

**Formula**: Savings plan usage = Deducted amount / Total amount (savings plan)

-   **Deducted amount**: The actual amount of pay-as-you-go bills offset by the savings plan during a specific period.
    
-   **Total amount (savings plan)**: The total amount of the committed consumption for a specific period, calculated as: Hourly commitment × Total hours in the period.
    

**Note**

The **Saved Amount** displayed in the console represents your net cost savings (deducted amount minus the cost of the plan). For the purpose of calculating usage and coverage, ensure that you use the **deducted amount**, which reflects the total gross bill value covered by the plan.

**Example scenario**

You purchase a 3-year, all-upfront, general-purpose savings plan. From October 1, 2025, to December 31, 2025, the **total amount (savings plan)** is USD 160.80, and the **deducted amount** is USD127.41.

Usage = 127.41 / 160.80 = 79.24%.

This indicates that, while the savings plan was applied to offset costs, approximately 20% of the committed quota remains unused. Consider adjusting your resource strategy to improve the utilization rate.

You can query your savings plan usage in the following ways:

## Console

1.  On the **[Expenses and Costs](https://billing-cost.console.alibabacloud.com/resource/spn/overview)** console, navigate to **Billing Account** \> **[Savings Plan](https://billing-cost.console.alibabacloud.com/resource/spn/overview)**.
    
2.  Switch to the **Usage** tab. In the panel on the right, query usage data by **Time Dimension** or by setting **Filters**.
    
    -   **Time Dimension**: Supports queries by **Hour**, **Day**, or **Month**. Hourly data is available for the last 30 days, daily data for the last 90 days, and monthly data for the last 18 months.
        
    -   **Filters****:** To query the usage of specific resources, filter by criteria such as **Type** and **Region**.
        
    -   **Query by Budget**: Create a **Usage or coverage budget** on the [Budgets](https://billing-cost.console.alibabacloud.com/expense-manage/expense-budget/list) page to query usage based on that budget. For more information, see [Budget Management](/help/en/user-center/how-to-manage-a-budget).
        
3.  After you set the search criteria, the page displays overall data such as **Expected Amount**, **Total Amount (Savings Plan)**, and **Saved Amount**. Below, you can query the **Usage** trend and **Usage Details** to help you analyze your overall usage.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8910846371/p893905.png)

#### **Legacy console**

1.  On the **[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** console, navigate to **Savings Plan** > **[Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview)**.
    
2.  Switch to the **Usage** tab. Query usage data by **Time Range** or by adding **Search Conditions**.
    
    -   **Time Unit**: Supports queries by **Hour**, **Day**, or **Month**. Hourly data is available for the last 30 days, daily data for the last 90 days, and monthly data for the last 18 months.
        
    -   **Search Conditions**: To query the usage of specific resources, filter by criteria such as **Account** and **Type**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9641138671/p1044554.png)
        
3.  After you set the search criteria, the page displays overall data such as **Expected Amount**, **Total Amount (Savings Plan)**, and **Saved Amount**. Below, you can query the **Usage** trend and **Usage Details** to help you analyze your overall usage.
    

## OpenAPI

Query usage using the following API operations.

**API operation**

**Description**

[DescribeSavingsPlansUsageTotal](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describesavingsplansusagetotal)

Queries the summary of savings plan usage.

[DescribeSavingsPlansUsageDetail](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describesavingsplansusagedetail)

Queries the details of savings plan usage.

**Note**

Usage data becomes final and accurate three days after the billing cycle (T+3).

The **Usage** tab does not display data for total-amount savings plans; this information is available on the **Overview** tab of the **Savings Plan** page.

## Query savings plan coverage

#### **What is savings plan coverage?**

Coverage reflects the percentage of your pay-as-you-go resource spending that is offset by your savings plan. A higher coverage rate indicates that a larger proportion of your eligible resource costs is being offset by the savings plan.

**Formula**: Savings plan coverage = Deducted amount / Total spending on eligible resources

-   **Deducted amount**: The pay-as-you-go amount actually offset by the savings plan.
    
-   **Total spending on eligible resources**: Total amount (savings plan) + pay-as-you-go amount exceeding the commitment.
    

**Note**

The **total spending on eligible resources** is not a single value displayed in the UI. It is calculated by adding your **total amount (savings plan)** to the amount you paid for eligible resources that exceeded your plan's commitment.

To see the total potential for savings, refer to the **expected amount** (pay-as-you-go amount at normal rates) on the **Overview** tab.

**Example scenario**

You purchase a 3-year, all-upfront, general-purpose savings plan. From October 1, 2025, to December 31, 2025, the **deducted amount** is USD 1.23, and the **total spending on eligible resources** is USD 1.23.

Coverage = 1.23 / 1.23 = **100%**.

This means that the savings plan completely covered the spending on eligible pay-as-you-go resources, achieving optimal cost savings.

Query your savings plan coverage in the following ways:

## Console

1.  On the **[Expenses and Costs](https://billing-cost.console.alibabacloud.com/resource/spn/overview)** console, navigate to **Billing Account** \> **[Savings Plan](https://billing-cost.console.alibabacloud.com/resource/spn/overview)**.
    
2.  Switch to the **Coverage** tab. Query coverage data using the following criteria or by setting **Filters**.
    
    -   **Time Dimension**: Supports queries by **Hour**, **Day**, or **Month**. Hourly data is available for the last 30 days, daily data for the last 90 days, and monthly data for the last 18 months.
        
    -   **Filters****:** To query the coverage of specific instances, filter by criteria such as **Type** and **Region**.
        
    -   **Query by Budget**: Create a **Usage or coverage budget** on the [Budgets](https://billing-cost.console.alibabacloud.com/expense-manage/expense-budget/list) page to query coverage based on that budget. For more information, see [Budget Management](/help/en/user-center/how-to-manage-a-budget).
        
    -   **By shared account:** If you share your savings plan with multiple accounts, select an account to query its coverage.
        
3.  After you set the search criteria, the page displays overall data such as **Total Coverage (%)** and **Deducted Amount**. Below, you can query the **Coverage** trend and **Coverage Details**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8910846371/p893936.png)
    

**Legacy console**

1.  On the **[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** console, navigate to **Savings Plan** > **[Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview)**.
    
2.  Switch to the **Coverage** tab. Query coverage data by **Time Range** or by adding **Search Conditions**.
    
    -   **Time Unit**: Supports queries by **Hour**, **Day**, or **Month**. Hourly data is available for the last 30 days, daily data for the last 90 days, and monthly data for the last 18 months.
        
    -   **Search Conditions**: To query the coverage of specific instances, filter by criteria such as **Account** and **Type**.
        
    -   **Query by Budget**: Create a **Usage or coverage budget** to query coverage based on that budget. For more information, see [Budget Management](/help/en/user-center/how-to-manage-a-budget).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9641138671/p1044815.png)
        
3.  After you set the search conditions, the page displays overall data such as **Expected Amount**, **Total Amount (Savings Plan)**, and **Saved Amount**. Below, you can query the **Coverage** trend and **Coverage Details** to help you analyze your overall coverage.
    

## OpenAPI

You can use the following API operations to query coverage.

**API**

**Description**

[DescribeSavingsPlansCoverageTotal](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describesavingsplanscoveragetotal)

Queries summary information about Savings Plan coverage.

[DescribeSavingsPlansCoverageDetail](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describesavingsplanscoveragedetail)

Queries the details of Savings Plan coverage.

**Note**

Coverage data becomes final and accurate three days after the billing cycle (T+3).

The **Coverage** tab does not display data for total-amount savings plans; this information is available on the **Overview** tab.

## Optimize your savings plan based on usage and coverage

Analyze both usage and coverage to make informed decisions about your savings plan commitment.

**Usage**

**Coverage**

**Analysis**

**Recommendation**

High

High

You have an appropriate savings plan commitment and are effectively saving on costs.

Maintain your current configuration and perform regular reviews.

High

Low

Your savings plan is highly utilized, but there is still significant pay-as-you-go spending that could be covered.

Consider increasing your savings plan commitment to further reduce costs.

Low

High

The savings plan is underutilized, showing a significant gap between the total amount (savings plan) and actual pay-as-you-go spending.

Consider reducing your savings plan commitment or purchasing a different type of savings plan that better fits your business needs.

Low

Low

A mismatch between your plan and your actual resource usage is resulting in wasted commitment and missed savings.

Adjust your resource usage strategy and instance types to prioritize using the savings plan to cover pay-as-you-go bills.

**Note**

For resources using **Auto Scaling**, achieving 100% coverage is often not the most cost-effective strategy. Because resource demand fluctuates, aiming for lower coverage helps avoid wasted commitment during off-peak periods. Use the [Savings Plan Purchase Recommendation tool](https://billing-cost-intl.aliyun.com/expense-manage/cost-recommend/detail-measurement) to determine the optimal balance between coverage and usage for your elastic workloads.
