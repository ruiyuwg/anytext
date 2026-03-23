Certificate Management Service supports Private Certificate Authority (PCA). PCA allows you to build a CA certificate platform for your enterprise in an efficient manner. This way, you can issue and manage self-signed private certificates within your enterprise. Private certificates are used to authenticate applications and encrypt and decrypt the data of your enterprise.

## Scenarios

PCA is suitable for the scenarios in which you want to encrypt internal application data by using cryptographic technologies. For example, you can use the cryptographic technology of PCA to implement secure data transmission, data encryption and decryption, and identity authentication for internal applications, such as office automation (OA) and human resources (HR) systems.

## Procedure

PCA is a private certificate service that is provided by Alibaba Cloud. You can purchase a private root certificate authority (CA) and a private intermediate CA to build a private certificate platform for your enterprise. This way, you can manage private certificates within your enterprise by using the platform. You can purchase multiple private intermediate CAs for a private root CA based on the organizational structure of your enterprise. This way, you can manage private certificates by department.

**Step**

**Description**

**References**

**Cancellation**

1: Purchase a private CA

The first time you create a private CA, you must purchase a private root CA. Then, you can obtain one private root CA and one private intermediate CA. By default, the private root CA provides a quota that allows the private intermediate CA to issue 10 private certificates.

[Purchase a private root CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca#section-7ub-88z-wnd)

If a private CA meets refund conditions, you can request a full refund for the private CA. For more information about refund policies and how to request a refund, see [退款](/help/en/ssl-certificate/product-overview/refunds/).

After you request a refund for a private CA and the refund is returned, you can remove the private CA from the private CA list.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3815558271/p847463.png)

2: Enable the private root CA and the private intermediate CA

The first time you enable a private CA, you must enable the private root CA and then the private intermediate CA.

When you enable a private root CA, you can set the Enable Mode parameter to Create CA Certificate. In this case, Alibaba Cloud automatically manages the root certificate, which helps save time. If you want to manually manage the certificate, you can set the Enable Mode parameter to Upload CA Certificate and Private Key.

[Enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca#section-ger-x1c-ccn)

After your reset a private CA, you can re-enable the private CA. For more information, see [Reset a private CA](/help/en/ssl-certificate/reset-a-private-ca-or-a-compliant-ca).

3: Assign a quota on private certificates

The first time you use a private CA, you must assign a quota on private certificates to a private intermediate CA of the private CA. Then, the private intermediate CA can consume the quota to apply for a private certificate.

**Note**

By default, a private root CA provides a quota that allows a private intermediate CA to issue 10 private certificates free of charge. If the quota cannot meet your requirements, you can purchase an additional quota based on your business requirements. For more information, see [Purchase a quota on private certificates](/help/en/ssl-certificate/purchase-and-allocation-of-private-certificate-quota#4d78c3891125d).

[Assign a quota on private certificates](/help/en/ssl-certificate/purchase-and-allocation-of-private-certificate-quota#44790e33c5v6l)

Not supported.

4: Apply for a private certificate

Apply for a private certificate from a private intermediate CA that is enabled.

A private root CA can issue only private intermediate CAs. Only private intermediate CAs can issue private certificates, including server certificates and client certificates.

[Apply for a private certificate](/help/en/ssl-certificate/apply-for-a-private-certificate)

Not supported. If a private certificate is issued, the quota on private certificates is consumed. You cannot request a refund for the consumed quota.

5: Download and install the private certificate

Download the private certificate and deliver the certificate to a specific user for installation and use.

A server certificate must be installed on a server, and a client certificate must be installed on a client browser.

-   [Download a private certificate](/help/en/ssl-certificate/download-a-private-certificate)
    

N/A.
