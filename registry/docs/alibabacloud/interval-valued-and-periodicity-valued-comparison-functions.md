This topic describes the basic syntax of and provides examples for period-over-period comparison functions.

Simple Log Service supports the following period-over-period comparison functions.

**Important**

If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Support for SPL

[compare function](#section-gmx-4ja-9rz)

compare(_x_, _n_)

Compares the calculation result of the current period with the calculation result of a period n seconds before.

√

×

compare(_x_, _n1_, _n2_, _n3_...)

Compares the calculation result of the current period with the calculation results of multiple periods n1, n2, and n3 seconds before.

√

×

[ts\_compare function](#section-hcx-rhd-p2b)

ts\_compare(_x_, _n_)

Compares the calculation result of a time frame, such as per hour, in the current period with the calculation result of a time frame n seconds before.

√

×

ts\_compare(_x_, _n1_, _n2_, _n3_...)

Compares the calculation result of a time frame, such as per hour, in the current period with the calculation results of time frames n1, n2, and n3 seconds before.

√

×

**Important**

-   You must group the results of the ts\_compare function by a time column using the GROUP BY clause. Only one time column is supported.
    
-   The compare and ts\_compare functions cannot be nested.
    

## compare function

The compare function compares the calculation result of the current period with the calculation result of a period that is n seconds earlier.

### Syntax

-   Compares the calculation result of the current period with the calculation result of a period that is n seconds earlier.
    
    ```
    compare(x, n)
    ```
    
-   Compares the calculation result of the current period with the calculation results of multiple periods that are n1, n2, and n3 seconds earlier.
    
    ```
    compare(x, n1, n2, n3...)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the double or long type.

_n_

The time window in seconds. Examples: 3600 (1 hour), 86400 (1 day), 604800 (1 week), and 31622400 (1 year).

### Return value type

Array. The format is \[current result, result from n seconds ago, ratio of the current result to the result from n seconds ago\].

### Examples

-   Example 1: Calculate the ratio of website page views (PVs) for the current hour compared to the same hour yesterday.
    
    Set the time range for the query to **1 Hour (Time Frame)** and execute the following query statement. In the statement, 86400 specifies a period 86,400 seconds (1 day) before the current time, and log specifies the Logstore name.
    
    -   The results of queries and analyses are returned as an array.
        
        -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgY29tcGFyZShQViwgODY0MDApDQpGUk9NICAoDQogICAgU0VMRUNUDQogICAgICBjb3VudCgqKSBBUyBQVg0KICAgIEZST00gICAgICBsb2cNCiAgKQ%3D%3D))
            
            ```
            * |
            SELECT
              compare(PV, 86400)
            FROM  (
                SELECT
                  count(*) AS PV
                FROM      log
              )
            ```
            
        -   Query and analytic results![PV比](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5355367261/p230658.png)
            
            -   **3337.0** is the number of PVs in the current hour, for example, from 14:00:00 to 15:00:00 on December 25, 2020.
                
            -   **3522.0** is the number of PVs during the same hour yesterday, for example, from 14:00:00 to 15:00:00 on December 24, 2020.
                
            -   **0.947473026689381** is the ratio of PVs for the current hour compared to the same hour yesterday.
                
    -   Display the query and analytic results in separate columns
        
        -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgZGlmZiBbMV0gQVMgdG9kYXksDQogIGRpZmYgWzJdIEFTIHllc3RlcmRheSwNCiAgZGlmZiBbM10gQVMgcmF0aW8NCkZST00gICgNCiAgICBTRUxFQ1QNCiAgICAgIGNvbXBhcmUoUFYsIDg2NDAwKSBBUyBkaWZmDQogICAgRlJPTSAgICAgICgNCiAgICAgICAgU0VMRUNUDQogICAgICAgICAgY291bnQoKikgQVMgUFYNCiAgICAgICAgRlJPTSAgICAgICAgICBsb2cNCiAgICAgICkNCiAgKQ%3D%3D))
            
            ```
            * |
            SELECT
              diff [1] AS today,
              diff [2] AS yesterday,
              diff [3] AS ratio
            FROM  (
                SELECT
                  compare(PV, 86400) AS diff
                FROM      (
                    SELECT
                      count(*) AS PV
                    FROM          log
                  )
              )
            ```
            
            The compare function returns an array. In this statement, diff is the alias for the result, and diff\[1\] retrieves the first value from the array.
            
        -   Query and analytic results![同比结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5355367261/p231804.png)
            
            -   **3337.0** is the number of PVs in the current hour, for example, from 14:00:00 to 15:00:00 on December 25, 2020.
                
            -   **3522.0** is the number of PVs during the same hour yesterday, for example, from 14:00:00 to 15:00:00 on December 24, 2020.
                
            -   **0.947473026689381** is the ratio of PVs for the current hour compared to the same hour yesterday.
                
-   Example 2: Count the number of requests for each request method and status in the current hour and compare the result with the data from the same hour yesterday.
    
    Set the time range for the query to **1 Hour (Time Frame)** and execute the following query statement. In the statement, 3600 specifies a period 3,600 seconds (1 hour) before the current time, and log specifies the Logstore name.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgc3RhdHVzLA0KICByZXF1ZXN0X21ldGhvZCwNCiAgY29tcGFyZShQViwgMzYwMCkNCkZST00gICgNCiAgICBTRUxFQ1QNCiAgICAgIHN0YXR1cywNCiAgICAgIHJlcXVlc3RfbWV0aG9kLA0KICAgICAgY291bnQoKikgQVMgUFYNCiAgICBGUk9NICAgICAgbG9nDQogICAgR1JPVVAgQlkNCiAgICAgIHN0YXR1cywNCiAgICAgIHJlcXVlc3RfbWV0aG9kDQogICkNCkdST1VQIEJZDQogIHN0YXR1cywNCiAgcmVxdWVzdF9tZXRob2Q%3D))
        
        ```
        * |
        SELECT
          status,
          request_method,
          compare(PV, 3600)
        FROM  (
            SELECT
              status,
              request_method,
              count(*) AS PV
            FROM      log
            GROUP BY
              status,
              request_method
          )
        GROUP BY
          status,
          request_method
        ```
        
    -   Query and analytic results![同比和环比函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102054661/p494227.png)
        

## ts\_compare function

The ts\_compare function compares the calculation result of a time frame, such as per hour, in the current period with the calculation result of a time frame that is n seconds earlier.

**Important**

You must group the results of the ts\_compare function by a time column using the GROUP BY clause. Only one time column is supported.

### Syntax

-   Compares the calculation result of a time frame, such as per hour, in the current period with the calculation result of a time frame that is n seconds earlier.
    
    ```
    ts_compare(x, n)
    ```
    
-   Compares the calculation result of a time frame, such as per hour, in the current period with the calculation results of time frames that are n1, n2, and n3 seconds earlier.
    
    ```
    ts_compare(x, n1, n2, n3...)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The value is of the double or long type.

_n_

The time window in seconds. Examples: 3600 (1 hour), 86400 (1 day), 604800 (1 week), and 31622400 (1 year).

### Return value type

Array. The format is \[current result, result from n seconds ago, ratio of the current result to the result from n seconds ago, UNIX timestamp from n seconds ago\].

### **Examples**

-   Example 1: Calculate the ratio of hourly website PVs for today compared to the PVs from the same hour yesterday and the day before yesterday.
    
    Set the time range for the query to **Today (Time Frame)** and execute the following query statement. In the statement, 86400 specifies a period 86,400 seconds (1 day) before the current time, 172800 specifies a period 172,800 seconds (2 days) before the current time, log specifies the Logstore name, and date\_trunc('hour',\_\_time\_\_) uses the date\_trunc function to align the time to the hour.
    
    -   Display the query and analytic results in an array
        
        -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgdGltZSwNCiAgdHNfY29tcGFyZShQViwgODY0MDAsIDE3MjgwMCkgYXMgZGlmZg0KRlJPTSAgKA0KICAgIFNFTEVDVA0KICAgICAgY291bnQoKikgYXMgUFYsDQogICAgICBkYXRlX3RydW5jKCdob3VyJywgX190aW1lX18pIEFTIHRpbWUNCiAgICBGUk9NICAgICAgbG9nDQogICAgR1JPVVAgQlkNCiAgICAgIHRpbWUNCiAgKQ0KR1JPVVAgQlkNCiAgdGltZQ0KT1JERVIgQlkNCiAgdGltZQ%3D%3D))
            
            ```
            * |
            SELECT
              time,
              ts_compare(PV, 86400, 172800) as diff
            FROM  (
                SELECT
                  count(*) as PV,
                  date_trunc('hour', __time__) AS time
                FROM      log
                GROUP BY
                  time
              )
            GROUP BY
              time
            ORDER BY
              time
            ```
            
        -   Query and analytic results![每分钟PV](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102054661/p230798.png)
            
            -   **1174.0** is the number of PVs in the current period, for example, from 00:00 to 01:00 on September 22, 2022.
                
            -   **1191.0** is the number of PVs during the same period yesterday, for example, from 00:00 to 01:00 on September 21, 2022.
                
            -   **1253.0** is the number of PVs during the same period the day before yesterday, for example, from 00:00 to 01:00 on September 20, 2022.
                
            -   **0.9857262804366079** is the ratio of PVs for the current period compared to the same period yesterday.
                
            -   **0.936951316839585** is the ratio of PVs for the current period compared to the same period the day before yesterday.
                
            -   **1663689600.0** is the UNIX timestamp for 00:00 on September 21, 2022.
                
            -   **1663603200.0** is the UNIX timestamp for 00:00 on September 20, 2022.
                
            
            **Note**
            
            The time in the query and analytic results may vary based on when you execute the query.
            
    -   Display the query and analytic results in separate columns
        
        -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgdGltZSwNCiAgZGlmZiBbMV0gQVMgZGF5MSwNCiAgZGlmZiBbMl0gQVMgZGF5MiwNCiAgZGlmZiBbM10gQVMgZGF5MywNCiAgZGlmZiBbNF0gQVMgcmF0aW8xLA0KICBkaWZmIFs1XSBBUyByYXRpbzINCkZST00gICgNCiAgICBTRUxFQ1QNCiAgICAgIHRpbWUsDQogICAgICB0c19jb21wYXJlKFBWLCA4NjQwMCwgMTcyODAwKSBBUyBkaWZmDQogICAgRlJPTSAgICAgICgNCiAgICAgICAgU0VMRUNUDQogICAgICAgICAgY291bnQoKikgYXMgUFYsDQogICAgICAgICAgZGF0ZV90cnVuYygnaG91cicsIF9fdGltZV9fKSBBUyB0aW1lDQogICAgICAgIEZST00gICAgICAgICAgbG9nDQogICAgICAgIEdST1VQIEJZDQogICAgICAgICAgdGltZQ0KICAgICAgKQ0KICAgIEdST1VQIEJZDQogICAgICB0aW1lDQogICAgT1JERVIgQlkNCiAgICAgIHRpbWUNCiAgKQ%3D%3D))
            
            ```
            * |
            SELECT
              time,
              diff [1] AS day1,
              diff [2] AS day2,
              diff [3] AS day3,
              diff [4] AS ratio1,
              diff [5] AS ratio2
            FROM  (
                SELECT
                  time,
                  ts_compare(PV, 86400, 172800) AS diff
                FROM      (
                    SELECT
                      count(*) as PV,
                      date_trunc('hour', __time__) AS time
                    FROM          log
                    GROUP BY
                      time
                  )
                GROUP BY
                  time
                ORDER BY
                  time
              )
            ```
            
        -   Query and analytic results![同比](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5102054661/p232220.png)
            
-   Example 2: Calculate the hour-over-hour change in website PVs for today.
    
    Set the time range for the query to **Today (Relative)** and execute the following query statement. In the statement, 3600 specifies a period 3,600 seconds (1 hour) before the current time, log specifies the Logstore name, and date\_trunc('hour',\_\_time\_\_) uses the date\_trunc function to align the time to the hour.
    
    -   Query statement ([Debug](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgdGltZSwNCiAgdHNfY29tcGFyZShQViwgMzYwMCkgQVMgZGF0YQ0KRlJPTSgNCiAgICBTRUxFQ1QNCiAgICAgIGRhdGVfdHJ1bmMoJ2hvdXInLCBfX3RpbWVfXykgQVMgdGltZSwNCiAgICAgIGNvdW50KCopIEFTIFBWDQogICAgRlJPTSAgICAgIGxvZw0KICAgIEdST1VQIEJZDQogICAgICB0aW1lDQogICAgT1JERVIgQlkNCiAgICAgIHRpbWUNCiAgKQ0KR1JPVVAgQlkNCiAgdGltZQ%3D%3D))
        
        ```
        * |
        SELECT
          time,
          ts_compare(PV, 3600) AS data
        FROM(
            SELECT
              date_trunc('hour', __time__) AS time,
              count(*) AS PV
            FROM      log
            GROUP BY
              time
            ORDER BY
              time
          )
        GROUP BY
          time
        ```
        
    -   Query and analytic results![ts_compare](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6355367261/p232314.png)
        
        **Note**
        
        The time in the query and analytic results may vary based on when you execute the query.
