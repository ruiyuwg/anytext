This topic describes common issues and solutions for using disk volumes in ACK (Alibaba Cloud Container Service for Kubernetes), including disk creation, attachment, usage, expansion, and detachment problems.

## **Problem navigation**

**Type**

**Problem**

Creation

-   [Failed to dynamically create a PV with the error "InvalidDataDiskCatagory.NotSupported"](#section-to5-wmx-b91)
    
-   [Failed to dynamically create a PV with the error "The specified AZone inventory is insufficient"](#section-6n3-8ue-fyf)
    
-   [Failed to dynamically create a PV with the error "disk size is not supported"](#section-r6k-e7i-l78)
    
-   [Failed to dynamically create a PV with the error "waiting for first consumer to be created before binding"](#section-mxg-rf3-e3h)
    
-   [Failed to dynamically create a PV with the error "no topology key found on CSINode node-XXXX"](#section-k6b-wc9-x63)
    
-   [Failed to dynamically create a PV with the error "selfLink was empty, can't make reference"](#b2f158005csrz)
    
-   [Failed to dynamically create a PV when the requested PVC capacity is less than 20 GiB](#8740ec7b5fzdr)
    

Mount

-   [A pod with a disk volume fails to start with the error "had volume node affinity conflict"](#section-7o2-zf7-eff)
    
-   [A pod with a disk volume fails to start with the error "can't find disk"](#section-rm1-d2d-1fq)
    
-   [A pod with a disk volume fails to start with the error "Previous attach action is still in process"](#section-nyi-j7i-tsm)
    
-   [A pod with a disk volume fails to start with the error "InvalidInstanceType.NotSupportDiskCategory"](#section-ihn-gds-9mm)
    
-   [A pod with a disk volume fails to start with the error "diskplugin.csi.alibabacloud.com not found in the list of registered CSI drivers"](#section-5cz-4y8-z0n)
    
-   [A pod with a disk volume fails to start with the error "Multi-Attach error for volume"](#856438303bnoq)
    
-   [A pod with a disk volume fails to start with the error "Unable to attach or mount volumes: unmounted volumes=\[xxx\], unattached volumes=\[xxx\]: timed out waiting for the condition"](#section-act-ps4-ebm)
    
-   [A pod with a disk volume fails to start with the error "validate error Device /dev/nvme1n1 has error format more than one digit locations"](#section-d5h-e55-0e2)
    
-   [A pod with a disk volume fails to start with the error "ecs task is conflicted"](#section-das-pyd-jzr)
    
-   [A pod with a disk volume fails to start with the error "wrong fs type, bad option, bad superblock on /dev/xxxxx missing codepage or helper program, or other error"](#section-yqf-djd-5y0)
    
-   [A pod with a disk volume fails to start with the error "exceed max volume count"](#f721a2305c8a6)
    
-   [A pod with a disk volume fails to start with the error "The amount of the disk on instance in question reach its limits"](#2481bee05c8vo)
    
-   [How to change the configuration of the default disk StorageClass](#06b2e256a535u)
    
-   [Can multiple containerized applications use the same disk volume?](#caee314df2okp)
    

Usage

-   [An application reports an "input/output error" when reading from or writing to the disk mount directory](#section-q1k-4bz-iem)
    
-   [How to set user access permissions for a disk volume's mount directory](#21aba19168wec)
    

Expansion

-   [Does a disk volume automatically expand?](#d9eae64625d02)
    
-   [Failed to expand a disk with the error "Waiting for user to (re-)start a pod to finish file system resize of volume on node"](#section-j06-lu6-w14)
    
-   [Failed to expand a disk with the error "only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize"](#a8e68bbafdap0)
    

Uninstall

-   [A pod with a disk volume fails to be deleted with the error "The specified disk is not a portable disk"](#section-s48-866-q58)
    
-   [A pod with a disk volume fails to be deleted because the disk cannot be detached and an orphaned pod is found in kubelet logs](#section-dnb-ej4-1ml)
    
-   [After a pod with a disk volume is deleted, the pod fails to restart with a mount failure and cannot automatically recover](#section-npd-p20-ltb)
    
-   [A pod with a disk volume fails to be deleted with the error "target is busy"](#section-wo2-waf-w2e)
    
-   [A disk remains after its PVC is deleted](#4f7dae306dbip)
    
-   [Failed to delete a PVC, and the PVC still exists after deletion](#737581230f9s4)
    

Others

-   [Can a disk used as a volume be converted to a subscription billing method?](#2db4af188av2w)
    
-   [How to identify disks associated with volumes on the Elastic Block Storage page in the ECS console](#e479282a82a5a)
    

## **Disk creation**

### **Failed to dynamically create a PV with the error "InvalidDataDiskCatagory.NotSupported"**

**Symptom**

A persistent volume (PV) fails to be created. The persistent volume claim (PVC) event shows the error `InvalidDataDiskCategory.NotSupported`.

**Cause**

The current zone does not support the disk type specified in the StorageClass, or the specified disk type is out of stock in the current zone.

**Solution**

-   Upgrade the Container Storage Interface (CSI) component and use the StorageClass named alicloud-disk-topology-alltype. Alternatively, create and use a custom StorageClass that declares multiple disk types. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#section-qlr-jkq-hi2).
    
-   Add multiple zones to the cluster. For more information, see [High availability configuration recommendations for disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-storage-settings-for-cross-zone-deployment#task-2269269).
    

### **Failed to dynamically create a PV with the error "The specified AZone inventory is insufficient"**

**Symptom**

A PV fails to be created. The PVC event shows the error `The specified AZone inventory is insufficient`.

**Cause**

The disk is out of stock in the specified zone. This causes the disk creation to fail.

**Solution**

-   Upgrade the Container Storage Interface (CSI) component and use the StorageClass named alicloud-disk-topology-alltype. Alternatively, create and use a custom StorageClass that declares multiple disk types. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#section-qlr-jkq-hi2).
    
-   Add multiple zones to the cluster. For more information, see [High availability configuration recommendations for disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-storage-settings-for-cross-zone-deployment#task-2269269).
    

### **Failed to dynamically create a PV with the error "disk size is not supported"**

**Symptom**

A PV fails to be created dynamically. The PVC event shows the error `disk size is not supported`.

**Cause**

The disk capacity specified in the PVC is invalid. Different disk types have different minimum capacity requirements. For more information about disk capacity requirements, see [Disk types](/help/en/ecs/user-guide/disks-2#section-d9f-cog-644).

**Solution**

Adjust the capacity specified in the PVC to meet the requirements.

### **Failed to dynamically create a PV with the error "waiting for first consumer to be created before binding"**

**Symptom**

A PV fails to be created when you use a StorageClass with the `WaitForFirstConsumer` mode. The PVC event shows the error `persistentvolume-controller waiting for first consumer to be created before binding`.

**Cause**

The PVC did not detect the node to which the pod was scheduled.

-   The application's YAML file explicitly specifies a `nodeName`. These pods bypass the scheduler logic, which prevents the PVC from detecting the node. Therefore, pods scheduled by specifying a `nodeName` cannot use a StorageClass with the `WaitForFirstConsumer` mode.
    
-   No pod references the current PVC.
    

**Solution**

-   Delete the `nodeName` field from the application's YAML file and use a different scheduling method.
    
-   Create a pod that uses the current PVC.
    

### **Failed to dynamically create a PV with the error "no topology key found on CSINode node-XXXX"**

**Symptom**

A PV fails to be created. The PVC event shows the error `no topology key found on CSINode node-XXXX`.

**Cause**

-   The csi-plugin on the `node-XXXX` node failed to start.
    
-   The volume uses a driver that the system does not support. The system supports Disk, NAS, and OSS by default.
    

**Solution**

1.  Check whether the pod is in the Normal state.
    
    ```
    kubectl get pods -n kube-system -o wide | grep node-XXXX
    ```
    
    -   If the state is abnormal, run the `kubectl logs csi-plugin-xxxx -nkube-system -c csi-plugin` command to view the error logs. In most cases, the cause is a port conflict on the node. You can resolve this issue in one of the following ways:
        
        -   Stop the process that is occupying the port.
            
        -   Add the `SERVICE_PORT` environment variable to the csi-plugin to specify a new port.
            
            ```
            kubectl set env -n kube-system daemonset/csi-plugin --containers="csi-plugin" SERVICE_PORT="XXX"
            ```
            
    -   If the state is Normal, proceed to the next step.
        
2.  Use a default system driver for the volume, such as Disk, NAS, or OSS. For more information, see the documents in the [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/) directory.
    

### **Failed to dynamically create a PV with the error "selfLink was empty, can't make reference"**

**Symptom**

A PV fails to be created. The PVC event shows the error `selfLink was empty, can't make reference`.

**Cause**

1.  The cluster version and the CSI component version do not match.
    
2.  The cluster uses the FlexVolume storage plugin.
    

**Solution**

1.  Upgrade the CSI component version. The component version should generally match the cluster version. For example, a cluster with Kubernetes 1.20 requires CSI version 1.20 or later.
    
2.  If your cluster uses the FlexVolume storage plugin, [migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
    

### **Failed to dynamically create a PV when the requested PVC capacity is less than 20 GiB**

Different disk types support different capacity ranges. If you use a default StorageClass provided by ACK, such as alicloud-disk-topology-alltype or alicloud-disk-essd, the automatically created disk (for example, a PL1 ESSD) has a minimum capacity of 20 GiB. If your storage requirement is less than 20 GiB, you must manually create a StorageClass and specify a disk type that supports a capacity of less than 20 GiB, such as an ESSD AutoPL disk or a PL0 ESSD.

-   For more information about how to create and use a StorageClass, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes).
    
-   For more information about the capacity ranges supported by different disk types, see [Elastic Block Storage performance](/help/en/ecs/user-guide/block-storage-performance).
    

## **Disk attachment**

### **A pod with a disk volume fails to start with the error "had volume node affinity conflict"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the error `had volume node affinity conflict`.

**Cause**

All PVs have a `nodeaffinity` property. This error occurs when the `nodeaffinity` property of the PV is inconsistent with the `nodeaffinity` property of the pod. The scheduler cannot schedule the pod because of this conflict.

**Solution**

Modify the `nodeaffinity` property of the PV or the pod so that their `nodeaffinity` properties match.

### **A pod with a disk volume fails to start with the error "can't find disk"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the error `can't find disk`.

**Cause**

-   An incorrect disk ID or the ID of a disk from another region was entered when you configured the PV.
    
-   Your account does not have the permissions to perform operations on the disk. The disk may belong to another account.
    

**Solution**

-   If the disk is statically attached, check whether the disk meets the following requirements:
    
    -   The disk is in the same region as the cluster.
        
    -   The disk ID is copied correctly.
        
    -   The disk and the cluster belong to the same account.
        
-   If the disk is dynamically attached, check the permissions of the CSI component.
    
    Confirm whether an Addon Token exists in the cluster.
    
    -   If so, check the version of the CSI component in the cluster. Then, upgrade it to the latest version and retry.
        
    -   If no AccessKey is provided, the user-defined AccessKey for the node's Worker Role is used by default. You must verify the permissions of the corresponding Policy.
        

### **A pod with a disk volume fails to start with the error "Previous attach action is still in process"**

**Symptom**

When you start a pod with a disk volume, the error `Previous attach action is still in process` is reported. The pod starts successfully after a few seconds.

**Cause**

ECS does not support attaching multiple disks to a single virtual machine at the same time. Therefore, when multiple pods with disk volumes are scheduled to the same host, the disks are attached serially. This message indicates that another disk is currently being attached to the node.

**Solution**

No action is required. The system automatically retries until it succeeds.

### **A pod with a disk volume fails to start with the error "InvalidInstanceType.NotSupportDiskCategory"**

**Symptom**

When you start a pod with a disk volume, the error `InvalidInstanceType.NotSupportDiskCategory` is reported.

**Cause**

The disk type and the ECS instance type do not match. The ECS node to which the pod is scheduled does not support this disk type, which causes the attachment to fail.

**Solution**

Try the following methods to resolve the issue:

-   Check the instance type of the ECS node. Make sure an ECS node that supports this disk type exists, and ensure that scheduling is configured to schedule the pod to that node.
    
-   If none of the current ECS node instance types support this disk type, use a different type of disk.
    

**Note**

For more information about disk and instance type compatibility, see [Instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

### **A pod with a disk volume fails to start with the error "diskplugin.csi.alibabacloud.com not found in the list of registered CSI drivers"**

**Symptom**

When you start a pod, the following warning appears.

```
Warning  FailedMount       98s (x9 over 3m45s)  kubelet, cn-zhangjiakou.172.20.XX.XX  MountVolume.MountDevice failed for volume "d-xxxxxxx" : kubernetes.io/csi: attacher.MountDevice failed to create newCsiDriverClient: driver name diskplugin.csi.alibabacloud.com not found in the list of registered CSI drivers
```

**Cause**

-   This warning usually occurs on newly added nodes. The CSI pod starts at the same time as the application pod, but CSI registration takes some time. The CSI is not yet registered when the application pod begins the attachment process, which causes the warning.
    
-   The CSI component on the current node failed to register. This may be because the CSI component did not start properly.
    

**Solution**

-   If the warning is for a new node, no action is required. Wait for the system to retry.
    
-   If the CSI component fails to register, check the CSI component status and logs. If the CSI component is normal, join the DingTalk user group (Group ID: 35532895) for assistance.
    

### **A pod with a disk volume fails to start with the error "Multi-Attach error for volume"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the warning `warning failedAttachVolume xxx xxx Multi-Attach error for volume "xxx"`. Running the `kubectl describe pvc <pvc-name>` command shows that multiple pods are referencing the same PVC.

**Cause**

-   **Cause 1**: A disk for which multi-attach is not enabled can be attached to only one pod at a time. It cannot be used by multiple pods at the same time.
    
-   **Cause 2**: The pod that was using the PVC was deleted, but the disk that corresponds to the PVC was not detached properly.
    
    In the [ECS console](https://ecs.console.alibabacloud.com), find the node to which the disk that corresponds to the PVC is currently attached. Then, check the logs of the csi-plugin pod on that node for the message `Path is mounted, no remove: /var/lib/kubelet/plugins/kubernetes.io/csi/diskplugin.csi.alibabacloud.com/xxx/globalmount`. Run the following command to confirm whether the csi-plugin directly mounts the `/var/run` HostPath:
    
    ```
    kubectl get ds -n kube-system csi-plugin -ojsonpath='{.spec.template.spec.volumes[?(@.hostPath.path=="/var/run/")]}'
    ```
    
    If the output is not empty, a direct mount exists, which confirms the issue.
    

**Solution**

-   **Solution for Cause 1**:
    
    Ensure that multiple pods do not reference the same PVC.
    
-   **Solution for Cause 2:**
    
    Run the following command to manually patch the csi-plugin YAML file. This resolves the issue.
    
    ```
    kubectl patch -n kube-system daemonset csi-plugin -p '
    spec:
      template:
        spec:
          containers:
            - name: csi-plugin
              volumeMounts:
                - mountPath: /host/var/run/efc
                  name: efc-metrics-dir
                - mountPath: /host/var/run/ossfs
                  name: ossfs-metrics-dir
                - mountPath: /host/var/run/
                  $patch: delete
          volumes:
            - name: ossfs-metrics-dir
              hostPath:
                path: /var/run/ossfs
                type: DirectoryOrCreate
            - name: efc-metrics-dir
              hostPath:
                path: /var/run/efc
                type: DirectoryOrCreate
            - name: fuse-metrics-dir
              $patch: delete'
    ```
    

### **A pod with a disk volume fails to start with the error "Unable to attach or mount volumes: unmounted volumes=\[xxx\], unattached volumes=\[xxx\]: timed out waiting for the condition"**

**Symptom**

A pod with a storage volume fails to start. The pod event shows the error `Unable to attach or mount volumes: unmounted volumes=[xxx], unattached volumes=[xxx]: timed out waiting for the condition`.

**Cause**

This error message is reported by the kubelet. The kubelet periodically checks whether the volumes used by pods on all nodes are ready. If a volume is not ready, this error occurs.

This event does not indicate a specific problem. It only means that the attachment was not complete at that time. The possible causes are as follows:

-   **Cause 1**: An attachment error occurred. Because the error persisted for a long time, the relevant event expired and was overwritten. Only the kubelet error event remains.
    
-   **Cause 2**: The kubelet timed out when trying to retrieve the `configmap/serviceaccount defaulttoken`. This is a node network issue. The only solution is to try a different node.
    
-   **Cause 3**: If the `securityContext.fsGroup` parameter is configured in the pod template, the owner of the files in the volume is automatically changed when the disk volume is attached. Depending on the number of files, this can result in a long preparation time.
    
-   **Cause 4**: If the volume is statically attached, confirm that the `driver` field in the volume is correct. For example, check for spelling errors. If this field is incorrect, the kubelet may not be able to find and call the correct `driver`, preventing the volume from becoming ready.
    

**Solution**

-   **Solution for Cause 1**: Delete the pod to restart it. Then, find the error event to identify the specific problem.
    
-   **Solution for Cause 2**: Reschedule the pod to another node. For more information, see [Schedule an application to a specific node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes#task-1779995).
    
-   **Solution for Cause 3**: For Kubernetes clusters of version 1.20 and later, you can set `fsGroupChangePolicy` to `OnRootMismatch`. This changes the file owner only when the pod first starts. In subsequent scenarios, such as pod upgrades or recreations, the volume attachment time will be normal. For more information about the `fsGroupChangePolicy` parameter, see [Configure a Security Context for a Pod or Container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/). If this does not meet your needs, use an `initContainer` to implement custom permission adjustment operations.
    
-   **Solution for Cause 4**: Enter the correct driver name. For example:
    
    -   diskplugin.csi.alibabacloud.com
        
    -   nasplugin.csi.alibabacloud.com
        
    -   ossplugin.csi.alibabacloud.com
        

### **A pod with a disk volume fails to start with the error "validate error Device /dev/nvme1n1 has error format more than one digit locations"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the error `validate error Device /dev/nvme1n1 has error format more than one digit locations`.

**Cause**

The node uses a g7se, r7se, c7se, or any 8th-generation ECS instance type, and the cluster and CSI component versions are too old to support disk attachment on NVMe-type nodes.

**Solution**

Make sure your ACK cluster version is 1.20 or later, and upgrade the CSI component to version v1.22.9-30eb0ee5-aliyun or later. For more information about how to upgrade a component, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

**Note**

FlexVolume components are not supported. Join the DingTalk user group (Group ID: 35532895) for assistance with migrating FlexVolume components to CSI components.

### **A pod with a disk volume fails to start with the error "ecs task is conflicted"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the error `ecs task is conflicted`.

**Cause**

Some ECS tasks must be performed serially. When multiple requests are sent to ECS at the same time, an ECS task conflict error occurs.

**Solution**

You can choose one of the following solutions:

-   Wait a while. CSI automatically retries the operation. If your other tasks are complete, CSI successfully attaches the disk on retry.
    
-   For more information, see [Use parallel disk attachment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/attach-cloud-disks-in-parallel).
    

### **A pod with a disk volume fails to start with the error "wrong fs type, bad option, bad superblock on /dev/xxxxx missing codepage or helper program, or other error"**

**Symptom**

A pod with a disk volume fails to start. The pod event shows the following error.

```
wrong fs type, bad option, bad superblock on /dev/xxxxx  missing codepage or helper program, or other error
```

**Cause**

The file system on the disk is corrupted, preventing the disk from being attached.

**Solution**

This is usually caused by an improper detachment of the disk. Follow these steps to resolve the issue.

1.  Check whether the application meets the following requirements when it uses the disk:
    
    -   Multiple pods are not attached to the same disk.
        
    -   Data is not written during the detachment process.
        
2.  Log on to the host where the pod is located and run the `fsck -y /dev/xxxxx` command to repair the file system on the disk.
    
    In this command, `/dev/xxxxx` corresponds to the error message in the pod event. Repairing the disk file system modifies the file system's metadata. If the repair fails or cannot be completed, the file system on the disk is corrupted and can no longer be used.
    

### **A pod with a disk volume fails to start with the error "exceed max volume count"**

**Symptom**

A pod with a disk volume remains in the Pending state for a long time and cannot be scheduled. However, based on the ECS instance type, more disks can be attached to the node. The pod event shows the following error.

```
0/1 nodes are available: 1 node(s) exceed max volume count.
```

**Cause**

Pod scheduling is limited by the number specified in the `MAX_VOLUMES_PERNODE` environment variable.

**Solution**

-   The csi-plugin component of version v1.26.4-e3de357-aliyun and later supports automatic configuration of the number of attachable disks. Run the following command to manually delete the `MAX_VOLUMES_PERNODE` environment variable from the csi-plugin daemonset in the kube-system namespace. This allows the system to automatically configure the number of attachable disks based on the ECS instance type.
    
    ```
    kubectl patch -n kube-system daemonset csi-plugin -p '
    spec:
      template:
        spec:
          containers:
          - name: csi-plugin
            env:
            - name: MAX_VOLUMES_PERNODE
              $patch: delete'
    ```
    
-   Versions of the csi-plugin component earlier than v1.26.4-e3de357-aliyun support configuring the number of attachable disks only through this environment variable. Manually adjust this variable based on the node in the cluster that can have the fewest data disks attached.
    

**Important**

-   The automatic configuration takes effect only when the csi-plugin pod starts. If you manually add or remove data disks from a node, you must recreate the csi-plugin pod on that node to trigger the automatic configuration again.
    
-   The automatic configuration feature does not support static persistent volumes that use disks. If such volumes exist, the number of schedulable pods is smaller than expected.
    

### **A pod with a disk volume fails to start with the error "The amount of the disk on instance in question reach its limits"**

**Symptom**

A pod with a disk volume remains in the ContainerCreating state for a long time. The pod event shows the following error.

```
MountVolume.MountDevice failed for volume "d-xxxx" : rpc error: code = Aborted desc = NodeStageVolume: Attach volume: d-xxxx with error: rpc error: code = Internal desc = SDK.ServerError
ErrorCode: InstanceDiskLimitExceeded
Message: The amount of the disk on instance in question reach its limits
```

**Cause**

The `MAX_VOLUMES_PERNODE` environment variable is set too high.

**Solution**

-   The csi-plugin component of version v1.26.4-e3de357-aliyun and later supports automatic configuration of the number of attachable disks. Run the following command to manually delete the `MAX_VOLUMES_PERNODE` environment variable from the csi-plugin daemonset in the kube-system namespace. This allows the system to automatically configure the number of attachable disks based on the ECS instance type.
    
    ```
    kubectl patch -n kube-system daemonset csi-plugin -p '
    spec:
      template:
        spec:
          containers:
          - name: csi-plugin
            env:
            - name: MAX_VOLUMES_PERNODE
              $patch: delete'
    ```
    
-   Versions of the csi-plugin component earlier than v1.26.4-e3de357-aliyun support configuring the number of attachable disks only through this environment variable. Manually adjust this variable based on the node in the cluster that can have the fewest data disks attached.
    

**Important**

-   The automatic configuration takes effect only when the csi-plugin pod starts. If you manually add or remove data disks from a node, you must recreate the csi-plugin pod on that node to trigger the automatic configuration again.
    
-   The automatic configuration feature does not support static persistent volumes that use disks. If such volumes exist, the number of schedulable pods is smaller than expected.
    

### **How to change the configuration of the default disk StorageClass**

The default StorageClass cannot be changed.

After you install the csi-provisioner component, StorageClasses such as alicloud-disk-topology-alltype are created by default in the cluster. Do not modify these default StorageClasses. To adjust the StorageClass configuration, such as the volume type or reclaim policy, create a new StorageClass. The number of StorageClasses is not limited. For more information, see [Create a StorageClass](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#8e449dc4a26pr).

### **Can multiple containerized applications use the same disk volume?**

Disks are not shared storage. A disk for which multi-attach is not enabled can be attached to only one pod at a time. For more information about multi-attach, see [Use multi-attach and reservation for NVMe disks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/multi-attach-and-reservation-of-nvme-cloud-disks).

## **Disk usage**

### **An application reports an "input/output error" when reading from or writing to the disk mount directory**

**Symptom**

The disk is attached correctly and the application starts successfully. However, after a short time, the application suddenly reports an `input/output error`.

**Cause**

The disk used by the application is missing.

**Solution**

Check the status of the disk and take action based on its status.

1.  Based on the disk mount directory, find the corresponding PVC from the pod's `VolumeMount` definition.
    
2.  Run the `kubectl get pvc <pvc-name>` command to view the PVC status and note the corresponding PV.
    
3.  Based on the PV name, view the PV's YAML file and retrieve the disk ID from the `pv.VolumeHandle` field.
    
4.  On the **Elastic Block Storage** page of the [ECS console](https://ecs.console.alibabacloud.com), use the disk ID to check the status of the disk.
    
    -   If the disk is in the **Available** state, the disk was detached. Restart the pod to re-attach the disk.
        
        **Note**
        
        The pod is in the Running state, which means the disk was previously attached, then later detached. This suggests that multiple pods were referencing the same disk. Run the `kubectl describe pvc <pvc-name>` command and check the `UsedBy` field in the output to see whether multiple pods are referencing the current PVC.
        
    -   If the disk cannot be found, the disk has been released and cannot be recovered.
        
        **Important**
        
        When you attach an enterprise SSD (ESSD), use the automatic snapshot feature for ESSDs to protect the data on the disk volume. For more information, see [Data loss due to unexpected disk deletion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-data-security-of-disk-volumes#p-v1f-rfc-8mw).
        

### **How to set user access permissions for a disk volume's mount directory**

Disks do not support setting user access permissions directly. To set access permissions for the mount directory, configure a `securityContext` for the pod when you create the application to modify permissions. For more information, see [Configure Volume Permission and Ownership Change Policy for Pods](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/?spm=gcc-ticket-workbench._workbench_ticket_00021H2J3D.0.0.62c0pWOOpWOO0T#configure-volume-permission-and-ownership-change-policy-for-pods).

**Note**

After you configure `securityContext.fsgroup`, the owner of the files in the volume is automatically changed when the disk is mounted. This may increase the preparation time, depending on the number of files. For Kubernetes clusters of version 1.20 or later, you can set `fsGroupChangePolicy` to `OnRootMismatch`. This ensures that the file owner is changed only when the container starts for the first time. For subsequent pod upgrades or rebuilds, the mount time is not affected. If this does not meet your needs, we recommend that you use an initContainer to adjust the permissions.

## **Disk expansion**

### **Does a disk volume automatically expand?**

By default, a disk volume does not automatically expand when its capacity is exhausted. You must manually update the storage capacity declaration in the PVC to expand the disk volume. For more information, see [Online expansion of disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions).

If you need automatic expansion, define an automatic disk expansion policy using a CustomResourceDefinition (CRD). This allows the volume to expand automatically when its usage exceeds a certain threshold. For more information, see [Configure automatic expansion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-expand-a-disk-volume).

**Note**

If your cluster version is earlier than 1.16 or does not meet the requirements for [Online expansion of disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions) (for example, the disk is a basic disk), expand the disk on the ECS side. This involves manually expanding the disk capacity and the file system. After expanding the disk on the ECS side, the resources in the cluster are not affected. The capacity of the PVC and PV that you view from the cluster side remains the same as before the expansion.

### **Failed to expand a disk with the error "Waiting for user to (re-)start a pod to finish file system resize of volume on node"**

**Symptom**

After you update the storage capacity declaration of the PVC, the StorageCapacity in the PVC's status does not change, and the PVC event reports the following message:

```
 Waiting for user to (re-)start a pod to finish file system resize of volume on node.
```

**Cause**

Expanding a disk involves two parts: calling the [ResizeDisk](/help/en/ecs/api-resizedisk#doc-api-Ecs-ResizeDisk) API operation to expand the disk capacity and expanding the file system. This error message indicates that the underlying block device has been expanded, but the file system expansion failed. This suggests a problem on the node side.

**Solution**

Determine the type of the current node.

-   If it's an ECI node, run the `kubectl get configmap -n kube-system eci-profile -o jsonpath="{.data.enablePVCController}"` command to confirm that this configuration is set to `true`. For more information, see [eci-profile configuration items](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile#f61ab9909046f).
    
    If the issue persists,[submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    
-   If it's an ECS node, run the `kubectl get pods -n kube-system -l app=csi-plugin --field-selector=spec.nodeName=<node-name>` command to retrieve the status of the csi-plugin on the current node.
    
    -   If the csi-plugin is in a normal state, join the DingTalk user group (Group ID: 35532895) for consultation.
        
    -   If the csi-plugin is in an abnormal state, restart the csi-plugin pod and retry. If the issue persists, join the DingTalk user group (Group ID: 35532895) for assistance.
        

### **Failed to expand a disk with the error "only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize"**

**Symptom**

After you update the storage capacity declaration of the PVC, the following error message is reported:

```
only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize 
```

**Cause**

-   **Cause 1**: The PVC and PV for the current disk volume were created manually in a static way. The `storageClassName` configuration in the PVC is empty, or a StorageClass with the same name does not exist in the cluster.
    
-   **Cause 2**: In the StorageClass referenced by the PVC, the `allowVolumeExpansion` configuration is set to `false`. This means that expansion is not supported.
    

**Solution**

-   **Solution for Cause 1:** Check the `storageClassName` configuration of the PVC and make sure a StorageClass with the same name exists in the cluster. If not, you must create a corresponding StorageClass based on the properties of the existing disk volume and set `allowVolumeExpansion: true`.
    
-   **Solution for Cause 2:** StorageClass properties cannot be modified. You must create a new StorageClass, set `allowVolumeExpansion` to `true`, then modify the PVC to reference the new StorageClass, and finally expand the PVC.
    

## **Detaching a cloud disk**

### **A pod with a disk volume fails to be deleted with the error "The specified disk is not a portable disk"**

**Symptom**

When you detach a disk, the error `The specified disk is not a portable disk` is reported.

**Cause**

The billing method for the disk is subscription. You may have requested a subscription disk or converted the disk associated with an ECS instance to a subscription billing method when you upgraded the ECS instance.

**Solution**

Change the billing method of the disk to pay-as-you-go.

### **A pod with a disk volume fails to be deleted because the disk cannot be detached and an orphaned pod is found in kubelet logs**

**Symptom**

The pod fails to be detached, and logs for a pod that is not managed by ACK appear in the kubelet.

**Cause**

The pod terminated abnormally, which caused the volume mount target to not be cleaned up during the detachment process. This ultimately prevents the pod from being deleted. Prior to Kubernetes v1.22, the kubelet's garbage collection (GC) process for volumes was not fully implemented, necessitating manual or scripted cleanup of dangling mount targets.

**Solution**

Run the following script on the problematic node to clean up the dangling mount targets.

```
wget https://raw.githubusercontent.com/AliyunContainerService/kubernetes-issues-solution/master/kubelet/kubelet.sh
sh kubelet.sh
```

### **After a pod with a disk volume is deleted, the pod fails to restart with a mount failure and cannot automatically recover**

**Symptom**

After a pod is deleted, it cannot be started. The following error is reported, and the pod cannot automatically recover.

```
Warning FailedMount 9m53s (x23 over 40m) kubelet MountVolume.SetUp failed for volume “xxxxx” : rpc error: code = Internal desc = stat /var/lib/kubelet/plugins/kubernetes.io/csi/pv/xxxxx/globalmount: no such file or directory
```

**Affected scope**

-   ACK cluster version is 1.20.4-aliyun-1.
    
-   The application uses a cloud disk as its storage medium.
    
-   A StatefulSet is used with the `podManagementPolicy: "Parallel"` property set.
    

**Cause**

For more information, see the GitHub issue [Pod fails to start after restarting rapidly](https://github.com/kubernetes/kubernetes/issues/102779).

**Solution**

-   Add new nodes to the cluster and then remove the old nodes to replace all of them. The faulty pod automatically recovers. For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-851-l8a-fj3) and [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node#task-tqk-v54-dgb).
    
-   Change the StatefulSet to `orderedready` or remove the `podManagementPolicy: "Parallel"` property.
    
-   If the cluster has a small number of nodes, use the following solution.
    
    1.  Add the `cordon` label to the node where the pod is located to make the node unschedulable.
        
    2.  Delete the pod and wait for its status to change to Pending.
        
    3.  Remove the `cordon` label from the node and wait for the pod to restart.
        
-   If the cluster has many nodes, you can schedule the pod to another node. The pod will then start normally.
    

### **A pod with a disk volume fails to be deleted with the error "target is busy"**

**Symptom**

When you delete a pod, the pod event or kubelet log (`/var/log/messages`) reports the following error.

```
unmount failed, output <mount-path> target is busy
```

**Cause**

The pod failed to be deleted because a process is using the device. You must log on to the host where the pod is located to find the process.

**Solution**

1.  Find the block device under the corresponding mount path.
    
    ```
    mount | grep <mount-path>
    /dev/vdtest <mount-path>
    ```
    
2.  Find the process ID that is using the block device.
    
    ```
    fuser -m /dev/vdtest
    ```
    
3.  Stop the corresponding process.
    
    After the process is stopped, the disk is automatically detached.
    

### **A disk remains after its PVC is deleted**

**Symptom**

After a PVC is deleted from the cluster, the disk remains in the ECS console.

**Cause**

-   **Cause 1**: The PV's reclaim policy (`reclaimPolicy`) is `Retain`. This means that after the PVC is deleted, the PV and the disk are retained.
    
-   **Cause 2**: The PVC and PV were deleted at the same time, or the PV was deleted before the PVC.
    

**Solution**

-   **Solution for Cause 1**: If the `reclaimPolicy` is set to `Retain`, CSI does not delete the PV and the disk when the PVC is deleted. You must delete them manually.
    
-   **Solution for Cause 2**: If a PV has a `deleteTimestamp annotation`, CSI is not responsible for reclaiming the disk resource. For more information, see [controller](https://github.com/kubernetes-sigs/sig-storage-lib-external-provisioner/blob/cd540b4cb6c7b01eaad8434c273d00aa13ce9081/controller/controller.go#L1253). To delete the disk resource, simply delete the PVC. The PV bound to the deleted PVC is automatically cleaned up.
    

### **Failed to delete a PVC, and the PVC still exists after deletion**

**Symptom**

A PVC in the cluster fails to be deleted, even with the `--force` flag.

**Cause**

A pod in the cluster is using the PVC. The `finalizer` on the PVC still exists, preventing the PVC from being deleted.

**Solution**

1.  View the pod that is currently referencing this PVC.
    
    ```
    kubectl describe pvc <pvc-name> -n kube-system
    ```
    
2.  After you confirm that the referencing pod is no longer in use, delete the pod, then try to delete the PVC again.
    

## **Others**

### **Can a disk used as a volume be converted to a subscription billing method?**

A disk used as a volume must use the pay-as-you-go billing method. It cannot be converted to subscription.

### **How to identify disks associated with volumes on the Elastic Block Storage page in the ECS console**

Retrieve the ID of the disk associated with the disk volume (in the format `d-********`). Then, on the **Elastic Block Storage** page of the ECS console, use the disk ID to identify which disks are associated with volumes.

-   By default, the name of a dynamically created disk PV is the disk ID. View the disk ID on the **Storage** > **PersistentVolumes** page of the cluster.
    
-   If the disk PV's name is not the disk ID, run the `kubectl get pv <pv-name> -o yaml` command to view the disk PV's details. The value of the `volumeHandle` field is the disk ID.
