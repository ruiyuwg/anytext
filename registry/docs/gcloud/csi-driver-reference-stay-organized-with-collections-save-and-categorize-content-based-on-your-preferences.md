-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Storage](https://docs.cloud.google.com/docs/storage)
-   [Parallelstore](https://docs.cloud.google.com/parallelstore/docs/overview)

Send feedback

# CSI driver reference Stay organized with collections Save and categorize content based on your preferences.

The following manifests describe supported CSI driver fields in the Storage Class and Persistent Volume resources.

## Storage Class

The following manifest includes all of the supported fields in the Storage Class.

```
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: parallelstore-csi-sc
provisioner: parallelstore.csi.storage.gke.io
parameters:
  network: VPC_NETWORK_NAME # optional
  labels: KEY: VALUE # optional
  description: DESCRIPTION # optional
  reserved-ip-range: IP_RANGE_NAME # optional
  file-stripe-level: FILE_STRIPE_LEVEL # optional
  directory-stripe-level: DIRECTORY_STRIPE_LEVEL # optional
  mountLocality: MOUNT_LOCALITY # optional
  dfuseCPURequest: DFUSE_CPU_REQUEST # optional
  dfuseMemoryRequest: DFUSE_MEMORY_REQUEST # optional
  dfuseCPULimit: DFUSE_CPU_LIMIT # optional
  dfuseMemoryLimit: DFUSE_MEMORY_LIMIT # optional
volumeBindingMode: VOLUME_BINDING_MODE # default is "immediate"; or "waitForFirstConsumer"
allowedTopologies: # optional
- matchLabelExpressions:
  - key: topology.gke.io/zone
    values:
    - ZONE
mountOptions:
  -  DFUSE_MOUNT_OPTIONS # disable-caching, enable-wb-cache, thread-count, eq-count
```

All of the following fields are optional:

-   `network`: The VPC network in which to create the Parallelstore instance. If this property is not specified, the network of the GKE cluster is used.
    
    To create a Parallelstore instance in a shared VPC network, the full name of the network must be provided. For example: `projects/PROJECT_ID/global/networks/VPC_NETWORK_NAME`
    
-   `labels`: User-specified key-value pairs to attach to this instance.
    
-   `description`: A description of the instance. Must be 2048 characters or less.
    
-   `reserved-ip-range`: The name of an allocated IP address range. If unspecified, all ranges are considered.
    
-   `file-stripe-level` defines file striping settings. Allowed values are:
    
    -   `file-stripe-level-balanced`
    -   `file-stripe-level-max`
    -   `file-stripe-level-min`
    
    See [Performance considerations](/parallelstore/docs/performance) for details.
    
-   `directory-stripe-level` defines the striping level for directories. Allowed values are:
    
    -   `directory-stripe-level-balanced`
    -   `directory-stripe-level-max`
    -   `directory-stripe-level-min`
    
    See [Performance considerations](/parallelstore/docs/performance) for details.
    
-   `mountLocality`: Enables node-local mount mode for dynamic provisioning. Supported values are `node` or `pod`. The default is `pod`. If `node` is specified, you can also use the following options:
    
    -   `dfuseCPURequest`: The CPU request for the dfuse process. The default is `250m`.
    -   `dfuseMemoryRequest`: The memory request for the dfuse process. The default is `512Mi`.
    -   `dfuseCPULimit`: The CPU limit for the dfuse process. The default is unset.
    -   `dfuseMemoryLimit`: The memory limit for the dfuse process. The default is `10Gi`.
-   `allowedTopologies`: Specifies the zone in which to create the Parallelstore instance. If this field is not specified, the instance is created in the same zone as the CSI driver deployment, with `immediate` volume binding mode.
    
-   `volumeBindingMode`: Specifies the topology selection mode. The `immediate` mode uses the value specified in `allowedTopologies`. The `waitForFirstConsumer` mode assigns the topology to the zone in which the GKE pod is scheduled. This can cause pods to be blocked while waiting for a volume to be provisioned.
    
-   `mountOptions`: Specifies [dfuse](https://docs.daos.io/v2.6/user/filesystem/#dfuse-daos-fuse) mount options and kernel parameters, including `read_ahead_kb` and `max_ratio`. Parallelstore instance-backed volumes inherit these values in the `.spec.mountOptions`field of the persistent volume.
    
    Options are:
    
    -   `disable-caching`: Disables all caching. By default, full caching (except for write-back cache) is enabled when mounting a Parallelstore instance in GKE.
    -   `enable-wb-cache`: Use write-back cache rather than write-through.
    -   `thread-count`: Number of threads to use. This value is the sum of the number of [FUSE](https://github.com/libfuse/libfuse) threads and the number of event queues.
    -   `eq-count`: Number of event queues to use.
    -   `read_ahead_kb`: Size of the read-ahead window in kilobytes.
    -   `max_ratio`: Allows limiting a particular device to use not more than the given percentage of the write-back cache.
    
    For information about these options, see [Performance considerations](/parallelstore/docs/performance).
    

## Persistent Volume

The following manifest includes all of the supported fields in the Persistent Volume.

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: parallelstore-pv
  annotations:
    pv.kubernetes.io/provisioned-by: parallelstore.csi.storage.gke.io
spec:
  storageClassName: parallelstore-csi-sc
  capacity:
    storage: INSTANCE_SIZE # 12Ti
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain # or "Delete"
  volumeMode: Filesystem
  mountOptions:
    - DFUSE_MOUNT_OPTIONS # disable-caching, enable-wb-cache, thread-count, eq-count, read_ahead_kb, max_ratio
  csi:
    driver: parallelstore.csi.storage.gke.io
    volumeHandle: PROJECT_ID/LOCATION/INSTANCE_NAME/default-pool/default-container
    volumeAttributes:
      accessPoints: ACCESS_POINTS # comma-separated list of IP addresses
      network: VPC_NETWORK # optional
      mountLocality: MOUNT_LOCALITY # optional
      dfuseCPURequest: DFUSE_CPU_REQUEST # optional
      dfuseMemoryRequest: DFUSE_MEMORY_REQUEST # optional
      dfuseCPULimit: DFUSE_CPU_LIMIT # optional
      dfuseMemoryLimit: DFUSE_MEMORY_LIMIT # optional
```

-   `capacity`: The capacity of the Parallelstore instance. Must be one of: `12Ti`, `16Ti`, or `20Ti`.
-   `mountOptions`: Inherit from the `mountOptions` field in StorageClass.
-   `csi.volumeHandle`: An exclusive identifier for a Parallelstore instance. Must use the format: `PROJECT_ID/LOCATION/INSTANCE_NAME/default-pool/default-container`
-   `csi.volumeAttributes.accessPoints`: A list of IP addresses for Parallelstore server nodes, separated by commas.
-   `csi.volumeAttributes.network`: The VPC network of the Parallelstore instance, which must align with the network of the GKE cluster. This field is used to verify that the provided Parallelstore instance is in a valid network before the CSI Driver mounts it.
-   `csi.volumeAttributes.mountLocality`: Enables node-local mount mode for dynamic provisioning. The supported values are `node` or `pod`. The default is `pod`. If `node` is specified, you can also use the following options:
    
    -   `csi.volumeAttributes.dfuseCPURequest`: The CPU request for the dfuse process. The default is `250m`.
    -   `csi.volumeAttributes.dfuseMemoryRequest`: The memory request for the dfuse process. The default is `512Mi`.
    -   `csi.volumeAttributes.dfuseCPULimit`: The CPU limit for the dfuse process. The default is unset.
    -   `csi.volumeAttributes.dfuseMemoryLimit`: The memory limit for the dfuse process. The default is `10Gi`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
