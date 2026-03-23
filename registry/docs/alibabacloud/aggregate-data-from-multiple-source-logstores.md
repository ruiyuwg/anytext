Simple Log Service lets you aggregate data from multiple source Logstores into a single Logstore by configuring a data transformation job for each source. This topic describes a common scenario and the procedure.

## Background information

An information website offers services distributed globally. Access logs from different information channels are collected and stored in Logstores across multiple Alibaba Cloud accounts. To aggregate the log data into a single Logstore for subsequent queries and analysis, you can use the [e\_output](/help/en/sls/event-processing-functions#section-zi7-wtp-30c) function for data transformation.

This topic uses logs from different Logstores in the same destination region, **UK (London)**, to describe the procedure for aggregating log data:

-   Raw logs from Account 1 are stored in Logstore\_1 within Project\_1. This project resides in the UK (London) region.
    
    ```
    Log 1
    request_id: 1
    http_host:  example.com
    http_status:  200
    request_method:  GET
    request_uri:  /pic/icon.jpg
    
    Log 2
    request_id: 2
    http_host:  aliyundoc.com
    http_status:  301
    request_method:  POST
    request_uri:  /data/data.php
    ```
    
-   Logs from Account 2 are stored in Logstore\_2 within Project\_2. This project resides in the UK (London) region.
    
    ```
    Log 1
    request_id: 3
    host:  example.edu
    status:  404
    request_method:  GET
    request_uri:  /category/abc/product_id
    
    Log 2
    request_id: 4
    host:  example.net
    status:  200
    request_method:  GET
    request_uri:  /data/index.html
    ```
    
-   Processing target
    
    -   Export all log events from Logstore\_1 in Account 1 where the `http_status` is `200` to Logstore\_3 in Account 3.
        
    -   For all log events in LogStore\_2 of account 2 where `http_status` is `200`, rename the field `host` to `http_host` and the field `status` to `http_status` (to align with LogStore1), then output the results to LogStore\_3 of account 3.
        

## Step 1: Configure the data transformation rule for Logstore\_1

1.  Go to the data transformation page for Logstore\_1 in Account 1. For the procedure in the console, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job).
    
2.  On the data transformation page, configure the following transformation rule to export all log events from Logstore\_1 in Account 1 where `http_status` is `200` to Logstore\_3 in Account 3.
    
    ```
    e_if(e_match("http_status", "200"), e_output("target_logstore"))
    ```
    
3.  Create a data transformation job. In the **Storage Destination** section, configure the **Destination Name**, **Destination Region**, **Destination Project**, and **Destination Logstore** parameters as shown in the figure. For more information about the authorization method, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job).
    
    ![加工规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1373836061/p58876.png)
    

## Step 2: Configure the data transformation rule for Logstore\_2

1.  Go to the data transformation page for Logstore\_2 in Account 2. For the steps in the console, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job).
    
2.  On the Data Transformation page, configure the following transformation rule: For all log events in LogStore\_2 where `http_status` is `200`, rename the `host` field to `http_host` and the `status` field to `http_status` (to standardize with LogStore1), and then output the result to LogStore\_3 in Account 3.
    
    ```
    e_if(e_match("status", "200"), e_compose(e_rename("status", "http_status", "host", "http_host"), e_output("target_logstore")))
    ```
    
    Preview results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4680799171/p801732.png)
    
3.  Create a data transformation job. In the **Storage Destination** section, configure the **Destination Name**, **Destination Region**, **Destination Project**, and **Destination Logstore** parameters as shown in the figure. For more information about the authorization method, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4680799171/p801731.png)
    

## View aggregation results

You can query and analyze logs in `Logstore_3` in the UK (London) region. For more information, see [Quick start for query and analysis](/help/en/sls/quick-guide-to-query-and-analysis). The following are sample logs.

```
Log 1
request_id: 1
http_host:  example.com
http_status:  200
request_method:  GET
request_uri:  /pic/icon.jpg

Log 2
request_id: 4
http_host:  example.net
http_status:  200
request_method:  GET
request_uri:  /data/index.html
```
