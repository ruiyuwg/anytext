When you use Alibaba Cloud Global Accelerator (GA) to accelerate your applications, you can enable the client IP preservation feature to obtain the originating IP addresses of clients. For Layer 7 listeners, you can use the `X-Forwarded-For` field in the HTTP request header to obtain the client's originating IP address. For Layer 4 listeners, you can obtain the originating IP address automatically or using Proxy Protocol, depending on the backend service type.

**Note**

Only smart routing listeners support client IP preservation. Custom routing listeners do not support this feature by default. To enable client IP preservation for a custom routing listener, contact your account manager.

## HTTP or HTTPS listeners

### **Method**

You can use the **Preserve Client IP** feature, which is enabled by default.

GA stores the client's originating IP address in the `X-Forwarded-For` field of the HTTP request header. After you configure the backend server, the server can retrieve this address. The first IP address in the field is the client's originating IP address.

```
X-Forwarded-For: <Originating client IP, Proxy server 1 IP, Proxy server 2 IP, ...>
```

### **Procedure**

This topic uses a backend server that runs Alibaba Cloud Linux 3 and Nginx 1.20.1 as an example. The configurations may vary depending on your environment.

1.  Run the command `nginx -V | grep http_realip_module` on the NGINX server to check whether the http\_realip\_module module is installed on the NGINX server. NGINX servers use the http\_realip\_module module to parse the value of X-Forwarded-For.
    
    If `--with-http_realip_module` is included in the output, it indicates that http\_realip\_module is installed on the NGINX server and you can proceed to the next step.
    
    **Sample output which shows that http\_realip\_module is installed**
    
    ```
    nginx version: nginx/1.20.1
    built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) 
    built with OpenSSL 1.1.1k  FIPS 25 Mar 2021
    TLS SNI support enabled
    configure arguments: --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path=/var/lib/nginx/tmp/scgi --pid-path=/run/nginx.pid --lock-path=/run/lock/subsys/nginx --user=nginx --group=nginx --with-compat --with-debug --with-file-aio --with-google_perftools_module --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_degradation_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_mp4_module --with-http_perl_module=dynamic --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-http_xslt_module=dynamic --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-stream_ssl_preread_module --with-threads --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic' --with-ld-opt='-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'
    ```
    
    **Note**
    
    -   NGINX 1.0.4, which was released in 2011, and later support the http\_realip\_module module. If your NGINX version is earlier than 1.0.4, we recommend that you back up data and upgrade to a later version.
        
    -   If the http\_realip\_module module is not installed on the NGINX server, compile and install NGINX again, and then install http\_realip\_module. We recommend that you use package managers such as YUM to install and manage NGINX. Packet managers simplify the process.
        
    
2.  Modify and save the NGINX configuration file. The following code block shows an example. Run the `nginx -t` command to query the path of the configuration file, which is `/etc/nginx/nginx.conf` by default. The path may vary based on the environment that you use.
    
    ```
    http {
      # Set the variable $http_x_forwarded_for, which is used to record the value of X-Forwarded-For.
      log_format  main  '$remote_addr- $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
      
      # ...
    }
    ```
    
3.  Run the `sudo nginx -s reload` command to reload the NGINX configuration file.
    
4.  Obtain the client's originating IP address.
    
    Check the Nginx log to verify that the client's originating IP address is obtained.
    
    Run the `tail -n <Number of log entries to return> <Log path>` command. In the log output, view the field that corresponds to the `$http_x_forwarded_for` variable. The first IP address is the originating IP address of the client.
    
    In this topic, the default path of the Nginx log file is used: `/var/log/nginx/access.log`.
    
    ![HTTP XFF 日志.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p860564.png)
    
    **Note**
    
    If you enabled health checks for Global Accelerator, you may need to view multiple log entries or temporarily increase the health check interval. This prevents health check logs from overwriting the log entries that contain the client's originating IP address.
    

## TCP listeners

### Method

Enable the **Preserve Client IP** feature. Then, select a method to obtain the client's originating IP address.

The supported methods vary depending on the backend service type.

-   **Automatically Retrieve Client IP**: The client's originating IP address is forwarded directly to the backend server.
    
-   **Proxy Protocol**: The backend server must support Proxy Protocol to obtain the client's originating IP address.
    
    What is Proxy Protocol?
    
    Proxy Protocol is a communication protocol that forwards the original network connection information of a client from a proxy server to a backend server.
    
    Typically, when a proxy server forwards a client request to a backend server, it rewrites the request header. The client's source IP address and port are replaced with the proxy server's information. This prevents the backend server from obtaining the client's original network connection information.
    
    With Proxy Protocol, the proxy server encapsulates the client's original network connection information in the request header and sends it to the backend server. The backend server can then parse the Proxy Protocol header to obtain the client's original network connection information, including the source IP address, source port, and communication protocol.
    
    Using Proxy Protocol, the backend server can accurately obtain the client's original network connection information for more precise logging, access control, and traffic monitoring.
    
    **Important**
    
    -   Proxy Protocol works only if both the proxy server and the backend server support it. If the backend server cannot parse Proxy Protocol headers, enabling this feature may cause parsing errors and affect service availability.
        
    -   GA listeners support Proxy Protocol to forward original connection information, such as the source IP, destination IP, source port, and destination port. This information is added to the TCP data header without discarding or overwriting any existing data.
        
    -   GA supports only Proxy Protocol v1. Proxy Protocol v1 supports only the TCP protocol. For more information, see [The PROXY protocol](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).
        
    

### **Backend services deployed on Alibaba Cloud**

**Backend service type**

**Client IP preservation support**

**Method**

**ECS**

Supported.

The ECS instance must be in a virtual private cloud (VPC). The security group of the ECS instance must allow traffic from all client source IP addresses.

-   Automatically Retrieve Client IP
    
-   Proxy Protocol
    

**ALB**

Not supported.

Not applicable

**NLB**

Supported.

-   Automatically Retrieve Client IP (supported only when the backend server type of the NLB instance is ECS or ENI)
    
-   Proxy Protocol
    

**CLB**

Supported.

The security group of the CLB backend server must allow traffic from all client source IP addresses.

Note that in the following scenarios, the backend servers cannot obtain the originating IP addresses of clients:

-   The backend servers of your CLB instance are ECS instances that are deployed in the classic network.
    
-   The listeners of your CLB instance use the HTTP or HTTPS protocol.
    

-   Automatically Retrieve Client IP (supported only when the backend server type of the CLB instance is ECS or ENI)
    
-   Proxy Protocol
    

**OSS**

Not supported.

Not applicable

**ENI**

Supported.

The security group of the ENI must allow traffic from all client source IP addresses.

-   Automatically Retrieve Client IP
    
-   Proxy Protocol
    

**Custom Private IP**

Supported.

Proxy Protocol

**Alibaba Cloud Public IP Address**

**Warning**

If the endpoint is an Alibaba Cloud public IP address and the public IP address is detached from the original instance and attached to another instance, client IP preservation may fail and traffic may be interrupted. To restore the client IP preservation feature for the endpoint, you can delete and re-create the endpoint, or contact your account manager for assistance.

Attached to a VPC-type ECS instance

Supported.

-   Automatically Retrieve Client IP
    
-   Proxy Protocol
    

Attached to an NLB instance

Supported.

-   Automatically Retrieve Client IP (supported only when the backend server type of the NLB instance is ECS or ENI)
    
-   Proxy Protocol
    

Attached to an ALB instance

Not supported.

Not applicable

Attached to a private CLB instance

Supported.

-   Automatically Retrieve Client IP (supported only when the backend server type of the CLB instance is ECS or ENI)
    
-   Proxy Protocol
    

Attached to an ENI

Supported.

-   Automatically Retrieve Client IP
    
-   Proxy Protocol
    

Attached to a public NAT gateway instance

Supported.

Proxy Protocol

### **Backend services deployed outside Alibaba Cloud**

**Backend service type**

**Client IP preservation support**

**Method**

**Custom Public IP**

Supported.

Proxy Protocol

**Custom Domain Name**

Supported.

**Note**

If a client uses an IPv6 accelerated IP address to access GA, or if GA communicates with the backend over IPv6, you must use Proxy Protocol to obtain the client's originating IP address.

### Procedure

This topic uses a backend server that runs Alibaba Cloud Linux 3 and Nginx 1.20.1 as an example. The configurations may vary depending on your environment.

## Automatic

1.  Enable client IP preservation.
    
    1.  Log on to the [Global Accelerator console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the target Global Accelerator instance, and click **Configure Listener** in the **Actions** column.
        
    3.  On the **Listeners** tab, find the target TCP listener, and click **Mod Lsnr** in the **Actions** column.
        
    4.  In the **Configure Listener & Protocol** step, click **Next**.
        
    5.  In the **Configure Endpoint Group** step, select **Preserve** from the **Preserve Client IP** list and click **Next**.
        
        If backend services are deployed on Alibaba Cloud, **Method To Obtain Client's Originating IP** is set to **Automatically Retrieve Client IP** by default.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5461107071/p741479.png)
        
    6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
        
2.  View the Nginx service configuration file.
    
    You can run the `nginx -t` command to view the path of the configuration file. By default, the path is `/etc/nginx/nginx.conf`. The actual path may vary depending on your environment.
    
    **Note**
    
    If the backend service needs to process only HTTP and HTTPS traffic, make sure that the Nginx server supports the `http{}` module. If the backend service also needs to process TCP traffic, make sure that the Nginx server supports the `stream{}` module.
    
    The `stream{}` module is added in NGINX 1.9.0 and later. However, this module is not installed by default. You must compile and install the `stream{}` module.
    
    ```
    # Process HTTP traffic
    http {
      # Default configurations
      log_format  main  '$remote_addr- $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
      access_log  /var/log/nginx/access.log  main;
      
      # Use listener port 80 as an example
      server {
            listen 80;
            #...
           }
    }
    
    # Process TCP traffic (add as needed)
    stream {
        log_format main_stream '$remote_addr - [$time_local] '
                            '"$protocol" $status $bytes_sent $bytes_received '
                            '"$session_time"';
    
        access_log  /var/log/nginx/stream_access.log  main_stream;
    # Use listener port 4000 as an example
        server {
            listen 4000;
            #...
        }
    }
    ```
    
3.  Obtain the originating IP address of the client.
    
    -   Method 1: Check the Nginx log to verify that the originating IP address of the client is obtained.
        
        Run the `tail -n <Number of log entries to return> <Log path>` command. In the log output, check the first IP address (the field that corresponds to the `$remote_addr` variable). This is the originating IP address of the client.
        
        -   For HTTP traffic:
            
            In this scenario, the log file path is `/var/log/nginx/access.log`.![TCP 透传IP 日志.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p861236.png)
            
        -   For TCP traffic:
            
            In this scenario, the log file path is `/var/log/nginx/stream_access.log`.
            
            ![TCP流量 自动获取 日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p910995.png)
            
    -   Method 2: Capture packets to verify that the originating IP address of the client is obtained.
        
        Run the `tcpdump tcp port [Listener port] -n -X -s 0` command to view the client's originating IP address in the captured packets.
        
        ![TCP流量 自动获取 抓包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p911011.png)
        

### Use Proxy Protocol

1.  Enable client IP preservation.
    
    1.  Log on to the [Global Accelerator console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the target Global Accelerator instance, and click **Configure Listener** in the **Actions** column.
        
    3.  On the **Listeners** tab, find the target TCP listener, and click **Mod Lsnr** in the **Actions** column.
        
    4.  In the **Configure Listener & Protocol** step, click **Next**.
        
    5.  In the **Configure Endpoint Group** step, select **Preserve** from the **Preserve Client IP** tab and click **Next**.
        
        If backend services are deployed outside Alibaba Cloud, **Method To Obtain Client's Originating IP** is set to **ProxyProtocol** by default.
        
        ![开启保持客户端源IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6461107071/p327732.png)
        
    6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
        
2.  Modify and save the Nginx service configuration file.
    
    You can run the `nginx -t` command to view the path of the configuration file. By default, the path is `/etc/nginx/nginx.conf`. The actual path may vary depending on your environment.
    
    **Note**
    
    If the backend service needs to process only HTTP and HTTPS traffic, make sure that the Nginx server supports the `http{}` module. If the backend service also needs to process TCP traffic, make sure that the Nginx server supports the `stream{}` module.
    
    The `stream{}` module is added in NGINX 1.9.0 and later. However, this module is not installed by default. You must compile and install the `stream{}` module.
    
    ```
    # Process HTTP traffic
    http {
      # Make sure to add the $proxy_protocol_addr variable, which saves the client's originating IP address, to the log format of the http{} module.
      log_format  main  '$proxy_protocol_addr - $remote_addr- $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';     
                                        
      access_log  /var/log/nginx/access.log  main;
      
      # Use listener port 80 as an example and enable parsing for proxy_protocol.
      server {
        listen 80   proxy_protocol;
        #...
      }
    }
    
    # Process TCP traffic (add as needed)
    stream {
        # Make sure to add the $proxy_protocol_addr variable, which saves the client's originating IP address, to the log format of the stream{} module.
        log_format  main_stream  '$proxy_protocol_addr - $remote_addr - $protocol [$time_local] '
                                  '$status $bytes_sent $bytes_received $session_time';
                                  
        access_log /var/log/nginx/stream_access.log main_stream; 
    
       # Use listener port 12345 as an example and enable parsing for proxy_protocol.
        server {
            listen 12345 proxy_protocol;
            #...
        }
    }
    ```
    
3.  Run the `sudo nginx -s reload` command to reload the Nginx configuration file.
    
4.  Obtain the originating IP address of the client.
    
    Check the Nginx log to verify that the originating IP address of the client is obtained.
    
    Run the `tail -n <Number of log entries to return> <Log path>` command. In the log output, check the IP address that corresponds to the `$proxy_protocol_addr` variable. This is the originating IP address of the client.
    
    -   For HTTP traffic:
        
        In this scenario, the log file path is `/var/log/nginx/access.log`.
        
        ![TCP PP 日志.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p861517.png)
        
    -   For TCP traffic:
        
        In this scenario, the log file path is `/var/log/nginx/stream_access.log`.
        
        ![TCP PP 四层请求  日志.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p862980.png)
        

## **UDP listeners**

### **Method**

Use the **Preserve Client IP** feature. After you enable this feature, only the **Automatically Retrieve Client IP** method is supported by default. GA forwards the client's originating IP address directly to the backend server.

The following limits apply when you enable **Preserve Client IP** for a UDP listener:

-   This feature is supported only for pay-as-you-go GA instances.
    
    If your pay-as-you-go GA instance does not support **Preserve Client Source IP** for UDP listeners, the instance may be an earlier version. Contact your account manager to upgrade your GA instance.
    
-   The **Backend Service Type** can be only **ECS**, **ENI**, or **NLB**. For backend services of the **NLB** type, the **Client IP Preservation** feature is not enabled by default. To use this feature, contact your account manager.
    
-   Only IPv4 backend servers can obtain the originating IP addresses of IPv4 clients, and only IPv6 backend servers can obtain the originating IP addresses of IPv6 clients.
    

### **Procedure**

This topic uses a backend server that runs Alibaba Cloud Linux 3 and Nginx 1.20.1 as an example. The configurations may vary depending on your environment.

1.  Enable client IP preservation.
    
    1.  Log on to the [Global Accelerator console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the target Global Accelerator instance, and click **Configure Listener** in the **Actions** column.
        
    3.  On the **Listeners** tab, find the target UDP listener, and click **Mod Lsnr** in the **Actions** column.
        
    4.  In the **Configure Listener & Protocol** step, click **Next**.
        
    5.  In the **Configure Endpoint Group** step, select **Preserve** from the **Preserve Client IP** tab and click **Next**.
        
        In this case, **Retrieve Client IP** is set to **Automatically Retrieve Client IP** by default.
        
        ![UDP开启保持客户端源IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p909762.png)
        
    6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
        
2.  View the Nginx service configuration file.
    
    You can run the `nginx -t` command to view the path of the configuration file. By default, the path is `/etc/nginx/nginx.conf`. The actual path may vary depending on your environment.
    
    **Note**
    
    To process UDP traffic, the Nginx server on the backend service must support the `stream{}` module.
    
    The `stream{}` module is added in NGINX 1.9.0 and later. However, this module is not installed by default. You must compile and install the `stream{}` module.
    
    ```
    #...
    
    # Process UDP traffic (make sure to include this module)
    stream {
        log_format main_stream '$remote_addr - [$time_local] '
                            '"$protocol" $status $bytes_sent $bytes_received '
                            '"$session_time"';
    
        access_log  /var/log/nginx/stream_access.log  main_stream;
    # Use UDP listener port 4000 as an example
        server {
            listen 4000 udp;
            #...
        }
    }
    ```
    
3.  Obtain the originating IP address of the client.
    
    -   Method 1: Check the Nginx log to verify that the originating IP address of the client is obtained.
        
        Run the `tail -n <Number of log entries to return> <Log path>` command. In the log output, check the first IP address (the field that corresponds to the `$remote_addr` variable). This is the originating IP address of the client.
        
        In this scenario, the log file path is `/var/log/nginx/stream_access.log`.
        
        ![UDP流量 自动获取 日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p911044.png)
        
    -   Method 2: Capture packets to verify that the originating IP address of the client is obtained.
        
        Run the `tcpdump udp port [Listener port] -n -X -s 0` command to view the client's originating IP address in the captured packets.
        
        ![UDP流量 自动获取 抓包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150951471/p911052.png)
        

## **FAQ**

### **Why does the client IP preservation feature not work after it is enabled?**

-   If you use an HTTP or HTTPS listener and the backend server cannot record or process the `X-Forwarded-For` header, client IP address preservation does not take effect.
    
-   If you use a TCP listener:
    
    -   If the backend service is deployed on Alibaba Cloud but the backend servers are not deployed in a virtual private cloud (VPC) or the elastic IP address (EIP) is not associated with an instance of the VPC type, the backend servers cannot preserve client IP addresses.
        
    -   If the backend service is deployed outside Alibaba Cloud, the backend servers must support the Proxy Protocol so that they can preserve client IP addresses.
        
        This is because GA uses Proxy Protocol to preserve client IP addresses after you enable client IP address preservation. Therefore, you must make sure that the backend servers support Proxy Protocol. Otherwise, the backend servers cannot parse the Proxy Protocol header.
        
    -   If the client uses an IPv6 address to access an IPv4 backend service, the backend servers must support Proxy Protocol. Otherwise, the backend servers cannot preserve client IP addresses.
        
-   If you use a UDP listener and the client uses an IPv6 address to access an IPv4 backend service, client IP address preservation does not take effect.
    

### How do I disable client IP address preservation?

For HTTP listeners and HTTPS listeners, client IP address preservation is automatically enabled and cannot be disabled.

For TCP and UDP listeners, you can disable client IP address preservation in the GA console. Perform the following steps:

1.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
    
2.  On the **Listeners** tab, find the listener that you want to manage and click **Mod Lsnr** in the **Actions** column.
    
3.  In the **Configure Listener & Protocol** step, click **Next**.
    
4.  In the **Configure Endpoint Group** step, set **Preserve Client IP** to **Do Not Preserve** and click **Next**.
    
5.  In the **Configuration Review** step, confirm the information and click **Submit**.
    

### **How do I obtain the client's originating IP address when GA handles traffic from IPv6 clients to IPv4 services?**

-   HTTP and HTTPS listeners obtain the client IP addresses of IPv6 and IPv4 clients by using the `X-Forwarded-For` HTTP header.
    
-   TCP listeners obtain the client IP addresses of IPv6 clients by using **Proxy Protocol**. This method requires that the backend servers support Proxy Protocol. Otherwise, access may fail.
    
-   UDP listeners cannot obtain the client IP addresses of IPv6 clients.
    

## **References**

## Console operations

-   You can also use the [access log](/help/en/ga/user-guide/using-access-logs) feature of GA to obtain the client's originating IP address. Create an access log for the target endpoint group. The collected access logs are delivered to the Logstore in Simple Log Service (SLS) in the region where the endpoint group is deployed. On the **Raw Logs** tab of the Logstore, you can view the client's originating IP address in the **client\_ip** field of the access request logs.
    
-   For more information about the configurations and notes for backend services of endpoint groups, see [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/) and [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners).
    

## API references

When you call the following API operations, you can use the `EnableClientIPPreservation` parameter (for the automatic method) and the `EnableProxyProtocol` parameter (for the Proxy Protocol method) to configure how to obtain the client's originating IP address.

-   [CreateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-createendpointgroup) - Creates an endpoint group.
    
-   [UpdateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-updateendpointgroup) - Modifies the configurations of an endpoint group.
