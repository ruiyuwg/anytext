If you specify FlexVolume as the volume plug-in for a Container Service for Kubernetes (ACK) cluster that runs Kubernetes earlier than 1.16, the system automatically installs FlexVolume and Disk Controller in the cluster. However, the system does not automatically install alicloud-nas-controller. This topic describes how to install and upgrade FlexVolume, and how to install alicloud-nas-controller.

## Prerequisites

-   An ACK cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   FlexVolume is specified as the volume plug-in of the ACK cluster.
    
-   A kubectl client is connected to the cluster. For more information, see [Step 2: Select a type of cluster credentials](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#section-2za-tyw-p71).
    

## Precautions

If alicloud-nas-controller is deployed in the cluster, you must upgrade the image version of alicloud-nas-controller to v1.14.8.17-7b898e5-aliyun or later before you can upgrade the Kubernetes version of the cluster to 1.20.

**Note**

If you use an open source version, such as nfs-provisioner, to replace alicloud-nas-controller provided by Alibaba Cloud, you may need to find a solution in the open source community to avoid selfLink issues.

## Limits

Only the CentOS 7 and Alibaba Cloud Linux 2 operating systems are supported.

## Install the components

**Install FlexVolume**

-   Clusters that run Kubernetes 1.16 and later do not support FlexVolume. You must install CSI-Plugin in these clusters. For more information, see [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/).
    
-   If you specify FlexVolume as the volume plug-in for an ACK cluster that runs Kubernetes earlier than 1.16, the system automatically installs FlexVolume in the cluster. For more information, see [Component configurations](/help/en/doc-detail/176833.html#step-j47-fy9-b1k).
    

**Install Disk Controller**

-   Clusters of ACK 1.16 and later do not support Disk Controller. You must install CSI-Provisioner in these clusters. For more information, see [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#section-nmp-gv1-wll).
    
-   If you specify FlexVolume as the volume plug-in for an ACK cluster that runs Kubernetes earlier than 1.16, the system automatically installs Disk Controller in the cluster. For more information, see [Component configurations](/help/en/doc-detail/176833.html#step-j47-fy9-b1k).
    

**Install alicloud-nas-controller**

If FlexVolume is installed in your cluster, you can manually install alicloud-nas-controller, and then dynamically provision volumes that use File Storage NAS (NAS) file systems.

You can use the following YAML template to manually install alicloud-nas-controller:

```
kind: Deployment
apiVersion: apps/v1
metadata:
  name: alicloud-nas-controller
  namespace: kube-system
spec:
  selector:
    matchLabels:
      app: alicloud-nas-controller
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: alicloud-nas-controller
    spec:
      tolerations:
      - operator: Exists
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: node-role.kubernetes.io/master
                operator: Exists
      priorityClassName: system-node-critical
      serviceAccount: admin
      hostNetwork: true
      containers:
        - name: nfs-provisioner
          image: registry.cn-hangzhou.aliyuncs.com/acs/alicloud-nas-controller:v1.14.8.17-7b898e5-aliyun
          env:
          - name: PROVISIONER_NAME
            value: alicloud/nas
          securityContext:
            privileged: true
          volumeMounts:
          - mountPath: /var/log
            name: log
      volumes:
      - hostPath:
          path: /var/log
        name: log
```

**Verify the installation**

Check whether FlexVolume, Disk Controller, and alicloud-nas-controller are installed in the cluster.

-   Run the following command to check whether FlexVolume is installed in the cluster:
    
    ```
    kubectl get pod -nkube-system | grep flexvolume
    ```
    
-   Run the following command to check whether Disk Controller is installed in the cluster:
    
    ```
    kubectl get pod -nkube-system | grep alicloud-disk-controller
    ```
    
-   Run the following command to check whether alicloud-nas-controller is installed in the cluster:
    
    ```
    kubectl get pod -nkube-system | grep alicloud-nas-controller
    ```
    

## Upgrade the components

You can upgrade FlexVolume and Disk Controller in the ACK console. You cannot upgrade alicloud-nas-controller in the ACK console.

If the Kubernetes version of your ACK cluster is upgraded to 1.16 or later, the cluster still supports FlexVolume. You can upgrade FlexVolume in the ACK console.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  Click the **Storage** tab, find **flexvolume** and **alicloud-disk-controller**, and then click **Upgrade**.
    
4.  In the **Note** message, confirm the versions of the plug-ins and click **OK**.
    
    After the plug-ins are upgraded, the system prompts that the upgrades are completed and the current versions of the plug-ins are displayed.
    

-   When you upgrade FlexVolume in the following scenarios, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request technical support.
    
    -   The system fails to update FlexVolume in the ACK console.
        
    -   The version of FlexVolume is 1.12 or earlier, and volumes that use disks and Object Storage Service (OSS) buckets are provisioned in the cluster.
        
    -   You want to ensure a successful upgrade because sensitive business data is stored in the cluster and a large number of volumes are used.
        
-   The system fails to upgrade Disk Controller. In this case, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request technical support.
