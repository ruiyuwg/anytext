Each listener must be associated with an endpoint group. You can associate a listener with an endpoint group by specifying the region where you want to distribute traffic. The listener then distributes traffic to the endpoints in the endpoint group based on the listener's routing type. This topic describes how to add and manage endpoint groups for intelligent routing listeners.

## Background information

After you configure an intelligent routing listener, the Global Accelerator instance automatically selects a nearby and healthy endpoint group to forward traffic. This ensures that client requests are sent to the optimal endpoint.

Listeners with a smart routing type have two types of endpoint groups:

-   **Default endpoint group**: The endpoint group that you configure when you create a listener.
    
-   **Virtual endpoint group**: You can manually create a virtual endpoint group on the **Endpoint Groups** page after you create a listener.
    

The quotas and features for each endpoint group type vary based on the billing method of the GA instance:

### **Pay-as-you-go**

**Feature comparison of endpoint group types**

**Default endpoint group**

**Virtual endpoint group**

Listener protocol

TCP, UDP, HTTP, or HTTPS

TCP, HTTP, or HTTPS only

Quota

By default, you can create two default endpoint groups. To create more endpoint groups, increase the quota for **[gaplus\_quota\_epgs\_per\_listener](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_epgs_per_listener&keyword=gaplus_quota_epgs_per_listener)** on the Quota Management page.

Each default endpoint group must be in a unique region.

By default, you can create a total of 10 virtual endpoint groups. To create more virtual endpoint groups, increase the quota for **[gaplus\_quota\_vepg\_per\_listener](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_vepg_per_listener&keyword=gaplus_quota_vepg_per_listener)** on the Quota Management page.

-   TCP listeners: The region of a virtual endpoint group must be the same as the region of the default endpoint group.
    
-   HTTP and HTTPS listeners: There are no regional restrictions for virtual endpoint groups.
    

[Traffic distribution](/help/en/ga/user-guide/overview-4/#0d67471a7e6ad)

Supported.

Supported.

[Forwarding policies](/help/en/ga/user-guide/create-and-manage-forwarding-rules)

Associated with the default forwarding policy by default. You can also associate it with a custom forwarding policy.

Can only be associated with custom forwarding policies.

**Note**

If your standard GA instance does not support adding virtual endpoint groups for TCP listeners, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.

### **Subscription**

**Feature comparison of endpoint group types**

**Default endpoint group**

**Virtual endpoint group**

Listener protocol

TCP, UDP, HTTP, or HTTPS

TCP, HTTP, or HTTPS only

Quota

-   TCP and UDP listeners: By default, you can create two default endpoint groups. To create more endpoint groups, increase the quota for **[gaplus\_quota\_epgs\_per\_listener](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_epgs_per_listener&keyword=gaplus_quota_epgs_per_listener)** on the Quota Management page.
    
    Each default endpoint group must be in a unique region.
    
-   HTTP and HTTPS listeners: You can create only one default endpoint group. You cannot increase the quota.
    

By default, you can create a total of 10 virtual endpoint groups. To create more virtual endpoint groups, increase the quota for **[gaplus\_quota\_vepg\_per\_listener](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_vepg_per_listener&keyword=gaplus_quota_vepg_per_listener)** on the Quota Management page.

The region of a virtual endpoint group must be the same as the region of the default endpoint group.

[Traffic distribution](/help/en/ga/user-guide/overview-4/#0d67471a7e6ad)

-   TCP and UDP listeners: Supported.
    
-   HTTP and HTTPS listeners: Not supported.
    

-   TCP listeners: Supported.
    
-   HTTP and HTTPS listeners: Not supported.
    

[Forwarding policies](/help/en/ga/user-guide/create-and-manage-forwarding-rules)

Associated with the default forwarding policy by default. Only default endpoint groups for TCP listeners can be associated with custom forwarding policies.

Can only be associated with custom forwarding policies.

**Note**

If your standard GA instance does not support adding virtual endpoint groups or configuring forwarding policies for TCP listeners, the instance version may not be supported. To use these features, contact your account manager to request an instance upgrade.

## Prerequisites

-   A standard Global Accelerator instance is created. For more information, see [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   A basic bandwidth plan is purchased and associated with the GA instance if the instance uses the subscription billing method.
    
-   You have deployed an application to serve as a backend service for Global Accelerator. For more information about the backend service types that GA supports, see [Endpoints](/help/en/ga/user-guide/overview-4/#section-kcj-zv4-t4j).
    

## Add a default endpoint group

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click **Add Listener**.
    
    **Note**
    
    If this is the first time that you add a listener or if no listener is created for the specified Global Accelerator instance, skip this step.
    
4.  On the **Configure Listener & Protocol** page, configure the listener protocol and port, and click **Next**.
    
    For more information about listener configurations, see [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120).
    
5.  On the **Configure Endpoint Group** page, configure the endpoint.
    
    **Configuration**
    
    **Description**
    
    **Endpoint Group Name**
    
    Enter a name for the endpoint group.
    
    **Region**
    
    Select the region where the endpoint group is deployed.
    
    **Note**
    
    If the region where the endpoint is deployed is not supported by Global Accelerator, select the region that is nearest to your endpoint. Global Accelerator forwards access requests to the optimal node in the endpoint group.
    
    **Backend IP Address Protocol**
    
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
    
    Endpoints are the destination hosts for client requests. Configure an endpoint based on the following information:
    
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
    
    Select whether to preserve client source IP addresses.
    
    If you select this option, the backend server can obtain client source IP addresses. For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
    
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
    
    After you enable this feature, you can use health checks to determine the health status of endpoints. For more information about health checks, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).
    
    **Note**
    
    For a UDP listener, an endpoint must have a TCP, HTTP, or HTTPS service configured to support health checks. Otherwise, it will be marked as abnormal.
    
    **Health Check Protocol**
    
    Select the protocol for health checks. TCP, HTTP, and HTTPS are supported.
    
    -   TCP health checks are based on network-layer detection. They send SYN handshake messages to check whether the server port is active.
        
    -   HTTP and HTTPS health checks are based on GET requests. They send GET requests to simulate browser access behavior to check whether the server application of the endpoint is healthy.
        
    
    **Port**
    
    The probe port that the health check service uses to access the endpoint.
    
    Valid values: 1 to 65535.
    
    **Health Check Domain Name**
    
    Configure the domain name for health checks. This feature is available only for pay-as-you-go GA instances.
    
    -   **Endpoint IP Address** (default): Uses the IP address of the endpoint as the domain name for health checks.
        
    -   **Custom Domain Name**: Enter a specified domain name.
        
    
    **Health Check Interval**
    
    The interval at which health checks are performed. Unit: seconds.
    
    Valid values: 1 to 50. Default value: 2.
    
    **URI**
    
    Specify the path for health checks. This parameter is available only when **Health Check Protocol** is set to HTTP or HTTPS.
    
    By default, the GA system sends GET requests to the default home page of the backend server application. If the page that you use for health checks is not the default home page of the application server, you must specify the path for health checks.
    
    **Healthy Threshold**
    
    The number of consecutive health checks required for the health check status to change. This is the number of consecutive failed health checks to change from healthy to unhealthy, or the number of consecutive successful health checks to change from unhealthy to healthy.
    
    Valid values: 2 to 10. Default value: 3.
    
    **Tag**
    
    Set a tag for the endpoint group.
    
    Mark and categorize the endpoint group by setting **Tag Key** and **Tag Value**. For more information, see [Tag management](/help/en/ga/user-guide/manage-tags).
    
6.  **Optional:** You can click **\+ Add Endpoint Group** and configure multiple endpoint groups as described in [Step](#step-vbx-mf8-srk) [5](#step-vbx-mf8-srk).
    
    **Note**
    
    For subscription instances, you can add more endpoint groups only for TCP and UDP listeners. For pay-as-you-go instances, you can add more endpoint groups for all types of listeners, such as TCP, UDP, HTTP, and HTTPS.
    
7.  In the **Cross-border Acceleration Settings** section, read the **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**.
    
    This step is required only if cross-border acceleration is not enabled for your Global Accelerator instance and your service configuration involves cross-border data transfer between the Chinese mainland and regions outside the Chinese mainland, or between other countries or regions.
    
8.  Click **Next**.
    
9.  On the **Configuration Review** page, confirm the configuration and click **Submit**.
    
    To modify the configuration, click **Modify** in the corresponding area to return to the configuration page.
    

## Add a virtual endpoint group

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click the number in the **Virtual Endpoint Group** column for the target listener.
    
4.  On the **Endpoint Group** tab, in the **Virtual Endpoint Group** section, click **Add Virtual Endpoint Group**.
    
5.  On the **Add Virtual Endpoint Group** page, configure the virtual endpoint group and click **Create**.
    
    For more information about parameter configurations, see [Add a default endpoint group](#section-3fg-g29-1xd).
    

## More operations

**Operation**

**Description**

Modify an endpoint group

1.  On the **Listeners** tab, find the target listener and click the endpoint group ID or number in the **Default Endpoint Group** column.
    
2.  On the **Endpoint Group** tab, find the default or virtual endpoint group that you want to manage and click **Edit** in the **Actions** column.
    
3.  On the **Modify Endpoint Group** or **Edit Virtual Endpoint Group** page, edit the endpoint group name, endpoints, and other information. Then, click **Save**.
    
    For more information about endpoint group configurations, see [Add a default endpoint group](#section-3fg-g29-1xd).
    
    **Warning**
    
    If you want to switch the protocol of the backend IP address, perform this operation during off-peak hours. The switch may interrupt existing connections and affect service traffic.
    

Set traffic dialing for an endpoint group

You can set the traffic ratio for different endpoint groups.

**Note**

For the subscription billing method, only TCP and UDP listeners support traffic distribution. For the pay-as-you-go billing method, all listener types support traffic distribution.

1.  On the **Listeners** tab, find the target listener and click **Modify Endpoint Group** in the **Actions** column.
    
2.  On the **Configure Listener & Protocol** page, click **Next**.
    
3.  On the **Configure Endpoint Group** page, find the target endpoint group, set the traffic distribution value, and click **Next**.
    
    The valid value for traffic dialing is an integer from 0 to 100. The unit is percent (%).
    
4.  On the **Configuration Review** page, confirm the configuration and click **Submit**.
    

Set the weight of an endpoint

The weight of an endpoint determines the proportion of traffic that Global Accelerator directs to each endpoint in an endpoint group.

Global Accelerator calculates the sum of the weights of all endpoints in an endpoint group. It then directs traffic to the endpoints based on the ratio of each endpoint's weight to the total weight. For example, to distribute one-third of the traffic to endpoint EP1 and two-thirds to endpoint EP2, you can set the weights of EP1 and EP2 to 1 and 2. If you want Global Accelerator to stop distributing traffic to an endpoint, set the weight of that endpoint to 0.

1.  On the **Listeners** tab, locate the target listener and click the ID or number of the endpoint group in the **Default Endpoint Group** or **Virtual Endpoint Group** column.
    
2.  On the **Endpoint Group** tab, find the endpoint group that contains the endpoint whose weight you want to set, and click **Edit** in the **Actions** column.
    
3.  On the **Modify Endpoint Group** or **Edit Virtual Endpoint Group** page, in the **Configuration** area, find the target endpoint, set the weight in the **Weight (Valid values: 0 to 255)** column, and click **Save**.
    
    The valid values are integers from 0 to 255.
    

View the egress public IP address of an endpoint

1.  On the **Listeners** tab, find the listener that you want to manage. In the **Actions** column, choose **![More operations](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **View Endpoint Group**.
    
2.  On the **Endpoint Group** tab, find the target endpoint group and view the endpoint's egress public IP address in the **Endpoint Group IPs** column.
    

**Note**

The system assigns at least four egress public IP addresses to each endpoint. The specific number of IP addresses depends on the billing method of the instance:

-   Pay-as-you-go: The number of IP addresses depends on the service traffic. When service traffic changes, the IP address range and the IP addresses for the endpoint's egress to the Internet are elastically scaled.
    
    You can query this information through the API. For more information, see [ListEndpointGroups](/help/en/ga/developer-reference/api-ga-2019-11-20-listendpointgroups) and [ListEndpointGroupIpAddressCidrBlocks](/help/en/ga/developer-reference/api-ga-2019-11-20-listendpointgroupipaddresscidrblocks).
    
-   Subscription: The number of IP addresses depends on the instance type. When you upgrade or downgrade the instance type, egress public IP addresses for the endpoint may be added or removed.
    
    You must manually confirm newly added egress public IP addresses before they can become active. You can confirm them in the console as prompted or by calling the [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm) operation.
    

Delete an endpoint group

You can delete an endpoint group that you no longer need. After an endpoint group is deleted, Global Accelerator stops forwarding traffic to that endpoint group.

**Warning**

If a listener is associated with only one endpoint group and you delete the endpoint group, the listener becomes unavailable. Proceed with caution.

1.  On the **Listeners** tab, find the desired listener and click its endpoint group ID or number in the **Default Endpoint Group** column.
    
2.  On the **Endpoint Group** tab, find the default or virtual endpoint group that you want to delete and click **Delete** in the **Actions** column.
    
3.  In the dialog box, click **OK**.
    

Delete an endpoint

You can delete an endpoint that you no longer need. After an endpoint is deleted, Global Accelerator stops forwarding traffic to that endpoint. If an endpoint group contains only one endpoint, you cannot delete the endpoint.

1.  On the **Listeners** tab, click the endpoint group ID or number in the **Default Endpoint Group** column for the target listener.
    
2.  On the **Endpoint Group** tab, find the default or virtual endpoint group for the endpoint that you want to delete, and click **Edit** in the **Actions** column.
    
3.  In the **Endpoint Configuration** section on the **Modify Endpoint Group** page, find the endpoint to delete, click **Delete** in the **Actions** column, and then click **Save**.
    

## References

## Tutorials

-   For more information about how to configure multiple endpoint groups and traffic dialing, see the following topics:
    
    -   [Principles and scenarios of traffic dialing among multiple endpoint groups](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#task-2181288)
        
    -   [Use GA traffic dialing to implement smooth traffic switching across regions](/help/en/ga/use-cases/examples-on-how-to-configure-the-traffic-distribution-feature-for-multiple-endpoint-groups)
        
-   After you create an endpoint group for a listener, you can [create a custom forwarding policy](/help/en/ga/user-guide/create-and-manage-forwarding-rules#task-2039265). The listener can then forward requests that match the policy conditions to the associated default or virtual endpoint group. This allows a single GA instance to accelerate access to multiple destination endpoints.
    
-   For a tutorial about how to configure the HTTP/2 protocol to connect to backend services in GA, see: [Use HTTP/2 to connect to backend services](/help/en/ga/use-cases/configure-http-2-protocol-back-to-origin-in-global-acceleration).
    
-   For a tutorial about how to configure port mappings in GA, see [Use GA port mappings to improve application flexibility and security](/help/en/ga/use-cases/use-ga-port-mapping-to-improve-application-flexibility-and-security).
    
-   For a tutorial about how to obtain client source IP addresses with different GA listener protocols, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

## API reference

-   [CreateEndpointGroup](/help/en/ga/api-createendpointgroup#doc-api-Ga-CreateEndpointGroup): Creates an endpoint group for a standard Global Accelerator instance.
    
-   [CreateEndpointGroups](/help/en/ga/developer-reference/api-ga-2019-11-20-createendpointgroups): Creates multiple endpoint groups for a standard Global Accelerator instance.
    
-   [UpdateEndpointGroup](/help/en/ga/api-updateendpointgroup#doc-api-Ga-UpdateEndpointGroup): Modifies the configurations of an endpoint group for a standard Global Accelerator instance.
    
-   [DeleteEndpointGroup](/help/en/ga/api-deleteendpointgroup#doc-api-Ga-DeleteEndpointGroup): Deletes an endpoint group for a standard Global Accelerator instance.
