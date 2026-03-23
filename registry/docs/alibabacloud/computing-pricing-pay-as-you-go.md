MaxCompute supports the pay-as-you-go billing method for SQL, MapReduce, Spark, Mars, MCQA, and MaxFrame jobs.

## **Billing introduction**

**Important**

If you have an overdue payment, your service may be suspended. You will receive a notification from the system. To avoid service interruptions, renew your subscription promptly.

MaxCompute supports various job types, such as SQL, MapReduce, Spark, Mars, MCQA, MaxFrame, Graph, and machine learning. You are charged for SQL (excluding user-defined functions (UDFs)), MapReduce, and Spark jobs. Billing for Mars jobs began on September 1, 2020, and for MCQA jobs on October 1, 2020. You are not charged for other types of computing jobs.

MaxCompute provides the following two billing methods for computing resources:

-   **Pay-as-you-go (post-paid)**
    
    You are charged for the resources consumed by a job after it completes successfully.
    
    The pay-as-you-go billing method is available for standard SQL jobs, SQL jobs that query external tables, MapReduce jobs, Spark jobs, Mars jobs, MCQA jobs, and MaxFrame jobs.
    
-   **Subscription (pre-paid)**
    
    You purchase a specific amount of resources in advance.
    

## Subscription

You can purchase a specific amount of resources in advance. MaxCompute reserves the resources that you purchase. The basic unit of computing resources is a Compute Unit (CU). One CU consists of 4 GB of memory and one CPU core. Subscription computing resources are used for jobs such as SQL, MapReduce, and Spark jobs.

**Resource definition**

**Memory**

**CPU**

**Price (USD per month)**

1 CU

4 GB

1 CPU

22.0

After you purchase subscription computing resources, you can use Resource Monitoring to monitor and manage the resources. For more information, see [Resource Monitoring](/help/en/maxcompute/user-guide/resource-observation).

We recommend that you select the pay-as-you-go billing method the first time you use MaxCompute. If you select the subscription billing method, you purchase a specific amount of computing resources. If you are a new user, you may consume fewer resources than the purchased resources. Some resources may remain idle. In this case, we recommend that you use the pay-as-you-go billing method. The pay-as-you-go billing method is more cost-effective because you are charged based on the amount of resources that you consume.

## Billing for standard SQL jobs

For each SQL job that you run, MaxCompute calculates the fee based on the **amount of input data scanned** and the **SQL complexity**.

-   Similar to storage, you are charged for SQL jobs based on the amount of compressed data.
    
-   MaxCompute aggregates the fees for all successful SQL jobs into a single bill, which is generated in your account before 06:00 the next day. The fees are then automatically deducted from your account balance.
    
-   You are not charged for failed SQL jobs.
    

### **SQL job billing formula**

```
Fee for an SQL job = Amount of input data for computing × SQL complexity × SQL price
```

-   **Amount of input data scanned**: The amount of data that an SQL job actually scans. Most SQL jobs support partition filtering and column pruning. Therefore, this value is usually much smaller than the size of the source table.
    
    -   **Partition filtering**: For example, if an SQL statement contains `WHERE ds > 20130101` and `ds` is a partition key column, you are charged only for the data in the partitions that are read. Data in other partitions is not billed.
        
    -   **Column pruning**: For example, if you run the SQL statement `SELECT f1,f2,f3 FROM t1;`, only the data in columns f1, f2, and f3 of table t1 is billed. Data in other columns is not billed.
        
-   **SQL complexity**: The complexity of an SQL job is calculated based on the keywords in the SQL statement. Details are as follows:
    
    -   Number of SQL keywords = Number of JOIN clauses + Number of GROUP BY clauses + Number of ORDER BY clauses + Number of DISTINCT clauses + Number of window functions + `MAX(Number of INSERT statements|Number of UPDATE statements|Number of DELETE statements - 1, 1)`.
        
    -   Calculation of SQL complexity:
        
        -   If the number of SQL keywords is less than or equal to 3, the complexity of an SQL job is 1.
            
        -   If the number of SQL keywords is less than or equal to 6 but greater than or equal to 4, the complexity of an SQL job is 1.5.
            
        -   If the number of SQL keywords is less than or equal to 19 but greater than or equal to 7, the complexity of an SQL job is 2.
            
        -   If the number of SQL keywords is greater than or equal to 20, the complexity of an SQL job is 4.
            
    -   Command format for calculating complexity:
        
        ```
        COST SQL <SQL Sentence>;
        ```
        
    
    For more information about keywords, see [JOIN](/help/en/maxcompute/user-guide/join#concept-cxf-rkb-wdb), [GROUP BY](/help/en/maxcompute/user-guide/select-syntax#section-akw-f5f-ggb), [ORDER BY](/help/en/maxcompute/user-guide/select-syntax#section-49m-ve3-2su), [Window functions](/help/en/maxcompute/user-guide/window-functions-1/#concept-nyb-ftl-vdb), [INSERT](/help/en/maxcompute/user-guide/insert-or-update-data-into-a-table-or-a-static-partition#concept-yzd-ndb-wdb), and [UPDATE|DELETE](/help/en/maxcompute/user-guide/update-and-delete#concept-2043562).
    

### **Unit price for standard SQL billing**

-   USD 0.0438 per GB
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.05256 per GB.
    

### **Calculation example**

```
odps@ $odps_project >COST SQL SELECT DISTINCT total1 FROM
(SELECT id1, COUNT(f1) AS total1 FROM in1 GROUP BY id1) tmp1
ORDER BY total1 DESC LIMIT 100;
Intput:1825361100.8 Bytes
Complexity:1.5
```

In this example, the number of SQL keywords is four (1 for DISTINCT + 1 for GROUP BY + 1 for ORDER BY + MAX(0-1, 1)). The SQL complexity is 1.5, and the data volume is approximately 1.7 GB. Therefore, the actual cost is: `1.7 × 1.5 × 0.0438 = 0.11 USD`.

## Billing for SQL jobs that reference external tables

Since March 2019, you are charged for MaxCompute SQL jobs that reference external tables based on the pay-as-you-go billing method.

-   The SQL complexity factor is 1.
    
-   When a job queries both internal and external tables, the system calculates charges for each table type separately.
    
-   You cannot estimate the fees for SQL jobs that reference external tables.
    
-   All metering information for a day is aggregated into a single charge and added to your account bill on the following day. The bill is generated before 06:00.
    

### **Billing formula for SQL external tables**

```
Cost per SQL query = Input data volume × SQL price
```

### **Unit price for SQL external tables**

-   USD 0.0044 per GB
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.00528 per GB.
    

## Pay-as-you-go billing for MapReduce jobs

MaxCompute began charging for MapReduce jobs on a pay-as-you-go basis on December 19, 2017. After a MapReduce job completes successfully, the system calculates the billable hours that the job consumed.

-   MaxCompute aggregates the fees for all successful MapReduce jobs into a single bill, which is generated in your account before 06:00 the next day. The fees are then automatically deducted from your account balance.
    
-   You are not charged for the time that a job spends in a queue.
    
-   You are not charged for failed MapReduce jobs.
    
-   If you have a MaxCompute subscription, you can run MapReduce jobs at no extra cost within your purchased resource quota.
    

### **MapReduce job billing formula**

```
Fee for MapReduce jobs of the day = Total billable hours of the day × Unit price (USD)
```

-   The formula for calculating the billable hours of a MapReduce job is:
    
    ```
    Billable hours of a successful MapReduce job = Job runtime (in hours) × Number of cores called by the job.
    ```
    
    For example, if a MapReduce job uses 100 cores and runs for 0.5 hours, the billable hours are `100 cores × 0.5 hours = 50`.
    

### **MapReduce job unit price**

-   USD 0.0690 per billable hour
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.0828 per billable hour.
    

## Pay-as-you-go billing for Spark jobs

MaxCompute began charging for Spark jobs on a pay-as-you-go basis on February 1, 2019. For more information, see [MaxCompute Spark](/help/en/maxcompute/overview-10#concept-jzp-wlb-kgb).

After a Spark job completes successfully, the system calculates the billable hours that the job consumed.

-   MaxCompute aggregates the fees for all successful Spark jobs into a single bill, which is generated in your account before 06:00 the next day. The fees are then automatically deducted from your account balance.
    
-   You are not charged for the time that a job spends in a queue.
    
-   The fee for similar jobs may vary based on the amount of specified resources.
    
-   If you have a MaxCompute subscription, you can run Spark jobs at no extra cost within your purchased resource quota.
    

### **Spark job billing formula**

```
Fee for Spark jobs of the day = Number of billable hours × Unit price (USD 0.1041 per hour)
```

**The billable hours of a Spark job are calculated as follows**:

```
Number of billable hours of a Spark job = MAX[Number of CPU cores × Number of hours for which a job runs, ROUND UP(Memory size × Number of hours for which a job runs/4)]
```

The calculation is based on the number of CPU cores consumed, the runtime, and the memory usage.

For example, if a Spark job uses 2 CPU cores and 5 GB of memory and runs for 1 hour, the billable hours are `MAX(2 × 1, CEILING(5 × 1 / 4)) = 2`. If a Spark job uses 2 CPU cores and 10 GB of memory and runs for 1 hour, the billable hours are `MAX(2 × 1, CEILING(10 × 1 / 4)) = 3`.

### **Spark unit price**

-   USD 0.1041 per billable hour
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.12492 per billable hour.
    

## Pay-as-you-go billing for Mars jobs

MaxCompute began charging for Mars jobs on a pay-as-you-go basis on September 1, 2020. For more information, see [Data science (Mars)](/help/en/maxcompute/overview-29#concept-2502322).

After a Mars job completes successfully, the system calculates the billable hours that the job consumed. MaxCompute aggregates the fees for all successful Mars jobs into a single bill, which is generated in your account before 06:00 the next day. The fees are then automatically deducted from your account balance.

-   You are not charged for the time that a job spends in a queue.
    
-   The fee for similar jobs may vary based on the amount of specified resources.
    
-   If you have a MaxCompute subscription, you can run Mars jobs at no extra cost within your purchased resource quota.
    

### **Mars job billing formula**

```
Fee for Mars jobs of the day = Number of billable hours × Unit price (USD 0.1041 per hour)
```

**Billable hours for Mars jobs are calculated as follows:**

```
Billable hours of a Mars job = MAX(CPU × Duration, CEILING(Memory × Duration / 4))
```

The calculation is based on the number of CPU cores consumed, the runtime, and the memory usage.

For example, if a Mars job uses 2 CPU cores and 5 GB of memory and runs for 1 hour, the billable hours are `MAX(2 × 1, CEILING(5 × 1 / 4)) = 2`. If a Mars job uses 2 CPU cores and 10 GB of memory and runs for 1 hour, the billable hours are `MAX(2 × 1, CEILING(10 × 1 / 4)) = 3`.

### **Data science (Mars) unit price**

-   USD 0.1041/billable hour
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.12492 per billable hour.
    

## Pay-as-you-go billing for MCQA jobs

MaxCompute began charging for MCQA jobs on a pay-as-you-go basis on October 1, 2020. For more information, see [Query acceleration (MCQA)](/help/en/maxcompute/user-guide/maxcompute-query-acceleration#concept-1937794).

For each MCQA job that you run, MaxCompute calculates the fee based on the amount of input data. MaxCompute aggregates the fees for all MCQA jobs, and the bill is generated before 06:00 the next day.

**Important**

The pay-as-you-go billing method for MCQA jobs is available in the China (Hong Kong), Singapore, Indonesia (Jakarta), and Malaysia (Kuala Lumpur) regions. This feature is in public preview. Support for other regions will be added later.

-   By default, MaxCompute uses columnar storage and data compression. MaxCompute calculates the amount of scanned data based on the compressed data size.
    
-   You are not charged for canceled query acceleration jobs.
    
-   You are not charged if no queries are run.
    
-   When you query a partitioned table, you can apply partition filtering conditions to reduce the amount of scanned data and improve query performance.
    
-   If you have purchased subscription resources, you can allocate a portion of the quota resources for the exclusive use of MCQA jobs. If you use only the pay-as-you-go billing method, the fee for an MCQA job is calculated in the same way as a standard SQL job.
    

### **MCQA job billing formula**

```
Fee for an MCQA job = Amount of input data × SQL complexity × Unit price
```

### **MCQA job unit price**

-   USD 0.0438 per GB
    
-   The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price is USD 0.05256 per GB.
    

## **Pay-as-you-go billing for MaxFrame jobs**

After a MaxFrame job is complete, the system calculates the CU-hours consumed by the job. Before 06:00 the next day, MaxCompute aggregates the fees for all MaxFrame jobs into a single bill in your account, and the fees are automatically deducted from your account balance.

If you have a MaxCompute subscription, you can run MaxFrame jobs at no extra cost within your purchased resource quota.

**Important**

The pay-as-you-go billing method for MaxFrame jobs is available in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and China East 1 Finance Cloud.

### **MaxFrame job billing formula**

```
Fee for MaxFrame jobs of the day = Number of billable hours × Unit price
```

### **MaxFrame job unit price**

Standard MaxFrame job (a MaxFrame job that uses the pay-as-you-go Standard Edition computing quota)

-   USD 0.0541 per billable hour
    
-   The SAU (Riyadh - Partner Region) is operated by a partner and has a unit price of 0.06496 USD/GB.
    

## **References**

-   To understand your cost distribution, prevent unexpected charges, maximize resource utilization, and reduce costs, you can analyze your MaxCompute bills. For more information, see [Analyze MaxCompute billing usage records](/help/en/maxcompute/use-cases/analyze-the-usage-records-of-maxcompute-bills).
    
-   Fees are incurred when you use MaxCompute for development. If daily consumption is stable most of the time but the fees surge in a specific period, you can perform a cost analysis to identify the projects and jobs that cause the surges, except for surges due to business growth. Then, you can optimize and adjust the jobs as soon as possible to optimize costs. For more information, see [Troubleshoot sudden spikes in MaxCompute pay-as-you-go costs](/help/en/maxcompute/use-cases/troubleshoot-unexpected-cost-surges-of-pay-as-you-go-maxcompute-services).
