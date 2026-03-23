Edge Security Acceleration (ESA) provides a standard log service that packages logs hourly. You can download site access logs for any time period within the last 31 days and save them locally. These logs help you optimize the acceleration policy for your site, monitor and diagnose potential issues, and understand user access behavior.

## **Notes**

-   Standard logs are collected from all ESA points of presence (POPs) on the network. The data has a latency of 6 to 8 hours. Each log record generated in the list is a complete log package for the specified time period. You can click Download to view the log package.
    
-   Standard logs support two log types: **Access Log** and **TCP/UDP Proxy Log**. By default, these logs are packaged hourly. If your site receives no requests within an hour, no log package is generated for that hour.
    
-   Log packages are compressed into the `.gz` format using gzip. The file naming convention is `site_name_year_month_day_start_time_end_time.xx.gz`. For example, `aliyundoc.com_2024_01_01_000000_010000.xx.gz`.
    

## **Download standard logs**

1.  In the ESA console, click [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the left navigation pane, choose **Analytics and Logs** > **Standard Logs**.
    
3.  On the **Standard Logs** page, select a time range and log type, and then click **Search**.
    
4.  Find the log record that you want to download and click **Download** in the Actions column. After the download is complete, decompress the file to view the logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6304830471/p918187.png)
    
    **Note**
    
    You can download logs for the past 31 days, including the current day, from the console. To download logs that are older than 31 days, you can [submit a ticket](https://smartservice.console.alibabacloud.com/service/list) to retrieve logs from the past 180 days.
    

## **Standard log fields**

### **Access Log**

**Field name**

**Data type**

**Description**

ClientASN

string

The [autonomous system number (ASN)](/help/en/edge-security-acceleration/esa/support/what-is-asn) information parsed from the client IP address.

ClientIP

string

The IP address of the client that established a connection with the ESA POP.

ClientRequestID

string

The unique identifier of the client request.

ClientRequestScheme

string

The `Scheme` information of the client request.

ClientISP

string

The carrier information parsed from the client IP address.

ClientCountryCode

string

The ISO-3166 Alpha-2 code parsed from the client IP address.

ClientRegionCode

string

The ISO-3166-2 code parsed from the client IP address.

ClientRequestBytes

int

The size of the client request, in bytes.

ClientRequestHeaderRange

string

The value of the `Range` field in the client request header. For example, bytes=0-100.

ClientRequestHost

string

The `Host` information of the client request.

ClientRequestMethod

string

The `HTTP Method` information of the client request.

ClientRequestProtocol

string

The protocol information of the client request.

ClientRequestReferer

string

The `Referer` information of the client request.

ClientRequestURI

string

The `URI` information of the client request.

ClientRequestUserAgent

string

The `User-Agent` information of the client request.

ClientSrcPort

int

The port used by the client to establish a connection with the ESA POP.

EdgeCacheStatus

string

The [cache status](/help/en/edge-security-acceleration/esa/user-guide/default-cache-rule#f778f767f169b) of the client request.

EdgeResponseBodyBytes

int

The size of the response body that the ESA POP returns to the client, in bytes.

EdgeResponseBytes

int

The size of the response that the ESA POP returns to the client, in bytes.

EdgeResponseStatusCode

int

The status code that the ESA POP returns to the client.

EdgeServerID

string

The unique identifier of the ESA server that the client accessed.

EdgeServerIP

string

The IP address of the ESA POP.

EdgeStartTimestamp

Timestamp ISO8601

The timestamp when the ESA POP received the client request. For example, 2024-01-01T00:00:00+08:00.

EdgeTimeToFirstByteMs

int

The time from when the ESA POP receives a client request to when the ESA POP returns the first byte of the response to the client, in ms.

SiteName

string

The site name.

### **TCP/UDP Proxy Log**

**Field name**

**Data type**

**Description**

BlockRuleID

string

The ID of the rule that was triggered for interception and protection. If this field is empty, the request was not intercepted.

ClientASN

string

The [autonomous system number (ASN)](https://www.iana.org/assignments/as-numbers/as-numbers.xhtml) information parsed from the client IP address.

ClientBytes

int

The number of data bytes received from the client, in bytes.

ClientCountryCode

string

The ISO-3166 Alpha-2 code parsed from the client IP address.

ClientIP

string

The IP address of the client that established a connection with the ESA POP.

ClientISP

string

The carrier information parsed from the client IP address.

ClientMatchedIpFirewall

string

The type of the matched IP access rule.

ClientPort

int

The client port.

ClientProto

string

The data transmission protocol of the client.

ConnectTimeStamp

Timestamp ISO8601

The timestamp when the client established a connection with the ESA POP. For example, 2024-01-01T00:00:00+08:00.

DisconnetTimeStamp

Timestamp ISO8601

The timestamp when the client disconnected from the ESA POP. For example, 2024-01-02T00:00:00+08:00.

DomainName

string

The domain name of the application instance.

EdgeServerIP

string

The IP address of the ESA POP.

IpFirewall

bool

Indicates whether the IP access rule is enabled.

LogTimeStamp

Timestamp ISO8601

The timestamp when the log was generated. For example, 2024-01-01T00:00:00+08:00.

OriginBytes

int

The number of data bytes received from the origin server, in bytes.

OriginIP

string

The IP address of the origin server.

OriginPort

int

The port of the origin server.

OriginProto

string

The data transmission protocol of the origin server.

ProxyProtocol

string

The version of the proxy protocol. Values include off, v1, and v2.

SessionID

string

The globally unique stream identifier.

SiteName

string

The site name.

Status

int

The status code at the end of the session.
