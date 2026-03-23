The data transformation feature helps you organize data and extract more value from it, which reduces time and labor costs. A proper configuration can also save you money. This topic describes how to use the data transformation feature to optimize costs.

## Typical configuration

Based on the [transformation principles](/help/en/sls/data-transformation-basics#concept-1580694) and [performance guide](/help/en/sls/performance-guide#concept-2055068), you can simplify your data collection plan. Use one or more Logstores to quickly ingest data, and then use data transformation to distribute the data. Set the storage period and index configuration for each destination Logstore as needed.![Typical configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0453749951/p59422.png)

## Cost factors

The and [billing method](/help/en/sls/pay-as-you-go#concept-y3m-g5n-vdb) of Simple Log Service show that the cost is mainly determined by the following factors.

-   The amount of data imported daily.
    
-   The data storage period.
    
-   Whether an index is created.
    

Based on these cost factors, this topic provides the following two examples to demonstrate how to optimize costs.

## Optimize storage structure

If you continuously collect logs from an application with a daily write volume of 100 GB, store the logs for 30 days, and create a full-text index, the cost for Simple Log Service is approximately USD 562 per month.

If you are more interested in a specific class of logs, such as operation logs and error logs, you can optimize costs. Assume these logs account for 20% of the total volume, and you want to store them for 30 days. You only need to store the other logs for 7 days. In this case, you can use the following transformation plan.

-   Create a source Logstore to store data for 3 days without an index.
    
-   Create destination Logstore 1 to store operation and error logs for 30 days with an index.
    
-   Create destination Logstore 2 to store general logs for 7 days with an index.
    

In this case, your cost is approximately 421 dollars per month, which is a saving of approximately 25% compared to the original cost.

If your raw log storage period is 60 days, you can use data transformation to store the 20% of important logs for 60 days and the other logs for only 7 days. This method saves 12% on costs and doubles the storage time for your important logs.

## Optimize storage content

If you continuously collect logs for an application with a daily write volume of 100 GB, store the logs for 30 days, and create a full-text index, the cost for Simple Log Service is approximately USD 562/month.

The following example shows a raw log. Its size is 1021 bytes.

```
__source__:  192.0.2.0
__topic__:  ddos_access_log
body_bytes_sent:  3866
cc_action:  none
cc_blocks:  
cc_phase:  
content_type:  text/x-flv
host:  www.example.com
http_cookie:  i1=w1;x2=q2
http_referer:  http://www.example.com
http_user_agent:  Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/192.0.2.1 Safari/537.36
http_x_forwarded_for:  192.0.2.2
https:  true
isp_line:  BGP
matched_host:  www.example.com
method:  GET
real_client_ip:  192.0.2.3
remote_addr:  192.0.2.4
remote_port:  48196
request_length:  2946
request_method:  GET
request_time_msec:  78920
request_uri:  /request/nvwlvvkhw
server_name:  www.example.com
status:  502
time:  2019-07-22T17:40:26+08:00
ua_browser:  mozilla
ua_browser_family:  
ua_browser_type:  
ua_browser_version:  9.0
ua_device_type:  
ua_os:  windows_7
ua_os_family:  
upstream_addr:  192.0.2.4:80
upstream_ip:  192.0.2.5
upstream_response_time:  0.858
upstream_status:  200
user_id:  st0s2b5
```

If you are only interested in certain fields in the raw logs, you can use data transformation to store the important fields with an index for 30 days and the other fields for only 3 days. In this case, use the following transformation plan.

-   Create a source Logstore with a 3-day data retention period and no index.
    
-   Create a destination Logstore with a 30-day data retention period and an index for the required fields.
    

Assume that after processing, each log is about 60% of its original size. In this case, your cost is approximately USD 393 per month, which is a saving of approximately 30% compared to the original cost.

The original log is 1021 bytes. After transformation, the log is only 618 bytes, as shown in the following example.

```
__source__:  192.0.2.0
__topic__:  ddos_access_log
body_bytes_sent:  3866
content_type:  text/x-flv
host:  www.example.com
http_referer:  http://www.example.com
ua_browser:  mozilla
ua_browser_family:  
ua_browser_type:  
ua_browser_version:  9.0
ua_device_type:  
ua_os:  windows_7
http_x_forwarded_for:  192.0.2.2
matched_host:  www.example.com
method:  GET
real_client_ip:  192.0.2.3
request_length:  2946
request_uri:  /request/nvwlvvkhw
status:  502
upstream_addr:  192.0.2.4:80
upstream_ip:  192.0.2.5
upstream_response_time:  0.858
upstream_status:  200
user_id:  st0s2b5
```
