The Online Certificate Status Protocol (OCSP) stapling feature allows points of presence (POPs) to cache the revocation status of SSL certificates and return the information to clients. Clients do not need to query the revocation status of SSL certificates from certificate authorities (CAs). This speeds up certificate validation and accelerates the access.

## Feature overview

The OCSP information is provided by CAs. Clients can use OCSP to check the revocation status of SSL certificates.

Before you enable OCSP stapling, a client queries the revocation status of the SSL certificate from the CA for each request to confirm that the certificate is not revoked. Frequent query requests cause low TLS handshake efficiency and affect the access speed.

After you enable OCSP stapling, the query process is performed by POPs. DCDN sends requests to retrieve OCSP information at a low frequency, and caches the retrieved OCSP information on POPs. The default time-to-live (TTL) for cached OCSP information is 60 minutes. When a client sends a TLS handshake request to the POP, the POP returns the certificate and OCSP information to the client. The client can check the revocation status of the certificate without sending queries to the CA. This improves the TLS handshake efficiency and reduces the validation time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2537700271/CAEQGhiBgMD23I308BgiIDY2YTQyN2MwYTI1NzQ3NGNhZTM5NGVjYzA3ZDI2NGM04201543_20240201194512.016.svg)

**Important**

-   By default, OCSP stapling is disabled.
    
-   The default TTL of cached OCSP information is 1 hour. After the information expires, OCSP stapling does not take effect until the OCSP information is obtained again.
    
-   You can enable or disable OCSP stapling for accelerated domain names for which HTTPS secure acceleration is enabled. If you delete the SSL certificate settings, OCSP stapling is disabled.
    
-   The OCSP stapling process does not pose security risks because the OCSP information of digital certificates cannot be forged.
    

## Prerequisites

Make sure that the following requirements are met before you configure OCSP stapling:

-   An SSL certificate is configured. For more information, see [Configure an SSL certificate](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ssl-certificate#task-2339799).
    
-   The default TTL of cached OCSP information is 1 hour. After the information expires, OCSP stapling does not take effect until the OCSP information is obtained again.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **HTTPS Settings**.
    
5.  In the **OCSP Stapling** section, turn on **OCSP Stapling**.
    
    ![11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4336255461/p384495.png)
