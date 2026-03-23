You can bind a Universal 2nd Factor (U2F) security key to your Alibaba Cloud account to enable secondary authentication for logon and enhance account security. This topic describes how to bind and unbind a U2F security key.

## **What is U2F?**

**U2F (Universal 2nd Factor)** is a two-factor identity authentication standard developed by the FIDO (Fast IDentity Online) Alliance. It provides a convenient, drive-free, general-purpose password authentication token that adds an extra layer of security beyond a username and password.

After you enable U2F, you must complete the following two verification steps to log on to Alibaba Cloud:

1.  **First-factor authentication**: Enter your username and password.
    
2.  **Second-factor authentication**: Insert your U2F device and verify the security key.
    

Using a U2F security key helps prevent brute-force attacks and protects your account from security vulnerabilities, significantly improving your account security.

## **Notes**

-   You can use a U2F security key for logon verification only on a PC.
    
-   The U2F security key feature is in public preview. If you successfully bind a U2F security key but are not prompted for U2F authentication at logon, your account is not included in the public preview.
    
-   During U2F authentication, if you click Cancel, you must refresh the page and then remove and reinsert the U2F device due to a hardware limitation.
    
-   U2F security keys are supported by mainstream browsers such as Chrome 51.0 or later and Firefox 60.0 or later. Internet Explorer is not supported.
    

## Bind a U2F security key

Make sure you have a U2F security key device. You can purchase one from a reputable online marketplace or a specialized retailer.

1.  Log on to the Alibaba Cloud **[Account Center](https://myaccount.console.alibabacloud.com/)**. Go to the **Security Settings** page. In the **Other Settings** section, find the **Universal 2nd Factor** row and click **Bind**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p1040983.png)
    
2.  Identity verification is required before you bind the key. Click **Send verification code to email**, enter the verification code, and then click **Submit for verification**.
    
3.  After your identity is verified, follow the on-screen instructions to complete the binding.
    
4.  The system indicates that the U2F key is bound successfully. You can close the current page. Return to the Account Center and select **Bound successfully** in the dialog box that appears.
    
    ![绑定成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p416966.png)
    
5.  The next time you log on to the Alibaba Cloud Management Console, you must insert the U2F security key for secondary authentication.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p1041074.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p1041077.png)
    

## Unbind a U2F security key

1.  Log on to the Alibaba Cloud **[Account Center](https://myaccount.console.alibabacloud.com/)**. Go to the **Security Settings** page. In the **Other Settings** section, find the **Universal 2nd Factor** row and click **Unbind**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p1041052.png)
    
2.  In the dialog box that appears, click **OK**. After the U2F security key is successfully unbound, you are no longer prompted for U2F secondary authentication when you log on to the Alibaba Cloud Management Console.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2743710771/p1041068.png)
