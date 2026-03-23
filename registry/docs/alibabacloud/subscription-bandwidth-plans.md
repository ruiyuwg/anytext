After you purchase a subscription Global Accelerator instance whose bandwidth metering method is **pay-by-bandwidth**, you must purchase a basic bandwidth plan and associate the plan with the Global Accelerator instance. A basic bandwidth plan provides bandwidth for data transfer over the Internet and the internal networks of Alibaba Cloud. You cannot use a basic bandwidth plan for data transfer between regions in the Chinese mainland and regions outside the Chinese mainland. This topic describes the billing rules for subscription basic bandwidth plans.

## Billing rules

The subscription billing method requires you to pay a subscription fee before you can use a resource. The following table describes the billing rules for subscription basic bandwidth plans.

**Item**

**Description**

Scenario

After you purchase a Global Accelerator instance whose bandwidth metering method is **pay-by-bandwidth**, you must purchase a basic bandwidth plan and associate the plan with the instance.

Billable item

You are charged only **bandwidth fees** for subscription basic bandwidth plans.

Billing cycle

The billing cycle of a subscription basic bandwidth plan is the subscription duration of the plan. The billing cycle is based on UTC+8 and starts from the time when the subscription basic bandwidth plan is purchased or renewed and ends at 24:00:00 on the expiration date. The start time is accurate to the second.

A bill is generated on the first day of the next calendar month after a billing cycle ends. The system determines the time when bills are issued.

## Bandwidth fees

### Description

You are charged bandwidth fees for subscription basic bandwidth plans that are used to accelerate content delivery over the global transmission network of Alibaba Cloud. You are charged based on the bandwidth limit and bandwidth type.

### Billing formula

```
Basic bandwidth plan fee = Unit price of the basic bandwidth plan (USD per month) × Bandwidth limit (Mbit/s) × Duration
```

### Bandwidth unit price

Basic bandwidth plans support the following bandwidth types: basic, enhanced, and premium. The bandwidth unit price varies based on the bandwidth type. You can view the actual unit price on the [Global Accelerator Bandwidth Plan](https://common-buy-intl.aliyun.com/?commodityCode=ga_bwppreintl_public_intl#/buy) buy page.

For information about the acceleration types of different bandwidth types, see the "Bandwidth types" section of the [Purchase and manage basic bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-7g5-8eb-2sp) topic.

## Refund policies

When you create a subscription bandwidth plan, you must pay the subscription fee. If you no longer require the bandwidth plan, you can cancel the subscription of the bandwidth plan and apply for a refund. For more information, see [Refund policies](/help/en/ga/product-overview/refund-policies).

## References

-   For more information about the types of basic bandwidth plans and how to purchase and associate basic bandwidth plans, see [Purchase and manage basic bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#task-2405405).
    
-   If your business involves cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you must purchase a cross-border acceleration bandwidth plan. You must use cross-border acceleration bandwidth plans together with basic bandwidth plans.
    
    -   For more information about the billing rules of cross-border acceleration bandwidth plans, see [Subscription cross-border acceleration bandwidth plans](/help/en/ga/product-overview/subscription-cross-border-acceleration-bandwidth-plans).
        
    -   For more information about how to purchase and associate cross-border acceleration bandwidth plans, see [Purchase and manage cross-border acceleration bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-cross-border-acceleration-bandwidth-plans).
        
-   For more information about the impact of the expiration and overdue payments of bandwidth plans, see [Overdue payments of bandwidth plans](/help/en/ga/product-overview/overdue-payments#ca723e902c541).
