Container Service for Kubernetes (ACK) uses Container Network File System (CNFS) to separately manage the lifecycle of Object Storage Service (OSS) buckets. This topic describes how to use CNFS to manage the lifecycle of OSS buckets and how to use CNFS in workloads.

## Prerequisites

-   The versions of csi-plugin and csi-provisioner are 1.24.2-5b34494d-aliyun or later. For more information about how to update csi-plugin and csi-provisioner, see [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
-   The version of storage-operator is 1.24.95-e2d0756-aliyun or later. For more information about how to update storage-operator, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    

## Introduction

To manage the lifecycle of an OSS bucket by using CNFS, you can use one of the following methods:

-   [Method 1: Use CNFS to create an OSS bucket named in the cnfs-oss- format](#section-0my-pua-ujx)
    
    Use CNFS to create an OSS bucket that can be mounted to your cluster as a dynamically provisioned persistent volume (PV). Create an OSS bucket named `cnfs-oss-<UUID e.g. clusterid>` and mount it to a Deployment and a StatefulSet as a dynamically provisioned volume.
    
-   [Method 2: Create a CNFS CRD to specify an existing OSS bucket](#section-g8z-21r-s7t)
    
    Create a CNFS CRD to use an existing OSS bucket by specifying a bucket name. Then, you can use the CNFS CRD to mount the OSS bucket to a Deployment as a statically or dynamically provisioned volume.
    

**Note**

When you create the CNFS CRD, the following limits apply to BucketName: `cnfs-oss-<UUID e.g. clusterid>`:

-   If an existing OSS bucket has the same name as the bucket name that you specify, the existing OSS bucket is associated with the ContainerNetworkFileSystem object.
    
-   If no existing OSS bucket has the same name as the bucket name that you specify, a new OSS bucket with the specified name is created and associated with the ContainerNetworkFileSystem object that you create.
    
    For example, if you specify `cnfs-oss-<clusterid>` as the bucket name, the system creates an OSS bucket named `cnfs-oss-<clusterid>`. `<clusterid>` is the ID of your cluster. Make sure that the bucket name is unique.
    

## Method 1: Use CNFS to create an OSS bucket named cnfs-oss-<UUID e.g. clusterid>

1.  Create an OSS bucket named `cnfs-oss-<UUID e.g. clusterid>` by using CNFS and mount the bucket to a Deployment and a StatefulSet as a dynamically provisioned volume.
    
    Replace `<clusterid>` with the ID of your cluster.
    
    ```
    # Create the following objects: a CNFS, a StorageClass, a Deployment, and a StatefulSet. 
    cat << EOF | kubectl apply -f -
    apiVersion: v1
    kind: Secret
    metadata:
      name: oss-secret
    stringData:
      akId: "xxxx"     # The AccessKey pair that is required for mounting the OSS bucket. 
      akSecret: "xxxx"
    ---
    apiVersion: storage.alibabacloud.com/v1beta1
    kind: ContainerNetworkFileSystem
    metadata:
      name: cnfs-oss-<clusterid>   # We recommend that you set the CNFS CRD name to the bucket name. 
    spec:
      description: "cnfs-oss"
      type: oss
      reclaimPolicy: Retain # Only the Retain policy is supported. If the CNFS CRD is deleted, the associated OSS bucket is retained. 
      parameters:
        bucketName: cnfs-oss-<clusterid>  # If an existing bucket has the same name as the bucket name that you specify, the existing bucket is associated with the CNFS. If no existing OSS bucket has the same name as the bucket name that you specify, a new OSS bucket named cnfs-oss-clusterid is created. Replace clusterid with the ID of your cluster and make sure that the bucket name is unique. 
        encryptType: "AES256"   # If an existing OSS bucket is used, the encryption algorithm of the existing bucket is changed to AES-256. If a new OSS bucket is created, AES-256 is used as the encryption algorithm for the bucket. 
        storageType: "Standard"  # The storage type of the OSS bucket is Standard. 
        aclType: "private"       # Only the bucket owner and authorized users have read and write permissions on the bucket. 
    ---
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alibabacloud-cnfs-oss
    parameters:
      containerNetworkFileSystem: cnfs-oss-<clusterid>   # The StorageClass references the OSS bucket that is associated with the cnfs-oss-clusterid CNFS CRD. 
      otherOpts: -o max_stat_cache_size=0 -o allow_other # Cache settings. 
      path: /
      # volumeAs: subpath # A subpath is automatically created for each PV under the specified path.
      csi.storage.k8s.io/node-publish-secret-name: oss-secret      # Mount the oss-secret Secret to the CNFS CRD. 
      csi.storage.k8s.io/node-publish-secret-namespace: default    # The namespace to which the oss-secret Secret belongs. 
    provisioner: ossplugin.csi.alibabacloud.com
    reclaimPolicy: Retain
    ---
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: cnfs-oss-pvc
    spec:
      accessModes:
        - ReadOnlyMany
      storageClassName: alibabacloud-cnfs-oss   # Set the persistent volume claim (PVC) to use the alibabacloud-cnfs-oss StorageClass. 
      resources:
        requests:
          storage: 100Gi
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: cnfs-oss-deployment
      labels:
        app: nginx
    spec:
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            volumeMounts:
            - mountPath: "/data"
              name: cnfs-oss-pvc
          volumes:
          - name: cnfs-oss-pvc   # Mount the cnfs-oss-pvc PVC to the Deployment. 
            persistentVolumeClaim:
              claimName: cnfs-oss-pvc
    ---
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: cnfs-oss-sts
      labels:
        app: nginx
    spec:
      serviceName: "nginx"
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            volumeMounts:
            - mountPath: "/data"
              name: www
      volumeClaimTemplates:
      - metadata:
          name: www
        spec:
          accessModes: [ "ReadOnlyMany" ]
          storageClassName: "alibabacloud-cnfs-oss"   # Mount the cnfs-oss-pvc PVC to the StatefulSet. 
          resources:
            requests:
              storage: 100Gi
    EOF
    ```
    
    The following table describes the parameters of the CNFS CRD.
    
    **Parameter**
    
    **Description**
    
    description
    
    The description of the CNFS file system.
    
    type
    
    The type of the volume that you want to create.
    
    reclaimPolicy
    
    The reclaim policy of the OSS bucket. Only the Retain policy is supported. If the CNFS CRD is deleted, the associated OSS bucket is retained.
    
    parameters.bucketName
    
    The name of the OSS bucket.
    
    parameters.storageType
    
    The storage type of the OSS bucket. Default value: Standard. Valid values: Valid values:
    
    -   Standard: Standard
        
    -   IA: Infrequent Access (IA)
        
    -   Archive: Archive
        
    -   ColdArchive: Cold Archive
        
    
    **Note**
    
    You must restore an Archive or Cold Archive object before you can read or write the object.
    
    parameters.redundancyType
    
    The storage redundancy type. Default value: ZRS. Valid values:
    
    -   LRS: Locally redundant storage (LRS) stores multiple copies of your data on multiple devices of different facilities in the same zone. LRS ensures data durability and availability even if hardware failures occur.
        
    -   ZRS: Zone-redundant storage (ZRS) stores multiple copies of your data across multiple zones in the same region. Your data is still accessible even if a zone becomes unavailable.
        
    
    **Important**
    
    -   The parameter is supported only by storage-operator v1.26.2-1de13b6-aliyun and later.
        
    -   If you set the value to ZRS, Cold Archive and Deep Cold Archive are not supported.
        
    -   For more information about the billing rules of different storage types and storage redundancy types, see [Billable items](/help/en/oss/storage-fees#section-l2t-rtj-i7s).
        
    
    parameters.encryptType
    
    The encryption method of the OSS bucket. Valid values:
    
    -   None: No encryption algorithm is used by the OSS server.
        
    -   AES256: The AES-256 algorithm is used by the OSS server.
        
    -   SM4: The SM4 algorithm is used by the OSS server.
        
    
    parameters.aclType
    
    The type of the access control list (ACL) used by the OSS bucket. Default value: private. Valid values:
    
    -   public-read-write: All users, including anonymous users, can read and write objects in the bucket. Exercise caution when you specify this value.
        
    -   public-read: Only the bucket owner or authorized users can read and write objects in the bucket. Other users can only read objects in the bucket. Exercise caution when you specify this value.
        
    -   private: Only the bucket owner or authorized users can read and write objects in the bucket. Other users cannot access objects in the bucket.
        
    
    parameters.enableVersioning
    
    The versioning status of the bucket. Valid values: Valid values:
    
    -   enabled: Versioning is enabled for the bucket.
        
    -   suspended: Versioning is suspended for the bucket.
        
    -   None: Versioning is disabled for the bucket.
        
    
    **Important**
    
    -   The parameter is supported only by storage-operator v1.26.2-1de13b6-aliyun and later.
        
    -   If you enable versioning for a bucket, you can no longer configure retention policies or OSS-HDFS for the bucket. To configure retention policies or OSS-HDFS, you must set enableVersioning to `None`.
        
    -   After versioning is `enabled` for a bucket, you cannot `disable` versioning for the bucket. However, you can suspend versioning for the bucket.
        
    -   If you enable versioning for a bucket, you are charged for the storage of all versions of objects in the bucket. You can configure lifecycle rules for a bucket to recycle historical versions of objects in the bucket. For more information, see [Lifecycle](/help/en/oss/user-guide/overview-54/).
        
    
2.  Query the OSS bucket that is created.
    
    ```
    kubectl get cnfs/cnfs-oss-<clusterid> -o yaml
    ```
    
    Expected output:
    
    ```
    apiVersion: storage.alibabacloud.com/v1beta1
    kind: ContainerNetworkFileSystem
    metadata:
      annotations:
        kubectl.kubernetes.io/last-applied-configuration: |
          {"apiVersion":"storage.alibabacloud.com/v1beta1","kind":"ContainerNetworkFileSystem","metadata":{"annotations":{},"name":"cnfs-oss-xxxxxxxxxx"},"spec":{"description":"cnfs-oss","parameters":{"aclType":"private","bucketName":"cnfs-oss-clusterid","encryptType":"AES256","storageType":"Standard"},"reclaimPolicy":"Retain","type":"oss"}}
      creationTimestamp: "2022-09-18T07:02:34Z"
      finalizers:
      - protection.alibabacloud.com/cnfs
      generation: 6
      name: cnfs-oss-****
      resourceVersion: "8091291"
      uid: ca187b2a-3bfa-4a5f-82d8-ca1b1f69****
    spec:
      description: cnfs-oss
      parameters:
        aclType: private
        bucketName: cnfs-oss-****
        encryptType: AES256
        storageType: Standard
      reclaimPolicy: Retain
      type: oss
    status:
      conditions:
      - lastProbeTime: "2022-09-18 15:02:39"
        reason: The oss bucket is complete initialization.
        status: Ready
      fsAttributes:
        accessGroupName: DEFAULT_VPC_GROUP_NAME
        aclType: private
        bucketName: cnfs-oss-****
        encryptType: AES256
        endPoint:
          extranet: oss-****.aliyuncs.com
          internal: oss-****-internal.aliyuncs.com
        regionId: ****
        storageType: Standard
      status: Available
    ```
    
    The following table describes the parameters of the CNFS CRD.
    
    **Parameter**
    
    **Description**
    
    status
    
    The status of the CNFS CRD. Valid values:
    
    -   Pending: The CNFS CRD is pending.
        
    -   Creating: The CNFS CRD is being created.
        
    -   Initialization: The CNFS file system is being created.
        
    -   Available: The CNFS CRD is available.
        
    -   Unavailable: The CNFS CRD is unavailable. You can restore the CNFS CRD to the Available state.
        
    -   Fatal: The CNFS CRD is unavailable and cannot be restored to the Available state.
        
    -   Terminating: The CNFS CRD is being deleted.
        
    
    conditions.lastProbeTime
    
    The time when the last probe was sent.
    
    conditions.reason
    
    The reason for the current status.
    
    conditions.status
    
    Indicates whether the CNFS CRD is ready for use. Valid values:
    
    -   Ready: The CNFS CRD is ready for use.
        
    -   NotReady: The CNFS CRD is not ready for use.
        
    
    fsAttributes.accessGroupName
    
    The name of the permission group used by the mount point. Set the value to DEFAULT\_VPC\_GROUP\_NAME. This indicates the default permission group for virtual private clouds (VPCs).
    
    fsAttributes.encryptType
    
    The encryption method. Valid values:
    
    -   None: No encryption algorithm is used by the OSS server.
        
    -   AES256: The AES-256 algorithm is used by the OSS server.
        
    -   SM4: The SM4 algorithm is used by the OSS server.
        
    
    fsAttributes.regionId
    
    The region in which your ACK cluster resides.
    
    fsAttributes.storageType
    
    The storage class of the OSS bucket. Default value: Standard. Valid values:
    
    -   Standard: Standard
        
    -   IA: IA
        
    -   Archive: Archive
        
    -   ColdArchive: Cold Archive
        
    
    **Note**
    
    You must restore an Archive or Cold Archive object before you can read or write the object.
    
    fsAttributes.redundancyType
    
    The storage redundancy type. Default value: ZRS. Valid values:
    
    -   LRS: Locally redundant storage (LRS) stores multiple copies of your data on multiple devices of different facilities in the same zone. LRS ensures data durability and availability even if hardware failures occur.
        
    -   ZRS: Zone-redundant storage (ZRS) stores multiple copies of your data across multiple zones in the same region. Your data is still accessible even if a zone becomes unavailable.
        
    
    **Important**
    
    -   The parameter is supported only by storage-operator v1.26.2-1de13b6-aliyun and later.
        
    -   If you set the value to ZRS, Cold Archive and Deep Cold Archive are not supported.
        
    -   For more information about the billing rules of different storage types and storage redundancy types, see [Billable items](/help/en/oss/storage-fees#section-l2t-rtj-i7s).
        
    
    fsAttributes.aclType
    
    The type of the ACL used by the OSS bucket. Default value: private.
    
    fsAttributes.endPoint
    
    The endpoint of the CNFS CRD. Valid values:
    
    -   extranet: a public endpoint
        
    -   internal: an internal endpoint
        
    
    fsAttributes.enableVersioning
    
    The versioning status of the bucket. Valid values: Valid values:
    
    -   enabled: Versioning is enabled for the bucket.
        
    -   suspended: Versioning is suspended for the bucket.
        
    -   None: Versioning is disabled for the bucket.
        
    
    **Important**
    
    -   The parameter is supported only by storage-operator v1.26.2-1de13b6-aliyun and later.
        
    -   If you enable versioning for a bucket, you can no longer configure retention policies or OSS-HDFS for the bucket. To configure retention policies or OSS-HDFS, you must set enableVersioning to `None`.
        
    -   After versioning is `enabled` for a bucket, you cannot `disable` versioning for the bucket. However, you can suspend versioning for the bucket.
        
    -   If you enable versioning for a bucket, you are charged for the storage of all versions of objects in the bucket. You can configure lifecycle rules for a bucket to recycle historical versions of objects in the bucket. For more information, see [Lifecycle](/help/en/oss/user-guide/overview-54/).
        
    
3.  Query the application that is created.
    
    ```
    kubectl get pod
    ```
    
    Expected output:
    
    ```
    NAME                                   READY   STATUS    RESTARTS   AGE
    cnfs-oss-deployment-5864fd8d98-4****   1/1     Running   0          2m21s
    cnfs-oss-sts-0                         1/1     Running   0          2m21s
    cnfs-oss-sts-1                         1/1     Running   0          2m16s
    ```
    
    The output shows that the Deployment and the StatefulSet are in the Running state, and the CNFS CRD is mounted to the Deployment.
    

## Method 2: Create a CNFS CRD to specify an existing OSS bucket

Create a CNFS CRD to use an existing OSS bucket by specifying a bucket name. Then, you can use the CNFS CRD to mount the OSS bucket to a Deployment as a statically or dynamically provisioned volume.

1.  Create a CNFS CRD that specifies an existing OSS bucket.
    
    ```
    cat <<EOF | kubectl apply -f -
    apiVersion: storage.alibabacloud.com/v1beta1
    kind: ContainerNetworkFileSystem
    metadata:
      name: cnfs-oss-exist-bucket-name
    spec:
      description: "cnfs-oss"
      type: oss
      reclaimPolicy: Retain
      parameters:
        bucketName: bucket-name # The name of the existing OSS bucket that you want to use. 
    EOF
    ```
    
2.  Query information about the OSS bucket.
    
    ```
    kubectl get cnfs/cnfs-oss-exist-bucket-name -o yaml
    ```
    
    Expected output:
    
    ```
    apiVersion: storage.alibabacloud.com/v1beta1
    kind: ContainerNetworkFileSystem
    metadata:
      annotations:
        kubectl.kubernetes.io/last-applied-configuration: |
          {"apiVersion":"storage.alibabacloud.com/v1beta1","kind":"ContainerNetworkFileSystem","metadata":{"annotations":{},"name":"cnfs-oss-xxxx"},"spec":{"description":"cnfs-oss","parameters":{"bucketName":"exist-bucket-name"},"reclaimPolicy":"Retain","type":"oss"}}
      creationTimestamp: "2022-09-14T09:21:10Z"
      finalizers:
      - protection.alibabacloud.com/cnfs
      generation: 7
      name: cnfs-oss-exist-bucket-name
      resourceVersion: "6504134"
      uid: 921564ac-0cd8-4a89-997d-c2393afd****
    spec:
      description: cnfs-oss
      parameters:
        bucketName: exist-bucket-name
      reclaimPolicy: Retain
      type: oss
    status:
      conditions:
      - lastProbeTime: "2022-09-14 17:00:21"
        reason: The oss bucket is complete initialization.
        status: Ready
      fsAttributes:
        accessGroupName: DEFAULT_VPC_GROUP_NAME
        aclType: private
        bucketName: exist-bucket-name
        encryptType: AES256
        endPoint:
          extranet: oss-****.aliyuncs.com           
          internal: oss-****-internal.aliyuncs.com
        regionId: ****
        storageType: Standard
      status: Available
    ```
    
3.  Use the CNFS CRD to mount the OSS bucket as a dynamically provisioned volume to an application.
    
    For more information, see [Method 1: Use CNFS to create an OSS bucket named cnfs-oss-](#section-0my-pua-ujx)
