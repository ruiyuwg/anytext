The new version of Cost Manager stores data in Tablestore to ensure data accuracy and real-time performance. The new version of Cost Manager automatically updates full data every day. This topic describes how to use the new version of Cost Manager.

## **Benefits**[**​**](https://sls.aliyun.com/doc/billandsecurity/costmanagerintro.html#%E5%8A%9F%E8%83%BD%E4%BC%98%E5%8A%BF)

-   Cost optimization: Cost Manager provides statistics of bills of each pay-as-you-go Alibaba Cloud service and the estimated fees for using the subscription billing method for the same resources of the services.
    
-   Automatic and real-time transfer of bills: After you configure the Cost Manager application, bills can be always automatically transferred.
    
-   Interactive quick analysis: Cost Manager supports interactive analysis based on custom SQL statements and returns analysis results within seconds.
    
-   Artificial intelligence: Machine learning facilitates bill analysis, forecasts cost trends, and detects potential exceptions.
    
-   Automatic reporting and alerting: Cost Manager sends analysis reports to DingTalk and emails at regular intervals. Machine learning algorithms are used to intelligently forecast cost trends, detect bill exceptions, and automatically generate alerts for the exceptions.
    
-   Open interface: Cost Manager integrates with more than 30 data analysis services, such as Hadoop, Spark, and Flink.
    

## Entry point

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Log Application** section, click the **Business Analysis** tab. Then, click **Cost Manager**.
    
3.  Click **Custom Analysis**.
    

## Syntax description

### Basic syntax

The dedicated Tablestore table of the new version of Cost Manager is associated with the dedicated Logstore of Cost Manager as an external table. You can query billing data only by using the external table.

-   Search statement: You can specify only an asterisk (\*) before the vertical bar (|).
    
-   Analytic statement: The name of the external table is fixed as instance\_bill. You must specify all query conditions in a WHERE clause. Example:
    

```
* | select xxx from instance_bill where xxx group by xxx limit xxx
```

The following query statement is executed to query the daily expenses of Simple Log Service:

```
* |
select
  date_trunc('day', __time__) as day,
  sum(PretaxAmount) as cost
FROM  instance_bill
where
  productcode = 'sls'
group by
  day
```

### Example 1: Query aggregated data

The following query statement is executed to obtain the total expenses of Simple Log Service:

-   Query statement
    
    ```
    * |
    select
      sum(PretaxAmount) as cost
    FROM  instance_bill
    where
      productcode = 'sls'
    ```
    
-   Query and analysis results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0868590961/p606162.png)
    

### Example 2: Query data by group

The following query statement is executed to obtain the expenses of each service:

-   Query statement
    
    ```
    * |
    select
      productcode,
      sum(PretaxAmount) as cost
    FROM  instance_bill
    group by
      productcode
    ```
    
-   Query and analysis results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0868590961/p606165.png)
    

### Example 3: Perform comparative analysis

The following query statement is executed to compare the expenses of the current month with the expenses of the previous month:

-   Query statement
    
    ```
    * |
    SELECT
      diff [1] AS "Expenses of this month",
      diff [2] AS "Expenses of the previous month",
      diff [3] * 100 -100 as "Increased by (%)"
    FROM (
        SELECT
          compare(amount, 2592000) as diff
        FROM (
            SELECT
              sum(PretaxAmount) AS amount
            FROM instance_bill
          )
      )
    ```
    
-   Query and analysis results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9768590961/p606163.png)
    

### Example 4: Analyze data by billable item in a service

The following query statement is executed to query the expenses and usage of each billable item in Simple Log Service:

-   Query statement
    
    ```
    * |
    SELECT
      BillingItem,
      sum(PretaxAmount) AS "Expense",
      sum(Usage) as "Usage"
    FROM  instance_bill
    where
      productcode = 'sls'
    GROUP by
      BillingItem
    ```
    
-   Query and analysis results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0868590961/p606160.png)
    

### **Example 5:** Query the usage trend of billable items by day

The following query statement is executed to query the usage trend of billable items by day:

-   Query statement
    
    ```
    * |
    SELECT
    	date_trunc('day', __time__) as t,
      BillingItem,
      sum(PretaxAmount) AS "Expense",
      sum(Usage) as "Usage"
    FROM  instance_bill
    where
      productcode = 'sls'
    GROUP by
      BillingItem,
      t
    ORDER by
      t
    ```
    
-   Query and analysis results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6544443471/p935856.png)
    

### Example 6: Analyze data by instance in a service

The following query statement is executed to query the expenses of each instance in Simple Log Service:

-   Query statement
    
    ```
    * |
    SELECT
      InstanceID,
      sum(PretaxAmount) AS "Expense"
    FROM  instance_bill
    where
      productcode = 'sls'
    GROUP by
      InstanceID
    ```
    
-   Query and analysis results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0868590961/p606158.png)
    

### Example 7: Query the expense trend of service instances by day

The following query statement is executed to query the expense trend of service instances by day:

-   Query statement
    
    ```
    * |
    SELECT
      date_trunc('day', __time__) as t,
      InstanceID,
      sum(PretaxAmount) AS "Expense"
    FROM  instance_bill
    where
      productcode = 'sls'
    GROUP by
      InstanceID,
      t
    ORDER by
      t
    ```
    
-   Query and analysis results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6544443471/p935877.png)
    

### Example 8: Use the JOIN clause and an external table to query data

The following query statement is executed to query billing data by joining the instance\_bill table with a custom external table.

In this example, a custom external table named instance\_name\_table is used. The custom table is used to map the instanceName field to the data in the instance\_bill table based on the instanceID field.

-   Query statement
    
    ```
    * | with t1 as (
      select
        InstanceID,
        sum(PretaxAmount) as PretaxAmount
      FROM    instance_bill
    ),
    t2 as (
      select
        InstanceID,
        InstanceName
      FROM    instance_name_table
    )
    select
      t1.InstanceID,
      t1.PretaxAmount,
      t2.InstanceName
    FROM  t1
      left join t2 on t1.InstanceID = t2.InstanceID
    ```
    

## Fields in billing data

**Field**

**Description**

**Example**

BillingDate

The billing cycle.

2022-11-06

BillingItem

The billable item.

Number of requests, including PUT requests

BillingType

The billing method.

Others

CostUnit

The cost unit.

Not Allocated

Currency

The currency.

CNY

DeductedByCashCoupons

The fee that is offset by using coupons.

0.0

DeductedByCoupons

The fee that is offset by using vouchers.

0.0

DeductedByPrepaidCard

The fee that is offset by using stored-value cards.

0.0

DeductedByResourcePackage

The fee that is offset by using resource plans.

0

InstanceConfig

The configuration of the instance.

None

InstanceID

The ID of the instance.

me-east-1%3Bstandard

InstanceSpec

The specifications of the instance.

None

InternetIP

The public IP address.

None

IntranetIP

The internal IP address.

None

InvoiceDiscount

The discount amount.

0.001

Item

The type of the bill. Valid values:

-   SubscriptionOrder: a subscription bill
    
-   PayAsYouGoBill: a pay-as-you-go bill
    
-   Refund: a refund bill
    
-   Adjustment: an account adjustment bill
    

PayAsYouGoBill

ListPrice

The unit price.

1.020000

ListPriceUnit

The unit.

USD per 10,000 requests

NickName

The alias of the instance.

test

OutstandingAmount

The unsettled amount.

0.0

OwnerID

The ID of the account.

12\*\*\*3212

PaymentAmount

The fee that is paid in cash.

0.0

PretaxAmount

The payable amount.

0.0

PretaxGrossAmount

The original price.

0.005

ProductCode

The service code.

oss

ProductDetail

The service details.

OSS

ProductName

The service name.

Object Storage Service

ProductType

The service type.

None

Region

The region.

China (Shanghai)

ResourceGroup

The resource group.

None

ServicePeriod

The validity period.

10800

SubscriptionType

The billing method. Valid values:

-   Subscription: the subscription billing method
    
-   PayAsYouGo: the pay-as-you-go billing method
    

PayAsYouGo

Tag

The tag.

None

Usage

The usage.

0.005000

UsageUnit

The usage unit.

10,000 requests

Zone

The zone.

cn-shanghai-b

## **What to do next**

After a query succeeds, you can view the data in charts on dashboards based on the query and analysis results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard).
