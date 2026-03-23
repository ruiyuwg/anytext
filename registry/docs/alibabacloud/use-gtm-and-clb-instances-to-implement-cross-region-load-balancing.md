This topic describes how to configure Global Traffic Manager (GTM) for a Classic Load Balancer (CLB) instance to balance loads across regions. For example, you can use GTM and CLB to enable cross-region high availability or disaster recovery for your service. If services fail in a region, workloads are switched to another region to maintain service availability.

## GTM overview

GTM supports DNS failover, which helps you manage global network traffic and balance loads. GTM helps enterprises build a disaster recovery architecture that supports active zone-redundancy and geo-disaster recovery. In addition, GTM can manage IP addresses from Alibaba Cloud and other service providers to help enterprises deploy applications in hybrid clouds.

For more information, see [What is GTM?](/help/en/dns/what-is-gtm-1)

## **Example**

A company deployed Elastic Compute Service (ECS) instances on a CLB instance to distribute network traffic and balance loads. The company wants to enable geo-disaster recovery between the China (Hangzhou) and China (Beijing) regions. If the services in one region become unavailable, workloads can be switched to the other region to maintain service availability.

In this case, the company can configure GTM for the CLB instance to enable load balancing and disaster recovery across regions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8976539371/CAEQGhiBgICxsITd8RgiIDJhMzQyMTlkMTdlOTQwYjlhMzU3ODFlYjk4MjkxYjE04052369_20231028145935.792.svg)

## **Prerequisites**

-   CLB instances are created, and backend servers are added to the CLB instances.
    
    -   An Internet-facing CLB instance is created in each region. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).
        
    -   A vServer group is created for each CLB instance. For more information, see [Create and manage a vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group#task-1597080).
        
    -   ECS instances are added to each vServer group, and applications are deployed on the ECS instances.
        
    -   A listener is created for each CLB instance. The listeners use the same port. For more information, see [Add a TCP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-tcp-listener), [Add a UDP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-udp-listener), [Add an HTTP listener](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1), and [Add an HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1).
        
    -   The public IP address of each CLB instance is accessible.
        
-   Internet content provider (ICP) numbers are obtained for your domain names.
    
    -   For more information about domain name registration, see [Register a domain name on Alibaba Cloud](/help/en/dws/user-guide/how-to-register-a-domain-name).
        
    -   For more information about ICP filing, see [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
        

## **Step 1: Purchase a GTM instance**

1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Global Traffic Manager**.
    
3.  Click **Buy Now**.
    
4.  On the buy page, configure the parameters and complete the payment. In this example, the default settings are used.
    

## **Step 2: Configure GTM**

### **Configure the GTM instance**

1.  On the **Global Traffic Manager** page, click the ID of the GTM instance that you want to manage, or click **Settings** in the **Actions** column.
    
2.  The first time you configure GTM, select **Advanced Settings** in the **Select Configuration Method** dialog box.
    
3.  On the **Basic Settings** tab, click **Modify**. In the Modify Basic Settings panel, configure the parameters and click OK. The following table describes some of the parameters. Other parameters can use the default values.
    
    **Parameter**
    
    **Description**
    
    **CNAME (Internet)**
    
    Select **Custom Access Domain Name** and enter the prefix and suffix of the CNAME used by the current domain name. After you complete the configurations, a CNAME record is automatically generated. The CNAME record maps the domain name to the domain name of the GTM instance.
    
    **Global TTL Period**
    
    Specify the period of time that IP addresses can be cached.
    
    **Alert Group**
    
    Specify a group of contacts to receive notifications if a service exception occurs. By default, the alert group of CloudMonitor is displayed in the drop-down list. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group).
    

### **Configure address pools**

**Note**

The public IP addresses of the CLB instances must be added to different address pools. In this example, two address pools are configured.

1.  On the **Address Pools** tab, click **Create Address Pool**.
    
2.  In the **Create Address Pool** panel, set the **Address** parameter in the **Addresses** list to the public IP address of one of the CLB instances. Only one CLB public IP address is required. Configure other parameters or use the default values and click **OK**.
    
3.  Repeat the preceding steps to add the public IP address of the other CLB instance to the other address pool. Make sure that the public IP addresses of the CLB instances are added to different address pools.
    

### **Configure health checks**

**Note**

In this example, health checks are configured for each of the address pools.

1.  On the **Address Pools** tab, find the address pool that you want to manage and click the ![加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2823695561/p448393.png) icon to show all address pool configurations.
    
2.  Click **Add** to the right of **Health Check**. In the Modify Health Check Settings panel, configure the parameters. Set the health check protocol and port to the backend protocol and port. Configure the other parameters or use the default settings and click **OK**.
    
3.  Repeat the preceding steps to configure health checks for the other address pool. Make sure that health checks are configured for each of the address pools.
    

### **Configure an access policy**

1.  In the **Access Policy Type** section of the **Basic Settings** tab, click **Settings** in the lower part of the **Geographical Location-based Access Policy** card.
    
2.  On the **Geographical Location-based Access Policy** page, click **Create Access Policy**.
    
3.  In the **Create Access Policy** panel, configure the parameters and click **OK**. The following table describes some of the parameters. Other parameters can use the default values.
    
    **Parameter**
    
    **Description**
    
    **DNS Request Source**
    
    After you specify DNS request sources, user traffic from different regions or Internet service providers (ISPs) can be routed to specified IP addresses.
    
    In this example, **Global** is selected.
    
    **Primary Address Pool Set**
    
    Select the address pools to which requests are routed by default.
    
    In this example, the address pools in all regions are selected.
    

## **Step 3: Verify the result**

1.  Access the CNAME from your browser to test whether you can access the services.
    
2.  Disable the backend services in one of the regions to simulate a fault. Wait a few seconds and refresh the page to test whether the services remain accessible.
    
    To view the detailed log data of the failover, go to the **Alert Logs** tab of the **GTM** instance.
    

## **References**

Application Load Balancer (ALB) and Network Load Balancer (NLB) also support cross-region load balancing. Choose ALB, NLB, or CLB based on your business requirements.

For more information, see the following topics:

-   [Specify an ECS instance in a VPC as a backend server of ALB in a different region](/help/en/slb/application-load-balancer/use-cases/specify-an-ecs-instance-in-a-vpc-as-a-backend-server-of-alb-in-a-different-region)
    
-   [Add on-premises servers to an ALB instance within the same region](/help/en/slb/application-load-balancer/use-cases/specify-an-on-premises-server-as-a-backend-server-of-alb)
    
-   [Add backend servers in VPCs to NLB across regions](/help/en/slb/network-load-balancer/use-cases/use-nlb-and-cen-to-distribute-traffic-across-regions)
    
-   [Add on-premises servers to an NLB instance within the same region](/help/en/slb/network-load-balancer/use-cases/add-servers-in-data-centers-to-an-nlb-instance)
