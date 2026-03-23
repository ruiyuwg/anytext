You can create a Resource Access Management (RAM) user as an account administrator to perform operations in the cloud instead of using an Alibaba Cloud account to perform operations in the cloud. The account administrator has the AdministratorAccess permission and can manage all resources within the Alibaba Cloud account.

## **Why do I need to create an account administrator?**

An Alibaba Cloud account has full management permissions on the resources within the account, and the permissions cannot be adjusted. If an Alibaba Cloud account is shared by multiple users, you cannot identify a specific user in audit logs. If an Alibaba Cloud account is disclosed, significant security risks may occur, and tracing is difficult. We recommend that you do not use an Alibaba Cloud account to perform daily O&M operations. You can create a RAM user in RAM and attach the AdministratorAccess policy to the RAM user. Then, you can use the RAM user as an account administrator to manage all cloud resources within the Alibaba Cloud account. This way, related security risks can be prevented. You can assign different account administrators to different users or freeze an account administrator immediately after a leak occurs.

## **How do I create an account administrator?**

### **Quick creation**

#### **Step 1: Create an account administrator and grant permissions to the account administrator**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com) with an Alibaba Cloud account. On the **Overview** page, choose **Get Started** > **Account Administrator**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829085.png)
    
2.  View the configurations of **Account Administrator** and click **Perform**.
    
    By default, console access is enabled for the account administrator, and the system policy AdministratorAccess is attached to the account administrator. The account administrator has the permissions to manage all resources within the Alibaba Cloud account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829090.png)
    
3.  After the configuration is complete, save the username and password of the account administrator.
    

**Note**

After the account administrator is created, you can modify the configurations of the account administrator in the RAM console.

#### **Step 2: Log on to the Alibaba Cloud Management Console as the account administrator**

1.  Log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm) with the account administrator.
    
    **Note**
    
    The logon portal for a RAM user is different from the logon portal for an Alibaba Cloud account. For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
2.  On the **RAM User Logon** page, enter the username of the account administrator and click **Next**.
    
3.  Enter the password of the account administrator and click **Log On**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4666244371/p829097.png)
    
    **Note**
    
    To ensure the account security of a RAM user, we recommend that you bind a multi-factor authentication (MFA) device to the RAM user for secondary authentication during console logon or sensitive operations in the console. MFA is a security enhancement that adds an extra layer of protection in addition to the username and password. For more information, see [Bind an MFA device to a RAM user](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user).
    

### **Manual creation**

#### **Step 1: Create a RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com) with an Alibaba Cloud account. In the left-side navigation pane, choose **Identities** > **Users**. Then, click **Create User**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829101.png)
    
2.  Create a RAM user named administrator. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829217.png)
    
3.  Complete security verification as prompted.
    

#### **Step 2: Grant permissions to the RAM user**

1.  On the **Users** page, find the RAM user that you want to manage and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829114.png)
    
2.  In the **Grant Permission** panel, attach the system policy AdministratorAccess to the RAM user. The system policy allows the RAM user to manage all resources within your Alibaba Cloud account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829123.png)
    

#### **Step 3: Log on to the Alibaba Cloud Management Console as the RAM user**

1.  Log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm) with the account administrator.
    
    **Note**
    
    The logon portal for a RAM user is different from the logon portal for an Alibaba Cloud account. For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
2.  On the **RAM User Logon** page, enter the username of the account administrator and click **Next**.
    
3.  Enter the password of the account administrator and click **Log On**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4666244371/p829097.png)
    
    **Note**
    
    To ensure the account security of a RAM user, we recommend that you bind a multi-factor authentication (MFA) device to the RAM user for secondary authentication during console logon or sensitive operations in the console. MFA is a security enhancement that adds an extra layer of protection in addition to the username and password. For more information, see [Bind an MFA device to a RAM user](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user).
