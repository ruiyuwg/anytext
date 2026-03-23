Application Load Balancer (ALB) uses health checks to continuously monitor the status of backend servers. ALB automatically removes unhealthy servers from service to ensure business availability.

You can configure health checks independently for each server group. Health checks are enabled by default for all server groups.

-   After you enable health checks, ALB continuously monitors all backend servers in the server group and routes requests only to healthy servers. A backend server must pass health checks for a specified number of consecutive times—the healthy threshold—before it is declared healthy. This prevents false positives caused by network jitter.
    
-   If a backend server fails health checks, ALB automatically routes new requests to other healthy backend servers.
    
-   When the server recovers, ALB automatically adds it back to the load balancing service.
    
-   Health checks use short-lived connections. The connection closes after the health check completes.
    
-   If all backend servers in a server group fail health checks, ALB still attempts to route requests to them based on the scheduling algorithm. This minimizes service disruption.
    

**Note**

-   Backend servers with a weight of 0 do not participate in health checks.
    
-   ALB communicates with backend servers and performs health checks using specific IP addresses. Ensure your backend servers do not block these IP addresses—including with iptables rules or third-party security software:
    
    -   An [upgraded ALB instance](/help/en/slb/product-overview/alb) uses private IP addresses from its vSwitch CIDR block (Local IP) to communicate with backend servers. You can view these Local IPs on the instance details page.
        
    -   A non-upgraded ALB instance uses IP addresses in the 100.64.0.0/10 CIDR block to communicate with backend servers.
        

## Create a health check

## Console

1.  Go to the [**Health Check**](https://slb.console.alibabacloud.com/alb/us-west-1/health-check-templates) page in the ALB console.
    
2.  Select the target region in the top navigation bar. Then click **Create Health Check**. Configure the following parameters and click **Create**.
    
    -   **Health Check Name**: Enter a name for the health check.
        
    -   **Protocol**: Select a health check protocol.
        
        -   **HTTP**: ALB sends HEAD or GET requests to verify that the backend server application is healthy.
            
        -   **HTTPS**: ALB sends HEAD or GET requests to verify that the backend server application is healthy. Supported for Standard and WAF-enhanced ALB instances. Not supported for Basic ALB instances.
            
        -   **TCP**: ALB sends SYN handshake packets to verify that the backend server port is available.
            
        -   **gRPC**: ALB sends POST or GET requests to verify that the backend server application is healthy.
            
    -   **Health Check Method**: Configurable only when the health check protocol is HTTP, HTTPS, or gRPC.
        
        -   **HEAD** (default for HTTP/HTTPS): Ensure your backend servers support HEAD requests. If they do not, use GET instead.
            
        -   **POST** (default for gRPC): Ensure your backend servers support POST requests. If they do not, use GET instead.
            
        -   **GET**: Responses larger than 8 KB are truncated, but this does not affect the health check result.
            
    -   **HTTP Version**: Choose **HTTP1.0** or **HTTP1.1**. Configurable only when the health check protocol is HTTP or HTTPS.
        
    -   **Port**: The port used for health checks. Leave blank to use the backend server’s port. Valid values: 1 to 65535. Enter one port number only.
        
    -   **Path**: The path for health checks, such as `/health`. We recommend using a static page. If left blank, ALB checks the root path (`/`). Configurable only when the health check protocol is HTTP, HTTPS, or gRPC.
        
    -   **Domain Name**: The domain name used for health checks. By default, ALB uses the backend server’s private IP address. Configurable only when the health check protocol is HTTP, HTTPS, or gRPC.
        
    -   **Health Check Status Codes**: ALB declares a backend server healthy only if the health check request returns one of the specified status codes. Configurable only when the health check protocol is HTTP, HTTPS, or gRPC.
        
        -   For **HTTP** or **HTTPS**: Choose **http\_2xx**, **http\_3xx**, **http\_4xx**, or **http\_5xx**. Default: **http\_2xx** and **http\_3xx**.
            
        -   For **gRPC**: Valid status codes: 0 to 99. You can specify up to 20 value ranges, separated by commas (,).
            
        
        **Warning**
        
        Including 4XX or 5XX status codes in the health check status code list may prevent unhealthy instances from being removed promptly. We recommend ensuring your backend services return correct 2XX or 3XX status codes.
        
    -   **Health Check Response Timeout**: If the backend server does not return a valid response within this time, the health check fails. Valid values: 1 to 300 seconds. Default: 5 seconds.
        
    -   **Health Check Interval**: The time between two consecutive health checks. Valid values: 1 to 50 seconds. Default: 2 seconds.
        
    -   **Healthy Threshold**: The number of consecutive successful health checks required before declaring a backend server healthy. Valid values: 2 to 10. Default: 3.
        
    -   **Unhealthy Threshold**: The number of consecutive failed health checks required before declaring a backend server unhealthy. Valid values: 2 to 10. Default: 3.
        
    -   **Tags and Resource Group**:
        
        -   **Tag Key** and **Tag Value**: Tag the health check with key-value pairs for easier filtering and management.
            
        -   **Resource Group**: Select the [resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb) for the health check.
            
    

After you create a health check, select it in the **Health Check Settings** section when creating a server group.

> You can also configure health checks when [creating a server group](/help/en/slb/application-load-balancer/user-guide/create-and-manage-a-server-group#section-yjz-1tk-4c8), and select **Save the health check configurations as a template, which can facilitate health check creation and configurations.**

## API

1.  Call [CreateHealthCheckTemplate](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-createhealthchecktemplate) to create a health check template.
    
2.  Call [ApplyHealthCheckTemplateToServerGroup](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-applyhealthchecktemplatetoservergroup) to apply the health check template to a server group.
    

## Modify a health check

**Warning**

-   After health checks are disabled, ALB no longer checks the health status of the backend servers. If a backend server is down, network traffic cannot be automatically switched to healthy backend servers.
    
-   If you specify a longer health check interval, more time is required for ALB to detect unhealthy backend servers.
    

## Console

1.  Go to the [**Health Check**](https://slb.console.alibabacloud.com/alb/us-west-1/health-check-templates) page in the ALB console.
    
2.  Find the target health check and click **Modify** in the **Actions** column.
    
3.  In the **Modify Health Check Settings** dialog box, modify the health check settings and click **Save**.
    

> You can also [edit health checks on the Server Groups page](/help/en/slb/application-load-balancer/user-guide/create-and-manage-a-server-group#section-l18-g6l-nhi).

## API

Call [UpdateHealthCheckTemplateAttribute](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-updatehealthchecktemplateattribute) to update the attributes of a health check template.

## View health check status

If your ALB instance has listeners configured and health checks are enabled for its server groups, view the health check status on the **Listener** tab.

## Console

1.  Go to the [**Instances**](https://slb.console.alibabacloud.com/alb/us-west-1/slbs) page in the ALB console.
    
2.  Find the target ALB instance and click its instance ID.
    
3.  Click the **Listener** tab. In the listener list, view the health check status of backend servers in the **Health Check Status** column.
    

## API

Call [GetListenerHealthStatus](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-getlistenerhealthstatus) to query the health check status of a listener.

## Delete a health check

## Console

1.  Go to the [**Health Check**](https://slb.console.alibabacloud.com/alb/us-west-1/health-check-templates) page in the ALB console.
    
2.  Find the target health check and click **Delete** in the **Actions** column.
    
3.  In the **Delete** dialog box, confirm the message and click **OK**.
    

## API

Call [DeleteHealthCheckTemplates](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-deletehealthchecktemplates) to delete a health check template.

## Going live

-   **Create a dedicated health check endpoint**: Create a dedicated interface—such as `/health`—that always returns HTTP 200. Avoid using business paths, which may return 4XX due to permission verification or missing resources.
    
-   **Fix backend services first when health checks fail**: Troubleshoot and fix backend service issues so that the health check path returns correct 2XX or 3XX status codes. Do not relax the status code criteria.
    
-   **Configure health check parameters appropriately**: Default settings work for most scenarios. If your backend services start slowly, increase the health check interval or unhealthy threshold. If network latency is high, increase the response timeout.
    
-   **Use curl to simulate health checks**: When troubleshooting health check issues, use the following command to simulate ALB’s health check behavior. Replace the method (HEAD/GET), domain name, IP address, port, and path according to your actual configuration:
    
    ```
    curl -Iv -X HEAD --http1.0 -H "Host: your-domain.com" http://backend_ip:port/health_path
    ```
    

## Billing

Health checks incur no additional charges. For ALB billing rules, see [ALB billing information](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules).

## Quota

You can create up to 50 health check templates per region. This quota cannot be increased.

## References

-   [ALB health check FAQ](/help/en/slb/application-load-balancer/support/faq-about-alb#2d1c6a0d7126r)
    
-   [Troubleshoot ALB health check issues](/help/en/slb/application-load-balancer/support/how-do-i-troubleshoot-health-check-errors#title-zdx-uh1-g51)
