This topic describes how to enable and use EdgeRoutine in the Dynamic Content Delivery Network (DCDN) console.

**Important**

DCDN will phase out EdgeRoutine for new users from May 1, 2025, 00:00 (UTC+8). Current users won't be affected.

We recommend you [upgrade to ESA](/help/en/edge-security-acceleration/esa/product-overview/how-to-upgrade-from-cdn-and-dcdn-to-esa/) to use [Functions and Pages](/help/en/edge-security-acceleration/esa/user-guide/what-is-functions-and-pages/).

## Workflow

To use EdgeRoutine, you need to activate [DCDN](https://dcdn.console.alibabacloud.com/overview). The following figure shows how a routine is created and implemented in EdgeRoutine.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8341870771/CAEQGBiBgIC23qy_7hgiIDYyN2JlOWJlNzViNjRlNTk5OTQ0MDgzN2UzNDVhNWFl4022551_20230927110431.069.svg)

**Note**

EdgeRoutine is in beta release and available only to selected users. If the daily peak bandwidth of your DCDN service exceeds 500 Mbit/s, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to enable EdgeRoutine. After your request is approved, **EdgeRoutine** is displayed in the left-side navigation pane of the DCDN console.

## Enable EdgeRoutine

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **EdgeRoutine**.
    
3.  Choose **Enable ER** > **Activate Now** to enable EdgeRoutine.
    

## Create and configure a routine

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **EdgeRoutine**.
    
3.  The first time you use EdgeRoutine, create a subdomain.
    
    1.  On the **EdgeRoutine** page, click **Create Subdomain**.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2340789961/p726280.png)
        
    2.  In the **Create Subdomain** dialog box, specify a subdomain name.
        
        **Note**
        
        -   A subdomain is a repository in which all routines that you create reside. Once a subdomain is created, you cannot change the name of the subdomain.
            
        -   A subdomain is a unique identifier for each user and a part of the routine ID.
            
        -   You cannot change the name of a subdomain once it is created. The name can contain lowercase letters, digits, and hyphens (-). The name must be at least 2 characters in length. Example: subdomain-name.
            
        
    3.  Click **OK**.
        
4.  On the **EdgeRoutine** page, click **Create Routine**. The following table describes the parameters.
    
    ![创建程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2097447961/p295073.png)
    
    **Parameter**
    
    **Description**
    
    **Routine Name**
    
    Enter a routine name.
    
    **Note**
    
    **The name can contain lowercase letters, digits, and hyphens (-). The name cannot be less than 2 characters in length. Example: routine-name. The routine name cannot be modified after it is created.**
    
    **Description**
    
    Optional. Enter a description for the routine.
    
    **Specification**
    
    Select the maximum CPU time slice for a single execution of a routine. The I/O time to wait for network responses is not included. The fees vary based on routine specifications. For more information, see [Billing rules](/help/en/edge-security-acceleration/dcdn/user-guide/billing-rules#concept-2084256).
    
    -   **CPU Time Slice for Individual Requests: 5 ms**
        
    -   **CPU Time Slice for Individual Requests: 50 ms** (default)
        
    -   **CPU Time Slice for Individual Requests: 100 ms**
        
    
5.  After you create the routine, click **Details** in the **Actions** column to configure the routine in different environments. Routine settings are independent across environments. You can modify the routine settings in the production environment, test environment, and canary release environment. For more information, see [Canary environment (optional)](/help/en/edge-security-acceleration/dcdn/user-guide/canary-release-environment#concept-2089535). The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Routine Specifications**
    
    The maximum CPU time slice for a single execution of a routine. The I/O time to wait for network responses is not included. Maximum Real Time: 120s. Memory: 128 MB.
    
    -   **CPU Time Slice for Individual Requests: 5 ms**
        
    -   **CPU Time Slice for Individual Requests: 50 ms** (default)
        
    -   **CPU Time Slice for Individual Requests: 100 ms**
        
    
    **Domain Name Whitelist**
    
    -   Domain names that can be associated with the routine.
        
    -   Wildcard domain names are supported.
        
    -   By default, the domain name whitelist is empty. This indicates that any domain name can be associated with the routine.
        
    
    **Note**
    
    For example, if you set the Domain Name Whitelist parameter to example.com, only requests from example.com can trigger the routine.
    

## Associate domain names with the routine

A routine requires a domain name to provide services to the client. The domain name can be a CDN-accelerated domain name or a DCDN-accelerated domain name. After you create and configure a routine, you need to associate DCDN-accelerated domain names with the routine. Then the routine is triggered by requests from domain names that are associated with the routine. Log on to the console of the service to which your domain name is added.

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation pane, click **EdgeRoutine**.
    
5.  On the **EdgeRoutine** page, turn on the switch and configure the **Routine ID** parameter. The following table describes the parameters.
    
    ![边缘程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8064258361/p295091.png)
    
    **Parameter**
    
    **Description**
    
    **Routine ID**
    
    The routine ID is a unique identifier for each routine. Format: routineName.subdomain.
    
    **Note**
    
    In the left-side navigation pane of the DCDN console, click **EdgeRoutine**. You can view the ID of the routine on the **Function** page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1590444071/p726333.png)
    
    **Trigger Mode**
    
    Select a mode in which requests that try to access the DCDN\-accelerated domain name trigger the routine. The following modes are supported:
    
    -   **Redirect**: Requests that try to access the DCDN\-accelerated domain name are processed by the routine. You can write the code in the routine to process requests. The routine can return the requested content to clients, read the cache by calling the Cache API, or redirect requests to the origin server by sending fetch requests.
        
    -   **Bypass**: Requests that try to access the DCDN\-accelerated domain name trigger the routine. Then, settings that are configured in the DCDN console are executed, and requests are redirected to the origin server. This trigger mode is suitable for scenarios such as authentication or log tracking.
        
    
    **Redirect to Origin if Error Occurs**
    
    -   **Yes**: When the routine throws an exception, the point of presence (POP) forwards the request to the origin server of the DCDN\-accelerated domain name by using the URL that is requested by the client. The origin server processes the request. This ensures business continuity and disaster recovery.
        
    -   **No**: When the routine throws an exception, an HTTP status code 5xx is returned to the client.
        
        **Note**
        
        -   The first time you use a routine, we recommend that you set the Redirect to Origin if Error Occurs parameter to No. You can use the HTTP 5xx status code that is returned to troubleshoot issues.
            
        -   If an exception occurs, you are charged for the number of back-to-origin requests. The percentage of abnormal back-to-origin requests is very low and can be ignored.
            
        
    

## Develop and debug the routine

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **EdgeRoutine**.
    
3.  Find the routine that you created and click **Details** in the Actions column.
    
4.  On the displayed routine page, click the **Code** tab to develop a routine by using JavaScript. In the sample code, the HelloWorld script is used.![代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8064258361/p298396.png)
    
5.  After the coding is complete, click **Release to Staging Environment**. You can associate an IP address of the test environment that is provided on the page with the machine that you use to debug the routine.
    
    **Note**
    
    You can add the IP address of the test environment and the domain name that is associated with the routine to the hosts file of your on-premises machine. For example, add 10.10.10.10 and example.com to the hosts file of your on-premises machine. Replace the IP address with the IP address that is provided in the preceding figure, and replace the domain name with the DCDN\-accelerated domain name that is associated with the routine.
    

## Save a version

After the debugging is complete, click **Save as Version** on the **Code** tab.![测试](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9062783861/p346894.png)

## Publish the version

1.  On the displayed routine page, click the **Versions** tab, find the version that you want to publish, and then click **Release** in the **Actions** column.
    
2.  Select **Staging Environment**, **Production Environment**, or **Canary Environment** to which you want to publish the version.
    
    **Note**
    
    **We recommend that you release a routine to the canary environments before you release it to the production environments.**
    
3.  Click OK to deploy the code to the production environment of all POPs.
    

## Iteration

In the preceding sections, HelloWorld is used to describe how to configure and publish a routine.

-   For information about how to iterate a routine, see the "Develop and debug the routine", "Save a version", and "Publish the version" sections.
    
-   If you want to adjust configurations, such as the routine specifications or domain name whitelist, see the "Create and configure a routine" section.
    
-   If you want to disable EdgeRoutine for a DCDN\-accelerated domain name, delete the routine configurations that you configured by following the steps in the "Associate domain names with the routine" section.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8341870771/CAEQGBiBgIC.36y_7hgiIDllZmIzZTMwMWI2YjQ3NTY5OTBjZDQyZTFiZGY4NDQ24022551_20230927110953.076.svg)

## **FAQ**

-   [How do I select a suitable specification for my routine?](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1#section-4b3-0gm-gpa)
    
-   [How do I ensure business continuity if exceptions occur in my ER?](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1#section-h0b-jxl-g1s)
    
-   [How do I cancel a canary release?](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1#section-969-0g1-0l6)
    
-   [How do I delete a canary release environment?](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1#section-60y-twq-fkb)
    
-   [How do I select a region for canary release?](/help/en/edge-security-acceleration/dcdn/user-guide/faq-1#section-a3l-8hn-9ez)
    
-   [Common ER errors](/help/en/edge-security-acceleration/dcdn/user-guide/common-er-errors)
