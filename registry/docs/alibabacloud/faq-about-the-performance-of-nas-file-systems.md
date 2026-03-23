This topic provides FAQs about the performance of File Storage NAS (NAS) file systems that use the SMB or NFS protocol.

## **What is the relationship between the performance of a file system and the storage capacity of the file system?**

-   General-purpose NAS file system
    
    The read and write performance (maximum throughput) of a file system is linearly proportional to its storage capacity. A higher capacity results in a higher throughput. For more information, see [General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems#concept-61136-zh).
    
-   Extreme NAS file system
    
    The read and write performance of a file system increases in steps as the storage capacity increases. For more information, see [Extreme NAS file systems](/help/en/nas/product-overview/extreme-nas-file-systems#concept-1012850).
    

## What is the relationship between the performance of a file system and the directory size**?**

Traversing a directory in a file system may be slow under the following conditions:

-   The directory is being modified. For example, a file in the directory is being created, deleted, or renamed. This causes slow responses because of frequent cache invalidations.
    
-   The directory metadata is too large to fit in the client's cache, causing frequent cache evictions and slow responses.
    

Solutions:

-   Limit the number of files in a directory. Store fewer than 10,000 files in a single directory.
    
-   Avoid frequently modifying the directory while traversing it.
    
-   If a directory contains more than 10,000 files and is not frequently modified, mount the file system using the NFSv3 protocol and specifying the `nordirplus` parameter to accelerate traversal. Verify the effectiveness of this method before implementing it.
    

## **How do mount parameters impact NAS performance?**

Mount parameters significantly affect the performance of a NAS file system. The following list describes the impacts of specific mount parameters:

-   rsize and wsize:
    
    -   Impact: These two parameters define the block size for data exchange between the client and the server. A larger block size can reduce the number of network requests, which improves throughput, especially when you work with large files.
        
    -   Recommended value: 1048576 (1 MB). Use the maximum value whenever possible. A smaller block size may result in more network overhead and reduce performance.
        
-   hard:
    
    -   Impact: When the hard mount option is used, the client will continuously retry requests if the NAS server becomes unavailable, waiting until the server responds. This ensures data integrity and consistency.
        
    -   Recommendation: Enable this parameter. This parameter helps prevent data loss but may cause the application to temporarily suspend. Therefore, this parameter is suitable for use cases that require high availability.
        
-   timeo:
    
    -   Impact: This parameter defines how long the client waits for a response before it retries a request. A short timeout period may result in frequent retries, which can degrade performance, especially on an unstable network.
        
    -   Recommended value: 600 (60 seconds). This value ensures that the network has enough time to recover, which reduces the number of retries.
        
-   retrans:
    
    -   Impact: This parameter defines the number of times the NFS client retries a failed request. A higher number of retries can increase the success rate of requests but may also increase latency.
        
    -   Recommended value: 2. This value balances performance with data reliability.
        
-   noresvport:
    
    -   Impact: When this option is enabled, a new TCP port is used to ensure network connectivity when the network recovers from a failure. This improves network reliability.
        
    -   Recommendation: Enable this parameter to ensure a stable network connection.
        

**Important**

-   The `soft` mount option is not recommended. It can lead to silent data corruption if the server does not respond in time. Use it only if your application can handle I/O errors gracefully and you fully understand the risks.
    
-   Avoid setting any mount options to values other than the defaults. If you change the read or write buffer sizes or disable attribute caching, performance may be reduced.
    

## **How does ECS instance bandwidth limit NAS file system performance?**

The throughput you can achieve with a NAS file system is ultimately limited by the network bandwidth of the connected ECS instance. For example, if your NAS file system has a theoretical throughput of 500 MB/s, but your ECS instance only has a 1 Gbit/s (approx. 125 MB/s) network card, your actual throughput will be capped at about 125 MB/s.

## What happens if the read and write throughput of a request exceeds the threshold?

If the read and write throughput of a request from you or your application exceeds the threshold, NAS automatically throttles the request. This increases latency.

For a General-purpose NAS file system, run the `Truncate` command to increase the throughput threshold. For more information, see [How do I increase the read and write throughput threshold of a General-purpose NAS file system?](#section-m18-fnf-dlo)

For an Extreme NAS file system, scale it out to increase the throughput threshold. For more information, see [Scale out an Extreme NAS file system](/help/en/nas/user-guide/scale-up-an-extreme-nas-file-system).

For more information about the throughput thresholds for General-purpose and Extreme NAS file systems, see [Performance metrics of General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems#concept-61136-zh) and [Performance metrics of Extreme NAS file systems](/help/en/nas/product-overview/extreme-nas-file-systems#section-zdu-kba-qwp).

## How do I increase the read and write throughput threshold of a General-purpose NAS file system?

The read and write throughput of a General-purpose NAS file system increases linearly with its storage capacity. For more information about the relationship between the read and write throughput and the capacity usage of a file system, see [Specifications of General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems#concept-61136-zh).

You can increase the provisioned capacity of the file system, and thus its performance, by creating a large sparse file. This can be done by writing a file with a large size but minimal actual data, or by using commands like `truncate` or `fsutil`. This increases the read and write throughput of the file system. You are charged for the actual space that is occupied by the sparse files or the generated file in the Alibaba Cloud NAS file system. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548).

For example, writing a 1 TiB file to a Capacity NAS file system increases its read and write throughput by 150 MB/s. Writing a 1 TiB file to a Performance NAS file system increases its read and write throughput by 600 MB/s.

-   Linux
    
    Run the `Truncate` command to generate a file on a file system to increase its read and write throughput.
    
    ```
    sudo truncate --size=1TB /mnt/sparse_file.txt
    ```
    
    In the preceding command, /mnt is the mount path of the file system on the compute node.
    
-   Windows
    
    Write sparse files to a file system to increase its read and write throughput.
    
    ```
    fsutil file createnew Z:\sparse_file.txt 1099511627776
    ```
    
    In the preceding command, Z:\\ is the mount path of the file system on the compute node.
    

## How do I resolve poor performance when I access NAS from a Linux operating system?

-   Solution 1: Configure the `nconnect` parameter to increase the throughput of a single ECS instance accessing NAS
    
    The `nconnect` parameter is an option for mounting an NFS file system on a Linux client. This option allows a single NFS mount to use multiple TCP connections between the client and the server, significantly increasing throughput for workloads with high I/O concurrency. Tests indicate that the `nconnect` parameter can increase the throughput of a single ECS instance accessing NAS by 3 to 6 times, up to 3 GB/s.
    
    **Use cases**
    
    Multiple concurrent I/O read and write operations are performed on a single ECS instance (more than 16 concurrent operations).
    
    **Prerequisites**
    
    The Linux kernel version is 5.3 or later.
    
    **Procedure**
    
    Add the `nconnect` parameter to the `mount` command. Set `nconnect=4`. The following is an example command.
    
    ```
    sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,nconnect=4 
    ```
    
    **Important**
    
    The nconnect parameter increases the throughput of a single ECS instance accessing NAS but does not increase the throughput threshold of the NAS file system. If you enable the nconnect parameter for single-concurrency, small data block, or latency-sensitive services, latency increases. Do not enable the nconnect parameter for such services.
    
-   Solution 2: Modify sunrpc.tcp\_slot\_table\_entries to increase the throughput of a single ECS instance accessing NAS
    
    The `sunrpc` module in the Linux kernel determines the number of communication slots within a single NFS link. Different Linux versions use different sunrpc configurations. If the slot configuration is high, latency may increase. If the slot configuration is low, throughput may be insufficient. If you require high throughput, set the slot quantity to 128. If you require low latency, set the slot quantity to 16 or less.
    
    **Note**
    
    The effect of configuring the `sunrpc.tcp_slot_table_entries` parameter is not as significant as that of the `nconnect` parameter. Configure the `nconnect` parameter for Linux kernel 5.3 and later.
    
    **Use cases**
    
    Multiple concurrent I/O read and write operations are performed on a single ECS instance. The kernel version is earlier than 3.10.
    
    **Procedure**
    
    For more information, see [How to modify the number of concurrent NFS requests](/help/en/nas/user-guide/other-issues#section-o97-87k-mdw).
    

## Why does NGINX require a long period of time to write logs to a file system?

-   Background:
    
    Use two instructions to specify NGINX logs. The log\_format instruction specifies the log format. The access\_log instruction specifies the log file storage path, format name, and cache size.
    
-   Issue:
    
    NGINX takes a long time to write logs to the file system, which reduces write performance.
    
-   Cause:
    
    The log file path specified in the access\_log instruction contains variables. Every time NGINX writes a log entry, it opens and closes the log file. With NAS, closing a file triggers a data flush to the server to ensure consistency. This frequent open-close-flush cycle creates significant performance overhead.
    
-   Solutions:
    
    -   Solution 1: Delete the variables in the access\_log instruction and store the logs in a fixed path.
        
    -   Solution 2: Use the open\_log\_file\_cache instruction to cache the file descriptors of frequently used logs. This improves the performance of log storage to paths that contain variables. For more information about the configurations, see [open\_log\_file\_cache](https://nginx.org/en/docs/http/ngx_http_log_module.html#open_log_file_cache).
        
        Recommended configurations:
        
        ```
        open_log_file_cache max=1000 inactive=1m valid=3m min_uses=2;
        ```
        

## Why are I/O operations delayed on an SMB file system?

-   Issue:
    
    When you access an SMB file system using a mount target, you must wait for several minutes before performing I/O operations on the file system.
    
-   Cause:
    
    -   The delay occurs because an NFS client is installed but not used.
        
    -   The Internet file server fails to log on to the SMB file system because the WebClient service is enabled.
        
    -   The files in the file system cannot be opened because `Nfsnp` is included in the value of a registry configuration item.
        
-   Solution:
    
    1.  The first time you access an SMB file system, ping the domain name of the mount target to check the network connectivity between the compute node and the file system and to verify that the latency is within the normal range.
        
        -   If the ping command fails, check your network settings and make sure that the network is connected.
            
        -   If the latency is high, ping the IP address of the mount target. If the latency from pinging the IP address is much lower than that from pinging the domain name, check your DNS server configuration.
            
    2.  If an NFS client is installed but not used, uninstall the NFS client.
        
    3.  Disable the WebClient service.
        
    4.  Check the registry configuration item in the following path: HKEY\_LOCAL\_MACHINE\\System\\CurrentControlSet\\Control\\NetworkProvider\\Order\\ProviderOrder. If the registry value contains `Nfsnp`, remove `Nfsnp` and restart the instance.
        

**Note**

-   Use the Fio tool to check whether the performance metrics are abnormal.
    
    ```
    fio.exe --name=./iotest1 --direct=1 --rwmixread=0 --rw=write --bs=4K --numjobs=1 --thread --iodepth=128 --runtime=300 --group_reporting --size=5G --verify=md5 --randrepeat=0 --norandommap --refill_buffers --filename=\\<mount point dns>\myshare\testfio1
    ```
    
-   Perform I/O read and write operations using large data blocks. Small data blocks consume more network resources. If you cannot change data block sizes, construct the BufferedOutputStream class to write data with a specified buffer size.
    

## Why are I/O operations on Windows Server SMB clients delayed?

-   Cause:
    
    By default, the `large mtu` option is disabled on Windows SMB clients. This limits the I/O performance of these clients.
    
-   Solution:
    
    Enable the `large mtu` option by modifying the registry. The registry key is located in the following path: HKEY\_LOCAL\_MACHINE\\System\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters
    
    In this path, create a key of the `DWORD` data type and name it DisableLargeMtu. Set the value of the key to `0`. Restart the instance for the change to take effect.
    

## How can I improve the performance of access from IIS to NAS?

-   Cause:
    
    When Internet Information Services (IIS) accesses a file in the shared directory of a NAS file system, the IIS backend may access the shared directory multiple times. Accessing the NAS file system requires at least one network interaction, which is different from accessing a local file system. Although each access request does not take a long time, the client may take a long time to respond if multiple access requests are sent.
    
-   Solution:
    
    1.  Use the SMB Redirector component to optimize performance. For more information, see [SMB2 Client Redirector Caches Explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-7/ff686200\(v=ws.10\)).
        
        The registry key is located in the following path: HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\services\\LanmanWorkstation\\Parameters. Change the values of the following three configuration items to 600 or higher:
        
        -   FileInfoCacheLifetime
            
        -   FileNotFoundCacheLifetime
            
        -   DirectoryCacheLifetime
            
        
        **Note**
        
        If none of the preceding registry configuration items exist, perform the following steps:
        
        1.  Make sure that the file system uses the SMB protocol.
            
        2.  Check whether your Windows version supports the three registry configuration items. If your Windows version supports the registry configuration items but they do not exist, you must create them manually. For more information, see [Performance tuning for file servers](https://docs.microsoft.com/en-us/windows-server/administration/performance-tuning/role/file-server/).
            
        
    2.  If IIS frequently accesses these files, store web-related files, such as JS and CSS files, on local disks.
        

If the read and write performance of IIS still cannot meet your business requirements, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).

## Why does a file system stutter or not respond when I run the ls command?

-   Symptom
    
    When you traverse a directory of a file system, the file system stutters or does not respond. This can occur when you run an ls command, an operation that contains the `*` or `?` wildcard character, the `rm -rf` command, or the `getdents` system call.
    
-   Cause
    
    -   The directory is being modified. For example, a file in the directory is being created, deleted, or renamed. This causes slow responses because of frequent cache invalidations.
        
    -   The directory metadata is too large to fit in the client's cache, causing frequent cache evictions and slow responses.
        
-   Solution
    
    -   Limit the number of files in a directory. Store fewer than 10,000 files in a single directory.
        
    -   Avoid frequently modifying the directory while traversing it.
        
    -   If a directory contains more than 10,000 files and is not frequently modified, mount the file system using the NFSv3 protocol and specifying the _nordirplus_ parameter to accelerate traversal. Verify the effectiveness of this method before implementing it. For more information, see [Mount parameters](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#table-bcw-ioo-ery).
        

## **How do I** improve the NFS sequential read performance on Linux kernel 5.4 or later?

The NFS `read_ahead_kb` parameter defines the size in kilobytes (KB) of data to be read in advance, or prefetched, by the Linux kernel during a sequential read operation.

For Linux kernel versions earlier than `5.4.*`, the value of the `read_ahead_kb` parameter is the product of `NFS_MAX_READAHEAD` and `rsize` (the client read size specified in the mount options). Starting with Linux kernel version `5.4.*`, the `read_ahead_kb` parameter defaults to 128 KB. Therefore, increase the `read_ahead_kb` parameter to 15 MB when you use the recommended [mount options](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#305535b389o59).

After the file system is mounted, run the following commands to reset the value of the `read_ahead_kb` parameter. In the commands, replace `nas-mount-point` with the local path of the mounted file system and replace `read-ahead-kb` with the size in KB of the data to be read in advance or prefetched.

```
device_number=$(stat -c '%d' nas-mount-point)
((major = ($device_number & 0xFFF00) >> 8))
((minor = ($device_number & 0xFF) | (($device_number >> 12) & 0xFFF00)))
sudo bash -c "echo read-ahead-kb > /sys/class/bdi/$major:$minor/read_ahead_kb"
```

The following commands provide an example of using `/mnt` as the local path of the mounted file system to set the value of the `read_ahead_kb` parameter to 15 MB:

```
device_number=$(stat -c '%d' /mnt)
((major = ($device_number & 0xFFF00) >> 8))
((minor = ($device_number & 0xFF) | (($device_number >> 12) & 0xFFF00)))
sudo bash -c "echo 15000 > /sys/class/bdi/$major:$minor/read_ahead_kb"
```

## **Why is the first connection to an SMB share slow?**

-   Cause:
    
    A slow initial connection to an SMB share is often caused by the Windows client attempting to connect through unnecessary or slow network providers in its configured provider order, or by DNS resolution latency.
    
-   Solution:
    
    **Warning**
    
    Modifying the registry is a high-risk operation. Before you perform this operation, [create a system snapshot](/help/en/ecs/user-guide/create-a-snapshot) or back up the registry.
    
    **Step 1: Optimize the network provider order**
    
    1.  Press Win+R, enter `regedit`, and then open Registry Editor.
        
    2.  Navigate to the following path: HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\NetworkProvider\\Order
        
    3.  In the right-side pane, find and double-click the ProviderOrder value.
        
    4.  In the **Value data** text box, find and delete the `Nfsnp` and `WebClient` entries. Make sure that you retain the commas between the other providers.
        
    5.  Click **OK** to save your changes.
        
    6.  Restart the client ECS instance for the changes to take effect.
        
    
    **Step 2: Troubleshoot DNS resolution latency**
    
    If the issue persists after you complete Step 1, check whether slow DNS resolution is the cause.
    
    1.  Open Command Prompt (CMD).
        
    2.  Run `ping <mount target address>` and record the latency.
        
    3.  Run `ping <IP address of the mount target>` and record the latency.
        
    4.  **Compare the results**: If the latency of pinging the IP address is much lower than that of pinging the mount target address, DNS resolution is slow. Check the DNS configuration of your ECS instance.
