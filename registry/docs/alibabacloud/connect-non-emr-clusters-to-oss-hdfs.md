The OSS-HDFS service (also known as the JindoFS service) is fully compatible with Hadoop Distributed File System (HDFS) interfaces and supports directory-level operations. With the Jindo software development kit (SDK), Apache Hadoop applications—including MapReduce, Hive, Spark, and Flink—can read from and write to OSS-HDFS directly.

This guide walks you through deploying JindoSDK on an ECS instance and running basic file operations against the OSS-HDFS service.

> If you use an Alibaba Cloud EMR cluster, see [Quick start for connecting to the OSS-HDFS service from an EMR cluster](/help/en/oss/user-guide/connect-emr-clusters-to-oss-hdfs) instead.

## Prerequisites

Before you begin, ensure that you have:

-   **Permissions**: An Alibaba Cloud account has access by default. If you use a RAM user, grant the RAM user the required permissions first. For details, see [Grant a RAM user the permissions to connect to the OSS-HDFS service from a non-EMR cluster](/help/en/oss/user-guide/authorize-access-to-oss-hdfs-services#7e4e949833p67)
    
-   **An ECS instance**: [Purchase and create an ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#section-ucc-o12-trs) if you don't already have one
    
-   **A Hadoop environment**: Set up a Hadoop runtime environment on the instance. For details, see [Create a Hadoop runtime environment](/help/en/oss/user-guide/use-self-managed-hadoop-to-access-oss-hdfs-by-using-jindosdk#section-v9p-s0h-wtd)
    
-   **OSS-HDFS enabled**: Enable the OSS-HDFS service for the target bucket and authorize access. For details, see [Enable the OSS-HDFS service](/help/en/oss/user-guide/enable-oss-hdfs-service#task-2201339)
    

## Set up JindoSDK

### Step 1: Connect to the ECS instance

[Connect to your ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#section-fqu-flq-xvv).

### Step 2: Download and decompress JindoSDK

1.  Download the JindoSDK JAR package. For the download link, see [JindoSDK download](https://github.com/aliyun/alibabacloud-jindodata/blob/latest/docs/user/en/jindosdk/jindosdk_download.md) on GitHub.
    
2.  Decompress the package. The following example uses `jindosdk-x.x.x-linux.tar.gz`, where `x.x.x` is the version number. Replace it with the actual filename.
    
    ```
       tar zxvf jindosdk-x.x.x-linux.tar.gz
    ```
    

### Step 3: Configure environment variables

Set `JINDOSDK_HOME` to the directory where you decompressed the package, then add the JindoSDK libraries to `HADOOP_CLASSPATH`.

```
export JINDOSDK_HOME=/usr/lib/jindosdk-x.x.x-linux
export HADOOP_CLASSPATH=$HADOOP_CLASSPATH:${JINDOSDK_HOME}/lib/*
```

**Important**

Deploy the installation directory and set these environment variables on all required nodes.

### Step 4: Configure the OSS-HDFS implementation class

Open `core-site.xml`:

```
vim /usr/local/hadoop/etc/hadoop/core-site.xml
```

Add the following properties to register JindoSDK as the OSS file system implementation:

```
<configuration>
    <property>
        <name>fs.AbstractFileSystem.oss.impl</name>
        <value>com.aliyun.jindodata.oss.JindoOSS</value>
        <description>Registers JindoSDK as the AbstractFileSystem implementation for the oss:// scheme.</description>
    </property>

    <property>
        <name>fs.oss.impl</name>
        <value>com.aliyun.jindodata.oss.JindoOssFileSystem</value>
        <description>Registers JindoSDK as the FileSystem implementation for the oss:// scheme.</description>
    </property>
</configuration>
```

### Step 5: Configure authentication

Add your AccessKey pair to `core-site.xml`. For the permissions required, see [Grant a RAM user the permissions to connect to the OSS-HDFS service from a non-EMR cluster](/help/en/oss/user-guide/authorize-access-to-oss-hdfs-services#7e4e949833p67).

```
<configuration>
    <property>
        <name>fs.oss.accessKeyId</name>
        <value>xxx</value>
        <description>AccessKey ID for authenticating requests to OSS-HDFS.</description>
    </property>

    <property>
        <name>fs.oss.accessKeySecret</name>
        <value>xxx</value>
        <description>AccessKey Secret for authenticating requests to OSS-HDFS.</description>
    </property>
</configuration>
```

### Step 6: Configure the endpoint

You must configure an endpoint to access an OSS bucket. Use the following path format:

```
oss://<Bucket>.<Endpoint>/<Object>
```

For example:

```
oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/exampleobject.txt
```

JindoSDK uses the endpoint in the access path to access the corresponding OSS-HDFS service API.

## Run basic operations

Use HDFS Shell commands to read and write files on the OSS-HDFS service.

**Upload a file**

The following example uploads `examplefile.txt` from the local root directory to `examplebucket`:

```
hdfs dfs -put examplefile.txt oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/
```

**Download a file**

The following example downloads `exampleobject.txt` from `examplebucket` to the local `/tmp` directory:

```
hdfs dfs -get oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/exampleobject.txt /tmp/
```

For more HDFS Shell commands, see [Access the OSS-HDFS service using Hadoop shell commands](/help/en/oss/user-guide/use-hadoop-shell-commands-to-access-oss-hdfs).

## **Appendix: Performance tuning**

The following configuration items are supported in JindoSDK 4.0 and later. Add them to `core-site.xml` to tune performance for your workload.

**Parameter**

**Default**

**Description**

`fs.oss.tmp.data.dirs`

`/tmp/`

Directories for temporary files written by the client. Separate multiple directories with commas. In a multi-user environment, set read and write permissions on each directory.

`fs.oss.retry.count`

`5`

Number of retries after a failed request to OSS.

`fs.oss.timeout.millisecond`

`30000`

Timeout for OSS requests, in milliseconds.

`fs.oss.connection.timeout.millisecond`

`3000`

Timeout for connecting to OSS, in milliseconds.

`fs.oss.upload.thread.concurrency`

`5`

Number of concurrent threads for uploading a single file to OSS.

`fs.oss.upload.queue.size`

`5`

Queue size for concurrent upload tasks to OSS.

`fs.oss.upload.max.pending.tasks.per.stream`

`16`

Maximum number of concurrent upload tasks per process.

`fs.oss.download.queue.size`

`5`

Queue size for concurrent download tasks from OSS.

`fs.oss.download.thread.concurrency`

`16`

Maximum number of concurrent download tasks per process.

`fs.oss.read.readahead.buffer.size`

`1048576`

Read-ahead buffer size, in bytes.

`fs.oss.read.readahead.buffer.count`

`4`

Number of concurrent read-ahead buffers.

To apply any of these settings, add the corresponding `<property>` block to `core-site.xml`:

```
<configuration>
    <property>
        <name>fs.oss.retry.count</name>
        <value>5</value>
        <description>Number of retries after a failed request to OSS.</description>
    </property>
</configuration>
```
