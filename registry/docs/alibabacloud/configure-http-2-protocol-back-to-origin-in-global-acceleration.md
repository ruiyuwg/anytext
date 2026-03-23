If you want to use HTTP/2 to improve the performance of an HTTPS service that is configured with a Global Accelerator (GA) instance, you can configure HTTP/2 for the GA instance. After you enable HTTP/2, the HTTPS service can benefit from the advantages of HTTP/2 to greatly improve service performance, reduce network latency and overheads, and improve access experience.

## What is HTTP/2

HTTP/2 is also known as HTTP/2.0. Compared with HTTP/1.1, HTTP/2 supports multiplexing, header compression, request prioritization, and server push. These features resolve specific issues in HTTP/1.1. HTTP/2 provides improved performance and is compatible with HTTP/1.1 semantics. HTTP/2 is supported by major browsers such as Google Chrome, Microsoft Edge, Safari, and Mozilla Firefox.

Advantages of HTTP/2:

-   Binary encoding: Unlike the newline delimited plaintext HTTP/1.x protocol, all HTTP/2 communication is split into smaller messages and frames, each of which is encoded in binary format. The binary encoding mechanism makes HTTP/2 more extensible. For example, frames are introduced to transmit data and instructions.
    
-   Multiplexing: HTTP/1.x requires sprites and multiple domain names to improve performance because browsers limit the number of requests to the same domain name. If a large number of resources on a page are requested by clients, head-of-line blocking (HOL blocking) may occur. If the number of requests reaches the upper limit, the requests must wait in a queue because only one request can be delivered at a time per connection. HTTP/2 is the new framing layer, at which bidirectional streams (requests and responses) can be transmitted over the same TCP connection. Each stream has a unique identifier and headers based on which the stream is encapsulated between the client and server. This mechanism eliminates HOL blocking and improves transmission performance.
    
-   Header compression: Each HTTP message carries a large number of headers that describe the transferred resource and properties. To reduce the overhead, HTTP/2 uses HPACK compression. HTTP/2 requires both the client and server to maintain and update an indexed list of header fields. This list is used as a reference to encode previously transmitted values by transferring index values. This improves the data transmission efficiency and performance.
    

## **HTTP/2 connection negotiation**

During the negotiation process of an HTTPS connection, a TLS connection must be established between the client and server before application data can be transmitted. HTTP/2 uses the Application-Layer Protocol Negotiation (ALPN) mechanism to allow the client and server to negotiate on which protocol version to use.

After you enable HTTP/2 for a Global Accelerator instance, the Global Accelerator instance specifies h2 as the protocol version in the ALPN fields of the ClientHello message sent by the client. In addition, the GA instance ignores the protocol version in the ALPN fields of the ServerHello message returned by the server and forcefully uses HTTP/2 to connect to backend services.

## **Examples**

The following scenario is an example. An enterprise headquartered in the US (Silicon Valley) region deploys an HTTPS website on an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC). Most users of the application access the application from the China (Hong Kong) region. The enterprise has purchased a Global Accelerator instance to address network issues, such as network latency, network jitter, and packet loss, that may occur due to the unstable cross-border network.

To further improve the website performance and optimize access to the website, the enterprise decides to configure HTTP/2 listeners for the GA instance.

If the backend service of the Global Accelerator instance uses HTTPS, HTTP/1.1 is used to connect to backend services. In this case, the enterprise needs to modify the configurations of the Global Accelerator instance to use HTTP/2 to connect to backend services. This way, the enterprise can benefit from the advantages of HTTP/2 in performance optimization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3571795671/CAEQUBiBgIDX0ryw2RkiIDNjMzFmYTgwNTU5NTQ4ZDdiMTM1YzVmNjUyMjhlNmI13963382_20230830144006.372.svg)

## **Limits**

When you configure HTTP/2 for a GA instance, the following limits apply:

-   By default, the ****protocol version**** selection feature is disabled. To use this feature, contact your account manager.
    
-   The WebSocket protocol is not supported.
    
-   The Server Push feature in the HTTP/2 protocol is not supported.
    
-   gRPC requests based on HTTP/2 cannot be accelerated.
    

## **Prerequisites**

-   A server certificate is purchased or uploaded in the Certificate Management Service console. For more information, see [Purchase an official certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Upload, sync, and share SSL certificates](/help/en/ssl-certificate/upload-an-ssl-certificate).
    
-   The certificate is uploaded to the backend servers. For more information, see [Use Cloud Assistant to upload a file to ECS instances](/help/en/ecs/user-guide/upload-files-to-ecs-instances#topic-1950448).
    
-   An HTTPS service that uses port 443 is deployed and HTTP/2 is enabled.
    
    Make sure that the security groups to which the backend servers belong allow access to TCP port 443. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule).
    
    Sample code for deploying an HTTPS NGINX service that uses port 443 on an ECS instance and enabling HTTP/2:
    
    1.  Run the following command to install NGINX and deploy a test application:
        
        ```
        yum install -y nginx
        cd /usr/share/nginx/html/
        echo "Hello World !  This is ECS." > index.html
        ```
        
    2.  Run the following command to create a certificate and a directory for storing the private key:
        
        ```
        mkdir -p /etc/pki/nginx/private/
        ```
        
    3.  Run the following command to open the NGINX configuration file named `nginx.conf`. Modify the protocol settings. Then, save the changes and exit.
        
        ```
        vim /etc/nginx/nginx.conf
        ```
        
        Configuration details:
        
        ```
        # For more information on configuration, see:
        #   * Official English Documentation: http://nginx.org/en/docs/
        #   * Official Russian Documentation: http://nginx.org/ru/docs/
        
        user nginx;
        worker_processes auto;
        error_log /var/log/nginx/error.log;
        pid /run/nginx.pid;
        
        
        events {
            worker_connections 1024;
        }
        
        http {
            log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                              '$status $body_bytes_sent "$http_referer" '
                              '"$http_user_agent" "$http_x_forwarded_for" "$server_protocol"';
            access_log  /var/log/nginx/access.log  main;
            sendfile            on;
            tcp_nopush          on;
            tcp_nodelay         on;
            keepalive_timeout   65;
            types_hash_max_size 4096;
        
            include             /etc/nginx/mime.types;
            default_type        application/octet-stream;
            server {
                # Enable HTTP/2.
                listen       443 ssl http2;
                listen       [::]:443 ssl http2;
                server_name  _;
                root         /usr/share/nginx/html;
        
                # Specify the path of the certificate file.
                ssl_certificate "/etc/pki/nginx/<cert-file-name>.pem";
                # Specify the path of the private key.
                ssl_certificate_key "/etc/pki/nginx/private/<cert-file-name>.key";
                ssl_session_cache shared:SSL:1m;
                ssl_session_timeout  10m;
                ssl_ciphers PROFILE=SYSTEM;
                ssl_prefer_server_ciphers on;
        
        
                error_page 404 /404.html;
                    location = /40x.html {
                }
        
                error_page 500 502 503 504 /50x.html;
                    location = /50x.html {
                }
            }
        
        }
        ```
        
    4.  Run the following command to restart the NGINX service:
        
        ```
        systemctl restart nginx.service
        ```
        
    
-   A Global Accelerator instance is created. The ECS instance on which the NGINX service is deployed is specified as an endpoint of the GA instance. The backend service protocol is set to HTTPS. For more information, see [Create and manage Standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances).
    
-   The domain name associated with the certificate is mapped to the CNAME that is allocated by Global Accelerator. For more information, see [Add a CNAME record for a domain name](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name).
    

## **Configure HTTP/2**

This section describes only the key parameters. For more information about other endpoint group parameters, see [Add and manage endpoint groups for intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance and click **Modify Listener** in the **Actions** column.
    
3.  On the **Listeners** tab, find the listener that you want to manage and click **Edit Endpoint Group** in the **Actions** column.
    
4.  In the **Configure Listener & Protocol** step, click **Next**.
    
5.  In the **Configure Endpoint Group** step, select **HTTP/2** for **Protocol Version** and click **Next**.
    
    ![选择HTTP2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4569094271/p827727.png)
    
6.  In the **Confirm** step, check the configurations and click **Submit**.
    

## **Verification**

Before and after you set the protocol version to HTTP/2 in the endpoint group configurations, you can perform the following steps to check whether HTTP/2 takes effect:

1.  Open a browser on a client in the China (Hong Kong) region and type `https://<Accelerated domain name>`. Then, press Enter to check whether the backend service can be accessed.
    
2.  Log on to the backend server in the US (Silicon Valley) region. Open the CLI and run the following command to view the record of the most recent visit.
    
    You can view the protocol version used to send the request to the backend server in the details of the record.
    
    ```
    tail -n 1 /var/log/nginx/access.log
    ```
    
    The following figure shows the record returned before the protocol version is set to HTTP/2.![默认HTTP1.1回源.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4569094271/p827383.png)The following figure shows the record returned after the protocol version is set to HTTP/2.
    
    ![HTTP2回源.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4569094271/p827416.png)
    

## **References**

## Tutorials

-   For more information about how to configure endpoint groups, see [Add and manage endpoint groups for intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners).
    
-   To upgrade from HTTP to HTTP/3 to improve service quality and system performance, you can set the maximum HTTP version used by clients to **HTTP/3**. For more information, see Enable HTTP/3 for GA.
    

## API references

-   [CreateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-createendpointgroup): creates an endpoint group. You can use `EndpointProtocolVersion` to specify the HTTP version used to connect to backend services.
    
-   [UpdateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-updateendpointgroup): modifies an endpoint group. You can use `EndpointProtocolVersion` to specify the HTTP version used to connect to backend services.
    
-   [DeleteEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-deleteendpointgroup): deletes an endpoint group.
