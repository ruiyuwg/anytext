After you migrate your workloads to the cloud, you can use Resource Access Management (RAM) to manage user identities and resource access permissions in a fine-grained manner. RAM allows you to create and manage RAM users for entities such as employees, systems, and programs. You can manage the permissions of RAM users to control their access to Alibaba Cloud resources. This topic describes best practices for using RAM to ensure security of the Alibaba Cloud resources of your enterprise.

## **Identity management**

### **General principles**

#### **Avoid using the root user of an Alibaba Cloud account**

After you register with Alibaba Cloud, an Alibaba Cloud account is created for you. If you register with Alibaba Cloud as an individual developer, you can add your personal real-name verification information. If you register with Alibaba Cloud as an enterprise, you can add the real-name verification information, billing account, contract information, and invoice information of the enterprise.

By default, an Alibaba Cloud account has a root user. The root user uses the username and password of the Alibaba Cloud account to log on to the Alibaba Cloud Management Console. If you use the root user, the following risks may occur:

-   High risk caused by full permissions: By default, the root user has full permissions of the Alibaba Cloud account. If the username and password of the Alibaba Cloud account are leaked, the risks are extremely high.
    
-   High possibility of password leaks: If multiple employees can use the root user, they all know the username and password of the Alibaba Cloud account. That increases the possibility of password leaks.
    
-   Difficult tracing: If multiple employees can use the root user, actual operators cannot be identified in operation logs. This makes tracing impossible.
    

If you create an AccessKey pair for the root user, the following risks may occur:

-   High risk caused by full permissions: The AccessKey pair of the root user has full permissions of the Alibaba Cloud account. If the AccessKey pair is leaked, the risks are extremely high.
    
-   Serious negative impact of AccessKey pair leaks: An AccessKey pair is a permanent credential. If you use the AccessKey pair of the root user for online workloads and the AccessKey pair is leaked, disabling the AccessKey pair affects the online workloads. If you choose not to disable the AccessKey pair, related risks persist because the permissions of the AccessKey pair cannot be limited.
    

To ensure the security of an Alibaba Cloud account, we recommend that you follow these instructions:

-   **Make sure that the username and password of an Alibaba Cloud account are kept by the administrator and not shared among multiple employees.**
    
-   **Bind a** [Universal 2nd Factor (U2F) security key](/help/en/account/manage-u2f-security-key) **to the root user of an Alibaba Cloud account to add an extra layer of protection in addition to the username and password of the Alibaba Cloud account.**
    
-   **Use the username and password of an Alibaba Cloud account to log on to the Alibaba Cloud Management Console only when necessary.**
    
-   **Avoid using the AccessKey pair of an Alibaba Cloud account.**
    

#### **Use RAM identities to access Alibaba Cloud**

If employees and programs of your enterprise need to access Alibaba Cloud resources, you must assign RAM identities to the employees and programs. You can create RAM users for your employees and programs. Then, you can attach different policies to the RAM users. This ensures fine-grained access control and eliminates the need to use your Alibaba Cloud account to perform routine O&M. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).

-   **Access from employees:** Single sign-on (SSO) is recommended. If SSO is unavailable, you must [bind an MFA device](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user) when you enable password-based logon to the console. We recommend that a RAM user be not shared among multiple employees. If a RAM user is shared among multiple employees, password leak risks increase, actual operators cannot be identified in auditing, and internal management is more difficult.
    
-   **Access from programs:** Security Token Service (STS) tokens are temporary credentials. STS tokens are recommended for programs deployed on Alibaba Cloud to reduce credential leak risks. For more information, see [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi). If programs are not deployed on Alibaba Cloud or AccessKey pairs are required for scenarios such as development and debugging, you can create AccessKey pairs for RAM users. For more information, see [Create an AccessKey pair for a RAM user](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp). You can create up to two AccessKey pairs for each RAM user. One AccessKey pair is used for business, and the other for rotation. For more information, see [Rotate an AccessKey pair](/help/en/ram/user-guide/rotate-accesskey-pairs-of-ram-users).
    

### **Employee management**

#### **Use SSO**

SSO is recommended for access from employees. After SSO is enabled, all internal accounts of your enterprise are authenticated. Then, RAM users can log on to Alibaba Cloud and access resources by using an internal account. SSO authentication is performed by the identity system of your enterprise, and you do not need to set passwords for RAM users in Alibaba Cloud. This reduces password leak risks. For more information, see [SSO overview](/help/en/ram/sso-overview#concept-etn-fjc-mfb).

#### **Configure a password policy for RAM users**

If SSO is unavailable, you must create RAM users for employees. This way, employees can log on to the console by using passwords. You can configure a password policy in the RAM console. In the policy, you can specify the password length, required character types, and validity period. For more information, see [Configure a password policy](/help/en/ram/user-guide/configure-a-password-policy-for-ram-users). If you authorize a RAM user to change the logon password, the RAM user must create a strong logon password and change the password on a regular basis.

#### **Enable MFA for RAM users**

You can enable MFA for RAM users to enhance account security. This adds an extra layer of protection in addition to usernames and passwords.

After you enable MFA and bind an MFA device to a RAM user, the user must provide two security factors when logging on or performing sensitive operations:

1.  First factor: username and password.
    
2.  Second factor: an MFA code from a virtual MFA device or security email address, or passkey authentication.
    

From March 17, 2025, logon MFA is enabled for all RAM users by default. We recommend that you do not modify the default configuration to reduce password leak risks. If you do not want all RAM users to perform MFA upon each console logon, we recommend that you set the MFA for RAM user sign-in parameter to Only when sign-in abnormally. In this case, all RAM users must bind MFA devices, but MFA is required only when Alibaba Cloud detects exceptions. That reduces the logon authentication frequency. For more information, see [Bind an MFA device](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user).

#### **Use a passkey for logon**

Passkeys are a secure authentication method that can be used as a replacement for passwords. RAM users can use passkeys for logons and MFA. For more information, see [What is a passkey?](/help/en/ram/user-guide/what-is-a-passkey) A passkey allows you to use the authentication methods built in your laptop, mobile phone, or other devices for logons or MFA. The built-in authentication methods include fingerprint recognition, facial recognition, and PIN codes. For more information, see [Register a passkey or security key](/help/en/ram/user-guide/bind-a-passkey-to-a-ram-user).

-   If you use a passkey to directly log on to the console as a RAM user, MFA is not required.
    
-   We recommend that you bind an MFA device to the RAM user. This way, you can use the password and MFA device to log on to the console when the passkey is unavailable.
    

#### **Group RAM users**

If your Alibaba Cloud account has multiple RAM users, you can group the RAM users based on their responsibilities and grant permissions to the groups. For more information, see [Overview](/help/en/ram/user-guide/overview-of-a-ram-user-group), [Create a group](/help/en/ram/user-guide/create-a-user-group), and [Grant permissions to a group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group).

#### **Limit source IP addresses used for console logon**

You can configure network access control policies to allow only specified IP addresses or CIDR blocks to log on to the Alibaba Cloud Management Console. This way, only access initiated from a trusted network environment is allowed. For more information, see [Network ACL policies](/help/en/ram/user-guide/manage-security-settings-of-ram-users#3de987a0f2i2t).

### **AccessKey pair management**

#### **Use temporary credentials for access from programs**

Each AccessKey pair consists of an AccessKey ID and an AccessKey secret. An AccessKey pair is a **permanent** access credential that Alibaba Cloud provides for Alibaba Cloud accounts and RAM users. Improper use of AccessKey pairs causes risks. For example, if program developers write plaintext AccessKey pairs in code and upload the code to a public repository such as GitHub, the AccessKey pair is leaked and business loss occurs.

We recommend that you assume a RAM role to obtain a **temporary** STS token instead of using a permanent AccessKey pair. After an STS token is generated, it automatically becomes invalid after the maximum session duration of the RAM role elapses. That significantly reduces the risks of access credential leaks.

STS tokens instead of AccessKey pairs are recommended for programs deployed on Alibaba Cloud. For more information, see [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi).

#### **Avoid hard-coded plaintext AccessKey pairs**

If program developers write plaintext AccessKey pairs in code and upload the code to a code repository such as GitHub, or share the code, the AccessKey pair is leaked.

If an AccessKey pair is required, you can use the Alibaba Cloud Credentials tool or Key Management Service (KMS), or configure system environment variables to manage the AccessKey pair. For more information, see [Manage and use RAM secrets](/help/en/kms/key-management-service/user-guide/manage-and-use-ram-secrets). If an AccessKey pair is leaked, you must use a new AccessKey pair to replace the leaked AccessKey pair at your earliest opportunity. For more information, see [Best practices for using an access credential to call API operations](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi).

#### **Remove RAM users and AccessKey pairs that are no longer required**

If you do not remove the RAM users and AccessKey pairs of resigned employees and former partners, they can still access the cloud resources of the enterprise, and credential thefts may occur. If RAM users and AccessKey pairs are not used for a long period of time and are not managed, thefts cannot be detected in a timely manner.

From September 2024, Alibaba Cloud gradually implements automatic disabling of idle RAM users and AccessKey pairs. The automatic disabling feature disables eligible AccessKey pairs on a daily basis. A RAM user is considered idle if it does not log on to the console within the last two years. An AccessKey pair is considered idle if it is not used within the last two years.

#### **Limit source IP addresses used for AccessKey pair-based API calls**

You can configure AccessKey pair-based policies for network access control to allow only specified IP addresses to call Alibaba Cloud API operations by using AccessKey pairs. This way, API operations are called by using AccessKey pairs in a trusted network environment. For more information, see [Restrict usage with a network ACL](/help/en/ram/user-guide/accesskey-network-access-restriction-policy).

-   If an AccessKey pair is or may be leaked, configure a network access control policy for the AccessKey pair to allow API calls only in a trusted network environment and block suspicious external calls.
    
-   Check the network conditions of each account and configure account-level AccessKey pair-based or AccessKey pair-level policies for network access control to prevent suspicious external calls.
    

## **Permission management**

### **Grant permissions based on the principle of least privilege**

You can attach policies to RAM identities to limit the access permissions of RAM identities to resources. RAM identities are RAM users, RAM user groups, and RAM roles. We recommend that you follow the principle of least privilege and grant only the required permissions to avoid security risks caused by excessive permissions.

Policies are classified into system policies and custom policies. System policies are created and updated by Alibaba Cloud. You can use system policies, but you cannot modify them. Custom policies are created and updated by users. You can create, modify, delete, and upgrade custom policies to meet your business requirements. For more information, see [Policy overview](/help/en/ram/policy-overview). You can use custom policies to implement fine-grained permission management. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).

### **Specify the condition element in policies to enhance security**

You can specify the condition element in custom policies to limit access to resources. For example, you can specify approved time periods and approved IP addresses for resource access. For more information, see [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms),

[Allow or deny access based on IP address](/help/en/ram/access-alibaba-cloud-resources-by-using-a-specific-ip-address-or-cidr-block), [Allow or deny access based on time of day](/help/en/ram/access-alibaba-cloud-in-a-specified-period-of-time), and [Allow or deny access based on method](/help/en/ram/access-alibaba-cloud-by-using-a-specified-method).
