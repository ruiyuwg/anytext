Dear Alibaba Cloud customer,

To improve your experience of managing your bills and expenses, Alibaba Cloud has upgraded the **Expenses and Costs** console.

You can log in to the [**Expenses and Costs**](https://usercenter2-intl.console.alibabacloud.com/home) console to see which version you are using (new or legacy). You can switch between versions by clicking **Return to Previous Version** or **Try New Version** in the lower-left corner.

## New console

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8615046671/p1029021.png)

## Legacy console

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8615046671/p1029024.png)

### Key changes in the new console

The new console's navigation menu and features have been updated, but this does not affect your current API usage. For a detailed overview of its capabilities, see [Expenses and Costs overview](/help/en/user-center/product-overview/billings-and-costs-product-introduction/).

**Module**

**Feature**

**Description**

Enterprise Organization

\-

-   This is a new feature that provides hierarchical management for multiple accounts within an enterprise.
    
-   An administrator account can centrally manage funds, orders, bills, invoices, and benefits for its member accounts.
    

Account (New module)

Each user account is linked to a billing account for financial settlement by default.

Account sharing

-   This new feature is designed for enterprise financial scenarios and lets an administrator account query multiple accounts, transfer funds between accounts, allocate credit limits, and share assets such as coupons and Savings Plans.
    
-   For details, see [Account Sharing overview](/help/en/user-center/account-sharing-overview).
    

Billing account

-   Supports management functions like querying asset quotas and payment relationships.
    
-   Queries for income and expenditure details, monthly summaries, and account payment relationships have been added.
    
-   For details, see [What is a billing account?](/help/en/user-center/fund-account-overview)
    

Coupons

-   The coupon management menu has been relocated from the legacy console.
    
-   Query your coupons.
    

Savings plan

-   Provides queries, usage analysis, and purchase recommendations for savings plans.
    
-   Supports savings plan queries for multiple accounts within an Enterprise Organization.
    

Resource packages

-   Query and manage resource packages. Supports querying the list of regions where a resource package can be applied.
    
-   Supports resource package queries for multiple accounts within an Enterprise Organization.
    

Expenses

Subscription Orders

-   Query order records and manage resource renewals and unsubscriptions.
    
-   Supports order queries for multiple accounts within an Enterprise Organization.
    

Bills

-   Query and download monthly bills and detailed consumption records.
    
-   High-expenditure alerts have been added, which you can configure by product.
    

Invoices

Query and download invoices.

Contracts

Query and manage contract-based discounts.

Costs

Cost analysis

-   Provides cost analysis across multiple dimensions based on detailed cost data.
    
-   Multi-account cost analysis for accounts within an Enterprise Organization has been added.
    

Budget management

-   Lets you set budgets and perform plan-versus-actual analysis with alerts.
    
-   Multi-account budgeting for accounts within an Enterprise Organization has been added.
    

Cost monitoring

-   Provides cost alerts.
    
-   Supports alerts for high expenditures, available funds, budget progress, and resource plan usage.
    
-   An Anomaly Detection feature has also been added, which uses algorithms to identify unusual cost fluctuations, enabling automatic monitoring, detection, and alerting for abnormal costs.
    

Cost allocation

-   Lets you allocate resource costs to Cost Centers based on business or project needs.
    
-   Support has been added for configuring multi-account allocation rules and querying allocation details for accounts within an Enterprise Organization.
    

Data export

Export details

Query your export history and download exported files, including detailed bills and cost reports.

In the new console, several bill fields have been adjusted and new capabilities have been added. See below for details:

**Billing feature adjustments**

**Key billing adjustments**

**Description**

Query and export bills from an enterprise management perspective

-   Legacy console: You could only query and export bills for a single account.
    
-   New console: You can now view and export bills for your entire enterprise or for specific accounts within it.
    

Bill field adjustments

-   **Removed fields**: The following fields have been removed: Consumption Type, Cost Center, Resource Plan Deduction, Overdue Payment, Deduction Amount (including RI), Product Discount, Combined Discount, Billing Number, Business Type, and Credit Refund Deduction.
    
-   **New fields**: The following fields have been added: List Price Type, Savings Plan Instance ID, Savings Plan Deduction from List Price, Discount Subject, Primary Key, Deducted Amount by Coupons, and Bill Type.
    
-   **Renamed fields**:
    
    **Legacy console field**
    
    **New console** **field**
    
    Product Detail
    
    Product Name
    
    Service Duration
    
    Billing Month
    
    Pretax Gross Amount
    
    Catalogue Gross Amount
    
    Invoice Discount
    
    Deducted by Coupon
    
    Amount After Discount
    
    Amount After Price Reduction
    
    Spn Discount Amount
    
    Catalogue Gross Amount Deducted by Savings Plan
    
    Owner Account Name
    
    Resource Owner Account
    
    Account Name
    
    Resource Purchase Account ID
    
    Internet IP
    
    Public IP Address
    
    Intranet IP
    
    Private IP Address
    
    Item
    
    Billable Item
    
    Deducted By Resource Package
    
    Deducted Amount by Resource Plan
    
    **Note:** The above field adjustments will take effect consistently across all billing reports, including those viewed and exported from the console.
    

Removal of statistical bill reports

-   On the legacy console's **Bills** \> **Bill Details** page, the **Billing Statement** has been removed.
    
-   On the legacy console's **Bills** \> **Bill Details** \> **Billing Details** page, reports that used **Account**, **Product**, or **Cost Center** as the **Statistic Item** have been removed.
    
-   On the legacy console's **Bills** \> **Overview of Monthly Bill** page, the **Consumption Trend** **and** **Consumption Distribution by Product** report has been removed.
    

Addition of new statistical bill reports

-   In the new console, go to **Billing** \> **Bills** \> **Bills** and navigate to the **Overview of Monthly Bill** page to access the following new reporting capabilities:
    
    -   **Enhanced statistical bill reports**: View detailed breakdowns of your spending by:
        
        -   Organization (Enterprise Organization hierarchy)
            
        -   Resource Purchase Account
            
        -   Product
            
        -   Service Entity
            
        -   Discount Application Status (for example, whether a discount was applied)
            
    -   **Detailed repayment records**: On the same page, you can view your total **paid amount**. To see payment-level details:
        
        1.  Click **View Details**.
            
        2.  Click the values under **Deducted Amount by Coupons** or **Payment Amount** (cash payment).
            
        3.  A detailed transaction record will appear, including:
            
            -   Repayment channel (such as cash or prepaid card)
                
            -   Repayment time
                
            -   Repayment amount
                
    
    These reports replace legacy statistical views (such as **Consumption Distribution by Product**) and provide more granular, multi-account, and enterprise-ready insights.
    

New unified settlement capability

Unified settlement lets you create customized settlement tasks for accounts, products, and bill types. This simplifies the settlement process and avoids the need for separate remittances from multiple accounts. For details, see [Unified settlement.](/help/en/user-center/unified-settlement)
