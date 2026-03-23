Upgrade your Edge Security Acceleration (ESA) plan to a higher tier to get more traffic, larger rule quotas, and stronger security protection. Fees are prorated based on the remaining duration.

**Note**

Downgrades are not supported. To upgrade to the Enterprise plan, [contact us](https://page-intl.aliyun.com/form/act1769249277/index.htm) for customization.

## **Prerequisites**

The plan must be active. Renew an expired plan before upgrading. For more information about plan statuses, see [Query plan information](/help/en/edge-security-acceleration/esa/product-overview/query-package-information).

## **Procedure**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the left-side navigation pane, choose **Billing Management** > **Plans**.
    
2.  On the **Plans** page, find the plan and click **Upgrade**.
    
    ![Click Upgrade on the Plans page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7658624471/p868497.png)
    
3.  In the **Upgrade Plan** dialog box, select the target plan, select the checkbox to agree to the Terms of Service, and then click **OK**.
    

## **What changes after upgrade**

**Item**

**Behavior**

Feature benefits

Updated to the new plan immediately.

Traffic allowance

Prorated for the upgrade month and the final partial month. Full new plan allowance for months in between.

Expiration date

Unchanged. Same as the original plan.

## **Upgrade rules**

The following diagram shows the plan tiers in ascending order.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0389822771/CAEQUBiBgMCcoouq2BkiIGJkNGFkMzY2N2U1ZTRkMDhiNDBhYjEzNTIyY2YxYWFj4740019_20241106101425.976.svg)

**Rule**

**Description**

Upgrades supported

Upgrade from a lower-tier plan to a higher-tier plan.

Downgrades not supported

Downgrading to a lower-tier plan is not supported.

Prorated pricing

The expiration date stays the same after upgrade. You pay only the price difference for the remaining duration.

## **Upgrade fees**

When you upgrade, you pay the prorated price difference between the new plan and the current plan.

### **Fee formula**

`**Price Difference = (New Plan Price - Original Plan Price) x Remaining Duration x Applicable Discount for Remaining Duration**`

**Variable**

**Description**

Price Difference

The prorated cost of the upgrade. Accurate to 0.01 USD.

Plan Price

The current price listed on the official ESA [pricing page](https://esa.console.alibabacloud.com/commonBuy).

Remaining Duration

The total remaining hours from the upgrade time to the original plan expiration time, converted to months based on 30-day months.

Applicable Discount for Remaining Duration

If you are eligible for a discount, it is applied to the upgrade fee.

## **Traffic after upgrade**

Traffic is prorated for the upgrade month. For subsequent full months, you receive the new plan's full monthly traffic. For the final partial month of the subscription, traffic is also prorated.

### **Calculation rules**

-   Traffic is calculated per calendar month.
    
-   Values are rounded up to the nearest GB.
    
-   ESA uses decimal conversions: 1 GB = 1,000 MB, 1 TB = 1,000 GB.
    

**Important**

The additional traffic for the upgrade month is added to your account. If you already used all the traffic from your original plan before the upgrade, the system adds only the traffic difference between the two plans.

### **Upgrade month formula**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0389822771/CAEQUBiBgMDyoY2q2BkiIDI0M2JmODRkODQxMzQyYjg5M2ZiODYzZTY0ZjJmMDFh4459407_20240622171428.762.svg)

`**Monthly Traffic After Upgrade = Monthly Available Traffic of Original Plan + (Total Monthly Traffic of New Plan - Total Monthly Traffic of Original Plan) x Remaining Hours of New Plan in Current Month / Total Hours of New Plan in Current Month**`

**Variable**

**Description**

Monthly Traffic After Upgrade

The prorated monthly traffic after the upgrade. Rounded up to the nearest GB.

Monthly Available Traffic of Original Plan

The prorated traffic for the original plan in the current month. Calculated as: Total Monthly Traffic x Remaining Duration in Month / Total Duration in Month.

Total Monthly Traffic of New Plan

The total monthly traffic of the new plan, as listed on the official ESA pricing page.

Total Monthly Traffic of Original Plan

The total monthly traffic of the original plan, as listed on the official ESA pricing page.

Remaining Hours of New Plan in Current Month

The hours the new plan is active for the remainder of the current month.

Total Hours of New Plan in Current Month

The total hours in the current calendar month.

### **Example**

User A purchased a plan with 50 GB/month for three months at 15:15:49 on March 11, 2024. The plan expires at 00:00:00 on June 12, 2024. Due to increased business needs, User A upgraded to the **Pro** plan (500 GB/month) at 18:25:42 on March 28, 2024.

The following table shows the monthly traffic after the upgrade.

**Month**

**Original monthly traffic**

**Upgraded monthly traffic**

March

32 GB

80 GB (32 GB + 48 GB)

April

50 GB

500 GB

May

50 GB

500 GB

June

19 GB

184 GB

#### **Detailed calculation**

**March:**

-   Monthly available traffic of original plan: 50 GB/month x ((March 31, 2024 - March 12, 2024) x 24 hours + (24:00:00 - 15:00:00)) / (31 days x 24 hours) = 31.25 GB. Rounded up: 32 GB.
    
-   Total monthly traffic of new plan: 500 GB/month.
    
-   Total monthly traffic of original plan: 50 GB/month.
    
-   Remaining hours of new plan in current month: (March 31, 2024 - March 28, 2024) x 24 hours + (24:00:00 - 18:00:00) = 78 hours.
    
-   Total hours of new plan in current month: 31 days x 24 hours = 744 hours.
    
-   Upgraded monthly traffic: 32 GB + (500 GB/month - 50 GB/month) x 78 hours / 744 hours = 79.1774 GB. Rounded up: **80 GB**.
    

User A's monthly traffic for March: 80 GB.

**April and May:**

Full calendar months after the upgrade. Monthly traffic equals the **Pro** plan total: 500 GB.

**June (partial month):**

-   Total monthly traffic of new plan: 500 GB/month.
    
-   Remaining hours of new plan in current month: (June 12, 2024 - June 1, 2024) x 24 hours = 264 hours.
    
-   Total hours of new plan in current month: 30 days x 24 hours = 720 hours.
    
-   Monthly traffic: 500 GB/month x 264 hours / 720 hours = 183.3333 GB. Rounded up: **184 GB**.
    

User A's monthly traffic for June: 184 GB.

## **When to upgrade**

Consider upgrading if you encounter any of the following:

-   **Traffic overage**: Monthly traffic usage frequently exceeds the plan allowance, resulting in excess traffic fees.
    
-   **Insufficient rule quota**: More cache rules or origin server configuration rules are needed than the current plan allows.
    
-   **Insufficient security protection**: The origin server is frequently targeted by DDoS attacks or intrusion attempts, and the current plan no longer provides sufficient protection.
    
-   **Additional feature needs**: Features such as Website Config for subdomains, security analytics, or expert services are required.
    

For a full comparison of plan features, see [Plan comparison](/help/en/edge-security-acceleration/esa/product-overview/package-function-comparison).
