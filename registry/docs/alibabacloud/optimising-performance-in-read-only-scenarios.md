Optimize ossfs read performance by selecting and configuring the appropriate read mode for your workload.

**Important**

The content in this topic applies to ossfs 1.91.3 and later. For information about how to download and install the latest version of ossfs, see [Install ossfs](/help/en/oss/developer-reference/install-ossfs-1-0#7574a6940abxi).

## **Modes**

ossfs provides three read modes for different scenarios.

### **Default read mode**

Use the default read mode for random read-only operations on small files (files that fit entirely in the page cache) and large files. For example, if your AI training workload has poor image read performance in direct read mode, switch to the default read mode, even if random reads are also required.

When ossfs reads a file, the kernel caches the file from the mount point in memory and writes the data to a local disk file. The cache consumed by a read operation is twice the file size.

-   If the page cache on your operating system holds up to 6 GB of dirty pages, the default read mode is suitable for files less than 3 GB.
    
-   Adjust `parallel_count` to control the number of concurrent download tasks, and `multipart_size` to set the amount of data downloaded per task.
    

### **Direct read mode**

Use the direct read mode for sequential reads of large files with limited random reads (such as reads that skip a few chunks). For example, use this mode in AI inference scenarios to load a large Safetensors file.

-   To enable direct read mode, set the `-odirect_read` parameter.
    
-   In direct read mode, ossfs retains in memory the data within the range `[-direct_read_backward_chunks * direct_read_chunk_size, +direct_read_prefetch_chunks * direct_read_chunk_size]`. The default values are: By default, ossfs retains data within the range \[-4 MB, +128 MB\]. Limited random reads within a small range are supported. For example, if two consecutive reads from a Safetensors file fall within \[-32 MB, +32 MB\], set `-odirect_read_backward_chunks=8` to retain 32 MB of data before the current offset.
    
    **Parameter**
    
    **Default**
    
    **Description**
    
    `direct_read_chunk_size`
    
    4 MB
    
    Size of each chunk
    
    `direct_read_prefetch_chunks`
    
    32
    
    Number of chunks to prefetch ahead
    
    `direct_read_backward_chunks`
    
    1
    
    Number of chunks to retain behind the current offset
    
-   Adjust `direct_read_prefetch_chunks` and `direct_read_chunk_size` to increase the amount of data prefetched in parallel for maximum bandwidth usage.
    

### **Hybrid read mode**

Use the hybrid read mode for read-only operations on a mix of small files (files that fit entirely in the page cache) and large files, with limited random reads (such as reads that skip a few chunks). For example, use this mode in AI inference scenarios to load a large Safetensors file. If random reads span a wide offset range, the hybrid read mode provides lower performance than the default read mode.

-   To enable hybrid read mode, set the `-odirect_read` parameter.
    
-   Configure `direct_read_local_file_cache_size_mb` to set the data size threshold at which ossfs switches to direct read mode. For example, if your machine has up to 6 GB of page cache, set `-odirect_read_local_file_cache_size_mb=3072` to switch to direct read mode when downloaded data reaches 3 GB.
    
-   In hybrid read mode, ossfs retains in memory the data within the range `[-direct_read_backward_chunks * direct_read_chunk_size, +direct_read_prefetch_chunks * direct_read_chunk_size]`. The default values are: By default, ossfs retains data within the range \[-4 MB, +128 MB\]. Limited random reads within a small range are supported. For example, if two consecutive reads from a Safetensors file fall within \[-32 MB, +32 MB\], set `-odirect_read_backward_chunks=8` to retain 32 MB of data before the current offset.
    
    **Parameter**
    
    **Default**
    
    **Description**
    
    `direct_read_chunk_size`
    
    4 MB
    
    Size of each chunk
    
    `direct_read_prefetch_chunks`
    
    32
    
    Number of chunks to prefetch ahead
    
    `direct_read_backward_chunks`
    
    1
    
    Number of chunks to retain behind the current offset
    
-   Adjust `direct_read_prefetch_chunks` and `direct_read_chunk_size` to increase the amount of data prefetched in parallel for maximum bandwidth usage.
    

## **Recommendations**

If ossfs reads and writes the same file, use the default read mode.

If ossfs only reads files, or reads one file while writing a different file, choose a mode based on the following table:

**Workload**

**Recommended mode**

**Details**

Small files only

Default read mode

\--

Large files only

Direct read mode

Use for sequential reads or random reads with narrow offset ranges. Switch to the default read mode for random reads with wide offset ranges, or if performance remains unsatisfactory after you adjust `direct_read_backward_chunks`.

Small and large files

Hybrid read mode

Use for sequential reads of large files or random reads with narrow offset ranges. Switch to the default read mode for random reads with wide offset ranges, or if performance remains unsatisfactory after you adjust `direct_read_backward_chunks`.

**Note**

When direct read mode or hybrid read mode delivers unsatisfactory performance, switch to the default read mode, which stores data to local disk. In default read mode, disk performance is the primary constraint on ossfs read throughput. Use a high-performance disk such as an ESSD AutoPL disk with appropriate provisioned performance and burst performance settings.
