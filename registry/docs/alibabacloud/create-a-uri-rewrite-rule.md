If a resource on the origin server is relocated, the URL of the resource that is cached on Dynamic Content Delivery Network (DCDN) points of presence (POPs) is accordingly adjusted. If a user request carries an outdated URL, POPs rewrite the URL and redirect the request to the new URL. This reduces the number of origin requests and enhances user access performance.

## Background information

The HTTP status code 302, also known as the Found message, indicates that the requested resource has been temporarily relocated. After you create a URI rewrite rule, DCDN POPs can add the new URI of the resource to the Location header in the HTTP 302 response message. After the client receives the message, the client sends a request to the new URI.

In addition to the default status code 302, POPs also support status codes 303 and 307. If you want to change the redirect status code, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).

**HTTP status code**

**Description**

**Handling method**

**Scenario**

302

Found

GET requests remain unchanged. Requests that use other methods may be changed to GET requests.

A web page is temporarily inaccessible due to unknown reasons. In this case, search engines do not update the URL to the web page.

303

See Other

GET requests remain unchanged. Requests that use other methods are changed to GET requests. The message body is dropped.

This status code is used to redirect PUT and POST requests to prevent frequent redirections that are caused by a page refresh.

307

Temporary Redirect

Both the request method and message body remain unchanged.

A web page is temporarily inaccessible due to unknown reasons. In this case, search engines do not update the URL to the web page. If the website supports requests that use request methods other than GET, status code 307 is returned instead of status code 302.

**Important**

You can create up to 50 rewrite rules for a domain name. If you configure multiple rewrite rules, the rules are applied in descending order in which they are listed in the DCDN console.

## Scenarios

If a resource on the origin server is moved to a different directory, the URL of the resource that is cached on POPs is updated. In this case, when a client sends a request to the original URL, DCDN must rewrite and redirect the request to the new URL. For example, an image file is moved from the /download/ directory to the /image/ directory.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3526247371/CAEQMRiBgMCujtb7nRkiIGVhODBhNWRjNmJmNDRhOWE5NzNlMjQ0OTQ4YjM5NmVh4804369_20241203161906.226.svg)

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Caching**.
    
5.  Click the **URL Rewrite** tab.
    
6.  Click **Add** and configure the rewrite rule based on your business requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5678124271/p830730.png)
    
    **Parameter**
    
    **Description**
    
    **URI to Be Rewritten**
    
    -   The path must start with a forward slash (`/`) and exclude the protocol and domain name.
        
    -   Perl Compatible Regular Expressions (PCRE) are supported. Example: `^/hello$`.
        
    
    **Target URI**
    
    -   If you set Flag to **Break** in a rewrite rule, the path must start with a forward slash (`/`) and exclude the protocol and domain name.
        
    -   If you set Flag to **Redirect** in a rewrite rule, the path can contain the protocol and domain name. PCRE is supported. For example, `$1` and `$2` are used to reference captured strings in parentheses in the path that you want to rewrite.
        
    
    **Flag**
    
    Valid values: **Redirect** and **Break**.
    
    -   **Redirect**: If the URI in a request matches a specified rule, a POP returns status code 302 and redirects the request to the URI that is indicated by the Location header returned by the POP to clients. Parameters in the original URI are not modified. After the current rule is executed, the request is matched against other rules.
        
    -   **Break**: If the URI in a request matches a specified rule, a POP redirects the request to the target URI. Parameters in the original URI are not modified. After the current rule is executed, other rules are skipped.
        
    
7.  Click **OK**.
    
    After the rewrite feature is created, you can **Modify** or **Delete** the rule displayed on the URL Rewrite tab.
    

## Sample configurations

## **Example 1**

When a client requests `http://example.aliyundoc.com/hello`, which contains the string `/hello`, the POP writes a new URL `http://example.aliyundoc.com/index.html` to the Location header and returns the Location header together with an HTTP status code 302 to the client. The client initiates a request to `http://example.aliyundoc.com/index.html`.

If the Location header doesn't contain protocol and domain name, the protocol and domain name of the original request will be used.

![正则表达](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9977780271/p361280.png)

**Example 2**

When a client requests `http://example.aliyundoc.com/hello`, which contains the string `/hello` and matches the regular expression `^/hello$`, the POP writes a new URL `http://example.aliyundoc.com/index.html` to the Location header and returns the Location header together with an HTTP status code 302 to the client. The client initiates a request to `http://example.aliyundoc.com/index.html`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6277837371/p907442.png)

## Related API

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/api-batchsetdcdndomainconfigs#doc-api-dcdn-BatchSetDcdnDomainConfigs)
