Alibaba Cloud Network Load Balancer (NLB) supports TCP, UDP, and SSL over TCP, and provides high-performance Layer 4 load balancing capabilities. This topic describes how to create an NLB instance to forward client requests to backend IPv4 services.

## **Prerequisites**

-   A virtual private cloud (VPC) is created in the China (Shanghai) region and a vSwitch is created in each of Zone E and Zone G. In this example, the VPC is named VPC1 and the vSwitches are named VSW1 and VSW2. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
    > To ensure that an NLB instance scales as expected, reserve at least eight IP addresses in each vSwitch used by the NLB instance.
    
-   An Elastic Compute Service (ECS) instance (ECS01) is deployed in VSW1 and another ECS instance (ECS02) is deployed in VSW2.
    
    -   For more information about how to create an ECS instance, see [Create an instance by using the wizard](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
        
    -   The following commands show how to deploy applications on ECS01 and ECS02:
        
        **Commands for deploying an application on ECS01**
        
        ```
        yum install -y nginx
        systemctl start nginx.service
        cd /usr/share/nginx/html/
        echo "Hello World ! this is ECS01." > index.html
        ```
        
        **Commands for deploying an application on ECS02**
        
        ```
        yum install -y nginx
        systemctl start nginx.service
        cd /usr/share/nginx/html/
        echo "Hello World ! this is ECS02." > index.html
        ```
        
-   A domain name is registered, and an Internet content provider (ICP) number is obtained for the domain name. For more information, see [Register a domain name on Alibaba Cloud](/help/en/dws/user-guide/how-to-register-a-domain-name) and [Overview](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    

The following table describes the configurations of VPC1. The configurations are for reference only.

Click to view VPC configurations

**Parameter**

**Description**

**Name**

VPC1

**Region**

China (Shanghai)

**IPv4 CIDR Block**

192.168.0.0/12

**vSwitch**

**Name**: VSW1

**Zone**: Zone E

**IPv4 CIDR Block**: 192.168.5.0/24

**Name**: VSW2

**Zone**: Zone G

**IPv4 CIDR Block**: 192.168.6.0/24

The following table describes the configurations of ECS01 and ECS02. The configurations are for reference only.

Click to view ECS instance configurations

**ECS instance**

**Region**

**VPC**

**Zone and vSwitch**

**ECS configuration**

ECS01

China (Shanghai)

VPC1

Zone E | VSW1

Image: Alibaba Cloud Linux 3.2104 LTS 64-bit

ECS02

Zone G | VSW2

## Step 1: Create an NLB instance

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, click **Create NLB**.
    
4.  On the **NLB (Pay-As-You-Go) International Site** page, configure the parameters. Click **Buy Now**.
    
    The following table describes only some of the parameters. Keep the default values for other parameters. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select the region in which you want to create the NLB instance.
    
    **Network Type**
    
    Select a network type for the NLB instance. The system assigns public or private IP addresses to the NLB instance based on the selected network type. **Internet** is selected in this example.
    
    **VPC**
    
    Select the VPC where you want to deploy the NLB instance.
    
    **Zone ID**
    
    Select at least two zones. In this example, **Shanghai Zone E** and **Shanghai Zone G** are selected, and a vSwitch in each zone is selected.
    
    **IP Version**
    
    Select an IP version. In this example, **IPv4** is selected.
    
    **Instance Name**
    
    Enter a name for the NLB instance.
    
    **Resource Group**
    
    Select a resource group for the NLB instance.
    
    **Service-linked Role**
    
    The first time you create an NLB instance, click **Create Service-linked Role** to create the **AliyunServiceRoleForNlb** service-linked role. The role is assigned the **AliyunServiceRolePolicyForNlb** policy, which allows NLB to access other cloud services. For more information, see [System policies for NLB](/help/en/slb/security-and-compliance/nlb-1694654703141).
    

## Step 2: Create a server group

1.  In the left-side navigation pane, choose **NLB** > **Server Groups**.
    
2.  On the **Server Groups** page, click **Create Server Group**.
    
3.  In the **Create Server Group** dialog box, configure the parameters and click **Create**. The following table describes the parameters.
    
    The following table describes only the key parameters. Other parameters use the default values. For more information, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#title-pm3-2av-caq).
    
    **Parameter**
    
    **Description**
    
    **Server Group Type**
    
    Select a server group type. In this example, **Server Type** is selected.
    
    **Server Group Name**
    
    Enter a name for the server group.
    
    **VPC**
    
    Select a VPC from the VPC drop-down list. Only servers in the VPC can be added to the server group.
    
    **Backend Server Protocol**
    
    Select a backend protocol. Valid values: TCP, UDP, SSL over TCP. In this example, **TCP** is selected.
    
    **Scheduling Algorithm**
    
    Select a scheduling algorithm. In this example, **Weighted Round-robin** is selected.
    
    **Health Check**
    
    Health checks are **enabled** by default. In this example, the default setting is used.
    
4.  Click the ID of the server group to go to the **Backend Servers** tab.
    
5.  Click **Add Backend Server** . In the **Add Backend Server** panel, select ECS01 and ECS02 and click **Next**.
    
6.  In the Ports/Weights step, specify port 80, use the default weight 100, and then click **OK**.
    

## Step 3: Configure a listener

1.  In the left-side navigation pane, choose **NLB** > **Instances**.
    
2.  On the **Instances** page, find the NLB instance that you want to manage and click **Create Listener**.
    
3.  On the **Configure Server Load Balancer** page, configure the parameters and click **Next**.
    
    The following table describes only some of the parameters. Keep the default values for other parameters. For more information, see [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener).
    
    **Parameter**
    
    **Description**
    
    **Select Listener Protocol**
    
    Select a listener protocol. In this example, **TCP** is selected.
    
    **Listener Port**
    
    Specify the listener port to receive and forward requests to backend servers. In this example, port 80 is selected.
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Advanced Settings**
    
    In this example, the default settings are used. You can click **Modify** to modify the settings.
    
4.  In the **Server Group** step, select a **Server Type** and select a server group from the drop-down list next to **Server Type**, view the backend servers, and then click **Next**.
    
5.  In the **Confirm** step, confirm the configurations and click **Submit**.
    
6.  Click **OK** to return to the **Listener** tab. After the status of the listener in the **Health Check Status** changes to **Healthy**, ECS01 and ECS02 can forward requests from the NLB instance.
    

## Step 4: Create a DNS record

In actual business scenarios, we recommend that you use CNAME records to map custom domain names to the domain name of your NLB instance.

1.  In the left-side navigation pane, choose **NLB** > **Instances**.
    
2.  On the **Instances** page, copy the domain name of the NLB instance that you want to manage.
    
3.  Perform the following steps to create a CNAME record:
    
    **Note**
    
    If your domain name is not registered by using Alibaba Cloud Domains, you must add your domain name to Alibaba Cloud DNS before you can configure a DNS record. For more information, see [Manage domain names](/help/en/dns/domain-management#topic-2035895). If your domain name is registered by using Alibaba Cloud Domains, skip this step.
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/authoritative/domains).
        
    2.  On the **Authoritative DNS Resolution** page, find your domain name and click **DNS Settings** in the **Actions** column.
        
    3.  On the **DNS Settings** tab of the domain name details page, click **Add DNS Record**.
        
    4.  In the **Add DNS Record** panel, configure the parameters and click **OK**. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Record Type**
        
        Select **CNAME** from the drop-down list.
        
        **Hostname**
        
        The prefix of the domain name. In this example, @ is entered.
        
        **Note**
        
        If the domain name is a root domain name, enter @.
        
        **DNS Request Source**
        
        Select Default.
        
        **Record Value**
        
        Enter the CNAME, which is the domain name of the NLB instance.
        
        **TTL Period**
        
        Specify a time-to-live (TTL) value for the CNAME record to be cached on the DNS server. In this example, the default value is used.
        

## Step 5: Verify the results

1.  Test the availability of the NLB instance.
    
    1.  In this example, a Linux client that has Internet access is used. If you use CentOS and telnet is not installed, run the `yum install -y telnet` command to install telnet.
        
    2.  Run the `telnet Domain name Port` command. If the response packet includes **Connected to nlb-...**, the NLB instance can forward requests to backend servers.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'.
        ```
        
        Access the domain name from a browser, such as `http://domain name`. If you can receive a response packet as shown in the following figure, the NLB instance can forward requests to backend servers.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8736504271/p829636.png)
        
2.  (Optional) Simulate faults.
    
    1.  Stop the application on ECS01. Run the `systemctl stop nginx.service` command on ECS01 to stop the application.
        
    2.  Run the `telnet Domain name Port` command on your client again to test whether you can receive a response packet that includes **Connected to nlb-...**.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'.
        ```
        
        Access the domain name from a browser, such as `http://domain name`. If you can receive a response packet as shown in the following figure, the NLB instance can forward requests to backend servers.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8736504271/p829642.png)
        
    3.  Start the application on ECS01 and stop the application on ECS02. Run the `systemctl start nginx.service` command on ECS01 to restart the application, and run the `systemctl stop nginx.service` command on ECS02 to stop the application.
        
    4.  Run the `telnet Domain name Port` on your client again to test whether you can receive a response packet that includes **Connected to nlb-...**.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'.
        ```
        
        Access the domain name from a browser, such as `http://domain name`. If you can receive a response packet as shown in the following figure, the NLB instance can forward requests to backend servers.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8736504271/p829636.png)
        
    5.  The preceding tests show that single points of failure (SPOFs) caused by a single server does not compromise the availability of the NLB instance.
        

## **Release resources**

1.  Release the ECS instances and the security groups.
    
    1.  Delete ECS01 and its security group.
        
        1.  Go to the [ECS console - Instance page](https://ecs.console.alibabacloud.com/server). In the top navigation bar, select the region in which ECS01 instance resides, and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon on the right side of ECS01. In the dialog box that appears, select **Release** to immediately release the instance.
            
        2.  Go to the [ECS console - Security Groups page](https://ecs.console.alibabacloud.com/securityGroup). In the top navigation bar, select the region in which ECS01 resides, select the security group of ECS01, and then click **Delete** to delete the security group.
            
        
    2.  Repeat the preceding steps to delete ECS02 and its security group.
        
    
2.  Delete the DNS record.
    
    For more information, see [Delete a DNS Record](/help/en/dns/delete-a-dns-record).
    
3.  Release NLB resources.
    
    1.  Go to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select the region where the NLB instance resides. Find the NLB instance, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon in the **Actions** column, and click **Release**. In the message that appears, click **Confirm**.
        
    2.  Go to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select the region in which the NLB instance resides. On the **Server Groups** page, find the server group, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6549288961/p684375.png) icon in the **Actions** column, and click **Delete**. In the message that appears, click **OK**.
        
    
4.  Release VPC resources.
    
    1.  Go to the [VPC console](https://vpc.console.alibabacloud.com/vpc). In the top navigation bar, select the region where the VPC resides.
        
    2.  Click **Delete** in the Actions column and select Forcefully Delete to delete the VPC and the vSwitches.
        
    

## References

-   For more information about the use scenarios and components of NLB, see [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/#concept-2223473)
    
-   For more information about the features of NLB, see [Functions and features](/help/en/slb/network-load-balancer/product-overview/functions-and-features#concept-2223474).
    
-   For more information about NLB quotas and how to increase quotas, see [Limits](/help/en/slb/network-load-balancer/product-overview/restrictions-on-use).
    
-   For more information about the regions in which NLB is available, see [Regions that support NLB](/help/en/slb/network-load-balancer/product-overview/regions-that-support-nlb).
    
-   For more information about the billing of NLB, see [NLB billing](/help/en/slb/network-load-balancer/product-overview/nlb-billing).
