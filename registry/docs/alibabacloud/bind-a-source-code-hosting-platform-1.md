Before you build an image, you must bind your Container Registry instance to a source code hosting platform. This topic describes how to bind a Container Registry Personal Edition instance to a source code hosting platform. After the instance is bound, you can perform operations such as image building.

## Prerequisites

-   An account is registered on the source code hosting platform.
    
-   A Container Registry Personal Edition instance is created. For more information, see [Create a Container Registry Personal Edition instance](/help/en/acr/user-guide/create-a-container-registry-personal-edition-instance#task-2044035).
    

## Background information

Container Registry Personal Edition supports the following source code hosting platforms.

**Code hosting platform**

**Version of the code hosting platform**

**Authentication method for binding**

**Limit on triggering image building**

GitHub

GitHub developer version

GitHub OAuth authentication

None

Bitbucket

All

Bitbucket OAuth authorization

None

GitLab

All regions

Personal access token

None

## Bind a Container Registry Personal Edition instance to GitHub

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to bind.
    
5.  In the left-side navigation pane of the management page of the Container Registry Personal Edition instance, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find GitHub and click **Bind Account** in the **Actions** column.
    
7.  In the **GitHub** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the GitHub logon page, enter your account and password, and then click **Sign in**.
    
9.  On the **Authorize Aliyun Container Registry** page, verify the authorization information and click **Authorize AliyunDeveloper**.
    
    Return to the Container Registry console. If the message **You have successfully bound the GitHub account** is displayed, the Personal Edition instance is bound to GitHub.
    

## Bind a Container Registry Personal Edition instance to Bitbucket

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to bind.
    
5.  In the left-side navigation pane of the management page of the Container Registry Personal Edition instance, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find Bitbucket and click **Bind Account** in the **Actions** column.
    
7.  In the **Bitbucket** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the **Bitbucket** logon page, enter your email address, click **Continue**, enter your password, and then click **Sign in**.
    
9.  On the **Confirm access to your account** page, confirm that the permissions to be granted are correct and click **Grant access**.
    
    Return to the Container Registry console. If the message **You have successfully bound the Bitbucket account** is displayed, the instance is bound to Bitbucket.
    

## Bind a Container Registry Personal Edition instance to GitLab

To bind the instance to a self-managed GitLab source code repository, take note of the following items about ports:

-   HTTP
    
    By default, port 80 is used. If you want to use other ports, append the port numbers to the end of the trigger URL. You can use only the following port numbers: 80, 21, 443, 70, 210, 280, 488, 591, 777, and from 1025 to 65535.
    
-   HTTPS
    
    By default, port 443 is used. Only port 443 is supported. If you want to use another port number, use HTTP.
    

**Note**

-   You cannot access GitLab over a firewall or by using a self-signed HTTPS certificate. Make sure that GitLab can be accessed over the Internet.
    
-   If your Personal Editon instance is bound to a GitLab code repository in a GitLab subgroup, image building can only be manually triggered.
    

1.  Create an access token for GitLab.
    
    1.  Log on to GitLab.
        
    2.  On the GitLab page, click the profile picture and click **Settings**.
        
    3.  In the left-side navigation pane of the **User Settings** page, click **Access Tokens**.
        
    4.  On the **Access Tokens** page, set the Name and Expires At parameters, select **api**, and then click **Create Personal Access Token**.
        
        Then, you can view the access token on the **Access Tokens** page.![GitLab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5980455161/p232585.png)
        
2.  Bind your instance to GitLab.
    
    1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
        
    2.  In the top navigation bar, select a region.
        
    3.  In the left-side navigation pane, click **Instances**.
        
    4.  On the **Instances** page, click the Personal Edition instance that you want to bind.
        
    5.  In the left-side navigation pane of the management page of the Container Registry Personal Edition instance, choose **Repository** > **Code Source**.
        
    6.  On the **Code Source** page, find GitLab and click **Bind Account** in the **Actions** column.
        
    7.  In the Private GitLab dialog box, configure the following parameters and click **Confirm**.
        
        -   URL: the URL that is used to log on to GitLab.
            
            -   If you use a private GitLab, enter the logon URL of the private GitLab.
                
            -   If you use a public GitLab, enter the logon URL of the public GitLab.
                
        -   Username: the username that you use to log on to GitLab.
            
        -   Private Token: the access token that you created.
            
        
        If **Bound** is displayed in the **Status** column on the Code Source page, the instance is bound to GitLab.
        

## References

If your Container Registry Personal Edition instance fails to be bound to a source code hosting platform, you can view related topics to troubleshoot the issue. For more information, see [FAQ about source code repositories](/help/en/acr/support/faq-about-source-code-repositories#concept-2047827).
