Issue a client certificate or server certificate from a private intermediate certificate authority (CA) in the Certificate Management Service console.

## Prerequisites

Before you begin, ensure that you have:

-   A purchased and enabled private intermediate CA. For more information, see [Purchase and enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca)
    
-   Available certificate quota. The **Remaining Certificate Quota** for the private intermediate CA must not be 0. For more information, see [Assign a quota on private certificates](/help/en/ssl-certificate/purchase-and-allocation-of-private-certificate-quota)
    

## Issue a private certificate

1.  Log in to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
2.  In the left-side navigation pane, choose **Certificate Management** > **Private Certificate Management**.
    
3.  On the **Private Certificate Management** page, select the region where your Private Certificate Authority (PCA) resides.
    
4.  On the **Private CAs** tab, find the private intermediate CA that you want to use and click **Apply for Certificate** in the **Actions** column.
    
5.  In the **Apply for Certificate** panel, configure the following parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Certificate Type**
    
    The type of certificate to issue:
    
    -   **Server Certificate**: Install on an application server.
    -   **Client Certificate**: Install on a client that accesses an application.
    
    **Personal Name**
    
    Required only for **Client Certificate**. A unique identifier for the certificate holder.
    
    **Common Name (CN)**
    
    Required only for **Server Certificate**. The domain name or IP address to bind to the certificate.
    
    **Validity Period**
    
    The validity period of the certificate. The allowed range depends on the service duration of the private intermediate CA:
    
    -   CA service duration less than one year: The certificate validity period must not exceed the CA service duration. For example, a CA with a one-month service duration can issue certificates with a maximum validity of 31 days. If you require a longer validity period for your private certificate, we recommend that you renew the private intermediate CA to extend its service duration. For more information, see [Renewal policy](/help/en/ssl-certificate/product-overview/pca-biling).
    -   CA service duration of one year or longer: The certificate validity period can range from 1 to 100 years.
    
    **SAN**
    
    Subject alternative name (SAN) values that associate the certificate with multiple entities. Up to 10 SAN values are supported.
    
    -   Server certificate: Enter a domain name or IP address.
    -   Client certificate: Enter an email address or Uniform Resource Identifier (URI). A URI can uniquely identify an Alibaba Cloud resource to which a private certificate is deployed, such as an Elastic Compute Service (ECS) instance.
    
    SAN is an extension defined in the SSL X.509 standard that allows a certificate to be associated with multiple domain names.
    
    **More**
    
    (Optional) Specify a name for the certificate and add company or department information.
    
    **Include CRL Address**
    
    The certificate revocation list (CRL) feature is enabled by default. For more information, see [Use the CRL feature](/help/en/ssl-certificate/use-the-crl-feature).
    

## Verify the result

After you submit the certificate application, the private certificate is immediately issued.

1.  On the **Private CAs** tab, find the intermediate CA that issued the certificate.
    
2.  Click **Certificates** in the **Actions** column to view the issued certificate.
    

## Next steps

Download the private certificate and install it on a client or server. For more information, see [Download a private certificate](/help/en/ssl-certificate/download-a-private-certificate).
