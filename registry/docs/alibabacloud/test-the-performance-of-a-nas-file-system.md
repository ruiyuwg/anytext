This topic describes how to use the fio tool to test the throughput and input/output operations per second (IOPS) of a File Storage NAS (NAS) file system in Linux and Windows.

## Prerequisites

A file system is created and mounted on one or more Elastic Compute Service (ECS) instances. For more information, see [Get started with NAS](/help/en/nas/getting-started/get-started-with-nas#concept-2375778).

## Background information

The performance results in this topic are obtained from tests that are performed on Linux and Windows ECS instances by using the fio tool. These results are used as performance references for NAS file systems. To meet the performance metrics that are provided on the product page of NAS, we recommend that you use multiple ECS instances to conduct performance tests. For more information about the performance metrics, visit [the product page of NAS](https://www.alibabacloud.com/product/nas).

## Precautions

Before you conduct performance tests, take note of the following items:

-   The maximum throughput cannot exceed the internal bandwidth of ECS instances. If the internal bandwidth is low, the throughput is limited.
    
    For example, you have purchased a Capacity NAS file system with the lowest capacity and its initial read throughput is 150 MB/s. If the internal bandwidth of your ECS instances is 100 Mbit/s, the maximum throughput can reach 12.5 MB/s. To enable the throughput to reach 150 MB/s, you need at least 12 ECS instances for testing. If the internal bandwidth of your ECS instances is 1 Gbit/s, the maximum throughput can reach 125 MB/s. To enable the throughput to reach 150 MB/s, you need at least two ECS instances for testing.
    
-   By default, a maximum of 2 concurrent Network File System (NFS) requests can be sent from a Linux-based NFS client. This limits the performance of the NFS client. After you install an NFS client, change the maximum number of concurrent NFS requests to improve the performance of the NFS client. For more information, see [How do I change the maximum number of concurrent NFS requests from an NFS client?](/help/en/nas/user-guide/other-issues#section-o97-87k-mdw)
    
-   Window NFS clients can process requests from only one file system at a time. As a result, the test performance of an NFS file system in Windows may be inaccurate. We recommend that you modify the `-numjobs` parameter to increase the number of files that can be tested by the fio tool.
    

## Procedure

1.  Connect to the ECS instance. For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Install the fio tool. If the fio tool is installed, skip this step and run the performance test commands.
    
    -   Linux
        
        **Operating system**
        
        **Installation command**
        
        CentOS
        
        ```
        sudo yum install fio
        ```
        
        Redhat
        
        Alibaba Cloud Linux
        
        Ubuntu
        
        Run the following commands in sequence:
        
        1.  ```
            sudo apt-get  update
            ```
            
        2.  ```
            sudo apt-get install fio
            ```
            
        
        Debian
        
    -   Windows
        
        Download the installation package in MSI format. To download the fio installation package, visit the [fio official website](https://bsdio.com/fio/releases/).
        
3.  Run the performance test commands. For more information about the commands, see the following sections:
    
    -   [Performance test commands for Linux](#section-g4z-xwb-bhb)
        
    -   [Performance test commands for Windows](#section-u51-rxb-bhb)
        

## Performance test commands for Linux

This section uses a General-purpose NAS file system as an example. Run the following commands on a Linux ECS instance to test the performance.

-   Command used to test the random read IOPS:
    
    ```
    fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=4K -size=1G -time_based -runtime=60 -name=Fio -directory=/mnt
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5812712961/p684035.png)
    
-   Command used to test the random write IOPS:
    
    ```
    fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=4K -size=1G -time_based -runtime=60 -name=Fio -directory=/mnt
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684037.png)
    
-   Command used to test the random read throughput:
    
    ```
    fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=1M -size=1G -time_based -runtime=60 -name=Fio -directory=/mnt
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684042.png)
    
-   Command used to test the random write throughput:
    
    ```
    fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=1M -size=1G -time_based -runtime=60 -name=Fio -directory=/mnt
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684043.png)
    

## Performance test commands for Windows

In this example, a Capacity NAS file system is mounted on Disk `Z` and the fio tool is installed in the following location: `C:\Program Files\fio\fio.exe`. Run the following commands to conduct performance tests.

**Note**

Window NFS clients can process requests from only one file system at a time. As a result, the test performance of an NFS file system in Windows may be inaccurate. We recommend that you modify the `-numjobs` parameter to increase the number of files that can be tested by the fio tool.

-   Command used to test the random read IOPS:
    
    ```
    "c:\Program Files\fio\fio.exe" -name=Fio -numjobs=2 -iodepth=128 -direct=1 -ioengine=windowsaio -sync=1 -rw=randread -bs=4K -size=1G -time_based -runtime=60 -group_reporting -thread -directory=Z\:\
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684047.png)
    
-   Command used to test the random write IOPS:
    
    ```
    "c:\Program Files\fio\fio.exe" -name=Fio -numjobs=2 -iodepth=128 -direct=1 -ioengine=windowsaio -sync=1 -rw=randwrite -bs=4K -size=1G -time_based -runtime=60 -group_reporting -thread -directory=Z\:\
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684050.png)
    
-   Command used to test the random read throughput:
    
    ```
    "c:\Program Files\fio\fio.exe" -name=Fio -numjobs=2 -iodepth=128 -direct=1 -ioengine=windowsaio -sync=1 -rw=randread -bs=1M -size=1G -time_based -runtime=60 -group_reporting -thread -directory=Z\:\
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684049.png)
    
-   Command used to test the random write throughput:
    
    ```
    "c:\Program Files\fio\fio.exe" -name=Fio -numjobs=2 -iodepth=128 -direct=1 -ioengine=windowsaio -sync=1 -rw=randwrite -bs=1M -size=1G -time_based -runtime=60 -group_reporting -thread -directory=Z\:\
    ```
    
    Sample test result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812712961/p684048.png)
    

## fio parameters

The following table describes the parameters in the preceding fio commands.

**Parameter**

**Description**

direct

Specifies whether to use direct I/O. Default value: 1. Valid values:

-   1: uses direct I/O, ignores the I/O buffer, and directly writes data.
    
-   0: does not use direct I/O, ignore the I/O buffer, or directly write data.
    

iodepth

The I/O queue depth during the test. For example, `-iodepth=1` indicates that the maximum number of I/O operations in a fio control request is 1.

rw

The read/write policy that is used during the test. Valid values:

-   randwrite: random writes
    
-   randread: random reads
    
-   read: sequential reads
    
-   write: sequential writes
    
-   randrw: random reads and writes
    

ioengine

The I/O engine that fio uses for the test. In most cases, libaio is used. For information about other available I/O engines, see the fio documentation.

bs

The block size of I/O units. Values for reads and writes can be specified in the <Value for reads>,<value for writes> format. If you do not specify a value, the default value is used.

size

The size of the test files.

fio ends the test only after the specified size of the files is read or written, unless limited by specific factors, such as runtime. If this parameter is not specified, fio uses the size of all given files or devices. The valid values can also be a percent that ranges from 1% to 100%. For example, if the size parameter is set to 20%, fio uses 20% of the size of all given files or devices.

numjobs

The number of concurrent threads that are used during the test.

runtime

The duration of the test, which indicates the period of time for which fio runs.

If this parameter is not specified, the test does not end until the files whose size is specified by the size parameter are read or written in the block size specified by the bs parameter.

group\_reporting

The display mode of the test results.

If this parameter is specified, per-process statistics instead of per-task statistics are displayed.

directory

The mount directory of the file system to be tested.

name

The name of the test. You can specify the parameter based on your needs.

For more information about the parameters, see [fio(1) - Linux man page](https://linux.die.net/man/1/fio).

## **FAQ**

-   [How do I increase the read and write throughput threshold of a General-purpose NAS file system?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#section-m18-fnf-dlo)
    
-   [How do I increase the throughput of accessing NAS on Linux?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#section-urf-b97-l23)
    
-   [Why does an SMB file system have I/O latency?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#section-ajo-r9h-gsi)
    
-   [Why does a file system give a slow response or does not respond when I run the ls command?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#section-lqd-1h8-704)
    
-   [How do I improve the NFS sequential read performance on Linux kernel 5.4 or later?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#1719283cd1riw)
    

For more information about NAS performance, see [FAQ about the performance of NAS file systems](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems).
