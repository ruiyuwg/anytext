The `atop` tool provides real-time insights into your system's status through an interactive interface. It can also run as a background service to record snapshots of system and process activity at a specified frequency. These snapshots are saved as binary logs to help you trace and diagnose system problems.

## Install atop

1.  [Log on to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Install atop.
    
    ### **Alibaba Cloud Linux 2/3, CentOS 7/8, or Fedora**
    
    ```
    # Update packages.
    sudo yum update -y
    
    # Install atop.
    sudo yum install atop -y
    ```
    
    ### **Ubuntu or Debian**
    
    ```
    # Update packages.
    sudo apt update -y
    
    # Install atop.
    sudo apt install atop -y
    ```
    
    ### **CentOS Stream 9 or Rocky Linux 9**
    
    ```
    # Update packages.
    sudo dnf update -y
    
    # Install the EPEL repository.
    sudo dnf install epel-release -y
    
    # Install atop.
    sudo dnf install atop -y
    ```
    
    ### **openSUSE**
    
    ```
    # Update packages.
    sudo zypper update -y
    
    # Install atop.
    sudo zypper install atop atop-daemon -y
    ```
    
3.  Start the atop service.
    
    ```
    sudo systemctl start atop
    ```
    
4.  Verify that the atop service started successfully.
    
    Run `sudo systemctl status atop` to check the service status. The `active (running)` status indicates success.
    

## View real-time metrics with atop

1.  Run the `atop [sampling_interval_in_seconds] [number_of_samples]` command to enter interactive mode. The command output contains two sections: the section of system resource overview and the section of process details.
    
    ```
    # View with default settings (refreshes every 10 seconds).
    atop
    
    # View system metrics every 5 seconds.
    atop 5
    
    # Collect system metrics 30 times at 10-second intervals.
    atop 10 30
    
    # Collect metrics 10 times at 30-second intervals and write the results to a file.
    atop 30 10 > /tmp/atop.mem
    ```
    
    -   [System resource overview](#998b09feaegcb): This section summarizes CPU, memory, swap space, disk I/O, and network resource usage.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1111060671/p1013903.png)
        
    -   [Process-level details](#aaf1e0019cbee): This section shows resource consumption for each process.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1111060671/p1013904.png)
        
2.  In interactive mode, use single-letter keys to switch views or sort processes.
    
    **Key**
    
    **Function**
    
    **Purpose**
    
    c
    
    Display the full command line
    
    View the specific parameters used to start a process.
    
    g
    
    Generic view (default)
    
    View a summary of CPU, memory growth, and disk I/O.
    
    m/M
    
    Memory view/Sort by memory
    
    Analyze memory usage and page faults. Troubleshoot memory leaks.
    
    d/D
    
    Disk view/Sort by disk
    
    Analyze disk I/O. Identify processes with high disk read/write activity.
    
    n/N
    
    Network view/Sort by network (requires you to [install and load the netatop kernel module](#b34588453b991))
    
    Analyze network traffic. Identify processes with high network traffic.
    
    a
    
    Aggregation view
    
    Aggregate the resource consumption of all threads or processes of a program.
    
    C
    
    Sort by CPU
    
    Quickly identify the processes that consume the most CPU.
    
    h
    
    Show help
    
    View more keyboard shortcuts.
    
    q
    
    Quit
    
    Exit interactive mode.
    

## View historical metrics with atop

After the atop service starts, it periodically generates binary log files in the `/var/log/atop/` directory. The files are named in the `atop_YYYYMMDD` format.

> `atop` logs are binary files. Opening them with a text editor like `cat`, `less`, or `vim` displays unreadable characters.

### Read historical logs

1.  Read a historical log file.
    
    Use the `atop -r <log_file>` command to load a specific log file.
    
    ```
    # View today's log. atop automatically finds the log file for the current day.
    atop -r
    
    # View the log for a specific date.
    atop -r /var/log/atop/atop_YYYYMMDD
    ```
    
2.  Navigate to a specific point in time within the log.
    
    When you load a log file, the interface shows the first snapshot from that file.
    
    1.  Press `t` to jump forward to the next snapshot.
        
    2.  Press `T` (uppercase) to jump backward to the previous snapshot.
        
    3.  Press `b` and enter a time in `HH:MM` format to jump directly to that time.
        

### Optimize atop logging behavior

When analyzing historical logs, you may find that the default logging frequency (once every 10 minutes) is too broad for certain issues, or the default 28-day retention period does not meet your needs. You can adjust atop's background logging frequency, retention period, and storage path by modifying its configuration file.

1.  Open the configuration file using `vim` or another text editor.
    
    -   For RHEL and its derivatives (Alibaba Cloud Linux, CentOS, Fedora, and Rocky Linux):
        
        ```
        sudo vim /etc/sysconfig/atop
        ```
        
    -   For Debian and its derivatives (Ubuntu and Debian) and openSUSE:
        
        ```
        sudo vim /etc/default/atop
        ```
        
2.  The default configuration file contains the following content:
    
    ```
    LOGOPTS=""
    LOGINTERVAL=600
    LOGGENERATIONS=28
    LOGPATH=/var/log/atop
    ```
    
    -   `LOGOPTS`: Additional logging options. For example, setting `-L` creates a symbolic link at `/var/log/atop/atop_current` that points to the latest log file for quick access during log rotation.
        
    -   `LOGINTERVAL`: The sampling interval for logging, in seconds. The default is `600` (10 minutes), meaning `atop` records a system snapshot every 10 minutes.
        
    -   `LOGGENERATIONS`:The lifecycle of log files, in days. The default is `28`, meaning `atop` deletes log files older than 28 days.
        
    -   `LOGPATH`: The storage path for log files. The default is `/var/log/atop`.
        
        > To change this path, ensure the new directory exists and the atop process has write permissions to it.
        
3.  Restart the `atop` service to apply your changes.
    
    ```
    sudo systemctl restart atop
    ```
    

## Generate metric reports

`atopsar` is a non-interactive command-line tool included in the atop package. It extracts data from atop's binary log files to generate system performance reports.

#### Examples

-   Generate a report on CPU utilization metrics for the current system over a 1-minute period (12 samples at 5-second intervals).
    
    ```
    atopsar -c 5 12
    ```
    
-   Generate a report on memory metrics for a specific time range on the current day.
    
    ```
    # View the memory metric report for today from 18:00 to 18:01.
    atopsar -m -b 18:00 -e 18:01
    ```
    
-   Generate a report on memory metrics for a specific time range on a specific date.
    
    ```
    # View the memory metric report for August 15, 2025, from 18:00 to 18:01.
    atopsar -m -r /var/log/atop/atop_20250815 -b 18:00 -e 18:01
    ```
    

#### atopsar command syntax

```
atopsar [options] [interval] [count]
```

-   **\[options\]**: Flags to specify the report type, such as `-c` (CPU), `-m` (memory), and `-d` (disk).
    
-   **\[interval\]**: The time interval for the report output, in seconds.
    
-   **\[count\]**: The number of times the report is generated.
    

## Understand the metric**s**

### System resource overview

**Metric Category**

**Metric**

**Description**

**Unit**

**ATOP**

Hostname, Date

Shows the current hostname, sampling date, and time.

\-

Sampling interval

Shows the time interval between two samples.

Seconds

**PRC (Process totals)**

`sys`

The total CPU time consumed by all processes in kernel mode during the sampling interval.

Seconds

`user`

The total CPU time consumed by all processes in user mode during the sampling interval.

Seconds

`#proc`

The total number of processes in the system.

Unit

`#trun`

The average number of threads in the running state.

Unit

`#tslpi`

The number of threads in an interruptible sleep state.

Item

`#tslpu`

The number of threads in an uninterruptible sleep state.

Unit

`#zombie`

The number of zombie processes.

Unit

`clones`

The number of new processes or threads created by the clone system call during the sampling interval.

Count/second

`#exit`

The number of processes that exited during the sampling interval.

Count/second

**CPU/cpu (Total/Per core)**

`sys%`

The percentage of time the CPU spent in kernel mode.

%

`user%`

The percentage of time the CPU spent in user mode.

%

`irq%`

The percentage of time the CPU spent handling hardware interrupts (irq) and software interrupts (softirq).

%

`idle%`

The percentage of time the CPU was completely idle.

%

`wait%`

The percentage of time the CPU was idle while waiting for disk I/O to complete.

%

`steal%`

The percentage of time a virtual CPU waited for a physical CPU (time stolen by the host or other VMs).

%

`guest%`

The percentage of CPU time spent running a virtual machine.

%

`freq%`

The average running frequency of the CPU as a percentage of its maximum frequency.

%

**CPL (CPU load)**

`avg1`/`avg5`/`avg15`

The system average load over the last 1 minute, 5 minutes, and 15 minutes.

\-

`csw`

The number of context switches during the sampling interval.

Count/second

`intr`

The total number of interrupts that occurred during the sampling interval.

Count/second

**MEM (Physical memory)**

`tot`

The total amount of physical memory in the system.

GiB/MiB

`free`

The amount of completely unused free memory.

GiB/MiB

`cache`

The amount of memory used as page cache for caching file data.

GiB/MiB

`dirty`

The amount of dirty pages in the page cache that have been modified but not yet written to disk.

MiB

`buff`

The amount of memory used as buffer cache for caching block device metadata.

MiB

`slab`

The amount of memory used by the kernel for its own data structures (slab allocator).

MiB

`shmem`

The size of shared memory, including tmpfs.

MiB

`vmbal`

(32-bit systems only) The amount of balanced memory for virtual memory areas.

MiB

**SWP (Swap partition)**

`tot`

The total size of the swap partition.

GiB/MiB

`free`

The size of the free swap partition.

GiB/MiB

`swcac`

The amount of memory that has been swapped out but is also cached.

MiB

`vmcom`

The total amount of virtual memory committed by applications.

GiB/MiB

`vmlim`

The limit on the amount of virtual memory that can be committed.

GiB/MiB

**PAG (Paging activity)**

`scan`

The number of pages scanned by the kernel to reclaim memory during the sampling interval.

Pages/second

`steal`

The number of pages successfully reclaimed by the kernel after scanning.

Pages/second

`stall`

The number of times the kernel stalled to wait for page reclamation because of insufficient memory.

Count/second

`swin`

The number of pages swapped in from the swap partition to physical memory.

Pages/second

`swout`

The number of pages swapped out from physical memory to the swap partition.

Pages/second

**DSK (Disk)**

**LVM (Logical Volume)**

`busy`

The percentage of time the disk was busy. A value of 100% indicates that the disk is saturated.

%

`read`/`write`

The number of read/write requests completed during the sampling interval.

Count/second

`KiB/r`/`KiB/w`

The average data size per read/write request.

KB

`Msec/r`/`Msec/w`

The average time per read/write request, including queuing and service time.

Milliseconds

`avio`

The average service time for an I/O request, excluding queuing time.

Milliseconds

**NET (Network)**

`transport`

Packet statistics for the TCP and UDP layers.

Packets/second

`network`

Packet statistics for the IP layer, including received, sent, and forwarded packets.

Packets/second

`*if*`

Shows the activity for each network interface.

\-

`pcki`/`pcko`

The number of data packets received/sent by the interface.

Packets/second

`spdi`/`spdo`

The speed at which the interface receives/sends data.

Mbps

`erri`/`erro`

The number of errors that occurred during receiving/sending on the interface.

Count/second

`drpi`/`drpo`

The number of data packets dropped during receiving/sending on the interface.

Count/second

### Process-level details

**View**

**Metric**

**Description**

**Unit**

**Generic view (default)**

`PID`

Process ID. A unique process identifier in the system.

\-

`S`

Process status. R-running, S-interruptible sleep, D-uninterruptible sleep, Z-zombie, E-exited.

\-

`CPU%`

CPU utilization.

%

`MEM%`

Memory usage.

%

`THR`

Number of threads.

Unit

`PAG`

Major page faults. The number of times the process needed to read data from disk into memory. This is a measure of disk I/O pressure.

Count/second

`CMD`

Command name. The executable file name of the process. Press the c key to show the full command line.

\-

**Memory view**

`VSIZE`

Virtual memory size. The total size of the virtual address space requested by the process.

KiB/MiB/GiB

`RSIZE`

Resident set size. The actual amount of physical memory currently occupied by the process.

KiB/MiB/GiB

`SHR`

Shared memory size.

KiB/MiB/GiB

`RGROW`

Resident memory growth. A positive number indicates that memory consumption is increasing. A negative number indicates that it is decreasing.

KiB

`VGROW`

Virtual memory growth.

KiB

**Disk view**

`DSK%`

Disk activity percentage. The percentage of total disk busy time that is caused by the process's disk I/O.

%

`RDDSK`/`WRDSK`

Disk data read/written.

KiB/MB

`WCANCL`

Canceled write amount. The amount of data that a process wrote to the page cache but was deleted before being synced to the disk.

KiB/MB

**Network view**

`NET%`

Network activity percentage. The percentage of total network traffic from all processes that is generated by this process.

%

`TCPSND`/`TCPRCV`

TCP data sent/received.

KiB/MB

`UDPSND`/`UDPRCV`

UDP data sent/received.

KiB/MB

## Apply in production

-   **Disk space planning**: The size of `atop` logs depends on the collection frequency, the number of system processes, and the retention period. To estimate the required space, check the size of a single log file with the `ls -lh /var/log/atop/` command and then multiply that size by the value of `LOGGENERATIONS`.
    
-   **Monitoring interval**: For scenarios that require more granular analysis, you can change the `LOGINTERVAL` in the default configuration to 30 seconds. However, be aware that shortening the interval increases disk I/O and the CPU overhead of the `atop` process. Adjust this value based on your instance's workload.
    

## FAQ

1.  #### Why do I get the error `stat raw file: No such file or directory` when running `atop -r`?
    
    This error means `atop` cannot find the log file for the specified date. Possible reasons include:
    
    1.  The `atop` service was not running on the specified date.
        
    2.  The log file was deleted due to the log rotation policy (the retention period set by `LOGGENERATIONS` was exceeded).
        
    3.  You are querying a future date.
        
        Check the `/var/log/atop` directory for a list of available log files.
        
2.  #### How can I reduce `atop`'s disk space usage?
    
    You can reduce disk space usage by modifying the configuration file. Remember to restart the `atop` service after making changes.
    
    1.  **Reduce the log retention period**: Lower the value of `LOGGENERATIONS` in the configuration file, for example, from `28` to `14`.
        
    2.  **Decrease the collection frequency**: Increase the value of `LOGINTERVAL` in the configuration file, for example, from `600` to `1200`.
        
3.  #### Why can't I see per-process network traffic when I press the `n` key in atop's interactive mode?
    
    By default, `atop` does not track per-process network traffic. To enable this, you must install and load the `netatop` kernel module.
    
    1.  Install the kernel development package and required compilation tools.
        
        ```
        sudo yum install -y kernel-devel dkms elfutils-libelf-devel
        ```
        
    2.  Download the netatop source code to the specified directory.
        
        ```
        cd /usr/src/ && sudo wget https://www.atoptool.nl/download/netatop-3.2.2.tar.gz
        ```
        
    3.  Decompress the source code and navigate into the source directory.
        
        ```
        sudo tar -zxvf netatop-3.2.2.tar.gz && cd netatop-3.2.2
        ```
        
    4.  Build and install the module and daemon from the source code.
        
        ```
        sudo make && sudo make install
        ```
        
    5.  Start the `netatop` service.
        
        ```
        sudo systemctl start netatop
        ```
        
    6.  Verify that `netatop` was installed successfully.
        
        Run `atop` and press `n`. If the process details list includes a `NET` column, the installation was successful.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1111060671/p1007890.png)
