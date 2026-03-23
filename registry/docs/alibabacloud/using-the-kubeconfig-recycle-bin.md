Container Service for Kubernetes (ACK) can issue kubeconfig files to Alibaba Cloud accounts, Resource Access Management (RAM) users, and RAM roles. Kubeconfig files contain identity information that is used to access ACK clusters. You can use the kubeconfig recycle bin to restore kubeconfig files that you accidentally deleted or restore a historical version of a kubeconfig file.

## **Usage notes**

-   Only Alibaba Cloud accounts and RAM users or RAM roles with the required permissions can use the kubeconfig recycle bin.
    
    Make sure that the RAM user or RAM role has the [AliyunCSFullAccess](https://ram.console.alibabacloud.com/policies/AliyunCSFullAccess/System/content) and [AliyunRAMReadOnlyAccess](https://ram.console.alibabacloud.com/policies/AliyunRAMReadOnlyAccess/System/content) permissions.
    
-   You can use the kubeconfig recycle bin to restore only kubeconfig files that are deleted within the previous 30 days. For more information about how to delete kubeconfig files, see [Delete kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig).
    
-   Each Alibaba Cloud account, RAM user, or RAM role can use only one kubeconfig file to access an ACK cluster. If a kubeconfig file is already used by an Alibaba Cloud account, RAM user, or RAM role to access an ACK cluster, you cannot restore the historical versions of the kubeconfig file. Otherwise, kubeconfig file conflicts occur.
    

## **Scenarios**

#### **Scenario 1: Restore an accidentally deleted kubeconfig file**

Admin A accidentally deleted a kubeconfig file used by RAM User B to access Cluster 1. Consequently, RAM User B cannot access Cluster 1. In this scenario, RAM User B can contact Admin A to restore the kubeconfig file from the recycle bin.

#### **Scenario 2:** Restore a historical version of a kubeconfig file to replace the current one

Admin A deleted kubeconfig v1 used by RAM User B to access Cluster 1. RAM User B obtains kubeconfig v2 in the ACK console and uses the file to access Cluster 1. However, some existing applications still need to use kubeconfig v1. In addition, kubeconfig v1 provides role-based access control (RBAC) permissions. Therefore, Admin A wants to restore kubeconfig v1.

To do this, Admin A must delete kubeconfig v2, find the records of kubeconfig v1 and v2 in the recycle bin, and restore kubeconfig v1.

## Restore kubeconfig files

You can batch restore kubeconfig files and the RBAC permissions that the files provide.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  Click the **KubeConfig File Management** tab. Then, click **KubeConfig File Recycle Bin** in the upper-right corner.
    
    The kubeconfig recycle bin displays the records of the kubeconfig files that are deleted within the **previous 30 days**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Username** and **UID**
    
    The name and ID of the Alibaba Cloud account, RAM user, or RAM role that uses the kubeconfig file.
    
    **Certificate CN**
    
    The CommonName of the client certificate for the kubeconfig file. For more information about CommonNames, see [Reference: client certificate CommonNames](#f1b6cde636dtj).
    
    **Cluster Name** and **Cluster ID**
    
    The name and ID of the ACK cluster accessed by using the kubeconfig file.
    
    **RBAC Permissions**
    
    The RBAC permissions provided by the kubeconfig file.
    
    **Recycled At**
    
    The time when the kubeconfig file was deleted and moved to the kubeconfig recycle bin.
    
    **Deletion Interval**
    
    The time when the kubeconfig file will be permanently deleted.
    
    You can restore kubeconfig files that are deleted and moved to the recycle bin within the previous 30 days. The kubeconfig recycle bin automatically deletes kubeconfig files whose retention period exceeds 30 days. You cannot restore kubeconfig files that are deleted from the kubeconfig recycle bin.
    
3.  Click **Restore** in the Actions column of a kubeconfig file to restore the kubeconfig file and the corresponding RBAC permissions.
    
    You can also select multiple kubeconfig files and click Batch Restore. When you batch restore kubeconfig files, make sure that the kubeconfig files do not conflict with each other.
    

## **Delete kubeconfig records**

You can delete a kubeconfig record in the kubeconfig recycle bin if you confirm that the corresponding kubeconfig file is no longer needed. After the kubeconfig record is deleted, you can no longer restore the kubeconfig file.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  Click the **KubeConfig File Management** tab and then click **KubeConfig File Recycle Bin** in the upper-right corner.
    
3.  Confirm the kubeconfig record that you want to delete, click **Delete**, and then enter the client certificate CommonName.
    

## **Reference:** client certificate **CommonNames**

A client certificate CommonName is the identity of the client that uses the corresponding kubeconfig file to access the ACK cluster. Different kubeconfig files have different client certificate CommonNames. For more information, see [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/).

In ACK, client certificate CommonNames use the `{UserID}-{SuffixID}` format. `UserID` indicates the ID of the RAM user or RAM role that uses the kubeconfig file. `SuffixID` indicates a random string, which is renewed each time the kubeconfig file is revoked or deleted. This ensures that the historical versions of the kubeconfig file cannot be used to access the ACK cluster.

## **FAQ**

### **Why does a RAM user have multiple kubeconfig records for the same ACK cluster in the kubeconfig recycle bin?**

Due to client certificate CommonName renewal, a RAM user may have multiple kubeconfig records for the same ACK cluster in the kubeconfig recycle bin.

### **How do I select the kubeconfig record that I want to restore from multiple kubeconfig records in the kubeconfig recycle bin?**

You can check the RBAC permissions provided by the original kubeconfig file or the client certificate CommonName. To query the client certificate CommonName of a kubeconfig file, run the following command. Then, you can use the client certificate CommonName to find the kubeconfig record.

```
openssl x509 -in <(kubectl config view  --kubeconfig {Kubeconfig file name} --raw --minify --output=jsonpath='{.users[0].user.client-certificate-data}'|base64 -d) -noout -subject
```

### **Why is the Restore button of the kubeconfig recycle bin dimmed?**

In an ACK cluster, each RAM user or RAM role can use only one kubeconfig file. If a kubeconfig file is already used by a RAM role or RAM role to access an ACK cluster, you cannot restore the historical versions of the kubeconfig file. This helps avoid kubeconfig conflicts.

To restore a historical version, you must first delete the kubeconfig file that is in use. For more information about how to delete kubeconfig files, see [Delete kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig).

### **What are the conditions that may cause kubeconfig file restoration failures?**

-   Insufficient RBAC permissions: When you restore a kubeconfig file, the RBAC permissions provided by the kubeconfig file are also restored. If you do not have the same RBAC permissions on the ACK cluster, the restoration may fail. For more information about how to grant RBAC permissions, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles).
    
-   Abnormal ACK cluster status: If the ACK cluster is in an abnormal state, the ACK cluster becomes inaccessible. Consequently, the restoration fails.
    
-   Kubeconfig file conflicts: Another kubeconfig file is being used by the RAM user or RAM role to access the same ACK cluster. If kubeconfig file conflicts occur when you batch restore kubeconfig files, ACK automatically restores the most recent kubeconfig record. The other conflicting kubeconfig records are not restored.
    

## **References**

-   We recommend that you delete kubeconfig files issued to resigned employees and kubeconfig files that may pose security risks. For more information, see [Delete kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig).
    
-   When an issued kubeconfig file is accidentally disclosed, you must revoke the kubeconfig file and then generate a new one. For more information, see [Revoke a KubeConfig file](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential).
