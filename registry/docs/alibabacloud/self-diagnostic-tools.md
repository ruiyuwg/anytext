If you encounter issues such as page loading failures or page errors when you use Alibaba Cloud CDN, you can use the self-service diagnostics tool to diagnose the issues. The diagnostics tool provides diagnosis results. You can modify configurations of Alibaba Cloud CDN or submit a ticket based on the results.

## Scenarios

The self-service diagnostics tool can be used in the following scenarios:

-   **Domain name access failures:** If a domain name that you added to Alibaba Cloud CDN cannot be accessed, you can use the self-service diagnostics tool to troubleshoot the issue.
    
-   **Slow responses:** If a domain name that you added to Alibaba Cloud CDN encounters occasional or persistent slow response issues, you can use the self-service diagnostics tool to troubleshoot the issues.
    
-   **Other scenarios:** You can use the self-service diagnostics tool to monitor the health status and acceleration links of Alibaba Cloud CDN.
    

## **Procedure**

1.  Log on to the [Alibaba Cloud CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Tools**.
    
3.  In the **Self-service Diagnostics Tool** section, click **Try Now**.
    
4.  On the **Self-service Diagnostics Tool** page, click **Create Diagnostic Task**.
    
5.  In the **Create Diagnostic Task** dialog box, configure the **Diagnostic URL** parameter and click **Verify**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3792550071/p728811.png)
    
    **Note**
    
    -   You can diagnose only domain names in the current account.
        
    -   The value of the Diagnostic URL parameter must be a URL and cannot be a domain name. Otherwise, an error is reported.
        
    -   If the domain name in the URL is not added to Alibaba Cloud CDN, add the domain name. For more information, see [Add a domain name](/help/en/cdn/add-a-domain-name).
        
    -   If the domain name is not in the **Enabled** state, the acceleration and diagnosis fail.
        
    -   If the domain name is added to a sandbox or blacklist, the acceleration performance may be affected.
        
    -   If no CNAME record is configured or an invalid CNAME record is configured for the domain name, access to the domain name is not accelerated by Alibaba Cloud CDN. For more information, see [Add a CNAME record for a domain name](/help/en/cdn/add-a-cname-record-for-a-domain-name).
        
    
6.  Use the diagnostics link generated in **Diagnostics** to view the diagnostics information about the client. The link is valid for 2 hours. Each visit to the diagnostics link generates a diagnostics report. You can click the link up to 10 times. To view the complete diagnostics information about Alibaba Cloud CDN, go back to the **Self-service Diagnostics Tool** page and click **View Report** in the **Actions** column.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3792550071/p728842.png)
    
    **Note**
    
    The diagnostics link includes client information, such as the request duration, cache duration, local IP address, and Internet service provider (ISP). The diagnostics report includes additional information, such as the diagnostics status, scheduling status, abnormal items, domain name status, response duration, and response speed.
