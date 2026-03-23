This topic describes how to use a proxy server to access and manage cloud services by using Alibaba Cloud CLI.

## **Procedure**

**Note**

For information about how to configure a proxy by using an oss command, see the [Configure a proxy by using an oss command](#section-5yf-ejl-jwf) section of this topic.

Alibaba Cloud CLI allows you to configure environment variables for a proxy server to access and manage cloud services. The following table describes the environment variables. For more information about how to configure the environment variables, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).

## HTTP proxy

**Variable**

**Variable value**

`http_proxy`

-   Format: `http://proxy_server_address:port`
    
-   Examples:
    
    -   `http://192.168.1.2:1234`
        
    -   `http://proxy.example.com:1234`
        

## HTTPS proxy

**Variable**

**Variable value**

`https_proxy`

-   Format: `https://proxy_server_address:port`
    
-   Examples:
    
    -   `https://192.168.1.2:5678`
        
    -   `https://proxy.example.com:5678`
        

## Configure a proxy by using an oss command

oss commands do not support proxy configuration by using environment variables. You can specify the following information to configure a proxy:

```
# The URL of the proxy server. HTTP, HTTPS, and SOCKS5 proxies are supported. Examples: https://120.79.XX.XX:3128 and socks5://120.79.XX.XX:1080.
--proxy-host

# The username that is used to access the proxy server. By default, this parameter is left empty.
--proxy-user

# The password that is used to access the proxy server. By default, this parameter is left empty.
--proxy-pwd
```

Sample code:

```
aliyun oss ls oss://<Bucket> --proxy-host <YourProxyHost> --proxy-user <UserName> --proxy-pwd <Password>
```
