Accessing a Container Service for Kubernetes (ACK) cluster requires a dual authorization process involving both Resource Access Management (RAM) and Kubernetes Role-Based Access Control (RBAC). By default, only the Alibaba Cloud account and the cluster creator have full administrative permissions. Other RAM users or RAM roles must first be granted RAM permissions to access the cluster, then be granted RBAC permissions to operate on Kubernetes resources within it.

## **How it works**

ACK's [authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/) model integrates two distinct layers: Alibaba Cloud RAM and Kubernetes [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/). This creates a complete authorization chain from the cloud platform down to individual cluster resources.

-   [RAM](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy): Controls **who can access the cluster**. It operates at the cloud resource level, managing permissions for API calls to ACK and its dependent services.
    
-   RBAC: Controls **what a user can do inside the cluster**. It provides fine-grained authorization within Kubernetes, defining which users can perform specific actions (such as create or delete) on specific types of resources (such as Pods or Deployments).
    

### Kubernetes RBAC mechanism

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7609622771/CAEQTBiBgIDaq4T0yhkiIDE2NTM0MDQ1YTYzZTRlNzNhMmJiMGYxZDZkZjdhZDg04670525_20240910161135.613.svg)

RBAC permissions are managed through two pairs of objects:

-   `ClusterRole` and `ClusterRoleBinding`: A `ClusterRole` defines a set of permissions that apply **cluster-wide**. It is bound to a user or role using a `ClusterRoleBinding`.
    
-   `Role` and `RoleBinding`**:** A `Role` defines permissions that are scoped to a **single namespace**. It is bound to a user or role within that namespace using a `RoleBinding`.
    

## **Use case 1: Grant RBAC permissions using an Alibaba Cloud account**

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Authorizations**.
    
2.  Grant permissions to a RAM user or RAM role.
    
    -   Grant permissions to a RAM user: On the **RAM Users** tab, find the one to authorize and click **Modify Permissions** in the **Actions** column.
        
    -   To grant permissions to a RAM role: On the **RAM Roles** tab, select the one to authorize and click **Modify Permissions**.
        
3.  In the **Permission Management** panel, click **\+ Add Permissions**, select the scope (either a specific cluster or namespace), and choose a predefined role to grant the desired level of access.
    

## **Use case 2:** Grant RBAC permissions **using** a RAM user or RAM role

By default, a RAM user or RAM role cannot grant RBAC permissions to other identities. To delegate this responsibility, you can designate a RAM user or role as a **permissions administrator** to grant RBAC permissions to other users.

### **Step 1:** Designate **a RAM user or role as a permission administrator**

#### **1\.** Grant **the** necessary **RAM permissions**

##### **Method 1: System policy authorization**

**Important**

The AliyunRAMReadOnlyAccess and AliyunCSFullAccess system policies grant broad permissions. If you require fine-grained authorization, use [Method 2: Fine-grained authorization with a custom policy](#0de145e26cspj).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) using an Alibaba Cloud account.
    
    -   For a RAM user: In the left navigation pane, choose **Identities** > **Users**, find the one to authorize, and click **Add Permissions** in the **Actions** column.
        
    -   For a RAM role: In the left navigation pane, choose **Identities** > **Roles**, find the one to authorize, and click **Grant Permissions** in the **Actions** column.
        
    
2.  Set **Resource Scope** to **Account**. In the **Policy** section, select the `AliyunRAMReadOnlyAccess` and `AliyunCSFullAccess` system policies, and complete the authorization.
    

##### **Method 2: Fine-grained authorization with a custom policy**

A permission administrator must have permissions to perform the following operations:

-   View information about other RAM identities.
    
-   View cluster lists and details.
    
-   View existing RBAC configurations for a cluster.
    
-   Grant RBAC permissions in a cluster.
    

Log on to the [RAM console](https://ram.console.alibabacloud.com/) and attach the following custom policy to the target RAM user or role. For more information, see [Grant permissions using custom policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#context-2s2-5nd-595).

```
{
    "Statement": [{
            "Action": [
                "ram:Get*",
                "ram:List*",
                "cs:Get*",
                "cs:Describe*",
                "cs:List*",
                "cs:GrantPermission"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ],
    "Version": "1"
}
```

#### **2\.** Grant **RBAC administrator permissions**

Log on to the [ACK console](https://cs.console.alibabacloud.com/) using an Alibaba Cloud account. Grant the predefined **Administrator** role to the designated RAM user or RAM role at the cluster scope.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Authorizations**.
    
2.  Grant permissions to a RAM user or RAM role.
    
    -   Grant permissions to a RAM user: On the **RAM Users** tab, find the one to authorize and click **Modify Permissions** in the **Actions** column.
        
    -   Grant permissions to a RAM role: On the **RAM Roles** tab, select the one to authorize and click **Modify Permissions**.
        
3.  In the **Permission Management** panel, click **\+ Add Permissions**, select the scope (either a specific cluster or namespace), and select **Administrator** from the predefined roles.
    
    > Granting this permission across all clusters will automatically apply it to any new clusters created in the future.
    

### **Step 2: Grant RBAC permissions to other RAM users or RAM roles**

Once the setup is complete, the permission administrator can log on to the ACK console and grant RBAC permissions to other RAM users or RAM roles on the **Authorization** page.

## Apply in production

To improve the security and maintainability of permission management, we recommend following these best practices:

-   **Principle of least privilege**
    
    Only grant the minimum set of permissions required for a RAM user or role to perform their tasks. Avoid indiscriminately granting high-privilege roles such as the administrator.
    
-   **Fine-grained authorization**
    
    -   Layered authorization: Differentiate the responsibilities between RAM for cloud resource access and RBAC for cluster resource access.
        
    -   Scope convergence: Whenever possible, use `RoleBinding` to grant permissions within a specific namespace instead of using a cluster-wide `ClusterRoleBinding`.
        
    -   Precise role selection: Start with the predefined ACK roles. If you create custom roles, define precise rules and avoid using wildcards (`*`).
        
-   **Continuous governance**
    
    Regularly audit permissions and revoke any that are redundant or excessive. Monitor and log all actions performed by high-privilege accounts, such as permissions administrators.
    

## **Appendix: Predefined** RBAC roles

To simplify permission management and support common user scenarios, ACK provides a variety of standardized, predefined roles that are based on the RBAC mechanism.

**Predefined role**

**RBAC permissions on cluster resources**

**Administrator**

Full read/write RBAC permissions for all Kubernetes resources in all namespaces, as well as for cluster-level resources including nodes, PVs, namespaces, and resource quotas.

**Read-only Administrator**

Read-only RBAC permissions for all Kubernetes resources in all namespaces, as well as for cluster-level resources including nodes, PVs, namespaces, and resource quotas.

**O&M Engineer**

Grants the following RBAC permissions:

-   Read/write access to all console-visible Kubernetes resources in all namespaces.
    
-   Read and update access to cluster nodes, PVs, and namespaces.
    
-   Read-only access to all other resources.
    

**Developer**

Read/write RBAC access to console-visible Kubernetes resources, scoped to either all namespaces or a selection of specific ones.

**Restricted User**

Read-only RBAC access to console-visible Kubernetes resources, scoped to either all namespaces or a selection of specific ones.

**Custom**

Permissions are determined by the ClusterRole you select. Verify the permissions defined in the selected ClusterRole before granting them to avoid assigning unintended permissions to a RAM user or role. For more information about custom permissions, see [Use custom RBAC to restrict resource operations in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-an-rbac-role#task-2114307).

**Important**

After you assign the cluster-admin role to a RAM user or RAM role, the user or role gains the same permissions as the Alibaba Cloud account to which they belong. This grants full control over all resources within the cluster. Exercise caution when you assign the cluster-admin role to a RAM user or RAM role. 

## **FAQ**

### What is the relationship between RAM and RBAC?

ACK uses a layered authorization model where both RAM and RBAC are required (Logical AND):

-   **RAM**: Determines whether a user can "see" the cluster in the console or access the cluster through OpenAPI.
    
-   **RBAC**: Determines which Kubernetes resources (such as pods, ConfigMaps, Secrets) a user can operate on within the cluster.
    

### Who has the authority to grant RBAC permissions?

-   **Root account**: The Alibaba Cloud account has full authority to grant permissions to any RAM user or role.
    
-   **Cluster creator**: By default, the RAM identity that creates the cluster is granted cluster-admin privileges for that specific cluster.
    
-   **Permission administrator**: Any RAM user or role that has been granted the **Administrator** role can manage permissions for others.
    

### Can I grant permissions to multiple clusters **simultaneously**?

Yes. In the ACK console, select multiple clusters or choose "All Clusters" when configuring permissions. If you select "All Clusters", the permissions will also be **automatically applied to any new clusters** created in the future.

### **What should I do if I encounter a permission error?**

If an operation performed through the console or OpenAPI fails due to missing RBAC permissions, the system will return a permission-denied error code. Refer to the following table for common errors and their solutions:

**Error code/message**

**Description**

**Solution**

`ForbiddenCheckControlPlaneLog`

You are not authorized to view control plane logs.

Grant the user the **Administrator** or **O&M Engineer** role.

`ForbiddenHelmUsage`

You are not authorized to perform Helm operations.

Grant the user the **Administrator** role.

`ForbiddenRotateCert`

You are not authorized to rotate certificates.

Grant the user the **Administrator** role.

`ForbiddenAttachInstance`

You are not authorized to add nodes.

Grant the user the **Administrator** or **O&M Engineer** role.

`ForbiddenUpdateKMSState`

You are not authorized to modify the cluster's KMS at-rest encryption status.

Grant the user the **Administrator** or **O&M Engineer** role.

`Forbidden get trigger`

You are not authorized to get application trigger information.

Grant the user the **Administrator**, **O&M Engineer**, or **Developer** role.

`ForbiddenQueryClusterNamespace`

You are not authorized to query cluster namespaces.

Grant the user the **Administrator**, **O&M Engineer**, **Developer**, or **Restricted User** role.

### **How can I create custom permissions if the predefined RBAC roles do not meet my needs?**

You can create a custom `Role` or `ClusterRole` through a YAML manifest. For example, a `ClusterRole` that only allows viewing pods. Then, when assigning permissions, select the custom permission type and bind it to your newly created `ClusterRole`. See [Use custom RBAC to restrict resource operations in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-an-rbac-role).

> Kubernetes RBAC policies are additive and only support **allow** rules. There is no explicit **deny** rule.

## **Related documentation**

-   If the predefined roles are insufficient, see [Use custom RBAC to restrict access to cluster resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-an-rbac-role).
    
-   For complete authorization guides (including both RAM and RBAC) for different user roles, refer to the following topics:
    
    -   [Grant permissions to an O&M engineer for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-of-authorization#section-y3i-ent-t3n).
        
    -   [Grant permissions to an application developer for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-of-authorization#section-0mo-44e-7o0).
        
    -   [Grant permissions to a permission administrator](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-of-authorization#section-yur-yjz-mf3).
        
-   For a list of service roles used by ACK, see [ACK roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-default-roles#task-1614779).
    
-   For troubleshooting other authorization-related issues, see [Authorization management FAQs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-authorization-management#task-1546248).
