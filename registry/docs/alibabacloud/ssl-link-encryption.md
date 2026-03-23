This topic describes how to use the Secure Socket Layer (SSL) link encryption feature.

## Background information

To improve link security, OceanBase Database allows you to enable SSL encryption, which encrypts network connections in the transport layer to improve the security of communication data. After SSL connection is enabled, you can configure settings to require the client to use an SLL connection for access.

**Note**

-   After SSL link encryption is enabled, it cannot be disabled. The instance performance may be slightly compromised because certificate encryption and decryption will consume computing resources. We recommend that you enable SSL link encryption only when Internet access is available or transmission encryption is required.
    
-   SSL link encryption is supported in ApsaraDB for OceanBase V2.2.76 and later.
    
-   At present, SSL link encryption is supported for Standard Edition (Key-Value) cluster instances.
    
-   SSL link encryption does not take effect for direct connection addresses.
    

## Procedure

1.  Log on to the [ApsaraDB for OceanBase console](https://oceanbase.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Instances**.
    
3.  Find the target cluster instance in the list and click the cluster instance name to go to the **Cluster Instance Workspace** page.
    
4.  In the left-side navigation pane, click **Security Settings**.
    
5.  Click the **SSL Link Encryption** tab. You can perform the following operations:
    
    1.  Enable **SSL Link Encryption**. The enabling process takes about 3 to 5 minutes. After SSL link encryption is enabled, you can choose whether to enable **Force SSL Connection** in some editions. The Force SSL Connection option is displayed only when it is supported by the current cluster instance edition.![强制SSL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6774115961/p699333.png)
        
        **Note**
        
        After Force SSL Connection is enabled, non-SSL connections will be blocked and non-SSL connections created earlier will fail. In this case, you must change the connection method.
        
    2.  Click **Download CA Certificate** to download the certificate.
        
        The downloaded package contains three files:
        
        -   .p7b file: used to import CA certificates in Windows operating systems.
            
        -   .pem file: used to import CA certificates in other systems or applications.
            
        -   .jks file: a Java TrustStore certificate file used to import CA certificate chains in Java applications. The password is OceanBase.
            
        
        **Note**
        
        When you use the .jks file in JDK 7 or JDK 8, you must modify the default JDK security settings. Specifically, you must find the java.security file in the `jre/lib/security` directory on the server where the application is located, and then reconfigure the file as follows:
        
        ```
        jdk.tls.disabledAlgorithms=SSLv3, RC4, DH keySize < 224
        jdk.certpath.disabledAlgorithms=MD2, RSA keySize < 1024
        ```
        
        If you do not modify the JDK security settings, the following error will be reported. Generally, other similar errors are also caused by the JDK security settings.
        
        ```
        javax.net.ssl.SSLHandshakeException: DHPublicKey does not comply to algorithm constraints
        ```
        
    3.  Click **Update Validity Period** and update **SSL Certificate Validity Period**.
        
        ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6215762371/p282744.png)
        
    4.  Enable **Auto-renewal of SSL Certificate Validity Period**. After this option is enabled, the certificate automatically renews seven days before it expires. Each renewal is valid for 360 days.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6215762371/p851169.png)
