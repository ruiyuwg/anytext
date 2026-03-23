Bills record your monthly spending on Alibaba Cloud for reconciliation and payment. You can log on to the Expenses and Costs [console](https://billing-cost.console.alibabacloud.com/fortune/billing-account) to view your bills.

## **Understand Alibaba Cloud bills**

A bill contains your spending information on Alibaba Cloud for a specific calendar month. This includes spending details, outstanding balances, billing cycles, and cloud resource usage.

The Alibaba Cloud bill feature provides the following information. The bill for the current month is updated in real-time. However, the final data is available only after the bill is generated for the following month:

**Type**

**Purpose**

**Generation time**

**Access link**

**Monthly bill**

View the total amount payable for the current month. You can export a summary PDF of your spending. Use this as a document for reconciliation, settlement.

**12:00 on the 3rd of the following month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)

**Spending details**

View detailed spending for each resource. Use this for cost verification and analysis. You can export the details as a CSV file.

**12:00 on the 3rd of the following month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)

**Split bill details**

Split bills by department or project for internal management. Use this for internal cost allocation and budget management. This is not used for settlement.

**12:00 on the 4th of the following month**

[](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill?BillingCycle=2025-11)[**Split Bill**](https://billing-cost.console.alibabacloud.com/finance/split-bill)

**Note**

The new Expenses and Costs console is currently in invitational preview for some users. The console automatically redirects you to your currently selected version. To access the other version, you can switch it manually in the console.

## **View bills**

**Note**

-   By default, an Alibaba Cloud account has permissions to access bills.
    
-   Resource Access Management (RAM) users must be granted the AliyunBSSReadOnlyAccess (read-only permission for Expenses and Costs) permission.
    

### **View monthly bills**

## Legacy Console

Go to User Center - **[Monthly Bill Overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)** to view a summary of your spending by billing cycle (the month of the bill). You can also switch accounts to view the spending summary of a linked financial account.

The page displays the following information:

-   The monthly bill for the selected account. This is the bill data for the actual settlement with Alibaba Cloud.
    
-   The spending trend for the last 6 months and the product spending distribution by billing cycle for the selected account.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042843.png)

## New console

Go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account) page to view a summary of your bill. This includes key fields such as ****Tax-inclusive Payable Amount****, ****Paid Amount****, and **OutStanding Amount**.

-   ****Tax-inclusive Payable Amount****: The final amount you need to pay for your cloud resources for the current month. This amount is calculated after all discounts, subscription deductions (such as savings plans), and coupon deductions are applied.
    
-   ****Paid Amount****: The amount you have actually paid. This is the sum of payments made by cash, vouchers, and prepaid cards.
    
-   ****OutStanding Amount****: The remaining unsettled amount. The formula is: **OutStanding Amount** = **Tax-inclusive Payable Amount** - **Paid Amount**.
    

The status of the bill for the current month is **Being billed**. If a bill from a previous month has an outstanding balance, its status is **Not fully settled**. After the bill is paid in full, the status changes to **Cleared**.

On the **Billing Overview** page, you can switch between different dimensions to view summarized data, such as **By Product**, **By Resource Purchase Account**, **By Organization** (for enterprise accounts only), **By Service Entity**, and **By The Status Of Hit Discounts**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1045051.png)

On the **Billing Overview** page, you can click **Export Bill** in the upper-right corner to export a **Monthly Bill in PDF** or a **Cost Summary in CSV**.

### **View spending details**

## Legacy Console

You can use detailed bills to view your spending information on Alibaba Cloud, such as the billable items, unit prices, usage, prices, and resource plan deductions for products. You can also adjust the statistical items and period, and filter and export the relevant data as needed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1045082.png)

Data is updated on a T+1 basis and includes unsettled (not yet billed, accumulating) pay-as-you-go data for the current month.

You can filter and view data by the following dimensions:

-   **Resource Group**: Select a configured resource group to filter the data.
    
-   **Instance Name/Instance ID**: Search for the bill details of a resource by its instance name or ID.
    
-   **Statistical Item**: Query bill details by billable item, instance, product, account, or cost center.
    
-   **Statistical Period**: Query bill details by billing cycle, day, or itemized detail.
    

**Note**

If you are logged on with a main financial account, you can view the data of linked financial accounts by filtering by account.

## New console

The ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page lists the spending details for each billable item (such as instances, storage, and traffic) for each billing cycle. You can also aggregate the data by instance for analysis.

You can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3297058671/p1023334.png) in the upper-right corner of the list to customize the displayed fields.

If you want to view which cloud products generated spending each day, you can set the **Bill Generation Date** or **Statistical Period** to **Day** and view the **Amount Payable** column in the spending details.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1045073.png)

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6625842671/p889864.png) button on the right to export the spending details. You can export data from the last 18 months. 

### **View split bill details**

## Legacy Console

Cost allocation involves reassigning cloud resource fees based on management needs. Fees are split to a finer granularity, such as instances or buckets, or aggregated by dimensions, such as **cost centers** or **tags**. This serves as a reference for internal cost splitting and allocation.

To use the split bill feature for the first time, you must manually enable it on the **[Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill)** page. The feature is free of charge. After you enable it, you can view the split data the next day.

-   **Custom analysis**: Filter data by criteria such as billing cycle, product, instance ID/name, and attached resource ID/name. You can also view data by billing cycle, day, or itemized detail.
    
-   **Customize columns**: Click the **Customize Columns** button in the upper-right corner of the report to select and save the fields that you want to display. This setting only affects the display in the console and does not affect the exported content.
    
-   **Export split bills**: Click the **Export Bill CSV** button in the upper-right corner of the report to export **Currently Selected** or **All Content**. On the [Export Records](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page, you can download the exported file.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1045180.png)

## New console

Cost allocation involves reassigning cloud resource fees based on management needs. Fees are split to a finer granularity, such as instances or buckets, or aggregated by dimensions, such as **cost centers** or **tags**. This serves as a reference for internal cost splitting and allocation.

You must enable the Split Bill feature before you can use it for the first time. Go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill?BillingCycle=2025-11)[**Split Bill**](https://billing-cost.console.alibabacloud.com/finance/split-bill) page and click **Enable Now**. This feature is free of charge. After you enable the feature, you can view the split bill data on the next day.

-   **Custom analysis**: Customize analysis dimensions based on filter criteria such as product, commodity, and time.
    
-   **Customize columns**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3297058671/p1026844.png) button in the upper-right corner of the report to customize and save the fields. Customizing columns only affects the fields displayed in the console and does not affect the exported report.
    
-   **Export split bill details**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3297058671/p1026845.png) button in the upper-right corner of the report to export the details. You can download the exported file from the [Export Details](https://billing-cost.console.alibabacloud.com/finance/export-record) page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1045120.png)

To subscribe to bill data and store it in **OSS** or **MaxCompute**, see [Subscribe to bills](/help/en/user-center/export-and-subscribe-bills-intl).

## **Reconcile bills**

## Legacy Console

When reconciling cloud resource bill fees, you can use the following formula in **[Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY)** to calculate the amount payable (pre-tax):

`**Amount Payable (Pre-tax) = List Price - Discount Amount - Coupon Deduction - Savings Plan Gross Deduction Amount**`.

-   **List Price**: Also known as the official list price, this is the original spending amount calculated based on the list price.
    
-   **Discount Amount**: The discount amount generated from contract discounts, official website promotions, and other offers.
    
-   **Coupon Deduction**: The amount deducted by coupons.
    
-   **Savings Plan Gross Deduction Amount**: The gross list price of the pay-as-you-go cloud resources that are covered by a savings plan.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1043395.png)

After you calculate the Amount Payable (Before Tax), you can verify the accuracy of the **Amount Payable (Payment Currency)** in **[Monthly Bill Overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)**. Because of rounding, where digits from the 3rd to the 10th decimal place are discarded, the Amount Payable (Payment Currency) is usually less than or equal to the calculated Amount Payable (Before Tax). You can confirm the exact amount by clicking **View Details** for the **Monthly Bill Overview** entry.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1043411.png)

## New console

You can use your bill to sequentially check your purchased resources, discounts, coupons, and the amount payable.

### **Check purchased resources**

You can use the bill to check if the listed products, commodities, or resources match your actual purchases. You can log on to the [console](https://billing-cost.console.alibabacloud.com/fortune/billing-account) to view the resource distribution. Pay special attention to usage differences across regions to ensure billing accuracy.

On the [](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, you can use the **Resource** or **Product** information in the bill details list to identify which cloud resource generated the cost.

### **Check discounts**

1.  On the **[](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account)** page, switch to the ******By The Status Of Hit Discounts****** tab to check if any discounts are applied to the monthly bill.
    
2.  Click **View Details** to view the overview of **Hit the Discount**.
    
3.  On the ****Hit the Discount**** page, you can view the details of the discount.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042948.png)

4.  On the **Missed Discount** page, click ****View Details**** to go to the **Discount Reconciliation** page and **View Cause**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7629358671/p1042952.png)

### **Check coupon usage**

On the ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, you can view the total amount deducted by coupons in the **Coupon Deduction Amount** field in the consumption details.

### **Check the amount payable**

After you confirm that the purchased resources, discounts, and coupon usage in your bill are all correct, you can use the following formula to verify the final amount payable:

`Amount Payable = Gross Amount - Subscription Deduction Amount (Savings Plan Deduction Amount) - Discount Amount - Coupon Deduction Amount`

## **Pay bills**

## Legacy Console

We recommend paying your monthly bill by bank transfer.

On the **Account Overview** page, you can enable the **Automatic Payment** feature. Then, you can pay the monthly bill by **initiating a remittance to the bank account on the monthly invoice**. When Alibaba Cloud receives the remittance, it automatically pays the unpaid monthly bills in chronological order, from oldest to newest, until all monthly bills are paid or the remittance is fully used.

If the **Automatic Payment** feature is disabled, you must manually pay the monthly bill after Alibaba Cloud receives the remittance. Follow these steps:

1.  Go to **Payment Details**, click the **Pending Payment** tab, select a pending monthly bill, and view the monthly bill details.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3478511471/p922885.png)
    
2.  After you confirm the monthly bill details, click the **Pay** button.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3478511471/p922891.png)
    
3.  Enter the amount to be paid, select a payment method, and then click the **Pay** button.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3478511471/p922901.png)
    

## New console

Your monthly bill is generated at 12:00 on the 2nd of the following month. After it is generated, you can make the payment in the following ways:

-   **Automatic settlement:** If your account has sufficient credit and automatic settlement is enabled (enabled by default for individual users), the system automatically settles the outstanding bill. No manual action is required.
    
-   **Manual Repayment**: If your spending credit is insufficient, you can go to [](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account), click **Pay Bill** next to ******OutStanding Amount******, and select **Top-up & Remittance** (Funds are automatically applied to your outstanding balance upon arrival) .
    

**Note**

-   You cannot pay a bill that is being generated.
    
-   In a multi-account management scenario, a main financial account can use the [](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)******[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account)******→****Pay Bill****→**Transfer** path to make a repayment transfer to a financial sub-account with an "Unsettled" status. After the funds are received, the system automatically settles the bill.
    

## Set bill alerts

If you are using the new console, you can set spending alerts for your subscribed pay-as-you-go products to avoid budget overruns due to unexpectedly high costs:

1.  In [Message Center](https://notifications2.console.alibabacloud.com/subscribeMsg), you must confirm that you have set a recipient for **Account Balance Messages**. If not, you must configure it first.
    
2.  Log on to the [console](https://billing-cost.console.alibabacloud.com/fortune/billing-account) and choose **Bills >** ******[](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account)******.
    
3.  In the upper-right corner of the **Billing Overview** page, click **Configure Daily Bill Alert**.
    
4.  On the Settings page, select **Alert Item**, enter the **Alert Threshold**, and click the **Add** button to add an alert.
    

**Note**

After you enable alerts, a text message reminder is sent once a day when the daily bill for a specified product (up to 10 products are supported) exceeds the alert threshold. For products billed monthly, a reminder is sent only once after the bill is generated at the beginning of the next month.
