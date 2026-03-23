## Problem description

Overlayfs fails to be attached to the ECS instance. The ECS instances with this problem have the following characteristics:

-   Image: all Alibaba Cloud Linux 2 image versions.
-   Kernel: all Alibaba Cloud Linux 2 Kernel in the Cloud.
-   Run the `dmesg` command. The Kernel Log displays a error log of:
    -   kernel-4.19.67-16.al7 earlier.
        
        overlayfs: lowerdir is in-use as upperdir/workdir  
          
        overlayfs: lowerdir path overlapping in-use upperdir/workdir  
          
        overlayfs: upperdir is in-use by another mount, mount with '-o index=off' to override exclusive upperdir protection.  
          
        overlayfs: workdir is in-use by another mount, mount with '-o index=off' to override exclusive workdir protection.  
          
          
          
          
          
        

-   -   kernel-4.19.67-16.al7 and later versions.
        
        overlayfs: lowerdir is in-use as upperdir/workdir of another mount, mount with '-o index=off' to override exclusive upperdir protection.  
          
        overlayfs: workdir is in-use as upperdir/workdir of another mount, mount with '-o index=off' to override exclusive upperdir protection.  
          
        overlayfs: upperdir is in-use as upperdir/workdir of another mount, mount with '-o index=off' to override exclusive upperdir protection.  
          
          
          
        

## Cause

The Mount parameter lowerdir, upperdir, or workdir of Overlayfs cannot be both the upperdir or workdir of the other mount point. Otherwise, an unknown risk may occur. That is, when the kernel detects any of the preceding problems during the mounting process, the `-etraffic` error is returned and the error log is printed.

## Solution

> Alibaba Cloud reminds you that:
> 
> -   Before you perform operations that may cause risks, such as modifying instance configurations or data, we recommend that you check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
> -   You can modify the configurations and data of instances including but not limited to Elastic Compute Service (ECS) and Relational Database Service (RDS) instances. Before the modification, we recommend that you create snapshots or enable RDS log backup.
> -   If you have authorized or submitted sensitive information such as the logon account and password in the Alibaba Cloud Management Console, we recommend that you modify such information in a timely manner.

### Temporary solution

> **Notes**:
> 
> -   Using this temporary solution is an unknown risk. Evaluate carefully before using it.
> -   The Overlayfs is mainly used in container service. Multiple mount points in container service always share the same upperdir or workdir. However, you can disable the `index` feature (specifying the `index=off` parameter) to avoid this issue.

1.  Check the error message for the kernel version.
    -   kernel-4.19.67-16.al7 earlier.  
        After running the `dmesg` command, if any of the following error log occurs, refer to the next step to troubleshoot the issue.  
        
        > **Note**: this solution cannot solve the problem if the other two errors occur.
        
        overlayfs: upperdir is in-use by another mount, mount with '-o index=off' to override exclusive upperdir protection.  
          
        overlayfs: workdir is in-use by another mount, mount with '-o index=off' to override exclusive workdir protection.  
          
        
          
          
        
    -   kernel-4.19.67-16.al7 and later versions.  
        You can perform the following steps to process kernel-4.19.67-16.al7 of error log and later versions.  
        
2.  If you run the command to mount the Overlayfs file system and specify the `index=off` Mount parameter, the Overlayfs file can be mounted to avoid the above errors. At this time, the kernel will print one of the following logs.
    
    overlayfs: lowerdir is in-use as upperdir/workdir of another mount, accessing files from both mounts will result in undefined behavior.  
      
    overlayfs: upperdir is in-use as upperdir/workdir of another mount, accessing files from both mounts will result in undefined behavior.  
      
    overlayfs: workdir is in-use as upperdir/workdir of another mount, accessing files from both mounts will result in undefined behavior.  
      
      
      
    

### Fundamental solution

1.  Before you mount an Overlayfs file system, you must run the `mount` command to view the parameters, including lowerdir, upperdir, and workdir for each mount point. The Command output is as follows:
    
    overlay on /.../merged type overlay (rw,relatime,lowerdir=...,upperdir=...,workdir=...)
    
2.  Make sure that the lowerdir, upperdir, or workdir directory that you want to mount is not the same as the upperdir or workdir parameter of the other mount point.

## Application scope

-   Elastic Compute Service
