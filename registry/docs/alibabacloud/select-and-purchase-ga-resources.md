Before you use Global Accelerator (GA), you must select an instance that meets your business requirements based on scenarios, business traffic, and other factors. This topic describes the configurations of GA instances to help you purchase resources based on your requirements.

## Basic configurations

### **Instance type**

GA provides standard and basic instances. You can select an instance type based on the acceleration capabilities and scenarios supported by each instance type.

**Instance type**

**Description**

**Applicable scenario**

Standard GA instance

Standard GA instances support multiple access modes and provide global users with end-to-end acceleration services to improve user experience.

Standard GA instances are used to accelerate content delivery at Layer 4 (TCP and UDP protocols) and Layer 7 (HTTP and HTTPS protocols).

Basic GA instance

Basic GA instances use the high-quality global network bandwidth and transmission network of Alibaba Cloud to provide point-to-point acceleration services.

You can use basic GA instances to accelerate content delivery at Layer 3 (IP). You need to only specify an acceleration area and an endpoint group.

For more information about the features and limits of standard GA instances and basic GA instances, see [Comparison between standard GA instances and basic GA instances](/help/en/ga/product-overview/comparison-between-standard-and-basic-ga-instances#concept-2224361) and [Limits on instance types](/help/en/ga/product-overview/limits#section-6qo-izp-gk9).

### **Billing method**

GA instances support the subscription and pay-as-you-go billing methods. Different billing methods support different bandwidth metering methods. Each metering method is ideal for different scenarios. You can select a metering method as needed.

**Instance billing method**

**Bandwidth metering method**

**Scenario**

[Pay-as-you-go](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)

[Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer-1/) (managed by CDT)

You do not need to select the instance specification required by your business. You are charged based on the actual usage of each billable item.

This billing method is suitable for scenarios where resource usage frequently changes. If you cannot estimate the resource usage and the amount of data transfer, we recommend that you select a pay-as-you-go GA instance.

[Subscription](/help/en/ga/product-overview/billing-of-ga-instances)

[Pay-by-bandwidth](/help/en/ga/product-overview/billing-of-bandwidth-plans/) (bandwidth plan)

You must select an instance specification that meets your business requirements, associate a bandwidth plan with the instance, and then complete other configurations.

This billing method is suitable for scenarios where resource usage is stable and resources are required for a long period of time.

**Important**

-   The first time you use a pay-as-you-go Global Accelerator instance, go to the [pay-as-you-go GA activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) and activate GA as prompted.
    
-   You can purchase GA resource plans to offset the Capacity Unit (CU) fees and instance fees of pay-as-you-go GA instances. Resource plans are more cost-effective than the pay-as-you-go billing method. For more information, see [GA resource plans](/help/en/ga/product-overview/resource-package).
    
-   You can select the billing method only when you purchase a GA instance. The billing method cannot be changed after a GA instance is created.
    

## Acceleration configurations

### Acceleration configurations (pay-as-you-go)

### **Accelerated IP address type**

-   For **pay-as-you-go** **standard GA** instances, you can select one of the following accelerated IP address types: **Elastic IP Address** and **Anycast Elastic IP Address**.
    
    **Item**
    
    **EIP**
    
    **Anycast EIP**
    
    **Access mode**
    
    **The custom access mode is used. You must specify an acceleration area.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5221513571/CAEQQBiBgIDP8vLcuxkiIGNlYjg5MThlOGIzZTQ1YWZhYjI2NWM4YzY4MjlmYTU43963382_20230830144006.372.svg)
    
    You can select acceleration areas and acceleration regions based on your business requirements. Global Accelerator allocates a separate EIP to each acceleration region.
    
    **The automatic access mode is used. You do not need to specify an acceleration area.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5221513571/CAEQQBiBgMDb8vLcuxkiIGU5ODJjM2NjNDY0MzQwM2ViZTU2MzM5YzhkMThhYjM53963382_20230830144006.372.svg)
    
    Global Accelerator allocates an Anycast EIP to multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to the Anycast EIP.
    
    **Supported access points**
    
    For more information about the acceleration areas and regions supported by Global Accelerator, see [Acceleration areas and regions](/help/en/ga/user-guide/overview-1/#05cc333029x1g).
    
    The acceleration service depends on the access points that are supported by Anycast EIP. You can use Anycast EIPs to accelerate content delivery for clients outside the Chinese mainland. To accelerate content delivery for clients in the Chinese mainland by using Anycast EIPs, you must specify China (Hong Kong) as the acceleration region. For more information, see the "Access point locations" section of the [What is Anycast EIP?](/help/en/anycast-eip/product-overview/what-is-anycast-eip#section-24l-kft-zbq) topic.
    
    **Feature**
    
    -   Advantages: Different accelerated IP addresses are provided for clients based on network latency after the client requests are resolved by using Alibaba Cloud DNS. This ensures that the optimal routes are used.
        
    -   Disadvantages: The configuration and maintenance are complex. You must specify acceleration areas and allocate bandwidth based on your business requirements. You cannot use static IP addresses to provide services.
        
    
    -   Advantages: You do not need to specify acceleration areas and regions. Clients can automatically connect to the nearest access point, which greatly reduces O&M workloads.
        
    -   Disadvantages: Clients can connect only to the access points that are supported by Anycast EIPs. The acceleration performance varies based on the Internet Service Provider (ISP).
        
    
    **Note**
    
    -   For pay-as-you-go standard Global Accelerator instances, two accelerated IP addresses of the **EIP** type are allocated to each acceleration region. Both accelerated IP addresses can receive client traffic at the same time to ensure high availability of the acceleration area.
        
    -   By default, you cannot use **Anycast EIPs** as accelerated IP addresses. To use Anycast EIPs as accelerated IP addresses, go to the Quota Center console, find the quota named **GA supports anycast**, and then click [Apply](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) in the Actions column.
        
    -   To use **Anycast EIPs**, the Global Accelerator instances and basic bandwidth plans must meet the following requirements:
        
        -   Global Accelerator instances: Select subscription standard Global Accelerator instances whose specifications are Large Ⅰ or higher and whose bandwidth metering method is **pay-by-bandwidth**.
            
        -   Basic bandwidth plans: You must select the premium bandwidth type and the pay-by-data-transfer metering method. By default, basic bandwidth plans that use the pay-by-data-transfer metering method are not available. To use these plans, contact your account manager.
            
    
-   For **pay-as-you-go** **basic GA** instances, the accelerated IP address type is set to **Elastic IP Address** by default. Only one acceleration area and one acceleration region are supported. By default, you can add up to 20 accelerated IP addresses.
    
    If you need more accelerated IP addresses, go to the [Quota Management](https://ga.console.alibabacloud.com/quota) page to increase the **gaplus\_quota\_basic\_gaip\_limit** quota.
    

### **ISP line type**

For **pay-as-you-go** GA instances with the accelerated IP address type set to **Elastic IP Address**, you can select the ISP line type when clients connect to acceleration regions.

-   **BGP (Multi-ISP)**: provides premium BGP lines across the globe. This is the default line type. BGP lines from different ISPs can be used. The optimal BGP line is automatically selected to ensure network stability.
    
    All acceleration regions support BGP (Multi-ISP).
    
-   **BGP Pro**: BGP (Multi-ISP) Pro lines optimize data transmission to the Chinese mainland and improve connection quality for international services. Cross-border connections are established by using Chinese mainland ISP services when BGP (Multi-ISP) Pro lines provide services to users in the Chinese mainland (except data centers). This reduces network latency.
    
    BGP (Multi-ISP) Pro is available only in the China (Hong Kong) and Japan (Tokyo) regions.
    

### **Transmission network type**

You must select the transmission network type only if your service requires cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).

-   BGP (Multi-ISP) Pro: BGP (Multi-ISP) Pro lines are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
    
    You do not need to perform enterprise real-name verification.
    
-   Cross-border Express Connect: Cross-border Express Connect circuits are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
    
    Cross-border Express Connect circuits provide better acceleration performance but require [enterprise real-name verification](/help/en/account/support/which-users-are-required-to-undergo-account-authentication).
    

For more information about network quality attributes, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer) and [Billing rules for cross-border data transfer](/help/en/ga/product-overview/billing-rules-for-cross-border-data-transfer).

You can select the ISP line type and transmission network type based on the service region and the region that requires acceleration.

**Note**

-   The region where the service is deployed is determined by the configurations of the acceleration area and the endpoint group.
    
-   If the accelerated service is deployed in the Chinese mainland or the acceleration region is in the Chinese mainland, you must complete an [ICP filing](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) before you can provide services.
    
-   If the accelerated service is deployed outside the Chinese mainland and the acceleration area includes the Chinese mainland region, you need to complete an [ICP filing](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) for the service domain name, or select China (Hong Kong) as the acceleration area and use BGP Pro lines to serve end users in the Chinese mainland.
    
-   In pay-as-you-go mode, whether the service is deployed on Alibaba Cloud only determines whether you are charged for public network [data transfer](/help/en/ga/product-overview/pay-by-data-transfer#section-mbi-6uu-yb7) between the acceleration region and the endpoint group region. This does not affect the selection of the ISP line type and transmission network type.
    

**Region that requires acceleration**

**Service region**

**ICP number for web service**

**ISP line type**

**Transmission network type**

Chinese mainland

Chinese mainland

Yes

BGP (Multi-ISP)

N/A

Regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan)

No

BGP Pro

You must select China (Hong Kong) or Japan (Tokyo) as the acceleration region

N/A

Yes

BGP (Multi-ISP)

Default: Premium Bandwidth Cross-border Acceleration

You can also switch to Dedicated Line Cross-border Acceleration

Regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan)

Regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan)

No

BGP (Multi-ISP)

N/A

Chinese mainland

Yes

BGP (Multi-ISP)

Default: Premium Bandwidth Cross-border Acceleration

You can also switch to Dedicated Line Cross-border Acceleration

If you select China (Hong Kong) as the endpoint group, the transmission network type is not applicable

### Acceleration configurations (subscription)

The acceleration configurations of a subscription standard Global Accelerator instance include the instance specification and bandwidth plan type. You need to only select the bandwidth plan type for a subscription basic Global Accelerator instance.

### **Instance specification**

**Subscription** **standard** Global Accelerator instances support multiple specifications. Different specifications provide different acceleration capabilities. The following table describes the specifications.

**Specifications**

**Number of acceleration regions**

**Maximum bandwidth**

**Maximum concurrent connections**

Small Ⅰ

1

20 Mbps

5,000

Small Ⅱ

2

40 Mbps

10,000

Small Ⅲ

3

60 Mbps

15,000

Medium Ⅰ

5

100 Mbps

25,000

Medium Ⅱ

8

160 Mbps

40,000

Medium Ⅲ

10

200 Mbps

50,000

Large Ⅰ

All regions.

For more information about the supported acceleration areas and regions, see [Overview of acceleration areas](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).

400 Mbps

100,000

Large Ⅱ

600 Mbps

150,000

Large Ⅲ

800 Mbps

200,000

Large IV

1 Gbps

250,000

Large V

1.2 Gbps

300,000

Large VI

1.4 Gbps

350,000

Large VII

1.6 Gbps

400,000

Large VIII

1.8 Gbps

450,000

Super Large Ⅰ

2 Gbps

500,000

Super Large Ⅱ

4 Gbps

1,000,000

**Note**

By default, GA instances whose specifications are Large III or higher are unavailable. To use GA instances whose specifications are Large III or higher, contact your account manager.

### **Bandwidth plan type**

After you purchase a **subscription** Global Accelerator instance, you must associate a basic bandwidth plan with the Global Accelerator instance.

The following types of bandwidth are supported by basic bandwidth plans: basic, enhanced, and premium. The acceleration type, accelerated endpoint, and acceleration scope of a basic bandwidth plan vary based on the bandwidth type, as described in the following table.

**Bandwidth type**

**Acceleration type**

**Accelerated endpoint**

**Acceleration scope**

Basic

Applications deployed on Alibaba Cloud

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   Elastic Compute Service (ECS) instances
        
    -   Elastic network interfaces (ENIs)
        
    -   Classic Load Balancer (CLB) (formerly known as SLB) instances
        
    -   Application Load Balancer (ALB) instances
        
    -   Network Load Balancer (NLB) instances
        
    -   Object Storage Service (OSS) buckets
        
    -   vSwitches
        
-   Basic GA instance:
    
    -   CLB instances
        
    -   Secondary ENIs
        
    -   ECS instances
        
    -   NLB instances
        

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Enhanced

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   ECS instances
        
    -   ENIs
        
    -   CLB instances
        
    -   ALB instances
        
    -   NLB instances
        
    -   OSS buckets
        
    -   vSwitches
        
    -   Custom IP addresses
        
    -   Custom domain names
        
-   Basic GA instance: N/A
    

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Premium

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   ECS instances
        
    -   ENIs
        
    -   CLB instances
        
    -   ALB instances
        
    -   NLB instances
        
    -   OSS buckets
        
    -   vSwitches
        
    -   Custom IP addresses
        
    -   Custom domain names
        
-   Basic GA instance:
    
    -   CLB instances
        
    -   Secondary ENIs
        
    -   ECS instances
        
    -   NLB instances
        

By default, the acceleration area and the area where the endpoint is deployed are located outside the Chinese mainland. If you want to accelerate data transfer between the Chinese mainland and other areas, you must select China (Hong Kong) as the acceleration region.

**Note**

-   You can associate only basic bandwidth plans that provide basic bandwidth or premium bandwidth with basic GA instances that use the **pay-by-bandwidth** bandwidth metering method.
    
-   For information about backend service types, see [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/) and [Add and manage endpoint groups and endpoints for a basic GA instance](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance).
    

You can select different bandwidth types based on the service region, deployment location, and the region that requires acceleration.

**Note**

If the accelerated service is deployed in the Chinese mainland or the acceleration region is in the Chinese mainland, you must complete [ICP filing](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) before you can provide services.

**Region that requires acceleration**

**Service region**

**Server deployment**

**ICP filing requirements (web services)**

**Bandwidth type**

Chinese mainland

Chinese mainland

On Alibaba Cloud

Yes

Standard bandwidth

Outside Alibaba Cloud

Yes

Enhanced bandwidth

Outside the Chinese mainland

On Alibaba Cloud

No

Premium bandwidth

You must specify China (Hong Kong) as the acceleration region.

Outside Alibaba Cloud

No

Premium bandwidth

You must specify China (Hong Kong) as the acceleration region.

Outside the Chinese mainland

Outside the Chinese mainland

On Alibaba Cloud or outside Alibaba Cloud

No

Premium bandwidth

Chinese mainland

On Alibaba Cloud

Yes

Premium bandwidth

You must specify China (Hong Kong) as the acceleration region.

Outside Alibaba Cloud

Yes

Premium bandwidth

You must deploy the endpoint group in the China (Hong Kong) region.

## **References**

-   For more information about how to purchase a Global Accelerator instance, see [Create and manage a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances) and [Create and manage a basic GA instance](/help/en/ga/user-guide/create-and-manage-basic-ga-instances).
    
-   For more information about how to get started with Global Accelerator, see [Get started with GA](/help/en/ga/getting-started/get-started).
