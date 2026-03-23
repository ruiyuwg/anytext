Global Accelerator (GA) uses health checks to determine the operational status of endpoints. The health check mechanism improves the reliability and availability of your services and prevents abnormal endpoints from affecting your services.

## Introduction to health checks

You can enable health checks for endpoint groups of a GA instance. After health checks are enabled, when an endpoint fails a health check, GA automatically distributes new requests to other endpoints that pass health checks. When the abnormal endpoint returns to normal, GA automatically restores the endpoint to service.

GA supports health checks based on TCP, HTTP, and HTTPS protocols.

### TCP health checks

TCP health checks are based on network-layer detection. They send SYN handshake messages to check whether the server port is active. The following figure shows the health check process:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004545671/CAEQTxiBgID3gamT2BkiIDJhZjYwZGE0NGZmYjRhMTVhN2ZiZjMwOTJmNDcyZTgx3963382_20230830144006.372.svg)

**Number**

**Description**

①

The GA instance sends a TCP SYN packet to the IP address and health check port of the endpoint based on the health check configuration of the listener.

②

The health check result is determined based on whether the endpoint returns a SYN+ACK packet.

-   If the GA instance receives a SYN+ACK packet from the endpoint within the Response Timeout Period (3 seconds), the endpoint is considered to be running normally and the health check is successful.
    
-   If the GA instance receives an RST packet from the endpoint within the Response Timeout Period (3 seconds), the endpoint is considered to be not responding to the health check port and the health check fails.
    
-   If the GA instance does not receive a SYN+ACK packet from the endpoint after the Response Timeout Period (3 seconds) expires, the network is considered to be unable to reach the endpoint, the endpoint cannot respond, and the health check fails.
    

**Note**

The Response Timeout Period is the maximum time to wait for a response from a health check. If the endpoint does not respond correctly within the Response Timeout Period, the health check fails. The default value is 3 seconds and cannot be modified.

③

After the GA instance receives a SYN+ACK packet from the endpoint, it sends an ACK packet to the endpoint to confirm the connection.

### HTTP and HTTPS health checks

HTTP and HTTPS health checks are based on GET requests. They send GET requests to simulate browser access behavior to check whether the server application of the endpoint is healthy. The following figure shows the health check process:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004545671/CAEQTxiBgMDLxauT2BkiIDA4MzEwYzM0ODliYzQyMjQ4OWE4MTQ0YjU2ZjBlYzNi4518238_20240705142713.586.svg)

**Number**

**Description**

①

The GA instance sends an HTTP GET request to the IP address, health check port, and Health Check Path of the endpoint based on the health check configuration of the listener.

②

After receiving the request, the endpoint determines whether to return an HTTP status code based on the operational status of the corresponding service.

-   If the GA instance receives status code `200` from the endpoint within the Response Timeout Period (3 seconds), the endpoint is considered to be running normally and the health check is successful.
    
-   If the GA instance receives a status code other than `200` from the endpoint within the Response Timeout Period (3 seconds), the endpoint is considered abnormal and the health check fails.
    
-   If the GA instance does not receive a status code from the endpoint after the Response Timeout Period (3 seconds) expires, the network is considered to be unable to reach the endpoint, the endpoint cannot respond, and the health check fails.
    

**Note**

The Response Timeout Period is the maximum time to wait for a response from a health check. If the endpoint does not respond correctly within the Response Timeout Period, the health check fails. The default value is 3 seconds and cannot be modified.

### Health check time window

The health check mechanism effectively improves the availability of business services. However, to avoid the impact of frequent health check failures on system availability, the health check status changes only after multiple consecutive successful or failed health checks within the health check time window. The health check time window is determined by the following three factors:

-   Health check interval: The interval between two consecutive health checks.
    
-   Response Timeout Period: The maximum time to wait for a response from the backend service.
    
-   Healthy Threshold: The number of consecutive health checks required for a health check status change.
    

The health check time window is calculated as follows:

-   Health check failure time window = Response Timeout Period × Healthy Threshold + Health check interval × (Healthy Threshold - 1)
    
    For example, as shown in the following figure, if the Response Timeout Period is 3 seconds, the health check interval is 2 seconds, and the Healthy Threshold is 3, the health check failure time window = 3 × 3 + 2 × (3 - 1) = 13 seconds.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004545671/CAEQUBiBgMCgmIS12BkiIGQ3NmJhMWQ2NGFlYjQ5YjY4NzY2ZTkxMmQ3MDkxMzVl4518238_20240715152644.242.svg)
    
-   Health check success time window = (Health check success response time × Healthy Threshold) + Health check interval × (Healthy Threshold - 1)
    
    For example, as shown in the following figure, if the health check success response time is 1 second, the health check interval is 2 seconds, and the Healthy Threshold is 3, the health check success time window = 1 × 3 + 2 × (3 - 1) = 7 seconds.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004545671/CAEQTxiBgICr_7CT2BkiIDIzZTEzZGU1NjVhYjQyMzViMjkzMTE4ZmRiM2MxZjUw4518238_20240715152644.242.svg)
    

### Limits

For UDP listeners, endpoints must have TCP, HTTP, or HTTPS services to support health checks. Otherwise, they will be marked as abnormal.

## Enable health checks

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target GA instance and click **Configure Listener** in the **Actions** column.
    
3.  On the **Listeners** tab, find the target listener and click **Mod Lsnr** in the **Actions** column.
    
4.  On the **Edit Listener** page, click **Next**.
    
5.  In the **Health Check** section of the **Configure Endpoint Group** wizard page, turn on **Health Check** and configure the health check based on the following information.
    
    **Configuration**
    
    **Description**
    
    **Health Check Protocol**
    
    Select the protocol for health checks. TCP, HTTP, and HTTPS protocols are supported.
    
    -   TCP health checks are based on network-layer detection. They send SYN handshake messages to check whether the server port is active.
        
    -   HTTP and HTTPS health checks are based on GET requests. They send GET requests to simulate browser access behavior to check whether the server application of the endpoint is healthy.
        
    
    **Port**
    
    The port that the health check service uses to access the endpoint.
    
    Valid values: 1 to 65535.
    
    **Health Check Domain Name**
    
    Configure the domain name for health checks. This feature is available only for pay-as-you-go GA instances.
    
    -   **Endpoint IP Address** (default): Uses the IP address of the endpoint as the domain name for health checks.
        
    -   **Custom Domain Name**: Enter a specified domain name.
        
    
    **Health Check Interval**
    
    The interval between two consecutive health checks. Unit: seconds.
    
    Valid values: 1 to 50. Default value: 2.
    
    **URI**
    
    Specify the path for health checks. This parameter is available only when **Health Check Protocol** is set to HTTP or HTTPS.
    
    The path must start with a forward slash (/). The path can be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and the extended characters `_;~!()*[]@$^:',+`.
    
    By default, the GA system sends GET requests to the default home page of the backend server application. If the page that you use for health checks is not the default home page of the application server, you must specify the path for health checks.
    
    **Healthy Threshold**
    
    The number of consecutive health checks required for a health check status change. This includes the number of consecutive failed health checks to change the status from success to failure, or the number of consecutive successful health checks to change the status from failure to success.
    
    Valid values: 2 to 10. Default value: 3.
    
6.  Click **Next**. On the **Configuration Review** wizard page, confirm the health check information and click **Submit**.
    

## More operations

**Operation**

**Description**

Modify health check configuration

1.  On the **Listeners** tab, find the target listener and click **Mod Epg** in the **Actions** column.
    
2.  In the **Health Check** section of the **Configure Endpoint Group** wizard page, you can modify the health check protocol, port, health check interval, and other configuration items. Then, click **Next**.
    
    For more information about the configuration items, see [Enable health checks](#section-hg5-3ei-k0v).
    
3.  On the **Configuration Review** wizard page, click **Submit**.
    

Disable health checks

1.  On the **Listeners** tab, find the target listener and click **Mod Epg** in the **Actions** column.
    
2.  In the **Health Check** section of the **Configure Endpoint Group** wizard page, turn off **Health Check** and click **Next**.
    
3.  On the **Configuration Review** wizard page, click **Submit**.
    

## References

-   [CreateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-createendpointgroup): Creates an endpoint group (health checks can be configured).
    
-   [UpdateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-updateendpointgroup): Modifies the configuration of an endpoint group (health checks can be configured).
    
-   [GetHealthStatus](/help/en/ga/developer-reference/api-ga-2019-11-20-gethealthstatus): Queries the health check information of endpoints.
