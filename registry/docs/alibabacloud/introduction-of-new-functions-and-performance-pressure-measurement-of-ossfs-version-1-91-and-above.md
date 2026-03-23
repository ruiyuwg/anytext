As the Container Storage Interface (CSI) component undergoes iterative upgrades, ossfs 1.0 needs to be changed to specific versions to support new features. If your clusters use CSI 1.30.1 or later, you can enable specific feature gates to upgrade ossfs to 1.91 or later for improved file system performance. This topic describes the new features in version 1.91 and later of ossfs 1.0 and provides benchmark performance comparisons. The new features include Portable Operating System Interface (POSIX) operation optimizations, readdir optimizations, and direct reads.

**Note**

If you have high requirements on file systems, we recommend that you change the version of ossfs 1.0 to 1.91 or later. For more information, see [Switch to ossfs 1.91 or later](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes#21e93976c2l12).

## **New features of version 1.91 and later**

Compared with version 1.88.x of ossfs 1.0, the following feature changes are applied in version 1.91 and later. This section provides only a basic description of the feature changes. For more information about the feature changes and release notes for version 1.91 and later, see [ossfs changelog](https://github.com/aliyun/ossfs/blob/master/ChangeLog).

**Important**

The ossfs features are available only on Elastic Compute Service (ECS) nodes.

### **Operation optimizations and issue fixes for POSIX**

-   OSS volumes can be mounted to subpaths that do not exist in OSS buckets.
    
-   Zero-byte files can no longer be uploaded when you create an object in OSS. The issue that the EntityTooSmall error occasionally occurs when you use multipart upload is fixed. Append operations are improved.
    
-   The default values of specific parameters are modified based on the versions of open source ossfs and the results of performance benchmarking.
    
    **Parameter**
    
    **Description**
    
    **Default value for version 1.88.x**
    
    **Default value for version 1.91 and later**
    
    `stat_cache_expire`
    
    The validity period of metadata. Unit: seconds.
    
    \-1 (The metadata never expires)
    
    900
    
    `multipart_threshold`
    
    The size threshold for files that can be uploaded by using multipart upload. Unit: MB.
    
    5 x 1024
    
    25
    
    `max_dirty_data`
    
    The size threshold for forcefully flushing dirty data to disks. Unit: MB.
    
    \-1 (Dirty data is not forcefully flushed)
    
    5120
    
    To maximize the performance of version 1.91 and later, the following parameters are compatible with version 1.88.x and have different default values than open source ossfs.
    
    **Parameter**
    
    **Description**
    
    **Default value for open source version 1.91 and later**
    
    **Default value for version 1.91 and later**
    
    `multipart_size`
    
    The part size when multipart upload is used. Unit: MB.
    
    10
    
    30
    
    `parallel_count`
    
    The number of parts that can be concurrently uploaded.
    
    5
    
    20
    
    If you want to roll back or modify the preceding parameters in version 1.91 or later of ossfs 1.0, modify the `otherOpts` parameter in the persistent volume (PV) that is mounted.
    

### **readdir optimizations**

The readdir optimization feature is introduced to improve the efficiency of traversing file systems.

To support Portable Operating System Interface (POSIX) operations such as authentication and chmod command execution when mounting an OSS volume, the system calls a large number of HeadObject operations to query the metadata of all objects in the mounted path of the OSS bucket, such as the permissions, modification time, user identifiers (UIDs), and group identifiers (GIDs) of the objects. If a large number of files exist in some paths, the performance of ossfs may be adversely affected.

After you enable the readdir optimization feature, the system ignores the preceding metadata to optimize the readdir performance. Take note of the following items:

-   The chmod or chown command does not take effect.
    
-   Errors may occur when you use symbolic links to access objects. ossfs does not support hard links.
    

The following table describes the parameters that are required for enabling the readdir optimization feature.

**Parameter**

**Description**

**How to enable**

**Default value for version 1.91 and later**

`readdir_optimize`

Specifies whether to enable the readdir optimization feature.

You can specify `-o readdir_optimize` to enable the readdir optimization feature without specifying a value for the parameter.

disable

`symlink_in_meta`

Specifies whether to enable metadata recording for symbolic links. If you enable this feature, the metadata of symbolic links is recorded to ensure that the symbolic links can be displayed as expected.

You can specify `-o symlink_in_meta` to enable this feature without specifying a value for the parameter.

disable

### **Direct reads**

The direct read feature is introduced to improve the performance of sequential reads (read-only scenarios) performed on large files.

To support writes and random reads when mounting OSS volumes, ossfs downloads files from the OSS server to disks and then reads the data on the disks. In this case, the read performance of ossfs is limited by the disk I/O.

The direct read feature prefetches data from OSS into memory and the prefetched data is not immediately flushed to disks. This way, ossfs can directly read data from memory, which improves the performance of sequential reads. Take note of the following items:

-   We recommend that you use this feature to perform only **sequential reads (read-only scenarios)**. If you perform other operations, the following limits apply:
    
    -   If you perform random reads, ossfs prefetches data again. A large number of random reads may compromise the read performance of ossfs.
        
    -   If you perform writes, data is flushed from memory to disks to ensure data consistency.
        
-   After you enable the direct read feature, the `use_cache` parameter does not take effect.
    
-   When data is prefetched from OSS to memory, the memory usage may increase. You can refer to the following table to configure the direct\_read\_prefetch\_limit parameter to limit the memory usage of ossfs. When the memory usage of ossfs reaches the upper limit, ossfs stops prefetching data. In this case, the read performance of ossfs is limited by the network I/O.
    

The following table describes the parameters that are required for enabling the direct read feature.

**Parameter**

**Description**

**Default value for version 1.91 and later**

`direct_read`

Specifies whether to enable the direct read feature. You can specify -o direct\_read to enable the direct read feature without specifying a value for the parameter.

disable

`direct_read_prefetch_limit`

The maximum memory size that can be used to store data prefetched by ossfs processes. Unit: MB.

1024 (Minimum: 128)

If you want to improve the performance of sequential reads by using methods other than prefetching, you can configure the `-o direct_read_prefetch_chunks=0` parameter, which allows ossfs to read data from the OSS server. In this case, the read performance of ossfs is limited by the network I/O.

## Best practices for changing ossfs 1.0 to version 1.91 or later

-   If a large number of objects exist on the OSS server and your services do not require object metadata, we recommend that you update ossfs 1.0 to version 1.91 or later and configure the `-o readdir_optimize` parameter for ossfs. If versioning is enabled for an OSS bucket, we recommend that you also configure the `-o listobjectsv2` parameter for ossfs.
    
-   In read/write scenarios, we recommend that you refer to [Best practices for OSS read/write splitting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-read-and-write-splitting-of-oss-storage) to split reads and writes for OSS. If you do not split reads and writes, we recommend that you change ossfs to version 1.91 or later to fix the issue that the EntityTooSmall error occasionally occurs when you use multipart upload. To ensure data consistency, we recommend that you also configure the `-o max_stat_cache_size=0` parameter for ossfs.
    
-   Read-only scenarios
    
    -   If you do not need to perform sequential reads (read-only scenarios) on large files, we recommend that you configure the `-o direct_read` parameter to enable the direct read feature.
        
    -   If files are read frequently, we recommend that you configure the following parameters to use the local cache to accelerate the reads:
        
        -   Configure the `-o kernel_cache` parameter to use page caches.
            
        -   Configure the `-o use_cache=/path/to/cache` parameter to use disk caches.
            

## Performance comparison between version 1.88.x and version 1.91 and later

**Important**

The benchmarking results may vary based on the benchmarking tool that is used. In this section, sysbench or custom scripts are used to benchmark ossfs.

### **Throughput comparison**

In this example, **the readdir optimization and direct read features are disabled** and a node of the ecs.g7.xlarge type is used. The performance level (PL) of the system disk of the node is 0. sysbench is used to benchmark version 1.91 and later against version 1.88.x by testing the performance of sequential reads, sequential writes, random reads, and random writes on 128 files each of which is 8 MiB in size. The following figure shows the benchmarking results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2449066471/CAEQJxiBgMDHtY21gxkiIDhhZTg0NGViZTI2NzQ5NTI5ZTRiZDFhYTQ3N2QyYjM24436490_20240603101806.661.svg)

The figure indicates the following comparison results when **the readdir optimization and direct read features** are **disabled**:

-   Version 1.88.x provides higher throughput for file creates and sequential reads.
    
-   Version 1.91 and later provide higher throughput for sequential reads, random reads, and random writes.
    

### **ls and find command performance comparison** after readdir optimization is enabled

Enable readdir optimization, run the `ls` and `find` commands on 1,000 files and then record the latency of each execution. The following figure shows the benchmarking results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2449066471/CAEQJxiBgICd85G1gxkiIDJjMzJjMDhmODA0YzRjNzM4Yzc4YzdmM2ZjMjYzZGE34436490_20240603101806.661.svg)

The figure indicates the following comparison results between version 1.88.x, version 1.91 and later with readdir optimization disabled, and version 1.91 and later with `readdir optimization` enabled:

-   The file read latency of the `ls` command in version 1.91 and later with readdir optimization enabled, is **74.8%** lower than in version 1.88.x, and **74.3%** lower than in version 1.91 and later with readdir optimization disabled. The performance has improved to **4.0 times** and **3.9 times** that of the original, respectively.
    
-   The file read latency of the `find` command in version 1.91 and later with readdir optimization enabled, is **58.8%** lower than in version 1.88.x, and also **58.8%** lower than in version 1.91 and later with readdir optimization disabled. The performance has improved to **2.4 times** and **2.4 times** that of the original, respectively.
    

### **Large file sequential read performance comparison after direct read is enabled**

Use ossfs with direct read disabled and ossfs with direct read enabled to concurrently perform sequential reads on 10 files each of which is 10 GB in size. Then, record the latency, maximum disk space usage, and maximum memory usage of different ossfs versions. The following figure shows the results.

**Note**

The maximum memory usage refers to the amount of memory used by all ossfs processes, including the amount of memory used by prefetched data and the memory used by the direct feature for other purposes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2449066471/CAEQJxiBgICtzJW1gxkiIDFlODkxMzc5ZTZjZjRmZDBiZmQ1ODYxMjAzMzJmODgw4436490_20240603101806.661.svg)

The figure indicates the following comparison results between version 1.88.x, version 1.91 and later with direct read disabled, and version 1.91 and later with `direct read` enabled:

-   The large file read latency of version 1.91 and later with direct read enabled is **85.3%** less than that of version 1.88.x, and **79%** less than that of version 1.91 and later with direct read disabled.
    
-   The maximum disk space usage of version 1.91 and later with direct read enabled is **0**, which is lower than those of version 1.88.x and version 1.91 and later with direct read disabled.
    
-   The maximum memory usage of version 1.91 and later with direct read enabled is slightly greater than those of version 1.88.x and version 1.91 and later with direct read disabled. This increased memory usage allows version 1.91 and later with direct read enabled to provide a maximum disk space usage of **0**.
    

## How to benchmark ossfs 1.0

ossfs 1.0 performance benchmarking can be performed in containers or on ECS instances. The preceding examples use sysbench or custom scripts to benchmark ossfs. You can change ossfs 1.0 to version 1.91 or later and then benchmark version 1.91 or later in the test environment. This section describes how to benchmark ossfs 1.0 in a containerized test environment.

### **Procedure**

1.  Create an OSS volume and a persistent volume claim (PVC). We recommend that you create a new OSS bucket and a new subpath in the bucket. For more information, see [Mount a statically provisioned OSS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes).
    
2.  Create a sysbench.yaml file based on the following code block. The file is used to create a sysbench application to which the PVC created in the preceding step is mounted.
    
    **Show the sample code of sysbench.yaml**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: sysbench
      labels:
        app: sysbench
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: sysbench
      template:
        metadata:
          labels:
            app: sysbench
        spec:
          containers:
          - name: sysbench
            image: registry.cn-beijing.aliyuncs.com/tool-sys/tf-train-demo:sysbench-sleep
            ports:
            - containerPort: 80
            volumeMounts:
              - name: pvc-oss
                mountPath: "/data"
            livenessProbe:
              exec:
                command:
                - sh
                - -c
                - cd /data
              initialDelaySeconds: 30
              periodSeconds: 30
          volumes:
            - name: pvc-oss
              persistentVolumeClaim:
                claimName: pvc-oss
    ```
    
3.  Run the following command to deploy the sysbench application:
    
    ```
    kubectl apply -f sysbench.yaml
    ```
    
4.  Log on to the sysbench container, and run the commands listed in the following table in the mount path to benchmark the read/write throughput.
    
    **Note**
    
    -   Modify the parameter values in the commands based on the actual node specifications or your business requirements.
        
    -   If you want to perform consecutive tests, we recommend that you prepare new test files for new tests to eliminate the influence that data cache imposes on the test results.
        
    
    **Operation**
    
    **Command**
    
    Prepare test files
    
    ```
    sysbench --num-threads=2 --max-requests=0 --max-time=120 --file-num=128 --file-block-size=16384 --test=fileio --file-total-size=1G --file-test-mode=rndrw prepare
    ```
    
    Test the sequential write I/O
    
    ```
    sysbench --num-threads=2 --max-requests=0 --max-time=120 --file-num=128 --file-block-size=16384 --test=fileio --file-total-size=1G --file-test-mode=seqwr --file-fsync-freq=0 run
    ```
    
    Test the sequential read I/O
    
    ```
    sysbench --num-threads=2 --max-requests=0 --max-time=120 --file-num=128 --file-block-size=16384 --test=fileio --file-total-size=1G --file-test-mode=seqrd --file-fsync-freq=0 run
    ```
    
    Test the random read/write I/O
    
    ```
    sysbench --num-threads=2 --max-requests=0 --max-time=120 --file-num=128 --file-block-size=16384 --test=fileio --file-total-size=1G --file-test-mode=rndrw --file-fsync-freq=0 run
    ```
    
    Delete test files
    
    ```
    sysbench --test=fileio --file-total-size=1G cleanup 
    ```
    

### **What to do next**

-   You can benchmark various versions of ossfs by using the MySQL benchmarking tool provided by sysbench.
    
-   You can also test the readdir optimization and direct read features in the preceding test environment by running the `ls` and `find` commands or by concurrently performing sequential reads.
