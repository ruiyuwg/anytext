Layer 4 listeners of Network Load Balancer (NLB) can work with backend servers to preserve client IP addresses. In most cases, if client IP preservation is enabled for a backend server, the backend server can obtain client IP addresses. If IPv6 clients access IPv4 services, the NLB instance is configured with listeners that use SSL over TCP, and the backend server of the NLB instance is specified by IP address, the backend server cannot obtain client IP addresses unless the backend server has the Proxy protocol enabled.

## How NLB preserves client IP addresses

![获取客户端真实IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6756972761/p524057.png)

### **Enable the client IP preservation feature**

If you turn on **Client IP Preservation** when you create a server group for an NLB instance, the backend servers can obtain source IP addresses, which are the client IP addresses.

In some scenarios, this feature does not take effect. You need to enable the Proxy protocol to enable the backend servers to obtain client IP addresses. For more information, see [Enable the Proxy protocol](#f419735104fng).

### **Enable the Proxy protocol**

The Proxy protocol is an Internet protocol which passes original connection information between proxy servers and backend servers.

In most cases, the request header that carries source client IP addresses is overwritten after requests are forwarded from proxy servers to backend servers. The source client IP address and port are replaced by the IP address and port of the proxy server. In this case, the backend servers cannot obtain the original connection information.

The Proxy protocol allows proxy servers to encapsulate original connection information in a request header, which is passed to backend servers. The backend servers can obtain the original connection information by parsing the request header encapsulated by the Proxy protocol. The original connection information includes the source IP address, source port, and transmission protocol.

The Proxy protocol preserves original connection information for backend servers to support fine-grained logging, access control, and traffic monitoring.

**Important**

-   The Proxy protocol takes effect only if it is enabled on both the proxy server and backend server. If the backend server cannot parse Proxy protocol headers but the Proxy protocol is enabled, parsing errors may arise on the backend server and compromise service availability.
    
-   NLB allows listeners to use the Proxy protocol to preserve original connection information, including the source IP address, destination IP address, source port, and destination, and insert the connection information into a TCP or UDP header without overwriting the original data.
    
-   NLB supports only Proxy protocol v2. Proxy protocol v2 supports multiple transmission protocols, such as TCP and UDP. For more information, see [The PROXY protocol](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).
    

The following scenarios require NLB and backend servers to enable the Proxy protocol so that client IP addresses can be preserved:

-   **IPv6 clients access IPv4 services deployed on backend servers.**
    
-   **The NLB instance is configured with listeners that use SSL over TCP**. Listeners that use SSL over TCP cannot be associated with server groups that have client IP preservation enabled.
    
-   **The backend servers of the NLB instance are specified by IP address**. This type of backend server does not support client IP preservation.
    

## **Procedure**

## **Enable the client IP preservation feature**

### **Prerequisites**

-   An NLB server group is created, and backend servers are added to the server group. In this example, a server group of the server type is created. The backend protocol is TCP, Elastic Compute Service (ECS) instances are used as backend servers, and port 80 is used by the backend applications. For more information, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#task-2223842).
    

-   An NLB instance is created, and a listener is created for the NLB instance. A TCP listener that uses port 80 is used in this example. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922) and [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener).
    

### **Step 1: Check whether the server group has client IP preservation enabled**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Server Groups** page, click the ID of the server group that you want to manage.
    
4.  On the details page of the server group, check whether the status of **Client IP Preservation** is **Enabled**. If the status is **Disabled**, click **Modify Basic Information** to enable the feature.
    

### **Step 2: Check whether the backend servers can preserve client IP addresses**

If NGINX applications are deployed on the backend servers, you can check the NGINX log to determine whether the backend servers can preserve client IP addresses.

The following code block shows the default configurations of fields in the NGINX log.

```
http {
  # Default configurations
  log_format  main  '$remote_addr- $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
	#...
}
```

The default path of the NGINX log is `/var/log/nginx/access.log`.

The first IP address in each log entry is a client IP address.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7866943071/p744381.png)

## Enable the Proxy protocol

### **Prerequisites**

-   An NLB server group is created, and backend servers are added to the server group. In this example, a server group of the server type is created. The backend protocol is TCP, ECS instances are used as backend servers, and port 80 is used by the backend applications. For more information, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#task-2223842).
    

-   An NLB instance is created, and a listener is created for the NLB instance. A TCP listener that uses port 80 is used in this example. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922).
    
    **Note**
    
    -   Before you enable the Proxy protocol, make sure that your backend servers support Proxy protocol v2.
        
    -   If multiple listeners are associated with the same backend server group, the Proxy protocol must be enabled on all the listeners.
        
    -   NGINX Plus R16 and later versions and open source NGINX 1.13.11 and later versions support Proxy protocol v2.
        
    

### **Step 1: Enable the Proxy protocol for listeners**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  On the instance details page, click the **Listener** tab, and click the ID of the listener that you want to manage.
    
5.  On the listener details page, check whether the status of **Enable Proxy Protocol** is **Enabled**. If the Proxy protocol is disabled, click **Modify Listener** to enable the Proxy protocol.
    

### **Step 2: Enable the Proxy protocol for backend servers**

In this example, the CentOS 7.9 operating system and NGINX 1.20.1 are used. Adjust the configurations based on the environment that you use.

1.  Log on to the backend server and run the `nginx -t` command to query the path of the configuration file. The default path is `/etc/nginx/nginx.conf`, which may vary based on the environment that you use.
    
2.  Modify the configurations of the Proxy protocol and save the modifications. The following code block shows an example.
    
    ```
    http {
      # Set the variable $proxy_protocol_addr, which is used to record client IP addresses.
      log_format  main  '$proxy_protocol_addr - $remote_addr- $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
      # Specify that the listener uses port 80, and add the proxy_protocol.
      server {
        listen 80   proxy_protocol;
        #...
      }
    }
    ```
    
3.  Run the `sudo nginx -s reload` command to reload the NGINX configuration file.
    

### **Step 3: Test whether the backend servers can preserve client IP addresses**

If NGINX applications are deployed on the backend servers, you can check the NGINX log to determine whether the backend servers can preserve client IP addresses.

The default path of the NGINX log is `/var/log/nginx/access.log`.

In each log entry, the IP address in the variable `$proxy_protocol_addr` is a client IP address.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7866943071/p744184.png)

### **Sample packets transmitted over Proxy protocol v2**

The backend servers that you use are different from those in the preceding examples, you can refer to the manual of your server provider and [The PROXY protocol](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) to customize parsing configurations based on the packet structure defined by Proxy protocol v2.

-   The following example shows how an IPv4 client IP address is preserved in the Proxy protocol v2 header in the binary format.![IPv4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9742871361/p290981.png)
    
-   The following example shows how an IPv6 client IP address is preserved in the Proxy protocol v2 header in the binary format.![IPv6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9742871361/p290982.png)
    

## **FAQ**

### **How does CLB preserve client IP addresses when it is deployed in a Container Service for Kubernetes (ACK) cluster?**

CLB can preserve client IP addresses when it is deployed in an ACK cluster. Client IP preservation may be implemented in different ways. For more information, see [How do I configure the pods to obtain the real IP addresses of clients?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management#p-a72-uhm-v0j)

## **References**

Application Load Balancer (ALB), Classic Load Balancer (CLB), and NLB use different methods to preserve client IP addresses.

-   Layer 4 listeners of CLB can directly preserve client IP addresses, or use the Proxy protocol to preserve client IP addresses. For more information, see [Enable Layer 4 listeners to preserve client IP addresses](/help/en/slb/classic-load-balancer/use-cases/enable-proxy-protocol-for-a-layer-4-listener-to-retrieve-client-ip-addresses).
    
-   Layer 7 listeners of CLB use the X-Forwarded-For header to preserve client IP addresses. For more information, see [Enable Layer 7 listeners to preserve client IP addresses](/help/en/slb/classic-load-balancer/use-cases/preserve-client-ip-addresses-when-layer-7-listeners-are-used).
    
-   ALB uses the X-Forwarded-For header to preserve client IP addresses. For more information, see [Enable ALB to preserve client IP addresses and pass them to backend servers](/help/en/slb/application-load-balancer/use-cases/preserve-client-ip-addresses).
