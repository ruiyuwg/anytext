Object Storage Service (OSS) volumes currently support three types of clients: ossfs 1.0, ossfs 2.0, and strmvol. This topic describes the business scenarios suitable for different clients.

## **Usage notes**

-   All clients have requirements for the Container Storage Interface (CSI) plug-in version. We recommend that you upgrade your CSI plug-in at the earliest opportunity. For more information, see [Manage the CSI plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in).
    
-   If you are not clear about the read/write model of your current business, we recommend that you prioritize ossfs 1.0. ossfs 1.0 provides better compatibility with Portable Operating System Interface (POSIX) operations and can better ensure stable business operations.
    

## **Scenarios**

**Scenario**

**Client**

**Topic**

**Benchmark**

Most scenarios that include read/write or user permission configuration.

[ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs1-0/)

-   [Mount a statically provisioned ossfs 1.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes)
    
-   [Mount a dynamically provisioned OSS volume by using ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes)
    
-   [Manage the lifecycle of OSS buckets](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-lifecycle-of-oss-buckets)
    
-   [Encrypt OSS volumes by using ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-an-oss-volume)
    

[New features of ossfs 1.0 and ossfs performance benchmarking](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above)

Read-only or sequential append-only scenarios, such as AI training, inference, data processing, and autonomous driving.

[ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-2-0/)

[Use ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0)

[Performance test for ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs2-0-client-stress-test-performance)

Scenarios involving massive small files that are read-only, with infrequent updates to OSS remote data, such as training, quantization backtesting, and time series log analysis.

[strmvol](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol/)

[Use strmvol volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-strmvol-storage-volumes)

[Performance testing for strmvol volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol-client-performance-stress-test)

Scenarios where read and write operations can be separated, which means read and write operations do not occur at the same time or operate on different files, such as breakpoint saving and log persistence.

Split into different volumes, such as using ossfs 2.0 volumes to mount read-only paths and ossfs 1.0 volumes to mount write paths.

[Best practice for OSS read/write splitting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-read-and-write-splitting-of-oss-storage-1)

N/A
