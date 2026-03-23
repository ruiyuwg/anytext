After Simple Log Service (SLS) collects logs, you can ship the logs to an Object Storage Service (OSS) bucket for data storage and analysis. This topic describes how to create an OSS data shipping job of the new version.

## Prerequisites

-   A project and a logstore are created. For more information, see [Use LoongCollector to collect and analyze ECS text logs](/help/en/sls/getting-started#section-2l7-ol2-zro).
    
-   Data is collected. For more information, see [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   An OSS bucket is created in the region where the SLS project resides. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    

## Supported regions

SLS ships data to an OSS bucket that resides in the same region as the specified SLS project.

**Important**

You can use the new version of the data shipping feature to ship data to OSS only in the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Chengdu), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Japan (Tokyo), US (Silicon Valley), and US (Virginia).

## Create a data shipping job

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, find the logstore, click **\>**, and then choose **Data Processing** > **Export** > **Object Storage Service (OSS)**.
    
4.  Move the pointer over **Object Storage Service (OSS)** and click the **+** icon.
    
5.  In the **Create Data Shipping Job** panel, select **OSS Export** and click **OK**.
    
6.  In the **Data Shipping to OSS** panel, configure the parameters and click **OK**.
    
    **Important**
    
    -   After you create an OSS data shipping job, the frequency at which the data in a shard is shipped to the OSS bucket is based on the values of the Shipping Size and Shipping Time parameters that you configure when you create the job. If one of the conditions specified by Shipping Size and Shipping Time is met, data is shipped.
        
    -   After you create an OSS data shipping job, check whether the job meets your requirements based on the status of the job and the data that is shipped to OSS.
        
    
    **Parameter**
    
    **Description**
    
    **Job Name**
    
    The name of the data shipping job.
    
    **Display Name**
    
    The display name of the data shipping job.
    
    **Job Description**
    
    The description of the data shipping job.
    
    **OSS Bucket**
    
    The name of the OSS bucket to which you want to ship data.
    
    **Important**
    
    -   You can ship data only to an existing OSS bucket for which the Write Once Read Many (WORM) feature is disabled. The bucket must reside in the same region as your SLS project. For more information about the WORM feature, see [Retention policies](/help/en/oss/user-guide/oss-retention-policies).
        
    
    -   You can ship data to an OSS bucket of the Standard, Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive storage class. By default, the storage class of the generated OSS objects that store the shipped data is the same as the storage class of the specified OSS bucket. For more information, see [Overview of storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).
        
    -   The following limits apply to an OSS bucket that is not of the Standard storage class: minimum storage period and minimum billable size. We recommend that you specify a storage class based on your business requirements when you create an OSS bucket. For more information, see [Differences between storage classes](/help/en/oss/user-guide/overview-53/#section-tbz-dt6-bg2).
        
    
    **File Delivery Directory**
    
    The directory to which you want to ship data in the OSS bucket. The directory name cannot start with a forward slash (/) or a backslash (\\).
    
    After you create the OSS data shipping job, the data in the logstore is shipped to the directory.
    
    **Object Suffix**
    
    The suffix of the OSS objects in which the shipped data is stored. If you do not specify an object suffix, SLS automatically generates an object suffix based on the storage format and compression type that you specify. Example: `.suffix`.
    
    **Partition Format**
    
    The partition format that is used to generate subdirectories in the OSS bucket. A subdirectory is dynamically generated based on the shipping time. The default partition format is %Y/%m/%d/%H/%M. The partition format cannot start with a forward slash (/). For more information about partition format examples, see [Partition formats](#section-ytg-xbb-idc). For more information about the parameters of partition formats, see [strptime API](https://man7.org/linux/man-pages/man3/strptime.3.html).
    
    **OSS Write RAM Role**
    
    The method that is used to authorize the OSS data shipping job to write data to the OSS bucket. Valid values:
    
    -   **Default Role**: specifies that the OSS data shipping job assumes the AliyunLogDefaultRole system role to write data to the OSS bucket. If you select this option, the Alibaba Cloud Resource Name (ARN) of the AliyunLogDefaultRole system role is automatically specified. For more information about how to obtain the ARN, see [Access data by using a default role](/help/en/sls/access-data-by-using-a-default-role-3#task-2156395).
        
    -   **Custom Role**: specifies that the OSS data shipping job assumes a custom role to write data to the OSS bucket.
        
        If you select this option, you must grant the custom role the permissions to write data to the OSS bucket. Then, enter the ARN of the custom role in the **OSS Write RAM Role** field. For information about how to obtain the ARN, see one of the following topics based on your business scenario:
        
        -   If the logstore and the OSS bucket belong to the same Alibaba Cloud account, obtain the ARN by following the instructions that are provided in [Step 2: Grant the RAM role the permissions to write data to an OSS bucket](/help/en/sls/access-data-within-an-alibaba-cloud-account-by-using-a-custom-role#section-ikl-v3l-16u).
            
        -   If the logstore and the OSS bucket belong to different Alibaba Cloud accounts, obtain the ARN by following the instructions that are provided in [Step 2: Grant the role-b RAM role the permissions to write data to an OSS bucket](/help/en/sls/access-data-across-alibaba-cloud-accounts-by-using-a-custom-role#section-jwj-z1h-6do).
            
        
    
    **Logstore Read RAM Role**
    
    The method that is used to authorize the OSS data shipping job to read data from the logstore. Valid values:
    
    -   **Default Role**: specifies that the OSS data shipping job assumes the AliyunLogDefaultRole system role to read data from the logstore. If you select this option, the ARN of the AliyunLogDefaultRole system role is automatically specified. For more information about how to obtain the ARN, see [Access data by using a default role](/help/en/sls/access-data-by-using-a-default-role-3#task-2156395).
        
    -   **Custom Role**: specifies that the OSS data shipping job assumes a custom role to read data from the logstore.
        
        If you select this option, you must grant the custom role the permissions to read data from the logstore. Then, enter the ARN of the custom role in the **Logstore Read RAM Role** field. For information about how to obtain the ARN, see one of the following topics based on your business scenario:
        
        -   If the logstore and the OSS bucket belong to the same Alibaba Cloud account, obtain the ARN by following the instructions that are provided in [Step 1: Grant the RAM role the permissions to read data from a logstore](/help/en/sls/access-data-within-an-alibaba-cloud-account-by-using-a-custom-role#section-va5-c3b-801).
            
        -   If the logstore and the OSS bucket belong to different Alibaba Cloud accounts, obtain the ARN by following the instructions that are provided in [Step 1: Grant the role-a RAM role the permissions to read data from a logstore](/help/en/sls/access-data-across-alibaba-cloud-accounts-by-using-a-custom-role#section-0uy-54e-929).
            
        
    
    **Storage Format**
    
    The storage format of data. After data is shipped from SLS to OSS, the data can be stored in different formats. For more information, see [CSV format](/help/en/sls/csv-format#concept-hch-k4q-zdb), [JSON format](/help/en/sls/json-format-3#concept-2156388), [Parquet format](/help/en/sls/parquet-format-3#concept-2156390), and [ORC format](/help/en/sls/orc-format#concept-2184929).
    
    **Compress**
    
    Specifies whether to compress data that is shipped to OSS. Valid values:
    
    -   No Compress(none): Data is not compressed.
        
    -   Compress(snappy): Data is compressed by using the snappy algorithm. This way, less storage space is occupied in the OSS bucket. For more information, see [snappy](https://github.com/google/snappy/blob/main/README.md).
        
    -   Compress(zstd): Data is compressed by using the zstd algorithm. This way, less storage space is occupied in the OSS bucket.
        
    -   Compress(gzip): Data is compressed by using the gzip algorithm. This way, less storage space is occupied in the OSS bucket.
        
    
    **Ship Tag**
    
    The reserved field. For more information, see [Reserved fields](/help/en/sls/reserved-fields).
    
    **Batch Size**
    
    The job starts to ship data when the data amount of logs in the shard reaches the value of this parameter. The value also determines the size of raw data in each OSS object. Valid values: 5 to 256. Unit: MB.
    
    **Note**
    
    The Batch Size parameter specifies the data amount of logs that are read from a shard instead of the data amount of logs that are stored in SLS. The job starts to read and ship data only if the setting of the Batch Interval parameter is met.
    
    **Batch Interval**
    
    The job starts to ship data on a shard when the difference between the time when SLS receives the first log of the shard and the time when SLS receives the nth log of the shard is greater than or equal to the value of this parameter. Valid values: 300 to 900. Unit: seconds. Default value: 300.
    
    **Shipping Time**
    
    The interval between two operations that ship the data of a shard. Valid values: 300 to 900. Default value: 300. Unit: seconds.
    
    **Shipping Latency**
    
    The latency of data shipping. For example, if you set the value to 3600, data is shipped after 1 hour. The data that is generated at 10:00:00 on June 5, 2023 is not written to the specified OSS bucket until 11:00:00 on June 5, 2023. For more information about limits, see [Configuration items](/help/en/sls/stability-and-limits-of-oss-data-shipping#a4af5d47b1wbh).
    
    **Start Time Range**
    
    The time range of data that the OSS data shipping job can ship. The time range varies based on the time when logs are received. Valid values:
    
    -   All: The OSS data shipping job ships data in the logstore from the first log until the job is manually stopped.
        
    -   From Specific Time: The OSS data shipping job ships data in the logstore from the log that is received at the specified start time until the job is manually stopped.
        
    -   Specific Time Range: The OSS data shipping job ships data in the logstore from the log that is received at the specified start time to the log that is received at the specified end time.
        
    
    **Note**
    
    The `__tag__:__receive_time__` field specifies the time range. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
    
    **Time Zone**
    
    The time zone that is used to format the time.
    
    If you configure the **Time Zone** and **Shard Format** parameters, the system generates subdirectories in the OSS bucket based on your configurations.
    

## View OSS data

After data is shipped to OSS, view the data in the OSS console. You can also view the data by using other methods, such as OSS API or OSS SDK. For more information, see [Manage objects](/help/en/oss/upload-download-and-manage-objects-overview#concept-jft-vhg-vdb).

The URL of an OSS object is in the following format:

```
oss://OSS-BUCKET/OSS-PREFIX/PARTITION-FORMAT_RANDOM-ID
```

`OSS-BUCKET` is the name of the OSS bucket. `OSS-PREFIX` is the specified directory in the OSS bucket. `PARTITION-FORMAT` is the partition format that is used to generate subdirectories. A subdirectory is generated based on the shipping time by using the strptime function. For more information about the strptime function, see [strptime API](https://man7.org/linux/man-pages/man3/strptime.3.html). `RANDOM-ID` is the unique identifier of a shipping operation.

**Note**

In a data shipping job, data is shipped to OSS by performing multiple shipping operations. Each data shipping operation ships data to OSS and stores the data to a different OSS object. The path to an OSS object is determined by the earliest point in time at which SLS receives the data shipped to the OSS object. This point in time is specified by receive\_time. When data is shipped from SLS to OSS, you must take note of the following scenarios:

-   Real-time data is shipped. For example, real-time data is shipped at 5-minute intervals. A shipping operation was performed at 00:00:00 on January 22, 2022. This operation shipped the data that was written to a shard in SLS after 23:55:00 on January 21, 2022 to OSS. If you want to analyze all data from January 22, 2022, you must check all OSS objects in the 2022/01/22 subdirectory. You must also check whether the most recent OSS objects in the 2022/01/21 subdirectory include the data from January 22, 2022.
    
-   Historical data is shipped. If the logstore that is used stores a small volume of data, a shipping operation may pull data from multiple days. In this case, the OSS objects in the 2022/01/22 subdirectory may include all the data from January 23, 2022 but no OSS objects exist in the 2022/01/23 subdirectory.
    

## Partition formats

Each shipping operation corresponds to an OSS object URL, which is in the oss://OSS-BUCKET/OSS-PREFIX/PARTITION-FORMAT\_RANDOM-ID format. The following table describes various partition formats for a shipping operation that was performed at 19:50:43 on January 20, 2022.

**OSS Bucket**

**OSS Prefix**

**Partition format**

**Object suffix**

**URL of the OSS object**

test-bucket

test-table

%Y/%m/%d/%H/%M

.suffix

oss://test-bucket/test-table/2022/01/20/19/50\_1484913043351525351\_2850008.suffix

test-bucket

log\_ship\_oss\_example

year=%Y/mon=%m/day=%d/log\_%H%M

.suffix

oss://test-bucket/log\_ship\_oss\_example/year=2022/mon=01/day=20/log\_1950\_1484913043351525351\_2850008.suffix

test-bucket

log\_ship\_oss\_example

ds=%Y%m%d/%H

.suffix

oss://test-bucket/log\_ship\_oss\_example/ds=20220120/19\_1484913043351525351\_2850008.suffix

test-bucket

log\_ship\_oss\_example

%Y%m%d/

.suffix

oss://test-bucket/log\_ship\_oss\_example/20220120/\_1484913043351525351\_2850008.suffix

**Note**

If you use this format, platforms such as Hive may fail to parse data in the OSS bucket. We recommend that you do not use this format.

test-bucket

log\_ship\_oss\_example

%Y%m%d%H

.suffix

oss://test-bucket/log\_ship\_oss\_example/2022012019\_1484913043351525351\_2850008.suffix

You can use big data platforms such as Hive, MaxCompute, or Data Lake Analytics (DLA) to analyze OSS data. If you want to use partition format information, set PARTITION-FORMAT in the URL of an OSS object in the key=value format. Example URL of an OSS object: oss://test-bucket/log\_ship\_oss\_example/year=2022/mon=01/day=20/log\_195043\_1484913043351525351\_2850008.parquet. In this example, year, month, and day are specified as partition key columns.

## SDK example

[export\_oss\_sink\_demo.py](https://github.com/aliyun/aliyun-log-python-sdk/blob/master/tests/export_examples/export_oss_sink_demo.py)
