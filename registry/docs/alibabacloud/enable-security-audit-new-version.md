The security audit (new version) feature in Database Autonomy Service (DAS) detects potential database risks by applying built-in security audit rules. It covers high-risk operations, SQL injection, data breaches, and vulnerability attacks. You can also customize rules to control database access for different scenarios and application types.

## **Supported databases and regions**

The following table lists the database engines and regions that support security audit (new version).

**Database**

**Supported regions**

-   RDS for MySQL
    
-   PolarDB for MySQL
    
-   RDS for SQL Server
    

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), China (Chengdu), and China (Hong Kong)

RDS for PostgreSQL

China (Qingdao), China (Beijing), and China (Hong Kong)

PolarDB-X 2.0

China (Hangzhou), China (Shanghai), China (Shenzhen), China (Beijing), China (Zhangjiakou), and China (Hong Kong)

PolarDB for PostgreSQL (Compatible with Oracle)

China (Hangzhou) and Malaysia (Kuala Lumpur)

PolarDB for PostgreSQL

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and China (Hong Kong)

## **Billing**

Enabling security audit (new version) incurs charges. The billing depends on whether DAS Enterprise Edition is already enabled for your instance:

-   **DAS Enterprise Edition is not enabled**: Enabling security audit automatically enables [DAS Enterprise Edition V3](/help/en/das/user-guide/overview-2) and audit logs. You are charged for both [log traffic and security audit fees](/help/en/das/product-overview/billing-overview/).
    
-   **DAS Enterprise Edition is already enabled**: You are charged only for security audit (SecurityAudit).
    

**Important**

Full SQL details are stored in cold storage. DAS provides 30 days of free cold storage. After this period, additional [cold storage fees](/help/en/das/product-overview/billing-details-of-the-previous-version) apply.

## **Feature description**

Security audit (new version) includes over 900 built-in rules for high-risk operations across four categories: abnormal operations, data breaches, SQL injection, and vulnerability attacks. This enables comprehensive and automatic detection of risks such as high-risk operations, SQL injection, and new access patterns.

The feature provides the following capabilities:

-   [Audit alerts](/help/en/das/user-guide/view-audit-alerts): Generates alerts for five risk types: abnormal operations, data breaches, SQL injection, vulnerability attacks, and new access.
    
-   [Anomaly alerts](/help/en/das/user-guide/view-alerts): Uses built-in or custom detection models to detect and alert on abnormal operations related to sensitive data, such as abnormal data flow and behavior.
    
-   [Alert rules](/help/en/das/user-guide/configure-alerting-rules): Allows you to manage built-in database audit rules and anomaly detection models. You can create custom detection models based on dimensions such as databases, tables, fields, access sources, and instances for more flexible security policies.
    
-   [Whitelists](/help/en/das/user-guide/manage-whitelist): Allows you to add trusted accounts and IP addresses to a whitelist to identify and isolate access sources and reduce false positive alerts.
    

## **Enable security audit**

You can enable security audit for a single instance or for multiple instances at a time.

## Method 1: Enable security audit for a single instance

**Note**

This method enables security audit only for the current instance.

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Intelligent O&M Center** > **Instance Monitoring** .
    
3.  Find the target instance and click the instance ID to open the instance details page.
    
4.  In the left-side navigation pane, click **Security Audit**.
    
5.  On the **Security Audit** page, click **Enable Security Audit**.
    
6.  Configure the features to enable and specify the audit data retention period, and then click **Submit**.
    

## Method 2: Enable security audit for multiple instances

**Note**

This method allows you to enable security audit for one or more instances at a time.

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security Center** > **Security Audit**.
    
3.  Select the instances for which security audit is not enabled.
    
4.  Click **Batch Modify** > **Batch Enable Security Audit**.
    
5.  Configure the security audit features and the audit data retention period, and then click **Submit**.
