Container Service for Kubernetes (ACK) allows you to mount and use isolated File Storage NAS (NAS) volumes that are managed by Container Network File System (CNFS). In multi-tenant or other scenarios that require data isolation, you can map each directory in a NAS file system to a NAS volume managed by CNFS and mount the NAS volume to an application or pod. This allows you to mount different directories to different applications or pods because these volumes are independent of and isolated from each other. In this topic, StatefulSets are used as an example to describe how to use CNFS to manage isolated NAS volumes.

## Prerequisites

-   NAS is activated.
    
    If this is the first time you visit the [product page of NAS](https://www.alibabacloud.com/product/nas), follow the on-screen instructions to activate the NAS service.
    
-   A Container Service for Kubernetes (ACK) cluster that runs Kubernetes 1.20 or later is created. The Container Storage Interface (CSI) plug-in is used as the volume plug-in. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   The versions of csi-plugin and csi-provisioner are v1.24.11-5221f79-aliyun or later. For more information about how to update csi-plugin and csi-provisioner, see [Install and update the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#task-vgg-45s-vdb).
    
-   The version of storage-operator is v1.24.105-825188d-aliyun or later. For more information about how to update storage-operator, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
-   A kubectl client is connected to your cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
    **Note**
    
    For more information about CNFS, see [CNFS overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/#task-2082944).
    
    For more information about how to use CNFS to manage NAS file systems, see [Use CNFS to manage NAS file systems (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems#task-2083130).
    

## Step 1: Create a workload for the isolated NAS volume

-   Create a StorageClass named `cnfs-nas-sc` and reference a CNFS object named `cnfs-nas-filesystem` in the persistent volume (PV).
    
-   Create a StatefulSet named `cnfs-nas-dynamic-sts`.
    
    -   In the StatefulSet, use volumeClaimTemplates to create a persistent volume claim (PVC) named `pvc-cnfs-nas-dynamic-sts-0`.
        
    -   In the StatefulSet, use a BusyBox image to mount the PV and write a temporary file named `1G.tmpfile` (1 GB in size) to the mount target.
        

```
cat << EOF | kubectl apply -f -
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: cnfs-nas-sc
mountOptions:
  - nolock,tcp,noresvport
  - vers=3
parameters:
  volumeAs: subpath
  containerNetworkFileSystem: cnfs-nas-filesystem # Reference the CNFS object named cnfs-nas-filesystem. 
  path: "/"
  archiveOnDelete: "false"
provisioner: nasplugin.csi.alibabacloud.com
reclaimPolicy: Delete
allowVolumeExpansion: true
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cnfs-nas-dynamic-sts
  labels:
    app: busybox
spec:
  serviceName: "busybox"
  replicas: 2
  selector:
    matchLabels:
      app: busybox
  template:
    metadata:
      labels:
        app: busybox
    spec:
      containers:
      - name: busybox
        image: busybox
        command: ["/bin/sh"]
        args: ["-c", "sleep 3600;"]
        volumeMounts:
        - mountPath: "/data"
          name: pvc
  volumeClaimTemplates:
  - metadata:
      name: pvc
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "cnfs-nas-sc" # Reference the StorageClass named cnfs-nas-sc. 
      resources:
        requests:
          storage: 50Gi
EOF
```

## Step 2: View the mount result

Run the following command to view the mount result:

```
kubectl exec cnfs-nas-dynamic-sts-0 -- mount |grep nfs
```

Expected output:

```
971134b0e8-****.cn-zhangjiakou.nas.aliyuncs.com:/nas-95115c94-2ceb-4a83-b4f4-37bd35df**** on /data type nfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,default_permissions,allow_other)
```

The output indicates that the volume is mounted.

## Step 3: Check whether data is persisted to the volume

Run the following command to write the temporary file:

```
kubectl exec cnfs-nas-dynamic-sts-0 -ti -- sh -c 'dd if=/dev/zero of=/data/1G.tmpfile bs=1G count=1;'
```

Run the following command to check whether the temporary file is written to the mount target:

```
kubectl exec cnfs-nas-dynamic-sts-0 -- ls -arlth /data
```

Expected output:

```
total 1G
-rw-r--r--    1 root     root        1.0G Dec 15 12:11 1G.tmpfile
```

The output indicates that the `1G.tmpfile` file is written to the /data directory.

## Step 4: Check whether the file is written to the isolated NAS volumes of other pods

Run the following command to check whether the temporary file exists in the pod named cnfs-nas-dynamic-sts-1:

```
kubectl exec cnfs-nas-dynamic-sts-1 -- ls -arlth /data
```

Expected output:

```
sh-4.4# ls -arlth
total 8.0K
drwxr-xr-x 1 root root 4.0K Dec 15 18:07 ..
drwxr-xr-x 2 root root 4.0K Dec 15 18:07 .
```

The output indicates that the `1G.tmpfile` file only exists in the pod named cnfs-nas-dynamic-sts-0. The file cannot be found in the pod named cnfs-nas-dynamic-sts-1.

## **References**

-   For more information about how to configure multiple applications or pods to share the same directory in a NAS file system, see [Use CNFS to manage shared NAS volumes (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-shared-nas-volumes-recommended).
    
-   For more information about how to automatically expand a NAS volume when the usage of the NAS volume exceeds the threshold, see [Use CNFS to automatically expand NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes).
