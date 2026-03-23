In multi-tenant scenarios, Container Service for Kubernetes (ACK) signs and issues kubeconfig files that contain identity information to users with different roles. The kubeconfig files can be used to connect to ACK clusters. When an employee resigns or an issued kubeconfig file is disclosed, you can revoke the kubeconfig file to protect the cluster that the kubeconfig file can be used to access. This topic describes how to use an Alibaba Cloud account or a Resource Access Management (RAM) user to revoke an issued kubeconfig file.

## Usage notes

### **Limits on clusters**

-   To revoke a kubeconfig file that is used to access an ACK managed cluster or ACK dedicated cluster, the cluster must be created after October 15, 2019.
    
-   To revoke a kubeconfig file that is used to access an ACK Serverless cluster, the cluster must be created after September 6, 2019.
    

### **Use scenarios**

You may need to revoke kubeconfig files in the following scenarios:

-   Use an Alibaba Cloud account to revoke the kubeconfig files of RAM users managed by the Alibaba Cloud account.
    

-   Use a RAM user to revoke the kubeconfig file of the RAM user.
    

After you revoke the kubeconfig file used to access a cluster, the system automatically assigns a new kubeconfig file to the cluster.

## Use an Alibaba Cloud account to revoke the kubeconfig files of all RAM users managed by the Alibaba Cloud account

**Important**

You can use an Alibaba Cloud account to revoke the kubeconfig files of only RAM users or RAM roles managed by the Alibaba Cloud account.

Use an Alibaba Cloud account to log on to the ACK console and perform the following steps:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  In the RAM user list on the **RAM Users** tab, click **KubeConfig Management** for a RAM user to view the list of clusters created by the RAM user. Then, click **Delete KubeConfig File** in the **Actions** column and revoke the kubeconfig file as prompted.
    

## Use a RAM user to revoke the kubeconfig file of the RAM user

Use a RAM user to log on to the ACK console and perform the following steps:

**Important**

After the kubeconfig file is revoked, the RAM user can no longer use the kubeconfig file to access the corresponding cluster. Proceed with caution.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  Click the **Connection Information** tab, click **Revoke KubeConfig**, and then click **OK**.
    

## Revoke the kubeconfig file of a resigned employee or an untrusted user

To delete the RAM user or RAM role used by a resigned employee or an untrusted user, you must first use an Alibaba Cloud account to revoke the kubeconfig file of the RAM user or RAM role. Deleting only the RAM user or RAM role does not revoke the Role-Based Access Control (RBAC) permissions in the kubeconfig file of the RAM user or RAM role.

**Important**

Before you revoke a kubeconfig file, make sure that no application in the corresponding cluster relies on the permissions in the kubeconfig file. For more information, see [Use an Alibaba Cloud account to revoke the kubeconfig file of a RAM user](#de19ecc048xau).

If you accidentally deleted the RAM user used by a resigned employee or an untrusted user but have not revoked the kubeconfig file, perform the following steps. We recommend that you revoke the kubeconfig file of a RAM user before you delete the RAM user.

**Click to view how to revoke the kubeconfig file of a RAM user when the RAM user is deleted**

-   **If the RAM user is in the recycle bin**
    
    1.  Restore the basic information of the RAM user from the recycle bin. You do not need to restore the AccessKey pair of the RAM user. For more information, see [Restore a RAM user from the recycle bin](/help/en/ram/user-guide/delete-a-ram-user#section-njs-q8t-qp5).
        
    2.  Use an Alibaba Cloud account to revoke the kubeconfig files of all clusters created by the RAM user. For more information, see [Use an Alibaba Cloud account to revoke the kubeconfig file of a RAM user](#de19ecc048xau).
        
    3.  Move the RAM user to the recycle bin. For more information, see [Move a RAM user to the recycle bin](/help/en/ram/user-guide/delete-a-ram-user#section-4hg-1xf-9jo).
        
-   **If the RAM user is permanently deleted**: In this case, you need to manually delete RBAC bindings that start with the ID of the RAM user or RAM role in the cluster.
    
    1.  Run the following command as the cluster administrator to view all ClusterRoleBindings in the cluster:
        
        ```
        kubectl get clusterrolebinding
        ```
        
        ClusterRoleBindings issued by the authorization module of ACK are named in the `xxxxxxx-clusterrolebinding` format. `xxxxxxx` indicates the ID of the RAM user or RAM role. If the ID starts with 2, it is a RAM user binding. If the ID starts with 3, it is a RAM role binding.Container Service for Kubernetes
        
    2.  Run the following command as the cluster administrator to view all RoleBindings issued by the authorization module of ACK.Container Service for Kubernetes
        
        ```
        kubectl get rolebinding -A | grep 'cs:ns:' 
        ```
        
        RoleBindings are named in the `xxxxxxx-yyyyy-rolebinding` format. `xxxxxxx` indicates the ID of the RAM user or RAM role. If the ID starts with 2, it is a RAM user binding. If the ID starts with 3, it is a RAM role binding.
        
    3.  For a RAM user binding that starts with 2, log on to the [RAM console](https://ram.console.alibabacloud.com/). On the **Users** page, search for the RAM user ID to check whether the RAM user exists. If the RAM user cannot be found, you need to delete the binding.
        
    4.  For RAM role binding that starts with 3, call the [ListRoles](https://api.aliyun.com/api/Ram/2015-05-01/ListRoles?tab=DEBUG) API operation to view the IDs of the RAM roles that are in use. If the RAM role ID does not exist in the returned list, you need to delete the binding.
        
    5.  To delete an RBAC binding, run the `kubectl delete clusterrolebinding xxxxxxx-clusterrolebinding` or `kubectl delete rolebinding xxxxxxx-yyyyy-rolebinding -n zzzz` command. zzzz indicates the namespace of RoleBindings.
