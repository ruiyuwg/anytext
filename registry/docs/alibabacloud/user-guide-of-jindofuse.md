Object Storage Service (OSS) and OSS-HDFS support Portable Operating System Interface (POSIX) by using JindoFuse. This allows you to mount files in OSS and OSS-HDFS to a local file system so that you can manage files in OSS and OSS-HDFS like managing files in a local file system.

## Environment preparation

-   In the E-MapReduce (EMR) environment, JindoSDK is installed by default and can be directly used.
    
    **Note** To access OSS-HDFS, you must create a cluster of EMR V3.42.0 or a later minor version, or EMR V5.8.0 or a later minor version.
    
-   In a non-EMR environment, install JindoSDK first. For more information, see [Deploy JindoSDK in an environment other than EMR](/help/en/emr/emr-on-ecs/user-guide/deploy-jindosdk-in-an-environment-other-than-emr#task-2280110).
    
    **Note** To access OSS-HDFS, you must install JindoSDK V4.X or later.
    

## Install the required dependencies

**Note** By default, the required dependencies are installed for the following clusters:

-   Clusters of EMR V3.44.0 or a later minor version or clusters of EMR V5.10.0 or a later minor version
-   Clusters in which JindoSDK V4.6.2 or later is deployed

-   If your clusters use JindoSDK 4.5.0 or earlier, you must install the following dependencies:
    
    ```
    # CentOS
    sudo yum install -y fuse3 fuse3-devel
    # Debian
    sudo apt install -y fuse3 libfuse3-dev
    ```
    
-   If your clusters use JindoSDK 4.5.1 or later, you must install libfuse 3.7 or later.
    
    For example, run the following commands to install fuse-3.11:
    
    ```
    # build fuse required meson & ninja, for debian: apt install -y pkg-config meson ninja-build
    sudo yum install -y meson ninja-build
    
    # compile fuse required newer g++ (only CentOS)
    sudo yum install -y scl-utils
    sudo yum install -y alinux-release-experimentals
    sudo yum install -y devtoolset-8-gcc devtoolset-8-gdb devtoolset-8-binutils devtoolset-8-make devtoolset-8-gcc-c++
    sudo su -c "echo 'source /opt/rh/devtoolset-8/enable' > /etc/profile.d/g++.sh"
    source /opt/rh/devtoolset-8/enable
    sudo ln -s /opt/rh/devtoolset-8/root/bin/gcc /usr/local/bin/gcc
    sudo ln -s /opt/rh/devtoolset-8/root/bin/g++ /usr/local/bin/g++
    
    # compile & install libfuse
    wget https://github.com/libfuse/libfuse/releases/download/fuse-3.11.0/fuse-3.11.0.tar.xz
    xz -d fuse-3.11.0.tar.xz
    tar xf fuse-3.11.0.tar
    cd fuse-3.11.0/
    mkdir build; cd build
    meson ..
    sudo ninja install
    ```
    

## Mount JindoFuse

-   Run the following command to create a mount point:
    
    ```
    mkdir -p <mount_point>
    ```
    
    Replace the value of `<mount_point>` with a local path. Example: /mnt/oss/.
    
-   Run the following command to mount JindoFuse:
    
    ```
    jindo-fuse <mount_point> -ouri=<oss_path>
    ```
    
    Replace the value of `<oss_path>` with an OSS or OSS-HDFS path to be mapped. The path can be the root directory or a subdirectory of the OSS or OSS-HDFS bucket. Example: oss://examplebucket.cn-shanghai.oss-dls.aliyuncs.com/subdir /.
    
    After you run the command, a daemon process starts in the background to mount the specified OSS or OSS-HDFS path to the specified mount point of the local file system.
    
    **Note**
    
    The methods to mount OSS and OSS-HDFS paths are basically the same. Only the endpoints in the paths are different.
    
-   Run the following command to check whether JindoFuse is mounted:
    
    ```
    ps -ef | grep jindo-fuse
    ```
    
    If the jindo-fuse process exists and the startup parameters are the same as expected, JindoFuse is mounted.
    

## Access JindoFuse

If JindoFS is mounted to the local path /mnt/oss/, run the following commands to access JindoFuse:

-   View all directories in the /mnt/oss/ path
    
    ```
    ls /mnt/oss/
    ```
    
-   Create a directory
    
    ```
    mkdir /mnt/oss/dir1
    ```
    
-   Write data to a file
    
    ```
    echo "hello world" > /mnt/oss/dir1/hello.txt
    ```
    
-   Read data from a file
    
    ```
    cat /mnt/oss/dir1/hello.txt
    ```
    
    `hello world` is displayed.
    
-   Delete a directory
    
    ```
    rm -rf /mnt/oss/dir1/
    ```
    

## Uninstall JindoFuse

To unmount the mount point to which JindoFuse is mounted, run the following command:

```
umount <mount_point>
```

You can also specify the `-oauto_unmount` parameter to automatically unmount the mount point. If you use this parameter, you can run the `killall -9 jindo-fuse` command to send SIGINT to the jindo-fuse process. The mount point is automatically unmounted before the process exits.

## Supported POSIX-based API operations

The following table describes the POSIX-based API operations that are supported by JindoFuse.

**Operation**

**Description**

**OSS**

**OSS-HDFS**

getattr()

Queries file attributes.

Supported.

Supported.

mkdir()

Creates a directory.

Supported.

Supported.

rmdir()

Deletes a directory.

Supported.

Supported.

unlink()

Deletes a file.

Supported.

Supported.

rename()

Renames a file.

Supported.

Supported.

read()

Reads data in sequence.

Supported.

Supported.

pread()

Reads data randomly.

Supported.

Supported.

write()

Writes data in sequence.

Supported.

Supported.

pwrite()

Writes data randomly.

Not supported.

Supported.

flush()

Flushes data from the memory to the kernel cache.

-   Versions earlier than JindoFuse 6.7.0: Only files that are opened by using the append mode are supported.
    
-   JindoFuse 6.7.0 or later: Supported by default.
    

For more information, see [How do I check whether data is written to OSS after a file is closed?](#36c8263b87ceh)

Supported.

fsync()

Flushes data from the memory to disks.

Only files that are opened by using the append mode are supported.

Supported.

release()

Releases a file.

Supported.

Supported.

readdir()

Reads a directory.

Supported.

Supported.

create()

Creates a file.

Supported.

Supported.

open() O\_APPEND

Opens a file by using the append mode.

Supported. For more information about the limits on calling this API operation, see the [Limits](/help/en/oss/developer-reference/appendobject#section-y31-h4r-xdb) section of the AppendObject topic.

Supported.

open() O\_TRUNC

Opens a file by using the overwrite mode.

Supported.

Supported.

ftruncate()

Truncates an open file.

Not supported.

Supported.

truncate()

Truncates an unopened file.

Not supported.

Supported.

lseek()

Specifies the read and write locations in an open file.

Not supported.

Supported.

chmod()

Modifies the permissions on a file.

Not supported.

Supported.

access()

Queries the permissions on a file.

Supported.

Supported.

utimes()

Modifies the time at which a file is stored and modified.

Not supported.

Supported.

setxattr()

Modifies extended attributes of a file.

Not supported.

Supported.

getxattr()

Queries extended attributes of a file.

Not supported.

Supported.

listxattr()

Queries extended attributes of files.

Not supported.

Supported.

removexattr()

Deletes extended attributes of a file.

Not supported.

Supported.

lock()

Supports POSIX locks.

Not supported.

Supported.

fallocate()

Preallocates physical space to a file.

Not supported.

Supported.

symlink()

Creates a symbolic link.

Not supported.

Supported only for internal use in OSS-HDFS. Cache acceleration is not supported.

readlink()

Reads a symbolic link.

Not supported.

Supported.

## Advanced usage

The following table describes the mount-related parameters.

**Parameter**

**Required**

**JindoData version**

**Description**

**Example**

uri

Yes

JindoData 4.3.0 and later

Configures the OSS path to be mapped. The path can be the root directory or a subdirectory. Example: oss://examplebucket/ or oss://examplebucket/subdir.

`-ouri=oss://examplebucket/`

f

No

JindoData 4.3.0 and later

Starts the JindoFuse process in the foreground. By default, a daemon process is used to start the JindoFuse process in the background. If you enable this parameter, we recommend that you enable terminal logs.

`-f`

d

No

JindoData 4.3.0 and later

Enables the debug mode. If you enable the debug mode, the JindoFuse process starts in the foreground. If you enable this parameter, we recommend that you enable terminal logs.

`-d`

auto\_unmount

No

JindoData 4.3.0 and later

Automatically unmounts the mount point after the JindoFuse process exits.

`-oauto_unmount`

ro

No

JindoData 4.3.0 and later

Mounts files from the JindoFS service in read-only mode. If you enable this parameter, you cannot perform write operations.

`-oro`

direct\_io

No

JindoData 4.3.0 and later

If you enable this parameter, file reads and writes can bypass the page cache.

`-odirect_io`

kernel\_cache

No

JindoData 4.3.0 and later

If you enable this parameter, the kernel cache is used to optimize read performance.

`-okernel_cache`

auto\_cache

No

JindoData 4.3.0 and later

Configures one of this parameter and the kernel\_cache parameter. This parameter differs from the kernel\_cache parameter in that if the file size or modification time changes, the cache is invalid. By default, this parameter is enabled.

None

entry\_timeout

No

JindoData 4.3.0 and later

The retention period of the cached file names that are read, in seconds. This parameter is used to optimize performance. Default value: 60. A value of 0 specifies that the file names are not cached.

`-oentry_timeout=60`

attr\_timeout

No

JindoData 4.3.0 and later

The retention period of the cached file attributes, in seconds. This parameter is used to optimize performance. Default value: 60. A value of 0 specifies that the file attributes are not cached.

`-oattr_timeout=60`

negative\_timeout

No

JindoData 4.3.0 and later

The retention period of the cached file names that fail to be read, in seconds. This parameter is used to optimize performance. Default value: 60. A value of 0 specifies that the file names are not cached.

`-onegative_timeout=0`

max\_idle\_threads

No

JindoData 4.3.0 and later

The number of idle threads that are available for processing kernel callbacks. Default value: 10.

`-omax_idle_threads=10`

xengine

No

JindoData 4.3.0 and later

Enables the cache feature.

`-oxengine`

pread

No

JindoData 4.5.1 and later

By default, sequential reads are used. If you enable this parameter, random reads instead of sequential reads are used. This parameter is suitable for scenarios in which the number of random reads is much larger than that of sequential reads.

`-opread`

no\_symlink

No

JindoData 4.5.1 and later

Disables the symbolic link feature.

`-ono_symlink`

no\_writeback

No

JindoData 4.5.1 and later

Disables the writeback feature.

`-ono_writeback`

no\_flock

No

JindoData 4.5.1 and later

Disables the flock feature.

`-ono_flock`

no\_xattr

No

JindoData 4.5.1 and later

Disables the extended attribute feature.

`-ono_xattr`

The following table describes the related configuration parameters.

**Parameter**

**Default value**

**Description**

logger.dir

/tmp/bigboot-log

The log directory. The specified log directory is automatically created if it does not exist.

logger.sync

false

Specifies whether to export logs synchronously. A value of false specifies that the logs are exported asynchronously.

logger.consolelogger

false

Specifies whether to display terminal logs.

logger.level

2

Displays logs whose levels are greater than or equal to the value of this parameter. Valid values:

-   0: TRACE
    
-   1: DEBUG
    
-   2: INFO
    
-   3: WARN
    
-   4: ERROR
    
-   5: CRITICAL
    
-   6: OFF
    

logger.verbose

0

Displays Verbose logs whose levels are greater than or equal to the value of this parameter. Valid values: 0 to 99. A value of 0 specifies that no Verbose logs are displayed.

logger.cleaner.enable

false

Specifies whether to enable the log cleanup feature.

fs.oss.endpoint

None

The endpoint that is used to access JindoFS. Example: oss-cn-xxx.aliyuncs.com.

fs.oss.accessKeyId

None

The AccessKey ID that is used to access JindoFS.

fs.oss.accessKeySecret

None

The AccessKey secret that is used to access JindoFS.

You can specify both JindoSDK configuration parameters and mount-related parameters when you mount JindoFuse. The specified parameters must have a higher priority than those in the configuration file. Example:

```
jindo-fuse <mount_point> -ouri=[<oss_path>] -ofs.oss.endpoint=[<YOUR_ENDPOINT>] -ofs.oss.accessKeyId=[<YOUR_KEY_ID>] -ofs.oss.accessKeySecret=[<YOUR_KEY_SECRET>]
```

## FAQ

### How am I able to identify the cause of an error when I use JindoFuse?

JindoSDK can return specific error messages if an error occurs when you call an API operation. However, JindoFuse can display only the error messages that are preset by the operating system. To identify the cause of an error, view the `jindosdk.log` file in the path that is specified by the logger.dir configuration parameter of JindoSDK.

### How do I check whether data is written to OSS after an object is closed?

-   Versions earlier than JindoFuse 6.7.0:
    
    -   Append mode: If an object is opened in append mode, the `flush()` operation is triggered when you perform the `close()` operation to close an object. In this case, data is flushed from the buffer to the kernel cache, and then is written to OSS. In this mode, data is written to an object by calling the AppendObject. For limits of the operation, see [AppendObject](/help/en/oss/developer-reference/appendobject).
        
    -   Modes other than the append mode: If an object is not opened in append mode, the `flush()` operation does not take effect. In this case, data is not written to OSS after you perform the `close()` operation.
        
-   JindoFuse 6.7.0 or later:
    
    -   By default, the `fs.oss.fuse.flush.enable` parameter is set to true. The `flush()` operation is supported to write data to OSS, without affecting OSS-HDFS.
        
    -   Data is written to OSS by using  `PutObject`  or  `MPU` other than the `appendObject` operation, no matter whether an object is opened by using `open()`, `O_APPEND`, or other modes. In this case, `flush()` is used to read the written data and write the data to OSS. However, this increases I/O costs in the following scenarios:
        
        -   Perform the `flush()` operation on an existing object
            
        -   Perform the `flush()` operation twice on a new object
            
    -   If you set the `fs.oss.fuse.flush.enable` parameter to false, the `flush()` operation is supported only if an object is opened in append mode.
