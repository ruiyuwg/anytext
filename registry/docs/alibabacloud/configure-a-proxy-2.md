In software development, a proxy acts as an intermediary to control access to a feature or resource. You can use a proxy to implement features such as permission checks, operation logs, cached data, and lazy loading without changing the original code. This approach makes your program more secure, faster, and easier to maintain and extend. This topic describes how to configure a proxy for the V2.0 Go SDK.

## Proxy types

You can configure an HTTP proxy, an HTTPS proxy, or a SOCKS5 proxy. We recommend that you choose only one type of proxy for your application.

**Proxy type**

**Description**

HTTP proxy

Use the **httpProxy** parameter to configure the proxy server address and port. The format is `http://<IP address>:<port>`. This setting applies only to HTTP requests.

HTTPS proxy

Use the **httpsProxy** parameter to configure the proxy server address and port. The format is `http://<IP address>:<port>`. This setting applies only to HTTPS requests.

SOCKS5 proxy

To use a SOCKS5 proxy, set both the socks5Proxy and **Socks5NetWork** parameters. Use **socks5Proxy** to configure the proxy server address and port in the format `socks5://<IP address>:<port>`. Use `Socks5NetWork` to specify the transport protocol, such as TCP or UDP.

**Note**

If the proxy server requires identity authentication, add the username and password before the IP address. The format is `http://<user>:<password>@<IP address>:<port>` or `socks5://<user>:<password>@<IP address>:<port>`.

When you use an HTTP or HTTPS proxy, you can use the **noProxy** parameter to specify a list of addresses that bypass the proxy. Separate multiple addresses with commas. You can use both domain names and IP addresses.

## **Proxy configuration methods**

**Note**

Proxy configurations are prioritized in the following order, from highest to lowest: RuntimeOptions configuration, Config configuration, and environment variable configuration.

-   Configure the proxy using environment variables.
    
    **Note**
    
    Environment variables are not supported for SOCKS5 proxy configuration parameters.
    
    -   Use the `HTTP_PROXY` or `http_proxy` environment variable to specify the proxy server address.
        
    -   Use the `HTTPS_PROXY` or `https_proxy` environment variable to specify the proxy server address.
        
    -   Use the `NO_PROXY` or `no_proxy` environment variable to specify the list of addresses that bypass the proxy.
        
-   Configure the proxy using runtime parameters (RuntimeOptions). This configuration applies only to requests that use these runtime parameters.
    
    ```
    import (
        util "github.com/alibabacloud-go/tea-utils/v2/service"
        openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
        "github.com/alibabacloud-go/tea/tea"
    )
    
    config := &openapi.Config{
        Protocol: tea.String("https"),
    }
    
    runtime := &util.RuntimeOptions{
        // Modify the request protocol (Protocol) as needed. httpsProxy is effective only for the HTTPS protocol, and httpProxy is effective only for the HTTP protocol.
        HttpProxy:  tea.String("http://127.0.0.1:9898"),
        HttpsProxy: tea.String("http://127.0.0.1:8989"),
        
        NoProxy:    tea.String("127.0.0.1,localhost"),
    
        // SOCKS5 proxy
        // Socks5Proxy:   tea.String("socks5://127.0.0.1:8989"),
        // Socks5NetWork: tea.String("tcp"), 
    }
    ```
    
-   Configure the proxy in Config when you initialize the client instance for an Alibaba Cloud product. This configuration applies to all requests.
    
    The following code provides an example:
    
    ```
    import (
        openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
        "github.com/alibabacloud-go/tea/tea"
    )
    
    config := &openapi.Config{
        // httpsProxy is effective only for the HTTPS protocol, and httpProxy is effective only for the HTTP protocol.
        Protocol: tea.String("https"),
    
        // HTTP proxy
        HttpProxy:  tea.String("http://127.0.0.1:9898"),
        // HTTPS proxy
        HttpsProxy: tea.String("http://127.0.0.1:8989"),
        
        NoProxy:    tea.String("127.0.0.1,localhost"),
    
        // SOCKS5 proxy
        // Socks5Proxy:   tea.String("socks5://127.0.0.1:8989"),
        // Socks5NetWork: tea.String("tcp"),
    }
    ```
    

## **References**

For more information, see [HTTP proxy configuration practice](/help/en/sdk/developer-reference/alibaba-cloud-sdk-proxy-usage).
