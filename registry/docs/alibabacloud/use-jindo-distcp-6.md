This topic describes how to use Jindo DistCp.

## What is Jindo DistCp?

Jindo DistCp is a distributed copy tool developed by the Alibaba Cloud data lake storage team to copy files within or between large-scale clusters. Jindo DistCp uses MapReduce to distribute files, handle errors, and recover data. Files and directories are used as the input for map tasks. Each task copies part of the files and directories in the input list. Jindo DistCp supports full data copy among Hadoop Distributed File System (HDFS), OSS-HDFS, Object Storage Service (OSS), and Amazon Simple Storage Service (Amazon S3). Jindo DistCp also provides various copy parameters and copy policies. When you use Jindo DistCp to copy data from HDFS to OSS-HDFS, you can use a custom CopyCommitter to copy files without renaming files. This ensures that copies are consistent with the source files. Jindo DistCp supports all features provided by Amazon S3 DistCp and HDFS DistCp. Compared with HDFS DistCp, Jindo DistCp significantly improves the efficiency, stability, and security of data copying.

## Environment requirements

-   You need to install Java Development Kit (JDK) 1.8.0.
    
-   If you use Hadoop 2.3 or later, you need to download the latest JAR package of Jindo DistCp. You can download the latest jindosdk-${version}.tar.gz package from the link provided in the [Download JindoData](https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/4.x/jindodata_download.md) topic, extract the downloaded package, and then find the jindo-distcp-tool-x.x.x.jar package in the /tools folder.
    
    **Note**
    
    Jindo DistCp is deployed in clusters of E-MapReduce (EMR) V5.6.0 or a later minor version and clusters of EMR V3.40.0 or a later minor version. You can find the jindo-distcp-tool-x.x.x.jar package in the /opt/apps/JINDOSDK/jindosdk-current/tools directory.
    

## Parameters

Jindo DistCp provides a JAR package. You can use the hadoop jar command with a series of parameters to copy files.

**Parameter**

**Required**

**Description**

**Default value**

**Version**

**OSS**

**OSS-HDFS**

[\--src](#section-wto-m2f-xf6)

Yes

Specifies the source directory. The following prefixes are supported:

-   hdfs://
    
-   oss://
    
-   s3://
    
-   cos://
    
-   obs://
    

No default value

4.3.0 and later

Supported

Supported

[\--dest](#section-wto-m2f-xf6)

Yes

Specifies the destination directory. The following prefixes are supported:

-   hdfs://
    
-   oss://
    
-   s3://
    
-   cos://
    
-   obs://
    

No default value

4.3.0 and later

Supported

Supported

[\--bandWidth](#section-hew-g8f-jk5)

No

Specifies the bandwidth that can be used by a DistCp job. Unit: MB.

\-1

4.3.0 and later

Supported

Supported

[\--codec](#section-l7h-tfy-3ca)

No

Specifies the codec that is used to compress and decompress files. The following codecs are supported: gzip, gz, lzo, lzop, and snappy.

keep (The value indicates that the source files are copied without compressing or decompressing the files.)

4.3.0 and later

Supported

Supported

[\--policy](#section-til-xzg-ycp)

No

The storage class of the files copied to OSS. The following storage classes are supported: Standard, Infrequent Access (IA), Archive, and Cold Archive.

Standard

4.3.0 and later

Supported

Not supported

[\--filters](#section-1lv-das-6s3)

No

Specifies the file that contains filter conditions.

No default value

4.3.0 and later

Supported

Supported

[\--srcPrefixesFile](#section-57p-0h4-ag7)

No

Specifies the file that contains matching conditions.

No default value

4.3.0 and later

Supported

Supported

[\--parallelism](#section-2uv-qn5-cva)

No

Specifies the parallelism of a DistCp job. This parameter is equivalent to the mapreduce.job.maps parameter for MapReduce jobs.

10

4.3.0 and later

Supported

Supported

[\--jobBatch](#section-aab-d5v-vzv)

No

Specifies the number of files that can be processed by a DistCp job.

10000

4.5.1 or later

Supported

Supported

[\--taskBatch](#section-0sg-pgo-chz)

No

Specifies the number of files that can be processed by a DistCp task.

1

4.3.0 and later

Supported

Supported

[\--tmp](#section-v6o-2ow-y5h)

No

Specifies the HDFS temporary directory that is used to store temporary data.

/tmp

4.3.0 and later

Supported

Supported

[\--hadoopConf <key=value>](#section-zv0-y1l-acy)

No

Specifies the AccessKey pair that is used to access OSS or OSS-HDFS.

No default value

4.3.0 and later

Supported

Supported

[\--disableChecksum](#section-7sl-q17-n6u)

No

Specifies whether to disable the file checksum feature.

false

4.3.0 and later

Supported

Supported

[\--deleteOnSuccess](#section-a38-z5u-o1f)

No

Specifies whether to delete the source files after the files are copied.

false

4.3.0 and later

Supported

Supported

[\--enableTransaction](#section-vr8-vhx-lkb)

No

Specifies whether to enable the DistCp job to support transactions to ensure the atomicity of jobs.

false

4.3.0 and later

Supported

Supported

[\--ignore](#section-rlw-31t-q3o)

No

Specifies whether to ignore exceptions that occur during the data copy process to prevent the exceptions from interrupting the ongoing job.

false

4.3.0 and later

Supported

Supported

[\--enableCMS](#section-wr9-2m0-sbq)

No

Specifies whether to enable the monitoring and alerting features of CloudMonitor.

false

4.5.1 or later

Supported

Supported

[\--diff](#section-eo3-rvh-3fb)

No

Speficies whether to use the DIF mode. In DIF mode, a file is generated to record the differences between the source and destination files.

DistCpMode.COPY

4.3.0 and later

Supported

Supported

[\--update](#section-ami-d6v-nj5)

No

Specifies whether to use the UPDATE mode. In UPDATE mode, only incremental source files are copied, such as the source files that do not exist in the destination directory or the source files that differ from the destination files.

DistCpMode.COPY

4.3.0 and later

Supported

Supported

[\--preserveMeta](#section-9lc-du0-wey)

No

Specifies whether to copy metadata.

false

4.4.0 or later

Not supported

Supported

### **\--src and --dest (Required)**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

-   \--src: specifies the directory of the source files.
    
-   \--dest: specifies the directory of the destination files.
    

Sample command:

```
hadoop jar jindo-distcp-tool-${version}.jar --src /data/hourly_table  --dest oss://example-oss-bucket/hourly_table
```

You can use the --dest parameter to specify the directory to which the source files are copied. You can use the preceding sample command to copy the files in the /data/hourly\_table directory to the /hourly\_table directory in an OSS bucket named example-oss-bucket. Unlike HDFS DistCp, Jindo DistCp copies only the files in the source directory to the specified destination directory by default. Jindo DistCp does not copy the directory. To resolve this issue, you can specify the directory in the --dest parameter. If the specified directory does not exist in the destination directory, Jindo DistCp creates a directory.

If you want to copy a single file, specify a directory in the --dest parameter. Sample command:

```
hadoop jar jindo-distcp-tool-${version}.jar --src /test.txt --dest oss://example-oss-bucket/tmp
```

### **\--bandWidth**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--bandWidth: specifies the bandwidth used by a DistCp task. Unit: MB. This prevents a single DistCp task from occupying excessive bandwidth resources.

Sample command:

```
jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --bandWidth 6
```

### **\--codec**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

The destination files in OSS or OSS-HDFS are usually text files that are not compressed. Text files are not ideal for storage cost control or data analysis. Jindo DistCp allows you to configure the --codec parameter to compress the destination files online. This helps you save storage resources.

The --codec parameter specifies the codec that is used to compress and decompress files. Valid values: gzip, gz, lzo, lzop, snappy, none, and keep. Default value: keep. Descriptions of none and keep:

-   none: copies the source files without compression. If the source files are compressed, Jindo DistCp decompresses the files.
    
-   keep: copies the source files without compressing or decompressing the files.
    

Sample command:

```
jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --codec gz
```

After the command is run, you can check the files in the destination directory. The output shows that the files are compressed by using the gz codec.

```
[root@emr-header-1 opt]# hdfs dfs -ls oss://example-oss-bucket/hourly_table/2017-02-01/03
Found 6 items
-rw-rw-rw-   1        938 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/000151.sst.gz
-rw-rw-rw-   1       1956 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/1.log.gz
-rw-rw-rw-   1       1956 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/2.log.gz
-rw-rw-rw-   1       1956 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/OPTIONS-000109.gz
-rw-rw-rw-   1        506 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/emp01.txt.gz
-rw-rw-rw-   1        506 2020-04-17 20:58 oss://example-oss-bucket/hourly_table/2017-02-01/03/emp06.txt.gz
```

**Note**

If you want to use the lzo codec in an open source Hadoop cluster, you must install the native library of gplcompression and the hadoop-lzo package. If you do not have a Hadoop cluster, we recommend that you use other codecs.

### **\--filters**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--filters: specifies the file that contains filter conditions.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --filters filter.txt
```

For example, the filter.txt file contains the `.*test.*` string. In this case, the files whose paths contain the test string are not copied to OSS.

### **\-srcPrefixesFile**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--srcPrefixesFile: specifies the file that contains matching conditions.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --srcPrefixesFile prefixes.txt
```

For example, the prefixes.txt file contains the `.*test.*` string. In this case, only the files whose paths contain the test string are copied to OSS.

### **\--parallelism**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--parallelism: specifies the parallelism of a DistCp job. This parameter is equivalent to the mapreduce.job.maps parameter for MapReduce jobs. The default value of the mapreduce.job.maps parameter is 10 in EMR. You can specify the value of the --parallelism parameter based on the usage of cluster resources.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /opt/tmp --dest oss://example-oss-bucket/tmp --parallelism 20
```

### **\--taskBatch**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--taskBatch: specifies the number of files that can be processed by a DistCp task. Default value: 1.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --taskBatch 1
```

### **\--tmp**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--tmp: specifies the HDFS temporary directory that is used to store temporary data. The default value is /tmp, which indicates hdfs:///tmp/.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table  --tmp /tmp
```

### **\--hadoopConf**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--hadoopConf: specifies the AccessKey pair that is used to access OSS or OSS-HDFS in a non-EMR environment or a scenario in which AccessKey-free access is not supported. You can use the --hadoopConf parameter to specify an AccessKey pair.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --hadoopConf fs.oss.accessKeyId=yourkey --hadoopConf fs.oss.accessKeySecret=yoursecret
```

You can also add the AccessKey pair that is used to access OSS or OSS-HDFS to the core-site.xml file of Hadoop. This saves you the need to enter the AccessKey pair each time. For example, you can add the following information to the core-site.xml file of the Hadoop-Common service in the EMR console:

```
<configuration>
    <property>
        <name>fs.oss.accessKeyId</name>
        <value>xxx</value>
    </property>

    <property>
        <name>fs.oss.accessKeySecret</name>
        <value>xxx</value>
    </property>
</configuration>
```

### **\-disableChecksum**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--disableChecksum: specifies whether to disable the file checksum feature.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --disableChecksum
```

### **\-deleteOnSuccess**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--deleteOnSuccess: specifies whether to migrate data instead of copying data. When you configure this parameter, the copy operation is similar to the operation performed by using the mv command. Jindo DistCp copies the source files and then deletes the source files from the source directory.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --deleteOnSuccess
```

### **\--enableTransaction**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--enableTransaction: specifies whether to enable transactions for jobs. Transactions help ensure data integrity at the job level. By default, Jindo DistCp ensures data integrity at the task level.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --enableTransaction
```

### **\--ignore**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--ignore: specifies whether to ignore exceptions that occur during the data copy process to prevent the exceptions from interrupting the ongoing job. The exceptions are displayed in Jindo DistCp counters. If the monitoring and alerting features of CloudMonitor are enabled, the system sends notifications to you by using the specified methods when exceptions occur.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --ignore
```

### **\--diff**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--diff: specifies whether to use the DIF mode. In DIF mode, a file is generated to record the differences between the source and destination files. If a source file fails to be copied to the destination directory, a file is generated in the directory where the command is run to record the differences between the source and destination files. If Jindo DistCp has performed compression or decompression operations during the copy process, --diff does not return accurate file size differences.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --diff
```

If the destination files differ from the source files, a file is generated in the directory where the command is run to record the file differences and the following information is displayed:

```
JindoCounter
DIFF_FILES=1
```

If the destination directory is an HDFS directory, you can specify the directory in the /path, hdfs://hostname:ip/path, or hdfs://headerIp:ip/path format. Other formats, such as hdfs:///path and hdfs:/path, are not supported.

If you want to view the metadata differences between the source and destination files, you can configure the `--diff` and --preserveMeta parameters. Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --diff --preserveMeta
```

### **\--update**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Supported

\--update: specifies whether to use the UPDATE mode. In UPDATE mode, only incremental source files are copied, such as the source files that do not exist in the destination directory or the source files that differ from the destination files.

If a Jindo DistCp job is interrupted and files fail to be copied to the destination directory, you can use the --update parameter to copy these files. If specific files are added to the source directory, you can also use the --update parameter to copy the incremental files to the destination directory.

Sample command:

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --update
```

### **\--policy**

**Version**

**OSS**

**OSS-HDFS**

4.3.0 and later

Supported

Not supported

\--policy: specifies the storage class of the files copied to OSS, such as Cold Archive, Archive, or IA. If you do not configure this parameter, the Standard storage class is used by default.

-   Cold Archive
    
    Only specific regions support this storage class. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb). Sample command:
    
    ```
     jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-bucket/hourly_table --policy coldArchive --parallelism 20
    ```
    
-   Archive
    
    ```
     jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-bucket/hourly_table --policy archive --parallelism 20
    ```
    
-   IA
    
    ```
     jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-bucket/hourly_table --policy ia --parallelism 20
    ```
    

### **\--preserveMeta**

**Version**

**OSS**

**OSS-HDFS**

4.4.0 and later

Not supported

Supported

\--preserveMeta: specifies whether to copy metadata during the data copy process, including the Owner, Group, Permission, Atime, Mtime, Replication, BlockSize, XAttrs, and ACL metadata.

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --preserveMeta
```

### **\--jobBatch**

**Version**

**OSS**

**OSS-HDFS**

4.5.1 and later

Supported

Supported

\--jobBatch: specifies the number of files that can be processed by a DistCp job when you copy data to OSS. Default value: 10000.

```
 jindo-distcp-tool-${version}.jar --src /data/hourly_table --dest oss://example-oss-bucket/hourly_table --jobBatch 50000
```

### **\--enableCMS**

**Version**

**OSS**

**OSS-HDFS**

4.5.1 and later

Supported

Supported

\--enableCMS: specifies whether to enable the monitoring and alerting features of CloudMonitor.[](https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/5.x/jindodata/jindotools/jindodistcp_how_to_cms.md)

## Jindo DistCp counters

Jindo DistCp counters describe the execution results of Jindo DistCp jobs. The following table describes specific counters.

**Counter**

**Description**

COPY\_FAILED

The number of files that fail to be copied.

CHECKSUM\_DIFF

The number of files that fail to pass the checksum verification. The number is added to the value of COPY\_FAILED.

FILES\_EXPECTED

The number of files that are expected to be copied.

BYTES\_EXPECTED

The number of bytes that are expected to be copied.

FILES\_COPIED

The number of files that are copied.

BYTES\_COPIED

The number of bytes that are copied.

FILES\_SKIPPED

The number of files that are skipped during incremental updates.

BYTES\_SKIPPED

The number of bytes that are skipped during incremental updates.

DIFF\_FILES

The number of files that are different in the source and destination directories.

SAME\_FILES

The number of files that are identical in the source and destination directories.

DST\_MISS

The number of files that do not exist in the destination directory. The number is added to the value of DIFF\_FILES.

LENGTH\_DIFF

The number of files that are of different sizes in the source and destination directories. The number is added to the value of DIFF\_FILES.

CHECKSUM\_DIFF

The number of files that fail to pass the checksum verification. The number is added to the value of DIFF\_FILES.

DIFF\_FAILED

The number of files that are not properly compared.
