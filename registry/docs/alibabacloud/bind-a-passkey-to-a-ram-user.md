You can register a passkey (from your computer or mobile device) or a physical security key for a RAM user. This provides a secure, phishing-resistant method for logging on or performing multi-factor authentication (MFA) by using your device's built-in biometrics (like fingerprint or face ID) or a PIN.

## **Before you begin**

Before you begin, read the following topics:

-   [Supported device types](/help/en/ram/user-guide/what-is-a-passkey#47bff3c1f25fc)
    
-   [Limitations](/help/en/ram/user-guide/what-is-a-passkey#36f65f05fev9c)
    

## **Register a computer's built-in passkey**

You can register your computer's built-in authenticator (such as Windows Hello or a MacBook's Touch ID) as a passkey for a RAM user.

This example demonstrates how to register a passkey on a Windows 10 computer by using its fingerprint reader.

1.  Log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm) as a RAM user.
    
2.  Hover over the profile picture in the upper-right corner and click **Security Information**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9046721571/p979795.png)
    
3.  In the **Passkey** section of the **Security** page, click **Create Passkey**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p901852.png)
    
4.  Enter a name for the passkey and click **Bind**.
    
    Use a descriptive name to distinguish this passkey from others (such as "PC\_fingerprint"). Passkey names must be unique for each RAM user. You can rename a passkey later.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p901887.png)
    
5.  Your browser will prompt you to complete the registration. Follow the on-screen instructions to authenticate with your computer's security feature.
    
    The authentication prompt is handled by your device's operating system and will vary. For example, Windows uses Windows Hello, while macOS and iOS use iCloud Keychain. When using a fingerprint reader, ensure you hold your finger on the sensor long enough for it to register.
    
6.  After successful registration, the new passkey appears in your list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p901929.png)
    

## **Register a mobile device's passkey**

You can register a mobile device (such as a phone) as a passkey by initiating the process on a computer and then scanning a QR code with your phone. This cross-device method is convenient if you use multiple computers, as your phone can act as a universal key for all of them.

This example demonstrates how to initiate the registration on a Windows 10 computer and complete it on an iPhone using Face ID.

1.  On your computer, log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm) as a RAM user.
    
2.  Hover over the profile picture in the upper-right corner and click **Security Information**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9046721571/p979795.png)
    
3.  In the **Passkey** section of the **Security** page, click **Create Passkey**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p901852.png)
    
4.  Enter a name for the passkey and click **Bind**.
    
    Use a descriptive name to distinguish this passkey from others (such as "Phone\_face"). Passkey names must be unique for each RAM user. You can rename a passkey later.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p903849.png)
    
5.  When your computer's system prompt appears, choose the option to use a different device, such as a phone or tablet. This may involve clicking **Cancel** and then selecting an option like **Use a different device** or **Phone or Tablet**.
    
6.  A QR code is displayed on your computer screen.
    
7.  On your mobile device, use the built-in camera or a QR scanner to scan the code. Follow the prompts on your phone to complete authentication (such as by using Face ID or fingerprint).
    
8.  After successful registration, the new passkey appears in your list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p903880.png)
    

## **Register a physical security key**

You can register a FIDO2-compliant physical security key for a RAM user. You can register the key by inserting it into a USB port on your computer, or by connecting it to a mobile device via Bluetooth or NFC.

This example demonstrates how to register a security key on a computer.

1.  Log on to the [Alibaba Cloud Management Console](https://signin.alibabacloud.com/login.htm) as a RAM user.
    
2.  Hover over the profile picture in the upper-right corner and click **Security Information**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9046721571/p979795.png)
    
3.  In the **Passkey** section of the **Security** page, click **Create Passkey**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p901852.png)
    
4.  Enter a name for the passkey and click **Bind**.
    
    Use a descriptive name to distinguish this passkey from others (such as "SecurityKey"). Passkey names must be unique for each RAM user. You can rename a passkey later.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708497371/p907238.png)
    
5.  When your computer's system prompt appears, choose the option for an external or USB security key. This may involve clicking **Cancel** first.
    
6.  Insert your security key into a USB port and touch the button on the key when prompted.
    

## **References**

[Log on with a passkey](/help/en/ram/user-guide/log-on-to-alibaba-cloud-by-using-a-passkey)
