This topic describes common issues and solutions when you use ossfs 2.0.

## **General information**

ossfs 2.0 error messages contain HTTP request error information. To troubleshoot issues, check the corresponding HTTP response status codes, such as `4**` and `5**`, and the message returned by OSS in the logs.

## **Mounting issues**

### **Mount error: ERROR: failed to mount ossfs2, see more details in log file**

**Problem analysis**: This is a general error. Check the logs for specific error details. Common causes include incorrect permissions or configuration parameters. For example:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102882471/p932456.png)

The AccessKey does not have the required permissions to access the bucket. Confirm that your AccessKey has the correct permissions and that the bucket name is configured correctly.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102882471/p932457.png)

The AccessKey parameters that you configured are incorrect.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102882471/p932455.png)

**Solution**: Correct the configurations based on the error message in the log, and then mount the bucket again.

### **Mount error: MOUNTPOINT: Directory does not exist: /mnt/ossfs2**

**Problem analysis**: This error occurs because the directory has not been created.

**Solution**: Create the directory, and then perform the mount operation.

### **Mount error: MOUNTPOINT: directory /mnt/ossfs2 is not empty.**

**Problem analysis**: The mount target directory is not empty. ossfs 2.0 requires that the mount directory is empty.

**Solution**: Check if another file system is already mounted to the directory. If so, unmount it using the umount command. If no other file system is mounted, check for any remaining files in the directory. You can also mount to a different empty directory.

### **Mount error: version \`FUSE\_3.12' not found**

**Problem analysis**: This error indicates that some installation files are missing. As a result, ossfs 2.0 attempts to use the system-installed libfuse library, but its version is too old.

**Solution**: Uninstall the corresponding package and then reinstall it.

### **Mount error: fuse: device not found, try 'modeprobe fuse' first or fuse\_session\_mount failed with error: No such file or directory in the log**

**Problem analysis**: The /dev/fuse device cannot be accessed. This issue is common in container environments that lack the necessary access permissions.

**Solution**: If you are mounting in a container environment, start the container in privileged mode.

## **Read and write issues**

### **File write error: File too large**

**Problem analysis**: By default, ossfs 2.0 uses a part size of 8 MiB and supports a maximum file size of 78.125 GiB. This error occurs if you attempt to write a file that exceeds this limit.

**Solution**: When you mount a bucket, you can increase the maximum supported file size by configuring the `upload_buffer_size` option. Note that configuring `upload_buffer_size` requires more memory resources. ossfs 2.0 lets you configure `total_mem_limit` to control memory usage. For more information, see [Mounting options](/help/en/oss/developer-reference/description-of-mount-options).

### **File write error: Invalid argument**

**Problem analysis**: ossfs 2.0 does not support random writes to files. It supports only sequential appends to the end of a file. If you write to a position other than the current end of the file, an \`Invalid argument\` error occurs. The error message in the log is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8539674471/p942952.png)

**Solution**: If your application requires random writes, switch to ossfs 1.0. Random writes often result from concurrent writes to the same file handle. For this scenario, ossfs 2.0 is optimized for sequential writes, and a single-threaded process provides good throughput. You can switch to single-threaded sequential writes to resolve this issue.

### **\`git clone\` fails in the mount target (unexpected \`No such file or directory\` error when reading a file)**

**Problem analysis**: By default, ossfs 2.0 does not support writing to and reading from the same file simultaneously. If you read a file while it is being written, the operation may return old data or cause a read error. The \`git clone\` command uses a write-while-reading access mode. The following error message appears in the logs:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102882471/p932458.png)

In this case, errno 2 is the Linux error code ENOENT, which indicates that the file data was not read correctly. If you encounter read errors with other applications, check the logs for similar error messages. If a read operation does not return a \`file not found\` error, this might be because the application has not yet closed the file, and the file has not been uploaded to OSS.

**Solution**: Avoid using such commands. You can use `git clone` to clone the repository to a local disk and then use the cp command to copy the files to the mount target.

### **Concurrent write error: Device or resource busy**

**Problem analysis**: In ossfs 2.0, if a file is opened multiple times simultaneously, only one file handle can be used for sequential writing. Subsequent write operations from other file handles will fail. The following error message is returned:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102882471/p932454.png)

**Solution**: Avoid writing to the same file concurrently. ossfs 2.0 is optimized for sequential writes, and a single-threaded process provides good throughput.

## **Other issues**

### **Unmount error: umount: /mnt/ossfs2: target is busy.**

**Problem analysis**: This error occurs because a process is accessing files in the /mnt/ossfs2 mount directory, which prevents the directory from being unmounted.

**Solution**:

1.  Use `lsof /mnt/ossfs2` to find the process that is accessing the directory.
    
2.  Stop the process.
    
3.  Unmount the directory again.
    

### **Numerous 404 logs appear when using ossfs 2.0**

**Background information**: When you use ossfs 2.0, you may see many \`404 Not Found\` records in the logs. In most cases, this is not a system error but expected behavior that allows ossfs 2.0 to simulate local file system semantics.

Before performing an operation on a file, the operating system checks whether the target object exists. This process can generate many probe requests to OSS. A \`404\` status code is returned if the object does not exist.

The process that ossfs 2.0 uses to check whether an object exists is as follows:

1.  Sends a GetObjectMeta request to query whether a specified path, such as `object`, exists as an object.
    
    If the object exists, the system returns the object metadata. If the object does not exist, the system returns a \`404\` error and proceeds to the next step.
    
    **Note**
    
    Even if the object does not exist, ossfs 2.0 still needs to determine whether the path represents a directory.
    
2.  After receiving the \`404\` error, ossfs 2.0 sends a ListObjects request to determine whether the specified path is a directory. This is done by querying for objects with the prefix `object/`.
    
    If the result is empty, the path is considered non-existent. If the result is not empty, the path is considered an existing directory, and the system lists its contents.
    

**Problem analysis**:

-   When you use commands such as stat to access a non-existent file, the system returns a \`404\` error. This is mapped to the local file system's \`No such file or directory\` error.
    
-   Before creating files or directories in a batch operation, the operating system first checks whether the target file exists. A creation request is sent only if the file does not exist. The \`404\` errors generated during this check are expected and do not indicate system exceptions.
    

**Solution**: Although \`404\` errors are normal, frequent probe requests can degrade performance in high-concurrency or batch operation scenarios. You can optimize performance using the following configurations:

**Important**

After you configure these options, ossfs 2.0 cannot detect changes made to files in OSS until the local cache expires.

1.  Increase the metadata cache duration by increasing the value of `--attr_timeout`. The default is 60 s.
    
    This prevents repeated requests from being sent to OSS for files or directories that are queried before their metadata expires.
    
2.  Enable the negative cache by configuring `--oss_negative_cache_size` and `--oss_negative_cache_timeout`.
    
    When a file is queried for the first time and does not exist, this result is stored in the memory cache. Subsequent queries for the same file check the local negative cache before the cache expires, which avoids sending a new request to OSS.
    
    -   `--oss_negative_cache_size`: Specifies the number of entries in the negative cache for OSS files. The default is 10000.
        
    -   `--oss_negative_cache_timeout`: Specifies the expiration time for the negative cache of OSS files. The default is 0.
