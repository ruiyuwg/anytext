This topic provides answers to some frequently asked questions about File Storage NAS (NAS) volumes.

-   [Why does it require a long time to mount a NAS volume?](#section-td0-7vk-92o)
    
-   [Why does a timeout error occur when I mount a NAS volume?](#section-n33-3bc-3jb)
    
-   [Why does the system prompt chown: option not permitted when I mount a NAS volume?](#section-vxc-7oy-i24)
    
-   [What do I do if I fail to mount a NAS volume?](#section-f1w-yob-goz)
    
-   [What do I do if the task queue of alicloud-nas-controller is full and PVs cannot be created when I use a dynamically provisioned NAS volume?](#section-xgz-7fw-p7e)
    

## Why does it require a long time to mount a NAS volume?

Symptom:

It requires a long time to mount a NAS volume.

Cause:

If the securityContext.fsgroup parameter is set in the application template, kubelet performs the `chmod` or `chown` operation after the volume is mounted, which increases the time consumption.

Solution:

-   If the securityContext.fsgroup parameter is set in the application template, delete the fsgroup parameter in the securityContext section.
    
-   If you want to configure the user ID (UID) and mode of the files in the mounted directory, you can manually mount the directory to an Elastic Compute Service (ECS) instance. You can then perform `chown` and `chmod` operations through a CLI and provision the NAS volume through the FlexVolume plug-in. For more information about how to provision NAS volumes through FlexVolume, see [Mount a statically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-statically-provisioned-nas-volume-2#task-1715570) and [Mount a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume-1#task-1732190).
    
-   For clusters of Kubernetes 1.20 or later, you can set the fsGroupChangePolicy parameter to OnRootMismatch. This way, the `chmod` or `chown` operation is performed only during the first-time launch of the pod that uses the volume. For more information, see [Set the security context for a container](https://kubernetes.io/zh/docs/tasks/configure-pod-container/security-context/#%E4%B8%BA-pod-%E9%85%8D%E7%BD%AE%E5%8D%B7%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E5%92%8C%E5%B1%9E%E4%B8%BB%E5%8F%98%E6%9B%B4%E7%AD%96%E7%95%A5).
    

## Why does a timeout error occur when I mount a NAS volume?

Symptom:

A timeout error occurred when you mount a NAS volume.

Cause:

The mount target of the NAS file system and the cluster are not in the same virtual private cloud (VPC).

Solution:

Select a NAS file system whose mount target is in the same VPC as the cluster.

## Why does the system prompt chown: option not permitted when I mount a NAS volume?

Symptom:

The system prompts chown: option not permitted when you mount a NAS volume.

Cause:

Your container does not have permissions to use the specified NAS volume.

Solution:

Launch the container with root privileges.

## What do I do if I fail to mount a NAS volume?

Symptom:

Your attempt to mount a NAS PV failed and the system prompts the following error:

```
Unable to mount volumes for pod "dp-earnings-pod_default(906172c6-3d68-11e8-86e0-00163e00****)": timeout expired waiting for volumes to attach/mount for pod "default"/"dp-earnings-pod". list of unattached/unmounted volumes=[vol1 vol2]
```

Cause:

The FlexVolume plug-in is not installed.

Solution:

Install the FlexVolume plug-in. For more information, see [Install and upgrade FlexVolume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-flexvolume#concept-vgg-45s-vdb).

## What do I do if the task queue of alicloud-nas-controller is full and PVs cannot be created when I use a dynamically provisioned NAS volume?

Symptom:

When you use a dynamically provisioned NAS volume, if the speed of subdirectory creation is faster than the speed of subdirectory deletion, the task queue of alicloud-nas-controller may be full and therefore PVs cannot be created.

Cause:

The reclaimPolicy parameter is set to Delete and the archiveOnDelete parameter is set to false in the configuration of the StorageClass that mounts the dynamically provisioned NAS volume.

Solution:

Set archiveOnDelete to true. This way, when a PV is deleted, only the name of the mounted subdirectory in the NAS file system is modified. The files in the subdirectory are not deleted.

You must delete these files yourself. For example, you can configure a node to automatically delete files in the root directory by schedule, or start multiple pods to concurrently delete files of specific formats in subdirectories.
