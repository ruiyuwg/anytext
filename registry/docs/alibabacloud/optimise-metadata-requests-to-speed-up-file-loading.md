When using ossfs 2.0 to interact with OSS (Object Storage Service), properly optimizing the number of metadata requests sent to the OSS server not only reduces OSS requests to save service invocation costs but also improves system concurrent processing capability while enhancing the read and write performance of mount points.

## **Basic principles**

ossfs 2.0 is developed based on the FUSE (Filesystem in Userspace) framework, which transforms file system metadata operation interfaces into corresponding OSS requests, enabling access to OSS storage resources through file system operations.

**Command**

**Interface conversion rules**

`lookup`

When executing `lookup` or `stat` operations and the metadata cache is invalid, ossfs 2.0 will first send a GetObjectMeta request to OSS to obtain the attribute information of the object with the same name.

If the GetObjectMeta request returns a 404 response (indicating the object does not exist), it will further send a ListObject(max-keys=1) request to query whether a virtual folder object with the same name exists.

`stat`

`readdir`

When executing `readdir` or `readdirplus` operations, ossfs 2.0 will repeatedly send ListObject requests to OSS.

Note that ossfs 2.0 enables the `readdirplus` feature by default. When this feature is enabled, the results of ListObject requests will be used to update the metadata cache information for all subitems in the corresponding folder, thereby effectively reducing the number of subsequent metadata requests for child files.

`readdirplus`

## **Scenario analysis**

Significant differences exist between accessing a file in a file system and accessing an object with the same name in OSS.

### **File access methods**

ossfs 2.0 uses a top-down access method from the root directory to access files. For example, to obtain the attribute information of the object file located at the /dir/object path, the execution flow of the `stat /dir/object` command is as follows:

1.  First, perform an operation on /dir, sending a GetObjectMeta dir request. If it returns 404 Not Found, it indicates that the object does not exist, and then a ListObject (max-keys=1)dir/ request is sent. If it returns 200 OK, it indicates that a corresponding virtual folder exists.
    
2.  Perform an operation on /dir/object, sending a GetObjectMeta dir/object request. If it returns 200 OK, the object attribute information is successfully obtained.
    

Based on the above analysis, a single `stat /dir/object` command execution is ultimately converted into two GetObjectMeta requests and one ListObject request. Additionally, the metadata requests of the file system are converted into multiple OSS requests, and the number increases with the depth of the file, causing a significant decrease in performance.

### **Impact of file metadata caching**

**Important**

ossfs 2.0 enables file metadata caching by default, with a default cache validity period of 60 seconds. The cache capacity of metadata is implemented based on the FUSE low-level API and is determined by the operating system kernel when to evict. Machines with more memory can typically cache more metadata information.

Taking the example of obtaining attribute information for 100 child files in the /dir/ directory to illustrate the impact of file metadata caching on performance.

-   #### **Without metadata caching**
    
    -   Accessing files with a known file list:
        
        When executing the `stat /dir/object-<i>` command in a loop, each `stat` operation will be converted into one GetObjectMeta request, ultimately generating 100 GetObjectMeta requests sent to OSS to obtain file attributes, resulting in too many metadata requests affecting performance.
        
    -   Accessing files with an unknown file list:
        
        When executing the `ls` command, this operation will be converted into one ListObject request sent to OSS to obtain the file list, and then execute the `stat /dir/object-<i>` command in a loop to obtain file attributes based on the obtained file list. This will ultimately generate one ListObject request and 100 GetObjectMeta requests sent to OSS, resulting in too many metadata requests affecting performance.
        
    
-   #### **With metadata caching**
    
    -   Accessing files with a known file list:
        
        When executing the `stat /dir/object-<i>` command in a loop, each `stat` operation will be converted into one GetObjectMeta request, ultimately generating 100 GetObjectMeta requests. These 100 requests will directly hit the local metadata cache to obtain file attributes within the cache validity period, thereby effectively reducing the number of requests sent to OSS.
        
    -   Accessing files with an unknown file list:
        
        When executing the `ls` command, this operation will be converted into one ListObject request sent to OSS while updating the local metadata cache. After completing the cache update, when executing the `stat /dir/object-<i>` command in a loop, since the metadata is already in the local cache, no additional OSS requests will be sent.
        
    

Based on the above analysis, the metadata caching mechanism can effectively reduce the number of repeated requests sent to OSS. When traversing all files in a folder, using `ls` can preload the metadata cache, thereby effectively reducing subsequent OSS requests for child files.

## **Optimization methods**

You can reduce the number of metadata requests sent to OSS and improve overall performance in the following ways:

### **Extend metadata cache time**

If the data being read will not be modified once uploaded to OSS, or if the modification interval is much longer than the metadata cache time, you can configure a longer metadata cache validity period through the `attr_timeout` mount option to reduce repeated metadata requests and improve performance. The mount option configuration example is as follows.

-   Business scenario: In a data annotation scenario, the system reads a batch of previously collected raw data, processes it, and then generates a new batch of data. In this scenario, the raw data will not be modified once uploaded to OSS.
    
-   Mount configuration: In the [ossfs 2.0 configuration file](/help/en/oss/developer-reference/configure-ossfs-2-0#ed50989660a4u), configure the metadata cache validity period to 7200 seconds.
    
    ```
    # Bucket Endpoint (region node)
    --oss_endpoint=https://oss-cn-hangzhou-internal.aliyuncs.com
    
    # Bucket name
    --oss_bucket=bucketName
    
    # Metadata cache validity period
    --attr_timeout=7200
    
    # Access keys AccessKey ID and AccessKey Secret (optional for ossfs 2.0.1 and later versions)
    --oss_access_key_id=LTAI******************
    --oss_access_key_secret=8CE4**********************
    ```
    

### **Operate after obtaining file list**

When traversing all files in a directory, you can first use the `ls` command or send a ListObject request to preload the metadata of all files in the target folder into the local metadata cache, combined with a longer cache validity period, to reduce repeated metadata requests and ultimately improve overall performance.

The `ls` command can be replaced by any high-level language program used to read folder contents. Here are common examples for obtaining the file list in the /mnt/data/ directory.

## Python

```
os.listdir('/mnt/data/')
```

## Go

```
entries, err := os.ReadDir("/mnt/data/")
```

## C

```
dir = opendir("/mnt/data/");
if (dir != NULL) {
  struct dirent *entry;
  while((entry = readdir(dir)) != NULL) {}
  closedir(dir);
}
```

### **Use a negative cache to accelerate file creation**

To create a new file, a file system executes two system calls in sequence: `lookup` and `create`.

1.  The `lookup` operation determines if the corresponding file exists. In ossfs 2.0, this operation is parsed into a GetObjectMeta request and a ListObjects request.
    
2.  If a 404 Not Found error is returned, ossfs creates the file using the `create` operation. When ossfs 2.0 executes `create`, it also sends a GetObjectMeta request and a ListObjects request to query whether the file exists in OSS.
    

Therefore, the process of creating a new file involves four OSS metadata query operations.

ossfs 2.0 supports the caching of \`404\` requests that are returned by OSS to reduce subsequent duplicate requests. To enable this feature, specify the following options when you mount the file system:

-   `--oss_negative_cache_timeout=30` (The default value is 0 seconds. We recommend that you set this value to be less than the value of `attr_timeout`.)
    
-   `--oss_negative_cache_size=10000` (Default value: 10000)
    

When the OSS negative cache is enabled, the 404 request from the `lookup` operation for a new file is cached. As a result, the subsequent query during the `create` operation hits the negative cache, and no request is sent to OSS. This reduces the number of OSS requests for the file creation process from four to two.

**Important**

After you enable the OSS negative cache, if a 404 cache entry for a file named object-A is cached, the file is visible at the mount target only after the cache entry expires, even if you immediately create object-A in OSS. The cache validity period is specified by `oss_negative_cache_timeout`. We do not recommend that you enable this feature in scenarios that require high data consistency.

## **Performance comparison**

Test method: In an ECS instance in the same region as the target OSS Bucket, use the ossfs 2.0 tool to mount the OSS Bucket through an internal same-region endpoint with metadata caching enabled, and then read the metadata of 10000 files in the mounted Bucket directory.

Test results

**Operation**

**Time consumed**

Without preloading metadata cache (reading file metadata in the folder directly without executing the `ls` command in advance)

111 seconds

With preloading metadata cache (executing the `ls` command in advance, then reading file metadata in the folder)

18 seconds

Test conclusion: In scenarios with many file metadata reads, preloading metadata cache in advance combined with a reasonable metadata cache validity period can significantly reduce the number of metadata requests sent to OSS, thereby improving overall performance.
