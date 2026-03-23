Cost details provide a breakdown of the actual costs consumed by each cloud resource. This feature helps you allocate the costs of subscriptions—such as yearly/monthly plans, resource plans, and savings plans—to the specific cloud resources that use them.

**Note**

-   Final cost details for a given month are available at 12:00 on the 4th day of the following month. Data queried before this time is for reference only.
    
-   Cost details are for analysis purposes only and cannot be used for financial reconciliation.
    
-   This feature requires the upgraded bill version. Alibaba Cloud is gradually rolling out this feature to users by invitation. For more information about the upgraded bill version, see [Bill versions](/help/en/user-center/instructions-for-using-the-bill#51447865e3bry).
    

## **Feature description**

Cost details currently support pay-as-you-go products and subscription products (including yearly/monthly products, resource plans, and savings plans).

-   For pay-as-you-go products, cost details are available by billing cycle, such as hourly or daily.
    
-   For subscription (yearly/monthly) products, cost details are available at a daily granularity.
    
-   For subscription-based resource plans and savings plans, the used portion supports cost details by billing cycle. The unused portion supports cost details by the deduction cycle of the resource plan or savings plan.
    

The following are not supported:

ECS reserved instances, resource plans for Alibaba Cloud Communications products, resource plans for products with monthly cumulative billing (such as Internet traffic), and products resold by virtual operators.

**Note**

When you upgrade a subscription product, cost details at the billable item granularity may fluctuate because discounts are not displayed. We are optimizing the rules for upgrades and downgrades.

### View and export cost detail bills

In the Expenses and Costs console, choose **Costs** > **Cost Allocation** > **[Cost Details](https://usercenter2-intl.console.alibabacloud.com/finance/cost-detail)**, set the query conditions, and view the cost detail data:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2697432671/p896475.png)

-   **Bill Generation Date**: The month for which you want to query allocated costs. For example, if you purchase a subscription product on January 1, 2025, with a service period from January 1, 2025, to December 31, 2025, and you want to query the allocated cost for February 2025, set the billing month to 2025-02.
    
-   **Line Item Type**: In the cost details data, you can view the following major cost categories:
    
    **Cost Type**
    
    **Cost description**
    
    Pay-as-you-go resource cost
    
    The cost incurred from the consumption of pay-as-you-go cloud resources.
    
    Subscription coverage cost
    
    The cost allocated to a cloud resource after its pay-as-you-go bill is covered by a subscription (yearly/monthly plan, resource plan, or savings plan).
    
    Subscription unsubscribe coverage cost
    
    The cost of an unsubscribed subscription that is allocated at once to the subscription itself after it has been used to cover a pay-as-you-go bill.
    
    Subscription unused cost
    
    The cost incurred from the unused portion of a subscription.
    

You can also customize the order of cost detail fields and export the cost details:

-   Customize bill columns: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2697432671/p896474.png) button to customize the bill fields you want to view.
    
    Sort custom cost detail fields: When viewing cost details in the console, you can drag the cost detail groups in the custom columns to sort them as needed. The custom order only applies to the view on the Cost Details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2697432671/p928698.png)
    
-   Export cost details: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2697432671/p896473.png) button to export the billing information. On the [Export Records](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page, download the exported file.
    

## **Examples of the cost allocation procedure**

### **Scenario 1: Allocation for a subscription product**

**Date**

**Transaction description**

09:00:00, December 31, 2024

A user purchases a subscription product.

Service period: 2024.12.31 09:00:00 to 2026.01.01 00:00:00, Amount payable: 365USD.

(Because the purchase was made partway through December 31, 2024, cost allocation begins at 00:00:00 on January 1, 2025.)

10:00:00, January 15, 2025

Initiating an upgrade changes the unit price to 2 USD per day.

A refund of 349USD is issued for the original purchase order, and a new upgrade sub-order is generated with a payable amount of 700USD.

Service period: 10:00:00, January 15, 2025 to 00:00:00, January 1, 2026.

09:00:00, December 20, 2025

A user is refunded 11USD.

**The cost allocation procedure is as follows:**

1.  **From 00:00:00, January 1, 2025 to 00:00:00, January 15, 2025:**
    
    Daily **Amortized cost** = 365 / 365 = 1USD. A row of cost details is generated each day.
    
2.  **At 10:00:00, January 15, 2025:**
    
    1.  For the original purchase order, the fee type is 'Subscription Unused Fee', and the **remaining cost = (365 - 14)****×** **1 = 351** **USD**, which is amortized as a lump sum.
        
    2.  The total amount of the upgrade sub-order is 350 × 2 = 700USD. This amount is amortized by epoch. Because the first day of the upgrade is a partial day, cost amortization begins on January 16, 2025.
        
    3.  This is a one-time amortization refund for a sub-order with the fee type "Subscription Unsubscribe Overwrite Fee". **The cost is -349** **USD****.**
        
3.  **From 00:00:00, January 16, 2025 to 00:00:00, December 20, 2025:** The daily amortized **cost is 2****USD**.
    
    For an upgrade sub-order, the fee type is 'Subscription Overwrite Fee' and the cost is amortized by epoch. The daily **cost amount is 700 / 350 = 2**USD.
    
4.  **At 09:00:00, December 20, 2025:**
    
    1.  When you unsubscribe, the fee type is 'Subscription Unsubscription Overwrite Fee', with a **Cost amount: -11**USD.
        
    2.  For the unused portion of the original order, the fee type is "Subscription Unused Fee", and **the cost is 700 - 338** × **2 = 24**USD.
        

### **Scenario 2: Allocation for a savings plan (constant total)**

**Date**

**Transaction description**

00:00:00, January 1, 2025

A user purchases an SPN savings plan product with instance ID SPN1 and an hourly committed spend of 10 USD. The subscription provides a 60% discount.

The service period is from 2025-01-01 00:00:00 to 2026-01-01 00:00:00. The total amount of 87,600USD is payable all upfront.

12:00:00, January 1, 2025

A user purchases a Savings Plan SPN product: the product instance is SPN2, the hourly commitment is 20 USD, and the subscription discount is 80%.

The service period is from 2025.01.01 00:00:00 to 2026.01.01 00:00:00, the payment is all upfront, and the total payable amount for the order is 175,200USD.

00:00:00–01:00:00, January 3, 2025

The user is charged 50USD for instance ECS1, and the cost is covered by Savings Plan SPN1 and Savings Plan SPN2.

00:00:00–01:00:00, January 4, 2025

A user incurs a charge of 150USD for instance ECS2, and the charge is covered by savings plans SPN1 and SPN2, respectively.

00:00:00, January 5, 2025

The user requests a refund of 80,000 USD for Savings Plan SPN1.

**The cost allocation procedure is as follows:**

1.  **From 00:00:00 to 12:00:00, January 1, 2025:**
    
    1.  Savings Plan SPN1 was not applied to any cloud resources. Its fee type is "Unused Subscription Fee", and its hourly amortized **cost is 10** **USD****.**
        
2.  **From 12:00:00, January 1, 2025 to 00:00:00, January 3, 2025:**
    
    1.  Savings Plan SPN1 was not used to offset any cloud resource costs. As a result, the fee type is 'Unused subscription fee' and the hourly amortized **cost is 10** **USD****.**
        
    2.  Savings Plan SPN2 was not used to offset costs for any cloud resources. This generated a 'Subscription Unused Fee', and the hourly amortized **cost is 20** **USD****.**
        
3.  **From 00:00:00 to 01:00:00, January 3, 2025:**
    
    1.  Savings Plan SPN1 provides 25 CNY of coverage for the pay-as-you-go ECS instance ECS1. The fee type is 'Subscription Coverage Fee', the amount is calculated as 10/0.4 = 25USD, and the **Cost Amount is 10****USD**.
        
    2.  Savings Plan SPN2 covers the remaining 25 CNY for the pay-as-you-go instance ECS2. This expense is classified as a 'Subscription coverage fee', calculated as 5 / 0.2 = 25USD based on a **Cost Amount = 5** **USD****.**
        
    3.  The unused portion of Savings Plan SPN2 is classified as an 'Unused Subscription Fee', with a cost of **20 - 5 = 15** **USD**, which is recorded against Savings Plan SPN2.
        
        **Note**
        
        _SPN2 can cover a maximum of 20 / 0.2 = 100_USD_._
        
4.  **From 01:00, January 3, 2025 to 00:00:00, January 4, 2025:**
    
    1.  Savings Plan SPN1 is not used to offset the cost of any cloud resources. The fee type is 'Unused subscription fee', and the hourly amortized **cost is 10** **USD**.
        
    2.  An 'Unused Subscription Fee' was incurred because Savings Plan SPN2 was not applied to any cloud resources, and the hourly amortized **cost is 20** **USD****.**
        
5.  **From 00:00:00 to 01:00:00, January 4, 2025:**
    
    1.  The pay-as-you-go ECS instance ECS2 is covered by Savings Plan SPN1 for 25USD. The fee type is 'Subscription Coverage Fee', calculated as 10 / 0.4 = 25USD, and the **Cost Amount = 10** **USD**.
        
    2.  ECS2 is covered by Savings Plan SPN2 for 100 USD. Bill Type: "Subscription Coverage Fee", 20 / 0.2 = 100 USD, **Cost Amount = 20** **USD**. The corresponding pay-as-you-go product covered is ECS, instance ECS2.
        
    3.  A remaining charge of 25 **USD** for instance ECS2 was not deducted, so a bill was generated for the ECS service: the fee type is 'Cloud Resource Pay-as-you-go Fee', and the **cost amount is 25****USD**. This bill is for the pay-as-you-go instance ECS2.
        
6.  **From 01:00, January 4, 2025 to 00:00:00, January 5, 2025:**
    
    1.  Savings Plan SPN1 is not applied to any cloud resources, which results in an 'Unused subscription fee'. The hourly amortized **cost is 10** **USD****.**
        
    2.  The cost of cloud resources was not covered by Savings Plan SPN2. The fee type is 'Unused Subscription Fee', and the hourly amortized **cost is 20** **USD****.**
        
7.  **At 00:00:00, January 5, 2025:**
    
    1.  Unsubscription from the refund order for SPN1: Fee type: 'Unsubscription Coverage Fee', **Cost amount = -80,000** **USD**, recorded against Savings Plan SPN1.
        
    2.  The remaining cost from the original subscription order for SPN1 is for an 'Unused subscription fee'. The **cost amount is 87,600 - 4** × **24** × **10 = 86,640****USD**, and this cost is recorded against Savings Plan SPN1.
        
8.  **From 00:00:00, January 5, 2025 to 00:00:00, January 1, 2026:**
    
    1.  Amortization of Savings Plan SPN2 continues until the end of the service period. The fee type is 'Unused Subscription Fee', and the hourly **amortized cost is 20** **USD****.**
        

### **Scenario 3: Allocation for a savings plan (decreasing total)**

**Date**

**Transaction description**

00:00:00, January 1, 2025

A user purchases a savings plan (SPN) product, instance SPN1, of the decreasing total type. The subscription pay rate is 40% of the list price.

The service period is from 2025.01.01 00:00:00 to 2026.01.01 00:00:00, with an all-upfront payment and a total committed spend of 365USD. Order payable amount: 365USD.

00:00:00, July 1, 2025

The user's charge of 50USD for ECS instance ECS1 was covered by savings plan SPN1.

**The cost allocation procedure is as follows:**

1.  **At 00:00:00, July 1, 2025:**
    
    ECS1 is covered by Savings Plan SPN1 for 50 USD: The fee type is 'Subscription Coverage Fee', 20/0.4 = 50 USD, and **the cost is 20** **USD**. This is the deduction for the pay-as-you-go instance ECS1.
    
2.  **At 00:00:00, January 1, 2026:**
    
    Unused **cost amount** for Savings Plan SPN1 upon expiration: The fee type is 'Subscription unused fee'. The **cost amount = 365 - 20 = 345** **USD**. This amount is recorded against Savings Plan SPN1.
    

### **Scenario 4: Allocation for a resource plan (constant total)**

**Date**

**Transaction description**

00:00:00, January 1, 2025

A user purchases a standard storage resource plan, ossbag, with instance ossbag1. The resource plan has a capacity of 1 GB. The capacity is refreshed hourly (constant total type).

Service period: 2025.01.01 00:00:00-2025.04.01 00:00:00. Order payable amount: 1080USD.

01:00:00–02:00:00, January 1, 2025

A user consumes an OSS product on instance OSS1 with a total usage of 3 GB, of which 1 GB is offset by the resource plan ossbag1, leaving 2 GB charged at 1USD/GB.

**The cost allocation procedure is as follows:**

1.  **From 00:00:00 to 01:00:00, January 1, 2025:**
    
    The ossbag1 resource plan was not used to offset any cloud resource costs, which resulted in an 'Unused Subscription Fee' with an hourly unused **cost = 0.5** **USD**.
    
2.  **From 01:00:00 to 02:00:00, January 1, 2025:**
    
    1.  The resource plan ossbag1 covers 1 GB of OSS usage. The fee type is 'Subscription Coverage Fee', and the cost is calculated as **Cost = 1080 / (24****×****90) = 0.5** **USD**. This fee is deducted from the pay-as-you-go instance OSS1.
        
    2.  For OSS1, the remaining 2 GB of usage was not covered by a resource plan, incurring a 'Pay-as-you-go for cloud resources' fee of **2** **USD**, which is recorded under the OSS product.
        
3.  **From 02:00:00, January 1, 2025 to 00:00:00, April 1, 2025:**
    
    No deduction was made from resource plan ossbag1**:** The fee type is 'Subscription Unused Fee', the hourly **cost is 0.5** **USD**, and this cost was recorded against it.
    

### **Scenario 5: Deduction for a resource plan (decreasing total)**

**Date**

**Transaction description**

00:00:00, January 1, 2025

A user purchases an Object Storage Service (OSS) resource plan, instance ossbag1, with a total capacity of 500 GB (decreasing total type).

Service period: 2025.01.01 00:00:00-2025.04.01 00:00:00. Order payable amount: 500USD.

10:00:00, January 3, 2025

A user consumes an OSS product, instance OSS1, with a usage of 400 GB, which is covered by resource plan ossbag1.

**The cost allocation procedure is as follows:**

1.  **At 10:00:00, January 3, 2025:**
    
    Resource plan ossbag1 is used for OSS deduction. The fee type is 'Subscription Coverage Fee', **Cost amount = (400 / 500)** × **500 = 400****USD**, and this cost is recorded for OSS1.
    
2.  **At 00:00:00, April 1, 2025:**
    
    Unused portion of an expired resource plan. The fee type is 'Subscription Unused Fee', **Cost amount = 500 - 400 = 100****USD**, which is recorded against the resource plan ossbag1.
    

### **Scenario 6: Pay-as-you-go**

**Date**

**Transaction description**

09:00:00, January 1, 2025

A user purchases a pay-as-you-go OSS product for instance OSS1, billed hourly at 1USD/GB.

The user consumed 300 GB at 09:00:00. The payable amount is 300USD.

09:00:00, January 3, 2025

The user consumed 200 GB at 09:00:00, and the payable amount is 200USD.

**The cost allocation procedure is as follows:**

1.  **2025.01.01 09:00:00:** One-time amortization for the OSS instance OSS1. **Cost:** 300USD.
    
2.  **2025-01-03 09:00:00:** OSS product instance OSS1, one-time amortization, **Cost amount =** 200USD.
    

## **Differences between cost details and amortized costs**

-   **Amortized costs:** Amortized costs show the costs of cloud resources and subscriptions for a specific period from a **time-based perspective**. This feature primarily amortizes the costs from pay-as-you-go and subscription bills over time to help you understand the cost distribution in each time period.
    
-   **Cost details:** Cost details show a breakdown of the actual costs consumed by each cloud resource from a **resource-based perspective**. This feature helps you allocate the costs of subscriptions (such as yearly/monthly plans, resource plans, and savings plans) to the specific cloud resources that use them.
    

The specific differences between amortized costs and cost details are shown in the following table:

**Reason for difference**

**Different scenarios**

**Amortized costs**

**Cost details**

Product positioning differences

\-

Helps you understand the cost distribution in each time period. It does not allocate subscription costs from a cloud resource perspective.

Helps you allocate subscription costs to the cloud resources that use them to see the complete cost of each cloud resource.

Data availability

\-

The final data for a month can be viewed or exported after 12:00 on the 6th day of the following month.

The final data for a month can be viewed or exported after 12:00 on the 4th day of the following month.

Data granularity

\-

Instance + monthly granularity

Billable item + billing granularity corresponding to different cost types:

-   For pay-as-you-go products, cost details are available by billing cycle (such as hourly or daily).
    
-   For subscription (yearly/monthly) products, cost details are available at a daily granularity.
    
-   For the used portion of subscription-based resource plans and savings plans, cost details are available by billing cycle. For the unused portion, cost details are available by the deduction cycle of the resource plan or savings plan.
    

Data output method

\-

Supports API operations

-   Supports OSS subscription. Supports delivery to Message Center (MC): Data up to the previous day is pushed daily at 18:00. The latest full data is pushed again at 18:00 on the 3rd day of the following month.
    
-   Does not support API operations
    

Rule differences

Upgrades or downgrades of subscriptions,

Upgrade or downgrade resource plans and savings plans

When an upgrade or downgrade occurs:

-   The original purchase order is amortized over the period.
    
-   The upgrade sub-order is amortized over the period.
    
-   The refund sub-order is amortized over the period.
    

When an upgrade or downgrade occurs, the subscription value is transferred:

-   The original purchase order is allocated at once on the upgrade date.
    
-   The upgrade sub-order is amortized over the period.
    
-   The refund sub-order is allocated at once on the upgrade date.
    

According to the new allocation rule, if the refund amount is not equal to the remaining value of the original purchase, the results for amortized costs and cost details will differ.

Purchase Fixed-fee Installment products

-   The upfront payment is amortized over the period.
    
-   Installment bills (pay-as-you-go) are amortized at once.
    

The total order amount is amortized over the period.

Purchase scenario for a stored-value card

Bills generated from prepaid card purchases are amortized over the period.

Bills for prepaid card purchases are not included in the costs.

When you use a prepaid card to purchase cloud resources, the covered cost can be queried in the cost details.

## **FAQ**

### **Are prepaid card purchases included in cost details?**

The transaction for purchasing a prepaid card is not included in the costs. However, when you use the prepaid card to purchase cloud resources, the covered cost can be queried in the cost details.
