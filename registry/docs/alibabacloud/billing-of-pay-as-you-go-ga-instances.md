This topic describes the billable items, billing rules, and pricing for pay-as-you-go Global Accelerator (GA) instances.

**Important**

The first time you use a pay-as-you-go Global Accelerator instance, go to the [pay-as-you-go GA activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) and activate GA as prompted.

## Billing overview

Pay-as-you-go GA instances are billed on an hourly basis. The billable items depend on the instance type:

**Instance type**

**Billable items**

Standard Global Accelerator instance

Instance fee + CU fee + [Data transfer fee](/help/en/ga/product-overview/pay-by-data-transfer)

Basic Global Accelerator instance

Instance fee + [Data transfer fee](/help/en/ga/product-overview/pay-by-data-transfer)

**Billing cycle**: An hourly rate is used for each billable item. If the usage duration is less than 1 hour in a billing cycle, the usage duration is rounded up to 1 hour. A bill is generated 1 hour after the current billing cycle ends. The system determines the time when bills are issued.

**Note**

-   You can use the [GA (Pay-as-you-go) CU Calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/ga_afterpay_public_intl) to estimate the instance fee and CU fee of a pay-as-you-go standard GA instance.
    
-   You can purchase GA resource plans to offset the Capacity Unit (CU) fees and instance fees of pay-as-you-go GA instances. Resource plans are more cost-effective than the pay-as-you-go billing method. For more information, see [GA resource plans](/help/en/ga/product-overview/resource-package).
    

## Instance fee

You are charged an instance fee based on the unit price and usage duration of the instance, regardless of whether you use a standard or basic Global Accelerator instance.

**Billing formula**: Instance fee = Instance unit price (USD per hour) x Usage duration (hours)

**Note**

The prices in the following table are the product catalog prices. The actual prices are subject to your bills. For more information about how to view bills, see [View billing details](/help/en/ga/product-overview/view-billing-details#task-610298).

**Billable item**

**Instance unit price (**USD per hour**)**

Global Accelerator instance

0.02

## CU fee

A CU (Capacity Unit) is the smallest unit used to measure the resource consumption of GA instances. CU fees are charged based on the hourly CU consumption and usage duration of performance metrics.

**Important**

You are charged only for the number of CUs based on data transfer for a Global Accelerator instance. You are not charged for the number of CUs based on new connections, concurrent connections, or rule evaluations.

### Billing formula

CU fee per hour = CU unit price (USD per CU-hour) x Number of CUs per hour

Number of CUs consumed per hour = Max {Number of CUs based on new connections per hour, Number of CUs based on concurrent connections per hour, Number of CUs based on data transfer per hour, Number of CUs based on rule evaluations}

The number of CUs consumed by a GA instance per hour is the maximum value among all performance metrics. The CU fee of a single Global Accelerator instance is the sum of the CU fees of each listener. For more information about how the number of CUs per hour is calculated for each metric, see [CU consumption definition](#eea1497025h66).

### CU unit price

The hourly CU consumption of a Global Accelerator instance is calculated based on actual usage. The CU consumption is accurate to 0.000001 CU. For example, if you consume 0.1 CU in an hour, the CU fee for that hour is 0.1 x USD 0.057 = USD 0.0057.

**Note**

The prices in the following table are the product catalog prices. The actual prices are subject to your bills. For more information about how to view bills, see [View billing details](/help/en/ga/product-overview/view-billing-details#task-610298).

**Billable item**

**CU unit price (**USD per CU-hour**)**

CU

0.057

### CU consumption definition

The performance metrics of a single CU vary based on the protocol of Global Accelerator listeners. The following tables list the CU coefficient for each metric across different traffic types.

#### TCP traffic

**Metric**

**Description**

**Time unit**

**CU coefficient**

**CU calculation**

New connections (CPS)

The number of new TCP connections processed per second.

Seconds

800

Number of CUs = Largest CPS value / CU coefficient

Concurrent connections (CONNS)

The number of concurrent TCP connections per minute.

Minutes

100,000

Number of CUs = Largest CONNS value / CU coefficient

Data transfer

The data transfer over TCP processed by Global Accelerator instances. Unit: GB.

Hours

1 GB

Number of CUs = Total amount of data transfer / CU coefficient

For CPS and CONNS, the system collects all values within a billing cycle and uses the largest value to calculate the number of CUs. For data transfer, the system uses the total amount of data transfer within the billing cycle.

#### UDP traffic

**Metric**

**Description**

**Time unit**

**CU coefficient**

**CU calculation**

CPS

The number of new UDP connections processed per second.

Seconds

400

Number of CUs = Largest CPS value / CU coefficient

CONNS

The number of concurrent UDP connections per minute.

Minutes

50,000

Number of CUs = Largest CONNS value / CU coefficient

Data transfer

The data transfer over UDP processed by Global Accelerator instances. Unit: GB.

Hours

1 GB

Number of CUs = Total amount of data transfer / CU coefficient

#### HTTP and HTTPS traffic

**Metric**

**Description**

**Time unit**

**CU coefficient**

**CU calculation**

CPS

The number of new HTTP and HTTPS connections processed per second.

Seconds

25

Number of CUs = Largest CPS value / CU coefficient

CONNS

The number of concurrent HTTP and HTTPS connections per minute.

Minutes

3,000

Number of CUs = Largest CONNS value / CU coefficient

Data transfer

The data transfer over HTTP and HTTPS processed by Global Accelerator instances. Unit: GB.

Hours

1 GB

Number of CUs = Total amount of data transfer / CU coefficient

#### Rule evaluations

Rule evaluations measure the product of the number of specific items processed by a Global Accelerator instance and the queries per second (QPS).

-   If the number of items exceeds the quota, the number of rule evaluations is calculated by using the following formula: Number of rule evaluations = QPS x (Number of forwarding rules that exceed the quota + Number of additional certificates that exceed the quota).
    

**Important**

The items include forwarding rules and additional certificates. The quota for each type of item is 25. You are charged for the number of items that exceed the quota.

**Time unit**

**CU coefficient**

**CU calculation**

N/A

1,000

Number of CUs = Number of rule evaluations / CU coefficient

The system collects the number of forwarding rules and all QPS values within a billing cycle and uses the highest QPS value to calculate the number of rule evaluations. Then, the system divides the number of rule evaluations by the CU coefficient to calculate the number of CUs.

### CU billing example

A standard pay-as-you-go Global Accelerator instance is created at 08:10:00 on June 2, 2023, and a TCP listener is configured for the instance. The instance is released at 08:50:00 on June 2, 2023. The following table describes the largest CPS value, the largest CONNS value, and the total amount of data transfer of the Global Accelerator instance during the billing cycle from 08:10:00 to 08:50:00.

**Metric**

**TCP**

**Number of CUs consumed**

CPS per second

Up to 4,000 new connections are established per second in the hour.

Number of CUs = 4,000/800 = 5

CONNS per minute

Up to 720,000 concurrent connections are established in the hour.

Number of CUs = 720,000/100,000 = 7.2

Data transfer per hour

The data transfer over TCP processed by a GA instance in the hour is 10 GB.

Number of CUs = 10/1 = 10

In this example, the CU fee of the TCP listener for the hour is USD 0.057 x MAX {5, 7.2, 10} = USD 0.057 x 10 = USD 0.57

### Estimate the CU consumption

You can use the [GA (Pay-as-you-go) CU Calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/ga_afterpay_public_intl) to estimate the consumption of CUs.

## Data transfer fee (managed by Cloud Data Transfer (CDT))

If you use a pay-as-you-go Global Accelerator instance whose usage metering method is **pay-by-data-transfer**, a data transfer fee is incurred in addition to an instance fee and a CU fee. The bills for data transfer fees are generated by Cloud Data Transfer (CDT). For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).

## **What to do next**

-   [Standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/)
    
-   [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    
-   [Basic GA instances](/help/en/ga/user-guide/basic-ga-instances/)
    
-   [Create and manage basic GA instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances)
