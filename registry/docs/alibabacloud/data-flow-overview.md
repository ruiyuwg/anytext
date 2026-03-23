The dataflow feature allows Cloud Parallel File Storage (CPFS) to exchange data with Object Storage Service (OSS). You can create dataflow tasks to synchronize data between different sources.

## Background information

After you create a dataflow between a CPFS [fileset](/help/en/cpfs/cpfsonecs/user-guide/manage-filesets#task-2120902) and an OSS bucket, the CPFS file system automatically synchronizes object metadata from the OSS bucket. After synchronization, you can access and process data from the OSS bucket through the CPFS file system using high-performance, POSIX-compatible file interfaces. You can also export data to OSS buckets from the CPFS console or using OpenAPI.

-   On-demand loading
    
    After a dataflow is created between a CPFS file system and an OSS bucket, the CPFS file system automatically loads the required metadata or data from the OSS bucket when you access a directory or file in the CPFS file system. For example, when you run the ls command to list the directories that are connected to an OSS bucket, the required metadata of the directory is loaded from OSS. When you access a file, the required data blocks of the file are loaded from OSS.
    
-   Data import and export
    
    You can create a dataflow task to import or export data between CPFS and OSS so that data can be synchronized to a high-performance CPFS file system before the computing task starts. You can use CPFS to import or export the entire directory tree or the file lists based on your requirements. You can view the details of the execution in the task report after a task is complete.
    
    **Important**
    
    -   CPFS exports metadata to the custom metadata of an OSS object. This metadata is named `x-oss-meta-afm-xxx`. Do not delete or modify this metadata. Otherwise, file system metadata errors may occur.
        
    -   Task reports are for reference only. The final state of the data at the destination after the dataflow completes is the definitive record. You are responsible for performing data consistency verification between the source and destination.
        
    
-   Automatic metadata updates
    
    CPFS can track the changes in the OSS data by monitoring the data modification events of OSS. It automatically synchronizes the new data to the CPFS file system. This ensures the data consistency between CPFS and OSS and reduces the cost of O&M.
    
-   Elastic scaling
    
    Dataflows support the bandwidth auto scaling. You can scale the bandwidth based on the traffic.
    

## Limits

-   Fileset
    
    -   Filesets are supported only in CPFS 2.2.0 and later.
        
    -   A single CPFS file system supports a maximum of 10 filesets.
        
    -   A fileset can be linked to a directory up to eight levels deep within the CPFS file system.
        
    -   A fileset can contain a maximum of 1 million files or directories.
        
    -   Nested filesets are not supported.
        
-   Dataflows
    
    -   Dataflows are supported only in CPFS 2.2.0 and later.
        
    -   A single CPFS file system supports a maximum of 10 dataflows.
        
    -   A single dataflow can have a maximum of five auto-update directories.
        
    -   A fileset in a CPFS file system can be linked to only one OSS bucket.
        
    -   Dataflow task records are retained for a maximum of 90 days.
        
    -   Dataflow task reports are stored in the CPFS file system and consume storage space. A maximum of 1 million reports can be stored.
        
    -   You cannot create a dataflow between a CPFS file system and an OSS bucket in a different region.
        
-   Dataflow limits on file systems
    
    -   In a fileset associated with a dataflow, do not rename a non-empty directory. Otherwise, you may receive a `Permission Denied` error or a "directory not empty" error.
        
    -   Dataflows do not support **Archive** or **Cold Archive** objects in OSS.
        
    -   Use special characters in directory and file names with caution. Supported characters include uppercase and lowercase letters, numbers, exclamation points (!), hyphens (-), underscores (\_), periods (.), asterisks (\*), and parentheses ().
        
    -   Long paths are not supported. The maximum path length for a dataflow is 1,023 characters.
        
-   Limits on data export
    
    -   Dataflows do not support exporting hard links or symbolic links to an OSS bucket.
        
    -   Dataflows do not support exporting empty directories to an OSS bucket.
        
    -   Dataflows do not support exporting ChangeTime properties to an OSS bucket.
        
    -   When a dataflow exports sparse data, zero-value holes are filled with padding before being exported to an OSS bucket.
        
-   Limits on automatic metadata updates
    
    The automatic metadata update feature is available only in the following regions: China (Hangzhou), China (Chengdu), China (Shanghai), China (Shenzhen), China (Zhangjiakou), and China (Beijing).
    

## Procedure

1.  **Create a CPFS fileset.** For more information, see [Create a fileset](/help/en/cpfs/cpfsonecs/user-guide/manage-filesets#section-ik2-hky-ahp).
    
2.  **Create a dataflow.** For more information, see [Create a dataflow](/help/en/cpfs/cpfsonecs/user-guide/manage-data-flows#section-wys-6io-s5q).
    
3.  **Create a data import, data export, or data deletion task.** For more information, see [Create a dataflow task](/help/en/cpfs/manage-data-flow-tasks#section-k9s-cmw-oms).
    
4.  **Verify the data.** After the dataflow task is complete, you must verify the data at the destination to ensure accuracy.
    
    **Warning**
    
    If you delete the source data before verifying that the data was transferred to the destination correctly, you are solely responsible for any resulting data loss and all consequences.
    

## Performance metrics

**Operation type**

**Metric**

**Description**

Data import

Throughput for files larger than 1 GB

-   Single-file import throughput: 200 MB/s.
    
-   Multi-file import throughput can reach the configured bandwidth.
    

OPS for megabyte-scale files

Single-directory and multi-directory import: 1,000.

Data export

Throughput for files larger than 1 GB

-   Single-file export throughput: 200 MB/s.
    
-   Multi-file export throughput can reach the configured bandwidth.
    

OPS for megabyte-scale files

Single-directory and multi-directory export: 600.

Data deletion

OPS

Single-directory and multi-directory deletion: 2,000.

On-demand loading (lazy load)

Throughput for files larger than 1 GB

-   Single-file import throughput: 200 MB/s.
    
-   Multi-file import throughput can reach the configured bandwidth.
    

OPS for megabyte-scale files

Single-directory and multi-directory import: 1,000.

Automatic metadata update

OPS

-   Dataflow at 600 MB/s: 2,000.
    
-   Dataflow at 1,200 MB/s: 3,000.
    
-   Dataflow at 1,500 MB/s: 4,000.
