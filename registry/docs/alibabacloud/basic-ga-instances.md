Basic Global Accelerator instances use the high-quality global Internet bandwidth and the transmission network of Alibaba Cloud to provide users with point-to-point acceleration services.

## Introduction to basic GA instances

You can use basic Global Accelerator instances to accelerate content delivery at Layer 3 (IP). To enable acceleration, you need to only specify an acceleration area and an endpoint group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3280375671/CAEQUBiBgMCB2oP32BkiIDRiYTU3NTZiODQ5ZDRjZjY5OTNiNzkxYTFjNWJmZmYw3963382_20230830144006.372.svg)

### Access mode

You can use only accelerated IP addresses to connect to basic Global Accelerator instances. The accelerated IP addresses must be Elastic IP Address (EIP). Clients can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to an accelerated IP address.

### Acceleration network

Basic GA instances provide one-to-one acceleration services between acceleration regions and origin server regions. Basic GA instances provide acceleration services only at Layer 3 (IP protocols).

After client requests reach the Alibaba Cloud global transmission network, GA distributes the traffic to backend services based on the mappings between accelerated IP addresses and endpoints.

### Origin server connection

GA forwards client requests to backend services only over private networks. The following endpoint types are supported: elastic network interfaces (ENIs), Classic Load Balancer (CLB) instances, Network Load Balancer (NLB) instances, and Elastic Compute Service (ECS) instances.

## Limits on basic GA instances

### **Limits on acceleration areas**

-   You can add only one acceleration area and one acceleration region for each basic GA instance. Only IPv4 clients can connect to basic GA instances.
    
-   By default, you can add up to 20 accelerated IP addresses and up to 10 idle accelerated IP addresses to a basic GA instance.
    
    If you want to add more accelerated IP addresses or increase the quota of idle accelerated IP addresses, you can increase the **gaplus\_quota\_basic\_gaip\_limit** quota or the **gaplus\_quota\_basic\_gaip\_idle\_limit** quota on the [Quota Management](https://ga.console.alibabacloud.com/quota) page. For more information, see the [Increase quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) section of the Manage GA quotas topic.
    

### **Limits on the bandwidth of an acceleration region**

The limits on the bandwidth of an acceleration region vary based on the billing method and bandwidth metering method of the basic Global Accelerator instance.

**Instance billing method**

**Bandwidth metering method**

**Limits on the bandwidth of an acceleration region**

**Pay-as-you-go**

**Pay-by-data-transfer**

You can specify the maximum bandwidth of an acceleration region based on your business requirements. Bandwidth range: 2 Mbit/s to 20,000 Mbit/s.

All accelerated IP addresses in the acceleration region share the maximum bandwidth.

**Subscription**

**Pay-by-bandwidth**

The bandwidth of an acceleration region is throttled based on the maximum bandwidth of the basic bandwidth plan that is associated with the GA instance.

You can associate only basic bandwidth plans that provide basic bandwidth or premium bandwidth with basic GA instances.

### **Limits on endpoint groups**

-   You can add only one endpoint group. By default, you can add up to 200 endpoints.
    
    If you want to add more endpoints, you can increase the **gaplus\_quota\_basic\_endpoint\_limit** quota on the [Quota Management](https://ga.console.alibabacloud.com/quota) page. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   Only the following endpoint types are supported: secondary ENIs, CLB instances in VPCs, internal-facing NLB instances, and Elastic Compute Service instances. ENIs, CLB instances, NLB instances, and ECS instances cannot be associated with EIPs or static public IP addresses.
    

**Note**

-   Basic GA instances created after August 1, 2023 support the use of multiple accelerated IP addresses in an acceleration region and private Network Load Balancer (NLB) endpoints. If your basic GA instance was created before this date and you want to use these features, contact your business manager to upgrade the instance.
    
-   If your Global Accelerator instances were created before August 1, 2023, the following limits apply:
    
    -   You can add only one acceleration area and one acceleration region to each GA instance.
        
    -   You can add only one endpoint group and one endpoint to each GA instance.
        
    -   You cannot specify an NLB instance as an endpoint.
        
    -   You do not need to add an accelerated IP address or associate an accelerated IP address with an endpoint.
        

## Acceleration areas and regions supported by basic Global Accelerator instances

**Note**

-   The regions in the following table are for reference only. You can view the actual regions that are supported by GA instances in the GA console.
    
-   If the region where the client resides is not supported by GA, you can select the acceleration region that is closest to the client. The client can use the accelerated IP address to access the Alibaba Cloud acceleration network from the acceleration region.
    
-   The following acceleration regions are unavailable by default. If you want to specify these acceleration regions, use the following methods:
    
    -   If you want to specify China (Nanjing), Brazil (Sao Paulo), Canada (Toronto), Canada (Vancouver), South Korea (Seoul), Thailand (Bangkok), Vietnam (Ho Chi Minh), UAE (Dubai), and Philippines (Manila) as acceleration regions, contact your account manager.
        
    -   If you want to specify China (Heyuan) as the acceleration region, apply for the privilege in Quota Center.
        
        Log on to the [Privileges](https://quotas.console.alibabacloud.com/white-list-products/ga/quotas) page of the Quota Center console and apply for the privilege named **Accelerated regional whitelist**. The ID of the privilege is **ga\_whitelist/region\_whitelist**. For more information, see the [Increase quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) section of the Manage GA quotas topic.
        
-   If you use a basic Global Accelerator that uses the **pay-by-data-transfer** bandwidth metering method, you can not add endpoint groups in the UAE (Dubai) region.
    

**Acceleration area**

**Region**

North China

China (Qingdao), China (Beijing), China (Zhangjiakou), and China (Ulanqab)

South China

China (Shenzhen), China (Heyuan), and China (Guangzhou)

East China

China (Hangzhou), China (Shanghai), and China (Nanjing)

Southwest China

China (Chengdu)

North America

US (Silicon Valley), US (Virginia), Canada (Toronto), and Canada (Vancouver)

South America

Brazil (Sao Paulo)

Asia Pacific

China (Hong Kong), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Japan (Tokyo), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), and Vietnam (Ho Chi Minh)

Europe

Germany (Frankfurt) and UK (London)

Middle East

UAE (Dubai)

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3280375671/CAEQTxiBgMDv.KSW2BkiIGU4MDU4NGYyMWE4NzQwMDc5MTBmZWE3ZGI2ODJlM2Rj4210981_20240213143608.814.svg)

## References

-   [Create and manage basic GA instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances#task-2253326)
    
-   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#task-2253905)
    
-   [Add and manage endpoint groups and endpoints for a basic GA instance](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915)
    
-   [Use basic GA instances to accelerate content delivery](/help/en/ga/getting-started/use-basic-ga-instances-to-accelerate-content-delivery#task-2176548)
