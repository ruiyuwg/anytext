This topic describes how to create an Open Authorization (OAuth) application in Resource Access Management (RAM). You can use the OAuth application to obtain user information and access Alibaba Cloud APIs.

## Background information

If an application provider wants to provide services to users on the China site (aliyun.com) and International site (alibabacloud.com), the application provider must create an application on the China site (aliyun.com) and an application on the International site (alibabacloud.com).

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Integrations** > **OAuth Preview**.
    
3.  On the **Enterprise Application** tab, click **Create Application**.
    
4.  On the **Create Application** page, configure the parameters.
    
    1.  Configure the **Application Name** and **Display Name** parameters.
        
    2.  Configure the **Application Type** parameter.
        
        -   **Web Application**: a web application.
            
        -   **Native Application**: a native application that runs on an operating system, such as a desktop or mobile operating system.
            
        -   **Server Application**: an application that can access Alibaba Cloud services without the need for user logon. Only applications that synchronize user information based on the System for Cross-domain Identity Management (SCIM) protocol are supported.
            
        
    3.  Configure the **Access Token Validity** parameter.
        
        Valid values: 900 to 10800. Unit: seconds. 900 seconds is equal to 15 minutes. 10,800 seconds is equal to 3 hours. Default value: 3600.
        
    4.  For web applications and native applications, you must configure the **Refresh Token Validity** and **Callback Address** parameters.
        
        Valid values for refresh tokens: 7200 to 31536000. Unit: seconds. 7,200 seconds is equal to 2 hours. 31,536,000 seconds is equal to one year. Default value: 2592000.
        
5.  Click **Create Application**.
