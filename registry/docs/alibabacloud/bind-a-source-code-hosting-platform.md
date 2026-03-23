Before you build an image, you must bind your Container Registry instance to a source code hosting platform. This topic describes how to bind a Container Registry Enterprise Edition instance to a source code hosting platform.

## Prerequisites

-   An account is registered on the source code hosting platform.
    
-   A Container Registry Enterprise Edition instance is created. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488). For information about how to bind a Container Registry Personal Edition instance to a source code hosting platform, see [Bind a source code hosting platform](/help/en/acr/user-guide/bind-a-source-code-hosting-platform-1).
    

## Background information

Alibaba Cloud Container Registry Enterprise Edition supports the following code hosting platforms.

**Code hosting platform**

**Version of the code hosting platform**

**Authentication method for binding**

**Limit on triggering image building**

Gitee

> Personal Edition instances cannot be bound to Gitee.

All

Gitee OAuth authentication

None

GitHub

GitHub developer version

GitHub OAuth authentication

None

GitLab

All

Personal access token

None

Bitbucket

All

Gitee OAuth authentication

None

## Bind a Container Registry Enterprise Edition instance to Gitee

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find Gitee and click **Bind Account** in the **Actions** column.
    
7.  In the **Gitee** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the Gitee logon page, enter your account and password, and then click **Log In**.
    
9.  On the Gitee Authorization page, verify the authorization information and click **Permit**.
    
    Return to the Container Registry console. If **Bind successfully** is displayed, the Enterprise Edition instance is bound to Gitee.
    

## Bind a Container Registry Enterprise Edition instance to GitHub

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find GitHub and click **Bind Account** in the **Actions** column.
    
7.  In the **GitHub** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the GitHub logon page, enter your account and password, and then click **Sign in**.
    
9.  On the **Authorize Aliyun Container Registry** page, verify the authorization information and click **Authorize AliyunDeveloper**.
    
    Return to the Container Registry console. If the message **You have successfully bound the GitHub account** is displayed, the Enterprise Edition instance is bound to GitHub.
    

## Bind a Container Registry Enterprise Edition instance to Bitbucket

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find Bitbucket and click **Bind Account** in the **Actions** column.
    
7.  In the **Bitbucket** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the Bitbucket logon page, enter the email, account and password, and then click **Sign In**.
    
9.  On the Bitbucket Authorization page, verify the authorization information and click **Grant access**.
    
10.  In the Bind Account dialog box, specify **Instance Type**, **Region**, and **Instance**. Click **Confirm**.
     
     Return to the Code Source page of the Container Registry console. If **Bound** is displayed in the **Status** column of Bitbucket, the Enterprise Edition instance is bound to Bitbucket.
     

## Bind a Container Registry Enterprise Edition instance to GitLab

If you bind a self-managed GitLab source code repository, take note of the following items about ports:

-   HTTP
    
    By default, port 80 is used. If you want to use other ports, append the port numbers to the end of the trigger URL. You can use only the following port numbers: 80, 21, 443, 70, 210, 280, 488, 591, 777, and from 1025 to 65535.
    
-   HTTPS
    
    By default, port 443 is used. Only port 443 is supported. If you want to use another port number, use HTTP.
    

**Note**

You cannot access GitLab over a firewall or by using a self-signed SSL certificate. For information about how to bind a private GitLab code repository in a VPC, see [Build a container image in a VPC](/help/en/acr/user-guide/build-a-container-image-in-a-vpc).

1.  Create an access token for GitLab.
    
    1.  Use the Admin account to log on to [GitLab](https://gitlab.com/).
        
    2.  On the GitLab page, click the profile picture and click **Settings**.
        
    3.  In the left-side navigation pane of the **User Settings** page, click **Access Tokens**.
        
    4.  On the **Access Tokens** page, set the Name and Expires At parameters, and click **Create personal access token**.
        
        Then, you can view the access token on the **Access Tokens** page.![GitLab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5980455161/p232585.png)
        
2.  Bind your instance to GitLab.
    
    1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
        
    2.  In the top navigation bar, select a region.
        
    3.  In the left-side navigation pane, click **Instances**.
        
    4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
        
    5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Code Source**.
        
    6.  On the **Code Source** page, find GitLab and click **Bind Account** in the **Actions** column.
        
    7.  In the Private GitLab dialog box, set the following parameters and click **Confirm**.
        
        -   **URL**: the URL that is used to log on to GitLab.
            
            -   If you use a private GitLab, enter the logon URL of the private GitLab.
                
            -   If you use a public GitLab, enter the logon URL of the public GitLab.
                
        -   **Username**: the username that you use to log on to GitLab.
            
        -   **Private Token**: the access token that you created in Step 1.
            
        
        If **Bound** is displayed in the **Status** column on the Code Source page, the instance is bound to GitLab.
        

## References

If you fail to bind a Container Registry Enterprise Edition instance to a source code hosting platform, refer to [FAQ about source code repositories](/help/en/acr/support/faq-about-source-code-repositories#concept-2047827) to troubleshoot the error.
