This topic provides answers to some frequently asked questions about the query and analysis of JSON logs.

## Sample log

The examples that are described in this topic are based on the logs of the order processing system. The logs are in the following JSON format. ![Sample JSON log](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p432893.png)

-   request: indicates the order request information. The value is in the JSON format. A request can contain multiple orders for one user. An order includes the purchased products and the total payment for the products.
    
-   response: indicates the processing result of orders in a request.
    
    -   If the request is successful, the value of the response field is SUCCESS.
        
    -   If the request fails, the value of the response field contains errcode and msg information. The value is in the JSON format.
        

You can collect the log to Simple Log Service by using Logtail for query and analysis. For more information, see [Collect logs in JSON mode](/help/en/sls/collect-logs-in-json-mode#reference-dsq-3v5-vdb).

## How do I configure indexes?

Indexes are a structure for storage. Indexes are used to sort one or more columns of log data. You can query log data only after you configure indexes. When you configure indexes for a JSON log, take note of the following questions:

### How do I select an index type?

Simple Log Service supports full-text indexes and field indexes. You can select an index type based on the following scenarios. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

-   If you want to query all fields in a log, we recommend that you create full-text indexes. If you want to query specific fields in a log, we recommend that you create field indexes for the fields to reduce indexing costs.
    
-   If you want to analyze fields by using SQL statements, you must create indexes and turn on Enable Analytics for the fields.
    

**Note**

If you configure full-text indexes and field indexes, the configurations of the field indexes take precedence in operations.

For example, if you want to analyze the request and response fields, you must create field indexes and turn on Enable Analytics for the fields.

### How do I specify the data type for a field when I configure indexes for the field?

When you configure indexes for a field, you can specify the following data types for the field: text, long, double, and JSON. For more information, see [Data types](/help/en/sls/data-types#concept-ijf-qs3-ffb).

When you specify the JSON data type for a field, take note of the following instructions:

-   If the field value is not in a standard JSON format but contains JSON-formatted data, specify the text data type for the field. If the field value is in a standard JSON format, specify the JSON data type for the field.
    
    **Note**
    
    For partially valid JSON logs, Simple Log Service parses only the valid part.
    
-   If you specify the JSON data type for a field, the field is a JSON object. In this case, if you want to analyze a leaf node in the JSON object, you can create indexes for the leaf node. This helps accelerate the query and analysis of the leaf node but generates indexing fees.
    
-   Simple Log Service allows you to create indexes for leaf nodes in JSON objects. However, you cannot create indexes for child nodes that contain leaf nodes.
    
-   You cannot create indexes for fields whose values are JSON arrays. You cannot create indexes for fields in a JSON array.
    

For example, you can create the following indexes based on the sample JSON log that is provided in this topic.

-   request fields
    
    -   request: The value is in the JSON format. You can specify the JSON data type for the field and turn on Enable Analytics for the field when you create indexes for the field.
        
    -   request.clientIp: This field is frequently analyzed. We recommend that you create indexes for the field, specify the text data type for the field, and turn on Enable Analytics for the field.
        
    -   request.http.path: This field is rarely analyzed. We recommend that you do not create indexes for the field. If you want to analyze the field, you can obtain the field value by using JSON functions.
        
    -   request.param: This field is a child node that contains leaf nodes. You cannot create indexes for the field.
        
    -   request.param.userId: This field is frequently analyzed. We recommend that you create indexes for the field, specify the text data type for the field, and turn on Enable Analytics for the field.
        
    -   request.param.orders: The value is a JSON array. You cannot create indexes for the field.
        
-   response field
    
    response: The value may not be in the JSON format. We recommend that you specify the text data type for the field and turn on Enable Analytics for the field when you create indexes for the field.
    

![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p432996.png)

After you create indexes, the newly collected logs are displayed in the following format. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p433025.png)

### How do I specify an alias?

If the path of a JSON leaf node is long, you can specify an alias for the path. For more information, see [Column aliases](/help/en/sls/column-aliases#reference-htb-lmq-zdb). ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p434438.png)

**Note**

-   When you configure indexes, you cannot specify duplicate field names or aliases for different fields.
    
-   The name of a leaf node in a JSON field is determined based on the complete path of the leaf node. For example, if you specify the alias clientIp for the response field, Simple Log Service does not consider that the alias is the same as the clientIp leaf node in the request field because the complete path of the leaf node is request.clientIp.
    

## How do I query and analyze an indexed JSON field?

A query statement is in the `Search statement|Analytic statement` format. In an analytic statement, you must enclose a field name in double quotation marks ("") and enclose a string in single quotation marks (''). You must specify a field based on the complete path of the field in the `Key1.Key2.Key3` format. Examples: `request.clientIp` and `request.param.userId`. For more information, see [Query and analyze JSON logs](/help/en/sls/query-and-analyze-json-logs#task-2024311).

For example, if you want to count the number of client IP addresses for user 186499, you can execute the following statement:

```
*
and request.param.userId: 186499 |
SELECT
  distinct("request.clientIp")
```

The following figure shows the query and analysis results. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5842604561/p435037.png)

## When do I need to use JSON functions?

When you query and analyze JSON logs, take note of the following circumstances: First, if the amount of data is large or the structure of the data is complex but relatively fixed, and you require high query and analysis performance, we recommend that you create field indexes for JSON leaf nodes before you query and analyze the logs. Second, if the amount of data is small and you want to reduce costs, you can use JSON functions to query and analyze logs without the need to create field indexes for JSON leaf nodes. You can use JSON functions to dynamically process and analyze JSON logs. Third, you can use only JSON functions for query and analysis in the following scenarios:

-   Field values may not be in the JSON format or need to be preprocessed.
    
    For example, the value of the response field is in the JSON format and includes the errcode field only when the request fails. If you want to analyze the distribution for the values of the errcode field, you must use a search statement to obtain the logs of failed requests and dynamically extract the values of the errcode field by using JSON functions in an analytic statement.
    
    ```
    *  not response :SUCCESS |
    SELECT
      json_extract_scalar(response, '$.errcode') AS errcode
    ```
    
    The following figure shows the query and analysis results. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p435042.png)
    
-   You cannot create indexes for some JSON nodes. In this case, you can use only JSON functions to analyze data in the nodes in real time. For example, you cannot create indexes for the request.param field or the request.param.orders field.
    

## How do I differentiate the json\_extract function from the json\_extract\_scalar function and select an appropriate function?

The json\_extract and json\_extract\_scalar functions are used to extract content from JSON objects or JSON arrays. The functions are similar in use, but differences also exist. The two functions are different in the following aspects:

-   The return value of the json\_extract function is of the JSON data type. The return value of the json\_extract\_scalar function is of the varchar data type.
    
    **Note**
    
    The JSON and varchar data types follow the SQL syntax and are different from the data types that are used in Simple Log Service indexes. The data types that follow the SQL syntax include varchar, bigint, boolean, JSON, array, and date. You can use the typeof function to view the data types of objects that are used in SQL analysis. For more information, see [typeof function](/help/en/sls/data-type-conversion-functions#section-jng-3t0-izs).
    
-   The json\_extract function can parse any substructure of a JSON object. The json\_extract\_scalar function parses only the leaf nodes whose values are of the scalar type and returns strings. A scalar value can be a string, Boolean value, or integer.
    

For example, if you want to extract the value of the clientIp field from the request field, you can use either of the functions.

-   Use the json\_extract function to extract data.
    
    ```
    * |
    SELECT
      json_extract(request, '$.clientIp')
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p435049.png)
    
-   Use the json\_extract\_scalar function to extract data.
    
    ```
    * | SELECT json_extract_scalar(request, '$.clientIp')
    ```
    
    The following figure shows the query and analysis results. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p435054.png)
    

If you want to obtain the first part of the value for the clientIp field, you must use the json\_extract\_scalar function to extract the value of the clientIp field and then use the split\_part function to extract the first number from the IP address. You cannot use the json\_extract function in this case to replace the json\_extract\_scalar function to extract the value of the clientIp field because the split\_part function supports input parameters only of the varchar data type.

```
* |
SELECT
  split_part(
    json_extract_scalar(request, '$.clientIp'),
    '.',
    1
  ) AS segment
```

The following figure shows the query and analysis results. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p434894.png)

In most cases, if you want to extract field values from a JSON object for analysis, we recommend that you use the json\_extract\_scalar function. The return value of the json\_extract\_scalar function is of the varchar data type. This type of value can be directly referenced by most other functions. If you want to analyze a JSON structure, we recommend that you use the json\_extract function. For example, you can use the following query statement to count the number of orders in a request, which is indicated by the number of elements in the JSON array in the request.param.orders field:

```
* |
SELECT
  json_array_length((json_extract(request, '$.param.orders')))
```

The following figure shows the query and analysis results. ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5842604561/p434364.png)

**Important**

The return value of the json\_extract\_scalar function is of the varchar data type. For example, the value 2 in the preceding query and analysis results is of the varchar data type. If you want to use the value for operations such as addition, you must use the cast function to convert the value to the bigint data type. For more information, see [Data type conversion functions](/help/en/sls/data-type-conversion-functions#concept-v55-4lq-zdb).

## How do I configure json\_path?

If you want to use functions such as the json\_extract function to extract field values from a JSON log, you must use json\_path to specify the position from which you want to extract values in the JSON object. json\_path is in the `$.a.b` format. The dollar sign ($) specifies the root node of the current JSON object. You can use periods (.) to denote the child node from which you want to extract values.

If a JSON object contains the fields that include special characters, you must use brackets \[\] to replace periods (.) and use double quotation marks ("") to enclose the field names. Example fields: http.path, http path, and http-path. Example query statement: `* |SELECT json_extract_scalar(request, '$["http.path"]')`.

**Note**

If you use SDKs for query and analysis, you must escape double quotation marks (""). Example query statement: `* | select json_extract_scalar(request, '$[\"http.path\"]')`.

When you extract an element from a JSON array, you can use brackets \[\]. In brackets \[\], a number is used to indicate a subscript, and the number starts from 0. Examples:

-   View the payment for the first order of a user.
    
    ```
    * |
    SELECT
      json_extract_scalar(request, '$.param.orders[0].payment')
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5842604561/p434995.png)
    
-   View the second product that a user buys in the first order.
    
    ```
    * |
    SELECT
      json_extract_scalar(request, '$.param.orders[0].commodity[1]')
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5842604561/p434996.png)
    

## How do I analyze JSON arrays?

If a log contains a JSON array, you can expand the JSON array by using the cast function and the UNNEST clause, and then perform aggregate operations.

### Example 1

If you want to count the payment amount of all successful requests, take note of the following instructions:

1.  Use the search statement to obtain the logs of successful requests and use the json\_extract function in the analytic statement to extract the values of the orders field.
    
    ```
    *
    and response: SUCCESS |
    SELECT
      json_extract(request, '$.param.orders')
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p433100.png)
    
2.  Convert the JSON arrays in the preceding query and analysis results to the array(json) data type.
    
    ```
    *
    and response: SUCCESS |
    SELECT
      cast(
        json_extract(request, '$.param.orders') AS array(json)
      )
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p433101.png)
    
3.  Use the UNNEST clause to expand the arrays.
    
    ```
    *
    and response: SUCCESS |
    SELECT
      orderinfo
    FROM  log,
      unnest(
        cast(
          json_extract(request, '$.param.orders') AS array(json)
        )
      ) AS t(orderinfo)
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6842604561/p433109.png)
    
4.  Use the json\_extract\_scalar function to extract the values of the payment field, use the cast function to convert the values to the bigint data type, and then add the values.
    
    ```
    *
    and response: SUCCESS |
    SELECT
      sum(
        cast(
          json_extract_scalar(orderinfo, '$.payment') AS bigint
        )
      )
    FROM  log,
      unnest(
        cast(
          json_extract(request, '$.param.orders') AS array(json)
        )
      ) AS t(orderinfo)
    ```
    
    The following figure shows the query and analysis results.
    
    ![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6842604561/p433110.png)
    

### Example 2

Count the number of each product that is purchased in all successful requests. You can extract the values of the order field, convert the values to the array(json) data type, and then use the UNNEST clause to expand the values. Each line in the expanded result represents an order. Use the json\_extract function to extract the values of the commodity field, convert the values to the array(json) data type, and then use the UNNEST clause to expand the values. Each line in the expanded result represents a product. Then, group and add the values. You can follow the instructions that are provided in Example 1.

```
*
and response: SUCCESS |
SELECT
  item,
  count(1) AS cnt
FROM  (
    SELECT
      orderinfo
    FROM      log,
      unnest(
        cast(
          json_extract(request, '$.param.orders') AS array(json)
        )
      ) AS t(orderinfo)
  ),
  unnest(
    cast(
      json_extract(orderinfo, '$.commodity') AS array(json)
    )
  ) AS t(item)
GROUP  BY
  item
ORDER BY
  cnt DESC
```

The following figure shows the query and analysis results.

![JSON logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6994514561/p433111.png)
