The log ingestion policy of Agentic SOC needs to be bound with standardized ingestion rules. The standardized rules use **SPL syntax** and **datasets** of Simple Log Service to parse logs.

## **Standardized rule sources**

Standardized ingestion rules use SPL syntax to map incoming logs to datasets, extract key field information from logs, and provide data support for subsequent log parsing rules to generate alert information.

**Rule source**

**Description**

**Supported operations**

Predefined

-   Agentic SOC has pre-initialized a batch of parsing rules, set up SPL syntax for them, and bound them with ingestion policies. It includes 50+ rule templates, empowering users with the experience of Alibaba Cloud security experts.
    

View

Custom

-   Created by users, who can refer to predefined rules and existing custom rules as templates.
    
-   You need to first import log data into the data source that requires parsing with custom standardized rules, otherwise you cannot complete the addition.
    

-   Add
    
-   View
    
-   Modify
    
-   Delete
    

## **Operations on standardized rules**

### **Prerequisites**

You have purchased and activated Agentic SOC. For specific operations, see [Purchase and activate Agentic SOC](/help/en/security-center/user-guide/buy-agentic-soc).

### **Create custom standardized rules**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets to be protected are located: **China** or **Outside China**.
    
2.  In the navigation pane on the left, choose **Agentic SOC** > **Integration Center**. On the **Standardized Rule** tab, click **Create Custom Rule** in the upper-left corner.
    
3.  You can refer to the following information to complete the basic configuration.
    
    Parameter
    
    **Description**
    
    **Rule Name**
    
    User-defined
    
    **Service Provider**
    
    -   Predefined vendors: Alibaba Cloud, Fortinet, Chaitin Tech, Microsoft, Sangfor, Tencent Cloud, Huawei Cloud, Hillstone Networks, Knownsec, Microsoft Cloud, and others.
        
    -   User-defined manufacturers: For how to create manufacturers, see [Step 1: Add a product](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0#79d138b953a5b).
        
    
    **Product**
    
    Automatically pulls all products under the manufacturer, such as Alibaba Cloud Security Center, Fortinet Firewall, etc. For products supported by Agentic SOC, see [Integration Center](/help/en/security-center/user-guide/integration-center/#f8270b86a19p1).
    
    **Standardization Category or Structure**
    
    **Standardization Classification**: Network Log, Host Log, Security Log, Audit Log, Snapshot Log, Logon Log, Other Log.
    
    **Standardization Structure:**
    
    -   A standardization classification contains multiple standardization structures.
        
    -   A standardization structure corresponds to a set of standardized fields and a dataset (StoreView). A dataset can be mapped to multiple standardization structures.
        
        **Note**
        
        For how to view the dataset and standardized fields corresponding to the standardization classification/structure, see [Dataset description](#869a0d44d9ajh).
        
    
    **Remarks**
    
    You can add feature descriptions to the current standardized rule to facilitate quick search and improve readability.
    
4.  Set SPL syntax and perform log standardization testing.
    
    1.  Select data source: Select the data source that the custom rule needs to analyze.
        
    2.  Fill in SPL syntax.
        
        You can use predefined rules and existing custom rules as templates. You can view the SPL syntax corresponding to these rules on the details page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5988240671/p942767.png)
        
        You can also refer to the [SPL syntax documentation](/help/en/sls/spl-overview/) to write your own custom syntax.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5988240671/p942771.png)
        
    3.  Perform standardization testing.
        
        **Warning**
        
        If the current data source has no data, the SPL syntax will not be able to parse logs and return results, which will prevent you from selecting test data and completing the standardization test.
        
        Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7008402571/p942881.png) button, select a test data, and click **Parse and Test**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5988240671/p942884.png)
        
5.  After the test is passed, click **Complete** in the lower-left corner.
    

### **Modify standardized rules**

**Important**

Only custom rules support modification.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets to be protected are located: **China** or **Outside China**.
    
2.  In the navigation pane on the left, choose **Agentic SOC** > **Integration Center**.
    
3.  Find the rule you want to modify and click the **Edit** button in the Actions column.
    
4.  Modify the relevant content on the edit page. The configuration items that can be modified are as follows:
    
    -   Basic settings: rule name, remarks.
        
    -   SPL syntax: After modifying the SPL syntax, you still need to perform log standardization testing. For specific operations, see [Set SPL syntax and perform log standardization testing.](#f200ea44f10zb)
        

### **Delete standardized rules**

**Important**

-   Predefined rules cannot be deleted.
    
-   Standardized rules that have been bound to access policies cannot be deleted.
    

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets to be protected are located: **China** or **Outside China**.
    
2.  In the navigation pane on the left, choose **Agentic SOC** > **Integration Center**.
    
3.  Find the rule you want to delete and click the **Delete** button in the Actions column.
    

## **Dataset description**

Dataset Storeview is a virtual resource created based on Logstore, used to manage and save the relationships between multiple Logstores. Through datasets (Storeview), you can perform unified queries on logs in different Logstores, but datasets (Storeview) do not support modification operations on logs.

### **Description of the relationship between standardized rules and datasets**

Standardized rules need to configure **Standardization Category or Structure**. Each standardization classification contains multiple standardization structures, and each structure corresponds to a storage **dataset (StoreView)** and **a set of standardized fields**. A **dataset (StoreView) is also mapped to multiple standardization structures**. The relationship can be referred to in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0395098671/CAEQThiBgID72saGzxkiIDE1Mjc0NDllOGY2YTQ5NzRhNWI2YTQ0N2ZlZGUwYjdk5046057_20250616103113.111.svg)

### **Impact on product integration**

During product integration, Agentic SOC parses product logs according to **SPL syntax** based on the **data standard fields** in the **dataset**, then matches threat detection rules, and finally identifies security risks. In addition, datasets will have the following configuration restrictions on access policies:

If a dataset (StoreView) has already been bound to 5 access policies in scan query mode, the standardization method for new policies can only be "**Real-time Consumption**" and does not support "**Scan Query**". For an explanation of standardization methods, see [Product logs](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0#ef1276ed3bkhc).

### **View datasets**

Common datasets are as follows:

**Standardization classification**

**Standardization structure**

**Dataset name**

Network Log

5-tuple Log

network\_activity

DNS Log

HTTP Log

Host Log

Process Network Connection Log

process\_activity

Process File Write Log

Process Startup Log

Process DNS Request Log

Security Log

API Security Risk Log

risk\_activity

Cloud Service Baseline Log

Host Baseline Log

Cloud Platform Operation Alert Log

alert\_activity

API Security Alert Log

Endpoint Detection and Response Alert Log

Firewall Alert Log

Host Network Alert Log

Alert logs of WAF

Other Alert Log

Crawler Alert Log

Vulnerability Log

vulnerability\_activity

Audit Log

Bastionhost Audit Log

audit\_activity

NoSQL Database Audit Log

Cloud Platform Operation Audit Log

Audit logs of Kubernetes resources

Windows Security Event Log

API Gateway Audit Log

SQL Database Audit Log

Object Storage Service Audit Log

Azure Active Directory Audit Log

Azure Active Directory Logon Log

Snapshot Log

Account Snapshot

account\_activity

Process Startup Snapshot

process\_activity

Network Connection Snapshot

Logon Log

Cloud Platform Logon Log

login\_activity

Host Logon Failure Log

Host Logon Log

If you want to view more dataset information, you can refer to the following steps.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets to be protected are located: **China** or **Outside China**.
    
2.  In the navigation pane on the left, choose **Agentic SOC** > **Integration Center**. On the **Standardized Rule** tab, click **View Standard Fields** in the upper-left corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5988240671/p943009.png)
    
3.  In the standardized field list, the **Log Activity Category** list items on the left are the **standardization classifications** supported by Agentic SOC, and the list root nodes are the **standardization structures**. On the right, you can view the **Dataset (StoreView)** name and the list of standardized fields.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5988240671/p943239.png)
    

## **References**

-   To bind standardized rules, see [Product integration](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
    
-   To know which products are supported by default standardized rules, see [Integration Center](/help/en/security-center/user-guide/integration-center/#f8270b86a19p1).
    
-   To learn more about Agentic SOC 2.0 architecture information, see [Agentic SOC 2.0](/help/en/security-center/user-guide/ctdr-2-0).
    
-   If you encounter problems during operation, see [FAQ](/help/en/security-center/user-guide/faq-on-how-to-add-service-to-agentic-soc-2-0) for solutions.
