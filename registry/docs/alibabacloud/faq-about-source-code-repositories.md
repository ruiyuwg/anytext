Container Registry allows you to build images from source code repositories such as Alibaba Cloud Codeup, GitHub, GitLab, Git, and Gitee. An image can be automatically built after the source code changes. This topic provides answers to some frequently asked questions about using source code repositories.

## How do I unbind an account from a GitHub or GitLab repository, or bind another account to the repository?

-   GitHub
    
    Log on to the source code repository and choose Personal settings > Applications. On the Applications page, click Revoke next to Aliyun Container Registry. ![Github.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2123025961/p722310.png)
    
-   GitLab
    
    Log on to the source code repository. On the User Settings page, click the Access Tokens tab. Then, click Revoke next to the token in the Active Personal Access Tokens section.
    
    ![Unbind a token](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2578195851/p67953.png)
    

## Why does an error occur when I bind to a GitLab repository?

-   Error message: "Failed to access the source code repository site. Please confirm that the account binding information is correct, or try again later."
    
    **Cause 1**
    
    The on-premises GitLab source code repository does not respond to your access request.
    
    **Solutions**
    
    -   If you use a Container Registry Enterprise Edition instance to access the on-premises GitLab source code repository by using the virtual private cloud (VPC) endpoint of the instance, make sure that the entered VPC endpoint is correct. For more information, see [Step 1: Manage the link](/help/en/acr/user-guide/build-a-container-image-in-a-vpc#section-931-19w-ohj). If you use a Container Registry Enterprise Edition instance to access the on-premises GitLab source code repository by using the public endpoint of the instance, make sure that the on-premises GitLab source code repository is accessible from the Internet. If you use a Container Registry Personal Edition instance to access the on-premises GitLab source code repository, make sure that the on-premises GitLab source code repository is accessible from the Internet.
        
    -   Check whether the binding information of your GitLab account is valid, including the GitLab URL, username, and access token.
        
    
    **Cause 2**
    
    GitLab does not have a firewall or uses an invalid self-signed HTTPS certificate, such as a TLS certificate with an incomplete certificate chain.
    
    **Solutions**
    
    Verify your certificate. You can use [SSL status detection](https://myssl.com/ssl.html?spm=a2c4g.11186623.0.0.3f581605Mcnt0T) to verify the certificate.
    
    **Cause 3**
    
    Your GitLab access request times out due to network issues.
    
    **Solutions**
    
    Check your network connection and try again later.
    
-   Error message: "The source code repository site returns an error response. Please confirm that the account binding information is correct."
    
    If this error occurs, the connection to GitLab is normal, but an error code is returned due to server configurations.
    
    **Cause 1**
    
    The account of the source code repository has no permission to set a webhook.
    
    **Solutions**
    
    Make sure that the settings of the source code repository are valid on the Integrations page of GitLab.
    
    **Cause 2**
    
    The binding information is invalid.
    
    **Solutions**
    
    Check whether the username and the repository name of the source code repository are the same as those in the URL of the Git repository.
