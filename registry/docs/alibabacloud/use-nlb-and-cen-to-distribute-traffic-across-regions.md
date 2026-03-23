Network Load Balancer (NLB) allows you to add Elastic Compute Service (ECS) instances as backend servers across regions. This topic describes how to use an NLB instance and transit routers of a Cloud Enterprise Network (CEN) instance to forward requests to servers in other regions.

## Scenario

An enterprise creates a virtual private cloud (VPC) named VPC1 in the China (Chengdu) region and then creates an NLB instance and an ECS instance named ECS1 in VPC1. ECS1 is used as a client to test cross-region load balancing. In addition, the enterprise creates a VPC named VPC2 in the China (Shanghai) region and a VPC named VPC3 in the China (Qingdao) region. The enterprise creates an ECS instance named ECS2 in VPC2 and an ECS instance named ECS3 in VPC3, and deploys the same service on ECS2 and ECS3.

The enterprise wants to add the ECS instances in VPC2 and VPC3 to the NLB instance in VPC1 as backend servers to achieve cross-region high availability. The enterprise can use the solution shown in the following figure to add backend servers to the NLB instance across regions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2573844571/CAEQGBiBgMD_0.257xgiIDg0NzAzMzJmODVkODQ2OGI5MzhjM2M1MDE3MWQ0YTFm3737786_20230614095204.835.svg)

## Limits

### **Limits on backend servers**

-   If you want to add ECS instances to an NLB instance in a different region, you must add the ECS instances to a server group of the IP type.
    
-   When you add backend servers by specifying IP addresses, you can specify only private IP addresses. You cannot specify public IP addresses.
    

### **Limits on transit routers and VPCs**

When you associate Enterprise Edition transit routers with VPCs, elastic network interfaces (ENIs) are automatically created. Then, the ENIs are attached to the vSwitch in each zone. The ENIs are used to forward network traffic from the VPCs to the Enterprise Edition transit routers. When you create VPCs, you must specify at least one vSwitch in each zone of the Enterprise Edition transit routers. This way, network traffic can be routed from the VPCs to the transit routers. For more information, see [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work#concept-1964186).

## **Prerequisites**

The resources that are described in the following table are created.

Resources

**Item**

**Description**

**Example**

**NLB**

Region

The region in which the NLB instance resides.

China (Chengdu)

Network type

NLB instances can be internal-facing or Internet-facing. Internal-facing NLB instances provide services within a VPC and cannot be accessed over the Internet. Internet-facing NLB instances use elastic IP addresses (EIPs) to provide services over the Internet. You are charged for the EIPs, bandwidth, and traffic.

Internal-facing

VPC

The VPC to which the NLB instance belongs.

VPC1-test

Zone

You can deploy an NLB instance in multiple zones. If the current region supports two or more zones, select at least two zones to ensure high availability.

-   Chengdu Zone A
    
-   Chengdu Zone B
    

Instance name

The name of the NLB instance.

nlb-test

**CEN**

Instance name

The name of the CEN instance.

cen\_test

**TR1**

Region

You can create only one transit router for a CEN instance in each region.

China (Chengdu)

**TR2**

Region

You can create only one transit router for a CEN instance in each region.

China (Shanghai)

**TR3**

Region

You can create only one transit router for a CEN instance in each region.

China (Qingdao)

**VPC1**

Region

The region in which the VPC resides.

China (Chengdu)

Name

The name of the VPC.

VPC1-test

IPv4 CIDR block

The private CIDR block of the VPC.

172.16.0.0/16

vSwitch 1

To implement zone-disaster recovery, you must select at least two vSwitches in different zones. vSwitch1 is required when you create an ECS instance.

-   Name: VPC1-vSwitch1
    
-   Zone: Chengdu Zone A
    
-   IPv4 CIDR block: 172.16.20.0/24
    

vSwitch2

To implement zone-disaster recovery, you must select at least two vSwitches in different zones.

-   Name: VPC1-vSwitch2
    
-   Zone: Chengdu Zone B
    
-   IPv4 CIDR block: 172.16.21.0/24
    

**VPC2**

Region

The region in which the VPC resides.

China (Shanghai)

Name

The name of the VPC.

VPC2-test

IPv4 CIDR block

The private CIDR block of the VPC.

10.0.0.0/16

vSwitch 1

To implement zone-disaster recovery, you must select at least two vSwitches in different zones. vSwitch1 is required when you create an ECS instance.

-   Name: VPC2-vSwitch1
    
-   Zone: Shanghai Zone E
    
-   IPv4 CIDR block: 10.0.20.0/24
    

vSwitch2

To implement zone-disaster recovery, you must select at least two vSwitches in different zones.

-   Name: VPC2-vSwitch2
    
-   Zone: Shanghai Zone F
    
-   IPv4 CIDR block: 10.0.21.0/24
    

**VPC3**

Region

The region in which the VPC resides.

China (Qingdao)

Name

The name of the VPC.

VPC3-test

IPv4 CIDR block

The private CIDR block of the VPC.

192.168.0.0/16

vSwitch1

To implement zone-disaster recovery, you must select at least two vSwitches in different zones. vSwitch1 is required when you create an ECS instance.

-   Name: VPC3-vSwitch1
    
-   Zone: Qingdao Zone B
    
-   IPv4 CIDR block: 192.168.20.0/24
    

vSwitch2

To implement zone-disaster recovery, you must select at least two vSwitches in different zones.

-   Name: VPC3-vSwitch2
    
-   Zone: Qingdao Zone C
    
-   IPv4 CIDR block: 192.168.21.0/24
    

**ECS1**

Billing method

We recommend that you use the pay-as-you-go billing method when you perform tests.

Pay-as-you-go

Region

The region in which the ECS instance resides.

China (Chengdu)

Network and zone

The network and zone to which the ECS instance belongs.

-   Network type: VPC
    
-   VPC: VPC1-test
    
-   vSwitch: VPC1-vSwitch1
    
-   Select Specify Primary Private IP Address of Primary ENI and then specify the following IP address: 172.16.20.100.
    

Instance type

The type of the ECS instance.

ecs.t5-lc2m1.nano

Image

The operating system image of the ECS instance.

64-bit CentOS 7.9

Security group

A security group is a virtual firewall that is used to control network access to ECS instances. An ECS instance must belong to at least one security group.

-   Create a security group
    
-   Security group name: ECS1 Custom Security Group
    

Username and password

The username and password that are used to log on to the ECS instance.

-   Credential: custom password
    
-   Username: root
    
-   Password/Confirm password: Enter the password. The password must comply with the security rules.
    

**ECS2**

Billing method

We recommend that you use the pay-as-you-go billing method when you perform tests.

Pay-as-you-go

Region

The region in which the ECS instance resides.

China (Shanghai)

Network and zone

The network and zone to which the ECS instance belongs.

-   Network type: VPC
    
-   VPC: VPC2-test
    
-   vSwitch: VPC2-vSwitch1
    
-   Select Specify Primary Private IP Address of Primary ENI and then specify the following IP address: 10.0.20.100.
    

Instance type

The type of the ECS instance.

ecs.t5-lc2m1.nano

Image

The operating system image of the ECS instance.

64-bit CentOS 7.9

Security group

A security group is a virtual firewall that is used to control network access to ECS instances. An ECS instance must belong to at least one security group.

-   Create a security group
    
-   Security group name: ECS2 Custom Security Group
    

Username and password

The username and password that are used to log on to the ECS instance.

-   Credential: custom password
    
-   Username: root
    
-   Password/Confirm password: Enter the password. The password must comply with the security rules.
    

**ECS3**

Billing method

We recommend that you use the pay-as-you-go billing method when you perform tests.

Pay-as-you-go

Region

The region in which the ECS instance resides.

China (Qingdao)

Network and zone

The network and zone to which the ECS instance belongs.

-   Network type: VPC
    
-   VPC: VPC3-test
    
-   vSwitch: VPC3-vSwitch1
    
-   Select Specify Primary Private IP Address of Primary ENI and then specify the following IP address: 192.168.20.100.
    

Instance type

The type of the ECS instance.

ecs.t5-lc2m1.nano

Image

The operating system image of the ECS instance.

64-bit CentOS 7.9

Security group

A security group is a virtual firewall that is used to control network access to ECS instances. An ECS instance must belong to at least one security group.

-   Create a security group
    
-   Name: ECS3 Custom Security Group
    

Username and password

The username and password that are used to log on to the ECS instance.

-   Credential: custom password
    
-   Username: root
    
-   Password/Confirm password: Enter the password. The password must comply with the security rules.
    

For more information about how to manually create the resources that are described in the preceding table, see the following topics:

-   [CEN instances](/help/en/cen/user-guide/cen-instances-1#task-1680986)
    
-   [Transit routers](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu)
    
-   [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575)
    
-   [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance)
    
-   [Create an instance by using the wizard](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b) The security groups of ECS2 and ECS3 must allow network traffic to go through the port of the applications to be deployed on ECS2 and ECS3. In this example, **80** is used.
    

## **Step 1: Connect the VPCs to the transit routers**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list). Click the ID of the CEN instance that you want to manage. The **Transit Router** tab of the Basic Information tab appears.
    
2.  On the Transit Router tab, find TR1 and click **Create Connection** in the **Actions** column. On the **Connection with Peer Network Instance** page, configure the parameters that are described in the following table, and use the default values for other parameters. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Instance Type**
    
    The type of the network instance that you want to attach to CEN.
    
    VPC
    
    **Region**
    
    The region in which the network instance resides. In this example, the region in which VPC1 is deployed is selected.
    
    China (Chengdu)
    
    **Resource Owner ID**
    
    The ID of the peer account to which the network instance belongs.
    
    Current Account
    
    **Network Instance**
    
    The VPC that you want to attach to CEN.
    
    VPC1
    
    **VSwitch**
    
    The vSwitch that you want to attach to CEN.
    
    A vSwitch in VPC1
    
3.  Repeat the preceding step to connect VPC2 to TR2 and VPC3 to TR3.
    

## Step 2: **Create inter-region connections**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list). Click the ID of the CEN instance that you want to manage. The **Transit Router** tab of the Basic Settings tab appears.
    
2.  Find TR1 and click **Create Connection** in the Actions column to create an inter-region connection between TR1 and TR2. On the Connection with Peer Network Instance page, configure the parameters that are described in the following table, and use the default values for other parameters. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Instance Type**
    
    The type of the network instance that you want to attach to CEN.
    
    Inter-region Connection
    
    **Region**
    
    The region in which the network instance resides. In this example, the region in which TR1 is deployed is selected.
    
    China (Chengdu)
    
    **Peer Region**
    
    The region in which the peer transit router is deployed. The region that you can select must contain a transit router.
    
    China (Shanghai)
    
    **Bandwidth Allocation Mode**
    
    You can use Cloud Data Transfer (CDT) to reduce inter-region traffic costs for CEN. We recommend that you activate CDT. You are not charged for the activation operation. For more information, see [Getting Started](/help/en/cdt/user-guide/upgrade-to-cdt-billing). You can also select a bandwidth plan based on your business requirements.
    
    Pay-By-Data-Transfer
    
3.  Repeat the preceding step to create an inter-region connection between TR1 and TR3.
    

## Step 3: **Configure a server group for the NLB instance**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-chengdu/server-groups), select the region where the NLB instance resides, and then click the ID of the NLB instance that you want to manage. On the Server Groups page, click **Create Server Group**.
    
2.  Configure the parameters that are described in the following table. Use the default values for other parameters. Then, click **Create**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Server Group Type**
    
    The type of the backend servers to be added to the server group.
    
    IP
    
    **Server Group Name**
    
    \-
    
    test
    
    **VPC**
    
    The VPC to which the server group belongs.
    
    VPC1
    
    **Resource Group**
    
    The resource group to which the server group belongs.
    
    default resource group
    
3.  After the server group is created, click **Modify Backend Server** in the Actions column of the server group. On the Backend Servers tab, click **Add IP Address**.
    
4.  Add IP addresses. In the Select Servers step, set the IP Address parameter to the IP addresses of ECS2 and ECS3 and click **Next**.
    
5.  In the Ports/Weights step, set the Port parameter to the port of the applications to be deployed on ECS2 and ECS3. In this example, **80** is used. Use the default values for other parameters. Then, click **OK**.
    

## Step 4: **Configure a listener for the NLB instance**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-chengdu/nlbs) and select the region of the NLB instance that you want to manage. On the Instances page, find the NLB instance that you want to manage and click **Create Listener** in the Actions column.
    
2.  In the Configure Listener step, set the Listener Protocol parameter to TCP and configure the Listener Port parameter. In this example, **80** is used. Click **Next**.
    
3.  In the Select Server Group step, select the server group of the IP type that you configured. Click **Next**.
    
4.  In the Configuration Review step, confirm the configuration information and click **Submit**.
    

## Step 5: **Verify the results**

1.  Deploy test applications on ECS2 and ECS3.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-shanghai) and select the China (Shanghai) region. On the Instances page, find ECS2 and click **Connect** in the Actions column. In the Remote connection dialog box, click Sign in now in the Workbench section.
        
    2.  Run the following commands to deploy the test application on ECS2:
        
        **Commands to deploy the application on ECS2**
        
        ```
        yum install -y nginx
        systemctl start nginx.service
        cd /usr/share/nginx/html/
        echo "Hello World ! This is ECS02." > index.html
        ```
        
    3.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-qingdao) and select the China (Qingdao) region. On the Instances page, find ECS3 and click **Connect** in the Actions column. In the Remote connection dialog box, click Sign in now in the Workbench section.
        
    4.  Run the following commands to deploy the test application on ECS3:
        
        **Commands to deploy the application on ECS3**
        
        ```
        yum install -y nginx
        systemctl start nginx.service
        cd /usr/share/nginx/html/
        echo "Hello World ! This is ECS03." > index.html
        ```
        
2.  Test network connectivity on ECS1.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-chengdu) and select the China (Chengdu) region. On the Instances page, find ECS1 and click **Connect** in the Actions column. In the Remote connection dialog box, click Sign in now in the Workbench section.
        
    2.  Run the `sudo yum install -y telnet` command to install telnet.
        
    3.  Run the `telnet Domain name Port` command. If a message in the **Connected to nlb-...** format is returned, the connection is established and the NLB instance can forward requests to the backend servers, as shown in the following figure.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9738112371/p715485.png)
        
3.  Simulate failures.
    
    1.  Run the `systemctl stop nginx.service` command on ECS2 to stop the application.
        
    2.  Wait a few minutes and run the `telnet Domain name Port` command on ECS1 again. A message in the **Connected to nlb-...** format is returned, as shown in the following figure.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9738112371/p715485.png)
        
    3.  Run the `systemctl start nginx.service` command on ECS2 to start the application and run the `systemctl stop nginx.service` command on ECS3 to stop the application.
        
    4.  Wait a few minutes and run the `telnet Domain name Port` command on ECS1 again. A message in the **Connected to nlb-...** format is returned, as shown in the following figure.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9738112371/p715485.png)
        
    5.  This indicates that the failure of a single backend server does not affect the availability of the NLB instance.
        

## **Release resources**

1.  Release the CEN instance and transit routers.
    
    1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list). On the Instances page, find the CEN instance that you want to release and click the instance ID. The instance details page appears.
        
    2.  Delete TR1.
        
        1.  Go to the **Basic Settings > Transit Router** tab, find TR1, and then click its ID to go to the transit router details page.
            
        2.  On the **Intra-region Connections** tab, click **Detach** in the Actions column of each network instance.
            
        3.  On the **Cross-region Connections** tab, click **Delete** in the Actions column of the inter-region connection.
            
        4.  Return to the details page of the CEN instance. Click **Delete** in the Actions column of TR1.
            
        
    3.  Repeat the preceding step to delete TR2 and TR3.
        
    4.  Return to the Instances page and click **Delete** in the Actions column of the CEN instance.
        
    
2.  Release the ECS instances and security groups.
    
    1.  Delete ECS1 and its security group.
        
        1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-chengdu) and select the China (Chengdu) region. On the Instances page, find ECS1, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon, and then click **Release** to immediately release ECS1.
            
        2.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/securityGroup/region/cn-chengdu) and select the China (Chengdu) region. On the Security Group page, find ECS1 Custom Security Group and click **Delete** in the Operation column.
            
        
    2.  Repeat the preceding step to delete ECS2, ECS3, and their security groups.
        
    
3.  Delete the DNS record. For more information, see [Delete a DNS Record](/help/en/dns/delete-a-dns-record).
    
4.  Release the NLB instance and its server group.
    
    1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-chengdu/nlbs) and select the China (Chengdu) region. On the Instances page, find the NLB instance, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon, and then click **Release** to release the NLB instance.
        
    2.  Log on to the [NLB](https://slb.console.alibabacloud.com/nlb/cn-chengdu/server-groups) console and select the China (Chengdu) region. On the Instances page, find the NLB instance, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon, and then click **Delete** to delete the NLB instance.
        
    
5.  Release the VPCs.
    
    1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-chengdu/vpcs) and select the China (Chengdu) region. On the VPC page, find VPC1 and click **Delete** in the Actions column. In the message that appears, select Forcefully Delete to release the VPC and its vSwitches.
        
    2.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-shanghai/vpcs) and select the China (Shanghai) region. On the VPC page, find VPC2 and click **Delete** in the Actions column. In the message that appears, select Forcefully Delete to release the VPC and its vSwitches.
        
    3.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-qingdao/vpcs) and select the China (Qingdao) region. On the VPC page, find VPC3 and click **Delete** in the Actions column. In the message that appears, select Forcefully Delete to release the VPC and its vSwitches.
        
    

## **References**

-   [What is CEN?](/help/en/cen/product-overview/what-is-cen/)
    
-   [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work)
    
-   [Add on-premises servers to an NLB instance within the same region](/help/en/slb/network-load-balancer/use-cases/add-servers-in-data-centers-to-an-nlb-instance)
