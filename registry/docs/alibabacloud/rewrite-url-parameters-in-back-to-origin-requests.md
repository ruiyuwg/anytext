Alibaba Cloud Dynamic Route for CDN (DCDN) allows you to rewrite URL parameters in requests before the requests are redirected to origin servers. You can ignore, add, delete, retain, and modify parameters.

## Background information

After you enable Alibaba Cloud DCDN to rewrite URL parameters in back-to-origin requests, the query strings in URLs are rewritten. You can configure more than one rewrite rule. Rewrite rules take effect in the following order: Add > Delete > Ignore Parameters or Reserve Only > Modify. If you configure more than one rewrite rule for the same parameter, only the rewrite rule with the highest priority takes effect.

**Note** The Ignore Parameters and Reserve Only rules conflict with each other. Do not configure both for the same URL at the same time.

![URL rewrite](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4695549261/p297048.png)

## Precautions

URL parameter rewrite rules may conflict with the `enhance break` rule of [Rewrite URIs in back-to-origin requests](/help/en/edge-security-acceleration/dcdn/origin-uri-rewrite#task-2067330 "If you want to rewrite the Uniform Resource Identifier (URI) in back-to-origin requests, you can create rules to rewrite URIs. This topic describes how to configure rules to rewrite URIs in the Alibaba Cloud Dynamic Route for CDN (DCDN) console.") and [Configure parameter filtering](/help/en/edge-security-acceleration/dcdn/user-guide/ignore-parameter#task-2348465 "After you enable the parameter filtering feature, Alibaba Cloud Dynamic Route for CDN (DCDN) can delete parameters that are specified after the question mark (?) in the request URLs. This improves the cache hit ratio, reduces the number of requests that are redirected to the origin server, reduces the costs of back-to-origin data transfer, and accelerates content delivery. This topic describes how to configure the parameter filtering feature."). Make sure that the rules do not conflict with each other. The most recent configuration takes effect.

**Note**

-   URL parameters in back-to-origin requests are rewritten on DCDN back-to-origin nodes. The internal DCDN links are not affected, and the cache keys remain unchanged.
-   Parameter filtering is completed on DCDN nodes. The internal DCDN links are affected, and the cache keys are rewritten.

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
2.  In the left-side navigation pane, click Domain Names.
3.  On the Configure page, find the domain name that you want to manage and click Domain Names in the Actions column.
4.  In the left-side navigation pane of the specified domain name, click Origin Fetch.
5.  Click Parameter Rewrite.
6.  On the Parameter Rewrite tab, turn on Rewrite Parameters.
7.  In the Rewrite Parameters dialog box, configure the required parameters.
    
    You can configure different types of rewrite rules or specify multiple parameters in a rewrite rule based on your business requirements. For more information, see [Configuration examples](#section-l3t-a34-huy).
    
    ![Parameter rewrite](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5879745261/p85278.png)
    
8.  Click OK to apply the rewrite rule.
    
    To modify a rewrite rule, find the rule on the Parameter Rewrite tab and click Modify in the Actions column.
    
    ![Parameter rewrite](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8713549261/p85281.png)
    

## Configuration examples

-   Example 1: Ignore all URL parameters
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0607019361/p358715.png)
    
     
    
    Parameter
    
    Example
    
    Ignore Parameters
    
    Enabled
    
    Add
    
    None
    
    Delete
    
    None
    
    Reserve Only
    
    None
    
    Modify
    
    None
    
    Expected result
    
    Original request: `http://example.com/index.html?code1=1&code2=2&code3=3`
    
    Final request: `http://example.com/index.html`
    
-   Example 2: Retain specified parameters
    
    ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0607019361/p358716.png)
    
     
    
    Parameter
    
    Example
    
    Ignore Parameters
    
    Enabled
    
    Add
    
    None
    
    Delete
    
    None
    
    Reserve Only
    
    code2
    
    Modify
    
    None
    
    Expected result
    
    Original request: `http://example.com/index.html?code1=1&code2=2&code3=3`
    
    Final request: `http://example.com/index.html?code2=2`
    
-   Example 3: Add, delete, and modify specified parameters
    
    ![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1607019361/p358718.png)
    
     
    
    Parameter
    
    Example
    
    Ignore Parameters
    
    Enabled
    
    Add
    
    code4=4
    
    Delete
    
    code2
    
    Reserve Only
    
    None
    
    Modify
    
    code3=0
    
    Expected result
    
    Original request: `http://example.com/index.html?code1=1&code2=2&code3=3`
    
    Final request: `http://example.com/index.html?code1=1&code3=0&code4=4`
