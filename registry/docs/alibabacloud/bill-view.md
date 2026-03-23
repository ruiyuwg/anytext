Analyze and reconcile your costs by viewing monthly bills and detailed spending records.

## **How bills are generated**

Bills are generated based on the billing method of your cloud products:

-   **Subscription (pay before you use)**: You pay for resources—such as subscriptions, savings plans, and resource plans—at the time of purchase. This cost appears in the bill for the month of purchase.
    
-   **Pay-as-you-go (use before you pay)**: You first use resources—such as pay-as-you-go ECS instances. The system then calculates fees based on your usage over a billing cycle—such as hourly, daily, or monthly—and records them in the bill for that cycle.
    

For more information, see [Billing methods](/help/en/user-center/product-overview/quickly-understand-the-billing-modes-of-alibaba-cloud-products).

**Note**

Cloud products are billed based on actual usage, and metering granularity varies by product. Bills are generated at fixed billing cycles. For example, if a resource is released mid-cycle, the bill still covers the full cycle, but charges reflect only actual consumption. Pay-as-you-go bills typically appear within minutes to several hours after usage. For specific rules, see the billing documentation for each product.

## **Bill types and generation times**

The Alibaba Cloud billing feature provides the following information. The bill for the current month is updated in real time. However, the final data is available only after the bill is generated for the following month.

**Type**

**Purpose**

**Generation Time**

**Access Link**

**Monthly Bill**

View the total amount payable for the current month. You can export a spending summary PDF as a credential for reconciliation and settlement.

**12:00 on the 3rd day of the next month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)

**Billing Details**

View detailed spending for each resource for cost verification and analysis. You can export the details as a CSV file.

**12:00 on the 3rd day of the next month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)

**Split Bill Details**

Split bills by department or project for internal management. This is used for internal cost allocation and budget management, not as a basis for settlement.

**12:00 on the 4th day of the next month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill?BillingCycle=2025-11)[**Split Bill**](https://billing-cost.console.alibabacloud.com/finance/split-bill)

**Note**

The new version of the Expenses and Costs console is currently available for invitational preview to select users. The console automatically redirects you to your currently selected version. Switch to the other version in the lower-left corner of the console.

## **Scenarios for viewing bills**

Log on to the Alibaba Cloud Management Console homepage. In the upper-right corner, click **Billing** >  **[Bills](https://billing-cost.console.alibabacloud.com/finance/month-bill/account)** to view your expenses.

**Note**

-   The Alibaba Cloud account has access permissions by default.
    
-   RAM users must be granted the AliyunBSSReadOnlyAccess policy, which provides read-only access to the Fee Hub.
    

The Bill Details page is available in two versions: **legacy** and **upgraded**. You can identify the version you are using by the page style.

**About bill versions**

The upgraded Bill Details page is being rolled out to users through an invitational preview. If your account is enabled for the upgraded version, you can view bill data only from the date of enablement onward. To query historical billing details, revert to the legacy version.

The main improvements in the upgraded version are as follows:

-   **New features**: Resource-level cost analysis and bill subscription have been added. With bill subscription, you can configure automatic delivery of bills to Object Storage Service (OSS) or MaxCompute from the console.
    
-   Fields: The upgraded version includes additional fields such as Discount Details, Coupon Deduction Details, Deducted Duration, Usage Details, List Price Usage Tiers, and **Tiered Usage Accumulation Rules**. Some fields have been removed or adjusted, and all fields are now grouped logically.
    

The following table compares the upgraded and legacy Bill Details pages:

Upgraded version:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1047123.png)

Legacy version:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1047124.png)

**Note**

The legacy Expenses and Costs console does not support the upgraded Bill Details page.

### **View monthly bill summaries**

## Legacy console

Go to User Center > **[Bill overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)** to view your spending summary by billing cycle (that is, billing month). Switch accounts to view the spending summary for associated financial sub-accounts.

The page displays the following information:

-   The monthly bill for the selected account. This is the bill data for actual settlement with Alibaba Cloud.
    
-   The spending trend (last 6 months) and product spending distribution (by billing cycle) for the selected account.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042843.png)

## New console

On the **[Bill overview](https://billing-cost-intl.aliyun.com/finance/month-bill/account)** page, view overall expenses, bill summaries, verify discounts, make repayments, and export bills.

In the monthly summary area, note the following key information:

-   **Amount payable**: The final amount you need to pay for cloud resources for the month. This amount reflects all applicable discounts, subscription deductions (such as savings plans), and coupon deductions. The formula is: `Amount payable = List price - Discount amount - Coupon deduction - Rounding adjustment`.
    
-   **Paid amount**: The amount already paid, including payments made with cash, prepaid cards, and other payment methods.
    
-   **Outstanding amount**: The remaining unpaid balance. That is: **Outstanding amount** = **Amount payable** - **Paid amount**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032576.png)

The ****[Bill overview](https://billing-cost-intl.aliyun.com/finance/month-bill/account)**** page supports viewing summarized bill data by different dimensions. Select a dimension tab and filter the data by **Billing month**:

**Dimension**

**Scenario**

**By resource purchase account**

Use this for cost allocation and budget management in multi-account scenarios. View the amount payable and payment status for each account to identify high-spending accounts.

**By product**

Use this to see which cloud products are generating costs. Compare the amount payable to identify high-cost products.

**By organization**

(Enterprise accounts only)

Use this for organization-level cost management in multi-account enterprise scenarios. You can view the amount payable for each organization.

**By service entity**

Use this to reconcile bills for different service entities. You can view the amount payable for each service entity. Different entities must be reconciled separately.

**By discount application status**

Use this to evaluate the effectiveness of your discounts. Compare the list price and the amount payable to learn about the discount impact. Pay close attention to bills that did not receive a discount.

### **View daily spending**

## Legacy console

1.  On the [Bill details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=BY_DAY) page, set **Statistical period** to **By day**.
    
2.  Click **Search**. In the bill details, view the **Product details**, **Usage**, and **Discounted amount** columns to understand the usage and costs for that day, aggregated by billing item, instance, product, finance, and cost center.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1042910.png)

Click the **Customize columns** button on the right to customize the columns displayed in the bill.

## New console

On the ****[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)**** page, filter by date to view your daily spending.

### Legacy bill

1.  On the **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, set **Statistic item** to **Billing item** or **Instance**.
    
2.  Set **Statistical period** to **Day** (to view daily summaries) or **Details** (to view hourly details). Then select a **Billing month**.
    
3.  Click **Query**. In the bill details, focus on the **Product name** and **Amount payable** columns to understand your daily spending.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032616.png)

### Upgraded bill

1.  On the **[Bill Details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, click the **Bill Generate Date** filter, select **By Day**, and set the **Start Time** and **End Time** to the same day (for example, 2025-10-15).
    
2.  Click **Query**. In the bill details, view the **Product information**, **Usage information**, and **Amount payable information** to understand the usage and costs of each cloud product for that day.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032621.png)

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3016248671/p1025150.png) button on the right to customize the columns displayed in the bill.

### **View product billing details**

## Legacy console

1.  On the ****[Bill details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=BY_DAY)**** page, enter or select a product name (such as “Elastic Compute Service” or “Object Storage Service”) in the **Product** or **Product details** filter box.
    
2.  Select a **Billing cycle** (that is, billing month), then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1042924.png)

Click the **Customize columns** button on the right to customize the columns displayed in the bill.

## New console

On the ****[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)**** page, filter by **Product name** to view all spending details for that product.

### Legacy bill

1.  On the ****[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)**** page, set **Statistic item** to **Billing item** or **Instance**.
    
2.  Set **Statistical period** to **Day** or **Details**. In the filter conditions, select a **Product name** and **Billing month**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032591.png)

### Upgraded bill

1.  On the [Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance) page, enter or select a product name (such as “Elastic Compute Service” or “Object Storage Service”) in the **Product name** filter box.
    
2.  Select a **Billing month**, then click **Search**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032581.png)

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3016248671/p1025150.png) button on the right side of the page to customize the columns displayed in the bill.

### **View bills across multiple enterprise accounts**

## Legacy console

In an enterprise finance scenario where multiple accounts are managed within the same organization, the enterprise account can view the bills of its member accounts by filtering by **Account** on the **[Bill overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)** and ******[Bill details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=BY_DAY)****** pages.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1042928.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1042932.png)

## New console

In a multi-account enterprise scenario, **a management account (MA)** can view the bills of member accounts on the **[Bill overview](https://billing-cost-intl.aliyun.com/finance/month-bill/account)** and **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** pages by filtering by **Enterprise/Organization/Account**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032962.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1032964.png)

## **Reconcile bill charges**

## **Legacy console**

When verifying cloud resource fees, you can calculate the pretax amount payable in **[Billing Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY)** using the following formula:

`**Amount Payable (Pretax) = List Price - Discount Amount - Coupon Deduction - Savings Plan Gross Deduction**`.

-   **List Price**: Also known as the official list price, this is the original spending amount calculated based on the list price.
    
-   **Discount Amount**: The discount amount generated from contract discounts or official website promotions.
    
-   **Coupon Deduction**: The amount deducted by coupons.
    
-   **Savings Plan Gross Deduction**: The gross list price of pay-as-you-go cloud resources covered by a savings plan.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1043395.png)

After calculating the Amount Payable (Pretax), verify the accuracy of the **Amount Payable (in payment currency)** in the **[Monthly Bill Overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)**. The Amount Payable (in payment currency) is usually less than or equal to the calculated Amount Payable (Pretax). This is because of rounding, where amounts from the 3rd to the 10th decimal place are discarded. You can confirm the specific amount by clicking **View Details** for the **Monthly Bill Overview** entry.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1043411.png)

## New console

When reconciling cloud resource charges, verify the **List price**, **Savings plan list price deduction**, **Discount amount**, and **Coupon deduction amount** fields. Then, check the **Amount payable** using the following formula:

`Amount payable = List price − Savings plan list price deduction − Discount amount − Coupon deduction amount`

**Reconciliation process**

**Console display**

**Review** **Catalog Total Price**

The **List price** is the sum of the public standard prices for the selected resource configurations, without any discounts.

1.  On the **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, view consumption details.
    
2.  Verify the total list price based on usage, usage duration, list price (unit price), and the billing formula.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1042943.png)

**Check** **Discount** **application**

1.  On the **[Bill overview](https://billing-cost-intl.aliyun.com/finance/month-bill/account)** page, switch to the **By discount application status** tab.
    
2.  Click **Details** to view an overview of **Applied discounts**.
    
3.  On the **Applied discounts** page, view the details of the discount.
    
4.  On the **Discounts not applied** tab, click **Details** to go to the **Discount reconciliation** page and **view the reason why the discount was not applied**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042948.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042952.png)

**Reconcile coupon usage**

1.  On the **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, use the **Coupon deduction amount** field to view the total amount deducted by coupons.
    
2.  If you are using the upgraded Bill Details page, click **Coupon deduction details** to the right of **Details** to view the number, face value, and deducted amount of the used coupons.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1043428.png)

**Reconcile savings plan deductions**

1.  On the **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, use the **Savings plan list price deduction** or **Subscription list price deduction** on the bill to view the total amount deducted by savings plans in the expense details.
    
2.  If you are using the upgraded Bill Details page, click **Subscription discount details** in the **Details** column to view detailed information about the savings plan deduction.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1043438.png)

**Reconcile resource plan deductions**

1.  On the **[Bill details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance)** page, view the **Resource plan deduction amount** or **Deducted usage**, which is the amount of usage deducted through a resource plan.
    
2.  When calculating the list price in the spending details, you need to consider the resource usage. `Usage = Pre-deduction usage - **Deducted usage** | **Resource plan deduction amount**`.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9292698671/p1043439.png)

After completing the above checks, substitute the **List price**, **Savings plan deduction**, Discount amount, and **Coupon deduction amount** into the formula to verify the accuracy of the **Amount payable** on the bill.

## **FAQ**

### **Why does the same Alibaba Cloud Model Studio instance appear as multiple records in the bill details?**

A single instance may appear as multiple records in the bill details for the following reasons:

-   Input and output traffic are tracked separately: The Model Studio inference service measures Input and Output tokens separately. Check the Asset/Resource instance ID or **Instance ID (billing granularity)** field.
    
-   Different billing items: Batch calls versus non-batch calls, and multimodal versus text usage, have different billing items. Check the Billing item or **Billing item name** field.
    
-   Different billing cycles: Starting from 2025-11-06 10:00:00, the billing cycle for the Model Studio inference service (except for batch calls) changed from hourly to minute-level. This change is rolling out in stages during public preview. As a result, multiple records may appear for the same instance across different minutes. Check the Consumption time, Service start time, or **Service end time** field.
    

### **Why does the bill status always show “In billing”?**

On the **Monthly bill overview** page, you see monthly bill summary information. The final monthly bill is issued after 12:00 on the 2nd of the following month. When you view the monthly bill during the month, it remains in a cumulative summary state. Therefore, the bill status shows **In billing** until the final bill is issued.

## **References**

-   [Bill settlement and repayment](/help/en/user-center/bill-repayment-and-settlement-1)
    
-   [Understand unexpected charges](/help/en/user-center/bill-solution-troubleshooting-manual-for-common-consumer-bill-questions)
    
-   [Export and subscribe to bills](/help/en/user-center/export-and-subscribe-bills/)
    
-   [Payment FAQ](/help/en/user-center/support/payment-faq)
    
-   [New bill field descriptions](/help/en/user-center/v2-version-bill-field-description-1)
