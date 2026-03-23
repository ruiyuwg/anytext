Container Service for Kubernetes (ACK) lets you mount and use Container Network File System (CNFS) as shared NAS volumes. You can use CNFS to mount the same directory of a NAS file system to multiple applications or pods. This resolves data sharing issues among pods. This topic describes how to use CNFS to manage a shared NAS volume using a StatefulSet application as an example.

## Prerequisites

-   NAS is activated.
    
    If this is the first time you visit the [product page of NAS](https://www.alibabacloud.com/product/nas), follow the on-screen instructions to activate the NAS service.
    
-   A Container Service for Kubernetes (ACK) cluster that runs Kubernetes 1.20 or later is created. The Container Storage Interface (CSI) plug-in is used as the volume plug-in. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   The versions of csi-plugin and csi-provisioner are v1.24.11-5221f79-aliyun or later. For more information about how to update csi-plugin and csi-provisioner, see [Install and update the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#task-vgg-45s-vdb).
    
-   The version of storage-operator is v1.24.105-825188d-aliyun or later. For more information about how to update storage-operator, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
-   A kubectl client is connected to your cluster. For more information, see [Get a cluster kubeconfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
    **Note**
    
    For more information about CNFS, see [CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/#task-2082944).
    
    For more information about how to use CNFS to manage NAS file systems, see [Use CNFS to manage NAS file systems (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems#task-2083130).
    

## Step 1: Create a workload for a shared volume

-   Create a persistent volume (PV) named `cnfs-nas-static-pv`. The PV must reference a CNFS object named `cnfs-nas-filesystem`, which represents your existing NAS file system.
    
-   Create a persistent volume claim (PVC) named `cnfs-nas-static-pvc` and bind it to the PV.
    
-   Create a StatefulSet named `cnfs-nas-static-sts`. In the StatefulSet, use a busybox image to mount the PVC and write a 1 GB temporary file named `1G.tmpfile` to the mount target.
    

**Click to view the YAML file for creating the workload**

```
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: PersistentVolume
metadata:
  name: cnfs-nas-static-pv
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 50Gi
  csi:
    driver: nasplugin.csi.alibabacloud.com
    fsType: nfs
    volumeAttributes:
      containerNetworkFileSystem: cnfs-nas-filesystem # Reference the CNFS object named cnfs-nas-filesystem.
      mountProtocol: nfs
      path: /
      volumeAs: subpath
      volumeCapacity: "true"
    volumeHandle: cnfs-nas-static-pv
  mountOptions:
  - nolock,tcp,noresvport
  - vers=3
  persistentVolumeReclaimPolicy: Retain
  storageClassName: cnfs-nas-sc
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cnfs-nas-static-pvc
  namespace: default
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 50Gi
  storageClassName: cnfs-nas-sc
  volumeMode: Filesystem
  volumeName: cnfs-nas-static-pv # Reference the PV object named cnfs-nas-static-pv.
status:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 50Gi
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cnfs-nas-static-sts
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
          name: cnfs-nas-static-pvc
      volumes:
      - name: cnfs-nas-static-pvc
        persistentVolumeClaim:
          claimName: cnfs-nas-static-pvc # Reference the PVC object named cnfs-nas-static-pvc.
EOF
```

## Step 2: View the mount status

Run the following command to view the mount status.

```
kubectl exec cnfs-nas-static-sts-0 -- mount |grep nfs
```

Expected output:

```
971134b0e8-****.cn-zhangjiakou.nas.aliyuncs.com:/ on /data type nfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,default_permissions,allow_other)
```

The expected output shows a mount target. This indicates that the volume is mounted successfully.

## Step 3: Check whether the persistent data is written successfully

Run the following command to write a 1 GB temporary file.

```
kubectl exec cnfs-nas-static-sts-0 -ti -- sh -c 'dd if=/dev/zero of=/data/1G.tmpfile bs=1G count=1;'
```

Run the following command to verify that the 1 GB temporary file was created.

```
kubectl exec cnfs-nas-static-sts-0 -- ls -arlth /data
```

Expected output:

```
total 1G
-rw-r--r--    1 root     root        1.0G Dec 15 12:11 1G.tmpfile
```

The expected output indicates that the 1 GB temporary file `1G.tmpfile` has been successfully written to the /data directory.

## Step 4: Check whether the written data is shared in other pods

Run the following command to check whether the 1 GB temporary file is shared with the other pod, cnfs-nas-static-sts-1.

```
kubectl exec cnfs-nas-static-sts-1 -- ls -arlth /data
```

Expected output:

```
total 1G
-rw-r--r--    1 root     root        1.0G Dec 15 12:11 1G.tmpfile
```

The expected output indicates that the 1 GB temporary file `1G.tmpfile` is shared between the pod cnfs-nas-static-sts-0 and the pod cnfs-nas-static-sts-1.

**Note**

When you write data to shared storage from different pods, CNFS does not guarantee data consistency. To prevent file corruption, avoid writing to the same file from multiple pods.

## **References**

-   To mount different directories in a NAS file system to different applications or pods for storage isolation, see [Use CNFS to manage isolated NAS volumes (recommended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-isolated-nas-volumes-recommended).
    
-   To automatically scale out a NAS volume when its usage exceeds a specified threshold, see [Use CNFS to automatically scale out NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes).
