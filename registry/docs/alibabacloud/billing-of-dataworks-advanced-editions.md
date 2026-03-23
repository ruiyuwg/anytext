DataWorks Standard Edition, Professional Edition, and Enterprise Edition are billed on a **subscription** basis. The fees for each edition vary. You can select and purchase an edition based on your business scenario. This topic describes the billing details of each DataWorks edition.

**Note**

For more information about all billable items of DataWorks, see [Overview](/help/en/dataworks/billing-overview).

## **Edition specifications and selection**

DataWorks offers four editions: Basic, Standard, Professional, and Enterprise. You can quickly select an edition based on your business needs.

**Edition**

**Recommended users**

**Recommended scenarios**

**Core differences**

**Basic Edition**

Students, individual developers, and startup teams

-   Proof of Concept (POC): Quickly verify the feasibility of data projects.
    
-   Develop non-critical, small-scale data applications.
    
-   Start data development practices at a low cost.
    

Provides capabilities such as data migration to the cloud, basic development and scheduling, and simple data governance to meet requirements for quick verification and lightweight data processing.

**Standard Edition**

Small enterprises, production service assurance departments, and pilot business departments

-   Build an enterprise data quality monitoring system.
    
-   Support core business data forwarding in a production environment.
    
-   Manage enterprise data and collaboration.
    

Enhances enterprise-level data management with capabilities such as lineage analysis and tag management. Supports business continuity and stability with intelligent baseline alerts.

**Professional Edition**

Small and medium-sized enterprises and business departments with high Service-level agreement (SLA) requirements

-   Meet data security and compliance requirements.
    
-   Manage complex business processes and multi-party collaboration.
    
-   High-SLA protection for Assets
    

Enhances data security with features such as data masking and access control. Integrates business-oriented data management and improves development-side access and collaboration.

**Enterprise Edition (recommended)**

Medium-to-large enterprises and corporate headquarters

-   Build an enterprise-grade data mid-end architecture.
    
-   Implement unified resource control across multiple lines-of-business.
    
-   Perform fine-grained cost and resource management.
    

Provides complete, systematic, and built-in best practices for full-lifecycle data governance, covering development, O&M, quality, security, and assets. Supports multi-account permission management through [CloudSSO](/help/en/cloudsso/product-overview/what-is-cloudsso). Offers enterprise-oriented openness and customization with a full range of OpenAPI operations, management events, and extension mechanisms.

## **Feature comparison**

**Important**

-   For a complete list of features in each DataWorks edition, see [Features by edition](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).
    
-   Data modeling is a value-added module that is independent of DataWorks editions and must be [purchased separately](/help/en/dataworks/billing-standards-of-data-modeling).
    

The following table describes the key differences between DataWorks editions.

**Module capabilities**

**Standard Edition (features added to Basic Edition)**

**Professional Edition (features added to Standard Edition)**

**Enterprise Edition (features added to Professional Edition)**

**Data Studio**

for-each, do-while, merge, branch, and assignment nodes; component management; batch operations; and query result downloads

Code review and check nodes

Object capacity (including nodes and code files), query result download size, Git sync and merge, operation checks, HTTP trigger nodes, dependency check nodes, and Webhook support for code review

**Operation Center**

Intelligent baselines

Intelligent diagnosis, shift schedules, and workspace parameters

Scheduling calendar

**Data governance center**

Asset tag management

\-

-   Governance issue identification and optimization
    
-   Proactive interception with pre-check items
    
-   Resource statistical analysis
    
-   Governance effectiveness evaluation
    

**Data Quality**

\-

\-

Dynamic thresholds, quality reports, and custom rule template library

**Data Map**

Table lineage and field lineage

Data albums

\-

**Data Analysis**

Data sharing, SQL query downloads, and code search

\-

\-

**Data security**

Data classification

Security risks, abnormal behaviors, data masking, and data traceability

Data masking (custom masking policies)

**Data Security Guard**

-   Sensitive data classification and identification
    
-   Data access records
    

-   Custom content scanning
    
-   Fraud Detection dashboard
    
-   Data masking
    

-   Self-generated data identification models
    
-   Built-in scanning models
    
-   Create and manage sample libraries
    

**Security Center**

Security overview (sensitive data and data access trends)

Security overview (security risk trends)

Approval policies, risk identification rules, ranger management, and identity credentials

**Migration assistant**

\-

Support for importing OSS files

Unlimited exports

**Open Platform**

Some OpenAPI operations

Some advanced OpenAPI operations

OpenEvent, extensions, and higher OpenAPI QPS

## Billing

Discounts are available for annual subscriptions. For specific pricing details, refer to the purchase page in the console.

**Edition**

**Price**

**Basic Edition**

**Free**

Standard Edition

387 USD/month

Professional Edition

774 USD/month

Enterprise Edition

3,096 USD/month

## Software **version**

**Note**

For professional pre-sales guidance, see the [Purchase](/help/en/dataworks/purchase-guide#concept-1215588).

Log on to the [DataWorks (Subscription) purchase page](https://common-buy-intl.aliyun.com/?commodityCode=dide_pre_intl&accounttraceid=1c560731-5b99-4c2c-82b8-6aca1c732a46#/buy) to purchase the Standard, Professional, or Enterprise edition. When purchasing a DataWorks edition, note the following parameters:

-   **Region and Zone**: The region where DataWorks is activated. In the same region, you can purchase only one non-Basic edition at a time.
    
-   **Duration**: The validity period of the selected DataWorks edition.
    

You can select **Auto-renewal**. You can cancel auto-renewal at any time. For more information, see [Renew expiring resources](/help/en/user-center/renewal-guide-1#h2-1-1).

## Downgrade upon expiration

Alibaba Cloud sends expiration notifications to the mobile phone number and email address associated with your Alibaba Cloud account 14, 12, and 8 days before your purchased Standard, Professional, or Enterprise edition expires.

If you do not renew your subscription within 15 days after your DataWorks Standard, Professional, or Enterprise edition expires, your edition is automatically **downgraded to the Basic Edition** on the 15th day. After the downgrade, features exclusive to the Standard, Professional, or Enterprise edition become unavailable, but existing tasks are not affected. To access the features of a paid edition again, you must purchase a new subscription.

**Important**

For more information about the functional changes after a downgrade, see Appendix: Functional changes after a downgrade.

## **Upgrades and downgrades**

DataWorks editions, from lowest to highest, are Basic, Standard, Professional, and Enterprise. If your purchased edition no longer meets your business requirements, you can upgrade or downgrade it as needed.

### **Upgrade impact and fees**

You can upgrade to a higher edition to use its exclusive features. Upgrades do not affect running tasks. You must pay the price difference for the remainder of the current billing cycle.

### **Downgrade impact and fees**

You can downgrade to a lower edition. After the downgrade, you can no longer use the features exclusive to the higher edition. The platform refunds the price difference for the remainder of the current billing cycle.

### **Upgrade and downgrade operations**

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/commodity). On the **Purchased Resources and Services** page, you can upgrade or downgrade the edition as needed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831968171/p803626.png)

> Upgrade and downgrade operations take effect immediately.

## Renewal policy

If your DataWorks Standard, Professional, or Enterprise edition is about to expire, you can renew it before the expiration date or within the 360-hour grace period after the expiration date. If you fail to renew within the grace period, the exclusive features of your edition are disabled.

You can enable or disable the auto-renewal feature in Renewal Management.

1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console?spm=a2c4g.11186623.0.0.4585140aulnG5T). In the upper-right corner of the top navigation bar, click **Expenses** > **Renewals** to go to the **Resource Renewal** page.
    
2.  On the **Resource Renewal** page, select **DataWorks Edition (Subscription)** as the product category and click the corresponding operation in the **Actions** column.
    

> If your Alibaba Cloud account balance is insufficient, the payment fails, and the renewal is unsuccessful.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1136296571/p1000064.png)

## **Unsubscription**

You can unsubscribe from the DataWorks Basic, Standard, Professional, and Enterprise editions. For more information, see [Stop billing](/help/en/dataworks/disable-auto-renewal-for-subscription-resources).

## **Appendix: Functional changes after a downgrade**

**DataWorks module**

**Feature**

**Changes after downgrade upon expiration**

Data Studio

Bind computing resources

-   You cannot bind new computing resources.
    
-   You cannot detach bound computing resources.
    

Flow control nodes

The feature is disabled and tasks fail.

Check node / HTTP trigger / dependency check

The feature is disabled and tasks fail.

Component management / SQL script template

The feature is disabled and tasks fail.

Code review / operation check

The feature is disabled.

GIT Sync and Merge

The feature is disabled.

Batch operations

The feature is disabled.

Creation limits

The number of objects is limited. If the limit is reached, you cannot create new objects.

Node run result download limit

The feature is disabled.

Advanced API

The feature is disabled and API calls return errors.

Operation Center

Intelligent baselines

You cannot access the baseline management or baseline instance pages. You cannot select baseline rules for custom rules, and baseline instances are no longer generated.

Advanced API

The feature is disabled and API calls return errors.

Shift schedule

DataWorks retains your original shift schedule data. After you upgrade to the Professional Edition or higher, the shift schedule feature can be used again.

Workspace parameters

The feature is disabled and tasks fail.

Configure scheduling calendar

The feature is disabled and tasks fail.

Intelligent diagnosis

The feature is disabled.

Data Governance

All features

The feature is disabled.

Data Quality

Dynamic threshold

The feature is disabled. You cannot create new dynamic threshold rules. Existing rules are not affected.

Custom data quality reports

The feature is disabled. You cannot create new quality reports. Existing reports are not affected.

Custom rule templates

The feature is disabled. You cannot create new rule templates. Existing templates are affected.

Advanced API

The feature is disabled and API calls return errors.

Data Map

Details - Lineage information: table, field, and impact analysis

The feature is disabled. You are prompted to upgrade to a higher edition to view the related information.

Table Details - Field Change: impact analysis, email notification

The feature is disabled. Existing email notification records are retained but cannot be used. A prompt to upgrade is displayed.

Data albums

The feature is disabled. You cannot create new data albums.

Advanced API

The feature is disabled and API calls return errors.

Data Analysis

SQL query

The number of files is limited. If the limit is reached, you cannot create new files.

SQL code search

The feature is disabled.

SQL query result export method

Only spreadsheet export is supported.

Download SQL query results to a local computer

The feature is disabled.

Share feature

The feature is disabled.

Advanced API

The feature is disabled and API calls return errors.

Data Security Guard

All features

The feature is disabled and you cannot access the Data Security Guard page.

Security Center

Risk identification rules

The feature is disabled.

Manage Ranger

The feature is disabled.

Identity credentials

The feature is disabled.

Approval Center

All features

You cannot create or edit approval policies.

Migration Assistant

DataWorks migration, number of free export packages per tenant

Reduced to 10.

DataWorks import package type

Only local files are supported. OSS files are not supported.

Auto-submit and auto-deploy during DataWorks import

Auto-submit and auto-deploy are no longer supported.
