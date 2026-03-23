Dynamic Content Delivery Network (DCDN) allows you to configure a User-Agent blacklist or whitelist to identify and filter requests. This way, you can restrict access to DCDN resources and improve service security. This topic describes how to configure a User-Agent blacklist or whitelist.

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name whose acceleration region you want to change and click **Configure**.
4.  In the left-side navigation tree of the domain name, click **Access Control**.
    
5.  Click the **User-Agent Blacklist/Whitelist** tab.
    
6.  Turn on **User-Agent Blacklist/Whitelist** and configure a **Blacklist** or **Whitelist** as prompted.
    
    ![UA规则设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0888226061/p63003.png)
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    The following types of lists are supported:
    
    -   **Blacklist**
        
        Requests whose User-Agent header matches a value in the blacklist are rejected, with HTTP status code 403 returned.
        
    -   **Whitelist**
        
        Only requests whose User-Agent header is in the whitelist are allowed to access resources on DCDN points of presence (POPs).
        
    
    **Rules**
    
    When you specify User-Agent fields, separate multiple fields with vertical bars (|). The wildcard character (\*) is supported. Example: `*curl*|*IE*|*chrome*|*firefox*`.
    
    **Note**
    
    -   If you want to perform access control for requests whose User-Agent headers are empty, you can use the caret and dollar sign (`^$`) to specify that the value of the User-Agent header is empty.
        
        -   If `^$` is included in the rules of a whitelist, requests whose User-Agent header is empty are allowed.
            
        -   If `^$` is included in the rules of a blacklist, which indicates that the request whose User-Agent header is empty, the request is rejected.
            
    -   User-Agent blacklist and whitelist do not support access control for requests that do not contain a User-Agent header. You can use EdgeScript or [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to enable the feature. For more information, see [EdgeScript overview](/help/en/edge-security-acceleration/dcdn/developer-reference/edgescript-overview#concept-2105916).
        
    
7.  Click **OK**.
    

## Configuration examples

-   Example 1: Configure a blacklist
    
    Rules: `*IE*|*^$*`
    
    Expected result: Requests sent from Internet Explorer (IE) or that do not contain the User-Agent header are rejected.
    
-   Example 2: Configure a whitelist
    
    Rules: `*IE*|*firefox*`
    
    Expected result: Only requests that are sent from IE or Firefox are allowed to access resources on POPs.
