This topic lists frequently asked questions about mounting and using persistent volumes with Container Storage Interface (CSI) components.

## **Typical issues**

If a pod is in an abnormal state or a persistent volume fails to mount, see [Troubleshoot storage issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1) for troubleshooting steps.

The following list describes some typical issues:

-   [The PVC reports a "no volume plugin matched" error when you create or mount a persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1#section-s7s-069-fii)
    
-   [A pod event reports "0/x nodes are available: x pod has unbound immediate PersistentVolumeClaims"](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1#8ad57a7438lub)
    
-   [A PV in the Released state cannot be bound by recreating a PVC](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1#0735c5c1f66xl)
    
-   [A PV in the Lost state cannot be bound by recreating a PVC](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1#7368e48ef2htl)
    
-   [Will changing a StorageClass affect existing storage?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1#025dd69d72dcq)
    

## **Cloud Disk persistent volumes**

**Category**

**Issue**

Creation

-   [Why does the system prompt "InvalidDataDiskCatagory.NotSupported" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#489e8b999dx14)
    
-   [Why does the system prompt "The specified AZone inventory is insufficient" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#dc11cb50ae705)
    
-   [Why does the system prompt "disk size is not supported" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#7912224e2b2un)
    
-   [Why does the system prompt "waiting for first consumer to be created before binding" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#19c5ec81ed5ea)
    
-   [Why does the system prompt "no topology key found on CSINode node-XXXX" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-zbg-apx-9qz)
    
-   [Why does the system prompt "selfLink was empty, can't make reference" when I create a dynamically provisioned PV?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#b800a9905cbhv)
    
-   [Dynamically provisioned PV fails for PVCs requesting less than 20 GiB](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#4fd5703ecckf0)
    

Mounting

-   [Why does the system prompt "had volume node affinity conflict" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-dlb-cl6-lzm)
    
-   [Why does the system prompt "can't find disk" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-v1h-p97-bpw)
    
-   [Why does the system prompt "Previous attach action is still in process" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-1n4-hp3-omp)
    
-   [Why does the system prompt "InvalidInstanceType.NotSupportDiskCategory" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-edi-yxh-anf)
    
-   [Why does the system prompt "diskplugin.csi.alibabacloud.com not found" in the list of registered CSI drivers when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-ac9-x0h-9el)
    
-   [Why does the system prompt "Multi-Attach error for volume" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#89539ad03bs63)
    
-   [Why does the system prompt "Unable to attach or mount volumes: unmounted volumes=\[xxx\], unattached volumes=\[xxx\]: timed out waiting for the condition" when I start a pod that uses a disk volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-48x-0l0-q46)
    
-   [Why does the system prompt "validate error Device /dev/nvme1n1 has error format more than one digit locations" when I start a pod that has disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-sf1-4qb-b1r)
    
-   [Why does the system prompt "ecs task is conflicted" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-a4o-ftm-ttd)
    
-   [Why does the system prompt "wrong fs type, bad option, bad superblock on /dev/xxxxx missing codepage or helper program, or other error" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-ep5-vcf-27i)
    
-   [Why does the system prompt "exceed max volume count" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#dc835d3c)
    
-   [Why does the system prompt "The amount of the disk on instance in question reach its limits" when I start a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#88a587f6)
    
-   [How do I modify the default StorageClass configuration for cloud disks?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#d57932b507ug1)
    
-   [Can I use the same disk volume for multiple container applications?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#6b78782e2b3ia)
    

Usage

-   [Why does the system prompt "input/output error" when an application performs read and write operations on the mount directory of a disk volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-hcs-h3p-7u2)
    
-   [How do I set user access permissions for a cloud disk mount directory?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#0bcacc20b8v41)
    

Expansion

-   [Do cloud disk volumes support automatic expansion?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#5abc370274xm1)
    
-   [Why does the system fail to expand a disk and prompts "Waiting for user to (re-)start a pod to finish file system resize of volume on node"?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-979-hhx-3at)
    
-   [Why does the system fail to expand a disk and prompt "only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize"?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#8151bf170adps)
    

Unmounting

-   [Why does the system prompt "The specified disk is not a portable disk" when I delete a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-jbf-6k6-etl)
    
-   [Why does the system prompt that the disk cannot be unmounted when I delete a pod that has a disk mounted and an orphaned pod that is not managed by ACK is found in the kubelet log?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-ulq-tb2-0uk)
    
-   [What do I do if the system fails to recreate a deleted pod and prompts that the mounting failed?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-0xo-fn6-bwr)
    
-   [Why does the system prompt "target is busy" when I delete a pod that has a disk mounted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#title-aw1-3w5-5i4)
    
-   [Why is the disk retained after I delete the PVC used to mount the disk?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#55421ef06d9yy)
    
-   [Why does a PVC still exist after I delete it?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#761479c526s7f)
    

Other

-   [Can I convert a disk used as a PV to the subscription billing model?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#454fbe46194tx)
    
-   [How can I identify disks for PVs in the ECS console?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#1c6760c4f1z1m)
    

## **NAS persistent volumes**

**Category**

**Issue**

Mounting

-   [Error during mount: chown: Operation not permitted](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-srw-s3w-230)
    
-   [Controller task queue is full when mounting a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-25a-w2m-h8u)
    
-   [The time required to mount a NAS persistent volume increases](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes-1#section-td0-7vk-92o)
    
-   [Error during mount: unknown filesystem type "xxx"](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-ahv-hi5-iz0)
    
-   [Why is my pod stuck in ContainerCreating when I mount two NAS PVCs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-nqe-dto-jor)
    
-   [How do I mount a NAS file system with TLS using CSI?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#7ef12ff020fgw)
    
-   [How do I implement user or group isolation on NAS?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#9ac24a9b81se0)
    
-   [Can multiple applications use the same NAS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#00381528e3tag)
    
-   [Error when mounting a NAS volume in ACS: failed to do setup volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#a04406f920xvq)
    

Usage

-   [Cannot create or modify directories on a NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-wg3-a79-gg3)
    
-   [NFS Stale File Handle error during read/write operations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-mhx-1q1-nat)
    

Unmounting

[Unmount times out and pod is stuck in Terminating state](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#1907f33d23nz2)

## **OSS persistent volumes**

### **ossfs 1.0**

**Type**

**Issue**

Mounting

-   [OSS volume mount time is extended](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-hj8-ax9-t7i)
    
-   [OSS volume mount permission issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-x2l-anl-0qz)
    
-   [OSS volume mount failure](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-vzb-se7-78u)
    
-   [How do I mount only a specific file in OSS using an OSS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-emh-32n-fih)
    
-   [How do I use specified ARNs or a ServiceAccount for RRSA authentication?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#65c4c04f5fvuj)
    
-   [How do I mount an OSS Bucket across accounts?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#98ed6a17e54md)
    
-   [How do I enable exclusive mount mode after ossfs is containerized?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#e8b96389ad21s)
    
-   [An exception occurs when you mount an OSS volume using subpath or subpathExpr](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#455ea1d6f2659)
    

Usage

-   [Access to an OSS Bucket through an OSS volume is slow](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-atz-t7c-32l)
    
-   [File size is 0 in the OSS console](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-x3m-odc-pqm)
    
-   [An application reports the "Transport endpoint is not connected" error when accessing a mount target](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#3356809b31x49)
    
-   [An application reports the "Input/output error" error when accessing a mount target](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#fecd7256a3u6q)
    
-   [A directory is displayed as a file object after being mounted](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-bwq-m47-uvj)
    
-   [Many abnormal requests are monitored on the OSS server](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#8d700b405dwui)
    
-   [The Content-Type metadata of file objects written through an OSS volume is always application/octet-stream](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#b707dfe1e0mmx)
    
-   [The "Operation not supported" or "Operation not permitted" error is returned when you create a hard link](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#f98acf0ad8c51)
    
-   [How do I view the records of access to OSS through an OSS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#55e7342c5e7z3)
    
-   [How do I restart the ossfs process in shared mount mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#554e496c0at2c)
    
-   [How do I check the ossfs version used to mount an OSS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#cf6198b7dcxfx)
    

Scaling

[Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#bdca5d2e771t0)

Uninstall

[Unmounting a statically provisioned OSS volume fails and the pod remains in the Terminating state](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#7a836056092bn)

### **ossfs 2.0**

**Category**

**Question**

Mount

-   [OSS persistent volume mount fails](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#bb1df9c5fa28c)
    
-   [How to mount a single file from an OSS bucket by using a persistent volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#c0b7f28da3i75)
    
-   [How to mount an OSS Bucket across different accounts](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#98ed6a17e54md)
    
-   [How to use a specific ARN or ServiceAccount for RRSA-based Authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#d1b53fe277cwx)
    

Scale out

[Do I need to scale out a volume when the actual storage capacity exceeds the volume's configuration?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#22e669f8carby)

Usage

[How to restart the ossfs 2.0 process](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-storage-volume-faqs#b8f68af2701wk)

## **Storage components**

**Type**

**Issue**

Component issues

-   [The CSI component fails to start, and the component log shows a "403 - Forbidden" error](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#9d276f7047f9u)
    
-   [The CSI component fails to start due to an image pull failure, with the error "exec /usr/bin/plugin.csi.alibabacloud.com: exec format error"](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#3fdb7dfc819st)
    
-   [OOM issues caused by storage components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-j5p-z3p-mtn)
    
-   [High network traffic is observed in the monitoring data of the csi-plugin pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-3y5-b5i-bov)
    
-   [The csi-provisioner component log shows the error "failed to renew lease xxx timed out waiting for the condition"](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-4h1-qmk-9ee)
    

Component upgrade failures

-   [The pre-check for the csi-plugin component fails](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#52ac9d9697i3t)
    
-   [The pre-check for the csi-plugin component passes, but the upgrade fails](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#25cb5ddf26j5j)
    
-   [The csi-plugin component is present in the console, but the csi-provisioner component is missing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#7089f25100whf)
    
-   [The pre-check for the csi-provisioner component fails](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#6bc3fe7c68fm2)
    
-   [The pre-check for the csi-provisioner component passes, but the upgrade fails](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#c61266fd96jps)
    
-   [The csi-provisioner component upgrade fails because the number of cluster nodes or the permissions do not meet the requirements](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-wki-sox-zuo)
    
-   [The csi-provisioner component upgrade fails due to changes in StorageClass properties](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-uhj-2xq-uiq)
    

## **CNFS**

### **An "**`**IPAddress ... for Service ... has a wrong reference**`**" event alert appears after an ACK cluster upgrade**

#### **Symptom**

After you upgrade the cluster, running the `kubectl get events -A` command may return continuous `Warning` events:

```
IPAddress: <IP_ADDRESS> for Service kube-system/cnfs-cache-ds-service has a wrong reference; cleaning up
```

This issue usually occurs in the following scenarios:

1.  The version of the storage-operator component in the cluster is earlier than v1.33.1.
    
2.  The cluster is upgraded from a version earlier than 1.33 to version 1.33 or later.
    

#### **Cause**

Versions of storage-operator earlier than v1.33.1 have a known issue where they continuously try to create an existing Service. In [Kubernetes 1.33](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-33-release-notes) and later, the [MultiCIDRServiceAllocator](https://kubernetes.io/docs/tasks/network/extend-service-ip-ranges/) feature is enabled by default. This repetitive behavior triggers the feature, causing the system to enter a loop of rapidly creating and deleting temporary IPAddress resources.

#### **Solution**

[Upgrade the storage-operator component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components#98e81e54c4aj5).

### **Why is the** `**kube-system/cnfs-cache-ds-service**` **automatically recreated after I manually delete it?**

#### **Symptom**

You manually delete the `cnfs-cache-ds-service` in the `kube-system` namespace. The deletion operation appears to succeed, but the service reappears shortly after.

#### **Cause**

This issue is caused by the `storage-operator` component, which works as follows:

1.  Desired state: In the `storage-operator` ConfigMap, the installation status of `cnfs-cache-ds-service` is defined as `true`.
    
2.  Continuous monitoring: The component continuously checks the cluster to ensure that the service exists.
    
3.  Automatic reconciliation: When you manually delete the service, the controller detects that the actual state does not match the desired state. It then immediately recreates the service to match the desired state.
    

#### **Solution**

##### **Method 1:** **Upgrade the** storage-operator **component (Recommended)**

For more information, see [Upgrade the storage-operator component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components#98e81e54c4aj5).

##### **Method 2: Modify the** storage-operator **configuration (Temporary solution)**

This method involves modifying the storage-operator configuration file to prevent the `cnfs-cache-ds` service from being automatically recreated.

1.  Find and edit the `storage-operator` ConfigMap in the `kube-system` namespace.
    
    ```
    kubectl edit configmap storage-operator -n kube-system
    ```
    
2.  In the `data` field, locate `cnfs-cache-ds` and change the value of its `install` key from `true` to `false`.
    
    ```
    cnfs-cache-ds:
      install: "false"
      # ...other configurations...
    ```
    
3.  Save the changes and exit the editor. The `storage-operator` then applies the new configuration.
    
4.  Run the command to delete the service again.
    
    ```
    kubectl delete service cnfs-cache-ds-service -n kube-system
    ```
