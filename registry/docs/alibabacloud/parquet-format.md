After logs are shipped from Simple Log Service to Object Storage Service (OSS), the logs can be stored in different formats. This topic describes the Parquet format.

**Important**

The old version of shipping logs to OSS is discontinued. Refer to the [new version](/help/en/sls/shipping-logs-to-oss-new-version/).

## Parameters

The following figure shows the parameters that you must configure if you specify **parquet** for **Storage Format** in a shipping rule. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss#task-1958310).![Parquet字段配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5696548561/p5812.png)

The following table describes the parameters.

**Parameter**

**Description**

Key Name

The name of the log field that you want to ship to OSS. You can view log fields on the **Raw Logs** tab of a logstore. We recommend that you add log fields one by one. When the log fields are shipped to OSS, the log fields are stored in a Parquet file based on the order in which you add them. The names of the log fields are used as the names of the columns in the Parquet file. The log fields that you can ship to OSS include the fields in the log content and the reserved fields, such as \_\_time\_\_, \_topic\_\_, and \_\_source\_\_. For more information about reserved fields, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb). The values of the columns in a Parquet file are null in the following scenarios:

-   The log fields do not exist in logs.
    
-   Setting string fields to non-string types (such as double and int64) causes data type conversion failures during shipping.
    

**Note**

-   A log field can be added to **Parquet Fields** only once.
    
-   If a log contains two fields that have the same name, such as request\_time, Log Service displays one of the fields as request\_time\_0. The two fields are still stored as request\_time in Log Service. When you configure a shipping rule, you can use only the original field name request\_time.
    
    If a log contains fields that have the same name, Log Service randomly ships the value of one of the fields. We recommend that you do not include fields that have the same name in your logs.
    

Type

The Parquet format supports storing data of six types: string, boolean, int32, int64, float, and double. After logs are shipped, string type data is stored as byte\_array type in Parquet, and the system does not set the value of the `logical_type` field in the Parquet data.

## Sample URLs of OSS objects

After logs are shipped to OSS, the logs are stored in OSS buckets. The following table provides the sample URLs of the OSS objects that store the logs.

**Compression type**

**Object suffix**

**Sample URL**

**Description**

Not compressed

.parquet

oss://oss-shipper-shenzhen/ecs\_test/2016/01/26/20/54\_1453812893059571256\_937.parquet

Download the OSS object to your computer and consume data in the object. For more information, see [Data consumption](#section-vfx-vtj-5cb).

Snappy

.snappy.parquet

oss://oss-shipper-shenzhen/ecs\_test/2016/01/26/20/54\_1453812893059571256\_937.snappy.parquet

## Data consumption

-   Consume data shipped to OSS by using E-MapReduce, Spark, or Hive. For more information, see [LanguageManual DDL](https://cwiki.apache.org//confluence/display/Hive/LanguageManual+DDL).
    
-   Consume data by using inspection tools.
    
    Use the [parquet-tools](https://pypi.org/project/parquet-tools/) provided by Python to inspect Parquet files, view details of the files, and read data. Install the utility by running the following command or by using a different method:
    
    ```
    pip3 install parquet-tools
    ```
    
    -   View the data of columns in a Parquet file
        
        -   Command
            
            View the data of the remote\_addr and body\_bytes\_sent columns.
            
            ```
            parquet-tools show -n 2 -c remote_addr,body_bytes_sent 44_1693464263000000000_2288ff590970d092.parquet
            ```
            
        -   Response
            
            ```
            +----------------+-------------------+
            | remote_addr    |   body_bytes_sent |
            |----------------+-------------------|
            | 61.243.1.63    |           b'1904' |
            | 112.235.74.182 |           b'4996' |
            +----------------+-------------------+
            ```
            
    -   View the content in a Parquet file (Convert the file into the CSV format.)
        
        -   Command
            
            ```
            parquet-tools csv -n 2 44_1693464263000000000_2288ff590970d092.parquet
            ```
            
        -   Response
            
            ```
            remote_addr,body_bytes_sent,time_local,request_method,request_uri,http_user_agent,remote_user,request_time,request_length,http_referer,host,http_x_forwarded_for,upstream_response_time,status
            b'61.**.**.63',b'1904',b'31/Aug/2023:06:44:01',b'GET',b'/request/path-0/file-7',"b'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.801.0 Safari/535.1'",b'uh2z',b'49',b'4082',b'www.kwm.mock.com',b'www.ap.mock.com',b'222.**.**.161',b'2.63',b'200'
            b'112.**.**.182',b'4996',b'31/Aug/2023:06:44:01',b'GET',b'/request/path-1/file-5',b'Mozilla/5.0 (Windows NT 6.1; de;rv:12.0) Gecko/20120403211507 Firefox/12.0',b'tix',b'71',b'1862',b'www.gx.mock.com',b'www.da.mock.com',b'36.**.**.237',b'2.43',b'200'
            ```
            
    
    -   View the details of a Parquet file
        
        -   Command
            
            ```
            parquet-tools inspect 44_1693464263000000000_2288ff590970d092.parquet
            ```
            
        -   Response
            
            ```
            ############ file meta data ############
            created_by: SLS version 1
            num_columns: 14
            num_rows: 4661
            num_row_groups: 1
            format_version: 1.0
            serialized_size: 2345
            
            
            ############ Columns ############
            remote_addr
            body_bytes_sent
            time_local
            request_method
            request_uri
            http_user_agent
            remote_user
            request_time
            request_length
            http_referer
            host
            http_x_forwarded_for
            upstream_response_time
            status
            
            ############ Column(remote_addr) ############
            name: remote_addr
            path: remote_addr
            max_definition_level: 1
            max_repetition_level: 0
            physical_type: BYTE_ARRAY
            logical_type: None
            converted_type (legacy): NONE
            compression: UNCOMPRESSED (space_saved: 0%)
            ......
            ```
