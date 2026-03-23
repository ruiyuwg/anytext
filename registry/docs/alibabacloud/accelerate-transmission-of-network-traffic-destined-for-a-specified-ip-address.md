If your application experiences high latency and packet loss that affect the user experience, you can use Global Accelerator (GA) to route access requests to the nearest access point on the Alibaba Cloud acceleration network. This accelerates your application. This topic describes how to use Global Accelerator to accelerate access to a backend service at a specific IP address to improve access speed and the user experience.

## Example scenario

This topic uses the following scenario. A company is headquartered in the US (Silicon Valley) and deploys an enterprise application on a self-managed server. However, because of an unstable public network, employees in the Hong Kong (China) office experience high latency, jitter, and packet loss when they access the enterprise application on the server in the US.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6168922771/CAEQUBiBgMC_qKKV2hkiIDM4MjFjMDQ3YzA2MTQzZmI4MzI0ZTBkYTdjMmNjZGY13963382_20230830144006.372.svg)

You can configure Global Accelerator. This allows traffic from the Hong Kong (China) office to the server in the US to enter the Alibaba Cloud acceleration network through an access point in Hong Kong (China). Then, smart routing sends the access requests to the endpoint. This improves the access speed and user experience for users in the Hong Kong (China) office.

**Note**

This topic uses a pay-as-you-go standard Global Accelerator instance as an example to describe how to configure Global Accelerator to accelerate access to a backend service at a specific IP address. Before you purchase a pay-as-you-go standard Global Accelerator instance, you must understand the following information:

-   Pay-as-you-go GA instances use the **Pay-by-data-transfer** metering method. You do not need to associate a bandwidth plan with pay-as-you-go GA instances. The billing of data transfer over the Global Accelerator network is managed by Cloud Data Transfer (CDT). For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#concept-2261223).
    
-   The first time you use a pay-as-you-go GA instance, you must [Activate the Service](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl).
    

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
        
    -   For more information about data transfer fees, see [Traffic billing](/help/en/ga/product-overview/pay-by-data-transfer).
        
    
    **Resource Group**
    
    Select the resource group to which the standard Global Accelerator instance belongs.
    
    The resource group must be created by the current Alibaba Cloud account in Resource Management. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    

## **Step 2: Configure an acceleration area**

Configure an acceleration area for the Global Accelerator instance. Specify the regions where users that require accelerated access to the backend service are located and allocate bandwidth to those regions.

On the **Configure Acceleration Area** page, configure an acceleration area based on the following information and click **Next**.

**Configuration**

**Description**

**Acceleration Area**

Select one or more regions that you want to accelerate from the drop-down list, and then click **Add to List**.

In this topic, **China (Hong Kong)** in the **Asia-Pacific** area is selected.

**Allocate Bandwidth**

**Peak Bandwidth**

Set the bandwidth for the acceleration region. The value for each acceleration region ranges from 2 Mbps to 10,000 Mbps.

This peak bandwidth serves only as a speed limit. The generated data transfer fees are settled and billed by CDT.

In this topic, the default value **200** Mbps is used.

**Important**

If the peak bandwidth is set too low, traffic may be dropped due to speed limiting. Plan the peak bandwidth as needed.

**IP Protocol**

Select the IP protocol for the Global Accelerator service.

In this topic, the default value **IPv4** is used.

**ISP Line Type**

Select the ISP line type for the Global Accelerator service.

In this topic, **BGP (Multi-ISP)** is selected.

## **Step 3: Configure a listener**

A listener listens for connection requests and distributes the requests to endpoints based on the port and the protocol that you specify. Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute network traffic. After you associate an endpoint group with a listener, network traffic is distributed to the optimal endpoint in the endpoint group.

On the **Configure Listeners** page, configure a listener based on the following information and click **Next**.

**Configuration**

**Description**

**Listener Name**

Enter a name for the listener.

**Routing Type**

Select a routing type.

In this topic, **Intelligent Routing** is selected.

**Protocol**

Select a protocol for the listener.

In this topic, **TCP** is selected.

**Port**

Specify the listener port that is used to receive requests and forward them to endpoints. Valid values: **1 to 65499**.

In this example, enter **80**.

**Client Affinity**

Select whether to preserve client affinity. If you preserve client affinity, all requests from the same client are routed to the same endpoint when the client accesses stateful applications.

In this topic, **Source IP** is selected.

## **Step 4: Configure an endpoint group and endpoints**

1.  On the ****Configure an Endpoint Group**** page, configure an endpoint group and endpoints based on the following information, and then click **Next**.
    
    **Configuration**
    
    **Description**
    
    ****Region****
    
    Select the region where the endpoint group is deployed.
    
    In this topic, **US (Silicon Valley)** is selected.
    
    **Endpoint Configuration**
    
    Endpoints are the destination hosts that process client requests. Configure endpoints based on the following information:
    
    -   **Backend Service Type**: Select **Custom Public IP Address**.
        
    -   **Backend Service**: Enter the IP address of the backend service that you want to accelerate.
        
    -   **Weight**: Enter the weight of the endpoint. Valid values: 0 to 255. Global Accelerator routes traffic to endpoints based on the weights that you configure. In this topic, the default value **255** is used.
        
    
    **Warning**
    
    If the weight of an endpoint is set to 0, Global Accelerator stops distributing traffic to that endpoint. Proceed with caution.
    
    **Preserve Client IP**
    
    Select whether to preserve client source IP addresses.
    
    If you preserve client source IP addresses, backend servers can retrieve the client source IP addresses. If the listener uses the TCP protocol and you enable this feature, you must configure the backend server to retrieve client source IP addresses. The method varies based on the backend service type. For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
    
    In this topic, client source IP addresses are not preserved.
    
    **Traffic Distribution Ratio**
    
    Configure the percentage of traffic that is distributed to different endpoint groups.
    
    The valid values are 0 to 100.
    
    In this topic, the default value **100**% is used.
    
    **Health Check**
    
    Enable or disable health checks.
    
    If you enable this feature, you can use health checks to check the health status of endpoints. For more information about health checks, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).
    
    This is disabled by default.
    
2.  In the **Configuration Review** step, check the configurations and click **Submit**.
    
    **Note**
    
    It takes 3 to 5 minutes to create a GA instance.
    
3.  **(Optional)** After the instance is created, click **Go to Instance Details** below the task list. On the instance details page, you can view the instance configurations on the **Instance Information**, **Listeners**, and **Acceleration Areas** tabs.
    

## **Step 5: Test the acceleration effect**

**Note**

If you specify UDP as the protocol when you add a listener to Global Accelerator, you can verify the acceleration performance of Global Accelerator by using UDPing. For more information, see [Verify the acceleration performance of a UDP listener](/help/en/ga/use-cases/test-the-acceleration-performance-of-a-ga-instance-that-uses-a-udp-listener#task-2447506).

1.  On a computer in the access region, open a command-line window. In this topic, the access region is Hong Kong (China).
    
2.  Run the following command to check the data packet latency.
    
    ```
    curl -o /dev/null -s -w "time_connect: %{time_connect}\ntime_starttransfer: %{time_starttransfer}\ntime_total: %{time_total}\n" "http[s]://<accelerated IP address>[:<port>]"
    ```
    
    Take note of the following parameters:
    
    -   time\_connect: The period of time that is required to establish a TCP connection. Unit: seconds.
        
    -   time\_starttransfer: The start time of data transfer. The start time refers to the amount of time from when the client sends a request to the backend server to when the first byte is sent to the client. Unit: seconds.
        
    -   time\_total: The total connection time. The total connection time refers to the period of time from the time when the client sends a request to the time when the client receives the last byte from the backend server. Unit: seconds.
        
    
    Tests show that using Global Accelerator reduces the total connection time from clients in Hong Kong (China) to the backend service in the US (Silicon Valley), which lowers access latency.
    
    Figure 1.Access latency before acceleration (testing the backend service IP address)
    
    ![加速前.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6799822071/p729264.png)
    
    Figure 2.Access latency after acceleration (testing the accelerated IP address)
    
    ![配置后-HK上.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6799822071/p722973.png)
    
    **Note**
    
    The actual acceleration performance of the Global Accelerator service depends on your business tests.
    

## **(Optional) Step 6: Configure a CNAME record**

If you have a domain name, we recommend that you use your custom domain name to provide the enterprise application service. For example, if your custom domain name is `example.com`, you can perform the following operations:

-   Add a CNAME record. In this topic, a CNAME record is added to map the domain name `www.example.com` to the CNAME that is assigned to the Global Accelerator instance.
    
-   Add an A record to map the domain name `www.example.com` to the IP address of the backend service in the US (Silicon Valley), and set the resolution line to North America\_United States.
    

**Note**

The Free Edition of Alibaba Cloud DNS is used by default. You must upgrade to the Enterprise Ultimate Edition or Exclusive Edition to enable intelligent DNS resolution for end users in different regions. For instructions on how to upgrade, see [Renewal](/help/en/dns/renewal#section-pf7-cok-x5h). If you do not use Alibaba Cloud DNS, follow the instructions provided by your DNS provider.

1.  On the [Domain Names](https://dnsnext.console.alibabacloud.com/authoritative) page, find the target domain name and click **Settings** in the **Actions** column.
    
    **Note**
    
    If your domain name is not registered with Alibaba Cloud, you must add it to the Alibaba Cloud DNS console before you can configure DNS records. For more information, see [Add a domain name](/help/en/dns/domain-management#topic-2035895). If your domain name is registered with Alibaba Cloud, skip this step.
    
2.  On the Settings page, click **Add Record**, add CNAME and A records with the following configurations, and then click **OK**.
    
    **Configuration**
    
    **Description**
    
    **Record Type**
    
    Select **CNAME**.
    
    Select **A**.
    
    **Host Record**
    
    Enter the prefix of your domain name.
    
    In this topic, enter www.
    
    **Request Source Parsing**
    
    Keep the default value.
    
    Select Region, Outside Chinese mainland, North America, and United States in sequence.
    
    **TTL**
    
    This is the cache time for the DNS record on the DNS server. A smaller value indicates that record changes take effect faster.
    
    In this topic, the default value of 10 minutes is used.
    
    **Record Value**
    
    Enter the CNAME that is assigned to the Global Accelerator instance.
    
    You can view the CNAME that is assigned to the Global Accelerator instance on the **Instances** page.
    
    Enter the IP address of the backend service in the US (Silicon Valley).
    

After you complete the preceding configurations, company employees can access the enterprise application service using the domain name `www.example.com`. Employees in the US can directly access the backend service in Silicon Valley using the domain name. Employees in Hong Kong (China) or other countries and regions are provided with services by Global Accelerator.

## **More information**

You can also use the Global Accelerator quick configuration template provided by Resource Orchestration Service (ROS) to accelerate access from clients in Hong Kong (China) to the backend service in the US (Silicon Valley) by IP address. To do this, go to the [quick configuration template link](https://ros.console.alibabacloud.com/region/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231019/jflg/ga-accelerated-access-to-specified-ip.yml&isSimplified=true) and follow the on-screen instructions to quickly configure Global Accelerator.
