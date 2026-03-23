Before you use DLC for the first time, you must grant the DLC service-linked role access to your cloud resources. If you use OSS as a storage system, you must also grant the DLC service-linked role permissions to access OSS. This topic describes the permissions required to use DLC.

## Background information

Before you use DLC, you must grant the account that you use to perform operations the required permissions for DLC features and OSS. PAI also lets you use workspaces to implement fine-grained access control over DLC training tasks for Resource Access Management (RAM) users. When you use DLC, PAI performs storage operations on dependent products, such as OSS and NAS, in the background. Therefore, you must grant PAI access to OSS and NAS. For more information about the authorization operations, see the following sections.

-   [Operating account authorization](#31bdebb00cv3u)
    
    Outlines the products that DLC depends on and the required permissions.
    
-   [PAI service account authorization](#9ec4d7000cpe5)
    
    Grant the Alibaba Cloud account general operation permissions for DLC and access permissions for OSS or NAS.
    

## **Operating account authorization**

DLC provides a platform for creating and submitting model training jobs. You may need to activate and authorize the following cloud services when you use DLC to create and submit training jobs.

-   **PAI module: DLC**
    
    **Operation account**
    
    **Service**
    
    **Reference**
    
    Alibaba Cloud account
    
    You can use an Alibaba Cloud account to perform operations on DLC. No additional authorization is required.
    
    N/A
    
    RAM user
    
    (Recommended)
    
    PAI provides different member roles. You can assume different member roles to the RAM users for convenient permission management. For more information about the permissions of each role, see [Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions).
    
    [Manage members of a workspace](/help/en/pai/manage-the-members-of-a-workspace)
    
-   **Other dependent cloud products: NAS**
    
    NAS is used for data storage. You must activate NAS and grant the required permissions.
    
    **Scenario**
    
    **Description**
    
    **Reference**
    
    Activate NAS
    
    We recommend that you use an Alibaba Cloud account to activate NAS. No additional authorization is required. If you want to activate NAS by using a RAM user, you must grant the `**AliyunNASFullAccess**` permissions to the RAM user.
    
    -   Authorization: [Perform access control based on RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies)
        
    -   Common operations: [Create a file system](/help/en/nas/user-guide/create-a-file-system)
        
    
    Use NAS
    
    Use NAS after activation:
    
    -   Authorization: NAS provides detailed RAM control policies. You can grant permissions to RAM users as needed.
        
    -   Common operations: You need to create a NAS file system and mount it to an instance of PAI.
        
    
-   **Dependent cloud service: OSS**
    
    You need to activate and authorize OSS for data storage.
    
    **Scenario**
    
    **Description**
    
    **Reference**
    
    Activate OSS
    
    We recommend that you use an Alibaba Cloud account to activate Container Registry. No additional authorization is required. If you want to use a RAM user to activate OSS, you need to grant the `**AliyunOSSFullAccess**` permissions to the RAM user.
    
    -   Activation: [Activate OSS](/help/en/oss/getting-started/activate-oss)
        
    -   Authorization: [Overview of RAM policy](/help/en/oss/ram-policy-overview/)
        
    -   Common operations: [Create buckets](/help/en/oss/getting-started/create-buckets-6)
        
    
    Use OSS
    
    Use OSS after activation:
    
    -   Authorization: OSS provides detailed RAM control policies. You can grant permissions to RAM users based on your business requirements.
        
    -   Common operations: You need to create a bucket to upload objects to OSS.
        
    

## **PAI service account authorization**

### **Grant general DLC permissions to an Alibaba Cloud account (root account)**

To ensure that DLC functions as expected, make sure that your Alibaba Cloud account has general permissions for DLC. These permissions are typically granted when you [activate PAI and create a default workspace](/help/en/pai/user-guide/activate-pai-and-create-the-default-workspace#task-2121596). You can follow the instructions in [Check whether the AliyunPAIDLCDefaultRole role is attached to the account](#section-y4i-l9a-4g3) to verify whether your account has the required permissions. If not, follow the steps in this section to grant the permissions.

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/?r#/sw?path=/dlc/jobs). In the top navigation bar, select the destination region. On the right side of the page, select the target workspace, and then click **Enter DLC**.
    
2.  Grant the `AliyunPAIDLCDefaultRole` role.
    
    1.  Click **Go to Authorization**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3460589271/p862331.png)
        
    2.  On the **Cloud Resource Access Authorization** page, click **Agree to Authorization**. Wait for a message indicating that the authorization is successful.
        
3.  Add the **AliyunOSSFullAccess** permission to the AliyunPAIDLCDefaultRole role.
    
    After you complete the authorization, the account that you use to perform operations has the default role permissions for DLC. You must also add operational permissions for OSS to ensure that DLC features function as expected. The procedure is as follows.
    
    1.  In the [RAM console](https://ram.console.alibabacloud.com/), navigate to the **Identity Management** > **Roles** page and find the AliyunPAIDLCDefaultRole role.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5379954371/p862336.png)
        
    2.  In the **Actions** column for the AliyunPAIDLCDefaultRole role, click **Add Permissions**.
        
    3.  In the **Add Permissions** panel, configure the parameters.
        
        **Parameter**
        
        **Description**
        
        **Resource Scope**
        
        Select **Account Level**. The system supports two authorization scopes:
        
        -   **Account Level**: The permissions take effect within the current Alibaba Cloud account.
            
        -   **Resource Group Level**: The permissions take effect within the specified resource group.
            
        
        **Principal**
        
        The RAM role to which you want to grant permissions. The system automatically specifies the current RAM role. You do not need to change it.
        
        **Access Policy**
        
        In the text box, enter OSS to search for policies. In the search results, select the required policy. The selected policy appears in the **Selected** list on the right.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5469729171/p806817.png)
        
        **Note**
        
        The example in the preceding figure uses **AliyunOSSFullAccess**. However, you should follow the principle of least privilege when you select a policy.
        
    4.  Click **Confirm New Authorization**.
        
4.  Add the **PaiDlcOAuthPolicy** permission to the `AliyunPAIDLCDefaultRole` role to ensure that DLC features function as expected. The procedure is as follows.
    
    1.  In the [RAM console](https://ram.console.alibabacloud.com/), navigate to the **Permission Management** > **Policies** page. Click **Create Policy** to create the custom policy PaiDlcOAuthPolicy. The key parameters are described in the following table. For more information, see [Create a custom policy on the Script tab](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
        
        **Parameter**
        
        **Description**
        
        **Script Editor**
        
        On the **Script Editor** tab, enter the following policy document.
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Action": [
                "ram:GetDefaultDomain",
                "ram:ListApplications",
                "ram:CreateApplication",
                "ram:ListAppSecretIds",
                "ram:GetAppSecret",
                "ram:CreateAppSecret",
                "ram:DeleteApplication",
                "ram:DeleteAppSecret"
              ],
              "Resource": [
                "*"
              ],
              "Effect": "Allow"
            }
          ]
        }
        ```
        
        **Name**
        
        Set this parameter to **PaiDlcOAuthPolicy**.
        
    2.  On the **Identity Management** > **Roles** page, click **Add Permissions** in the **Actions** column for the AliyunPAIDLCDefaultRole role.
        
    3.  In the **Add Permissions** panel, follow the instructions in the following figure to add the **PaiDlcOAuthPolicy** policy.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5469729171/p806822.png)
        
5.  Check the authorization result.
    
    After you complete the preceding steps, click AliyunPAIDLCDefaultRole to verify that the policies are correctly attached to the role.![DLC权限确认](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3588255861/p669125.png)
    

### **Grant PAI access to cloud products: OSS and NAS**

PAI provides a one-click authorization method to grant PAI access to cloud products such as OSS and NAS. The procedure is as follows:

1.  Log on to the [PAI console](https://pai.data.aliyun.com/console).
    
2.  In the navigation pane on the left, choose **Activation and Authorization** > **All Cloud Product Dependencies**. In the DLC section, find **OSS** and **NAS**.
    
3.  In the **Actions** column, check the authorization status of OSS.
    
    -   If the service is not authorized, click **One-click Authorization** in the **Actions** column and follow the on-screen instructions to complete the authorization.
        
    -   If the service is already authorized, you can click **View Authorization Information** in the **Actions** column to view the details.
        
    

## Reference: Check whether the AliyunPAIDLCDefaultRole role is attached to the account

To ensure that DLC functions as expected, make sure that your Alibaba Cloud account has the AliyunPAIDLCDefaultRole service-linked role. The procedure is as follows.

**Note**

Only a root account can grant permissions. RAM users cannot grant permissions.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left navigation pane, click **Identity Management** > **Role**.
    
3.  On the **Roles** page, enter AliyunPAIDLCDefaultRole in the search box and search for the role.
    
    -   If the role is found, the DLC service role has been granted.
        
    -   If the role is not found, you must grant the permissions. For more information, see [Grant general DLC permissions to an Alibaba Cloud account (root account)](#32fc6ce10cg0c).
        
    

## **References**

After you grant the required permissions, you can create a DLC job for model training. For more information, see [Create a training task](/help/en/pai/user-guide/create-a-training-task/).
