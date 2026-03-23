You can use Simple Log Service to collect log data and ship the log data to Object Storage Service (OSS) for storage and analysis. This topic describes how to ship log data from Simple Log Service to OSS.

**Important**

The old version of shipping logs to OSS is discontinued. Refer to the [new version](/help/en/sls/shipping-logs-to-oss-new-version/).

## Prerequisites

-   A project and a Logstore are created. For more information, see [Create a project and a Logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).
    
-   Log data is collected. For more information, see [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   An OSS bucket is created in the region where the Simple Log Service project resides. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    
-   Simple Log Service is authorized to access OSS resources. You can authorize Simple Log Service to access OSS resources on the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunLogDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//sls.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22Log%22%7D) page.
    
    For more information about how to ship log data across Alibaba Cloud accounts or configure a shipping rule by using a RAM user, see [Perform authorization in the RAM console](/help/en/sls/perform-authorization-in-the-ram-console#concept-d2w-k4q-zdb).
    
    ![Cloud Resource Access Authorization page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8257549951/p112344.png)
    

## Background information

Simple Log Service can automatically ship log data from a Logstore to an OSS bucket.

-   You can configure a lifecycle rule for the log data that is stored in the OSS bucket. You can configure the OSS bucket to store the log data for a long period of time.
    
-   You can use data processing platforms, such as E-MapReduce and Data Lake Analytics (DLA), or use custom programs to consume log data from the OSS bucket.
    

## Ship log data

**Important**

-   After you configure a shipping rule, Simple Log Service concurrently runs multiple instances.
    
-   After a shipping instance is created, you can check whether the shipping rule meets your requirements based on the job status and the data that is shipped to OSS.
    

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, find the Logstore, click **\>**, and then choose **Data Processing** > **Export** > **Object Storage Service (OSS)**.
    
4.  Move the pointer over **Object Storage Service (OSS)** and click the **+** icon.
    
5.  In the **OSS LogShipper** panel, configure the parameters and click **OK**.
    
    Set **Shipping Version** to **Old Version** and configure other parameters based on the following descriptions.
    
    **Parameter**
    
    **Description**
    
    OSS Shipper Name
    
    The name of the shipping rule.
    
    OSS Bucket
    
    The name of the OSS bucket to which you want to ship log data.
    
    **Important**
    
    -   You can ship data only to an existing OSS bucket for which the Write Once Read Many (WORM) feature is disabled. The bucket must reside in the same region as your Simple Log Service project. For more information about the WORM feature, see [Retention policies](/help/en/oss/user-guide/oss-retention-policies).
        
    
    -   You can ship data to an OSS bucket of the Standard, Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive storage class. By default, the storage class of the generated OSS objects that store the shipped data is the same as the storage class of the specified OSS bucket. For more information, see [Overview of storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).
        
    -   The following limits apply to an OSS bucket that is not of the Standard storage class: minimum storage period and minimum billable size. We recommend that you specify a storage class based on your business requirements when you create an OSS bucket. For more information, see [Differences between storage classes](/help/en/oss/user-guide/overview-53/#section-tbz-dt6-bg2).
        
    
    File Delivery Directory
    
    The directory to which you want to ship log data in the OSS bucket. The value cannot start with a forward slash (/) or a backslash (\\).
    
    After an OSS shipping task is created, the data in the Logstore is shipped to this directory.
    
    Shard Format
    
    The partition format that is used to generate subdirectories in the OSS bucket. A subdirectory is dynamically generated based on the time at which a shipping task is created. The default partition format is %Y/%m/%d/%H/%M. The partition format cannot start with a forward slash (/). For more information about partition format examples, see [Shard Format](#section-gzu-5la-tzu). For more information about the parameters of partition formats, see [strptime](http://man7.org/linux/man-pages/man3/strptime.3.html).
    
    OSS Write RAM Role
    
    The method that is used to authorize an OSS shipping task to write data to the OSS bucket.
    
    -   **Default Role**: specifies that the OSS data shipping job assumes the AliyunLogDefaultRole system role to write data to the OSS bucket. If you select this option, the Alibaba Cloud Resource Name (ARN) of the AliyunLogDefaultRole system role is automatically specified. For more information about how to obtain the ARN, see [Access data by using a default role](/help/en/sls/access-data-by-using-a-default-role-3#task-2156395).
        
    -   **Custom Role**: specifies that the OSS data shipping job assumes a custom role to write data to the OSS bucket.
        
        If you select this option, you must grant the custom role the permissions to write data to the OSS bucket. Then, enter the ARN of the custom role in the **OSS Write RAM Role** field. For information about how to obtain the ARN, see one of the following topics based on your business scenario:
        
        -   If the Logstore and the OSS bucket belong to the same Alibaba Cloud account, obtain the ARN by following the instructions that are provided in [Step 2: Grant the RAM role the permissions to write data to an OSS bucket](/help/en/sls/access-data-within-an-alibaba-cloud-account-by-using-a-custom-role#section-ikl-v3l-16u).
            
        -   If the Logstore and the OSS bucket belong to different Alibaba Cloud accounts, obtain the ARN by following the instructions that are provided in [Step 2: Grant the role-b RAM role the permissions to write data to an OSS bucket](/help/en/sls/access-data-across-alibaba-cloud-accounts-by-using-a-custom-role#section-jwj-z1h-6do).
            
        
    
    Shipping Size
    
    The size of log data in a shard. When the size is reached, the log data is shipped to OSS. The value of this parameter determines the size of raw log data that is shipped to OSS and stored in an object. Valid values: 5 to 256. Unit: MB.
    
    If the size of log data that you want to ship reaches the specified value, a shipping task is automatically created.
    
    Storage Format
    
    The storage format for log data. After log data is shipped to OSS, the log data can be stored in different formats. For more information, see [JSON format](/help/en/sls/json-format#concept-y4l-34q-zdb), [CSV format](/help/en/sls/csv-format#concept-hch-k4q-zdb), and [Parquet format](/help/en/sls/parquet-format#reference-ehj-j4q-zdb).
    
    Compress
    
    Specifies whether to compress log data that is shipped to OSS. Valid values:
    
    -   No Compress: Log data is not suppressed.
        
    -   Compress(snappy): The snappy algorithm is used to compress log data. This way, less storage space is occupied in the OSS bucket. For more information, see [snappy](https://google.github.io/snappy/).
        
    
    Shipping Time
    
    The interval between two shipping tasks that ship the log data of a shard. Valid values: 300 to 900. Default value: 300. Unit: seconds.
    
    If the interval is reached, a shipping task is created.
    

## View OSS data

After data is shipped to OSS, you can view the data in the OSS console. You can also view the data by using other methods, such as OSS API or OSS SDK. For more information, see [Manage objects](/help/en/oss/upload-download-and-manage-objects-overview#concept-jft-vhg-vdb).

The URL of an OSS object is in the following format:

```
oss://OSS-BUCKET/OSS-PREFIX/PARTITION-FORMAT_RANDOM-ID
```

OSS-BUCKET is the name of the OSS bucket. OSS-PREFIX is the directory in the OSS bucket. PARTITION-FORMAT is the partition format that is used to generate subdirectories. A subdirectory is generated based on the time at which a shipping task is created by using the strptime function. For more information about the strptime function, see [strptime](http://man7.org/linux/man-pages/man3/strptime.3.html). RANDOM-ID is the unique identifier of a shipping task.

**Note**

A subdirectory is generated based on the time at which a shipping task is created. For example, a shipping task was created at 00:00:00 on June 23, 2016. The data that was written to Simple Log Service after 23:55:00 on June 22, 2016 is shipped to OSS. Data is shipped at 5-minute intervals. If you want to analyze the log data of June 22, 2016, you must check all the objects in the 2016/06/22 subdirectory. You must also check whether the objects that were generated before 00:10:00 on June 23, 2016 in the 2016/06/23/00/ subdirectory include the log data that was generated on June 22, 2016.

## Shard Format

Each shipping task corresponds to an OSS object URL, which is in the oss://OSS-BUCKET/OSS-PREFIX/PARTITION-FORMAT\_RANDOM-ID format. PARTITION-FORMAT is the partition format that is used to generate subdirectories. A subdirectory is generated based on the time at which a shipping task is created. The following table describes various partition formats for a shipping task that was created at 19:50:43 on January 20, 2017.

**OSS Bucket**

**OSS prefix**

**Partition format**

**URL for the OSS object**

test-bucket

test-table

%Y/%m/%d/%H/%M

oss://test-bucket/test-table/2017/01/20/19/50\_1484913043351525351\_2850008

test-bucket

log\_ship\_oss\_example

year=%Y/mon=%m/day=%d/log\_%H%M%S

oss://test-bucket/log\_ship\_oss\_example/year=2017/mon=01/day=20/log\_195043\_1484913043351525351\_2850008.parquet

test-bucket

log\_ship\_oss\_example

ds=%Y%m%d/%H

oss://test-bucket/log\_ship\_oss\_example/ds=20170120/19\_1484913043351525351\_2850008.snappy

test-bucket

log\_ship\_oss\_example

%Y%m%d/

oss://test-bucket/log\_ship\_oss\_example/20170120/\_1484913043351525351\_2850008

**Note**

If you use this format, platforms such as Hive may fail to parse log data in the OSS bucket. We recommend that you do not use this format.

test-bucket

log\_ship\_oss\_example

%Y%m%d%H

oss://test-bucket/log\_ship\_oss\_example/2017012019\_1484913043351525351\_2850008

You can use big data platforms such as Hive, MaxCompute, or Data Lake Analytics (DLA) to analyze OSS data. If you want to use partition format information, you can set PARTITION-FORMAT in the URL of an OSS object in the key=value format. Example URL of an OSS object: oss://test-bucket/log\_ship\_oss\_example/year=2022/mon=01/day=20/log\_195043\_1484913043351525351\_2850008.parquet. In this example, year, month, and day are specified as partition key columns.

## What to do next

After a shipping task is created, you can modify the shipping rule, disable the data shipping feature, view the status and error messages of the shipping task, and retry the shipping task on the **OSS Shipper** page.

-   Modify a shipping rule
    
    Click **Settings** to modify the shipping rule. For more information about parameters, see [Ship log data](#section-gz3-etl-ezq).
    
-   Disable the data shipping feature
    
    Click **Disable** to disable the data shipping feature.
    
-   View the status and error messages of a shipping task
    
    You can view the shipping tasks of the previous two days and the statuses of the tasks.
    
    -   Task statuses
        
        **Status**
        
        **Description**
        
        Succeeded
        
        The shipping task succeeded.
        
        Running
        
        The shipping task is running. Check whether the task succeeds later.
        
        Failed
        
        The shipping task failed. If the task cannot be retried due to external causes, troubleshoot the failure based on the error message and retry the task.
        
    -   Error messages
        
        If a shipping task fails, an error message is returned for the task.
        
        **Error message**
        
        **Cause**
        
        **Solution**
        
        UnAuthorized
        
        The error message returned because the shipping task does not have the required permissions.
        
        To fix the error, check the following configurations:
        
        -   Check whether the AliyunLogDefaultRole role is created for the Alibaba Cloud account to which the OSS bucket belongs.
            
        -   Check whether the Alibaba Cloud account ID that is configured in the policy is valid.
            
        -   Check whether the AliyunLogDefaultRole role is granted the permissions to write data to the OSS bucket.
            
        -   Check whether the ARN of the AliyunLogDefaultRole role is valid.
            
        
        ConfigNotExist
        
        The error message returned because the configuration of the task does not exist.
        
        In most cases, the error occurs because the data shipping feature is disabled. We recommend that you enable the data shipping feature, configure a shipping rule for the task, and then retry the task.
        
        InvalidOssBucket
        
        The error message returned because the specified OSS bucket does not exist.
        
        To fix the error, check the following configurations:
        
        -   Check whether the specified OSS bucket resides in the same region as the Simple Log Service project.
            
        -   Check whether the name of the specified bucket is valid.
            
        
        InternalServerError
        
        The error message returned because an internal error has occurred in Simple Log Service.
        
        Retry the shipping task.
        
    -   Retry a shipping task
        
        By default, Simple Log Service retries a shipping task based on the retry policy if the shipping task fails. You can also manually retry the shipping task. By default, Simple Log Service retries all failed tasks of the previous two days. The minimum interval between two consecutive retries is 15 minutes. The first time a task fails, Simple Log Service retries the task 15 minutes later. The second time the task fails, Simple Log Service retries the task 30 minutes later. The third time the task fails, Simple Log Service retries the task 60 minutes later. The same method is used for subsequent retries.
        
        To immediately retry a failed task, you can click **Retry All Failed Tasks** or **Retry** on the right side of the task. You can also call an API operation or use an SDK to retry the task.
