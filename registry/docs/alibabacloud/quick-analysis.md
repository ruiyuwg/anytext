The quick analysis feature of Simple Log Service allows you to perform a query with ease. You can use this feature to analyze the distribution of a field over a period of time.

## Prerequisites

Indexes are configured for the required fields and Enable Analytics is turned on for the fields. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

For example, if a log contains the request\_method and request\_time fields, you can configure indexes for the two fields. The following figure shows the configurations.![指定字段查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9523359951/p5590.png)

## Features

-   Allows you to analyze the first 100,000 logs that are returned for a query.
    
    **Note**
    
    When you perform a quick analysis during the selected time range, the first 100,000 logs are returned. If you use a saved search to query all data in a Logstore, you must delete the Limit 100000 clause.
    
-   Groups fields of the text type and provides statistics about the top 10 groups.
    
-   Generates approx\_distinct statements for fields of the text type.
    
-   Supports histogram-based statistics about the approximate distribution of fields of the long and double type.
    
    Histogram-based statistics groups sampling data and calculates the average value of each group.
    
-   Searches for the maximum, minimum, average, or sum of fields of the long and double type.
    
-   Generates a query statement based on a quick analysis.
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the Logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5148375171/p768903.png)
    
4.  On the **Raw Logs** tab, click the required field in the **Quick Analysis** column.
    
    ![快速分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5310278461/p5591.png)
    
    -   Provide grouping statistics for fields of the text type and approximate distribution histogram-based statistics for fields of the long and double type. For more information, see [Text type](#section-o22-4wj-5cb) or [Long and double types](#section-ovl-pwj-5cb).
        
    -   Provide query statements.
        
        Click the ![快速分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4033713061/p46920.png) icon next to the required field. You are redirected to the **Graph** tab. A query statement for grouping statistics is provided in the search box.
        
    -   Calculate the number of distinct values of a field.
        
        In the Quick Analysis column, click **Count Distinct Values** under the required field. You can obtain the number of distinct values of the `${keyName}` field.
        
    -   Display field names or aliases.
        
        Click the ![别名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0571777961/p175365.png) icon to specify whether to display field names or aliases. Aliases can be specified when you configure indexes. For example, if you set the alias of host\_name to host, host is displayed in the Quick Analysis column after you select Show Field Aliases.
        
        **Note**
        
        If you do not specify an alias for a field, the field name is displayed after you select Show Field Aliases.
        
    

## Text type

The quick analysis feature provides grouping statistics for fields of the text type. If you use this method, the first 100,000 logs are grouped and the ratios of the top 10 groups are returned. For example, you can obtain the following result based on grouping statistics of request\_method. The GET method is the most common request method.![text类型字段分组统计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9523359951/p5593.png)

## Long and double types

-   Display approximate distribution by using histograms.
    
    The number of field values of the long and double types is large. The preceding grouping analytics method is not suitable for the long or double type. Simple Log Service assigns field values into 10 buckets and displays the approximate distribution of the values in a histogram. The following figure shows the approximate distribution of the request\_time field. This distribution of field value indicates that most of the request periods are distributed around 1.346 milliseconds.![近似分布直方统计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9523359951/p5594.png)
    
-   Quick analysis on the maximum value, minimum value, average, and sum of fields.
    
    You can click **Max** under a field to search for the maximum value, **Min** to search for the minimum value, **Avg** to calculate the average value, and **Sum** to calculate the sum of fields.
