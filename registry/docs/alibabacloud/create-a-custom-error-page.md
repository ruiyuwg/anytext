After you create a custom error page, if the requested content does not exist or an error occurs, points of presence (POPs) return the custom error page instead of the default error page. This can improve user experience by providing users with user-friendly and functional error messages.

## Background information

Dynamic Content Delivery Network (DCDN) can redirect requests to custom error pages if errors occur.

If a client requests a web service by using a browser and the requested URL does not exist, the website server returns the default 404 Not Found page. If you want to use a user-friendly error page, you can create a custom error page and specify the complete URL of the page. Requests are redirected to the specified URL based on the HTTP status code in the responses.

**Note**

If the delivery of the custom error page is accelerated by DCDN, you are charged based on the billing rules of DCDN.

## **Supported status codes**

You can create custom error pages for the following HTTP status codes: 400, 403, 404, 405, 414, 416, 500, 501, 502, 503, and 504.

**Status code**

**Description**

400

An error occurs when you access a page.

403

The server rejects the request.

404

A web page that does not exist on the server is requested.

405

The method that is specified in the request is not allowed.

414

The request URL is excessively long for the server to process.

416

The server cannot serve the requested ranges.

500

The server encounters an error and cannot complete the request.

501

The server does not support a feature that is required to complete the request.

502

The server that acts as a gateway or proxy receives an invalid response from the upstream server.

503

The server is not available.

504

The server that acts as a gateway or proxy does not receive a response from the upstream server within the timeout period.

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name whose acceleration region you want to change and click **Configure**.
4.  In the left-side navigation tree of the domain name, click **Caching**.
    
5.  Click the **Custom Page** tab.
    
6.  Click **Add**. In the dialog box that appears, configure the error code and URL of the custom page.
    
    ![自定义页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3605417861/p67881.png)
    
7.  Click **OK**.
    
    After a custom page is created, you can click **Modify** or **Delete** in the Actions column to modify or delete the custom page.
    

## Sample configuration

If you have saved the custom 404 page `error404.html` in the root directory of the origin server and users can access the 404 page by using the accelerated domain name `example.aliyundoc.com`, you can use the following configuration to apply the custom error page for HTTP status code 404.

-   Error Code: 404
    
-   Link: the URL of the custom error page, such as, `http://example.aliyundoc.com/error404.html`.
    
-   Expected result: When a 404 error occurs, requests are redirected to the custom error page `http://example.aliyundoc.com/error404.html`.
