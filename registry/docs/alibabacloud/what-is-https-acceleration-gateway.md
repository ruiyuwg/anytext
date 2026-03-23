The traditional application and deployment processes of certificates are time-consuming. In addition, the issue that the certificate validity period continues to shorten results in high O&M pressure. To resolve the preceding issues, Alibaba Cloud provides the HTTPS acceleration gateway feature. You can add the domain name of a website to an HTTPS acceleration gateway instance with a few clicks to implement HTTPS. The HTTPS acceleration gateway feature supports auto-renewal to reduce frequent certificate updates due to shortened validity periods and relieve O&M pressure.

## **Benefits and scenarios of HTTPS websites**

HTTPS is a network security transmission protocol that uses the SSL or TLS protocol to encrypt data transmitted over HTTP. This ensures the security of data transmission between the client and the server. HTTPS effectively protects HTTP plaintext transmission against eavesdropping, tampering, impersonation, and hijacking.

**Scenario**

**Description**

Security requirements of business systems

HTTPS-encrypted websites meet relevant security evaluation standards, such as requirements of information security protection and classified protection. HTTPS ensures that sensitive information is encrypted and protected during transmission.

Search engine optimization (SEO) and credibility improvement

An HTTPS-encrypted website can be trusted by mainstream search engines, such as Google, which helps improve the search ranking and credibility of the website.

Protection for user privacy and data

You can use HTTPS to encrypt data to protect data against man-in-the-middle attacks, traffic hijacking, and tampering in scenarios in which sensitive user data needs to be processed, such as online banking systems, payment platforms, and systems that require personal accounts for logon verification.

Anti-phishing and identity verification

HTTPS can provide server identity verification for important information systems, such as public sector systems and office automation (OA) systems of enterprises and institutions. This prevents users from accessing phishing websites and ensures that users do not accidentally access malicious websites due to Domain Name System (DNS) hijacking.

Protection for enterprise email and communication

Online shopping websites and e-commerce platforms use HTTPS to protect the transaction details and personal information about users, including but not limited to credit card numbers, passwords, and other highly sensitive transaction information.

Mobile application and Wireless Application Protocol (WAP) site

Wireless applications such as mobile clients and WAP sites on mobile phones require HTTPS encryption to protect data transmission for users in different network environments.

## **Pain points in enabling HTTPS**

**Pain point**

**Description**

Long enabling process

To enable HTTPS, you must purchase a certificate and apply for the certificate. The certificate application requires a long period of time to be approved. If you deploy a certificate on a non-standard cloud service such as an Elastic Compute Service (ECS) instance or a data center, the deployment requires a longer period of time.

High technical requirements

You must understand how to deploy a certificate on middleware. For example, after your certificate is issued, you must deploy the certificate to your server. In this case, you must understand the certificate deployment process for middleware such as NGINX and Tomcat.

High O&M pressure for updating certificates

The validity period of a paid certificate is 12 months, while the validity period of a free certificate is only 3 months. After a certificate expires, you must apply for an associated certificate. For non-standard cloud services, you must renew a certificate once a year, which imposes high O&M pressure.

## Benefits of HTTPS acceleration gateway

**Benefit**

**Description**

Easy to configure

You can add a domain name to an HTTPS acceleration gateway instance with a few clicks to implement HTTPS. The HTTPS acceleration gateway feature also supports auto-renewal, which simplifies subsequent O&M.

Website acceleration

The HTTPS acceleration gateway feature provides an acceleration capability to improve user experience when the users access your website. The HTTPS acceleration gateway feature can cache resources from origin servers to Alibaba Cloud acceleration nodes that are distributed across the Chinese mainland. When users access your resources, the resources are served from the nearest node instead of the origin servers. This helps prevent lengthy back-to-origin requests and reduces loads on the origin servers, which provides a better experience to the users and reduces back-to-origin costs.

Traffic monitoring and bill query

You can view the traffic details of the domain name, number of requests, and billing details in the Certificate Management Service console.

## **References**

-   For more information about how to purchase the HTTPS acceleration gateway feature, see [Purchase guide for the HTTPS acceleration gateway feature](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources).
    
-   After you purchase an HTTPS acceleration gateway instance, you must add a domain name to the HTTPS acceleration gateway instance. For more information, see [Configure an HTTPS acceleration gateway instance](/help/en/ssl-certificate/manage-https-acceleration-gateway-resources).
