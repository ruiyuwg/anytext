Refer to these frequently asked questions if you have questions about purchasing or using Savings Plans.

**Category**

**Question**

Before you purchase

[What is the hourly commitment of a Savings Plan?](#title-f2h-1da-m28)

[Do Savings Plans provide inventory reservation?](#title-1yc-xbj-tco)

[Do Savings Plans offer discounts for spot instances?](#title-6gx-s8e-qv2)

[How do Savings Plans work when the number of deductible instances is not an integer?](#b5d5e8d14bder)

Usage rules

[Can I have multiple active Savings Plans at the same time?](#title-fti-2z7-b3y)

[Can I purchase Storage Capacity Units (SCUs) after buying a Savings Plan?](#title-z77-94j-lbq)

[Can I purchase reserved instances after buying a Savings Plan?](#title-voj-q1y-5qu)

Purchase a Savings Plan

[How do I purchase a Savings Plan?](#02562704detxg)

[Can I use coupons for Savings Plan installment bills?](#dced30574fqxl)

[When are installment bills generated for Savings Plan purchases?](#0ba1b3b79dvu6)

Post-purchase management

[How do I set the deduction scope for a Savings Plan?](#ae914bc306o8k)

[How do I check the discounts for a Savings Plan?](#title-ojx-axh-d6j)

[How do I check the cost savings from my Savings Plan?](#title-nfm-wn7-s1j)

Effects of expiration

[What happens when a Savings Plan expires?](#c3941b0b32n30)

## **Before you purchase**

### **What is the hourly commitment of a Savings Plan?**

When you purchase a Savings Plan, you commit to a specific spending amount for a specific term. This commitment is expressed as an hourly commitment, which is the minimum usage amount, measured in USD, that you agree to spend each hour. Your hourly bills for usage up to this committed amount receive a special discount and are covered by the Savings Plan. If you select the Partial Upfront payment option for your Savings Plan, you pay 50% of your hourly commitment when your hourly bill is less than your hourly commitment. If you select the No Upfront payment option for your Savings Plan, you pay 100% of your hourly commitment when your hourly bill is less than your hourly commitment.

The hourly commitment is the upper limit of pay-as-you-go bills that a Savings Plan can cover. Within this limit, your pay-as-you-go bill is first discounted and then deducted from your commitment.

**Note**

The following prices are examples only. The actual prices displayed at the time of purchase prevail.

**Example:**

The pay-as-you-go price for an ECS ecs.ic5.large instance in the China (Shanghai) region is 0.09 USD/instance/hour. The corresponding pay-as-you-go discount for the ecs.ic5 instance family under a 1-year, All Upfront, General-purpose Savings Plan is 42.2%. Assume that you select an hourly commitment of 1 USD. The number of ecs.ic5.large instances that this Savings Plan can cover per hour is: 1/(0.09×0.422) = 26.33 instances.

### **Do Savings Plans provide inventory reservation?**

No. Savings Plans do not reserve resources. Because you do not specify resources when you purchase a Savings Plan, inventory reservation is not available.

### **Do Savings Plans offer discounts for spot instances?**

Savings Plans do not apply to spot instances.

### **How do Savings Plans work when the number of deductible instances is not an integer?**

Assume your Savings Plan can cover 38.22 instances per hour. If you are running 39 instances, the plan covers the full cost of 38 instances. For the 39th instance, 22% of its hourly cost is covered, and you pay the remaining 78% at the standard pay-as-you-go rate. If you are running only 38 instances, the portion of your plan that could have covered 0.22 instances is unused for that hour.

## **Usage rules**

### **Can I have multiple active Savings Plans at the same time?**

Yes. You can use multiple Savings Plans at the same time. The system automatically applies the plan that provides the greatest discount.

### **Can I purchase Storage Capacity Units (SCUs) after buying a Savings Plan?**

Yes, you can purchase both. However, when covering pay-as-you-go instance costs, Storage Capacity Units (SCUs) are applied before Savings Plans.

### **Can I purchase reserved instances after buying a Savings Plan?**

Yes, you can purchase both. However, when covering pay-as-you-go instance costs, reserved instances are applied before Savings Plans.

## **Purchase a Savings Plan**

### **How do I purchase a Savings Plan?**

You can directly visit the [Savings Plan purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to make a purchase, or visit the [Savings Plan Purchase Recommendations](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) to obtain recommendations. The system will automatically recommend a suitable Savings Plan for you based on criteria such as your selected reference consumption data, Savings Plan type, and payment method.

### **Can I use coupons for Savings Plan installment bills?**

Coupons can be applied to Savings Plan installment bills. For Partial Upfront and No Upfront Savings Plans, coupons are automatically matched and applied when installment bills are generated. For more information, see [Changes to Savings Plan installment billing and coupon support](https://www.alibabacloud.com/zh/notice/detail?_p_lc=1&id=1675).

### **When are installment bills generated for Savings Plan purchases?**

Installment bills for Savings Plans are generated at the beginning of each billing cycle. For example, the installment bill for the 10:00 to 11:00 period is generated at 10:00.

## **Post-purchase management**

### **How do I set the deduction scope for a Savings Plan?**

You can access the [Savings Plan Overview page](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview), and click the **Set Deduction Rules** button in the **Actions** column to set the scope of billable items for which you want to apply deductions.

### **How do I check the discounts for a Savings Plan?**

Go to the [Savings Plan Price and Discount Details](https://usercenter2-intl.console.alibabacloud.com/resource/spn/price) page. On this page, set the properties of the Savings Plan to view the corresponding pay-as-you-go discount.

### **How do I check the cost savings from my Savings Plan?**

You can visit the [Savings Plan Overview page](https://usercenter2-intl.console.alibabacloud.com/resource/spn/overview) to view your cost savings after purchasing a Savings Plan, including cumulative savings, current year savings, and current month savings.

## **Effects of expiration**

### **What happens when a Savings Plan expires?**

When your Savings Plan expires, you will no longer receive the plan's discounts. The pay-as-you-go instances that were covered by the plan will be charged at the standard pay-as-you-go rate. The instances will not be released, so your services will not be affected.
