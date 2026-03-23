Global Accelerator (GA) can accelerate multiple domain names over HTTPS. To implement this feature, you only need to associate multiple certificates with an HTTPS listener of a GA instance. This topic describes how to associate multiple certificates with an HTTPS listener and use virtual endpoint groups and forwarding rules to accelerate multiple domain names over HTTPS.

## Manage SSL certificates that are associated with an HTTPS listener

When you create an HTTPS listener for a GA instance, you must configure an SSL certificate for identity authentication and encrypted data transmission. You can associate multiple SSL certificates with an HTTPS listener of a GA instance. The following types of SSL certificates are supported:

-   Default server certificate
    
    The SSL certificate that you configure when you create an HTTPS listener is used as the default server certificate. You cannot delete the default server certificate. You can only replace the default server certificate.
    
-   Additional SSL certificate
    
    You can associate additional SSL certificates with an existing HTTPS listener. You can associate multiple domain names with an HTTPS listener by configuring additional certificates for the HTTPS listener. Then, you can create domain name-based forwarding rules to distribute client requests that are destined for different domain names to different virtual endpoint groups.
    
    You can associate each HTTPS listener with up to 25 additional SSL certificates.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6788345671/CAEQUBiBgMCm2Kix2BkiIGU0NWMyMDdkNGQ4YTQ1NjlhNWY4NzAxYmU4OWFiYWZi3963382_20230830144006.372.svg)

## **Limits**

-   Standard GA instances support Rivest-Shamir-Adleman (RSA) and Elliptic Curve Cryptography (ECC) certificates.
    
-   If the default certificate associated with the HTTPS listener of a standard subscription GA is an ECC certificate, the additional certificates must also be ECC certificates. Otherwise, the additional domain names may fail to be resolved.
    

For more information about the encryption algorithms supported by SSL certificates, see [SSL certificate selection guide](/help/en/ssl-certificate/functions-and-features).

## Prerequisites

-   You have [created a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   If your GA instance uses the subscription billing method, you must purchase and attach a basic bandwidth plan.
    
-   An acceleration region is added. For more information, see [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas#task-2382321).
    
-   An Internet Content Provider (ICP) number is obtained for your website if the website is deployed in the Chinese mainland. For more information, see [What is an ICP filing?](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb)
    
-   Multiple SSL certificates are issued to you. For more information, see [Purchase an official certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Apply for a certificate](/help/en/ssl-certificate/submit-a-certificate-application#concept-wxz-3xn-yfb).
    

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6788345671/CAEQTxiBgMC46dyT2BkiIGQ5MmJjODRmNTg5YTQ1ODM4NDgzNjYwY2Q0OGQ4MmIx4210981_20240213143608.814.svg)

## Step 1: Associate the default server certificate with an HTTPS listener

Create an HTTPS listener and associate an SSL certificate. The SSL certificate that you configure when you create the HTTPS listener is used as the default server certificate. The endpoint group that you create is used as the default endpoint group. For more information about HTTPS listeners, see the "Add an HTTP or HTTPS listener" section of the [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-p8q-jbh-5bm) topic.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list) .
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listener** in the **Actions** column.
    
3.  On the **Listeners** tab, click **Add Listener**.
    
    **Note**
    
    If you are adding an HTTPS listener for the first time or an HTTPS listener is not configured for the GA instance that you want to manage, skip this step.
    
4.  In the **Configure Listener & Protocol** step, configure the parameters and click **Next**.
    
    The following section describes the parameters:
    
    -   **Server Certificate**: Select the SSL certificate that you want to associate. The SSL certificate that you select is used as the default server certificate of the HTTPS listener.
        
    -   **TLS Security Policies**: Select the TLS security policy that you want to use. For more information about TLS security policies, see [TLS security policies](/help/en/ga/user-guide/tls-security-policies#concept-2130168).
        
5.  In the **Configure Endpoint Group** step, configure the endpoint group and the endpoints and click **Next**.
    
    The endpoint group that you configure is used as the default endpoint group of the HTTPS listener.
    
6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
    

## Step 2: Create virtual endpoint groups

Create virtual endpoint groups. Each virtual endpoint group contains one of the origin servers. For more information, see the "Create a virtual endpoint group" section of the [Create and manage the endpoint groups of intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-2xd) topic.

## Step 3: Associate additional SSL certificates with the HTTPS listener

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list) .
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listener** in the **Actions** column.
    
3.  On the **Listeners** tab, find the HTTPS listener with which you want to associate additional SSL certificates and click the listener ID.
    
4.  On the listener details page, click the **Certificates** tab.
    
5.  On the **Certificates** tab, click **Associate Certificate** in the **Additional Certificate** section.
    
6.  In the **Associate Certificate** dialog box, configure the additional SSL certificate and click **OK**.
    
    -   **Certificate**: Select the certificate that you want to associate.
        
    -   **Associated Domain Name**: Select one or more domain names that you want to accelerate by using GA. The SSL certificate is associated with the domain names that you select. You can select multiple domain names. Each additional certificate can be associated with at most three domain names.
        
    
    You can click **\+ Add Certificate** to add multiple additional certificates at a time. You can associate each HTTPS listener with up to three additional SSL certificates. If you want to associate more than three additional SSL certificates with an HTTPS listener, go to the [Quota Center](https://quotas.console.alibabacloud.com/products/ga/quotas) and submit a ticket to increase the **gaplus\_quota\_additional\_certs\_per\_listener** quota. For more information, see [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).
    

## Step 4: Create forwarding rules

Create a domain name-based forwarding rule for each virtual endpoint group. For more information, see [Create and manage forwarding rules](/help/en/ga/user-guide/create-and-manage-forwarding-rules#task-2039265).

## Step 5: Add CNAME records

Add CNAME records for the domain names that you want to accelerate. To forward requests from clients to GA, you must modify the domain name system (DNS) record to map the domain names that you want to accelerate to the CNAME of the GA instance. For more information, see [Add a CNAME record for a domain name](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name#task-2382948).

## More operations

**Operation**

**Description**

Replace the default server certificate

1.  On the **Listeners** tab, find the HTTPS listener that you want to manage and click the listener ID.
    
2.  On the listener details page, click the **Certificates** tab.
    
3.  In the **Default Server Certificate** section of the **Certificates** tab, find the SSL certificate that you want to replace and click **Replace** in the Actions column.
    
4.  In the **Change Default Server Certificate** dialog box, select the SSL certificate that you want to use and click **OK**.
    

Replace an additional server certificate

The operation is applicable to scenarios in which an additional certificate expires and the associated domain name does not need to change.

1.  On the **Listeners** tab, find the HTTPS listener that you want to manage and click the listener ID.
    
2.  On the listener details page, click the **Certificates** tab.
    
3.  In the **Additional Certificate** section of the **Certificates** tab, find the SSL certificate that you want to replace and click **Replace** in the Actions column.
    
4.  In the **Change Default Server Certificate** dialog box, select the certificate that you want to use and click **OK**.
    

Disassociate an additional SSL certificate

You can only disassociate additional SSL certificates from an HTTPS listener in the GA console. If you want to delete a certificate, see [Revoke and delete an SSL certificate](/help/en/ssl-certificate/revoke-and-delete-a-certificate#task-2069880).

1.  On the **Listeners** tab, find the HTTPS listener that you want to manage and click the listener ID.
    
2.  On the listener details page, click the **Certificates** tab.
    
3.  In the **Additional Certificate** section of the **Certificates** tab, disassociate one or more additional SSL certificates.
    
    -   Disassociate one additional SSL certificate: Find the certificate that you want to disassociate and click **Disassociate** in the **Actions** column.
        
    -   Disassociate multiple additional SSL certificates: Select the additional SSL certificates that you want to disassociate and click **Batch Disassociate**.
        
4.  In the message that appears, click **OK**.
    

## References

-   [Use a single GA instance to accelerate multiple domain names over HTTPS](/help/en/ga/use-cases/use-one-ga-instance-to-accelerate-access-to-multiple-https-capable-domain-names): accelerates multiple domain names over HTTPS by configuring multiple certificates.
    
-   [AssociateAdditionalCertificatesWithListener](/help/en/ga/api-associateadditionalcertificateswithlistener#doc-api-Ga-AssociateAdditionalCertificatesWithListener): associates additional SSL certificates with an HTTPS listener.
    
-   [UpdateAdditionalCertificateWithListener](/help/en/ga/api-462215#doc-api-Ga-UpdateAdditionalCertificateWithListener): replaces an additional SSL certificate associated with an HTTPS listener.
    
-   [DissociateAdditionalCertificatesFromListener](/help/en/ga/api-dissociateadditionalcertificatesfromlistener#doc-api-Ga-DissociateAdditionalCertificatesFromListener): disassociates additional SSL certificates from an HTTPS listener.
    
-   [ListListenerCertificates](/help/en/ga/api-listlistenercertificates#doc-api-Ga-ListListenerCertificates): queries the SSL certificates that are associated with an HTTPS listener.
