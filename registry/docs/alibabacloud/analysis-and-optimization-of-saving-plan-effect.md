After you purchase and use savings plans, you can view the savings plans and the usage details of the plans on the [Overview](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview) tab of the Savings Plan page in the Expenses and Costs console. Alibaba Cloud generates a utilization report and a coverage report for your savings plans based on how the savings plans are applied to your resource usage. You can optimize the usage of savings plans based on the reports and your business requirements to further reduce resource costs.

## View the usage of savings plans

You can check whether savings plans are under-utilized based on the savings plan utilization report and whether the savings plans effectively reduce resource costs based on the savings plan coverage report.

### **Savings plan utilization report**

You can view the utilization of one or more savings plans. The utilization of a savings plan refers to the percentage of the amount offset by the savings plan relative to the total amount of the savings plan after purchase. A higher utilization indicates better use of the savings plan.

Utilization of a savings plan = Amount offset by the savings plan / Total amount of the savings plan

-   Amount offset by the savings plan: the amount that is offset by the savings plan for pay-as-you-go resources.
    
-   Total amount of the savings plan: the total amount of the savings plan over the specified time period, which is calculated by using the following formula: Total amount of the savings plan = Hourly commitment amount of the savings plan × Specified time period.
    

**Note**

For more information, see [View the usage of savings plans](/help/en/user-center/how-to-check-saving-plan-usage#1f6d7e9072rdg).

### **Savings plan coverage report**

The coverage of savings plans indicates how much of your eligible resource spend is covered by the plans. You can view the coverage of all savings plans in your account. A higher coverage indicates that the savings plans are more effective in reducing resource costs.

Coverage of savings plans = Amount offset by savings plans/Total eligible resource spend

-   Amount offset by the savings plans: the amount that is offset by the savings plans for pay-as-you-go resources.
    
-   Total eligible resource spend: the sum of the total amount of savings plans and the amount that is charged at regular pay-as-you-go rates for resource usage that exceeds the commitments of the savings plans.
    

The coverage of savings plans displayed in the **Expenses and Costs** console includes all Alibaba Cloud services eligible for savings plans. To view the coverage for a specific Alibaba Cloud service, search for the service and view the discount details.

**Note**

For more information, see [View the coverage of savings plans](/help/en/user-center/how-to-check-saving-plan-usage#f9939a5072u9r).

### Interpretation of and suggestions in the utilization and coverage reports

-   **High utilization and high coverage**: The savings plans that you purchased are appropriate to your resource usage and fully utilized. The savings plans effectively reduce resource costs.
    
-   **High utilization and low coverage**: You may consider using the savings plans to offset more resource costs. To achieve this, you can increase the hourly commitment amounts of the savings plans.
    
-   **Low utilization and low coverage**: The savings plans that you purchased are under-utilized and do not effectively reduce resource costs. To optimize the usage of your savings plans and reduce resource costs, we recommend that you apply the savings plans whenever possible to offset the fees for pay-as-you-go resources.
    
-   **Low utilization and high coverage**: Only a small amount of resource spend needs to be offset by the savings plans. The savings plans are under-utilized. You can wait until the savings plans expire and determine required discount plans.
    

## **Optimize the usage of savings plans**

To optimize the usage of savings plans, view the reports on savings plans on a regular basis and adjust the configurations of the savings plans based on your actual usage to improve the utilization and coverage of the savings plans.

If your Elastic Compute Service (ECS) usage surges beyond expectation as your business grows or if the existing savings plans in your account are under-utilized due to business changes, the existing savings plans may be unable to effectively reduce resource costs. To resolve the issue, we recommend that you purchase or upgrade savings plans to improve the coverage of savings plans.

### **Purchase savings plans**

Alibaba Cloud allows you to purchase multiple savings plans. You can purchase savings plans based on the coverage report to cover more eligible resource spend. If you have multiple savings plans in your account, the savings plans are applied in order. For information about the order in which multiple savings plans are applied, see [Usage priorities of multiple savings plans](/help/en/ecs/savings-plan-credit-rules#56b03d11d6o1n).

You can go to the [Recommended](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) page in the Expenses and Costs console to view the savings plan recommendations. On the **Recommended** page, configure the Savings Plan Type, Duration, and Payment Method parameters and click **View**. Alibaba Cloud recommends savings plans and hourly commitment amounts based on your specified conditions and calculates the expected savings. If a recommended savings plan meets your business requirements, click **Buy Now** to purchase the savings plan.

### **Upgrade a savings plan**

If you do not want to stack multiple savings plans, go to the [Recommended](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) page and refer to the savings plan recommendations. Then upgrade an existing savings plan to increase the hourly commitment amount of the savings plan and save more on your eligible resource usage.

#### **Rules**

The following rules apply when you upgrade a savings plan:

-   Effective time of the upgrade: The upgrade does not take effect until the next billing cycle starts. For example, you upgrade a savings plan at 15:30 and complete the payment. The price difference between the hourly commitment amounts before and after the upgrade is calculated starting at 16:00. At 16:00, the hourly commitment amount is automatically increased to the new amount. The expiration time of the savings plan remains unchanged after the upgrade.
    
-   Payable amount after upgrade: The amount is calculated by using the following formula: (Hourly commitment amount after upgrade × Remaining hours - Hourly commitment amount before upgrade × Remaining hours) × Upfront payment percentage.
    

#### **Procedure**

1.  Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview).
    
2.  On the **Overview** tab, find the savings plan that you want to upgrade and click **Upgrade** in the **Actions** column.
    
3.  On the **Savings Plan | Upgrade/Downgrade** page, enter a commitment amount and click **Buy Now**. Then, complete the payment as prompted.
