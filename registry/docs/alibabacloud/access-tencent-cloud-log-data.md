In multi-cloud environments, scattered security logs complicate unified threat detection and incident response. Security Center's **Agentic SOC** centralizes the import and analysis of security logs from Tencent Cloud Web Application Firewall (WAF), for unified security management across your cloud environments.

## How it works

1.  **Log aggregation at the source**: Logs from Tencent Cloud products, such as WAF, are consolidated into **Tencent Cloud Log Service (CLS)**.
    
2.  **Data export**: Logs are exported from CLS to a **TDMQ for CKafka** or **Cloud** **Object Storage (COS)**, which acts as an intermediary for cross-cloud data transfer.
    
3.  **Cross-cloud data import**: The Agentic SOC platform subscribes to and pulls log data from the message queue or COS using standard Kafka or S3 protocols. It then sends the data to a specified data source.
    
4.  **Ingestion and normalization**: You create an **Ingestion Policy** in the Agentic SOC platform and apply a **Standardization Rule**. This policy and rule parse and normalize the raw logs before storing them in a data warehouse.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8966188671/CAEQUxiBgIDWleHW3hkiIGU5MTY1YTViMzc4YzQzOThhMDNjN2U0MGMzMjhiNDFh5833690_20251028204332.303.svg)

## Supported logs

This solution supports importing only the **Web Application Firewall (WAF)** **Alert Log** from Tencent Cloud.

## Ship logs to CLS

First, consolidate the security logs from your Tencent Cloud products into **CLS**.

### **Web Application Firewall**

**Note**

For detailed instructions, see the official Tencent Cloud documentation: [Log Shipping](https://www.tencentcloud.com/zh/document/product/627/56048).

1.  **Authorize and enable log service**
    
    1.  Log on to the or . Navigate to the **Access Log** > **Log shipping** page or the **Attack Log** > **Log shipping** page. Click **Configure** and follow the prompts to complete the authorization.
        
    2.  Once authorized, click **Create** on the LogShipping page.
        
        **Important**
        
        After authorization, the system automatically creates a **Logset** named `waf_post_logset`.
        
2.  **Enable log shipping**
    
    Enable log delivery for the logs you want to collect. For more information, see [Enabling Log Shipping](https://www.tencentcloud.com/zh/document/product/627/56048#rz).
    
    -   **Enable Attack Log Shipping:** In the left-side navigation pane of the WAF **Console**, choose **Instance Management**. On the instance details page, turn on the **Attack log shipping** switch.
        
    -   **Enable Access Log Shipping:**
        
        1.  In the left-side navigation pane of the WAF **Console**, choose **Connection Management** > **Domain names**. In the **Actions** column for the domain, click **More** > **Log shipping**.
            
        2.  In the advanced settings window, select Delivery Target and click **Save**.
            

## Choose an import method

Select the method that best fits your business needs, considering their differences in real-time performance, cost, and configuration complexity. To import Tencent Cloud CLS logs into Security Center, you can choose between Kafka protocol consumption and **COS**.

**Item**

**Kafka protocol consumption**

**COS**

**Real-time performance**

Near real-time.

Minute-level latency.

**Configuration complexity**

Low. Requires configuring Kafka protocol consumption.

Low. Requires configuring a COS delivery task.

**Cost structure**

-   **Tencent Cloud:** Log Service fees.
    
-   **Alibaba Cloud:** Agentic SOC log ingestion traffic fees.
    

-   **Tencent Cloud:** COS storage fees.
    
-   **Alibaba Cloud:** Agentic SOC log ingestion traffic fees.
    

**Use cases**

**High real-time requirements for log analysis**, such as stream-based security computing or rapid alert response.

**Low real-time requirements**, with a focus on cost-effectiveness, log archival, or batch offline analysis.

## Configure data import

## Import data by using Kafka protocol consumption

### Step 1: Configure Kafka protocol consumption and get an AccessKey pair in Tencent Cloud

#### Create a task to ship data from CLS via Kafka protocol consumption

**Note**

For detailed instructions, see the official Tencent Cloud documentation: [Consume Logs over Kafka](https://www.tencentcloud.com/zh/document/product/614/42752).

1.  **Enable Kafka protocol consumption**
    
    1.  Go to the [Tencent Cloud - Log Topic](https://console.tencentcloud.com/cls/topic?region=1) page and select the appropriate log storage **Region** in the upper-left corner.
        
    2.  Click the name of the target **Log Topic** to go to its details page.
        
        -   **Web Application Firewall:** Typically found under the `plain` **Logset**. For details, see [Ship logs to CLS](#59ccfcce8d0zb).
            
    3.  In the left-side navigation pane, click **Consumption over Kafka**. On the **Basic Information** tab, click **Edit** on the right and turn on the **Current Status** switch. Configure the settings as described below, and then click **OK**.
        
        -   **Timestamp Range**: History + Latest.
            
        -   **Consumer Data Format**: **JSON** (select **Disable Escape**) or Raw Content.
            
        -   **Data Compression Format**: **No Compression**.
            
        -   **Public Access**: Enabled.
            
        -   **Service Log**: Enabled.
            
2.  **Get the information required to connect to the Kafka service**
    
    After completing the configuration, view consumer parameters to get the required configuration information: the CLS public **service address (endpoint)**, **username**, and **consumer topic**. Note this information for use when you [Authorize Security Center to access COS](#09254463f1lzx) and [Create a data import task](#ae56cf87e2ehx).
    
    **Parameter**
    
    **Description**
    
    Public endpoint
    
    Format: `kafkaconsumer-${region}.cls.tencentcs.com:9096`.
    
    topic
    
    The Kafka topic.
    
    username
    
    Set to `${LogSetID}`, which is the **Logset** ID.
    
    password
    
    Set to `${SecretId}#${SecretKey}`.
    

#### Set the AccessKey pair

-   **Use a main account key**: Go to the [Tencent Cloud - API Key Management](https://console.tencentcloud.com/cam/capi) page and click **Create Key**. Securely save the generated `SecretId` and `SecretKey` by clicking **Download CSV File** or copying them to a local file. For more information, see [Managing Main Account Access Keys](https://www.tencentcloud.com/document/product/598/34228).
    
    **Note**
    
    You can use either an API key or a project key.
    
-   **Use a sub-account key**:
    
    1.  On the [Tencent Cloud - Policies](https://console.tencentcloud.com/cam/policy) page in the CAM console, create a policy with the minimum required permissions to ensure key security. For more information, see [Authorization for Kafka Protocol Consumption](https://www.tencentcloud.com/document/product/614/45004?pg=#kafka-.E5.8D.8F.E8.AE.AE.E6.B6.88.E8.B4.B9) and [Create Custom Policy by Policy Syntax](https://www.tencentcloud.com/zh/document/product/598/58328).
        
        ```
        {
            "version": "2.0",
            "statement": [{
                "action": [
                    "cls:PreviewKafkaRecharge",
                    "cls:CreateKafkaRecharge",
                    "cls:ModifyKafkaRecharge"
                ],
                "resource": "*",
                "effect": "allow"
            }]
        }
        ```
        
    2.  Go to the [Tencent Cloud - User List](https://console.tencentcloud.com/cam) page and select an existing **sub-account** or create a new one.
        
        -   Attach the access policy you created in the previous step.
            
        -   On the **User Details** page, go to the **API Key** tab and click **Create Key**. Securely save the generated `SecretId` and `SecretKey` by clicking **Download CSV File** or copying them to a local file. For more information, see [Managing Sub-account Access Keys](https://www.tencentcloud.com/document/product/598/32675).
            

### Step 2: Configure Kafka log import in Alibaba Cloud

#### Authorize Security Center to access Kafka

1.  Go to the [Security Center Console > System Settings > Feature Settings](https://yundun.console.alibabacloud.com/?p=sas#/setting/overview/ap-southeast-1). In the upper-left corner of the page, select the **Region** where your assets are located: ****Chinese Mainland**** or **Outside Chinese Mainland**.
    
2.  On the **Multi-cloud Configuration Management** tab, select **Multi-cloud Assets**, and then click **Grant Permission**. In the panel that opens, configure the following parameters:
    
    -   **Vendor**: Select **Apache**.
        
    -   **Connection Type**: Select **Kafka**.
        
    -   **Endpoint**: Enter the [public access address for Kafka protocol consumption](#c1ccbecbdcnpd) from Tencent Cloud.
        
    -   **Username:** Enter the [username for Kafka protocol consumption](#9c59302548xwp) from Tencent Cloud.
        
    -   **Password**: The concatenated account key information (`SecretId#SecretKey`) from [Set the AccessKey pair](#55562014cfrf7).
        
    -   **Communication Protocol**: `sasl_plaintext`.
        
    -   **SASL Authentication Mechanism**: `plain`.
        
3.  **Configure synchronization policy**
    
    **AK Service Status Check**: Set the interval at which Security Center automatically checks the validity of the Tencent Cloud account's **AccessKey pair**. You can select **Disable** to turn off this check.
    

### Create a data import task

1.  **Create a data source**
    
    Create a dedicated Agentic SOC data source for your Tencent Cloud log data. If you have already created one, skip this step.
    
    1.  Go to the [Security Center Console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the **Region** where your assets are located: ****Chinese Mainland**** or **Outside Chinese Mainland**.
        
    2.  On the **Data Source** tab, create a data source to receive logs from Tencent Cloud. For specific instructions, see [Create a data source: Logs are not connected to Log Service (SLS)](/help/en/security-center/user-guide/set-up-data-sources#e870f3a8640ft)[Data sources](/help/en/security-center/user-guide/set-up-data-sources).
        
        -   **Source Data Source Type**: You can select ****User Log Service**** or ****Agentic SOC Dedicated Collection Channel****.
            
        -   **Add Instances**: We recommend creating a new ****Logstore**** to isolate the data.
            
2.  On the **Data Import** tab, click **Add Data**. In the panel that opens, configure the following parameters:
    
    -   **Endpoint**: Select the [public access address for Kafka protocol consumption](#c1ccbecbdcnpd) from Tencent Cloud.
        
    -   **Topics**: Select the [consumer topic for Kafka protocol consumption](#05c8030327ma8) from Tencent Cloud.
        
    -   **Value Type**: This corresponds to the [Consumer Data Format](#02e16dc6f6lf6) you configured for the CLS data shipping task.
        
        **Shipping format**
        
        **Value type**
        
        JSON
        
        `json`
        
        Raw Content
        
        `text`
        
3.  **Configure the target data source**
    
    -   **Data Source Name**: Select the data source you created in Step 1.
        
    -   **Target Logstore**: The system automatically fetches the Logstores under the selected data source.
        
4.  Click **OK** to save the configuration. After the import configuration is complete, Security Center automatically pulls logs from Tencent Cloud.
    

## Import data by using COS

### Step 1: Prepare a COS data warehouse and get an AccessKey pair in Tencent Cloud

#### Create a task to ship data from CLS to COS

**Note**

For detailed instructions, see the official Tencent Cloud documentation: [Create a Shipping Task to COS](https://www.tencentcloud.com/zh/document/product/614/31583).

1.  **Create a COS delivery task**:
    
    1.  Go to the [Tencent Cloud - Log Topic](https://console.tencentcloud.com/cls/topic?region=1) page and select the appropriate log storage **Region** in the upper-left corner.
        
    2.  Click the name of the target **Log Topic** to go to its details page.
        
        -   **Web Application Firewall:** Typically found under the `waf_post_logset` **Logset**. For details, see [Ship logs to CLS](#59ccfcce8d0zb).
            
    3.  In the left-side navigation pane, select **Shipping to COS**, and click **Add Shipping Configuration**. Configure the parameters as described below:
        
        **Note**
        
        If you see a confirmation page for log archival, click the **Still Ship To COS** to proceed.
        
        -   **Basic Configuration**:
            
            -   **Time range**: To support data analysis, do not set an end time.
                
            -   **File Size**: Set a trigger value for log delivery. When the accumulated log size reaches this value, the logs are delivered to COS.
                
            -   **Shipping Interval**: Set the time interval for log delivery. Logs generated within each interval are compressed and delivered to COS.
                
            
            **Important**
            
            The File Size and Shipping Interval conditions have a logical OR relationship. Log delivery is triggered when either condition is met.
            
        -   **Bucket Configuration**:
            
            -   **COS Bucket**: Select or create a **Bucket** to store the logs from Tencent Cloud products like WAF and CFW.
                
            -   **File naming**: We recommend selecting **Delivery time naming** to easily distinguish data.
                
            -   **File Compression**: Select **gzip** or **No Compression**.
                
                **Warning**
                
                Security Center does not support parsing log files with lzop or snappy compression.
                
            -   **COS Storage Class**: Select **Standard**. For more information, see [Storage Class Overview](https://www.tencentcloud.com/zh/document/product/436/30925).
                
        -   **Advanced Configuration**:
            
            -   **Consumer Data Format**: Select **JSON.**
                
            -   **JSON**: Select **Disable Escape**.
                
2.  **Get the access domain name (Endpoint) of the COS Bucket.**
    
    Go to the [Tencent Cloud - Bucket List](https://console.tencentcloud.com/cos/bucket) page and locate the **COS Bucket** you configured in the previous step. Go to the bucket details page and get the domain name from the **Domain Information** section.
    
    **Important**
    
    -   Ensure the domain name does not include the bucket name. The format is `cos.${region}.myqcloud.com`.
        
    -   Note this information for use when you [Authorize Security Center to access COS](#09254463f1lzx) and [Create a data import task](#ae56cf87e2ehx).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2727543671/p1022701.png)
    

#### Set the AccessKey pair

-   **Use a main account key**: Go to the [Tencent Cloud - API Key Management](https://console.tencentcloud.com/cam/capi) page and click **Create Key**. Securely save the generated `SecretId` and `SecretKey` by clicking **Download CSV File** or copying them to a local file. For more information, see [Managing Main Account Access Keys](https://www.tencentcloud.com/document/product/598/34228).
    
    **Note**
    
    You can use either an API key or a project key.
    
-   **Use a sub-account key**:
    
    1.  On the [Tencent Cloud - Policies](https://console.tencentcloud.com/cam/policy) page in the CAM console, create a policy with the minimum required permissions to ensure key security. For more information, see [Authorization for Shipping to COS](https://www.tencentcloud.com/document/product/614/45004?pg=#.E6.8A.95.E9.80.92-cos) and [Create Custom Policy by Policy Syntax](https://www.tencentcloud.com/zh/document/product/598/58328).
        
        ```
        {
            "version": "2.0",
            "statement": [
                {
                    "effect": "allow",
                    "action": [
                        "cls:DescribeTopics",
                        "cls:DescribeLogsets",
                        "cls:DescribeIndex",
                        "cls:CreateShipper"
                    ],
                    "resource": "*"
                },
                {
                    "effect": "allow",
                    "action": [
                        "tag:DescribeResourceTagsByResourceIds",
                        "tag:DescribeTagKeys",
                        "tag:DescribeTagValues", 
                        "cls:ModifyShipper",
                        "cls:DescribeShippers",
                        "cls:DeleteShipper",
                        "cls:DescribeShipperTasks",
                        "cls:RetryShipperTask",
                        "cls:DescribeShipperPreview",
                        "cos:GetService",
                        "cam:ListAttachedRolePolicies",
                        "cam:AttachRolePolicy",
                        "cam:CreateRole",
                        "cam:DescribeRoleList"
                    ],
                    "resource": "*"
                }
            ]
        }
        ```
        
    2.  Go to the [Tencent Cloud - User List](https://console.tencentcloud.com/cam) page and select an existing **sub-account** or create a new one.
        
        -   Attach the access policy you created in the previous step.
            
        -   On the **User Details** page, go to the **API Key** tab and click **Create Key**. Securely save the generated `SecretId` and `SecretKey` by clicking **Download CSV File** or copying them to a local file. For more information, see [Managing Sub-account Access Keys](https://www.tencentcloud.com/document/product/598/32675).
            

### Step 2: Configure COS log import in Alibaba Cloud

#### Authorize Security Center to access COS

1.  Go to the [Security Center Console > System Settings > Feature Settings](https://yundun.console.alibabacloud.com/?p=sas#/setting/overview/ap-southeast-1). In the upper-left corner of the page, select the **Region** where your assets are located: **Chinese Mainland** or ****Outside Chinese Mainland****.
    
2.  On the **Multi-cloud Configuration Management** tab, select **Multi-cloud Assets**, click **Grant Permission**, and then select **IDC** from the dropdown. In the panel that opens, configure the following parameters:
    
    -   **Vendor**: Select **AWS-S3**.
        
    -   **Connection Type**: Select **S3**.
        
    -   **Endpoint:** [Get the access domain name (Endpoint) of the COS Bucket.](#5b17e6f472zlr)
        
    -   **Access Key ID/Secret Access Key:** The keys from [Set the AccessKey pair](#ea1b69c32e97f).
        
3.  **Configure synchronization policy**
    
    **AK Service Status Check**: Set the interval at which Security Center automatically checks the validity of the Tencent Cloud account's **AccessKey pair**. You can select **Disable** to turn off this check.
    

#### Create a data import task

1.  Go to the [Security Center Console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the **Region** where your assets are located: ****Chinese Mainland**** or **Chinese Mainland**.
    
2.  On the **Data Import** tab, click **Add Data**. In the panel that opens, configure the following parameters:
    
    -   **Endpoint**: [Get the access domain name (Endpoint) of the COS Bucket.](#5b17e6f472zlr)
        
    -   **Bucket**: [COS Bucket](#25f217ced02k7)
        
3.  **Configure the target data source**
    
    -   **Data Source Name**: Select a custom data source with a normal status (**Custom Log Capability**/**Agentic SOC Dedicated Data Collection Channel**). If no suitable data source exists, see [Set up data sources](/help/en/security-center/user-guide/set-up-data-sources) to create a new one.
        
    -   **Target Logstore**: The system automatically fetches the Logstores under the selected data source.
        
4.  Click **OK** to save the configuration. After the import configuration is complete, Security Center automatically pulls logs from Tencent Cloud.
    

## Analyze imported data

After importing data into SLS, configure ingestion and detection rules to enable log analysis in Security Center.

1.  **Create a new ingestion policy**
    
    Refer to [Add a product to Agentic SOC 2.0](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0) to create a new ingestion policy with the following configuration:
    
    -   **Data Source**: Select the **Target Data Source** configured in the data import task.
        
    -   **Standardized Rule**: Agentic SOC provides built-in standardization rules for Tencent Cloud logs. You can also create custom rules by referring to [Standardized log access rules](/help/en/security-center/user-guide/standardized-log-access-rules).
        
    -   **Standardization Method**: Defaults to ****Real-time Consumption**** and cannot be changed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2727543671/p1021391.png)
        
2.  **Configure threat detection rules**
    
    Based on your security needs, enable or create log detection rules in rule management. This allows the system to analyze logs, generate alerts, and create security events. For specific instructions, see [Configure threat detection rules](/help/en/security-center/user-guide/detection-rules).
    

## Billing

This solution involves fees from the following services. Before implementation, carefully review the billing documentation for each product to estimate costs.

-   **Tencent Cloud**:
    
    **Service name**
    
    **Fee items**
    
    **Billing documentation**
    
    **CLS**
    
    Log storage, read/write operations, etc.
    
    [Tencent Cloud Log Service - Billing Overview](https://www.tencentcloud.com/zh/document/product/614/37509).
    
    **COS**
    
    Storage capacity, requests, public network traffic, etc.
    
    [Tencent Cloud COS - Billing Overview](https://www.tencentcloud.com/zh/document/product/436/16871).
    
-   **Alibaba Cloud**:
    
    On the Alibaba Cloud side, costs depend on the selected **data storage method**.
    
    **Note**
    
    For information about **Agentic SOC** billing, see Agentic SOC [Subscription](/help/en/security-center/product-overview/billing-overview#1ed355c216zzc) and Agentic SOC [Pay-As-You-Go](/help/en/security-center/product-overview/billing-overview#79d5b155140q6).
    
    For information about **Simple** **Log Service (SLS)** billing, see [SLS Billing Overview](/help/en/security-center/product-overview/billing-overview).
    
    **Data source type**
    
    **Agentic SOC fee items**
    
    **SLS fee items**
    
    **Details**
    
    **Agentic SOC Dedicated Collection Channel**
    
    -   Log ingestion fees.
        
    -   Log storage and write fees.
        
    
    **Note**
    
    Both consume **Log Ingestion Traffic**.
    
    Fees other than storage and writes (such as public network traffic).
    
    Agentic SOC creates and manages the SLS resources. Therefore, Agentic SOC is billed for Logstore storage and write operations.
    
    **User Log Service**
    
    Log ingestion fees, which consume **Log Ingestion Traffic**.
    
    All log-related fees (including storage, writes, public network traffic, etc.).
    
    Log resources are fully managed by SLS. Therefore, all log-related fees are billed by SLS.
    

## FAQ

-   **What should I do if I don't see any log data in SLS after creating a data import task?**
    
    1.  **Check the third-party cloud**: Log on to the Tencent Cloud console to confirm that logs have been successfully generated and delivered or shipped to your configured CLS, Kafka Topic, or Object Storage Bucket.
        
    2.  **Check authorization credentials**: In Security Center, on the **Multi-cloud Assets** page, check whether the authorization status is normal. Verify that the **AccessKey pair** is valid and the password is correct, especially the `Id#Key` concatenated format for Tencent Cloud Kafka.
        
    3.  **Check network connectivity**: If you are using the Kafka method, ensure that public access is enabled for the Kafka service on the third-party cloud. Also, check that your security group or firewall rules allow access from Security Center's service IPs.
        
    4.  **Check the data import task**: In Security Center, on the **Data Import** page, check the task status and error logs. Make corrections based on the information provided.
        
-   **Why should I select** `**Apache**` **or** `**AWS-S3**` **instead of Tencent Cloud when granting permissions?**
    
    This is because log import uses standard, compatible protocols rather than vendor-specific APIs.
    
    -   **IDC** represents the protocol vendor, where **Apache** represents Kafka and **AWS-S3** represents object storage.
        
    -   Authorizing **Tencent Cloud** is only used for integrating Agentic SOC's [threat detection rules](/help/en/security-center/user-guide/detection-rules) with Tencent Cloud for security event linkage (such as blocking IPs). This type of authorization cannot be used for log import.
