This topic describes how to integrate HTTPDNS SDK for Android.

## Prerequisite

If you need to manually integrate, please download the SDK package. The latest version is [V2.3.0-intl](https://ams-httpdns-sg-android.oss-ap-southeast-1.aliyuncs.com/httpdns-android-2.3.0-intl.zip).

## Sample code

For more information about how to integrate HTTPDNS SDK for Android in a sample project, see [HTTPDNS Android Demo](https://github.com/aliyun/alicloud-android-demo/tree/master/httpdns_android_demo).

The SDK is open source. If the sample code cannot meet your business requirements, you can modify the source code. For more information, see [HTTPDNS-android-sdk](https://github.com/aliyun/alibabacloud-httpdns-android-sdk).

## Procedure

1.  **Quickly add dependencies by using a Maven repository.**
    
    Add the URL of the Maven repository to build.gradle:
    
    ```
    allprojects {
        repositories {
            maven {
                url 'http://maven.aliyun.com/nexus/content/repositories/releases/'
            }
        }
    }
    ```
    
    Add dependencies to build.gradle:
    
    ```
    dependencies {
        compile 'com.aliyun.ams:alicloud-android-httpdns:2.3.0-intl'
    }
    ```
    
2.  **Obfuscate configurations.**
    
    If your project uses tools such as Proguard to obfuscate code, you must retain the following configurations:
    
    ```
    -keep class com.aliyun.ams.ipdetector.Inet64Util{*;}
    -keep class com.alibaba.sdk.android.**{*;}
    -keep class com.ut.**{*;}
    -keep class com.ta.**{*;}
    ```
    
3.  **Perform initialization.**
    
    1.  Perform initialization. This step is optional. The initialization takes effect for SDK of V2.2.1 or later.
        
        Before you obtain a service instance, the initialization helps configure specific properties for the service to prevent that the service runs based on the default configurations. The initialization is optional. The properties that are initialized can be configured by calling API operations after you obtain the service, which does not affect features of the service.
        
        ```
        // Initialize settings.
                new InitConfig.Builder()
                        // Specify the initial region. By default, a region in China is used.
                        .setRegion(currentRegion)
                        // Specify whether to enable HTTPS. By default, HTTP is enabled.
                        .setEnableHttps(enableHttps)
                        // Specify the timeout period of a service request. Unit: milliseconds.
                        .setTimeout(10 * 1000)
                        // Specify whether to enable local caching. By default, local caching is disabled.
                        .setEnableCacheIp(true)
                        // Specify whether to allow expired IP addresses to be returned. By default, expired IP addresses can be returned.
                        .setEnableExpiredIp(true)
                        // Specify a list of IPv4 addresses that you want to probe to return the optimal IPv4 address.
                        .setIpProbeItems(list)
                        // Specify the account ID.
                        .buildFor(accountID);
        ```
        
    2.  Obtain a service instance.
        
        HTTPDNS SDK for Android provides the domain name resolution service by using global service instances. You can obtain the instance by using one of the following methods.
        
        1.  General method
            
            ```
            HttpDnsService httpdns = HttpDns.getService(applicationContext, accountID);
            // The value of the applicationContext parameter is the context of your Android application.
            // The value of the accountID parameter is the account ID assigned by the system. After you activate HTTPDNS, you can obtain the account ID in the console
            ```
            
            .
            
        2.  Authentication method
            
            **Note**
            
            -   Authentication is available for HTTPDNS SDK V1.1.3 or later. If you want to use this method, you must disable Access to Non-authenticated APIs in the HTTPDNS console. Proceed with caution when you disable the feature. For more information, see [Authenticated API operations](https://www.alibabacloud.com/help/en/httpdns/latest/authenticate-resolving-requests).
                
            -   The default validity period of the authentication is 10 minutes.
                
            -   To prevent data leakage of accountID, secretKey, or data generated when the application is running, we recommend that you disable debug logging of the SDK.
                
            -   As users use the same SDK, make sure that the accountID or secretKey parameter is specified in the code during the access. These parameters are closely related to metering and billing. To prevent information leakage caused by malicious decompiling, we recommend that you enable obfuscation and harden the application before the application is rolled out.
                
            
            ```
            HttpDnsService httpdns = HttpDns.getService(applicationContext, accountID, secretKey);
            // The value of the applicationContext parameter is the context of your Android application.
            // The value of the accountID parameter is the account ID assigned by the system. After you activate HTTPDNS, you can obtain the account ID in the console.
            // The value of the secretKey parameter is the secret key for authentication.
            ```
            
    3.  Configure the domain name that you want to pre-resolve.
        
        When you initialize settings of your application, you can register domain names that you may use with the HTTPDNS SDK so that the SDK can resolve the domain names in advance. This reduces the delay of requests during subsequent domain name resolution.
        
        You need to only call the following operation:
        
        ```
        ArrayList<String> hostList = new ArrayList<>(Arrays.asList("www.taobao.com", "www.aliyun.com"));
        httpdns.setPreResolveHosts(hostList);
        ```
        
        **Important**
        
        When you configure a pre-resolution operation, an asynchronous network request is triggered. You must make sure that the code logic has the required initialization settings when the pre-resolution operation is called. For example, you must call the setHTTPSRequestEnabled operation before you call the pre-resolution operation. Otherwise, the IP addresses that are pre-resolved may use HTTP requests.
        

## Precautions

1.  **(Required) Write the degradation code**.
    
    Degradation code refers to the processing code when the HTTPDNS cannot obtain the result as expected. For more information, see [Configure operations for degradation policies](/help/en/httpdns/latest/operations-used-to-configure-degradation-policies#topic-2005296).
    
2.  Record the IP address and session ID that you obtained from HTTPDNS.
    
    A solution is provided to troubleshoot resolution issues. You must specify the IP address and session ID obtained from HTTPDNS in logs. For more information, see [Session tracing solution](/help/en/httpdns/latest/use-session-tracing-to-troubleshoot-resolution-issues#2699215).
    
3.  **Configure the HOST field in an HTTP request header**.
    
    Over the standard HTTP protocol, the server resolves the value of the HOST field in an HTTP request header as the domain name information about a request.
    
    After you use HTTPDNS, you may need to replace the value of the HOST field in an HTTP request URL with the IP address that is obtained from HTTPDNS resolution. In this case, your IP address is specified by the standard network library as the value of the HOST field in the HTTP request header. As a result, resolution errors occur on the server because the domain name instead of the IP address takes effect on the server.
    
    To solve this issue, you can specify the value of the HOST field in the HTTP request. Example:
    
    ```
    String originalUrl = "http://www.aliyun.com/";
    URL url = new URL(originalURL);
    String originalHost = url.getHost();
    // Obtain the IP address by calling the asynchronous operation.
    String ip = httpdns.getIpByHostAsync(originalHost);
    HttpURLConnection conn;
    if (ip != null) {
        // After the IP address is obtained by using HTTPDNS, replace the original value of the HOST field in the HTTP request URL with the IP address.
        url = new URL(originalUrl.replaceFirst(originalHost, ip));
        conn = (HttpURLConnection) url.openConnection();
        // Specify the HOST field in the HTTP request.
        conn.setRequestProperty("Host", originalHost);
    } else {
        conn = (HttpURLConnection) url.openConnection();
    }
    ```
    
4.  Disable the automatic **cookie** management feature.
    
    Specific network libraries support automatic storage management of cookies. When you use HTTPDNS to make requests, these network libraries use the IP address information in your URL instead of the HOST field in the HTTP request as the domain name information for cookie storage management. This can cause problems in the management and use of cookies. Therefore, you must disable the automatic cookie management feature. By default, this feature is disabled.
    
5.  **Integrate HTTPDNS in HTTPS, WebView, and Server Name Indication (SNI) scenarios**.
    
    1.  For HTTPS scenarios, see [Android HTTPS (including SNI) scenarios: direct connection with IP addresses](/help/en/httpdns/latest/connect-an-android-app-to-an-ip-address-over-https#topic-1994346).
        
    2.  For WebView scenarios, see [Android HTTPDNS + WebView Best Practices](/help/en/httpdns/latest/use-webview-in-android-apps-to-access-httpdns#topic-1994344).
        
6.  **Use a proxy**.
    
    If you use an intermediate HTTP proxy, the URL of an absolute path is used in the request line in a request initiated by the client. When you enable HTTPDNS and use an IP address for access, the proxy identifies your IP address information and pass it to the destination server as the actual Host information. In this case, the destination server is unable to process such an HTTP request that does not have actual HOST information.
    
    The `X-Online-Host` private field is used to solve similar problems for mobile gateways. The following code shows an example:
    
    ```
    Destination URL: http://www.example.com/product/oss/
    IP address that www.example.com is resolved to by using HTTPDNS: 192.168.XX.XX
    Proxy: 10.0.XX.XX:XX
    HTTP request headers:
    GET http://192.168.XX.XX/product/oss/ HTTP/1.1     # The HTTP request header initiated by the proxy. The request line is an absolute path.
    Host: www.example.com                         # This header is ignored by the proxy gateway. The proxy gateway uses the Host information in the absolute path of the request line as the host of the origin. The IP address of the host is 192.168.XX.XX.
    X-Online-Host: www.example.com                # This header is a private header added by the mobile gateway to transmit the real Host information. The header must be configured for the origin. This way, the origin can recognize the header to obtain the real Host information.
    ```
    
    You can also call `setRequestProperty` to configure the `X-Online-Host` request header and configure the resolution of the request header on the server.
    
    **Note**
    
    In most scenarios, we recommend that you disable HTTPDNS if you use a proxy.
