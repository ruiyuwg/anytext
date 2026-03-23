You can manually export bills from the console or use the subscription feature to automatically push billing data to OSS or MaxCompute.

## Manual export vs. automatic subscription

The following table compares manual export and bill subscription.

**Comparison dimension**

[Manual export](#6e30dcae70gob)

[Automatic subscription](#542adfb84djtz)

**Scenarios**

One-time queries and downloads for temporary reconciliation or archiving

Periodic automated data retrieval for data lake construction, big data analytics, or automated reporting

**Timeliness**

Immediate operation to retrieve current or historical data

Automatically pushed on a preset schedule (daily/monthly)

**Data format**

PDF, CSV

CSV (.zip compressed), MaxCompute tables

**Automation level**

Requires logging into the console to perform manual operations

One-time configuration for continuous automatic execution

**Cost**

Free

Subscribing to OSS or MaxCompute incurs storage and compute fees

## Manual export

Manual export is suitable for retrieving billing data for a specific time range. You can export bills for one or multiple months.

### **Export monthly bill summary**

## Legacy Console

On the **[Monthly Bill Overview](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview)** page, click **Export Bill File** in the upper-right corner to open the export dialog box:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048363.png)

1.  Select **Export Account Content**:
    
    -   **Selected Accounts**: Exports billing data only for accounts selected on the **Monthly Bill Overview** page.
        
    -   **All Accounts**: Exports billing data for all accounts you have permission to view (merged into one file).
        
2.  Select the **Billing Cycle** to export.
    
3.  Select **Export Content**:
    
    -   **Monthly Bill Overview CSV**: Settlement billing data aggregated by billing month. The current month's bill becomes available after 12:00 on the 3rd of the following month.
        
    -   **Product Consumption Summary CSV**: CSV format with consumption details aggregated by account, product, and other dimensions.
        
    -   **Monthly Summary Bill**: PDF format suitable for financial settlement. The current month's bill becomes available after 12:00 on the 3rd of the following month.
        
4.  Click **OK**. The system starts generating the file.
    
5.  After the file is generated, go to the **[Export Records](https://usercenter2-intl.console.alibabacloud.com/finance/export-record)** page to download it.
    

## New Console

On the [](https://usercenter2-intl.console.alibabacloud.com/finance/month-bill/account)[**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account) page, click **Export Bill** in the upper-right corner to open the export dialog box:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048357.png)

1.  Select **Export Data by Scope**:
    
    -   **Selected Accounts**: Exports billing data only for accounts selected on the **Bill Overview** page.
        
    -   **All**: Exports billing data for all accounts you have permission to view (merged into one file).
        
2.  Select **Export Type**:
    
    -   **Monthly Bill PDF**: PDF format, suitable for financial settlement . The current month's bill becomes available after 12:00 on the 3rd of the following month.
        
    -   **Cost Summary in CSV**: CSV format with consumption details aggregated by account, product, and other dimensions.
        
3.  Click **OK**. The system starts generating the file.
    
4.  After the file is generated, go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/export-record)[**Export Record**](https://billing-cost.console.alibabacloud.com/finance/export-record) page to download it.
    

If you are using the new Expenses and Costs console, you can select **By Resource Purchase Account**, **By Product**, **By Organization**, or **By Service Entity** below the current page, then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1035860.png) button in the upper-right corner of the summary table to export monthly bills aggregated by different dimensions.

**Note**

Reports exported by **By Product**, **By Organization**, or **By Service Entity** include only aggregated data within the enterprise/organization/account scope set at the top of the page and do not contain specific account information.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048437.png)

After the file is generated, go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/export-record)[**Export Record**](https://billing-cost.console.alibabacloud.com/finance/export-record) page to download it.

### Export consumption details

## Legacy Console

Consumption details include granular data such as resource instances, billing items, usage, and payable amounts. This data forms the basis for cost analysis. On the **[Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2026-01&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY)** page, click the **Export Bill CSV** button in the upper-right corner to open the export dialog box:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048520.png)

1.  Select **Export Content**:
    
    -   **Selected Items**: Exports only the billing data filtered in the export list on the ******[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)** page.
        
    -   **All Content**: Exports billing data for all accounts you have permission to view for the selected billing cycle (merged into one file).
        
2.  If you select **All Content** for **Export Content**, select the **Billing Cycle** to export.
    
3.  Optionally, check **Include Payable Amount = 0**.
    
4.  Click **OK**. The system starts generating the file.
    
5.  After the file is generated, go to the [**Export Records**](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page to download it.
    

## New Console

Consumption details include granular data such as resource instances, billing items, usage, and payable amounts. This data forms the basis for cost analysis. On the ******[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1035860.png) icon in the upper-right corner to open the export dialog box:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048460.png)

1.  Select **Exported Content**:
    
    -   **Current List**: Exports only the billing data filtered in the export list on the ******[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)** page.
        
    -   **All Items**: Exports billing data for all accounts you have permission to view for the selected billing cycle (merged into one file).
        
2.  If you select **All Items** for **Exported Content**, select the **Billing Month** to export.
    
3.  Optionally, check **Include Bills Whose Amount Payable Is 0**.
    
4.  Click **OK**. The system starts generating the file.
    
5.  After the file is generated, go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/export-record)[**Export Record**](https://billing-cost.console.alibabacloud.com/finance/export-record) page to download it.
    

### Export usage details

## Legacy Console

Usage details record specific usage metrics for cloud products, such as ECS runtime duration and OSS storage capacity. On the ********[Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/usage)******** page, click the **View Usage Details** tab in the upper-left corner to go to the **View Usage Details** page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048626.png)

1.  Set filters such as **Product**, **Metering Specification**, **Usage Time**, and **Metering Granularity**.
    
2.  Click **Export CSV**. The system starts generating the file.
    
3.  After the file is generated, go to the [**Export Records**](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page to download it.
    

## New Console

Usage details record specific usage metrics for cloud products, such as ECS runtime duration and OSS storage capacity. On the ******[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)** page, click **View Usage Details** to go to the **View Usage Details** page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048552.png)

1.  Set filters such as **Time Period**, **Commodity Name**, **Billable Item**, **Billable Item**, and time range.
    
2.  Click **Export CSV**. The system starts generating the file.
    
3.  After the file is generated, go to the [](https://usercenter2-intl.console.alibabacloud.com/finance/export-record)[**Export Record**](https://billing-cost.console.alibabacloud.com/finance/export-record) page to download it.
    

## Automatic subscription

Bill subscription enables periodic, automated delivery of data without manual intervention. Bill subscription supports two channels:

-   **OSS**: Automatically stores bill files in a specified OSS bucket for data archiving and programmatic processing.
    
-   **MaxCompute**: Imports bill data into MaxCompute for big data analytics. You can use DataWorks for visual queries. This option is suitable for big data analytics and BI integration.
    

## **Subscribe to OSS**

You can configure subscription tasks through the console or API. The following sections describe console and CLI subscription operations. For more information about API subscription, see [OpenAPI Explorer](https://next.api.alibabacloud.com/api/BssOpenApi/2017-12-14/SubscribeBillToOSS).

## Through the console

If you are using the new Expenses and Costs console, you can go to the [**Bill Subscription**](https://billing-cost.console.alibabacloud.com/finance/oss-bucket) page and click **Create Bill Subscription**, then select **OSS Subscription**.

#### **Procedure**

1.  If you are using OSS subscription for the first time, complete authorization by clicking **Go to Authorize**.
    
    On the **Cloud Resource Access Authorization** page, click **Agree to Authorization**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049787.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049788.png)
    
2.  Select the **Export File** type to subscribe to:
    
    -   **Monthly Bill PDF**: Official financial document aggregated by calendar month, used for settlement and reimbursement.
        
    -   **Billing Item Bill Details**: Most granular consumption data, including resource instances, billing items, usage, and payable amounts. This data forms the basis for cost analysis.
        
    -   **Split Bill Details**: Bills split by cost center and allocation rules for internal cost accounting.
        
    -   **Cost Details**: Aggregated cost composition for each cost center based on split bill details.
        
    -   **Standard Bill FOCUS**: Standardized bill data model with consistent fields for easy integration across clouds and systems.
        
    -   **Billing Item Detail Bill**: Detailed consumption records for each billing item, including usage, unit price, and payable amount.
        
    -   **Billing Item Bill Daily Summary**: Daily aggregation of consumption for each billing item, showing total daily costs.
        
    -   **Billing Item Bill Billing Cycle Summary**: Monthly aggregation of consumption for each billing item, showing total costs for the billing cycle.
        
    -   **Instance Detail Bill**: Detailed consumption records for each resource instance, including instance ID, billing item, usage, unit price, and total price.
        
    -   **Instance Bill Daily Summary**: Daily aggregation of consumption for each resource instance, showing total daily costs.
        
    -   **Instance Bill Billing Cycle Summary**: Monthly aggregation of consumption for each resource instance, showing total costs for the billing cycle.
        
    -   **Split Bill Daily Summary**: Daily aggregation of split bills, with costs allocated by cost center, tag, and other dimensions.
        
    
    **Note**
    
    -   If you have been invited to test the upgraded bill version, upgrade from legacy detail data to the new version as soon as possible.
        
    -   You can create only one bill subscription per **Export File** type. Already subscribed types are automatically grayed out and cannot be selected again.
        
    
3.  Set the **Start Billing Month**.
    
4.  Specify an existing OSS bucket name and set the destination storage path (the system automatically creates the path if it does not exist).
    
5.  Click **Create** to complete the task.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048643.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1048762.png)
    
6.  View subscription records on the [**Bill Subscription**](https://billing-cost.console.alibabacloud.com/finance/oss-bucket) page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049567.png)
    

#### **Push schedule**

**Bill type**

**Daily push (UTC+8)**

**Monthly final push (UTC+8)**

Billing item bill details

Full detail data up to the current day

Before 18:00 on the 3rd of the following month

Split bill details

Full detail data up to the current day

Before 18:00 on the 4th of the following month

Cost details

Full detail data up to the current day

Before 18:00 on the 4th of the following month

Standard bill FOCUS

Full detail data up to the current day

Before 18:00 on the 4th of the following month

Monthly bill PDF

Not supported

Before 18:00 on the 3rd of the following month

#### **File naming convention**

Monthly bill PDF files use the `.pdf` format. All other file types are `.csv` files. If the data volume is large, the system automatically splits a single export into multiple files.

**Subscription type**

**File naming convention**

**Directory structure**

**Example**

-   Bill detail data (new version)
    
-   Monthly bill PDF (new console)
    

`{Account_UID}_{Site_ID}_{Bill_Type}_{YYYYMM|YYYYMMDD}`

`{Specified_Directory}/{YYYYMM}/{YYYYMMDDHHMMSS}/`

`{Specified_Directory}/202602/20260203180000/5255031923727700_2688801000001_MonthBill_202602`

-   Bill detail data (legacy version)
    
-   Monthly bill PDF (legacy console)
    

`{Account_UID}_{Bill_Type}_{YYYYMM|YYYYMMDD}`

`{Specified_Directory}/`

`{Specified_Directory}/5255031923727700__MonthBill_202602`

**Note**

-   Files exported to OSS may be compressed into `.zip` format.
    
-   If the console does not distinguish between new and legacy detail data when you select **Export File**, the legacy naming convention applies.
    

## Through CLI

Create a bill subscription using the `SubscribeBillToOSS` API operation. For your first OSS subscription, grant the `AliyunConsumeDump2OSSRole` role to the subscription user. Use [one-click authorization](https://ram.console.alibabacloud.com/?spm=a2c63.p38356.0.0.492b6fa0RUWKKj#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D). If authorization is revoked, the system stops pushing files and you must re-authorize.

### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

SubscribeType

text

Yes

Subscription type:

-   **BillingItemDetailForBillingPeriod**: Billing item bill details
    
-   **InstanceDetailForBillingPeriod**: Instance bill details
    
-   **InstanceDetailMonthly**: Instance bill billing cycle summary
    
-   **BillingItemDetailMonthly**: Billing item bill billing cycle summary
    
-   **SplitItemDetailDaily**: Split bill daily summary
    
-   **MonthBill**: Monthly bill PDF
    

SubscribeBucket

Text

Yes

Name of an existing OSS bucket

BucketOwnerId

value

No

Bucket owner account ID (required for cross-account scenarios)

BucketPath

Text

No

Storage directory path (automatically created if it does not exist)

BeginBillingCycle

Text

No

Subscription start billing cycle in YYYY-MM format

MultAccountRelSubscribe

Text

No

Multi-account subscription scope, such as `China_ALL`

### **Subscription example**

Use the `aliyun CLI` to send a subscription request via the `SubscribeBillToOSS` API operation. For more information about the CLI, see [What is Alibaba Cloud CLI](/help/en/cli/what-is-alibaba-cloud-cli).

```
# Send subscription request
aliyun bssopenapi SubscribeBillToOSS --SubscribeType 'your-billing-type' --SubscribeBucket 'your-bucket-name' --BucketPath 'your-bucket-path'
# Successful response
{
    "Code": "Success",
    "Message": "Successful!",
    "RequestId": "55C79633-4F63-3839-8815-XXXXXXXXXX",
    "Success": true
}
```

### **Verify subscription success**

Use the `aliyun CLI` to query OSS subscription records via the `QueryBillToOSSSubscription` API operation.

```
# Send subscription query request
aliyun bssopenapi QueryBillToOSSSubscription --region 'your-region'
# Successful response
{
    "Code": "Success",
    "Data": {
        "AccountID": "XXXX",
        "AccountName": "XXXX",
        "Items": {
            "Item": [
                {
                    "BucketOwnerId": XXXX,
                    "BucketPath": "bill-data/",
                    "MultAccountRelSubscribe": "MA",
                    "SubscribeBucket": "XXXX",
                    "SubscribeLanguage": "en",
                    "SubscribeTime": "2026-01-27 16:42:49",
                    "SubscribeType": "BillingItemDetailForBillingPeriod"
                }
            ]
        }
    },
    "Message": "Successful!",
    "RequestId": "B1CCC55E-CD6F-3ABC-AABC-XXXXXXXX",
    "Success": true
}
```

### **Common error codes**

**Error code**

**Cause**

OssPermissionDenied

The Expenses and Costs service failed to access your OSS resources using the `**AliyunConsumeDump2OSSRole**` role. Resolve this by reapplying [one-click authorization](https://ram.console.alibabacloud.com/?spm=a2c63.p38356.0.0.492b6fa0RUWKKj#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D).

DuplicateSubscription

This bill type is already subscribed. No duplicate subscription is needed.

ExportFileToOSSFailed

The OSS bucket might not exist. Create it first.

**Note**

Storing bill files in OSS incurs storage fees charged by OSS based on file size and storage duration. To optimize costs, configure an OSS lifecycle rule to periodically clean up daily snapshot files and retain only the monthly final bills.

## Subscribe to MaxCompute

#### **Prerequisites**

-   You have been invited to test the **upgraded bill version**.
    
-   You have activated MaxCompute and DataWorks in the same region.
    
-   Subscription scope: Data generated after enabling the upgraded bill version, up to 12 months.
    

#### **Procedure**

If you are using the new Expenses and Costs console, you can go to the **Bill Subscription** page and click **Create Bill Subscription**, then select **MaxCompute**.

1.  If you are using MaxCompute subscription for the first time, activate MaxCompute and DataWorks and complete authorization.
    
    1.  Select a region and click **Activate Now**. Follow the prompts to complete activation.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049797.png)
        
    2.  After successful activation, the system checks the status. Click **Confirm**, then click **Go to Authorize** to complete authorization.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049798.png)
        
    3.  After authorization, click **Create**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049799.png)
        
    4.  The following message confirms successful activation.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049632.png)
        
    
    **Note**
    
    -   If you have already activated MaxCompute and DataWorks, ensure they are in the same region. Select the activated region to complete authorization.
        
    -   You can activate the big data analytics tool in only one region. For example, if China (Shanghai) is activated, you cannot subscribe to bill data in other regions.
        
    
2.  **Select Subscription Content**:
    
    -   **Billing item bill details**: Corresponds to the content on the ****[](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)****[**Bill Details**](https://billing-cost.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page.
        
    -   **Split bill details**: Corresponds to the content on the [](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill?BillingCycle=2025-11)[**Split Bill**](https://billing-cost.console.alibabacloud.com/finance/split-bill) page.
        
    -   **Cost details**: Corresponds to the [**Cost Details**](https://billing-cost.console.alibabacloud.com/finance/cost-detail)[](https://usercenter2-intl.console.alibabacloud.com/finance/cost-detail) page.
        
3.  Set the **Start Billing Month**.
    
4.  Click **Confirm Creation** to complete the task.
    
    -   After subscription, related bill data synchronizes to the specified MaxCompute table in the project space: bill\_{subscription\_account}.
        
    -   Full data up to the previous day pushes before 18:00 daily. The final monthly full data pushes again at 18:00 on the 3rd of the following month. Data is distinguished by partition name in the format ds=push\_month/version=push\_timestamp.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049616.png)
    
5.  View subscription records on the [**Bill Subscription**](https://billing-cost.console.alibabacloud.com/finance/oss-bucket) page. Click **View** to go to the DataWorks data analytics page and query or analyze subscribed bill data using SQL statements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9409869671/p1049620.png)
    

#### **Push schedule**

Full data up to the previous day pushes before 18:00 daily. The final monthly data pushes before 18:00 on the 3rd of the following month, distinguished by partition.

#### **MaxCompute table naming convention**

-   **Project space**: `bill_{Account_UID}`
    

**Bill type**

**MaxCompute table name**

Billing item bill details

billing\_item\_detail\_for\_billing\_period

Split bill details

split\_item\_detail\_for\_billing\_period

Cost details

cost\_item\_detail\_for\_billing\_period

**Note**

Subscribing to and analyzing bill data incurs the following fees:

-   **Storage fees** (charged by MaxCompute): Storing bill data in MaxCompute tables incurs storage fees. For details, see [Billable items and billing methods](/help/en/maxcompute/product-overview/overview-1/).
    
-   **Compute fees** (charged by MaxCompute): Executing SQL statements for data analytics incurs compute fees. For details, see [Billable items and billing methods](/help/en/maxcompute/product-overview/overview-1/).
    

## **FAQ**

#### **I created a bill subscription but did not receive files. What should I do?**

Follow these steps to troubleshoot:

1.  **Check authorization status**: Confirm that OSS or MaxCompute service authorization is valid.
    
2.  **Verify push schedule**: Check if the daily data push time (after 18:00 UTC+8) has passed.
    
3.  **Review destination configuration**: Confirm that the OSS bucket or MaxCompute project exists and has correct access policies.
    

## **References**

-   [View and analyze bills](/help/en/user-center/bill-view)
    
-   [Bill settlement and repayment](/help/en/user-center/bill-repayment-and-settlement-1)
    
-   [Understand unexpected charges](/help/en/user-center/bill-solution-troubleshooting-manual-for-common-consumer-bill-questions)
