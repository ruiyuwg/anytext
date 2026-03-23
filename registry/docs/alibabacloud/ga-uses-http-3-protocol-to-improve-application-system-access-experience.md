Quick UDP Internet Connections (QUIC) is a low-latency transport protocol based on UDP, and HTTP/3 is built on top of QUIC. HTTP/3 enables multiplexing without requiring reconnection, which improves resource access efficiency. In weak network scenarios, frequent handoffs between Wi-Fi and mobile networks, or high latency and packet loss, using the HTTP/3 protocol with Global Accelerator (GA) accelerates application access, enhances system performance, and improves user experience.

## **Overview**

### **QUIC and HTTP/3**

The QUIC protocol is a transport protocol based on UDP that provides faster and more secure internet connections. The primary goal of QUIC is to address the performance bottlenecks of TCP and TLS in modern network environments, especially in high-latency networks and with multiplexed connections.

Due to its performance advantages, QUIC is widely considered a key technology for future internet transport protocols and is the underlying transport layer for HTTP/3. As major browsers and web servers begin to support QUIC, it is gradually becoming a part of modern internet infrastructure.

**Why use QUIC and HTTP/3?**

By adopting QUIC as its transport layer protocol and incorporating a series of optimizations, HTTP/3 offers significant improvements in performance, security, and reliability compared to HTTP/1 and HTTP/2. It performs particularly well in network environments with high latency and packet loss rates.

Here are some key advantages and features of the QUIC protocol:

-   Reduced latency and multiplexing:
    
    -   A TCP connection requires a three-way handshake, and the TLS handshake requires additional round-trip times (RTTs). This significantly increases connection setup time in high-latency networks. QUIC allows multiple independent, bidirectional data streams to run concurrently within a single connection. This helps reduce the latency associated with establishing multiple TCP connections and improves packet loss handling.
        
-   Reliable transmission:
    
    -   Fast retransmission and congestion control: QUIC implements its own congestion control mechanism and fast retransmission strategy. When packet loss is detected, QUIC can quickly retransmit the lost data and dynamically adjust the sending rate based on network conditions to avoid network congestion and ensure efficient, reliable data transmission.
        
    -   Forward error correction: QUIC can use forward error correction (FEC) technology by adding redundant information when sending data packets. This allows the receiving end to recover the original data from this redundant information even if some packets are lost, without requiring retransmissions, thereby improving transmission reliability.
        
-   Enhanced security:
    
    -   TLS-based: QUIC integrates encryption as a core feature of the protocol. Every QUIC connection must use TLS for encryption, including the handshake process and all subsequent data transfers. This ensures data confidentiality and integrity.
        
    -   Full traffic encryption: TCP data transmission is susceptible to interference from intermediate devices like firewalls and NATs, which limits security. In contrast, QUIC is based on UDP and uses full traffic encryption to enhance data packet integrity and privacy across the entire transmission path, eliminating interference from intermediate nodes.
        

### Use cases for the HTTP/3 protocol

-   Improved web browsing experience: For web browsing, HTTP/3 can reduce page load times, especially for complex web pages that load multiple resources. With capabilities like multiplexing provided by QUIC, users see web content faster.
    
-   Real-time communication applications: Applications that are highly sensitive to latency, such as instant messaging, video conferencing, and online gaming, can benefit from HTTP/3. QUIC's low latency and fast error recovery mechanisms help ensure a smooth real-time communication experience.
    
-   Applications on mobile devices: Connections on mobile networks are often unstable. HTTP/3 provides a more stable connection experience for mobile users through QUIC's connection migration feature and its ability to adapt to network changes.
    
-   Streaming media services: For video and audio streaming services, such as short-form video and live streaming, HTTP/3 can ensure a smoother playback experience by reducing buffering and interruptions, thereby improving user satisfaction.
    
-   High concurrency scenarios: For large e-commerce or social media platforms during peak traffic, the multiplexing capability of HTTP/3 can effectively handle a large number of concurrent requests without encountering the head-of-line blocking issues common with HTTP/2.
    

### **Supported protocol versions and client requirements**

GA supports the `h3` version of the HTTP/3 protocol. You must ensure that the client's supported HTTP/3 version is compatible with GA's version:

-   The corresponding Chrome browser version is Chrome 87 or later. If you use other browsers, you need to ensure the browser supports HTTP/3.
    
-   If you use other clients such as self-developed applications, the client must integrate network libraries that support the QUIC protocol, such as: lsquic-client, cronet network library, ngtcp2, and quiche.
    

### How GA negotiates HTTP/3 with clients

Before establishing an HTTP/3 connection between the server and client, due to the connectionless nature of UDP, the client typically first establishes a secure connection with the server through a TLS 1.3 handshake, and automatically negotiates the use of HTTP/3 during this process, without requiring explicit specification by the user or developer.

HTTP/3 is a new protocol, not an update or extension of HTTP/1.1 or HTTP/2. It is based on the QUIC protocol. Due to this fundamental change, HTTP/3 is not directly compatible with previous HTTP versions. To ensure backward compatibility, web servers and browsers typically implement multiple HTTP versions, including HTTP/1.1, HTTP/2, and HTTP/3. They can automatically negotiate the most suitable protocol version based on what both the client and server support. This means that while HTTP/3 itself is not directly compatible with older HTTP versions, modern client and server implementations handle protocol selection and fallback automatically, so users and developers do not need to manage compatibility issues.

The following process describes how GA negotiates an HTTP/3 connection with a client:

1.  After configuring the maximum HTTP version to HTTP/3 in the HTTPS listener of the GA instance, GA will announce HTTP/3 support to the client. This support is announced in the HTTP response header [Alt-Svc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc), with the Alt-Svc header value: `Alt-Svc : h3=":$quic_port"; ma=3600`.
    
2.  The client attempts to establish an HTTP connection with GA. Note:
    
    -   When the client cannot establish an HTTP/3 connection, it always falls back to using HTTP/1.1 or HTTP/2.
        
    -   The client supports caching cookies related to HTTP/3.
        
    -   Scenarios where HTTP/3 connections cannot be established:
        
        -   The HTTP/3 version supported by the client is incompatible with the HTTP/3 version supported by GA.
            
        -   GA detects UDP traffic blocking or rate limiting that prevents HTTP/3 from working.
            
        -   The client does not support HTTP/3 at all, so it does not attempt to negotiate an HTTP/3 connection.
            
3.  Enabling or disabling HTTP/3 in GA does not affect existing connections or GA's ability to serve traffic over other HTTP versions.
    

## **Examples**

A company has its headquarters in Germany (Frankfurt), where an application server is deployed with a website that provides video services. The clients are primarily distributed in the China (Beijing) region.

The company's website service faces the following challenges:

-   Upgrading to HTTP/3 to improve service quality and system capacity.
    
-   Unstable cross-border public networks that cause frequent latency, jitter, and packet loss.
    

After enabling the HTTP/3 protocol with GA, the company can leverage the efficient transport mechanism of HTTP/3 based on QUIC to reduce latency, enhance connection reliability, and improve data transmission performance in poor network conditions.

Combined with HTTPS encryption, this solution not only ensures that users in China (Beijing) can securely access resources on the server through GA nodes but also enhances data security for sensitive information transmitted across vast geographical areas while optimizing transport efficiency. This improves the website's service quality and data security.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8875666671/CAEQUBiBgIDT77vW2RkiIGNlY2UwYmVkOTkxNDRjYTA4YWI2N2RhOWZkOWQ0MmE53963382_20230830144006.372.svg)

## Limitations

-   To use the HTTP/3 protocol with GA, you must select **HTTP/3** for the **Maximum HTTP Version** when you configure an HTTPS listener.
    
-   Only standard pay-as-you-go GA instances support HTTP/3. Standard subscription GA instances and basic GA instances do not support this feature.
    
-   If your pay-as-you-go GA instance does not support configuring the maximum HTTP protocol version, it may be because the instance's version does not support this feature. If you need to use this feature, please contact your business manager to apply for an instance upgrade.
    

## **Prerequisites**

-   The application server must be deployed and configured to provide HTTP services.
    
    **Test service configuration example reference**
    
    The following is an example of server configuration for testing. An ECS server in the Germany (Frankfurt) region is used for testing, with the CentOS 7.9 operating system. The service deployment commands are as follows:
    
    **Note**
    
    Upload the test video file to the server and modify the video file path in the fourth command line below to the correct file path.
    
    In this example, the mp4 file is uploaded to the same directory as index.html.
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "<video src="GA.mp4" controls=""></video>" > index.html
    ```
    
-   You have registered a domain name and completed ICP filing. For more information, see [Register a domain name on Alibaba Cloud](/help/en/dws/user-guide/how-to-register-a-domain-name) and [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    
-   You have purchased a certificate or uploaded a third-party certificate to SSL Certificate Service and bound it to your domain name. For more information, see [Quick start to official certificates](/help/en/ssl-certificate/product-overview/get-started-with-ssl-certificates-service).
    

## **Procedure**

### **Step 1: Configure a GA instance and enable HTTP/3**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Pay-as-you-go Instance**
    
3.  On the **Basic Instance Configuration** page, customize the GA instance name. After you complete the configuration, click **Next**.
    
4.  On the **Configure Acceleration Area** page, select **China (Beijing)** for **Acceleration Area**. You can keep other parameters at their default values or modify them as needed. After you complete the configuration, click **Next**.
    
    **Important**
    
    If the bandwidth peak value is set too low, throttling may occur causing traffic to be dropped. Please plan the bandwidth peak value reasonably to ensure it matches your business requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p832109.png)
    
5.  On the **Configure listeners** page, configure the following information. You can keep other parameters at their default values or modify them as needed. After you complete the configuration, click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Protocol**
    
    Select **HTTPS**.
    
    **Maximum HTTP Version**
    
    Select **HTTP/3**.
    
    **Note**
    
    -   If your pay-as-you-go GA instance does not support configuring **Maximum HTTP Version**, it may be because the instance version does not support it. To use this feature, please contact your account manager to request an instance upgrade.
        
    -   If the client does not support **HTTP/3**, Global Accelerator also supports **HTTP/2** or **HTTP/1.1** request access.
        
    
    **Port**
    
    Select the HTTPS default port **443**.
    
    **Server Certificate**
    
    Select the SSL certificate corresponding to your domain name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p832113.png)
    
6.  On the **Configure an endpoint group** page, configure the following information. Keep other parameters at their default values or modify them as needed. After you complete the configuration, click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select **Germany (Frankfurt)**.
    
    **Endpoint Configuration**
    
    -   Select **ECS** for **Backend Service Type**.
        
    -   Select your application server for **Backend Service**.
        
    
    **Port Mapping**
    
    When the listener port and application service port are different, you need to configure port mapping relationships.
    
    In this article, the listener port is configured as **443**, and the endpoint port is configured as **80**.
    
    **Cross-border Acceleration Settings**
    
    In this scenario, when business configuration involves cross-border access acceleration between the Chinese mainland and regions outside the Chinese mainland, or between other countries and regions, you need to read and select **Compliance Commitments Regarding Cross-border Data Transfers**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p832200.png)
    
    ![跨境合规 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p912223.png)
    
7.  On the **Configuration Review** page, review the configuration and click **Submit**, then wait for the instance to complete creation and configuration.
    

### Step 2: Configure DNS records

Point your domain name to the CNAME of the GA instance. This forwards access requests to GA for acceleration.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  Select the GA instance for which you want to configure domain name resolution, and copy its corresponding CNAME address.
    
3.  Complete the following steps to add a CNAME record.
    
    1.  On the [Public Zone](https://dnsnext.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.9b0a5ad1tRuDNs#/dns/domainList) page, find your target custom domain name, and click **Settings** in the **Actions** column.
        
        **Note**
        
        For domain names not registered with Alibaba Cloud, you need to first [add the domain name](/help/en/dns/domain-management#topic-2035895) to the Cloud DNS console before you can configure domain name resolution.
        
    2.  On Settings page, click **Add Record**.
        
    3.  In the **Add Record** panel, configure the following information to complete the CNAME record configuration, then click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Record Type**
        
        Select **CNAME** from the drop-down list.
        
        **Hostname**
        
        The prefix of your domain name.
        
        **Query Source**
        
        Select Default.
        
        **TTL**
        
        Time To Live, which indicates the cache time of DNS records on DNS servers. This article uses the default value.
        
        **Record Value**
        
        Enter the CNAME address corresponding to the domain name, which is the CNAME address of the GA instance you copied.
        

### **Step 3: Verify HTTP/3 and acceleration effect**

Use a client located in the China (Beijing) acceleration area to test the video acceleration effect.

1.  Test the GA acceleration effect using HTTP/3:
    
    Open the developer tools in your browser and access `https://<your custom domain name>` to normally access the backend service. You can disable browser caching to avoid cache impact on HTTP/3 negotiation, for example, by checking `Disable cache` in Chrome.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p833213.png)
    
2.  Test the GA acceleration effect without using HTTP/3:
    
    Modify the HTTPS listener configuration parameters of the GA instance, changing **Maximum HTTP Version** to HTTP/2.
    
    Open the developer tools in your browser and access `https://<your custom domain name>` to normally access the backend service.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p832430.png)
    
3.  Test without GA acceleration:
    
    If the application server does not have a public IP address, bind an Elastic IP Address (EIP) to it.
    
    Open the developer tools in your browser and directly access `http://<public IP address>:<port>` to normally access the backend service.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439291471/p832420.png)
    
4.  Acceleration effect comparison:
    
    Summarizing the test data above, it can be seen that using GA acceleration with HTTP/3 improves the speed at which clients access videos on the backend server.
    
    **Scenario**
    
    **Page preload time** **(3.3MB)**
    
    **Full video load time (112 MB)**
    
    **Page preload comparison**
    
    Full video load comparison
    
    Scenario 1: Using GA with HTTP/3
    
    16.86 seconds
    
    3.8 minutes
    
    Compared to Scenario 2: 0.78s faster (4.42% improvement)
    
    Compared to Scenario 2: 0.4 min faster (9.52% improvement)
    
    Scenario 2: Using GA without HTTP/3
    
    17.64 seconds
    
    4.2 minutes
    
    Compared to Scenario 3: 48.36s faster (73.27% improvement)
    
    Compared to Scenario 3: 34.4 min faster (89.12% improvement)
    
    Scenario 3: Not using GA acceleration
    
    1.1 minutes
    
    38.6 minutes
    
    /
    
    /
    
    **Note**
    
    The examples and data in this article are for reference only. Actual acceleration effects will vary based on your specific tests.
    

## **FAQ**

### **Why is there no HTTP/3 configuration option in the console?**

This option may be missing because your pay-as-you-go GA instance is running on an older version that does not support the HTTP/3 feature. To use this feature, contact your account manager to request an instance upgrade.

### **Why can't the client use HTTP/3?**

When GA fails to negotiate HTTP/3 with the client, it falls back to using HTTP/1.1 or HTTP/2. For the negotiation mechanism, see [How GA negotiates HTTP/3 with clients](#4db61b9489qbe).

## **References**

For cross-border scenarios, BGP (Multi-ISP) Pro lines are used by default. If you require higher network quality, you can use cross-border Express Connect circuits. For more information, see [Select and purchase GA resources](/help/en/ga/product-overview/select-and-purchase-ga-resources#fc9d236067cct).

API references:

-   [CreateListener](/help/en/ga/api-createlistener#doc-api-Ga-CreateListener): Creates a listener for a GA instance. Modify HTTP/3 configuration through the `HttpVersion` parameter.
    
-   [UpdateListener](/help/en/ga/api-updatelistener#doc-api-Ga-UpdateListener): Modifies the configuration of a specified listener under a GA instance. Modify HTTP/3 configuration through the `HttpVersion` parameter.
    
-   [DeleteListener](/help/en/ga/api-deletelistener#doc-api-Ga-DeleteListener): Deletes a specified listener under a GA instance.
