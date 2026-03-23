Amortized costs are expenses that are distributed over a specific period. This topic describes how to view amortized cost bills and explains the amortization rules for pay-as-you-go, subscription, and equity asset billing methods.

## Feature description

You can amortize the subscription and pay-as-you-go costs of cloud resources over a service period based on specific amortization rules. You can then view these amortized costs from two perspectives and across three dimensions.

### Viewing perspectives

-   **Amortization period** -- View the amortized costs for each amortization month. The amortized costs for a single amortization month may come from orders or bills in different billing cycles.
    
-   **Billing cycle** -- View the cost amortization details for orders or bills within a specified billing cycle. The costs from orders or bills in a single billing cycle may be amortized over different amortization months.
    

### Grouping dimensions

-   **By instance** -- View a summary of amortized costs by resource instance.
    
-   **By product** -- View a summary of amortized costs by product.
    
-   **By cost center** -- View a summary of amortized costs by cost center.
    

## View amortized cost bills

In the **Expenses and Costs** console, navigate to **Cost** > **Cost Allocation** > **Amortized Cost**. Select a data scope.

### Customize columns

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9455746371/p852567.png) icon to customize and save columns. Select the fields to display, clear the fields to hide, and click **Save**. Custom columns affect only the console view and do not affect exported reports.

### Export billing data

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9455746371/p852565.png) Export button. Set the **Export Data by Scope** parameter:

-   **Current List** -- Exports billing data for the accounts selected in the **Enterprise/Organization/Account** section.
    
-   **All Items** -- Exports billing data for all accounts that the current logon account has permissions for.
    

Download the exported file from the [Export Records](https://usercenter2-intl.console.alibabacloud.com/finance/export-record?disableGoBack=1) page.

## Amortization rules

The following table summarizes the amortization method, formula, and unused portion handling for each billing type.

**Billing type**

**Amortization method**

**Formula**

**Unused portion**

Pay-as-you-go

One-time

Daily amortized amount = bill amount

N/A

Subscription

Linear

Daily amortized amount = order amount / days in validity period

Remaining amount amortized on unsubscription day or last day of validity period

Equity asset (calendar month / dynamic month)

Usage-based per sub-resource plan

(Deducted CU / total CU) x sub-plan amount

Unused portion amortized on the last day of each sub-resource plan period

Equity asset (decreasing-total)

Usage-based on total pool

(Deducted CU / total CU) x total amount

Remaining amount amortized on the last day of the validity period

Equity asset (fixed-total)

Time-based (hourly)

Hourly amount = total / total hours in validity period

Costs amortized regardless of matching

### Equity asset amortization

This section applies to equity assets such as reserved instances, savings plans, and resource plans (Storage Capacity Units, PolarDB compute plans). After purchase, equity assets offset the usage of pay-as-you-go instances for specific cloud products.

Equity asset amortization is usage-based. Usage refers to a measurable quantity such as bandwidth, traffic, call duration, or storage. The amortized amount is calculated based on actual usage.

Three sub-types apply depending on the resource structure.

#### Calendar month or dynamic month cycle

Resource plans with a calendar month or dynamic month cycle divide the service period into multiple sub-resource plans. The amortized amount per sub-resource plan equals the total amount divided by the number of sub-resource plans. Within each sub-resource plan, costs are amortized based on actual deduction details. At the end of each sub-resource plan period, any unused portion is amortized on the last day.

**Formula:** Daily amortized amount = (deducted CU / sub-plan total CU) x sub-plan amount

**Example: Simple Log Service (SLS) monthly resource plan**

A customer purchases a new SLS monthly resource plan for 1,200 USD. The order number is A001, the purchase date is January 1, 2021, and the validity period is from January 1, 2021 to December 31, 2021. The resource plan capacity is 100 compute units (CUs).

The purchased SLS monthly resource plan generates 12 sub-resource plans within its 12-month validity period. The maximum deductible amount of each sub-resource plan is 100 CUs per month, and the amortization amount of each sub-resource plan is 1,200 / 12 = 100 USD.

**January deduction details:**

**Date**

**Deduction (CU)**

**Daily amortized amount (USD)**

January 5, 2021

30

30 / 100 x 100 = 30

January 7, 2021

40

40 / 100 x 100 = 40

January 11, 2021

25

25 / 100 x 100 = 25

Other dates

0

0

January 31, 2021 (unused remainder)

5

(100 - 30 - 40 - 25) / 100 x 100 = 5

**February deduction details:**

**Date**

**Deduction (CU)**

**Daily amortized amount (USD)**

February 1, 2021

30

30 / 100 x 100 = 30

February 7, 2021

40

40 / 100 x 100 = 40

Other dates

0

0

February 28, 2021 (unused remainder)

30

(100 - 30 - 40) / 100 x 100 = 30

The calculation for other months follows the same pattern.

#### Decreasing-total equity assets

For decreasing-total resource plans, costs are amortized based on actual deduction details against the total capacity of the plan. At the end of the validity period, any unused portion is amortized on the last day.

**Formula:** Daily amortized amount = (deducted CU / total CU) x total amount

**Example: Object Storage Service (OSS) resource plan**

A customer purchases a monthly deductible OSS resource plan. The plan has a total capacity of 1,200 CU and a total amount of 1,200 USD. The order number is A001, the purchase date is January 1, 2021, and the validity period is from January 1, 2021 to December 31, 2021.

**January deduction details:**

**Date**

**Deduction (CU)**

**Daily amortized amount (USD)**

January 5, 2021

30

30 / 1,200 x 1,200 = 30

January 7, 2021

40

40 / 1,200 x 1,200 = 40

January 11, 2021

25

25 / 1,200 x 1,200 = 25

Other dates

0

0

**February deduction details:**

**Date**

**Deduction (CU)**

**Daily amortized amount (USD)**

February 1, 2021

30

30 / 1,200 x 1,200 = 30

February 7, 2021

40

40 / 1,200 x 1,200 = 40

Other dates

0

0

Assume no deductions occur in other months. The daily amortized amount for those months (excluding the last day of the validity period) is 0.

On December 31, 2021, the last day of the validity period, the remaining unused capacity is fully amortized: (1,200 - 30 - 40 - 25 - 30 - 40) / 1,200 x 1,200 = 1,035 USD.

#### Fixed-total equity assets

For fixed-total equity assets such as reserved instances, costs are amortized on an hourly basis regardless of whether the reserved instance matches a pay-as-you-go instance within the hour.

**Formula:** Hourly amortized amount = total amount / total hours in validity period

**Example: Reserved instance (all upfront)**

A customer purchases a new reserved instance using the all upfront payment method for 1,200 USD. The order number is A001. The purchase is made at 00:00:00 on January 1, 2021, and the validity period is from 00:00:00 on January 1, 2021 to 24:00:00 on December 31, 2021. After purchase, the reserved instance takes effect and automatically matches pay-as-you-go instances on an hourly basis, deducting the hourly bills of those instances.

-   Hourly amortized amount: 1,200 / (12 x 31 x 24) = 0.13 USD.
    
-   Total amortized amount for January: 96.72 USD.
    
-   Other periods follow the same calculation pattern.
    

### Subscription amortization

This section applies to subscription products such as ECS instances, RDS instances, and Anti-DDoS instances.

Subscription costs use linear amortization. Costs are evenly distributed over the validity period.

**Formula:** Daily amortized amount = order amount / number of days in validity period

**Purchase day rule:** If usage on the day of purchase is less than 24 hours, the amortized amount for that day is 0 USD.

#### Purchase and unsubscription example

**Purchase:** A customer purchases a monthly subscription Elastic Compute Service (ECS) instance for 60 USD at 13:10:00 on January 1, 2022. The order number is A001 and the validity period is from January 1, 2022 to January 31, 2022.

Linear amortization result for the purchase order:

-   January 1, 2022: Amortized amount is 0 USD (usage on purchase day was less than 24 hours).
    
-   January 2 to January 31, 2022: Daily amortized amount is 60 / 30 = 2 USD. Total amortized amount is 60 USD.
    

**Unsubscription:** The customer unsubscribes on January 16, 2022.

Amortization result for the original purchase order:

-   January 1, 2022: Amortized amount is 0 USD (usage on purchase day was less than 24 hours).
    
-   January 2 to January 15, 2022: Daily amortized amount is 60 / 30 = 2 USD. Cumulative amortized amount is 28 USD.
    
-   January 16, 2022: The customer unsubscribes. The remaining amount is amortized at once: 60 - 0 - 2 x 14 = 32 USD.
    

A refund generates a refund order with a negative amount. If the refund order amount is -30, the amortization result for the refund order is:

-   January 16, 2022: Amortized amount is -30 USD.
    

#### Purchase, early renewal, and upgrade example

**Purchase:** At 13:10:00 on January 1, 2022, a customer purchases a monthly subscription ECS product for 60 USD. The order number is A001 and the validity period is from January 1, 2022 to January 31, 2022.

Linear amortization result for the purchase order:

-   January 1, 2022: Amortized amount is 0 USD (instance used for less than 24 hours on purchase day).
    
-   January 2 to January 31, 2022: Daily amortized amount is 60 / 30 = 2 USD. Total amortized amount is 60 USD.
    

**Early renewal:** The customer renews on January 16, 2022. A renewal order A002 is generated. The subscription amount is 60 USD, and the service period is from February 1, 2022 to February 28, 2022.

Because the service period of the renewal order is in the future:

-   January 16 to January 31: Daily amortized amount is 0.
    
-   From February 1, 2022: Daily amortized amount is 60 USD / 28 = 2.14 USD.
    

**Upgrade:** The customer upgrades the instance on January 20, 2022. Upgrade orders A001-1 and A002-1 are generated for the original orders A001 and A002. Negative orders A001-2 and A002-2 are also generated.

The linear amortization for the original orders A001 and A002 remains unchanged.

**Order**

**Type**

**Service period**

**Days**

**Amount (USD)**

**Daily amortized amount (USD)**

A001-1

Upgrade

Jan 20 -- Jan 31, 2022

12

48

48 / 12 = 4.00

A002-1

Upgrade

Feb 1 -- Feb 28, 2022

28

80

Jan 20--31: 0; Feb 1--28: 80 / 28 = 2.85

A001-2

Negative

Jan 20 -- Jan 31, 2022

12

\-31

\-31 / 12 = -2.58

A002-2

Negative

Feb 1 -- Feb 28, 2022

28

\-60

Jan 20--31: 0; Feb 1--28: -60 / 28 = -2.14

#### Purchase, early renewal, and downgrade example

**Purchase:** A customer purchases a subscription ECS product for 60 USD at 13:10:00 on January 1, 2022. The order number is A001, and the validity period is from January 1, 2022 to January 31, 2022.

Linear amortization result for the purchase order:

-   January 1, 2022: Amortized amount is 0 USD (usage on purchase day was less than 24 hours).
    
-   January 2 to January 31, 2022: Daily amortized amount is 60 / 30 = 2 USD. Total amortized amount is 60 USD.
    

**Early renewal:** The customer renews on January 16, 2022. A renewal order A002 is generated. The subscription amount is 60 USD, and the service period is from February 1, 2022 to February 28, 2022.

Because the service period of the renewal order is in the future:

-   January 16 to January 31: Daily amortized amount is 0.
    
-   From February 1, 2022: Daily amortized amount is 60 USD / 28 = 2.14 USD.
    

**Downgrade:** The customer downgrades the instance on January 20, 2022. Downgrade orders A001-1 and A002-1 are generated for the original orders A001 and A002. Negative orders A001-2 and A002-2 are also generated.

The linear amortization for the original orders A001 and A002 remains unchanged.

**Order**

**Type**

**Service period**

**Days**

**Amount (USD)**

**Daily amortized amount (USD)**

A001-1

Downgrade

Jan 20 -- Jan 31, 2022

12

12

12 / 12 = 1.00

A002-1

Downgrade

Feb 1 -- Feb 28, 2022

28

40

Jan 20--31: 0; Feb 1--28: 40 / 28 = 1.42

A001-2

Negative

Jan 20 -- Jan 31, 2022

12

\-31

\-31 / 12 = -2.58

A002-2

Negative

Feb 1 -- Feb 28, 2022

28

\-60

Jan 20--31: 0; Feb 1--28: -60 / 28 = -2.14

### Pay-as-you-go amortization

This section applies to pay-as-you-go products such as Application Load Balancer instances and ECS instances.

Pay-as-you-go costs use one-time amortization. The daily amortized amount equals the bill amount. No distribution over time occurs.

#### Hourly billing example

A customer uses a pay-as-you-go product from 23:00:00 to 23:59:59 on January 1, 2022. The bill number is A001, and the amount payable is 2 USD.

The amortized amount for January 1, 2022 is 2 USD.

#### Monthly billing example

A customer uses a pay-as-you-go product from 00:00:00 on January 1, 2022 to 23:59:59 on January 31, 2022. The bill number is A001, and the amount is 1,000 USD. The bill is generated at the start of February 2022, usually between February 1 and February 3.

Amortization data is available only after the detailed bill is generated. After the bill is issued, the full 1,000 USD is amortized to January 31, 2022.

## Billing cycle and amortization period perspectives

The same amortized cost data appears differently depending on the viewing perspective.

The following examples use the equity asset orders described in the preceding sections.

### Billing cycle perspective

Select a billing cycle to view how costs from that cycle's orders are distributed across amortization periods.

**SLS monthly resource plan (order A001, billing cycle: January 2021):**

**Amortization period**

**Initial amortized amount (USD)**

**Current period amount (USD)**

**Remaining to amortize (USD)**

January 2021

0

100

1,100

February 2021

100

100

1,000

If you select the billing cycle of February 2021, no data is found because the billing cycle for order A001 is January 2021.

**OSS resource plan (order A001, billing cycle: January 2021):**

**Amortization period**

**Initial amortized amount (USD)**

**Current period amount (USD)**

**Remaining to amortize (USD)**

January 2021

0

95

1,105

February 2021

95

70

1,035

**Reserved instance (order A001, billing cycle: January 2021):**

**Amortization period**

**Initial amortized amount (USD)**

**Current period amount (USD)**

**Remaining to amortize (USD)**

January 2021

0

96.72

1,103.28

### Amortization period perspective

Select an amortization period to view what costs landed in that month and which billing cycles they originated from.

**SLS monthly resource plan (order A001):**

-   Amortization period January 2021: Billing cycle January 2021 -- initial 0, current period 100, remaining 1,100.
    
-   Amortization period February 2021: Billing cycle January 2021 -- initial 100, current period 100, remaining 1,000.
    

**OSS resource plan (order A001):**

-   Amortization period January 2021: Billing cycle January 2021 -- initial 0, current period 95, remaining 1,105.
    
-   Amortization period February 2021: Billing cycle January 2021 -- initial 95, current period 70, remaining 1,035.
    

**Reserved instance (order A001):**

-   Amortization period January 2021: Billing cycle January 2021 -- initial 0, current period 96.72, remaining 1,103.28.
    

For all equity asset examples, selecting a billing cycle other than January 2021 returns no data because the billing cycle for order A001 is January 2021.
