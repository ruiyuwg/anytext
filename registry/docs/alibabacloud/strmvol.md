strmvol volumes mount Object Storage Service (OSS) data as virtual block devices to optimize the read performance of numerous small OSS files.

## **Solution overview**

OSS supports massive data storage and the pay-as-you-go billing method and provides convenient access features based on the HTTP protocol. In containerized scenarios, a FUSE file system is usually used to mount OSS data. In small file reading scenarios, you can use the virtual block device solution to mount OSS data as strmvol volumes.

strmvol volumes directly access OSS data through virtual block devices, eliminating the performance bottleneck of the FUSE intermediate layer by moving the data access path directly to the storage driver layer to improve access speed. This solution is particularly suitable for scenarios that require fast traversal of millions of small files, such as AI training dataset loading and time series log analysis.

#### **FUSE solution features**

This solution uses a FUSE file system, such as ossfs. Features:

-   Data changes on the OSS server can be detected. If you disable metadata caching, data changes take effect in real time.
    
-   Write operations are supported. Extended file system information, including group ID (gid) and user ID (uid), is supported.
    
-   Read and write requests are directed to the ossfs client through the FUSE layer. Scenarios involving high peak requests, such as when traversing numerous small files, consume high performance overhead.
    
-   In earlier versions of the Container Storage Interface (CSI) plug-in, the ossfs client runs as a process on the node where it resides. In the current version of the CSI plug-in, the ossfs client runs as a separate pod in the cluster. Pods on the same node and persistent volume (PV) share the same ossfs client for OSS access.
    

#### **Virtual block device solution features**

This solution is based on the underlying virtual block device and kernel-state file system, such as Enhanced Read-Only File System (EROFS). Features:

-   During initialization, all file metadata under the OSS bucket mount target is retrieved and indexed. The current version does not support data synchronization for the OSS server during runtime.
    
-   In read-only scenarios, extended information parsing is not supported for OSS objects.
    
-   Performance overhead at the FUSE layer is eliminated. The preset memory size is used as the data storage medium to accelerate prefetching speed in small file scenarios.
    
-   In addition to the CSI component, this solution also deploys a DaemonSet named strmvold, which is responsible for managing virtual block devices created on the node. After the virtual block device is mounted to the node, it occupies preset node resources to implement data caching.
    

## **Scenarios**

You can use the virtual block device solution (strmvol volumes) described in this topic if your business meets the following characteristics.

**Note**

The solution that uses FUSE is suitable for most scenarios. For more information, see [Use ossfs 1.0 static volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes), [Use ossfs 1.0 dynamic volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes), and Use ossfs 2.0 volumes.

-   Data is stored in OSS buckets and does not need to be updated during business running.
    
-   Your business is not sensitive to the extended information of the file system.
    
-   Read-only scenarios, especially those that involve numerous small files or random reads.
    

## **Operation method**

To use strmvol volumes, you need to deploy the strmvol-csi-driver component from the marketplace. Deploying this component generates the following resources:

**Resource name**

**Resource type**

**Feature**

strmvold

DaemonSet

Responsible for managing virtual block devices created on the node.

strmvol-csi-plugin

DaemonSet

Implements the mount and unmount capabilities of strmvol volumes.

strmvol-csi-provisioner

Deployment

Implements the dynamic creation capability of strmvol volumes.
