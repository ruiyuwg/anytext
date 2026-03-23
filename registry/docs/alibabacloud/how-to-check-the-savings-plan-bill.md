In the Expenses and Costs console, you can view the billing details, utilization rate, and deduction discounts for your savings plans to evaluate their effectiveness, savings, and return on investment (ROI).

## **Choose a viewing method**

Query savings plan bills in the following three ways for different scenarios:

**Viewing method**

**Scenarios**

**Access link**

[Savings plan purchase bills](#c03d83b0eefa6)

View detailed spending records of savings plan purchases for financial reconciliation.

****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)

[Savings plan usage overview](#cd64eb4d83g9v)

Evaluate the overall effectiveness and ROI of your savings plans.

[](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview)[**Overview**](https://billing-cost.console.alibabacloud.com/resource/spn/overview)

[Savings plan usage details](#25b016fdfeciv)

Analyze the detailed deduction status of your savings plans.

[](https://usercenter2-intl.console.alibabacloud.com/resource/spn/detail)[**View Details**](https://billing-cost.console.alibabacloud.com/resource/spn/detail)

## Savings plan purchase bills

## New console

The **Bill Details** page displays purchase bills for savings plans, which you can then filter and export based on criteria such as **Bill Generation Date**, **Resource Name**, and **Resource Name**.

1.  Log on to the [](https://usercenter2.aliyun.com/home)[**Expenses and Costs**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) console. In the left navigation pane, choose **Billing** > **Bill Details**.
    
2.  On the **Bill Details** page, set **Line Item Type** to **Savings Plan** to filter the bills. By default, the billing details for the current month are displayed.
    
3.  Set filter criteria such as **Bill Generation Date** and **Resource Name /Instance ID**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3637023771/p1058516.png)

## Legacy console

The **Billing Details** page displays the spending records for your savings plans. Filter and export them by criteria such as **Billing Cycle** and **Resource Group**.

1.  Log on to the [**Expenses and Costs**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) console. In the left navigation pane, choose ****Billing** > [**Bill Details**](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)**.
    
2.  On the **Bill Details** page, set **Product Details** to **Savings Plans** and set **Statistical Period** to **Details** to filter the bills. By default, the billing details for the current month are displayed.
    
3.  Set filter criteria such as **Billing Cycle** and **Resource Group**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3073200771/p1051344.png)

For more information, see [View and analyze bills](/help/en/user-center/bill-view).

**Note**

If you log on with a main financial account, filter by account to view data for non-trusteeship and trusteeship linked accounts.

## Savings plan usage overview

## New console

The savings plan overview page displays the cumulative savings, savings for the current year or month, the utilization rate, and the status of each savings plan instance. You can use this information to evaluate the ROI of your savings plans.

1.  Log on to the [Expenses and Costs](https://billing-cost.console.alibabacloud.com/fortune/billing-account) console. In the left navigation pane, choose **Account** > **Savings Plan**.
    
2.  On the **Overview** tab, set filter criteria such as **Enterprise/Organization/Account**, **Savings Plan Instance ID**, and **Time Range**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5220846371/p893961.png)

If your account has an overdue payment, the deduction behavior of a savings plan varies based on its payment option:

-   **All Upfront savings plans**: These plans continue to cover eligible pay-as-you-go resource bills even if the account has an overdue payment.
    
-   **Partial Upfront or No Upfront savings plans**: If the account has an overdue payment, these plans stop applying deductions starting from the next hour. The related resources are then billed at pay-as-you-go rates until the payment is cleared.
    

To prevent service interruptions or high bills due to overdue payments, ensure your payment method has a sufficient balance or credit limit.

### **Key fields**

**Field name**

**Description**

**Commitment**

The amount you commit to spend per period. This fee is charged regardless of whether deductions occur. Pay-as-you-go usage that exceeds this commitment is billed at the list price.

**Balance**

For Elastic Edition: Total commitment - Used amount.

For Standard Edition (monthly): Monthly commitment - Amount used this month.

For Standard Edition (daily): Daily commitment - Amount used today.

**Status**

**Valid**: Deductions are being applied normally.

**Stopped (overdue)**: Deductions are paused because the account has an overdue payment.

**Invalid**: The savings plan has expired.

**Cumulative Savings**

Cumulative savings = Standard pay-as-you-go cost - (Total savings plan amount + Actual payable amount).

**Utilization Rate**

For Standard Edition: The month-to-date utilization rate.

For Elastic Edition: The overall instance utilization rate.

A higher utilization rate indicates better savings plan performance.

**Share Status**

Indicates whether the savings plan instance is shared with other accounts.

**Additional fields**

**Field name**

**Description**

**Savings Plan Owner Account**

The account that owns the savings plan instance.

**Savings Plan Instance ID**

The ID of the purchased savings plan instance.

**Savings Plan Name**

The name of the purchased savings plan.

**Savings Plan Type**

The type of savings plan, such as ECS compute-optimized or general-purpose.

**Deduction Type**

The deduction type of the savings plan: Standard Edition or Elastic Edition.

**Deductible Instance Family**

The instance family of products eligible for deductions under this savings plan instance, for example, 6th\_generation\_X86\_group.

**Region of Deductible Service**

The region where products are eligible for deductions under this savings plan instance.

**Savings Plan Instance Tag**

Add tags to a savings plan. You can add up to 20 tags to each resource. You can use tags to view cost trends for specific savings plans. For more information, see [Cost analysis](/help/en/user-center/cost-analysis/).

**Start/End time**

The active period of the savings plan, from its start time to its expiration time.

**Payment Method**

The payment method for the savings plan fees. Valid values: All Upfront, Partial Upfront, and No Upfront.

**Actions**

Set deduction rules as needed.

## Legacy console

The savings plan overview page displays the cumulative savings, savings for the current year or month, the utilization rate, and the status of each savings plan instance. You can use this information to evaluate the ROI of your savings plans.

1.  Log on to the **[Expenses and Costs](https://billing-cost.console.alibabacloud.com/fortune/billing-account)** console. In the navigation pane on the left, choose **Savings Plan** > **[Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview)**.
    
2.  On the **Overview** tab, set filter criteria such as **Account**, **Start At**, and **Savings Plan Id**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3073200771/p1051475.png)

If your account has an overdue payment, the deduction behavior of a savings plan varies based on its payment option:

-   **All Upfront savings plans**: These plans continue to cover eligible pay-as-you-go resource bills even if the account has an overdue payment.
    
-   **Partial Upfront or No Upfront savings plans**: If the account has an overdue payment, these plans stop applying deductions starting from the next hour. The related resources are then billed at pay-as-you-go rates until the payment is cleared.
    

To prevent service interruptions or high bills due to overdue payments, ensure your payment method has a sufficient balance or credit limit.

### **Key fields**

**Field name**

**Description**

**Commitment**

The amount you commit to spend per period. This fee is charged regardless of whether deductions occur. Pay-as-you-go usage that exceeds this commitment is billed at the list price.

**Balance**

For Elastic Edition: Total commitment - Used amount.

For Standard Edition (monthly): Monthly commitment - Amount used this month.

For Standard Edition (daily): Daily commitment - Amount used today.

**Status**

**Valid**: Deductions are being applied normally.

**Stopped (overdue)**: Deductions are paused because the account has an overdue payment.

**Invalid**: The savings plan has expired.

**Cumulative Savings**

Cumulative savings = Standard pay-as-you-go cost - (Total savings plan amount + Actual payable amount).

**Utilization Rate**

For Standard Edition: The month-to-date utilization rate.

For Elastic Edition: The overall instance utilization rate.

A higher utilization rate indicates better savings plan performance.

**Share Status**

Indicates whether the savings plan instance is shared with other accounts.

**Additional fields**

**Field name**

**Description**

**Account**

The account that owns the savings plan instance.

**Savings Plan Id**

The ID of the purchased savings plan instance.

**Savings Plan Name**

The name of the purchased savings plan.

**Type**

The type of savings plan, such as ECS compute-optimized and general-purpose.

**Deduction Type**

The deduction type of the savings plan: Standard Edition or Elastic Edition.

**Instance Family**

The instance family of products eligible for deductions under this savings plan instance, for example, 6th\_generation\_X86\_group.

**Tag**

Add tags to a savings plan. You can add up to 20 tags to each resource. You can use tags to view cost trends for specific savings plans. For more information, see [Cost analysis](/help/en/user-center/cost-analysis/).

**Region**

The region where products are eligible for deductions under this savings plan instance.

**Status**

The status of the savings plan. Valid values: Active, Suspended due to overdue payment, and Expired.

**Start/End time**

The active period of the savings plan, from its start time to its expiration time.

**Payment Method**

The payment method for the savings plan fees. Valid values: All Upfront, Partial Upfront, and No Upfront.

## Savings plan usage details

## New console

The savings plan usage details page displays detailed deduction information for a specified savings plan, including **Savings Plan Owner Account**, **Deduct Fee**, **Deduction Rate for Bills**, **Savings Plan Owner Account**, and **Deducted Instance ID**.

1.  Log on to the [](https://usercenter2.aliyun.com/home)[**Expenses and Costs**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) console.
    
2.  In the navigation pane on the left, choose **Billing Account** > **Savings Plan**.
    
3.  Click the **View Details** tab.
    
4.  Set filter conditions, including **Instance ID** and **Time Range**, and click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8523396371/p893970.png)

### **Key fields**

**Field name**

**Description**

**Deduct Fee**

The amount of the savings plan commitment used to cover the cloud resource fees.

**Catalogue Gross Amount of Deducted Bills**

The total list price of the bill for the cloud resource fees covered by the savings plan.

**Deductible Discount**

The discount rate applied by the savings plan to the cloud resource fees. The formula is: Deduction discount = Deduction amount / Total list price of the deducted portion.

**Deduction Rate for Bills**

The bill offset rate is the percentage of a pay-as-you-go bill covered by a savings plan. The rate is calculated as follows: Bill Offset Rate = (Offset Amount / Corresponding Pay-as-you-go Discount) / List Price of the Offset Usage.

**Deducted Commodity**

The pay-as-you-go product for the cloud resource fees covered by the savings plan.

**Deducted Instance ID**

The ID of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Additional fields**

**Field name**

**Description**

**Savings Plan Owner Account**

The account that owns the savings plan instance.

**Savings Plan Instance ID**

The ID of the purchased savings plan instance.

**Start and End Time of Deducted Bill**

The consumption period of the pay-as-you-go cloud resource instance covered by the savings plan.

**Savings Plan Name**

The name of the purchased savings plan.

**Savings Plan Type**

The type of savings plan, such as ECS compute-optimized and general-purpose.

**Billing Item**

The billable item for the cloud resource fees covered by the savings plan, such as instance and system disk.

**Offered Price of Deducted Part**

The total list price of the cloud resource fees that are covered by the savings plan.

**Billing Cycle**

The billing cycle of the bill for the cloud resource fees covered by the savings plan.

**Deducted Resource Owner Account**

The account to which the cloud resource fees covered by the savings plan belong.

**Instance Family of Deducted Instance**

The instance family of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Specifications of Deducted Instance**

The specifications of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Region of Deducted Instance**

The region of the cloud resource instance for the cloud resource fees covered by the savings plan.

## Legacy console

The savings plan usage details page displays the detailed deduction status for a specified savings plan, including **Account**, **Deduction Amount**, **Bill Deduction Rate**, **Corresponding Deducted Product**, and **Deducted Instance**.

1.  Log on to the [**Expenses and Costs**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) console.
    
2.  In the navigation pane on the left, choose **Savings Plan** > **Overview and Details**.
    
3.  Click the **Usage Details** tab.
    
4.  Set filter criteria such as **Account**, **Savings Plan Instance ID**, and **Start Time**, and then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3073200771/p1051548.png)

### **Key fields**

**Field name**

**Description**

**Deduct Fee**

The amount of the savings plan commitment used to cover the cloud resource fees.

**Official Price of Deducted Part**

The total list price of the cloud resource fees that are covered by the savings plan.

**Discount**

The discount rate applied by the savings plan to the cloud resource fees. The formula is: Deduction discount = Deduction amount / Total list price of the deducted portion.

**Deduction Rate for Bills**

The percentage of a pay-as-you-go bill that is covered by the savings plan. The formula is: Bill deduction rate = (Deduction amount / Corresponding pay-as-you-go discount) / List price of the deducted bill.

**Deduction Product**

The pay-as-you-go product for the cloud resource fees covered by the savings plan.

**Savings Plan Id**

The ID of the purchased savings plan instance.

**Additional fields**

**Field name**

**Description**

**Account**

The account that owns the savings plan instance.

**Consumed At**

The consumption period of the pay-as-you-go cloud resource instance covered by the savings plan.

**Savings Plan Name**

The name of the purchased savings plan.

**Type**

The type of savings plan, such as ECS compute-optimized and general-purpose.

**Billing Item**

The billable item for the cloud resource fees covered by the savings plan, such as instance and system disk.

**Billing Cycle**

The billing cycle of the bill for the cloud resource fees covered by the savings plan.

**Official Price of Deducted Bills**

The total list price of the bill for the cloud resource fees covered by the savings plan.

**Deduction Account**

The account to which the cloud resource fees covered by the savings plan belong.

**Deducted For**

The ID of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Instance Family of Deducted Instance**

The instance family of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Specifications of Deducted Instance**

The specifications of the cloud resource instance for the cloud resource fees covered by the savings plan.

**Region of Deducted Instance**

The region of the cloud resource instance for the cloud resource fees covered by the savings plan.

## **FAQ**

#### **Why are there charges on my bill that were not covered by a savings plan?**

Charges on your bill may not be covered by a savings plan for the following reasons:

1.  **Charges are not eligible for deduction**: Fees for snapshots, Internet traffic, or disk capacity (except for specific plans) are not covered by savings plans. General-purpose savings plans only cover computing capacity costs for ECS and ECI.
    
2.  **Spending exceeds the commitment**: Usage that exceeds the committed spending of the savings plan is billed at pay-as-you-go rates.
    
3.  **Account has an overdue payment**: Partial Upfront and No Upfront savings plans pause deductions when the account has an overdue payment.
    

#### **Why is the deduction amount small after I purchased a savings plan?**

The deduction capacity of a savings plan is determined by its committed spending, not the upfront payment. Committed spending is the amount you commit to use per hour.

For example, consider a savings plan with a committed spend of USD 0.1 per hour that offers a rate at 40% of the pay-as-you-go price. The value of pay-as-you-go usage at list price that can be covered per hour is: USD 0.1 / 40% = USD 0.25. The maximum value of usage at list price that can be covered per day is: USD 0.25 × 24 = USD 6.

**Before you purchase**, use the [savings plan calculator](https://usercenter2-intl.console.alibabacloud.com/expense-manage/cost-recommend/detail-measurement) to select an appropriate committed spending amount based on your actual usage.

#### **Can savings plans be extended?**

No, they cannot. Savings plans automatically expire. To continue using a savings plan, you must purchase a new one before the current one expires.

## **References**

-   [What is a savings plan?](/help/en/user-center/what-is-the-saving-plan)
    
-   [How to purchase a savings plan](/help/en/user-center/how-to-buy-a-savings-plan)
    
-   [Check the utilization and coverage of a savings plan](/help/en/user-center/how-to-check-saving-plan-usage)
