This topic covers common issues when accessing files on an Apsara File Storage NAS (NAS) file system, including cross-protocol compatibility, data synchronization delays, permissions and ownership, and concurrent access.

## SMB on Linux

### Server stops responding for 35 seconds during concurrent access

The SMB kernel driver has a known issue with protocol versions 2.1 and 3.0: when multiple clients access the same file concurrently, the server may stop responding for up to 35 seconds because clients cannot send SMB break acknowledgment packets.

Fix this in one of two ways:

**Option 1:** Set the protocol version to 2.0 when mounting:

```
sudo mount -t cifs //file-system-id.region.nas.aliyuncs.com/myshare /mnt -o vers=2.0,...
```

**Option 2:** Disable oplocks.

If the Common Internet File System (CIFS) module is being loaded:

```
modprobe cifs enable_oplocks=0
```

If the CIFS module is already loaded:

```
echo 0 > /sys/module/cifs/parameters/enable_oplocks
```

Verify the change:

```
cat /sys/module/cifs/parameters/enable_oplocks
```

`Y` means enabled, `N` means disabled.

**Note** Unmount and remount the SMB file system to apply these changes. To make the change persistent across reboots, create `/etc/modprobe.d/cifs.conf` and add `options cifs enable_oplocks=0`.

### Unable to create a symbolic link

This happens when the `mfsymlinks` mount option is missing or the protocol version is 2.0. Use protocol version 2.1 or 3.0 and include the `mfsymlinks` option:

```
sudo mount -t cifs //file-system-id.region.nas.aliyuncs.com/myshare /mnt -o vers=2.1,guest,uid=0,gid=0,dir_mode=0755,file_mode=0755,mfsymlinks,cache=strict,rsize=1048576,wsize=1048576
```

For the full list of mount parameters, see [Mount an SMB file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-smb-file-system-on-a-linux-ecs-instance#table-dgv-w7q-ff8).

### Mount target becomes inaccessible during concurrent access

On Linux kernels 3.10.0-514 or earlier, the SMB kernel driver may freeze when multiple clients access the file system concurrently. The kernel log shows a `cifs_oplock_break` stack trace:

```
...
[<ffffffffc03c9bc1>] cifs_oplock_break+0x1f1/0x270 [cifs]
[<ffffffff810a881a>] process_one_work+0x17a/0x440
[<ffffffff810a8d74>] rescuer_thread+0x294/0x3c0
...
```

Two options:

-   Remount the file system with `cache=none`. This may reduce performance.
    
-   Upgrade the operating system of the Linux Elastic Compute Service (ECS) instance.
    

### "Bad file descriptor" error when copying a large file

The error `cp: error writing '</path/to/file>': Bad file descriptor` indicates a temporary network or backend fault. SMB clients on some Linux distributions (such as SUSE) have limited failover support.

Use a Linux version supported by NAS SMB:

**Operating system**

**Version**

CentOS

CentOS 7.6 64-bit: kernel 3.10.0-957.21.3.el7.x86\_64 and later

Alibaba Cloud Linux

Alibaba Cloud Linux 2.1903 64-bit: kernel 4.19.43-13.2.al7.x86\_64 and later

Alibaba Cloud Linux

Alibaba Cloud Linux 3.2104 64-bit: kernel 5.10.23-4.al8.x86\_64 and later

Debian

Debian 9.10 64-bit: kernel 4.9.0-9-amd64 and later

Ubuntu

Ubuntu 18.04 64-bit: kernel 4.15.0-52-generic and later

openSUSE

openSUSE 42.3 64-bit: kernel 4.4.90-28-default and later

SUSE Linux

SUSE Linux Enterprise Server 12 SP2 64-bit: kernel 4.4.74-92.35-default and later

CoreOS

CoreOS 2079.4.0 64-bit: kernel 4.19.43-coreos and later

### Unable to mount an SMB file system

If the `net use` command was accidentally used to mount an NFS file system, subsequent SMB mount attempts may fail. Verify that the file system protocol is SMB, stop the mount operation, and retry after 5 minutes. If the issue persists, contact [NAS technical support](https://nas.console.alibabacloud.com/support).

### Mounted SMB directory visible only to the administrator

Windows user accounts are isolated. A directory mounted by User A is not visible to User B. To share access across users, create a symbolic link to the mount point:

```
mklink /D C:\myshare \\xxxxxxx-xxxx.cn-beijing.nas.aliyuncs.com\myshare\
```

### Renaming files by changing letter case only

SMB file names are case-insensitive, consistent with Windows behavior. Directly renaming a file to change only the letter case is not supported.

**Workaround:** Rename the file to a temporary name with different characters, then rename it to the target name with the desired case.

### Slow file migration or replication on Linux

If the SMB file system performs well but migration or replication is slow, the files are likely being copied sequentially. Use parallel copy tools:

-   [GNU Parallel](https://github.com/martymac/fpart): `find * -type f | parallel --will-cite -j 10 cp {} /mnt/smb/ &`
    
-   [Fpart](https://github.com/martymac/fpart)
    
-   [Fpsync](https://github.com/martymac/fpart/blob/master/tools/fpsync)
    
-   [multi](https://github.com/pkolano/mutil)
    

### Improving SMB performance on Linux

SMB performance on Linux depends on several factors. Check them in order:

1.  **File system throughput is capacity-dependent.** Maximum read and write throughput scales linearly with storage capacity. Test performance with the fio tool. For details, see [Test the performance of a NAS file system](/help/en/nas/user-guide/test-the-performance-of-a-nas-file-system#concept-krf-y3s-qfb).
    
2.  **ECS instance bandwidth is too low.** Use multiple ECS instances to aggregate bandwidth.
    
3.  **Client-side caching is disabled.** Run `sudo mount | grep cifs` to check the `cache` parameter. The value `strict` means caching is enabled; `none` means disabled.
    
4.  **I/O buffer size does not match workload.** Adjust the `rsize` and `wsize` mount parameters (default: 1048576).
    
5.  **ECS instance has insufficient CPU or memory.** Run `top` to check utilization and upgrade the instance if needed.
    
6.  **The `atime` mount option is enabled.** Remove `atime` from mount parameters if access time tracking is not required.
    
7.  **Web server performs many small-file reads.** Configure the caching mechanism of the web server (such as Apache HTTP Server), or contact [Alibaba Cloud](https://smartservice.console.alibabacloud.com/console.htm#/ticket/add?productCode=nas&commonQuestionId=532&isSmart=true&iatraceid=1574733894095-25eb1896836b6bd8f6ce92&channel=selfservice) to enable acceleration.
    

## NFS on Windows

### Chinese characters appear as garbled text across platforms

Windows encodes Chinese characters using the GBK character set by default, while Linux uses UTF-8. When one platform writes Chinese characters (in file names or content) and another platform reads them, the incompatible character sets cause garbled text.

To avoid this, use Windows clients for SMB file systems and Linux clients for NFS file systems.

### Slow file creation or opening

Case-sensitivity compatibility between NFS and Windows causes directory traversal on every file creation. At 100,000 directories, each traversal takes more than 10 seconds.

Add `-o casesensitive=yes` to the mount parameters:

```
mount -o nolock -o mtype=hard -o timeout=60 -o casesensitive=yes \\file-system-id.region.nas.aliyuncs.com\! Z:
```

Replace the drive letter `Z` and the mount target domain name `file-system-id.region.nas.aliyuncs.com` with actual values.

**Note**

The `casesensitive` option conflicts with native Windows semantics. When using NFS directories with this option, make sure that no file name conflicts arise due to case sensitivity (for example, `a.txt` and `A.TXT`). For best compatibility, mount an SMB file system on Windows instead.

### "invalid device" error when renaming a file

This error occurs when the NFS file system is mounted on a subdirectory of an ECS instance. Mount the file system on the root directory instead. For details, see [Mount a General-purpose NFS file system on a Windows ECS instance](/help/en/nas/user-guide/mount-a-general-purpose-nfs-file-system-on-a-windows-ecs-instance#section-m3p-e5t-ip9).

### No permissions to access an NFS file system

Configure the `AnonymousGID` and `AnonymousUID` registry keys:

1.  Log on to the ECS instance where the file system is mounted.
    
2.  Open the Command Prompt and run `regedit` to open the Registry Editor.
    
3.  Navigate to **HKEY\_LOCAL\_MACHINE** > **SOFTWARE** > **Microsoft** > **ClientForNFS** > **CurrentVersion** > **Default**.
    
4.  Right-click a blank area, choose **New** > **DWORD (32-bit) Value**, and create the following keys:
    
    -   **AnonymousGID**: Set the value to `0`.
        
    -   **AnonymousUID**: Set the value to `0`.
        
5.  Restart the ECS instance.
    
6.  Remount the NFS file system: Replace the drive letter `Z:` and the domain name `file-system-id.region.nas.aliyuncs.com` with actual values.
    
    ```
       mount -o nolock -o mtype=hard -o timeout=60 \\file-system-id.region.nas.aliyuncs.com\! Z:
    ```
    
7.  Run the `mount` command to verify. If the output contains `mount=hard`, `locking=no`, and `timeout=` with a value of 10 or greater, the mount is successful.
    

## File creation and write latency

### Latency in detecting newly created files across ECS instances

When ECS-1 creates a file, ECS-2 may take 1 second to 1 minute to see it. This delay is caused by the negative lookup cache: if ECS-2 previously looked up the file and got a "not found" result, that result stays cached until the entry expires.

**Option 1 (minimal overhead):** Disable the negative lookup cache by adding `lookupcache=positive` (the default is `lookupcache=all`) when mounting:

```
sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,lookupcache=positive file-system-id.region.nas.aliyuncs.com:/ /mnt
```

**Option 2 (lower performance):** Disable all caches by adding `actimeo=0` when mounting:

```
sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,actimeo=0 file-system-id.region.nas.aliyuncs.com:/ /mnt
```

### Latency in reading updated file content across ECS instances

When ECS-1 updates a file, ECS-2 may not see the changes immediately. Two factors cause this:

1.  **Writer-side caching:** ECS-1 does not flush content to the server immediately. Instead, it caches content in the page cache and relies on the application to call `fsync` or `close`.
    
2.  **Reader-side caching:** ECS-2 may have cached the old file content locally.
    

**Option 1 (recommended):** Use the close-to-open (CTO) consistency model. On ECS-1, call `close` or `fsync` after writing. On ECS-2, call `open` before reading. This guarantees that ECS-2 reads the latest data.

**Option 2:** Disable caching on both sides:

-   **ECS-1 (writer):** Mount with the `noac` flag to flush all writes immediately:
    
    **Note** If ECS-1 already calls `fsync` after each write, replace `noac` with `actimeo=0` for slightly better performance. The `noac` option is equivalent to `actimeo=0` plus sync (all writes are forced synchronous).
    
    ```
      sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,noac file-system-id.region.nas.aliyuncs.com:/ /mnt
    ```
    
-   **ECS-2 (reader):** Mount with `actimeo=0` to skip all caches:
    
    ```
      sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,actimeo=0 file-system-id.region.nas.aliyuncs.com:/ /mnt
    ```
    

### Data not synchronized across multiple ECS instances

When multiple clients perform real-time synchronization on a NAS file system, high latency can occur because the OS kernel caches file and directory metadata (attribute cache) to reduce `NFSPROC_GETATTR` remote procedure calls.

Disable attribute caching by mounting with `noac`:

```
mount -t nfs4 -o noac file-system-id.region.nas.aliyuncs.com:/ /mnt
```

Replace `file-system-id.region.nas.aliyuncs.com` with the mount target domain name and `/mnt` with the local mount directory.

## Permissions and ownership

### Same file shows different owners on two ECS instances

NAS identifies users by UID (User Identifier) and GID (Group Identifier), not by user name. If the same user name (for example, `admin`) maps to different UIDs on different ECS instances, the file appears to have a different owner on each instance.

For example, if the `admin` user has UID 505 on ECS Instance 1 and UID 2915 on ECS Instance 2, files created by `admin` on one instance display a different owner name when viewed from the other instance. Run the `id` command on each instance to compare UIDs, and use the `stat` command to verify the actual UIDs stored in the file system.

### "Permission denied" when accessing an SMB file system on Linux

Invalid values for the `uid`, `gid`, `file_mode`, or `dir_mode` mount parameters cause this error. Verify these values match the intended user and permission settings. For details, see [Mount an SMB file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-smb-file-system-on-a-linux-ecs-instance#task-1580275).

### Unable to change file owner or directory access mode

On an SMB file system mounted on Linux, the file owner and access mode can only be set at mount time through mount parameters. They cannot be changed afterward. For details, see [Mount an SMB file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-smb-file-system-on-a-linux-ecs-instance#task-1580275).

### Cannot modify root directory permissions with chown

The root directory permissions of a NAS file system cannot be modified. To control permissions on the local mount point, mount a subdirectory instead of the root directory.

For example, if the root directory is mounted to `/data`, running `chown` on `/data` has no effect. Instead, create a subdirectory on the NAS file system (by first mounting the root directory), then mount that subdirectory to `/data`. The `chown` command works on subdirectory mount points.

For details, see [How do I create and mount a subdirectory of a NAS file system on Linux?](/help/en/nas/user-guide/other-issues#section-r79-s0f-z6k)

## Concurrent access

### Multiple processes writing to the same log file

NFS does not support atomic appends. When multiple processes or clients write to the same file concurrently, data corruption can occur: entries may overwrite each other, interleave, or appear out of order. Each process independently maintains its own file descriptor and write position.

**Option 1 (recommended):** Have each process write to a separate file, then merge the files during analysis. This avoids file lock overhead entirely.

**Option 2:** Combine `flock` and `lseek` to simulate atomic appends:

1.  Open the file with append and direct I/O flags:
    
    ```
       fd = open(filename, O_WRONLY | O_APPEND | O_DIRECT);
    ```
    
2.  Acquire an exclusive file lock: If this fails, the lock is held by another process. Retry or handle the error.
    
    ```
       flock(fd, LOCK_EX | LOCK_NB);
    ```
    
3.  Seek to the end of the file:
    
    ```
       lseek(fd, 0, SEEK_END);
    ```
    
4.  Write the data.
    
5.  Release the lock:
    
    ```
       flock(fd, LOCK_UN);
    ```
    

### Error 523 when running the ls command

Running `ls` on a directory while multiple `rename` operations are executing concurrently can trigger error 523. Retry the command later. If the error persists, contact [NAS technical support](https://nas.console.alibabacloud.com/support).

## NFS-specific issues

### "bind conn to session failed on NFSv4 server" error

This error means the file system was mounted with the NFSv4.1 protocol, which NAS does not support. Remount using NFSv3.0 or NFSv4.0. For details, see [Usage notes](/help/en/nas/user-guide/usage-notes#concept-o3z-wfk-bfb).

### .nfs temporary files

When a file is deleted while still in use by an application, the kernel creates a temporary file with a `.nfs` suffix. This file is automatically deleted when the process that holds the file handle exits. No manual cleanup is needed.

## General file system issues

### "Disk quota exceeded" error

The size or number of files in a directory has exceeded the configured directory quota. Write operations such as creating files, increasing file sizes, and moving files to the directory fail with this error.

1.  Free up space or increase the directory quota limit. For details, see [Modify a directory quota that is assigned to a user](/help/en/nas/user-guide/manage-directory-quotas).
    
2.  After clearing data, perform a test write (for example, create and write to a test file) to trigger an asynchronous refresh of the quota cache. Restart the service after the test write succeeds.
    

### Pod writes to old NAS file system after remounting

When a NAS file system is mounted on an ECS instance and the mount directory is mapped into a container using a local volume (HostPath), the container's mount information is independent of the host. Detaching and remounting a new NAS file system on the host does not affect running containers.

Remount the new NAS file system on the ECS instance, then restart the pod.

### Files not visible after server restart

If a NAS file system is not visible after a server restart or stop, auto-mount is likely not configured. Manually mount the file system, then configure auto-mount to prevent this in the future:

-   [Mount an NFS file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#1d29868589zrh)
    
-   [Mount an SMB file system on a Windows ECS instance](/help/en/nas/user-guide/mount-smb-protocol-file-system-on-windows-system#p-pir-dhm-kjn)
