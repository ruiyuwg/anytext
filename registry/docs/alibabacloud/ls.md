If you use a cloud certificate or a custom certificate to enable SSL encryption for an ApsaraDB RDS instance, a client validates the RDS instance before the client connects to the RDS instance. If you want the RDS instance to validate the client, you must also configure a client certificate authority (CA) certificate. This topic describes how to configure a client CA certificate on an RDS instance.

## Prerequisites

-   A cloud certificate or a custom certificate is configured to enable the SSL encryption feature. For more information, see [Configure a cloud certificate to enable the SSL encryption feature](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262) or [Configure a custom certificate to enable the SSL encryption feature](/help/en/rds/apsaradb-rds-for-postgresql/configure-a-custom-certificate-on-an-apsaradb-rds-for-postgresql-instance#task-1079262).
    
-   OpenSSL is installed.
    
    **Note**
    
    Linux operating systems are provided with OpenSSL. If you use a Linux operating system, you do not need to install OpenSSL. If you use a Windows operating system, you must download the OpenSSL software package and install OpenSSL. For more information, visit the [Win32/Win64 OpenSSL](http://slproweb.com/products/Win32OpenSSL.html) page.
    

## Usage notes

-   After a client CA certificate is enabled, you must close the existing connection and establish a new connection to make SSL encryption take effect.
    
-   When you enable a client CA certificate, change the content of the configured client CA certificate, or modify the client certificate revocation list (CRL), the RDS instance restarts. The restart process requires approximately 3 minutes. We recommend that you perform these operations during off-peak hours.
    

## **Procedure**

### **Step 1: Create a client certificate**

In this example, CentOS is used. If you use a Windows operating system, you can configure the `openssl` command by using the same configuration that you use in CentOS.

1.  Create a self-signed certificate and a private key for the self-signed certificate. The self-signed certificate is saved in a file named client-ca.crt. The private key is saved in a file named client-ca.key.
    
    ```
    openssl req -new -x509 -days 3650 -nodes -out client-ca.crt -keyout client-ca.key -subj "/CN=root-client-ca"
    ```
    
2.  Create a certificate signing request (CSR) and a private key for the client certificate. The CSR is used to request a client certificate and is saved in a file named client.csr. The private key is saved in a file named client.key.
    
    ```
    openssl req -new -nodes -text -out client.csr -keyout client.key -subj "/CN=<Username that is used for logons from the client>"
    ```
    
    **Note**
    
    In the preceding command, the CN parameter follows the -subj parameter. You must set the CN parameter to the username of the account that is used to connect to the RDS instance from the client.
    
3.  Create a client certificate. The client certificate is saved in a file named client.crt.
    
    ```
    openssl x509 -req -in client.csr -text -days 365  -CA client-ca.crt -CAkey client-ca.key -CAcreateserial  -out client.crt
    ```
    

After the preceding configuration is complete, run the `ls` command to view the created file.

```
# ls
client-ca.crt  client-ca.key  client-ca.srl  client.crt  client.csr  client.key
```

The following list describes the files:

-   client.crt: the file that contains the client certificate
    
-   client.key: the file that contains the private key of the client certificate
    
-   client-ca.crt: the file that contains the self-signed certificate
    
-   client-ca.key: the file that contains the private key of the self-signed certificate
    

### **Step 2: Configure a client CA certificate**

**Note**

After a client CA certificate is configured, the status of the RDS instance changes from **Running** to **Modifying SSL Settings**. After about 3 minutes, the status changes back to **Running**.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Data Security**. On the page that appears, click the **SSL** tab.
    
3.  Click **Enable Client CA Certificate**.
    
    ![启用客户端CA证书](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3335202261/p271993.png)
    
4.  In the dialog box that appears, copy the content of the client-ca.crt file to the Public Key field. Then, click **OK**.
    
    **Note**
    
    For more information about how to obtain the client-ca.crt file, see [Step 1: Create a client certificate](#aaff7b44613zn). Make sure that all the content from **\-----BEGIN CERTIFICATE-----** to **\-----END CERTIFICATE-----** is copied to this field.
    
    ![填写证书授权机构公钥](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335202261/p271992.png)
    

### **Step 3: Connect to the RDS instance from the client**

You can connect to the RDS instance from the client over SSL. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance over SSL](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance-over-ssl-connections#task-1079262).

### **Step 4: (Optional) Configure a CRL file**

If you no longer need the client certificate, you can revoke the client certificate. After the client certificate is revoked, the RDS instance denies access requests from the client.

**Note**

After a CRL file is configured, the status of the RDS instance changes from **Running** to **Modifying SSL Settings**. After about 3 minutes, the status changes back to **Running**.

1.  Prepare the configuration file
    
    ```
    touch /etc/pki/CA/index.txt
    echo 1000 > /etc/pki/CA/crlnumber
    ```
    
    **Note**
    
    If you use a Windows operating system, you must perform the following operations:
    
    1.  Create a CA folder in the Installation directory of OpenSSL\\bin directory.
        
    2.  Create a file named index.txt in the CA folder.
        
    3.  Run the following command by using the PostgreSQL CLI:
        
        ```
        echo 1000 > <Installation directory of OpenSSL>\bin\CA\crlnumber
        ```
        
    4.  Modify the openssl.cnf file in C:\\Program Files\\Common Files\\SSL\\.
        
        ```
        # Find the [ CA_default ] configuration item.
        
        dir = "<Installation directory of OpenSSL>\\bin\\CA"
        ```
        
    
2.  Revoke the client certificate, which is contained in the client.crt file.
    
    ```
    openssl ca -revoke client.crt -cert client-ca.crt -keyfile client-ca.key
    ```
    
    **Note**
    
    The preceding command requires the self-signed certificate and the private key of the self-signed certificate. The self-signed certificate is contained in the client-ca.crt file, and the private key of the self-signed certificate is contained in the client-ca.key file. For more information, see the [Step 1: Create a client certificate](#aaff7b44613zn).
    
3.  Create a CRL. The CRL is saved in a file named client.crl.
    
    ```
    openssl ca -gencrl -out client.crl -cert ca.crt -keyfile ca.key
    ```
    
4.  In the left-side navigation pane of the page that appears, click **Data Security**. On the page that appears, click the **SSL** tab.
    
5.  Click **Enable Certificate Revocation File**.
    
    ![启用证书吊销文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335202261/p271994.png)
    
6.  In the dialog box that appears, copy the content of the client.crl file to the Revocation File field.
    
    ![填写客户端证书吊销文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335202261/p271995.png)
    

### **Step 5: (Optional) Update the client certificate**

**Note**

This operation triggers a restart of the RDS instance. Proceed with caution.

On the SSL tab, click **Clear Client CA Certificate**. Then, click **Enable Client CA Certificate**.![clearclientca](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6314054261/p274299.png)
