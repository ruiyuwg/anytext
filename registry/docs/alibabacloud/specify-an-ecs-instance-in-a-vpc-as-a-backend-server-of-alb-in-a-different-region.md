This topic describes how to specify a backend server located in a VPC in a different region for Application Load Balancer (ALB) to achieve efficient traffic distribution and optimize your service system.

## Sample scenario

An e-commerce company mainly promotes and sells its products on online platforms. The company has an Elastic Compute Service (ECS) instance in the China (Chengdu) region as the backend server for its business. In most cases, this ECS instance can properly handle incoming traffic. However, during shopping seasons, the traffic surges and may exceed the computing capability of the ECS instance.

To solve this problem, the company uses an ALB instance with a Cloud Enterprise Network (CEN) instance to connect another ECS instance which is deployed in the China (Hangzhou) region to the business network. With transit routers, VPCs in different regions can be privately connected without making much efforts. Based on this private connection, ALB can have a server group of the IP address type that contains backend servers in both the China (Chengdu) and China (Hangzhou) regions. ALB distributes requests to the two servers, which improves the load balancing and responding speed of the system.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5753442471/CAEQORiBgIDa18ChrRkiIDkxZTA5ZTQ1YTBmYzQ5Y2FiMDk2M2JhNGZkMjQ4MmJm3737786_20230614095204.835.svg)

## Limitations

**Note**

-   ALB instances created at or after 00:00:00 on February 25, 2025 (UTC+8) are upgraded versions. For details, see [ALB instance upgrade](/help/en/slb/product-overview/alb).
    
-   In this example, an upgraded ALB instance is used. If you are using a non-upgraded ALB instance, refer to [How do I implement this use case with a non-upgraded ALB instance?](#18ed4f5b550o7) for detailed instructions.
    

### **Backend servers**

-   The server group to contain a backend server deployed in a different region must be of the IP address type.
    
-   You can add only private IP addresses. Public IP addresses are not supported.
    
-   If you want to specify IPv6 addresses as backend servers, IPv6 must be enabled for the server group. Take note of the following items:
    
    -   Only when [IPv6 is enabled for the VPC](/help/en/ipv6-gateway/user-guide/enable-ipv6-for-a-vpc#task-2198980) where the server group is deployed, IPv6 can be enabled for the serve group.
        
    -   You can specify IPv6 addresses in listeners or forwarding rules for only dual-stack [upgraded ALB instances](/help/en/slb/product-overview/alb). Non-upgraded instances do not support this feature.
        
    -   After IPv6 is enabled for the server group, only IPv6 addresses within the CIDR range of the VPC can be specified. Remote IP addresses are not supported.
        

### **Traffic forwarding between ALB and backend servers**

-   If you configure an Enterprise Edition transit router for your ALB service, the transit router will create an elastic network interface (ENI) within a vSwitch in the zone you specify. The ENI works as the ingress of the transit router for receiving traffic from the VPC. Therefore, ensure that there is at least a vSwitch available in the zone you select. For more details, see [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work#concept-1964186).
    
-   You cannot customize routing tables in the VPC where your ALB service is deployed for traffic forwarding between ALB and backend servers. Only system routing tables are allowed.
    

## Prerequisites

-   A [VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) (VPC1) is created in the China (Chengdu) region. Another VPC (VPC2) is created in the China (Hangzhou) region.
    
    -   Two vSwitches (VSW1 and VSW2) are created in VPC1. VSW1 is deployed in Zone A and VSW2 is deployed in Zone B.
        
    -   Two vSwitches (VSW3 and VSW4) are created in VPC2. VSW3 is deployed in Zone H and VSW4 is deployed in Zone I.
        
    -   The following table describes how network segments are planned. You can plan CIDR blocks based on your business requirements. Make sure that the CIDR blocks do not overlap with each other.
        
        **Region**
        
        **VPC**
        
        **vSwitch**
        
        **vSwitch zone**
        
        **CIDR block**
        
        China (Chengdu)
        
        VPC1
        
        Primary CIDR block: 172.16.0.0/12
        
        VSW1
        
        Zone A
        
        172.16.1.0/24
        
        VSW2
        
        Zone B
        
        172.16.2.0/24
        
        China (Hangzhou)
        
        VPC2
        
        Primary CIDR block: 192.168.0.0/16.
        
        VSW3
        
        Zone H
        
        192.168.1.0/24
        
        VSW4
        
        Zone I
        
        192.168.2.0/24
        
-   An ECS instance (ECS01) is created in VSW1, and an ECS instance (ECS02) is created in VSW3, both with an application deployed on it.
    
    Click to view the commands to deploy a sample application on ECS
    
    On ECS01:
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is chengdu ECS01." > index.html
    ```
    
    On ECS02:
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is hangzhou ECS02." > index.html
    ```
    
-   An Internet-facing [ALB instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances#task-1999195) is created in VPC1.
    
-   A custom domain name is [registered](/help/en/dws/user-guide/how-to-register-a-domain-name), [an Internet content provider (ICP) number](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview) is obtained for the domain name, and [a CNAME record](/help/en/slb/application-load-balancer/user-guide/configure-cname-resolution-for-alb) is created to map the domain name to the domain name of the ALB instance.
    
-   A CEN instance is created, with a [transit router](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu) deployed in the China (Chengdu) and China (Hangzhou) regions, respectively.
    

## Procedure

### **Step 1: Create a server group for the ALB instance**

Create a server group of the IP address type and add the IP addresses of ECS01 and ECS02 as backend servers to the server group.

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance resides. In this example, **China (Chengdu)** is selected.
    
3.  In the left-side navigation pane, choose **ALB** > **Server Groups**.
    
4.  On the **Server Groups** page, click **Create Server Group**. In the **Create Server Group** dialog box, configure the parameters and click **Create**.
    
    Refer to the following table to configure key parameters and keep the default values for the others. For instructions on configuring all parameters, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group).
    
    **Parameter**
    
    **Description**
    
    **Server Group Type**
    
    Select **IP**.
    
    **VPC**
    
    Select VPC1.
    
    **Backend Server Protocol**
    
    Select **HTTP**.
    
    **Note**
    
    You can only specify server groups whose **Backend Server Protocol** is **HTTP** in HTTPS listeners for basic ALB instances.
    
    **Scheduling Algorithm**
    
    Keep the default value **Weighted Round-robin**. For detailed information on scheduling algorithms, see [SLB scheduling algorithms](/help/en/slb/product-overview/introduction-to-load-balancing-scheduling-algorithm).
    
5.  In the dialog box that is displayed, click **Add Backend Server**.
    
6.  In the **Add Backend Server** panel, enter the private IP address of ECS01, click **Next**, set **Port** and **Weight**, and click **OK**.
    
    Specify the port used by backend servers to provide services for **Port**. In this example, specify **80**.
    
    Keep the default value for **Weight**.
    
7.  Click **Add IP Address**. Enter the private IP address of ECS02, enable **Remote IP**, click **Next**, set **Port** and **Weight**, and click **OK**.
    
    With **Remote IP** enabled, IP addresses within the following CIDR ranges can be added as backend servers:
    
    -   10.0.0.0/8
        
    -   100.64.0.0/10
        
    -   172.16.0.0/12
        
    -   192.168.0.0/16
        
    
    When **Remote IP** is disabled, only IP addresses within the CIDR range of the VPC can be added.
    

### **Step 2: Configure a listener for the ALB instance**

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance resides. In this example, **China (Chengdu)** is selected.
    
3.  On the **Instances** page, find the ALB instance and click **Create Listener** in the **Actions** column.
    
4.  On the **Configure Server Load Balancer** page, in the **Configure Listener** step, set the parameters and click **Next**.
    
    Refer to the following table to configure key parameters and keep the default values for the others.
    
    **Parameter**
    
    **Description**
    
    **Listener Protocol**
    
    Select **HTTP**.
    
    **Listener Port**
    
    Enter the port on which the ALB instance listens. The ALB instance listens for requests on the specified port, then forwards the requests to backend servers. Valid values: 1 to 65535. In this example, 80 is specified.
    
5.  In the **Select Server Group** step, select **IP** from the drop-down list in the **Server Group** section, select the server group created in Step 1, and click **Next**.
    
6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
    

### **Step 3: Attach the VPCs to the CEN instance**

Attach VPC1 to the transit router deployed in the China (Chengdu) region, and VPC2 to the transit router deployed in the China (Hangzhou) region. The transit routers connect the VPCs over a private network across regions, enabling ALB to forward client requests to a backend server located in a different region.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you created.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the China (Chengdu) region and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, set the parameters and click **OK**.
    
    Refer to the following table to configure parameters relevant to this case and keep the default values for the others. For instructions on configuring all parameters, see [Use an Enterprise Edition transit router](/help/en/cen/user-guide/connect-vpcs#section-hqv-wg2-oh2).
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    In this example, Virtual Private Cloud (VPC) is selected.
    
    **Region**
    
    Select the region where the network instance is created. In this example, **China (Chengdu)** is selected.
    
    **Network Instance**
    
    Select the ID of the VPC that you want to attach to the CEN instance. In this example, VPC1 is selected.
    
    **VSwitch**
    
    Select vSwitches that are deployed in zones supported by Enterprise Edition transit routers. In this example, VSW1 and VSW2 are selected.
    
5.  Click **Create More Connections** and configure the parameters referring to the following table.
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    Select **Virtual Private Cloud (VPC)**.
    
    **Region**
    
    Select **China (Hangzhou)**.
    
    **Network Instance**
    
    Select VPC2.
    
    **VSwitch**
    
    Select VSW3 and VSW4.
    

### **Step 4: Create an inter-region connection**

Create an inter-region connection between the transit routers deployed in different regions to connect VPC1 and VPC2.

1.  Log on the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you created.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the China (Chengdu) region and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, configure the parameters and click **OK**.
    
    Refer to the following table to configure key parameters and keep the default values for the others. For instructions on configuring all parameters, see [Use an Enterprise Edition transit router to create an inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections#section-9yi-a1v-b5u).
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    Select **Inter-region Connection**.
    
    **Region**
    
    Select the region where the specified transit router is deployed. In this example, **China (Chengdu)** is selected.
    
    **Peer Region**
    
    Select the region where the peer transit router is deployed. In this example, **China (Hangzhou)** is selected.
    
    **Bandwidth Allocation Mode**
    
    Select **Pay-By-Data-Transfer**.
    
    You can reduce costs of data transfers between transit routers across regions using Cloud Data Transfer (CDT). To activate this service, see [Getting Started](/help/en/cdt/user-guide/upgrade-to-cdt-billing). Activating CDT is free of charge. You can also consider using bandwidth plans.
    

### **Step 5: Test the load balancing system**

Check whether ALB can forward requests to both ECS01 and ECS02.

1.  Test the network connectivity between ALB and the backend servers.
    
    Access the domain name of your service in the browser of a local PC, for example, `http://<Domain name>`. Refresh the page for several times. You can see that the client receives responses as expected, and the accessed server alternates between ECS01 and ECS02.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1813442471/p876823.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1813442471/p876824.png)
    
2.  Simulate a backend server failure, and test ALB.
    
    1.  Run the `systemctl stop nginx.service` command on ECS01 to stop the application deployed on it.
        
    2.  Access the domain name of your service in the browser of the local PC, for example, `http://<Domain name>`. If the client still receives responses as expected, ALB implements load balancing between backend servers deployed in different regions.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1813442471/p876824.png)
        

## **FAQs**

### **How do I implement this use case with a non-upgraded ALB instance?**

The procedure for a non-upgraded ALB instance is basically the same as the procedure above except for Step 5 as shown in the following figure. You must configure routes for VPC1, VPC2, and the transit routers, and configure security group rules for ECS instances. For detailed operations, see [Step 5: Configure routes and security group rules](#71f499c6f45e0).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5753442471/CAEQORiBgMCV0.qirRkiIDUxNTI3M2FmOTE0YTRjOTJiYTlkNTVkNjQ5ODlmMDQ24152936_20240108103629.701.svg)

-   #### **Limitations**
    
    **Backend servers**
    
    -   Remote IP addresses can be added as backend servers in these regions and zones: [Regions and zones](/help/en/slb/application-load-balancer/product-overview/supported-regions-and-zones#f83d58f03a0tm).
        
    -   Only server groups of the IP type support adding backend servers deployed across regions.
        
    -   You can add only private IP addresses. Public IP addresses are not supported.
        
    -   You cannot add an ALB instance, a Network Load Balancer (NLB) instance, or a Classic Load Balancer (CLB) instance in the same VPC as a backend server.
        
    
    **Traffic forwarding between ALB and backend servers**
    
    -   You can use Enterprise Edition transit routers and Express Connect circuits for cross-region forwarding. Basic Edition transit routers are not supported.
        
    -   If you configure an Enterprise Edition transit router for your ALB service, the transit router will create an ENI within a vSwitch in the zone you specify. The ENI works as the ingress of the transit router for receiving traffic from the VPC. Therefore, ensure that there is at least a vSwitch available in the zone you select. For more details, see [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work#concept-1964186).
        
    -   Make sure that no loops exist. ALB adds the ALICLOUD-ALB-TRACE HTTP header to each request to detect loops. If a loop is detected, ALB stops forwarding requests to backend servers and returns the 463 status code in case a network storm arises and exhausts all resources.
        
    
    For the same CEN instance, each region can have only one VPC in which one or more ALB instances use backend servers deployed in different regions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5753442471/CAEQORiBgICNiqX9qxkiIDZhOWY0YWYyZDVjMTQxZjRhYzk0YzFjMzk0MTk0MjA44052371_20231026135007.345.svg)
    
    -   ALB instances in different VPCs within the same region cannot use the same transit router to access backend servers.
        
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5753442471/CAEQORiBgICQi6X9qxkiIGEyYzkzNWY0N2ZiMTQzZWY5YTNmODEyOTQxNTM5MzYw3963382_20230830144006.372.svg)-   ALB instances in different VPCs within the same region cannot use different transit routers to access the same backend server.
        
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5753442471/CAEQORiBgMD1i6X9qxkiIDdmNzg0MTE2NzZlMzQ0ZWY4ZDU5MTljNDllYmY1NDE33963382_20230830144006.372.svg)
    
    -   Network traffic between an ALB instance and its backend servers can be routed based only on the system route table. VPC custom route tables are not supported.
        
    
-   #### **Step 5: Configure routes and security group rules**
    
    1.  Add routes to the system route table of VPC1.
        
        Check whether the system route table of VPC1 contains a route that directs traffic destined for VPC2 to the transit router attached to VPC1. If no routes direct traffic to the transit router, perform the following operations to add such a route:
        
        **Note**
        
        Network traffic between ALB and backend servers can be routed based only on the system route table. Custom route tables in the VPC are not supported.
        
        1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
            
        2.  On the **VPCs** page, click the ID of VPC1.
            
        3.  On the details page of VPC1, click the **Resources** tab and click the number below **Route Table**.
            
        4.  On the **Route Tables** page, find the route table whose **Route Table Type** is **System** and click its ID.
            
        5.  On the details page of the route table, choose **Route Entry List** > **Custom Route** and click **Add Route Entry**.
            
        6.  In the **Add Route Entry** panel, configure the parameters by referring to the following table and click **OK**.
            
            **Parameter**
            
            **Description**
            
            **Destination CIDR Block**
            
            Enter a destination CIDR block. In this example, the CIDR block of VPC2 is entered, which is 192.168.0.0/16.
            
            **Next Hop Type**
            
            Select a type of next hop. In this example, **Transit Router** is selected.
            
            **Transit Router**
            
            Select a transit router. In this example, the transit router that is associated with VPC1 is selected.
            
    2.  Configure back-to-origin routes.
        
        1.  View the back-to-origin route of the ALB instance:
            
            1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
                
            2.  In the top navigation bar, select the region where the ALB instance resides. In this example, **China (Chengdu)** is selected.
                
            3.  On the **Instances** page, click the ID of the ALB instance that is created in VPC1.
                
            4.  Click the **Instance Details** tab, and click **View** next to **Back-to-origin Route**.
                
        2.  Add the back-to-origin route of ALB to the system route table of VPC2:
            
            1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
                
            2.  On the **VPCs** page, click the ID of VPC2.
                
            3.  On the details page of VPC2, click the **Resources** tab and click the number below **Route Table**.
                
            4.  On the **Route Tables** page, find the route table whose **Route Table Type** is **System** and click its ID.
                
            5.  On the details page of the route table, choose **Route Entry List** > **Custom Route** and click **Add Route Entry**.
                
            6.  In the **Add Route Entry** panel, configure the parameters by referring to the following table and click **OK**.
                
                **Parameter**
                
                **Description**
                
                **Destination CIDR Block**
                
                Enter a destination CIDR block. In this example, the destination CIDR block of the back-to-origin route of the ALB instance is entered. If the ALB instance has multiple back-to-origin routes, repeat the preceding operations to add all back-to-origin routes.
                
                **Next Hop Type**
                
                Select a type of next hop. In this example, **Transit Router** is selected.
                
                **Transit Router**
                
                Select a transit router. In this example, the transit router that is associated with VPC2 is selected.
                
        3.  Add the back-to-origin route of ALB to the transit router associated with VPC1:
            
            1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
                
            2.  On the **Instances** page, click the ID of the CEN instance that you created.
                
            3.  On the **Basic Settings** > **Transfer Router** tab, click the ID of the transit router that is associated with VPC1.
                
            4.  On the **Route Table** tab, click the ID of the route table to which you want to add the back-to-origin route, click the **Route Entry** tab, and click **Add Route Entry**.
                
            5.  In the **Add Route Entry** dialog box, configure the parameters by referring to the following table and click **OK**.
                
                **Parameter**
                
                **Description**
                
                **Route Table**
                
                The current route table is selected by default.
                
                **Transit Router**
                
                The current transit router is selected by default.
                
                **Destination CIDR Block**
                
                Enter the destination CIDR block of the route. In this example, the destination CIDR block of the back-to-origin route of the ALB instance is entered. If the ALB instance has multiple back-to-origin routes, repeat the preceding operations to add all back-to-origin routes.
                
                **Blackhole Route**
                
                Keep the default value **No**.
                
                **Next Hop**
                
                Select a next hop. In this example, the transit router that is associated with VPC1 is selected.
                
    3.  Check the security group rules of the ECS instances.
        
        Packets are sent from the CIDR block of the back-to-origin route to the ECS instances. Make sure that the security group rules of the ECS instances allow access from the CIDR block. In this example, you must add an inbound rule to the security group of the ECS instances to allow access from the back-to-origin CIDR block (100.64.0.0/10) of ALB. Otherwise, the access to backend services across regions fails. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        
    

### **Can I create a peering connection between two VPCs in the same region, and specify backend servers in the two VPCs for ALB?**

Yes, you can.

### **How am I billed for using ALB with CEN to specify a backend server in a VPC in a different region?**

You are charged for [ALB services](/help/en/slb/application-load-balancer/product-overview/billing-overview/) and CEN services. For CEN billing information, see [Billing rules](/help/en/cen/product-overview/billing-rules).

## **References**

-   If you want to use on-premises servers in an Internet Data Center (IDC), see [Add on-premises servers to an ALB instance within the same region](/help/en/slb/application-load-balancer/use-cases/specify-an-on-premises-server-as-a-backend-server-of-alb).
    
-   To implement the same for Network Load Balancer (NLB) instances, see [Add on-premises servers to an NLB instance within the same region](/help/en/slb/network-load-balancer/use-cases/add-servers-in-data-centers-to-an-nlb-instance) and [Add backend servers in VPCs to NLB across regions](/help/en/slb/network-load-balancer/use-cases/use-nlb-and-cen-to-distribute-traffic-across-regions).
