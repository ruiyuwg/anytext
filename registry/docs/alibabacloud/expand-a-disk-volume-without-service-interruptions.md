When disk volumes do not have sufficient storage space, you can resize the disks to extend their capacity. You can expand disk volumes without service interruptions by using the Container Storage Interface (CSI) plug-in in Container Service for Kubernetes (ACK) clusters that run Kubernetes 1.16 or later. This topic describes how to expand a disk volume without service interruptions.

## **Scenarios**

In this example, you can expand a disk volume by changing the persistent volume claim (PVC). The following section describes the scenarios in which you can use this method:

-   The PVC bound to the persistent volume (PV) of the disk is associated with a StorageClass, and the `allowVolumeExpansion: true` parameter is specified in the StorageClass.
    
    **Note**
    
    By default, the `allowVolumeExpansion: true` parameter is specified in StorageClass provided by ACK. You must specify this parameter for the StorageClass that you create. You cannot modify the properties of a StorageClass. You can only create a StorageClass.
    
-   The application pod to which the disk is attached must be in the Running state.
    
-   If the disk is a basic disk, you cannot expand the disk volumes by using this method.
    
-   If the Kubernetes version of the cluster is earlier than 1.16, you cannot use this method to expand the disk volumes. For more information about how to upgrade the Kubernetes version of a cluster, see [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
-   You can expand only the disk volume of disks that can be resized. For more information, see [ResizeDisk](/help/en/ecs/api-resizedisk#doc-api-Ecs-ResizeDisk).
    

## **Preparations**

-   Snapshots are created for your disk.
    
    **Important**
    
    To prevent data loss caused by accidental operations during the expansion process, we recommend that you create a snapshot for the disk to back up disk data before you resize the disk. After expansion is complete, you can delete the snapshot to prevent unnecessary charges. For more information, see [Use disk snapshots](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cloud-disk-snapshots/).
    
-   If your cluster is an ACK dedicated cluster, grant the ResizeDisk permission to the RAM role assigned to the cluster.
    
    **Note**
    
    If you use an ACK managed cluster, you do not need to grant the ResizeDisk permission to the cluster.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Cluster Information**.
        
    3.  Click the **Basic Information** tab, click the link next to **Master RAM Role** in the **Cluster Resources** section.
        
    4.  On the **Roles** page of the RAM console, add the ResizeDisk permission.
        
        For more information about the detailed steps, see [Modify the document and description of a custom policy](/help/en/ram/modify-the-document-and-description-of-a-custom-policy#task-221534).![resizedisk](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9845359951/p101021.jpg)
        

## **Procedure**

If a dynamically provisioned disk volume is attached to an existing application, you can modify the PVC to expand the disk volume without pod interruptions.

**Note**

The following example uses an application that is created in [a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes) to describe how to expand disk volumes.

## Use kubectl

1.  Connect to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb) or [Use kubectl on Workbench or Cloud Shell to connect to ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408).
    
2.  View the pod and disk information and the corresponding PVC and StorageClass before you expand the disk volume.
    
    1.  View the information about the pod to which the disk is attached and make sure that the pod is in the Running state.
        
        ```
        kubectl get pod -l app=nginx
        ```
        
        Expected output:
        
        ```
        NAME          READY   STATUS    RESTARTS   AGE
        disk-test-0   1/1     Running   0          23h
        ```
        
    2.  View the disk usage of the directory to which the disk is mounted.
        
        ```
        kubectl exec disk-test-0 -- df -h /data
        ```
        
        Expected output:
        
        ```
        Filesystem      Size  Used Avail Use% Mounted on
        /dev/vdb         20G   24K   20G   1% /data
        ```
        
    3.  Check the PVC.
        
        ```
        kubectl get pvc
        ```
        
        In the following example, the PVC name is `dik-pvc`, the ID of the disk to which the PVC is bound is `d-uf6axyb1er071h6o****`, and the capacity is 20 GiB. The StorageClass associated with the PVC is `alicloud-disk-wait-for-first-consumer`.
        
        **Important**
        
        For a statically provisioned disk volume, you must make sure that the `storageClassName` parameter in the PVC is not empty and a StorageClass that has the same name exists in the cluster. If no StorageClass that has the same name exists in the cluster, you must create a StorageClass based on the attributes of the existing disk volume and specify the `allowVolumeExpansion: true` parameter.
        
        ```
        NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                            VOLUMEATTRIBUTESCLASS   AGE
        disk-pvc   Bound    d-uf6axyb1er071h6o****   20Gi       RWO            alicloud-disk-wait-for-first-consumer   <unset>                 23h
        ```
        
    4.  Check the StorageClass and whether expansion is enabled.
        
        ```
        kubectl get sc alicloud-disk-wait-for-first-consumer -o yaml
        ```
        
        The following expected response is returned. The `allowVolumeExpansion: true` parameter indicates that expansion is enabled.
        
        ```
        allowVolumeExpansion: true
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          creationTimestamp: "2025-01-21T08:48:26Z"
          name: alicloud-disk-wait-for-first-consumer
          resourceVersion: "59936"
          uid: 5bdb798e-5888-40df-9f91-259ee8510f34
        parameters:
          type: cloud_auto,cloud_essd,cloud_ssd
        provisioner: diskplugin.csi.alibabacloud.com
        reclaimPolicy: Retain
        volumeBindingMode: WaitForFirstConsumer
        ```
        
3.  Modify the PVC and resize the disk.
    
    In this example, the disk needs to be expanded to 30 GiB. Sample command:
    
    ```
    kubectl patch pvc disk-pvc -p '{"spec":{"resources":{"requests":{"storage":"30Gi"}}}}'
    ```
    
4.  Wait for a minute, and then check whether the disk is resized.
    
    1.  Check the PVC.
        
        ```
        kubectl get pvc
        ```
        
        The command output indicates that the disk size is increased to 30 GiB.
        
        ```
        NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                            VOLUMEATTRIBUTESCLASS   AGE
        disk-pvc   Bound    d-uf6axyb1er071h6o****   30Gi       RWO            alicloud-disk-wait-for-first-consumer   <unset>                 23h
        ```
        
    2.  View the disk usage of the directory to which the disk is mounted.
        
        ```
        kubectl exec disk-test-0 -- df -h /data
        ```
        
        The command output indicates that the disk is resized.
        
        ```
        Filesystem      Size  Used Avail Use% Mounted on
        /dev/vdb         30G   24K   30G   1% /data
        ```
        

## Use the ACK console

**Note**

The ACK console supports only dynamically provisioned disk volumes. For more information about statically provisioned disk volumes, see Use kubectl.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage to go to the cluster management page.
    
3.  Check whether the pod to which the disk is attached is in the Running state and view the PVC used by the pod.
    
    1.  In the left-side navigation pane of the cluster management page, choose **Workloads** > **StatefulSets**.
        
    2.  Click the name of the application that you want to view. On the **Pods** tab, make sure that the pod is in the Running state.
        
        ![扩容-容器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377899371/p910221.png)
        
    3.  Click the name of the pod. On the **Volumes** tab, view the PVCs that are used by the pod.
        
        ![扩容-pvc](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377899371/p910225.png)
        
4.  Check the StorageClass and whether expansion is enabled.
    
    1.  In the left-side navigation pane of the details page, choose **Volumes** > **Storage Classes**.
        
    2.  Find the StorageClass that is used by the disk volume and click **View in YAML**.
        
    3.  Check whether the `allowVolumeExpansion: true` parameter is specified.
        
        ![扩容的SC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377899371/p910202.png)
        
5.  Modify the PVC to expand the disk volumes.
    
    1.  In the left-side navigation pane of the cluster management page, choose **Volumes** > **Persistent Volume Claims**.
        
    2.  Find the PVC that you want to manage and click **Expand**.
        
    3.  In the dialog box that appears, enter the capacity, select I understand and agree to the preceding operations, and then click **OK**.
        
        ![在线扩容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377899371/p910230.png)
        
    4.  Wait until the expansion is complete, and then check whether the PVC capacity is expanded.
        

## **References**

-   For more information about how to automatically expand a disk volume when the disk volume usage exceeds a specific threshold, see [Automatically expand a disk volume (public preview)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-expand-a-disk-volume).
    
-   For more information about the errors that occur when you use disk volumes, see [FAQ about disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes).
