An Express Connect router (ECR) is a service component that forwards network traffic in a global hybrid cloud in which networks are connected over Express Connect circuits. An ECR provides features such as dynamic routing-based networking and centralized management for route advertisements. For example, you can associate virtual border routers (VBRs) with an ECR and then associate the ECR with transit routers (TRs) or virtual private clouds (VPCs). This way, your data centers and cloud resources can communicate with each other.

## **Feature overview**

-   An ECR lets you create multi-point connections between VBRs and VPCs. If a VBR and a VPC are associated with the same ECR, the VBR can communicate with the VPC. This reduces the complexity related to the original method of configuring point-to-point VBR-to-VPC connections between each VBR and its corresponding VPC.
    
-   An ECR provides dynamic routing-based networking to connect VBRs, VPCs, and TRs. You do not need to add static routes to create VBR-to-VPC connections. This way, networks can be automatically adjusted, and management workload is reduced. ECRs are applicable to large-scale, complex, or frequently changing network environments.
    
-   An ECR lets you fine-tune route advertisements by selectively advertising only the necessary CIDR blocks across the global network. This resolves the issue of having to advertise the entire route table.
    
-   An ECR simplifies cross-region network connections around the world and supports the pay-by-data-transfer billing method.
    
-   An ECR schedules the optimal forwarding route to effectively reduce network latency over Express Connect circuits.
    

The following table describes the methods of establishing connections between data centers and cloud resources along with the differences between these methods.

**Item**

**VBR-to-VPC connection**

**ECR**

**ECR+TR**

Scenarios

Simple, small-scale, and stable network environments

Scenarios in which you want to use Express Connect circuits to access Alibaba Cloud with lower latency, higher bandwidth, and no additional advanced network requirements

Scenarios in which you want to use Express Connect circuits to access Alibaba Cloud with lower latency, higher bandwidth, and additional advanced TR network requirements. Example: the scenario in which VPCs can communicate with each other using a TR

Static routing

Supported

Not supported

Not supported

BGP dynamic routing

Not supported

Supported

Supported

Route prefix

Not supported

Supported

Supported

Nearby forwarding

Not supported

Supported

Supported

Flow log

Not supported

Supported

Supported

Security protection

Not supported

Not supported

Supported

## ECR networking

Both an ECR and a TR are core components used to forward network traffic.

-   An ECR forwards network traffic over Express Connect circuits at the aggregation layer in hybrid cloud networking to allow communication between your data centers and cloud resources.
    
-   A TR forwards network traffic at the core layer of Alibaba Cloud to allow communication between network instances on Alibaba Cloud.
    

### **Scenario 1: Your data center needs to communicate with multiple VPCs in the same area, and the VPCs need to communicate with each other**

As shown in the following figure, VPC1, VPC2, and VPC3 communicate with each other using a TR. If your data center needs to communicate with the three VPCs, associate a VBR with an ECR and then associate the ECR with the TR. This way, your data center can communicate with multiple VPCs in the same area.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6949306671/CAEQUBiBgMD8.8_A2RkiIGM2M2IyYzgzYjQzZDQ3YmJhODJmMTAyZWVkMjQwZGNh4725524_20241127174137.540.svg)

### Scenario 2: Your data center needs to separately communicate with multiple VPCs, but the VPCs do not need to communicate with each other

As shown in the following figure, you can associate a VBR with an ECR and then associate VPC1 and VPC2 with the ECR. The VPCs that are associated with the same ECR cannot communicate with each other. However, your data center can separately communicate with each VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6949306671/CAEQUBiBgIC1opeE2RkiIDdmYzk1Mzk2Y2Y0ZTQzNzVhNTAzYjY2ZjcxYWU1YTNl4102057_20231130152056.839.svg)

**Note**

-   If an ECR is associated with a TR, the ECR can forward network traffic over Express Connect circuits using advanced features of the TR, which include custom route table association and route learning. For more information, see [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work).
    
-   If you want to associate a VBR or a VPC to an ECR across Alibaba Cloud accounts, you must grant permissions to the ECR. For more information, see [Grant permissions to an ECR across Alibaba Cloud accounts](/help/en/express-connect/user-guide/cross-account-ecr-authorization).
    

## **Use cases**

### **Finance scenarios that require low latency**

Alibaba Cloud recognizes the critical need for low-latency networks in securities and quantitative trading. To resolve the latency issue, Alibaba Cloud provides a custom network connectivity solution that enables direct traffic forwarding using ECRs to connect VBRs and VPCs. This solution ensures that the optimal forwarding route is used for data transfer without detours. This significantly reduces latency and provides low-latency capabilities that surpass those of other cloud networking offerings. In addition, this solution achieves the lowest forwarding latency by forwarding on-premises and cloud traffic in the same zone. This further improves network performance.

### **Data computing scenarios that require higher bandwidth**

An ECR delivers Tbit/s-level bandwidth to enable rapid data reception and transfer worldwide. This meets your requirements for ultra-high transmission bandwidth in big data computing and online or offline business operations. Stable and efficient connections are created over Express Connect circuits to support extensive data computing and fast data transmission. This meets your stringent requirements for data computing and transmission.

### **Multi-cloud connectivity scenarios that require high reliability**

An ECR facilitates network transmission across multiple cloud platforms using Express Connect circuits. This ensures the high reliability of your business deployed in multi-cloud environments. An ECR provides route aggregation and advertisement features to address the limits on the number of routes that a cloud platform can receive and simplify route management. This helps you manage and advertise aggregated routes around the world in an efficient manner. This also lets you build and maintain an efficient and reliable multi-cloud network architecture by simplifying O&M.

### **Global enterprise scenarios that require high cost-effectiveness**

The ECR feature provides an efficient and cost-optimized solution to meet your requirements for connecting global data centers. You can use flexible pay-as-you-go services that are provided by the ECR feature to help reduce the costs of global network connectivity.

### **E-commerce and gaming scenarios that require multi-point connections**

The ECR feature provides an efficient hybrid cloud connectivity solution to meet your requirements for deploying goods warehouses in multiple regions and managing the operation of multi-category projects in the cloud. An ECR supports seamless multi-point connections between on-premises and cloud resources worldwide. This reduces the complexity of hybrid cloud networking management. You can use ECRs to build and maintain a highly reliable hybrid cloud network with ease to ensure your business continuity.

### **Cross-border data transfer scenarios that require nearby connections**

An ECR supports nearby forwarding as needed, regardless of whether your data centers are deployed in the Chinese mainland or outside China. You can use an ECR to connect scattered cloud resources to establish a global network. This way, your data centers can communicate with VPCs around the world.

## **Limits**

### **Limits**

-   An ECR supports only BGP dynamic routing and does not support static routing.
    
-   The cloud resources such as VPCs or TRs that are associated with an ECR cannot communicate with each other. An ECR allows connections only between VBRs and cloud resources.
    
-   You can associate only one ECR with a VPC or a VBR.
    
-   The CIDR blocks of the vSwitches in the VPCs that are associated with an ECR cannot overlap with each other.
    
-   The autonomous system number (ASN) of each ECR within your account must be unique. After an ECR is created, you cannot change the ASN of the ECR.
    
-   If the local ASN of a VBR is different from the ASN of an ECR, the VBR cannot be associated with the ECR.
    
-   If route prefixes are specified for a VBR, the VBR cannot be associated with an ECR. To associate the VBR with an ECR, remove the route prefixes from the VBR.
    

### **Quota limits**

For more information about ECR quotas, see [Express Connect quotas](/help/en/express-connect/user-guide/quotas/).

## **Billing**

-   If an ECR is used for same-region connections, outbound data transfer fees are charged by Express Connect. For more information, see [Outbound data transfer fee](/help/en/express-connect/product-overview/outbound-data-transfer-fees).
    
-   If an ECR is used for cross-region connections, data transfer bills are generated by [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt). For more information, see [Cross-region data transfer fee](/help/en/express-connect/product-overview/description-of-cross-border-traffic-billing).
    

## **Express Connect Router (ECR) workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7949306671/CAEQTxiBgIDW6ZKc2BkiIGY1NTljZWMxYTkxNDRhMzA4MDhmYTVmYWQ2YWUyN2Ey4102057_20231228141439.525.svg)

## **References**

-   For more information about how to create an ECR, see [Create and manage an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr).
    
-   If you have deployed your hybrid cloud networking using a TR and you want to use Express Connect circuits to access Alibaba Cloud with lower latency, higher bandwidth, and no additional advanced network requirements, you can switch to an ECR for hybrid cloud networking. For more information, see [Migrate from transit router connections to ECR connections to connect a data center to Alibaba Cloud](/help/en/express-connect/use-cases/migrate-from-tr-to-ecr-to-access-cloud-resources).
    
-   For more information about how to monitor ECR traffic, see [Monitoring and alerting for ECRs](/help/en/express-connect/user-guide/ecr-monitoring-and-warning-of-leased-line-gateway).
