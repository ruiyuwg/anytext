## **What is a system policy?**

A policy defines a set of permissions that are described based on the policy structure and syntax. You can use policies to describe the authorized resource sets, authorized operation sets, and authorization conditions. Alibaba Cloud Resource Access Management (RAM) provides system policies and custom policies. All system policies are created and updated by Alibaba Cloud. You can use system policies, but you cannot modify them. You can manage and update custom policies based on your business requirements. You can create, update, and delete custom policies. During service iteration, ECS adds new permissions to system policies to support new features and capabilities. The update of a system policy affects all RAM identities to which the policy is attached, including RAM users, RAM user groups, and RAM roles. For more information about RAM policies, see [Policy overview](/help/en/ram/policy-overview).

**Note**

System policies are designed for new users to quickly get started with Alibaba Cloud products on the management console, though they also enable the use of more advanced methods like API operations or CLI commands. If you are familiar with the advanced methods, we recommend that you use custom policies to implement finer-grained control on who is permitted to call what API operations, thereby improving security.

System policies can be classified into service system policies, service role policies, and service-linked role policies. Some cloud services provide only one or two of the three types of policies. For more information, see the policy types that are described in the following section.

## **Service system policies**

### **AliyunECSAssistantFullAccess**

The AliyunECSAssistantFullAccess policy: Provides full access to Cloud Assistant via Management Console. It can be attached to RAM identities.

[AliyunECSAssistantFullAccess](/help/en/ram/developer-reference/aliyunecsassistantfullaccess)

### **AliyunECSAssistantReadonlyAccess**

The AliyunECSAssistantReadonlyAccess policy: Provides read-only access to Cloud Assistant via Management Console. It can be attached to RAM identities.

[AliyunECSAssistantReadonlyAccess](/help/en/ram/developer-reference/aliyunecsassistantreadonlyaccess)

### **AliyunECSExtensionsFullAccess**

The AliyunECSExtensionsFullAccess policy: Provides full access to ECS Extensions via Management Console. It can be attached to RAM identities.

[AliyunECSExtensionsFullAccess](/help/en/ram/developer-reference/aliyunecsextensionsfullaccess)

### **AliyunECSFullAccess**

The AliyunECSFullAccess policy: Provides full access to Elastic Compute Service(ECS) via Management Console. It can be attached to RAM identities.

[AliyunECSFullAccess](/help/en/ram/developer-reference/aliyunecsfullaccess)

### **AliyunECSNetworkInterfaceManagementAccess**

The AliyunECSNetworkInterfaceManagementAccess policy: Provides full access to ECS Network Interface. It can be attached to RAM identities.

[AliyunECSNetworkInterfaceManagementAccess](/help/en/ram/developer-reference/aliyunecsnetworkinterfacemanagementaccess)

### **AliyunECSReadOnlyAccess**

The AliyunECSReadOnlyAccess policy: Provides read-only access to Elastic Compute Service(ECS) via Management Console. It can be attached to RAM identities.

[AliyunECSReadOnlyAccess](/help/en/ram/developer-reference/aliyunecsreadonlyaccess)

### **AliyunECSWorkbenchFullAccess**

The AliyunECSWorkbenchFullAccess policy: Provides full access to ECS-Workbench via Management Console. It can be attached to RAM identities.

[AliyunECSWorkbenchFullAccess](/help/en/ram/developer-reference/aliyunecsworkbenchfullaccess)

## **Service role policies**

### **AliyunECSCloudBoxImageImportDefaultRolePolicy**

The AliyunECSCloudBoxImageImportDefaultRolePolicy policy is the dedicated authorization policy of the AliyunECSCloudBoxImageImportDefaultRole service role. By default, ECS uses this role to import the local OSS image of the cloud box. Do not attach this policy to a RAM identity other than the service role. If a service provides precise authorization capabilities, refer to the documentation provided by the service.

[AliyunECSCloudBoxImageImportDefaultRolePolicy](/help/en/ram/developer-reference/aliyunecscloudboximageimportdefaultrolepolicy)

### **AliyunECSInstanceForSMCRolePolicy**

The AliyunECSInstanceForSMCRolePolicy policy is the dedicated authorization policy of the AliyunECSInstanceForSMCRole service role. By default, ECS will use this role to access your resources in other services. Do not attach this policy to a RAM identity other than the service role. If a service provides precise authorization capabilities, refer to the documentation provided by the service.

[AliyunECSInstanceForSMCRolePolicy](/help/en/ram/developer-reference/aliyunecsinstanceforsmcrolepolicy)

### **AliyunKubernetesWorkerForEMRRolePolicy**

The AliyunKubernetesWorkerForEMRRolePolicy policy is the dedicated authorization policy of the AliyunKubernetesWorkerForEMRRole service role. By default, EMR on ACK will use this role to access your resources in other services. Do not attach this policy to a RAM identity other than the service role. If a service provides precise authorization capabilities, refer to the documentation provided by the service.

[AliyunKubernetesWorkerForEMRRolePolicy](/help/en/ram/developer-reference/aliyunkubernetesworkerforemrrolepolicy)

### **AliyunOOSPrivateCloudDefaultRolePolicy**

The AliyunOOSPrivateCloudDefaultRolePolicy policy is the dedicated authorization policy of the AliyunOOSPrivateCloudDefaultRole service role. By default, ECS will use this role to access your resources in other services. Do not attach this policy to a RAM identity other than the service role. If a service provides precise authorization capabilities, refer to the documentation provided by the service.

[AliyunOOSPrivateCloudDefaultRolePolicy](/help/en/ram/developer-reference/aliyunoosprivateclouddefaultrolepolicy)

## **Service-linked role policies**

### **AliyunServiceRolePolicyForECSImageBuilder**

ECS assumes the AliyunServiceRolePolicyForECSImageBuilder service-linked role to access the resources in other cloud services. The AliyunServiceRolePolicyForECSImageBuilder policy is the dedicated authorization policy of the AliyunServiceRoleForECSImageBuilder service-linked role. This policy is defined and used by ECS. You cannot modify or delete the policy. Do not attach this policy to a RAM identity other than the service-linked role.

[AliyunServiceRolePolicyForECSImageBuilder](/help/en/ram/developer-reference/aliyunservicerolepolicyforecsimagebuilder)

### **AliyunServiceRolePolicyForECSLicenseConversion**

ECS assumes the AliyunServiceRolePolicyForECSLicenseConversion service-linked role to access the resources in other cloud services. The AliyunServiceRolePolicyForECSLicenseConversion policy is the dedicated authorization policy of the AliyunServiceRoleForECSLicenseConversion service-linked role. This policy is defined and used by ECS. You cannot modify or delete the policy. Do not attach this policy to a RAM identity other than the service-linked role.

[AliyunServiceRolePolicyForECSLicenseConversion](/help/en/ram/developer-reference/aliyunservicerolepolicyforecslicenseconversion)

### **AliyunServiceRolePolicyForECSPrivateCloudConsole**

ECS assumes the AliyunServiceRolePolicyForECSPrivateCloudConsole service-linked role to access the resources in other cloud services. The AliyunServiceRolePolicyForECSPrivateCloudConsole policy is the dedicated authorization policy of the AliyunServiceRoleForECSPrivateCloudConsole service-linked role. This policy is defined and used by ECS. You cannot modify or delete the policy. Do not attach this policy to a RAM identity other than the service-linked role.

[AliyunServiceRolePolicyForECSPrivateCloudConsole](/help/en/ram/developer-reference/aliyunservicerolepolicyforecsprivatecloudconsole)

### **AliyunServiceRolePolicyForECSSecurityGroupSnapshot**

ECS assumes the AliyunServiceRolePolicyForECSSecurityGroupSnapshot service-linked role to access the resources in other cloud services. The AliyunServiceRolePolicyForECSSecurityGroupSnapshot policy is the dedicated authorization policy of the AliyunServiceRoleForECSSecurityGroupSnapshot service-linked role. This policy is defined and used by ECS. You cannot modify or delete the policy. Do not attach this policy to a RAM identity other than the service-linked role.

[AliyunServiceRolePolicyForECSSecurityGroupSnapshot](/help/en/ram/developer-reference/aliyunservicerolepolicyforecssecuritygroupsnapshot)

### **AliyunServiceRolePolicyForEcsInsight**

ECS assumes the AliyunServiceRolePolicyForEcsInsight service-linked role to access the resources in other cloud services. The AliyunServiceRolePolicyForEcsInsight policy is the dedicated authorization policy of the AliyunServiceRoleForEcsInsight service-linked role. This policy is defined and used by ECS. You cannot modify or delete the policy. Do not attach this policy to a RAM identity other than the service-linked role.

[AliyunServiceRolePolicyForEcsInsight](/help/en/ram/developer-reference/aliyunservicerolepolicyforecsinsight)

## **References**

By default, RAM identities do not have any permissions. RAM identities can access cloud resources within an Alibaba Cloud account only after an account administrator grants the required permissions to the RAM identities. To ensure resource security, we recommend that you grant only the required permissions to the RAM identities based on the principle of least privilege. For more information, see the following topics:

-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
