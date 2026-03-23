HTTPS encrypts data by using the TLS/SSL protocol based on HTTP. This prevents data from being monitored, intercepted, or tampered with by third parties. You can configure an SSL certificate in the Alibaba Cloud CDN console to encrypt requests between the clients and Alibaba Cloud CDN to ensure data security.

## **Benefits**

-   HTTPS secure acceleration protects communications from eavesdropping, tampering, impersonation attacks, and man-in-the-middle (MITM) attacks. The feature encrypts sensitive information, such as session IDs and cookies, during data transmission to minimize the risk of sensitive information leaks.
    
-   HTTPS is the new standard. If you use HTTP, your website may be exposed to security risks and visitors to your website are prompted that the website is not secure. This compromises user experience.
    
-   Mainstream search engines assign a higher weight to HTTPS-capable websites. After you enable HTTPS for a website, the website can achieve a higher ranking in search engine results.
    

## **SSL/TLS certificates**

SSL is located between the TCP/IP protocol and various application layer protocols. With SSL, a client such as a browser can verify the authenticity and integrity of the server it is connecting with, and use encryption to exchange information.

Internet Engineering Task Force (IETF) standardized SSL and changed the name to Transport Layer Security (TLS). Therefore, the protocol is referred to as SSL/TLS.

SSL certificates use the SSL protocol for communications. SSL certificates are credentials that are issued by certificate authorities (CAs) to websites to authenticate the identities of websites and encrypt data for transmission.

## **End-to-end data transfer over HTTPS**

The following figure shows how HTTPS encryption works when a client initiates a request to a server.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7038726271/CAEQLhiBgICvzIXZjhkiIDQ4NWVhMzQ5ODA1ZjRhMjY5ZWE1NTcyZDFmNTYwYjM24114492_20231213193307.760.svg)

1.  Configure an SSL certificate in the Alibaba Cloud CDN console to allow HTTPS connections between clients and points of presence (POPs).
    
    **Note**
    
    HTTPS secure acceleration is a value-added service. After you enable HTTPS secure acceleration, you are charged for basic services and HTTPS requests. For more information, see [Billing of HTTPS requests for static content](/help/en/cdn/product-overview/billing-of-https-requests-for-static-content#concept-2186401).
    
2.  Configure an SSL certificate on the origin server and configure origin fetch over HTTPS. For more information, see [Configure the origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy).
    
    **Note**
    
    If you want to implement end-to-end data transfer over HTTPS, make sure that the origin server supports HTTPS before you configure origin fetch over HTTPS. For more information, see [Configure the origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy).
    

## **Configure HTTPS secure acceleration between clients and** POPs

### **Step 1: Prepare a certificate for the accelerated domain name**

Only certificates in the PEM format are supported. You can convert certificates in other formats to the PEM format. For more information, see [Convert certificate formats](/help/en/cdn/user-guide/certificate-formats#section-cn2-rql-xdb).

You can apply for an individual test certificate (free) or purchase a certificate in the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).

You can also apply for a certificate from a third-party CA. The issued certificate must meet the certificate format requirements. For more information, see [Certificate formats](/help/en/cdn/user-guide/certificate-formats).

### Step 2: Enable HTTPS secure acceleration

1.  **Required.** After you prepare an SSL certificate, configure the certificate for the accelerated domain name before you enable HTTPS secure acceleration. For more information, see [Configure an SSL certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).
    

2.  **Optional.** Configure more features based on your business requirements.
    
    Category
    
    **Feature**
    
    **Description**
    
    Configure client access protocols
    
    [Configure URL redirection](/help/en/cdn/user-guide/configure-url-redirection#task-261642)
    
    You can use 301 redirection to redirect HTTP requests from clients to POPs to HTTPS or redirect HTTPS to HTTP.
    
    [Configure HSTS](/help/en/cdn/user-guide/configure-hsts#task-261642)
    
    You can configure HSTS to force clients, such as browsers, to connect to POPs over HTTPS. This reduces the risk of cookie hijacking.
    
    Specify the protocol version
    
    [Configure HTTP/2](/help/en/cdn/user-guide/enable-http-or-2#task-261642)
    
    HTTP/2, originally named HTTP/2.0, is the first new version of HTTP since HTTP/1.1. HTTP/2 supports binary framing, multiplexing, and header compression. This protocol improves web performance and reduces network latency.
    
    [Configure TLS versions and cipher suites](/help/en/cdn/user-guide/configure-tls-version-control#task-261642)
    
    After you configure a TLS version, only clients that use the TLS version can send requests to and receive requests from POPs. This meets the security requirements of communication links.
    
    Accelerate the verification of the SSL certificate
    
    [Configure OCSP stapling](/help/en/cdn/user-guide/configure-ocsp-stapling#task-2461452)
    
    POPs cache certificate verification results and then send the results to clients without the need for the clients to verify certificates with the CAs. This reduces the verification time.
    

## **FAQ**

-   [What are the common types of HTTP attacks?](/help/en/cdn/user-guide/faq-about-https#section-hfq-h5z-zgb)
    
-   [Is HTTPS required only when visitors log on to my site?](/help/en/cdn/user-guide/faq-about-https#section-epq-ztz-zgb)
    
-   [What certificates are required to configure HTTPS?](/help/en/cdn/user-guide/faq-about-https#1c411a2e68zvd)
    
-   [Am I charged additional fees after I enable HTTPS secure acceleration?](/help/en/cdn/user-guide/faq-about-https#section-fnh-ptz-zgb)
    
-   [Am I charged for HTTPS requests when HTTP 403 or 404 status code is returned because the IP addresses of the HTTPS requests belong to the IP address whitelist or blacklist or the headers of the HTTPS requests belong to the User-Agent whitelist or blacklist?](/help/en/cdn/user-guide/faq-about-https#section-l9d-h50-2vu)
    
-   [Do I need to configure HTTPS secure acceleration for POPs if HTTPS is configured on the origin server?](/help/en/cdn/user-guide/faq-about-https#section-lq1-dyp-bea)
    
-   [Does the content retrieval speed drop and resource usage increase after I enable HTTPS secure acceleration?](/help/en/cdn/user-guide/faq-about-https#section-hlw-5tz-zgb)
