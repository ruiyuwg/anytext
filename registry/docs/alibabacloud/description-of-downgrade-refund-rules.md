When you downgrade the configuration of a subscription instance, the system calculates a partial refund. No refund is issued if the calculated refundable amount is less than 0.

## How refunds work

If the configuration of your subscription instance exceeds your business requirements, you can use an authorized account to downgrade the instance configuration in real time. A configuration downgrade cancels the original order and generates a new order with the new configuration. The refund amount depends on the following factors:

-   **Paid amount**: The amount you actually paid, excluding amounts offset by coupons or vouchers.
    
-   **Fee for consumed resources**: The cost of resources you already used, calculated based on the resource type and usage duration.
    
-   **Price difference ratio**: A ratio that accounts for the price difference between the original and new configurations.
    

**Important**

If you purchased a resource during a promotional event, the refundable amount may be equal to or smaller than zero. No refund is issued in this case.

## Refund formula

**Refundable amount** = Online refundable amount x Price difference ratio

If the downgrade involves multiple orders (for example, an original purchase order and a subsequent upgrade order), the total refundable amount is the sum of the refund calculated for each order.

### Online refundable amount

**Online refundable amount** = Paid amount - Fee for consumed resources

The fee for consumed resources is calculated differently depending on the resource type:

**Resource type**

**Usage duration**

**Fee formula**

Subscription ECS instance

Less than 30 days

Daily unit price x Usage duration x Discount for the usage duration x 1.5

Subscription ECS instance

30 days or more

Daily unit price x Usage duration x Discount for the usage duration

Other resources

Any

Daily unit price x Usage duration x Discount for the usage duration

### Price difference ratio

**Price difference ratio** = (Daily unit price of original order - Daily unit price of new order) / Price difference between daily unit prices of original orders

The denominator (**price difference between daily unit prices of original orders**) depends on whether you upgraded the instance before the downgrade:

**Scenario**

**Price difference (denominator)**

No prior upgrade

Daily unit price of the original order

Prior upgrade

Daily unit price of the original order - Daily unit price of the order before the upgrade

**Note**

If the calculated price difference ratio exceeds 1, the system caps it at 1.

### Daily unit price

**Order type**

**Daily unit price formula**

Purchase, renewal, or downgrade

Original price of the order / Actual subscription duration of the order

Upgrade

(Original price of the order / Actual subscription duration of the order) x Price difference ratio before and after upgrade

For upgrade orders, the price difference ratio before and after upgrade is:

(Daily unit price after upgrade - Daily unit price before upgrade) / Daily unit price after upgrade

**Note**

Daily unit prices in the upgrade formula do not include discounts.

### Usage duration

Usage duration = Downgrade time - Order start time

The usage duration is accurate to days. A duration shorter than one day is rounded up to one day.

**Examples:**

-   You purchased an ECS instance for one year on January 1, 2023 at 12:00 and initiated a downgrade on January 10, 2023 at 14:00. Usage duration = **10 days**.
    
-   You purchased an ECS instance for one year on January 1, 2023 at 12:00 and initiated a downgrade the same day at 14:00. Usage duration = **1 day**.
    

### Discount for the usage duration

The system calculates this discount based on the resource configuration and the actual usage duration at the time of refund.

## Calculation examples

The following examples use an ECS instance to demonstrate refund calculations for different scenarios. No discount is provided for subscriptions shorter than one year in these examples.

### Example 1: Downgrade without a prior upgrade

**Setup:**

**Item**

**Value**

Instance

4 vCPUs, 8 GB memory

Subscription

1 year (365 days)

List price

USD 100/month (USD 1,200/year)

Discount

15% off for 1-year subscription

Paid amount

USD 1,020

Downgrade timing

After 6 months

New configuration

2 vCPUs, 4 GB memory (USD 50/month)

**Order A (purchase order):**

**Step**

**Calculation**

**Result**

Fee for consumed resources

USD 100/month x 6 months x 1.0

USD 600

Online refundable amount

USD 1,020 - USD 600

USD 420

Daily unit price (original)

USD 1,200 / 365

USD 3.2877

Daily unit price (new)

USD 50 / 30

USD 1.6667

Price difference ratio

(3.2877 - 1.6667) / 3.2877

0.50694444

**Refundable amount**

USD 420 x 0.50694444

**USD 212.92**

### Example 2: Downgrade to original configuration after an upgrade

**Setup:**

**Item**

**Value**

Instance

4 vCPUs, 8 GB memory

Subscription

1 year (365 days)

List price

USD 100/month (USD 1,200/year)

Discount

50% off for 1-year subscription

Paid amount

USD 600

Upgrade (after 6 months)

8 vCPUs, 16 GB memory (USD 200/month), paid USD 600 (Order B)

Downgrade (3 months later)

Back to 4 vCPUs, 8 GB memory (USD 100/month)

**Order A (purchase order):** No refund.

**Order B (upgrade order):**

**Step**

**Calculation**

**Result**

Fee for consumed resources

(USD 600 / 6 months) x 3 months

USD 300

Online refundable amount

USD 600 - USD 300

USD 300

Daily unit price (original)

USD 200 / 30

USD 6.6667

Daily unit price (new)

USD 100 / 30

USD 3.3333

Daily unit price (pre-upgrade)

USD 1,200 / 365

USD 3.2877

Price difference (denominator)

6.6667 - 3.2877

USD 3.3790

Price difference ratio

(6.6667 - 3.3333) / 3.3790

0.98648649

**Refundable amount**

USD 300 x 0.98648649

**USD 295.95**

**Total refundable amount** = USD 0 + USD 295.95 = **USD 295.95**

### Example 3: Downgrade to a lower configuration after an upgrade

**Setup:**

**Item**

**Value**

Instance

4 vCPUs, 8 GB memory

Subscription

1 year (365 days)

List price

USD 100/month (USD 1,200/year)

Discount

15% off for 1-year subscription

Paid amount

USD 1,020

Upgrade (after 6 months)

8 vCPUs, 16 GB memory (USD 200/month), paid USD 600 (Order B)

Downgrade (3 months later)

2 vCPUs, 4 GB memory (USD 50/month)

**Order A (purchase order):**

**Step**

**Calculation**

**Result**

Fee for consumed resources

USD 100/month x 9 months x 1.0

USD 900

Online refundable amount

USD 1,020 - USD 900

USD 120

Price difference ratio

\[(USD 1,200/365) - (USD 50/30)\] / (USD 1,200/365)

0.50694444

**Refundable amount**

USD 120 x 0.50694444

**USD 60.83**

**Order B (upgrade order):**

**Step**

**Calculation**

**Result**

Fee for consumed resources

(USD 600 / 6 months) x 3 months

USD 300

Online refundable amount

USD 600 - USD 300

USD 300

Price difference ratio

\[(USD 200/30) - (USD 50/30)\] / \[(USD 200/30) - (USD 1,200/365)\]

\> 1 (capped at 1)

**Refundable amount**

USD 300 x 1

**USD 300**

**Total refundable amount** = USD 60.83 + USD 300 = **USD 360.83**

### Example 4: Partial downgrade after an upgrade

**Setup:**

**Item**

**Value**

Instance

4 vCPUs, 8 GB memory

Subscription

1 year (365 days)

List price

USD 100/month (USD 1,200/year)

Discount

15% off for 1-year subscription

Paid amount

USD 1,020

Upgrade (after 6 months)

8 vCPUs, 16 GB memory (USD 200/month), paid USD 600 (Order B)

Downgrade (3 months later)

6 vCPUs, 12 GB memory (USD 150/month)

**Order A (purchase order):** No refund.

**Order B (upgrade order):**

**Step**

**Calculation**

**Result**

Fee for consumed resources

(USD 600 / 6 months) x 3 months

USD 300

Online refundable amount

USD 600 - USD 300

USD 300

Daily unit price (original)

USD 200 / 30

USD 6.6667

Daily unit price (new)

USD 150 / 30

USD 5.0000

Price difference (denominator)

(USD 200/30) - (USD 1,200/365)

USD 3.3790

Price difference ratio

(6.6667 - 5.0000) / 3.3790

0.49324324

**Refundable amount**

USD 300 x 0.49324324

**USD 147.97**

**Total refundable amount** = USD 0 + USD 147.97 = **USD 147.97**
