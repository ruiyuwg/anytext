To optimize your resource costs with a savings plan, first assess your business needs. You can purchase a plan based on the recommendations calculated by Alibaba Cloud, or you can perform a manual calculation before proceeding to the buy page. When you manually calculate a purchase plan, you must look up the discounts for your specific conditions, including your budget, payment option, and resource usage duration. After you determine the savings plan type, specifications, hourly commitment, and other order details, you can proceed with the purchase. This topic describes how to calculate, assess, and purchase a savings plan that meets your business needs.

## Overall purchase process

Before you purchase a savings plan, you must perform calculations and assessments. Alibaba Cloud provides two types of recommended plans based on your resource purchase history. If you prefer to perform a manual calculation, Alibaba Cloud also provides methods and examples to help you assess your options before you go to the [savings plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to configure and place your order.

**Note**

-   To upgrade your savings plan, see [Upgrade your current Savings Plan](/help/en/ecs/analysis-and-optimization-of-saving-plan-effect#4962d8748abyu).
    
-   On the buy page, modifying purchase options other than the hourly commitment and duration does not change your total payment amount. However, it does affect the amount of resources that your savings plan can cover per hour. We strongly recommend using the recommended plan or performing a manual pre-purchase assessment before placing an order. If you have other discounts, the final payment amount on your bill takes precedence.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9878970771/CAEQTxiBgMCH5vrC0xkiIDkwMjFiNDBkOWE0NDQ3OTU5NGU3Y2FlNTNjYjVhN2Jm4739772_20241119144734.163.svg)

## Purchase a savings plan based on recommendations

### Use recommendations based on historical resource usage

**To optimize costs for existing pay-as-you-go Elastic Compute Service (ECS) or Elastic Container Instance (ECI) resources:** Go to the [Savings Plan Purchase Scheme Calculation page](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) to view recommended configurations.

1.  On the **Savings Plan Purchase Scheme Calculation** page, select the Type, Duration, and Payment Method (payment option) parameters and click **Calculate**. The system automatically calculates an optimization suggestion, an hourly commitment, and the expected savings for your reference.
    
2.  If the recommended plan meets your needs, click **Buy**.
    

### Use recommendations based on resource requirements

**For new pay-as-you-go ECS or ECI resources:** Use the [Savings Plan Calculator](https://www.alibabacloud.com/zh/pricing/ecs-savings-plan?_p_lc=1) to select your desired ECS configuration and view a recommended purchase plan based on the on-screen instructions.

1.  On the **Savings Plan Calculator** page, enter your desired instance configuration and click **Add to List**.
    
2.  After you add all instance configurations, click the **Savings Plan Calculator** button in the upper-right corner of the page to view the recommended plan.
    
3.  If the recommended plan meets your needs, click **Buy**.
    

## **Calculate and purchase a savings plan**

If you are not satisfied with the recommendations or have a limited consumption history, you can manually calculate a suitable hourly commitment and then go to the [savings plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to make a purchase. The main process for manual calculation and purchase is shown in the figure.

1.  Go to the discount query page to find discounts based on your filter criteria. Determine a purchase plan that includes the savings plan type, duration, and payment method, and note the corresponding discount.
    
2.  Calculate the required hourly commitment based on the discount, your purchase details, and the official pay-as-you-go rates of the target resources.
    
3.  After you complete the calculation and assessment, go to the savings plan buy page, configure the purchase options according to your plan, and enter the calculated hourly commitment.
    
4.  Select an activation time for the savings plan and complete the payment. The plan becomes active at the specified time and automatically applies to your pay-as-you-go resource consumption.
    

**Note**

When you purchase an **ECS compute savings plan**, if an instance type family package includes the required instances, we recommend that you select the package. The choice between a single instance type and an instance type family package does not affect the discount, but the package offers greater flexibility for changes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9878970771/CAEQMhiBgIDo.8PHpBkiIGMzOWM1ZjZkNGIwODQzMmE4MjRiZDNhMWZhZDIxNzhk4702507_20241024175300.152.svg)

### Query discounts for eligible resources

Different eligible resources receive different discount rates with a savings plan. The discount for a single eligible resource is also affected by multiple factors. When you select a savings plan type, you can query the corresponding discounts on the [Discount Details page](https://usercenter2-intl.console.alibabacloud.com/resource/spn/price) in the Expenses and Costs console. For a list of resources that a savings plan supports, see [Eligible resources and deduction rules of savings plans](/help/en/ecs/savings-plan-credit-rules).

The discount for a single eligible resource depends on the following factors:

-   **Duration**: A longer duration provides a greater discount. 3-year savings plans provide greater discounts than 1-year savings plans.
    
-   **Payment option**: A higher upfront payment provides a greater discount. The discount rates are ranked from highest to lowest for All Upfront, Partial Upfront, and No Upfront payment options.
    
-   **Type** of savings plan.
    
-   Instance type family of the instance to which the discount applies.
    
-   Region of the instance to which the discount applies.
    

**Note**

During your pre-purchase assessment, remember that a higher discount for a resource means you can cover more of that resource's usage with the same hourly commitment.

### **Select a savings plan type**

Choose an ECS compute or general-purpose savings plan to receive discounts on your ECS or ECI instances. Before you purchase a plan, refer to the following comparison table to select a savings plan type that meets your business needs.

-   If your business serves users across multiple regions and requires region flexibility, or if it uses various ECS instance type families, we recommend that you purchase a general-purpose savings plan.
    
-   If your resource usage is stable over a long period and you want the highest possible discount, we recommend that you purchase a 3-year, All Upfront, ECS compute savings plan.
    

**Item**

**ECS compute savings plan**

**General-purpose savings plan**

**Scenario**

Businesses with stable resource usage, such as for system upgrades or cluster deployments. Although instances may be released and recreated, the overall usage remains relatively stable.

Businesses with stable resource usage, such as for system upgrades or cluster deployments. Although instances may be released and recreated, the overall usage remains relatively stable.

**Region flexibility**

Not supported.

Supported.

**Resource flexibility**

Supports discounts for pay-as-you-go ECS and ECI instances created with specified instance types, and for capacity reservations that take effect immediately.

**Note**

For more information about supported resources, see [Eligible resources and deduction rules of savings plans](/help/en/ecs/savings-plan-credit-rules).

In addition to the resources supported by the ECS compute savings plan, this plan also supports discounts for data disks, burstable cloud disk performance, and the vCPU and memory costs of ECI instances created in basic mode.

**Instance type flexibility**

Allows changes between instance types in an instance family or an instance family set.

Allows changes between instance types.

### **Select a payment option**

Alibaba Cloud provides the following payment options for savings plans: All Upfront, Partial Upfront, and No Upfront. The discount provided by a savings plan varies based on the payment option. Savings plans of higher upfront payment options provide higher discounts and can be used to offset higher pay-as-you-go resource spend. Select a payment option based on your business requirements.

-   **All Upfront**: You pay the entire cost at the time of purchase. No other fees are incurred during the plan's term.
    
-   **Partial Upfront**: You pay a portion of the hourly commitment upfront (approximately 50%). During the plan's term, you are billed hourly for the remaining portion of the commitment.
    
-   **No Upfront**: You pay nothing at the time of purchase. During the plan's term, you are billed hourly for the full commitment amount. Your eligibility for the No Upfront option depends on your ECS usage history. To use the No Upfront option, contact your business manager.
    

**Examples of payments for different options**

**Note**

This section is for demonstrating the payment process for different options. The discounts and amounts are examples only. For actual payment amounts, refer to your billing.

For example, you purchased a one-year savings plan that has an hourly commitment of USD 0.1. One year is equal to 365 days. The total cost of the savings plan is calculated by using the following formula: USD 0.1 per hour × (1 × 365 × 24) hours = USD 876. You can select one of the following payment options to purchase the savings plan:

-   All Upfront: The full amount of USD 876 is paid upfront at the time of purchase.
    
-   Partial Upfront: 50% of the full amount (USD 438) is paid upfront at the time of purchase. You are charged for the remaining USD 438 at a rate of USD 0.05 per hour on an hourly basis within the one-year duration of the savings plan.
    
-   No Upfront: No upfront payment is required at the time of purchase. You are charged for the total amount at a rate of USD 0.1 per hour on an hourly basis for the duration of the savings plan.
    

### **Select a duration**

When you purchase a general-purpose or ECS compute savings plan, set the duration of the savings plan to **1 Year** or **3 Years**.

### **Calculate the hourly commitment**

The hourly commitment is the maximum amount of pay-as-you-go bills your savings plan can cover each hour. Within this limit, your pay-as-you-go bills are first discounted and then deducted. After you select the type of savings plan, you must calculate a suitable hourly commitment to maximize your cost savings. When you purchase a savings plan, you must place the order based on the calculated hourly commitment. Alibaba Cloud provides an example of how to manually calculate the hourly commitment. Refer to the example and complete the calculation based on your business needs.

**Calculate the hourly commitment for ECS instances (including specified-type ECI instances)**

Assume that your company plans to purchase a 3-year, All Upfront, general-purpose savings plan to cover the bills for the following pay-as-you-go instance.

**Note**

-   The prices in this example are for illustration only. For actual pricing and discount information, see the pricing page.
    
-   Refer to [Query discounts for eligible resources](#68db1ddd24qja) to calculate the hourly commitment based on the discounted savings plan rate.
    
-   The region and ECS instance type family information in this example is for calculation purposes only. The availability of region and instance type family flexibility is determined by the savings plan type.
    

**Instance**

**Supported region**

**Instance type**

**System disk**

**Network bandwidth**

**Number of eligible instances**

Instances A

China (Shanghai)

ecs.g6.xlarge

40 GiB PL0 ESSD

3 Mbit/s

15

Instances B

China (Beijing)

ecs.c5.large

40 GiB PL0 ESSD

3 Mbit/s

5

Follow these steps to calculate the appropriate hourly commitment.

1.  Go to the [Pricing](https://www.alibabacloud.com/product/ecs) page for ECS and the [Discount Details page](https://usercenter2-intl.console.alibabacloud.com/resource/spn/price) for savings plans to query the corresponding prices for Instance A.
    
    The price for a single Instance A is shown in the following table.
    
    **Billable item**
    
    **Pay-as-you-go rate (USD per hour)**
    
    **Discount provided by a savings plan**
    
    **Savings Plan rate (USD per hour)**
    
    ECS instance type (computing resources)
    
    0.155
    
    54.5% off
    
    0.0705
    
    System disk
    
    0.0064
    
    58.8% off
    
    0.0026
    
    Network bandwidth
    
    0.054
    
    57.5% off
    
    0.0229
    
    After the savings plan is applied, the total fee for Instances A is calculated by using the following formula: (0.0705 + 0.0026 + 0.0229) × 15 = USD 1.44 per hour.
    
2.  Query and calculate the fee for Instances B in the same manner.
    
    The following table describes the rates of Instances B.
    
    **Billable item**
    
    **Pay-as-you-go rate (USD per hour)**
    
    **Discount provided by a savings plan**
    
    **Savings Plan rate (USD per hour)**
    
    ECS instance type (computing resources)
    
    0.1
    
    72.7% off
    
    0.0273
    
    System disk
    
    0.0064
    
    58.8% off
    
    0.0026
    
    Network bandwidth
    
    0.054
    
    57.5% off
    
    0.0229
    
    After the savings plan is applied, the total fee for Instances B is calculated by using the following formula: (0.0273 + 0.0026 + 0.0229) × 5 = USD 0.264 per hour.
    
3.  Calculate the appropriate hourly commitment, which is the sum of the discounted costs for both Instance A and Instance B.
    
    In this example, the recommended hourly commitment amount is calculated by using the following formula: USD 1.44 + USD 0.264 = USD 1.704 per hour.
    

**Ca****lculate the hourly commitment for non-specified ECI instances**

Assume that your company has a number of non-specified ECI instances, and the current hourly bill for these instances is USD 8 per hour. You want to purchase a 3-year, All Upfront, general-purpose savings plan to optimize costs.

**Note**

The prices in this example are for illustration only. For actual pricing and discount information, see the pricing page.

1.  Go to the [Discount Details](https://usercenter2-intl.console.alibabacloud.com/resource/spn/price) to filter and query the pay-as-you-go discount for ECI instances.
    
    In this example, the savings plan provides a 54.5% discount.
    
2.  Calculate the appropriate hourly commitment.
    
    After the savings plan is applied, the hourly fee for the elastic container instances is USD 3.64, which is calculated by using the following formula: USD 8 per hour × 0.455 = USD 3.64 per hour. We recommend that you set the hourly commitment amount of the savings plan to USD 3.64 per hour to cover the hourly fees for the existing elastic container instances.
    

### Select an activation date and place the order

**Note**

If you are a Resource Access Management (RAM) user, you must be granted the necessary permissions to purchase a savings plan. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

After you manually calculate the hourly commitment for your savings plan, go to the [savings plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to make the purchase with the corresponding configuration. The system automatically calculates the total cost based on your selected duration and hourly commitment.

When you place the order, Alibaba Cloud lets you choose to activate the plan **Immediately Activate** or **Activated at Specified Point in Time**.

-   **Immediately Activate**: The plan takes effect and starts applying deductions at the top of the hour (HH:00:00) in which you complete the payment.
    
-   **Activated at Specified Point in Time**: You can schedule the activation for up to one year after you place the order. You can select a specific hour for the plan to take effect. The plan starts applying deductions at the top of the selected hour (HH:00:00).
