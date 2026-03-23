Logtail sends HTTP requests to specified URLs at regular intervals based on your Logtail configuration. Then, Logtail uploads the bodies of the responses as data sources to Simple Log Service. This topic describes how to create a Logtail configuration in the Simple Log Service console and use the Logtail configuration to collect HTTP data.

## Prerequisites

Logtail is installed on your server. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb) or [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb).

**Note**

Linux servers support Logtail V0.16.0 or later. Windows servers support Logtail V1.0.0.8 or later.

## Implementation

Logtail sends HTTP requests to specified URLs based on the URLs, methods, headers, and bodies that are specified in your Logtail configuration. Then, Logtail uploads the response status codes, response bodies, and response time as data sources to Simple Log Service.

![实现原理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6007549951/p2931.png)

## Features

-   You can specify multiple URLs.
    
-   You can specify HTTP request methods.
    
-   You can specify an interval at which requests are sent.
    
-   You can specify custom request headers.
    
-   You can use HTTPS.
    
-   You can check whether the body of a response matches a fixed pattern.
    

## Scenarios

-   You can monitor service status by using HTTP API operations. For example, you can monitor the following types of services:
    
    -   NGINX
        
    -   Docker that supports monitoring by using HTTP API operations
        
    -   Elasticsearch
        
    -   HAProxy
        
    -   Other services that support monitoring by using HTTP API operations
        
-   You can monitor service availability.
    
    Logtail monitors the availability of a service by sending requests to the service at regular intervals and checking the response status codes and request latency.
    
-   You can pull data such as Weibo comments and the number of followers at regular intervals.
    

## Limits

-   A URL must start with `http` or `https`.
    
-   Custom certificates are not supported.
    
-   Interactive communications are not supported.
    

## Procedure

The following procedure shows how to collect HTTP data from the NGINX status module. Requests are sent to the URL `http://127.0.0.1/ngx_status` at intervals of 1,000 milliseconds. A regular expression is used to extract the status information from the body of a response.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  On the right-side of the page, click **Import Data**, then select **Custom Data Plug-in**.
    
3.  Select the project and logstore. Then, click **Next**.
    
4.  Create a machine group.
    
    -   If a machine group is available, click **Use Existing Machine Groups**.
        
    -   If no machine groups are available, perform the following steps to create a machine group. In this example, an Elastic Compute Service (ECS) instance is used.
        
        1.  On the **ECS Instance** tab, select Manually Select Instances. Then, select the ECS instance that you want to use and click **Create**.
            
            For more information, see [Install Logtail on ECS instances](/help/en/sls/install-logtail-on-ecs-instances#task-2561331).
            
            **Important**
            
            If your server is an ECS instance that belongs to a different Alibaba Cloud account from Simple Log Service, a server in a data center, or a server from a third-party cloud service provider, you must manually install Logtail on the server. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb) or [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb). After you manually install Logtail, you must configure a user identifier for the server. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier#task-arl-ynt-qy).
            
        2.  After you confirm the settings, click **OK**.
            
        3.  After Logtail is installed, click **Complete Installation**.
            
        4.  In the **Create Machine Group** step, configure the **Name** parameter and click **Next**.
            
            Simple Log Service allows you to create IP address-based machine groups and custom identifier-based machine groups. For more information, see [Create an IP address-based machine group](/help/en/sls/create-an-ip-address-based-machine-group#task-wc3-xn1-ry) and [Create a custom identifier-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group#concept-gyy-k3q-zdb).
            
    
5.  Confirm that the machine group is displayed in the **Applied Server Groups** section and click **Next**.
    
    **Important**
    
    If you apply a machine group immediately after you create the machine group, the heartbeat status of the machine group may be **FAIL**. This issue occurs because the machine group is not connected to Simple Log Service. To resolve this issue, you can click **Automatic Retry**. If the issue persists, see [What do I do if no heartbeat connections are detected on Logtail?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
    
6.  In the **Specify Data Source** step, configure **Config Name** and **Plug-in Config**. Then, click **Next**.
    
    ### Logtail plug-in collection
    
    -   inputs is required and is used to configure the data source settings for the Logtail configuration.
        
        **Important**
        
        You can specify only one type of data source in inputs.
        
    -   processors is optional and is used to configure the data processing settings for the Logtail configuration to parse data. You can specify one or more processing methods.
        
        If your logs cannot be parsed based only on the setting of inputs, you can configure processors in the **Plug-in Configuration** field to add plug-ins for data processing. For example, you can extract fields, extract log time, mask data, and filter logs. For more information, see [Use Logtail plug-ins to process data](/help/en/sls/overview-22#concept-hy3-nyc-wdb).
        
    
    ```
    {
     "inputs": [
         {
             "type": "metric_http",
             "detail": {
                 "IntervalMs": 1000,
                 "Addresses": [
                     "http://127.0.0.1/ngx_status"
                 ],
                 "Headers": {"key":"value"},
                 "IncludeBody": true
             }
         }
     ],
     "processors" : [
         {
             "type": "processor_regex",
             "detail" : {
                 "SourceKey": "content",
                 "Regex": "Active connections: (\\d+)\\s+server accepts handled requests\\s+(\\d+)\\s+(\\d+)\\s+(\\d+)\\s+Reading: (\\d+) Writing: (\\d+) Waiting: (\\d+).*",
                 "Keys": [
                     "connection",
                     "accepts",
                     "handled",
                     "requests",
                     "reading",
                     "writing",
                     "waiting"
                 ],
                 "FullMatch": true,
                 "NoKeyError": true,
                 "NoMatchError": true,
                 "KeepSource": false
             }
         }
     ]
    }
    ```
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    type
    
    string
    
    Yes
    
    The type of the data source. Set the value to metric\_http.
    
    Addresses
    
    string array
    
    Yes
    
    The URLs.
    
    **Important**
    
    A URL must start with `http` or `https`.
    
    IntervalMs
    
    int
    
    Yes
    
    The interval between two consecutive requests. Unit: milliseconds.
    
    Method
    
    string
    
    No
    
    The request method. Default value: `GET`. The value must be uppercase letters.
    
    Body
    
    string
    
    No
    
    The body of an HTTP request. This parameter is empty by default.
    
    Headers
    
    key: string, value: string map
    
    No
    
    The headers of an HTTP request. This parameter is empty by default. Example: `{"key":"value"}`. Configure this parameter based on your business scenario.
    
    PerAddressSleepMs
    
    int
    
    No
    
    The interval at which requests are sent to the URLs specified by the Addresses parameter. Unit: milliseconds. Default value: 100.
    
    ResponseTimeoutMs
    
    int
    
    No
    
    The timeout period for a request. Unit: milliseconds. Default value: 5000.
    
    IncludeBody
    
    boolean
    
    No
    
    Specifies whether to collect the request body. Default value: false. If you set this parameter to true, the request body is stored in the field that is named content.
    
    FollowRedirects
    
    boolean
    
    No
    
    Specifies whether to automatically process URL redirects. Default value: false.
    
    InsecureSkipVerify
    
    boolean
    
    No
    
    Specifies whether to skip the HTTPS security check. Default value: false.
    
    ResponseStringMatch
    
    string
    
    No
    
    Specifies whether to match the response body against a regular expression. The match result is stored in the field that is named \_response\_match\_. If the response body matches the regular expression, the value of the field is yes. Otherwise, the value is no.
    
7.  Preview data, configure indexes, and then click **Next**.
    
    By default, full-text indexing is enabled for Simple Log Service. You can also configure field indexes based on collected logs in manual mode or automatic mode. To configure field indexes in automatic mode, click **Automatic Index Generation**. This way, Simple Log Service automatically creates field indexes. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    
    **Important**
    
    If you want to query and analyze logs, you must enable full-text indexing or field indexing. If you enable both full-text indexing and field indexing, the system uses only field indexes.
    

## Troubleshooting

If no data is displayed on the preview page or query page after logs are collected by using Logtail, you can troubleshoot the errors based on the instructions that are provided in [What do I do if errors occur when I use Logtail to collect logs?](/help/en/sls/what-do-i-do-if-errors-occur-when-i-use-logtail-to-collect-logs#LogService-user-guide-0083)

## Result

After data is collected, you can view the data in the Simple Log Service console. For a request, you can view the data that is parsed by using the specified regular expression. You can also view the HTTP request method, requested URL, response time, status code, and request result.

```
"Index" : "7"  
"connection" : "1"  
"accepts" : "6079"  
"handled" : "6079"  
"requests" : "11596"  
"reading" : "0"  
"writing" : "1"  
"waiting" : "0"
"_method_" : "GET"  
"_address_" : "http://127.0.0.1/ngx_status"  
"_response_time_ms_" : "1.320"  
"_http_response_code_" : "200"  
"_result_" : "success"
```

By default, the following fields are uploaded for each request.

**Field**

**Description**

\_address\_

The request URL.

\_method\_

The HTTP request method.

\_response\_time\_ms\_

The response latency. Unit: milliseconds.

\_http\_response\_code\_

The HTTP status code.

\_result\_

The request result. Valid values: success, invalid\_body, match\_regex\_invalid, mismatch, and timeout.

\_response\_match\_

Indicates whether the response body matches the value of the ResponseStringMatch field. If the `ResponseStringMatch` field does not exist, the value of \_response\_match\_ is null. If the ResponseStringMatch field exists, the value of \_response\_match\_ is yes or no.
