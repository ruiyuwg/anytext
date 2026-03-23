Web Application Firewall (WAF) protects websites and applications by identifying and blocking malicious traffic to defend against common web attacks. WAF filters and inspects traffic, forwarding only legitimate requests to your servers. This process prevents malicious requests from disrupting your website's operations, ensuring business stability and data security.

## Use cases

WAF is designed for all users, whether their web servers are deployed on Alibaba Cloud or in other environments. It is widely used across various industries, including financial services, e-commerce, O2O, Internet+, gaming, government, and insurance. Alibaba Cloud WAF protects HTTP/HTTPS traffic for websites and web applications, defending against a wide range of Web attacks to keep your business secure and stable.

## Core security capabilities

### Web application attack protection

-   **Protection against common threats**: Protects against common attacks defined in the OWASP Top 10, including SQL injection, cross-site scripting (XSS), webshell uploads, backdoors, command injection, malformed HTTP requests, cross-site request forgery (CSRF), unauthorized access to core files, and path traversal.
    
-   **Website cloaking**: Hides your origin server's IP address from attackers, preventing them from bypassing WAF to attack your origin server directly.
    
-   **Virtual patching and 0-day protection**: Provides timely and effective virtual patching for high-risk vulnerabilities, including 0-day vulnerabilities, by rapidly updating protection rules before official security patches become available.
    
-   **Flexible monitor mode**: For new applications, enable monitor mode to log alerts for suspicious activities that trigger protection rules without blocking them. This allows you to identify and analyze potential false positives.
    
-   **Deep inspection technology**:
    
    -   **Data format parsing**: Fully parses common HTTP protocol data formats, including any header field, form data, multipart, JSON, and XML.
        
    -   **Decoding of common encoding types**: Supports URL, JavaScript Unicode, HEX, HTML entity, Java serialization, PHP serialization, Base64, UTF-7, UTF-8, and mixed nested encodings.
        
    -   **Data preprocessing**: Delivers cleaner data to the detection engine using mechanisms such as whitespace normalization, comment stripping, and special character handling to reduce false positives.
        

### **HTTP flood protection**

-   **Multi-dimensional attack identification**:
    
    -   Controls the access rate of individual source IPs.
        
    -   Verifies visitor identity through methods such as redirect challenges and human/bot checks.
        
    -   Intelligently identifies attacks by combining signals such as response code statistics, URL request distribution, and abnormal Referer and User-Agent headers.
        
-   **Big data threat intelligence**: Leverages Alibaba Cloud's big data security capabilities to build threat intelligence and trusted access models to quickly identify malicious traffic.
    

### Fine-grained access control

-   **Custom protection policies**: Provides a user-friendly console to configure powerful fine-grained access control policies using common HTTP fields such as IP address, URL, Referer, and User-Agent.
    
-   **Scenario-based protection**: Supports protection scenarios such as hotlinking prevention and website backend protection.
    
-   **Layered, comprehensive protection**: Integrates with other security modules, such as web attack protection and HTTP flood protection, to build a multi-layered defense system that easily distinguishes between trusted and malicious traffic.
    

### Bot management

-   **Bot traffic analysis reports**: Classifies bot traffic as malicious, suspicious, or legitimate, and presents traffic trends and risky client information in reports.
    
-   **Comprehensive cross-platform protection**: Provides complete bot protection across web pages, H5, native apps (iOS, Android, HarmonyOS), and mini-programs (WeChat, Alipay).
    
-   **End-to-end, full-lifecycle protection**: Employs multi-dimensional bot detection methods throughout the entire request lifecycle, covering over 100 browser probe features, more than 7,000 client fingerprint types, over 1 million malicious bot threat intelligence signatures, and 6 advanced bot detection algorithms.
    

### API security

-   **Out-of-the-box protection**: Enable detection with a single click. Based on passive traffic analysis, it supports full-lifecycle management of your APIs and monitors sensitive data flows without disrupting your services.
    
-   **Risk discovery**: Detects API vulnerabilities, identifies issues such as unauthorized sensitive data leakage and exposure of internal APIs, and provides remediation suggestions.
    
-   **Threat detection**: Identifies API abuse behaviors, such as data scraping and brute-force attacks, through cross-session, bidirectional traffic analysis. It also supports integration with WAF for response actions.
    

### **AI application protection**

-   **Prompt injection detection**: Defends against injection attacks that target generative AI. It accurately identifies adversarial behaviors such as jailbreaking, role-playing inducements, and system prompt manipulation to secure your AI systems.
    
-   **Content compliance detection**: Supports compliance checks for both request and response content, ensuring all interactions adhere to security and regulatory requirements.
    
-   **Real-time protection and response**: Combines protective actions such as blocking, content replacement, and retraction to instantly stop abnormal behavior and automatically modify response content, securing your business operations.
    

## Easy management and reliable architecture

### Simple deployment and O&M

-   **Quick deployment**: Deploy and activate WAF in under 5 minutes without installing any hardware or software or modifying your routing configurations.
    
-   **Attack event management**: Use security reports and logs to centrally manage and analyze attack events, traffic patterns, and attack scale.
    

### Highly reliable and scalable architecture

-   **Clustered deployment**: Uses a cluster architecture to eliminate single points of failure, ensuring that a single server failure or maintenance event does not impact overall service availability.
    
-   **Load balancing**: Uses multiple built-in load balancing strategies to ensure high-performance and high-availability traffic processing.
    
-   **Auto scaling**: Lets you scale the number of servers in your cluster up or down based on actual traffic volume, providing elastic service capacity.
    

## Proven expertise and intelligent defense

-   **Over a decade of network security experience**
    
    -   Built on more than ten years of cybersecurity practice from within Alibaba Group, and can support high-concurrency and high-security scenarios such as Taobao, Tmall, and Alipay. Derived from over a decade of cybersecurity practice at Alibaba Group, with the technical capability to support high-concurrency, high-security scenarios such as Taobao, Tmall, and Alipay
        
    -   A professional security team defends against known vulnerabilities such as the OWASP Top 10 and continuously responds to newly disclosed security vulnerabilities.
        
-   **Driven by big data and intelligence**
    
    -   Defends against hundreds of millions of attacks daily. It leverages a world-leading IP Threat intelligence library and has accumulated a vast repository of attack signatures covering multiple industries and scenarios, enabling deep recognition of mainstream attack patterns, behaviors, and payloads.
        
    -   Continuously iterates on attack detection models using big data analytics and machine learning to make threat identification more accurate and comprehensive.
        

For more information, see the [Web Application Firewall product page](https://www.alibabacloud.com/zh/product/waf).

## **How to use WAF**

![如何使用WAF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1750670861/p579102.png)

For more information, see [Protect an ECS instance from HTTP flood attacks with WAF](/help/en/waf/web-application-firewall-3-0/getting-started/get-started-with-waf-3).

## **Relationship between RASP and WAF**

Runtime Application Self-Protection (RASP) is a security mechanism integrated within an application. It provides self-protection by detecting and blocking attacks in real time as the application runs. For more information, see [Connect to Application Protection](/help/en/security-center/user-guide/use-application-protection/).

RASP and WAF are complementary technologies suited for different security scenarios. RASP is more effective at defending against application-layer threats such as 0-day exploits and attacks within encrypted traffic. WAF excels at handling network-layer access control, Geo-blocking, HTTP flood protection, and bot attacks. For comprehensive protection, we recommend deploying both RASP and WAF to create a dual-layer security system that combines in-app and perimeter defenses.

## **Compliance certifications**

WAF is compliant with multiple international standards and certifications, including ISO 9001, ISO 20000, ISO 22301, ISO 27001, ISO 27017, ISO 27018, ISO 27701, ISO 29151, BS 10012, CSA STAR, MLPS Level 3, SOC 1/2/3, C5, HK Financial, OSPAR, and PCI DSS.
