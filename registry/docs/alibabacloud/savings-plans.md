A savings plan is a discount plan that can be applied to offset the bills of pay-as-you-go resources, including pay-as-you-go Elastic Compute Service (ECS) instances and elastic container instances, excluding spot instances. Savings plans allow you to use resources in a more flexible manner at low prices. This topic describes savings plans and how to purchase, use, and maintain savings plans.

## **Introduction**

A savings plan is a discount plan that provides savings on the usage of pay-as-you-go resources, including pay-as-you-go ECS instances and elastic container instances, excluding spot instances. Savings plans provide significant savings over pay-as-you-go rates in exchange for a commitment to an hourly spend over a one- or three-year period. Compared with reserved instances, savings plans are more cost-effective and offer flexibility in choices of instance types, instance families, regions, and operating systems.

-   If you use pay-as-you-go resources for an extended period of time, you can purchase savings plans, which are automatically applied to eligible resources, to receive discounts and reduce resource costs.
    
-   If you use subscription resources, you can change the resources to pay-as-you-go resources and purchase savings plans. Then, you can change the resources between instance types, instance families, and regions in a flexible manner at no additional costs to meet your changing business requirements.
    

Savings plans do not affect the status of your resources and can help reduce your bills only when the savings plans are applied to eligible pay-as-you-go instance usage. A purchased saving plan does not create instances for you, and you must create pay-as-you-go instances. Savings plans can help save you up to 83% off pay-as-you-go rates on eligible resource usage.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1858282671/CAEQTxiBgID_xLXC0xkiIDBjZGUzMGUxMDI5NzRiNWZhZDc1YTUxY2U1ZmE1YTg44739772_20241119144734.163.svg)

### Advantages of savings plans

Alibaba Cloud provides two types of savings plans that provide different degrees of flexibility in resource usage: ECS compute savings plans and general-purpose savings plans. The following figure shows the differences between the savings plans and other pricing models (billing methods) that have long-term commitments.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1858282671/CAEQTxiBgMC9n4LD0xkiIDM0ODM3MzU3OTMxMDRmMmFhYWRkY2E1ZTc5ZjI4Mjgx4702507_20241112113302.681.svg)

### **Usage mechanism**

After you purchase a savings plan, the savings plan does not provide resources that are eligible for the savings plan but can be applied to eligible pay-as-you-go resources to provide billing discounts. If you use pay-as-you-go resources, you can purchase savings plans to reduce costs. After you purchase a savings plan, you are charged based on the hourly spend commitment that is associated with the savings plan, as shown in the following figure. Savings plans are automatically matched to eligible resources within the duration of the savings plans. After a savings plan is matched to eligible resources, the savings plan is applied to offset the fees for the resources at discounted pay-as-you-go rates (also known as Savings Plan rates) every hour in the order of time when the resources are billed. The savings plan can cover your pay-as-you-go resource usage up to the hourly spend commitment. Usage beyond the hourly spend commitment is billed based on regular pay-as-you-go rates. For information about the rules based on which savings plans offset fees, see [Eligible resources and deduction rules of savings plans](/help/en/ecs/savings-plan-credit-rules).

**Important**

**If the hourly discounted spend of all your pay-as-you-go resources that are matched to a savings plan does not exceed the hourly spend commitment associated with the savings plan, you are still charged the hourly spend commitment**. Make sure that you properly calculate and evaluate potential savings plan purchases before you purchase a savings plan to better reduce costs. You can purchase savings plans based on the recommendations provided by Alibaba Cloud. For more information, see [Purchase a savings plan](/help/en/ecs/purchase-savings-plan).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p875929.png)

### **Scenarios**

Before you purchase savings plans, you can learn about the benefits of savings plans from the perspectives of business type characteristics, resource costs, and bill O&M management, to determine whether savings plans are suitable for your business.

-   #### **Business type characteristics**
    
    Savings plans require an hourly spend commitment and are suitable for business models that have relatively consistent resource demands. If your business model requires flexibility in resource usage and meets the following characteristics, we recommend that you purchase savings plans, which provide savings on long-term pay-as-you-go resource usage, and use pay-as-you-go resources in response to short-term demand changes to reduce resource costs. If your business workloads continuously increase, you can purchase a savings plan, make a small hourly spend commitment, and then upgrade the savings plan as your business workloads increase to facilitate O&M and management.
    
    **Linked business**
    
    All business segments are closely linked. When the traffic loads of one business segment increase, the traffic loads of other business segments also increase.
    
    > **Benefits: Compared with the combination of the subscription and pay-as-you-go pricing models**, **savings plans are more flexible to use**. All resources are managed on a pay-as-you-go basis and do not need to be maintained in batches. Lifecycle management is significantly simplified. Savings plans allow you to adjust resources at any time and are easy to budget for without the need for capacity forecasts.
    
    **Hybrid business**
    
    Multiple types of business are deployed online and have different resource demands in different periods of time.
    
    > **Benefits: Savings plans provide the most cost-effectiveness** and eliminate your concerns over additional fees generated by subscription instance upgrades or downgrades and refunds. All resources are managed on a pay-as-you-go basis and do not need to be maintained in batches. Savings plans are easy to budget for without the need for capacity forecasts.
    
    **Stable business**
    
    Business is relatively stable and has similar resource demands in different periods of time.
    
    > **Benefits:** All resources are managed on a pay-as-you-go basis and do not need to be maintained in batches. Lifecycle management is significantly simplified. **Savings plans allow you to adjust resource configuratins at any time** and are easy to budget for without the need for capacity forecasts.
    
    **Periodically growing business**
    
    The overall business workload steadily grows and the business has stable resource demands in different periods of time.
    
    > **Benefits:** In scenarios in which business workloads continuously increase, you can stack or upgrade multiple savings plans to support business expansion. This helps **reduce operational costs and simplify financial management**.
    
    ![2024-11-15_16-49-20](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p873284.png)
    
    ![2024-11-15_16-48-49](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p873285.png)
    
    ![2024-11-15_16-47-50](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p873286.png)
    
    ![2024-11-15_16-46-31](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p873287.png)
    
-   #### Usage costs
    
    If you want to change resources as your business requirements vary and maintain relatively stable usage costs for cloud resources, you can use savings plans to reduce the risk of additional fees.
    
    **Change of resources**
    
    If you change the configurations or regions of unexpired subscription instances, you may be charged additional fees, which may amount to out-of-budget expenses.
    
    When you change the configurations or regions of pay-as-you-go instances, you may be charged significantly higher rates, which may increase the total cost.
    
    To obtain discounts and significantly reduce the costs of instance configuration or region changes, we recommend that you use pay-as-you-go instances and apply savings plans to the instances. This way, you can maintain a stable total cost over an extended period of time and reduce long-term usage costs. The following figure shows how the total cost varies when you change the configurations or regions of instances.
    
    **Change of resource types**
    
    If your business loads fluctuate and the instances of multiple instance types asynchronously change in loads, the subscription pricing model that you use may be unable to provide the required cost-effectiveness due to idle resource usage and result in an increase in the unit-time usage cost for individual instance types and an increase in the total cost.
    
    In this case, you can use savings plans to offset the fees for pay-as-you-go resources to obtain discounts provided by the savings plans regardless of the instance family and reduce the total cost.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p876190.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3282704371/p876270.png)
    
-   #### Budget and cost management
    
    Subscription and pay-as-you-go instances are independently billed at the instance level. Therefore, cloud budget management is complex. Savings plans can be applied to eligible resource usage regardless of the instance type and operating system. This helps simplify cloud budget management.
    

## **Evaluate and purchase savings plans**

Before you purchase savings plans, determine your required savings plans based on your actual resource usage. You can refer to [Purchase a savings plan](/help/en/ecs/purchase-savings-plan) to purchase savings plans based on the recommendations of Alibaba Cloud or calculate potential savings plan purchases and then purchase on the savings plan buy page. When you calculate potential savings plan purchases, you must consider the discounts provided by each savings plan based on various conditions, such as your budget, the billing method of resources, and the usage duration of resources. Then, determine the type, resource configuration, hourly spend commitment, payment option, and duration of the savings plans that you want to purchase based on the calculation results and go to the [savings plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to purchase savings plans.

**Note**

-   You can upgrade existing savings plans. For more information, see [Upgrade a savings plan](/help/en/ecs/analysis-and-optimization-of-saving-plan-effect#4962d8748abyu).
    
-   On the savings plan buy or upgrade page, the total payable amount for the savings plan is determined based on the hourly commitment amount (Committed Amount) and the duration (Duration) parameters, and the resource usage that the savings plan can cover per hour is determined based on the other parameters. We recommend that you purchase a savings plan based on the recommendations of Alibaba Cloud or the results of manual purchase calculation and evaluation. If you have other discounts, the discounts may apply. The payable amount displayed on the savings plan buy or upgrade page shall prevail.
    

## **Limits on purchase and use**

The following limits apply when you purchase and use savings plans:

-   **Limits on purchase:**
    
    -   You can purchase up to 200 savings plans for each Alibaba Cloud account.
        
-   **Limits on use:**
    
    -   Savings plans can be applied only to pay-as-you-go ECS instances and elastic container instances, excluding spot instances. For information about the eligible resources and deduction rules of savings plans, see [Eligible resources and deduction rules of savings plans](/help/en/ecs/savings-plan-credit-rules).
        
    -   For ECS instances, savings plans can be used to offset the fees for computing resources (vCPUs and memory), images, system disks, and public bandwidth. Savings plans can also be used to offset capacity fees, performance provision fees, and performance burst fees for data disks on the ECS instances. For information about the billing of ECS instances, see [Billing overview](/help/en/ecs/billing-overview).
        
    -   For elastic container instances, savings plans can be used to offset the fees for only computing resources (vCPUs and memory). For information about the billing of elastic container instances, see [Billing of elastic container instances](/help/en/eci/product-overview/elastic-container-instances).
        

## **Lifecycle**

### Effective time and impacts

-   If you set the Activation Type parameter to Immediately Activate when you purchase a savings plan, the savings plan takes effect on the hour (zero minutes and zero seconds past the hour) when you complete the payment.
    
-   If you set the Activation Type parameter to Activated at Specified Point in Time, you must specify a point in time at which you want the savings plan to take effect. The specified point in time is an on-the-hour time and can be up to one year after the point in time when you place the order.
    

For example, if you purchase a one-year savings plan that immediately takes effect at 13:45 on October 29, 2024, the savings plan takes effect at 13:00 on October 29, 2024 and expires at 13:00 on October 29, 2025. If you have eligible pay-as-you-go instances, the savings plan is applied to offset the fees for the instances starting from 13:00:00 on October 29, 2024 until the savings plan expires.

### **Expiration time and impacts**

To view the expiration time of a savings plan, log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) console, choose Savings Plan > Overview in the left-side navigation pane, and then search for the savings plan.

**Important**

The expiration times of savings plans are on-the-hour points in time. After a savings plan expires, the discount provided by the savings plan is no longer available and the pay-as-you-go instances to which the savings plan was applied are billed at regular pay-as-you-go rates. The instances are not released, and your business is not affected.

### Impacts of overdue payments

If your account has overdue payments, Partial Upfront or No Upfront savings plans are suspended. After a savings plan is suspended due to an overdue payment, the savings plan cannot be applied to offset the fees for pay-as-you-go resources starting from the next hour of the suspension. After you complete the overdue payment, the savings plan resumes.

**Important**

-   If a savings plan is suspended multiple times or for an extended period of time due to overdue payments, you may be unable to use the No Upfront payment option. To prevent this issue, make sure that your account balance is sufficient.
    
-   After a savings plan is suspended due to an overdue payment, you are still billed for the hourly spend commitment.
    

## **View the bills of savings plans**

View the billing details of savings plans on the Bill Details page in the Expenses and Costs console.

1.  Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) console. In the left-side navigation pane, choose **Bills > Bill Details**.
    
2.  Click the Billing Details tab. On the Billing Details tab, set the **Product Details** parameter to **Saving Plan**, configure other parameters, and then click Search to search for the billing details of savings plans. Export the billing details. For more information, see [Check your Savings Plan bills](/help/en/user-center/how-to-check-the-savings-plan-bill#32c02a707eusr).
    

**Note**

By default, the bills of the logon account are displayed. If you log on to the Expenses and Costs console by using a main financial account, you can also specify a linked financial account or a linked account to view the bills of the specified account.

## **Request a refund for a savings plan**

To request a refund for a savings plan that you no longer require, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## Renew a savings plan

Before a savings plan expires, you can manually renew or enable auto-renewal for the savings plan to extend the duration of the savings plan. You can renew a savings plan on the [Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview) tab of Savings Plan page in the Expenses and Costs console. You can also manually renew or enable auto-renewal for a savings plan on the Renewal page in the Expenses and Costs console.

**Note**

The renewal duration must be the same as the purchase duration of the savings plan that you want to renew. For example, if the duration of a savings plan is one year, you can renew the savings plan for only one year.

## View and optimize the usage of savings plans

To maximize cost savings, we recommend that you monitor the usage of savings plans and adjust savings plan configurations at the earliest opportunity based on your business requirements. Alibaba Cloud provides a utilization report and a coverage report for your savings plans. You can optimize the usage of savings plans based on the reports by following the suggestions in the [View and optimize the usage of savings plans](/help/en/ecs/analysis-and-optimization-of-saving-plan-effect) topic or the recommendations on the [Recommended](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) page in the Expenses and Costs console.

## **FAQ**

For the answers to the frequently asked questions that you have when you use savings plans, see [Billing FAQ](/help/en/ecs/billing-faq#concept-827517).
