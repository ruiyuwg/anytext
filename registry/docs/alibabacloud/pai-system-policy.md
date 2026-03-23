Lists all system policies that PAI supports with their corresponding permissions for granting to RAM identities.

## What is a system policy

An access policy is a collection of permissions described by specific syntax. It precisely defines the authorized resource set, action set, and conditions. Alibaba Cloud Resource Access Management (RAM) provides two types of access policies: system policies and custom policies. System policies are created and maintained by Alibaba Cloud. Use system policies without modification. Create, update, and delete custom policies as needed. During product iterations, PAI adds new permissions to system policies to support new features and capabilities. Updates to system policies affect all RAM identities granted the policies, such as RAM users, RAM user groups, and RAM roles. For more information about RAM access policies, see [Overview of access policies](/help/en/ram/policy-overview).

**Note**

-   Product system policies enable quick start. Simple configurations allow access to the product and its dependent products from the console. System policies also apply to access methods such as OpenAPI or the command-line interface (CLI). However, for better data security, use custom policies in these scenarios to grant specific API access permissions to users and applications as needed.
    
-   System policies are categorized into product system policies, service role policies, and service-linked role policies. Some cloud products provide only one or two of these policy types. The available policy types vary by product and are specified in this topic.
    

## Product system policies

### **Platform for AI (PAI)**

-   **AliyunPAIFullAccess**
    
    Grant the AliyunPAIFullAccess policy to a RAM identity. This policy grants permissions required to manage PAI.
    
    [View policy details](/help/en/ram/developer-reference/aliyunpaifullaccess)
    
-   **AliyunPAIReadOnlyAccess**
    
    Grant the AliyunPAIReadOnlyAccess policy to a RAM identity. This policy grants read-only permissions for PAI.
    
    [View policy details](/help/en/ram/developer-reference/aliyunpaireadonlyaccess)
    

### **Dataset Accelerator (PAI-DatasetAcc)**

-   **AliyunDatasetAccFullAccess**
    
    Grant the AliyunDatasetAccFullAccess policy to a RAM identity. This policy grants permissions required to manage the dataset acceleration service (DatasetAcc).
    
    [View policy details](/help/en/ram/developer-reference/aliyundatasetaccfullaccess)
    
-   **AliyunDatasetAccReadOnlyAccess**
    
    Grant the AliyunDatasetAccReadOnlyAccess policy to a RAM identity. This policy grants read-only permissions for the dataset acceleration service (DatasetAcc).
    
    [View policy details](/help/en/ram/developer-reference/aliyundatasetaccreadonlyaccess)
    

### **Elastic Algorithm Service (PAI-EAS)**

-   **AliyunPAIEASFullAccess**
    
    Grant the AliyunPAIEASFullAccess policy to a RAM identity. This policy grants permissions required to manage Elastic Algorithm Service (EAS).
    
    [View policy details](/help/en/ram/developer-reference/aliyunpaieasfullaccess)
    
-   **AliyunPAIEASReadOnlyAccess**
    
    Grant the AliyunPAIEASReadOnlyAccess policy to a RAM identity. This policy grants read-only permissions for Elastic Algorithm Service (EAS).
    
    [View policy details](/help/en/ram/developer-reference/aliyunpaieasreadonlyaccess)
    

## **Service-linked role policies**

### **AliyunServiceRolePolicyForPaiLangStudio**

PAI uses the service-linked role AliyunServiceRoleForPaiLangStudio to access resources in other Alibaba Cloud services. AliyunServiceRolePolicyForPaiLangStudio is an authorization policy created for the AliyunServiceRoleForPaiLangStudio role. This policy is defined and used by PAI. Cannot modify or delete this policy. Do not attach this policy to RAM identities other than the service-linked role.

[View policy details](/help/en/ram/developer-reference/aliyunservicerolepolicyforpailangstudio)

### **AliyunServiceRolePolicyForPAIABTest**

PAIABTest uses the service-linked role AliyunServiceRoleForPAIABTest to access resources in other Alibaba Cloud services. AliyunServiceRolePolicyForPAIABTest is an authorization policy created for the AliyunServiceRoleForPAIABTest role. This policy is defined and used by PAIABTest. Cannot modify or delete this policy. Do not attach this policy to RAM identities other than the service-linked role.

[View policy details](/help/en/ram/developer-reference/aliyunservicerolepolicyforpaiabtest)

## Authorization reference

By default, a RAM identity does not have any permissions. An Alibaba Cloud account administrator must grant permissions to a RAM identity before the identity can access resources that belong to the Alibaba Cloud account. To ensure data security, follow the Principle of Least Privilege (PoLP) and grant only necessary permissions. For more information about how to grant permissions, see the following topics:

-   [Manage permissions for a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
