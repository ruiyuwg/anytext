If your application cannot call API operations due to limited network environments, such as internal network or firewall isolation, you can use a proxy server to enable access to external networks for your application. Alibaba Cloud SDK provides complete proxy configurations and can flexibly adapt to HTTP and HTTPS protocols. After you configure the proxy address, port, and authentication parameters of the proxy server, you can enable the proxy to forward API requests. This topic describes how to configure a Tengine proxy and use the Tengine SDK to call API operations.

## **Sample scenario**

Assume that your application is deployed in your internal network, and you need to deploy a proxy server to allow the application to access the Internet. In the following example, Elastic Compute Service (ECS) instances that are deployed in virtual private clouds (VPCs) are used.

-   ECS Instance A: The application is deployed in the VPC and has access to resources in the internal network, but does not have Internet access. The private IP address is 10.0.0.115.
    
-   ECS Instance B: functions as the proxy server that provides access to the Internet. ECS Instance B is in the same VPC as ECS Instance A. The private IP address is 10.0.0.112.
    
    **Note**
    
    If Instance A and Instance B are in different VPCs, you can create [VPC peering connections](/help/en/vpc/create-and-manage-vpc-peering-connection) or [Enterprise Edition transit routers](/help/en/cen/use-cases/use-an-enterprise-edition-transit-router-to-enable-and-secure-network-communication#undefined) to establish VPC-to-VPC communication.
    

## **Deploy a proxy server**

In this example, a Tengine server is used as the proxy server and is deployed on ECS Instance B.

### **Download and Install Tengine**

1.  Download and decompress the package.
    
    ```
    wget https://tengine.taobao.org/download/tengine-3.1.0.tar.gz
    tar zxvf tengine-3.1.0.tar.gz
    ```
    
2.  Update the dependency library.
    
    ## Alibaba Cloud Linux/CentOS
    
    ```
    sudo yum update -y
    ```
    
    ## Ubuntu/Debian
    
    ```
    sudo apt-get update 
    sudo apt-get upgrade -y
    ```
    
3.  Install the dependency.
    
    ## Alibaba Cloud Linux/CentOS
    
    ```
    sudo yum install pcre pcre-devel openssl openssl-devel zlib-devel -y
    sudo yum groupinstall "Development Tools" -y
    ```
    
    ## Ubuntu/Debian
    
    ```
    sudo apt-get install libpcre3 libpcre3-dev zlib1g-dev openssl libssl-dev build-essential -y 
    ```
    
4.  Compile the file and install Tengine.
    
    ```
    cd tengine-3.1.0
    ./configure --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module --add-module=./modules/ngx_http_proxy_connect_module
    make && make install
    ```
    
5.  Start the Tengine process.
    
    Run the following command to query the location of the Tengine executable file, for example, `/root/tengine-3.1.0/objs/nginx`:
    
    ```
    find / -name nginx 2>/dev/null | grep tengine
    ```
    
    Run the Tengine executable file to start Tengine:
    
    ```
    sudo /root/tengine-3.1.0/objs/nginx
    ```
    
6.  Check whether Tengine is started.
    
    ```
    # Check whether the Tengine process exists.
    ps aux | grep nginx
    ```
    

### **Configure an HTTP or HTTPS proxy**

1.  Run the following command to modify the Tengine configuration file:
    
    ```
    vim /usr/local/nginx/conf/nginx.conf
    ```
    
    Add the following content to the `http` module in the configuration file:
    
    **Warning**
    
    The following sample code is for reference only. Adjust the configurations based on the actual scenario.
    
    ```
        # HTTPS proxy
        server {
            listen 8089;
            access_log  /var/log/host.access.log;
            access_log  "pipe:rollback /var/log/host.access_log interval=1d baknum=7 maxsize=2G";
            # dns resolver used by forward proxying
    	# forward proxy for CONNECT request
            proxy_connect;
            proxy_connect_allow            443 563;
            proxy_connect_connect_timeout  10s;
            proxy_connect_read_timeout     10s;
            proxy_connect_send_timeout     10s;
     
            # forward proxy for non-CONNECT request
            location / {
                proxy_pass $scheme://$http_host$request_uri;
            }
        }
     
        # HTTP proxy
        server {
            listen 8088;
            location / {
                proxy_pass $scheme://$http_host$request_uri;
            }
        }
    ```
    
    Save the file after you add the content.
    
2.  Reload Tengine.
    
    ```
    # Stop Tengine.
    /usr/local/nginx/sbin/nginx -s stop
    # Make the configurations take effect.
    /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
    # Restart Tengine
    /usr/local/nginx/sbin/nginx -s reload
    ```
    

## Use SDKs to call APIs over the proxy server.

Deploy business code on ECS Instance A. The following sample code is for reference only.

```
# pip install alibabacloud_ecs20140526
import os

from alibabacloud_ecs20140526.client import Client as EcsClient
from alibabacloud_ecs20140526.models import DescribeRegionsRequest
from alibabacloud_tea_openapi.models import Config
from alibabacloud_tea_util.models import RuntimeOptions

config = Config(
    access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
    endpoint='ecs-cn-hangzhou.aliyuncs.com',
    protocol='https', # Use the same protocol as the proxy. If you use an HTTP proxy, set the value to http. If you use an HTTPS proxy, set the value to https.
)
ecs_client = EcsClient(config)

runtime_options = RuntimeOptions(
    # http_proxy='http://10.0.0.112:8088', # The IP address and port of the HTTP proxy.
    https_proxy='http://10.0.0.112:8089'  # The IP address and port of the HTTPS proxy.
)
request = DescribeRegionsRequest(
    accept_language='en-US',
)
response = ecs_client.describe_regions_with_options(request, runtime_options)
print(response.body)
```

Expected response:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9619920571/p960870.png)
