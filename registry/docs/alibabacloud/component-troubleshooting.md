If an error occurs when you install, update, or modify a component in the Container Service for Kubernetes (ACK) console, an error code is displayed in the console. You can search for the error code in this topic to view the error details, the cause of the error, and the solution to the error. This topic lists the error codes that may be displayed when you manage components, and describes the causes of and solutions to these errors.

## AddonOperationFailed.ResourceExists

### Cause

The component cannot be directly installed because specific resources that are required by the component already exist in the cluster. This error code may be returned in the following scenarios:

-   You have installed another version, such as the open source version, of the component in the cluster by using other methods.
    
-   You have installed the component by using Helm V2 and the component is not migrated or uninstalled before you update Helm to V3.
    
-   You have created resources whose names are the same as the resources that are required by the component in the cluster.
    

### Solution

Delete the existing resources that cause the issue. You can view the existing resources that cause the issue in the error message. Example:

```
Addon status not match, failed upgrade helm addon arms-cmonitor for cluster c3cf94b952cd34b54b71b10b7********, err: rendered manifests contain a resource that already exists. Unable to continue with update: ConfigMap "otel-collector-config" in namespace "arms-prom" exists and cannot be imported into the current release
```

The error message indicates that you must delete the otel-collector-config ConfigMap in the arms-prom namespace.

The following examples show how to fix this issue for specific components:

-   arms-prometheus
    
    For arms-prometheus, delete the namespace in which arms-prometheus is installed. In most cases, arms-prometheus is installed in the arms-prom namespace. Run the following command to delete the following resources. Then, install or update arms-prometheus again.
    
    ```
    kubectl delete ClusterRole arms-kube-state-metrics
    kubectl delete ClusterRole arms-node-exporter
    kubectl delete ClusterRole arms-prom-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-prometheus-oper3
    kubectl delete ClusterRole arms-prometheus-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-pilot-prom-k8s
    kubectl delete ClusterRoleBinding arms-node-exporter
    kubectl delete ClusterRoleBinding arms-prom-ack-arms-prometheus-role-binding
    kubectl delete ClusterRoleBinding arms-prometheus-oper-bind2
    kubectl delete ClusterRoleBinding kube-state-metrics
    kubectl delete ClusterRoleBinding arms-pilot-prom-k8s
    kubectl delete ClusterRoleBinding arms-prometheus-ack-arms-prometheus-role-binding
    kubectl delete Role arms-pilot-prom-spec-ns-k8s
    kubectl delete Role arms-pilot-prom-spec-ns-k8s -n kube-system
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s -n kube-system
    ```
    
-   ack-node-local-dns
    
    For ack-node-local-dns, run the following command to delete the following resources and then update ack-node-local-dns again.
    
    **Important**
    
    Your business is not affected after these resources are deleted. However, we recommend that you do not add pods during the period of time after these resources are deleted and before the component is updated again. If you add new pods during this period of time, we recommend that you delete and recreate these pods after the component is updated to inject the DNS cache to the pods again.
    
    ```
    kubectl delete MutatingWebhookConfiguration ack-node-local-dns-admission-controller
    ```
    
-   arms-cmonitor
    
    For arms-cmonitor, run the following command to delete the following resources and then install or update arms-cmonitor again.
    
    ```
    kubectl delete ConfigMap otel-collector-config -n arms-prom
    kubectl delete ClusterRoleBinding arms-prom-cmonitor-role-binding
    kubectl delete ClusterRoleBinding arms-prom-cmonitor-install-init-role-binding
    kubectl delete ClusterRole arms-prom-cmonitor-role
    kubectl delete ClusterRole arms-prom-cmonitor-install-init-role
    kubectl delete ServiceAccount cmonitor-sa-install-init -n kube-system
    ```
    

## AddonOperationFailed.ReleaseNameInUse

### Cause

A Helm release named after the component already exists in the cluster. As a result, you cannot directly install or update the component by using Helm. This error code may be returned in the following scenarios:

-   You have installed another version, such as the open source version, of the component in the cluster by using other methods.
    
-   A residual Helm release named after the component exists.
    

### Solution

Perform the following steps to delete the existing Helm release in the cluster:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Applications** > **Helm**.
    
3.  On the Helm page, find the residual Helm release that is named after the component. Click **Delete** in the **Actions** column. In the Delete dialog box, select **Clear Release Records** and click OK.
    
4.  After the Helm release is deleted, install or update the component.
    

## AddonOperationFailed.WaitForAddonReadyTimeout

### Cause

The update request for the component is submitted but the component pods cannot reach the Ready state. As a result, the component cannot be updated.

### Troubleshooting

Perform the following steps to troubleshoot the issue that the component pods cannot reach the Ready state.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Event Center**.
    
3.  On the **Events (Cluster Resource Events)** tab, select Warning from the **Level** drop-down list, select the namespace in which the component is deployed, and select Pod from the **Type** drop-down list. Then, you can view the events related to the component.
    
    You can analyze the event details to identify the cause. The following [Common causes and solutions](#p-coh-n0g-xpm) section describes the common causes of and solutions to this issue.
    

### Common causes and solutions

**Cause 1: The component pods cannot be scheduled**

Event content: FailedScheduling

Event description: The nodes in the cluster do not meet the requirements for hosting the component pods due to the following reasons. You can locate the cause based on the event details.

-   The available CPU and memory resources on the nodes are insufficient for hosting the component pods. In this case, **Insufficient memory** or **Insufficient cpu** is included in the event details.
    
-   The nodes have taints that are not tolerated by the component pods. In this case, **the pod didn't tolerate** is included in the event details.
    
-   The nodes are insufficient to meet the anti-affinity rules of the component pods. In this case, **didn't match pod anti-affinity rules** is included in the event details.
    

Solution: Perform the following operations to meet the requirements for scheduling the component pods. Then, update the component again.

-   To delete the taints not required for the nodes, see [Manage taints](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-taints-and-tolerations#task-2553278).
    
-   To delete the pods that are no longer needed, see [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#task-1779995).
    
-   To add nodes to the cluster, see [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-a2i-luy-mnw).
    
-   To upgrade the nodes in the cluster, see [Upgrade the configurations of a worker node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node#task-895194).
    

**Cause 2: The component pods cannot be created**

Event content: FailedCreatePodSandBox

Event description: Pod sandboxes failed to be created. The common cause for this issue is that the network plug-in cannot allocate IP addresses to pods.

Solution:

-   If **vSwitch have insufficient IP** is included in the event details, [add new pod vSwitches in Terway mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/increase-pod-vswitches-in-a-terway-cluster#task-2035206).
    
-   If **transport: Error while dialing** is included in the event details, [troubleshoot the pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1#task-2187029) to check whether the network plug-in of the cluster works as expected.
    

## AddonOperationFailed.APIServerUnreachable

### Cause

ACK cannot access the Kubernetes API server of the cluster. The cause may be that the Server Load Balancer (SLB) instance used to expose the Kubernetes API server does not work as expected or the SLB instance is not configured properly.

### Solution

For more information about how to troubleshoot this issue, see [An API server request exception occurs when you access a cluster resource](/help/en/ack/ack-managed-and-ack-dedicated/support/ack-console-troubleshooting-cluster-access-exceptions#section-r1b-2we-klj).

## AddonOperationFailed.ResourceNotFound

### Cause

The system cannot find the resources required by the component and the component cannot be directly updated. The cause may be that the resources are modified or deleted.

### Solution

Uninstall the component and then install the latest version of the component.

## AddonOperationFailed.TillerUnreachable

### Cause

The component is installed by using Helm V2 and the installation or update of the component is reliant on Tiller. Tiller encountered errors and cannot be accessed. As a result, you cannot perform operations on the component.

### Solution

Perform the following steps to restart Tiller:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
3.  Select the kube-system namespace. Find and delete the **tiller** pod. Then, wait for the system to recreate the pod.
    
4.  After the Tiller pod reaches the Ready state, perform the operations again.
    

## AddonOperationFailed.FailedCallingWebhook

### Cause

Mutating webhooks are created for specific resources that are required by the component and the webhooks cannot be called. As a result, these resources cannot be updated.

### Solution

Troubleshoot the webhooks and fix the issue. Then, update the component again. You can view the webhooks that cannot be called in the error message. Example:

```
failed to create: Internal error occurred: failed calling webhook "rancher.cattle.io": failed to call webhook: Post "https://rancher-webhook.cattle-system.svc:443/v1/webhook/mutation?timeout=10s": no endpoints available for service "rancher-webhook"
```

The preceding error message indicates that the rancher-webhook webhook cannot be called.

## AddonOperationFailed.UserForbidden

### Cause

Helm V2 is used by the cluster but Tiller does not have the role-based access control (RBAC) permissions to query and update resources. As a result, the component cannot be installed or updated.

### Solution

Grant the required RBAC permissions to Tiller. For more information, see [Role-based Access Control](https://v2.helm.sh/docs/using_helm/#role-based-access-control).

## AddonOperationFailed.TillerNotFound

### Cause

The cluster uses Helm V2 but no Tiller pod runs as normal in the cluster. As a result, you cannot manage the component by using Helm.

### Solution

Troubleshoot the issues of the tiller-deploy pod in the kube-system namespace. Manage the component after the tiller-deploy pod runs as normal. For more information about how to troubleshoot pod issues, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

## AddonOperationFailed.ErrPatchingClusterRoleBinding

### Cause

The ClusterRoleBinding on which the component depends already exists in the cluster. However, the configuration of the ClusterRoleBinding is different from the configuration that is required by the component. As a result, the component cannot be updated. The cause may be that the open source version of the component is installed in the cluster.

### Solution

Perform the following steps to uninstall the open source version that you have installed in the cluster:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Applications** > **Helm**.
    
3.  On the Helm page, find the residual Helm release that is named after the component. Click **Delete** in the **Actions** column. In the Delete dialog box, select **Clear Release Records** and click OK.
    
4.  After the Helm release is deleted, install or update the component.
    

## AddonOperationFailed.ErrApplyingPatch

### Cause

The YAML templates of the earlier component versions are incompatible with that of the new version. As a result, the component cannot be updated. This issue may occur in the following scenarios:

-   You have installed another version, such as the open source version, of the component in the cluster by using other methods.
    
-   You have modified the YAML template of the component.
    
-   The earlier version of the component is discontinued.
    

### Solution

You must modify the YAML template of the component that is installed in the cluster based on the error message. For more information, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

#### **Example**

For example, a discontinued Flannel version is installed in the cluster, and the component update fails due to a container name conflict. The following error message is returned:

```
spec.template.spec.initContainers[1].name: Duplicate value: \"install-cni\"
```

To fix this issue, run the `kubectl -n kube-system edit ds kube-flannel-ds` command to modify the YAML template of Flannel. Delete the `container` definition named `install-cni` in the `spec.template.spec.containers` field. In this example, delete comment lines 7 to 21.

```
      containers:
      - name: kube-flannel
        image: registry-vpc.{{.Region}}.aliyuncs.com/acs/flannel:{{.ImageVersion}}
        command: [ "/opt/bin/flanneld", "--ip-masq", "--kube-subnet-mgr" ]
        ...
        # Irrelevant lines are not shown. Delete comment lines 7 to 21. 
    # - command:
      # - /bin/sh
      # - -c
      # - set -e -x; cp -f /etc/kube-flannel/cni-conf.json /etc/cni/net.d/10-flannel.conf;
        # while true; do sleep 3600; done
      # image: registry-vpc.cn-beijing.aliyuncs.com/acs/flannel:v0.11.0.1-g6e46593e-aliyun
      # imagePullPolicy: IfNotPresent
      # name: install-cni
      # resources: {}
      # terminationMessagePath: /dev/termination-log
      # terminationMessagePolicy: File
      # volumeMounts:
      # - mountPath: /etc/cni/net.d
        # name: cni
      # - mountPath: /etc/kube-flannel/
         # Irrelevant lines are not shown. Delete comment lines 7 to 21. 
          name: flannel-cfg
        ...
       
```

Deleting the preceding lines does not cause service interruptions. After the lines are deleted, a rolling update is automatically performed for the container where Flannel is deployed. After the update is complete, you can update Flannel in the ACK console. For more information, see [Manage components](/help/en/ack/manage-system-components).
