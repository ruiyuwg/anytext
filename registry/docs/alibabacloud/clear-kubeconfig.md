Container Service for Kubernetes (ACK) issues kubeconfig files that contain credentials for connecting to clusters. Leaked or orphaned kubeconfig files grant direct access to cluster API servers. Regularly audit and delete unused kubeconfig files to prevent unauthorized access.

**Important**

Manage kubeconfig credentials securely. Revoke compromised credentials immediately. For details, see [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model).

We recommend that you [use ack-ram-authenticator for API server webhook authentication in an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication), enabling granular RBAC control and automatic revocation of kubeconfig credentials when associated RAM users or RAM roles are deleted.

> Kubeconfig files have defined expiration timelines and automatically revoke access upon expiry. To query the expiration date, see [How do I query the expiration date of the certificate used in a kubeconfig file?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#p-782-uj2-32a)

## Kubeconfig file statuses

**Status**

**Description**

Not Issued

The kubeconfig file for this cluster has not been issued to the RAM user or RAM role.

Effective

The kubeconfig file is issued and still valid. This status also applies when the kubeconfig file is deleted but RBAC permissions are not revoked.

Expired

The kubeconfig file is issued but has expired.

Deleted

The kubeconfig file is issued but deleted. Both the kubeconfig information and the RBAC binding of the RAM user or RAM role are also deleted.

## Impact of deleting a kubeconfig file

Understand the following consequences before deleting any kubeconfig file:

**What happens**

**Details**

**Credential is permanently invalidated**

Cluster API server access through this kubeconfig file is permanently disabled.

**RBAC binding is removed**

Both the kubeconfig information and the RBAC binding of the RAM user or RAM role are deleted.

**7-day access check runs automatically**

The system checks the API server audit logs for access records within the last 7 days. This requires the cluster auditing feature to be enabled. See [Work with cluster auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing).

**Recovery is possible**

Accidentally deleted kubeconfig files can be restored from the kubeconfig recycle bin. See [Use the kubeconfig recycle bin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/using-the-kubeconfig-recycle-bin).

**Important**

Verify that no operational dependencies exist before deleting a kubeconfig file. For example, delete kubeconfig files issued to departed employees individually to avoid invalidating credentials in active use.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account, or a Resource Access Management (RAM) user or RAM role with all of the following permissions:
    
    -   [AliyunCSFullAccess](https://ram.console.alibabacloud.com/policies/AliyunCSFullAccess/System/content) RAM permission
        
    -   [AliyunRAMReadOnlyAccess](https://ram.console.alibabacloud.com/policies/AliyunRAMReadOnlyAccess/System/content) RAM permission
        
    -   RBAC admin permissions. For details, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#li-s0n-2uq-buw)
        

These permissions apply to all kubeconfig management operations: cluster-level, user-level, and deleted RAM user/role cleanup.

## Delete a kubeconfig file for a specific user

Use this procedure to view and revoke credentials for individual RAM users or RAM roles within a specific cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  On the **Authorizations** page, click the **KubeConfig File Management** tab. Find the target cluster and click **KubeConfig File Management** in the **Actions** column. The page lists all users holding kubeconfig files and users with historical RBAC permissions from revoked kubeconfig files. Each entry shows:
    
    -   User information: username, user ID, account type, and account status
        
    -   Kubeconfig file information: expiration date and status
        
    
    > If deleted RAM users or RAM roles still have active kubeconfig files, the console displays a notification.
    
3.  Confirm that the kubeconfig file is not in use. Click **Delete KubeConfig File** in the **Actions** column for the target RAM user or RAM role.
    

## Delete kubeconfig files for a RAM user across clusters

Use this procedure to view and revoke all credentials issued to a specific RAM user across multiple clusters. This view also supports batch deletion.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  On the **Authorizations** page, click the **RAM Users** tab. Find the target RAM user and click **KubeConfig Management** in the **Actions** column. The **KubeConfig Management** panel displays the kubeconfig file status for every cluster associated with this RAM user. Each entry shows:
    
    -   Cluster information: cluster name and ID
        
    -   Kubeconfig file information: expiration date, status, and 7-day audit logs (certificate access logs)
        
3.  Confirm the kubeconfig files are not in use, then delete them:
    
    -   **Single cluster**: Find the cluster and click **Delete KubeConfig File** in the **Actions** column.
        
    -   **Multiple clusters**: Select the target clusters and click **Delete KubeConfig File** in the lower-left corner of the panel.
        

## Clean up kubeconfig files from deleted RAM users or roles

When a RAM user or RAM role is deleted, its kubeconfig files and RBAC permissions may remain active. Clean up these residual credentials to prevent unauthorized access.

### ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  If residual kubeconfig files exist for deleted RAM users or roles, the **Authorizations** page displays a notification message.
    
3.  Click **manage the kubeconfig files associated with invalid accounts** in the message to go to the **Delete KubeConfig Files of Deleted RAM Users/Roles** page. This page lists deleted RAM users and RAM roles whose kubeconfig files and RBAC permissions remain in effect.
    
4.  Confirm that the residual kubeconfig file is not in use. Click **Delete KubeConfig File** for the target deleted RAM user or RAM role.
    

### ack-ram-tool

For automated or bulk cleanup, use ack-ram-tool. See [Use ack-ram-tool to revoke the permissions of specified users on ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-the-permissions-of-the-specified-user-by-using-ack-ram-tool).

## FAQ

### What is the 7-day access record check?

When you click **Delete KubeConfig File**, the system checks whether the kubeconfig file accessed the cluster within the last 7 days. The results are for reference only. Always confirm that the kubeconfig file is not in use before deleting it.

This check requires the cluster auditing feature. See [Work with cluster auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing).

### How do I read the 7-day access record check results?

**Check result**

**Type**

**Meaning**

Successful

No access record found

The kubeconfig file was not used to access the cluster API server within the last 7 days.

Successful

Access records found

The kubeconfig file was used to access the API server within the last 7 days.

Failed

Failed to query access records

Cluster auditing is disabled.

Failed

Failed to query access records

Other errors such as cluster connection failures or network issues.

### When can I not delete a kubeconfig file?

Deletion is blocked in these situations:

-   **Abnormal cluster states**: Clusters in the **Deletion Failed**, **Deleting**, **Deleted**, or **Failed** state.
    
-   **Abnormal kubeconfig states**: Kubeconfig files in the **Not Issued**, **Revoked**, or **Unknown** state.
    
-   **Self-owned kubeconfig files**: You cannot delete kubeconfig files held by your own account.
    
-   **Alibaba Cloud account kubeconfig files**: Kubeconfig files issued to Alibaba Cloud accounts cannot be deleted.
    

### Can I restore a deleted kubeconfig file?

Yes. Use the kubeconfig recycle bin to restore accidentally deleted kubeconfig files or roll back to a historical version. See [Use the kubeconfig recycle bin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/using-the-kubeconfig-recycle-bin).

## Security best practices

Follow these practices to secure kubeconfig credential lifecycle management:

-   \[ \] **Adopt webhook authentication for production clusters.** [Use ack-ram-authenticator](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication) so that kubeconfig files and RBAC permissions are automatically revoked when a RAM user or RAM role is deleted.
    
-   \[ \] **Apply the least privilege principle.** Grant only the minimum permissions required for each RAM user and RAM role.
    
-   \[ \] **Revoke access promptly after employee departure.** Delete the departing employee's kubeconfig files across all clusters immediately.
    
-   \[ \] **Audit kubeconfig file status regularly.** Review the **KubeConfig File Management** tab to identify expired, unused, or orphaned credentials.
    
-   \[ \] **Keep credentials confidential.** Protect AccessKey pairs, tokens, and kubeconfig files from unauthorized access.
    
-   \[ \] **Enable cluster auditing.** Activate API server audit logging to support 7-day access record checks before deletion.
    

**Important**

You are responsible for any losses or consequences caused by the leak or expiration of credentials, such as AccessKey pairs of RAM users and kubeconfig files, due to inappropriate credential management. Make sure that you have read and understand the requirements in [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model).

## References

-   [Revoke the kubeconfig file of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential) -- Revoke and regenerate a kubeconfig file when an employee leaves or a credential leak is suspected.
    
-   [DescribeClusterUserKubeconfig](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-query-the-kubeconfig-file-of-a-cluster#doc-api-CS-DescribeClusterUserKubeconfig) -- Query kubeconfig files through the API.
    
-   [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#li-s0n-2uq-buw) -- Configure RBAC admin permissions required for kubeconfig management.
    
-   [Work with cluster auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing) -- Enable audit logging to support 7-day access record checks.
    
-   [Use the kubeconfig recycle bin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/using-the-kubeconfig-recycle-bin) -- Restore accidentally deleted kubeconfig files.
