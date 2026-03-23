This topic describes the cause of and solution to the issue that the Send-Q return value is 0 after an ss command is run on an Alibaba Cloud Linux 2 Elastic Compute Service (ECS) instance.

## Problem description

After you run the `ss -lnt` command on an ECS instance with the following configurations, the Send-Q parameter return value is 0:

-   Image version: `aliyun-2.1903-x64-20G-alibase-20190507.vhd` or earlier.
    
-   Kernel version: `4.19.43-13.al7.x86_64` or earlier. You can run the `uname -r` command to check the kernel version.
    

A command output similar to the following one is returned:

```
# ss -lnt
State       Recv-Q Send-Q                            Local Address:Port                                           Peer Address:Port
LISTEN      0      0                                             *:35107                                                     *:*
LISTEN      0      0                                             *:38727                                                     *:*
LISTEN      0      0                                             *:5355                                                      *:*
LISTEN      0      0                                             *:111                                                       *:*
```

In the `ss` command, the `Send-Q` parameter indicates the maximum size of the `syn backlog` for a listening TCP socket. In Linux, its return value is the maximum queue size for all connections on the `listening socket` and cannot be 0.

## Cause

The `tcp_diag` module is not integrated into kernel version `kernel-4.19.43-13.al7.x86_64` or earlier. As such, the `ss` command on the instance falls back to the [/proc/net/tcp](https://www.kernel.org/doc/Documentation/networking/proc_net_tcp.txt) mode. When this mode (not recommended) is used, the `tx_queue` value of the `listening TCP Socket` in the `ss -lnt` command output is `0`, causing the `Send-Q` return value to also be `0`.

## Solution

**Warning**

-   Kernel upgrades may cause compatibility and stability issues. We recommend familiarizing yourself with kernel features in [release notes for Alibaba Cloud Linux 2](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux2) and exercising caution when you upgrade the kernel version.
    
-   The restart operation stops the instance for a short period of time and may interrupt services that are running on the instance, resulting in data loss. Therefore, we recommend that you back up critical instance data before you restart the instance. We also recommend that you restart the instance during off-peak hours.
    

1.  Check for the `tcp_diag` module.
    
    ```
    sudo lsmod | grep tcp_diag
    ```
    
2.  Upgrade the kernel to the latest version.
    
    ```
    sudo yum update kernel
    ```
    
3.  Restart the instance for the new kernel version to take effect.
    
    ```
    sudo reboot
    ```
