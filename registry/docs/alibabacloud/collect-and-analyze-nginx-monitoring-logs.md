You can configure the built-in `stub_status` module of NGINX to enable a dedicated status page to display the key metrics of your NGINX server in real time. The metrics include Active connections, Reading, Writing, and Waiting. You can use Logtail plug-ins to collect NGINX monitoring logs. After the logs are collected, you can query and analyze the logs. This way, you can continuously monitor your NGINX cluster.

## Prerequisites

Logtail is installed on your server. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb) or [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb).

**Note**

For a Linux server, install Logtail V0.16.0 or later. For a Windows server, install Logtail V1.0.0.8 or later.

## Step 1: Configure the `stub_status` module

**Note**

In this topic, Linux is used as an example to describe the configuration procedure.

1.  Run the following commands to install and start NGINX:
    
    ```
    sudo yum install nginx
    sudo systemctl start nginx
    ```
    
2.  Run the following command to check whether the NGINX stub\_status module is supported. For more information, see [Module ngx\_http\_stub\_status\_module](https://nginx.org/en/docs/http/ngx_http_stub_status_module.html).
    
    ```
    nginx -V 2>&1 | grep -o with-http_stub_status_module
    with-http_stub_status_module 
    ```
    
    If the following information is returned, the module is supported:
    
    ```
    with-http_stub_status_module
    ```
    
3.  Configure the stub\_status module on your server.
    
    1.  Run the following command to open the `/etc/nginx/nginx.conf` file:
        
        ```
        vim /etc/nginx/nginx.conf
        ```
        
    2.  Press the `i` key on your keyboard to enter the edit mode.
        
    3.  Add the following code to the `server {..}` section. For more information about `nginx_status`, see [Enable Nginx Status Page](https://easyengine.io/tutorials/nginx/status-page/).
        
        ```
        location /nginx_status {
            stub_status on;    # Enable the stub_status module.
            access_log   off;
            allow ${Server IP address};
            deny all;          # Deny access requests from all other IP addresses to the status page.
         }
        ```
        
    4.  Press the `Esc` key on the keyboard to exit the edit mode. Then, enter `:wq` to save and close the file.
        
4.  Run the following command on your server to verify the configuration results:
    
    ```
    curl http://${Server IP address}/nginx_status
    ```
    
    If the following output is returned, the configuration is successful.
    
    ```
    Active connections: 1
    server accepts handled requests
    2507455 2507455 2512972
    Reading: 0 Writing: 1 Waiting: 0                       
    ```
    

## Step 2: Collect NGINX monitoring logs

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  On the right side of the page that appears, click the **Quick Data Import** card.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1049786171/p786978.png)
    
3.  Click **Custom Data Plug-in**.
    
4.  Select the destination project and Logstore, and then click **Next**.
    
5.  Create a machine group.
    
    -   If you have an available machine group, click **Use Existing Machine Groups**.
        
    -   If you do not have a machine group, perform the following steps to create one. This example uses an ECS instance.
        
        1.  On the **ECS Instances** tab, manually select the destination ECS instance, and then click **Create**.
            
            For more information, see [Install Logtail on ECS instances](/help/en/sls/install-logtail-on-ecs-instances#task-2561331).
            
            **Important**
            
            You must manually install Logtail if your server is an ECS instance from a different Alibaba Cloud account, a server from another cloud provider, or a self-managed server in your data center. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb) or [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb).
            
            After you manually install Logtail, you must configure a user identifier on the server. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier#task-arl-ynt-qy).
            
        2.  After the installation is complete, click **Installation Confirmed**.
            
        3.  On the **Create Machine Group** page, enter a **Name** and click **Next**.
            
            Simple Log Service supports IP-based machine groups and custom identifier-based machine groups. For more information about the parameters, see [Create an IP-based machine group](/help/en/sls/create-an-ip-address-based-machine-group#task-wc3-xn1-ry) and [Create a custom identifier-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group#concept-gyy-k3q-zdb).
            
    
6.  Confirm that the machine group is displayed in the **Applied Server Groups** section and click **Next**.
    
    **Important**
    
    If you apply a machine group immediately after you create the machine group, the heartbeat status of the machine group may be **FAIL**. This issue occurs because the machine group is not connected to Simple Log Service. To resolve this issue, you can click **Automatic Retry**. If the issue persists, see [What do I do if no heartbeat connections are detected on Logtail?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
    
7.  In the **Configure Data Source** step, configure **Configuration Name** and **Plug-in Configuration**. Then, click **Next**.
    
    -   inputs is required and is used to configure the data source settings for the Logtail configuration.
        
        **Important**
        
        You can specify only one type of data source in inputs.
        
    -   processors is optional and is used to configure the data processing settings for the Logtail configuration to parse data. You can specify one or more processing methods.
        
        If your logs cannot be parsed based only on the setting of inputs, you can configure processors in the **Plug-in Configuration** field to add plugins for data processing. For example, extract fields, extract log time, mask data, and filter logs. For more information, see [Logtail plugins for data processing](/help/en/sls/overview-22#concept-hy3-nyc-wdb).
        
    
    ```
    {
    "inputs": [
     {
          "type": "metric_http",
          "detail": {
              "IntervalMs": 60000,
              "Addresses": [
                  "http://${Server IP address}/nginx_status",
                  "http://${Server IP address}/nginx_status",
                  "http://${Server IP address}/nginx_status"
              ],
              "IncludeBody": true
          }
     }
    ],
    "processors": [
     {
          "type": "processor_regex",
          "detail": {
              "SourceKey": "content",
              "Regex": "Active connections: (\\d+)\\s+server accepts handled requests\\s+(\\d+)\\s+(\\d+)\\s+(\\d+)\\s+Reading: (\\d+) Writing: (\\d+) Waiting: (\\d+)[\\s\\S]*",
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
    
    The following table describes the key parameters.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    type
    
    string
    
    Yes
    
    The type of the data source. Set the value to metric\_http.
    
    IntervalMs
    
    int
    
    Yes
    
    The interval between two consecutive requests. Unit: milliseconds.
    
    Addresses
    
    Array
    
    Yes
    
    The URLs that you want to monitor.
    
    IncludeBody
    
    boolean
    
    No
    
    Specifies whether to collect the body information of requests. Default value: false. If you set this parameter to true, the body information is collected and stored in the content field.
    

You can view the collected logs 1 minute after the Logtail configuration is created. The following example shows a collected log. By default, Simple Log Service generates the nginx\_status dashboard to display the results of query and analysis on the collected logs.

```
_address_:http://10.10.XX.XX/nginx_status  
_http_response_code_:200  
_method_:GET  
_response_time_ms_:1.83716261897  
_result_:success  
accepts:33591200  
connection:450  
handled:33599550  
reading:626  
requests:39149290  
waiting:68  
writing:145                  
```

## Step 3: Query and analyze logs

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9156874471/p768903.png)
    
4.  Enter a query statement in the search box, click **Last 15 Minutes**, and then specify a query time range.
    
    For more information, see [Step 1: Configure an index](/help/en/sls/quick-guide-to-query-and-analysis#section-6xm-oul-cib).
    
    -   Query logs
        
        -   Query the information about an IP address.
            
            ```
            _address_ : 10.10.0.0
            ```
            
        -   Query the requests whose response time exceeds 100 milliseconds.
            
            ```
            _response_time_ms_ > 100
            ```
            
        -   Query the requests for which the HTTP status code 200 is not returned.
            
            ```
            not _http_response_code_ : 200
            ```
            
    -   Analyze logs
        
        -   Obtain the average numbers of waiting connections, reading connections, writing connections, and connections at 5-minute intervals.
            
            ```
            *| select  avg(waiting) as waiting, avg(reading)  as reading,  avg(writing)  as writing,  avg(connection)  as connection,  from_unixtime( __time__ - __time__ % 300) as time group by __time__ - __time__ % 300 order by time limit 1440                       
            ```
            
        -   Obtain the top 10 servers that have the largest number of waiting connections.
            
            ```
            *| select  max(waiting) as max_waiting, _address_, from_unixtime(max(__time__)) as time group by address order by max_waiting desc limit 10                        
            ```
            
        -   Obtain the number of IP addresses.
            
            ```
            * | select  count(distinct(_address_)) as total                       
            ```
            
        -   Obtain the number of IP addresses from which failed requests are initiated.
            
            ```
            not _result_ : success | select  count(distinct(_address_))                        
            ```
            
        -   Obtain the IP addresses from which the 10 most recent failed requests are initiated.
            
            ```
            not _result_ : success | select _address_ as address, from_unixtime(__time__) as time  order by __time__ desc limit 10                       
            ```
            
        -   Obtain the total number of requests at 5-minute intervals.
            
            ```
            *| select  avg(handled) * count(distinct(_address_)) as total_handled, avg(requests) * count(distinct(address)) as total_requests,  from_unixtime( __time__ - __time__ % 300) as time group by __time__ - __time__ % 300 order by time limit 1440                       
            ```
            
        -   Obtain the average request latency at 5-minute intervals.
            
            ```
            *| select  avg(_response_time_ms_) as avg_delay,  from_unixtime( __time__ - __time__ % 300) as time group by __time__ - __time__ % 300 order by time limit 1440                      
            ```
            
        -   Obtain the numbers of successful requests and failed requests.
            
            ```
            not _http_response_code_ : 200  | select  count(1)                     
            ```
            
            ```
            _http_response_code_ : 200  | select  count(1)                       
            ```
