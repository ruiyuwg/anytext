To query and analyze logs in a logstore, you must first create an index. This topic explains what indexes are, the available types, and how to configure them. It also covers billing, configuration examples, and how to disable indexing.

## **Why do I need to create indexes?**

In most cases, you can use keywords to query data from raw logs. For example, you want to obtain the `curl/7.74.0` log that contains the `curl` keyword. If log splitting is not performed, the log is considered as a whole and the system does not associate the log with the `curl` keyword. In this case, you cannot obtain the log in Simple Log Service.

To search for the log, you must split the log into separate and searchable words. You can split a log by using delimiters. Delimiters determine the positions at which a log is split. In this example, you can use the following delimiters to split the preceding log: `\n\t\r,;[]{}()&^*#@~=<>/\?:'"`. The log is split into `curl` and `7.74.0`. Simple Log Service creates indexes based on the words that are obtained after log splitting. After indexes are created, you can query and analyze the log.

Simple Log Service supports full-text indexes and field indexes. If you define a field index for a specific field, the rules of that field index override the global full-text indexing rules for that field.

## **Index types**

### Full-text indexes

Simple Log Service splits a log into multiple words that are of the **TEXT** type by using **delimiters**. After you create full-text indexes, you can query logs by using keywords. For example, you can query logs that contain `Chrome` or `Safari` based on the following search statement: `Chrome or Safari`.

**Important**

-   Chinese content cannot be split by using **delimiters**. However, if you want to split Chinese content, you can turn on **Include Chinese**. Then, Simple Log Service automatically splits the Chinese content based on Chinese grammar.
    
-   If you create only full-text indexes for your Logstore, you can use only the full-text search syntax to specify query conditions. For more information, see [Search syntax and functions](/help/en/sls/query-syntax/).
    

### Field indexes

Simple Log Service distinguishes logs by field name and then splits the fields by using delimiters. Supported field types are **TEXT**, **LONG**, **DOUBLE** and **JSON**. For more information, see [Data types](/help/en/sls/data-types). After you create field indexes, you can specify field names and field values in the `key:value format` to query logs. You can also use a SELECT statement to query logs. For more information, see [Search syntax and functions](/help/en/sls/query-syntax/#835e539d9flba).

**Important**

-   If you want to query and analyze fields, you must create field indexes and use a SELECT statement. Field indexes have a higher priority than full-text indexes. If you define a field index for a specific field, the rules of that field index override the global full-text indexing rules for that field.
    
-   Fields of the **TEXT** type: You can use full text-based search statements, field-based search statements, and analytic statements to query and analyze data. An analytic statement includes a SELECT statement.
    
    -   If full-text indexing is not enabled, full text-based search statements query data from all fields of the TEXT type.
        
    -   If full-text indexing is enabled, full text-based search statements query data from all logs.
        
-   Fields of the **LONG** or **DOUBLE** type: You can use field-based search statements and analytic statements to query and analyze data. An analytic statement includes a SELECT statement.
    

## **Create indexes**

**Important**

-   Query and analysis results vary based on index configurations. You must create indexes based on your business requirements. After indexes are created, the indexes take effect within approximately 1 minute.
    
-   New indexes take effect only for new logs. To query historical logs, you must reindex the logs. For more information, see [Reindex logs for a Logstore](/help/en/sls/reindex-logs-for-a-logstore).
    
-   Simple Log Service automatically creates indexes for specific reserved fields. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
    
    Simple Log Service leaves delimiters empty when it creates indexes for the `__topic__` and `__source__` reserved fields. Therefore, only exact match is supported when you specify keywords to query the two fields.
    
-   Fields that are prefixed with `__tag__` do not support full-text indexes. If you want to query and analyze fields that are prefixed with \_\_tag\_\_, you must create field indexes. Sample query statement: `*| select "__tag__:__receive_time__"`.
    
-   If a log contains two fields whose names are the same, such as request\_time, Simple Log Service displays one of the fields as request\_time\_0. The two fields are still stored as request\_time in Simple Log Service. If you want to query, analyze, ship, transform, or create indexes for the fields, you must use request\_time.
    

### **Console**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project you want.
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
    
4.  On the **query and analysis** page of the Logstore, click **Enable**.
    
    **Note**
    
    You can query the latest data approximately 1 minute after you click Enable.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712933371/p870353.png)
    
5.  Optional. Turn off Auto Update.
    
    If a Logstore is a dedicated Logstore for a cloud service or an internal Logstore, **Auto Update** is automatically turned on. In this case, the built-in indexes of the Logstore are automatically updated to the latest version. If you want to create indexes in the preceding scenario, turn off **Auto Update** in the **Search & Analysis** panel.
    
    **Warning**
    
    If you delete the indexes of a dedicated Logstore for a cloud service, features such as reports and alerting that are enabled for the Logstore may be affected.
    
    ![自动更新索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2877898561/p439697.png)
    
6.  Create indexes.
    
    ##### Create full-text indexes
    
    After you click **Enable**, **Full-text Index** is automatically turned on. You can turn on **LogReduce**, **Case Sensitive** and **Include Chinese** based on your business requirements. You can use default **delimiters** or custom **delimiters**.
    
    The following table describes the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712933371/p870418.png)
    
    ##### **Parameters**
    
    **Parameter**
    
    **Description**
    
    **LogReduce**
    
    If you turn on **LogReduce**, Simple Log Service automatically clusters highly similar text logs during collection and extracts patterns from the logs. This way, you can have a comprehensive understanding of the logs. For more information, see [LogReduce](/help/en/sls/logreduce#concept-fkn-zwm-cgb).
    
    **Case Sensitive**
    
    Specifies whether searches are case-sensitive.
    
    -   If you turn on **Case Sensitive**, searches are case-sensitive. For example, if a log contains `internalError`, you can search for the log by using only the `internalError` keyword.
        
    -   If you turn off **Case Sensitive**, searches are not case-sensitive. For example, if a log contains `internalError`, you can search for the log by using the `INTERNALERROR` or `internalerror` keyword.
        
    
    **Include Chinese**
    
    Specifies whether to distinguish between Chinese content and English content in searches.
    
    -   If you turn on **Include Chinese** and a log contains Chinese characters, the Chinese content is split based on Chinese grammar. The English content is split by using specified delimiters.
        
        **Important**
        
        When Chinese content is split, the write speed is reduced. Proceed with caution.
        
    -   If you turn off **Include Chinese**, all content of a log is split by using specified delimiters.
        
    
    **Delimiter**
    
    The delimiters that are used to split the content of a log into multiple words. By default, Simple Log Service uses the following delimiters: `, '";=()[]{}?@&<>/:\n\t\r`. If the default delimiters do not meet your business requirements, you can specify custom delimiters. All ASCII codes can be specified as delimiters.
    
    If you leave **Delimiter** empty, Simple Log Service considers an entire log as a whole. In this case, you can search for the log only by using a complete string or by performing fuzzy match.
    
    For example, the content of a log is `/url/pic/abc.gif`.
    
    -   If you do not specify a delimiter, the content of the log is considered as a single word `/url/pic/abc.gif`. You can search for the log only by using the `/url/pic/abc.gif` keyword or by using `/url/pic/*` to perform fuzzy match.
        
    -   If you set Delimiter to a forward slash (/), the content of the log is split into the following three words: `url`, `pic`, and `abc.gif`. You can search for the log by using the `url`, `abc.gif`, or `/url/pic/abc.gif` keyword, or by using `pi*` to perform fuzzy match.
        
    -   If you set the Delimiter parameter to a forward slash (/) and a period (.), the content of the log is split into the following four words: `url`, `pic`, `abc`, and `gif`. You can search for the log by using one of the preceding words or by performing fuzzy match.
        
    
    ##### Create field indexes
    
    After you click **Enable**, you can click **Automatic Index Generation** in the **Search & Analysis** panel. Simple Log Service automatically generates field indexes based on the first log in the preview results of data collection. If you want to create custom field indexes, click the plus sign (`+`). For more information, see [Parameters](#4fae80eab5ufa).
    
    The first time you open the Search & Analysis panel, the following settings are displayed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712933371/p870373.png)
    
    The following table describes the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2336014371/p879620.png)
    
    ##### **Parameters**
    
    **Parameter**
    
    **Description**
    
    **Field Name**
    
    The name of the log field. Example: `client_ip`.
    
    The name can contain only letters, digits, and underscores (\_). It must start with a letter or an underscore (\_).
    
    **Important**
    
    -   If you want to create an index for a `__tag__` field, such as a public IP address or UNIX timestamp, you must set the **Field Name** parameter to a value in the `__tag__:KEY` format. Example: `__tag__:__receive_time__`. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
        
    -   `__tag__` fields do not support numeric indexes. When you create an index for a `__tag__` field, you must set the **Type** parameter to **text**.
        
    
    **Type**
    
    The data type of the field value. Valid values: **text**, **long**, **double**, and **json**. For more information, see [Data types](/help/en/sls/data-types#concept-ijf-qs3-ffb).
    
    If you set the data type for a field to **long** or **double**, you cannot configure the **Case Sensitive**, **Include Chinese**, or **Delimiter** parameter for the field.
    
    **Alias**
    
    The alias of the field. For example, you can set the alias of the `client_ip` field to `ip`.
    
    The alias can contain only letters, digits, and underscores (\_). It must start with a letter or an underscore (\_).
    
    **Important**
    
    You can use the alias of a field only in an analytic statement. You must use the original name of a field in a search statement. An analytic statement includes a SELECT statement. For more information, see [Column aliases](/help/en/sls/column-aliases#reference-htb-lmq-zdb).
    
    **Case Sensitive**
    
    Specifies whether searches are case-sensitive.
    
    -   If you turn on **Case Sensitive**, searches are case-sensitive. For example, if a log contains `internalError`, you can search for the log by using only the `internalError` keyword.
        
    -   If you turn off **Case Sensitive**, searches are not case-sensitive. For example, if a log contains `internalError`, you can search for the log by using the `INTERNALERROR` or `internalerror` keyword.
        
    
    **Delimiter**
    
    The delimiters that are used to split the content of a log into multiple words. By default, Simple Log Service uses the following delimiters: `, '";=()[]{}?@&<>/:\n\t\r`. If the default delimiters do not meet your business requirements, you can specify custom delimiters. All ASCII codes can be specified as delimiters.
    
    If you leave **Delimiter** empty, Simple Log Service considers an entire log as a whole. In this case, you can search for the log only by using a complete string or by performing fuzzy match.
    
    For example, the content of a log is `/url/pic/abc.gif`.
    
    -   If you do not specify a delimiter, the content of the log is considered as a single word `/url/pic/abc.gif`. You can search for the log only by using the `/url/pic/abc.gif` keyword or by using `/url/pic/*` to perform fuzzy match.
        
    -   If you set Delimiter to a forward slash (/), the content of the log is split into the following three words: `url`, `pic`, and `abc.gif`. You can search for the log by using the `url`, `abc.gif`, or `/url/pic/abc.gif` keyword, or by using `pi*` to perform fuzzy match.
        
    -   If you set the Delimiter parameter to a forward slash (/) and a period (.), the content of the log is split into the following four words: `url`, `pic`, `abc`, and `gif`. You can search for the log by using one of the preceding words or by performing fuzzy match.
        
    
    **Include Chinese**
    
    Specifies whether to distinguish between Chinese content and English content in searches.
    
    -   If you turn on **Include Chinese** and a log contains Chinese characters, the Chinese content is split based on Chinese grammar. The English content is split by using specified delimiters.
        
        **Important**
        
        When Chinese content is split, the write speed is reduced. Proceed with caution.
        
    -   If you turn off **Include Chinese**, all content of a log is split by using specified delimiters.
        
    
    **Enable Analytics**
    
    You can perform statistical analysis on a field only if you turn on **Enable Analytics** for the field.
    
7.  Optional. Specify the maximum length of a field value.
    
    During SQL analysis, text field values are truncated if they exceed the configured maximum length. The default maximum length of a field value that can be retained for analysis is `2,048` bytes, which is equivalent to 2 KB. You can change the value of the **Maximum Field Length** parameter in the lower part of the **Search & Analysis** panel. Valid values: 64 to 16384. Unit: bytes.
    
    **Important**
    
    -   New indexes take effect only for new logs.
        
    -   If the length of a field value exceeds the value of this parameter, the field value is truncated and the excess part is not involved in analysis.
        
    
    ![设置字段最大长度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5144204471/p542513.png)
    

### **API**

Simple Log Service allows you to call API operations to manage indexes. For more information, see the following topics:

-   [CreateIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-createindex)
    
-   [GetIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-getindex)
    
-   [UpdateIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-updateindex)
    
-   [DeleteIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteindex)
    

### **SDK**

Simple Log Service allows you to use SDKs for multiple programming languages to manage indexes. The following section describes some commonly used SDKs. For more information, see [Overview of Simple Log Service SDK](/help/en/sls/developer-reference/overview-of-log-service-sdk).

## Java

You can use Simple Log Service SDK for Java to manage indexes. For more information, see [Use Simple Log Service SDK for Java to manage indexes](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-indexes).

## Python

You can use Simple Log Service SDK for Python to manage indexes. For more information, see [Use Simple Log Service SDK for Python to manage indexes](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-indexes).

In addition to its native SDK, Simple Log Service also supports the common Alibaba Cloud SDKs. For more information, see [Simple Log Service\_SDK Center\_Alibaba Cloud OpenAPI Explorer](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc).

### **CLI**

You can use Simple Log Service CLIs to manage indexes. For more information, see the following topics:

-   [create\_index](/help/en/sls/developer-reference/create-index)
    
-   [delete\_index](/help/en/sls/developer-reference/delete-index)
    
-   [get\_index\_config](/help/en/sls/developer-reference/get-index-config)
    
-   [update\_index](/help/en/sls/developer-reference/update-index)
    

## **Update indexes**

### Procedure

On the **query and analysis** page of the Logstore that you want to manage, choose **Index Attributes** > **Attributes**. Query and analysis results vary based on index configurations. You must update indexes based on your business requirements. After indexes are updated, the new indexes take effect within approximately 1 minute.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9677486371/p890913.png)

## **Disable the indexing feature**

**Important**

After you **disable the indexing feature** for a Logstore, the storage space that is occupied by historical indexes is automatically released after the data retention period of the Logstore elapses.

### Procedure

On the **query and analysis** page of the Logstore that you want to manage, choose **Index Attributes** > **Disable**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1016264371/p879758.png)

## **Index configuration examples**

### **Example 1**

A log contains the `request_time` field, and the `request_time>100` field-based search statement is executed.

-   If only full-text indexes are created, logs that contain `request_time`, `>`, and `100` are returned. The greater-than sign (>) is not a delimiter.
    
-   If only field indexes are created and the field types are **DOUBLE** and **LONG**, logs whose `request_time` field value is greater than 100 are returned.
    
-   If both full-text indexes and field indexes are created and the field types are **DOUBLE** and **LONG**, the full-text indexes do not take effect for the `request_time` field and logs whose `request_time` field value is greater than 100 are returned.
    

### **Example 2**

A log contains the `request_time` field, and the `request_time` full text-based search statement is executed.

-   If only field indexes are created and the field types are **DOUBLE** and **LONG**, no logs are returned.
    
-   If only full-text indexes are created, logs that contain the `request_time` field are returned. In this case, the statement queries data from all logs.
    
-   If only field indexes are created and the field type is TEXT, logs that contain the `request_time` field are returned. In this case, the statement queries data from all fields of the TEXT type.
    

### **Example 3**

A log contains the `status` field, and the `* | SELECT status, count(*) AS PV GROUP BY status` query statement is executed.

-   If only full-text indexes are created, no logs are returned.
    
-   If a field index is created for the `status` field and analytics are enabled for it, the query returns the total page views (PVs) for each status code.
    

## Index traffic descriptions

### **Full-text indexes**

All field names and field values are stored as text. In this case, field names and field values are both included in the calculation of index traffic.

### **Field indexes**

The method that is used to calculate index traffic varies based on the data type of a field.

-   **TEXT** type: Field names and field values are both included in the calculation of index traffic.
    
-   **LONG** and **DOUBLE** types: Field names are not included in the calculation of index traffic. Each field value is counted as 8 bytes in index traffic.
    
    For example, if you create an index for the `status` field of the **LONG** type and the field value is `200`, the string `status` is not included in the calculation of index traffic and the value `200` is counted as 8 bytes in index traffic.
    
-   **JSON** type: Field names and field values are both included in the calculation of index traffic. The subfields that are not indexed are also included. For more information, see [Why is index traffic generated for JSON subfields that are not indexed?](/help/en/sls/why-is-index-traffic-generated-for-json-subfields-that-are-not-indexed#concept-2143314)
    
    -   If a subfield is not indexed, index traffic is calculated by regarding the data type of the subfield as **TEXT**.
        
    -   If a subfield is indexed, index traffic is calculated based on the data type of the subfield. The data type can be **TEXT**, **LONG** or **DOUBLE**.
        

## Billing overview

### **Logstores that use the pay-by-ingested-data billing mode**

-   Indexes occupy storage space. For more information about storage types, see [Configure intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).
    
-   Reindexing does not generate fees.
    
-   For more information about the billing of index traffic, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
    

### **Logstores that use the pay-by-feature billing mode**

-   Indexes occupy storage space. For more information about storage types, see [Configure intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).
    
-   When you create indexes, traffic is generated. You are charged for index traffic based on the "index traffic of log data" and "index traffic of log data in Query Logstores" billable items. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items). For more information about how to reduce index traffic, see [How do I reduce index traffic fees?](/help/en/sls/how-do-i-reduce-index-traffic-fees)
    
-   Reindexing generates fees. During reindexing, you are charged based on the same billable items and prices as when you create indexes.
    

## What to do next

-   For more information about query and analysis examples, see the following topics:
    
    -   [Guide to log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis)
        
    -   [Query and analyze website logs](/help/en/sls/query-and-analyze-website-logs)
        
    -   [Query and analyze JSON logs](/help/en/sls/query-and-analyze-json-logs)
        
    -   [Collect, query, and analyze NGINX monitoring logs](/help/en/sls/collect-and-analyze-nginx-monitoring-logs)
        
    -   [Analyze Layer 7 access logs of SLB](/help/en/sls/analyze-layer-7-access-logs-of-slb)
        
-   For more information about how to improve query performance, see [Accelerate the query and analysis of logs](/help/en/sls/optimize-queries).
    
-   For more information about how to query and analyze JSON-formatted website logs, see [Query and analyze JSON logs](/help/en/sls/query-and-analyze-json-logs).
    

## FAQ

-   What do I do if I cannot query logs after the logs are imported to Simple Log Service?
    
    -   Check whether the delimiters that you specify meet the requirements.
        
    -   Configured indexes take effect only for new logs. If you want to query and analyze historical logs, you must reindex the logs. For more information, see [Reindex logs for a Logstore](/help/en/sls/reindex-logs-for-a-logstore#task-2424026).
        
    
-   How do I use two conditions to query logs?
    
    To query using multiple conditions, include them in the same search query. For example, to find logs where the status is neither "OK" nor "Unknown", use the query: not OK not Unknown.
    
-   How do I query logs that contain multiple keywords?
    
    For example, if you want to query logs whose **http\_user\_agent** field value contains like Gecko, you can use one of the following methods:
    
    -   Phrase search: http\_user\_agent:#"like Gecko". For more information, see [Phrase search](/help/en/sls/phrase-search#concept-2197127).
        
    -   LIKE clause: \* | Select \* where http\_user\_agent like '%like Gecko%'
        
    
-   How do I query logs by using a keyword that contains spaces?
    
    For example, if you query logs by using the POS version keyword, logs that contain POS or version are returned. If you query logs by using the "POS version" keyword, logs that contain POS version are returned.
    
-   [FAQ about log query](/help/en/sls/user-guide/faq-about-log-query)
    
-   [Common errors when querying and analyzing logs](/help/en/sls/resolve-common-errors-that-may-occur-when-i-query-and-analyze-logs)
    
-   [How do I query logs by using fuzzy match?](/help/en/sls/how-do-i-query-logs-by-using-fuzzy-match)
    
-   [FAQ about the query and analysis of JSON logs](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs)
    
-   [How do I download logs to a local device?](/help/en/sls/how-do-i-download-logs-to-a-local-device)
    
-   [Why are field values truncated when I query and analyze logs?](/help/en/sls/why-are-field-values-truncated-when-i-query-and-analyze-logs)
