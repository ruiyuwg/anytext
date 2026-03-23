Agentic SOC is a built-in threat detection and response module in Security Center. It provides unified log analysis, automated incident response, out-of-the-box threat detection rules, and other security capabilities. This topic describes how to select a billing method and activate the service.

## **Purchase options**

Select the appropriate purchase option based on your actual needs. Agentic SOC charges based on the volume of ingested log traffic and the amount of storage capacity used. Consider the following:

**Note**

You can flexibly choose purchase options for log ingestion traffic and log storage capacity based on your requirements. For example, you can purchase log ingestion traffic using the subscription billing method and activate Log Management using the pay-as-you-go billing method.

**Purchase Method**

**Scenarios**

**Billing details**

Subscription

-   You can estimate your resource usage period.
    
-   Your business scenario is relatively stable.
    
-   You need to use resources over the long term.
    

-   Log ingestion traffic: Tiered pricing applies. The minimum purchase is 100 GB/day, with a step size of 100 GB/day.
    
-   Log storage capacity: The minimum purchase is 1,000 GB, with a step size of 1,000 GB.
    

Pay-as-you-go

-   You cannot estimate your resource usage period.
    
-   Your service traffic fluctuates significantly.
    

-   Agentic SOC: Charges are calculated daily based on actual log ingestion traffic using tiered cumulative pricing. The minimum billing step is 1 GB.
    
-   Log Management: Charges are calculated daily based on the cumulative storage volume used. The minimum billing step is 1 TB.
    

## **Purchase steps**

### **Subscription**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), and in the navigation pane on the left, select **Detection and Response** > **Agentic SOC**.
    
2.  On the **Agentic SOC** page, click **Activate Subscription**. On the **Quick Purchase** tab, keep the default value **Billing Method** as **Subscription**.
    
3.  Click **Create Service-linked Role** to complete authorization for cloud service access. Skip this step if you have already created the role.
    
    **Note**
    
    After completing the authorization, Security Center automatically creates the service-linked role AliyunServiceRoleForSasCloudSiem. Agentic SOC uses this role to access resources in your other cloud services. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center).
    
4.  Select the services you want to purchase.
    
    -   **Agentic SOC**: Supports unified log collection from multicloud environments, multiple accounts, and various products such as Web Application Firewall (WAF), Cloud Firewall, and virtual private cloud (VPC). It provides a closed-loop process for detecting, responding to, and handling security alerts and events. This improves security operations efficiency and helps meet the log audit requirements of MLPS 2.0.
        
    -   **Security Operations Agent**: An advanced intelligent value-added service based on Agentic SOC. It uses Agentic AI as its core engine and deeply integrates with Alibaba Cloud's native security data and infrastructure. The service uses the autonomous perception, inference, and execution capabilities of agents to independently analyze security events to help you achieve rapid security event response.
        
5.  Set the quantity for each selected service.
    
    -   You are billed independently for **Agentic SOC** based on **Log Ingestion Traffic** and **Log Storage Capacity**. You can purchase them separately based on your actual needs.
        
    -   **Security Operations Agent**: In addition to purchasing Agentic SOC, you must also purchase **Intelligent Usage Analysis** and **Number of Managed Instances**.
        
    
    ## **Log Ingestion Traffic**
    
    -   **Definition**: The volume of log traffic ingested into Agentic SOC for analysis each day, measured in GB/day.
        
    -   **Purchase amount guidance**: Estimate your required log ingestion traffic using one of the following methods:
        
        -   Based on your existing Simple Log Service capacity:
            
            **Log ingestion traffic (GB/day) = Log storage capacity / TTL**
            
            -   Log storage capacity refers to the storage space used by the log sources you want to ingest into Agentic SOC.
                
            -   TTL is the log retention period.
                
        -   Based on Events Per Second (EPS):
            
            **Log ingestion traffic (GB/day) = EPS × 86400 s × SIZE / (1024 × 1024)**
            
            -   EPS, or Event Per Second, refers to the number of Raw Logs ingested by Threat Analysis daily.
                
            -   SIZE is the average size of each log entry, typically ranging from 3 KB to 7 KB.
                
    -   **Billing details**: Tiered pricing applies. The minimum purchase is 100 GB/day, with a step size of 100 GB/day. Specific pricing is as follows (where X is the daily ingested traffic):
        
        -   X = 100 GB: USD 0.45 per GB per day.
            
        -   200 GB <= X < 9,999,999,999 GB: USD 0.42 per GB per day.
            
        
    
    ## **Log Storage Capacity**
    
    -   **Definition**: The amount of log storage capacity that Agentic SOC uses each day.
        
    -   **Purchase amount guidance**: Allocate 120 GB of log storage capacity per server, or configure three times the storage capacity used by Security Center log analysis. For more information, see [Log Management](/help/en/security-center/log-management-1-0).
        
    -   **Billing details**: The minimum purchase is 1,000 GB, with a step size of 1,000 GB. The price is USD 100 per 1,000 GB per month.
        
    
    ## **Intelligent Usage Analysis**
    
    -   **Definition**: Required only when purchasing **Security Operations Agent**. This metric measures the analysis usage consumed for alert triage, incident investigation, traceability, attribution, and security report generation.
        
    -   **Purchase amount guidance**: You must manually specify this value. It must match your **Log Ingestion Traffic** purchase amount.
        
    -   **Billing details**:
        
        -   The minimum purchase quantity is 100 GB per day. The purchase quantity does not support auto-filling and must match the **Log Ingestion Traffic**.
            
        -   Pricing: USD 9.6 per 100 GB per day.
            
            **Note**
            
            Usage resets at midnight daily. After exceeding the limit, the system automatically applies rate limiting.
            
    
    ## **Number of Managed Instances**
    
    -   **Definition**: The number of instances managed by **Security Operations Agent** for cross-instance security operations and automated response.
        
    -   **Purchase amount guidance:** Each invoked instance incurs charges. Examples include ECS, WAF, ALB, cross-cloud products, and on-premises security vendor products.
        
    -   **Billing details**:
        
        -   Minimum purchase is 10 instances per month, with a step size of 10 instances per month.
            
        -   USD 1.434 per instance per month.
            
            **Note**
            
            Each instance is counted only once. Duplicate entries are automatically removed.
            
    
6.  Choose whether to enable **Access Policy** based on your business needs.
    
    -   If you select Access Policy, after activating Agentic SOC, the system automatically ingests logs from Security Center, Web Application Firewall, **Cloud Firewall**, and **ActionTrail** under your current Alibaba Cloud account. For more information, see [Recommended log ingestion policy](#5563cce433byh).
        
    -   If you do not select Access Policy, the system performs no predefined ingestion settings. After purchase, you can manually select the product logs to ingest based on your needs. For instructions, see [Product ingestion](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
        
7.  Read the **Security Center Related Agreements** carefully, then click **Order Now**. After activation, you gain access to the following features:
    
    **Feature module**
    
    **CTDR 1.0**
    
    **CTDR 2.0 (renamed to Agentic SOC)**
    
    **Purchase only****Log Ingestion Traffic**
    
    **Purchase****Log Ingestion Traffic**
    
    **and****Log Storage Capacity**
    
    **Purchase only****Log Ingestion Traffic**
    
    **Purchase only****Log Storage Capacity**
    
    **Purchase****Log Ingestion Traffic**
    
    **and****Log Storage Capacity**
    
    **Dashboard**
    
    Not supported
    
    Supported
    
    Not supported
    
    Not supported
    
    Not supported
    
    **Security Events**
    
    Supported
    
    Supported
    
    Supported
    
    Not supported
    
    Supported
    
    **Alert**
    
    Supported
    
    Supported
    
    Supported
    
    **Note**
    
    The **Custom Alert Analysis** feature requires you to purchase the **Log Management** pay-as-you-go feature to be fully supported.
    
    Not supported
    
    Supported
    
    **Incident Response**
    
    Supported
    
    Supported
    
    Supported
    
    Not supported
    
    Supported
    
    **Response Rules**
    
    Supported
    
    Supported
    
    Supported
    
    Not supported
    
    Supported
    
    **Log Management**
    
    Not supported
    
    Supported
    
    1.  Security Center logs: Not supported
        
    2.  Standardized logs: Supported. Supports only logs standardized using the "**Scan Query**" method.
        
    
    **Note**
    
    If you also activate the pay-as-you-go **Log Management** feature, all services are supported.
    
    1.  **Security Center Logs**: Supported
        
    2.  **Standardized Log**: Not supported
        
    
    Supported
    
    **Detection Rules**
    
    1.  Predefined: Supported
        
    2.  Custom: Not supported
        
    
    Supported
    
    1.  Predefined: Supported
        
    2.  Custom: Supported. Supports only logs standardized using the "**Scan Query**" method.
        
    
    **Note**
    
    If you also activate the pay-as-you-go **Log Management** feature, all services are supported.
    
    Not supported
    
    Supported
    
    **Integration Settings** / **Service Integration**
    
    Supported
    
    Supported
    
    Supported
    
    Not supported
    
    Supported
    

### **Pay-as-you-go**

**Important**

If you have already purchased log ingestion traffic using the subscription billing method, you cannot activate Agentic SOC using the pay-as-you-go billing method.

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas), and in the navigation pane on the left, select **Detection and Response** > **Agentic SOC**.
    
2.  On the **Agentic SOC** page, click **Activate Pay-as-you-go**, and select the services you want to activate.
    
    -   **Agentic SOC**: Supports unified log collection from multicloud environments, multiple accounts, and various products such as Web Application Firewall (WAF), Cloud Firewall, and virtual private cloud (VPC). It provides a closed-loop process for detecting, responding to, and handling security alerts and events. This improves security operations efficiency and helps meet the log audit requirements of MLPS 2.0.
        
    -   **Security Operations Agent**: An advanced intelligent value-added service based on Agentic SOC. It uses Agentic AI as its core engine and deeply integrates with Alibaba Cloud's native security data and infrastructure. The service uses the autonomous perception, inference, and execution capabilities of agents to independently analyze security events to help you achieve rapid security event response.
        
3.  Read the billing rule descriptions carefully. Billing rules vary depending on the activated services.
    
    -   **Billing method**:
        
        -   **Agentic SOC**: Billed on a tiered basis according to the daily ingested log traffic (in GB). The daily fee is the sum of the fees for each tier.
            
            **Important**
            
            The minimum billing unit is 1 GB. If the data volume is less than 1 GB, it is billed as 1 GB.
            
        -   **Security Operations Agent**: In addition to cumulative tiered billing for daily ingested log traffic (GB), billing also includes the following items:
            
            -   **Intelligent Usage Analysis**: Billing is based on the analysis usage (in GB) consumed by the AI security digital human for alert analysis, event investigation, traceability, attribution, and security report generation for risk events.
                
            -   **Number of Managed Instances**: You are billed based on the number of Agent instance invocations. Products such as ECS, WAF, ALB, cross-cloud products, and on-premises security vendor products are all counted as instances.
                
                **Important**
                
                Each instance is counted only once. Duplicate entries are automatically removed.
                
    -   **Billing cycle**: Billed daily.
        
    -   **Price**:
        
        -   **Log Ingestion Traffic**: Tiered pricing is applied based on the daily log ingestion traffic (in GB).
            
            **Log ingestion traffic tier**
            
            **Price**
            
            **Fee calculation formula (Y is the traffic ingested per day in GB)**
            
            1 to 10 (GB/day)
            
            USD 2.20/GB
            
            2.2 × Y (USD)
            
            11 to 50 (GB/day)
            
            USD 1.6/GB
            
            2.2 × 10 + 1.6 × (Y - 10) (USD)
            
            51 to 100 (GB/day)
            
            USD 1.4/GB
            
            2.2 × 10 + 1.6 × 40 + 1.4 × (Y - 50) (USD)
            
            \>100 (GB/day)
            
            USD 1.2/GB
            
            2.2 × 10 + 1.6 × 40 + 1.4 × 50 + 1.2 × (Y - 100) (USD)
            
        -   **Intelligent Usage Analysis**: USD 0.144 per GB per day.
            
        -   **Number of Managed Instances**: USD 2.15 per instance per month.
            
4.  Choose whether to enable **One-click Ingestion** as needed.
    
    -   If you select One-click Ingestion, after activating Agentic SOC, the system automatically ingests data sources from Security Center, **Web Application Firewall**, **Cloud Firewall**, and **ActionTrail** under your current Alibaba Cloud account. For more information, see [Recommended log ingestion policy](#5563cce433byh).
        
        **Important**
        
        After enabling the recommended log ingestion policy, the system automatically ingests the specified log types into Agentic SOC. Security Center generates a bill the next day based on your **actual log ingestion volume**.
        
    -   If you do not enable **One-click Ingestion**, you can manually select the product logs to ingest based on your needs. For instructions, see [Product ingestion](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
        
5.  Click **Activate and Authorize**.
    
    **Note**
    
    After completing this operation, Security Center automatically creates the service-linked role AliyunServiceRoleForSasCloudSiem. Agentic SOC uses this role to access resources in your other cloud services. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center).
    
    After activation, you gain access to the following features:
    
    **Feature module**
    
    **CTDR 1.0**
    
    **CTDR 2.0 (renamed to Agentic SOC)**
    
    **Dashboard**
    
    Not supported
    
    Not supported
    
    **Security Events**
    
    Supported
    
    Supported
    
    **Alert**
    
    Supported
    
    Supported
    
    **Incident Response**
    
    Supported
    
    Supported
    
    **Response Rules**
    
    Supported
    
    Supported
    
    **Log Management**
    
    Not supported
    
    -   Security Center logs: Not supported
        
    -   Standardized logs: Supported. Supports only logs standardized using the "**Scan Query**" method.
        
    
    **Note**
    
    If you also activate the pay-as-you-go **Log Management** feature, all services are supported.
    
    **Detection Rules**
    
    -   Predefined: Supported
        
    -   Custom: Not supported
        
    
    -   Predefined: Supported
        
    -   Custom: Supported. Supports only logs standardized using the "**Scan Query**" method.
        
    
    **Note**
    
    If you also activate the pay-as-you-go **Log Management** feature, all services are supported.
    
    **Integration Settings**/**Service Integration**
    
    Supported
    
    Supported
    

## **Product ingestion**

After activating Agentic SOC, ingest product logs to enable cross-resource alerting and unified monitoring and analysis of log data. This improves alert analysis and processing efficiency. For instructions, see [Product ingestion](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).

## **Cancellation instructions**

If you no longer need Agentic SOC, you can disable the feature.

-   For subscription billing: On the **Overview** page, in the **Subscription** section, click **Change** > **Downgrade**. On the order upgrade or downgrade page, on the **Order Downgrade** tab, in the Agentic SOC **Agentic SOC** section, set **Purchase or Not** to **No**. For instructions, see [Downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-9aq-kgp-fzl).
    
    **Note**
    
    The exact refund amount appears on the downgrade page. For information about refund disbursement, see [Refund disbursement](/help/en/user-center/refund-flow#topic-2059665).
    
-   For pay-as-you-go billing: On the Security Center console **Overview** page, in the **Pay-as-you-go** section, turn off the switch for Agentic SOC **Agentic SOC** or **Log Management**.
    
    **Important**
    
    -   No new charges accrue after you disable the feature. Except for user-delivered logs, all other data and configurations—including security alerts, security events, and ingestion settings—are deleted after 15 days.
        
    -   After you turn off the Log Management switch, log delivery stops automatically, and the corresponding Logstore is deleted. Deleted log data cannot be recovered. Proceed with caution.
        
    

## **Appendix**

### **Other purchase entry points**

You can also purchase and activate Agentic SOC on the [Security Center purchase page](https://yundun.console.alibabacloud.com/?p=sas_buy#/buy) or the console **Overview** page. For information about Security Center edition selection and other service purchases, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).

## Subscription

Purchase through the Security Center purchase page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9036162771/p1054251.png)

## Pay-as-you-go

-   Security Center purchase page
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9036162771/p1054252.png)
    
-   Overview page
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9036162771/p1047296.png)
    

### **Recommended log ingestion policy**

When you use the recommended log ingestion policy, Agentic SOC automatically ingests logs from Security Center, Web Application Firewall, Cloud Firewall, and ActionTrail under your current Alibaba Cloud account without manual configuration. The following table lists the ingested data sources and supported security capabilities.

**Important**

If your Security Center edition is Free Edition or you have only purchased value-added services, the system does not ingest ActionTrail event logs.

**Ordinal number**

**Alibaba Cloud product**

**Data source name**

**Standardization rule name**

**Standardization method**

**Standardization classification/structure**

**Supported security capabilities**

1

Security Center

DNS request logs

Host DNS request log standardization rule

Scan query

Host logs - Process DNS request logs

-   Predefined analysis rules
    
-   Predefined playbooks
    

2

Baseline logs

Baseline log standardization rule

Scan query

Security logs - Host baseline logs

-   Incident investigation and traceability
    
-   Predefined playbooks
    

3

Login flow logs

Login flow log standardization rule

Scan query

Login logs - Host login logs

-   Custom analysis rules
    
-   Incident investigation and traceability
    
-   Predefined playbooks
    

4

Network connectivity logs

Network connectivity log standardization rule

Scan query

Host logs - Process network outbound connection logs

-   Predefined analysis rules
    
-   Predefined playbooks
    

5

Process startup logs

Process startup log standardization rule

Scan query

Host logs - Process startup logs

-   Predefined analysis rules
    
-   Custom analysis rules
    
-   Incident investigation and traceability
    
-   Predefined playbooks
    

6

Security alert logs

Security alert log standardization rule

Real-time consumption

Security logs - Other alert logs

Predefined playbooks

7

Vulnerability logs

Vulnerability log standardization rule

Scan query

Security logs - Vulnerability logs

-   Incident investigation and traceability
    
-   Predefined playbooks
    

8

Web Application Firewall

WAF alert logs

WAF alert log standardization rule

Real-time consumption

Security logs - Web Application Firewall alert logs

-   Predefined analysis rules
    
-   Custom analysis rules
    
-   Predefined playbooks
    

9

WAF full, block, and block-and-observe logs

WAF full, block, and block-and-observe log standardization rule

Real-time consumption

Network logs - HTTP logs

-   Predefined analysis rules
    
-   Custom analysis rules
    
-   Incident investigation and traceability
    
-   Predefined playbooks
    

10

Cloud Firewall

Cloud Firewall alert logs

Cloud Firewall alert log standardization rule

Real-time consumption

Security logs - Firewall alert logs

-   Predefined analysis rules
    
-   Custom analysis rules
    
-   Predefined playbooks
    

11

ActionTrail

ActionTrail event logs

ActionTrail event log standardization rule

Real-time consumption

Audit logs - Cloud platform operation audit logs

-   Custom analysis rules
    
-   Incident investigation and traceability
    

## **References**

-   To learn about Security Center editions and value-added service purchases, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).
    
-   To learn about Agentic SOC architecture, see [Agentic SOC version comparison](/help/en/security-center/differences-between-agentic-soc-1-0-and-2-0).
    
-   After activating Agentic SOC, you must ingest product logs. See [Agentic SOC 2.0 product ingestion](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
