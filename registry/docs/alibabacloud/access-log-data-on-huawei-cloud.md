In a multi-cloud environment, security logs are often scattered across various cloud platforms, complicating unified threat detection and incident response. Security Center provides the **Agentic SOC** feature to centrally import and analyze security logs from Huawei Cloud products, such as Web Application Firewall (WAF) and Cloud Firewall (CFW). This feature helps you achieve unified security management across multi-cloud environments.

## How it works

1.  **Log aggregation at the source**: Logs from Huawei Cloud products, such as WAF and CFW, are first aggregated into Huawei Cloud's Log Tank Service (LTS).
    
2.  **Data export**: Using LTS, log data is exported to Distributed Message Service (DMS) for Kafka or Object Storage Service (OBS), acting as relay nodes for cross-cloud data transfer.
    
3.  **Cross-cloud data import**: The Agentic SOC platform acts as a consumer, subscribing to and pulling log data from DMS for Kafka or OBS using standard Kafka or S3 protocols. The data is then ingested into a specified data source.
    
4.  **Ingestion and standardization**: Inside the Agentic SOC platform, you create an ingestion policy and apply standardization rules. The platform parses and normalizes the raw logs before storing them in the data warehouse.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266188671/CAEQUxiBgIDK6t7W3hkiIGY4ODQ5MDM2NjRmMzQ5NDI4M2Q4ZmY4N2E3MzI0ZDEx5833690_20251028204332.303.svg)

## Supported logs

This solution supports importing the following log types from Huawei Cloud:

-   Web Application Firewall (WAF) alert logs
    
-   Cloud Firewall (CFW) alert logs
    

## **Send logs to LTS**

Before you import the logs, you must send all security product logs from Huawei Cloud to LTS.

## **Web Application Firewall**

**Note**

For detailed instructions, see the official Huawei Cloud documentation: [Using LTS to Record WAF Logs](https://support.huaweicloud.com/intl/zh-cn/usermanual-waf/waf_01_0172.html).

1.  **Log on to the console**
    
    Log on to the [Web Application Firewall console](https://console-intl.huaweicloud.com/waf/?locale=zh-cn). In the upper-left corner, select a region or project, and then in the navigation pane on the left, click **Events**.
    
2.  **Configure LTS**
    
    On the **Log Settings** tab, click **Connect to LTS**. Configure the following parameters:
    
    **Important**
    
    The configuration takes about 10 minutes to take effect.
    
    -   **Log Types**: WAF access logs and WAF attack logs.
        
    -   **Log Group**: Select the Log Group where you want to store the logs. You can click **Create Log Group** to create a new one.
        
    -   **WAF Access Log Stream**: If you selected **WAF access logs** for **Log Type**, select a WAF access log stream. You can also click **Create Log Stream** to create a new one.
        
    -   **WAF Attack Log Stream**: If you selected **WAF attack logs** for **Log Type**, select a WAF attack log stream. You can also click **Create Log Stream** to create a new one.
        

## **Cloud Firewall**

**Note**

For detailed instructions, see the official Huawei Cloud documentation: [Ingesting CFW Logs to LTS](https://support.huaweicloud.com/intl/zh-cn/usermanual-lts/lts_04_0513.html).

1.  **Create a log group and log stream**
    
    1.  Log on to the [Log Service console](https://console-intl.huaweicloud.com/lts/?#/cts/manager/groups). On the **Log Ingestion** page, click **Create Log Group**.
        
    2.  On the **Create Log Group** page, configure **Log Group Name** and **Log Retention Period (Days)**.
        
        **Note**
        
        We recommend adding the suffix `-cfw` to the Log Group name (for example, `mylog-cfw`) for easier identification.
        
    3.  After the Log Group is created, find it in the list and click **Create Log Stream** under the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1022846.png) icon.
        
    4.  On the **Create Log Stream** page, configure **Log Stream Name** and **Log Storage Duration (Days)**.
        
        **Note**
        
        We recommend using suffixes like `-attack`, `-access`, and `-flow` for attack event logs, access control logs, and traffic logs, respectively.
        
        -   **Attack logs**: Records attack alerts, including event type, protection rule, action, 5-tuple, Attack Payload, and other details.
            
        -   **Access logs**: Records traffic information that matches ACL policies, including hit time, 5-tuple, response action, access control rule, and other details.
            
        -   **Traffic logs**: Records all traffic passing through the Cloud Firewall, including start time, end time, 5-tuple, byte count, packet count, and other details.
            
2.  **Set up LTS synchronization**
    
    1.  Log on to the [Cloud Firewall console](https://console-intl.huaweicloud.com/cfw/?locale=zh-cn). In the upper-left corner, select the region and firewall instance. In the navigation pane on the left, choose **Log Audit** > **Log Management**.
        
    2.  On the **Log Management** page, click **Configure LTS Synchronization**. Set the **Log Group** and **Log Source** to the Log Group and Log Stream you created in the previous step.
        

## **Choose an import method**

You can import Huawei Cloud LTS logs into Security Center using either the Kafka method or the OBS method. Each method has different trade-offs in terms of real-time performance, cost, and configuration complexity. Choose the method that best fits your needs.

**Aspect**

**Kafka (DMS)**

**OBS**

**Real-time performance**

Near-real-time (real-time transfer can be configured)

Minute-level latency

**Configuration complexity**

Higher. Requires configuring a Kafka instance, an Elastic IP Address (EIP), security groups, etc.

Lower. Only requires configuring a transfer task.

**Cost structure**

-   **Huawei Cloud**: Costs for the Kafka instance, EIP and traffic, and Log Service.
    
-   **Alibaba Cloud**: Agentic SOC log ingestion traffic.
    

-   **Huawei Cloud**: Costs for OBS storage and Log Service.
    
-   **Alibaba Cloud**: Agentic SOC log ingestion traffic.
    

**Best for**

Scenarios requiring high real-time log analysis, such as stream-based security computing or rapid alert response.

Scenarios where real-time performance is not critical, with a focus on cost-effectiveness, log archiving, or batch offline analysis.

## **Configure the data import**

## **Import data using Kafka (DMS)**

### **Step 1: Prepare the Kafka data channel on Huawei Cloud**

#### **Configure a Kafka instance**

1.  **Create a Kafka instance**
    
    **Note**
    
    For more information, see the official Huawei Cloud documentation: [Buying a Kafka Instance](https://support.huaweicloud.com/intl/zh-cn/usermanual-kafka/kafka-ug-180604013.html).
    
    1.  **Configure instance specifications and a Virtual Private Cloud (VPC)**: Go to the [Buy Kafka Instance page](https://console-intl.huaweicloud.com/dms/?engine=kafka&locale=zh-cn#/queue/newCreateKafkaV2). On the **Quick Config** tab, complete the basic and network configurations.
        
    2.  **Configure public access**: In the **Access Mode** area, select Public Network Access and configure the following parameters:
        
        -   **Public Network Access**: **Ciphertext Access**.
            
        -   **Public IP Addresses**: Select an accessible Elastic IP Address (EIP). If you do not have enough EIPs, follow the steps below to purchase them. For more information, see the Huawei Cloud documentation: [Apply for an EIP](https://support.huaweicloud.com/intl/zh-cn/usermanual-eip/eip_0008.html).
            
            -   Click **Create Elastic IP** to go to the EIP purchase page.
                
                **Important**
                
                You must purchase at least three EIPs.
                
            -   After the purchase is complete, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1022450.png) icon next to **Elastic IP Address** and select the newly purchased EIPs from the drop-down list.
                
        -   **Kafka Security Protocol**:
            
            -   **SASL\_SSL**: Uses SASL for authentication and SSL certificates for data encryption.
                
            -   **SASL\_PLAINTEXT**: Uses SASL for authentication and transmits data in plaintext for better performance.
                
        -   **SASL PLAIN Mechanism**: If you set **Kafka Security Protocol** to SASL\_PLAINTEXT, we recommend selecting the CRAM-SHA-512 mechanism.
            
        -   **Username**/**Password**: The username and password for the client to connect to the Kafka instance. The username cannot be changed after encrypted access is enabled.
            
            **Important**
            
            Securely store the username and password. You will need them later to [grant Security Center access to Kafka](#ef086a494cwoh).
            
2.  **Create a topic**
    
    1.  Go to the [Huawei Cloud - Kafka Management](https://console-intl.huaweicloud.com/dms/?engine=kafka&locale=zh-cn#/queue/manager/newKafkaList) page. In the upper-left corner, select the region where your Kafka instance is located.
        
    2.  In the navigation pane on the left, click **Kafka Instances**. Click the name of your target instance to go to its details page. Then, click **Topic Management**.
        
    3.  On the Topic list page, click **Create Topic** and configure the parameters based on your business needs. You can use the default settings if you have no special requirements.
        
        **Note**
        
        For more information, see the official Huawei Cloud documentation: [Topic Parameter Description](https://support.huaweicloud.com/intl/zh-cn/usermanual-kafka/kafka-ug-180604018.html).
        
3.  **Configure security rules**
    
    After enabling Public Access, you must configure security group rules to allow connections to Kafka.
    
    1.  On the Kafka instance details page, in the navigation pane on the left, click **Overview**. In the **Network** section of the **Overview** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1022468.png) icon next to **Security Group**.
        
    2.  On the policy configuration page, go to the **Inbound Rules** tab, click **Add Rule**, and configure the parameters as follows:
        
        1.  **Policy**: Allow
            
        2.  **Type**: IPv4
            
        3.  **Protocol**: Custom TCP
            
        4.  **Port**: 9095
            
        5.  **Source**: 0.0.0.0/0
            
4.  **Obtain Kafka connection parameters**
    
    On the Kafka instance **Overview** page, record the **Address (Public Network, Ciphertext)**, Enabled **Security Protocol**, and **SASL PLAIN Mechanism**.
    

#### **Create a transfer task from LTS to Kafka**

**Note**

For detailed instructions, see the official Huawei Cloud documentation: transfer[Transferring Logs to DMS](https://support.huaweicloud.com/intl/zh-cn/usermanual-lts/lts_04_0043.html).

1.  Log on to the [Log Service console](https://console-intl.huaweicloud.com/lts/?#/cts/manager/groups). In the navigation pane on the left, choose Log Transfer, and then click **Configure Log Transfer** in the upper-right corner.
    
2.  Configure the log transfer parameters as described below.
    
    -   **Transfer Mode**: Periodic transfer.
        
    -   **Transfer Destination**: DMS.
        
    -   **Log Group Name**/**Log Stream Name**: Select the Log Group/Log Stream you configured in the [Send logs to LTS](#7b2c86c6dape9) step (for example, WAF attack logs).
        
    -   **Kafka Instance**: Select the instance you configured in the [Configure a Kafka instance](#31201494e5t0h) step.
        
    -   **Topic**: Select the Topic you configured in the [Create a topic](#531517c26bvcl) step.
        
    -   **Transfer Interval**: Real-time.
        
    -   **Format**: You can select **Raw Log Format** or **JSON**.
        

### **Step 2: Configure the Kafka log import on Alibaba Cloud**

#### **Grant Security Center access to Kafka**

1.  Go to the [Security Center console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner, select your asset region: ****Outside Chinese Mainland**** or **Outside Chinese Mainland**.
    
2.  On the **Multi-cloud Configuration Management** tab, select **Multi-cloud Assets**, click **Grant Permission**, and select **IDC** from the drop-down list. In the panel that appears, configure the following parameters:
    
    -   **Vendor**: Select **Apache**.
        
    -   **Connection Type**: Select **Kafka**.
        
    -   **Endpoint**: Enter the IPv4 [Encrypted Public Endpoint](#879651528bg3d) for Kafka that you obtained from Huawei Cloud.
        
    -   **Username**/**Password**: Enter the [username and password](#516dc34e883x4) you configured for Kafka on Huawei Cloud.
        
    -   **Communication Protocol**: Enter the [Enabled Security Protocol](#879651528bg3d) you configured for Kafka on Huawei Cloud.
        
    -   **SASL Authentication Mechanism**: Enter the [SASL PLAIN Mechanism](#879651528bg3d) you configured for Kafka on Huawei Cloud.
        
3.  **Configure synchronization policy**
    
    **AK Service Status Check**: Set the interval at which Security Center automatically checks the validity of the Huawei Cloud Access Key. You can select "Disable" to turn off this check.
    

### **Create a data import task**

1.  **Create a data source**
    
    Create a dedicated Agentic SOC data source for the Huawei Cloud log data. If you have already created one, skip this step.
    
    1.  Go to the [Security Center console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner, select your asset region: **Chinese Mainland** or ****Outside Chinese Mainland****.
        
    2.  On the **Data Source** tab, create a data source for the Huawei Cloud logs. For detailed instructions, see [Create a data source: Logs are not ingested into Simple Log Service (SLS)](/help/en/security-center/user-guide/set-up-data-sources#e870f3a8640ft).
        
        -   **Source Data Source Type**: You can select **User Log Service** or **Agentic SOC Dedicated Collection Channel**.
            
        -   **Add Instances**: We recommend creating a new **Logstore** to isolate the data.
            
2.  On the **Data Import** tab, click **Add Data**. In the panel that appears, configure the following parameters:
    
    -   **Endpoint**: Enter the IPv4 [Encrypted Public Endpoint](#879651528bg3d) for Kafka that you obtained from Huawei Cloud.
        
    -   **Topics**: Select the [Topic](#531517c26bvcl) you created on Huawei Cloud.
        
    -   **Value Type**: Select a value based on the transfer [Format](#1e9c932253tca) you set for LTS logs. The mapping is as follows:
        
        **Transfer Format**
        
        **Value Type**
        
        JSON format
        
        json
        
        Raw Log Format
        
        text
        
3.  **Configure the destination data source**
    
    -   **Data Source Name**: Select the data source you created in Step 1.
        
    -   **Destination Logstore**: The Logstores under the selected data source are automatically loaded.
        
4.  Click **OK** to save the configuration. After the import is configured, Security Center automatically pulls logs from Huawei Cloud.
    

## Import data using OBS

### **Step 1: Prepare OBS data and obtain an access key on Huawei Cloud**

#### **Configure LTS to transfer logs to OBS**

1.  **Create a transfer task**
    
    **Note**
    
    For detailed instructions, see the official Huawei Cloud documentation: [Transferring Logs to OBS](https://support.huaweicloud.com/intl/zh-cn/usermanual-lts/lts_04_0041.html).
    
    1.  Log on to the [Log Service console](https://console-intl.huaweicloud.com/lts/?#/cts/manager/groups). In the navigation pane on the left, choose **Log Transfer**, and then click **Configure Log Transfer** in the upper-right corner.
        
    2.  Configure the log transfer parameters as described below.
        
        -   **Transfer Mode**: Periodic transfer.
            
        -   **Transfer Destination**: OBS Bucket.
            
        -   **Log Group Name**/**Log Stream Name**: Select the Log Group/Log Stream you configured in the [Send logs to LTS](#7b2c86c6dape9) step (for example, WAF Access Log Stream).
            
        -   **OBS Bucket**: Select an existing OBS bucket or create a new one on the [Huawei Cloud - Bucket List](https://console-intl.huaweicloud.com/obs/?&locale=zh-cn#/obs/manager/buckets) page.
            
            **Note**
            
            LTS can transfer logs to OBS buckets that use the Standard or Restored Archive storage class.
            
        -   **Custom Log Transfer Path**:
            
            -   **Enabled**: You can set a custom path. The format is `/LogTanks/RegionName/%GroupName/%StreamName/<custom_transfer_path>`. The default custom path is `lts/%Y/%m/%d`.
                
            -   **Disabled**: Logs are transfered to the default system path (`LogTanks/RegionName/2019/01/01/<Log_Group>/<Log_Stream>/<log_file_name>`).
                
        -   **Compression Format**: Select `uncompressed`, `gzip`, or `zip`.
            
            **Warning**
            
            **Warning**
            
            Security Center does not currently support parsing log files compressed in the `snappy` format.
            
2.  **Obtain the OBS bucket endpoint**
    
    1.  Go to the [Huawei Cloud - Bucket List](https://console-intl.huaweicloud.com/obs/?&locale=zh-cn#/obs/manager/buckets) page and locate the LTS log transfer OBS bucket you configured in the previous step. On the bucket details page, in the navigation pane on the left, click **Overview**.
        
    2.  In the **Domain Name** area, view the **Endpoint**. The format is `obs.${region}.myhuaweicloud.com`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1022676.png)
        

#### **Create an access key**

1.  Go to the or [Huawei Cloud - My Credentials](https://console-intl.huaweicloud.com/iam/?region=cn-north-1&&locale=zh-cn#/mine/accessKey) page and in the navigation pane on the left, select **Access Keys**.
    
2.  Click **Create Access Key**. Either click **Download CSV File** or copy the `Access Key ID` and `Secret Access Key` to a local file for safekeeping. For more information, see or [Access Keys](https://support.huaweicloud.com/intl/zh-cn/usermanual-ca/ca_01_0003.html#section1).
    

### **Step 2: Configure the OBS log import on Alibaba Cloud**

#### **Grant Security Center access to Huawei Cloud OBS**

1.  Go to the [Security Center console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner, select your asset region: ****Chinese Mainland**** or **Outside Chinese Mainland**.
    
2.  On the **Multi-cloud Configuration Management** tab, select **Multi-cloud Assets**, click **Grant Permission**, and select **IDC** from the drop-down list. In the panel that appears, configure the following parameters:
    
    -   **Vendor**: Select **AWS-S3**.
        
    -   **Connection Type**: Select **S3**.
        
    -   **Endpoint**: Enter the [Endpoint](#7ade67b08ewji) of the OBS bucket.
        
    -   **Access Key ID**/**Secret Access Key**: Enter the [Access Key](#b915a846b3z5u) you created on Huawei Cloud.
        
3.  **Configure synchronization policy**
    
    **AK Service Status Check**: Set the interval at which Security Center automatically checks the validity of the Huawei Cloud Access Key. You can select "Disable" to turn off this check.
    

#### **Create a data import task**

1.  Go to the [Security Center console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner, select your asset region: ****Chinese Mainland**** or ****Outside Chinese Mainland****.
    
2.  On the **Data Import** tab, click **Add Data**. In the panel that appears, configure the following parameters:
    
    -   **Endpoint**: Enter the [Endpoint](#7ade67b08ewji) of the OBS bucket.
        
    -   **OBS Bucket**: The OBS bucket where LTS transfers logs.
        
3.  **Configure the destination data source**
    
    -   **Data Source Name**: Select a custom data source with a normal status (****Custom Log Capability**** or ****Agentic SOC Dedicated Data Collection Channel****). If no suitable data source is available, create one by following the instructions in [Data sources](/help/en/security-center/user-guide/set-up-data-sources).
        
    -   **Destination Logstore**: The Logstores under the selected data source are automatically loaded.
        
4.  Click **OK** to save the configuration. After the import is configured, Security Center automatically pulls logs from Huawei Cloud.
    

## **Analyze the imported data**

After the data is successfully ingested, you must configure parsing and detection rules so that Security Center can analyze the logs.

1.  **Create a new ingestion policy**
    
    Follow the instructions in [Connect products to Agentic SOC 2.0](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0) to create a new ingestion policy with the following settings:
    
    -   **Data Source**: Select the **Destination Data Source** you configured in the data import task.
        
    -   **Standardized Rule**: Agentic SOC provides built-in standardization rules for Huawei Cloud products that you can select directly.
        
    -   **Standardization Method**: Since you are ingesting alert logs, this is set to **Real-time Consumption** by default and cannot be changed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1021390.png)
        
2.  **Configure threat detection rules**
    
    Based on your security requirements, enable or create log detection rules in rule management to analyze logs, generate alerts, and create security events. For detailed instructions, see [Configure threat detection rules](/help/en/security-center/user-guide/detection-rules).
    

## Billing

This solution incurs costs from the following services. Before you proceed, carefully read the billing documentation for each product to estimate your costs:

-   **On the Huawei Cloud side**: Costs are mainly for data transfer and storage:
    
    **Service**
    
    **Billable items**
    
    **Billing documentation**
    
    **LTS**
    
    Log storage, read/write operations, etc.
    
    [Huawei Cloud LTS - Billing Overview](https://support.huaweicloud.com/intl/zh-cn/price-lts/lts-03216.html).
    
    **DMS for Kafka**
    
    Instance specifications, public network traffic, etc.
    
    [Huawei Cloud Kafka - Billing Overview](https://support.huaweicloud.com/intl/zh-cn/price-lts/lts-03216.html).
    
    **OBS**
    
    Storage capacity, number of requests, public network traffic, etc.
    
    [Huawei Cloud OBS - Billing Overview](https://support.huaweicloud.com/intl/zh-cn/price-obs/obs_42_0001.html).
    
-   **On the Alibaba Cloud side**: Costs depend on the **data storage method** you choose.
    
    **Note**
    
    For information about **Agentic SOC** billing, see [Billing details](/help/en/security-center/product-overview/billing-overview#1ed355c216zzc) and [Pay-as-you-go billing for Threat Analysis and Response](/help/en/security-center/product-overview/billing-overview#79d5b155140q6).
    
    For information about **Simple Log Service (SLS)** billing, see [SLS billing overview](/help/en/security-center/product-overview/billing-overview).
    
    **Data source type**
    
    **Agentic SOC billable items**
    
    **SLS billable items**
    
    **Notes**
    
    **Agentic SOC Dedicated Collection Channel**
    
    -   Log ingestion fee.
        
    -   Log storage and write fees.
        
    
    **Note**
    
    Both items consume **Log Ingestion Traffic**.
    
    Fees for items other than log storage and writes (such as public network traffic).
    
    Agentic SOC creates and manages the SLS resources. Therefore, fees for Logstore storage and writes are billed through Agentic SOC.
    
    **User Log Service**
    
    Log ingestion fee, which consumes **Log Ingestion Traffic**.
    
    All log-related fees (including storage, writes, public network traffic, etc.).
    
    All log resources are managed by Simple Log Service (SLS). Therefore, all log-related fees are billed through SLS.
    

## FAQ

-   **What should I do if I don't see any log data in SLS after creating a data import task?**
    
    1.  **Check the third-party cloud side**: Log on to the Huawei Cloud console and confirm that logs are generated and delivered or transferred to the configured LTS, Kafka Topic, or OBS bucket.
        
    2.  **Check credentials**: In Security Center, go to the **Multi-cloud Assets** page and check that the authorization status is normal. Confirm that the Access Key is valid and the password is correct.
        
    3.  **Check network connectivity**: If you are using the Kafka method, ensure that public access is enabled for the Kafka service on the third-party cloud and that the security group or firewall rules correctly allow traffic from Security Center's service IP addresses.
        
    4.  **Check the data import task**: In Security Center, go to the **Data Import** page to view the task status and error logs. Make corrections based on the information provided.
        
-   **Why select** `**Apache**` **or** `**AWS-S3**` **instead of** `**Huawei Cloud**` **when granting permission?**
    
    This is because the log import feature uses standard, compatible protocols rather than vendor-specific APIs.
    
    -   **IDC** represents the protocol vendor. `**Apache**` represents Kafka, and `**AWS-S3**` represents object storage.
        
    -   Authorizing **Huawei Cloud** is for coordinating security event responses with Huawei Cloud (such as blocking an IP address) using Agentic SOC's [threat detection rules](/help/en/security-center/user-guide/detection-rules); it does not enable log import.
