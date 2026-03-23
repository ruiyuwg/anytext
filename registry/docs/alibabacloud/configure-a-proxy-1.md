In software development, a proxy acts as an intermediary to control access to a feature or resource. You can use a proxy to implement features such as permission checks, operation logs, data caching, and lazy loading without changing the original code. This improves the security and performance of your program and makes it easier to maintain and extend. This topic describes how to configure a proxy for the V2.0 software development kit (SDK).

## Proxy types

HTTP and HTTPS proxies are supported.

**Proxy type**

**Description**

HTTP proxy

Use the **httpProxy** parameter to configure the proxy server address and port. The format is `http://<IP address>:<port>`. This setting applies only to HTTP requests.

HTTPS proxy

Use the **httpsProxy** parameter to configure the proxy server address and port. The format is `http://<IP address>:<port>`. This setting applies only to HTTPS requests.

**Note**

If the proxy server requires identity authentication, add the username and password to the address. Use the following format: `http://<user>:<password>@<IP address>:<port>`

After you configure a proxy, you can also use the **noProxy** parameter to specify a list of addresses that do not require a proxy. Separate multiple addresses with commas. You can use domain names and IP addresses.

## **Configuration method**

**Note**

Proxy settings in RuntimeOptions override the settings in the client Config.

-   The following code provides examples on how to configure a proxy using the RuntimeOptions object.
    
    Node.js
    
    ```
    const { RuntimeOptions } = require('@alicloud/tea-util');
    
    const runtime = new RuntimeOptions({
      // Configure an HTTP proxy.
      httpProxy: "http://xx.xx.xx.xx:8089",
      // Configure an HTTPS proxy.
      httpsProxy: "https://xxx.xxx.xxx.xxx:9999",
      // Configure the addresses that do not require a proxy.
      noProxy: '127.0.0.1,localhost',
    });
    ```
    
    Typescript
    
    ```
    import * as $Util from '@alicloud/tea-util';
    
    // Create a RuntimeOptions instance and set runtime parameters.
    const runtime = new $Util.RuntimeOptions({
      // Configure an HTTP proxy.
      httpProxy: "http://xx.xx.xx.xx:8089",
      // Configure an HTTPS proxy.
      httpsProxy: "https://xxx.xxx.xxx.xxx:9999",
      // Configure the addresses that do not require a proxy.
      noProxy: '127.0.0.1,localhost'
    });
    ```
    
-   You can configure a global proxy for the client using Config. After the configuration is complete, this proxy setting applies to all requests initiated by the client.
    
    Node.js
    
    ```
    const { Config } = require('@alicloud/openapi-client');
    
    const config = new Config({
      // Configure an HTTP proxy.
      httpProxy: "http://xx.xx.xx.xx:8089",
      // Configure an HTTPS proxy.
      httpsProxy: "https://xxx.xxx.xxx.xxx:9999",
      // Configure the addresses that do not require a proxy.
      noProxy: '127.0.0.1,localhost',
    });
    ```
    
    Typescript
    
    ```
    import * as $OpenApi from '@alicloud/openapi-client';
    
    const config = new $OpenApi.Config({
      // Configure an HTTP proxy.
      httpProxy: "http://xx.xx.xx.xx:8089",
      // Configure an HTTPS proxy.
      httpsProxy: "https://xxx.xxx.xxx.xxx:9999",
      // Configure the addresses that do not require a proxy.
      noProxy: '127.0.0.1,localhost'
    });
    ```
    

## **References**

For more information about proxy configuration, see [HTTP proxy configuration practices](/help/en/sdk/developer-reference/alibaba-cloud-sdk-proxy-usage).
