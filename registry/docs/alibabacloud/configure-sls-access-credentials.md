To access Simple Log Service using the SDK, you need to configure the access credentials. Alibaba Cloud services use the access credentials to verify your identity information and access permissions. You can select different types of access credentials based on your authentication and authorization requirements.

## Access credentials

### Access credential types

Credentials refer to a set of information that proves a user's identity. When users log on to the system, they need to provide the correct credentials to authenticate their identity. Commonly used credentials include the following:

-   Temporary access credentials
    
    -   The Security Token Service (STS) token is a temporary access credential that Alibaba Cloud offers for Resource Access Management (RAM) roles. It allows you to customize the validity period and access permissions. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts)
        
    -   For scenarios that require high security, we recommend that you use temporary access credentials. Temporary access credentials are valid only within a specific period of time, which helps prevent credential leaks. Temporary access credentials support fine-grained access control, reducing the threat of excessive permissions.
        
-   Long-term access credentials
    
    -   An AccessKey pair is a long-term access credential for an Alibaba Cloud account or a RAM user. An AccessKey pair consists of an AccessKey ID and an AccessKey secret. For more information, see [Create an AccessKey](/help/en/ram/create-an-accesskey-pair-1#task-188766).
        
    -   For scenarios that require convenience, long-term access credentials eliminate the need for multiple refreshes. However, long-term access credentials are not the most secure option, thus we recommend using them with caution, or not using them at all.
        
        **Important**
        
        -   If you use long-term access credentials, we recommend that you rotate them quarterly. For more information, see [Rotate AccessKey pairs of RAM users](/help/en/ram/user-guide/rotate-accesskey-pairs-of-ram-users).
            
        -   If long-term access credentials are leaked or no longer in use, promptly delete or disable them to minimize security risks. For more information, see [Delete an AccessKey pair of a RAM user](/help/en/ram/user-guide/delete-an-accesskey-pair-of-a-ram-user).
            
        

### **Use temporary access credentials**

When you need to temporarily use the SDK to access Simple Log Service, you can obtain a temporary access credential by requesting an STS service. This temporary credential does not require you to disclose your RAM user keys.

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
2.  Assign the RAM user the system policy `AliyunSTSAssumeRoleAccess` to assume the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
3.  [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
    
4.  Authorize the RAM role to access Simple Log Service resources. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role) and [Custom policies for Simple Log Service](/help/en/sls/log-service-custom-permission-policy-reference).
    
5.  Call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) API using the RAM user to obtain STS temporary credentials, including security token, AccessKey ID, and AccessKey secret.
    
6.  Initialize the SDK with the temporary credentials to access Simple Log Service. For more information, see [Call examples of STS SDK for Python](/help/en/ram/developer-reference/use-the-sts-openapi-example).
    

### **Use long-term access credentials**

For applications in secure environments with long-term Simple Log Service access needs, the AccessKey pair (AccessKey ID and AccessKey secret) of a RAM user is suitable. For more information, see [Create an AccessKey](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).

**Warning**

-   We recommend that you use the AccessKey pair of a RAM user with minimal privileges instead of your Alibaba Cloud account. The Alibaba Cloud account has all the resource permissions, and leaking its AccessKey pair poses a substantial system risk.
    
-   Do not store the AccessKey ID and AccessKey secret in your code, because this can lead to leaks and pose security risks to your Alibaba Cloud resources.
    

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
2.  Grant the RAM user access to Simple Log Service resources. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) and [Custom policies for Simple Log Service](/help/en/sls/log-service-custom-permission-policy-reference).
    
3.  [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    

## References

After initializing the LogClient with access credentials and other parameters, you can call the interface. For the initialization steps, see the following topics:

-   [Initialize Simple Log Service SDK for Java](/help/en/sls/developer-reference/initialize-the-log-service-java-sdk)
    
-   [Initialize Simple Log Service SDK for Python](/help/en/sls/developer-reference/initializing-the-sls-python-sdk)
    
-   [Initialize Simple Log Service SDK for Go](/help/en/sls/developer-reference/initialize-the-log-service-go-sdk)
