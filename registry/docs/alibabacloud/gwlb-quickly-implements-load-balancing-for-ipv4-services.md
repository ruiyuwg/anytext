You can use Gateway Load Balancer (GWLB) for configuring, expanding, and managing third-party network virtual appliances (NVAs), such as firewalls and intrusion detection systems. This topic describes how to configure a GWLB instance and GWLB endpoints to create a security check system for IPv4 traffic.

## Example scenario

To enhance business security and reliability, an enterprise wants to route IPv4 traffic over the Internet to NVAs for security checks before forwarding the traffic to application servers for processing.

The enterprise uses GWLB to manage NVAs, which ensures that the traffic is strictly inspected and processed before being forwarded to application servers. The following figure demonstrates the scenario. In this example scenario, the enterprise creates a business VPC and a security VPC using an Alibaba Cloud account in the China (Ulanqab) region.

-   The business VPC is responsible for running the application system and has an IPv4 gateway to route traffic over the Internet to NVAs.
    
    In the business VPC, an application server subnet and a GWLB endpoint subnet are deployed. In the application server subent, an Elastic Compute Service (ECS) application server is deployed with assessible application services running on it. In the GWLB endpoint subnet, a GWLB endpoint is created.
    
-   The security VPC is responsible for running NVAs.
    
    In the security VPC, a GWLB instance is created. NVAs are mounted to the backend server group associated with the GWLB instance. An endpoint service is created in the security VPC with the GWLB instance specified as the service resource of the endpoint service.
    

A connection is established between the GWLB endpoint and the endpoint service, which is in the Connected state. Traffic over the Internet can be routed to NVAs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7579595671/CAEQUBiBgMDrgc6t2RkiIDBmMzc2ZjI3ZDU2ZDQ5NTJhNWJhNTA4M2E4ZWU0MzE34296247_20240325101712.815.svg)

**Flow for IPv4 business traffic from client to application server (black arrows)**

**Flow for IPv4 business traffic from application server to client (blue arrows)**

1.  The gateway receives inbound business traffic over the Internet.
    
2.  The gateway sends the traffic to the GWLB endpoint based on its route table.
    
3.  The GWLB endpoint forwards the traffic to GWLB, and GWLB forwards the traffic to the NVAs.
    
4.  The NVAs perform a security check on the traffic and forward the traffic back to GWLB. GWLB then forwards the traffic back to the GWLB endpoint through the connection established using the PrivateLink service.
    
5.  The traffic is forwarded to the application server based on the route table for the GWLB endpoint subnet.
    

1.  The traffic is sent to the GWLB endpoint based on the route table for the application server subnet.
    
2.  The GWLB endpoint sends the traffic to GWLB, and GWLB forwards the traffic to the NVAs.
    
3.  The NVAs perform a security check on the traffic and forward the traffic back to GWLB. GWLB then forwards the traffic back to the GWLB endpoint through the connection established using the PrivateLink service.
    
4.  The traffic is sent to the gateway based on the route table for the GWLB endpoint subnet.
    
5.  The gateway routes the traffic to the client.
    

## Limits

-   One or more NVAs must be running.
    
-   The security group in the backend server group must allow UDP traffic on port 6081.
    
-   An endpoint service must be created in regions and zones where both PrivateLink and GWLB instances are available. For more information about the regions and zones where PrivateLink and GWLB instances are available, see [Regions and zones that support PrivateLink](/help/en/privatelink/regions-and-zones-that-support-private-network-connections#concept-2001901) and [Regions and zones in which GWLB is available](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/regions-and-zones-supported-by-gwlb).
    
-   The zones where a GWLB endpoint is deployed must be a subset of the zones where a GWLB instance is deployed.
    

## Prerequisites

-   A business VPC and a security VPC are created. An application server subnet and a GWLB endpoint subnet are created in Zone B of the business VPC, and a GWLB subnet is created in Zone B of the security VPC. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
-   An IPv4 gateway is created, activated, and associated with the business VPC. For more information, see [Create and manage an IPv4 gateway](/help/en/vpc/user-guide/create-and-manage-an-ipv4-gateway).
    
-   Route tables are created for the IPv4 gateway, application server subnet, and GWLB endpoint subnet. For more information, see [Create and manage a route table](/help/en/vpc/user-guide/create-and-manage-route-table).
    
-   An ECS application server is created in the business VPC, and application services are deployed on the ECS instance. A public IP address is assigned to the ECS instance if it needs to communicate over the Internet. ECS instances ECS01 and ECS02 are created in Zone B of the security VPC, and NVA images are deployed on ECS01 and ECS02, respectively. Both ECS01 and ECS02 support the Jumbo Frames feature, as Geneve-encapsulated packets have an additional 68 bytes of data, which may cause packets to exceed 1,500 bytes. For more information, see [Network MTU](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/overview-of-gwlb-instances/#30051e6474dux).
    
    -   For ECS instance types that support Jumbo Frames, see [Instance families that support jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#bac5967453wnm).
        
    -   For more information about creating ECS instances, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
        
    -   For more information about deploying NVA images, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
        

-   Security groups are created for the ECS application server, ECS01, and ECS02, with security group rules configured based on your business and security requirements. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).
    

## Procedure

### **Step 1: Create a GWLB instance**

A GWLB instance is a running entity that provides the GWLB service. To use the GWLB service, you must first create a GWLB instance.

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  On the **Instances** page, click **Create GWLB**.
    
4.  On the Gateway Load Balancer - Alibaba Cloud International Site, configure the parameters.
    
    The following table describes only the key parameters. Use the default values for other parameters. For more information about the parameters, see [Create and manage a GWLB instance](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-gwlb-instances).
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Specify an instance name.
    
    **VPC**
    
    Select the security VPC.
    
    **Region and Zone**
    
    Select the region in which you want to create the GWLB instance. In this topic, **China (Ulanqab)** is selected.
    
    **Zone**
    
    Select one or more zones. In this example, **Ulanqab Zone B** is selected, and the vSwitch of the GWLB subnet is selected.
    
    **IP version**
    
    Select an IP version. In this topic, **IPv4** is selected.
    
    **Service-linked Role**
    
    The first time you create a GWLB instance, click **Create Service-linked Role** to create the **AliyunServiceRoleForGwlb** service-linked role.
    
    **Note**
    
    This parameter is displayed only the first time you create a GWLB instance.
    
5.  Click **Buy Now** and complete the payment.
    
6.  Return to the **Instances** page and select the region where the GWLB instance is deployed to view the GWLB instance.
    

### **Step 2: Create a backend server group**

To process client requests forwarded by the GWLB instance, you must create a server group and add backend servers to the server group.

1.  In the left-side navigation pane, choose **GWLB** > **Server Groups**.
    
2.  On the **Server Groups** page, click **Create Server Group**.
    
3.  In the **Create Server Group** dialog box, configure the parameters and click **Create**.
    
    The following table describes only the key parameters. Use the default values for other parameters. For more information about the parameters, see [Create and manage a server group](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-server-group).
    
    **Parameter**
    
    **Description**
    
    **Server Group Type**
    
    Select a server group type. In this example, **Server** is selected.
    
    **Server Group Name**
    
    Specify a server group name.
    
    **VPC**
    
    Select the security VPC in which the ECS instances are deployed.
    
    **Note**
    
    Select the VPC in which the GWLB instance is deployed.
    
    **Scheduling Algorithm**
    
    Select a scheduling algorithm. In this example, **5-tuple Hashing** is selected.
    
    **Health Check Method**
    
    Select a health check method or disable health checks. In this example, **TCP** is selected.
    
    **Health Check Port**
    
    Specify a health check port. In this example, **80** is specified.
    
4.  In the **The server group is created** message, click **Add Backend Server**.
    
5.  On the **Backend Servers** tab of the page that appears, click **Add Backend Server**.
    
6.  In the **Add Backend Server** panel, set **Server Type**. In this example, set **Server Type** to **ECS/ENI**.
    
7.  Select ECS01 and ECS02 and click **Next**.
    
    **Note**
    
    -   In this example, set **Server Type** to **ECS/ENI**.
        
    -   Make sure that NVA images are deployed on the backend servers and that the backend servers use the Geneve protocol.
        
    

### **Step 3: Configure a listener**

To forward packets across all ports to the backend servers using the Geneve protocol, you must configure a listener for the GWLB instance and associate the listener with the backend server group.

1.  In the left-side navigation pane, choose **GWLB** > **Instances**, and click the instance ID.
    
2.  Click the **Listeners** tab and click **Create IP Listener**.
    
3.  In the **Select Server Group** step, set **Server Group Type** and select the server group that is created.
    
4.  The page displays the backend server list. Click **OK**.
    

### Step 4: Configure an endpoint service

To allow the GWLB instance to provide services, you must create an endpoint service.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/endpointservice/eu-central-1/endpointservices).
    
2.  On the **Endpoint Service** page, click **Create Endpoint Service**.
    
3.  On the **Create Endpoint Service** page, configure the parameters and click **OK**.
    
    The following table describes only the parameters that are relevant to this topic.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    In this example, **China (Ulanqab)** is selected.
    
    **Service Resource Type**
    
    Select the type of the service resource that you want to add to the endpoint service. In this example, **GWLB** is selected.
    
    **Select Service Resource**
    
    Select the zone where the service resource is available and select the service resource.
    
    In this example, **Ulanqab Zone B** is selected, and the GWLB instance created in [Step 1: Create a GWLB instance](#e69fb436adbu5) is selected.
    
    **Network Type**
    
    In this example, **IPv4** is selected.
    
    **Automatically Accept Endpoint Connections**
    
    Specify whether the endpoint service automatically accepts connection requests from endpoints. In this example, **Yes** is selected.
    
    **Note**
    
    If you select **Yes**, after an endpoint is created, the endpoint service automatically accepts connection requests from the endpoint.
    
    **Service Payer**
    
    In this example, **Service Consumer** is selected.
    

### **Step 5: Configure a GWLB endpoint**

To allow the GWLB instance to communicate with the endpoint service, you must create a GWLB endpoint.

1.  Log on to the [Endpoint console](https://vpc.console.alibabacloud.com/endpoint/eu-central-1/endpoints).
    
2.  On the **Interface Endpoint** tab of the **Endpoints** page, click **Create Endpoint**.
    
3.  On the **Create Endpoint** page, configure the parameters and click **OK**.
    
    The following table describes only the parameters that are relevant to this topic:
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    In this example, **China (Ulanqab)** is selected.
    
    **Endpoint Name**
    
    Specify an endpoint name.
    
    **Endpoint Type**
    
    Select an endpoint type. In this example, **Gateway Endpoint** is selected.
    
    **Endpoint Service**
    
    In this example, **Select Service** is selected and the endpoint service, as created in [Step 4: Configure an endpoint service](#baaa08a202yt9), is selected.
    
    **VPC**
    
    Select the VPC in which the endpoint is deployed. In this example, the business VPC is selected.
    
    **Zone and vSwitch**
    
    Select the zone where the service resource of the endpoint service is deployed and select the vSwitch in this zone. The system automatically creates an endpoint elastic network interface (ENI) in the vSwitch.
    
    In this example, **Ulanqab Zone B** is selected, and the vSwitch of the GWLB endpoint subnet is selected.
    
    **Network Type**
    
    In this example, **IPv4** is selected.
    
    **Note**
    
    Make sure that the endpoint connection of the endpoint service is in the Connected state.
    

### **Step 6: Configure routes**

To route network traffic to the GWLB endpoint, you must configure routes.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Route Tables**.
    
3.  In the top navigation bar, select the region to which the route tables belong.
    
4.  On the **Route Tables** page, click the ID of the route table that you want to modify.
    
    **Note**
    
    Route tables that must be modified include the IPv4 gateway route table, the route table for the application server subnet, and the route table for the GWLB endpoint subnet. Modify them one by one.
    
5.  On the **Route Entry List** tab of the **Route Table Details** page, click the **System Route** tab and view the routes that are created by the system.
    
    Routes destined for the CIDR block of a vSwitch of the VPC to which the route table belongs are automatically added by the system to a custom route table. These routes are used for communication between cloud resources within the vSwitch.
    
6.  Modify system routes: For the IPv4 gateway, on the **Route Entry List** > **System Route** tab, find the system route that you want to modify and click **Modify** in the **Actions** column. In the **Modify Route Entry** dialog box, configure the parameters and click **OK**. Then this route appears on the **Custom Route** tab. The parameters are described below.
    
    **Parameter**
    
    **Description**
    
    **Destination CIDR Block**
    
    Displays the destination CIDR block of traffic. **Destination CIDR Block** cannot be modified. In this example, 192.168.2.0/24 is displayed.
    
    **Name**
    
    Specify a new route name.
    
    **Next Hop**
    
    Select the type of the next hop. In this example, **GWLB Endpoint** is selected.
    
    **GWLB Endpoint**
    
    The GWLB endpoint, as created in [Step 5: Configure a GWLB endpoint](#6866c97218g4d), is selected.
    
7.  Add custom routes: For route tables for the application server subnet and GWLB endpoint subnet, click the **Custom Route** tab, click **Add Route Entry**, set **Destination CIDR Bock** and **Next Hop**, and click **OK**. Set the parameters as follows:
    
    -   For the route table for the application server subnet, **Destination CIDR Block** is set to **0.0.0.0/0**, and **Next Hop** is set to **GWLB Endpoint**.
        
    -   For the route table for the GWLB endpoint subnet, **Destination CIDR Block** is set to **0.0.0.0/0**, and **Next Hop** is set to **IPv4 Gateway**.
        

-   **Route table configurations for the IPv4 gateway**
    
    The route table of the IPv4 gateway must contain an entry that routes traffic destined for the application server to the GWLB endpoint. The following table describes the route table configurations required for the IPv4 gateway in this example. These configurations are for reference only.
    
    **Destination CIDR Block**
    
    **Next Hop**
    
    **Type**
    
    192.168.5.0/24
    
    local
    
    system route entry
    
    192.168.2.0/24
    
    GWLB endpoint
    
    custom route entry
    
-   **Configurations for the route table for the application server subnet**
    
    The route table for the application server subnet must contain an entry that routes all traffic from the application server to the GWLB endpoint. The following table describes the configurations required for the route table for the application server subnet in this example. These configurations are for reference only.
    
    **Destination CIDR Block**
    
    **Next Hop**
    
    **Type**
    
    192.168.2.0/24
    
    local
    
    system route entry
    
    192.168.5.0/24
    
    local
    
    system route entry
    
    0.0.0.0/0
    
    GWLB endpoint
    
    custom route entry
    
-   **Configurations for the route table for the GWLB endpoint subnet**
    
    The route table for the GWLB endpoint subnet must route the traffic returned from NVAs to the final destination. For traffic from the Internet, the local routes make sure that it reaches the application server. For traffic from the application server, you must add an entry that routes all the traffic to the IPv4 gateway. The following table describes the configurations required for the route table for the GWLB endpoint subnet in this example. These configurations are for reference only.
    
    **Destination CIDR Block**
    
    **Next Hop**
    
    **Type**
    
    192.168.2.0/24
    
    local
    
    system route entry
    
    192.168.5.0/24
    
    local
    
    system route entry
    
    0.0.0.0/0
    
    IPv4 gateway
    
    custom route entry
    

### **Step 7: Verify the results**

**Test server connectivity**

Log on to the ECS application server and test its access to the Internet by running the following command:

`ping www.aliyun.com`

If the output contains information about traffic from the application server to the Internet and the traffic keeps growing for a period of time, the application server is connected to the Internet and the test is successful.

The output is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4776770371/p851779.png)

**Test traffic through security checks**

Log on to ECS01 or ECS02 and capture all packets on port 6081 by running the following command:

`tcpdump -i any port 6081`

If the output contains information about requests and responses from the ECS application server, GWLB has routed traffic to NVAs for security checks and the test is successful.

The output is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4776770371/p851786.png)

## References

-   Product overview
    
    [What is GWLB?](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/what-is-gateway-load-balancer-gwlb/)
    
-   User guide
    
    -   [Create and manage a GWLB instance](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-gwlb-instances)
        
    -   [Add and manage IP listeners](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-listener)
        
    -   [Create and manage a server group](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-server-group)
