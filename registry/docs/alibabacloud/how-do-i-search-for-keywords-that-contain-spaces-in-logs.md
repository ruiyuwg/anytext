When you use query statements to query and analyze logs, you must enclose some characters in quotation marks. For example, if a proper noun such as a field name or a table name contains spaces, you must enclose the proper noun in quotation marks. This topic describes how to use quotation marks in query statements.

## Use quotation marks in search statements

### **Description**

If a field name or a field value contains special characters such as spaces and Chinese characters, or contains syntax keywords such as AND and OR, you must enclose the field name or field value in double quotation marks (""). For more information about the description and examples of search syntax, see [Search syntax](/help/en/sls/query-syntax/#ab246ecc8f2r9).

### **Examples**

-   Query logs whose `request method` field value contains `PUT`. The name of the `request method` field contains a space. You must enclose the field name in double quotation marks ("") in the search statement.
    
    ```
    "request method":PUT
    ```
    
-   Query logs whose `remote_user` field value is an empty string.
    
    ```
    remote_user:""
    ```
    
-   Query logs whose `region` field value contains `cn*`.
    
    `cn*` is a string. If a log is `region:cn*,en` and the delimiter is a comma (,), Simple Log Service splits the log into `region`, `cn*`, and `en`. You can use the following search statement to search for the log:
    
    ```
    region:"cn*"
    ```
    

## Use quotation marks in analytic statements

### **Description**

-   If a proper noun such as a field name or a table name contains special characters such as spaces and Chinese characters, or contains syntax keywords such as AND and OR, you must enclose the proper noun in double quotation marks ("") in analytic statements. An analytic statement includes a SELECT statement.
    
-   If specific characters represent a string, you must use single quotation marks ('') to enclose the characters in analytic statements. For example, `'status'` indicates the status string, and `status` or `"status"` indicates the status field.
    

### **Examples**

-   Calculate the top 10 requests with the longest duration.
    
    The name of the `top 10` column contains a space. You must enclose the column name in double quotation marks ("").
    
    ```
    * | SELECT max(request_time,10) AS "top 10"
    ```
    
-   Query logs whose IP addresses match `192.168.XX.XX`.
    
    ```
    * | select * from log where key like '192.168.%.%'
    ```
    
-   Calculate the number of logs of requests by status code.
    
    The `content` field is indexed, and the data type is JSON. For more information, see [How do I query and analyze an indexed JSON field?](/help/en/sls/faq-about-the-query-and-analysis-of-json-logs#section-b2i-0tc-ba3)
    
    ```
    * | SELECT "content.status", COUNT(*) AS PV GROUP BY "content.status"
    ```
