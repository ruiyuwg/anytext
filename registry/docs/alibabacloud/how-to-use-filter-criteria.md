This topic explains how to apply filters in the analytics dashboards and introduces the relevant parameters.

## **Filters**

ESA analytics features support three types of filters: filtering by **Filter**, by available dimension, and by time range,

### **By Filter**

You can filter analytics results by setting up conditions using available dimensions and operators. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8199191471/p899285.png) to apply up to 10 conditions. For more information about specific filter parameters, see [supported fields and operators](#2ce31fa7a5hps).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7500236371/p899269.png)

### **By available dimension**

Click an available dimension, such as Host or Client IP, to view all items within that category.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9065182471/p932975.png)

### **Time range (required)**

Select a preset period or **Custom Time Range**. By default, traffic data from the past 24 hours is displayed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7500236371/p899228.png)

## **Filter or exclude an item in a dimension**

To learn more about a specifi item or exclude it from your report, you can:

-   Click **Filter** to display more details about the item.
    
-   Click **Exclude** to remove the item from the report.
    

Take **Client IP** as an example.

-   You can filter out a specific client IP by clicking **Filter** in the top data panel:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4856027371/p901054.png)
    
-   You can also do it on the Overview panel:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9065182471/p901044.png)
    

## **Supported fields and operators**

### **Filter fields**

Filter

Description

Example

Version

The version number that is used when version management is enabled for the current website.

You can select a value from the drop-down list:

-   0
    
-   1
    
-   2
    

Cache Status

The cache status of the request.

You can select a value from the drop-down list:

-   HIT
    
-   MISS
    
-   EXPRIED
    

For more information, see [Default cache behavior](/help/en/edge-security-acceleration/esa/user-guide/default-cache-rule#05bfbc10cergp).

Client ISP

The Internet service provider of the client.

You can select a value from the drop-down list:

-   China Unicom
    
-   China Telecom
    
-   China Mobile
    

Client ASN

The autonomous system number of the client.

For example, the client's ASN is `AS12345`, indicating that the client is connected to an autonomous system whose number is `12345`.

Country/Region

The country or region to which the client IP belongs.

You can select a value from the drop-down list:

-   Chinese Mainland
    
-   Canada
    
-   France
    

Device Type

The type of the device requested by the client, which is parsed from the User-Agent header in the HTTP request.

You can select a value from the drop-down list:

-   Desktop
    
-   Mobile
    
-   Tablet
    

IP Version

The protocol version of the client IP address.

You can select a value from the drop-down list:

-   IPv4
    
-   IPv6
    

Client IP

View only the request data from the specified client IP address.

You can enter multiple entries and separate them with commas (`,`). Example: `192.168.1.X`, `192.168.2.X`.

Referer

The Referer in the request.

You can enter multiple entries and separate them with commas (`,`). Example: `*.developer.aliyundoc.com`.

Host

The hostname of a web server.

You can enter multiple entries and separate them with commas (`,`). Example: `www.example.com`.

HTTP Method

The request type between the client and the server.

You can select a value from the drop-down list:

-   GET
    
-   POST
    
-   PUT
    

HTTP Version

The version number of the HTTP protocol.

You can select a value from the drop-down list:

-   HTTP / 1.0
    
-   HTTP / 1.1
    
-   HTTP / 2.0
    

Path

The part of the URL that indicates the resource location.

You can enter multiple entries and separate them with commas (`,`). For example, in the URL `https://www.example.com/path/to/resource.html`, the path is `/path/to/resource.html`.

Query String

The part of the URL that is used to pass parameters.

You can specify multiple strings and separate them with commas (`,`). For example, in the URL `https://www.example.com/search?query=apple&category=fruit`, the query string is `query=apple&category=fruit`.

Content Type

The HTTP header field, which specifies the format and type of the transmitted data.

You can select a value from the drop-down list:

-   application / atom + xml
    
-   application / epub + zip
    
-   application / gzip
    

Edge Status Code

The status code returned by the ESA POP to the client.

You can select a value from the drop-down list:

-   100 Continue
    
-   204 No Content
    
-   404 Not found
    

Origin Status Code

The HTTP response status code returned by the server.

You can select a value from the drop-down list:

-   100 Continue
    
-   204 No Content
    
-   404 Not found
    

Browser Type

The type of the browser used by the client request.

You can select a value from the drop-down list:

-   Chrome
    
-   IE
    
-   GoogleBot
    

OS Type

The operating system (OS) of the device that runs the client.

You can select a value from the drop-down list:

-   Windows
    
-   Android
    
-   iOS
    

User Agent

The value of the User-Agent header in the client request.

You can enter multiple entries and separate them with commas (`,`). Example: `*curl*|*IE*|*chrome*|*firefox*`.

TLS Version

The version of the TLS protocol used by the client request.

You can select a value from the drop-down list:

-   TLSv1
    
-   TLSv1.1
    
-   TLSv1.1
    

X-Forwarded-For

The X-Forwarded-For header in the request.

Example: `192.168.1.X`, `192.168.2.X`.

### **Operators**

**Operator**

**Description**

equals

Queries the data whose value is equal to the specified value.

does not equal

Queries the data whose value is not equal to the specified value.
