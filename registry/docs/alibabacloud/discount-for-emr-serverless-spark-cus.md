E-MapReduce (EMR) Serverless Spark offers different discounts for compute units (CUs) from November 18, 2024.

### Introduction

EMR Serverless Spark provides CU discounts for CPU-intensive jobs that run in an EMR Serverless Spark workspace.

**CPU-to-memory ratio**

**Discount factor**

\[∞:1, 1:2)

0.7

\[1:2, 1:3)

0.8

\[1:3,1:4)

0.9

\[1:4, 1:∞\]

1

If the ratio of consumed CPU cores to memory per hour ranges from 1:2 (included) to 1:3 (not included), you can enjoy a 20% discount for CUs.

Sample configurations of a Spark job:

```
spark.driver.cores 1
spark.driver.memory 1g
spark.driver.memoryOverhead 1g

spark.executor.cores 1
spark.executor.memory 1g
spark.executor.memoryOverhead 1g
spark.executor.instances 2
```

The configurations show that 3 CPU cores and 6 GB of memory are consumed per minute. The usage of computing resources in an hour is 180 core-minutes and 360 GB-minutes. The ratio of CPU cores to memory is 1:2. The number of CU-minutes can be calculated by using the following formula: max(Number of CPU cores/1, Memory size/4) = `max(180/1, 360/4)`. The result is 180 CU-minutes.

180 The discount price of CUs is calculated by using the following formula: CU-minutes × Discount factor = 180 × 0.8 = 144 CU-minutes, which is equivalent to 2.4 CU-hours. The total fee per hour is calculated by using the following formula: `2.4 CU-hours × Hourly unit price in the related region`. For information about the unit prices in different regions, see the [Billing](/help/en/emr/emr-serverless-spark/product-overview/billing/#396762285azuz) section of the Billing topic.
