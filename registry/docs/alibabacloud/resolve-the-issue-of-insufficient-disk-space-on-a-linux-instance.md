As applications and services run on a Linux instance, they generate files such as logs, caches, and business data. Over time, these files can consume all available disk space. When the disk is full, new data cannot be written, causing service interruptions or malfunctions.

## Symptoms

When you create a file or run an application on your Linux instance, you receive a `No space left on device` error. This indicates that your disk space is exhausted.

## Causes and solutions

**Important**

Before you begin, [create a snapshot](/help/en/ecs/user-guide/create-a-snapshot) to back up your data to prevent accidental data loss.

### Cause 1: Disk space is exhausted

1.  Check the disk usage.
    
    Run `sudo df -h` to view the disk usage for each mount point. If the `Use%` column shows 100%, the corresponding disk space is full.
    
2.  Clean up unnecessary files or directories.
    
    Use the command `sudo du -sh <directory_name>/*` to check the size of files and subdirectories within a specified directory. If necessary, navigate into the directory to examine space consumption at each level.
    
    > For example, run `sudo du -sh /mnt/*` to check the size of files and subdirectories in the `/mnt` directory.
    
3.  If disk space is still insufficient after the cleanup, you can [resize the disk](/help/en/ecs/user-guide/resize-linux-cloud-disks).
    

### Cause 2: Inode resources are exhausted

Each file occupies one inode. A disk with many small files can exhaust its inodes even with available disk space, preventing you from creating new files.

1.  Check the inode usage.
    
    Run the `sudo df -i` command. If the `IUse%` column is at 100%, all inode resources are exhausted.
    
2.  Clean up unnecessary files or directories.
    
    Run the `sudo du -sh --inodes <folder_name>/*` command to check the number of inodes used by files and subdirectories in a specific directory. If needed, you can navigate into the directory and use this command to check inode usage at each level.
    
    > For example, run `sudo du -sh --inodes /mnt/*` to check the number of inodes occupied by files and subdirectories in the `/mnt` directory.
    
3.  If you still have an insufficient number of inodes after cleaning up files, you can [resize the disk](/help/en/ecs/user-guide/resize-linux-cloud-disks).
    

### Cause 3: Disk space is occupied by deleted files still in use

Even when a file is deleted, the system will not release the disk space it occupies as long as a process is still using it (that is, holding its file descriptor). The space is only reclaimed after the process terminates or closes the file.

1.  Install the `lsof` tool.
    
    > The `df` and `du` commands cannot identify deleted files that are still occupying space. Use the `lsof` tool to list them.
    
    #### **Alibaba Cloud Linux and CentOS**
    
    ```
    sudo yum install -y lsof
    ```
    
    #### **Debian and Ubuntu**
    
    ```
    sudo apt install -y lsof
    ```
    
2.  View the storage space held by deleted files.
    
    ```
    sudo lsof | grep delete | sort -k7 -rn | more
    ```
    
    The seventh column in the output shows the file size in bytes. You can sum these values to calculate the total unreleased space.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4017058571/p1007181.png)
    
3.  Note the process name and PID.
    
    Run `sudo lsof | grep delete` and note the process name and PID in the `COMMAND` and `PID` columns.
    
4.  Restart or stop the related service.
    
    Run `sudo ps -ef | grep <PID>` to confirm the process's purpose, and then restart or stop the service after assessing the impact.
    
    **Important**
    
    Restarting or stopping a service can affect your business. Assess the risks carefully and perform this action during a suitable maintenance window.
    

### Cause 4: A mount point is obscured by another mount

When a device is mounted to a non-empty directory, this hides the original contents of that directory. However, processes that had the directory open can still write data to it. This "hidden" space consumption cannot be detected by the `df` command and can lead to unexpected disk space exhaustion.

1.  Check for duplicate mount points.
    
    Run `sudo lsblk` and examine the `MOUNTPOINT` column. Note any directory name used as a `MOUNTPOINT` for multiple devices.
    
    ```
    sudo lsblk
    ```
    
    ```
    NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    vda    253:0    0   40G  0 disk 
    ├─vda1 253:1    0    2M  0 part 
    ├─vda2 253:2    0  200M  0 part /boot/efi
    └─vda3 253:3    0 39.8G  0 part /
    vdb    253:16   0   40G  0 disk 
    └─vdb1 253:17   0   40G  0 part /mnt
    vdc    253:32   0   40G  0 disk 
    └─vdc1 253:33   0   40G  0 part /mnt
    ```
    
    In this example, partitions `vdb1` and `vdc1` are both mounted to `/mnt`, creating a risk of an obscured mount point.
    
2.  Unmount the file system.
    
    **Important**
    
    Unmounting a file system may disrupt services that depend on that path. Assess the risk and perform this operation during a suitable maintenance window.
    
    You can get `<duplicate_mount_point>` from the [previous step](#4565bb9b9914x).
    
    ```
    sudo umount <duplicate_mount_point>
    ```
    
    > In the example, `/mnt` is the duplicate mount point. Running `sudo umount /mnt` unmounts the last mounted device, `vdc1`.
    
3.  Identify the device of the underlying mount point.
    
    Run `sudo df -h` to locate the device name of the currently visible mount point.
    
    ```
    sudo df -h
    ```
    
    ```
    Filesystem      Size  Used Avail Use% Mounted on
    devtmpfs        3.7G     0  3.7G   0% /dev
    tmpfs           3.7G     0  3.7G   0% /dev/shm
    tmpfs           3.7G  524K  3.7G   1% /run
    tmpfs           3.7G     0  3.7G   0% /sys/fs/cgroup
    /dev/vda3        40G  4.5G   33G  12% /
    /dev/vda2       200M  5.8M  194M   3% /boot/efi
    /dev/vdb1        40G   40G     0  100% /mnt
    tmpfs           747M     0  747M   0% /run/user/0
    ```
    
    In this example, the device now mounted at `/mnt` is `/dev/vdb1`.
    
4.  Resolve the full disk space issue.
    
    1.  Clean up unnecessary files or directories from the previously obscured space.
        
        > In this example, you need to clean up the `/mnt` directory mounted from `vdb1`.
        
    2.  If space is still insufficient after cleanup, [resize the disk](/help/en/ecs/user-guide/resize-linux-cloud-disks) and then mount it to a different, empty directory.
        
        > In this example, the target device to resize would be `vdb1`.
        

**Important**

**Do not mount multiple devices to the same directory.**

Mounting multiple devices to the same directory hides the space of the earlier mounts and can cause data to be written to the wrong device. To avoid this issue, always mount each device to a unique, empty directory.

### Cause 5: Docker files consume a large amount of disk space

Docker's operation can generate many intermediate images, stopped containers, and build caches. Over time, these objects accumulate and consume disk space.

1.  Check the disk space usage of Docker files.
    
    Run the `sudo df -h` command. If the `Use%` for a `Filesystem` of `overlay` reaches 100%, this indicates Docker is consuming the space.
    
2.  Determine which Docker resources are using space.
    
    Run the `sudo docker system df` command. Check the `Size` and `RECLAIMABLE` columns to identify space consumption.
    
    ```
    sudo docker system df
    ```
    
    ```
    TYPE            TOTAL      ACTIVE     SIZE       RECLAIMABLE
    Images          21         9          13.94GB    10.66GB (76%)
    Containers      9          5          30.09MB    0B (0%)
    Local volumes   6          6          259.9MB    0B (0%)
    Build Cache     0          0          0B         0B
    ```
    
    In this example, `Docker` images use 13.94 GB, of which 10.66 GB is reclaimable. It is recommended to prioritize cleaning up unused images.
    
3.  Clean up unnecessary files.
    
    > If you cannot clean up Docker files, try resolving the issue by following the steps in [Cause 1: Disk space is exhausted](#c9cc21676ad8r).
    
    -   To remove all stopped containers, run `sudo docker container prune`.
        
    -   To remove all dangling images (images without tags), run `sudo docker image prune`.
        
    -   To remove unused build caches, run `sudo docker builder prune`.
        

### Cause 6: The inotify watches limit is reached

When you run a command such as `sudo tail -f`, you may see the error `tail: cannot watch '...': No space left on device`. This error does not indicate a lack of disk space. Instead, this means the `inotify watches` limit, used for tracking file and directory changes, has been reached and needs to be increased.

1.  Check the current `inotify watches` limit.
    
    Run `sudo cat /proc/sys/fs/inotify/max_user_watches` to view the current limit for `inotify watches`.
    
2.  Increase the `inotify watches` limit.
    
    Increasing the limit may cause inotify to use more system memory. Assess this carefully before making changes. We recommend setting `<new_limit_value>` to 524288 or lower.
    
    ```
    sudo sh -c "echo fs.inotify.max_user_watches=<new_limit_value> >> /etc/sysctl.conf"
    ```
    
3.  Load the new configuration.
    
    Run `sudo sysctl --system` to load the new configuration and apply the changes.
    
4.  Verify the new configuration.
    
    Run `sudo cat /proc/sys/fs/inotify/max_user_watches` again to confirm that the `inotify watches` limit has been updated to the expected value.
    

## References

-   To store massive static files, such as images, videos, and archives, we recommend using [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss).
    
-   For high-performance, high-concurrency file sharing, consider using [File Storage NAS](/help/en/nas/product-overview/what-is-nas).
    
-   For large-scale log collection and analysis, you can store logs in [Simple Log Service (SLS)](/help/en/sls/what-is-log-service). This simplifies log queries and reduces storage consumption.
