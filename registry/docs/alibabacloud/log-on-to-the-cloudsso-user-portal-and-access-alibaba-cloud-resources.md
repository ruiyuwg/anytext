After you log on to the CloudSSO user portal, you can view the accounts that you can access in your resource directory and access the resources of the accounts as a Resource Access Management (RAM) role or RAM user.

## Step 1: Obtain the URL of the CloudSSO user portal

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com) as a CloudSSO administrator.
    
2.  In the left-side navigation pane, click **Overview**.
    
3.  In the **User Logon URL** section on the right side of the **Overview** page, view or copy the logon URL.
    
    ![用户登录URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358460.jpg)
    
    **Note**
    
    If you enable the accelerated URL feature, CloudSSO users can use the accelerated URL when they log on to the CloudSSO user portal. For more information, see [Accelerate access from outside the Chinese mainland](/help/en/cloudsso/user-guide/cloud-sso-overseas-visit-accelerated).
    

## Step 2: Log on to the CloudSSO user portal

1.  Enter the **URL** that is obtained from [Step 1](#section-za3-pg2-tc4) in your browser.
    
2.  Log on to the CloudSSO user portal based on a specified logon method.
    
    For more information, see [Configure a logon method](/help/en/cloudsso/user-guide/configure-logon-settings).
    
    -   Single sign-on (SSO)
        
        1.  Click **Redirect** to go to the logon page of the enterprise identity provider (IdP).![云SSO登录跳转](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2428037361/p290656.png)
            
        2.  Use the username and password of the enterprise IdP to log on to the CloudSSO user portal.
            
    -   Username-password logon
        
        1.  Enter the username and password of the CloudSSO user and click **Log On**.
            
            ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4144228961/p722559.png)
            
        2.  Optional. If multi-factor authentication (MFA) is enabled, complete MFA verification.
            
            -   If this is your first time to log on to the CloudSSO user portal, you must bind an MFA device. For more information, see [Bind the first MFA device](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices#section-8hh-7vf-7go).
                
            -   If an MFA device is bound, enter the verification code that is obtained from the mobile device and click **Verify**.
                

## Step 3: Access the resources of an account in your resource directory

### RAM role-based logon

If the resources of a cloud service can be accessed as a RAM role and a CloudSSO user is assigned the access permissions on an account in your resource directory by using an access configuration, the CloudSSO user can access the resources of the account as a RAM role. This method is suitable for most cloud services. For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).

1.  On the **Log on as RAM Role** tab, click the required account in your resource directory and click **Show Details** in the **Permissions** column.
    
    You can select one of the accounts from the account list and access resources of the account based on your business requirements.
    
    ![RD账号列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8105248661/p358853.jpg)
    
    **Note**
    
    If no data is available in the list, you have no access permissions on the accounts in your resource directory.
    
2.  In the access configuration list that appears, find the access configuration that you want to use to access resources and click **Log On** in the **Actions** column.
    
    You can select one of the access configurations from the list and access the resources of the account based on your business requirements.
    
    ![权限列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6498703461/p358862.jpg)
    
    **Note**
    
    If no data is available in the list, you do not have permissions to access the resources of the account.
    
3.  Access the resources of the account as a RAM role.
    
    You can move the pointer over the profile picture in the upper-right corner of the console to view the current logon identity.![查看当前身份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6498703461/p358871.jpg)
    

### RAM user-based logon

If a cloud service cannot be accessed as a RAM role and you create a RAM user provisioning for an account in your resource directory by using CloudSSO, you can access the resources of the account as a RAM user. For more information, see [Create a RAM user provisioning](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning).

1.  On the **Log on as RAM User** tab, find the required account in your resource directory and click **Log On** in the **Actions** column.
    
    You can select one of the accounts from the account list and access resources of the account based on your business requirements.
    
    ![RAM用户登录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9707941571/p504644.jpg)
    
    **Note**
    
    If no data is available in the list, you have no access permissions on the accounts in your resource directory.
    
2.  Access the resources of the account as a RAM user.
    
    You can move the pointer over the profile picture in the upper-right corner of the console to view the current logon identity.![RAM用户身份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9707941571/p504645.jpg)
    

**Note**

-   The logon session for a CloudSSO user is valid for 6 hours. To modify it, see [Validity periods of logon sessions](/help/en/cloudsso/user-guide/login-session-duration).
    
-   Similarly, the initial landing page after logging on is the Alibaba Cloud Management Console homepage by default. To modify it, see [Set the initial landing page](/help/en/cloudsso/user-guide/default-logon-page).
    

## References

-   [Bind or unbind MFA devices](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices)
    
-   [Change the password](/help/en/cloudsso/user-guide/change-a-password)
    
-   [Validity periods of logon sessions](/help/en/cloudsso/user-guide/login-session-duration)
    
-   [Set the initial landing page](/help/en/cloudsso/user-guide/default-logon-page)
    
-   [Use Alibaba Cloud CLI to access CloudSSO and Alibaba Cloud resources](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources#task-2092351)
