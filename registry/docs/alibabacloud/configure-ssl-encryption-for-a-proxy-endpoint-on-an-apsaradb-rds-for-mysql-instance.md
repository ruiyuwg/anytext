RDS for MySQL supports Secure Sockets Layer (SSL) encryption for database proxy endpoints. You can enable SSL encryption and install the SSL CA certificate on your applications to improve connection security. This topic describes how to configure SSL encryption for a database proxy endpoint.

SSL encrypts network connections at the transport layer. This improves data security and integrity in transit but also increases the response time.

## Prerequisites

-   The Milvus Version is as follows:
    
    -   MySQL 8.0 on RDS High-availability Edition with a minor engine version of 20200831 or later
        
    -   MySQL 8.0 Cluster Edition
        
    -   MySQL 5.7 Cluster Edition
        
    -   MySQL 5.7 on RDS High-availability Edition with a minor engine version of 20200831 or later
        
    -   MySQL 5.6 on RDS High-availability Edition with a minor engine version of 20200831 or later
        
    
    **Note**
    
    If your RDS instance has read-only instances, the read-only instances must also meet the [minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11) requirements.
    
-   You have enabled the database proxy feature. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).
    
-   [PolarProxy minor engine version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance#task-2021050) is 2.25.3 or later.
    
-   The total length of the database proxy endpoint that you want to protect with SSL encryption does not exceed 64 characters.
    

## Usage notes

-   You can configure SSL encryption for only one database proxy endpoint per proxy instance.
    
-   Enabling SSL encryption, disabling SSL encryption, changing the protected endpoint, or updating the certificate validity period restarts your proxy instance. Proceed with caution.
    

## Enable SSL encryption

**Important**

This operation restarts your proxy instance. Proceed with caution.

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region where your RDS instance resides. Then, click the instance ID.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, hover over the ID of the target database proxy endpoint. In the **SSL Configuration** section of the dialog box that appears, click **Enable** to the right of **SSL Certificate**.
    
4.  In the dialog box that appears, select the endpoint to encrypt and click **OK**.
    
5.  After the SSL status changes to **Enabled**, click **Download CA Certificate** to the right of **SSL Certificate**.
    
    **Note**
    
    -   The downloaded file is a compressed package that contains the following files:
        
        -   PEM file: suitable for most scenarios.
            
        -   JKS file: required for Java applications. You must import the PEM-formatted CA certificate into a truststore and convert it to a JKS file for use in Java applications. The password for the JKS file is apsaradb.
            
        -   P7B file: suitable for a small number of Windows applications that require PKCS #7 certificate files.
            
    -   After you configure the SSL CA certificate, you can verify the database server certificate.
        
    -   When you use the JKS certificate file in JDK 7 or JDK 8, go to the `jre/lib/security/java.security` file on the host where your application runs and update the following two configuration items:
        
        ```
        jdk.tls.disabledAlgorithms=SSLv3, RC4, DH keySize < 224
        jdk.certpath.disabledAlgorithms=MD2, RSA keySize < 1024
        ```
        
        If you do not update these configurations, the following error is reported. Most similar errors are also caused by incorrect Java security settings:
        
        ```
        javax.net.ssl.SSLHandshakeException: DHPublicKey does not comply to algorithm constraints
        ```
        
    

## Configure an SSL CA certificate

After you enable SSL encryption and download the CA certificate, you must configure the certificate. For more information, see [Configure a CA certificate](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#1bf77be069zxo).

## Modify the SSL encryption address

**Important**

This operation updates the certificate validity period and restarts your proxy instance. Proceed with caution.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, hover over the ID of the target database proxy endpoint. In the **SSL Configuration** section of the dialog box that appears, click **Change Protected Endpoint** below **Protected Endpoint**.
    
4.  Select the endpoint to encrypt and click **OK**.
    

## Update the certificate validity period

**Important**

This operation restarts your proxy instance. Proceed with caution.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, hover over the ID of the target database proxy endpoint. In the **SSL Configuration** section of the dialog box that appears, click **Update Expiration Time** to the right of **SSL Certificate**. In the dialog box that appears, click **OK**.
    

## Disable SSL encryption

**Important**

The instance will restart if you disable Secure Sockets Layer (SSL) encryption. Proceed with caution.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, hover over the ID of the target database proxy endpoint. In the **SSL Configuration** section of the dialog box that appears, click **Disable** to the right of **SSL Certificate**. In the dialog box that appears, click **OK**.
    

## Related APIs

**API**

**Description**

[ModifyDbProxyInstanceSsl](/help/en/rds/api-configure-ssl-encryption-for-dedicated-proxy-endpoint#doc-api-Rds-ModifyDbProxyInstanceSsl)

Configures SSL encryption for a database proxy endpoint.

[GetDbProxyInstanceSsl](/help/en/rds/api-query-ssl-encryption-settings-of-dedicated-proxy-endpoint#doc-api-Rds-GetDbProxyInstanceSsl)

Queries SSL encryption settings for a database proxy endpoint.

## Appendix

### **Sample code for connecting to a database over SSL**

For more information, see [Sample code for connecting to a database over SSL](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#ad4aced169yqb).

### FAQ about SSL encryption

For more information, see [FAQ about SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#section-q6i-gdn-rye).
