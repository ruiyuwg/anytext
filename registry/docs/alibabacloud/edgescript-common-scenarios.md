This topic describes the use scenarios of EdgeScript, including authentication logic customization, request header and response header customization, rewrite and redirect customization, cache control customization, and throttling customization.

## Customize authentication rules

The following example shows how to customize authentication rules:

-   Use scenario
    
    -   Request URL format: `/path/digest/?.ts?key=&t=`.
        
    -   For `.ts` requests, the requirements for customizing hotlink protection are:
        
        -   Rule 1: If the request does not contain the `t` or `key` parameter, the point of presence (POP) returns the HTTP 403 status code and adds the `X-AUTH-MSG` response header to indicate the cause of failure.
            
        -   Rule 2: The `t` parameter specifies the expiration time. If the specified `t` parameter is earlier than the current time, the POP returns the HTTP 403 status code and adds the `X-AUTH-MSG` response header to indicate the cause of failure. For this authentication, note that there may be a gap between the timestamps obtained on the client and the CDN POP, which may cause authentication failure.
            
        -   Rule 3: `md5` (private key + path + file name.file name extension) == `digest`. If md5 does not match `digest`, the POP returns the HTTP 403 status code.
            
-   Script
    
    ```
    # Determine the authentication type
    if eq(substr($uri, -3, -1), '.ts') {
      # Determine whether the parameter exists
        if or(not($arg_t), not($arg_key)) {
        add_rsp_header('X-AUTH-MSG', 'auth failed - missing necessary arg')
        exit(403)
      }
      # Determine whether the value is a number
        t = tonumber($arg_t)
      if not(t) {
        add_rsp_header('X-AUTH-MSG', 'auth failed - invalid time')
        exit(403)
      }
      # Determine whether the authentication time expires
        if gt(now(), t) {
        add_rsp_header('X-AUTH-MSG', 'auth failed - expired url')
        exit(403)
      }
      # Authentication algorithm to extract requests by using regular expressions
        pcs = capture_re($request_uri,'^/([^/]+)/([^/]+)/([^?]+)%?(.*)')
      sec1 = get(pcs, 1)
      sec2 = get(pcs, 2)
      sec3 = get(pcs, 3)
    
      if or(not(sec1), not(sec2), not(sec3)) {
        add_rsp_header('X-AUTH-MSG', 'auth failed - malformed url')
        exit(403)
      }
    
      key = 'b98d643a-9170-4937-8524-6c33514bbc23'
      # Sign the concatenated authentication strings
        signstr = concat(key, sec1, sec3)
      digest = md5(signstr)
      # Compare the token strings in the signature and request
        if ne(digest, sec2) {
        add_rsp_header('X-AUTH-DEBUG', concat('signstr: ', signstr))
        add_rsp_header('X-AUTH-MSG', 'auth failed - invalid digest')
        exit(403)
      }
    }
    ```
    

## Customize request headers and response headers

The following example shows automatic file renaming:

Example:

```
add_rsp_header('Content-Disposition', concat('attachment;filename=', tochar(34), filename, tochar(34)))
```

**Note**

-   You can add the response header Content-Disposition:attachment to HTTP responses to have the message body automatically downloaded. In addition, if the response carries the `filename` parameter, it is automatically renamed `filename`. If the response does not carry the filename parameter, the default name is used.
    
-   The value for the `filename` parameter is enclosed in a pair of double quotation marks (""). The string "34" is the ASCII string for double quotation marks. It can be converted back to the quotation mark string ("") by using the tochar function.
    

Output:

```
Content-Disposition: attachment;filename="monitor.apk"
```

Script:

```
if $arg_filename {
  hn = 'Content-Disposition'
    hv = concat('attachment;filename=', $arg_filename)
    add_rsp_header(hn, hv)
}
```

## Customize rewrites and redirects

The following examples show how to customize rewrites and redirects:

-   Rewrite a URI.
    
    -   Use scenario
        
        Enable CDN to rewrite `/hello` to `/index.html`. As a result, the URI of the back-to-origin request is changed to `/index.html` and the parameters remain unchanged.
        
    -   Script
        
        ```
        if match_re($uri, '^/hello$') {
            rewrite('/index.html', 'break')
        }
        ```
        
-   Rewrite a file extension.
    
    -   Use scenario
        
        Enable Alibaba Cloud CDN to rewrite the URI `/1.txt` to `/1.<URL parameter type>` on CDN POPs. As a result, the file name extension in the URI is replaced by the value of the type parameter in the request URL. For example, `/1.txt?type=mp4` is changed to `/1.mp4?type=mp4` before the request is redirected to the origin server. Then, the retrieved content is cached on CDN POPs.
        
    -   Script
        
        ```
        if and(match_re($uri, '^/1.txt$'), $arg_type) {
             rewrite(concat('/1.', $arg_type), 'break')
        }
        ```
        
-   Convert a file extension to lowercase letters.
    
    -   Use scenario
        
        Convert URI strings to lowercase letters.
        
    -   Script
        
        ```
        pcs = capture_re($uri, '^(.+%.)([^.]+)')
        section = get(pcs, 1)
        postfix = get(pcs, 2)
        
        if and(section, postfix) {
            rewrite(concat(section, lower(postfix)), 'break')
        }
        ```
        
-   Add a URI prefix.
    
    -   Use scenario
        
        Enable Alibaba Cloud CDN to rewrite `^/nn_live/(.*)` to `/3rd/nn_live/$1` on CDN POPs.
        
    -   Script
        
        ```
        pcs = capture_re($uri, '^/nn_live/(.*)')
        sec = get(pcs, 1)
        
        if sec {
             dst = concat('/3rd/nn_live/', sec)
             rewrite(dst, 'break')
        }
        ```
        
-   Perform a 302 redirect
    
    -   Use scenario
        
        Perform a 302 redirect from the `/` root directory to `/app/movie/pages/index/index.html`.
        
    -   Script
        
        ```
        if eq($uri, '/') {
            rewrite('/app/movie/pages/index/index.html', 'redirect')
        }
        ```
        
-   Perform a 302 redirect to HTTPS URIs
    
    -   Use scenario
        
        Redirect the following URIs that match the `^/$` root directory to `https://rtmp.cdnpe.com/index.html`. You can specify the final URI as needed.
        
        -   `http://demo.aliyundoc.com`
            
        -   `https://demo.aliyundoc.com`
            
        
    -   Script
        
        ```
        if eq($uri, '/') {
            rewrite('https://demo.aliyundoc.com/index.html', 'redirect')
        }
        ```
        

## Customize cache control

The following example shows how to customize the time-to-live (TTL) value of cached resources:

-   Use scenario
    
    Customize the TTL value of cached resources based on various conditions.
    
-   Script
    
    ```
    if match_re($uri, '^/image') {
        set_cache_ttl('code', '301=10,302=5')
    }
    
    if eq(substr($uri, -4, -1), '.mp4') {
        set_cache_ttl('path', 5)
    }
    if match_re($uri, '^/201801/mp4/') {
        set_cache_ttl('path', 50)
    }
    if match_re($uri, '^/201802/flv/') {
        set_cache_ttl('path', 10)
    }
    ```
    
    **Note**
    
    For URLs that start with /image, set a TTL value of 10 seconds for the HTTP 301 status code and a TTL value of 5 seconds for the HTTP 302 status code.
    

## Customize throttling policies

The following example shows how to customize a throttling policy:

-   Use scenario
    
    If the `sp` and `unit` parameters are set, throttling is implemented. The `sp` parameter specifies the maximum threshold value before throttling is triggered. The `unit` parameter specifies the unit. The unit can be KB or MB.
    
-   Script
    
    ```
    if and($arg_sp, $arg_unit) {
        sp = tonumber($arg_sp)
        if not(sp) {
            add_rsp_header('X-LIMIT-DEBUG', 'invalid sp')
            return false
        }
    
        if and(ne($arg_unit, 'k'), ne($arg_unit, 'm')) {
            add_rsp_header('X-LIMIT-DEBUG', 'invalid unit')
            return false
        }
    
        add_rsp_header('X-LIMIT-DEBUG', concat('set on: ', sp, $arg_unit))
        limit_rate(sp, $arg_unit)
        return true
    }
    ```
    

## Region- and ISP-based access control

The following examples show region- and ISP-based access control:

-   Use scenarios
    
    -   Access control is implemented by identifying the region and Internet service provider (ISP) of the IP address included in the client request.
        
    -   The following functions are used to identify the region and ISP of the client IP address. For more information, see [Request logic functions](/help/en/cdn/user-guide/request-logic-functions#concept-2036603).
        
        -   `client_region`: returns the code of the region of the client IP address.
            
        -   `client_isp`: returns the code of the Internet service provider (ISP) of the client IP address.
            
-   Script
    
    ```
    # Restrictions on regions. If the region is not matched, the access is blocked.
    ip_region_id=client_region()
    if not(match_re(ip_region_id, '440000|370000')) {
        add_rsp_header('X-REGION-BLOCK-DEBUG', concat('hit ip_region_id:', ip_region_id))
        exit(403)
    }
    
    # Restrictions on regions. If the ISP is not matched, the access is blocked.
    ip_isp_id=client_isp()
    if not(match_re(ip_isp_id, '100017|100025')) {
        add_rsp_header('X-REGION-BLOCK-DEBUG', concat('hit ip_isp_id:', ip_isp_id))
        exit(403)
    }
    ```
