Configure a smart routing listener to let your Global Accelerator (GA) instance automatically select the nearest or healthiest endpoint group to forward traffic. Client requests are then sent to the optimal endpoint.

## Prerequisites

-   You have [created a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   To configure an HTTPS listener, you must [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) and [submit a Certificate Signing Request (CSR)](/help/en/ssl-certificate/submit-a-certificate-application#concept-wxz-3xn-yfb).
    
-   If your GA instance uses the subscription billing method, you must purchase and attach a basic bandwidth plan.
    

## Add a smart routing listener

## TCP or UDP listener

1.  Configure the listener and protocol.
    
    1.  Log on to the [Global Accelerator console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the GA instance and click **Modify Listener** in the **Actions** column.
        
    3.  On the **Listeners** tab, click **Add Listener**.
        
        **Note**
        
        If this is the first time you are adding a listener to the Global Accelerator instance, you can skip this step.
        
    4.  On the **Configure Listener & Protocol** page, configure the listener and protocol, and click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Listener Name**
        
        Enter a name for the listener.
        
        **Routing Type**
        
        Select a routing type. In this topic, **Intelligent Routing** is selected.
        
        -   **Intelligent Routing**: Automatically forwards traffic to the nearest or healthiest endpoint group based on latency. This routes client requests to the optimal endpoint.
            
        -   **Custom Routing**: Generates a port mapping table based on the listener port range, the destination endpoint group port range, and the IP addresses of endpoints (vSwitches). This routes traffic to a specific IP address and port in the specified vSwitch. For more information, see [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137).
            
            **Note**
            
            Custom routing listeners are in invitational preview. To use custom routing listeners, submit an application to your account manager. After your application is approved, you can use custom routing listeners.
            
        
        **Protocol**
        
        Select a network transport protocol for the listener. The following protocols are supported:
        
        -   **TCP**
            
            -   A connection-oriented protocol that provides high reliability. A reliable connection must be established before data is sent or received.
                
            -   Supports session persistence based on source IP addresses.
                
            -   The source address is visible at the network layer.
                
            -   Data transmission is slow.
                
        -   **UDP**
            
            -   A connectionless protocol that provides low reliability. It sends packets directly without a three-way handshake and does not provide error recovery or data retransmission.
                
            -   Data transmission is fast.
                
            
            **Warning**
            
            The maximum MTU supported by a UDP listener is 1,452 bytes. When you use a UDP listener, make sure that the MTU of the network interface card (NIC) used for communication between the backend server and GA is greater than 1,452 bytes. Otherwise, packets may be dropped due to their size.
            
        
        **Port Number**
        
        Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
        
        You can specify up to 30 ports for each listener. Separate multiple listener ports with commas (,). For example, you can enter 80,90,8080.
        
        If you want to specify a port range, use a hyphen (-). Example: 80-85.
        
        **Note**
        
        -   TCP, HTTP, and HTTPS listeners must use different ports.
            
        -   UDP listeners and HTTP/3 listeners must use different ports.
            
        
        For more information about the limits, see [Listener ports for smart routing](/help/en/ga/user-guide/overview-2/#2c13383d757v0).
        
        **Advanced Settings**
        
        Optional. Configure **Client Affinity** and **Idle Connection Timeout Period**.
        
        **Client Affinity**
        
        Select whether to enable client affinity:
        
        -   **Source IP**: enables client affinity. When a client accesses a stateful application, all requests from the client are routed to the same endpoint.
            
        -   **Disable**: disables client affinity. Requests from the same client may be routed to different endpoints.
            
        
        **Idle Connection Timeout Period**
        
        Specify the timeout period of an idle connection. If no data is transmitted during the timeout period, GA closes the current connection. When a new request is received, GA establishes a new connection.
        
        The value of this parameter varies based on the listener protocol:
        
        -   Valid values for TCP listeners: 10 to 900. Default value: 900. Unit: seconds.
            
        -   Valid values for UDP listeners: 10 to 20. Default value: 20. Unit: seconds.
            
        
        If your standard GA instance does not support configuring the **Idle Connection Timeout Period** for a smart routing listener, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
2.  Configure endpoints.
    
    Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute traffic. Traffic is distributed to the optimal endpoint within the endpoint group that is associated with the listener.
    
    On the **Configure Endpoint Group** page, configure the endpoint group and endpoints, and then click **Next**.
    
    This topic describes only the basic configurations of endpoint groups and endpoints. For more information about other configurations, such as health checks, see [Add a default endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-1xd). For more information about endpoint groups and endpoints, see [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/#concept-2384659).
    
    **Parameter**
    
    **Description**
    
    **Endpoint Group Name**
    
    Enter a name for the endpoint group.
    
    **Region**
    
    Select the region where the endpoint group is deployed.
    
    **Backend IP Version**
    
    Select the IP protocol that the GA instance uses to communicate with the endpoint service.
    
    -   **IPv4**: Uses only IPv4 addresses to communicate with the endpoint service.
        
    -   **IPv6**: Ues only IPv6 addresses to communicate with the endpoint service.
        
    -   **IPv4/IPv6 (protocol affinity)**: The IP protocol that GA uses matches the protocol of the client request.
        
        -   If the client request uses IPv6, GA uses IPv6 to communicate with the endpoint service.
            
        -   If the client request uses IPv4, GA uses IPv4 to communicate with the endpoint service.
            
    
    **Note**
    
    -   Only standard GA instances that use the pay-as-you-go billing method and have listeners with a smart routing type support the configuration of backend IP protocols. Other types of GA instances do not support this configuration and use IPv4 by default.
        
        The backend IP address protocol feature is in invitational preview. To use this feature, contact your business manager.
        
    -   You cannot configure backend IP protocols if the endpoint group region is an Alibaba Cloud point of presence (POP).
        
        You can call the [ListAvailableBusiRegions](/help/en/ga/developer-reference/api-ga-2019-11-20-listavailablebusiregions#doc-api-Ga-ListAvailableBusiRegions) operation to check whether a region is an Alibaba Cloud POP.
        
    -   You cannot configure OSS as a backend service if the backend IP protocol is set to IPv6 or IPv4/IPv6 (Protocol Affinity).
        
    
    **Endpoint Configuration**
    
    Endpoints are the destination servers that process client requests. Configure endpoints based on the following information:
    
    -   **Backend Service Type**: You can select **ECS**, **ALB**, **NLB**, **CLB**, **OSS**, **ENI**, **Custom Private IP Address**, **Alibaba Cloud Public IP Address**, **Custom Public IP Address**, or **Custom Domain Name**.
        
        **Note**
        
        -   If your standard GA instance does not support backend service types such as **ECS** (VPC type), **ALB**, **NLB**, **CLB** (VPC type), **ENI**, or **Custom Private IP Address**, the instance version may be outdated. To use these features, contact your business manager to request an instance upgrade.
            
        -   If you want to use GA to accelerate an Alibaba Cloud backend service type that is not currently supported or an on-premises IDC service, and you want GA to connect to the backend service over a private network, you can add an endpoint of the **Custom Private IP Address** type.
            
            -   Custom private IP addresses include but are not limited to the following standard private CIDR blocks:
                
                -   10.0.0.0/8
                    
                -   100.64.0.0/10
                    
                -   172.16.0.0/12
                    
                -   192.168.0.0/16
                    
            -   To ensure high availability, select two or more vSwitches for **Backend Service**.
                
            -   If you want to use public IP addresses as private IP addresses, these addresses are treated as private IP addresses when you use the custom private IP feature. If necessary, configure the required routes in the VPC.
                
        -   UDP listeners do not support **ALB** backend services.
            
        -   To ensure uninterrupted connectivity between the GA instance and backend services, you must configure access policies based on the network connectivity type of the backend service:
            
            -   Public connection: The access policy of the backend service, such as a security group or firewall, must allow traffic from the GA egress public IP address.
                
            -   Private connection: The access policy of the backend service, such as a security group or access control rule, must allow traffic from the vSwitch CIDR block where the backend service resides. You must also ensure that at least eight private IP addresses are available in the vSwitch CIDR block.
                
        -   The [egress public IP address of the endpoints](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-3xd) for each GA instance is unique and not shared with users of other GA instances.
            
        -   If you select ECS, ALB, NLB, CLB, OSS, ENI, or Custom Private IP as the backend service type and a service-linked role does not exist, the system automatically creates the corresponding service-linked role. For more information, see [AliyunServiceRoleForGaVpcEndpoint](/help/en/ga/security-and-compliance/aliyunserviceroleforgavpcendpoint-1#concept-1936239), [AliyunServiceRoleForGaAlb](/help/en/ga/security-and-compliance/aliyunserviceroleforgaalb#concept-1936239), [AliyunServiceRoleForGaOss](/help/en/ga/security-and-compliance/aliyunserviceroleforgaoss#concept-1936239), and [AliyunServiceRoleForGaNlb](/help/en/ga/security-and-compliance/aliyunserviceroleforganlb).
            
        
    -   **Backend Service**: Enter the IP address, domain name, or instance ID of the backend server that provides services.
        
    -   **Weight**: Enter a weight for the endpoint. The valid values are 0 to 255. Global Accelerator routes traffic to endpoints based on the weights that you configure.
        
        **Warning**
        
        If you set the weight of an endpoint to 0, Global Accelerator stops distributing network traffic to the endpoint. Proceed with caution.
        
    
    You can click **\+ Add Endpoint** to add multiple endpoints. You can add up to four endpoints. To add more endpoints, increase the quota in Quota Center. For more information, see [Manage Global Accelerator quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).
    
    **Preserve Client IP**
    
    Select whether to preserve the source IP addresses of clients.
    
    If you enable this feature, backend servers can retrieve the source IP addresses of clients. For more information, see [Preserve client source IP](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
    
    **Port Mapping**
    
    If the listener port is different from the port that the endpoint uses to provide services, you need to enter a port mapping.
    
    -   **Listener Port**: The entered port must be within the port range configured for the current listener.
        
    -   **Endpoint Port**: Enter the port over which the endpoint provides services. Valid values: **1 To 65535**.
        
    
    If the listener port is the same as the port that the endpoint uses to provide services, you do not need to enter a port mapping. Global Accelerator automatically sends access requests to the listener port of the endpoint.
    
    For TCP and UDP listeners, you can click **Add Port Mapping** to add multiple port mappings. The ****Listener Port**** in each port mapping must be unique. You can add up to 30 port mappings.
    
    **Note**
    
    -   If your standard GA instance does not support configuring **Port Mapping** for TCP or UDP listeners, the instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
    -   For TCP listeners:
        
        -   You cannot configure port mappings for virtual endpoint groups.
            
        -   If a virtual endpoint group already exists for the listener, you cannot configure port mappings for the default endpoint group.
            
        -   If a port mapping is already configured for the default endpoint group, you cannot add a virtual endpoint group.
            
    -   After you configure a port mapping, the following limits apply to subsequent listener changes:
        
        -   Listener protocol: You can switch only between the HTTP and HTTPS protocols. Switching between other protocols is not supported.
            
        -   Listener port: The modified listener port range must include all listener ports that have existing port mappings.
            
            For example, if the listener port range is 80-82 and is mapped to endpoint ports 100-102, the subsequently modified listener port range must include 80-82. You can change it to 80-90, but you cannot narrow it to 80-81.
            
    -   For more information about how to use port mappings, see [Use GA port mappings to improve application flexibility and security](/help/en/ga/use-cases/use-ga-port-mapping-to-improve-application-flexibility-and-security).
        
    
    **Traffic Distribution Ratio**
    
    Configure the traffic ratio to different endpoint groups.
    
    The valid values are 0 to 100.
    
    **Note**
    
    -   For the subscription billing method, only TCP and UDP listeners support traffic distribution. For the pay-as-you-go billing method, all listener types support traffic distribution.
        
    -   A value of 0 indicates that this endpoint group is ignored and no access traffic is forwarded to it. A value of 100 indicates that all access traffic is forwarded to this endpoint group.
        
    -   For more information about how to use traffic dialing, see [Principles and scenarios of traffic dialing among multiple endpoint groups](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#task-2181288).
        
    
    **Cross-border Acceleration Settings**
    
    Read the **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**
    
    This step is required only if cross-border acceleration is not enabled for your Global Accelerator instance and your service configuration involves cross-border data transfer between the Chinese mainland and regions outside the Chinese mainland, or between other countries or regions.
    
3.  Review the configuration.
    
    On the **Configuration Review** page, confirm the listener and endpoint configuration and click **Submit**.
    
    To modify the configuration, click **Edit** in the corresponding section to return to the previous page.
    
    **Note**
    
    When you configure a listener for the first time, the configuration takes about 3 minutes to take effect. If you modify the configuration of a listener, the changes take about 1 minute to take effect.
    

## HTTP or HTTPS listener

1.  Configure the listener and protocol.
    
    1.  Log on to the [Global Accelerator console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the GA instance and click **Modify Listener** in the **Actions** column.
        
    3.  On the **Listeners** tab, click **Add Listener**.
        
        **Note**
        
        If this is the first time you are adding a listener to the Global Accelerator instance, you can skip this step.
        
    4.  On the **Configure Listener & Protocol** page, configure the listener and protocol, and then click **Next**.
        
        **Configuration**
        
        **Description**
        
        **Listener Name**
        
        Enter a name for the listener.
        
        **Routing Type**
        
        Select a routing type. In this topic, **Intelligent Routing** is selected.
        
        -   **Intelligent Routing**: Automatically forwards traffic to the nearest or healthiest endpoint group based on latency. This routes client requests to the optimal endpoint.
            
        -   **Custom Routing**: Generates a port mapping table based on the listener port range, the destination endpoint group port range, and the IP addresses of endpoints (vSwitches). This routes traffic to a specific IP address and port in the specified vSwitch. For more information, see [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137).
            
            **Note**
            
            Custom routing listeners are in invitational preview. To use custom routing listeners, submit an application to your account manager. After your application is approved, you can use custom routing listeners.
            
        
        **Protocol**
        
        Select a network transport protocol for the listener:
        
        -   **HTTPS**: The HTTPS protocol has the following features:
            
            -   A connection-oriented protocol that provides high reliability. A reliable connection must be established before data is sent or received.
                
            -   Ensures high data reliability by attaching a server SSL certificate.
                
            -   Encrypts data for transmission.
                
        -   **HTTP**: The HTTP protocol has the following features:
            
            -   A connection-oriented protocol that provides high reliability. A reliable connection must be established before data is sent or received.
                
            -   Data transmission is fast.
                
            -   Data is transmitted in plaintext.
                
        
        **Maximum HTTP Version**
        
        Select the maximum HTTP version supported by GA. You must select **Maximum HTTP Version** only if you set **Protocol** to **HTTPS**.
        
        -   **HTTP/1.1**: Compared with HTTP/1.0, HTTP/1.1 supports persistent connections and pipelines, but may encounter head-of-line blocking issues.
            
        -   **HTTP/2** (default): HTTP/2 is based on TCP and supports multiplexing and header compression to improve the concurrency of a single connection.
            
        -   **HTTP/3**: HTTP/3 uses the UDP-based QUIC protocol to resolve head-of-line blocking issues. HTTP/3 supports error recovery and flow control to improve the stability and efficiency of transmission.
            
            The latest HTTP/3 version is h3, which is compatible with Google Chrome 87 or later. If you use another browser, make sure that the browser supports HTTP/3.
            
        
        GA supports forward compatibility for HTTP. For example, if you select **HTTP/3** and the client does not support **HTTP/3**, GA allows the client to send **HTTP/2** or **HTTP/1.1** requests.
        
        **Note**
        
        -   If your pay-as-you-go GA instance does not support **Maximum HTTP Version**, the instance may use an earlier version. Contact your account manager to upgrade your GA instance.
            
        -   You cannot select HTTP/3 for subscription Global Accelerator instances.
            
        -   **TLS Security Policies** takes effect only for non-HTTP/3 connections. HTTP/3 connections use the built-in default security policy.
            
        
        **Port**
        
        Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
        
        You can configure only one listener port for each HTTP or HTTPS listener.
        
        **Note**
        
        -   TCP, HTTP, and HTTPS listeners must use different ports.
            
        -   UDP listeners and HTTP/3 listeners must use different ports.
            
        
        **Server Certificate**
        
        Select a server certificate that you have applied for. This parameter is required only when you set **Protocol** to **HTTPS**.
        
        A server certificate ensures that data is encrypted during transmission.
        
        For more information about purchasing certificates, see [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) and [Submit a Certificate Signing Request](/help/en/ssl-certificate/submit-a-certificate-application#concept-wxz-3xn-yfb).
        
        When you configure a server certificate for a Global Accelerator instance, if a service-linked role does not exist, the system automatically creates one. For more information, see [AliyunServiceRoleForGaSsl](/help/en/ga/security-and-compliance/aliyunserviceroleforgassl).
        
        **TLS Security Policies**
        
        Select a TLS security policy as needed. This parameter is required only when you set **Protocol** to **HTTPS**. The **TLS Security Policies** setting takes effect only for non-HTTP/3 connections. HTTP/3 connections use the built-in default security policy.
        
        A TLS security policy contains the supported TLS protocol versions and cipher suites for HTTPS.
        
        For more information about TLS security policies, see [TLS security policies](/help/en/ga/user-guide/tls-security-policies#concept-2130168).
        
        **Advanced Settings**
        
        Optional. Configure **Client Affinity**, **Idle Connection Timeout Period**, ****Connection Request Timeout****, and **Custom HTTP Headers**.
        
        **Client Affinity**
        
        Select whether to enable client affinity:
        
        -   **Source IP**: enables client affinity. When a client accesses a stateful application, all requests from the client are routed to the same endpoint.
            
        -   **Disable**: disables client affinity. Requests from the same client may be routed to different endpoints.
            
        
        **Idle Connection Timeout Period**
        
        Specify the timeout period of an idle connection. If no request is received during the timeout period, GA closes the current connection. When a new request is received, GA establishes a new connection.
        
        Valid values: 1 to 60. Default value: 15. Unit: seconds. To specify a longer timeout period for pay-as-you-go GA instances, go to [Quota Center](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_http_idle_timeout).
        
        **Note**
        
        If your standard GA instance does not support configuring the **Idle Connection Timeout Period** for a smart routing listener, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
        **Connection Request Timeout**
        
        Specify the timeout period of a request. If the backend server does not respond within the timeout period, GA returns the HTTP 504 error code to the client.
        
        Valid values: 1 to 180. Default value: 60. Unit: seconds. You can specify a longer timeout period for pay-as-you-go GA instances. To increase the quota, go to [Quota Center](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_http_request_timeout).
        
        **Note**
        
        If your standard GA instance does not support configuring the **Connection Request Timeout** for a smart routing listener, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
        **Custom HTTP Headers**
        
        Select the additional HTTP header fields that you want to use.
        
        -   Use `GA-ID` to retrieve the ID of the GA instance.
            
        -   Use `GA-AP` to retrieve information about the acceleration region of the GA instance.
            
        -   Use `GA-X-Forwarded-Proto` to retrieve the listener protocol of the GA instance.
            
        -   Use `GA-X-Forwarded-Port` to retrieve the listener port of the GA instance.
            
        -   Use `X-Real-IP` to retrieve the real IP address of the client.
            
        
2.  Configure endpoints.
    
    Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute traffic. The system automatically distributes traffic to the optimal endpoint within the endpoint group that is associated with the listener.
    
    On the **Configure Endpoint Group** page, configure the endpoint group and endpoints, and then click **Next**.
    
    This topic describes only the basic configurations of endpoint groups and endpoints. For more information about other configurations, such as health checks, see [Add a default endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-1xd). For more information about endpoint groups and endpoints, see [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/#concept-2384659).
    
    **Parameter**
    
    **Description**
    
    **Endpoint Group Name**
    
    Enter a name for the endpoint group.
    
    **Region**
    
    Select the region where the endpoint group is deployed.
    
    **Backend IP Protocol**
    
    Select the IP protocol that the GA instance uses to communicate with the endpoint service.
    
    -   **IPv4**: Uses only IPv4 addresses to communicate with the endpoint service.
        
    -   **IPv6**: Ues only IPv6 addresses to communicate with the endpoint service.
        
    -   **IPv4/IPv6 (protocol affinity)**: The IP protocol that GA uses matches the protocol of the client request.
        
        -   If the client request uses IPv6, GA uses IPv6 to communicate with the endpoint service.
            
        -   If the client request uses IPv4, GA uses IPv4 to communicate with the endpoint service.
            
    
    **Note**
    
    -   Only standard GA instances that use the pay-as-you-go billing method and have listeners with a smart routing type support the configuration of backend IP protocols. Other types of GA instances do not support this configuration and use IPv4 by default.
        
        The backend IP address protocol feature is in invitational preview. To use this feature, contact your business manager.
        
    -   You cannot configure backend IP protocols if the endpoint group region is an Alibaba Cloud point of presence (POP).
        
        You can call the [ListAvailableBusiRegions](/help/en/ga/developer-reference/api-ga-2019-11-20-listavailablebusiregions#doc-api-Ga-ListAvailableBusiRegions) operation to check whether a region is an Alibaba Cloud POP.
        
    -   You cannot configure OSS as a backend service if the backend IP protocol is set to IPv6 or IPv4/IPv6 (Protocol Affinity).
        
    
    **Configuration**
    
    Endpoints are the destination servers that process client requests. Configure endpoints based on the following information:
    
    -   **Backend Service Type**: You can select **ECS**, **ALB**, **NLB**, **CLB**, **OSS**, **ENI**, **Custom Private IP Address**, **Alibaba Cloud Public IP Address**, **Custom Public IP Address**, or **Custom Domain Name**.
        
        **Note**
        
        -   If your standard GA instance does not support backend service types such as **ECS** (VPC type), **ALB**, **NLB**, **CLB** (VPC type), **ENI**, or **Custom Private IP Address**, the instance version may be outdated. To use these features, contact your business manager to request an instance upgrade.
            
        -   If you want to use GA to accelerate an Alibaba Cloud backend service type that is not currently supported or an on-premises IDC service, and you want GA to connect to the backend service over a private network, you can add an endpoint of the **Custom Private IP Address** type.
            
            -   Custom private IP addresses include but are not limited to the following standard private CIDR blocks:
                
                -   10.0.0.0/8
                    
                -   100.64.0.0/10
                    
                -   172.16.0.0/12
                    
                -   192.168.0.0/16
                    
            -   To ensure high availability, select two or more vSwitches for **Backend Service**.
                
            -   If you want to use public IP addresses as private IP addresses, these addresses are treated as private IP addresses when you use the custom private IP feature. If necessary, configure the required routes in the VPC.
                
        -   To ensure uninterrupted connectivity between the GA instance and backend services, you must configure access policies based on the network connectivity type of the backend service:
            
            -   Public connection: The access policy of the backend service, such as a security group or firewall, must allow traffic from the GA egress public IP address.
                
            -   Private connection: The access policy of the backend service, such as a security group or access control rule, must allow traffic from the vSwitch CIDR block where the backend service resides. You must also ensure that at least eight private IP addresses are available in the vSwitch CIDR block.
                
        -   The [egress public IP address of the endpoints](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-3xd) for each GA instance is unique and not shared with users of other GA instances.
            
        -   If you select ECS, ALB, NLB, CLB, OSS, ENI, or Custom Private IP as the backend service type and a service-linked role does not exist, the system automatically creates the corresponding service-linked role. For more information, see [AliyunServiceRoleForGaVpcEndpoint](/help/en/ga/security-and-compliance/aliyunserviceroleforgavpcendpoint-1#concept-1936239), [AliyunServiceRoleForGaAlb](/help/en/ga/security-and-compliance/aliyunserviceroleforgaalb#concept-1936239), [AliyunServiceRoleForGaOss](/help/en/ga/security-and-compliance/aliyunserviceroleforgaoss#concept-1936239), and [AliyunServiceRoleForGaNlb](/help/en/ga/security-and-compliance/aliyunserviceroleforganlb).
            
        
    -   **Backend Service**: Enter the IP address, domain name, or instance ID of the backend server that provides services.
        
    -   **Weight**: Enter a weight for the endpoint. The valid values are 0 to 255. Global Accelerator routes traffic to endpoints based on the weights that you configure.
        
        **Warning**
        
        If you set the weight of an endpoint to 0, Global Accelerator stops distributing network traffic to the endpoint. Proceed with caution.
        
    
    You can click **\+ Add Endpoint** to add multiple endpoints. You can add up to four endpoints. To add more endpoints, increase the quota in Quota Center. For more information, see [Manage Global Accelerator quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).
    
    **Preserve Client IP**
    
    Select whether to preserve the source IP addresses of clients.
    
    HTTP and HTTPS listeners preserve client source IP addresses by default. The source IP address is stored in the `X-Forwarded-For` field of the HTTP request header. For more information, see [Preserve client source IP](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
    
    **Backend Service Protocol**
    
    Select the service protocol used by the backend service. You need to configure **Backend Service Protocol** only when you configure an endpoint group for an HTTP or HTTPS listener.
    
    -   **HTTP** (default)
        
    -   **HTTPS**
        
    
    **Note**
    
    -   When your listener protocol is HTTP, your backend service uses the HTTP protocol by default and cannot be changed.
        
    -   When **Backend Service Protocol** is set to **HTTPS**, the TLS security policy versions that GA supports for connecting to the backend service include TLS 1.0, TLS 1.1, TLS 1.2, and TLS 1.3. GA automatically negotiates with the backend service to select an available TLS version. If your GA instance does not support selecting a **Protocol Version** for connecting to the backend service, it also does not support negotiating for TLS 1.3 by default. To use this feature, contact your business manager to upgrade the instance.
        
    
    **IP Version**
    
    Select the protocol version that Global Accelerator uses to connect to the backend service. You need to configure ****IP Version**** only when **Backend Service Protocol** is set to **HTTPS**.
    
    -   **HTTP/1.1** (default)
        
    -   **HTTP/2**
        
        By configuring the **HTTP/2** protocol version, backend HTTPS services can take full advantage of this protocol version to significantly improve service performance, reduce latency and network overhead, and enhance the overall access experience.
        
        This is applicable to backend services that already support HTTP/2. If your backend service supports only HTTP/2, you must select HTTP/2.
        
    
    **Note**
    
    -   If your GA instance does not support selecting an **IP Version** for connecting to the backend service, the instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
    -   If you set the protocol version to **HTTP/2**, the following limits apply:
        
        -   The WebSocket protocol is not supported.
            
        -   The Server Push feature in the HTTP/2 protocol is not supported.
            
        -   gRPC requests based on HTTP/2 cannot be accelerated.
            
    
    **Port Mapping**
    
    If the listener port is different from the port that the endpoint uses to provide services, you need to enter a port mapping.
    
    -   **Listener Port**: The entered port must be within the port range configured for the current listener.
        
    -   **Endpoint Port**: Enter the port over which the endpoint provides services. Valid values: **1 To 65535**.
        
    
    If the listener port is the same as the port that the endpoint uses to provide services, you do not need to enter a port mapping. Global Accelerator automatically sends access requests to the listener port of the endpoint.
    
    For HTTP and HTTPS listeners, you can add up to one port mapping.
    
    **Note**
    
    -   After you configure a port mapping, the following limits apply to subsequent listener changes:
        
        -   Listener protocol: You can switch only between the HTTP and HTTPS protocols. Switching between other protocols is not supported.
            
        -   Listener port: The modified listener port range must include all listener ports that have existing port mappings.
            
            For example, if the listener port range is 80-82 and is mapped to endpoint ports 100-102, the subsequently modified listener port range must include 80-82. You can change it to 80-90, but you cannot narrow it to 80-81.
            
    -   For more information about how to use port mappings, see [Use GA port mappings to improve application flexibility and security](/help/en/ga/use-cases/use-ga-port-mapping-to-improve-application-flexibility-and-security).
        
    
    **Traffic Distribution Ratio**
    
    Configure the traffic ratio to different endpoint groups.
    
    The valid values are 0 to 100.
    
    **Note**
    
    -   For the subscription billing method, only TCP and UDP listeners support traffic distribution. For the pay-as-you-go billing method, all listener types support traffic distribution.
        
    -   A value of 0 indicates that this endpoint group is ignored and no access traffic is forwarded to it. A value of 100 indicates that all access traffic is forwarded to this endpoint group.
        
    -   For more information about how to use traffic dialing, see [Principles and scenarios of traffic dialing among multiple endpoint groups](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#task-2181288).
        
    
    **Cross-border Acceleration Settings**
    
    Read the **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**.
    
    This step is required only if cross-border acceleration is not enabled for your Global Accelerator instance and your service configuration involves cross-border data transfer between the Chinese mainland and regions outside the Chinese mainland, or between other countries or regions.
    
3.  Review the configuration.
    
    On the **Configuration Review** page, confirm the listener and endpoint configuration and click **Submit**.
    
    To modify the configuration, click **Edit** in the corresponding section to return to the previous page.
    
    **Note**
    
    When you configure a listener for the first time, the configuration takes about 3 minutes to take effect. If you modify the configuration of a listener, the changes take about 1 minute to take effect.
    

## More operations

**Operation**

**Description**

Edit a listener

If your business requirements change, you can modify the listener and protocol, SSL certificate, and endpoint group information to meet your needs. The listener routing type cannot be modified.

If port mapping is configured, note the following limits:

-   Listener protocol: You can switch only between the HTTP and HTTPS protocols. Switching between other protocols is not supported.
    
-   Listener port: The modified listener port range must include all listener ports that have existing port mappings.
    
    For example, if the listener port range is 80-82 and is mapped to endpoint ports 100-102, the subsequently modified listener port range must include 80-82. You can change it to 80-90, but you cannot narrow it to 80-81.
    

For a TCP listener with **Preserve Client IP** enabled, if the backend service uses a public connection, you cannot change the listener protocol to UDP.

**Warning**

If you change the port or listener protocol after you configure the listener, data transmission may be interrupted. Proceed with caution. We recommend that you modify the listener configurations during off-peak hours or after you switch network traffic to another GA instance.

1.  On the **Listeners** tab, find the listener that you want to manage and click Mod L in the **Actions** column.
    
2.  On the **Edit Listener** page, modify the listener and protocol, SSL certificate, or endpoint group information, and then click **Next**.
    
    For more information about listeners and protocols, SSL certificates, and endpoint groups, see [TCP or UDP listener](#section-ncm-izu-muk) or [HTTP or HTTPS listener](#section-p8q-jbh-5bm).
    

Delete a listener

You can delete a listener. After a listener is deleted, its associated endpoint groups are also deleted.

1.  On the **Listeners** tab, find the listener that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Delete Listener** dialog box, click **OK**.
    

Configure a virtual endpoint group and forwarding rules for a listener

After you configure a smart routing listener, you can configure a virtual endpoint group and forwarding rules for the listener. Then, the listener can forward requests that meet the forwarding conditions to the corresponding default or virtual endpoint group based on the forwarding rules. This allows a single GA instance to accelerate access to multiple destination endpoints. For more information, see the following topics:

-   [Add and manage endpoint groups for a smart routing listener](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#task-2039654)
    
-   [Add and manage forwarding rules](/help/en/ga/user-guide/create-and-manage-forwarding-rules#task-2039265)
    
-   [Accelerate access to multiple HTTPS domain names using a single GA instance](/help/en/ga/use-cases/use-one-ga-instance-to-accelerate-access-to-multiple-https-capable-domain-names#task-2022760)
    

## References

-   [CreateListener](/help/en/ga/api-createlistener#doc-api-Ga-CreateListener): Creates a listener for a GA instance.
    
-   [UpdateListener](/help/en/ga/api-updatelistener#doc-api-Ga-UpdateListener): Modifies the configuration of a listener for a GA instance.
    
-   [DeleteListener](/help/en/ga/api-deletelistener#doc-api-Ga-DeleteListener): Deletes a listener from a GA instance.
