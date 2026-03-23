Pay-as-you-go is a billing method that allows you to use resources before you pay for them. You can purchase and release resources based on your business requirements. You do not need to purchase a large number of resources in advance. This topic describes the billing rules for pay-as-you-go Edge Node Service (ENS) instances.

## Usage notes

-   When you create an instance, you occupy computing resources in the cloud, and you are billed for the resources even if the resources are idle. This is particularly true for pay-as-you-go instances.
    
-   ENS supports two metering methods for pay-as-you-go instances: **pay-by-daily-peak** and **pay-by-monthly-peak**. To switch between them, contact your account manager.
    
-   All pay-as-you-go resources in your Alibaba Cloud account, including public bandwidth, instances, and cloud disks, share a unified billing cycle and metering method. If you select pay-by-monthly-95th-percentile-bandwidth for public bandwidth when you first create an instance, the monthly billing cycle applies to all existing and new pay-as-you-go instances and cloud disks in your account. Bandwidth charges for all existing and new public network interface controllers (NICs) also follow this metering method.
    
-   For billing rules for bare metal and heterogeneous computing instances, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
    

## Billable items and pricing

Pay-as-you-go instances are billed for two items: **edge vCPUs** and **edge memory**. Prices vary by region.

**Note**

-   For edge node locations in each billable region, see [Node distribution](/help/en/ens/product-overview/node-distribution).
    

### Daily unit prices

**Unit price type**

**Billable item**

**Chinese mainland**

**North America**

**Europe**

**Asia-Pacific 1**

**Asia-Pacific 2**

**Asia-Pacific 3**

**Middle East**

**Africa**

**South America**

Daily unit price

Edge vCPU

Unit: USD per item per day

0.67

0.87

0.87

1

1.07

1.13

1.2

1.2

1.2

Edge memory

Unit: USD/GB/day

0.2046

0.2662

0.2662

0.3077

0.3277

0.3492

0.3692

0.3692

0.3692

Monthly unit price

Edge vCPU

Unit: USD per item per month

10

13

13

15

16

17

18

18

18

Edge memory

Unit: USD/GB/month

3.0769

4

4

4.6154

4.9231

5.2308

5.5385

5.5385

5.5385

## Pay-by-daily-peak

ENS samples the total number of edge vCPUs and total edge memory across your account every 5 minutes, producing 288 data points per day. The highest value among these 288 data points is the daily peak.

**Billing method:** Pay-as-you-go

**Formula:**

```
Fees for an instance of a day = Daily peak vCPUs x Daily vCPU unit price + Daily peak memory (GB) x Daily memory unit price
```

**Billing cycle:** Daily. Bills are generated and deducted after 00:00 the following day. The exact bill generation time is determined by the system.

## Pay-by-monthly-peak

ENS samples the total number of edge vCPUs and total edge memory every 5 minutes, producing 288 data points per day. The highest value among these 288 data points is the daily peak. At the end of the month, the highest daily peak across all days becomes the monthly peak.

**Billing method:** Pay-as-you-go

**Formula:**

```
Fees for an instance of a month = Monthly peak vCPUs x Monthly vCPU unit price + Monthly peak memory (GB) x Monthly memory unit price x Effective factor
```

**Billing cycle:** Monthly. A bill is generated on the first day of the next calendar month. The exact bill generation time is determined by the system.

### Effective factor

The effective factor prorates the fee based on how many days in the month the instance was active.

```
Effective factor = Effective days / Total days in the month
```

**Effective days** is the number of days from the day the instance is created to the day it is released, or to the end of the month if the instance is not released.

**Examples (June 2024, 30 total days):**

**Scenario**

**Instance created**

**Instance released**

**Effective days**

**Effective factor**

Released mid-month

June 5, 2024

June 25, 2024

21

\-

Active all month

June 5, 2024

Not released

26

26/30 = 0.86666667
