When you use Alibaba Cloud services, you may have questions such as "Why do I have unexpected charges?", "Why did my costs suddenly increase?", or "I used a free trial resource, so why was I billed?". This topic summarizes common billing questions to help you understand the possible causes and quickly troubleshoot them.

## **Understand Alibaba Cloud's billing and invoicing methods**

Alibaba Cloud offers two billing methods: subscription and pay-as-you-go. For more information, see [Understand billing methods](/help/en/user-center/product-overview/quickly-understand-the-billing-modes-of-alibaba-cloud-products).

-   **Subscription (prepaid)**: This applies to products such as subscriptions, savings plans, and resource plans. The cost is finalized upon payment and appears on the current month's bill.
    
-   **Pay-as-you-go (postpaid)**: This applies to products billed based on actual usage, such as pay-as-you-go ECS instances. The system calculates usage and generates charges periodically, for example, hourly, daily, or monthly, depending on the product attributes. These charges are included in the current month's bill.
    

A separate bill is generated for each billing pattern. A complete monthly bill is issued by 12:00 on the 3rd of the following month.

Each Alibaba Cloud service usually consists of one or more billable items. For example, the billable items for ECS include the instance, image, disk, and public bandwidth. Each item is billed separately. In the console, you can view the billing method, usage, and cost for each item in ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance).

## **Common billing questions**

### **Why am I being charged every day when I don't think I'm using anything?**

**Possible cause:** You may have pay-as-you-go resources running in your account. These resources might be in a region that you do not use often or might have been purchased by another user who shares the account.

**Troubleshooting**

Check your cloud resources across all regions from the console homepage to troubleshoot:

-   **Check active resources:** Log on to the Alibaba Cloud Management Console. On the [**Overview**](https://home.console.alibabacloud.com/home/dashboard/ProductAndService) page, review your cloud resources in all regions. Check for pay-as-you-go resources, especially in **regions that you do not frequently use**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048040.png)
    

Review billing data to troubleshoot:

## Legacy Console

-   **View consumption bills:** Go to Fee Hub > [**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account). Select a **billing cycle** at the top to see a summary of your spending. View the product-based spending breakdown below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048131.png)
    
-   **Analyze bill details:** Go to [**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) and filter by statistical item or statistical period. Focus on fields such as **bill type, product, product details, region, instance ID, billing item, and discounted amount**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048145.png)
    

## New Console

-   **View consumption bills:** Go to User Center > [](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account). Select a **Billing Month** and analyze your bill by **Product** to understand your overall spending.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048041.png)
    
-   **Analyze bill details:** Go to ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance). Filter the data by statistic item or statistical period. Pay close attention to fields such as **Billing Method, Product Name, Offering Name, Resource Instance ID, Region, Billable Item, and Pre-tax Amount**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048043.png)
    

### **I bought a subscription resource and already paid for it. Why am I still being charged?**

**Possible cause**: The subscription resource you purchased may be associated with pay-as-you-go components or services. Common scenarios include the following:

-   When you use a subscription ECS instance, if you configure a static public IP address that is billed on a pay-by-data-transfer basis, you are billed hourly based on actual traffic. For more information, see [Public bandwidth billing](/help/en/ecs/public-bandwidth).
    
-   A subscription ECS instance has a pay-as-you-go disk attached. For more information, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices).
    
-   You created snapshots for an ECS instance. Snapshots are pay-as-you-go by default. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1).
    
-   To ensure data security, data backup is enabled by default for RDS instances and cannot be disabled. If the [backup size](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2045428) is within the free quota, backups are free of charge. If the backup size exceeds the free quota, you are charged for the excess usage. For more information, see [Backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).
    

**Troubleshooting**

## Legacy console

1.  **Identify the source of charges:** On the [**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, set **Statistic Item** to **Billing Item**, set **Statistical Period** to **Day** or **Details**, filter by a **Charge Type** of **Pay-as-you-go Bill**, and analyze the specific billing items.
    
2.  **Manage associated instances:** Regularly check for and clean up associated instances that are no longer needed. For example, delete snapshots that are no longer needed and check for automatic snapshot policies. [Delete an automatic snapshot policy](/help/en/ecs/user-guide/delete-an-automatic-snapshot-policy#task-1443760) to avoid ongoing charges.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048209.png)

## New console

1.  **Find the source of charges:** On the ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, set the statistical item to **Billable Item** and the statistical period to **Day** or **Details**. Filter the bill fields by setting **Billing Type** to **Pay-as-you-go Bill** and analyze the specific billable items.
    
2.  **Manage associated resources:** Periodically check for and remove associated resources that you no longer need. For example, delete unneeded snapshots, check for automatic snapshot policies, and [delete the automatic snapshot policies](/help/en/ecs/user-guide/delete-an-automatic-snapshot-policy#task-1443760) to prevent ongoing charges.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048156.png)

### **I already released my resources. Why am I still being charged?**

**Possible cause:** First, confirm that the resource was actually released. Shutting down or stopping a resource does not always stop billing. If charges are still generated after you delete a resource instance, this may be for one of two reasons:

-   **Associated resources were not released**
    
    -   You may have released only the primary instance, such as an ECS instance, but not its associated pay-as-you-go resources, such as elastic IP addresses (EIPs) or snapshots. These associated resources continue to incur charges.
        
    -   If you delete an RDS MySQL instance but have [configured a backup retention policy for after instance release](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#a2dece28276wi), these backup files are retained. With this feature, backup storage is free of charge for 7 days after the instance is released. After 7 days, billing for the backup storage starts.
        
-   **Billing delay**
    
    -   Bills for pay-as-you-go resources are generated periodically, for example, hourly. After you release a resource, the bill for the final billing cycle is generated as scheduled. For example, if you release a resource at 10:08, the bill for the 10:00 to 11:00 hour is generated after 11:00.
        

**Troubleshooting**

1.  **Analyze the source of the charges:** Log on to ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance). In the filter conditions, set the statistical item to **Billable Item** and the statistical period to **Details** to identify the cloud resource that is incurring charges.
    
2.  **Check the usage time:** In ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance), view the usage time to confirm whether it falls within the final billing cycle of the released resource.
    
3.  **Check associated resources:** When you release an instance, check and release its associated pay-as-you-go resources, such as [deleting snapshots](/help/en/ecs/user-guide/delete-a-snapshot-1), [releasing disks](/help/en/ecs/user-guide/release-a-disk), or [releasing pay-as-you-go EIP instances](/help/en/eip/release-an-eip).
    

### **I'm using a free trial resource. Why are there charges on my bill?**

**Possible cause:** Free trial products use a pay-as-you-go model. To ensure your services are not interrupted, you receive reminder messages before the trial expires. After the trial, the instance is not automatically released and converts to a standard pay-as-you-go instance. Alternatively, your usage may have exceeded the free quota limit. Usage that exceeds the free quota is charged at the standard rate.

### **I bought a resource plan to offset costs. Why am I still being charged?**

**Possible causes**

-   The resource plan you purchased does not cover the billable item that is incurring charges. For example, a **standard zone-redundant storage** resource plan for Object Storage Service (OSS) cannot be used to offset charges for **outbound traffic over the Internet**.
    
-   The region where you are using the product is not covered by the purchased resource plan.
    
-   The resource plan has expired or its quota has been used up.
    

**Troubleshooting steps**

1.  **Check the resource plan status**: Log on to the [Expenses and Costs console > Account > Resource Plans](https://billing-cost.console.alibabacloud.com/ri/summary). Check the resource plan's **Status** and **Applicable Regions** to confirm that it is active and has a remaining quota.
    
2.  **Confirm the coverage:** Review the billing documentation for the Alibaba Cloud service to confirm the resource plan's coverage, and then check ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) to verify that the specific billable item is covered by the plan.
    

### **Why did my costs suddenly increase?**

**Possible cause:** A sudden increase in costs is usually due to business fluctuations or automatic resource renewals. Alternatively, another user of the account may have purchased new resources.

-   A sharp short-term increase in service access or data usage can lead to higher charges in usage-based billing scenarios. Examples include outbound traffic from ECS, outbound traffic over the Internet from OSS (traffic generated when accessing or downloading files stored in OSS from the Internet), and outbound traffic over the public network in mainland China from Content Delivery Network (CDN).
    
-   When you enable auto-renewal for a subscription product, the system automatically renews it before the instance expires.
    

**Troubleshooting**

## Legacy console

**Analyze detailed bills and usage:** Use the ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page to find the time, resource name, and billing item for the cost increase. Then, check the [**Usage Details**](https://usercenter2-intl.console.alibabacloud.com/finance/usage) page to compare resource usage between the period of the cost spike and a normal period.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048248.png)

**Analyze auto-renewal:** Log on to the [**Resource Renewal**](https://usercenter2-intl.console.alibabacloud.com/renew/auto?commodityCode=&expiresIn=) page. On the Auto Renewal tab, check for any unexpected resources set for auto-renewal. Then, on the ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, check if the **Transaction Type** is **Renewal.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048250.png)

## New console

**Analyze detailed bills and usage:** Use ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) to identify the time, specific resource name, and billable item associated with the cost increase. Then, view [**Usage Details**](https://usercenter2-intl.console.alibabacloud.com/finance/usage)**,** to compare the resource usage during the cost spike with normal periods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048236.png)

**Analyze auto-renewals:** Log on to the [**Renewals**](https://usercenter2-intl.console.alibabacloud.com/renew/auto?commodityCode=&expiresIn=) **page.** On the Auto-renewal tab, check for any unexpected auto-renewing resources. In ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)**,** check if the **Transaction Type** is **Renewal.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1000574.png)

### **My bill includes a "rounding adjustment" charge. What is this?**

**Explanation:** Alibaba Cloud product pricing has a precision of 10 decimal places. This means that pay-as-you-go charges can be calculated with a precision of up to 10 decimal places. During the actual settlement process, Alibaba Cloud aggregates these charges and discards the values from the 3rd to the 10th decimal place. This discarded amount is called the "rounding adjustment amount". Rounding adjustments are calculated at the end of each month during settlement and appear on the detailed bill for the last day of the month. They do not appear on mid-month bills.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048282.png)

## Prevent unexpected charges

## Legacy console

Configure the following two types of spending alerts to monitor your spending:

-   **Monthly spending alert**: Sends an email notification when your monthly spending exceeds the alert threshold.
    
-   **Available credit alert**: Sends an email notification when the account's available credit falls below the alert threshold. If you attach another payment method, these alert notifications will no longer be sent.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048301.png)

To ensure you receive alert notifications, configure a valid recipient for **Account Expense Notifications** in the [Message Center](https://notifications-intl.console.alibabacloud.com/subscribeMsg).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048300.png)

## New console

You can proactively monitor your spending by configuring two types of cost alerts:

-   **Product spending alerts**: Set spending thresholds for your Alibaba Cloud services to promptly detect abnormal usage or sudden cost increases and prevent unexpected charges.
    
-   **Available credit alerts**: Receive notifications when your account's available credit falls below a set threshold. This helps you identify spending from unmanaged or newly created resources, avoid service interruptions, and promptly detect unexpected charges.
    

To ensure you receive alert notifications promptly, configure a valid recipient for **Account Expense Messages** in the [Message Center](https://notifications-intl.console.alibabacloud.com/subscribeMsg).

### Set product spending alerts

Set daily spending alerts for pay-as-you-go products. After you enable alerts, the system sends one text message reminder per day when the daily bill for a specified product (up to 10) exceeds the alert threshold. For products billed monthly, a reminder is sent only once after the monthly bill is issued.

**Note**

For enterprise master accounts (MA), high-spending alerts apply only to the currently logged-on account, not to member accounts. To use this feature, member accounts must be configured separately by logging on to each account.

1.  **Enable spending alerts**: On the Cost Monitoring > [Cost Alerts](https://usercenter2-intl.console.alibabacloud.com/expense-manage/cost-warning) page, in the **High-Spending Alert** area, click **Details** to enable it.
    
2.  **Configure an alert amount**: Select **Alert Product**, enter **Alert Threshold**, and click the **Add** button.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1033410.png)

### **Set** available credit alerts

When your Alibaba Cloud account's **available credit** falls below the set threshold, the system sends a reminder once a day by text message, email, and internal message for up to five consecutive days.

1.  Go to the **Account** > **[Billing Account](https://usercenter2-intl.console.alibabacloud.com/fortune/billing-account)** page. In the **Account Settings** section, click **Modify Threshold** next to **Available Credit Alert**.
    
2.  In the drawer panel that appears, enter **Alert Threshold**, and click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1033416.png)

## **Common billing questions for Alibaba Cloud services**

For more billing questions about Alibaba Cloud services, see the billing documentation for each service.

-   Elastic Compute Service (ECS): [ECS Billing FAQ](/help/en/ecs/billing-faqs/)
    
-   ApsaraDB RDS (RDS): [Billing FAQ](/help/en/rds/apsaradb-rds-for-mysql/billing-faq)
    
-   Object Storage Service (OSS): [Cost optimization](/help/en/oss/faq-6/)
    
-   Elastic IP Address (EIP): [Billing FAQ](/help/en/eip/billing-faq)
    
-   Content Delivery Network (CDN): [Billing FAQ](/help/en/cdn/product-overview/faq-about-billing/)
