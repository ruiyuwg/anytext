ossfs 1.0 is a Filesystem in Userspace (FUSE) client that can mount Object Storage Service (OSS) buckets to the local file system. This allows business containers to access data in OSS through POSIX operations in the same way they access local files.

## **Features**

ossfs 1.0 volumes are mounted by using [ossfs 1.0](/help/en/oss/developer-reference/ossfs-overview/). ossfs 1.0 provides the following features:

-   Supports most features defeind in the POSIX standards, such as file and directory uploads and downloads, and user permission management.
    
-   Uses multipart upload and resumable upload to upload OSS objects by default.
    
-   Supports MD5 verification to ensure data integrity.
    
-   Supports server-side encryption based on Key Management Service (KMS) to ensure data security.
    

ossfs 1.0 volumes provide the following features:

-   Monitoring: You can monitor the mounting information, queries per second (QPS), throughput, and hot data of volumes. For more information, see [OSS volume monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side#eee40d9aefqd1).
    
-   RAM Roles for Service Accounts (RRSA) authentication: You can limit the permissions to perform API operations on specific OSS volumes. This allows you to regulate access to cloud resources in a fine-grained manner and enhance cluster security.
    
-   Mounting volumes in subpath mode: When you mount a persistent volume claim (PVC), the system automatically creates separate subpaths in the OSS bucket to isolate data.
    

## **Version description**

To use the latest version of ossfs 1.0, upgrade the Container Storage Interface (CSI) plug-in.

For more information about the release notes for ossfs 1.0, see the following topics:

-   [ossfs 1.0 release notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes)
    
-   [New features of ossfs 1.0 and ossfs performance benchmarking](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above)
    

## **How to run ossfs 1.0**

The running mode of ossfs 1.0 is iterated together with CSI. To switch ossfs 1.0 to the containerized version for improved stability, we recommend that you upgrade CSI.

**CSI version**

**Running mode of ossfs 1.0**

**Description**

< v1.28

ossfs 1.0 runs as a daemon on nodes where application pods are deployed.

When ossfs 1.0 encounters an exception, you need to manually switch ossfs 1.0 to the frontend mode.

ossfs 1.0 has specific requirements for the versions of the node OS, architecture, and dependency library.

≥ V1.28 and < V1.30.4

ossfs 1.0 is deployed in containers in pods in the `kube-system` namespace.

When ossfs 1.0 encounters an exception, you can check the operational logs of ossfs 1.0 containers to troubleshoot the exception, without the need to switch the running mode of ossfs 1.0.

The running mode of ossfs 1.0 is decoupled from the node environment and does not have specific requirements on the node OS and architecture.

≥ V1.30.4

ossfs 1.0 is deployed in containers in pods in the `ack-csi-fuse` namespace.
