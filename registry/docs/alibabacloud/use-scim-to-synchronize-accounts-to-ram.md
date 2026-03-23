This topic describes how to sync accounts from Alibaba Cloud IDaaS to RAM using the System for Cross-domain Identity Management (SCIM) protocol to automate identity management.

## **Prerequisites**

1.  Your Alibaba Cloud account or Resource Access Management (RAM) user must have the required permissions to create OAuth applications.
    
2.  Your Alibaba Cloud account or RAM user must have the required permissions to grant authorization to a server application. You can grant authorization only to a server application that belongs to your account.
    

## **Step 1: Create and authorize an OAuth application in the RAM console**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/users).
    
2.  In the navigation pane on the left, choose **OAuth Preview** > **Enterprise Applications** > **Create Application**.
    
3.  Enter the **Application Name** and **Display Name**. For Application Type, select **Server Application**.
    
4.  select /acs/scim in the **OAuth Scope** section. Click **Create Application**.
    
5.  Grant authorization to the OAuth application. On the **OAuth Scope** tab, click **Authorize**. On the application authorization page, select **Accesses Cross-Domain Identity Management**, and then click **Authorize**.
    
6.  On the **Application Secret** tab, click **Create Secret**. The system automatically generates a key pair that includes an **AppSecretId** and an **AppSecretValue**.
    
7.  After the key is generated, click **Download Secret** to save the key file to a secure location. After you save the file, click **Close**.
    
    **Important**
    
    The secret is displayed only when it is created. You cannot retrieve it after you close the window.
    

## Step 2: Configure SCIM synchronization in IDaaS

1.  In the IDaaS instance console, navigate to the **Application Management** > **Applications** page. Click **Add Application** to open the **Marketplace**. Select and add the **Alibaba Cloud User - based SSO (International Site）** application template.
    
2.  Switch to the **Provisioning** tab. Set the **Provisioning Scope** and click **Save**.
    
3.  Enable **Provision IDaaS Accounts to Application**.
    
4.  Configure the **Basic Configurations**.
    
    1.  Enter the **Client ID** and Client Secret.
        
        1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the navigation pane on the left, choose **Integrations** > **OAuth Preview**.
            
        2.  Find the application that you want to use for SCIM synchronization and click its name to open the details page.
            
        3.  In the **Basic Information** section of the application details page, copy the **Application ID** (the **Client ID**).
            
        4.  Obtain the **Client Secret** from the **AppSecretValue** that you saved in [the secret creation step in Step 1](#76754c6014ijn).
            
    2.  **Operation****:** You can subscribe to specific change events, such as user creation, updates, and deletions. When one of these changes occurs in IDaaS, the system automatically triggers a real-time synchronization push to the target application.
        
    3.  Full Push Scope: If you select this option, all data within the defined scope is pushed to the application when you perform a one-click push.
        
5.  **Field Mapping:** Customize the SCIM field mapping and attribute matching rules. After you make the adjustments, click **Save** to ensure accurate data synchronization.
    
6.  After you complete the configuration, click **Save**. Click **Test Connectivity** to verify that the configuration is correct.
    
    If needed, you can use the one-click push feature to push all accounts within the synchronization scope to RAM at once.
    

## Step 3: Perform synchronization in IDaaS

Click **Push Now**. The accounts within the synchronization scope are synced to RAM.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8113634471/p941170.png)

## **References**

-   If a RAM account cannot be deleted during synchronization, see [What do I do if deleting a RAM account fails during IDaaS synchronization?](/help/en/idaas/eiam/support/idaas-failed-to-delete-ram-account-synchronously)
