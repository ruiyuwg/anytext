The Container Storage Interface (CSI) plug-in supports setting quota limits for subdirectories of General-purpose NAS volumes. When you mount NAS subdirectories using the subPath method, you can enable the directory quota feature to limit subdirectory capacity and improve resource utilization. When a subdirectory volume reaches its quota limit, you can expand it online by updating the storage value in the PVC without interrupting your services.

## **Use cases**

By default, when you mount a NAS volume in an ACK cluster, the storage value declared in the PVC does not take effect. The actual available capacity in the PV is the entire capacity of the NAS file system. You can check the actual available capacity of the NAS volume based on the capacity limits of the NAS file system.

**Note**

Different types of NAS have different capacity limits. For more information, see [General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems) and [Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems).

If your NAS file system is shared and mounted by multiple applications, we recommend that you mount subdirectories using the subPath method and enable the directory quota feature. After enabling this feature, the capacity of dynamically created subdirectory PVs will be limited by the storage value declared in the PVC. When the capacity reaches the limit, you can expand the volume online by updating the storage value in the PVC without interrupting your services. The directory quota feature lets you mount separate subdirectories for different applications and set capacity limits, which helps you better manage resource allocation in the NAS file system, improve management efficiency and resource utilization, and effectively control storage costs.

**Note**

If you use CNFS to manage NAS, the directory quota feature is enabled by default. For more information, see [Use CNFS to automatically expand NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes).

## Prerequisites

-   The CSI component is installed in your cluster and the version is v1.18.8.45 or later. To upgrade the component, see [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
-   A NAS file system and mount target have been created and meet the following conditions:
    
    -   The NAS type is General-purpose NAS and the Protocol Type is NFS. If not, [create a General-purpose NAS file system](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5) again.
        
    -   The mount target and cluster nodes are in the same VPC, and the **Status** is **Active**. If not, create a new mount target. For more information, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#task-27531-zh).
        

## Limits

The directory quota feature is supported only for dynamically provisioned NAS volumes that use the NFS protocol with General-purpose NAS and are mounted using the subpath method. Statically provisioned NAS volumes and dynamically provisioned NAS volumes mounted using the sharepath or filesystem method do not support this feature.

**Note**

For more information about the limitations of the directory quota feature, see [Directory quotas](/help/en/nas/user-guide/manage-directory-quotas).

## **Use dynamically provisioned NAS volumes with directory quotas**

### **Step 1: Create a StorageClass that enables the subdirectory quota feature**

1.  Modify the following YAML content and save it as alicloud-nas-quota-sc.yaml.
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-nas-quota-sc
    mountOptions:
      - nolock,tcp,noresvport
      - vers=3
    parameters:
      volumeAs: subpath  # Set the value to subpath.
      server: "0cd8b4a576-g****.cn-hangzhou.nas.aliyuncs.com"  # The mount target of the General-purpose NAS file system that uses the NFS protocol.
      archiveOnDelete: "false"
      path: "/test"
      volumeCapacity: "true" # The dynamically provisioned volume supports the directory quota feature.
    provisioner: nasplugin.csi.alibabacloud.com
    reclaimPolicy: Delete
    allowVolumeExpansion: true # Enable the directory quota feature to allow expansion of dynamically provisioned volumes.
    ```
    
    **Note**
    
    To enable the directory quota feature, set `allowVolumeExpansion` or `volumeCapacity` to `true`. If `allowVolumeExpansion` is set to `true`, the `volumeCapacity` parameter does not take effect, and the directory quota feature remains enabled.
    
    Pay attention to the following parameters. For more information, see [Use dynamically provisioned NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume).
    
    **Parameter**
    
    **Description**
    
    `parameters`
    
    `volumeAs`
    
    When you use the directory quota feature, you must set this parameter to `subpath`, which indicates that a subdirectory of the NAS file system is mounted as a PV.
    
    `server`
    
    The mount target of the NAS file system. For more information about how to view the mount target address, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).
    
    `path`
    
    The subdirectory of the NAS file system that is mounted. The default value is `/`. For Extreme NAS file systems, the path must start with `/share`.
    
    `volumeCapacity`
    
    Specifies whether to enable the directory quota feature.
    
    If `allowVolumeExpansion` is set to `true`, this parameter does not take effect, and the quota feature remains enabled.
    
    `allowVolumeExpansion`
    
    This parameter is available only for General-purpose NAS file systems. If you set this parameter to true, a quota is configured for the PV that is dynamically provisioned using the StorageClass.
    
2.  Create the StorageClass.
    
    ```
    kubectl apply -f alicloud-nas-quota-sc.yaml
    ```
    

### **Step 2: Create an application and mount a NAS volume**

1.  Use the following YAML content to create a file named nas-sts.yaml.
    
    The following YAML creates a StatefulSet with one pod. The pod is associated with a StorageClass that has the directory quota feature enabled. The system automatically creates a corresponding dynamically provisioned NAS volume and mounts it to the pod. The capacity of the NAS volume is 20 GiB.
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: nas-sts
    spec:
      selector:
        matchLabels:
          app: nginx
      replicas: 1
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            volumeMounts:
            - name: nas-pvc
              mountPath: /data
      volumeClaimTemplates:
      - metadata:
          name: nas-pvc
        spec:
          accessModes: [ "ReadWriteMany" ]
          storageClassName: "alicloud-nas-quota-sc"
          resources:
            requests:
              storage: 20Gi    
    ```
    
2.  Create the StatefulSet.
    
    ```
    kubectl apply -f nas-sts.yaml
    ```
    
3.  Check whether the pods provisioned by the StatefulSet are deployed.
    
    ```
    kubectl get pod -l app=nginx
    ```
    
    The following command output is expected to return:
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    nas-sts-0     1/1     Running   0          24s
    ```
    
4.  Check the PV and verify that the directory quota is in effect.
    
    1.  Check the PV.
        
        ```
        kubectl get pv
        ```
        
        The following output is returned, showing that a PV has been dynamically created with a capacity of 20 GiB.
        
        ```
        NAME                             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                       STORAGECLASS            VOLUMEATTRIBUTESCLASS   REASON   AGE
        nas-****-c72c-497f-ab13-******   20Gi       RWX            Delete           Bound    default/nas-pvc-nas-sts-0   alicloud-nas-quota-sc   <unset>                          15m
        ```
        
    2.  Check the directory quota details in the NAS console.
        
        On the [NAS console](https://nas.console.alibabacloud.com/), go to the **File System List** page. In the **Actions** column of the target file system, click **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png)** > **Quota Management** . On the **Quota Management** page, you can see that the corresponding directory quota is automatically generated. Click **Manage Quotas** to view the details.
        
        The following example shows that the directory has a capacity limit of 20 GiB.
        
        ![nas目录配额](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3998682571/p978898.png)
        

## **Verify the directory quota limit**

Because the dynamically provisioned NAS volume mounted using the subpath method has the directory quota feature enabled with a declared capacity of 20 GiB, the system will prompt that the disk quota is exceeded when the data written to the mounted directory exceeds 20 GiB.

1.  Write data to the mounted directory.
    
    The following example command writes 20000 MiB (approximately 19.53 GiB) of data to the mounted directory `/data`.
    
    ```
    kubectl exec -it nas-sts-0 -- dd if=/dev/zero of=/data/20G.txt bs=1M count=20000
    ```
    
2.  Wait 5 to 15 minutes, and then check the directory quota details in the NAS console.
    
    On the **File System List** page in the [NAS console](https://nas.console.alibabacloud.com/), click **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png)** > **Quota Management** in the **Actions** column of the target file system. On the **Quota Management** page, click **Manage Quotas** for the directory to view the details.
    
    The following example shows that the current capacity of the directory is 19 GiB.
    
    ![nas目录配额2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3998682571/p978969.png)
    
3.  Write more data to the mounted directory to reach the directory quota limit, which will trigger a disk quota exceeded error.
    
    The following example command attempts to write 1 GiB of data to the mounted directory `/data`, which will exceed the directory quota limit.
    
    ```
    kubectl exec -it nas-sts-0 -- dd if=/dev/zero of=/data/1G.txt bs=1M count=1024
    ```
    
    The following output is returned, indicating that the disk quota is exceeded:
    
    ```
    dd: closing output file '/data/1G.txt': Disk quota exceeded
    ```
    
    **Note**
    
    To expand the volume, see [Expand a dynamically provisioned NAS volume with directory quota](#4ef384d6acflk).
    

## **Expand a dynamically provisioned NAS volume with directory quota**

By updating the storage value in the PVC, you can expand the capacity of a dynamically created PV and check the directory quota to confirm whether the NAS volume capacity has been successfully expanded. This expansion operation does not affect online services and will not interrupt your business.

1.  Check the PVC before expansion.
    
    ```
    kubectl get pvc
    ```
    
    The following output is returned:
    
    ```
    NAME                STATUS   VOLUME                           CAPACITY   ACCESS MODES   STORAGECLASS            VOLUMEATTRIBUTESCLASS   AGE
    nas-pvc-nas-sts-0   Bound    nas-****-c72c-497f-ab13-******   20Gi       RWX            alicloud-nas-quota-sc   <unset>                 23m
    ```
    
2.  Modify the PVC to expand the capacity of the NAS volume.
    
    ```
    kubectl patch pvc nas-pvc-nas-sts-0 -p '{"spec":{"resources":{"requests":{"storage":"30Gi"}}}}'
    ```
    
    **Important**
    
    The quota of a NAS directory is measured in GiB. After you modify the PVC, the CSI plug-in adjusts the quota of the mounted NAS directory to the new volume capacity specified by the PVC. During the adjustment, the CSI plug-in rounds up the capacity value to the nearest integer.
    
3.  Check the PV and PVC after expansion.
    
    From the `CAPACITY` field in the returned information, you can confirm that the directory quota for the NAS volume has been expanded from 20 GiB to 30 GiB.
    
    1.  Check the PV.
        
        ```
        kubectl get pv
        ```
        
        The following output is returned:
        
        ```
        NAME                             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                       STORAGECLASS            VOLUMEATTRIBUTESCLASS   REASON   AGE
        nas-****-c72c-497f-ab13-******   30Gi       RWX            Delete           Bound    default/nas-pvc-nas-sts-0   alicloud-nas-quota-sc   <unset>                          25m
        ```
        
    2.  Check the PVC.
        
        ```
        kubectl get pvc
        ```
        
        The following output is returned:
        
        ```
        NAME                STATUS   VOLUME                           CAPACITY   ACCESS MODES   STORAGECLASS            VOLUMEATTRIBUTESCLASS   AGE
        nas-pvc-nas-sts-0   Bound    nas-****-c72c-497f-ab13-******   30Gi       RWX            alicloud-nas-quota-sc   <unset>                 26m
        ```
        
4.  Check the directory quota details in the NAS console.
    
    On the **File System List** page of the [NAS console](https://nas.console.alibabacloud.com/), click the **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png)** > **Quota Management** in the **Actions** column of the target file system. On the **Quota Management** page, click **Manage Quotas** for the directory to view the details.
    
    The following example shows that the capacity limit of the directory has been expanded to 30 GiB.
    
    ![nas目录配额3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3998682571/p979084.png)
    

## **FAQs**

If you encounter issues when mounting or using NAS volumes, refer to:

-   [Troubleshoot storage issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1)
    
-   [NAS volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes)
    
-   [FAQ about read and write access to files](/help/en/nas/user-guide/cross-mount-compatibility-faq)
    

## References

-   For more information about NAS directory quotas, see [Directory quotas](/help/en/nas/user-guide/manage-directory-quotas#task-2333199).
    
-   After you configure a quota for a NAS directory, you can monitor the usage of the NAS volume using the node\_volume\_capacity\_bytes\_used metric. For more information about how to configure alert rules for volume capacity monitoring, see [Create an alert rule for a Prometheus instance](/help/en/prometheus/user-guide/create-an-alert-rule-for-a-prometheus-instance#section-mrh-rco-p86).
