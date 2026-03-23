HTTPS is a secure HTTP channel that protects content delivered over a Content Delivery Network (CDN). It allows clients to securely access websites at high speeds. This topic answers frequently asked questions (FAQs) about HTTPS.

-   [What is HTTPS?](#section-zwj-78b-5v6)
    
-   [What are the common types of HTTP attacks?](#section-hfq-h5z-zgb)
    
-   [Is HTTPS required only for website logons?](#section-epq-ztz-zgb)
    
-   [What certificates do I need to configure for HTTPS?](#1c411a2e68zvd)
    
-   [Are there extra charges for enabling HTTPS?](#section-fnh-ptz-zgb)
    
-   [Are HTTPS requests billed when they are blocked by IP blacklists/whitelists or User-Agent blacklists, or when a 403/404 error is returned?](#section-l9d-h50-2vu)
    
-   [If my origin server has HTTPS configured, do I still need to configure it on CDN?](#section-lq1-dyp-bea)
    
-   [Does enabling HTTPS consume more resources or reduce access speed?](#section-hlw-5tz-zgb)
    
-   [How do I configure an HTTPS certificate?](#section-8zr-wp5-tzq)
    
-   [What do I do if a "duplicate certificate" error appears?](#section-37t-zop-u9j)
    
-   [How do I upload a third-party certificate that contains multiple .crt files?](#6d77cf3649q8s)
    
-   [How do I convert a certificate if an "invalid certificate format" error appears during configuration?](#section-nn1-mcd-0e7)
    
-   [If the HTTPS certificate on my origin server is updated, do I need to sync the update to CDN?](#section-zjb-jyq-cc4)
    
-   [If I enable "Include Subdomains" when configuring HSTS, do I also need to enable HSTS on the subdomains?](#8db5405546mux)
    
-   [I have configured HTTPS. Why are clients still accessing my site over HTTP?](#section-cst-8gc-503)
    
-   [Why can most devices access an HTTPS-accelerated domain name, but some devices cannot?](#612fb5afb31yo)
    
-   [How do I remove password protection from a private key file?](#9b577a1c3bw7a)
    

## What is HTTPS?

Hypertext Transfer Protocol Secure (HTTPS) is a security protocol that encrypts data transmitted over HTTP. The HTTP protocol sends content in plaintext and provides no data encryption. HTTPS encapsulates the HTTP protocol with SSL or TLS. HTTPS provides identity verification and encrypted communication. It is widely used for security-sensitive communications on the World Wide Web, such as payment transactions. When you configure HTTPS on Alibaba Cloud CDN, you must provide a certificate for your domain name. The certificate is then deployed to all CDN points of presence (POPs) to enable encrypted data transmission across the network.

## What are the common types of HTTP attacks?

HTTPS is only one part of secure access. To ensure comprehensive network security, you also need to use defenses such as WAF and DDoS. The following are common types of HTTP attacks:

-   SQL injection: An attacker can inject and execute malicious SQL commands into the backend database engine through an existing application. They can also access the database of a vulnerable website by entering malicious SQL statements in a web form, which are then executed differently than the designer intended.
    
-   Cross-site scripting (XSS) attacks: Cross-site scripting (XSS) is one of the most common and basic methods used to attack websites. An attacker posts data that contains malicious code on a webpage. When a visitor views this page, the script runs with the visitor's user identity and permissions. XSS can be used to modify user data and steal user information.
    
-   Cross-site request forgery (CSRF) attacks: Cross-site request forgery (CSRF) is another common attack. An attacker forges a request in various ways to imitate a user who is submitting a form. This allows the attacker to modify user data or perform specific tasks. To impersonate a user, CSRF attacks are often combined with XSS attacks. However, they can also be carried out by other means, such as tricking a user into clicking a malicious link.
    
-   HTTP header attacks: The HTTP protocol is used when you use a browser to view any website, regardless of the website's technology and framework. The HTTP protocol has a blank line between the response header and the content, which consists of two sets of CRLF (0x0D 0A) characters. This blank line marks the end of the headers and the beginning of the content. An attacker can exploit this vulnerability. This attack can occur if the attacker can inject any character into the headers.
    
-   Redirection attacks: Phishing is a common attack method. A phishing attacker usually sends a link. When visitors accesses the link, they are redirected to a malicious website. This is done to trick the victim into trusting the site and to steal their information. To prevent this, all redirection must be reviewed. You can add legitimate redirection URLs to the whitelist, so redirections to domains that are not on the whitelist are rejected. Another solution is to use a redirection token. You can add a token to the legitimate URL and verify it during redirection.
    

## Is HTTPS required only for website logons?

No. Consider the following points:

-   Security: If some pages use HTTP and others use HTTPS, your website is at risk of exposing user information when other resources, such as JS or CSS files, are loaded over HTTP or from an insecure CDN service. Using HTTPS for the entire site is the easiest way to mitigate this risk.
    
-   Performance: When a website uses both HTTPS and HTTP protocols, switching between them requires multiple server redirections. These redirections slow down page loading.
    
-   Network-wide benefits: Browsers are more friendly to HTTPS. Search engines also provide better support for indexing HTTPS sites.
    

## **What certificates do I need to configure for HTTPS?**

If you only need to encrypt requests from clients to CDN POPs, configure an HTTPS certificate on CDN.

If you want to configure end-to-end HTTPS access, configure HTTPS certificates on the CDN and on your origin server. For more information, see [What is HTTPS acceleration](/help/en/cdn/user-guide/what-is-https-secure-acceleration).

## Are there extra charges for enabling HTTPS?

Yes, there are extra charges. Enabling HTTPS for CDN secures the link from the client to the CDN POP. The SSL handshake and content decryption require computation, which increases the CPU resource consumption of the CDN server. However, this does not increase the resource consumption of your origin server because the link from the CDN POP to your origin server still uses the HTTP protocol.

You are charged extra if you purchase different types of certificates. You can also log on to the Alibaba Cloud [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) to request a free individual test certificate. The individual test certificate is a Domain Validated (DV) certificate. You can request one free individual test certificate for each accelerated domain name. The certificate is valid for three months and can be automatically renewed for free when it expires. After you configure an HTTPS certificate, you are charged for all HTTPS requests for that domain name on CDN.

## Are HTTPS requests billed when they are blocked by IP blacklists/whitelists or User-Agent blacklists, or when a 403/404 error is returned?

Yes, they are. When a request hits a policy rule and a 403 or 404 status code is returned, the request is considered correctly responded to. Therefore, it is counted as one HTTPS request. Because the request does not carry any resource content, the traffic is minimal, and the billable traffic is also minimal.

## If my origin server has HTTPS configured, do I still need to configure it on CDN?

HTTPS involves interaction between a client and a server. Before you use CDN, the client interacts directly with the origin server. Therefore, the origin server must have HTTPS configured. After you start using CDN, the client interacts with CDN. If you want to access CDN over HTTPS, you must configure an HTTPS certificate on CDN. For more information about how to configure an HTTPS certificate on CDN, see [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).

## Does enabling HTTPS consume more resources or reduce access speed?

When an origin server enables HTTPS, computing resource consumption increases compared to access over HTTP. This is mainly due to the consumption of asymmetric encryption and decryption during the HTTPS handshake. Resource consumption increases significantly in high-concurrency scenarios. The consumption of symmetric encryption and decryption is basically the same as with HTTP. Therefore, you need to increase the session reuse rate. However, accessing the origin server directly over HTTPS takes longer than accessing it directly over HTTP.

When you use dynamic acceleration for end-to-end HTTPS access, the average SSL handshake time is shortened. In high-concurrency scenarios, the session reuse rate of the origin server increases significantly, and the resource consumption of the origin server decreases.

-   For static content: Using edge distribution reduces transmission time but increases handshake time. Therefore, the overall access time is reduced. Static resources do not require an origin fetch, which reduces interaction with the origin server and lowers its resource consumption.
    
-   For dynamic content: The path selection is more controllable and optimal than with traditional public network access. Dynamic requests must be fetched from the origin. Using dynamic acceleration for an origin fetch can increase the session reuse rate and improve the overall transmission speed. Because dynamic requests must be fetched from the origin, asymmetric encryption and decryption are essential, which increases the resource consumption of the origin server. However, using dynamic acceleration for an origin fetch to achieve end-to-end HTTPS access is the most optimal solution in terms of overall resource consumption.
    

## How do I configure an HTTPS certificate?

You can configure an HTTPS certificate in the CDN console. For more information, see [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).

## What do I do if a "duplicate certificate" error appears?

When you upload a **Custom Certificate (Certificate+Private Key)**, if the system indicates that the certificate is a duplicate, change the certificate name and upload it again.

## **How do I upload a third-party certificate that contains multiple .crt files?**

A certificate file issued by an intermediate certification authority (CA) contains multiple certificates. You must combine the server certificate and the intermediate certificate into a single, complete certificate before uploading.

Open all \*.PEM certificate files in a text editor. Place the server certificate first and the intermediate certificate second. There must be no blank lines between the certificates. Typically, the issuing CA provides instructions when it issues the certificate. Be sure to read the rules and instructions.

The combined certificate is shown in the following figure.

![拼接后的PEM格式证书](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4758412161/p214007.png)

## How do I convert a certificate if an "invalid certificate format" error appears during configuration?

HTTPS configuration supports only PEM-formatted certificates. Different CAs have different requirements for uploading certificate content. For specific format requirements, see [Certificate format requirements](/help/en/cdn/user-guide/certificate-formats#concept-grb-4pl-xdb). If your certificate is not in PEM format, you must convert its format before uploading. For more information, see [Convert the format of a certificate](/help/en/cdn/user-guide/certificate-formats#section-cn2-rql-xdb).

## If the HTTPS certificate on my origin server is updated, do I need to sync the update to CDN?

No, it does not. Updating the HTTPS certificate on your origin server does not affect the HTTPS certificate on CDN. You only need to update the HTTPS certificate on CDN when it is about to expire or has already expired. For more information, see [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).

## **If I enable "Include Subdomains" when configuring HSTS, do I also need to enable HSTS on the subdomains?**

No, you do not. After you enable "Include Subdomains", the HSTS policy takes effect on all subdomains. Make sure that all subdomains support HTTPS access. Otherwise, the subdomains will become inaccessible.

## I have configured HTTPS. Why are clients still accessing my site over HTTP?

Whether a client uses HTTP or HTTPS to access your site is determined by the client's behavior. If you want to force clients to use HTTPS, you can enable a force redirect to HTTPS on CDN. For more information, see [Configure a force redirect](/help/en/cdn/user-guide/configure-url-redirection#task-261642).

## Why can most devices access an HTTPS-accelerated domain name, but some devices cannot?

This is mainly because CDN relies on Server Name Indication (SNI) to process HTTPS requests. SNI is an extension to the TLS protocol. It allows a client to specify the hostname it wants to access when initiating an HTTPS connection request.

However, some older or specially configured clients may not support SNI or may not send SNI information when they initiate an HTTPS request. Examples include old versions of Android or iOS, Java 6 and earlier, and some Internet of Things (IoT) devices. In this case, the CDN POP cannot determine the exact site the client wants to access. As a result, the POP cannot provide the correct SSL/TLS certificate. The HTTPS connection attempt fails, and the user cannot access the website content.

To resolve this issue, you can take the following measures:

-   **Upgrade the client system**: Make sure that you are using the latest versions of the operating system and software to obtain SNI support.
    
-   **Update IoT device firmware**: For IoT devices, regularly check for and install the latest firmware updates from the manufacturer.
    

## **How do I remove password protection from a private key file?**

1.  **Confirm whether the key is password-protected**
    
    If you are sure that the private key is password-protected and you know its encryption method, go to step 2 to decrypt it. If you are not sure whether the private key is password-protected or you do not know its encryption method, you can perform the following steps:
    
    1.  **Private key encrypted with the RSA algorithm**
        
        Run the following command using [OpenSSL](https://www.openssl.org/source/). If the private key is encrypted, OpenSSL prompts you to enter a password: `Enter pass phrase for <encrypted_private_key_file>:`. If the private key is not encrypted, OpenSSL does not ask for a password and directly displays the private key information. If an error is reported, the private key is not an RSA-encrypted file.
        
        ```
        openssl rsa -in <encrypted_private_key_file> -text -noout
        ```
        
    2.  **Private key encrypted with the ECC or SM2 algorithm**
        
        Run the following command using [OpenSSL](https://www.openssl.org/source/). If the private key is encrypted, OpenSSL prompts you to enter a password: `Enter pass phrase for <encrypted_private_key_file>:`. If the private key is not encrypted, OpenSSL does not ask for a password and directly displays the private key information. If an error is reported, the private key is not an ECC- or SM2-encrypted file.
        
        ```
        openssl ec -in <encrypted_private_key_file> -text -noout
        ```
        
2.  Decryption solution
    
    -   If the certificate's encryption algorithm is RSA, run the following command on a computer with [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed to decrypt the private key.
        
        ```
        openssl rsa -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>
        ```
        
    -   If the certificate's encryption algorithm is ECC or SM2, run the following command on a computer with [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed to decrypt the private key.
        
        ```
        openssl ec -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>
        ```
