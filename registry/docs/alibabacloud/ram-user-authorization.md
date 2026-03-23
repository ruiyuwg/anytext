A Resource Access Management (RAM) user requires permissions to perform EMR Serverless Spark operations, such as creating, viewing, or deleting workspaces. This topic describes how to grant these permissions.

## **Prerequisites**

A RAM user has been created. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).

## **Procedure**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permission** panel, add the required permissions to the RAM user.
    
    **Parameter**
    
    **Description**
    
    **Resource Scope**
    
    Select the scope of the permissions:
    
    -   **Account**: The permissions take effect within the current Alibaba Cloud account.
        
    -   **ResourceGroup**: The permissions take effect within the specified resource group.
        
    
    **Principal**
    
    The principal to which you want to grant permissions. The system automatically selects the current RAM user. You can also add other RAM users.
    
    **Policy**
    
    The following **System Policy** are supported:
    
    -   **AliyunEMRServerlessSparkFullAccess**: Grants administrator permissions for EMR Serverless Spark. This includes permissions to create and delete workspaces. For more information about the policy, see [AliyunEMRServerlessSparkFullAccess](/help/en/ram/developer-reference/aliyunemrserverlesssparkfullaccess).
        
    -   **AliyunEMRServerlessSparkDeveloperAccess**: Grants developer permissions for EMR Serverless Spark. This does not include permissions to create or delete workspaces. For more information about the policy, see [AliyunEMRServerlessSparkDeveloperAccess](/help/en/ram/developer-reference/aliyunemrserverlesssparkdeveloperaccess).
        
    -   **AliyunEmrServerlessSparkReadOnlyAccess**: Grants read-only permissions for EMR Serverless Spark. This includes permissions to access the Spark service in read-only mode. For more information about the policy, see [AliyunEmrServerlessSparkReadOnlyAccess](/help/en/ram/developer-reference/aliyunemrserverlesssparkreadonlyaccess).
        
    
5.  Click **Grant permissions**.
    
6.  Click **Close**.
