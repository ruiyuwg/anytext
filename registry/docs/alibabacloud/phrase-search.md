This topic describes the syntax and limits of the phrase search feature. This topic also provides examples on how to use the feature.

## Overview

Simple Log Service implements word segmentation to query logs. For example, the search statement `abc def` returns the logs that contain `abc` or `def`. The returned logs are sorted in random order, and the complete phrase cannot be exactly matched. Therefore, Simple Log Service introduces the phrase search feature to exactly match a specified phrase against logs.

When Simple Log Service receives a request to query the logs that contain a phrase, Simple Log Service performs the following steps:

1.  Execute the non-phrase search statement that corresponds to the phrase search statement to query logs. For example, if the phrase search statement is `#"abc def"`, Simple Log Service first executes the `"abc def"` statement, which is a non-phrase search statement.
    
    **Note**
    
    The phrase search feature allows up to 10,000 logs to be returned in Step 1. This prevents Simple Log Service from processing an excessive amount of data within a short period of time.
    
2.  Query the logs that match the phrase search condition from the preceding results and then return the final results.
    

## Syntax

-   Field-specific search
    
    ```
    key:#"abc def"
    ```
    
-   Full-text search
    
    ```
    #"abc def"
    ```
    

## Limits

-   The results of a phrase search support consecutive page turns in the forward or backward direction. Random redirection is not supported.
    
-   After a phrase search is performed, the log distribution histogram shows the results of the non-phrase search.
    
-   Fuzzy match is not supported in phrase searches.
    
-   In a phrase search statement, you must enclose the phrase that you want to match against logs within double quotation marks (").
    
-   The NOT operator is not supported in phrase search statements. For example, not #"abc def" is invalid.
    
-   Phrase search statements cannot be used together with analytic statements. For example, `#"abc" | select ***` is invalid. The quick analysis feature is not supported when you perform phrase searches.
    

## Page turns

When you perform a page turn, Simple Log Service performs a phrase search to ensure the continuity of query results.

For a phrase search, Simple Log Service can process up to 10,000 logs at a time. The number of logs that are displayed on a page may be less than the number that is specified by **Items per page**. However, you can still move forward one page. In this case, the number of logs that meet the phrase search condition among the 10,000 logs that are processed is less than the number that is specified by **Items per page**.

For example, the total number of logs is 20,000, and the number that is specified by Items per page is 100. After a phrase search is complete, only 89 logs are returned, and you can move forward one page. In this case, only 89 logs among the first 10,000 logs that are processed meet the phrase search condition. You can perform a page turn. Then, Simple Log Service automatically performs the phrase search for the second time on the remaining 10,000 logs and returns the logs that meet the phrase search condition.

![翻页说明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5622565661/p446403.png)

## Examples

1.  Query the logs that contain `redo_index/1`.
    
    -   If you use the non-phrase search statement `"redo_index/1"`, Simple Log Service searches for the logs that contain the specified keywords based on full-text indexes.![非短语查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851299461/p416723.png)
        
    -   If you use the phrase search statement `#"redo_index/1"`, Simple Log Service searches for the logs that contain the complete phrase `redo_index/1`.![短语查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851299461/p416459.png)
        
2.  Query logs that contain `02/Mar` ([Debug](https://sls.aliyun.com/doc/en/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log%3FslsRegion%3Dcn-shanghai%26isShare%3Dtrue%26queryString%3Drequest_time%20in%20%5B50%20100%5D)).
    
    -   If you use the non-phrase search statement time\_local: 02/Mar, Simple Log Service searches for the logs that contain the specified keywords based on full-text indexes.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5966231471/p923129.png)
        
    -   If you use the phrase search statement `time_local: #"02/Mar"`, Simple Log Service searches for the logs that contain the complete phrase `02/Mar`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5966231471/p923130.png)
