To use a TCPSSL listener for encrypted data transmission, you must configure a certificate on the Network Load Balancer (NLB) instance. Before configuration, purchase a certificate or upload an existing one to [Alibaba Cloud Certificate Management Service](/help/en/ssl-certificate/product-overview/what-is-certificate-management-service), where certificates are centrally managed.

## How it works

### **Certificate types**

-   **CA certificate**: A Certificate Authority (CA) is a trusted third-party organization that issues digital certificates. CA certificates are used to verify the authenticity of other certificates, ensuring they were issued by a trusted source.
    
-   **Server certificate**: Also known as an SSL certificate, this is issued by a CA and contains the server's public key and identity information, such as its domain name. It is used to prove the server's identity to the client.
    
-   **Client certificate**: Issued by a CA, this certificate contains the client's public key and identity information. It is used to prove the client's identity to the server.
    

**What is a root CA, an intermediate CA, and a certificate chain?**

A **root CA** is the highest authority in a certificate hierarchy and its certificate is the starting point of the entire chain of trust. Root CA certificates are typically self-signed and are pre-installed and implicitly trusted by operating systems, browsers, and other applications. They are used to validate the authenticity of other certificates, such as intermediate CA certificates and end-entity certificates.

An **intermediate CA** serves as the link between a root CA and an end-entity certificate. An intermediate CA's certificate is issued by a root CA, and it is in turn used to issue end-entity certificates like server certificates and client certificates. Using intermediate CAs enhances security by allowing the root CA's private key to be kept offline and securely protected, while also extending the chain of trust.

When a client or server validates a certificate, it follows a **certificate chain** of trust. This process starts from the end-entity certificate (such as the server certificate) and moves up through any intermediate CAs until it reaches a trusted root CA certificate.

For a typical chain, such as `Server Certificate → Intermediate CA Certificate → Root CA Certificate`, the client performs the following checks:

1.  Was the server certificate issued by the intermediate CA?
    
2.  Was the intermediate CA certificate issued by the root CA?
    
3.  Is the root CA certificate present in the client's trusted certificate store?
    

The server is considered trusted only if all checks pass. If the server fails to provide the complete certificate chain (for example, the intermediate CA certificate is missing), the client will report the server certificate as untrusted.

### **Authentication modes**

NLB supports both one-way and mutual authentication.

-   **One-way authentication**: The client verifies the server's identity. In this mode, only a server certificate is required for the NLB listener. This is the most common authentication mode and is suitable for most web applications and API services.
    
-   **Mutual authentication (mTLS)**: The server and client mutually verify each other's identity. This requires the NLB listener to be configured with both a server certificate and a CA certificate to validate client certificates. This mode is ideal for high-security scenarios, such as in finance, IoT, or intranet environments.
    

**One-way authentication handshake**

**Mutual authentication handshake**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4605900671/CAEQTBiBgID80cvNyRkiIGRkMTJiZTI4NWMxZTQwNWI4OGYwZmQ4OTM0NzA3NDQ03963382_20230830144006.372.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4605900671/CAEQTBiBgICjv83NyRkiIDY3YzM2ODk5MmM3YjQxZDRhNmYzOWM0MGIyYjMzMmJi3963382_20230830144006.372.svg)

## **Prerequisites**

Ensure you have prepared the required certificates based on whether you need one-way or mutual authentication. For information about purchasing certificates from Alibaba Cloud, see the following documents:

-   CA certificate: [Purchase and enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca)
    
-   Server certificate: [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate)
    
-   Client certificate: [Download a private certificate](/help/en/ssl-certificate/download-a-private-certificate)
    

## **Configure a certificate for one-way authentication**

## Console

When you configure a TCPSSL listener, in the **Configure SSL Certificate** step, select your server certificate and configure a [TLS security policy](/help/en/slb/network-load-balancer/user-guide/tls-security-policy).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2529057571/p1005078.png)

For a step-by-step tutorial, see [Use NLB to enable SSL offloading over TCP (one-way authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp).

## API

Call the [CreateListener](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createlistener) operation with the following parameters:

-   Set `ListenerProtocol` to `TCPSSL` to create a TCPSSL listener.
    
-   Use `CertificateIds` to specify the server certificate.
    
-   Use `SecurityPolicyId` to specify the TLS security policy.
    

## **Configure a certificate for mutual authentication**

## Console

When you configure a TCPSSL listener, in the **Configure SSL Certificate** step, select your server certificate, enable mutual authentication, then specify the CA certificate. Also, configure a [TLS security policy](/help/en/slb/network-load-balancer/user-guide/tls-security-policy).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2529057571/p1005080.png)

For a step-by-step tutorial, see [Use NLB to enable SSL offloading over TCP (mutual authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp-1).

## API

Call the [CreateListener](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createlistener) operation with the following parameters:

-   Set `ListenerProtocol` to `TCPSSL`.
    
-   Use `CertificateIds` to specify the server certificate.
    
-   Set `CaEnabled` to `true` to enable mutual authentication.
    
-   Use `CaCertificateIds` to specify the CA certificate.
    
-   Use `SecurityPolicyId` to specify the TLS security policy.
    

## **Switch between one-way and mutual authentication**

For an existing TCPSSL listener, you can enable or disable mutual authentication at any time to switch between authentication modes.

## Console

1.  In the [NLB console](https://slb.console.alibabacloud.com/nlb), find the target NLB instance and click the instance ID.
    
2.  On the **Listeners** tab, find the target TCPSSL listener, and in the **Actions** column, click **Manage Certificates**.
    
3.  On the **CA Certificate** tab, click the **Mutual Authentication** toggle to enable or disable the feature. If enabling, select a CA certificate and click **OK**.
    

## API

Call the [UpdateListenerAttribute](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-updatelistenerattribute) operation. Use the `ListenerId` parameter to specify the listener. Set the `CaEnabled` parameter to enable or disable mutual authentication, and use the `CaCertificateIds` parameter to specify the CA certificate.

## **Manage server certificates**

### **Replace the default server certificate**

The server certificate you select when creating a TCPSSL listener becomes its default certificate. Replace this certificate when it is about to expire or when your business needs change.

> During the replacement of a default server certificate, new connections may be interrupted. Existing connections are not affected. Perform this operation during off-peak hours.

## Console

1.  In the [NLB console](https://slb.console.alibabacloud.com/nlb), find the target NLB instance and click the instance ID.
    
2.  On the **Listeners** tab, find the target TCPSSL listener, and in the **Actions** column, click **Manage Certificates**.
    
3.  On the **Server Certificate** tab, click **Change** in the **Actions** column of the **Default Server Certificate** and select a new certificate.
    
4.  Click **OK**.
    

## API

Call the [UpdateListenerAttribute](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-updatelistenerattribute) operation. Use the `ListenerId` parameter to specify the listener and use the `CertificateIds` parameter to specify the new certificate.

### **Add additional certificates for multi-domain support**

If a single listener needs to serve traffic for multiple domains, and each domain requires a different certificate, add additional certificates to the NLB listener.

After you add additional certificates, NLB automatically matches and serves the appropriate certificate based on the domain name requested by the client.

-   If a client request matches the domain of an additional certificate, that certificate is used.
    
-   If no match is found, the default server certificate is used.
    

> 1\. Each NLB instance supports a maximum of 25 additional certificates.

> 2\. You can add or remove a maximum of 15 additional certificates at a time.

## Console

1.  In the [NLB console](https://slb.console.alibabacloud.com/nlb), find the target NLB instance and click the instance ID.
    
2.  On the **Listeners** tab, find the target TCPSSL listener, and in the **Actions** column, click **Manage Certificates**.
    
3.  On the **Server Certificate** tab, click **Add Additional Certificate** and select the certificates for your other domains.
    
4.  Click **OK**.
    

To remove an additional certificate, click **Delete** in the **Actions** column for that certificate.

## API

-   To add certificates, call the [AssociateAdditionalCertificatesWithListener](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-associateadditionalcertificateswithlistener) operation. Use the `ListenerId` parameter to specify the listener and the `AdditionalCertificateIds` parameter to specify the certificates to add.
    
-   To remove certificates, call the [DisassociateAdditionalCertificatesWithListener](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-disassociateadditionalcertificateswithlistener) operation. Use the `ListenerId` parameter to specify the listener and the `AdditionalCertificateIds` parameter to specify the certificates to remove.
    

## **Manage CA certificates**

### **Replace a CA certificate**

## Console

1.  In the [NLB console](https://slb.console.alibabacloud.com/nlb), find the target NLB instance and click the instance ID.
    
2.  On the **Listeners** tab, find the target TCPSSL listener, and in the **Actions** column, click **Manage Certificates**.
    
3.  On the **CA Certificate** tab, if mutual authentication is enabled, click **Change** in the **Actions** column. Select a new CA certificate and click **OK**.
    

## API

Call the [UpdateListenerAttribute](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-updatelistenerattribute) operation. Use the `ListenerId` parameter to specify the listener and use the `CaCertificateIds` parameter to replace the CA certificate.

## Billing

Configuring certificates for a TCPSSL listener does not incur additional charges. However, you are billed for the certificates themselves. For more information, see [Billing of SSL certificates](/help/en/ssl-certificate/product-overview/billing-overview) and [PCA billing](/help/en/ssl-certificate/product-overview/pca-biling).

## Apply in production

-   **Considerations**
    
    -   **Certificate management**: Use [Certificate Management Service](/help/en/ssl-certificate/product-overview/what-is-certificate-management-service) to manage all your certificates. This allows for centralized viewing, renewal, and deployment.
        
    -   **Modern TLS policies**: For public-facing applications without special compatibility requirements, use the `tls_cipher_policy_1_2` or a higher version.
        
    -   **Automation**: Use APIs or Terraform in combination with the Certificate Management Service to automate certificate renewal and deployment, preventing service disruptions caused by expired certificates.
        
-   **Risk prevention and fault tolerance**
    
    -   **Secure internal traffic**: While TCPSSL encrypts traffic between the client and NLB, traffic between NLB and the backend servers is unencrypted by default. For end-to-end security, deploy NLB and your backend servers in the same Virtual Private Cloud (VPC) and use security groups to enforce strict access controls.
        
    -   **Proactive expiration monitoring**: Configure alert rules in CloudMonitor to be notified of certificate expirations. We recommend setting alerts for 30, 7, and 1 days before expiration to ensure you have sufficient time for replacement.
        
    -   **Change management and rollback**: If an issue occurs after you replace a certificate or modify a TLS policy, roll back the change immediately by updating the listener configuration. Perform these changes during off-peak hours.
