The cache analytics dashboard helps you identify resources that are not cached, have expired, or are not eligible for caching. This lets you optimize website performance, improve the user experience, and reduce traffic to the origin server.

## **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). Then, in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Cache Analytics**.
    

## **Dashboard details**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0266394571/p962424.png)

### **1\. Filter data**

You can view specific types of data by creating filters or setting a time range.

-   You can filter by: **Cache Status**, **Country/Region**, **Host**, **HTTP Method**, **Path**, **Query String**, **Content Type**, **Edge Status Code**, **Served By**, **Device Type**, and **Version** (Enterprise Edition only).
    
-   Supported time ranges: Last 30 minutes, 6 hours, 12 hours, 24 hours, 72 hours, 7 days, 14 days, 21 days, 30 days, and a custom time range.
    

### **2\. Data metrics**

-   Cache performance analysis
    
    -   **Response Traffic**: The total traffic from requests that ESA received from clients.
        
    -   **Requests**: The total number of requests received from clients.
        
-   Cache reserve (Enterprise plan only)
    
    -   **Data Transfer**: The response traffic that flows through cache reserve points of presence (POPs).
        

**Note**

The rate displayed for each metric indicates the change rate based on the previous equivalent period. If no data exists in the previous period of time, the change rate is not displayed.

For example, if you select the **Last 30 Days** time range and the number of requests increases by 2.03%, it means that the number of requests ESA received this month is 2.03% higher than last month.

### **3\. Data overview and trend**

Trend graphs show how data metrics change over time for each dimension. For all dimensions except "All", the report shows only the top 5 data points and their total.

### **4\. Cache status**

This section shows data for each cache status. You can click a status to filter by it or exclude it from the results.

**Status**

**Description**

**Triggering scenarios**

MISS

Cache miss. The resource must be retrieved from the origin server.

-   A resource is requested for the first time.
    
-   No cache rule is configured, or the request does not match the current cache rules.
    

HIT

Cache hit.

-   The requested static resource is cached on an ESA node and has not expired.
    
-   The request matches the current cache rules.
    

DYNAMIC

A dynamic resource was retrieved from the origin server.

-   The requested content is a dynamic resource, such as user session information or personalized data.
    

EXPIRED

The resource exists in the cache but has expired. It must be retrieved from the origin server. The origin server responds with a status code of `200` or `206`.

-   The resource's cache time has passed and it needs revalidation or a refresh.
    
-   The cache policy does not have a sufficient Time to Live (TTL).
    

BYPASS

The request bypasses the ESA cache and directly accesses the origin server.

-   ESA is not set to prioritize the origin server's cache policy, and the cache time in ESA is set to 0.
    
-   ESA is set to prioritize the origin server's cache policy, and the origin server's response for the `Cache-Control` header is one of the following: `no-cache`, `no-store`, or `max-age=0`.
    

STALE

An expired (stale) resource from the cache is served temporarily while revalidation is scheduled.

-   ESA is set to prioritize the origin server's cache policy, and the origin response includes `Cache-Control:stale-while-revalidate=<seconds>`. Within the specified time, ESA serves the stale cache to the client while revalidating the resource with the origin server.
    
-   ESA is set to prioritize the origin server's cache policy, and the origin response includes `Cache-Control:stale-if-error=<seconds>`. Within the specified time, if ESA cannot access the origin server to retrieve the updated resource (for example, the origin server times out), it serves the stale cache to the client.
    
-   The [Serve Expired Cache](/help/en/edge-security-acceleration/esa/user-guide/configure-response-expiration-cache-1) feature is enabled in ESA. If ESA cannot access the origin server to retrieve an updated resource (for example, the origin server times out), it serves the stale cache to the client.
    

REVALIDATED

The cached resource has expired, but revalidation confirms that the resource has not been modified. The cached content is served to the client.

-   The resource is not updated. To reduce back-to-origin data transfer, ESA sends a back-to-origin request with an `If-Modified-Since` or `If-None-Match` header to revalidate the resource (the origin server responds with a status code of `304`).
    

NONE/UNKNOWN

The cache status cannot be determined.

-   Caching is not enabled or is configured incorrectly.
    
-   The request does not match any cache rule.
    

### **5\. Top data**

-   Supported data dimensions: **Content Type**, **Path**, **Host**, **Device Type**, **Country/Region**, **Edge Status Code**, and **Version** (Enterprise Edition only).
    
-   By default, the top 5 data points are displayed. Click **More** to view all data.
    

### **6\. Print**

The page has a print-friendly layout. You can print it directly from your browser to generate a report.

### **7\. Download**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0266394571/p962345.png) icon in the upper-right corner of the Data Overview and Top Data sections to save the data to your local machine.

## Availability

**Feature**

**Entrance**

**Pro**

**Premium**

**Enterprise**

**Response traffic**

Not supported

Supported

Supported

Supported

**Number of requests**

Not supported

Supported

Supported

Supported

**Cache reserve**

Not supported

Not supported

Not supported

Supported
