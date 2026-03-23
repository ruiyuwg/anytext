In an enterprise environment, managing cryptographic keys separately across different accounts increases costs and complicates security policy enforcement. The cross-account sharing feature of Key Management Service (KMS) lets you securely share a single KMS instance with multiple member accounts within your organization. This streamlines key management, centralizes security control, and optimizes costs.

## How it works

KMS instance sharing is built on Alibaba Cloud's [Resource Directory](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#concept-2436329) and [Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview#concept-2436329) services. The workflow is as follows:

1.  **Set up an organization**: Use Resource Directory to organize all relevant Alibaba Cloud accounts into a single organization for unified management.
    
2.  **Share resources**: The resource owner creates a resource share using the Resource Sharing service, adds the KMS instance as a shared resource, and specifies other members in the Resource Directory as principals.
    
3.  **Grant permissions**:
    
    -   **Permission policy**: When creating the share, the resource owner attaches a predefined permission policy (`AliyunRSDefaultPermissionKMSInstance`). The Resource Sharing service then applies this policy to the specified principals.
        
    -   **Sharing model**: Two modes, **Independent Ownership** and **Joint Ownership**, define permissions for using resources (keys and secrets) within the KMS instance.
        
    -   **RAM user**: To grant permissions for specific operations, such as `kms:Encrypt` and `kms:Decrypt`, the principal must configure a resource access management (RAM) policy for its RAM identities (RAM users or roles).
        

**Use case example**: Department A in an enterprise purchases a KMS instance. If department B also needs to use a KMS instance, the enterprise can centralize its Alibaba Cloud accounts using Resource Directory and then share department A's KMS instance using the Resource Sharing service. The architecture is shown below:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9350188571/CAEQThiBgID1wMb9yxkiIDVhMzgyYzVlNzdmNDRlOTdhZGMyMzdhMjhhMDkwNmJl5737923_20250923162355.224.svg)

## Usage notes

-   **Instance requirements**:
    
    You can only share enabled software key management instances and hardware key management instances.
    
-   **Account and organization requirements**:
    
    -   The instance owner and the principals must belong to the same verified enterprise.
        
    -   The instance owner and the principals must belong to the same **resource directory**.
        

## Choose a sharing mode

**Feature**

**Independent ownership**

**Joint ownership**

**Use cases**

Required when you have cross-account secrets with the same name or need to isolate permissions.

Ideal for internal collaboration where a central team (such as IT or security) needs to manage and audit all keys and secrets.

**Core characteristic**

**Independent data ownership**: The resource owner cannot manage or use the keys and secrets created by the principal.

**Shared data ownership**: The resource owner can manage and use the keys and secrets created by the principal.

**Cross-account resources with the same name**

**Allowed**. The principal and the resource owner can create secrets with the same name within the instance.

**Not allowed**. All key and secret names within the instance must be unique.

**Mode change**

Cannot be changed to joint ownership.

Can be changed to independent ownership.

For more information about the permission differences between the two modes, see [Appendix: Feature permissions in different sharing modes](#bf0c295344umo).

## Procedure

### **Configure sharing (instance owner)**

#### **Step 1: Prepare a resource directory and enable intra-organization sharing**

1.  **Enable Resource Directory**:
    
    1.  **Log on to the console**
        
        Use the management account to log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/).
        
    2.  **Enable Resource Directory**
        
        In the navigation pane on the left, select **Resource Directory** > **Enable Resource Directory**. Click **Enable Resource Directory**. For detailed instructions, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-hyc-zp1-dhb).
        
    3.  **Create a folder**
        
        In the navigation pane on the left, select **Resource Directory** > **Management**.In the upper-right corner of the page that appears, click **Resource Organization View**. In the resource directory tree on the left, click the target folder. On the **Member** tab, click **Create Folder**. Enter a **Folder Name** and click **OK**. For detailed instructions, see [Create a folder](/help/en/resource-management/resource-directory/user-guide/create-a-folder#task-hjk-vq1-dhb).
        
    4.  **Configure members**
        
        On the **Member** tab, click **Create Member** or **Invite Member**, and follow the instructions in [Create a member](/help/en/resource-management/resource-directory/user-guide/create-a-member#task-tzh-bs1-dhb), [Invite an Alibaba Cloud account to join a resource directory](/help/en/resource-management/resource-directory/user-guide/invite-an-alibaba-cloud-account-to-join-a-resource-directory#task-2039327), and [Move a member](/help/en/resource-management/resource-directory/user-guide/move-a-member#task-fkr-3s1-dhb) to configure information such as the account name, account ID, and billing account.
        
        ## Invite members
        
        **Parameter**
        
        **Description**
        
        **Account ID or Logon Email Address**
        
        -   Account ID: To obtain the ID, see [How do I view the ID of an Alibaba Cloud account?](/help/en/resource-management/resource-directory/support/how-do-i-view-the-id-of-an-alibaba-cloud-account)
            
        -   Logon email: The email address used to register the account. If no logon email is associated with the account, enter the account ID instead.
            
        
        You can enter multiple account IDs separated by commas (,) to invite them in batches.
        
        **Remarks**
        
        Enter a remark for the invitation to help the invitee verify the invitation's authenticity and expedite approval.
        
        **Tag**
        
        Bind tags to the member for easier tag-based management.
        
        **Parent Folder**
        
        The folder to which the account belongs. By default, the invited account is placed in the root folder. Click **Modify** to move the member to a different folder as needed. You can also change this after the invitation is accepted.
        
        ## **Create member**
        
        **Parameter**
        
        **Description**
        
        **Alibaba Cloud Account Name**
        
        -   The Alibaba Cloud account name is the unique identifier for the member and must be unique within the resource directory.
            
        -   The name must be 2 to 50 characters long and can contain letters, numbers, and the special characters `_.-`. It must start and end with a letter or a number and cannot contain consecutive special characters `_.-`.
            
        
        **Display Name**
        
        The display name must be 2 to 50 characters long and can contain Chinese characters, letters, digits, and the special characters `_.-`.
        
        **Billing Account**
        
        Set the account responsible for paying the new member's fees.
        
        -   **Use Management Account for Settlement of New Member**: Designates the management account of the Resource Directory as the billing account.
            
        -   **Use Existing Member for Settlement of New Member**: Designates an existing member of the Resource Directory as the billing account. In the **Select an existing member** panel, choose a member from the directory tree.
            
            **Note**
            
            A member cannot be selected if it cannot make payments. For more information, see [Overview](/help/en/user-center/trusteeship#topic-2233678).
            
        -   **Use New Member Itself for Settlement**: Designates the current member as its own billing account.
            
        
        **Tag**
        
        Bind tags to the member for easier tag-based management.
        
        **Parent Folder**
        
        By default, the created member is placed in the root folder. Click **Modify** to move the member to a different folder as needed. You can also change this after the member is created.
        
2.  **Enable resource sharing**
    
    After you enable resource sharing, a resource owner, which can be a management account or a member, can share resources with the entire Resource Directory, its folders, or specific members. For more information, see [Enable resource sharing in a resource directory](/help/en/resource-management/resource-sharing/user-guide/enable-resource-sharing#task-2139126).
    
    1.  Use the management account of the Resource Directory to log on to the [Resource Sharing console](https://resourcemanager.console.alibabacloud.com/resource-share). In the navigation pane on the left, select **Resource Sharing** > **Settings**.
        
    2.  Click **Enable**, and then click **OK** in the **Resource Sharing Service-Linked Role** dialog box.
        
        **Note**
        
        The system automatically creates a service-linked role named `AliyunServiceRoleForResourceSharing` to retrieve organization information from Resource Directory. For more information, see [Service-linked role for Resource Sharing](/help/en/resource-management/security-and-compliance/service-linked-role-for-resource-sharing#concept-2469063).
        

#### **Step 2: Configure the shared KMS instance**

This section guides the resource owner on how to share a KMS instance with one or more principals.

1.  **Log on to the console**
    
    As the instance owner, log on to the [Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). Select a region in the top menu bar, and in the navigation pane on the left, click **Instances**.
    
2.  **Select a sharing mode**
    
    On the **Instances** page, find the target KMS instance and click **Share Resources** in the **Actions** column. In the **RD Multi-account Sharing Settings** panel, [select a sharing mode](#47f3617391h4a).
    
3.  **Configure resource shares**
    
    In the **Add to Resource Share** panel, select an existing resource share or create a new one.
    
    **Comparison**
    
    **Create (Recommended)**
    
    **Select an existing resource share**
    
    **Use cases**
    
    Use this when sharing for the first time or when you need to isolate permissions.
    
    Use this to add the current instance to an existing resource share and reuse its principals and permissions.
    
    **Features**
    
    -   **Permission isolation**: Contains only the current KMS instance with independent permissions.
        
    -   **Scope of control**: Only newly added accounts can use the shared instance.
        
    
    -   **Permission sharing**:
        
        -   All existing principals of the resource share will automatically gain access to the new instance, consuming the instance's access management quota.
            
        -   Any permission changes to this resource share will affect all resources within it.
            
    -   **Scope of control**: Both the original principals and newly added accounts can use the shared instance.
        
    
    **Warning**
    
    This may lead to unintended permission escalation and quota consumption. Proceed with caution.
    
4.  **Configure sharing parameters**
    
    Specify the following configurations for the selected method and click **OK**.
    
    ## **Create (Recommended)**
    
    -   **Resource Share Name**
        
        The name can be up to 50 characters in length and can contain Chinese characters, letters, digits, and the following special characters: ., \_, and -.
        
    -   **Principals**
        
        Specify the accounts that can use this KMS instance.
        
        **Important**
        
        -   **We recommend adding by Folder or Alibaba Cloud Account** for fine-grained control. Each addition consumes the instance's **Access Management Quota**.
            
        -   If you add or remove principals from an existing resource share, the change affects **all resources** within that share.
            
        
        Add the following three types of principals:
        
        -   **Alibaba Cloud Account**: Share resources only with specified Alibaba Cloud accounts (IDs).
            
        -   **Resource Directory Organization**: Share resources with all member accounts in the entire resource directory, including members added later.
            
        -   **Folder (Organizational Unit)**: Enter the folder ID to share resources with all members in the folder, including members added later. The folder ID format is `fd-xxxxxxxx`. To view folder information, see [View the basic information of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder).
            
    -   **Add Permissions**
        
        Configure permissions for the principal. For details, see the [Permission Library](https://resourcemanager.console.alibabacloud.com/resource-shares/permissions) in the Resource Sharing console.
        
        -   **AliyunRSDefaultPermissionKMSInstance** (Recommended): Two versions (v1, v2) are available. New shares default to using version v2. To check the version, see [View permission details](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing#section-gzd-h3y-68o).
            
        -   **AliyunRSPermissionKMSInstanceReadWrite** (Deprecated): This permission is still functional for existing resource shares but is not recommended for new ones.
            
    
    ## **Select an existing resource share**
    
    -   **Select Resource Share**
        
        The system synchronizes all resource shares in the current account. For more information, see [Create a resource share](/help/en/resource-management/resource-sharing/user-guide/create-a-resource-share-1).
        
    -   **Shared Resources**
        
        This list automatically displays the existing resources in the selected resource share (read-only). After this operation, the current KMS instance will be added to this share.
        
    -   **Principals**
        
        Specify the accounts that can use this KMS instance.
        
        **Important**
        
        -   **We recommend adding by Folder or Alibaba Cloud Account** for fine-grained control. Each addition consumes the instance's **Access Management Quota**.
            
        -   If you add or remove principals from an existing resource share, the change affects **all resources** within that share.
            
        
        Add the following three types of principals:
        
        -   **Alibaba Cloud Account**: Share resources only with specified Alibaba Cloud accounts (IDs).
            
        -   **Resource Directory Organization**: Share resources with all member accounts in the entire resource directory, including members added later.
            
        -   **Folder (Organizational Unit)**: Enter the folder ID to share resources with all members in the folder, including members added later. The folder ID format is `fd-xxxxxxxx`. To view folder information, see [View the basic information of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder).
            
    
    -   **Add Permissions**
        
        Configure permissions for the principal. For details, see the [Permission Library](https://resourcemanager.console.alibabacloud.com/resource-shares/permissions) in the Resource Sharing console.
        
        -   **AliyunRSDefaultPermissionKMSInstance** (Recommended): Two versions (v1, v2) are available. New shares default to using version v2. To check the version, see [View permission details](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing#section-gzd-h3y-68o).
            
        -   **AliyunRSPermissionKMSInstanceReadWrite** (Deprecated): If you previously used this permission, continue to use it.
            
    

### **Use the shared instance (principal)**

As the principal, you must first verify that the instance has been shared successfully. You can then create and use keys or secrets within the shared instance.

1.  **Log on to the console**
    
    The principal logs on to the [Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). On the **Instances** page, find a KMS instance with a **Being Shared** tag.
    
2.  **Create keys and secrets**
    
    On the **Keys** or **Secrets** tab, click **Create Key** or **Create Secret**. Select the shared Instance for **KMS Instance**. For other settings, see [Create a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#443e78c034zi7) and [Create a secret](/help/en/kms/key-management-service/getting-started/getting-started-with-secrets-manager#section-str-ldc-v3y).
    
3.  **Grant permissions to RAM users**:
    
    Configure RAM policies for your RAM users or roles to grant permissions for specific KMS API calls, such as `kms:Encrypt` and `kms:Decrypt`. For instructions, see [Use RAM for access control](/help/en/kms/key-management-service/security-and-compliance/identity-management-and-access-control/).
    
4.  **Use keys and secrets**
    
    After successfully creating keys and secrets, you can use them in other Alibaba Cloud services or self-managed applications. For details, see the following documents:
    
    -   Server-side encryption for cloud products: [Overview of KMS integration for cloud products](/help/en/kms/key-management-service/user-guide/integration-with-kms#concept-2318878) and [Cloud products that support KMS integration](/help/en/kms/key-management-service/user-guide/alibaba-cloud-services-that-can-be-integrated-with-kms#concept-2318937).
        
    -   Integrate secrets with cloud services: [Integrate cloud products with KMS secrets](/help/en/kms/key-management-service/user-guide/integrate-kms-secrets-into-cloud-services/).
        
    -   Integrate KMS with self-managed applications (for keys and secrets): [Self-built application integration with KMS](/help/en/kms/key-management-service/user-guide/application-access/).
        

## Manage and maintain the share

### **Modify the principals of a resource share**

-   **From the KMS console**
    
    1.  As the instance owner, [log on to the Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top menu bar, select a region. In the navigation pane on the left, click **Instances**.
        
    2.  On the **Instances** page, click the **Software Key Management** tab or the **Hardware Key Management** tab based on the KMS instance type.
        
    3.  Find the KMS instance that you want to manage and click **Share Resources** in the **Actions** column.
        
    4.  In the **RD Multi-account Share Settings** panel, select a **Resource Share**. In the **Principals** section, click **Edit** to add or remove principals, and then click **OK**.
        
-   **From the Resource Sharing console**
    
    For detailed instructions, see [Modify a resource share](/help/en/resource-management/resource-sharing/user-guide/modify-a-resource-share#task-2436333).
    

### Revoke sharing for a KMS instance

Revoking a share is performed by deleting the resource share. After the resource share is deleted, all principals in the resource share can no longer access the resources in the resource share.

**Important**

-   Before revoking a share, **the principal must delete all keys and secrets they created**. Otherwise, the revocation will fail. Ensure that no associated resources are still in use to avoid business disruptions.
    
-   Perform this operation only in the Resource Sharing console.
    

1.  Log on to the [Resource Sharing console](https://resourcemanager.console.alibabacloud.com/resource-share) using a management account.
    
2.  In the left-side navigation pane, choose **Resource Sharing** > **Resources I Share**. On the page that opens, find the target resource share and click its ID.
    
3.  In the upper-right corner of the page that appears, click **Delete Resource Share**. In the **Delete Resource Share** dialog box, click **OK**.
    

## Apply in production

When deploying and using a shared instance in a production environment, follow these guidelines to ensure system stability, security, and compliance.

-   **Network connectivity**
    
    If a principal's self-managed application is deployed in a VPC and needs to access KMS through a private gateway, the instance owner must attach the principal's VPC to the shared KMS instance to enable internal-facing access. For instructions, see [Access a KMS instance from multiple VPCs in the same region](/help/en/kms/key-management-service/user-guide/access-a-kms-instance-from-multiple-vpcs-in-the-same-region).
    
-   **Audit and compliance**
    
    -   **Resource owner**: Must enable ActionTrail for your account to record all management operations on the shared instance and key operations performed by **principals**.
        
    -   **Principal**: We recommend enabling ActionTrail to record all API calls within your account.
        
-   **Change management**:
    
    -   **Revoke sharing**: Before revoking a sharing or deleting a resource share, **the principal must delete all keys and secrets they created in the shared instance**. If any resources remain, the revocation fails. Ensure that no associated resources are in use to avoid business disruptions. To learn how to revoke a share, see [Revoke a KMS instance share](#d51f04c043wbc).
        
    -   **Modify principals**: Adding or removing principals from a resource share affects all resources within that share. To avoid permission conflicts, we recommend creating separate resource shares for different business scenarios or teams. To learn how to make changes, see [Modify the principal of a resource share](#ccf553d0430ol).
        

## Limitations and quotas

-   **Feature limitations**
    
    -   Default keys cannot be shared, such as `alias/acs/oss`.
        
    -   Principals cannot use a shared KMS instance across regions.
        
    -   In **Joint Ownership** mode, all key and secret names within the instance must be globally unique.
        
-   **Access Management Quota**
    
    Sharing a KMS instance consumes the resource owner's **Access Management Quota**. If the quota is insufficient, [upgrade the KMS instance](/help/en/kms/key-management-service/user-guide/manage-kms-instances#6c6e73b014d8y) promptly.
    

**Important**

-   **Quota calculation**: `Used quota = Number of shared accounts + Number of attached VPCs`.
    
    For example, sharing an instance with 3 accounts and attach it to 2 VPCs consumes a quota of 5.
    
-   **Quota change effectiveness**: If adding a principal fails due to insufficient quota, the system will **not** automatically retry the failed operation after you increase the instance quota. Manually remove the principal (account or folder) from the Resource Share and then add it again.
    

## **FAQ**

-   **After configuration, why does a principal receive an "AccessDenied" or "Forbidden" error when calling an API?**
    
    Check the following four permission settings in order:
    
    1.  **Resource sharing permissions**: In the **Resource Sharing** console, confirm that the principal's account is added to the resource share and that the sharing status is active.
        
    2.  **KMS instance permission**: Verify that the permission associated with the resource share is `AliyunRSDefaultPermissionKMSInstance`.
        
    3.  **RAM call permission**: Verify that the RAM user or RAM role making the API call has been granted a RAM policy with permissions to access KMS such as `kms:Encrypt` and `kms:Decrypt`.
        
    4.  **Resource ownership**: In **Independent Ownership** mode, verify that the current principal created the key or secret you are operating on.
        
-   **Why do I get a name conflict error when creating a secret in joint ownership mode?**
    
    In joint ownership mode, all key and secret names within the KMS instance must be unique. The resource owner and principals are not allowed to create resources with the same name.
    
    -   Solution 1: Choose a different name for the secret.
        
    -   Solution 2: If your business scenario requires support for cross-account keys or secrets with the same name, switch the sharing mode to **Independent Ownership**.
        
        **Warning**
        
        This change from joint ownership to independent ownership is irreversible. Carefully evaluate the impact before proceeding.
        

## **Appendix:** Feature permissions in different sharing modes

The following tables detail the operational permissions for the resource owner and principal for each feature in the two sharing modes.

## Joint ownership

**Feature**

**Sub-feature**

**Instance owner**

**Principal**

Instance management

View KMS instance details

Supported

Not supported

Configure multi-VPC access to KMS instances

Upgrade instances

Renew instances

Revoke sharing

Key management

Create keys

Supported

Supported

View key metadata

Supported

**Note**

Applies to all keys, including those created by principals.

Supported

**Note**

Only applies to keys created by the principal.

Set key rotation

Schedule key deletion

Enable deletion protection

Create and manage key aliases

Add and manage key tags

Cryptographic operations

Not applicable

Secret management

Create secrets

Supported

Supported

View secret metadata

Supported

**Note**

Applies to all secrets, including those created by principals.

Supported

**Note**

Only applies to secrets created by the principal.

Delete secrets

Set secret rotation

Add and manage secret tags

Get secret value

Not applicable

Backup management

Not applicable

Supported

**Note**

Can back up all keys and secrets, including those created by principals.

Not supported

Application access

Create application access points

Supported

Supported

## Independent ownership

**Feature**

**Sub-feature**

**Instance owner**

**Principal**

Instance management

View KMS instance details

Supported

Not supported

Configure multi-VPC access for KMS instances

Upgrade instances

Renew instances

Revoke sharing

Key management

Create keys

Supported

Supported

View key metadata

Supported

**Note**

Only keys created by the instance owner are supported.

Supported

**Note**

Only keys created by principals are supported.

Set key rotation

Schedule key deletion

Enable deletion protection

Create and manage key aliases

Add and manage key tags

Cryptographic operations

Not applicable

Secret management

Create secrets

Supported

Supported

View secret metadata

Supported

**Note**

Only keys created by the instance owner are supported.

Supported

**Note**

Only secrets created by principals are supported.

Delete secrets

Set secret rotation

Add and manage secret tags

Get secret value

Not applicable

Backup management

Not applicable

Supported

**Note**

Only keys created by the instance owner can be backed up.

Not supported

Application access

Create application access points

Supported

Supported
