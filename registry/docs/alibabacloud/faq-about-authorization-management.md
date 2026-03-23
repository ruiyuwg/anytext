This topic provides answers to some frequently asked questions about authorization management.

**Category**

**Issue**

Authorization failures

-   [What do I do if the console prompts the following error message: ForbiddenQueryClusterNamespace Forbidden query namespaces?](#section-nmn-2i8-aya)
    
-   [What do I do if the console prompts the following error message: APISERVER\_403?](#section-864-xzn-a20)
    
-   [What do I do if the console prompts the following error message: The current RAM user does not have management permissions. Contact the Alibaba Cloud account owner or the administrator to acquire the permissions?](#section-le4-cg1-p8z)
    
-   [How do I identify whether an authorization error is caused by RAM policies or RBAC permissions?](#section-jsp-ip5-qyr)
    
-   [What do I do if I cannot access clusters by using a RAM user that is attached with the AdministratorAccess or AliyunCSFullAccess policy?](#section-rv0-xt6-406)
    
-   [What do I do if the console prompts the error code ForbiddenCheckControlPlaneLog?](#section-8sa-2kn-v0m)
    
-   [What do I do if the console prompts the error code ForbiddenHelmUsage?](#section-3cs-rol-zst)
    
-   [What do I do if the console prompts the error code ForbiddenRotateCert?](#section-px6-k84-y5n)
    
-   [What do I do if the console prompts the error code ForbiddenAttachInstance?](#section-nfb-i0o-m3q)
    
-   [What do I do if the console prompts the error code ForbiddenUpdateKMSState?](#section-f5p-nij-k3p)
    
-   [What do I do if the console prompts the error code Forbidden get trigger?](#section-lyr-9i5-9sv)
    

RBAC authorization

-   [Can I grant permissions on applications?](#section-7r6-eh8-lyb)
    
-   [Why does a RAM user or RAM role that is assigned the cs:admin role fail to create CustomResourceDefinition (CRD) objects in ACK clusters?](#section-wfq-ewj-rp0)
    
-   [How do I use a RAM user or RAM role to assign RBAC roles to other RAM users or RAM roles?](#section-faw-hrx-0bk)
    
-   [How do I identify the RAM user or RAM role that is associated with a ClusterRoleBinding or RoleBinding?](#section-uns-0m5-hvq)
    
-   [Why do I fail to modify or revoke the RBAC permissions of a cluster creator?](#section-ic8-6ta-pwn)
    
-   [What permissions are required to use the terminal feature?](#section-phh-2u1-xa8)
    
-   [How do I grant RBAC permissions to users that log on to the console by using CloudSSO?](#section-4jo-pll-55p)
    

RAM authorization

-   [Why does a RAM user or RAM role that has read-only permissions on all clusters fail to view specific clusters?](#section-ozz-yrb-73q)
    
-   [How do I grant a RAM user or RAM role the permissions to create clusters?](#section-wrw-5cm-wsj)
    
-   [What error codes indicate that the current Alibaba Cloud account is not assigned the service roles on which ACK relies?](#section-ut1-va0-x6j)
    
-   [How do I navigate to the page on which I can assign the system roles for ACK?](#section-fdh-k13-qyn)
    
-   [What do I do if a RAM role is revoked from an ECS instance?](#section-q0q-oen-y5f)
    
-   [How do I assign a custom RAM role to an ACK cluster?](#section-0sm-z8q-eyo)
    
-   [Will online workloads be affected after a RAM user is deleted because the relevant staff has resigned?](#section-txv-4vm-fnp)
    

## What do I do if the console prompts the following error message: ForbiddenQueryClusterNamespace Forbidden query namespaces?

**Issue**

The console prompts the following error message: **ForbiddenQueryClusterNamespace Forbidden query namespaces**.

**Cause and solution**

The Resource Access Management (RAM) user or RAM role that you use does not have role-based access control (RBAC) permissions on the namespaces in the cluster. You must go to the **Authorizations** page of the console to assign an RBAC role to the RAM user or RAM role. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the following error message: APISERVER\_403 error?

**Issue**

The console prompts the following error message: **APISERVER\_403**.

**Cause and solution**

The RAM user or RAM role that you use does not have the required RBAC permissions on your cluster. You must go to the **Authorizations** page of the console to grant the required permissions to the RAM user. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343). For more information about RBAC authorization, see [Using RBAC Authorization](https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/).

## What do I do if the console prompts the following error message: The current RAM user does not have management permissions. Contact the Alibaba Cloud account owner or the administrator to acquire the permissions?

**Issue**

The console prompts the following error message: **The current RAM user does not have management permissions. Contact the Alibaba Cloud account owner or the administrator to acquire the permissions**.

**Cause**

The RAM user or RAM role that you use does not have the required RAM permissions or the RBAC administrator permissions on your cluster. By default, you cannot use a RAM user or RAM role to grant RBAC permissions to other RAM users or RAM roles. The following example shows how to authorize RAM User A or RAM Role A to grant RBAC permissions to other RAM users or RAM roles.

**Solutions**

Perform the following operations to authorize a RAM user or RAM role to grant RBAC permissions to other RAM users or RAM roles.

-   RBAC administrator permissions: You must assign the predefined RBAC administrator role or the cluster-admin role to RAM User A or RAM Role A and specify the cluster and namespaces that you want the RAM user or RAM role to access.
    
-   RAM permissions: You must attach a RAM policy to RAM User A or RAM Role A. The RAM policy must contain the following permissions:
    
    -   Query other RAM users or RAM roles that belong to the same Alibaba Cloud account.
        
    -   Attach RAM policies to a specified RAM user or RAM role.
        
    -   Query the RBAC permissions of a RAM user or RAM role.
        
    -   Perform RBAC authorization.
        

Use the following method to attach the RAM policy to RAM User A or RAM Role A:

Log on to the [RAM console](https://ram.console.alibabacloud.com/) and attach a custom RAM policy to RAM User A or RAM Role A. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328). Use the following template to create a custom RAM policy:

```
{
    "Statement": [{
            "Action": [
                "ram:Get*",
                "ram:List*",
                "cs:GetUserPermissions",
                "cs:GetSubUsers",
                "cs:GrantPermission"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "ram:AttachPolicyToUser",
                "ram:AttachPolicyToRole"
            ],
            "Effect": "Allow",
            "Resource":  [
                "acs:ram:*:*:policy/xxxxxx",
                "acs:*:*:*:user/*"
            ]
        }
    ],
    "Version": "1"
}
```

**Note**

Replace xxxxxx with the name of the RAM policy that you want to allow RAM User A or RAM Role A to attach to other RAM users or RAM roles. If you replace xxxxxx with an asterisk (\*), RAM User A or RAM Role A is authorized to attach all RAM policies to other RAM users or RAM roles.

After you attach the preceding RAM policy to RAM User A or RAM Role A, RAM User A or RAM Role A is authorized to attach specified RAM policies and assign RBAC roles to other RAM users or RAM roles. For more information about how to use RAM User A or RAM Role A to assign RBAC roles to other RAM users or RAM roles, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## How do I identify whether an authorization error is caused by RAM policies or RBAC permissions?

You can identify whether an authorization error is caused by RAM policies or RBAC permissions based on the error message returned by the API or the console.

-   Caused by RAM policies
    
    **Issue**
    
    The API or console returns the following error message:
    
    ```
    RAM policy Forbidden for action cs:DescribeEvents
    STSToken policy Forbidden for action cs:DescribeClusterNodes
    ```
    
    **Cause**
    
    The error message indicates that the RAM policy attached to the RAM user or RAM role does not contain the `cs:DescribeEvents` action.
    
    **Solution**
    
    If the error message returned by the API or the console contains RAM policy Forbidden or STSToken policy Forbidden, the RAM policy that is attached to the RAM user or RAM role does not contain the required action. Add the required action to the RAM policy that is attached to the RAM user or RAM role. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).
    
-   Caused by RBAC permissions
    
    **Issue**
    
    The API or console returns the following error message:
    
    ```
    events is forbidden: User "<uid>" cannot list resource "events" in API group "" at the cluster scope
    ForbiddenQueryClusterNamespace, Forbidden query namespaces
    ```
    
    **Cause**
    
    The error message indicates that the RAM user `<uid>` does not have the required RBAC permissions to list resource events.
    
    **Solution**
    
    If the error message returned by the API or the console contains APISERVER\_403, User "xxx" cannot xx resource "xx" in API group, or ForbiddenQueryClusterNamespace, the RAM user does not have the required RBAC permissions. Grant the required RBAC permissions to the RBAC user. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
    

## What do I do if I cannot access clusters by using a RAM user that is attached with the AdministratorAccess or AliyunCSFullAccess policy?

The authorization mechanism of Container Service for Kubernetes (ACK) consists of RAM authorization and RBAC authorization. For more information, see [Authorization overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#concept-268689). After you attach the AdministratorAccess or AliyunCSFullAccess policy to a RAM user in the RAM console, you must go to the **Authorizations** page and assign RBAC roles to the RAM user to grant permissions on clusters. For more information about how to assign RBAC roles, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code ForbiddenCheckControlPlaneLog?

**Issue**

The console prompts the error code ForbiddenCheckControlPlaneLog.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role or O&M engineer role. Go to the **Authorizations** page to assign the predefined RBAC administrator role or O&M engineer role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code ForbiddenHelmUsage?

**Issue**

The console prompts the error code ForbiddenHelmUsage.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role. Go to the **Authorizations** page to assign the predefined RBAC administrator role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code ForbiddenRotateCert?

**Issue**

The console prompts the error code ForbiddenRotateCert.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role. Go to the **Authorizations** page to assign the predefined RBAC administrator role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code ForbiddenAttachInstance?

**Issue**

The console prompts the error code ForbiddenAttachInstance.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role or O&M engineer role. Go to the **Authorizations** page to assign the predefined RBAC administrator role or O&M engineer role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code ForbiddenUpdateKMSState?

**Issue**

The console prompts the error code ForbiddenUpdateKMSState.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role or O&M engineer role. Go to the **Authorizations** page to assign the predefined RBAC administrator role or O&M engineer role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## What do I do if the console prompts the error code Forbidden get trigger?

**Issue**

The console prompts the error code Forbidden get trigger.

**Cause and solution**

The RAM user or RAM role that you use is not assigned the predefined RBAC administrator role, O&M engineer role, or developer role. Go to the **Authorizations** page to assign the RBAC administrator role, O&M engineer role, or developer role to the RAM user or RAM role that you use. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## Can I grant permissions on applications?

Yes, you can grant permissions on applications. You can create a custom ClusterRole and define a rule to grant permissions on individual applications. You can use the `resourceNames` field to specify the applications.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Authorizations**.
    
3.  On the **Authorizations** page, click the **RAM Users** tab, find the RAM user to which you want to grant permissions, and click **Modify Permissions** on the right side.
    
    **Note**
    
    If you log on to the ACK console as a RAM user or RAM role, make sure that the RAM user or RAM role has at least read-only permissions on the cluster that you want to manage. In addition, the RAM user or RAM role must be assigned the cluster-admin role or administrator role of the cluster. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).
    
4.  On the **Permission Management** page, click **Add Permissions** and specify the cluster to which you want to grant permissions, the namespace, and the authorization type. Click **Submit**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0183938961/p712162.png)
    
    **Note**
    
    -   You can also grant the permissions on all clusters to a specified RAM user.
        
    -   You can assign one predefined RBAC role and one or more custom RBAC roles to a RAM user or RAM role for a specific cluster or namespace.
        
    
    The following table describes the permissions that the predefined and custom RBAC roles have on clusters and namespaces.
    
    Table 1. Roles and permissions
    
    **Role**
    
    **RBAC permissions on cluster resources**
    
    **Administrator**
    
    Read/write permissions on resources in all namespaces. Read/write permissions on nodes, volumes, namespaces, and quotas.
    
    **O&M Engineer**
    
    Read/write permissions on Kubernetes resources that are visible in the console and in all namespaces. Read-only permissions on nodes, volumes, namespaces, and quotas.
    
    **Developer**
    
    Read/write permissions on resources that are visible in the console and in the specified namespaces.
    
    **Restricted User**
    
    Read-only permissions on resources that are visible in the console and in the specified namespaces.
    
    **Custom**
    
    The permissions of a custom role are determined by the ClusterRole that you select. Before you select a ClusterRole, check the permissions of the ClusterRole and make sure that you grant only the required permissions to the RAM user or RAM role. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#section-5ya-j6r-fh7).
    
    For more information about subsequent steps, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
    

## Why does a RAM user or RAM role that is assigned the `cs:admin` role fail to create CustomResourceDefinition (CRD) objects in ACK clusters?

If your cluster is created before May 2019, the default administrator role of the cluster does not have the permissions to access specific Kubernetes resources. You can assign the `cluster-admin` role to the RAM user or RAM role. You can also delete the `cs:admin` ClusterRole and then recreate the ClusterRole.

The following YAML template is provided as an example:

```
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cs:admin
rules:
- apiGroups:
  - '*'
  resources:
  - '*'
  verbs:
  - '*'
- nonResourceURLs:
  - '*'
  verbs:
  - '*'
```

## How do I use a RAM user or RAM role to assign RBAC roles to other RAM users or RAM roles?

For more information, see [Grant RBAC permissions by using a RAM user or RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#e9b31b9d19p5s).

## How do I determine the RAM user or RAM role that is associated with a ClusterRoleBinding or RoleBinding?

You can determine the RAM user or RAM role that is associated with a ClusterRoleBinding or RoleBinding based on the value of the `subjects` parameter in the configurations of the ClusterRoleBinding or RoleBinding. If the value of the kind field of the `subjects` parameter is User and the value of the name field consists of digits or consists of digits and hyphens (-), the value of the name field indicates a RAM user ID or RAM role ID.

The following example shows that the ID of the RAM user associated with the ClusterRoleBinding is `1***` and the ID of the RAM user associated with the RoleBinding is `2***`.

```
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: 1***-cluster-admin-clusterrolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: 1***-1673419473

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: 2***-default-rolebinding
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: 'cs:ns:dev'
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: '2***'
```

## Why do I fail to modify or revoke the RBAC permissions of a cluster creator?

**Issue**

After you modify or revoke the RBAC permissions of a cluster creator, the operation does not take effect.

**Cause**

To prevent the issue that a cluster creator cannot manage the cluster created by the creator, ACK does not approve the requests that you submit to modify or revoke the RBAC permissions of the cluster creator.

**Solution**

If you need to revoke the RBAC permissions of a cluster creator, perform the following operations:

1.  Run the following command to query the ClusterRoleBinding that is created to grant permissions to the cluster creator.
    
    Replace `<uid>` with the UID of the Alibaba Cloud account that you want to query.
    
    ```
    kubectl get clusterrolebinding |grep <uid>
    ```
    
2.  Run the following commands to back up and then delete the ClusterRoleBinding that is returned in the preceding step.
    
    Replace `<name>` with the name of the ClusterRoleBinding that is returned in the preceding step.
    
    ```
    kubectl get clusterrolebinding <name> -o yaml > <name>.yaml
    kubectl delete clusterrolebinding <name>
    ```
    

## What permissions are required for using the terminal feature?

To use the terminal feature, you must assign the predefined RBAC administrator role, O&M engineer role, or developer role to the RAM user or RAM role that you use. In addition, you must grant the RAM user or RAM role the RAM permissions to call the `cs:DescribeClusterUserKubeconfig` operation. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343) and [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).

## How do I grant RBAC permissions to users that log on to the console by using CloudSSO?

**Issue**

You want to grant RBAC permissions to the user **AliyunReservedSSO-Policy-foo-bar-admin/foo.bar** that logs on to the console by using CloudSSO.

**Solution**

If a user logs on to the console by using CloudSSO, the user logs on as a RAM role. Therefore, to grant permissions to the user, you need to grant RBAC permissions only to the RAM role. For example, if the user that logs on to the console is **AliyunReservedSSO-Policy-foo-bar-admin/foo.bar**, you need to grant RBAC permissions to the RAM role **AliyunReservedSSO-Policy-foo-bar-admin**. For more information, see [Grant RBAC permissions to RAM users or RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).

## Why does a RAM user or RAM role that has read-only permissions on all clusters fail to view specific clusters?

**Issue**

A RAM user or RAM role is granted read-only permissions on all clusters by using the RAM console and access permissions on specified namespaces of two clusters by using RBAC. Previously, the RAM user can query all clusters in the console. However, the RAM user can query only some of the clusters now. The permissions of the RAM user are not recently modified.

**Cause**

You logged on to the ACK console by using another RAM user or RAM role or you selected a resource group. In this case, you must log on to the ACK console by using the RAM user or RAM role to which you have granted permissions and select **All Resources** in the top navigation bar of the ACK console.

**Solution**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the top navigation bar, choose **All Resources** > **All Resources**.
    
    ![11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7790951261/p259620.png)
    
3.  Move the pointer over the avatar in the upper-right corner of the ACK console and make sure that you are logged on as the RAM user or RAM role that has the required permissions.
    

## How do I grant a RAM user or RAM role the permissions to create clusters?

1.  Use your Alibaba Cloud account to assign the system roles to ACK.
    
    -   Service role authorization is a one-time operation. If you are unsure whether it has been completed, you can:
        
        1.  Log on with your Alibaba Cloud account.
            
        2.  Access [RAM Quick Authorization](https://ur.alipay.com/1paTcxSWdAEW70GVH5TZiO), and perform bulk authorization for ACK service roles.
            
    -   For more information about the default system roles for ACK, see [ACK roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-default-roles#task-1614779).
        
    
2.  Use your Alibaba Cloud account to attach custom RAM policies to the RAM user or RAM role.
    
    Make sure that the RAM user or RAM role has the `cs:CreateCluster` permission. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).
    
    The following YAML template is an example:
    
    ```
    {
     "Statement": [{
         "Action": [
             "cs:CreateCluster"
         ],
         "Effect": "Allow",
         "Resource": [
             "*"
         ]
     }],
     "Version": "1"
    }
    ```
    
    **Note**
    
    -   When a cluster is created, the system associates cloud resources with the cluster, such as virtual private clouds (VPCs). Make sure that the RAM user or RAM role is granted the required permissions to access cloud resources.
        
    -   Make sure that the RAM user has the List permission on VPCs. To grant this permission, you can attach the AliyunVPCReadOnlyAccess policy to the RAM user.
        
    -   If you want to grant permissions on other resources, check the documentation on the system policies and authorizations related to the corresponding cloud services. For more information, see [RAM authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#section-xgk-3k1-gz9).
        
    

## What error codes indicate that the current Alibaba Cloud account is not assigned the service roles on which ACK relies?

If the ACK console or OpenAPI Explorer platform prompts the following error codes when you use ACK, the current Alibaba Cloud account is not assigned the service roles on which ACK relies. You must use an Alibaba Cloud account or RAM user that is attached with the AdministratorAccess policy to log on to the ACK console or OpenAPI Explorer platform and click the hyperlink in the error message. On the page that appears, assign the role to the Alibaba Cloud account or RAM user.

**Error code**

**Sample error message**

ErrManagedKuberneteRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

ErrKubernetesAuditRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

ErrManagedAddonRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

ErrManagedSecurityRoleNotAttach

please complete the security ramrole authorization at https://\*\*\*

ErrEdgeAddonRoleNotAttach

please complete the edge cluster addon's service ramrole authorization at https://\*\*\*

ErrAutoScalerRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

ErrAcrHelperRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

ErrCostExporterRoleNotAttach

please complete the cluster addon's service ramrole authorization at https://\*\*\*

MissingAuth.AliyuncsManagedSecurityRole

please complete the security ramrole authorization at https://\*\*\*

## How do I navigate to the page on which I can assign the system roles for ACK?

If you have revoked system roles that are assigned to ACK, you must assign the system roles to ACK again. For more information, see [Quickly create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users#section-kno-vsz-iqp).

**Note**

You must use an Alibaba Cloud account to reassign the system roles to ACK.

## What do I do if a RAM role is revoked from an ECS instance?

When your application that runs on an Elastic Compute Service (ECS) instance sends requests to `metadata api 100`, a **404** error or a **Message:Node condition RAMRoleError is now: True, reason: NodeHasNoRAMRole** error message is returned. You can reassign a RAM role to an ECS instance by using the following methods:

-   If a RAM role is revoked from an ECS instance, you must assign the RAM role to the ECS instance again. For more information, see [Detach or change an instance RAM role](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#265047f5davq4).
    
    -   For an ECS instance that serves as a master node in your cluster (applicable to only ACK dedicated clusters): On the **Basic Information** tab of the **Cluster Information** page, assign the **Master RAM Role** to the ECS instance.
        
    -   For an ECS instance that serves as a worker node in your cluster: On the **Basic Information** tab of the **Cluster Information** page, assign the **Worker RAM Role** to the ECS instance.
        
-   If you modified the content of the policy that is attached to the RAM role, check whether the modified content contains the required permissions.
    
-   If you modified the content of the policy that is attached to the RAM role before the error occurs, try to roll back the policy to the original version.
    

## How do I assign a custom RAM role to an ACK cluster?

You can assign a custom RAM role in your Kubernetes cluster by using a custom Worker RAM role. For more information, see [Use custom worker RAM roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-custom-worker-ram-roles).

## Will online workloads be affected after a RAM user is deleted because the relevant staff has resigned?

You can use the other RAM users to manage clusters as normal after you delete a RAM user. However, you must use an Alibaba Cloud account to revoke the kubeconfig file issued to the RAM user that you deleted. For more information, see [Revoke the kubeconfig file of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential#section-8xt-guf-xhv).

**Important**

Before you revoke the kubeconfig file that is issued to the RAM user that you deleted, you must replace the kubeconfig file that is stored in your applications with a new kubeconfig file.
