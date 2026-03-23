A savings plan is a discount plan that provides savings on your Alibaba Cloud usage. A savings plan does not directly provide resources and must be applied to pay-as-you-go resources to provide discounts. If you do not have eligible pay-as-you-go resources after you purchase a savings plan, you are charged the hourly commitment that is associated with the savings plan. To maximize the benefits of savings plans and reduce operational costs, you must be familiar with the deduction rules (offset rules) of savings plans. This topic describes the deduction rules of savings plans and the resources eligible for savings plans. This topic also describes how savings plans are applied.

## **Deduction rules of savings plans**

-   You do not need to manually apply savings plans to pay-as-you-go instances.
    
-   After you purchase a savings plan, the savings plan is automatically matched to eligible pay-as-you-go resources during the duration of the savings plan. After a savings plan is matched to pay-as-you-go resources, the savings plan is applied to offset the fees for the resources at the discounted pay-as-you-go rate (also known as the Savings Plan rate) every hour in the order of time when the resources are billed.
    
    -   The savings plan can be used to cover your discounted pay-as-you-go resource spend up to the hourly commitment until the plan expires. Any spend beyond the hourly commitment is charged based on regular pay-as-you-go rates.
        
    -   If the hourly discounted spend of all your pay-as-you-go resources that are matched to a savings plan does not exceed the hourly commitment associated with the savings plan, the savings plan covers the discounted hourly spend. You are charged only the hourly commitment.
        

## **Savings plan-eligible items**

The following table describes the items to which you can apply savings plans. Log on to the Expenses and Costs console, go to the [Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview) tab of the Savings Plan page, and then click **Configure Offset Rule** in the Actions column corresponding to a savings plan. In the dialog box that appears, you can turn on or turn off the switches in the Offset column to enable or disable items eligible for the savings plan and achieve fine-grained management. You can turn on or turn off the switches in the **Offset** column based on the following table.

**Important**

-   Savings plan-eligible items are not inherently prioritized but benefit from the savings plan in the order of time when the items are billed. If the discounted hourly spend of eligible items exceeds the hourly commitment associated with a savings plan, the eligible items to which the savings plan is applied may vary in the hourly bills. To optimize costs, we recommend that you recalculate the required savings and upgrade the savings plan. For more information, see the [Purchase a savings plan based on Alibaba Cloud savings plan recommendations](/help/en/ecs/purchase-savings-plan#c57e3ef3bcnye) section of the "Purchase a savings plan" topic.
    
-   Take note that after you modify a deduction rule, the modification immediately takes effect. This modification may apply to the bills that are being generated for the current billing cycle due to the delay in bill generation.
    

**Savings plan-eligible item**

**Description**

**ECS compute savings plan**

**General-purpose savings plan**

Elastic Compute Service (ECS) - pay-as-you-go

Instance type

For pay-as-you-go ECS instances, savings plans can be applied to offset the [fees for the instance types](/help/en/ecs/instance-types).

Supported

Supported

ECS - pay-as-you-go

System disk

For pay-as-you-go ECS instances, savings plans can be applied to offset the [fees for block storage devices](/help/en/ecs/block-storage-devices#f96df48775ucl).

Supported

Supported

ECS - pay-as-you-go

Operating system

For pay-as-you-go ECS instances, savings plans can be applied to offset the [image license fees](/help/en/ecs/images) for **non-Alibaba Cloud Market images**.

Supported

Supported

ECS - pay-as-you-go

Public bandwidth

For pay-as-you-go ECS instances, savings plans can be applied to offset the [fees for public bandwidth resources](/help/en/ecs/public-bandwidth) that are charged based on pay-by-bandwidth billing method.

Supported

Supported

Elastic Container Instance

Instance

For **elastic container instances created based on specific ECS instance types**, savings plans can be applied to offset the [fees for the instances](/help/en/eci/product-overview/elastic-container-instances).

Supported

Supported

Elastic Container Instance

vCPU specifications

For **elastic container instances created based on vCPU and memory specifications**, savings plans can be applied to offset the [fees for the instances](/help/en/eci/product-overview/elastic-container-instances).

Not supported

Supported

Elastic Container Instance

Memory specifications

Not supported

Supported

Cloud disk performance

Performance provision

For Enterprise SSD (ESSD) AutoPL disks for which the **performance provision feature is enabled**, savings plans can be applied to offset the [fees for performance provision](/help/en/ecs/block-storage-devices#85530927eab2z).

Not supported

Supported

Cloud disk

Data disk

For cloud disks that are **used as** data disks, savings plans can be applied to offset the [fees for disk capacity](/help/en/ecs/block-storage-devices#f96df48775ucl).

Not supported

Supported

Cloud disk performance

io\_burst

For ESSD AutoPL disks for which the **performance burst feature is enabled**, savings plans can be applied to offset the [fees for performance burst](/help/en/ecs/block-storage-devices#c812cc81b7g78).

Not supported

Supported

Immediate Capacity Reservation

Immediate capacity reservation

For eligible immediate capacity reservations, savings plans can be applied to offset the instance type fees for the [immediate capacity reservations](/help/en/ecs/user-guide/overview-of-immediate-capacity-reservation#title-n68-0wg-w2w).

Supported

Supported

## Usage priorities

Discount plans, such as savings plans, reserved instances, and storage capacity units, can be applied to offset fees for pay-as-you-go instances. If you have multiple discount plans, the plans are applied in the following sequence:

1.  Reserved instances and storage capacity units
    
2.  ECS compute savings plans
    
3.  General-purpose savings plans
    
4.  Coupons
    

**Note**

Savings plans provide cost savings for pay-as-you-go resources and adhere to the following rule: If a pay-as-you-go instance that is provided at a discounted rate is matched to a savings plan and the discounted rate is lower than the Savings Plan rate, the savings plan is applied to the instance and the discounted rate instead of the Savings Plan rate is used to burn down the hourly commitment.

### **Usage priorities of multiple savings plans**

If you use one Alibaba Cloud account to purchase multiple savings plans that provide different discounts, the savings plans are applied based on their expiration times, from the earliest to the latest. If your savings plans have the same expiration time, the savings plans are applied based on their purchase times. For example, if you purchase a three-year All Upfront savings plan and then purchase a one-year Partial Upfront savings plan after one year, the Partial Upfront savings plan expires before the All Upfront savings plan. In this case, the Partial Upfront savings plan is applied before the All Upfront savings plan.
