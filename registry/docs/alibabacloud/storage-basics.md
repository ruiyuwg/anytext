This topic introduces the fundamental concepts related to Kubernetes container storage. You can read this topic to gain a comprehensive understanding of the storage features provided by Container Service for Kubernetes (ACK).

## Volumes

Files in containers are temporarily stored on disks. Rebuilding a container results in the loss of files in the container. To address this issue, Kubernetes defines the volume resource to prevent file loss due to container restarts. A volume is a data transfer channel between a pod and an external storage device. A volume enables data sharing between containers in a pod, between pods, and between a pod and an external environment.

A volume defines the details of external storage and is embedded in a pod. A volume is essentially a resource mapping to external storage in the Kubernetes system. When a workload requires external storage, the system queries related information in the volume and mounts external storage.

**Note**

A volume has the same lifecycle as the pod that uses the volume. You can configure the system to delete a volume when the pod that uses the volume is deleted. However, whether the data in the volume is retained depends on the volume type and volume configurations.

ACK provides the following commonly used volume types:

**Type**

**Description**

Local storage

You can mount local storage as volumes, such as hostPath and emptyDir volumes. These volumes store data on specific nodes of the cluster and cannot be migrated together with applications. The stored data becomes unavailable when the nodes are down.

Network storage

You can mount network storage as volumes, such as Ceph, GlusterFS, NFS, and iSCSI volumes. These volumes store data by using remote storage services, instead of specific nodes of the cluster. When you use these volumes, you must mount the storage services locally.

Secret and ConfigMap

Secrets and ConfigMaps are special volumes that store the object information about a cluster. Object data is mounted as volumes to nodes for use by applications.

PVC

PVCs provide a mechanism for defining volumes. A PVC abstracts a volume into a pod-independent object. The storage information that is defined for or associated with this object is stored in a volume and mounted for use by Kubernetes workloads.

#### **Volume usage instructions**

-   A pod can mount multiple volumes. However, we recommend that you do not mount excess volumes to a pod.
    
-   A pod can mount multiple types of volumes.
    
-   A volume that is mounted to a pod can be shared among the containers in the pod.
    
-   If you want to persist data, we recommend that you use PVCs and PVs.
    

## PVs and PVCs

Not all Kubernetes volumes are persistent. Container storage requires a remote storage service to enable data persistence. To do this, Kubernetes introduces two resource objects, PV and PVC, which abstract details of how storage is implemented from how it is consumed. This eliminates the need for users to be concerned about infrastructure orchestration. When you need to use storage resources, you only need to claim your storage requirements.

### **PVs**

A PV represents a volume of a specific type and is used to define volume details, such as the volume type, volume parameters, and information about the mounted storage resources. Kubernetes uses the storage information in PVs for mounting. PVs can be statically or dynamically provisioned. If you use static provisioning, you can directly create PVs. If you use dynamic provisioning, you need to create StorageClasses. csi-provisioner automatically creates PVs based on the StorageClasses and mounts the PVs to pods.

**Note**

PVs are used at the cluster level instead of the node level. A PV has its own lifecycle, which is independent of the pod lifecycle.

```
apiVersion: v1
kind: PersistentVolume
metadata:
  namespace: default
  name: pv-example
spec:
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  csi:
    driver: diskplugin.csi.alibabacloud.com
    volumeHandle: <disk ID>
  volumeMode: Filesystem
```

### **PVCs**

A PVC represents a claim for persistent storage and is used to define the details of the persistent storage request of a pod, such as the volume capacity and read/write permissions. PVCs consume PVs.

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-example
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
  volumeName: pv-example
```

### **PV and PVC usage instructions**

PVCs and PVs have a one-to-one relationship. A PV cannot be bound to multiple PVCs, and a PVC cannot be bound to multiple PVs. To configure storage for an application, you must declare a PVC. Kubernetes selects the PV that best fits the PVC and binds them together. A PVC must be bound to a PV before it can be used by a pod. The following list describes the requirements that a PV must meet before it can be bound to a PVC:

-   VolumeMode: The PV to be consumed must use the same volume mode as the PVC.
    
-   AccessMode: The PV to be consumed must use the same access mode as the PVC.
    
-   StorageClassName: If this parameter is defined for a PVC, only a PV that has the corresponding parameters defined can be bound to this PVC.
    
-   LabelSelector: The appropriate PV is selected from a PV list based on label matching.
    
-   storage: The PV to be consumed must have a storage capacity that is no less than that of the PVC.
    

The following list describes the `storage` field in PVs and PVCs:

-   The system determines whether a PV can be bound to a PVC based on the values of their `storage` fields.
    
-   When you use dynamic PV provisioning based on a PVC and StorageClass, the `storage` field of the PVC determines the capacities of the PV and the corresponding backend storage (such as a disk).
    
-   For storage types that support resize operations, the value of the `storage` field of the PVC is used as the capacities of the PV and backend storage after the scale-out.
    

When data is written to a PV, the `storage` fields of the PVC and PV are not taken into consideration. Instead, write operations depend on the actual capacity of the underlying storage medium.

### **Volume access modes**

You can use the `accessModes` field to specify the access mode of a volume.

**ReadWriteOnce (RWO)**

The volume can be mounted in read-write mode to a node. For example, you can specify this value when you mount an Alibaba Cloud disk.

**ReadOnlyMany (ROX)**

The volume can be mounted in read-only mode to multiple nodes. For example, you can specify this value when you mount an Object Storage Service (OSS) bucket.

**ReadWriteMany (RWX)**

The volume can be mounted in read-write mode to multiple nodes. For example, you can specify this value when you mount a File Storage NAS (NAS) file system.

## **How to mount volumes to pods**

### **Statically provisioned volumes**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2589571471/CAEQORiBgMCVkejtqhkiIDBmZGRmMGIxMmQ1MDRhNmQ5MzdiZmM0YjUxMzUwYjhi4763678_20241115165602.213.svg)

Statically provisioned volumes are created by the cluster administrator. You can mount Alibaba Cloud disks, NAS file systems, and OSS buckets as statically provisioned volumes.

1.  The cluster administrator pre-allocates storage media, such as disks or NAS file systems, by analyzing the storage requirements of pods in the cluster.
    
2.  The administrator manually creates several PVs in advance based on the actual storage situation and defines the specific storage capacity each PV can provide. The PVs can be consumed by PVCs.
    
3.  Users create PVCs to declare the storage requirements of their workloads.
    
4.  If a workload defines PVC requirements, Kubernetes binds the PVC to a PV that matches the requirements during pod creation. This way, the pods created by the workload can access the mounted storage resources.
    

### **Dynamically provisioned volumes**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2589571471/CAEQORiBgICqjfntqhkiIGNmMTExMmI2N2FjMjQ3YjRiMGY2ODg0MjI3NjlmNGYx4763678_20241115165602.213.svg)

Dynamically provisioned volumes are created by the provisioner of the volume plug-in. You can mount Alibaba Cloud disks, NAS file systems, and OSS buckets as dynamically provisioned volumes.

1.  The cluster administrator configures the backend storage pool and selects different volume provisioners to create different types of volumes. For example, `diskplugin.csi.alibabacloud.com` represents the provisioner for Alibaba Cloud disks.
    
2.  The cluster administrator does not need to manually allocate PVs. Instead, the administrator only needs to create a StorageClass and wait for PVCs to consume the StorageClass.
    
3.  Users create PVCs to declare the storage requirements of their workload pods. Users must specify a StorageClass in the PVC.
    
4.  If a workload defines PVC requirements, the volume provisioner dynamically creates a PV based on the configurations of the StorageClass associated with the PVC. This way, the pods created by the workload can access the mounted storage resources.
    

Advantages of dynamic provisioning:

-   Dynamically provisioned volumes allow Kubernetes to automate the lifecycle management of PVs, with creation and deletion handled by the provisioner.
    
-   PVs are created automatically, reducing the complexity of volume configuration and the workload of the cluster administrator.
    
-   Dynamically provisioned volumes ensure capacity consistency between the PVC and the PV created by the provisioner, enabling optimal storage capacity planning.
    

### **StorageClasses**

A StorageClass defines the class of storage and enables dynamic provisioning. You can specify different parameters in a StorageClass to automate storage resource supply and adjustment based on the parameters. After you specify the StorageClassName field in your PVC, if no matching PV exists in the cluster, the system triggers the provisioner specified in the StorageClassName field to automatically create a dynamically provisioned PV and underlying storage resources based on the StorageClass. This reduces the workload of PV creation and maintenance. The following example shows how to create a StorageClass for Alibaba Cloud disks. For more information about the custom StorageClasses for Alibaba Cloud disks, NAS file systems, and OSS buckets, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes), [Use dynamically provisioned NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume#2398ed5beeao1), and [Use dynamically provisioned OSS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes#aefc5aa19fu7s).

```
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: alicloud-disk-topology-alltype
provisioner: diskplugin.csi.alibabacloud.com
parameters:
  type: cloud_auto,cloud_essd,cloud_ssd,cloud_efficiency
  fstype: ext4
  diskTags/a: b
  encrypted: "false"
  performanceLevel: PL1
  provisionedIops: "40000"
  burstingEnabled: "false"
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: WaitForFirstConsumer  
```

#### **Main parameters**

**Parameter**

**Description**

`provisioner`

The storage resource provider. Valid values:

-   `diskplugin.csi.alibabacloud.com`: uses the provisioner for Alibaba Cloud disks to create a StorageClass.
    
-   `nasplugin.csi.alibabacloud.com`: uses the provisioner for NAS file systems to create a StorageClass.
    
-   `ossplugin.csi.alibabacloud.com`: uses the provisioner for OSS buckets to create a StorageClass.
    

`parameters`

The parameters of the cloud disk.

`reclaimPolicy`

The reclaim policy of the cloud disk. Default value: `Delete`. Valid values:

-   `Delete`: When the PVC is deleted, the PV and cloud disk are also deleted.
    
-   `Retain`: When the PVC is deleted, the PV and cloud disk are retained. You need to manually delete the PV and cloud disk.
    

If you have high requirements for data security, we recommend that you set the value to `Retain` to prevent accidental deletion.

`allowVolumeExpansion`

To enable auto disk volume expansion, set the value to `true`.

`volumeBindingMode`

The binding mode of the disk. Default value: `Immediate`. Valid values:

-   `Immediate`: creates a disk when the PVC that uses the StorageClass is created. This way, a disk is created and a PV is provisioned before you create a pod that uses the disk.
    
-   `WaitForFirstConsumer`: delays the binding and provisioning of a PV until a pod that uses the PVC is created. After the pod is scheduled to a node, a disk is created in the zone where the node is deployed and provisioned as the PV. This mode is suitable for multi-zone clusters.
    

**Click to view the description of WaitForFirstConsumer**

Specific storage resources, such as Alibaba Cloud disks, do not support cross-zone mounting. When you mount storage resources, the following issues may occur:

-   When you create a volume in Zone A where node resources are insufficient, the volume cannot be mounted to pods because pods cannot be launched due to insufficient resources.
    
-   When planning PVCs and PVs in the cluster, the cluster administrator may be uncertain about the number of PVs to create in each zone where the cluster resides.
    

The `volumeBindingMode` parameter is used to resolve this problem. When `volumeBindingMode` is set to `WaitForFirstConsumer`, it means that the volume provisioner does not immediately create a PV when receiving a pending PVC. Instead, the provisioner waits for the PVC to be consumed by a pod before executing the PV creation process.

**Implementation principle**

When the volume provisioner receives a pending PVC, the provisioner does not immediately create a PV. Instead, the provisioner waits for the PVC to be consumed by a pod before executing the PV creation process. If a pod consumes this PVC, the scheduler checks whether the PVC uses the delayed binding mode and then schedules the pod. After the pod is scheduled, the scheduled runs the `patch` command to write the scheduling results to the `metadata` of the PVC. Then, the provisioner obtains the region and node from the scheduling results in the PVC, and creates a PV based on the information about the region and node.

#### **Default StorageClass**

Kubernetes provides the default StorageClass feature. If a PVC does not specify a StorageClass, the default StorageClass is used to provision a PV for the PVC. For more information, see [Default StorageClass](https://kubernetes.io/docs/tasks/administer-cluster/change-default-storage-class/).

The default StorageClass takes effect on all PVCs. Proceed with caution if your cluster uses PVCs of different storage types. For example, you want to create a PV for a PVC that defines a NAS file system, but the default StorageClass may automatically create a disk PV instead. Therefore, ACK clusters do not provide default StorageClasses. If you want to configure a default StorageClass, perform the following steps.

1.  Configure the default StorageClass.
    
    Run the following command to set the alicloud-disk-topology-alltype StorageClass as the default StorageClass:
    
    **Note**
    
    In this example, the alicloud-disk-topology-alltype StorageClass is used.
    
    ```
    kubectl annotate storageclass alicloud-disk-topology-alltype storageclass.kubernetes.io/is-default-class=true
    ```
    
    After the default StorageClass is configured, alicloud-disk-topology-alltype is marked as (default).
    
    ```
    kubectl get sc
    ```
    
    Expected output:
    
    ```
    NAME                                        PROVISIONER                       AGE
    alicloud-disk-topology-alltype (default)    diskplugin.csi.alibabacloud.com   96m
    ```
    
2.  Use the Default StorageClass
    
    1.  Use the following template to create a PVC without specifying a StorageClass:
        
        ```
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: disk-pvc
        spec:
          accessModes:
          - ReadWriteOnce
          resources:
            requests:
              storage: 20Gi
        ```
        
        The cluster automatically creates a disk PV based on the default StorageClass alicloud-disk-topology-alltype.
        
        ```
        kubectl get pvc
        ```
        
        Expected output:
        
        ```
        NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES    STORAGECLASS                      AGE
        disk-pvc   Bound    d-bp18pbai447qverm****   20Gi       RWO             alicloud-disk-topology-alltype    49s
        ```
        

You can also run the following command to disable the default StorageClass:

```
kubectl annotate storageclass alicloud-disk-topology-alltype storageclass.kubernetes.io/is-default-class-
```

#### **StorageClasses provided by** Container Service for Kubernetes

**StorageClass**

**Disk type**

**Description**

alicloud-disk-efficiency

[Ultra disk](/help/en/ecs/user-guide/elastic-block-storage-devices#294044a857t6y)

Cloud disks of the previous generation.

alicloud-disk-ssd

[Standard SSD](/help/en/ecs/user-guide/elastic-block-storage-devices#294044a857t6y)

Cloud disks of the previous generation.

alicloud-disk-essd

[ESSD](/help/en/ecs/user-guide/essds#concept-727754)

Performance level 1 (PL1) Enterprise SSDs (ESSDs) created by the default StorageClass.

alicloud-disk-topology-alltype

Provides a high-availability option. In this mode, the system first attempts to create an ESSD.

-   If ESSDs are exhausted or the node does not support ESSDs, the system attempts to create a standard SSD.
    
-   If standard SSDs are exhausted or the node does not support standard SSDs, the system attempts to create an ultra disk.
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-disk-topology-alltype
    parameters:
      type: cloud_essd,cloud_ssd,cloud_efficiency
    provisioner: diskplugin.csi.alibabacloud.com
    reclaimPolicy: Delete
    allowVolumeExpansion: true
    volumeBindingMode: WaitForFirstConsumer
    ```
    

Recommended for multi-zone scenarios

alibabacloud-cnfs-nas

When you create a cluster, you can use the default StorageClass to create Container Network File System (CNFS)-managed NAS volumes. For more information, see [Use CNFS to manage NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-storage-volumes).

Used to create CNFS-managed NAS volumes.

## References

For more information about the storage solutions provided by Container Service for Kubernetes, see [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/).
