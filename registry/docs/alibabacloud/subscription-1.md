Subscription is a prepaid billing method that requires you to pay for resources before you use them. The subscription plan for Hologres supports both upgrades and downgrades, allowing you to flexibly scale resources as needed. This topic describes the billing rules for Hologres subscriptions.

## Lifecycle management

The subscription billing method is a prepaid plan for using the Hologres service. The lifecycle of a subscription Hologres instance is as follows:![订阅生命周期](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1832490161/p214168.png)

-   Instance expiration
    
    For example, you purchase a four-month subscription for a Hologres instance. After you complete the payment, the instance is available for use. The instance runs normally for the four-month subscription period. When the subscription expires, Hologres immediately stops all services, and the instance enters a stopped state. To continue using the instance, you must renew it. If you do not renew the instance within 14 days after it expires, the instance is released. After an instance is released, it is deleted from the console and all its data becomes unrecoverable. No bills are generated during this 14-day grace period. If you request to unsubscribe from the instance, it is released immediately after the request is approved.
    
-   Examples of account overdue payment scenarios
    
    If your Alibaba Cloud account has an overdue payment, your Hologres subscription instance remains usable for 24 hours. If you settle the payment within this period, your service is not interrupted. If the payment is not made within 24 hours, the instance is locked and becomes inaccessible until the subscription expires. After the subscription expires, the instance stops immediately. If you settle the overdue payment within 14 days after expiration, you can resume using the instance. Otherwise, the system releases the instance. **After the instance is released, your business data is permanently deleted within 15 days and cannot be recovered**.
    

**Note**

You can change the billing method of a Hologres instance from **pay-as-you-go** to **subscription**. You cannot change the billing method from **subscription** to **pay-as-you-go**.

## Billing rules

The following table describes the billing rules.

**Important**

Subscription fees do not include charges for advanced features, such as Serverless Computing, backup and recovery, and cross-region snapshot replication. The compute, storage, and network resources used by advanced features are billed on a pay-as-you-go basis.

**Resource type**

**Resource specification**

**Resource Unit**

**Description**

Compute

-   General-purpose
    
-   Read-only secondary instances
    

The unit price varies by region. The details are as follows:

-   Singapore: USD 31.970149/CU/month
    
-   China (Hong Kong): USD 30.194030/CU/month
    
-   US (Silicon Valley): USD 29.432836/CU/month
    
-   US (Virginia): USD 27.149254/CU/month
    
-   Malaysia (Kuala Lumpur): USD 35.268657/CU/month
    
-   Japan (Tokyo): USD 30.194030/CU/month
    
-   Indonesia (Jakarta): USD 31.462687/CU/month
    
-   China (Hangzhou): USD 25.373134/CU/month
    
-   China (Shanghai): USD 25.373134/CU/month
    
-   China (Beijing): USD 25.373134/CU/month
    
-   China (Shenzhen): USD 25.373134/CU/month
    
-   China (Ulanqab): USD 25.373134/CU/month
    
-   China (Zhangjiakou): USD 25.567164/CU/month
    
-   Germany (Frankfurt): USD 32.731343/CU/month
    

(1 CU = 1 core 4 GB)

1 CU = 1 core 4 GB

Reserved compute resources for an instance

Compute group-based

The unit price varies by region. The details are as follows:

-   Singapore: USD 31.970149/CU/month
    
-   China (Hong Kong): USD 30.194030/CU/month
    
-   US (Silicon Valley): USD 29.432836/CU/month
    
-   US (Virginia): USD 27.149254/CU/month
    
-   Malaysia (Kuala Lumpur): USD 35.268657/CU/month
    
-   Japan (Tokyo): USD 30.194030/CU/month
    
-   Indonesia (Jakarta): USD 31.462687/CU/month
    
-   China (Hangzhou): USD 25.373134/CU/month
    
-   China (Shanghai): USD 25.373134/CU/month
    
-   China (Beijing): USD 25.373134/CU/month
    
-   China (Shenzhen): USD 25.373134/CU/month
    
-   China (Ulanqab): USD 25.373134/CU/month
    
-   China (Zhangjiakou): USD 25.567164/CU/month
    
-   Germany (Frankfurt): USD 32.731343/CU/month
    

(1 CU = 1 core 4 GB)

1 CU = 1 core 4 GB

Elastic compute resources of a compute group (including scheduled and automatic elasticity)

Compute group instance

The unit price varies by region. The details are as follows:

-   Singapore: USD 0.066604/CU/hour
    
-   China (Hong Kong): USD 0.062904/CU/hour
    
-   US (Silicon Valley): USD 0.061318/CU/hour
    
-   US (Virginia): USD 0.056561/CU/hour
    
-   Malaysia (Kuala Lumpur): USD 0.073476/CU/hour
    
-   Japan (Tokyo): USD 0.062904/CU/hour
    
-   Indonesia (Jakarta): USD 0.065547/CU/hour
    
-   China (Hangzhou): USD 0.052861/CU/hour
    
-   China (Shanghai): USD 0.052861/CU/hour
    
-   China (Beijing): USD 0.052861/CU/hour
    
-   China (Shenzhen): USD 0.052861/CU/hour
    
-   China (Ulanqab): USD 0.052861/CU/hour
    
-   China (Zhangjiakou): USD 0.044932/CU/hour
    
-   Germany (Frankfurt): USD 0.068190/CU/hour
    

1 CU = 1 core 4 GB

Gateway resources

Compute group-based

The unit price varies by region. The details are as follows:

-   Singapore: USD 63.940298/node/month
    
-   China (Hong Kong): USD 60.388060/node/month
    
-   US (Silicon Valley): USD 58.865672/node/month
    
-   US (Virginia): USD 54.298508/node/month
    
-   Malaysia (Kuala Lumpur): USD 70.537314/node/month
    
-   Japan (Tokyo): USD 60.388060/node/month
    
-   Indonesia (Jakarta): USD 62.925374/node/month
    
-   China (Hangzhou): USD 50.746268/node/month
    
-   China (Shanghai): USD 50.746268/node/month
    
-   China (Beijing): USD 50.746268/node/month
    
-   China (Shenzhen): USD 50.746268/node/month
    
-   China (Ulanqab): USD 50.746268/node/month
    
-   China (Zhangjiakou): USD 43.134328/node/month
    
-   Germany (Frankfurt): USD 65.462686/node/month
    

None

Serverless Computing resources

-   General-purpose
    
-   Compute group-based
    

The unit price varies by region. The details are as follows:

-   China (Hangzhou): USD 0.052866/CU/hour
    
-   China (Shanghai): USD 0.052866/CU/hour
    
-   China (Beijing): USD 0.052866/CU/hour
    
-   China (Shenzhen): USD 0.052866/CU/hour
    
-   China (Ulanqab): USD 0.052866/CU/hour
    
-   China (Hong Kong): USD 0.062904/CU/hour
    
-   Singapore: USD 0.066604/CU/hour
    
-   Indonesia (Jakarta): USD 0.065547/CU/hour
    
-   US (Virginia): USD 0.056561/CU/hour
    
-   Germany (Frankfurt): USD 0.068190/CU/hour
    

Pay-as-you-go. You are billed for the amount of Serverless Computing resources used and the duration of use.

Storage

Standard storage (locally redundant storage)

The unit price varies by region. The details are as follows:

-   Singapore: USD 0.182090/GB/month
    
-   China (Hong Kong): USD 0.174627/GB/month
    
-   US (Silicon Valley): USD 0.171642/GB/month
    
-   US (Virginia): USD 0.164179/GB/month
    
-   Malaysia (Kuala Lumpur): USD 0.197015/GB/month
    
-   Japan (Tokyo): USD 0.177612/GB/month
    
-   Indonesia (Jakarta): USD 0.183582/GB/month
    
-   China (Hangzhou): USD 0.149254/GB/month
    
-   China (Shanghai): USD 0.149254/GB/month
    
-   China (Beijing): USD 0.149254/GB/month
    
-   China (Shenzhen): USD 0.149254/GB/month
    
-   China (Ulanqab): USD 0.149254/GB/month
    
-   China (Zhangjiakou): USD 0.126866/GB/month
    
-   Germany (Frankfurt): USD 0.189552/GB/month
    

None

Standard storage (zone-redundant storage)

-   China (Shenzhen): USD 0.194030/GB/month
    
-   China (Beijing): USD 0.194030/GB/month
    
-   China (Shanghai): USD 0.027941/GB/month
    
-   China (Hong Kong): USD 0.261941/GB/month
    
-   Singapore: USD 0.273135/GB/month
    

Infrequent Access storage (locally redundant storage)

The unit price varies by region. The details are as follows:

-   Singapore: USD 0.026221/GB/month
    
-   China (Hong Kong): USD 0.025146/GB/month
    
-   US (Silicon Valley): USD 0.024716/GB/month
    
-   US (Virginia): USD 0.023642/GB/month
    
-   Malaysia (Kuala Lumpur): USD 0.028370/GB/month
    
-   Japan (Tokyo): USD 0.025576/GB/month
    
-   Indonesia (Jakarta): USD 0.026436/GB/month
    
-   China (Hangzhou): USD 0.021493/GB/month
    
-   China (Shanghai): USD 0.021493/GB/month
    
-   China (Beijing): USD 0.021493/GB/month
    
-   China (Shenzhen): USD 0.021493/GB/month
    
-   China (Ulanqab): USD 0.021493/GB/month
    
-   China (Zhangjiakou): USD 0.018269/GB/month
    
-   Germany (Frankfurt): USD 0.027296/GB/month
    

Infrequent Access storage (zone-redundant storage)

-   China (Shenzhen): USD 0.027941/GB/month
    
-   China (Beijing): USD 0.027941/GB/month
    
-   China (Shanghai): USD 0.027941/GB/month
    
-   China (Hong Kong): USD 0.037719/GB/month
    
-   Singapore: USD 0.039332/GB/month
    

Backup set storage

The unit price varies by region. The details are as follows:

-   Singapore: USD 0.000055/GB/hour
    
-   China (Hong Kong): USD 0.000052/GB/hour
    
-   US (Silicon Valley): USD 0.000051/GB/hour
    
-   US (Virginia): USD 0.000049/GB/hour
    
-   Malaysia (Kuala Lumpur): USD 0.000059/GB/hour
    
-   Japan (Tokyo): USD 0.000053/GB/hour
    
-   Indonesia (Jakarta): USD 0.000055/GB/hour
    
-   China (Hangzhou): USD 0.000045/GB/hour
    
-   China (Shanghai): USD 0.000045/GB/hour
    
-   China (Beijing): USD 0.000045/GB/hour
    
-   China (Shenzhen): USD 0.000045/GB/hour
    
-   China (Ulanqab): USD 0.000045/GB/hour
    
-   China (Zhangjiakou): USD 0.000038/GB/hour
    
-   Germany (Frankfurt): USD 0.000057/GB/hour
    

The size of a backup set fluctuates based on the backup policy and the amount of differential data. Therefore, backup set storage is always billed on a pay-as-you-go basis. This means that even for a subscription product, backup set storage is billed based on actual usage.

Network

Network traffic fees for cross-region snapshot replication

The pricing is the same as pay-as-you-go. No separate subscription price is available.

-   China (Hangzhou): USD 0.0746/GB
    
-   China (Shanghai): USD 0.0746/GB
    
-   China (Beijing): USD 0.0746/GB
    
-   China (Shenzhen): USD 0.0746/GB
    
-   China (Ulanqab): USD 0.0746/GB
    
-   China (Hong Kong): USD 0.08/GB
    
-   Singapore: USD 0.08/GB
    
-   Malaysia (Kuala Lumpur): USD 0.08/GB
    

None

Billing formula: Subscription fee = Compute resources × Unit price × Number of months + Storage × Unit price × Number of months.

Billing example: You estimate that you need 500 GB of storage and 128 compute units (CUs) of compute resources per month for six months. If you create the instance in the Singapore region, the subscription fee is calculated as follows: 128 × 31.970149 × 6 + 500 × 0.182090 × 6 = USD 25,099.344432

## Upgrade

If the resources of your subscription Hologres instance no longer meet your needs, you can upgrade its configuration.

Billing formulas:

-   Original configuration:
    
    Paid amount = Compute capacity × Number of months × Unit price + Storage capacity × Number of months × Unit price
    
    Used amount = Paid amount / Total purchased hours × Hours used
    
    Remaining amount = Paid amount - Used amount
    
-   New configuration:
    
    Total payable amount = Compute resources × Number of months × Unit price + Storage × Number of months × Unit price
    
    Actual payable amount = Total payable amount / Total purchased hours × Actual hours of use
    
-   Upgrade: Upgrade fee = Actual payable amount for new configuration - Remaining amount for original configuration
    

For example, on March 1, you purchase a subscription Hologres instance with 64 CUs of compute resources and 300 GB of storage for two months. The instance expires on April 30. On March 13, you upgrade the instance to 128 CUs of compute resources and 500 GB of storage. The expiration date remains the same. If the instance is in the Singapore region, the fees are calculated as follows:

-   Paid amount for the original configuration: 64 × 2 × 31.970149 + 300 × 2 × 0.182090 = USD 4,201.433072.
    
-   Used amount for the original configuration: 4,201.433072 / 1,440 × 288 = USD 840.2866144.
    
    **Note**
    
    The original configuration was purchased for two months (30 days per month). It was used for 12 days, from March 1 to March 13. Therefore, the total purchased hours are 2 × 30 × 24 = 1,440 hours, and the hours used are 12 × 24 = 288 hours.
    
-   Remaining amount for the original configuration: 4,201.433072 - 840.2866144 = USD 3,361.1464576.
    
-   Total payable amount for the new configuration: 128 × 2 × 31.970149 + 500 × 2 × 0.182090 = USD 8,366.448144.
    
-   Actual payable amount for the new configuration: 8,366.448144 / 1,440 × 1,152 = USD 6,693.1585152.
    
    **Note**
    
    The subscription period is two months (30 days per month), so the total purchased hours are 2 × 30 × 24 = 1,440 hours. The new configuration will be used for the remaining 48 days of the subscription, from March 13 to April 30. Therefore, the actual hours of use for the new configuration are 48 × 24 = 1,152 hours.
    
-   Upgrade fee: 6,693.1585152 - 3,361.1464576 = USD 3,332.0120576.
    

**Note**

-   For ease of calculation, one month is assumed to be 30 days.
    
-   The preceding example illustrates the billing logic for an upgrade. The actual fee is subject to the bill.
    

## Downgrade

If your subscription Hologres instance is over-provisioned and you want to reduce costs, you can downgrade its configuration.

Billing formulas:

-   Original configuration:
    
    Paid amount = Compute capacity × Number of months × Unit price + Storage capacity × Number of months × Unit price
    
    Used amount = Paid amount / Total purchased hours × Hours used
    
    Remaining amount = Paid amount - Used amount
    
-   New configuration:
    
    Total payable amount = Compute resources × Number of months × Unit price + Storage × Number of months × Unit price
    
    Actual payable amount = Total payable amount / Total purchased hours × Actual hours of use
    
-   Downgrade: Downgrade fee = Actual payable amount for new configuration - Remaining amount for original configuration
    

For example, on March 1, you purchase a subscription Hologres instance with 128 CUs of compute resources and 500 GB of storage for three months. The instance expires on May 31. On March 21, you downgrade the instance to 64 CUs of compute resources and 300 GB of storage. The expiration date remains the same. If the instance is in the Singapore region, the fees are calculated as follows:

-   Paid amount for the original configuration: 128 × 3 × 31.970149 + 500 × 3 × 0.182090 = USD 12,549.672216.
    
-   Used amount for the original configuration: 12,549.672216 / 2,160 × 480 = USD 2,788.816.
    
    **Note**
    
    The original configuration was purchased for three months (30 days per month). It was used for 20 days, from March 1 to March 21. Therefore, the total purchased hours are 3 × 30 × 24 = 2,160 hours, and the hours used are 20 × 24 = 480 hours.
    
-   Remaining amount for the original configuration: 12,549.672216 - 2,788.816 = USD 9,760.856216.
    
-   Total payable amount for the new configuration: 64 × 3 × 31.970149 + 300 × 3 × 0.182090 = USD 6,302.149608.
    
-   Actual payable amount for the new configuration: 6,302.149608 / 2,160 × 1,680 = USD 4,901.67192
    
    **Note**
    
    The subscription period is three months (30 days per month), so the total purchased hours are 3 × 30 × 24 = 2,160 hours. The new configuration will be used for the remaining 70 days of the subscription, from March 21 to May 31. Therefore, the actual hours of use for the new configuration are 70 × 24 = 1,680 hours.
    
-   Downgrade fee: 4,901.67192 - 9,760.856216 = USD -4,859.1843.
    
-   The system refunds USD 4,859.1843 to your account.
    

**Note**

-   For ease of calculation, one month is assumed to be 30 days.
    
-   The preceding example illustrates the billing logic for a downgrade. The actual fee is subject to the bill.
    

## Notification mechanism

The notification mechanism for Hologres subscription instances is as follows:

**Billing method**

**Expiration reminders**

**Instance stop**

**Reminder time for post-shutdown release**

Subscription

7 days before expiration

Stops immediately upon expiration

7 days before release

3 days before expiration

3 days before release

1 day before expiration

1 day before release

Example: You purchase a Hologres subscription instance for two months. The system sends you expiration reminders by text message, phone call, or email 7, 3, and 1 day before the instance expires. The instance stops immediately upon expiration, and you can no longer use its services. If you do not renew the instance within 14 days, it is released. The system also sends you release reminders by text message, phone call, or email 7, 3, and 1 day before the release.
