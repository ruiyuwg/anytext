This topic describes how to bind or unbind multi-factor authentication (MFA) devices as CloudSSO users.

## Prerequisites

MFA is enabled. For more information, see [Enable MFA for all CloudSSO users](/help/en/cloudsso/user-guide/manage-mfa#section-tnh-w10-pz4) and [Enable MFA for a single CloudSSO user](/help/en/cloudsso/user-guide/manage-mfa#section-6ho-3ud-ogp).

## Bind the first MFA device

If MFA is enabled and a CloudSSO user logs on to the CloudSSO user portal by using the username-password logon method, the system prompts the user to bind an MFA device.

1.  Download an app that supports MFA devices to a mobile device, such as a mobile phone. For example, you can download Alibaba Cloud or Google Authenticator.
    
    In this example, the Alibaba Cloud app is downloaded to an Android mobile phone.
    
2.  Log on to the CloudSSO user portal by using the username and password of the CloudSSO user.
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
    
3.  On the mobile device, bind an MFA device.
    
    1.  Log on to the Alibaba Cloud app.
        
    2.  In the upper-right corner, tap the **+** icon and then the ![mfa](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8933322861/p613663.jpg)icon.
        
    3.  Tap the **+** icon and select a method to bind an MFA device.
        
        -   Scan a QR code to bind an MFA device: Tap **Scan QR Code** to scan the QR code displayed on the user portal. Then, tap **OK**. This method is recommended.
            
            **Note**
            
            You must click **Show QR Code** on the user portal to display the QR code.
            
        -   Manually bind an MFA device: Tap **Manually Bind**, enter the username and password displayed on the user portal, and then tap **OK**.
            
            **Note**
            
            You must click **Show Password** on the user portal to display the password.
            
        
4.  On the user portal, enter the name of the MFA device.
    
    You can create a custom name or click **Use Default Name** to use the default name of the MFA device.
    
5.  On the user portal, enter the verification code that is displayed in the Alibaba Cloud app on the mobile device and click **Bind**.
    

## Bind the second MFA device

If MFA is enabled, you can bind up to two MFA devices for each CloudSSO user.

1.  Log on to the CloudSSO user portal by using the username and password of the CloudSSO user.
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
    
2.  Move the pointer over your profile picture in the upper-right corner of the page and click **Manage Virtual MFA Device**.
    
3.  Click **Add Device**.
    
4.  Bind the second MFA device.
    
    For more information, see [Bind the first MFA device](#section-8hh-7vf-7go).
    

## Unbind an MFA device

**Warning**

If you unbind MFA devices from CloudSSO users, the MFA devices cannot be used to verify the identities of the CloudSSO users. This reduces account security.

1.  Log on to the CloudSSO user portal by using the username and password of the CloudSSO user.
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
    
2.  Move the pointer over your profile picture in the upper-right corner of the page and click **Manage Virtual MFA Device**.
    
3.  Find the MFA device that you want to unbind and click **Delete** in the **Actions** column.
    
4.  In the **Delete Virtual MFA Device** message, click **OK**.
    

## **References**

[Manage MFA](/help/en/cloudsso/user-guide/manage-mfa)
