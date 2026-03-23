The managed transforms feature of Edge Security Acceleration (ESA) automatically adds Headers to origin requests to include information such as the client's originating IP address, geolocation, and TLS fingerprint. It also adds standard security Headers to client responses. This simplifies the configuration of common request and security Headers.

## **How it works**

After you enable managed transforms, ESA adds a set of common origin request Headers and security response Headers at points of presence (POPs). The workflow is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6036800771/CAEQUxiBgMCej_qe4BkiIDQ2N2EwOTM2YmVkNTQzN2ZiZGJhODE4M2EzYTJhNDNk5735081_20250925111106.558.svg)

-   **HTTP request Headers (Client →** **ESA** **→ Origin server)**: When a POP receives a client request, it adds specific HTTP request Headers based on your configuration before forwarding the request to the origin server. These Headers include the following:
    
    **Type**
    
    **Included Headers**
    
    **Description**
    
    Add real client IP Header
    
    `ali-real-client-ip`
    
    Records the originating IP address of the client that established the TCP connection. This header is added by ESA at the POP and is more reliable than the `X-Forwarded-For` header, which can be forged by the client.
    
    Add visitor location header
    
    -   `ali-ip-country`
        
    -   `ali-ip-city`
        
    
    Queries the IP geolocation database based on the originating IP address of the client and adds the corresponding country/region and city codes as header values. The header value is a two-letter Alpha-2 country/region code defined in ISO 3166-1. For example, `ali-ip-country=cn` indicates that the client is located in the Chinese mainland.
    
    Add security request header
    
    -   `Tls-Hash`
        
    -   `Tls-Ja3`
        
    -   `Tls-Ja4`
        
    
    Analyzes the client's TLS handshake information to generate JA3 and JA4 fingerprints. These fingerprints are used to identify client types or detect bots. The Headers include `Tls-Hash`, `Tls-Ja3`, and `Tls-Ja4`.
    
    > The TLS fingerprint Headers have values only for sites on the Enterprise plan.
    

-   **HTTP response Headers (****ESA** **→ Client)**: When ESA receives a response from the origin server, it adds a set of standard security response Headers based on your configuration before returning the response to the client.
    
    **Note**
    
    If the origin server's response already contains a security header with the same name, ESA overwrites the header value from the origin server by default. This ensures policy consistency.
    
    **Type**
    
    **Included Headers**
    
    **Description**
    
    Add security response Headers
    
    `x-content-type-options: nosniff`
    
    Protects against Multipurpose Internet Mail Extensions (MIME) type confusion attacks. It requires the browser to strictly follow the type declared in the `Content-Type` response header. The `nosniff` value activates strict mode.
    
    `x-xss-protection: 1; mode=block`
    
    Protects against reflected cross-site scripting (XSS) attacks, where malicious scripts are injected through URL parameters. The value `1` enables XSS filtering. The value `mode=block` prevents the page from rendering if an attack is detected.
    
    `x-frame-options: SAMEORIGIN`
    
    Restricts page embedding permissions to protect against clickjacking attacks. The `SAMEORIGIN` value allows a page to be embedded only by pages from the same origin. For example, a page from `example.com` can only be nested within other pages from `example.com`.
    
    `referrer-policy: same-origin`
    
    Controls the leakage of Referer header information. This prevents the user's behavior path from being exposed during cross-origin requests. The `same-origin` value sends the full Referer only for same-origin requests. The Referer is not sent for cross-origin requests.
    
    `expect-ct: max-age=86400, enforce`
    
    Used to detect abnormal certificates. The value `max-age=86400` sets the policy validity period to 24 hours. The value `enforce` forces the browser to reject connections that do not meet Certificate Transparency requirements.
    

## **Add client information to origin requests**

You can automatically add HTTP Headers that contain the client's originating IP address, geolocation, and TLS fingerprint to origin requests. This allows your origin application to obtain more context about the client.

### **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Transform Rules**.
    
3.  On the **Transform Rules** page, click the **Managed Transforms** tab.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1011860.png)
    
4.  Select the required Headers.
    
    -   **Add Real Client IP Header**: Sends the `ali-real-client-ip` header to allow the origin server to retrieve the originating IP address of the client that initiated the request. Click **Configure**, turn on the **Status** switch, choose to use the default `ali-real-client-ip` header or add a custom header name, and then click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1015551.png)
        
    -   **Add Visitor Location Headers**: Sends the `ali-ip-country` and `ali-ip-city` Headers, which allow the origin server to retrieve the country/region code and city code of the client.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1016319.png)
        
    -   **Add Security Request Headers**: Sends Headers such as `Tls-Hash`, `Tls-Ja3`, and `Tls-Ja4`. The origin server can use these Headers to identify client types or detect bots.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1016321.png)
        

### **Result**

To verify the configuration, monitor origin requests from ESA on your origin server and check the logs.

**Before you enable the feature**

Only basic request Headers are included.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1031942.png)

**After you enable the feature**

After you enable **Add Real Client IP Header**, **Add Visitor Location Headers**, and **Add Security Request Headers** in ESA, the origin request includes Headers such as `Ali-Ip-Country`, `Tls-Hash`, `Tls-Ja3`, `Tls-Ja4`, `Ali-Ip-City`, and `Ali-Real-Client-Ip`.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1031941.png)

## **Add security Headers to client responses**

You can automatically add a set of standard security Headers to client responses to protect against attacks such as cross-site scripting (XSS) and clickjacking. This enhances the security of your web application.

### **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Transform Rules**.
    
3.  On the **Transform Rules** page, click the **Managed Transforms** tab.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1011860.png)
    
4.  In the **Add Security Response Headers** section, turn on the switch to add security Headers to client responses.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1016331.png)
    

### **Result**

To verify the configuration, open the developer tools in your browser, choose **Network** > **Headers** > **Response Headers**, and check the response Headers.

**Before you enable the feature**

Only basic response Headers are included.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1016333.png)

**After you enable the feature**

After you enable **Add Security Response Headers** in ESA, the response includes the following Headers: `expect-ct: max-age=86400, enforce`, `referrer-policy: same-origin`, `x-content-type-options: nosniff`, `x-xss-protection: 1; mode=block`, and `x-frame-options: SAMEORIGIN`.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608384671/p1016332.png)
