After the administrator of an enterprise completes service configuration in the Secure Access Service Edge (SASE) console, the users of the enterprise can download the SASE client to their terminals and connect to the office network of the enterprise from the SASE client. This topic describes how to install and log on to the SASE client.

## Download the installation package of the SASE client and install the SASE client

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  On the **Download Client** tab, download the required installation package by following the on-screen instructions.
    
    You can download an installation package in the **Download Desktop Client**, **Download Mobile Client**, or **Download URL** section.
    
4.  Double-click the setup.exe installer to install the SASE client.![安装程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6664020371/p241225.png)
    
    After the SASE client is installed, the icon of the SASE client appears on the desktop of your terminal.
    

## Log on to the SASE client

1.  Open the SASE client.
    
2.  Enter your enterprise authentication identifier and click **OK**.
    
    You can obtain the enterprise authentication identifier on the [Account Settings](https://yundun.console.aliyun.com/?spm=5176.12818093.ProductAndResource--ali--widget-product-recent.dre0.1eef16d0FT18FK&p=csas#/newset) tab of the Settings page in the SASE console or from the administrator of your enterprise.
    
3.  Select your identity provider (IdP) type and follow the on-screen instructions to log on to the SASE client.
    
    The IdP type is configured by the administrator of your enterprise. If you do not know which type is configured, you can contact the department manager or the administrator.
    

## **Install certificates**

If the administrator has configured the network access and certificate authority (CA) certificates, you must install the certificates by following the on-screen instructions after you log on to the SASE client. If you use a Windows operating system, the certificates are automatically installed. If you use a different operating system, you must manually install the certificates.

## **References**

If you want to use SASE to access the office applications of your enterprise, you must enable network protection on the SASE client. For more information, see [Enable network protection](/help/en/sase/user-guide/enable-or-disable-network-security-protection).
