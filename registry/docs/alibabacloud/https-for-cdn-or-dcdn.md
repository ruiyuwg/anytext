HTTPS encrypts data by using the Secure Sockets Layer (SSL)/Transport Layer Security (TLS) protocol based on HTTP. This prevents data from being monitored, intercepted, or tampered with by third parties. You can configure an SSL/TLS certificate in the CDN console to encrypt requests between clients and CDN to ensure data transmission security.

## HTTPS benefits

-   HTTPS secure acceleration protects communications from eavesdropping, tampering, impersonation attacks, and hijacking. HTTPS encrypts sensitive information such as session IDs and cookies during transmission, minimizing the risk of sensitive information leaks.
    
-   HTTPS is the new standard. If you use HTTP, your website may be exposed to security risks and users who visit your website are prompted that the website is not secure. This compromises user experience.
    
-   Mainstream search engines assign a higher weight to HTTPS-capable websites. After you enable HTTPS for a website, the website can achieve a higher ranking in search engine results.
    

## **SSL/TLS certificates**

SSL is located between the TCP/IP protocol and various application layer protocols. Clients, such as browsers, can use SSL to verify the authenticity and integrity of connections between servers and clients, and encrypt data for transmission.

Internet Engineering Task Force (IETF) standardized SSL and changed the name to TLS. Therefore, the protocol is referred to as SSL/TLS.

SSL/TLS certificates use the SSL protocol for communications. SSL/TLS certificates are credentials that are issued by certificate authorities (CAs) to websites to authenticate the identities of websites and encrypt data for transmission.

## End-to-end data transmission over HTTPS

The following figure shows how HTTPS encryption works when a client initiates a request to a server.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1203309471/CAEQQBiBgMCz27fnuBkiIDA3NTQ1ZDAxMWU4MDQyZmVhNjk5YzQ4M2M2MWEzOTM24114492_20231213193307.760.svg)

1.  Configure an SSL/TLS certificate for your domain name in the CDN console to allow HTTPS connections between clients and CDN points of presence (POPs).
    
    **Note**
    
    HTTPS configuration is a value-added service. You are charged for HTTPS requests in addition to basic services. For more information, see [Billing of HTTPS requests for static content](/help/en/cdn/product-overview/billing-of-https-requests-for-static-content#concept-2186401).
    
2.  Configure an SSL/TLS certificate on the origin server and configure the origin protocol for CDN POPs to implement HTTPS encryption. For more information, see [Configure the origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy).
    
    **Note**
    
    To implement end-to-end data transmission over HTTPS, make sure that the origin server supports HTTPS before you configure origin fetch over HTTPS. For more information, see [Configure the origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy).
    

## **Configure** SSL/TLS **certificates between clients and** CDN **POPs**

### Step 1: Prepare a certificate for the accelerated domain name

-   Only certificates in the PEM format are supported. You can convert certificates in other formats to the PEM format. For more information, see [Certificate formats](/help/en/cdn/user-guide/certificate-formats#section-cn2-rql-xdb).
    
-   You can apply for a free individual test certificate or purchase a certificate in the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
-   You can also apply for a certificate from a third-party CA. The issued certificate must meet the certificate format requirements. For more information, see [Certificate formats](/help/en/cdn/user-guide/certificate-formats).
    

### Step 2: Configure an SSL/TLS certificate

1.  **Required.** After you prepare an SSL/TLS certificate, configure the certificate for the accelerated domain name before you enable HTTPS secure acceleration. For more information, see [Configure an SSL certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).
    

2.  **Optional.** Configure more features based on your business requirements.
    
    Category
    
    **Feature**
    
    **Description**
    
    Configure client access protocols
    
    [Configure URL redirection](/help/en/cdn/user-guide/configure-url-redirection#task-261642)
    
    You can use 301 redirection to redirect HTTP requests from clients to CDN POPs to HTTPS or redirect HTTPS to HTTP.
    
    [Configure HSTS](/help/en/cdn/user-guide/configure-hsts#task-261642)
    
    You can configure HSTS to force clients to connect to CDN POPs over HTTPS. This reduces the risk of hijacking at the first visit.
    
    Specify the protocol version
    
    [Configure HTTP/2](/help/en/cdn/user-guide/enable-http-or-2#task-261642)
    
    HTTP/2, originally named HTTP/2.0, is the first new version of HTTP since HTTP/1.1. HTTP/2 supports binary framing, multiplexing, and header compression. This protocol improves web performance and reduces network latency.
    
    [Configure TLS versions and cipher suites](/help/en/cdn/user-guide/configure-tls-version-control#task-261642)
    
    After you configure a TLS version, only clients that use the TLS version can send requests to and receive requests from CDN POPs. This meets the security requirements for communication links.
    
    Accelerate the validation of the SSL/TLS certificate
    
    [Configure OCSP stapling](/help/en/cdn/user-guide/configure-ocsp-stapling#task-2461452)
    
    CDN POPs cache certificate verification results and then send the results to clients without the need for the clients to verify certificates with the CAs. This reduces the verification time.
    

## **FAQ**

-   [What are the common types of HTTP attacks?](/help/en/cdn/user-guide/faq-about-https#section-hfq-h5z-zgb)
    
-   [Is HTTPS required only when visitors log on to my site?](/help/en/cdn/user-guide/faq-about-https#section-epq-ztz-zgb)
    
-   [What certificates are required to configure HTTPS?](/help/en/cdn/user-guide/faq-about-https#1c411a2e68zvd)
    
-   [Am I charged additional fees after I enable HTTPS secure acceleration?](/help/en/cdn/user-guide/faq-about-https#section-fnh-ptz-zgb)
    
-   [Am I charged for HTTPS requests when HTTP 403 or 404 status code is returned because the IP addresses of the HTTPS requests belong to the IP address whitelist or blacklist or the headers of the HTTPS requests belong to the User-Agent whitelist or blacklist?](/help/en/cdn/user-guide/faq-about-https#section-l9d-h50-2vu)
    
-   [Do I need to configure HTTPS secure acceleration for POPs if HTTPS is configured on the origin server?](/help/en/cdn/user-guide/faq-about-https#section-lq1-dyp-bea)
    
-   [Does the content retrieval speed drop and resource usage increase after I enable HTTPS secure acceleration?](/help/en/cdn/user-guide/faq-about-https#section-hlw-5tz-zgb)
