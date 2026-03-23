FlexVolume is deprecated in Container Service for Kubernetes (ACK) and is no longer supported in newly created ACK clusters. We recommend that you migrate FlexVolume in existing ACK clusters to Container Storage Interface (CSI). To migrate FlexVolume to CSI, you can uninstall FlexVolume and then install the CSI plug-in, modify the configurations of node pools, or modify the configurations of existing nodes. This topic describes how to migrate FlexVolume to CSI for clusters that store no data.

## Differences between FlexVolume and CSI

The following table describes the differences between CSI and FlexVolume.

**Plug-in**

**Component**

**kubelet parameter**

**References**

CSI

-   CSI-Provisioner (deployed as a Deployment)
    
    This component is used to implement automatic volume creation and automatic snapshot creation. This component also supports Container Network File System (CNFS) storage and data restoration after data is accidentally deleted.
    
-   CSI-Plugin (deployed as a DaemonSet)
    
    This component is used to implement automatic volume mounting and unmounting. Multiple disk volume types are supported.
    

The kubelet parameters required by the CSI plug-in are different from those required by the FlexVolume plug-in.

To run the CSI plug-in, you must set the kubelet parameter `enable-controller-attach-detach` to `true` on each node.

[Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339)

FlexVolume

-   Disk-Controller (deployed as a Deployment)
    
    This component is used to implement automatic volume creation.
    
-   FlexVolume (deployed as a DaemonSet)
    
    This component is used to implement volume mounting and unmounting.
    

The kubelet parameters required by the FlexVolume plug-in are different from those required by the CSI plug-in.

To tun the FlexVolume plug-in, you must set the kubelet parameter `enable-controller-attach-detach` to `true` on each node.

[FlexVolume overview](/help/en/ack/flexvolume-overview#concept-vgg-45s-vdb)

## Scenarios

The CSI plug-in is more stable and efficient than the FlexVolume plug-in. In the following scenarios, we recommend that you migrate FlexVolume to CSI:

-   No volume has been mounted to the cluster by using FlexVolume and no data is stored in the cluster by using FlexVolume.
    
-   Volumes were mounted to the cluster by using FlexVolume but the relevant data in the volumes is deleted. No data is stored in the cluster by using FlexVolume.
    

## Step 1: Uninstall FlexVolume

1.  Log on to the [OpenAPI Explorer console](https://next.api.aliyun.com/api/CS/2015-12-15/UnInstallClusterAddons?params=%7B%22addons%22:%5B%7B%22name%22:%22flexvolume%22%7D%5D,%22ClusterId%22:%22test-xx%22%7D) and call the **UnInstallClusterAddons** operation to uninstall the FlexVolume plug-in.
    
    -   **ClusterId**: Set the value to the ID of your cluster. You can view the cluster ID on the **Basic Information** tab of the cluster details page of your cluster.
        
    -   **name**: Set the value to Flexvolume.
        
    
    For more information, see [Uninstall components from a cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-uninstallclusteraddons#doc-api-CS-UnInstallClusterAddons).
    
2.  Run the following command to delete the **alicloud-disk-controller** and **alicloud-nas-controller** components:
    
    ```
    kubectl delete deploy -n kube-system alicloud-disk-controller alicloud-nas-controller
    ```
    
3.  Run the following command to check whether the FlexVolume plug-in is uninstalled from your cluster:
    
    ```
    kubectl get pods -n kube-system | grep 'flexvolume\|alicloud-disk-controller\|alicloud-nas-controller'
    ```
    
    If no output is displayed, the FlexVolume plug-in is uninstalled from your cluster.
    
4.  Run the following command to delete the StorageClass that uses FlexVolume from the cluster. The provisioner of the StorageClass that uses FlexVolume is alicloud/disk.
    
    ```
    kubectl delete storageclass alicloud-disk-available alicloud-disk-efficiency alicloud-disk-essd alicloud-disk-ssd
    ```
    
    Expected output:
    
    ```
    storageclass.storage.k8s.io "alicloud-disk-available" deleted
    storageclass.storage.k8s.io "alicloud-disk-efficiency" deleted
    storageclass.storage.k8s.io "alicloud-disk-essd" deleted
    storageclass.storage.k8s.io "alicloud-disk-ssd" deleted
    ```
    
    If the preceding output is displayed, the StorageClass is deleted from your cluster.
    

## Step 2: Install the CSI plug-in

-   If you use the csi-compatible-controller plug-in in a cluster, a CSI plug-in is already installed in the cluster. However, this CSI plug-in is a customized CSI plug-in instead of a standard CSI plug-in. You must run the following command to delete the customized CSI plug-in before you install the standard CSI plug-in:
    
    ```
    kubectl delete deploy csi-provisioner -n kube-system
    kubectl delete ds csi-plugin -n kube-system
    kubectl delete csidriver diskplugin.csi.alibabacloud.com nasplugin.csi.alibabacloud.com ossplugin.csi.alibabacloud.com
    ```
    
    **Note**
    
    When you delete the customized CSI plug-in from the cluster, the existing pods in the cluster are not affected. However, after you delete the customized CSI plug-in from the cluster, the pods in the cluster cannot be changed until the standard CSI plug-in is installed.
    
-   If you do not use the csi-compatible-controller plug-in in the cluster, you can call an API operation to install the standard CSI plug-in.
    

1.  Log on to the [OpenAPI Explorer console](https://next.api.aliyun.com/api/CS/2015-12-15/InstallClusterAddons?params=%7B%22body%22:%5B%7B%22name%22:%22csi-provisioner%22,%22version%22:%22v1.20.7-aafce42-aliyun%22%7D,%7B%22name%22:%22csi-plugin%22,%22version%22:%22v1.20.7-aafce42-aliyun%22%7D%5D,%22ClusterId%22:%22test-xx%22%7D) and call the **InstallClusterAddons** to install the CSI plug-in.
    
    -   **ClusterId**: Set the value to the ID of your cluster.
        
    -   **name**: Set the value to csi-provisioner.
        
    -   **version**: The latest version is automatically specified. For more information about CSI versions, see [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#concept-2043907).
        
    
    For more information about how to install the CSI plug-in, see [Install a component in an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-install-a-component-in-an-ack-cluster#doc-api-CS-InstallClusterAddons).
    
2.  Run the following command to check whether the CSI plug-in runs as expected in your cluster:
    
    ```
    kubectl get pods -n kube-system | grep csi
    ```
    
    Expected output:
    
    ```
    csi-plugin-577mm                              4/4     Running   0          3d20h
    csi-plugin-k9mzt                              4/4     Running   0          41d
    csi-provisioner-6b58f46989-8wwl5              9/9     Running   0          41d
    csi-provisioner-6b58f46989-qzh8l              9/9     Running   0          6d20h
    ```
    
    If the preceding output is displayed, the CSI plug-in runs as expected in the cluster.
    

## Step 3: Modify the configurations of all node pools in the cluster

The configurations of a node pool change after the volume plug-in of a cluster change. After you install the new standard CSI plug-in in your cluster, the configurations of original node pools in the cluster do not automatically change. In this case, you need to manually update the configurations of these node pools. If the update is successful, the kubelet parameter `--enable-controller-attach-detach` is set to `true` on newly added nodes.

**Important**

Manually modifying the node pool configuration triggers the kubelet to restart. We recommend that you perform this operation during off-peak hours and make sure that the update on one node pool is correct before you update the other node pools.

You can modify the configurations of each node pool to update the volume plug-in by adding a new instance type or changing the logon password. This way, the system automatically updates the node initialization script in the background to ensure that newly added nodes use the new configurations.

**Note**

Alternatively, you can create a new node pool and scale in all nodes in the original node pools until the old node pools are deleted. Then, directly use the new node pool. If you use this method, you do not need to perform the following steps.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the target node pool and click **Edit** in the **Actions** column.
    
4.  In the dialog box that appears, modify the node pool configurations, then click **Confirm**.
    
    **Note**
    
    This modification is intended to trigger an update of the cluster volume plug-in in the background. After the node pool configuration changes take effect, you can revert to the original settings.
    

## Step 4: Modify the configurations of existing nodes

Use the following YAML template to modify Kubelet parameters for CSI plug-in compatibility. This DaemonSet can change the value of the kubelet parameter `--enable-controller-attach-detach` of existing nodes to `true`. After this step is complete, the DaemonSet can be deleted.

**Important**

When you deploy the YAML file, kubelet is restarted. We recommend that you evaluate the impact on the applications before you deploy the YAML file.

```
kind: DaemonSet
apiVersion: apps/v1
metadata:
  name: kubelet-set
spec:
  selector:
    matchLabels:
      app: kubelet-set
  template:
    metadata:
      labels:
        app: kubelet-set
    spec:
      tolerations:
        - operator: "Exists"
      hostNetwork: true
      hostPID: true
      containers:
        - name: kubelet-set
          securityContext:
            privileged: true
            capabilities:
              add: ["SYS_ADMIN"]
            allowPrivilegeEscalation: true
          image: registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.26.5-56d1e30-aliyun
          imagePullPolicy: "Always"
          env:
          - name: enableADController
            value: "true"
          command: ["sh", "-c"]
          args:
          - echo "Starting kubelet flag set to $enableADController";
            ifFlagTrueNum=`cat /host/etc/systemd/system/kubelet.service.d/10-kubeadm.conf | grep enable-controller-attach-detach=$enableADController | grep -v grep | wc -l`;
            echo "ifFlagTrueNum is $ifFlagTrueNum";
            if [ "$ifFlagTrueNum" = "0" ]; then
                curValue="true";
                if [ "$enableADController" = "true" ]; then
                    curValue="false";
                fi;
                sed -i "s/enable-controller-attach-detach=$curValue/enable-controller-attach-detach=$enableADController/" /host/etc/systemd/system/kubelet.service.d/10-kubeadm.conf;
                restartKubelet="true";
                echo "current value is $curValue, change to expect "$enableADController;
            fi;
            if [ "$restartKubelet" = "true" ]; then
                /nsenter --mount=/proc/1/ns/mnt systemctl daemon-reload;
                /nsenter --mount=/proc/1/ns/mnt service kubelet restart;
                echo "restart kubelet";
            fi;
            while true;
            do
                sleep 5;
            done;
          volumeMounts:
          - name: etc
            mountPath: /host/etc
      volumes:
        - name: etc
          hostPath:
            path: /etc
```

## What to do next

After migrating FlexVolume to CSI, you can check whether the CSI plug-in runs as expected by using the CSI plug-in to create a dynamically provisioned disk volume. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#section-qlr-jkq-hi2).
