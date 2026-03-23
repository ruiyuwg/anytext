This topic provides answers to some commonly asked questions about the policies in Elastic Desktop Service.

-   [What are the configuration items of a policy?](#section-jg2-4f4-7xx)
    
-   [Do I need to restart a cloud computer after I change the policy that is associated with the cloud computer?](#section-sjj-zia-th0)
    
-   [How do I enable access from cloud computers to only specific domain names?](#section-24y-2h6-ufq)
    
-   [Can I enable different policies for a cloud computer for different end users who share the cloud computer?](#section-www-zcg-cpl)
    
-   [How do I associate a policy with a cloud computer?](#8ed583f031iay)
    

## What are the configuration items of a policy?

If a policy is associated with a cloud computer, the policy can be used to manage the permissions on the cloud computer when an end user uses the cloud computer. This improves data security. In a Elastic Desktop Service policy, you can configure the following items: **Watermark**, **Anti-screenshot**, **Local Disk Mapping**, **Clipboard**, **Image Display Quality**, **Image Quality Control**, **Network Transmission**, **Web Client File Transfer**, **Printer Redirection**, **Webcam Redirection**, **Logon Method Control**, **Security Group Control**, **DNS**, **Client IP Whitelist**, **USB Redirection**, **Screen Recording Audit**, and **Media Redirection**. For more information about how to configure policies, see [Policy configurations](/help/en/wuying-workspace/user-guide/create-a-policy/).

## Do I need to restart a cloud computer after I change the policy that is associated with the cloud computer?

No, you do not need to restart the cloud computer. Rules that determine whether features in a policy can take effect are different. Some features take effect immediately after the modification. Other features take effect only upon the restart of cloud computers. For more information, see [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies#task-2078987).

## How do I enable access from cloud computers to only specific domain names?

You can enable the **DNS** feature and create domain name access rules for cloud computers to allow access from the cloud computers to only specific domain names. If you do not enable the DNS feature for cloud computers or if you enable the DNS feature but do not create domain name access rules, it indicates that you allow the cloud computers to access all domain names. For more information, see [Enable the DNS feature](/help/en/wuying-workspace/wuying-workspace-pro-edition/enable-dns#task-2221313).

## Can I enable different policies for a cloud computer for different end users who share the cloud computer?

No, you cannot enable different policies for a cloud computer for multiple end users who share the cloud computer. Elastic Desktop Service supports access control for only cloud computers. Elastic Desktop Service does not support access control for users.

## **How do I associate a policy with a cloud computer?**

A policy does not provide services independently. You must associate a policy with cloud computers or cloud computer pools for the configuration items of the policy to take effect. The following list describes how to associate a policy with a cloud computer and a cloud computer pool:

-   Associate a policy with a cloud computer
    
    -   In the **Advanced Options** step of the **Activate Elastic Desktop Service** wizard, associate a policy with the cloud computer that is being created.
        
    -   On the **Cloud Computers** page, find the cloud computer with which you want to associate a policy, click the ![3个点..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6596397861/p682165.png) icon in the **Actions** column, and then click **Change Policy**. In the panel that appears, follow the on-screen instructions to associate the desired policy with the cloud computer.
        
-   Associate a policy with a cloud computer pool
    
    -   In the **Security Policy** section of the Elastic Desktop Service **Create Cloud Computer Pools** page, select the policy that you want to associate with the cloud computer pool that is being created.
        
    -   On the details page of the cloud computer pool with which you want to associate a policy, click the **Basic Information** tab. Find the **Policy Group Name** field. Click the ![修改.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8736123961/p701274.png) icon. Then, follow the on-screen instructions to associate the desired policy with the cloud computer pool.
