To improve the security of data links when you access LindormTable, you can enable Secure Sockets Layer (SSL) encryption and install a CA certificate for your application. SSL encrypts network connections at the transport layer, which improves the security and integrity of data in transit but also increases the response time of network connections.

**Warning**

**Enabling and disabling** SSL encryption restarts the instance. During the restart, the instance may experience a transient disconnection that lasts for a few seconds. Perform this operation during off-peak hours and make sure your application has a reconnection mechanism.

## Prerequisites

-   You have enabled LindormTable. For more information, see [Create an instance](/help/en/lindorm/getting-started/create-an-instance#task-2045184).
    
-   A Java environment is installed. JDK 1.8 or later is required.
    

## Background information

SSL is a security protocol developed by Netscape. It creates a secure channel for data transmission between a browser and a web server. It uses encryption algorithms such as RC4, MD5, and RSA to secure communications. The Internet Engineering Task Force (IETF) standardized SSL 3.0 and renamed it Transport Layer Security (TLS). Because the term SSL is more common, SSL encryption in this topic refers to TLS encryption.

## Precautions

-   The default validity period of a CA certificate is 10 years.
    
-   After you disable SSL encryption, you can connect to the instance only over non-SSL connections.
    
-   After you disable SSL encryption, the original CA certificate becomes invalid. If you re-enable SSL encryption, you must download and configure a new CA certificate. Otherwise, you cannot establish an SSL connection.
    
-   Enabling or disabling SSL encryption restarts the instance. The instance may experience a transient disconnection that lasts for a few seconds. Perform this operation during off-peak hours and make sure your application has a reconnection mechanism.
    

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, click **Wide Table Engine**.
    
5.  Click the **Data Security** tab, and then click **Data Link SSL**.
    
6.  Enable SSL encryption.
    
    1.  Enable the **Current Status:** switch.
        
    2.  In the **Enable SSL Encryption** dialog box that appears, click **OK**.
        
7.  In the lower-left corner of the page, click **Download CA Certificate**.
    
8.  **Optional:** Disable SSL encryption.
    
    1.  Turn off the **Current Status:** switch.
        
    2.  In the **Disable SSL Encryption** dialog box that appears, click **OK**.
        

## Import a CA certificate (Java example)

Import the CA certificate into the Java trusted certificate store. This allows your application to access the Lindorm instance using SSL encryption.

1.  Navigate to the `jre/bin` folder in the JDK installation directory.
    
2.  Run the following command to import the downloaded CA certificate into the Java trusted certificate store. When prompted, enter the password. The default password is changeit.
    
    ```
    keytool -import -alias server -keystore cacerts -file /path-to-crt/server.crt
    ```
    
    **Parameter description**
    
    `/path-to-crt/server.crt` is the path where the downloaded CA certificate is saved.
    
    **Example**
    
    ```
    keytool -import -alias server -keystore cacerts -file /root/CA/ld-bp12pc23yfb38****.crt
    ```
    
3.  After the certificate is imported, you can access the Lindorm instance. For more information, see [Develop an application using a non-Java HBase API](/help/en/lindorm/user-guide/use-the-hbase-api-for-a-non-java-language-to-connect-to-and-use-the-wide-table-engine).
