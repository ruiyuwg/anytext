If the systemd service cannot run normally in your Alibaba Cloud Linux 2 operating system, you can troubleshoot the problem based on the solution described in this topic.

## Problem description

On an Elastic Compute Service (ECS) instance that meets the following conditions and is running normally, services deployed on the instance may fail to start:

-   The instance uses the Alibaba Cloud Linux 2.1903 LTS 64-bit public image.
-   The systemd version is systemd-219-78.4.al7 or earlier.

If this occurs, the systemd process may be unable to run normally or the system may generate the following log information:

Failed to activate service 'org.freedesktop.systemd1': timed out

After you run the systemctl daemon-reexec command, the problem persists. After you run the pstack 1 command, you can find that the systemd service is involved in the process shown in the following figure. ![pstack 1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6970821461/p366169.png)

## Cause

The open source systemd service has a vulnerability that may corrupt heap memory and causes the systemd process to `unexpectedly exit`. When the systemd process `unexpectedly exits`, it `freezes` and cannot be recovered.

**Note** The latest version of open source systemd also suffers from this problem, and the root cause of heap memory corruption cannot be identified. systemd is optimized in the latest Alibaba Cloud Linux public images. If your systemd version is later than systemd-219-78.4.al7 and still experiences this problem, you can run the kill -15 1 command to recover the systemd service.

## Solution

**Note** Before you perform troubleshooting, we recommend that you create snapshots for your ECS instance to back up data. If data is lost during troubleshooting, you can use the snapshots to restore disk data. For more information about the snapshot feature, see [Snapshot overview](/help/en/ecs/user-guide/snapshot-overview#concept-qft-2zw-ydb "The Alibaba Cloud snapshot service is an agentless backup service that allows you to create crash-consistent snapshots for all disk categories to back up or restore an entire disk. Crash-consistent snapshots are an effective solution to disaster recovery and can be used to back up data, create images, and implement disaster recovery for applications.").

1.  Connect to the ECS instance.
    
    For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb "You can use a variety of methods to connect to an Elastic Compute Service (ECS) instance,such as Virtual Network Computing (VNC) and third-party client tools. Choose a method to connect to your instance based on the operating system of your instance, the operating system of your device, and the operations that you want to perform.").
    
2.  Run the following command to check the systemd version:
    
    ```
     rpm -q systemd
    ```
    
    A command output similar to the following one is returned:
    
    ```
     systemd-219-78.4.al7.3.x86_64
    ```
    
3.  Perform the following operations to solve the problem based on the systemd version.
    
    -   If your systemd version is systemd-219-78.4.al7.3.x86\_64 or earlier, perform the following steps in sequence:
        1.  Run the following command to upgrade the systemd service:
            
            ```
            yum update systemd
            ```
            
        2.  Run the following command to restart the ECS instance:
            
            ```
            reboot
            ```
            
    -   If your systemd version is later than systemd-219-78.4.al7.3.x86\_64 and still experiences this problem, run the following command to recover the systemd service:
        
        ```
        kill -15 1
        ```
