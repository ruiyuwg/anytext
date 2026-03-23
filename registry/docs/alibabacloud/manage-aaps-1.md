This topic describes how to manage application access points (AAPs), permission policies, network access rules, and client keys.

## Manage an **AAP**

### **View the AAP details**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  On the **Application Access** tab, search for your AAP by **Instance ID** or AAP name.
    
3.  Click the name of the AAP to view details.
    
    1.  **Policies**: For more information, see [Overview of AAPs](/help/en/kms/key-management-service/user-guide/aap-overview#5a26ece121qmc).
        
    2.  **Client Key**: You can view information about a client key, including **Key ID**, **Algorithm**, **Validity Period**, and **Creation Date**. You cannot view the content of the client key.
        

### **Change the permission policies that are associated with an AAP**

**Important**

The permission policy change takes up to 5 minutes to take effect. If the change does not take effect, wait 5 minutes and try again.

1.  On the **Application Access** tab, find the required AAP.
    
2.  Click the name of the AAP to go to the details page. On the **Policies** tab, click **Configure Permission Policy**.
    
3.  In the **Update AAP** panel, select a different value for the **Policies** parameter. You can select up to three permission policies.
    
    If existing permission policies do not meet your requirements, you can create a permission policy.
    

### **Delete an AAP**

**Warning**

The deletion of an AAP immediately takes effect. If a client key in your AAP is used as an access credential, make sure that the client key is no longer in use before you delete the AAP. Otherwise, your application cannot access KMS. You can view the logs within the previous 180 days on the Simple Log Service for KMS page. You can view logs to check whether your client key is in use. To do this, enter the ID of a client key in the search box below kms\_audit\_log to implement a full-text search. If the value of the `access_key_id` field in the search result is the ID of a client key, the client key is in use. For more information, see [Use Simple Log Service for KMS](/help/en/kms/key-management-service/user-guide/use-simple-log-service#79a83ab071aon).

1.  On the **Application Access** tab, find the AAP that you want to delete and click **Delete** in the **Actions** column.
    
2.  Complete security verification. Then, KMS deletes the AAP.
    

## Manage a permission policy

### **Create a permission policy**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  On the **Policies** tab, click **Create Policy**. In the **Create Permission Policy** panel, configure the parameters and click **OK**.
    
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
    
    After the permission policy is created, you must associate the permission policy with your AAP.
    

### **Modify a permission policy**

**Warning**

-   If you modify a permission policy, all AAPs that are associated with the permission policy are affected. Proceed with caution.
    
-   The permission policy change takes up to 5 minutes to take effect. If the change does not take effect, wait 5 minutes and try again.
    

#### **Scenario 1: Modify a permission policy based on the name of the permission policy**

1.  On the **Policies** tab, find the permission policy that you want to modify and click **Edit** in the **Actions** column.
    
2.  In the **Modify Permission Policy** panel, change the value of the **RBAC Permissions**, **Accessible Resources**, or **Network Access Rules** parameter. Then, click **OK**.
    

#### **Scenario 2: Modify a permission policy based on the name of the AAP with which the permission policy is associated**

1.  On the **Application Access** tab, find the required AAP.
    
2.  Click the name of the AAP to go to the details page. On the **Policies** tab, find the permission policy that you want to modify.
    
3.  Click **Edit** in the **Actions** column. In the **Modify Permission Policy** panel, change the value of the **RBAC Permissions**, **Accessible Resources**, or **Network Access Rules** parameter, and then click **OK**.
    

### **Delete a permission policy**

**Warning**

Before you delete a permission policy, make sure that the permission policy is not associated with AAPs. Otherwise, related applications cannot access KMS.

1.  On the **Policies** tab, find the permission policy that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Confirm** message, click **OK**.
    

## Manage a **network access rule**

### **Create a network access rule**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  Click the **Network Access Rules** tab. Then, click **Create Network Access Rule**.
    
3.  In the **Create Network Access Rule** panel, configure the parameters and click **OK**.
    
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
    
    After the network access rule is created, you must associate the rule with your permission policy.
    

### **Modify a network access rule**

**Warning**

If you modify a network access rule, all AAPs that are associated with the network access rule are affected. Proceed with caution.

1.  On the **Network Access Rules** tab, find the network access rule that you want to modify and click **Edit** in the **Actions** column.
    
2.  In the **Modify Network Access Rule** panel, change the value of the **Allowed Source IP Addresses** parameter and click **OK**.
    

### **Delete a network access rule**

**Warning**

Before you delete a network access rule, make sure that the network access rule is not associated with AAPs. Otherwise, related applications cannot access KMS.

1.  On the **Network Access Rules** tab, find the network access rule that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Confirm** message, click **OK**.
    

## **Manage a client key**

### **Create a client key**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  Click the **Application Access** tab. Then, search for the required application access point (AAP) by **Instance ID** or AAP name.
    
3.  Click the name of the AAP. On the details page, click the **Client Key** tab and then click **Create Client Key**.
    
4.  In the **Create Client Key** panel, configure the **Encryption Password** and **Validity Period** parameters.
    
    -   **Encryption Password**: The password must be 8 to 64 characters in length and can contain digits, letters, and the following special characters: `~ ! @ # $ % ^ & * ? _ -`.
        
    -   **Validity Period**: The default value is five years. We recommend that you set the validity period to one year to reduce the risks of client key leaks.
        
5.  Click **OK**. The browser automatically downloads the client key that is created.
    
    The client key contains **Application Access Secret(ClientKeyContent)** and **Password**. By default, **Application Access Secret(ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

### **Delete a client key**

**Warning**

The deletion of a client key immediately takes effect. Before you delete a client key, make sure that the client key is no longer in use. Otherwise, related applications cannot access KMS.

1.  On the **Application Access** tab, find the required AAP.
    
2.  Click the name of the AAP to go to the details page. On the **Client Key** tab, find the client key that you want to delete and click **Delete** in the **Actions** column.
    
3.  In the **Confirm** message, click **OK**.
    
4.  Complete security verification. Then, KMS deletes the client key.
