Service providers can create endpoint services to privately share services with authorized users, simplifying network architecture without exposing services to the public internet.

-   **Secure private access**: Service traffic is transmitted over a private network, protecting data from internet exposure and security risks.
    
-   **Simplified network architecture**: PrivateLink creates an elastic network interface (ENI) in the consumer's virtual private network (VPC), serving as a local access point. Consumers can access the service like any other VPC resource, eliminating VPC peering connections or Cloud Enterprise Network (CEN) instances and preventing IP address conflicts.
    

## How it works

-   **Service provider**: Deploys a Server Load Balancer (SLB) instance, including Network Load Balancer (NLB), Application Load Balancer (ALB), or Classic Load Balancer (CLB), in the service region, then creates an endpoint service.
    
-   **Service consumer**: Creates an interface endpoint in their VPC using the endpoint service name to establish private network access. Once connected to [other VPCs](/help/en/vpc/cross-vpc-interconnection-overview/) or [data centers](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud), they can access the service through the interface endpoint.
    

> Both service providers and consumers must be Alibaba Cloud users. Endpoints and endpoint services must be in the same region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3940619671/CAEQTxiBgMDL8Jed2BkiIDZhOWQ4Y2IyOTc0ZDQ2NDM4YjVlNmRjMDkxOTAyMWFh5065942_20250421182009.045.svg)

## **Share your services**

Service providers must deploy an SLB instance with backend servers and create an endpoint service in the target region.

Supported service resources: [NLB instances (public or private)](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance), [ALB instances (public or private)](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances), and [CLB instances (private, pay-as-you-go)](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances).

> Before you begin, ensure service resources are configured and backend services are deployed.

### **Console**

#### Create an endpoint service (Service provider)

1.  Go to the [Create Endpoint Service](https://vpcnext.console.alibabacloud.com/endpointservice/cn-hangzhou/endpointservices/new) page in the PrivateLink console and configure the following:
    
    -   **Region**: Select the service region.
        
    -   **EPS Resource Type**: Select the resource type. For high availability, add service resources from multiple zones.
        
    -   **Automatically Accept Endpoint Connections**: Choose whether to automatically accept connection requests. This setting doesn't affect existing connections if changed later.
        
        -   **Yes**: Connections are established automatically when consumers create interface endpoints.
            
        -   **No**: You must manually approve each connection request.
            
    -   **Zone Affinity**: Enable this feature if consumers need low-latency access. When both provider and consumer enable zone affinity, traffic from the same zone is routed to the local ENI for optimal performance.
        
    -   **IP Version**: Select IPv4 or Dual-stack. Choose Dual-stack only if all service resources support it (CLB doesn't support dual-stack).
        
    -   **Payer**: Select who pays for the PrivateLink connection ([billing details](/help/en/privatelink/private-link-billing-description#section-4zx-gat-sg7)). Default is the service consumer. This cannot be changed later.
        
    
2.  After creating the endpoint service, [configure the service whitelist](#91fda3b617gd9) to authorize other accounts to connect.
    
    On the endpoint service details page, click the **Service Whitelist** tab, then **Add to Whitelist**:
    
    -   `*`: Allow all Alibaba Cloud accounts to connect.
        
    -   Account UIDs: Allow only specified accounts to connect.
        
    

#### Create an interface endpoint (Service consumer)

1.  Go to the [Create Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/endpoints/new) page.
    
2.  Configure the interface endpoint with the following settings:
    
    -   **Region**: Select the same region as the endpoint service (cross-region connections aren't supported).
        
    -   **Endpoint Service**: Select **Other Endpoint Services** and enter the service name to authenticate and gain access.
        
    -   **VPC** and **Zone and vSwitch**:
        
        -   Select zones where the endpoint service is available. The zone must match a service resource zone. For high availability, select vSwitches in at least two zones.
            
        -   Optionally assign a specific IP address from the vSwitch to the ENI. If not specified, the system auto-assigns one.
            
            > Don't use [system reserved IP addresses](/help/en/vpc/vpc-and-vswitch#5f937095d5m15).
            
    -   **Security Group**: Associate a security group to control inbound traffic for all endpoint zone ENIs.
        
    -   **IP Version**: Select **Dual-stack** if the service supports it (enables IPv4 and IPv6 access). Otherwise, select **IPv4**.
        
    -   **Zone Affinity**: If the service supports zone affinity, enable it for optimal performance:
        
        -   When accessing from the same zone using the endpoint domain name, traffic routes to the local ENI for lowest latency.
            
        -   When accessing from different zones, traffic distributes across all endpoint zones.
            
    
3.  Test the connection from an ECS instance in the same VPC:
    
    ```
    ping <IP address of the ENI in the endpoint zone>
    # Find the private IP address of the ENI on the Zones and ENIs tab of the instance details page.
    # For HTTP/HTTPS services, directly access the service port.
    curl -sI https://<endpoint domain name>
    # Find the endpoint domain name on the instance list page. 
    ```
    

### **API**

-   Service provider: Call the [CreateVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-createvpcendpointservice) operation to create an endpoint service.
    
-   Service consumer: Call the [CreateVpcEndpoint](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-createvpcendpoint) operation to create an endpoint.
    

## **Control service access**

Control who can access your endpoint service using the whitelist and automatic acceptance settings:

-   **Trusted users only**: Add specific account IDs to the whitelist and enable automatic acceptance.
    
-   **Broader access with approval**: Add `*` to the whitelist and disable automatic acceptance to manually review each request.
    

### **Service whitelist**

By default, only your account can access the endpoint service. Add other accounts to the whitelist to grant access:

1.  **Phased rollout**: Incrementally add account IDs during testing. Add `*` when ready for public access.
    
2.  **Restricted access**: Add only specific account IDs for private services.
    

### **Console**

On the endpoint service details page, go to **Service Whitelist** > **Add to Whitelist**:

-   `*`: Allow all accounts
    
-   Account UIDs: Allow specific accounts only
    

### **API**

-   Call the [AddUserToVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-addusertovpcendpointservice) operation to add an account to the service whitelist.
    
-   Call the [RemoveUserFromVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-removeuserfromvpcendpointservice) operation to remove an account from the service whitelist.
    

### **Automatically accept endpoint connections**

A service consumer can access the endpoint service over a private network only after the service provider accepts the endpoint connection request.

### **Console**

-   When you create an endpoint service, set **Automatically Accept Endpoint Connections**:
    
    -   **Yes**: The connection is automatically established.
        
    -   **No**: Go to the **Endpoint Connections** tab of the target endpoint service and select **Allow** or **Deny** in the Actions column for each connection request.
        
-   After the endpoint service is created, go to the **Basic Information** tab of the target endpoint service to **Enable** or **Disable** automatic acceptance of endpoint connections. Modifying this option after creation does not affect existing connections.
    

### **API**

-   When you call the [CreateVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-createvpcendpointservice) and [UpdateVpcEndpointServiceAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointserviceattribute) operations, set the `AutoAcceptEnabled` parameter to specify whether to automatically accept endpoint connections.
    
-   If you set `AutoAcceptEnabled` to `false`, call the [EnableVpcEndpointConnection](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-enablevpcendpointconnection) or [DisableVpcEndpointConnection](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-disablevpcendpointconnection) operation to allow or deny endpoint connection requests.
    

## **Ensure high availability for service access**

1.  Configure service resources in multiple zones for the endpoint service.
    
    -   If the service resources are NLB or ALB instances, add instances from multiple zones.
        
    -   If the service resource is a CLB instance, add multiple CLB instances with different primary zones.
        
2.  Select vSwitches from at least two zones when creating an interface endpoint.
    
3.  Use the endpoint domain name to access the service. Alibaba Cloud provides fully managed availability monitoring to ensure rapid failover to other zones if a fault occurs:
    
    -   ENI IP addresses in different endpoint zones are monitored in real time. If an anomaly is detected, the corresponding DNS record is removed to prevent service interruptions or data loss.
        
    -   After the fault is resolved, the corresponding DNS record is restored automatically.
        
    

### **Console**

#### **Configure multi-zone service resources for an endpoint service as a service provider**

-   When creating an endpoint service, select service resources from multiple zones.
    
-   After creation, click the endpoint service ID. On the **Basic Information** tab, click **Add Service Resource** and select the resource instances to add.
    

#### **Configure multiple zones for an interface endpoint as a service consumer**

-   When creating an interface endpoint, select vSwitches from at least two zones.
    
-   After creation, click the interface endpoint ID. On the **Zones And ENIs** tab, click **Add Zone**.
    

To ensure high availability, use the endpoint domain name to access the service. You can find the **Endpoint Domain Name** on the Interface Endpoints page.

### **API**

#### **Endpoint service configuration**

-   Call [AttachResourceToVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-attachresourcetovpcendpointservice) to add a service resource to an endpoint service.
    
-   Call [DetachResourceFromVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-detachresourcefromvpcendpointservice) to remove a service resource from an endpoint service.
    

#### **Endpoint configuration**

-   Call [AddZoneToVpcEndpoint](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-addzonetovpcendpoint) to add a zone to an endpoint.
    
-   Call [RemoveZoneFromVpcEndpoint](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-removezonefromvpcendpoint) to remove a zone from an endpoint.
    

## **Allocate service resources**

To prevent service resource overload, add multiple service resources to each zone of an endpoint service. This distributes traffic by allowing different endpoint connections to use different service resources. If one service resource fails, the endpoint connection automatically fails over to another available service resource in the same zone.

> If the service resource is a CLB instance, you can directly [replace the service resources of a zone](#ae0907e706jw3) without disconnecting the endpoint connection.

> The features for replacing zone service resources and manually allocating service resources are disabled by default. To enable them, go to the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/privatelink/quotas) and request the **privatelink\_whitelist/svc\_res\_mgt\_uat** quota.

1.  Service resource allocation method: Specify whether to automatically or manually allocate a service resource to an endpoint zone connection. Each zone must have at least one service resource that can be automatically allocated.
    
2.  Allocate service resources for endpoint zone connections:
    
    -   When the service provider automatically accepts endpoint connections:
        
        -   PrivateLink automatically allocates a service resource from the same zone to the endpoint zone connection based on resource bandwidth and the number of connections. The allocated service resource must be configured for automatic allocation.
            
        -   If the automatically allocated service resource is insufficient, disconnect the endpoint zone connection, manually allocate a different service resource, and then allow the connection again.
            
    
    -   When the service provider manually accepts endpoint connections:
        
        -   Manually allocate a service resource before you allow the connection. If you do not manually allocate a service resource, select **Allow Connection And Automatically Allocate Service Resource** when you allow the endpoint connection.
            
        -   If the automatically allocated service resource is insufficient, disconnect the endpoint zone connection, manually allocate a different service resource, and then allow the connection again.
            
    

### **Add/Remove Service Resources**

### **Console**

#### **Add a service resource**

1.  Go to the [Endpoint Services page](https://vpc.console.alibabacloud.com/endpointservice/cn-hangzhou/endpointservices) and click the ID of the target endpoint service to open its details page.
    
2.  On the **Basic Information** tab, in the **Service Resources** section, click **Add Service Resource**. Select a zone and a specific service resource.
    

#### **Remove a service resource**

On the **Basic Information** tab of the target endpoint service, in the **Service Resources** section, find the target service resource and click **Delete** in the **Actions** column. This removes the service resource from the endpoint service without deleting the underlying SLB instance.

You cannot remove a service resource that is associated with an endpoint zone connection. Disconnect the endpoint zone connection first.

### **API**

-   Call [AttachResourceToVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-attachresourcetovpcendpointservice) to add a service resource to an endpoint service.
    
-   Call [DetachResourceFromVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-detachresourcefromvpcendpointservice) to remove a service resource from an endpoint service.
    

### **Set the allocation method for a specific service resource**

### **Console**

On the details page of the target endpoint service, go to the **Basic Information** tab. In the **Service Resources** section, turn on or off the **Automatic Allocation** switch for the target service resource to control whether the service resource can be automatically allocated to endpoint connections.

-   Ensure that each zone contains at least one service resource that can be automatically allocated.
    
-   Changing the **Automatic Allocation** setting for a service resource does not affect existing endpoint connections.
    

### **API**

Call [UpdateVpcEndpointServiceResourceAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointserviceresourceattribute) and set the `AutoAllocatedEnabled` parameter to specify the allocation method for the service resource.

### Manually allocate a service resource to an endpoint zone connection

### **Console**

1.  On the details page of the target endpoint service, go to the **Endpoint Connections** tab. Disconnect the endpoint connection in one of the following ways:
    
    -   Disconnect connections in all zones: Find the target endpoint and click **Reject** in the **Actions** column. This makes the endpoint service unavailable. Proceed with caution.
        
    -   Disconnect the connection in a specific zone: Click the **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3978465761/p402216.png)** icon next to the target endpoint, find the target zone, and click **Disconnect Service Resource** in the Actions column. This may interrupt service connections. Evaluate the impact before proceeding.
        
    
2.  Adjust the service resource allocation method:
    
    -   Automatically allocate a service resource: Click the **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3978465761/p402216.png)** icon next to the target endpoint, find the target zone, and click **Allocate Service Resource** in the Actions column. Select **Automatic Allocation** and click **Connect Service Resource**.
        
        > If the endpoint zone connection already has a specified service resource, selecting **Automatic Allocation** removes the specified service resource.
        
    -   Manually allocate a service resource: Click the **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3978465761/p402216.png)** icon next to the target endpoint, find the target zone, and click **Allocate Service Resource** in the Actions column. Click **Manual Allocation**, select an existing service resource, and click **Connect Service Resource**.
        
    

### **API**

1.  Call [DisableVpcEndpointZoneConnection](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-disablevpcendpointzoneconnection) to disconnect an endpoint zone connection.
    
2.  Call [UpdateVpcEndpointZoneConnectionResourceAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointzoneconnectionresourceattribute) to allocate a service resource to an endpoint zone:
    
    1.  Set `ResourceAllocateMode` to `Auto` to automatically allocate a service resource.
        
    2.  Set `ResourceAllocateMode` to `Manual` and specify the `ResourceId` to manually allocate a service resource.
        
3.  Call [EnableVpcEndpointZoneConnection](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-enablevpcendpointzoneconnection) to allow an endpoint zone connection.
    

### **Replace zone service resources**

If the service resource is a CLB instance, you can directly replace zone service resources without disconnecting the endpoint connection.

### **Console**

1.  On the details page of the target endpoint service, go to the **Basic Information** tab. In the **Service Resources** section, turn off **Automatic Allocation** for the target service resource.
    
2.  Replace the service resource for the target endpoint connection in one of the following two ways:
    
    -   On the **Basic Information** tab of the endpoint service details page, in the **Service Resources** section, find the target service resource and click **Replace Resource** in the **Actions** column. Select the new service resource and the target endpoint connection whose service resource you want to replace.
        
    -   On the **Endpoint Connections** tab of the endpoint service details page, click the **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3978465761/p402216.png)** icon next to the target endpoint. Find the target zone and click **Replace Service Resource** in the Actions column.
        
    
3.  Select a migration method. Smooth migration is recommended. Forcible migration may interrupt service connections. Evaluate the impact before proceeding.
    
    -   **Smooth Migration**:
        
        -   The system first creates a new ENI for the endpoint zone connection, connects the new ENI to the new service resource, and adds the IP address of the new ENI to the DNS record.
            
        -   The system then removes the old ENI's IP address from the DNS record.
            
        -   You must determine when all existing connections are terminated. Then, in the **Actions** column of the target zone, click **Disconnect Old Service Resource**. After disconnection, the old ENI is permanently deleted.
            
    -   **Forcible Migration**: After migration completes, the original service resource is directly removed from the endpoint service. Forcible migration interrupts all service connections that depend on the original service resource and may disrupt service connections. Evaluate the impact before proceeding.
        

### **API**

Call [UpdateVpcEndpointZoneConnectionResourceAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointzoneconnectionresourceattribute) to replace the service resource for an endpoint zone connection.

## **Modify the bandwidth of an endpoint connection**

You can configure bandwidth throttling for endpoint connections to precisely control traffic and prevent backend service resource overload. The ENIs in each endpoint zone automatically inherit the bandwidth limit of the endpoint connection.

-   Default bandwidth limit: A default bandwidth limit is applied to an endpoint connection when the endpoint connection enters the Connected state.
    
    -   When the service resource is a CLB:
        
        -   The default bandwidth for an endpoint connection is 3,072 Mbit/s. Valid values: 100 to 10240. Unit: Mbit/s.
            
        -   The default bandwidth limit can be modified. Modifications to the default bandwidth limit do not affect the bandwidth of existing endpoint connections. The modifications apply only to new endpoint connections.
            
    -   If the service resources are NLB or ALB instances, the default bandwidth limit is not supported.
        
-   Configure bandwidth throttling for a specific endpoint connection: You can configure an appropriate bandwidth limit to prevent service resource overload. After you configure bandwidth throttling for a specific endpoint connection, the default bandwidth limit no longer applies to the endpoint connection.
    
    -   Enable bandwidth throttling:
        
        -   If the endpoint service is configured to automatically accept endpoint connections, you can enable bandwidth throttling after the endpoint connection is established.
            
        -   If the endpoint service is configured to manually accept endpoint connections, you can enable bandwidth throttling when you accept the endpoint connection.
            
    -   Bandwidth limit ranges for different service resources:
        
        -   NLB and ALB: The minimum bandwidth is 100 Mbit/s and the maximum bandwidth is 25 Gbit/s.
            
        -   CLB: The minimum bandwidth is 100 Mbit/s and the maximum bandwidth is 10,240 Mbit/s.
            

### **Console**

-   Modify the default bandwidth limit: On the details page of the target endpoint service, on the **Basic Information** tab, click **Modify** next to **Default Bandwidth Limit**.
    
-   Configure bandwidth throttling for a specific endpoint connection: On the details page of the target endpoint service, on the **Endpoint Connections** tab, find the target endpoint and in the **Actions** column, enable, modify, or disable bandwidth throttling.
    

### **API**

-   Call [UpdateVpcEndpointServiceAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointserviceattribute) and configure the `Bandwidth` parameter to modify the bandwidth of the endpoint service.
    
-   Call [UpdateVpcEndpointConnectionAttribute](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-updatevpcendpointconnectionattribute) and configure the `Bandwidth` parameter to modify the bandwidth of the endpoint connection.
    

## **Stop an endpoint service**

A service provider can delete an endpoint service to stop providing it. If you delete an endpoint service, the endpoint service becomes unavailable and all endpoint connections to the endpoint service are disconnected. Proceed with caution.

### **Console**

1.  Before you delete the endpoint service, you must disconnect or reject all endpoint connections to the endpoint service and remove all service resources from the endpoint service.
    
2.  Click **Delete** in the **Actions** column of the target endpoint service.
    

### **API**

1.  Call [DisableVpcEndpointZoneConnection](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-disablevpcendpointzoneconnection) to disconnect the endpoint zone connection.
    
2.  Call [DetachResourceFromVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-detachresourcefromvpcendpointservice) to remove the service resources from the endpoint service.
    
3.  Call [DeleteVpcEndpointService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-deletevpcendpointservice) to delete the endpoint service.
    

## **FAQ**

-   Why can't service consumers find the endpoint service?
    
    Make sure that the Alibaba Cloud account ID of the service consumer is added to the service whitelist. Only Alibaba Cloud accounts that are added to the service whitelist can search for and connect to the endpoint service.
    
-   Why is the connection state always **Disconnected**?
    
    Check whether **Automatically Accept Endpoint Connections** is enabled for the endpoint service. If this feature is not enabled, go to the **Endpoint Connections** tab to allow the endpoint connection request.
