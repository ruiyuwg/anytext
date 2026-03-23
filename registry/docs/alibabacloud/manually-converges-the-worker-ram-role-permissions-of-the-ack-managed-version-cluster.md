To improve the security of nodes in an ACK managed cluster, you can manually adjust the permissions of the RAM role assigned to worker nodes based on the principle of least privilege.

The restriction process is iterative: upgrade components to versions that support token-based authentication, collect audit logs to identify which permissions are in use, then progressively remove the permissions that are not needed.

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed cluster (ACK Pro cluster or ACK basic cluster) running Kubernetes 1.18 or later. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) and [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster)
    
-   (If applicable) Migrated any ACK dedicated cluster to an ACK Pro cluster. For more information, see [Hot migrate an ACK dedicated cluster to an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters)
    
-   Granted the default service roles required by the ACK managed cluster. For more information, see [Grant permissions to service roles with one click](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users#section-kno-vsz-iqp)
    

## Step 1: Assess current permissions

Determine whether the Worker RAM role has excess permissions that need to be restricted.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. On the **Basic Information** tab, click the link next to **Worker RAM Role** to open the RAM console.
    
3.  On the **Permissions** tab of the **Role** page, check whether any access policies are attached.
    
    -   If the list is empty, no restriction is needed. The Worker RAM role has no extra permissions.
        
    -   If the list contains one or more policies (for example, `k8sWorkerRolePolicy-db8ad5c7***`), the role may have more permissions than necessary. Continue with Step 2.
        

**Note**

Review each attached policy to understand which Alibaba Cloud API actions it grants. This helps you set a baseline before making changes.

## Step 2: Upgrade system components

Upgrade the system components in your cluster to the minimum required versions listed below. Newer component versions use token-based authentication through managed service roles instead of relying on the Worker RAM role directly.

**Important**

Upgrade components one at a time. Confirm that each upgrade succeeds before starting the next. Read the remarks for each component before upgrading.

For more information about managing components, see [Manage components](/help/en/ack/manage-system-components).

### Components managed through component management

On the **Component Management** page, upgrade each installed component to at least the minimum version shown below. For components that are already at or above the minimum version, redeploy them with the command listed in the table. You can also [redeploy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#p-0ta-scv-cgs) components from the console.

#### Monitoring and observability

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`metrics-server`

v0.3.9.4-ff225cd-aliyun

`kubectl -n kube-system rollout restart deployment/metrics-server`

None

`alicloud-monitor-controller`

v1.5.5

`kubectl -n kube-system rollout restart deployment/alicloud-monitor-controller`

None

`arms-prometheus`

1.1.11

`kubectl -n arms-prom rollout restart deployment/arms-prometheus-ack-arms-prometheus`

None

`ack-cost-exporter`

1.0.10

`kubectl -n kube-system rollout restart deployment/ack-cost-exporter`

Before upgrading, [grant permissions](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedCostRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCostRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) for the managed cost role.

`ack-node-problem-detector`

1.2.16

`kubectl -n kube-system rollout restart deployment/ack-node-problem-detector-eventer`

None

#### Networking

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`terway`

v1.0.10.333-gfd2b7b8-aliyun

`kubectl -n kube-system rollout restart daemonset/terway`

Upgrade the Terway variant that matches your cluster's Terway mode. For more information, see [Use the Terway network plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#context-h94-jfz-u28). After upgrading, check the Terway component configuration. See [Check the Terway component configuration](#b7b93afa1a3j5).

`terway-eni`

v1.0.10.333-gfd2b7b8-aliyun

`kubectl -n kube-system rollout restart daemonset/terway-eni`

See remarks for `terway`.

`terway-eniip`

v1.0.10.333-gfd2b7b8-aliyun

`kubectl -n kube-system rollout restart daemonset/terway-eniip`

See remarks for `terway`.

`terway-controlplane`

v1.2.1

`kubectl -n kube-system rollout restart deployment/terway-controlplane`

None

`mse-ingress-controller`

1.1.5

`kubectl -n mse-ingress-controller rollout restart deployment/ack-mse-ingress-controller`

Before upgrading, [grant permissions](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fmse.console.alibabacloud.com%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedMseRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedMseRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) for the managed Microservices Engine (MSE) role.

#### Storage

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`csi-plugin`

v1.18.8.45-1c5d2cd1-aliyun

`kubectl -n kube-system rollout restart daemonset/csi-plugin`

None

`csi-provisioner`

v1.18.8.45-1c5d2cd1-aliyun

`kubectl -n kube-system rollout restart deployment/csi-provisioner`

None

`storage-operator`

v1.18.8.55-e398ce5-aliyun

`kubectl -n kube-system rollout restart deployment/storage-auto-expander`  
`kubectl -n kube-system rollout restart deployment/storage-cnfs`  
`kubectl -n kube-system rollout restart deployment/storage-monitor`  
`kubectl -n kube-system rollout restart deployment/storage-snapshot-manager`  
`kubectl -n kube-system rollout restart deployment/storage-operator`  
  
  
  

None

`alicloud-disk-controller`

v1.14.8.51-842f0a81-aliyun

`kubectl -n kube-system rollout restart deployment/alicloud-disk-controller`

None

`flexvolume`

v1.14.8.109-649dc5a-aliyun

`kubectl -n kube-system rollout restart daemonset/flexvolume`

[Migrate FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).

#### Logging

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`logtail-ds`

v1.0.29.1-0550501-aliyun

`kubectl -n kube-system rollout restart daemonset/logtail-ds`  
`kubectl -n kube-system rollout restart deployment/alibaba-log-controller`  

None

`loongcollector`

v3.0.2

`kubectl -n kube-system rollout restart daemonset/loongcollector-ds`  
`kubectl -n kube-system rollout restart deployment/loongcollector-operator`  

None

#### Security and image management

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`aliyun-acr-credential-helper`

v23.02.06.2-74e2172-aliyun

`kubectl -n kube-system rollout restart deployment/aliyun-acr-credential-helper`

Before upgrading, [grant permissions](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22CS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedAcrRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedAcrRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) for the managed Container Registry (ACR) role. If you do not have custom RAM permissions and do not need to pull images across accounts, go to **Component Management** and set **tokenMode** to **managedRole**. If you do not need password-free image pulling for private images, uninstall this component.

`ack-onepilot`

3.0.11

`kubectl -n ack-onepilot rollout restart deployment/ack-onepilot-ack-onepilot`

Before upgrading, [grant permissions](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fmse.console.alibabacloud.com%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedMseRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedMseRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) for the managed MSE role.

### Cluster Autoscaler (installed through a node pool)

**Component**

**Minimum version**

**Redeploy command**

**Remarks**

`cluster-autoscaler`

v1.3.1-bcf13de9-aliyun

`kubectl -n kube-system rollout restart deployment/cluster-autoscaler`

To check the current version, use either method: **Method 1:** View the version in the [ACK console](https://cs.console.alibabacloud.com). For more information, see [How to view the version of the cluster-autoscaler component](/help/en/ack/product-overview/cluster-autoscaler-update#3202c02068anf). **Method 2:** Run: `kubectl -n kube-system get deployment/cluster-autoscaler -o yaml &#124; grep acs/autoscaler`. To upgrade, see [\[Component Upgrade\] cluster-autoscaler Upgrade Announcement](/help/en/ack/product-overview/cluster-autoscaler-update).

### Check the Terway component configuration

If your cluster has the `terway`, `terway-eni`, or `terway-eniip` component installed, verify that the Terway ConfigMap contains the correct credential path.

1.  Run the following command to open the Terway ConfigMap for editing:
    
    ```
       kubectl edit cm eni-config -n kube-system
    ```
    
2.  In the `eni_conf` section, check for the following configuration item:
    
    -   If this line is present, no change is needed.
        
    -   If this line is missing, add it below the `min_pool_size` configuration item: \`\``json "credential_path": "/var/addon/token-config",` \`\`
        
    
    ```
       "credential_path": "/var/addon/token-config",
    ```
    
3.  Redeploy the Terway component workload by running the corresponding redeploy command from the networking table above.
    

## Step 3: Collect audit logs

Set up audit logging to track which Alibaba Cloud API operations the Worker RAM role performs. This data tells you which permissions are still in use and which can be safely removed.

**Note**

Collect audit logs for at least one week.

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  Create a single-account trail for the region where the cluster is located. When creating the trail, select **Deliver Events To Simple Log Service (SLS)**. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail).
    

For the full list of services that ActionTrail supports, see [Supported Alibaba Cloud services](/help/en/actiontrail/product-overview/services-that-work-with-actiontrail#reference-wjh-gny-kfb).

## Step 4: Test cluster features

After upgrading components and redeploying workloads, verify that core cluster features still work correctly.

**Feature area**

**Test case**

**Reference**

Compute

Scale nodes out and in.

[Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool)

Network

Verify that IP addresses are assigned to pods.

[Deployments and releases](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deployment-and-release/)

Storage

Deploy workloads that use external storage (if applicable).

[Storage - CSI](/help/en/ack/storage-management-csi)

Monitoring

Confirm that monitoring and alert data is available.

[Observability](/help/en/ack/observability-4)

Elasticity

Trigger node autoscaling (if applicable).

[Enable node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes)

Security

Pull a private image without credentials (if applicable).

[Install and use the unmanaged password-free component](/help/en/ack/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets)

**Important**

In addition to the tests above, test the business logic of the applications deployed in your cluster. Confirm that application-level functionality works as expected.

## Step 5: Analyze audit logs

After collecting logs for at least one week, query the data to identify which API operations the Worker RAM role performed.

1.  Log on to the [Simple Log Service (SLS) console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, click the project you specified in Step 3.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the destination Logstore. The Logstore is named `actiontrail_<trail_name>`.
    
4.  Run the following query to list the API operations called through the Security Token Service (STS) token of the Worker RAM role. Replace `<worker_role_name>` with the name of the Worker RAM role for your cluster. The results show which Alibaba Cloud services and API operations are being called. Use this data in Step 6 to decide which permissions to keep and which to remove.
    
    ```
       * and event.userIdentity.userName: <worker_role_name> | select "event.serviceName", "event.eventName", count(*) as total GROUP BY "event.eventName", "event.serviceName"
    ```
    

## Step 6: Restrict permissions

Based on the audit log analysis, remove permissions that the Worker RAM role does not need.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. On the **Basic Information** tab, click the link next to **Worker RAM Role** to open the RAM console.
    
3.  On the **Permissions** tab of the **Role** page, click the destination access policy to go to the **Policy Document** tab. Click **Edit Policy**.
    
    **Important**
    
    Before you modify the policy document, back up the existing policy document. This lets you roll back the permission configuration if needed.
    
4.  When you modify the policy document, decide whether to delete unnecessary permissions based on your requirements and the analysis results of the audit logs from Step 5. For example, you can delete the `Action` permissions that do not appear in the statistics. If you confirm that no permissions are required, you can revoke all granted access policies.
    
5.  Redeploy the system component workloads. Use the redeploy commands listed in Step 2.
    
6.  Repeat Steps 4, 5, and 6 until the Worker RAM role is granted only the minimum permissions required by the components or applications.
    

## References

-   [Best practices for authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-of-authorization)
