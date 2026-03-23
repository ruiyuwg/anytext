Alibaba Cloud CDN supports HTTPS secure acceleration, which encrypts requests between clients and points of presence (POPs). If you have multiple accelerated domain names that share the same SSL certificate, you can deploy the certificate to all of them at once through the Alibaba Cloud CDN console, instead of configuring each domain name individually.

## Billing

HTTPS secure acceleration is a value-added service. After you enable HTTPS, you are charged based on the number of HTTPS requests. Data transfer plans cannot offset these fees. For pricing details, see [Billing of HTTPS requests for static content](/help/en/cdn/product-overview/billing-of-https-requests-for-static-content).

## Prerequisites

Before you begin, make sure that you have:

-   An SSL certificate purchased from [Certificate Management Service](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy)
    
-   One or more domain names added to Alibaba Cloud CDN
    

**Important**

Only certificates purchased from Alibaba Cloud [Certificate Management Service](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy) can be deployed to multiple domain names through the CDN console. Certificates issued by a third-party certificate authority (CA) can only be configured for one domain name at a time. For more information, see [Configure an SSL certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate).

## Deploy or renew an SSL certificate

1.  Log on to the [Alibaba Cloud CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **HTTPS Center**.
    
3.  On the **Certificate Center** page, click **Add Certificate**.
    
4.  On the **Add Certificate** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Certificate Source**
    
    Only **SSL Certificates Service** is supported. Select a certificate purchased from [Certificate Management Service](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy).
    
    **Certificate Name**
    
    Select the certificate to deploy.
    
    **Certificate (Public Key)**
    
    The PEM-encoded public key. For certificates purchased from Certificate Management Service, the system retrieves this automatically.
    
    **Private Key**
    
    The PEM-encoded private key. For certificates purchased from Certificate Management Service, the system retrieves this automatically.
    
5.  Click **Next**.
    
6.  Select the domain names to associate with the certificate.
    
    **Important**
    
    If a selected domain name already has a certificate, the existing certificate is replaced by the one selected in this step. When **Certificate Source** is set to **SSL Certificates Service**, you can deploy or renew the certificate for multiple domain names at a time.
    
    ![Associate domain names with a certificate](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0111298961/p733490.png)
7.  Click **OK** to deploy or update the certificate.
    
8.  (Optional) To enable end-to-end HTTPS encryption, configure POPs to redirect requests to origin servers over HTTPS. The origin servers must support HTTPS. For details, see [Configure the origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy).
    

## Verify the certificate deployment

After you deploy an SSL certificate, it takes effect within 1 minute. To verify that HTTPS is active, access a resource on the accelerated domain name over HTTPS. A lock icon in the browser address bar confirms that HTTPS secure acceleration is working.

![Lock icon in the browser address bar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3633816371/p3701.png)

## View certificate details

1.  Log on to the [Alibaba Cloud CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **HTTPS Center**.
    
3.  On the **Certificate Center** page, click the certificate you want to view.
    

You can view the SSL certificate information configured for the domain name. The private key is not visible. Keep your certificate information confidential.

## FAQ

-   [Do I need to configure HTTPS secure acceleration for POPs if HTTPS is configured on the origin server?](/help/en/cdn/user-guide/faq-about-https)
    
-   [Do I need to renew the SSL certificate in Alibaba Cloud CDN after an origin server renews its SSL certificate?](/help/en/cdn/user-guide/faq-about-https)
    

## API reference

**API**

**Description**

[CreateCdnCertificateSigningRequest](/help/en/cdn/api-createcdncertificatesigningrequest)

Creates a certificate signing request (CSR).

[DescribeDomainCertificateInfo](/help/en/cdn/api-describedomaincertificateinfo)

Queries certificate information for an accelerated domain name.

[SetCdnDomainSSLCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomainsslcertificate)

Enables, disables, or modifies the certificate for a domain name.

[SetCdnDomainCSRCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomaincsrcertificate)

Configures an SSL certificate for a specified domain name.

[DescribeCdnDomainByCertificate](/help/en/cdn/api-describecdndomainbycertificate)

Queries accelerated domain names by SSL certificate.

[DescribeCdnCertificateDetail](/help/en/cdn/api-describecdncertificatedetail)

Queries detailed information about an SSL certificate.

[DescribeCdnCertificateList](/help/en/cdn/api-describecdncertificatelist)

Queries certificates.

[DescribeCertificateInfoByID](/help/en/cdn/api-describecertificateinfobyid)

Queries information about a specified SSL certificate.

[DescribeCdnHttpsDomainList](/help/en/cdn/api-describecdnhttpsdomainlist)

Queries SSL certificate information within your Alibaba Cloud account.

[DescribeUserCertificateExpireCount](/help/en/cdn/api-describeusercertificateexpirecount)

Queries the number of domain names with expiring or expired SSL certificates.

[SetCdnDomainSMCertificate](/help/en/doc-detail/398671.html)

Enables or disables a ShangMi (SM) certificate for a domain name.

[DescribeCdnSMCertificateList](/help/en/doc-detail/398681.html)

Queries SM certificates for an accelerated domain name.

[DescribeCdnSMCertificateDetail](/help/en/doc-detail/398692.html)

Queries details about an SM certificate.
