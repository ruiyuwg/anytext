This topic describes the cause of the following issue and how to resolve the issue: In specific scenarios, an operation does not have sufficient read permissions on the files or directories in the OverlayFS file system. As a result, the operation fails on an Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 instance.

## Problem description

When you attempt to open a file in read-only mode or run the touch command to trigger a copy-up process on an Alibaba Cloud Linux instance that is formatted with the OverlayFS file system, an error message is returned. The copy-up process involves copying files from the lower directory to the upper directory. We recommend that you run the following commands to identify the cause of the issue:

```
mkdir -p /root/test/lower/dir /root/test/upper /root/test/work /root/test/mount
chmod 0737 /root/test/lower/dir
chown root:bin /root/test/lower/dir
mount -t overlay -o lowerdir=/root/test/lower,upperdir=/root/test/upper,workdir=/root/test/work overlay /root/test/mount
cd /root/test && sudo -u bin -g bin touch mount/dir/RANDOM
```

If the following error message is returned after you run the preceding commands, you do not have insufficient read permissions (-wx) on the files or directories in the OverlayFS file system.

```
touch: cannot touch 'mount/dir/RANDOM': Permission denied
```

If your instance meets the following conditions, the issue may occur:

-   The instance uses one of the kernel versions that are described in the following table.
    
    **Operating system**
    
    **Image**
    
    **Kernel version**
    
    Alibaba Cloud Linux 2
    
    Alibaba Cloud Linux 2.1903 LTS 64-bit
    
    4.19.91-27 to 4.19.91-27.4,
    
    including 4.19.91-27.al7, 4.19.91-27.1.al7, 4.19.91-27.2.al7, 4.19.91-27.3.al7, and 4.19.91-27.4.al7
    
    Alibaba Cloud Linux 3
    
    Alibaba Cloud Linux 3.2104 LTS 64-bit
    
    5.10.134-13 to 5.10.134-14.1,
    
    including 5.10.134-13.al8, 5.10.134-13.1.al8, 5.10.134-14.al8, and 5.10.134-14.1.al8
    
-   In the OverlayFS file system, the upper and lower directories are located in the same file system.
    
-   A process that attempts to write to a file triggers a copy-up process. However, the process does not have the read permissions on the files or directories in the lower directory.
    

## Cause

In an OverlayFS file system, the upper and lower directories are located in the same file system. A process does not have the read permissions on the files or directories that the process wants to access. As a result, the ovl\_override\_creds() function cannot be executed. The process that attempts to copy the files or directories from the lower directory to the upper directory does not have the permissions to mount the OverlayFS file system. An error message that indicates insufficient read permissions is returned.

## Solution

1.  Connect to the instance.
    
    For more information, see [Connect to a Linux instance by using a password or key](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to check the kernel version:
    
    ```
    uname -r
    ```
    
    Sample command outputs:
    
    -   Command output for Alibaba Cloud Linux 2
        
        ```
        4.19.91-27.al7.x86_64
        ```
        
    -   Command output for Alibaba Cloud Linux 3
        
        ```
        5.10.134-13.1.al8.x86_64
        ```
        
3.  Run the following commands to resolve the issue.
    
    -   Install kernel hotfixes to resolve the issue.
        
        -   For Alibaba Cloud Linux 3 versions 5.10.134-13.al8, 5.10.134-13.1.al8, 5.10.134-14.al8, and 5.10.134-14.1.al8, install the following hotfix:
            
            ```
            yum install -y kernel-hotfix-13108708-5.10.134-13.1
            ```
            
        -   For Alibaba Cloud Linux 2 versions 4.19.91-27.al7, 4.19.91-27.1.al7, 4.19.91-27.2.al7, 4.19.91-27.3.al7, and 4.19.91-27.4.al7, install the following hotfix:
            
            ```
            yum install -y kernel-hotfix-13110805-4.19.91-27
            ```
            
    -   Upgrade kernel versions to resolve the issue.
        
        ```
        yum upgrade kernel
        ```
        
        -   For Alibaba Cloud Linux 3, upgrade the version to 5.10.134-15.al8 or later.
            
        -   For Alibaba Cloud Linux 2, upgrade the version to 4.19.91-28.al7 or later.
            
4.  Run the following commands to check whether the issue is resolved:
    
    ```
    mkdir -p /root/test/lower/dir /root/test/upper /root/test/work /root/test/mount
    chmod 0737 /root/test/lower/dir
    chown root:bin /root/test/lower/dir
    mount -t overlay -o lowerdir=/root/test/lower,upperdir=/root/test/upper,workdir=/root/test/work overlay /root/test/mount
    cd /root/test && sudo -u bin -g bin touch mount/dir/RANDOM
    ```
    
    If no error message is returned, it indicates that the issue is resolved.
