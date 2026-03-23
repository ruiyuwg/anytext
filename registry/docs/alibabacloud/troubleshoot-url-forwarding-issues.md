This topic describes how to troubleshoot URL forwarding issues.

## Term

URL forwarding is classified into implicit URL forwarding and explicit URL forwarding. URL forwarding is used to redirect a request from a domain name to an existing website. Implicit URL forwarding is implemented based on iframes. Explicit URL forwarding is implemented based on permanent 301 redirects or temporary 302 redirects.

## 301 and 302

301 Moved Permanently: indicates that the requested web page is permanently moved to a new URL.

302 Found: indicates that the requested web page is temporarily moved to another URL.

Common points: Both the 301 and 302 status codes indicate redirection. When the browser receives the 301 or 302 status code from the server, the browser is redirected to a new URL. The URL can be obtained from the Location header in a response. Then, visitors may find that Address A that they enter in the address bar is changed to Address B.

Differences: 301 indicates that the resources of Address A are permanently removed and can no longer be accessed. Search engines change Address A to Address B when the search engines crawl new content. 302 indicates that the resources of Address A are still accessible. The redirection from Address A to Address B is only temporary. Search engines crawl new content and retain Address A.

## Usage notes

Before you add a URL forwarding record, **you must obtain an Internet Content Provider (ICP) filing for the domain name used before URL forwarding.**

-   The record value in a URL forwarding record cannot be an IP address.
    
-   URL forwarding does not support wildcard domain names.
    
-   Chinese domain names cannot be used as destination domain names.
    
-   Domain names used before URL forwarding support HTTP but do not support HTTPS. Destination domain names support both HTTP and HTTPS.
    
-   URL forwarding is a special feature of Alibaba Cloud DNS. Alibaba Cloud DNS does not provide the attack defense service for this feature. URL forwarding cannot be used if a blackhole attack occurs. In such cases, you must change the host records that you want to forward to the A or CNAME type.
    

## How a URL forwarding record works

After you add a URL forwarding record for a domain name, Alibaba Cloud DNS adds an A record in which your domain name is mapped to the address of the URL forwarding server. This way, the URL forwarding server can help you forward requests. When a visitor accesses the domain name used before URL forwarding, the visitor actually initiates a request to the URL forwarding server that Alibaba Cloud DNS provides. If implicit URL forwarding is used, Alibaba Cloud DNS uses a service on the URL forwarding server to forward requests to the destination URL and returns the page with iframes to the visitor. If explicit URL forwarding is used, the request is redirected to the web page after URL forwarding based on the 301 or 302 status code.

## FAQ

**1\. Why is the resolution result obtained running the dig command different from the record value specified in the Alibaba Cloud DNS console after I add a URL forwarding record?**

After you add a URL forwarding record for a domain name, Alibaba Cloud DNS adds an A record in which your domain name is mapped to the address of the URL forwarding server that Alibaba Cloud DNS provides. In this case, after you run the dig command, the A record and the IP address 203.107.45.167 or 203.107.44.133 are displayed in the output. However, the record value that you specify in the console is a URL. The difference is a common occurrence.

**2\. After I add a URL forwarding record for a domain name, the HTTP ERROR 502 error is reported when I access a domain name. Why does this error occur, and how can I fix it?**

-   This error may occur after you fail to add a URL forwarding record because you do not obtain an ICP filing for the domain name. To fix the error in this case, check whether an ICP filing is obtained for the domain name used before URL forwarding and that used after URL forwarding. If no ICP filing is obtained, contact your service provider and obtain one.
    
-   After you add a URL forwarding record, the 502 error code may be returned due to an invalid ICP filing. To fix the error, contact your service provider.
    

**3\. After I add an implicit URL forwarding record, a blank page appears when I access the domain name. How can I fix this error?**

A blank page appears because the x-frame-options header is set for the website that is accessed after URL forwarding. You can find the error cause based on the following error message in a browser, such as Chrome. The x-frame-options header does not allow the browser to load the page in an iframe. To fix this error, contact the technical engineers of the website to remove the x-frame-options header.![3.1图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6218421071/p448873.png)

**4\. After I add an implicit URL forwarding record, the destination web page can be accessed, but the destination address is displayed in the address bar. How can I fix this error?**

Check the JavaScript code of the web page that is accessed after URL forwarding. If the JavaScript code contains the settings marked in the following figure, remove the settings from the code.

![4图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3444429271/p448874.png)

**5\. After I add a URL forwarding record and refresh the accessed web page, the page whose address is not the destination address appears. Why does this error occur, and how can I fix it?**

This error may occur when a redirection is configured in the JavaScript code for the website accessed after URL forwarding. To fix this error, contact the technical engineers of the website.

**6\. After I add a URL forwarding record for a domain name in Alibaba Cloud DNS and run the dig command, the A record for the domain name and the IP address 203.107.45.167 or 203.107.44.133 cannot be displayed in the output. How can I fix this error?** Submit a ticket in Alibaba Cloud DNS to ask for technical support.

**7\. After I add a URL forwarding record for a domain name, the ERR\_EMPTY\_RESPONSE error is reported when I access the domain name. Why does this error occur, and how can I fix it?**

If the domain name encounters an HTTP flood attack, the URL forwarding server stops serving the domain name because the queries per second (QPS) is high. In this case, this error occurs. To fix this error, we recommend that you use other methods to forward requests for the domain name.

**8\. After I add a URL forwarding record, an error message appears. The error message indicates that the connection to example.com is rejected. Why does this error occur, and how can I fix it?**

**Symptom: No interception information is displayed on the Console tab of the browser debugging page.**

**Cause: The x-frame-options header is set to SAMEORIGIN. On the Network tab of the browser debugging page, check whether the x-frame-options header in the response to the last successful request is set to SAMEORIGIN.**

**Solution: Check the security policy settings of the website or add an explicit URL forwarding record.**
