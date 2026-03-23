Alibaba Cloud Dynamic Content Delivery Network (DCDN) allows you to rewrite origin URIs. The URI rewrite feature takes effect on DCDN points of presence (POPs) without affecting the internal services of DCDN or cache keys. This topic describes how to configure origin URL rewrite.

## Scenarios

If a resource on the origin server relocates, the URI of the resource also changes. If user requests use the original URI, DCDN must rewrite the URL so that the requests can be redirected to the new URL.

For example, an image file is moved from the /download/ directory to the /image/ directory.

## How it works

POPs match request URIs against the URIs of the requested resources on the origin server based on URI rewrite rules. Then, the requests or specific request parameters are redirected to the origin server.

-   In a rewrite rule, if you set the Flag parameter to None or Break, only the resource path in the URL is rewritten.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9371583761/p360325.png)
    
-   If you set the Flag parameter to enhance break, the resource path and query string are rewritten.![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9371583761/p360326.png)
    

## Usage notes

-   You can configure up to 50 **origin URI rewrite** rules for each domain name.
    
-   The system runs the rewrite rules that are listed on the Back-to-origin URL Rewrite tab in order from top to bottom. A change to this order may lead to a different rewrite result.
    
-   The **origin URI rewrite** feature is different from the **rewrite** feature on the Cache page. The **rewrite** feature takes effect on DCDN POPs, affects the internal services of DCDN, and rewrites cache keys. The **origin URI rewrite** feature functions on the DCDN POPs that communicate with origin servers and does not affect the internal services of DCDN or rewrite cache keys.
    
-   If you set the Flag parameter of a **URI rewrite rule** to enhance break, the parameter rewrite settings may conflict with the settings of the parameter filtering feature. To filter parameters, choose **Domain Names** > **Optimization** in the left-side navigation pane of the DCDN console. If you configure the two features for the same domain name, make sure that the settings do not conflict with each other. For more information, see [Parameter filtering](/help/en/edge-security-acceleration/dcdn/user-guide/ignore-parameter#task-2265712).
    

## Create an origin URI rewrite rule

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
2.  In the left-side navigation pane, click **Domain Names**.
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure** in the Actions column.
4.  In the left-side navigation pane of the domain name, click **Origin Fetch**.
5.  Click the **URI Rewrite** tab.
    
6.  On the **URI Rewrite** tab, click **Add**.
    
7.  In the URI Rewrite dialog box, configure Original URI, Final URI, and Flag. The following table describes the parameters
    
    ![改写回源URI](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0092126861/p552578.png)
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Original URI**
    
    ^/hello$
    
    Enter a URI. The URI must start with a forward slash (/) and cannot contain http:// or domain names. The URI must contain Perl Compatible Regular Expressions (PCRE).
    
    **Final URI**
    
    /hello/test
    
    Enter a URI. The URI must start with a forward slash (/) and cannot contain http:// or domain names. PCRE is supported.
    
    **Flag**
    
    None
    
    If you configure multiple URI rewrite rules, DCDN matches requests against the rules in order from top to bottom.
    
    break
    
    -   If you configure multiple URI rewrite rules, and the current rule is matched, other rules are skipped.
        
    -   This option rewrites only the resource path in the URI. The URL parameters remain unchanged. You can use the [parameter rewrite](/help/en/edge-security-acceleration/dcdn/rewrite-url-parameters-in-back-to-origin-requests#task-2067334) feature to rewrite URL parameters.
        
    
    enhance\_break
    
    -   If you configure multiple URI rewrite rules, and the current rule is matched, other rules are skipped.
        
    -   Compared with Break, enhance break rewrites URL parameters. However, the parameter rewrite settings may conflict with the settings of the feature that is described in [Rewrite URL parameters in back-to-origin requests](/help/en/edge-security-acceleration/dcdn/rewrite-url-parameters-in-back-to-origin-requests#task-2067334) feature. If you want to enable both features, make sure that the settings do not conflict with each other.
        
    
8.  Click **OK** to apply the rule.
    
    To modify or delete a rewrite rule, find the rule on the **URI Rewrite** tab and click **Modify** or **Delete** in the Actions column.
    

## Configuration examples

-   **Example 1: Apply a rule whose flag is set to None.**
    
    Original URI
    
    ^/hello$
    
    Final URI
    
    /index.html
    
    Flag
    
    None
    
    Expected result
    
    Original request: `http://aliyundoc.com/hello`
    
    Final request: `http://aliyundoc.com/index.html`
    
    The system continues to match the request against other URI rewrite rules that are listed on the **URI Rewrite** tab.
    
-   **Example 2: Apply a rule whose flag is set to Break.**
    
    Original URI
    
    ^/hello.jpg$
    
    Final URI
    
    /image/hello.jpg
    
    Flag
    
    break
    
    Description
    
    Original request: `http://example.com/hello.jpg`
    
    Final request: `http://example.com/image/hello.jpg`
    
    The system stops matching the request against other URI rewrite rules that are listed on the **URI Rewrite** tab.
    
-   **Example 3: Apply a rule whose flag is set to enhance break.**
    
    Original URI
    
    ^/hello.jpg?code=123$
    
    Final URI
    
    /image/hello.jpg?code=321
    
    Flag
    
    enhance break
    
    Expected result
    
    Original request: `http://example.com/hello.jpg?code=123`
    
    Final request: `http://example.com/image/hello.jpg?code=321`
    
    The system stops matching the request against other URI rewrite rules that are listed on the **URI Rewrite** tab.
    
-   **Example 4: Add a URI prefix to the root directory if the file name is a variable**
    
    Add the /image path to the URI of all files in the root directory. For example, rewrite /xxx in URIs to /image/xxx. In this example, xxx is a file name, such as /hello.jpg or /hello.html.
    
    Original URI
    
    ^(.\*)$
    
    **Note**
    
    ^(.\*)$ matches any characters, and a pair of parentheses () represents a group. You can use $1 in the final URI to call variables in the group.
    
    Final URI
    
    /image$1
    
    **Note**
    
    $1 is the first special replacement pattern, which represents the content that matches the expression in the first pair of parentheses () in a regular expression. $2 is the second special replacement pattern, which represents the content that matches the expression in the second pair of parentheses (). $n represents the nth special replacement pattern.
    
    Flag
    
    break
    
    Expected result
    
    -   Original request: `http://example.com/hello.jpg`
        
        Final request: `http://example.com/image/hello.jpg`
        
    -   Original request: `http://example.com/hello.html`
        
        Final request: `http://example.com/image/hello.html`
        
    
    The system stops matching the request against other URI rewrite rules that are listed on the **URI Rewrite** tab.
    
-   **Example 5: Add a URI prefix to a specific directory if the file name is a variable.**
    
    Add the /image path to the URI of all files in the /live directory. For example, rewrite /live/xxx in URIs to /image/live/xxx. In this example, xxx is a file name, such as /live/hello.jpg or /live/hello.html.
    
    Original URI
    
    ^/live/(.\*)$
    
    Final URI
    
    /image/live/$1
    
    Flag
    
    break
    
    Expected result
    
    -   Original request: `http://example.com/live/hello.jpg`
        
        Final request: `http://example.com/image/live/hello.jpg`
        
    -   Original request: `http://example.com/live/hello.html`
        
        Final request: `http://example.com/image/live/hello.html`
        
    
    The system stops matching the request against other URI rewrite rules that are listed on the **URI Rewrite** tab.
    
-   **Example 6: Apply only the rule whose flag is set to None when multiple rules are configured.**
    
    Create two URI rewrite rules, as shown in the following figure.![配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4037595861/p365897.png)
    
    Expected result:
    
    -   Original request: `http://example.com/image_01.png`
        
    -   Final request: `http://example.com/image/image_02.png`
        
        **Note**
        
        The request matches the first rule and is rewritten to `http://example.com/image_02.png`. Then, the request matches the second rule and is rewritten to `http://example.com/image/image_02.png`.
        
    -   **Example 7: Apply the rule whose flag is set to Break when multiple rules are configured.**
        
        Create two URI rewrite rules, as shown in the following figure.![配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2281063761/p365898.png)
        
        Expected result:
        
        -   Original request: `http://example.com/image_01.png`
            
        -   Final request: `http://example.com/image_02.png`
            
            **Note**
            
            The request matches the first rule and is rewritten to `http://example.com/image_02.png`. Other rules are skipped.
            
        
    

## Related topics

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/api-batchsetdcdndomainconfigs#doc-api-dcdn-BatchSetDcdnDomainConfigs)
