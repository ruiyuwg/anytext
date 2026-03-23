A Standard Global Accelerator (GA) instance provides a fully meshed network with multiple access points and origin servers to accelerate data transmission over Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS) protocols. This topic describes how to create and manage Standard GA instances.

## **Create a Standard GA instance**

Standard GA instances support two billing methods: [pay-as-you-go](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances) and [subscription](/help/en/ga/product-overview/billing-of-ga-instances).

-   The pay-as-you-go billing method does not require you to evaluate the instance type that your business requires. You are charged for each billable item based on your actual usage. You can configure the instance, acceleration area, listener, and endpoint group in a single process. This billing method is suitable for scenarios where your business volume frequently changes.
    
-   The subscription billing method requires you to purchase an instance of a specific type and then complete the remaining configurations. This billing method is suitable for scenarios where your business volume is relatively stable.
    

## Create a pay-as-you-go Standard instance

Before you create a pay-as-you-go Standard GA instance, note the following information:

-   The first time you use a pay-as-you-go GA instance, you must go to the [Activate Service](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) page to activate the pay-as-you-go Global Accelerator service.
    
-   Pay-as-you-go GA instances use the **Pay-by-data-transfer** bandwidth billing method and do not need to be associated with a bandwidth plan. The fees for data transfer over the GA network are settled and billed by Cloud Data Transfer (CDT). For more information, see [Data transfer fee](/help/en/ga/product-overview/pay-by-data-transfer#concept-2261223).
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Pay-as-you-go Instance**.
    
3.  On the **Basic Instance Configuration** wizard page, configure the parameters and click **Next**.
    
    **Configuration**
    
    **Description**
    
    **GA Instance Name**
    
    Enter a name for the GA instance.
    
    **Instance Billing Method**
    
    The default value is **Pay-As-You-Go**.
    
    The fees for a pay-as-you-go Standard GA instance include the [GA instance fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9), [CU fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#4af14fc025v6q), and [data transfer fee](/help/en/ga/product-overview/pay-by-data-transfer).
    
    **Accelerated IP Address Type**
    
    Select an accelerated IP address type for the Standard GA instance.
    
    -   **EIP** (default): This type uses the custom nearby access mode. You can select acceleration areas and regions as needed. GA provides an independent EIP for each acceleration region.
        
    -   **Anycast EIP**: This type uses the automatic nearby access mode. You do not need to select an acceleration area or region. GA provides two Anycast EIPs in multiple regions around the world.
        
        **Note**
        
        -   The **Anycast EIP** accelerated IP address type is available only for invitational preview. To use this feature, contact your account manager.
            
        -   The number of accelerated IP addresses in each acceleration region of a Standard GA instance depends on the accelerated IP address type:
            
            -   If the accelerated IP address type is **EIP**, two EIPs are allocated to each acceleration region. The two EIPs can be used to simultaneously accelerate client traffic and ensure high availability for the acceleration region.
                
            -   If the accelerated IP address type is **Anycast EIP**, GA provides two Anycast EIPs in multiple regions across the globe.
                
        
    
    **Resource Group**
    
    Select the [resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb) to which the Standard Global Accelerator instance belongs.
    
    The resource group is created in Resource Management under the current Alibaba Cloud account.
    
4.  On the **Configure Acceleration Area** wizard page, configure an acceleration area and click **Next**.
    
    Click to view the configuration information for the acceleration area. For more information about acceleration areas, see [Acceleration areas](/help/en/ga/user-guide/overview-1/).
    
    ### **Accelerated IP address type:** **Elastic IP Address**
    
    **Configuration**
    
    **Description**
    
    **Acceleration Area**
    
    From the drop-down list, select one or more regions where you want to accelerate access.
    
    **Note**
    
    If the acceleration area is in the Chinese mainland and you want to accelerate HTTP or HTTPS traffic, you must apply for an [ICP filing](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) for the domain name. Alternatively, you can select the Premium BGP line in the Hong Kong (China) region to serve end users in the Chinese mainland.
    
    **Assign Bandwidth**
    
    -   **Maximum Bandwidth**: Set the bandwidth for the acceleration region. The default value is **200** Mbps. The valid values for the bandwidth of each access region are 2 to 10000 Mbps.
        
        The peak bandwidth is used only for throttling. The fees for data transfer are settled and billed by CDT.
        
        **Important**
        
        If the peak bandwidth is set too low, throttling may occur and traffic may be dropped. Plan the peak bandwidth to meet your business requirements.
        
    -   **IP Protocol**: Select the IP protocol for accessing the Global Accelerator service.
        
        -   **IPv4**: assigns IPv4 addresses. The IPv4 addresses are used to accelerate IPv4 services for IPv4 clients.
            
        -   **IPv6**: assigns IPv6 addresses. The IPv6 addresses are used to accelerate IPv4 services for IPv6 clients.
            
        -   **Dual Stack**: assigns IPv4 and IPv6 addresses. This allows IPv4 and IPv6 clients to connect to GA at the same time.
            
    -   **ISP Line Type**: Select the network type for accessing the Global Accelerator service.
        
        -   **BGP (Multi-ISP)**: provides premium BGP lines across the globe. This is the default line type. BGP lines from different ISPs can be used. The optimal BGP line is automatically selected to ensure network stability.
            
            All acceleration regions support BGP (Multi-ISP).
            
        -   **BGP Pro**: BGP (Multi-ISP) Pro lines optimize data transmission to the Chinese mainland and improve connection quality for international services. Cross-border connections are established by using Chinese mainland ISP services when BGP (Multi-ISP) Pro lines provide services to users in the Chinese mainland (except data centers). This reduces network latency.
            
            BGP (Multi-ISP) Pro is available only in the China (Hong Kong) and Japan (Tokyo) regions.
            
    
    ### **Accelerated IP address type:** **Anycast EIP**
    
    **Configuration**
    
    **Description**
    
    **Acceleration Area**
    
    You do not need to select an acceleration area or region. You can view the details of the supported access points on the page.
    
    The supported acceleration areas depend on the [access points covered by Anycast EIPs](/help/en/anycast-eip/product-overview/what-is-anycast-eip#section-24l-kft-zbq). This mainly supports network acceleration for regions outside the Chinese mainland (clients in the Chinese mainland access through Hong Kong (China)).
    
    **Bandwidth**
    
    Set a unified bandwidth for all acceleration regions. The default value is **200** Mbps. The valid values are 200 to 5000 Mbps.
    
5.  On the **Configure listeners** wizard page, configure a listener and click **Next**.
    
    Click to view the configuration information for listeners based on the routing type. For more information about routing types, see [Routing listeners](/help/en/ga/user-guide/overview-2/#section-u5b-97q-0zv).
    
    ### **Intelligent Routing**
    
    **Configuration**
    
    **Description**
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Routing Type**
    
    Select a routing type. In this example, **Intelligent Routing** is selected.
    
    A smart routing listener automatically selects the nearest or healthiest endpoint group to forward traffic, directing client network access requests to the optimal endpoint.
    
    **Protocol**
    
    Select a network transport protocol for the listener. The following protocols are supported:
    
    -   **TCP**
        
    -   **UDP**
        
    -   **HTTP**
        
    -   **HTTPS**
        
    
    For more information about listener protocols, see [Listener protocols](/help/en/ga/user-guide/overview-2/#section-nlf-psv-0nd).
    
    -   **TCP and UDP listener configurations**
        
        **Configuration**
        
        **Description**
        
        **Port**
        
        Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
        
        You can specify up to 30 ports for each listener. Separate multiple listener ports with commas (,). For example, you can enter 80,90,8080.
        
        If you want to specify a port range, use a hyphen (-). Example: 80-85.
        
        **Note**
        
        -   TCP, HTTP, and HTTPS listeners must use different ports.
            
        -   UDP listeners and HTTP/3 listeners must use different ports.
            
        
        For more information about the limits, see [Listener ports for smart routing](/help/en/ga/user-guide/overview-2/#2c13383d757v0).
        
        **Advanced Settings**
        
        Optionally, configure **Client Affinity** and Idle Connection Timeout Period.
        
        **Client Affinity**
        
        Select whether to enable client affinity:
        
        -   **Source IP**: enables client affinity. When a client accesses a stateful application, all requests from the client are routed to the same endpoint.
            
        -   **Disable**: disables client affinity. Requests from the same client may be routed to different endpoints.
            
        
        **Idle Connection Timeout Period**
        
        Specify the timeout period of an idle connection. If no data is transmitted during the timeout period, GA closes the current connection. When a new request is received, GA establishes a new connection.
        
        The valid values vary based on the listener protocol:
        
        -   Valid values for TCP listeners: 10 to 900. Default value: 900. Unit: seconds.
            
        -   Valid values for UDP listeners: 10 to 20. Default value: 20. Unit: seconds.
            
        
        **Note**
        
        If your standard GA instance does not support configuring the **Idle Connection Timeout Period** for a smart routing listener, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
        
    -   **HTTP and HTTPS listener configurations**
        
        **Configuration**
        
        **Description**
        
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
        
        Select the server certificate that you have applied for. You need to configure a server certificate only when **Protocol** is set to **HTTPS**.
        
        The server certificate ensures encrypted data transmission for Global Accelerator.
        
        For information about how to purchase a certificate, see [Select and purchase a certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) and [Submit a certificate application](/help/en/ssl-certificate/submit-a-certificate-application#concept-wxz-3xn-yfb).
        
        **Note**
        
        When you configure a server certificate for a GA instance, if the service-linked role does not exist, the system automatically creates the corresponding service-linked role.
        
        **TLS Security Policies**
        
        Select a TLS security policy as needed. This parameter is required only when you set **Protocol** to **HTTPS**. The **TLS Security Policies** setting takes effect only for non-HTTP/3 connections. HTTP/3 connections use the built-in default security policy.
        
        A TLS security policy includes optional TLS protocol versions and corresponding cipher suites for HTTPS.
        
        For more information about TLS security policies, see [TLS security policies](/help/en/ga/user-guide/tls-security-policies#concept-2130168).
        
        **Advanced Settings**
        
        Optionally, configure **Client Affinity**, **Idle Connection Timeout Period**, **Connection Request Timeout**, and **Custom HTTP Headers**.
        
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
        
        Select the required additional HTTP headers.
        
        -   Use `GA-ID` to retrieve the ID of the GA instance.
            
        -   Use `GA-AP` to retrieve information about the acceleration region of the GA instance.
            
        -   Use `GA-X-Forwarded-Proto` to retrieve the listener protocol of the GA instance.
            
        -   Use `GA-X-Forwarded-Port` to retrieve the listener port of the GA instance.
            
        -   Use `X-Real-IP` to retrieve the real IP address of the client.
            
        
    
    ### **Custom Route**
    
    **Note**
    
    -   The custom route listener feature is available only for invitational preview. To use this feature, contact your account manager. After your application is approved, you can select the routing type for the listener.
        
    -   If the accelerated IP address protocol is IPv6, custom route listeners are not supported.
        
    
    **Configuration**
    
    **Description**
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Routing Type**
    
    Select a routing type. In this example, **Custom Route** is selected.
    
    A custom route listener generates a port mapping table based on the listener port range, the destination endpoint group port range, and the IP addresses of the endpoints (vSwitches). This allows traffic to be deterministically routed to a specific IP address and port in the specified vSwitch. For more information about how to configure a custom route listener, see [Add and manage custom route listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137).
    
    **Port**
    
    Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
    
    Separate multiple listener ports with commas (,). For example, you can enter 80,90,8080.
    
    You can use a hyphen (-) to specify a port range. Example: 80-85.
    
    **Note**
    
    -   The ports of different custom routing listeners on a GA instance must be different.
        
    -   Ports 25, 250, 4789, and 4790 are system-reserved ports. When a port mapping table is generated, the system-reserved ports are ignored.
        
    -   You cannot configure port 6081 for pay-as-you-go Global Accelerator instances.
        
    -   The port range that you specify for the listener determines the sum of the number of ports in the endpoint group that is associated with the listener and the number of IP addresses in the vSwitch. `The number of ports in the endpoint group multiplied by the number of IP addresses of all vSwitches in the endpoints must be less than or equal to the number of listener ports` We recommend that you specify a larger port range for the listener.
        
    
6.  On the ****Configure an endpoint group**** wizard page, configure an endpoint group and endpoints, and then click **Next**.
    
    Click to view the configuration information for the endpoint group and endpoints. For more information about endpoint groups and endpoints, see [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/).
    
    ### **Endpoint groups for intelligent routing listeners**
    
    **Configuration**
    
    **Description**
    
    ****Region****
    
    Select the region where the endpoint group is located.
    
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
        
    
    **Endpoint Configuration**
    
    An endpoint is the destination host for client requests. You can configure an endpoint based on the following information:
    
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
    
    Select whether to preserve the client source IP address.
    
    If you enable this feature, the backend server can obtain the client source IP address. For more information, see [Preserve client source IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
    
    **Backend Service Protocol**
    
    Select the service protocol used by the backend service. You need to configure **Backend Service Protocol** only when you configure an endpoint group for an HTTP or HTTPS listener.
    
    -   **HTTP** (default)
        
    -   **HTTPS**
        
    
    **Note**
    
    -   When your listener protocol is HTTP, your backend service uses the HTTP protocol by default and cannot be changed.
        
    -   When **Backend Service Protocol** is set to **HTTPS**, the TLS security policy versions that GA supports for connecting to the backend service include TLS 1.0, TLS 1.1, TLS 1.2, and TLS 1.3. GA automatically negotiates with the backend service to select an available TLS version. If your GA instance does not support selecting a **Protocol Version** for connecting to the backend service, it also does not support negotiating for TLS 1.3 by default. To use this feature, contact your business manager to upgrade the instance.
        
    
    **Protocol Version**
    
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
    
    For TCP and UDP listeners, you can click **Add Port Mapping** to add multiple port mappings. The ****Listener Port**** in each port mapping must be unique. You can add up to 30 port mappings.
    
    For HTTP and HTTPS listeners, you can add up to one port mapping.
    
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
        
    
    **Health Check**
    
    Enable or disable health checks.
    
    After enabling, you can use health checks to determine the running status of endpoints. For more information about health checks, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).
    
    **Note**
    
    For UDP listeners, the endpoint must have a TCP, HTTP, or HTTPS service configured to support health checks. Otherwise, it will be marked as abnormal.
    
    **Health Check Protocol**
    
    Select the protocol for health checks. TCP, HTTP, and HTTPS are supported.
    
    -   TCP health checks are based on network-layer detection. They send SYN handshake messages to check whether the server port is active.
        
    -   HTTP and HTTPS health checks are based on GET requests. They send GET requests to simulate browser access behavior to check whether the server application of the endpoint is healthy.
        
    
    **Port**
    
    The probe port used by the health check service to access the endpoint.
    
    Valid values: 1 to 65535.
    
    **Health Check Interval**
    
    The interval for health checks, in seconds.
    
    Valid values: 1 to 50. Default value: 2.
    
    **URI**
    
    Specify the path for health checks. This parameter is available only when **Health Check Protocol** is set to HTTP or HTTPS.
    
    By default, the GA system sends GET requests to the default home page of the backend server application. If the page that you use for health checks is not the default home page of the application server, you must specify the path for health checks.
    
    **Healthy Threshold**
    
    The number of consecutive successful or failed health checks required for the health check status to change. This is the number of consecutive failed health checks to change from successful to failed, or the number of consecutive successful health checks to change from failed to successful.
    
    Valid values: 2 to 10. Default value: 3.
    
    **Tag**
    
    Set a tag for the endpoint group.
    
    Mark and categorize the endpoint group by setting a **Tag Key** and **Tag Value**. For more information, see [Tag management](/help/en/ga/user-guide/manage-tags).
    
    **Cross-border Acceleration Settings**
    
    Read the **Data Cross-border Compliance Commitment** and select **I Agree To The Above Compliance Commitment**.
    
    You need to configure this item only if your Global Accelerator instance's business configuration involves cross-border access acceleration between the Chinese mainland and regions outside the Chinese mainland, or between other countries and regions.
    
    ### **Endpoint groups for custom route listeners**
    
    **Configuration**
    
    **Description**
    
    **Region**
    
    Select the Alibaba Cloud region where the endpoint group is located.
    
    ****Port Mapping Range and Protocol****
    
    Enter the **Port Range** and **Protocol Type**. For **Protocol Type**, you can select **TCP** or **UDP**, or both **TCP** and **UDP**.
    
    The entered backend service port range and protocol for the endpoint group will form a mapping relationship with the associated listener port range.
    
    Click **+Add** to enter multiple entries. You can add up to 20 entries at a time.
    
    **Note**
    
    The product of the number of ports of the endpoint group that is associated with a custom routing listener and the number of IP addresses of all vSwitches that serve as endpoints must be less than or equal to the number of listener ports: `Number of ports of the endpoint group × Number of IP addresses of all vSwitches that serve as endpoints ≤ Number of listener ports`.
    
    **Endpoint**
    
    Click **Add Endpoint**. In the **Add Endpoint** dialog box, configure the endpoint based on the following information, and then click **OK**.
    
    -   **Backend Service Type**: Only **VSwitch** is supported.
        
    -   **Backend Service**: Select the destination vSwitch for traffic forwarding.
        
    -   **Subnet Traffic**: Select the traffic permission mode for the subnet.
        
        -   **Allow All Traffic**: GA forwards all traffic to the specified backend service.
            
        -   **Deny All Traffic**: GA does not forward traffic to the specified backend service. This is the default value.
            
        -   **Allow Traffic from Specific vSwitch IP Address and Port**: Specify the **destination** that can receive client requests, which is the IP address and port of an Elastic Compute Service (ECS) instance.
            
            You must select a mode specifying **traffic destinations**.
            
            -   **List Mode**: Enter an **IP address** and **port**. You can select the **All Ports** check box.
                
                You can click **\+ Add** to add IP addresses and ports.
                
                You can add up to 20 entries at the same time.
                
            -   **Batch Mode**: Enter IP addresses and port ranges based on the instructions. You can also download a template, enter IP addresses and port ranges, and then upload the template.
                
                You can add up to 100 entries at the same time.
                
            
    
    **Cross-border Acceleration Settings**
    
    Read the **Data Cross-border Compliance Commitment** and select **I Agree To The Above Compliance Commitment**.
    
    You need to configure this item only if your Global Accelerator instance's business configuration involves cross-border access acceleration between the Chinese mainland and regions outside the Chinese mainland, or between other countries and regions.
    
7.  On the **Configuration Review** wizard page, confirm the information and click **Submit**.
    
    **Note**
    
    It takes 3 to 5 minutes to create a GA instance.
    

## Create a subscription Standard instance

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Subscription Instance**.
    
3.  On the **Create Standard Instance (Subscription)** page, configure the instance based on the following information, and then click **Buy Now** and complete the payment.
    
    **Configuration**
    
    **Description**
    
    **Instance Type**
    
    Select the [type](/help/en/ga/user-guide/overview-of-standard-ga-instances/#section-vab-yht-jm5) of the Standard GA instance.
    
    **Accelerated IP Address Type**
    
    By default, subscription Standard GA instances only support **Elastic IP Address** as the accelerated IP address type. This type uses the custom nearby access mode. You can select acceleration areas and regions as needed. GA provides one EIP for each acceleration region.
    
    **Bandwidth Billing Method**
    
    Select the billing method for network transfer bandwidth.
    
    The default is **Pay-by-bandwidth**. The bandwidth fees are settled by the bandwidth plan.
    
    After purchasing a Global Accelerator instance with the **Pay-by-bandwidth** billing method, you also need to associate a [basic bandwidth plan](/help/en/ga/product-overview/subscription-bandwidth-plans#concept-2358134) with it.
    
    **Subscription Duration**
    
    Select the subscription duration for the Standard Global Accelerator instance.
    
    Select **Auto-renewal. (Make sure that your account balance is sufficient.)** to enable the auto-renewal feature for the Standard Global Accelerator instance.
    
    **Global Accelerator Instance Name**
    
    Enter a name for the GA instance.
    
    **Resource Group**
    
    Select the [resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb) to which the Standard GA instance belongs.
    
    The resource group is created in Resource Management under the current Alibaba Cloud account.
    
    **Coupon**
    
    Select whether to use a coupon for payment.
    
    The default is **Do Not Use Coupon**. You can also select a coupon from the drop-down list for payment.
    
4.  **Optional:** Return to the console. In the navigation pane on the left, choose **Standard Instance** > **Instances**. On the **Instances** page, you can view the purchased Standard GA instance.
    

## What to do next

After you create a subscription Standard GA instance, you must also perform the following operations:

1.  [Associate a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-i04-avr-dsj)
    
2.  [Add an acceleration area](/help/en/ga/user-guide/add-and-manage-acceleration-areas#section-wme-8rk-i9x)
    
3.  [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120) or [Add and manage custom route listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137)
    
4.  [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#task-2039654) or [Add and manage endpoint groups for custom route listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-custom-routing-listeners#task-2243309)
    

**Note**

For information about how to quickly deploy the Global Accelerator service after you purchase a subscription Standard GA instance, see [Get started with Global Accelerator](/help/en/ga/getting-started/get-started#section-eyv-vwq-zhk).

## Change the specification of a standard GA instance

You can upgrade or downgrade the specification of a subscription standard GA instance.

Before you upgrade or downgrade a basic bandwidth plan, take note of the information in the following table.

**Limit**

**Effective time**

**Impacts on billing**

**Scenario**

-   By default, you can only upgrade the specification of a GA instance. The feature for downgrading the specification of a GA instance is unavailable. To use this feature, go to the Quota Center console, find the **Console Downgrade** quota, and click Apply in the Actions column. For more information, see the "Adjust quota" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   After you upgrade a GA instance, endpoint group IP addresses may be added to the GA instance. The number of new IP addresses varies based on the specification of the GA instance. You can view the IP addresses in the GA console. You must confirm the IP addresses before they can change to the Available state.
    
    You can confirm the endpoint group IP addresses in the GA console or by calling the [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm) operation.
    
-   If you downgrade a GA instance, the number of endpoint group IP addresses may be reduced.
    

After you change the specification of a standard GA instance, the new specification takes effect immediately. You may need to wait a few minutes for the specification to take effect due to network latency.

-   After you upgrade an instance, you are charged the price difference between the original specification and new specification for the remainder of the current billing cycle.
    
-   After you downgrade an instance, you may receive a refund that is equal to the price difference between the original specification and the new specification for the remainder of the current billing cycle. The actual refund amount may vary based on the discount at the time of purchase and whether coupons are used. You can view the actual refund amount on the buy page. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#main-2277885).
    

If the specification of a standard GA instance is no longer suitable for your use case, you can upgrade or downgrade the GA instance.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, perform the following operations to change the specification of a standard GA instance.
    
    For more information about the specifications of GA instances, see [Overview of standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#section-vab-yht-jm5).
    
    -   **Upgrade a GA instance**
        
        1.  Find the GA instance that you want to upgrade and choose **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713183961/p696651.png)** > **Instance Management** > **Upgrade** in the **Actions** column.
            
        2.  In the **Upgrade** message, confirm the information and click **OK**.
            
            **Note**
            
            If you click **Upgrade**, only upgrades are supported. For information about how to downgrade a GA instance, see the "**Downgrade a GA instance**" section in this topic.
            
        3.  On the Upgrade/Downgrade page, specify the specification that you want to use, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            
        4.  Check the status of the GA instance in the **Status** column. If **Unconfirmed Endpoint Group IPs** appears, click **OK**. In the **Confirm Endpoint Group IPs** message, click **OK**.
            
    -   **Downgrade a GA instance**
        
        1.  Find the GA instance that you want to downgrade and choose **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713183961/p696651.png)** > **Instance Management** > **Downgrade** in the **Actions** column.
            
        2.  In the **Downgrade** message, confirm the information and click **OK**.
            
        3.  On the Downgrade page, specify the specification that you want to use, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            

## More operations

### **More operations (**Pay-as-you-go**)**

**Operation**

**Procedure**

Update the basic information of a GA instance

1.  In the navigation pane on the left, choose **Standard Instance** > **Instances**.
    
2.  On the **Instances** page, find the target GA instance, move the pointer over the instance name, and then click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4781828561/p452588.png) icon.
    
3.  In the dialog box that appears, modify the instance name and click **OK**.
    

Delete a GA instance

You can delete a pay-as-you-go Standard GA instance. Before deleting the instance, make sure you have completed data migration.

1.  In the navigation pane on the left, choose **Standard Instance** > **Instances**.
    
2.  In the **Actions** column, click **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5893244961/p696708.png)** > **Instance Management** > **Delete Instance**.
    
3.  In the dialog box that appears, click **OK**.
    

### **More operations (**Subscription**)**

**Operation**

**Procedure**

Update the basic information of a GA instance

1.  In the navigation pane on the left, choose **Standard Instance** > **Instances**.
    
2.  On the **Instances** page, find the target GA instance, move the pointer over the instance name, and then click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4781828561/p452588.png) icon.
    
3.  In the dialog box that appears, modify the instance name and click **OK**.
    

Renew a subscription GA instance

1.  In the navigation pane on the left, choose **Standard Instance** > **Instances**.
    
2.  On the **Instances** page, find the target GA instance. In the **Actions** column, click **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5893244961/p696708.png)** > **Instance Management** > **Renew**.
    
3.  On the **Renew** page, select a **Duration**, select the service agreement, and then click **Buy Now** and complete the payment.
    

Replace a basic bandwidth plan

You can replace a basic bandwidth plan that is associated with a GA instance. This allows you to use a basic bandwidth plan that meets your requirements. The GA instance continues to forward network traffic when you replace the basic bandwidth plan.

After you replace the original basic bandwidth plan, the original basic bandwidth plan is disassociated from the GA instance and the new basic bandwidth plan is associated with the GA instance.

Before you replace a basic bandwidth plan, make sure that another basic bandwidth plan is purchased. The bandwidth provided by the new basic bandwidth plan must be greater than or equal to the total bandwidth that is allocated to acceleration areas. For more information, see [Purchase and manage basic bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-lrh-d9o-4y8).

1.  In the navigation pane on the left, choose **Standard Instance** > **Instances**.
    
2.  On the **Instances** page, find the target GA instance. In the **Actions** column, click **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5893244961/p696708.png)** > **Basic Bandwidth Plan** > **Replace Basic Bandwidth Plan**.
    
3.  In the **Replace Basic Bandwidth Plan** dialog box, select the replacement basic bandwidth plan based on the following information, and then click **OK**.
    
    -   **Resource Group**: Select the resource group to which the basic bandwidth plan that you want to use belongs.
        
    -   **Bandwidth Plan to Use**: Select a basic bandwidth plan from the drop-down list.
        
        You can select only a basic bandwidth plan that is in the **Idle** state.
        

Cancel the subscription for a GA instance

You can apply to cancel the subscription for a subscription Standard GA instance. Before you apply, make sure that the instance meets the cancellation requirements and that data migration is complete. For more information, see [Refund policy](/help/en/ga/product-overview/refund-policies#task-2292765).

## References

## Tutorials

-   GA Quick Start:
    
    -   [Accelerate transmission of network traffic destined for a specified IP address](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-ip-address)
        
    -   [Accelerate access to backend services with specified domain names](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-domain-name)
        
-   More GA scenario tutorials:
    
    -   [Basic acceleration solutions](/help/en/ga/use-cases/best-practices/)
        
    -   [Advanced feature configurations](/help/en/ga/use-cases/product-tutorial/)
        
    -   [Use with multiple products](/help/en/ga/use-cases/multi-product-combination-use/)
        

## API reference

-   [CreateAccelerator](/help/en/ga/api-createaccelerator#doc-api-Ga-CreateAccelerator): Creates a Standard GA instance.
    
-   [ListAccelerators](/help/en/ga/api-listaccelerators#doc-api-Ga-ListAccelerators): Queries a list of Standard GA instances.
    
-   [DescribeAccelerator](/help/en/ga/api-describeaccelerator#doc-api-Ga-DescribeAccelerator): Queries information about a specified Standard GA instance.
    
-   [UpdateAccelerator](/help/en/ga/api-updateaccelerator#doc-api-Ga-UpdateAccelerator): Modifies a Standard GA instance.
    
-   [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm): Confirms the modified specifications of a Standard GA instance.
    
-   [DescribeAcceleratorAutoRenewAttribute](/help/en/ga/api-describeacceleratorautorenewattribute#doc-api-Ga-DescribeAcceleratorAutoRenewAttribute): Queries the auto-renewal status of a Standard GA instance.
    
-   [UpdateAcceleratorAutoRenewAttribute](/help/en/ga/api-updateacceleratorautorenewattribute#doc-api-Ga-UpdateAcceleratorAutoRenewAttribute): Modifies the auto-renewal attribute of a Standard GA instance.
