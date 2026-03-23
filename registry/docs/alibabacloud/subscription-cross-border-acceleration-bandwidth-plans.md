After you purchase a subscription Global Accelerator instance that uses the **pay-by-bandwidth** bandwidth metering method, you must associate a basic bandwidth plan with the instance. If your business involves cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you must purchase a cross-border acceleration bandwidth plan. You must use cross-border acceleration bandwidth plans together with basic bandwidth plans. This topic describes the billing rules of cross-border acceleration bandwidth plans that use the subscription billing method.

## Prerequisites

If you want to use cross-border acceleration bandwidth plans to accelerate content delivery between regions in the Chinese mainland and regions outside the Chinese mainland, make sure that your account has completed real-name registration. For more information, see [FAQ about real-name verification](/help/en/account/support/which-users-are-required-to-undergo-account-authentication).

## Billing rules

The subscription billing method requires you to pay for resources before you can use the resources. The following table describes the billing rules of subscription cross-border acceleration bandwidth plans:

**Item**

**Description**

Scenario

Scenarios in which a basic bandwidth plan is associated with your GA instance and you need to accelerate content delivery between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).

Billable item

You are charged only **bandwidth fees** for subscription cross-border acceleration bandwidth plans.

If you use a subscription basic bandwidth plan and a subscription cross-border acceleration bandwidth plan at the same time, the total fee is calculated by using the following formula:

Total bandwidth fee of the GA instance = Bandwidth fee of the basic bandwidth plan + Bandwidth fee of the cross-border acceleration bandwidth plan

Billing cycle

Month

The billing cycle of a subscription basic bandwidth plan is the subscription duration of the basic bandwidth plan. The billing cycle starts from the time when the subscription cross-border acceleration bandwidth plan is purchased or renewed and ends at 24:00:00 on the day when the GA instance expires. The time is accurate to the second and is based on UTC+8.

A bill is generated on the first day of the next calendar month after a billing cycle ends. The system determines the time when bills are issued.

## Bandwidth fees

### Description

You are charged bandwidth fees for subscription cross-border acceleration bandwidth plans. You are charged based on the bandwidth limit and subscription duration that you specify.

### Formula

Bandwidth fee of the cross-border acceleration bandwidth plan = Unit price of the cross-border acceleration bandwidth plan (USD per Mbit/s-day) × Maximum bandwidth (Mbit/s) × Duration

**Note**

If you use a subscription basic bandwidth plan and a subscription cross-border acceleration bandwidth plan at the same time, the total bandwidth fee of a GA instance is calculated by using the following formula: Total bandwidth fee of the GA instance = Bandwidth fee of the basic bandwidth plan + Bandwidth fee of the cross-border acceleration bandwidth plan. For more information about the bandwidth fees of basic bandwidth plans, see [Subscription basic bandwidth plans](/help/en/ga/product-overview/subscription-bandwidth-plans#concept-2358134).

### Bandwidth unit price

The price that is displayed on the [Cross Border Bandwidth Package](https://common-buy-intl.aliyun.com/?commodityCode=ga_cbbwp_public_intl#/buy) page is the actual price that is applied to your cross-border acceleration bandwidth plan.

## References

For more information about how to purchase and associate cross-border acceleration bandwidth plans, see [Purchase and manage cross-border acceleration bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-cross-border-acceleration-bandwidth-plans).
