This topic describes the billing rules for subscription Global Accelerator (GA) instances.

## Billing rules

The subscription billing method requires you to pay a subscription fee before you can use resources. The following table describes the billing rules for subscription Global Accelerator instances.

**Instance type**

**Billable item**

**Billing cycle**

Standard Global Accelerator instance

Billable items of a standard Global Accelerator instance:

-   [Instance fee](#section-6im-nhh-v8n)
    
-   [Specification fee](#section-7im-nhh-v8m)
    
-   [Bandwidth fee](/help/en/ga/product-overview/subscription-bandwidth-plans)
    

The billing cycle of a subscription Global Accelerator instance is the subscription duration of the GA instance. The billing cycle starts from the time when the subscription GA instance is purchased or renewed and ends at 24:00:00 (UTC+8) on the day when the GA instance expires. The time is accurate to the second.

A bill is generated on the first day of the next calendar month after a billing cycle ends. The system determines the time when bills are generated.

Basic Global Accelerator instance

Billable items of a basic Global Accelerator instance:

-   [Instance fee](#section-6im-nhh-v8n)
    
-   [Bandwidth fee](/help/en/ga/product-overview/subscription-bandwidth-plans)
    

## Instance fee

### Description

You are charged instance fees based on instance unit prices and the subscription duration. You are charged an instance fee regardless of whether you use a standard Global Accelerator instance or a basic Global Accelerator instance.

### Formula

Instance fee = Instance unit price (USD/month) × Duration (months)

### Unit price

**Note**

The unit prices in the following table are for reference only. You can view the actual prices on the [buy page](https://ga.console.alibabacloud.com/buy/standard/prePay?commodityCode=ga_pluspre_public_intl&resourceGroupId=#/buy) of the GA console.

**Billable item**

**Instance unit price (**USD per month**)**

Global Accelerator instance

15

## Specification fees

### Description

Standard Global Accelerator instances provide multiple specifications. Different specifications provide different acceleration capabilities. You are charged different specification fees for different specifications. You are charged specification fees only for standard Global Accelerator instances.

### Formula

Specification fee = Specification unit price (UDS/month) × Duration (months)

### Unit price

**Note**

-   By default, GA instances whose specifications are Large III or higher are not available. To use these instances, contact your account manager.
    
-   The unit prices in the following table are for reference only. You can view the actual prices on the [buy page](https://ga.console.alibabacloud.com/buy/standard/prePay?commodityCode=ga_pluspre_public_intl&resourceGroupId=#/buy) of the GA console.
    

**Specification**

**Number of acceleration regions**

**Maximum bandwidth**

**Maximum number of concurrent connections**

**Unit price****(USD/month)**

Small Ⅰ

1

20 Mbit/s

5,000

150

Small Ⅱ

2

40 Mbit/s

10,000

300

Small Ⅲ

3

60 Mbit/s

15,000

450

Medium Ⅰ

5

100 Mbit/s

25,000

750

Medium Ⅱ

8

160 Mbit/s

40,000

1200

Medium Ⅲ

10

200 Mbit/s

50,000

1500

Large Ⅰ

All regions.

For information about the acceleration areas and regions that are supported by Global Accelerator, see [Overview](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).

400 Mbit/s

100,000

3000

Large Ⅱ

600 Mbit/s

150,000

4500

Large Ⅲ

800 Mbit/s

200,000

6000

Large Ⅳ

1 Gbit/s

250,000

7500

Large Ⅴ

1.2 Gbit/s

300,000

9000

Large Ⅵ

1.4 Gbit/s

350,000

10500

Large Ⅶ

1.6 Gbit/s

400,000

12000

Large Ⅷ

1.8 Gbit/s

450,000

13500

Super Large Ⅰ

2 Gbit/s

500,000

15000

Super Large Ⅱ

4 Gbit/s

1,000,000

30000

## **Bandwidth fee (billed based on bandwidth plans)**

If you use a subscription Global Accelerator instance that uses the **pay-by-bandwidth** metering method, you must purchase a basic bandwidth plan and associate the basic bandwidth plan with the Global Accelerator instance. A basic bandwidth plan provides bandwidth for data transfer over the Internet and the internal networks of Alibaba Cloud. You cannot use a basic bandwidth plan for data transfer between regions in the Chinese mainland and regions outside the Chinese mainland. For more information about the billing rules of bandwidth plans, see [Subscription basic bandwidth plans](/help/en/ga/product-overview/subscription-bandwidth-plans).

If your business involves cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you must purchase a cross-border acceleration bandwidth plan. You must use cross-border acceleration bandwidth plans together with basic bandwidth plans. For more information about the billing rules of cross-border acceleration bandwidth plans, see [Subscription cross-border acceleration bandwidth plans](/help/en/ga/product-overview/subscription-cross-border-acceleration-bandwidth-plans).

## **Examples**

**Note**

The prices described in the examples are for reference only. The prices on the buy page shall prevail.

-   [GA instance buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_pluspre_public_intl#/buy)
    
-   [Basic bandwidth plan (subscription) buy page](https://common-buy-intl.aliyun.com/?commodityCode=ga_bwppreintl_public_intl#/buy)
    

For example, you purchase a standard GA instance whose specification is Small Ⅰ and a basic GA instance. You associate a subscription basic bandwidth plan whose bandwidth limit is 2 Mbit/s and whose bandwidth type is Standard with each GA instance. The subscription durations of the GA instance and the basic bandwidth plan are one month. The following table describes the fees for the month.

**GA instance type**

**Instance fee**

**Specification fee**

**Bandwidth fee**

**Total fee**

Standard

USD 15

USD 150

USD 60

USD 225

Basic

USD 15

N/A

USD 60

USD 75

## Refund policy

When you create a subscription Global Accelerator instance, you must pay the subscription fee. If you no longer use a subscription Global Accelerator instance, you can cancel the subscription of the Global Accelerator instance and request a refund. For more information, see [Refund policies](/help/en/ga/product-overview/refund-policies).

## References

-   [Overview of standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/)
    
-   [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    
-   [Overview of basic GA instances](/help/en/ga/user-guide/basic-ga-instances/)
    
-   [Create and manage basic GA instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances)
    
-   [Change specifications](/help/en/ga/product-overview/change-specifications)
    
-   [Renew GA instances](/help/en/ga/product-overview/renewal)
