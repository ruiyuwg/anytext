If you integrate a self-managed application with an SDK such as Key Management Service (KMS) Instance SDK or a secret SDK, a client key of an application access point (AAP) is required to verify identities and permissions. This topic describes how to create an AAP.

## **Usage notes**

-   We recommend that you create an AAP for each application that needs to access KMS. This way, different applications can have access permissions on different KMS resources.
    
-   A client key has a default validity period of five years. When you create a client key, you can specify a custom validity period for the client key. We recommend that you set the validity period to one year. To ensure access to KMS, you must change your client key before the expiration date of the client key. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key).
    

## Prerequisites

-   A KMS instance is purchased and enabled. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).
    
-   A key or a secret is created. For more information, see [Getting started with Key Management](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management#task-2025660) and [Getting started with Secrets Manager](/help/en/kms/key-management-service/getting-started/getting-started-with-secrets-manager#task-2025661).
    

## **Use the KMS console**

You can create an AAP in the quick creation or standard creation mode. If you need to quickly integrate your application with an SDK, you can use the quick creation mode. This mode comes with the following limits:

-   If you create an AAP in the quick creation mode, you can use the AAP to access keys and secrets only by using a KMS instance endpoint. If you create an AAP in the standard creation mode, you can use the AAP to access keys and secrets by using a KMS instance endpoint and access secrets by using a KMS endpoint.
    
-   The validity period of a client key in an AAP is fixed as five years. You cannot specify a custom validity period. We recommend that you change your client key one year after you use the client key. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key).
    
-   By default, the **accessible resources** are all keys and secrets in the KMS instance. You can modify your permission policy after your AAP is created. For more information, see [Manage an AAP](/help/en/kms/key-management-service/user-guide/manage-aaps-1#0729a4c07e266).
    

#### **Mode 1: Quick creation**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  On the **Application Access** tab, click **Create AAP**. In the **Create AAP** panel, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Mode**
    
    Select **Quick Creation**.
    
    **Scope (KMS Instance)**
    
    Select the KMS instance that you want to access.
    
    **Application Access Point Name**
    
    Enter the name of the AAP.
    
    **Authentication Method**
    
    The default value is ClientKey, which cannot be changed.
    
    **Default Permission Policy**
    
    The default value is `key/*``secret/*`, which cannot be changed. Your application can access all keys and secrets in the specified KMS instance.
    
3.  Click **OK**. The browser automatically downloads the client key that is created.
    
    The client key contains **Application Access Secret(ClientKeyContent)** and **Password**. By default, **Application Access Secret(ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

#### **Mode 2: Standard creation**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  Create a network access rule.
    
    **Note**
    
    If you do not need to control access based on source IP addresses, you do not need to configure network access rules. For security purposes, we recommend that you configure network access rules.
    
    1.  Click the **Network Access Rules** tab. Then, click **Create Network Access Rule**.
        
    2.  In the **Create Network Access Rule** panel, configure the parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Rule Name**
        
        The name of the network access rule. You can specify a custom value.
        
        **Network Type**
        
        -   Private: If your application needs to access keys and secrets by using a KMS instance endpoint, select this option.
            
        -   Public: If your application needs to access secrets by using a KMS public endpoint, select this option.
            
        -   VPC: If your application needs to access secrets by using a KMS VPC endpoint, select this option. This option is supported only when your KMS instance is in the China (Hangzhou), China (Shanghai), China (Shenzhen), and China (Zhangjiakou) regions.
            
        
        **Note**
        
        -   Cryptographic operations: You can perform cryptographic operations only when you use KMS Instance SDK and a KMS instance endpoint to access KMS. When you create your AAP, set the Network Type parameter to Private.
            
        -   Secret value retrieval: You can retrieve a secret value by using KMS Instance SDK or a secret SDK. We recommend that you use a secret SDK and set the Network Type parameter to Private when you create your AAP. This helps achieve high queries per second (QPS) and high security.
            
            -   KMS Instance SDK: If you use KMS Instance SDK, set the Network Type parameter to Private and the Allowed Source IP Addresses parameter to IP addresses in the virtual private clouds (VPCs) that are associated with your KMS instance for your AAP.
                
            -   Secret SDK: If you use a secret SDK, set the Network Type parameter to Private, Public, or VPC for your AAP.
                
        
        **Allowed Source IP Addresses**
        
        The IP addresses from which access to your KMS instance is allowed. Specify the value based on the network type of your application server. If you use a proxy server, enter the IP address of the proxy server.
        
        -   If the Network Type parameter is set to Private, enter the IP addresses in the VPCs that are associated with your KMS instance.
            
        -   If the Network Type parameter is set to Public, enter public IP addresses.
            
        -   If the Network Type parameter is set to VPC, enter the IDs of the required VPCs and IP addresses in the VPCs.
            
        
        **Description**
        
        The description for the network access rule.
        
3.  Create a permission policy.
    
    1.  Click the **Policies** tab and then click **Create Policy**.
        
    2.  In the **Create Policy** panel, configure the parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Policy Name**
        
        The name of the permission policy.
        
        **Scope**
        
        If you set the **Network Type** parameter to **Private** when you create the network access rule, select the specified KMS instance. If you set the **Network Type** parameter to **Public** or **VPC**, select **Shared KMS Gateway**.
        
        **RBAC Permissions**
        
        -   If you set the **Scope** parameter to a specific KMS instance, you can set this parameter to one of the following values:
            
            -   CryptoServiceKeyUser: allows for the use of keys in the KMS instance. For more information about the cryptographic operations of Instance API, see [Key-related operations](/help/en/kms/key-management-service/developer-reference/api-overview#section-llo-9kj-kbj).
                
            -   CryptoServiceSecretUser: allows for the use of secrets in the KMS instance. For more information about the secret-related operations of Instance API, see [Secret-related operations](/help/en/kms/key-management-service/developer-reference/api-overview#section-igh-i9r-sps).
                
        -   If you set the **Scope** parameter to **Shared KMS Gateway**, you can set this parameter to the following value:
            
            SecretUser: allows for the use of all secrets within the current account. The GetSecretValue operation of API is supported.
            
        
        **Accessible Resources**
        
        The keys and secrets that your application needs to access.
        
        **Important**
        
        When you select multiple secrets, if the name length of all secrets exceeds the limit, an error message "The specified parameter is not valid." is returned. In this case, you can use wildcards to configure secrets that are needed. For example, the secret `secret/rds-ibm*` including a wildcard indicates all secrets with the prefix `rds-ibm` can be accessed.
        
        **Network Access Rules**
        
        The network access rule that you created.
        
        **Note**
        
        If you do not need to control access based on source IP addresses, you do not need to select network access rules. For security purposes, we recommend that you configure network access rules.
        
        **Description**
        
        The description for the permission policy.
        
4.  Create an AAP.
    
    1.  Click the **Application Access** tab. Then, click **Create AAP**.
        
    2.  In the **Create AAP** panel, configure the parameters.
        
        **Parameter**
        
        **Description**
        
        **Mode**
        
        Select **Standard Creation**.
        
        **Application Access Point Name**
        
        Enter the name of the AAP.
        
        **Authentication Method**
        
        Select an authentication method. ClientKey and RAMRole are supported. In this example, select ClientKey.
        
        **Encryption Password**
        
        Enter the password for your client key. The password must be 8 to 64 characters in length and must contain at least two of the following types: digits, letters, and special characters. Special characters include `~ ! @ # $ % ^ & * ? _ -`.
        
        **Validity Period**
        
        Specify the validity period of your client key.
        
        **Important**
        
        We recommend that you set the value to one year to reduce the risk of client key leaks. To ensure access to KMS, you must change your client key before the expiration date of the client key. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key).
        
        **Policies**
        
        Select the permission policy that you created.
        
        **Description**
        
        Enter a description for the AAP.
        
    3.  Click **OK**. The browser automatically downloads the client key that is created.
        
        The client key contains **Application Access Secret(ClientKeyContent)** and **Password**. By default, **Application Access Secret(ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
        

## **Call API operations**

1.  Call the [CreateNetworkRule](/help/en/kms/key-management-service/developer-reference/api-createnetworkrule) operation and specify the private IP addresses or private CIDR blocks from which access to KMS is allowed to create a network access rule.
    
2.  Call the [CreatePolicy](/help/en/kms/key-management-service/developer-reference/api-createpolicy) operation and specify the keys and secrets that can be accessed and the required network access rules to create a permission policy.
    
3.  Call the [CreateApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-createapplicationaccesspoint) operation and specify the required authentication method and permission policies to create an AAP.
    
4.  Call the [CreateClientKey](/help/en/kms/key-management-service/developer-reference/api-createclientkey) operation and specify the required encryption password, validity period, and AAP to create a client key.
    

## **Use Terraform**

For more information, see [Create an AAP with Terraform](/help/en/kms/key-management-service/developer-reference/create-an-application-access-point).

## **Related operations**

If the scope of the AAP is set to a KMS instance, you must configure the certificate authority (CA) certificate of the KMS instance and the endpoint of the KMS instance when you integrate the SDK into your application. The operation is not required if the scope of the AAP is set to Shared KMS Gateway.

### **Obtain the instance CA certificate**

The KMS instance has a built-in SSL/TLS certificate and uses the HTTPS protocol for authentication and encrypted communication. A KMS instance CA certificate is used to verify the validity of the KMS instance's SSL/TLS certificate. For example, this involves checking that the KMS instance's SSL/TLS certificate was issued by the correct CA, is valid, and that its domain name matches the KMS instance's endpoint.

**Note**

KMS instances support only TLS 1.2.

1.  On the **Instances** page, select either **Software Key Management** or **Hardware Key Management** tab, then choose the target instance.
    
2.  Click the instance ID or **Details** in the **Actions** column. On the details page, click **Download** next to the **Instance CA Certificate**.
    
    Save the certificate securely. The downloaded file will be named `PrivateKmsCA_kst-******.pem` by default.
    

### **Obtain** the instance endpoint

1.  On the **Instances** page, click the **Software Key Management** or **Hardware Key Management** tab and find the KMS instance that you want to manage.
    
2.  Click the ID of the instance to go to the details page and view the **Instance VPC Endpoint** parameter.
    
3.  Remove `https://` from the value of the **Instance VPC Endpoint** parameter to obtain the endpoint of the KMS instance.
    

## References

-   We recommend that you delete AAPs that are not used for a long time. For more information, see [Manage an AAP](/help/en/kms/key-management-service/user-guide/manage-aaps-1#9e09e2c07do52).
    
-   We recommend that you change a client key that has been used for more than one year. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key).
    
-   KMS sends alert events when a client key is about to expire. Take note of the alert events and handle the alert events at the earliest opportunity. For more information, see [Alert events](/help/en/kms/key-management-service/user-guide/alert-settings).
