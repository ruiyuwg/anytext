Building a secure, compliant, and scalable cloud environment starts with a strong **identity** and **permission** strategy. This topic provides best practices for identity and access management using **Resource Access Management (RAM)**, aligned with the **Alibaba Cloud Well-Architected Framework**.

## **Best practices for human identities**

**Human identities** represent your organization members, such as developers, operations engineers, or security engineers. The core principles for managing these identities are centralization, fine-grained control, and multi-layered protection.

### **1\.** Avoid using **your Alibaba Cloud account for daily tasks**

-   **Best practice:** Your Alibaba Cloud account has unrestricted access to all resources. Do not use it for daily operational tasks.
    
    1.  Create a RAM user with administrator privileges specifically for daily management and technical operations.
        
    2.  Use your Alibaba Cloud account only when absolutely necessary. Securely store its password and related credentials, such as multi-factor authentication (MFA) credentials.
        
    3.  Perform all daily operations using the RAM administrator user. This prevents exposing your Alibaba Cloud account in daily work environments.
        
-   **Suggested actions:**
    
    -   **Create dedicated RAM users**: [Create a RAM user with administrator privileges](/help/en/account/create-ram-user-as-admin) and [create individual RAM users](/help/en/ram/product-overview/create-and-authorize-a-ram-user) for each member of your organization.
        
    -   **Enable MFA for your Alibaba Cloud account**: Add an extra layer of security to your account by [enabling MFA](/help/en/account/configure-account-mfa).
        

### **2\. Strengthen logon security**

-   **Best practice:** Protecting your user credentials is critical. Complex passwords, regular rotation, and multi-factor authentication (MFA) significantly reduce the risk of credential compromise.
    
-   **Suggested actions in RAM:**
    
    -   **Enforce a strong password policy**: Configure a [password policy for RAM users](/help/en/ram/user-guide/configure-a-password-policy-for-ram-users-1) that requires a minimum length, complexity, validity period (such as maximum 90 days), and a limit on failed logon attempts.
        
    -   **Enforce MFA for RAM users**: [MFA](/help/en/ram/user-guide/what-is-multi-factor-authentication) adds a second layer of security to your users' credentials. It effectively blocks unauthorized access, even if a user's password is compromised. You can require all RAM users to use MFA for console logon. For more information, see [Manage the security settings of RAM users](/help/en/ram/user-guide/manage-security-settings-of-ram-users).
        

### **3\. Implement SSO**

-   **Best practice:** Use **single sign-on (SSO)** to connect your corporate **identity provider (IdP)** with Alibaba Cloud. This allows your employees to log on using their existing corporate credentials, which centralizes identity management and avoids maintaining a separate password system in the cloud.
    
-   **Suggested action:** Use RAM's [SSO](/help/en/ram/sso-overview) management feature to federate your corporate IdP, such as Microsoft Entra ID or Okta, with Alibaba Cloud's identity system based on the Security Assertion Markup Language (SAML) 2.0 or OpenID Connect (OIDC) protocol. Depending on your environment and logon requirements, configure [user-based SSO](/help/en/ram/overview-of-user-based-sso) or [role-based SSO](/help/en/ram/role-based-sso/).
    
    **Note**
    
    If your organization uses [Resource Directory (RD)](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview) to manage multiple Alibaba Cloud accounts, we recommend using [CloudSSO](/help/en/cloudsso/product-overview/what-is-cloudsso) to centrally manage identity and access across your accounts.
    

## **Best practices for machine identities**

**Machine identities** represent applications or services that access cloud resources and data through APIs in a non-interactive manner. The core principle for managing these identities is to use temporary security credentials instead of AccessKey pairs whenever possible.

### **1\.** Prioritize temporary credentials (STS tokens)

-   **Best practice:** An **AccessKey pair** is a long-lived credential that remains valid until you manually delete it. If compromised, it poses a significant and persistent security risk. In contrast, a **Security Token Service (STS) token** is a temporary credential obtained by assuming a **RAM role**. It automatically expires after the session duration. If an STS token is compromised, the potential for misuse is limited to the token's short lifespan.
    
-   **Suggested action:** Use AccessKey-free solutions to obtain STS tokens. This method avoids the need to manage and expose long-lived AccessKey pairs in your application. For more information, see [Best practices for using access credentials to access Alibaba Cloud OpenAPI](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi).
    

### **2\. Securely manage AccessKey pairs when they are unavoidable**

-   **Best practice:** In scenarios where you cannot use a RAM role to obtain **STS tokens**, such as for local development, you may need to use an **AccessKey pair**. In these cases, never use the AccessKey pair of your Alibaba Cloud account. Instead, use an AccessKey pair for a RAM user, assign it the minimum required permissions, and rotate it regularly.
    
-   **Suggested actions:**
    
    -   **Never use the AccessKey pair of your Alibaba Cloud account**: When AccessKey pairs are necessary, always use one that belongs to a RAM user, not your Alibaba Cloud account.
        
    -   **Use dedicated AccessKey pairs**: Create a separate **RAM user** and a dedicated **AccessKey pair** for each application and environment such as development, testing, and production). For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
    -   **Grant least privilege**: Grant only the necessary permissions to the **RAM user** associated with the AccessKey pair. Periodically [detect over-privileged identities](/help/en/ram/identify-over-authorization) and [refine permissions](/help/en/ram/manage-policy-references).
        
    -   **Never hard-code credentials**: Use [environment variables](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi#c5b37c90c78pz) or a secrets management service like [KMS Secrets Manager](/help/en/kms/key-management-service/user-guide/manage-and-use-ram-secrets). Never embed an **AccessKey pair** in your application code or commit it to a code repository.
        
    -   **Restrict access by IP address**: Configure a [network ACL policy](/help/en/ram/user-guide/accesskey-network-access-restriction-policy) to restrict the **AccessKey pair** to specific source IP addresses.
        
    -   **Regularly rotate and disable idle AccessKey pairs:** Rotate AccessKey pairs periodically. Additionally, set a maximum idle period for them (90 days is recommended). RAM can automatically disable AccessKey pairs that have not been used within this period. For more information, see [Manage the security settings of RAM users](/help/en/ram/user-guide/manage-security-settings-of-ram-users).
        
    -   **Monitor and audit**: Use ActionTrail to **monitor AccessKey pair usage** and detect unusual activities.
        

## **Best practices for permission management**

Permissions define who (principal) can do what (action) on which resources. The core principles for managing permissions are least privilege and separation of duties.

### **1\.** Grant minimum necessary permissions

-   **Best practice:** Grant each identity only the minimum permissions required to perform its tasks. This practice, known as the principle of least privilege, minimizes the potential impact of a compromised credential.
    
-   **Suggested actions:**
    
    -   **Use custom policies**: Avoid using broad system policies like `AdministratorAccess` for daily tasks. Instead, create [custom policies](/help/en/ram/create-a-custom-policy) that grant fine-grained permissions. Always scope policies by using the `Resource`, `Action/NotAction`, and `Condition` elements.
        
    -   **Review permissions regularly**: Periodically [detect over-privileged identities](/help/en/ram/identify-over-authorization) and [refine permissions](/help/en/ram/manage-policy-references) as needed.
        

### **2\. Simplify permission management with RAM user groups**

-   **Best practice:** Manage user permissions by using **RAM user groups**. Create groups that correspond to job functions in your organization and attach policies to these groups. When a user's job function changes, move them to the appropriate group to update permissions.
    
-   **Suggested actions:**
    
    1.  **Create RAM user groups**: [Create RAM user groups](/help/en/ram/user-guide/create-a-user-group) based on job roles within your organization, such as groups for network administrators or application developers.
        
    2.  **Configure group permissions**: [Grant permissions to RAM user groups](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group) based on job responsibilities instead of attaching policies directly to individual users.
        

### **3\. Use control policies in a multi-account environment**

-   **Best practice:** In a multi-account organization, use control policies in **RD** to set permission boundaries for members in your resource directory. A control policy acts as a guardrail, defining the maximum permissions available to all RAM identities within an account.
    
-   **Suggested action:** When a RAM user or role in a member account attempts to access a resource, Alibaba Cloud evaluates both the applicable [control policy](/help/en/resource-management/resource-directory/user-guide/control-policy-overview) and the RAM policies attached to the identity. The effective permissions are the intersection of what both policies allow.
    
    **Note**
    
    Before applying a control policy, test it on a small scale to ensure it works as expected. Then, attach it to the appropriate folders or members.
    

## **References**

1.  [What is Resource Access Management?](/help/en/ram/product-overview/what-is-ram)
    
2.  [Identity management principles of the Alibaba Cloud Well-Architected Framework](/help/en/well-architected/latest/identity-management)
