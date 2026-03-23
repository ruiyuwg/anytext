The OCSP stapling feature enables Edge Security Acceleration (ESA) to pre-cache online certificate validation results and deliver them to clients. This eliminates the need for clients to directly query the CA for certificate status, which reduces certificate validation time and improves user access speed.

## OCSP stapling

OCSP (Online Certificate Status Protocol) is a protocol provided by certification authorities (CAs) that allows clients to validate certificate validity and legitimacy in real time. For each request, the client sends an OCSP query to the CA. Frequent OCSP queries lower TLS handshake efficiency and slow down user access.

When you enable OCSP stapling, OCSP status queries are handled by the ESA server. ESA performs infrequent queries and caches the results on the server. The default cache duration is 60 minutes. When a client initiates a TLS handshake request to the server, ESA server sends the OCSP status information for the certificate along with the certificate to the client, eliminating the need for the client to query the certification authority (CA). This significantly improves TLS handshake efficiency and reduces certificate validation time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3331991771/CAEQUxiBgMCZ16DW4hkiIDMxMGUyM2QwNGNjZjQ2MmI4OGViNzg0ZDQxYjQzYjAx4201543_20240201194512.016.svg)

## **Notes**

-   Before enabling OCSP Stapling, ensure your site uses SSL/TLS and that [you have configured an edge certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/#42d98177ceu19).
    
-   Clients must support the OCSP extension field. If the client version does not support this field, OCSP Stapling will not work.
    
-   The default OCSP Stapling cache duration is one hour. After the cache expires, the first client request will not use OCSP Stapling until ESA retrieves fresh OCSP information.
    
-   If you delete all SSL/TLS certificates, OCSP Stapling stops working.
    

## **Enable OCSP Stapling**

1.  In the ESA console, go to [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Edge Certificates**.
    
3.  Turn on the **OCSP Stapling** toggle.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6149542171/p768675.png)
    

## **Site-level and rule-based features**

A site-level feature applies to all requests for that site. To apply OCSP stapling only to specific requests, use rule-based configuration. You can define rules using conditions that detect specific parameters in client requests. This gives precise control over which requests use the rule. The rule-based equivalent of the site-level OCSP Stapling feature is [OCSP Stapling](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules).
