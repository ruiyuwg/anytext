Go to **Expenses and Costs** to view your bills and check the bill details for your PolarDB cluster across different billing cycles and accounts.

## **How to view**

-   Go to the **[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** > **Billing Management** > **Bill Details** page and search for bills using the filter options.
    

**Note**

-   You can search for bills only within a single calendar month. You cannot select a time range that spans multiple calendar months. For example, you cannot select a period from January 10, 2022 to February 10, 2022.
    
-   For more information about the **Bill Details** page, see or [Detailed Bills](/help/en/user-center/bill-details-2#04bbee80670z0).
    

## **Bill Details**

The Bill Details page contains many fields. The following table describes some of these fields.

**Field**

**Description**

Usage

The usage of a billable item.

**Note**

-   To verify usage, refer to the usage in the billing item details.
    
-   If your statistical period is by month or day, the usage is the sum of detailed usage. This value is for reference only and cannot be used for reconciliation.
    

List Price

The original consumption amount calculated from the list price. For the unit, see the **Price Unit** field.

**Example**:

The following example shows the monthly records for some billable items on the **Billing Details** > ****Detailed Bills**** page, where Statistic Item is set to **Billable Item**, Statistic Period is set to **Billing Cycle**, and Product is set to **PolarDB**.

**No.**

**Product Details**

**Billing Item**

**Unit Price (USD)**

**Unit Price Unit**

**Usage**

**Usage Unit**

**List Price (USD)**

1

ApsaraDB PolarDB-Pay-As-You-Go

Node specifications

0.207

USD/Hour

134

Item

27.738

2

ApsaraDB PolarDB-Pay-As-You-Go

Storage space

0.000748

USD/GB

234.6041

GB

0.18

3

PolarDB Cold Data Storage

Cold data storage

0.0000455

USD/GB

31.2297

GB

0.001

4

PolarDB Backup

Level-1 backup

0.000464

USD/GB/Hour

68.95116

GB/Hour 

0.032

5

PolarDB Backup

Level-2 backup

0.0000325

USD/GB

2992

GB

0.097

The monthly records show the following:

-   For example, in row 2, the storage space usage is 234.6041 GB. This value represents the total storage space usage of a PolarDB cluster for the current month.
    
-   You can find the unit price of each billable item in [Billable items](/help/en/polardb/polardb-for-mysql/billing-item/).
    
-   The formula for the list price is Usage × Unit Price.
    

**Note**

The data in the preceding example is for reference only. The actual product prices prevail.
