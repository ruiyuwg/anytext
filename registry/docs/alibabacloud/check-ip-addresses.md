After you add an origin server to Dynamic Content Delivery Network (DCDN), you can use the IP address check feature to check whether the IP address that the client accesses belongs to a POP and determine whether the acceleration takes effect.

## Scenarios

This feature is suitable for the following scenarios:

-   Scenario 1: After you configure DCDN, you can use this feature to check whether the IP address that is requested by the client belongs to a POP and whether the acceleration takes effect.
    
-   Scenario 2: If an exception occurs when a user accesses a page, you can use this feature to check whether a specific IP address belongs to a POP and troubleshoot the exception.
    
    If the IP address belongs to a POP, provide the IP address of the POP when you submit a ticket to handle the exception. If the IP address does not belong to a POP, the exception may be caused by the network connection of the Internet service provider (ISP). In this case, contact the ISP to obtain technical support.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **Tools** \> **IP Check**. Select a tab based on your business requirements.
    
    -   **IP Check**: checks whether an IP address belongs to a **DCDN** POP.
        
    -   **IPA Address Detection of IPA**: checks whether an IP address belongs to an **IPA** node.
        
3.  In the Check IP Address field, enter an IP address that you want to check and click **Check**.
    
    **Note**
    
    -   You can check IPv4 and IPv6 addresses.
        
    -   You can check only one IP address at a time on the **IP Check** tab. You can check up to 20 IP addresses at a time on the **IPA Address Detection of IPA** tab. Separate multiple IP addresses with commas (,).
        
    
4.  View the check results.
    
    -   **IP Check**: If the IP address belongs to a DCDN POP, the value of the **Whether belongs to an Alibaba Cloud DCDN node.** parameter is Yes, and the values of the **Location** and **ISP** parameters are displayed. If the IP address does not belong to a DCDN POP, the **No records found** message is displayed.![IP检测02](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5404542361/p305115.png)
        
    -   **IPA IP**: If the IP address belongs to an IPA node, the value of the IPA IP Address parameter is yes. If the IP address does not belong to an IPA node, the value of the IPA IP Address parameter is no.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8715843071/p738406.png)
        
    

## Related API operations

[DescribeDcdnIpInfo](/help/en/doc-detail/185022.html#doc-api-dcdn-DescribeDcdnIpInfo)
