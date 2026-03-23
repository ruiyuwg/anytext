## Identities and permissions

-   Configure your Alibaba Cloud account based on the principle of least privilege.
    
-   Grant permissions to user groups to separately assign responsibilities and facilitate quick permission changes.
    
-   Access cloud resources as a Resource Access Management (RAM) user instead of using your Alibaba Cloud account, and attach appropriate policies to the RAM user.
    
-   Access cloud resources by using an instance role or a Security Token Service (STS) token instead of the AccessKey pair of your Alibaba Cloud account or RAM user, and limit the granted permissions.
    
-   Delete RAM users, RAM roles, permissions, keys, or credentials that are no longer required and rotate keys for RAM users and applications on a regular basis.
    
-   Do not disclose the AccessKey ID or AccessKey secret of your Alibaba Cloud account. Do not write the plaintext AccessKey pair in code and expose the code to external platforms such as GitHub or store it in a location that is accessible to other users.
    
-   Change your password on a regular basis and make sure that the password meets strength requirements.
    
-   Set a complex password for your Alibaba Cloud account that differs from those on other platforms to protect resources on multiple platforms from security threats caused by password leaks. Do not use the same password or key pair for different accounts on a host.
    

## Monitoring and audit

Audit the account operations on a regular basis.

We recommend that you use Alibaba Cloud services such as ActionTrail to record the operations on the management console and the logs of API calls within your Alibaba Cloud account.
