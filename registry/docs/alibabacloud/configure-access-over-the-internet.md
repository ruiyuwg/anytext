This topic describes how to configure an IP allowlist to control which clients can access your Container Registry Enterprise Edition instance over the Internet, preventing unauthorized access.

## Prerequisites

You have a Container Registry Enterprise Edition instance.

Internet access is enabled for the instance. By default, Enterprise Edition instances cannot be accessed over the Internet. You must enable Internet access before configuring an access control policy.

**Note**

After you enable Internet access, the CIDR block **127.0.0.1/32** is automatically added to the whitelist.

![公网访问](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3996573071/p632451.png)

## Procedure

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
4.  In the left-side navigation pane, choose **Repository** > **Access Control**.
    
    **Note**
    
    For Helm charts, choose **Helm Chart** > **Access Control**.
    
5.  On the **Access Control** page, click the **Internet** tab.
    
6.  On the **Internet** tab, click **Add Internet Whitelist**.
    
7.  In the **Add Internet Whitelist** dialog box, specify the CIDR block and the description.
    
8.  Click **OK**.
    
    ECS instances whose IP addresses fall within the specified CIDR block can now access the Container Registry Enterprise Edition instance over the Internet.
    
    **Important**
    
    Clearing the whitelist exposes your instance completely to the Internet and may result in attacks. If you want to allow **all** ECS instances to access the instance over the Internet, clear the whitelist — but proceed with caution.
