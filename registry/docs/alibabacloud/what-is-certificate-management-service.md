Certificate Management Service is a certificate issuance and management platform provided by Alibaba Cloud. It provides unified lifecycle management for SSL certificates, private certificates, HTTPS acceleration gateways, and certificate application repositories. This service helps you deploy and manage certificates across various use cases.

## **Use cases**

### **Case 1** **: Public HTTPS encryption**

Internet-facing services require HTTPS to secure user access. The service offers two solutions:

-   **SSL certificate**: Ideal for deploying certificates directly to existing infrastructure (such as web application servers, server load balancers, or CDNs), or where you have specific requirements for the certificate brand, type, or configuration.
    
-   **HTTPS acceleration gateway**: Ideal for enabling HTTPS encryption for domains with a single click, eliminating the need to manage certificate application, renewal, or deployment, while simultaneously accelerating website performance.
    

## SSL certificate

After you purchase an SSL certificate, you must submit a certificate application via the management console. The service then forwards your application to the certificate authority (CA) for review. Once the CA approves and issues the certificate, you must manually deploy it to your web application servers or cloud services such as Alibaba Cloud CDN.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7093306671/CAEQUBiBgMCH9_So2RkiIGRmMDI3NWJiNjIzMDRkZjQ4MTVjZmQyM2YxYjQ5MGVm5858374_20251106191014.043.svg)

## HTTPS acceleration gateway

After you purchase an HTTPS acceleration gateway, point your domain's DNS to the gateway address and configure the origin server. This enables HTTPS. The HTTPS acceleration gateway combines CDN caching with nearest-node distribution to significantly improve application performance and user experience.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7093306671/CAEQUBiBgMDFkvWo2RkiIDRiZTI4Y2JjNjE5ZDQyMGZhMTNiNjZiNzRjYjFkNzAy5858374_20251106191014.043.svg)

### **Case** 2**: Internal enterprise HTTPS encryption**

For internal services such as OA systems, ERP systems, DevOps platforms, code repositories, and IoT devices, using public certificates can be costly and restrictive due to fixed validity periods and domain verification requirements. Use the Private CA service to establish a private root CA to issue and manage internal certificates. You can customize certificate validity periods, batch-issue certificates for internal devices and services, and instantly revoke compromised certificates, building a unified internal trust system at a lower cost.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7093306671/CAEQUBiBgMCJtoup2RkiIDRlMDQ4ZTg2ZTAzZDQzOGU4OWYyOWY5MjIzNTMyYTQz5858374_20251106191014.043.svg)

**Important**

Private certificates are trusted only within the enterprise and are not trusted by public browsers. You must install the root certificate or client certificate on internal enterprise devices.

## **Benefits**

-   **Trusted brands**: Alibaba Cloud collaborates with leading domestic and international CAs to provide trusted digital certificates across multiple brands and types.
    
-   **Simplified management**: Centralizes lifecycle management of certificates and provides unified control of both cloud and on-premises certificates.
    
-   **Efficient deployment**: Integrates with Alibaba Cloud products, enabling one-click deployment to cloud services to simplify the certificate application process.
    
-   **Comprehensive services**: Provides an integrated solution including certificate management, HTTPS acceleration gateway, certificate application repository, and certificate hosting services.
    
-   **Open and flexible**: Provides comprehensive APIs to support batched and automated certificate management operations.
    

## **Core concepts**

-   **Digital certificate**
    
    A digital credential containing a public key and identity information, issued by a trusted CA. It establishes secure communication and verifies identity. Digital certificates are valid only within a specified validity period.
    
-   **Certificate authority (CA)**
    
    A trusted third-party entity responsible for verifying the identity of applicants and issuing digital certificates. It serves as the source of trust in the Public Key Infrastructure (PKI).
    
-   **SSL certificate and HTTPS**
    
    SSL certificates enable HTTPS encrypted transmission. Once an SSL certificate is deployed on a website, communication between the browser and the server is encrypted, preventing data eavesdropping and tampering during transmission.
    
-   **Private certificate**
    
    Private certificates are issued by a private CA built by the enterprise. They are used for encrypted communication between internal systems, such as intranet applications and IoT devices.
    

## **Features**

### [SSL certificates](/help/en/ssl-certificate/functions-and-features)

Provides lifecycle management covering [selection](/help/en/ssl-certificate/functions-and-features), [purchase](/help/en/ssl-certificate/purchase-an-ssl-certificate), [creation](/help/en/ssl-certificate/create-a-certificate), [request](/help/en/ssl-certificate/apply-for-a-certificate), [deployment](/help/en/ssl-certificate/installation-overview/), [renewal](/help/en/ssl-certificate/user-guide/renew-ssl-certificate/), and [revocation](/help/en/ssl-certificate/revoke-and-delete-a-certificate).

### [Private CA certificates](/help/en/ssl-certificate/what-is-a-pca-certificate)

Builds a private certificate management platform through a visual interface. Supports self-service issuance and management of internal certificates, providing identity authentication and data encryption capabilities for internal enterprise applications to ensure secure intranet communication.

### [HTTPS acceleration gateway](/help/en/ssl-certificate/what-is-https-acceleration-gateway)

An integrated solution that combines certificate hosting and access acceleration. It enables HTTPS and speeds up domain access with minimal configuration. It supports automatic certificate renewal, effectively reducing the O&M costs of certificate management.

### [Certificate application repository](/help/en/ssl-certificate/overview-of-certificate-application-repository)

Supports centralized unified management of certificates from different sources (Alibaba Cloud and third-party platforms). Additionally, using the certificate application repository API, you can perform operations such as signing, verifying, encrypting, and decrypting sensitive data such as electronic contracts and invoices, ensuring the authenticity, integrity, and security of data files.

### [Public domain monitoring service](/help/en/ssl-certificate/domain-name-monitoring-1)

Periodically monitors the HTTPS status of multiple public websites (such as checking if SSL is not configured or if certificates have expired). It displays monitoring results and remediation suggestions centrally in the console and provides detailed monitoring reports. This shifts O&M from passive response to active risk prevention, avoiding business interruptions caused by human oversight such as certificate expiration.

### [Certificate notifications](/help/en/ssl-certificate/purchase-message-alert-resources)

Supports [custom notifications](/help/en/ssl-certificate/custom-message-alert), including domain monitoring anomalies, API call anomalies, and certificate lifecycle management alerts. It also supports various notification methods such as email, DingTalk, internal message, or phone calls.

### [Certificate tools](/help/en/ssl-certificate/use-the-certificate-toolkit)

Allows you to view certificate signing request (CSR) information and certificate details, detect SSL status, and convert certificate formats for free, providing professional technical support for certificate application, configuration, and deployment.

## **Billing**

Billable components include: SSL certificates, Private CA certificates, HTTPS acceleration gateway, and public domain monitoring. For detailed billing information, see [SSL certificate billing](/help/en/ssl-certificate/product-overview/billing-overview), [Private CA certificate billing](/help/en/ssl-certificate/product-overview/pca-biling), [HTTPS acceleration gateway billing](/help/en/ssl-certificate/product-overview/billing-of-https-acceleration-gateway), and [Public domain monitoring billing](/help/en/ssl-certificate/product-overview/billing-of-domain-name-monitoring).

## **Getting started**

## SSL certificate

1.  **Understand the service**: See [Core concepts](#c8b71cebccwjd), [What is SSL certificate](/help/en/ssl-certificate/what-is-an-ssl-certificate), and [SSL certificate usage process](/help/en/ssl-certificate/ssl-certificate-usage-process-overview) to understand SSL certificate concepts and processes.
    
2.  **Purchase a certificate**: See [SSL certificate selection guide](/help/en/ssl-certificate/functions-and-features) to select certificate specifications as needed, then [Purchase certificates](/help/en/ssl-certificate/purchase-an-ssl-certificate).
    
3.  **Submit request to CA for issuance:** [Create certificates](/help/en/ssl-certificate/create-a-certificate) and [submit the request](/help/en/ssl-certificate/apply-for-a-certificate). Wait for issuance after completing [Domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
4.  **Deploy and use**: After the certificate is issued, see [SSL certificate deployment selection](/help/en/ssl-certificate/ssl-certificate-deployment-scheme-selection) to determine the deployment plan, and then deploy the certificate to your servers or cloud products.
    
5.  **Manage the certificate**: Complete [SSL certificate renewal](/help/en/ssl-certificate/ssl-official-certificate-renewal) before the certificate expires to prevent service interruption. [Revoke and delete SSL certificates](/help/en/ssl-certificate/revoke-and-delete-a-certificate) when they are no longer needed.
    

## HTTPS acceleration gateway

1.  **Understand the service**: See [What is HTTPS acceleration gateway](/help/en/ssl-certificate/what-is-https-acceleration-gateway) to understand the product benefits and applicable scenarios.
    
2.  **Purchase the service**: See [HTTPS acceleration gateway purchase guide](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources) to purchase an HTTPS acceleration gateway instance and gateway resource computing units based on the domain type.
    
3.  **Configure the domain**: See [Configure HTTPS acceleration gateway](/help/en/ssl-certificate/manage-https-acceleration-gateway-resources) to configure the acceleration domain and set up CNAME forwarding in DNS.
    
4.  **Manage the certificate**: HTTPS acceleration gateway requires no manual certificate request. After the configuration takes effect, monitor the access status to avoid business interruptions caused by overdue payments.
    

## Private CA certificate

1.  **Understand the service**: Understand the applicable scenarios and usage process through [Private CA service description and usage process](/help/en/ssl-certificate/what-is-a-pca-certificate). For free trials, see [Free trial of private CA service](/help/en/ssl-certificate/free-trial-of-pca).
    
2.  **Purchase a certificate**: [Purchase and enable private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca), then [Allocate private certificate quota](/help/en/ssl-certificate/purchase-and-allocation-of-private-certificate-quota).
    
3.  **Submit request to CA for issuance:** See [Request and issue private certificates](/help/en/ssl-certificate/apply-for-a-private-certificate) to complete private certificate issuance.
    
4.  **Deploy and use**: [Download the private certificate](/help/en/ssl-certificate/download-a-private-certificate), and then deploy the certificate to servers and clients.
    
5.  **Manage the certificate**: See [Revoke private certificate](/help/en/ssl-certificate/revoke-a-private-certificate), and [Reset private CA](/help/en/ssl-certificate/reset-a-private-ca-or-a-compliant-ca).
    

## **FAQ**

#### **Do I need to purchase a separate certificate for my domain after purchasing HTTPS acceleration gateway?**

No. A certificate is automatically bound to your domain upon purchase.

#### **What if I don't understand the basic concepts of SSL certificates?**

Before using the certificate service, we recommend that you read the following documents:

-   [What is SSL certificate](/help/en/ssl-certificate/what-is-an-ssl-certificate): Details the encryption principles of SSL certificates, usage process, and certificate brands.
    
-   [SSL certificate usage process](/help/en/ssl-certificate/ssl-certificate-usage-process-overview): Details the usage process of SSL certificates, including purchase, request, verification, issuance, deployment, and subsequent management.
    

#### **I am not sure about the encryption scenario for my current business or how to choose the right certificate. What should I do?**

If you are unsure which certificate type is suitable for your current business scenario, see [SSL certificate selection guide](/help/en/ssl-certificate/functions-and-features).

#### **I am a non-technical user. How can I get comprehensive technical support?**

You can visit the [Product details page](https://www.alibabacloud.com/zh/product/certificates?_p_lc=1&spm=a3c0i.7911826.6791778070.186.6ef92129onMgGX) to consult with technical experts for assessment.
