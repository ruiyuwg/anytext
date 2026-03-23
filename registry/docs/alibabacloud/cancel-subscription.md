To unsubscribe from a resource or service, follow these steps:

1.  **Check if unsubscription is supported**
    
    -   **Unsubscription applies to subscription products**, for which you pay before use. Based on the \*\*subscription duration\*\* and \*\*usage\*\*, you may be eligible for a full or partial refund.
        
    -   **Pay-as-you-go products**, for which you pay after use, do not require unsubscription. For example, to stop billing for a \*\*pay-as-you-go\*\* \*\*ECS instance\*\*, back up your data and then release the \*\*resource\*\* in the [console](https://home.console.alibabacloud.com/home/dashboard/ResourceDashboard).
        
2.  **Submit an unsubscription request**
    
    -   Go to the **Expenses and Costs** - [Resource Unsubscription](https://billing-cost.console.alibabacloud.com/refund/renew-list) page. You can submit an unsubscription request for the target \*\*order\*\*. Review the refund amount and \*\*confirm\*\* the unsubscription.
        
    
    **Important**
    
    Unsubscriptions cannot be reversed. Review the \*\*order\*\* \*\*details\*\* carefully to prevent errors. The related \*\*resources\*\* are deleted after you unsubscribe. Back up your data in advance.
    
3.  **Check the refund result**
    
    -   The refund amount is calculated as follows: Cash Paid - Amount Consumed.
        
    -   After a successful unsubscription, the refund is issued to the original \*\*payment method\*\* (credit card, PayPal, or account balance) within 30 business days. If the original \*\*payment method\*\* is invalid (for example, a canceled bank card), the refund is credited to your \*\*Alibaba Cloud account balance\*\*.
        

## **Supported unsubscription scenarios**

Unsubscriptions fall into several categories based on \*\*resource\*\* properties, purchase duration, and \*\*usage\*\*: **five-day unsubscription for unused resources**, **partial unsubscription**, and **unsubscription of a pending renewal order**. The following table lists the unsubscription scenarios for common products. Supported indicates that a \*\*scenario\*\* is supported, and Not supported indicates that it is not.

**Common products supporting unsubscription**

**Product Name**

**Five-day unused unsubscription**

**Partial refund**

**Unsubscribe from a pending renewal order**

Elastic Compute Service

Not supported

Supported

Supported

Simple Application Server

Not supported

Supported

Supported

Edge Node Service

Not supported

Supported

Supported

Edge Security Acceleration (ESA) Service

Not supported

Supported

Supported

Cloud Phone

Not supported

Supported

Supported

NLB resource plan - International website

Supported

Supported

Supported

NAT gateway resource plan

Supported

Supported

Supported

Data Transmission Service (DTS) (subscription)

Not supported

Supported

Supported

PolarDB (subscription)

Not supported

Supported

Supported

PolarDB storage plan

Supported

Supported

Supported

ApsaraDB for MongoDB ReplicaSet (subscription)

Not supported

Supported

Supported

ApsaraDB for MongoDB sharded cluster (subscription)

Not supported

Supported

Supported

Lindorm (subscription)

Not supported

Supported

Supported

Database Backup storage plan

Supported

Supported

Supported

PAI subscription resources

Not supported

Supported

Supported

Container Registry Enterprise Edition

Not supported

Supported

Not supported

Cloud-native API Gateway (subscription instance)

Not supported

Supported

Supported

Message Queue for Kafka subscription

Not supported

Supported

Supported

Message Queue for RabbitMQ subscription

Not supported

Supported

Supported

RocketMQ 5.0 (subscription)

Not supported

Supported

Supported

Cloud Firewall

Not supported

Supported

Supported

Key Management Service (International)

Not supported

Supported

Not supported

Elasticsearch (subscription)

Not supported

Supported

Supported

Express Connect - Resource usage fee (International website)

Not supported

Supported

Supported

Alibaba Cloud Drive Enterprise Edition

Not supported

Supported

Supported

**Note**

Customer \*\*service\*\* must manually \*\*confirm\*\* returns for physical goods, which are delivered offline. If the return period specified for the \*\*product\*\* has passed, customer \*\*service\*\* cannot process the unsubscription and refund.

The table below details the rules and conditions for each unsubscription \*\*scenario\*\*.

**Unsubscription scenario**

**Conditions**

**Common products**

Full refund

Five-day unused full unsubscription

-   The product type is a resource plan.
    
-   The plan was purchased within the last 5 days and has zero usage.
    
-   Resource plan rule support
    

Pending renewal orders

-   The new service period has not yet begun, and the resource configuration has not been modified.
    

**Note**

If the resource configuration has been modified, you can only unsubscribe from the resource and its renewal order together. You cannot unsubscribe from the renewal order separately.

[Partial refund](#8df87e0554i4e)

Partial unsubscription

-   The resource was purchased more than 5 days ago or has been used.
    
-   The product supports partial unsubscription.
    

Resource downgrade

Subscription instances support specification downgrades. After a downgrade, a refund is calculated based on the price difference between the old and new configurations. For detailed rules, see [Refund rules for downgrades](/help/en/user-center/description-of-downgrade-refund-rules).

Switch from subscription to pay-as-you-go

The product supports switching billing methods. When you switch, the remaining fee is refunded. For detailed rules, see [Refund rules for switching from subscription to pay-as-you-go](/help/en/user-center/description-of-refund-rules-for-transfer-to-pay-as-you-go).

## **Unsupported unsubscription scenarios**

-   **Pay-as-you-go resources:** Go to the \*\*product\*\* \*\*console\*\* to release the \*\*resources\*\* and clear all billable items. \*\*Billing\*\* stops after the \*\*resources\*\* are deleted, and a final \*\*bill\*\* is generated at the end of the current \*\*billing\*\* cycle.
    
-   **Promotional restrictions:** The \*\*product\*\* was purchased as part of a promotional offer with rules that explicitly state 'No refunds'.
    
-   **Resource transfer:** Before you transfer a \*\*resource\*\*, a pop-up message informs you that no refund is available for unsubscription or downgrades after the transfer.
    
-   **Inconsistent settlement currency:** You cannot unsubscribe if the \*\*order\*\*'s historical \*\*settlement currency\*\* is different from your account's current \*\*settlement currency\*\*.
    
-   The cloud \*\*product\*\*'s rules do not support unsubscription.
    
-   **The resource has been upgraded:** \*\*Upgrade\*\* orders cannot be unsubscribed from separately. You must unsubscribe from the entire \*\*instance\*\*.
    
-   The \*\*resource\*\* \*\*instance\*\* has unpaid orders.
    
-   Reseller customers are not eligible for unsubscription.
    

If your situation is not listed above, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for manual processing.

## **Refund calculation**

### **Full refund**

**Refund amount = Amount paid for the order**. This is the cash amount that you paid.

**Unsubscription type**

**Case study**

**Full refund for unused resources within 5 days**

You purchase a new \*\*resource plan\*\* for a total price of \*\*USD\*\* 200 (\*\*USD\*\* 150 paid in cash and \*\*USD\*\* 50 covered by a \*\*coupon\*\*). If you request an unsubscription three days later with no \*\*usage\*\*, you will receive a refund of \*\*USD\*\* 150 in cash .

**Unsubscribe from a pending renewal order**

You have an existing \*\*ECS instance\*\* and pay for a \*\*renewal\*\* \*\*order\*\* with \*\*USD\*\* 300 (all in cash). If you unsubscribe from this \*\*renewal\*\* \*\*order\*\* before it takes effect, you will receive a refund of \*\*USD\*\* 300.

### **Partial refund**

Partial refunds include three types: **partial unsubscription**, **refund for downgrade**, and **refund for switching from subscription to pay-as-you-go**.

#### **Partial refund**

**Refund amount = Amount paid for the order - Amount consumed**

The **Amount paid for the order** refers to the cash portion you paid. The **Amount consumed** is calculated as follows: Daily price × \*\*Usage\*\* duration × Applicable discount for \*\*usage\*\* duration × Refund \*\*coefficient\*\*. The calculation rules for common cloud products are as follows:

**Product type and usage duration**

**Calculation rule**

ECS (subscription)

Cloud Firewall

Usage duration < 30 days

(Daily price × Usage duration × Applicable discount for the usage duration) × 1.5

Usage duration ≥ 30 days

Daily price × Usage duration × Applicable discount for the usage duration

Edge Node Service

Usage duration < 28 days

(Daily price × Usage duration × Applicable discount for the usage duration) × 1.5

Usage duration ≥ 28 days

(Daily price × Usage duration × Applicable discount for the usage duration)

Web Application Firewall

(Daily price × Usage duration × Applicable discount for the usage duration) × 1.5

Other (see the cloud product documentation for details)

Daily price × Usage duration × Applicable discount for the usage duration

##### **Parameter description**

**Parameter**

**Description**

Usage duration

The actual consumption duration of the order. **Usage duration = Unsubscription time - Order start time**, calculated in days. Any partial day is counted as a full day. For example:

-   If an instance is purchased at 12:00 on January 1, 2023 and unsubscribed at 14:00 on January 10, 2023, the usage duration is 10 days.
    
-   If an instance is purchased at 12:00 on January 1, 2023 and unsubscribed on the same day, the usage duration is 1 day.
    
    **Note**
    
    When unsubscribing from a renewal, the usage duration is calculated based on the start and end times of the renewal period.
    

Applicable discount for the usage duration

The system recalculates the most applicable discount based on factors such as resource configuration and the actual consumption duration of the order at the time of unsubscription.

Daily price

-   **If the original order was for a new purchase, renewal, or downgrade:** Daily price = Official list price of the order / Actual subscription duration of the order
    
-   **If the original order was for an upgrade:** Daily price = Daily price difference between the configurations before and after the upgrade = (Official list price of the order / Actual subscription duration of the order) × Price difference ratio of configurations before and after the upgrade
    
    -   Price difference ratio of configurations before and after the upgrade = (Daily price of the upgraded configuration - Daily price of the pre-upgrade configuration) / Daily price of the upgraded configuration. All prices are undiscounted daily prices.
        
    -   The daily price of the upgraded configuration and the daily price of the pre-upgrade configuration are original daily prices. Original daily price = Official list price of the order / Actual subscription duration of the order.
        

##### **Calculation example**

You purchase a \*\*Simple Application Server\*\* for three years. The official list price is \*\*USD\*\* 140 per month or \*\*USD\*\* 5,040 for three years. You receive a 55% discount for a three-year purchase and pay \*\*USD\*\* 2,736. You unsubscribe after one year (365 days) of use.

-   **Days used**: 365 days.
    
-   **Applicable Discount**: A 15% discount is applied for a one-year \*\*subscription duration\*\*.
    
-   **Daily price**: `**USD** 5,040 / (365 days × 3) = **USD** 4.6027/day`.
    
-   **Amount consumed**: `**USD** 4.6027/day × 365 days × 0.85 = **USD** 1,428`.
    
-   **Final refund amount**: `**USD** 2,736 - **USD** 1,428 = **USD** 1,308`.
    

#### **Refund for downgrade**

When you \*\*downgrade\*\* the specifications of a \*\*subscription\*\* \*\*instance\*\*, the system automatically refunds a portion of the fee based on the rules. However, if the calculated refund amount is less than 0, a refund is not issued.

A \*\*downgrade\*\* is equivalent to canceling the original \*\*order\*\* and creating a new one for the downgraded \*\*configuration\*\*. The system uses the new \*\*order\*\* to calculate the \*\*usage\*\* duration and the amount consumed. The refund is calculated using the following \*\*formula\*\*:

**Refund for downgrade=Online refund amount × Price difference ratio of old and new configurations (If there are multiple orders, the amounts are calculated separately and then added together.)**

-   **Online refund amount=Amount paid for the order - Amount consumed**
    
    -   The amount paid for the \*\*order\*\* refers to the cash portion that you paid.
        
    -   The calculation logic for the amount consumed is as follows:
        
    -   **Product type and usage duration**
        
        **Calculation rule**
        
        Elastic Compute Service
        
        Usage duration < 30 days
        
        Amount consumed=(Daily price × Usage duration × Applicable discount for the usage duration) × 1.5
        
        Usage duration >=30 days
        
        Amount consumed=Daily price × Usage duration × Applicable discount for the usage duration
        
        Other cloud products that support downgrades
        
        Amount consumed = Daily price × Usage duration × Applicable discount for the usage duration.
        
-   **Price difference ratio = (Daily price of the original configuration - Daily price of the downgraded configuration) / Daily price of the original configuration**
    
    -   Daily price difference for the original order configuration:
        
        -   If the \*\*instance\*\* was not upgraded before the \*\*downgrade\*\*, the original \*\*configuration\*\* daily price difference is the daily price of the original \*\*configuration\*\*.
            
        -   If the \*\*instance\*\* was upgraded before the \*\*downgrade\*\*, the original daily price difference is the daily price of the original \*\*configuration\*\* minus the daily price of the \*\*configuration\*\* before the \*\*upgrade\*\*.
            
    -   Daily price=Order original price / Actual \*\*subscription duration\*\* of the \*\*order\*\*.
        

**The parameters, such as the daily unit price, are as follows:**

**Parameter**

**Description**

Usage duration

The actual consumption duration of the order. Usage duration = Conversion time - Order start time. The usage duration is calculated to the day, and any partial day is counted as a full day. For example:

-   If you purchase an ECS server for 1 year at 12:00 on January 1, 2023 and convert the resource to pay-as-you-go at 14:00 on January 10, 2023, the usage duration is 10 days.
    
-   If you purchase an ECS server for 1 year at 12:00 on January 1, 2023 and convert the resource to pay-as-you-go on the same day (at 14:00 on January 1, 2023), the usage duration is 1 day.
    

Applicable discount for the usage duration

The system recalculates the best available discount based on factors such as resource configuration and the actual consumption duration of the order at the time of unsubscription.

Daily price

-   If the original order was for a new purchase, renewal, or downgrade: Daily price = Order original price / Actual subscription duration of the order
    
-   If the original order was for an upgrade: Daily price = Daily price difference between the configurations before and after the upgrade = (Order original price / Actual subscription duration of the order) × Price difference ratio of configurations before and after the upgrade
    
    -   Price difference ratio of configurations before and after the upgrade = (Daily price of the upgraded configuration - Daily price of the pre-upgrade configuration) / Daily price of the upgraded configuration. These are all undiscounted daily prices.
        
    -   Actual subscription duration of the order = Order end time - Order start time. The actual subscription duration is rounded down. For example, if you purchase an ECS server for 1 month at 12:00 on January 1, 2023, and the order ends at 00:00 on February 2, 2023, the actual subscription duration is 31 days.
        

#### **Refund for switching from subscription to pay-as-you-go**

If a cloud \*\*product\*\* supports switching from \*\*subscription\*\* to \*\*pay-as-you-go\*\*, the system automatically refunds the remaining \*\*subscription\*\* fee based on the conversion rules. However, if the calculated refund amount is less than 0, a refund is not issued. The unsubscription amount is calculated based on the following \*\*billing\*\* rules:

**Unsubscription amount = Amount paid for the order - Amount consumed.** The parameters are described as follows:

-   **Amount paid for the order** refers to the cash portion that you paid.
    
-   **Amount consumed** = Daily price × \*\*Usage\*\* duration × Applicable discount for the \*\*usage\*\* duration × Refund \*\*coefficient\*\*.
    

The calculation rules for the amount consumed are as follows:

**Product type and usage duration**

**Calculation rule**

Elastic Compute Service

Usage duration < 30 days

Amount consumed=(Daily price × Usage duration × Applicable discount for the usage duration) × 1.5

Usage duration >=30 days

Amount consumed=Daily price × Usage duration × Applicable discount for the usage duration

Other cloud products that support conversion

Amount consumed = Daily price × Usage duration × Applicable discount for the usage duration.

The parameters, such as the daily unit price, are as follows:

**Parameter**

**Description**

Usage duration

The actual consumption duration of the order. Usage duration = Conversion time - Order start time. The usage duration is calculated to the day, and any partial day is counted as a full day. For example:

-   If you purchase an ECS server for 1 year at 12:00 on January 1, 2023 and convert the resource to pay-as-you-go at 14:00 on January 10, 2023, the usage duration is 10 days.
    
-   If you purchase an ECS server for 1 year at 12:00 on January 1, 2023 and convert the resource to pay-as-you-go on the same day (at 14:00 on January 1, 2023), the usage duration is 1 day.
    

Applicable discount for the usage duration

The system recalculates the best available discount based on factors such as resource configuration and the actual consumption duration of the order at the time of unsubscription.

Daily price

-   If the original order was for a new purchase, renewal, or downgrade: Daily price = Order original price / Actual subscription duration of the order
    
-   If the original order was for an upgrade: Daily price = Daily price difference between the configurations before and after the upgrade = (Order original price / Actual subscription duration of the order) × Price difference ratio of configurations before and after the upgrade
    
    -   Price difference ratio of configurations before and after the upgrade = (Daily price of the upgraded configuration - Daily price of the pre-upgrade configuration) / Daily price of the upgraded configuration. These are all undiscounted daily prices.
        
    -   Actual subscription duration of the order = Order end time - Order start time. The actual subscription duration is rounded down. For example, if you purchase an ECS server for 1 month at 12:00 on January 1, 2023, and the order ends at 00:00 on February 2, 2023, the actual subscription duration is 31 days.
        

## **Understand the impact of unsubscription**

-   After you unsubscribe, the corresponding \*\*resource\*\* or \*\*instance\*\* is purged, and the data is not retained. You must back up your data in advance.
    
-   After you unsubscribe, you cannot participate in the promotional activities that were available at the time of purchase. Any benefits granted with the \*\*order\*\*, such as \*\*coupons\*\*, are voided.
    
-   After a \*\*resource plan\*\* is unsubscribed, the corresponding \*\*product\*\* continues to operate and automatically switches to the \*\*pay-as-you-go\*\* \*\*billing\*\* method. You must ensure that your account has sufficient funds.
    
-   Unsubscribing from a pending \*\*renewal\*\* reverts the expiration date of the \*\*resource\*\* to what it was before the \*\*renewal\*\*. You must back up or migrate your data before the expiration date.
    

## **Check the refund destination**

Refund processing and bank channel transfers require time. The funds are expected to arrive within **30 business days**. Refunds are returned to the **original payment method** by \*\*default\*\*.

**Payment method**

**Refund destination**

**Credit card payment**

If you **unsubscribe** within 5 months (150 days) of payment, the refund is returned to the original credit card.

If you **unsubscribe** after 5 months, the refund is credited to your **Alibaba Cloud account balance**.

**PayPal payment**

If you **unsubscribe** within 6 months (180 days) of payment, the refund is returned to the original PayPal account.

If you **unsubscribe** after 6 months, the refund is credited to your **Alibaba Cloud account balance**.

**Alibaba Cloud account balance**

The refund is directly credited to your **Alibaba Cloud account balance**.

**Note**

If the refund to the original \*\*payment method\*\* fails for reasons such as a canceled bank card or channel restrictions, the funds are credited to your **Alibaba Cloud account balance**.

## **Request unsubscription**

To unsubscribe from products that support \*\*self-service unsubscription\*\*, follow these steps:

1.  Log on to the \*\*Alibaba Cloud\*\* **console**, and go to the **[Resource Unsubscription](https://billing-cost.console.alibabacloud.com/refund/renew-list)** page in the Fee Hub.
    
2.  Find the \*\*order\*\* that you want to **unsubscribe** from and click **Unsubscribe Resource** in the **Actions** column.
    
3.  The system displays the estimated refund amount, calculation \*\*details\*\*, and refund destination. Carefully review the information.
    
4.  After you \*\*confirm\*\* the information, select the checkbox to agree to the terms and \*\*submit\*\* the **unsubscription** request.
    

For detailed instructions, see [Request unsubscription](/help/en/user-center/initiate-unsubscribe).

## **FAQ**

### **Why is my refund amount zero?**

-   The \*\*value\*\* of the \*\*coupon\*\* used at the time of purchase was high, which resulted in the cash portion of the payment being fully consumed.
    
-   During a \*\*downgrade\*\*, the calculated \*\*value\*\* difference between the old and new specifications is less than or equal to zero.
    
-   The \*\*product\*\* was purchased as part of a special promotional activity that does not support unsubscription.
    
-   According to the calculation \*\*rule\*\* for [partial unsubscription](#dfe21521445ic) (Refund amount = Amount paid for the \*\*order\*\* - Amount consumed), if the calculated consumed amount exceeds the amount you paid at the time of purchase, no funds are available for a refund. Therefore, the refund amount is 0.
    

### **Can an unsubscription be reversed?**

A successful unsubscription cannot be reversed. Review the \*\*order\*\* information carefully to avoid errors. After you unsubscribe, the related \*\*resources\*\* will be purged. Back up your data in advance.

### **Why did my costs increase after I unsubscribed from a resource plan?**

After a \*\*resource plan\*\* is unsubscribed, products that were using the \*\*resource plan\*\* for \*\*usage\*\* deduction immediately \*\*switch\*\* to the \*\*pay-as-you-go\*\* \*\*billing\*\* method. If these products are still running, they start to generate \*\*pay-as-you-go\*\* bills.

### **How do I stop billing for pay-as-you-go products?**

\*\*Pay-as-you-go\*\* products do not require unsubscription. Log on to the \*\*product\*\* \*\*console\*\*, find the corresponding \*\*instance\*\* or \*\*service\*\*, and perform the '\*\*Release\*\*' or '\*\*Delete\*\*' \*\*operation\*\* to stop \*\*billing\*\*. Back up your data before you perform this \*\*operation\*\*.

If you encounter problems during unsubscription, see [Unsubscription FAQ](/help/en/user-center/support/faq-about-unsubscription). If you still have questions, you can contact us through [customer service](https://ia.aliyun.com/home?spm=5176.12818093.nav-right.ditem-sub.71df16d0WUNRsa&channel=ticket&mark=console-home).
