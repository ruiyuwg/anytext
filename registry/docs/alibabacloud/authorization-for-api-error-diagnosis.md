When you use the error diagnosis tool, you might not have the required permissions to query API diagnosis information for other accounts. This can prevent you from analyzing API errors and finding solutions. This topic describes how to grant permissions to query API diagnosis information for other accounts.

## **Within the same Alibaba Cloud account**

You can grant the required permissions to a Resource Access Management (RAM) user who needs to view API diagnosis information. This allows the RAM user to view the API diagnosis information of other RAM users or RAM roles.

### **Step 1: Create a custom policy**

1.  Log on to the by using an Alibaba Cloud account or a RAM administrator account.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p797317.png)
    
4.  On the **Create Policy** page, click the **JSON** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p908581.png)
    
5.  In the editor, replace the existing content with the following policy document, and click **OK**.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "openapiexplorer:GetRequestLog",
                    "ram:DecodeDiagnosticMessage"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
    **Note**
    
    This policy allows a user to view all API call logs and details about permission-denied errors for the Alibaba Cloud account.
    
6.  Enter a name and description for the policy and click **OK**.
    

### **Step 2: Grant permissions to a RAM user**

You can grant permissions to the RAM user in one of the following ways:

-   To grant permissions to a RAM user, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
-   To grant permissions to a RAM user group, see [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group).
    

### **Step 3: View the API diagnosis result**

Navigate to the page, enter the RequestId, and click **Diagnose**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p912762.png)

## **Between different Alibaba Cloud accounts**

To view API diagnosis information for another Alibaba Cloud account, you can obtain the required permissions by assuming a role.

The process is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1771088671/CAEQTxiBgMCBttGX1RkiIGJhOTA3ZjIzNGVhNzQ2ZDE4OWYyMjE0ZDcxMzJhYzlm4906826_20250122145903.197.svg)

Account A: The account that encounters an error when it calls an API.

Account B: The account that needs to view the API diagnosis information.

1.  In Account A, create a RAM role that trusts Account B, granting Account B permission to assume this role.
    
2.  In Account B, create a RAM user and attach a policy that allows the user to assume the role in Account A.
    
3.  The RAM user from Account B assumes the role in Account A to query the API diagnosis information using the error diagnosis tool.
    

### **Step 1: Create a RAM role and grant permissions in Account A**

1.  Create a RAM role.
    
    Log on to the [RAM console](https://ram.console.alibabacloud.com/) with Account A. Create a RAM role and set the **Principal Type** to **Cloud Account**. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
    
    **Note**
    
    Select **Other Account** for **Principal Name** and enter the UID of Account B.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p961383.png)
    
2.  Create a custom policy.
    
    For more information, see [Step 1: Create a custom policy](#55534c07cfxq8).
    
3.  Grant permissions to the RAM role.
    
    Attach the custom policy that you created to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

### **Step 2: Create a RAM user and grant permissions in Account B**

1.  Create a RAM user.
    
    Log on to the [RAM console](https://ram.console.alibabacloud.com/) with Account B and create a RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
    **Note**
    
    For security, configure only one access mode for the RAM user as needed. Keep console access and programmatic access separate.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p912771.png)
    
2.  Grant permissions to the RAM user.
    
    To allow the RAM user to assume the role, attach the `AliyunSTSAssumeRoleAccess` policy to the RAM user. This policy grants permission to assume any role. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    **Note**
    
    If you want the RAM user to assume only specific RAM roles, see [FAQ about RAM roles and STS tokens](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-c5c-e3t-at9).
    

### **Step 3: Assume the RAM role and view API diagnosis information**

1.  Use the RAM user that you created in Account B to log on to the [RAM user logon page](https://signin.aliyun.com/login.htm).
    
2.  Hover over the profile picture in the upper-right corner and click **Switch Identity**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p912572.png)
    
3.  On the **Switch Role** page, enter the UID of the desired account and the RAM role name, then click **Submit** to log on. For example, enter the UID of Account A and the RAM role name.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p912576.png)
    
4.  View the API diagnosis information.
    
    Navigate to the page, enter the RequestId, and click **Diagnose**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6360351671/p912777.png)
