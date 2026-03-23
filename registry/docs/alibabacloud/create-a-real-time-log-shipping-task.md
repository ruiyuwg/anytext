You can enable the real-time log delivery feature of Edge Security Acceleration (ESA) to collect system logs, application logs, or device operation logs in real time and deliver the collected logs to specified destinations for storage and analysis. This helps monitor your business and protect your data. You can troubleshoot issues and improve content delivery performance based on real-time logs.

## **Before you begin**

-   Deliver real-time logs from ESA to Simple Log Service: Make sure that [Simple Log Service](https://sls.console.alibabacloud.com/lognext/profile) is activated. You are charged traffic and storage fees by Simple Log Service. For more information, see [Billing overview](/help/en/sls/billing-overview).
    
-   Deliver real-time logs from ESA to Object Storage Service (OSS): Make sure that [OSS](https://oss.console.alibabacloud.com/overview) is activated. You are charged traffic and storage fees by OSS. For more information, see [Billing overview](/help/en/oss/billing-overview).
    
-   Deliver real-time logs from ESA to a platform other than Alibaba Cloud: refer to the third-party requirements.
    

## **Create a real-time log delivery task**

In most cases, the latency of real-time log delivery is within 5 minutes. The following flowchart shows how to create a real-time log delivery task.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608875671/CAEQORiBgMDgvKOUqhkiIGRkNjhlMGJiMGJhOTQ5OGE5MmRmNTczNDg5NWIyNDM24449247_20240615114809.377.svg)

**Note**

If you deliver logs to a third-party object storage service, such as AWS S3 or an S3-compatible storage service, the system verifies the ownership to ensure data security.

### **Select a log category**

Logs for are collected for all websites in an account while logs of other categories are collected for individual websites.

Therefore, you must select a log category when you create a real-time log delivery task.

## Function and Pages logs and Edge Container logs

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the left navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
2.  On the **Real-time Logs** page, click **Create Delivery Task**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608875671/p905476.png)
    
3.  In the **Select Log Category** step of the wizard that appears, enter a task name and select a log category. Then, click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608875671/p908002.png)
    

## **Access and origin logs, firewall logs, TCP/UDP proxy logs, and DNS logs**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
3.  On the **Delivery Tasks** tab, click **Create Delivery Task**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7553489271/p855499.png)
    
4.  In the **Select Log Category** step of the wizard that appears, specify a task name and select a log category. Then, click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907954.png)
    

### **Select log fields**

In the **Select Log Field** step, configure the parameters and click **Next**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907961.png)

The following list describes the parameters:

-   **Log Fields:** Select the fields that you want to collect. For more information, see [Log fields](/help/en/edge-security-acceleration/esa/user-guide/collection-field-description).
    
-   **Sampling Rate:** Specify the sampling rate to reduce the number of logs to be delivered for lower storage costs. After you configure the sampling rate, ESA randomly samples logs based on the specified percentage and delivers the logs to the destination.
    
-   **Filter:** Specify the conditions for filtering the logs to be delivered. You can add up to 20 filter conditions.
    
-   **Container Name:** Select the containers that you deployed. You can add up to 19 container names.
    

### **Select a destination**

In the **Select Destination** step, select the destination to which you want to deliver logs and click **Next**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907964.png)

The following list describes the destinations:

-   Log analysis service:
    
    Alibaba Cloud Simple Log Service
    
-   Object storage services:
    
    -   Alibaba Cloud OSS
        
    -   Amazon S3
        
    -   S3-compatible Storage
        
-   Custom services:
    
    -   HTTP Server
        
    -   Kafka
        

### **Configure destination details**

#### Alibaba Cloud Simple Log Service

In the **Configure Destination Details** step, configure the parameters and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907970.png)

The following list describes the parameters:

-   **Collected From**: Select a location from which ESA collects the logs.
    
-   **SLS Region**: Select a Simple Log Service region to which the logs are delivered.
    
-   **Authorization**: Authorize ESA to access Simple Log Service. The system automatically creates the AliyunServiceRoleForESARealtimeLogPushSLS service-linked role and grants the required permissions to the role. This way, ESA can assume the role to access Simple Log Service. For more information about the role, see [RAM roles](/help/en/edge-security-acceleration/esa/user-guide/real-time-log-ram-role).
    

#### Alibaba Cloud OSS

In the **Configure Destination Details** step, configure the parameters and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907971.png)

The following list describes the parameters:

-   **Collected From**: Select a location from which ESA collects the logs.
    
-   **Bucket Region**: Select the region where the destination bucket is located.
    
-   **Note**
    
    If you have not created a bucket for log storage, go to the [OSS console](https://oss.console.alibabacloud.com/bucket) to create a bucket.
    
-   **Bucket Name**: Select an existing bucket in your account.
    
-   **Authorization**: Authorize ESA to access Alibaba Cloud OSS. The system automatically creates the AliyunESARealtimeLogPushOSSRole service-linked role and grants the required permissions to the role. This way, ESA can assume the role to access OSS.
    

#### Amazon S3

In the **Configure Destination Details** step, configure the parameters and click **Next**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8926760471/p921408.png)

**Important**

Make sure that the destination bucket is not a Requester Pays bucket. Otherwise, logs may fail to be delivered.

The following list describes the parameters:

-   **Collected From**: Select a location from which ESA collects the logs.
    
-   **Bucket Path**: Enter the path of your bucket.
    
-   **Bucket Region**: Select the region where the destination bucket is located.
    
-   **Encryption Required in Bucket Policy**:
    
    -   **No**: Select this option if server-side encryption is not enforced for your bucket.
        
    -   **Yes. My Policy Requires AWS SSE-S3 AES256 Server-side Encryption**: Select this option if server-side encryption is enforced for your bucket.
        
-   **Authorize ESA to Upload Files**: To ensure that ESA is authorized to deliver real-time logs to your bucket, the code for granting the required permissions is provided. You must go to **Amazon S3 Buckets > the destination bucket > Permissions > Bucket policy**, click **Edit**, and then copy the code to the **Policy** section.
    

#### **Verify the ownership**

**Note**

After you configure the destination details for Amazon S3, the system sends a token file that has a .txt filename extension to the directory in which the logs are stored in your bucket.

Follow the instructions on the right side of **Prove Ownership** to find the TXT file in Amazon S3, copy the content to the **Token** field, and then click **OK**.

#### S3-compatible storage

In the **Configure Destination Details** step, configure the parameters and click **Next**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p907974.png)

The following list describes the parameters:

-   **Collected From**: Select a location from which ESA collects the logs.
    
-   **S3-compatible Bucket Path**: Enter the path of your bucket. The system automatically generates a subdirectory in your bucket path based on the current date to store logs.
    
-   **Bucket Region**: Enter the region where your bucket is located.
    
-   **Access Key ID**: Enter the access key ID.
    
-   **Secret Access Key**: Enter the secret access key.
    
-   **Endpoint URL**: Enter the URL of the S3-compatible server that you use. The URL does not include the name or path of your bucket.
    

#### Verify the ownership

**Note**

After you configure the destination information for the S3-compatible storage, the system sends a token file that has a .txt filename extension to the directory where the logs are stored in your bucket.

Follow the instructions on the right side of **Prove Ownership** to find the TXT file in the S3-compatible storage, copy the content to the **Ownership Token** file, and then click **OK**.

#### HTTP server

In the **Configure Destination Details** step, configure the parameters and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057489371/p858442.png)

The following list describes the parameters:

-   **Collected From**: Select a location from which ESA collects the logs.
    
-   **Delivered To**: Enter the URL of your HTTP server. The URL must contain http:// or https://.
    
-   **Compression Method**: Select a compression method from the drop-down list.
    
    -   gzip
        
    -   zlib
        
    -   snappy
        
    -   no
        
-   **Server Authentication**: Specify whether your server requires encrypted signatures. If you set this parameter to Encrypted Signature, you must configure the following parameters:
    
    -   **PrivateKey**: Enter the private key used to calculate the authentication value.
        
    -   **ExpiredTime**: Enter the validity period of the signature.
        
    
    For information about the working mechanism and examples of server authentication, see [Server authentication](/help/en/edge-security-acceleration/esa/user-guide/server-authentication).
    
-   **PrivateKey**: The private key used to calculate the authentication value. The key must be 6 to 18 characters in length and can contain letters and digits.
    
-   **ExpiredTime**: The validity period of the signature. Unit: seconds.
    
-   **Custom HTTP Request Header** (optional): You can add up to 20 custom HTTP request headers.
    
-   **Custom URL Parameter** (optional): You can add up to 20 custom URL parameters.
    
-   **Log Body Prefix** (optional): Enter a custom prefix for the log body.
    
-   **Log Body Suffix** (optional): Enter a custom suffix for the log body.
    

#### Kafka

In the **Configure Destination Details** step, configure the parameters described in the following table and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8926760471/p858444.png)

**Parameter**

**Description**

**Collected From**

Select a location from which ESA collects the logs.

**Kafka Topic**

Enter your Kafka topic.

**Broker Address**

Enter the addresses of your Kafka brokers.

**Note**

-   An address can be a domain name or an IP address.
    
-   Press Enter to confirm each address you entered.
    
-   You can add up to 50 addresses.
    

**Compression Method**

Select a compression method from the drop-down list.

-   gzip
    
-   snappy
    
-   lz4
    
-   zstd
    
-   no
    

**Server Authentication**

Specify whether your server requires encrypted signatures. If you set this parameter to Encrypted Signature, you must configure the following parameters:

-   **Authentication Method**. Valid values:
    
    -   PLAIN
        
    -   SCRAM-SHA-256
        
    -   SCRAM-SHA-512
        
-   **Username**
    
-   **Password**
    

**Load Balancer**

Select a load balancer implementation.

-   LeastBytes
    
-   Hash
    
-   RoundRobin
    
-   CRC32Balancer
    
-   Murmur2Balancer
    

## **Add custom fields**

You can add additional log fields to record specific information. This way, you can further monitor and analyze log data.

**Note**

Only access and origin logs support the custom log field named `CustomField`.

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
3.  On the **Real-time Logs** page, click the **Custom Fields** tab. On the **Custom Fields** tab, click **Add Custom Field**.
    
4.  In the **Add Custom Field** dialog box, set **Field Type** and **Field Name** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6126125471/p938977.png)
    
    The following list describes the parameters:
    
    -   **Request Header**: A request header is part of an HTTP request sent from a client to a server. It contains the details about the request. The request header provides the context information about the request to help the server better process the request.
        
    -   **Response Header**: A response header is part of an HTTP request sent from a server to a client. It contains the details about the response. The response header provides the context information about the response to help the client better process the response.
        
    -   **Cookies**: Cookies are small text files stored on clients, which are generally browsers. Cookies are used to keep session status.
