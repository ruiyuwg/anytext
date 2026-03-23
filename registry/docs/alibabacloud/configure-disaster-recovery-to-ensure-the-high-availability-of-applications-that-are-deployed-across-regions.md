When your applications are deployed across regions, you may face service unavailability issues due to regional network failures. You can use Global Accelerator (GA) to accelerate applications deployed across regions and implement multi-region load balancing and high availability disaster recovery for application access traffic.

## Background

A financial company has its headquarters in US (Silicon Valley) and a branch office in US (Virginia), with ECS01 and ECS02 servers deployed in the corresponding Alibaba Cloud regions to host applications. Clients are primarily located in China (Hong Kong) and Japan. To ensure continuous operation of critical core application systems and minimize risk-related losses, the company has specific reliability requirements for its application system:

-   When an incident occurs at the headquarters in US (Silicon Valley), business data must quickly switch to the branch system in US (Virginia).
    
-   Reduce latency, jitter, and packet loss caused by unstable cross-region public networks.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9125666671/CAEQUBiBgMCqtICx2BkiIGE4N2E0NmQxYmVkMjQ0MDJiZTY4Y2Q4OTJiMTJmYjRi3963382_20230830144006.372.svg)

You can create a Global Accelerator instance, set Japan (Tokyo) and China (Hong Kong) as acceleration areas, and add multi-region application systems in US (Silicon Valley) and US (Virginia) as endpoint group 1 and endpoint group 2 respectively. Global Accelerator will intelligently distribute access traffic based on the scheduling priority and traffic distribution values of each endpoint group, implementing multi-region load balancing for access traffic.

You can configure health checks for multiple endpoint groups. When the health check of the headquarters system shows an exception, Global Accelerator will automatically distribute new requests to the branch system with normal health checks. When the headquarters system returns to normal, Global Accelerator will automatically restore it to the request service. This implements high availability for cross-region application systems and reduces network latency.

You can also configure DNS resolution with the CNAME allocated by the Global Accelerator instance. The CNAME address of Global Accelerator supports resolution by region, which can intelligently return different accelerated IP addresses to end users in different regions, reducing resolution latency and improving application system access speed.

## Prerequisites

-   Your US (Silicon Valley) server ECS01 and US (Virginia) ECS02 have deployed backend applications.
    
-   You have configured DNS resolution for the application domain name by configuring A records to point the domain name to the public IP addresses of the two backend servers.
    

**Note**

This topic uses an example in which you use Nginx to configure a backend HTTP 80 service and use Alibaba Cloud DNS to [configure a DNS record](/help/en/dns/add-a-dns-record#topic-2035899).

If you are using a non-Alibaba Cloud DNS resolution service, please refer to your DNS service provider's operation guide.

## **Step 1: Configure basic information about an instance**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Pay-as-you-go Instance**.
    
3.  In the **Basic Instance Configuration** step, configure the parameters based on the following table and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **GA Instance Name**
    
    Enter a name for the GA instance.
    
    **Instance Billing Method**
    
    **Pay-As-You-Go** is selected by default.
    
    You are charged instance fees, Capacity Unit (CU) fees, and data transfer fees for pay-as-you-go standard Global Accelerator instances.
    
    -   For more information about instance fees and CU fees, see [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).
        
    -   For more information about data transfer fees, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).
        
    
    **Resource Group**
    
    Select the resource group to which the standard Global Accelerator instance belongs.
    
    The resource group must be created by the current Alibaba Cloud account in Resource Management. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    

## **Step 2: Configure acceleration areas**

Specify acceleration regions and allocate bandwidth to each acceleration region.

In the **Configure Acceleration Area** step, configure the parameters based on the following table and click **Next**.

**Parameter**

**Description**

**Acceleration Area**

Select one or more regions that need access acceleration from the drop-down list, and then click **Add To List**.

In this example, select **China (Hong Kong)** and **Japan (Tokyo)**.

**Assign Bandwidth**

**Maximum Bandwidth**

Set the bandwidth for the acceleration area. Each acceleration area supports an allocated bandwidth range of 2 to 10000 Mbps.

This peak bandwidth value is for throttling only, and the resulting traffic costs are billed by CDT.

In this example, keep the default value of **200** Mbps.

**Important**

If the bandwidth peak is set too low, rate limiting may occur, resulting in traffic being dropped. Please plan the bandwidth peak reasonably to ensure it matches your business requirements.

**IP Protocol**

Select the IP address protocol used to access the Global Accelerator service.

In this example, keep the default value **IPv4**.

**ISP Line Type**

Select the Global Accelerator service's Internet quality type.

In this example, select **BGP (Multi-ISP)**.

## Step 3: Configure listeners

A listener listens for connection requests and distributes the requests to endpoints based on the port and the protocol that you specify. Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute network traffic. After you associate an endpoint group with a listener, network traffic is distributed to the optimal endpoint in the endpoint group.

In the **Configure listeners** step, configure a listener and click **Next**.

This section only introduces the parameters strongly related to this example. Other parameters can retain their default settings. For more information, see [Add TCP or UDP protocol listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-ncm-izu-muk).

**Parameter**

**Description**

**Listener Name**

Enter the name of the listener.

**Routing Type**

Select the route type.

In this example, select **Smart Routing**.

**Protocol**

Select the protocol type for the listener.

In this example, select **TCP**.

**Port**

Specify the listener port that is used to receive and forward requests to endpoints. The port number must be in the range of **1 to 65499**.

In this example, enter **80**.

## Step 4: Configure endpoint groups and endpoints

You can configure the backend applications in US (Silicon Valley) and US (Virginia) regions as endpoint group 1 and endpoint group 2 respectively, and configure health checks for both endpoint groups to implement high availability for cross-region application systems.

You can also adjust the access traffic ratio between multiple endpoint groups by setting traffic distribution to achieve reasonable load balancing of access traffic.

1.  Configure US (Silicon Valley) endpoint group 1.
    
    1.  On the ****Configure an endpoint group**** wizard page, configure endpoint group 1 according to the following information, and then click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Region**
        
        Select the region to which the endpoint group belongs, which is the region where the target server to be accessed is located.
        
        In this example, select **US (Silicon Valley)**.
        
        **Note**
        
        When there are multiple endpoint groups, the region of each endpoint group must be unique, meaning only one endpoint group can be configured for each region.
        
        **Endpoint Configuration**
        
        An endpoint is the target host that the client requests to access. You can configure the endpoint according to the following information:
        
        -   **Backend Service Type**: Select **Alibaba Cloud Public IP**.
            
            **Important**
            
            Health checks are supported for endpoint types such as virtual private cloud (VPC) ECS, Alibaba Cloud public IP, custom origin IP, or custom origin domain name. If the endpoint type is a Server Load Balancer instance, the health check parameters configured on the endpoint group will not take effect.
            
        -   **Backend Service**: Enter the IP of the backend service to be accelerated. In this example, enter the IP address of the US (Silicon Valley) origin server ECS01.
            
        -   **Weight**: Enter the weight of the endpoint. The weight value range is 0 to 255. Global Accelerator routes traffic to endpoints in proportion to the weights you configure. In this example, keep the default value **255**.
            
            **Warning**
            
            If the weight of an endpoint is set to 0, Global Accelerator stops distributing traffic to that endpoint. Proceed with caution.
            
        
        **Preserve Client IP**
        
        Choose whether to preserve the client source IP.
        
        If you choose to preserve the client source IP, backend servers can obtain the client source IP through this feature. For more information, see [Preserve client source IP](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
        
        In this example, keep the default configuration **Do Not Preserve**.
        
        **Traffic Distribution Ratio**
        
        Configure the traffic ratio to different endpoint groups.
        
        Value range: 0 to 100. In this example, enter **50**.
        
        **Note**
        
        For information about using traffic distribution, see [Multi-endpoint group traffic distribution principles and application scenarios](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#concept-2194393) and [Use GA traffic distribution to implement smooth traffic switching across multiple regions](/help/en/ga/use-cases/examples-on-how-to-configure-the-traffic-distribution-feature-for-multiple-endpoint-groups#task-2187331).
        
        **Health Check**
        
        Choose to enable or disable health checks. When enabled, health checks can determine the operational status of endpoints.
        
        In this example, enable health checks and keep other configurations as default.
        
    2.  On the **Configuration Review** wizard page, confirm the configuration information for the listener and endpoint group 1, and then click **Submit**.
        
        **Note**
        
        Creating a Global Accelerator instance takes approximately 3 to 5 minutes. Please wait patiently.
        
    3.  **Optional:** After the creation task is completed, click **Go To Instance Details** at the bottom of the creation task details list. On the instance details page, you can select the **Instance Information**, **Listeners**, **Acceleration Areas**, and other tabs to view the instance configuration information.
        
2.  Configure US (Virginia) endpoint group 2.
    
    1.  On the instance details page, click the **Listeners** tab.
        
    2.  On the **Listeners** tab, find the target listener, and click the endpoint group ID in the **Default Endpoint Group** column.
        
    3.  On the **Endpoint Groups** tab, in the **Default Endpoint Group** section, click **\+ Add Endpoint Group**.
        
    4.  On the **Add Endpoint Group** page, configure according to the following information, and then click **Create**.
        
        -   **Region**: Select **US (Virginia)**.
            
        -   **Endpoint Configuration** for **Backend Service**: Enter the IP address of the US (Virginia) origin server ECS02.
            
        
        Keep other parameter configurations consistent with endpoint group 1.
        

## **Step 5: Configure CNAME resolution**

In actual business scenarios, we recommend using your custom domain name. Using CNAME resolution to point your custom domain name to the CNAME allocated by the GA instance lets you switch business traffic to GA to achieve access acceleration.

In this scenario, if you already have an A record that points to a backend server, you can first add a CNAME record that points to GA in the China (Hong Kong) region for testing. After successful testing, you can gradually expand to other regions such as Japan, or retain only the CNAME record that points to GA.

1.  On the [Authoritative DNS Resolution](https://dnsnext.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.9b0a5ad1tRuDNs#/dns/domainList) page, find the domain name that you want to use and click **DNS Settings** in the **Actions** column.
    
    **Note**
    
    For a domain name that is not registered with Alibaba Cloud, you must [add the domain name](/help/en/dns/domain-management#topic-2035895) to the Alibaba Cloud DNS console before you can configure DNS records.
    
2.  On the DNS Settings page, click **Add DNS Record**, configure a CNAME record, and then click **OK**.
    
    In this example, the **Record Type** parameter is set to **CNAME**, the **Hostname** parameter is set to **www**, the **DNS Request Source** parameter is set to **Asia\_Hong Kong**, and the **Record Value** parameter is set to the CNAME of the GA instance. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    
    ![配置CNAME.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1770133571/p844615.png)
    
3.  Verify if the CNAME resolution is effective.
    
    You can open a command line window on a computer in the acceleration area and execute the ping command to ping the accelerated domain name.
    
    If the returned resolution result matches the CNAME value of Global Accelerator, the CNAME configuration has taken effect.
    

## Step 6: Access testing

Complete the following operations to test the effect of accelerating cross-region applications and implementing high availability disaster recovery.

**Note**

This example uses the following operating systems as examples for testing. Different types of operating systems have different test commands. For specific test commands, please refer to the operation guide of your operating system.

-   Client operating system: Windows Server 2022.
    
-   Origin server operating system: Alibaba Cloud Linux 3.
    

### **Test multi-endpoint group high availability**

1.  By disconnecting the US (Silicon Valley) origin server, simulate the access request result when one endpoint group in multiple endpoint groups fails.
    
    1.  Open a browser on computers in China (Hong Kong), Japan region, and other regions.
        
    2.  Enter the application system domain name to access applications deployed in US (Silicon Valley) and US (Virginia) regions.
        
        The test results are as follows:
        
        -   The following figure shows the access result of China (Hong Kong) users through the application system domain name. The responding server is ECS02 from the US (Virginia) origin server.
            
            ![HK 访问结果 01断掉.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7263138071/p749122.png)
            
        -   The following figure shows the access result of Japanese users through the application system domain name. The responding server is ECS02 from the US (Virginia) origin server.
            
            ![JP 访问结果 01断掉.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7263138071/p749123.png)
            
        
2.  After the US (Silicon Valley) origin server is restored, use the above method again to check the access results of users in China (Hong Kong) and Japan region.
    

-   The following figure shows the access result of China (Hong Kong) users through the application system domain name. The responding server is ECS01 from the US (Silicon Valley) origin server.
    
    ![HK 访问恢复.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7263138071/p749125.png)
    
-   The following figure shows the access result of Japanese users through the application system domain name. The responding server is ECS01 from the US (Silicon Valley) origin server.
    
    ![JP 访问恢复.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6263138071/p749127.png)
    

**Note**

The final resolution result of client access requests (i.e., the responding endpoint group) depends on your actual business test. When Global Accelerator is configured with multiple acceleration areas and multiple regional endpoint groups, the final resolution result of client access requests is related to the scheduling priority and traffic distribution values of each endpoint group. For more information, see [Multi-endpoint group traffic distribution principles and application scenarios](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#concept-2194393).

### **Test acceleration effect**

To test the acceleration effect, see [Test the acceleration effect of GA](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration).
