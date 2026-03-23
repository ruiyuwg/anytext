After you add a website to Edge Security Acceleration (ESA), you can use the IP geolocation feature to check whether the actual IP address that clients request to access belongs to an ESA point of presence (POP), therefore verifies whether acceleration takes effect.

## **Scenarios**

The IP geolocation feature can be used in the following scenarios:

-   Scenario 1: After you set up ESA for your website, you can use this feature to check whether the actual IP address that clients request to access belongs to an ESA POP. This helps you determine whether ESA is working as expected.
    
-   Scenario 2: If an exception occurs when you visit a web page, you can use this feature to check whether the specified IP address is the IP address of an ESA POP to determine the cause of the exception.
    

## **Procedure**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list), and in the left-side navigation pane, select **Tools** > **IP Geolocation**.
    
2.  On the **IP Geolocation** page, enter the IP address you want to check in the text box, and click **Check**.
    
    **Note**
    
    Both IPv4 and IPv6 addresses are supported. You can check up to 20 IP addresses at a time, separated by commas (`,`).
    
3.  In the **Check Result** section, verify if it's an ESA POP.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9103192471/p924948.png)
    
    **Note**
    
    -   The tool only checks if the IP address accessed by the client belongs to ESA POP, not the IP address that accesses your server.
        
    -   If the IP address is associated with an ESA POP, include the ESA POP IP address in your ticket to help identify issues.
        
    -   If the IP address is not associated with an ESA POP, the issue may result from the Internet service provider (ISP) network. In this case, seek help from the relevant ISP.
