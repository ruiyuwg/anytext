Integrate Prometheus Monitoring to collect metrics for the control plane, nodes, and applications in your ACK cluster, and improve cluster performance management with visual dashboards and real-time alerts.

## Choose a version

[Managed Service for Prometheus](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038) fully integrates with the open-source Prometheus ecosystem and provides a fully managed monitoring service. This service manages underlying issues such as data storage, data visualization, and system O&M.

-   **Pro Edition (Recommended)**: Stores metrics for 90 days and provides a fully managed collector. This edition offers a production-grade Service-Level Agreement (SLA) of 99.95%. It also includes customizable Grafana dashboards and pre-configured alert rules for various Container Service components.
    
-   **Basic Edition**: Stores metrics for 7 days and provides only basic monitoring dashboards. You must maintain the collector yourself.
    

## Enable Prometheus monitoring

## Enable monitoring for an existing cluster

1.  (Optional) For an ACK dedicated cluster, you must first grant [authorization for monitoring policies](#fcd09bedf3avu) to the cluster.
    
2.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left of the cluster details page, choose **Operations** > **Prometheus Monitoring**.
    
3.  On the **Prometheus Monitoring** page, select a container monitoring version and click **Install**.
    
    > After you enable monitoring, [default basic metrics](#b9f84c00c20yq) are automatically collected. For information about collecting custom metrics, see [Collect custom metrics](#title-rxb-1pv-86d). You can also view several preset monitoring dashboards on this page, such as **Cluster Overview**, **Node Monitoring**, **Application Monitoring**, **Network Monitoring**, and **Storage Monitoring**.
    

## Enable monitoring when creating a cluster

-   ACK managed cluster Pro Edition:
    
    On the **Component Configuration** page, in the **Container Monitoring** section, select Container Cluster Monitoring Pro Edition or Container Cluster Monitoring Basic Edition. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
    > Auto Mode for smart hosting enables Container Monitoring Basic Edition by default.
    
-   ACK managed cluster Basic Edition, ACS clusters, and ACK Serverless clusters:
    
    On the **Component Configurations** page of the create cluster wizard, in the **Monitor containers** section, select **Enable Managed Service for Prometheus** to install Container Monitoring Basic Edition.
    
    > After monitoring is enabled, [default basic metrics](#b9f84c00c20yq) are automatically collected. To collect custom metrics, see [Collect custom metrics](#title-rxb-1pv-86d). On the details page of the target cluster, in the navigation pane on the left, select **Operations Management** > **Prometheus Monitoring**. You can then view pre-configured monitoring dashboards such as **Cluster Monitoring Overview**, **Node Monitoring**, **Application Monitoring**, **Network Monitoring**, and **Storage Monitoring**.
    

## **Configure alert notifications**

You can configure alert rules for key metrics. If an anomaly occurs, notifications are automatically sent through channels such as email, text message, or DingTalk.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  On the **Notification Objects** page, select a notification method and [create an alert notification recipient](/help/en/arms/alarm-operation-center/manage-contacts/).
    
3.  In the navigation pane on the left of the ARMS console, choose **Managed Service for Prometheus** > **Prometheus Alert Rules**.
    
4.  On the **Prometheus Alert Rules** page, click **Create Prometheus Alert Rule**.
    
    > For more information, see [Configure Prometheus alerting rules](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances#title-w34-xyp-q5a).
    

## **Collect custom monitoring metrics**

Prometheus monitoring supports several ways to collect custom metrics, such as request QPS and processing latency. For more information, see [Manage custom collection rules for container environments](/help/en/prometheus/user-guide/manage-container-environments-custom-collection-rules/).

## **Disable Prometheus monitoring**

1.  On the details page of the target cluster, in the navigation pane on the left, click **Add-ons**.
    
2.  On the **Add-ons** page, click the **Logs and Monitoring** tab. Find the **ack-arms-prometheus** component and click **Uninstall**. In the dialog box that appears, click **OK**.
    

## **Billing**

-   **Monitoring fees based on cluster size**: The Basic Edition is free. The Pro Edition is billed on a pay-as-you-go basis based on the number of nodes in the cluster.
    
-   **Prometheus instance fees**: Collection of [basic metrics](/help/en/prometheus/developer-reference/basic-metrics/#concept-2372936) is free of charge. Collection of custom metrics is billed on a pay-as-you-go basis based on factors such as data writes, data reports, storage volume, and retention period.
    

For detailed billing rules and pricing, see [Container Monitoring Billing](/help/en/arms/prometheus-monitoring/product-overview/container-cluster-monitoring-pro-version-billing-rule).

## **Default basic metrics**

After the Prometheus monitoring feature is enabled, basic metrics for container monitoring are automatically collected. For more information about the basic metrics, see [Metric Descriptions](/help/en/prometheus/developer-reference/basic-metrics/#concept-2372936).

-   Basic resource monitoring for containers (kubelet).
    
-   Application state monitoring for clusters (kube-state-metrics).
    
-   Basic resource monitoring for cluster nodes (node-exporter).
    
-   GPU monitoring for cluster nodes (ack-gpu-exporter).
    
-   The [control plane component monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-control-plane-components/) feature for managed clusters monitors metrics for API Server, etcd, kube-scheduler, kube-controller-manager, and cloud-controller-manager.
    
-   Basic monitoring metrics for cluster CoreDNS.
    
-   Basic monitoring metrics for cluster Ingress-Controller.
    
-   Basic metrics that are automatically reported after you enable specific features:
    
    -   After you enable [Container Storage Monitoring Overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side), metrics for the csi-plugin component are reported.
        
    -   After you enable [the Cost Insight feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cost-analysis), metrics for the ack-cost-exporter component are reported.
        
    -   After you enable [colocation of multi-types workloads monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/basic-monitoring) and [resource profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling), metrics for the ack-koordinator component are reported.
        

## **FAQ**

#### **The Prometheus Monitoring page shows "No related monitoring dashboard found"**

If you [enable Prometheus monitoring](#title-z8f-vxr-x98) and see the message **No dashboard is found** on the **Operations** > **Prometheus Monitoring** page for the target cluster, follow the procedure below to resolve the issue.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8458050471/p919022.png)

1.  Reinstall the Prometheus monitoring component.
    
    1.  [Disable Prometheus monitoring](#96998fc2e8l42).
        
    2.  Reinstall the component:
        
        1.  After confirming that the uninstallation is complete, click **Install**, and then click **OK** in the dialog box.
            
        2.  After the installation is complete, return to the Prometheus Monitoring page to check whether the issue is resolved.
            
            If the issue persists, proceed to the next step.
            
2.  Check the Prometheus instance connection.
    
    1.  In the navigation pane on the left of the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home), click **Integration Management**.
        
    2.  On the **Integrated Environments** tab, check the **Container Service** list for a container environment with the same name as your cluster.
        
        -   If no corresponding container environment exists: See [Connect using the ARMS or Prometheus console](/help/en/prometheus/container-observable#8f759b4c054nt).
            
        -   If you have a container environment, click **Configure Agent** in the **Actions** column for the target environment to open the **Configure Agent** page.
            
            Check whether the installed agents run as expected.
            

#### **How do I adjust the metric storage duration?**

For more information, see [Adjust metric storage duration](/help/en/prometheus/product-overview/how-do-i-change-the-storage-duration-of-the-data-samples-for-a-metric#title-0l3-y42-pcd).

#### How do I view the version of the ack-arms-prometheus component?

1.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left, click **Add-ons**.
    
2.  On the **Add-ons** page, click the **Logs and Monitoring** tab and find the **ack-arms-prometheus** component.
    
    The current version is displayed below the component. If a newer version is available, click **Upgrade** next to the version number.
    
    **Note**
    
    The **Upgrade** option is available only if the installed component is not the latest version.
    

#### Why can't I deploy GPU monitoring?

GPU monitoring may fail to deploy if a GPU node has taints. You can perform the following steps to check for taints on a GPU node.

1.  Run the following command to view the taints of the target GPU node.
    
    If the GPU node has custom taints, you will find entries related to them in the output. This topic uses a taint with a `key` of `test-key`, a `value` of `test-value`, and an `effect` of `NoSchedule` as an example:
    
    ```
    kubectl describe node cn-beijing.47.100.***.***
    ```
    
    Expected output:
    
    ```
    Taints:test-key=test-value:NoSchedule
    ```
    
2.  You can handle the taints on the GPU node in one of the following ways.
    
    -   Run the following command to delete the taints of the GPU node.
        
        ```
        kubectl taint node cn-beijing.47.100.***.*** test-key=test-value:NoSchedule-
        ```
        
    -   Declare a toleration for the taints of the GPU node to allow pods to be scheduled to the node.
        
        ```
        # 1. Run the following command to edit ack-prometheus-gpu-exporter.
        kubectl edit daemonset -n arms-prom ack-prometheus-gpu-exporter
        
        # 2. Add the following fields to the YAML file to declare the toleration for the taints.
        # Omit other fields.
        # The tolerations field is added above the containers field and at the same level as the containers field.
        tolerations:
        - key: "test-key"
          operator: "Equal"
          value: "test-value"
          effect: "NoSchedule"
        containers:
         # Omit other fields.
        ```
        

#### **How do I completely and manually delete ARMS-Prometheus?**

If you delete only the namespace of Prometheus Monitoring for Alibaba Cloud, residual configurations may remain and cause reinstallation to fail. To completely and manually delete all ARMS-Prometheus configurations, perform the following operations.

-   Delete the arms-prom namespace.
    
    ```
    kubectl delete namespace arms-prom
    ```
    
-   Delete the ClusterRoles.
    
    ```
    kubectl delete ClusterRole arms-kube-state-metrics
    kubectl delete ClusterRole arms-node-exporter
    kubectl delete ClusterRole arms-prom-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-prometheus-oper3
    kubectl delete ClusterRole arms-prometheus-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-pilot-prom-k8s
    kubectl delete ClusterRole gpu-prometheus-exporter
    kubectl delete ClusterRole o11y:addon-controller:role
    kubectl delete ClusterRole arms-aliyunserviceroleforarms-clusterrole
    ```
    
-   Delete the ClusterRoleBindings.
    
    ```
    kubectl delete ClusterRoleBinding arms-node-exporter
    kubectl delete ClusterRoleBinding arms-prom-ack-arms-prometheus-role-binding
    kubectl delete ClusterRoleBinding arms-prometheus-oper-bind2
    kubectl delete ClusterRoleBinding arms-kube-state-metrics
    kubectl delete ClusterRoleBinding arms-pilot-prom-k8s
    kubectl delete ClusterRoleBinding arms-prometheus-ack-arms-prometheus-role-binding
    kubectl delete ClusterRoleBinding gpu-prometheus-exporter
    kubectl delete ClusterRoleBinding o11y:addon-controller:rolebinding
    kubectl delete ClusterRoleBinding arms-kube-state-metrics-agent
    kubectl delete ClusterRoleBinding arms-node-exporter-agent
    kubectl delete ClusterRoleBinding arms-aliyunserviceroleforarms-clusterrolebinding
    ```
    
-   Delete the Roles and RoleBindings.
    
    ```
    kubectl delete Role arms-pilot-prom-spec-ns-k8s
    kubectl delete Role arms-pilot-prom-spec-ns-k8s -n kube-system
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s -n kube-system
    ```
    

#### **How do I uninstall Managed Service for Prometheus using Helm?**

If you manually deployed the service using Helm, or if residual resources remain due to environment or Helm version issues, you must use this method to uninstall the service.

1.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left of the cluster details page, choose **Applications** > **Helm**.
    
2.  On the **Helm** page, find the arms-prometheus component and click **Delete** in the **Actions** column. Then, select **Clear Release Records** and follow the prompts to delete the application.
    

#### **An "xxx in use" error occurs when installing the ack-arms-prometheus component**

1.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left of the cluster details page, choose **Applications** > **Helm**.
    
2.  On the **Helm** page, verify that ack-arms-prometheus exists.
    
    -   Delete ack-arms-prometheus from the **Helm** page and then reinstall it on the **Add-ons** page. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
        
    -   Not found:
        
        1.  If `ack-arms-prometheus` is not found, it indicates that residual resources remain from the deletion of the `ack-arms-prometheus` Helm Release. You must then [manually and completely delete ARMS-Prometheus](#2a2f19b532b3i).
            
        2.  [Re-enable Prometheus monitoring](#28f43165dc3sl).
            
    

#### **Installation of the ack-arms-prometheus component fails after a "Component Not Installed" message appears**

-   Check whether the ack-arms-prometheus component is already installed.
    
    1.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left of the cluster details page, choose **Applications** > **Helm**.
        
    2.  On the **Helm** page, verify that ack-arms-prometheus exists.
        
        -   Delete ack-arms-prometheus from the **Helm** page and then reinstall it on the **Add-ons** page. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
            
        -   Not found:
            
            1.  If `ack-arms-prometheus` is not found, it indicates that residual resources remain from the deletion of the `ack-arms-prometheus` Helm Release. You must then [manually and completely delete ARMS-Prometheus](#2a2f19b532b3i).
                
            2.  [Re-enable Prometheus monitoring](#28f43165dc3sl).
                
        
-   Check the logs of ack-arms-prometheus for errors.
    
    1.  In the navigation pane on the left of the cluster details page, choose **Workloads** > **Deployments**.
        
    2.  At the top of the **Deployments** page, set **Namespace** to **arms-prom** and click arms-prometheus-ack-arms-prometheus.
        
    3.  Click the **Logs** tab and check the logs for errors.
        
-   Check whether an error occurred during the agent installation.
    
    1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/). In the navigation pane on the left, click **Integration Management**.
        
    2.  On the **Integration Management** tab, find the target container environment in the **Container Service** list. In the **Actions** column, click **Configure Agent** to open the **Configure Agent** page.
        

#### **How do I grant monitoring permissions for an ACK dedicated cluster?**

1.  On the [Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the navigation pane on the left, click **Cluster Information**.
    
2.  On the **Basic Information** tab, click the **KubernetesWorkerRole-\*\*\*** link to the right of **Worker RAM Role**. On the RAM role page, click the **Permissions** tab. In the **Policy** column, click **k8sWorkerRole\*\*\*\***.
    
3.  On the access policy details page, click the **Policy Document** tab, and then click **Edit Policy Document**.
    
4.  In the **JSON** editor, add the following authorization rule to the `Statement` field and click **OK**.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": [
                    "arms:Describe*",
                    "arms:List*",
                    "arms:Get*",
                    "arms:Search*",
                    "arms:Check*",
                    "arms:Query*",
                    "arms:ListEnvironments",
                    "arms:DescribeAddonRelease",
                    "arms:InstallAddon",
                    "arms:DeleteAddonRelease",
                    "arms:ListEnvironmentDashboards",
                    "arms:ListAddonReleases",
                    "arms:CreateEnvironment",
                    "arms:UpdateEnvironment",
                    "arms:InitEnvironment",
                    "arms:DescribeEnvironment",
                    "arms:InstallEnvironmentFeature",
                    "arms:ListEnvironmentFeatures",
                    "cms:CreateIntegrationPolicy",
                    "cms:ListAddonReleases",
                    "cms:UpdateAddonRelease",
                    "cms:CreateAddonRelease",
                    "cms:GetPrometheusInstance",
                    "cms:ListIntegrationPolicyStorageRequirements"
                ],
                "Resource": "*",
                "Effect": "Allow"
            }
        ]
    }
    ```
    

## **References**

[Upgrade Alibaba Cloud Prometheus Monitoring from Basic Edition to Pro Edition](/help/en/arms/prometheus-monitoring/using-container-monitoring-pro#68a8093db9n2g).
