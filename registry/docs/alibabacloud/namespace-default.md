If the predefined ClusterRoles in the Container Service for Kubernetes (ACK) console cannot meet your permission requirements, you can customize ClusterRoles and Roles for granular role-based access control (RBAC) permissions. This allows for flexible configuration of permission policies based on your business requirements and security policies. This topic describes how to create custom RBAC permissions.

## RBAC permissions

A `Role` defines permissions within a specific namespace, while a `ClusterRole` defines permissions at the cluster level. You can create custom `Role` and `ClusterRole` YAML manifests based on the policy descriptions of the following resources for fine-grained access control for ACK cluster resources.

### **Role**

The following YAML template defines a Role named `my-role` with read permissions on pod resources within the default namespace.

```
   apiVersion: rbac.authorization.k8s.io/v1
   kind: Role
   metadata:
     namespace: default
     name: my-role 
   rules:                               # A list of permission rules.
   - apiGroups: [""]                    # The API group to which the resource belongs.
     resources: ["pods"]                # The pod resource types.
     verbs: ["get", "list"]             # The get and list permission policies.
```

### **ClusterRole**

The following YAML template defines a ClusterRole named `my-clusterrole` with read permissions on pods and Services resources in the cluster.

**Note**

ClusterRole is a cluster-scoped resource, and a namespace parameter cannot be specified in the YAML configuration file.

```
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
# namespace: default                     
  name: my-clusterrole
rules:                                 # A list of permission rules.
  - apiGroups: [""]                    # The API group to which the resource belongs.
    resources: ["pods"]                # The pod resource types.
    verbs: ["get", "list"]             # The get and list permission policies.
  - apiGroups: [""]
    resources: ["services"]
    verbs: ["get", "list"]
```

To achieve fine-grained access control for Resource Access Management (RAM) users or roles on cluster resources, you can create custom RBAC permissions for different resources based on the following policy descriptions of common resource types:

### **Policy descriptions of common resource types**

-   Read permissions
    
    -   `get`: retrieve detailed information of the specified resource.
        
    -   `list`: obtain a list of resource collections.
        
    -   `watch`: monitor resource changes and receive real-time updates.
        
-   Write permissions
    
    -   `create`: create resource instances.
        
    -   `update`: modify existing resources.
        
    -   `patch`: partially modify existing resources.
        
    -   `delete`: remove specified resources.
        

**Resource name**

**Resource type**

**API group**

**Permission policies**

Pods

resources: \["pods"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete", "exec", "proxy"]`

Service

resources: \["services"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

ConfigMaps

resources: \["configmaps"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

Secrets

resources: \["secrets"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

PersistentVolumes

resources: \["persistentvolumes"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

PersistentVolumeClaim

resources: \["persistentvolumeclaims"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

NameSpaces

resources: \["namespaces"\]

apiGroups: \[""\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

Deployments

resources: \["deployments"\]

apiGroups: \["apps"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

DaemonSet

resources: \["daemonsets"\]

apiGroups: \["apps"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

StatefulSet

resources: \["statefulsets"\]

apiGroups: \["apps"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

Ingresses

resources: \["ingresses"\]

apiGroups: \["networking.k8s.io"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

Networkpolicies

resources: \["networkpolicies"\]

apiGroups: \["networking.k8s.io"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

Jobs

resources: \["jobs"\]

apiGroups: \["batch"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

CronJobs

resources: \["cronjobs"\]

apiGroups: \["batch"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

StorageClasses

resources: \["storageclasses"\]

apiGroups: \["storage.k8s.io"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

HorizontalPodAutoscalers

resources: \["horizontalpodautoscalers"\]

apiGroups: \["autoscaling"\]

`verbs: ["get", "list", "watch", "update", "create", "patch", "delete"]`

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5819504371/CAEQMRiBgICQo.fonRkiIDExNTMxNTJjN2M0YzQ0MjM5ZDc2OTM0YTJjY2E4NzZk4396246_20241023164929.344.svg)

You can customize RBAC permissions through the console or `kubectl`.

**Important**

The ACK console only supports binding custom ClusterRoles with RBAC permissions within the cluster. To bind custom Roles with specific permissions, you can use the `kubectl` command.

## Console

### Step 1: Create custom RBAC permissions

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Security** > **Role**.
    
3.  On the **Role** page, select the **Cluster Role** tab. Then, click **OK**.
    
4.  In the **Create YAML** panel, enter the YAML content of the ClusterRole and click **OK** to create the ClusterRole.
    
    This step uses the YAML template for [ClusterRole](#d243978e0fq4o) as an example. You can view the custom permission my-clusterrole under the **Cluster Role** tab after creation.
    

### **Step 2: Use custom RBAC permissions for authorization**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  On the **Authorizations** page, grant permissions.
    
    -   Grant permissions to a RAM user
        
        Click the **RAM Users** tab, find the RAM user that you want to manage in the list, and then click **Modify Permissions** to open the **Permission Management** panel. You can also select multiple RAM users to grant permissions.
        
    -   Grant permissions to a RAM role
        
        Click the **RAM Roles** tab, specify RAM Role Name, and then click **Modify Permissions** to open the **Permission Management** panel.
        
        **Note**
        
        You can manually enter a RAM role or select a RAM role from the drop-down list. You can click the blank box next to the RAM Role Name field. The list of existing RAM roles is displayed. Then, select an existing RAM role from the list to grant permissions.
        
3.  In the **Permission Management** panel, click **\+ Add Permissions**. In the **Add Permissions** section, select the **Clusters** associated with the created ClusterRole and the **Namespace** to be authorized. Select **Custom** under **Permission Management**, then select **my-clusterrole** from the right-hand drop-down list, and click **Submit**.
    

## kubectl

### **Step 1: Create custom RBAC permissions**

1.  Use the following YAML template to create a file named my-clusterrole.yaml:
    
    ```
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: my-clusterrole
      namespace: default
    rules:
      - apiGroups: [""]
        resources: ["pods"]
        verbs: ["get", "list", "watch"]
      - apiGroups: [""]
        resources: ["services"]
        verbs: ["get", "list", "watch"]
    ```
    
2.  Run the following command to create the ClusterRole:
    
    ```
    kubectl apply -f  my-clusterrole.yaml
    ```
    

### **Step 2: Obtain the authorization object ID**

-   To authorize a RAM user, obtain the UserId by querying the RAM username. For more information, see [GetUser](/help/en/ram/developer-reference/api-ram-2015-05-01-getuser).
    
-   To authorize a RAM role, obtain the RoleId by querying the RAM role name. For more information, see [GetRole](/help/en/ram/developer-reference/api-ram-2015-05-01-getrole).
    

### Step 3: Use custom RBAC permissions for authorization

1.  Use the following YAML template to create a file named my-clusterrole-binding.yaml:
    
    ```
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: my-clusterrole-binding
    subjects:
    - kind: User
      name: "20811XXXXXXXXX2288"  # UserId or RoleId of the authorization object obtained in Step 2.
    roleRef:
      kind: ClusterRole
      name: my-clusterrole
      apiGroup: rbac.authorization.k8s.io
    ```
    
2.  Run the following command to create the ClusterRoleBinding:
    
    ```
    kubectl apply -f  my-clusterrole-binding.yaml
    ```
    

After the RAM user has been granted custom RBAC permissions, confirm their access by [retrieving the KubeConfig of the target cluster and connecting to the cluster using the kubectl tool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
