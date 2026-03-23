After Simple Log Service (SLS) collects logs, you can ship the logs to a MaxCompute table for data storage and analysis. This topic describes how to create a data shipping job of the new version to ship data to MaxCompute.

## Prerequisites

-   A project and a logstore are created. For more information, see [Create a project and a logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).
    
-   Logs are collected. For more information, see [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   A MaxCompute partitioned table is created in the region where the SLS project resides. For more information, see [Create tables](/help/en/maxcompute/getting-started/create-tables-1#concept-rkk-kcy-5db).
    

## Usage notes

-   For more information about the regions in which data shipping to MaxCompute is supported, see [Supported regions](/help/en/sls/shipping-logs-to-maxcompute-new-version/#a8d44414087dw).
    
-   If a field value of the char type or varchar type exceeds a specified length, the value is truncated after the value is shipped to MaxCompute, and the excess part is discarded.
    
    For example, if the maximum length is set to 3 and a field value is 012345, the value is truncated to 012 after the value is shipped to MaxCompute.
    
-   If a field value of the string type, char type, or varchar type is an empty string, the value is converted to Null after the value is shipped to MaxCompute.
    
-   A field value of the datetime type must be in the YYYY-MM-DD HH:mm:ss format. Multiple spaces can exist between DD and HH. If a field value of the datetime type is in an invalid format, the value can be shipped to MaxCompute but the value is converted to Null.
    
-   If a field value of the date type is in an invalid format, the value can be shipped to MaxCompute but the value is converted to Null.
    
-   If the number of digits after the decimal point in a field value of the decimal type exceeds a specified limit, the value is rounded and truncated. If the number of digits before the decimal point exceeds a specified limit, the system discards the entire log as dirty data and increases the number of failed logs.
    
-   By default, dirty data is discarded during data shipping.
    
-   If a value that does not exist in a log is shipped to MaxCompute, the value is converted to a default value or Null.
    
    -   If a default value is specified when you create a MaxCompute table, a value that does not exist in a log is converted to the default value after the value is shipped to MaxCompute.
        
    -   If no default value is specified when you create a MaxCompute table and the value Null is allowed, a value that does not exist in a log is converted to Null after the value is shipped to MaxCompute.
        
-   You can run a maximum of 64 data shipping jobs to ship data to MaxCompute at the same time. A maximum of 10 MB of data can be written to each MaxCompute partition per second.
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project you want.
    
3.  Choose **Log Storage** > **Logstores**. On the Logstores tab, find the logstore that you want to manage, click **\>**, and then choose **Data Processing** > **Export** > **MaxCompute**.
    
4.  Move the pointer over **MaxCompute** and click **+**.
    
5.  In the **Data Shipping to MaxCompute** panel, configure the following parameters and click **OK**.
    
    **Parameter description**
    
    **Parameter**
    
    **Description**
    
    **Job Name**
    
    The name of the data shipping job.
    
    **Display Name**
    
    The display name of the data shipping job.
    
    **Job Description**
    
    The description of the data shipping job.
    
    **Destination Region**
    
    The region where the project of the MaxCompute table resides.
    
    **MaxCompute Endpoint**
    
    The [endpoint](/help/en/maxcompute/user-guide/endpoints#ac5711feda0wk) for the region of the MaxCompute project.
    
    **Note**
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1641968471/p954033.png) to view the specific content, as shown in the following figure:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1641968471/p954030.png)
    
    **Tunnel Endpoint**
    
    The [Tunnel endpoint](/help/en/maxcompute/user-guide/endpoints#ac5711feda0wk) for the region of the MaxCompute project.
    
    **Note**
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1641968471/p954033.png) to view the specific content, as shown in the following figure:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1641968471/p954030.png)
    
    **MaxCompute Project Name**
    
    The MaxCompute project to which the MaxCompute table belongs.
    
    **Table Name**
    
    The name of the MaxCompute table.
    
    **Read Permissions on Log Service**
    
    The method that is used to authorize the MaxCompute data shipping job to read data from the logstore.
    
    -   **Default Role**: The MaxCompute data shipping job assumes the AliyunLogDefaultRole system role to read data from the logstore. For more information, see [Authorize a RAM role to read log data from a logstore](/help/en/sls/authorize-a-ram-role-to-read-logstore-data#5e2e731415i8p).
        
    -   **Custom Role**: The MaxCompute data shipping job assumes a custom role to read data from the logstore.
        
        You must grant the custom role the permissions to read data from the logstore. Then, enter the Alibaba Cloud Resource Name (ARN) of the custom role in the **Read Permissions on Log Service** field. For more information, see [Authorize a RAM role to read log data from a logstore](/help/en/sls/authorize-a-ram-role-to-read-logstore-data#task-2177483).
        
    
    **Write Permissions on MaxCompute**
    
    The method that is used to authorize the MaxCompute data shipping job to write data to the MaxCompute table.
    
    -   **Default Role**: The MaxCompute data shipping job assumes the AliyunLogDefaultRole system role to write data to the MaxCompute table. For more information, see [Authorize the default role to write data to MaxCompute (ship data within an Alibaba Cloud account)](/help/en/sls/authorize-the-default-role-to-write-data-to-maxcompute-same-account-for-delivery#task-2198977).
        
    -   **Custom Role**: The MaxCompute data shipping job assumes a custom role to write data to the MaxCompute table.
        
        You must grant the custom role the permissions to write data to the MaxCompute table. Then, enter the ARN of the custom role in the **Write Permissions on MaxCompute** field.
        
        -   If the SLS project and the MaxCompute project belong to the same Alibaba Cloud account, obtain the ARN by following the instructions that are provided in [Procedure](/help/en/sls/authorize-a-custom-role-to-write-data-to-maxcompute-same-account-for-delivery#section-7jf-kkd-9c6).
            
        -   If the SLS project and the MaxCompute project belong to different Alibaba Cloud accounts, obtain the ARN by following the instructions that are provided in [Authorize a custom RAM role to write data to MaxCompute (ship data within an Alibaba Cloud account)](/help/en/sls/authorize-a-custom-role-to-write-data-to-maxcompute-same-account-for-delivery#section-31f-cse-gmg).
            
        
    
    **Automatic Authorization**
    
    Click **Authorize** to automatically grant the RAM role the permissions to write data to MaxCompute.
    
    **Important**
    
    -   If you use a RAM user to perform the operations, the RAM user must have the permissions to manage the MaxCompute account.
        
    -   If the automatic authorization fails, the following commands are returned. Copy the commands to the MaxCompute console to manually complete the authorization. For more information, see the [Use the CLI to grant permissions to the RAM role](/help/en/sls/authorize-a-custom-role-to-write-data-to-maxcompute-same-account-for-delivery#step-k96-fb0-78a) section in "Write data to MaxCompute by using a custom role".
        
        ```
        USE xxxxx;
        ADD USER RAM$xxxxx:`role/xxxxx`;
        GRANT CreateInstance ON PROJECT xxxxx TO USER RAM$xxxxx:`role/xxxxx`;
        GRANT Describe, Alter, update ON TABLE xxxxx TO USER RAM$xxxxx:`role/xxxxx`;
        ```
        
    
    **MaxCompute Common Column**
    
    The mappings between log fields and data columns in the MaxCompute table. In the left field, enter the name of a log field that you want to map to a data column in the MaxCompute table. In the right field, enter the name of the column. For more information, see [Data model mapping](#section-iaj-af6-unl).
    
    **Important**
    
    -   SLS ships logs to MaxCompute based on the sequence of the specified log fields and MaxCompute table columns. Changing the names of these columns does not affect the data shipping process. If you change the schema of the MaxCompute table, you must reconfigure the mappings between the log fields and MaxCompute table columns.
        
    -   The name of the log field that you specify in the left field cannot contain double quotation marks ("") or single quotation marks (''). The name cannot be a string that contains spaces.
        
    -   If a log contains two fields that have the same name, such as request\_time, SLS displays one of the fields as request\_time\_0. The two fields are still stored as request\_time in SLS. When you configure a shipping rule, you can use only the original field name request\_time.
        
    -   If a log contains fields that have the same name, SLS randomly ships the value of one of the fields. We recommend that you do not include fields that have the same name in your logs.
        
    
    **MaxCompute Partition Key Column**
    
    The mappings between log fields and partition key columns in the MaxCompute table. In the left field, enter the name of a log field that you want to map to a partition key column in the MaxCompute table. In the right field, enter the name of the column. For more information, see [Data model mapping](#section-iaj-af6-unl).
    
    **Note**
    
    -   You cannot specify **\_extract\_others\_**, **\_\_extract\_others\_\_**, or **\_\_extract\_others\_all\_\_** as a partition key column.
        
    -   If the log field for the partition key column is not **\_\_partition\_time\_\_** or **\_\_receive\_time\_\_**, the shipping performance may be affected.
        
    
    **Partition Format**
    
    The time partition format. For more information about the configuration examples and parameters of partition formats, see [Time partition format](#068881d4d6bmv).
    
    **Note**
    
    -   This parameter takes effect only if you set a left field in **MaxCompute Partition Key Column** to **\_\_partition\_time\_\_** or **\_\_receive\_time\_\_**.
        
    -   We recommend that you do not specify a time partition format that is accurate to seconds. If you specify a time partition format that is accurate to seconds, the number of partitions in the MaxCompute table may exceed the limit of 60,000.
        
    
    **Time Zone**
    
    The time zone that is used to format time and the time partition. For more information, see [Time zones](/help/en/sls/time-zones-1#concept-2160801).
    
    **Shipping Mode**
    
    The data shipping mode. Select Real Time or Batch Shipping.
    
    -   **Real Time**: reads data from the logstore in real time and ships the data to MaxCompute.
        
    -   **Batch Shipping**: reads the data that is generated 5 to 10 minutes earlier than the current time from the logstore and ships the data to MaxCompute in a batch.
        
    
    For more information, see [Shipping modes](#fdf0287cdd47a).
    
    **Start Time Range**
    
    The time range of data that the MaxCompute data shipping job can ship. The time range varies based on the time when logs are received. Valid values:
    
    -   From Specific Time: The MaxCompute data shipping job ships data in the logstore from the log that is received at the specified start time until the job is manually stopped.
        
    -   Specific Time Range: The MaxCompute data shipping job ships data in the logstore from the log that is received at the specified start time to the log that is received at the specified end time.
        
        **Note**
        
        Due to MaxCompute's slot and QPS limits, shipping historical data is likely to exceed MaxCompute's [write threshold](/help/en/sls/stability-and-limits#entry-awh-25c-e3z), so historical data shipping is no longer supported.
        
    
    After a data shipping job is created, log data is shipped to MaxCompute in 1 hour after the data is written to the logstore. After the log data is shipped, view the log data in MaxCompute. For more information, see [How do I check the completeness of data that is shipped from Simple Log Service to MaxCompute?](/help/en/sls/check-the-completeness-of-data-shipped-from-log-service-to-maxcompute#concept-bb2-3n1-hfb)
    
    ```
    | log_source | log_time | log_topic | time | ip | thread | log_extract_others | log_partition_time | status |
    +------------+------------+-----------+-----------+-----------+-----------+------------------+--------------------+-----------+
    | 10.10.*.* | 1642942213 | | 24/Jan/2022:20:50:13 +0800 | 10.10.*.* | 414579208 | {"url":"POST /PutData?Category=YunOsAccountOpLog&AccessKeyId=****************&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=******************************** HTTP/1.1","user-agent":"aliyun-sdk-java"} | 2022_01_23_20_50 | 200 |
    +------------+------------+-----------+-----------+-----------+-----------+------------------+--------------------+-----------+
    ```
    

## Data model mapping

If a data shipping job ships data from SLS to MaxCompute, the data model mapping between the two services is enabled. The following list describes the usage notes and provides examples.

-   A MaxCompute table contains at least one data column and one partition key column.
    
-   We recommend that you use the following reserved fields in SLS: \_\_partition\_time\_\_, \_\_source\_\_, and \_\_topic\_\_.
    
-   Each MaxCompute table can have a maximum of 60,000 partitions. If the number of partitions exceeds the upper limit, data cannot be written to the table.
    
-   The previous name of the system reserved field \_\_extract\_others\_\_ is \_extract\_others\_. Both names can be used together.
    
-   The values of a partition key column in a MaxCompute table cannot be the reserved words or keywords of MaxCompute. For more information, see [Reserved words and keywords](/help/en/maxcompute/user-guide/reserved-words-and-keywords#concept-zxk-v5f-vdb).
    
-   The values of a partition key column in a MaxCompute table cannot be empty strings. The fields that are mapped to partition key columns must be reserved fields or log content fields. For the old version of data shipping, use the cast function to convert a field of the string type to the type of the mapped partition key column. If the value of a field that is mapped to a partition key column is an empty string due to conversion failure, the log that records the field value is discarded during data shipping.
    
-   A log field in SLS can be mapped to only one data column or partition key column in a MaxCompute table. Field redundancy is not supported.
    

The following table describes the mapping relationships between MaxCompute data columns, partition key columns, and SLS fields. For more information about reserved fields in SLS, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).

**Column type in MaxCompute**

**Column name in MaxCompute**

**Data type in MaxCompute**

**Field name in SLS**

**Field type in SLS**

**Description**

Data column

log\_source

string

\_\_source\_\_

Reserved field

The source of the log.

log\_time

bigint

\_\_time\_\_

Reserved field

The UNIX timestamp of the log. This field corresponds to the Time field in the data model.

log\_topic

string

\_\_topic\_\_

Reserved field

The topic of the log.

time

string

time

Log content field

This field is parsed from logs and corresponds to the key-value pair in the data model. In most cases, the value of the \_\_time\_\_ field in the data that is collected by using Logtail is the same as the value of the time field.

ip

string

ip

Log content field

This field is parsed from logs.

thread

string

thread

Log content field

This field is parsed from logs.

log\_extract\_others

string

\_\_extract\_others\_\_

Reserved field

Other log fields that are not mapped in the configuration are serialized into JSON data based on key-value pairs. The JSON data uses a single-level structure, and JSON nesting is not supported for the log fields.

Partition key column

log\_partition\_time

string

\_\_partition\_time\_\_

Reserved field

This field is calculated based on the value of the \_\_time\_\_ field in a log. Specify a partition granularity for the field.

status

string

status

Log content field

This field is parsed from logs. The value of this field supports enumeration to ensure that the number of partitions does not exceed the upper limit.

## **Time partition format**

Data shipping to MaxCompute (new version) supports two time partition formats: StrfTimeFormat and SimpleDateFormat. The time partition format is applicable only when the field in the MaxCompute partition key column is set to `__partition_time__` or `__receive_time__`.

### **StrfTimeFormat**

strftime is a function defined in the UNIX C standard library for formatting date and time. In this context, strftime is used to convert a timestamp into a string of a specified format. Its formatting rules can be defined using format specifiers that start with the `%` character. For example, `%Y_%m_%d` represents the format for year, month, and day.

**Note**

If you create a new MaxCompute task, ensure that you use the StrfTimeFormat time format.

**Time partition format**

**Example**

%Y\_%m\_%d\_%H\_%M\_00

2024\_12\_27\_20\_30\_00

%Y\_%m\_%d\_%H\_%M

2024\_12\_27\_20\_30

%Y\_%m\_%d\_%H

2024\_12\_27\_20

%Y\_%m\_%d

2024\_12\_27

%Y\_%m

2024\_12

%Y

2024

%Y%m%d%H%M

202412272030

%Y%m%d%H

2024122720

%Y%m%d

20241227

%Y%m

202412

### **SimpleDateFormat**

SimpleDateFormat refers to the time format defined by the Java SimpleDateFormat syntax, such as `yyyy-MM-dd HH:mm`. For more information, see [Class SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

**Note**

The SimpleDateFormat time format is only used for migrating from the old version to the new version to ensure compatibility between the two. If you create a new MaxCompute task, ensure that you use the StrfTimeFormat time format.

For the migration tasks from the old version, the supported partition formats are as follows:

**Time partition format**

**Example**

yyyy-MM-ddHH:mm

2024-12-2720-30

yyyy\_MM\_dd\_HH\_mm

2024\_12\_27\_20\_30

yyyy\_MM\_dd\_HH

2024\_12\_27\_20

yyyy-MM-dd HH:mm

2024-12-27 20:30

yyyyMMddHHmm

202412272030

yyyyMMddHH

2024122720

yyyyMMdd

20241227

yyyy\_MM-dd\_HH\_mm

2024\_12-27\_20\_30

yyyy-MM-dd

2024-12-27

## References

-   \_\_partition\_time\_\_ field
    
    In most cases, MaxCompute filters data by time or uses the log time field as a partition key column.
    
    -   Format
        
        The value of the \_\_partition\_time\_\_ field is calculated based on the value of the \_\_time\_\_ field in SLS. The value is a time string that is generated based on the time zone and time partition format. The value of the date partition key column is specified based on an interval of 1,800 seconds. This prevents the number of partitions in a single MaxCompute table from exceeding the limit.
        
        For example, if the timestamp of a log in SLS is 27/Jan/2022 20:50:13 +0800, SLS calculates the value of the \_\_time\_\_ field based on the timestamp. The value is a UNIX timestamp of 1643287813. The following table describes the values of the time partition column in different configurations.
        
        **Time partition format**
        
        **\_\_partition\_time\_\_**
        
        %Y\_%m\_%d\_%H\_%M\_00
        
        2022\_01\_27\_20\_30\_00
        
        %Y\_%m\_%d\_%H\_%M
        
        2022\_01\_27\_20\_30
        
        %Y%m%d
        
        20220127
        
    -   Usage
        
        Use the \_\_partition\_time\_\_ field to filter data to prevent a full-table scan. For example, execute the following query statement to query the log data of December 26, 2024:
        
        ```
        select * from {ODPS_TABLE_NAME} where log_partition_time >= "2024_12_26" and log_partition_time < "2024_12_27";
        ```
        
-   `__receive_time__` field
    
    The time when logs arrive at the server is used as a partition field. Filtering data by time is a common method to filter data in MaxCompute.
    
    -   Format
        
        **Time partition format**
        
        **\_\_recetive\_time\_\_**
        
        %Y\_%m\_%d\_%H\_%M\_00
        
        2022\_01\_27\_20\_30\_00
        
        %Y\_%m\_%d\_%H\_%M
        
        2022\_01\_27\_20\_30
        
        %Y%m%d
        
        20220127
        
-   \_\_extract\_others\_\_ and \_\_extract\_others\_all\_\_ fields
    
    -   The value of the \_\_extract\_others\_\_ field contains all fields that are not mapped, excluding the \_\_topic\_\_, \_\_tag\_\_:\*, and \_\_source\_\_ fields.
        
    -   The value of the \_\_extract\_others\_all\_\_ field contains all fields that are not mapped, including the \_\_topic\_\_, \_\_tag\_\_:\*, and \_\_source\_\_ fields.
        

## Shipping modes

The new version of the data shipping feature supports the following shipping modes:

-   **Real Time**: reads data from a logstore in real time and ships the data to MaxCompute.
    
-   **Batch Shipping**: reads the data that is generated 5 to 10 minutes earlier than the current time from a logstore and ships the data to MaxCompute in a batch.
    
    If you set the **Shipping Mode** parameter to **Batch Shipping**, set the **Start At** or **End Time** parameter in the **Start Time Range** section only to a point in time that is a multiple of 5 minutes. For example, `2022-05-24 16:35:00` is a valid start time or end time, whereas `2022-05-24 16:36:00` is not.
    
    You can ship the data of the \_\_receive\_time\_\_ field in batch shipping mode. The value of the \_\_receive\_time\_\_ field indicates the time when a log is received by SLS. Use a time partition format to configure the value format for the \_\_receive\_time\_\_ field. The time can be accurate to 30 minutes. For more information about the time partition format, see [Time partition format](#068881d4d6bmv).
    
    If you want to ship the data of the \_\_receive\_time\_\_ field, add this field only in the **MaxCompute Partition Key Column** parameter.
    

## SDK example

[export\_odps\_sink\_demo.py](https://github.com/aliyun/aliyun-log-python-sdk/blob/master/tests/export_examples/export_odps_sink_demo.py)
