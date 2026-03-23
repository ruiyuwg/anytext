This topic describes common use cases for Resource Access Management (RAM) to help you securely and efficiently manage identities and permissions for your Alibaba Cloud resources.

## **Operations management**

### **1\. Assign permissions to your organization's** employees

**Scenario:** 

Sharing your Alibaba Cloud account credentials with multiple employees introduces significant security risks, including a lack of accountability for actions and the potential for users to have excessive permissions. Instead, you need a way to grant each employee only the permissions required for their specific job role.

**Solution:**

You can create an individual RAM user for each employee and attach policies that grant only the permissions necessary for their job function (such as network administrator or security administrator) based on the principle of least privilege (PoLP). To simplify management, you can organize users with similar responsibilities into a user group and attach policies to the group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5154255671/p1034543.png)

**Benefits:**

-   **Clear accountability**: Each employee uses a separate identity to log on and perform actions. All actions can be audited and traced.
    
-   **Security and compliance**: Fine-grained access controls reduce security risks from over-privileged users or shared credentials, helping you meet security and compliance requirements.
    

**Examples:**

-   Assign different system policies to different O&M engineers, such as virtual machine O&M engineers and network O&M engineers. For more information, see [Manage permissions of O&M engineers](/help/en/ram/use-cases/use-ram-to-manage-permissions-of-o-and-m-engineers).
    
-   Define and apply custom policies for different use cases. For more information, see [Custom policies for ECS](/help/en/ecs/user-guide/custom-policies-for-ecs).
    
-   Configure custom policies based on access conditions, such as request sources or resource tags. For more information, see [Access Alibaba Cloud from specified IP addresses](/help/en/ram/access-alibaba-cloud-resources-by-using-a-specific-ip-address-or-cidr-block).
    

### **2\. Isolate and authorize resources by project or environment**

**Scenario:** 

Your organization runs multiple projects (such as Project A and Project B) or maintains separate environments (development, production) within a single Alibaba Cloud account. You must enforce strict separation to ensure that developers from Project A cannot access Project B's resources, and that developers cannot modify resources in the production environment.

**Solution**:

You can use resource groups to organize your cloud resources by project or environment. Then, you can attach RAM policies to users or groups that grant access only to a specific resource group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5154255671/CAEQTxiBgMDsl9721xkiIGJlODkxZjgzYTBiMzQ1NWJiZGYxMjJhMWNmNTE4YmNj5914092_20251130110249.070.svg)

**Benefits:**

-   **Clear lines of responsibility:** Using the **Resource Group** feature, you can divide permissions by project or environment. This ensures that team members can access only the resources for which they are responsible.
    
-   **Fine-grained cost management:** Organizing resources into **resource groups** also enables more accurate **cost allocation** and billing analysis by project or environment.
    

For more information, see [Resource grouping and authorization](/help/en/ram/use-cases/use-ram-to-create-and-authorize-resource-groups).

### **3\. Enable cross-account resource collaboration and authorization**

**Scenario:** 

Your enterprise needs to grant partners, subsidiaries, or other third parties access to specific resources within your Alibaba Cloud account. Sharing long-term credentials like an AccessKey pair is not secure and must be avoided.

**Solution:**

You can use a RAM role to establish a trust relationship with the other Alibaba Cloud account. This method lets you grant the RAM role specific permissions to your resources. Users in the trusted account can then assume this RAM role to obtain temporary security credentials to access only the resources you have permitted.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5154255671/p1034545.png)

**Benefits:**

-   **Secure and controllable:** By using a RAM role, you enable secure **cross-account access** without sharing **long-term credentials**. Access is granted via temporary credentials that are valid only for a short duration.
    
-   **Flexible permission management:** You can adjust role permissions or revoke authorization at any time. This ensures that resource sharing and collaboration are secure and controllable.
    
-   **Fine-grained access control**: You can create different RAM roles for different partners and grant different permission scopes for fine-grained management.
    

For more information, see [Access resources across Alibaba Cloud accounts](/help/en/ram/use-cases/use-a-ram-role-to-grant-permissions-across-alibaba-cloud-accounts).

### **4\. Enable passwordless logon to the Alibaba Cloud Management Console**

**Scenario**:

Your team members frequently log on to the Alibaba Cloud Management Console and want a more secure and convenient alternative to traditional passwords, such as using their device's fingerprint sensor or facial recognition.

**Solution**:

You can enable and use passkeys for passwordless authentication.

A passkey is a secure digital credential that replaces traditional password. It is stored on personal devices, such as a mobile phone or PC, or on a dedicated hardware security key. After you enable a passkey, your team member can log on to the Alibaba Cloud Management Console by using their device's biometric authentication (such as a fingerprint or Face ID) or their device's PIN.

**Benefits**:

-   **Eliminating password risks**: Your team members do not need to remember or enter passwords. This avoids security risks such as password leaks and weak passwords.
    
-   **User-friendly logon experience:** Using biometrics or a hardware security key makes the logon process faster and more convenient.
    
-   **Enhanced security**: Built on public-key cryptography, passkeys are inherently resistant to phishing attacks, making them significantly more secure than traditional passwords.
    

For more information, see [What is a passkey?](/help/en/ram/user-guide/what-is-a-passkey)

### **5\. Integrate an enterprise IdP to enable SSO**

**Scenario**:

Your enterprise wants to enable employees to use their existing corporate credentials from an identity provider (IdP) like Active Directory, Microsoft Entra ID, or Okta to log on to Alibaba Cloud. This approach centralizes identity management and provides a single sign-on (SSO) experience, eliminating the need for separate usernames and passwords.

**Solution**: 

You can configure role-based SSO or user-based SSO to integrate your enterprise IdP with Alibaba Cloud.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5154255671/CAEQTxiBgICFzJH31xkiIDAxYjE1Yzg4M2QxNTQyYzZiZGE5MzE5NjJkYzJkNGY05914092_20251201004513.953.svg)

**Note**

If your enterprise uses a [resource directory](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview) to manage a multi-account environment, we recommend using [CloudSSO](/help/en/cloudsso/product-overview/what-is-cloudsso) for centralized identity and access management.

**Benefits**:

-   **Simplified logon**: Employees log on to the IdP portal once to access Alibaba Cloud and other applications that have a trust relationship with the IdP. They do not need to maintain multiple usernames and passwords.
    
-   **Centralized security policies**: Enterprise security policies, such as multi-factor authentication (MFA), password policies, and IP address restrictions, are configured and enforced centrally at the IdP level.
    
-   **Centralized management and auditing**: You can centrally provision and revoke access during employee onboarding and offboarding through your existing enterprise IdP, which reduces management overhead and compliance risks.
    

For an example, see [Implement role-based SSO from Microsoft Entra ID to Alibaba Cloud](/help/en/ram/implement-role-based-sso-from-azure-ad).

## **Application development**

### **1\. Applications on Alibaba Cloud accessing Alibaba Cloud resources**

**Scenario**:

An application deployed on Alibaba Cloud services—such as an Elastic Compute Service (ECS) instance, a Container Service for Kubernetes (ACK) cluster, or a Function Compute function—needs to access other cloud resources like Object Storage Service (OSS) buckets or ApsaraDB RDS databases. Hard-coding credentials like an AccessKey pair in your code or configuration files poses a major security risk and must be avoided.

**Solution**:

The recommended best practice is to assign a RAM role to your compute resource. Your application can then leverage this role to automatically obtain temporary credentials from the Security Token Service (STS) and make secure API calls. The method for attaching a role varies by service:

**Compute environment**

**Recommended method**

**Key mechanism**

ECS

RAM roles for ECS instances

An application retrieves STS tokens for the attached RAM role by making a request to the ECS metadata service.

ACK

RAM Roles for Service Accounts (RRSA)

An application running in a pod uses a projected service account token (OIDC token) to assume a RAM role and obtain STS tokens.

Function Compute

RAM roles for Function Compute functions

The Function Compute runtime environment automatically injects STS tokens for the function's RAM role into the environment variables.

The following diagram illustrates how an application on an ECS instance uses a RAM role to access other cloud services:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5154255671/p1034546.png)

**Benefits**:

-   **Improved security**: By using RAM roles, you do not need to store long-term credentials with your applications, significantly reducing the risk of credential leakage.
    
-   **Simplified credential management**: You no longer need to manually embed or manage AccessKey pairs in your code or configuration files, simplifying operations.
    
-   **Automated credential rotation**: The temporary credentials obtained via a RAM role are automatically rotated by Alibaba Cloud, eliminating the operational burden of manual rotation.
    

**Examples**:

-   [RAM roles for ECS instances](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance)
    
-   [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services)
    
-   [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc/grant-function-compute-permissions-to-access-other-alibaba-cloud-services)
    

In scenarios where role-based access is not feasible, you can configure an AccessKey pair in a [system environment variable](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi#ac099a0ecd1gq). If you must use a long-term AccessKey pair, always configure a network access control list (ACL) that restricts its use to trusted IP addresses or networks.

For more information, see [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi).

### **2\. Exterior applications accessing Alibaba Cloud resources**

**Scenario**:

An application is deployed in an environment outside Alibaba Cloud, such as a self-managed data center or another cloud platform. It must call Alibaba Cloud APIs to access cloud resources.

**Solutions**:

-   If your external application authenticates with an OpenID Connect (OIDC)-compatible IdP (like Okta or your own), you can configure it to assume a RAM role. The application authenticates with the IdP, receives an OIDC token, and exchanges that token for temporary Alibaba Cloud credentials by calling the STS [AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc) operation. This approach avoids managing long-term Alibaba Cloud AccessKey pairs on your external systems.
    
-   If the preceding solution is not applicable, you can configure an AccessKey pair in a [system environment variable](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi#ac099a0ecd1gq). If you must use a long-term AccessKey pair, always configure a network ACL that restricts its use to trusted IP addresses or networks.
    

**Examples**:

-   [An application on Okta accesses Alibaba Cloud resources using role-based SSO (AssumeRoleWithOIDC)](/help/en/ram/implement-oidc-based-sso-from-okta)
    
-   [Use an AccessKey pair to upload a file to OSS](/help/en/oss/developer-reference/use-the-accesskey-pair-of-a-ram-user-to-initiate-a-request)
    

For more information, see [Configure AccessKey pair-based policies for network access control](/help/en/ram/user-guide/accesskey-network-access-restriction-policy).

## **References**

-   [What is STS?](/help/en/ram/user-guide/what-is-sts)
