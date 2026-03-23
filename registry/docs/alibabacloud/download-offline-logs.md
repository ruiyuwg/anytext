Alibaba Cloud Dynamic Content Delivery Network (DCDN) logs domain access and Web Application Firewall (WAF) blocking events on an hourly basis. You can download the logs of a specific domain on a specific day within 30 days to your local PC for analysis.

## **Usage notes**

-   The traffic usage of accelerated domain names that is queried by using the monitoring or resource usage feature available in the DCDN console or by calling API operations differs from that collected in logs. Typically, the traffic usage of accelerated domain names that is queried by using the monitoring or resource usage feature is 1.1 times that collected in logs. For more information, see [Why is the traffic amount found by using the monitoring and usage analytics feature or the usage statistics feature different from the traffic amount that is logged?](/help/en/edge-security-acceleration/dcdn/support/why-is-the-traffic-amount-found-by-using-the-monitoring-and-usage-analytics-feature-different-from-the-traffic-amount-that-is-logged#trouble-2320953)
    
-   In terms of resource monitoring, data is collected based on the region and ISP of client IP addresses. In terms of metering, fees are calculated based on the network traffic, bandwidth, and number of requests on DCDN points of presence (POPs) in each billable region. The resource monitoring data and the metering data may be slightly different due to different collection methods.
    
-   Some Internet service providers (ISPs) may assign **private IP addresses** to clients in specific regions. Therefore, POPs may receive requests from private IP addresses.
    
    **Note**
    
    Private IP addresses are of the following types:
    
    -   Type-A private IP addresses: 10.0.0.0 to 10.255.255.255. Subnet mask: 10.0.0.0/8.
        
    -   Type-B private IP addresses: 172.16.0.0 to 172.31.255.255. Subnet mask: 172.16.0.0/12.
        
    -   Type-C private IP addresses: 192.168.0.0 to 192.168.255.255. Subnet mask: 192.168.0.0/16.
        
    

## Log download

-   Log update delay: In most cases, log data is generated within 24 hours after an event occurs. In some cases, it may take longer.
    
-   Naming rule for log files: domainName\_year\_month\_day\_startTime\_endTime\[extensionField\].gz. The extension field starts with an underscore (\_). Example: `aliyundoc.com_2018_10_30_000000_010000_xx.gz`.
    
    **Note**
    
    Names of specific log files may not contain an extension field. Example: `aliyundoc.com_2018_10_30_000000_010000.gz`.
    

## Fields in access logs

-   Sample log entry
    
    ```
    [9/Jun/2015:01:58:09 +0800] 10.10.10.10 - 1542 "-" "GET http://www.aliyun.com/index.html" 200 191 2830 MISS "Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://example.com/robot/)" "text/html" 1.1.1.1 
    ```
    
-   Fields
    
    **Field**
    
    **Description**
    
    `[9/Jun/2015:01:58:09 +0800]`
    
    The end time of the request.
    
    `10.10.10.10`
    
    The first IP address in the X-Forwarded-For header that is carried in the request, which is client\_ip. If the client does not use a proxy to connect to the point of presence (POP), the IP address is used by the client to connect to the POP.
    
    **Note**
    
    -   The format of the X-Forwarded-For request header is `X-Forwarded-For: <client_ip>, <proxy_ip>`.
        
    -   If the client does not use a proxy to connect to the POP, the X-Forwarded-For request header contains only <client\_ip>. In this case, the value of client\_ip in logs may be a private IP address. A common reason is that the Internet service provider (ISP) allocates a private IP address to the client to reduce the usage of public IP addresses and costs.
        
    -   If the client uses a proxy to connect to the POP, the X-Forwarded-For request header contains <client\_ip> and <proxy\_ip>. In this case, the value of client\_ip in logs may also be a private IP address. A common reason is that the ISP allocates a public IP address to the proxy and a private IP address to the client.
        
    -   Given that the X-Forwarded-For header may be forged, we recommend that you use remote\_ip in [Log fields](/help/en/edge-security-acceleration/dcdn/user-guide/log-fields#section-7ox-djz-rrx) for log analysis and configuring WAF rules to block bad IP addresses. This is because remote\_ip indicates the real client IP address that is used to connect to DCDN.
        
    
    `-`
    
    The second IP address in the X-Forwarded-For header that is carried in the request, which is proxy\_ip. If the client does not use a proxy to connect to the Alibaba Cloud CDN POP, the value of this field is `-`.
    
    `1542`
    
    The response time. Unit: milliseconds.
    
    `"-"`
    
    The Referer header in HTTP requests.
    
    `GET`
    
    The request method.
    
    `http://www.aliyun.com/index.html`
    
    The request URL.
    
    `200`
    
    The HTTP status code.
    
    `191`
    
    The size of the request. Unit: bytes.
    
    `2830`
    
    The size of the response. Unit: bytes.
    
    `MISS`
    
    The cache hit status. Valid values:
    
    -   HIT: The request is a cache hit and does not need to be redirected to the origin server.
        
    -   MISS: The request is a cache miss and must be redirected to L2 POPs or the origin server.
        
    
    Alibaba Cloud CDN collects log data from POPs, except L2 POPs. If the field value is MISS, origin information is not provided. In this case, the log data does not show whether a cache-miss request is redirected to the origin server.
    
    `Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://example.com/robot/)`
    
    The User-Agent header.
    
    `text/html`
    
    The file type.
    
    **Note**
    
    Logs of domain names for which you enable the global resource plan do not contain this field.
    
    `1.1.1.1`
    
    The IP address that is used to connect to DCDN.
    
    **Note**
    
    Other fields:
    
    -   DYNAMIC: It is a dynamic request.
        
    -   CHARGE: The request is billed.
        
    -   NOTLAST: a reserved field, which has no meaning.
        
    

## Fields in WAF logs

-   Sample log entry
    
    ```
    [16/May/2023:10:36:09 +0800] HEAD "http" api.aliyun.com "/block" "_dyc=89e7639543f17ddbe77361c56b9952b9" "-" api.aliyun.com 3d30530216842045692847280e 403 "-" "curl/7.29.0" "-" 1.XX.XX.1 1.XX.XX.1 false "-" deny "custom_acl" 20000014
    ```
    
-   Fields
    
    **Field**
    
    **Example**
    
    **Description**
    
    unixtime
    
    `[16/May/2023:10:36:09 +0800]`
    
    The time when the request was initiated.
    
    method
    
    `HEAD`
    
    The request method.
    
    scheme
    
    `http`
    
    The protocol over which the request was sent.
    
    domain
    
    `api.aliyun.com`
    
    The domain name to which the request was sent.
    
    uri
    
    `/block`
    
    The requested resource.
    
    uri\_param
    
    `_dyc=89e7639543f17ddbe77361c56b9952b9`
    
    The request parameter.
    
    content\_type
    
    `-`
    
    The type of the requested content.
    
    matched\_host
    
    `api.aliyun.com`
    
    The domain name that is protected by WAF.
    
    request\_id
    
    `3d30530216842045692847280e`
    
    The request ID.
    
    return\_code
    
    `403`
    
    The HTTP status code returned.
    
    referer
    
    `-`
    
    The Referer header in the HTTP request.
    
    user\_agent
    
    `curl/7.29.0`
    
    The information about the proxy of the client.
    
    x\_forwarded\_for
    
    `-`
    
    The X-Forwarded-For (XFF) header. This field is used to identify the originating IP address of the client that is connected to the web server by using an HTTP proxy or a load balancing service.
    
    client\_ip
    
    `1.XX.XX.1`
    
    The originating IP address of the client.
    
    remote\_addr
    
    `1.XX.XX.1`
    
    The IP address of the client.
    
    final\_test
    
    `FALSE`
    
    Indicates that the monitoring mode is not matched.
    
    cookie
    
    `-`
    
    The HTTP Cookie header. This field contains information about the client.
    
    final\_action
    
    `deny`
    
    The executed protection action.
    
    -   block: The request is blocked by the basic web protection module.
        
    -   deny: The request is blocked by modules other than the basic web protection module.
        
    -   captcha: The request is verified by using a slider CAPTCHA.
        
    -   js: The request is verified by using JavaScript.
        
    -   Empty string: The request is not blocked. No protection rule is triggered, a whitelist rule or monitor rule is triggered, or the request is allowed after the client passes the slider CAPTCHA verification or JavaScript verification.
        
    
    **Note**
    
    If a request triggers multiple protection modules at the same time, the field is recorded and includes only the final action that is performed. The following actions are listed in descending order of priority: block, slider CAPTCHA verification, dynamic token-based authentication, and JavaScript verification.
    
    final\_plugin
    
    `custom_acl`
    
    The matched protection module.
    
    -   If final\_action is configured, this field specifies the protection module that corresponds to the final action against the request.
        
    -   If final\_action is left empty, this field specifies the information about the modules of all the protection rules hit by the request. If the hit rule does not belong to the whitelist or basic web protection rule module and the module name is suffixed with "-T", the request hits a monitor rule of the module.
        
    
    This field may have multiple values that are separated by commas (,). Valid values:
    
    -   whitelist: The whitelist module is matched.
        
    -   waf: The basic web protection module is matched.
        
    -   custom\_acl: The custom rule module is matched.
        
    -   ip\_blacklist: The IP blacklist module is matched.
        
    -   region\_block: The region blacklist module is matched.
        
    -   bot: The bot management module is matched.
        
    -   anti\_scan: The scan protection module is matched.
        
    
    final\_rule\_id
    
    `20000014`
    
    The matched protection rule.
    
    -   If final\_action is configured, this field specifies only the ID of the protection rule that is applied on the request.
        
    -   If final\_action is left empty, this field specifies the ID information about all protection rules hit by the request. In this case, the value of final\_rule\_id is in the following format: moduleName-protectionRuleID(-T). For a matched whitelist or basic web protection rule, this field does not contain "-T". For a matched protection rule other than a whitelist or basic web protection rule, if this field contains "-T", the rule is of the monitor type.
        
    
    This field may have multiple values that are separated by commas (,).
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **Data Center** > **Logs** > **Standard Logs**.
    
3.  On the **Log Download** tab, select a domain name and a date and click **Search**.
    
4.  Find the log file that you want to download and click **Download** in the **Actions** column.
    

## Related API operations

[DescribeDcdnDomainLog](/help/en/doc-detail/130642.html#doc-api-dcdn-DescribeDcdnDomainLog): queries the address where you can download standard logs of a specific domain.
