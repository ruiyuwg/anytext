This topic describes the codes, causes, and types of network diagnostics-related errors on the Secure Access Service Edge (SASE) client. This topic also provides solutions to the errors.

## **Description**

**Error code**

**Description**

**Error type**

**Solution**

\-1

An unknown error occurs.

Unknown error

An unknown error occurred. Check whether the SASE client is properly installed or contact the administrator.

20000

Failed to obtain the authentication service URL.

Internal error

Reinstall the SASE client.

20001

Failed to obtain the logon URL.

20002

Failed to obtain the updater URL.

20003

Authentication failed.

Network or DNS exception

Check your network connection or switch to a different network. If the issue persists, check the DNS configurations of your device.

-   If you reside in China, use 114.114.114.114 in your DNS configuration.
    
-   If you reside outside China, use 8.8.8.8 in your DNS configuration.
    

20004

Logon failed.

20005

Upgrade failed.

20006

The upgrade configuration file does not exist.

20007

Failed to connect to the time server.

20008

The connection to the service access point timed out.

20009

No connections are established at the service access point.

Log on to the SASE console and enable internal network access.

20010

Client startup items are abnormal.

Client error

Reinstall the SASE client. Alternatively, check the optimization and network acceleration features of other security software that is installed on your device and clear the startup optimization option for the SASE client.

20011

SASE is not running.

20012

macOS extensions are not installed.

Grant permissions again and install the SASE system extension for macOS.

20013

Proxies conflict.

Software conflict

The proxy software that you installed may conflict with the SASE client. Stop the proxy software and restart the SASE client.

20014

OS proxies conflict.

The default system proxy may conflict with the SASE client. Disable the system proxy and start the SASE client again. To disable the system proxy, you can configure your browser settings or system settings.

20015

The system time is abnormal.

System error

Turn on **Set the time automatically** in Windows. This way, the system uses NTP for time calibration.

20016

The logon page does not exist.

Server error

Contact the administrator to check whether the identity source is enabled in the SASE console.

20017

The certificate for Internet access is not installed.

Certificate error

Log on to the SASE client again. Then, the SASE service automatically issues and installs the certificate again.

20018

The root certificate for 802.1X is not installed.

20019

The user certificate for 802.1X is not installed.

20020

The root certificate for 802.1X has expired or is about to expire.

20021

The user certificate for 802.1X has expired or is about to expire.

20022

The root certificate for 802.1X is not trusted.

Enable Keychain Access in macOS and select Always Trust for the certificate.

20023

The user certificate for 802.1X is not trusted.

20024

The driver for traffic redirection is not running.

Client error

Reinstall the SASE client. Alternatively, check the optimization and network acceleration features of other security software that is installed on your device and clear the startup optimization option for the SASE client.

20025

The Base Filtering Engine (BFE) service is not running.

Check whether the BFE service is running as normal.

If the service is not running as normal, troubleshoot the issue by using the following methods:

-   Enable the BFE service. For more information, see [Enable the Base Filtering Engine service](https://answers.microsoft.com/en-us/windows/forum/all/enable-base-filtering-engine-service/d76c32b7-4ee1-437f-a8d3-7019dafe58a4).
    
-   Reinstall your operating system.
    

20026

The SASE service is not started.

Restart the SASE client and log on to the client.

20027

Private access is disabled.

Contact the administrator enable internal network access.

20028

Failed to connect to the stunnel client.

Client or network error

A network error occurred. Check your network conditions and DNS settings.

20029

Software conflicts due to the same listening port.

Software conflict

The software that you installed may conflict with the SASE client. Stop the software and restart the SASE client.

20030

Software conflicts due to processes or dll.

20031

Software conflicts due to drives.

The drive that is running may conflict with the SASE client. Uninstall the drive and restart the SASE client.

20032

The SHA256 patch is missing.

Download and install the patch and try again.

-   [Patch for 32-bit Windows](https://sase-app.oss-accelerate.aliyuncs.com/windows/WIN7_SHA256_x86.zip)
    
-   [Patch for 64-bit Windows](https://sase-app.oss-accelerate.aliyuncs.com/windows/WIN7_SHA256_x64.zip)
    

Before you install the patch, start Windows Update. Perform the following operations to start Windows Update:

1.  Open Control Panel and click **System and Security**.
    
2.  Click **Administrative Tools**.
    
3.  In the Administrative Tools window, double-click Services.
    
4.  Find and right-click **Windows Update** and choose Properties.
    
5.  In the **Windows Update Properties** window, set **Startup** type to **Automatic**.
    

## **Error codes of third-party data sources**

The SASE client integrates the error codes of Lark, WeCom, and DingTalk. You can view the causes of the errors in the following topics:

-   [Lark error codes](https://open.feishu.cn/document/server-docs/api-call-guide/generic-error-code)
    
-   [WeCom error codes](https://developer.work.weixin.qq.com/document/path/96213)
    
-   [DingTalk error codes](https://open.dingtalk.com/document/orgapp/server-api-error-codes-1)
