JindoFuse mounts OSS-HDFS as a local directory and exposes it through a POSIX-compatible interface. Applications that rely on standard file system calls — Hadoop jobs, Spark pipelines, AI training workloads — can read and write to OSS-HDFS without code changes.

## Use cases

-   **AI and machine learning**: Mount OSS-HDFS to a training node and load datasets or save model checkpoints directly through the local file system path.
    
-   **Big data analytics**: Run Hadoop and Spark jobs against OSS-HDFS using standard HDFS API calls.
    
-   **POSIX application migration**: Move workloads that depend on local file system semantics to OSS-HDFS without modifying application code.
    

## Limitations

JindoFuse provides broad POSIX coverage, but some behaviors differ from a local file system:

-   **Symbolic links**: Available in OSS-HDFS only. Do not support cache acceleration.
    

For all supported POSIX operations, see [Appendix 1: Supported operations](#section-bff0ed93).

## Prerequisites

Before you begin, ensure that you have:

-   OSS-HDFS enabled for your bucket, with the required access permissions. See [Enable OSS-HDFS](/help/en/oss/user-guide/enable-oss-hdfs-service#task-2201339)
    
-   One of the following environments:
    
    -   **Alibaba Cloud EMR cluster** (version 3.44.0 or later, or 5.10.0 or later): JindoFuse is pre-installed. See [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page)
        
    -   **Non-EMR environment**: JindoSDK 4.6.2 or later installed and deployed. See [Deploy JindoSDK in an environment other than EMR](/help/en/emr/emr-on-ecs/user-guide/deploy-jindosdk-in-an-environment-other-than-emr#task-2280110)
        

## Configure JindoFuse (non-EMR environments only)

Skip this section if you are using an EMR cluster. EMR clusters come with JindoFuse pre-configured.

1.  Connect to your ECS instance. See [Connect to an instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console).
    
2.  Set the following environment variables. Replace `x.x.x` with your JindoSDK version number.
    
    ```
       export JINDOSDK_HOME=/root/jindosdk-x.x.x
       export HADOOP_CLASSPATH=`hadoop classpath`:${JINDOSDK_HOME}/lib/*
       export JINDOSDK_CONF_DIR=/root/jindosdk-x.x.x/conf
       export PATH=$PATH:$JINDOSDK_HOME/bin
       export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${JINDOSDK_HOME}/lib/native
    ```
    
    This example assumes JindoSDK is installed at `/root/jindosdk-x.x.x`. Adjust the paths to match your actual installation directory.
    
3.  Create a configuration file named `jindosdk.cfg` in the `conf/` directory of your JindoSDK installation, and add the following content:
    
    **Placeholder**
    
    **Description**
    
    **Example**
    
    `<region-id>`
    
    The region where your OSS-HDFS bucket is located
    
    `cn-hangzhou`
    
    `<your-access-key-id>`
    
    Your AccessKey ID
    
    `LTAI****************`
    
    `<your-access-key-secret>`
    
    Your AccessKey secret
    
    —
    
    ```
       [common]
       logger.dir = /tmp/fuse-log
    
       [jindosdk]
       fs.oss.endpoint = <region-id>.oss-dls.aliyuncs.com
       fs.oss.accessKeyId = <your-access-key-id>
       fs.oss.accessKeySecret = <your-access-key-secret>
    ```
    
    Replace the placeholders with your actual values:
    

## Mount OSS-HDFS

1.  Create a local directory to use as the mount point:
    
    ```
       mkdir -p <mount-point>
    ```
    
2.  Mount OSS-HDFS:
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    `<mount-point>`
    
    The local directory where OSS-HDFS will be mounted
    
    `/mnt/oss`
    
    `-ouri`
    
    The dls path to map. Use the bucket root or a subdirectory.
    
    `-ouri=oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/`
    
    ```
       jindo-fuse <mount-point> -ouri=<oss-path>
    ```
    
    After the command runs, a daemon process mounts the specified OSS-HDFS path to the local mount point in the background. For additional mount options, see [Appendix 2: Mount options](#section-te3-d18-jkb).
    
3.  Verify the mount by checking that the JindoFuse process is running:
    
    ```
       ps -ef | grep jindo-fuse
    ```
    
    Expected output:
    
    ```
       root      2162     1  0 13:21 ?        00:00:00 jindo-fuse <mount-point> -ouri=[<oss-path>]
       root      2714  2640  0 13:39 pts/0    00:00:00 grep --color=auto jindo-fuse
    ```
    
    If the first line appears, OSS-HDFS is mounted successfully.
    

## Read and write files

After mounting, use standard file system commands to interact with OSS-HDFS through the mount point.

```
# Create a directory
mkdir /mnt/oss/dir1

# List directory contents
ls /mnt/oss/

# Write a file
echo "hello world" > /mnt/oss/dir1/hello.txt

# Read a file
cat /mnt/oss/dir1/hello.txt

# Delete a directory
rm -rf /mnt/oss/dir1/
```

## Unmount OSS-HDFS

Choose one of the following methods:

-   **Manual unmount**: Run `umount <mount-point>`.
    
-   **Automatic unmount on process exit**: Pass the `-oauto_unmount` option when mounting. When `killall -9 jindo-fuse` sends SIGINT to the JindoFuse process, OSS-HDFS is automatically unmounted before the process exits.
    

## Troubleshooting

### I/O errors in JindoFuse

When JindoFuse encounters an error, the operating system returns a generic message such as:

```
ls: /mnt/oss/: Input/output error
```

To find the root cause, check `jindosdk.log` in the directory specified by the `logger.dir` configuration item.

A common cause is an authentication or connectivity issue. Look for an error like:

```
EMMDD HH:mm:ss jindofs_connectivity.cpp:13] Please check your Endpoint/Bucket/RoleArn.
Failed test connectivity, operation: mkdir, errMsg: [RequestId]: 618B8183343EA53531C62B74 [HostId]: oss-cn-shanghai-internal.aliyuncs.com [ErrorMessage]: [E1010]HTTP/1.1 403 Forbidden ...
```

If you see this error, verify that the endpoint, bucket name, and role ARN are correctly configured. See [Connect non-EMR clusters to OSS-HDFS](/help/en/oss/user-guide/connect-non-emr-clusters-to-oss-hdfs#task-2128488).

For other errors, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

## **Appendix 1: Supported operations**

The following POSIX-based operations are supported by JindoFuse.

**Operation**

**Description**

`getattr()`

Queries object attributes (equivalent to `ls`)

`mkdir()`

Creates a directory (equivalent to `mkdir`)

`rmdir()`

Deletes a directory (equivalent to `rm -rf`)

`unlink()`

Deletes an object (equivalent to `unlink`)

`rename()`

Renames an object or directory (equivalent to `mv`)

`read()`

Reads data sequentially

`pread()`

Reads data at a random offset

`write()`

Writes data sequentially

`pwrite()`

Writes data at a random offset

`flush()`

Flushes data from memory to kernel cache

`fsync()`

Flushes data from memory to disk

`release()`

Closes an object

`readdir()`

Reads a directory

`create()`

Creates an object

`open() O_APPEND`

Opens an object in append mode

`open() O_TRUNC`

Opens an object in overwrite mode

`ftruncate()`

Truncates an open object

`truncate()`

Truncates a closed object (equivalent to `truncate -s`)

`lseek()`

Sets the read/write position in an open object

`chmod()`

Modifies object permissions (equivalent to `chmod`)

`access()`

Queries object permissions

`utimes()`

Modifies the access and modification timestamps of an object

`setxattr()`

Sets an extended attribute on an object

`getxattr()`

Gets an extended attribute of an object

`listxattr()`

Lists extended attributes of an object

`removexattr()`

Removes an extended attribute from an object

`lock()`

Supports POSIX locks (equivalent to `fcntl`)

`fallocate()`

Pre-allocates physical space for an object

`symlink()`

Creates a symbolic link (OSS-HDFS only; does not support cache acceleration)

`readlink()`

Reads a symbolic link

## **Appendix 2: Mount options**

All options except `uri` are optional. Pass options using the `-o` prefix (for example, `-oauto_unmount`).

**Option**

**Description**

**Default**

**Example**

`uri`

The dls path to map. Use the bucket root or a subdirectory.

Required

`-ouri=oss://examplebucket.cn-beijing.oss-dls.aliyuncs.com/`

`f`

Starts the JindoFuse process. By default, a daemon process is used to start the JindoFuse process in the background. If you use this option, we recommend that you enable terminal logs.

Daemon (background)

`-f`

`d`

Enables debug mode and runs JindoFuse in the foreground. Enable terminal logs when using this option.

—

`-d`

`auto_unmount`

Automatically unmounts the mount point when the JindoFuse process exits.

—

`-oauto_unmount`

`ro`

Mounts OSS-HDFS in read-only mode. Write operations are disabled.

—

`-oro`

`direct_io`

Bypasses page cache for object reads and writes.

—

`-odirect_io`

`kernel_cache`

Uses kernel cache to optimize read performance.

—

`-okernel_cache`

`auto_cache`

Enables automatic caching. Unlike `kernel_cache`, this option flushes the cache automatically when the object size or modification time changes.

—

`-oauto_cache`

`entry_timeout`

How long (in seconds) to cache object names on read. Set to `0` to disable.

`0.1`

`-oentry_timeout=60`

`attr_timeout`

How long (in seconds) to cache object attributes. Set to `0` to disable.

`0.1`

`-oattr_timeout=60`

`negative_timeout`

How long (in seconds) to cache object names when a read fails. Set to `0` to disable.

`0.1`

`-onegative_timeout=0`

`jindo_entry_size`

Number of directories to cache. Improves `readdir` performance. Set to `0` to disable.

`5000`

`-ojindo_entry_size=5000`

`jindo_attr_size`

Number of object attribute entries to cache. Improves `getattr` performance. Set to `0` to disable.

`50000`

`-ojindo_attr_size=50000`

`max_idle_threads`

Maximum number of idle threads.

`10`

`-omax_idle_threads=10`

`metrics_port`

HTTP port for serving metrics (for example, `http://localhost:9090/brpc_metrics`).

`9090`

`-ometrics_port=9090`

`enable_pread`

Uses the `pread` operation for object reads.

—

`-oenable_pread`

## **Appendix 3: Configuration items**

Configure these items in `jindosdk.cfg`.

**Item**

**Section**

**Description**

**Default**

`logger.dir`

`[common]`

Directory where logs are stored

`/tmp/jindodata-log`

`logger.sync`

`[common]`

Log write mode. `true`: synchronous. `false`: asynchronous.

`false`

`logger.consolelogger`

`[common]`

Whether to output logs to the console.

`false`

`logger.level`

`[common]`

Minimum log level to output. When terminal logs are enabled (`logger.consolelogger = true`), valid values are `0` (TRACE), `1` (DEBUG), `2` (INFO), `3` (WARN), `4` (ERROR), `5` (CRITICAL), `6` (OFF). When terminal logs are disabled, a value of `1` or lower outputs WARN-level logs, and a value greater than `1` outputs INFO-level logs.

`2` (INFO)

`logger.verbose`

`[common]`

Minimum verbose log level to output. Valid values: `0`–`99`. `0` disables verbose logs.

`0`

`logger.cleaner.enable`

`[common]`

Whether to enable automatic log cleanup.

`false`

`fs.oss.endpoint`

`[jindosdk]`

Endpoint used to access OSS-HDFS. Example: `cn-hangzhou.oss-dls.aliyuncs.com`.

—

`fs.oss.accessKeyId`

`[jindosdk]`

AccessKey ID used to access OSS-HDFS.

—

`fs.oss.accessKeySecret`

`[jindosdk]`

AccessKey secret used to access OSS-HDFS.

—
