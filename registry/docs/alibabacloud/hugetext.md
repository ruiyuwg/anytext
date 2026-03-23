Memory is allocated and managed in blocks known as pages. As an extension and optimization to the Transparent Huge Pages (THP) feature, the Hugetext feature allows you to allocate the executable parts of applications and dynamic-link libraries (DLLs) to huge pages, which are usually 2 MB or larger in size. In this way, the Hugetext feature greatly reduces instruction translation lookaside buffer (iTLB) misses of the applications and increases the 2MB iTLB utilization of CPUs. The Hugetext feature helps prevent issues, such as memory fragmentation and memory bloats, and improve memory usage. Huge pages are ideal for scenarios that involve large code segments, such as databases and large-scale applications. This topic describes how to use the Hugetext feature and its performance benefits.

**Note**

The extents to which Hugetext can help improve application performance vary based on the platform and how applications are executed.

For information about common terms related to Hugetext, see [Appendix: Glossary](#section-grs-hwk-upb).

## Limits

The Alibaba Cloud Linux images that contain the following kernel versions support Hugetext:

-   Alibaba Cloud Linux 2: kernel `4.19.91-25` or later
    
-   Alibaba Cloud Linux 3: kernel `5.10.112-11` or later
    

**Note**

You can run the `uname -r` command to check the kernel version contained in an image.

## Usage

### Enable the Hugetext feature

By default, the Hugetext feature is disabled. You can use the `sysfs` interface to enable the feature. You can use one of the following methods to enable the Hugetext feature:

-   Method 1: Enable Binary Pages and Dynamic Library Pages.
    
    ```
    sudo sh -c 'echo 1 > /sys/kernel/mm/transparent_hugepage/hugetext_enabled'
    ```
    
-   Method 2: Enable Anonymous Executable Pages.
    
    ```
    sudo sh -c 'echo 2 > /sys/kernel/mm/transparent_hugepage/hugetext_enabled'
    ```
    
-   Method 3: Enable Binary Pages, Dynamic Library Pages, and Anonymous Executable Pages.
    
    ```
    sudo sh -c 'echo 3 > /sys/kernel/mm/transparent_hugepage/hugetext_enabled'
    ```
    

**Note**

The Hugetext feature is asynchronous. Memory pages are not merged into huge pages immediately after the feature is enabled.

### Check whether the Hugetext feature is enabled

Run the following command to check the `FilePmdMapped` field in /proc/<pid>/smaps and determine whether the Hugetext feature is enabled. The `FilePmdMapped` field specifies the size of huge pages used by a process. Unit: KB.

```
sudo cat /proc/<pid>/smaps | grep FilePmdMapped | awk '{sum+=$2}END{print"Sum= ",sum}'
```

**Note**

Replace `<pid>` with an actual process ID. You can run the `pidof sshd` command to query process IDs.

### Disable the Hugetext feature

Run the following command to disable the Hugetext feature by using the `sysfs` interface:

```
sudo sh -c 'echo 0 > /sys/kernel/mm/transparent_hugepage/hugetext_enabled'
```

**Note**

-   The Hugetext feature is asynchronous. Huge pages are not split immediately after the feature is disabled.
    
-   If a code segment is merged into a huge page, the huge page cache remains even after the Hugetext feature is disabled.
    

You can set the hugetext parameter to 0, 1, 2, or 3 to configure the status of the Hugetext feature in system boot options. Configure system boot options based on your GRand Unified Bootloader (GRUB) version and image.

After the Hugetext feature is disabled, you can use one of the following methods to clear used huge pages:

-   Method 1: Clear the system-wide page cache.
    
    ```
    sudo sh -c 'echo 3 > /proc/sys/vm/drop_caches'
    ```
    
-   Method 2: Clear file-specific page caches.
    
    ```
    sudo vmtouch -e /<path>/target
    ```
    
    **Note**
    
    -   Virtual Memory Toucher (vmtouch) is a tool that is used to check whether files are loaded into memory, lock files in memory, or unload files from memory. If vmtouch is not installed, run the `sudo yum install vmtouch` command to install vmtouch.
        
    -   Replace `<path>` with the actual directory of your application file.
        
    
-   Method 3: Clear residual huge pages.
    
    ```
    sudo sh -c 'echo 1 > /sys/kernel/debug/split_huge_pages'
    ```
    

## Performance benefits

The performance benefits that are provided by Hugetext vary based on the Translation Lookaside Buffer (TLB) module on different platforms. Hugetext is suitable for scenarios including databases (such as MySQL and PostgreSQL databases) and Java applications. Hugetext helps improve application performance by 5% to 8% on physical machines and reach a higher performance increase for applications on virtual machines. In the following example, MySQL is used to describe the performance benefits that Hugetext brings on an Arm platform.

**Note**

If a code segment is merged into a huge page, the huge page cache remains even after the Hugetext feature is disabled. When you perform a performance test, we recommend that you run the `echo 3 > /proc/sys/vm/drop_caches` command to clear the system-wide page cache to obtain accurate test results.

Assume that the test instance has 32 vCPUs, 1, 8, 16, and 32 concurrent MySQL connections are established to the instance, and the 8, 16, and 32 MySQL connections push CPU utilization to 25%, 50%, and 100%. The following figure shows a transaction per second (TPS) comparison between 2MB huge pages and 4KB standard pages.![TPS数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1778750761/p514811.png)

Huge pages always outperform standard pages, as shown in the preceding figure.

-   When only one MySQL connection is established, external factors have insignificant impacts, and huge pages outperform standard pages by about 6.9%.
    
-   When 8 or 16 concurrent MySQL connections are established, CPU contention is eliminated and huge pages outperform standard pages by more than 6.5%.
    
-   When 32 concurrent MySQL connections are established, other applications may compete for CPU resources, and TPS rates are lower than theose that are obtained in the preceding test scenarios. Huge pages are more stable than standard pages and outperform standard pages by about 11%.
    

![iTLB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1778750761/p514819.png)The preceding figures show the iTLB data of huge pages and 4KB pages. The figure on the left side shows the iTLB miss rate, and the figure on the right side shows the number of iTLB misses per thousand instructions (MPKI). After MySQL uses huge pages, the following situations occur:

-   The number of iTLB misses drops approximately tenfold, and the iTLB miss rate reduces from approximately 0.09% to approximately 0.08%.
    
-   The iTLB MPKI rate decreases approximately sixfold.
    

PostgreSQL can also use huge pages to gain a 7% increase in performance.

## Padding

Padding is an optimization of the Hugetext feature. Padding is used to resolve the following issue: Optimal effects are not achieved because some code segments do not use huge pages after applications are loaded. These code segments are hotspots. The padding feature can be enabled only when the Hugetext feature is enabled For example, if huge pages cannot be used because the text segment at the end of a binary file is smaller than 2 MB in size and the text segment size exceeds the value of the `hugetext_pad_threshold` parameter, you can pad the text segment to 2 MB in size to allow the use of huge pages.

-   Enable padding
    
    Run the following command to enable padding by using the `sysfs` interface:
    
    ```
    sudo sh -c 'echo [0~2097151] >  /sys/kernel/mm/transparent_hugepage/hugetext_pad_threshold'
    ```
    
    **Note**
    
    We recommend that you set hugetext\_pad\_threshold to 4096 in the `sudo sh -c 'echo 4096 > /sys/kernel/mm/transparent_hugepage/hugetext_pad_threshold'` command.
    
    In most cases, application code segments are mapped to 2MB-aligned addresses, and the Hugetext feature helps optimize address alignment. However, the content that follows rw-p or r--p may not be 2MB aligned. As a result, content may not be padded as expected based on the value of `hugetext_pad_threshold`, and some code segments use 4KB pages. When you use the padding feature, we recommend that you 2MB align code segments and data segments. To 2MB align code or data segments, modify the default IDS file and add `. = ALIGN(0x200000);` before the code or data segments.
    
-   Disable padding
    
    Run the following command to disable padding by using the `sysfs` interface:
    
    ```
    sudo sh -c 'echo 0 >  /sys/kernel/mm/transparent_hugepage/hugetext_pad_threshold'
    ```
    

## Appendix: Glossary

The following table describes terms that are commonly used in the Hugetext feature.

**Term**

**Description**

huge page

Huge pages are also called huge-page memory. Memory is managed and allocated in blocks known as pages. Huge pages are memory pages that are larger than 4 KB in size, and can help improve the TLB utilization of hardware and performance.

Transparent Huge Pages

Transparent Huge Pages (THP) hide the complexity of using huge pages from your processes. THP starts kernel threads in the background to asynchronously scan the virtual memory area (VMA) of each process and consolidates VMAs into 2MB pages.

Hugetext

A feature that works similarly to THP to consolidate only code into huge pages to significantly improve performance.

iTLB miss

An iTLB miss occurs when no matching entry is found in the iTLB. If the iTLB miss rate is high, CPUs cannot run efficiently.

iTLB utilization

The utilization of the iTLB. System performance increases with iTLB utilization.

iTLB MPKI

The number of iTLB misses per thousand instructions (MPKI). A lower iTLB MPKI rate indicates higher system performance.

## **References**

Alibaba Cloud Linux can also use THP to improve memory access efficiency. THP can consolidate small pages (typically 4KB pages) into huge pages (typically pages that are 2 MB or larger in size) to reduce the number of page table entries (PTEs) and number of memory accesses. This way, the pressure on the TLB cache is reduced and application performance is improved. For more information, see [How do I use THP to tune performance on Alibaba Cloud Linux?](/help/en/alinux/support/performance-tuning-method-related-to-transparent-large-page-thp-in)
