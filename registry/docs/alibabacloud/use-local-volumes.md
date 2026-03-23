LocalVolume volumes let you mount local storage devices—such as disks, partitions, or directories—to pods. This topic describes how to use LocalVolume volumes.

## Background information

For more information about Alibaba Cloud ACK cluster compatibility with the community LocalVolume local mount solution, see [local](https://kubernetes.io/zh/docs/concepts/storage/volumes/#local).

Differences between LocalVolume volumes and HostPath volumes:

**HostPath**

**LocalVolume**

Does not support node scheduling.

Supports node scheduling.

Supports mounting directories, files, and other formats.

Supports mounting directories and raw devices.

Supports automatic directory creation.

Does not support automatic directory creation.

## Scope

This feature supports only ECS nodes. It does not support heterogeneous computing nodes such as GPU nodes or Lingjun nodes, or Serverless computing power such as ECI or ACS.

## Use LocalVolume Volumes

The following template defines a LocalVolume type volume using a PersistentVolume (PV).

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: example-pv
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /mnt/disks/ssd1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - example-node
```

Official Kubernetes LocalVolume does not support dynamic volume creation. The community provides an implementation, but you must implement deployment, operations, and maintenance tasks yourself. For more information, see [sig-storage-local-static-provisioner](https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner).
