A reserved instance is a billing discount that applies to your pay-as-you-go Elastic Compute Service (ECS) instances. It is not a physical instance. When you purchase a reserved instance, you commit to a usage term, and in return, the fees for matching pay-as-you-go instances are automatically discounted. Reserved instances reduce computing costs while providing instance flexibility, resource assurance, and business continuity.

**Important**

We recommend that you use savings plans instead of reserved instances. Savings plans provide more flexibility and discounts than reserved instances. For more information, see [What is a savings plan?](/help/en/ecs/savings-plans)

## Overview

### What a reserved instance covers

Reserved instances offset the fees of **computing resources only**, such as vCPUs and memory. The following resources are **not** covered:

-   Network resources
    
-   Storage resources
    
-   Spot instances
    

Windows reserved instances also offset the image fees of pay-as-you-go Windows instances. Windows reserved instances already include Windows images at no additional cost.

For information about the billing of ECS instances, see [Billing overview](/help/en/ecs/billing-overview).

### Regional vs. zonal reserved instances

Reserved instances are classified into **regional** and **zonal** reserved instances. The type you choose determines how the discount is applied and whether capacity is reserved.

**Feature**

**Regional reserved instance**

**Zonal reserved instance**

Purchase requirements

Specify a region only

Specify both region and zone

Zone flexibility

Offsets eligible pay-as-you-go instances across all zones within the region

Offsets pay-as-you-go instances in the specified zone only

Instance type flexibility

Offsets across different instance types within the same instance family

Offsets only the same instance type

Resource reservation

Not supported

Supported. A specific number of instances of a specified instance type are reserved within the validity period. This ensures that pay-as-you-go instances can be created in the specified zone at any time.

The type of the reserved instance affects the matching conditions. For more information, see [Usage rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances#concept-af1-zxq-dgb). After you purchase a reserved instance, you can change the zone based on your business requirements. For more information, see [Change the zone of a reserved instance](/help/en/ecs/split-merge-or-modify-reserved-instances#6d95c5c88fdmi) of the "Split, merge, or modify reserved instances" topic.

## Use scenarios

The following table describes scenarios in which reserved instances can reduce costs and provide flexibility for your pay-as-you-go instances.

**Scenario**

**Benefit**

You use Auto Scaling to manage ECS instances and have a large number of pay-as-you-go instances. You want to reduce your costs.

After you purchase reserved instances, you commit to using pay-as-you-go instances for a specific period of time. Reserved instances provide significant discounts compared with pay-as-you-go instances.

You want to pay for resources in installments to mitigate financial pressure.

You can pay by hour by selecting the **Partial Upfront** or **No Upfront** payment option to relieve the financial pressure caused by paying the full amount upfront.

Your business requires migrating instances between zones or regions.

Reserved instances can be modified (split, merged, or have their zone changed) to match your new instance configurations. Regional reserved instances automatically apply across all zones within a region, simplifying migrations.

During automated O&M, the number of instances can be automatically adjusted.

Unlike subscription instances, which are tied to a specific instance ID, a reserved instance discount automatically applies to any matching pay-as-you-go instance, providing greater flexibility for automated scaling.

## Billing

### **Payment options**

Reserved instances support three payment options. The option you choose affects both your upfront cost and overall savings.

**Payment option**

**How it works**

**Best for**

**All Upfront**

Full payment at the time of purchase. No additional costs or hourly fees within the term.

Maximum savings. This is the most cost-effective option.

**Partial Upfront**

Approximately 50% of the full amount is paid upfront at purchase. The remainder is paid at a discounted hourly rate throughout the term.

Balancing upfront cost with savings.

**No Upfront**

No upfront payment at purchase. You are billed a discounted hourly rate every hour throughout the term.

Preserving cash flow while still saving over pay-as-you-go rates.

**Note**

-   To use the **Partial Upfront** or **No Upfront** payment option, make sure that the term of the reserved instance is longer than one year.
    
-   The availability of the **No Upfront** payment option depends on your Elastic Compute Service usage. If the **No Upfront** payment option is not available to you and you need to use it, please contact your account manager.
    
-   You are charged based on the payment option that you selected, regardless of whether the reserved instance is matched to pay-as-you-go instances. The **All Upfront** option is the most cost-effective.
    
-   If the **Partial Upfront** or **No Upfront** option is selected, the hourly fee is calculated on a per-second basis, and the bill is generated on an hourly basis and paid on a monthly basis. For information about the pricing of reserved instances, see the Pricing tab of the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs). If the total payable amount on the monthly bill reaches USD 1,000, USD 1,000 is automatically deducted from your account balance. Fees less than USD 1,000 are included in the monthly bill.
    

### **How billing works**

A reserved instance takes effect immediately after purchase. It matches eligible pay-as-you-go instances on an hourly basis and offsets their bills automatically. For information about how a reserved instance is matched to pay-as-you-go instances, see [Usage rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances).

**When the discount starts and ends**

A reserved instance becomes active at the top of the hour of purchase and expires at the end of its term.

**Example**: If you purchase a one-year reserved instance at 22:45:00 on May 1, 2024, the discount takes effect from 22:00:00 on May 1, 2024, and applies until the term expires at 24:00:00 on May 1, 2025 (which is 00:00:00 on May 2, 2025). If you have pay-as-you-go instances that match the attributes of the reserved instance, the reserved instance offsets their bills starting from 22:00 to 23:00 on May 1, 2024, until the reserved instance expires.

**Note**

Configure the **Specify Effective Time** parameter. Billing for a reserved instance starts at the effective time that you specify for the reserved instance.

### **Renewal**

To continue benefiting from the discounts, renew reserved instances before they expire. Reserved instances support two renewal methods: manual renewal and auto-renewal. Select a renewal method based on the lifecycle state of your reserved instance.

**What happens at expiration**: When a reserved instance expires without renewal, the discount stops. Your pay-as-you-go instances continue running without interruption, but they are billed at standard pay-as-you-go rates.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5508722771/CAEQMRiBgMDhsYP3nRkiIDM3Nzk0YmRiODk1MjQzNjI4OTFkNThhNWVmOWM4YWY53965669_20230925110100.055.svg)

#### **Manual renewal**

You can manually renew a reserved instance in the ECS console at any time before the reserved instance expires.

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the reserved instance that you want to renew and click **Renew** in the **Actions** column.
    
4.  On the Renew page, set **Renewal Duration** to 1 month, 1 year, or 3 years, select **Enable Auto-renewal** based on your business requirements, and then complete the renewal as prompted.
    
    **Note**
    
    The availability of one-month **Renewal Duration** depends on your ECS usage. If you cannot see this option and need to use it, please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

#### **Auto-renewal**

If auto-renewal is enabled for a reserved instance, the reserved instance is automatically renewed before it expires. You can enable this feature for reserved instances to prevent the reserved instances from being automatically released.

**How to enable auto-renewal**

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the reserved instance that you want to renew and click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9710743671/p994427.png) > **Auto-renewal** in the **Actions** column.
    
4.  Read the notes, turn on **Enable Auto-renewal**, select a value for the **Renewal Duration** parameter, and then click **Confirm**.
    

#### **Auto-renewal considerations**

-   If you manually renew a reserved instance before it is automatically renewed, the auto-renewal operation is not performed during the current billing cycle.
    
-   If you manually renew a reserved instance before the auto-renewal payment is deducted, the system renews the reserved instance based on the new expiration date.
    
-   Starting on the ninth day before the instance expires, Alibaba Cloud attempts to deduct the renewal payment from your account. Make sure that your account balance is sufficient.
    
    **Note**
    
    If the first deduction attempt fails, the system attempts to deduct the renewal payment once every day until the payment is deducted or until the reserved instance expires.
    

## Limits

**Item**

**Description**

Maximum number of reserved instances

**Regional reserved instances**: Each account can have up to 20 regional reserved instances across all regions. **Zonal reserved instances**: Each account can have up to 20 zonal reserved instances in each zone. If you require more reserved instances, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

Instance type

The gn6i and t5 instance families do not support regional reserved instances. The gn6i and t5 reserved instances cannot be split or merged.

**Note**

The instance types that you can select when you purchase a reserved instance are displayed on the page.

Eligible resources

-   Reserved instances apply only to pay-as-you-go instances and do not apply to spot instances.
    
-   Only the fees of computing resources such as vCPUs and memory can be offset. The fees of resources such as network and storage resources cannot be offset. For information about the billing of ECS instances, see [Billing overview](/help/en/ecs/billing-overview).
    
-   Windows reserved instances can be applied to offset the image fees of pay-as-you-go Windows instances.
    
    **Note**
    
    Windows reserved instances already include Windows images at no additional cost.
    

## References

-   Before you purchase reserved instances, we recommend that you understand the deduction rules for reserved instances and pay-as-you-go instances. For more information, see [Usage rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances).
    
-   For information about how to purchase reserved instances, see [Purchase reserved instances](/help/en/ecs/purchase-reserved-instances).
    
-   If your workloads change, you can split or merge reserved instances or change the zones of reserved instances to match pay-as-you-go instances of different instance types and zones. For more information, see [Split, merge, or modify reserved instances](/help/en/ecs/split-merge-or-modify-reserved-instances).
    
-   You can view information about a reserved instance, such as the ECS instances whose bills can be offset by the reserved instance and the normalization factor of the reserved instance. You can also view the billing details, utilization, and coverage rate of the reserved instance. For more information, see [View reserved instances](/help/en/ecs/view-reserved-instances).
    
-   For information about frequently asked questions about reserved instances, see [Instance FAQ](/help/en/ecs/user-guide/instance-faq/).
