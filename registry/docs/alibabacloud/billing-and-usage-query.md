When multiple sampling tasks report metrics across instances and regions, tracking which jobs drive consumption becomes difficult without a centralized view. Managed Service for Prometheus records resource consumption at the job level. Each metric is broken down by type (basic or custom) and billing model (reporting volume in points or writing volume in bytes). Use the **Usage Statistics** page in the ARMS console to monitor consumption patterns, identify cost drivers, and decide which metrics to keep or discard.

## Billing model overview

Managed Service for Prometheus measures usage in two dimensions. Understanding these dimensions helps you interpret the metrics on the **Usage Statistics** page and connect them to your bill.

**Dimension**

**Unit**

**What it measures**

**Billing**

**Reporting volume**

Points

Number of data points reported per sampling task per collection interval

Custom metrics are billed; basic metrics are free

**Writing volume**

Bytes

Size of data written per sampling task

Custom metrics are billed; basic metrics are free

> **Note:** Basic metrics are included in the free tier. Only custom metrics incur charges, based on reporting volume (points) or writing volume (bytes).

## View usage statistics

1.  Log on to the [ARMS console](https://arms-intl.console.aliyun.com/).
    
2.  In the left-side navigation pane, choose **Managed Service for Prometheus** > **Usage Statistics**.
    
3.  In the upper-right corner, set the time range for the data you want to review.
    

![Usage Statistics page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0743970471/p920915.jpg)

## Query usage metrics programmatically

To meet custom statistical requirements, starting November 25, 2024, you can use Managed Service for Prometheus to create Simple Log Service Metricstores for Prometheus usage data. Query this Metricstore to build dashboards or set up alerts on usage trends.

### Metricstore settings

**Setting**

**Value**

**Project**

`aliyun-product-data-{userId}-cn-shanghai`

**Metricstore**

`prom_finance_aggr`

Replace `{userId}` with your Alibaba Cloud account ID.

### Data retention and billing

**Item**

**Details**

**Retention**

180 days

**Free tier**

Storage capacity, indexing, read/write traffic, and read/write operations

**Additional charges**

Other Simple Log Service features may [incur fees](/help/en/sls/billing-overview)

### Available metrics

Each metric captures usage at the job level. Metrics are grouped by billing model.

**Reporting volume (points)**

**Metric**

**Description**

`prom_points_job_total_cost`

Reporting volume of custom metrics at the job level (points)

`prom_points_job_total_free`

Reporting volume of basic metrics at the job level (points)

**Writing volume (bytes)**

**Metric**

**Description**

`prom_serverless_job_amount_cost`

Writing volume of custom metrics at the job level (bytes)

`prom_serverless_job_amount_free`

Writing volume of basic metrics at the job level (bytes)

`prom_serverless_archive_amount`

Metrics billed by writing volume that enter archival storage (bytes)

### Tags for filtering and aggregation

Filter and aggregate usage data by the following tags:

**Tag**

**Description**

`instanceId`

Managed Service for Prometheus instance ID

`instanceName`

Managed Service for Prometheus instance name

`regionId`

Region where the instance is deployed

`job`

Sampling task name

`userId`

Alibaba Cloud account ID

## Reduce costs based on usage data

After you identify which sampling tasks or custom metrics drive consumption, take action to control costs:

-   **Discard unused metrics**: To stop collecting metrics that are no longer needed and eliminate the associated charges, [discard them](/help/en/arms/prometheus-monitoring/configure-metrics#08586c8a98d9j). Discarded metrics are not billed.
    
-   **Re-enable metrics**: To resume monitoring discarded metrics, [enable them](/help/en/arms/prometheus-monitoring/configure-metrics#section-eks-hah-8cs) again. Standard billing applies once a metric is re-enabled.
