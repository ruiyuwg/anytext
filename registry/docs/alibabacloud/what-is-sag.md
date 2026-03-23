Smart Access Gateway (SAG) is a software-defined wide area network (SD-WAN) solution provided by Alibaba Cloud. You can connect on-premises networks to Alibaba Cloud by using SAG in a secure, intelligent, and reliable way.

## Service types

SAG provides the following types:

-   **SAG customer-premises equipment (CPE) devices: ideal for connecting sites to Alibaba Cloud.**
    
    After you deploy SAG CPE devices in your data centers and branch offices, you can connect your on-premises networks to Alibaba Cloud. SAG CPE devices provide the following models: SAG-100WM and SAG-1000.
    
    -   **SAG-100WM** devices can be placed on desks and in extra-low voltage boxes. You can connect broadband and 4G networks to the WAN ports, and wired and Wi-Fi networks to the LAN ports. The maximum bandwidth of encrypted private networks supported by SAG-100WM devices is 50 Mbit/s (the packet length in the performance test is 512 bytes). SAG-100WM devices are ideal for quickly connecting small branch offices and stores to Alibaba Cloud.
        
    -   **SAG-1000** devices can be placed on server racks. You can connect a hybrid network that consists of Express Connect circuits, broadband networks, and 4G networks to the WAN ports, and wired networks to the LAN ports. The maximum bandwidth of encrypted private networks supported by SAG-1000 devices is 500 Mbit/s (the packet length in the performance test is 512 bytes). SAG-1000 devices are ideal for connecting data centers and large branch offices to Alibaba Cloud.
        
    
-   **SAG vCPE: ideal for connecting sites to Alibaba Cloud.**
    
    SAG vCPE provides an image that can be deployed on data center servers, Edge Node Service (ENS) instances, Alibaba Cloud instances, Amazon Web Services (AWS) instances, and Microsoft Azure instances. After you deploy the SAG vCPE image on an instance, the instance serves as a vCPE device. The bandwidth of private networks for encrypted connections can reach 300 Mbit/s and higher (the packet length in the performance test is 1,024 bytes). This allows you to connect private networks to Alibaba Cloud in a more flexible way.
    
-   **SAG app: ideal for connecting terminals to Alibaba Cloud.**
    
    You can install the SAG app on terminals such as computers and mobile phones to connect them to Alibaba Cloud. The SAG app supports the following operating systems: Windows (Windows 7 SP1 and later), macOS (10.11.1 and later), Android (5.0 to 10.0), and iOS (12.0 and later).
    

## Components

The following figure shows a use scenario of SAG. In this scenario, data centers and branch offices are connected to Alibaba Cloud through SAG devices. Terminals such as computers and mobile phones are connected to Alibaba Cloud through the SAG app. Other networks are connected to Alibaba Cloud through SAG vCPE. After your networks are connected to Alibaba Cloud, you can use Cloud Enterprise Network (CEN) to connect the following networks in different regions: virtual private clouds (VPCs), data centers, branch offices, mobile clients, and other networks on Alibaba Cloud. This builds an enterprise network that is centered on Alibaba Cloud.

![产品简介-架构1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5706144661/p143348.png)

**Component**

**Description**

**References**

SAG CPE

CPE devices

[What is SAG?](/help/en/sag/product-overview/what-is-sag#concept-2403019)

SAG vCPE

vCPE devices

[What is SAG vCPE?](/help/en/sag/user-guide/introduction-1#concept-1936224)

The SAG app

The SAG app

[What is the SAG app](/help/en/sag/user-guide/introduction#concept-mjf-fz2-xgb)

Cloud Connect Network (CCN)

A matrix of Alibaba Cloud access points

[What is CCN?](/help/en/sag/user-guide/introduction-to-ccn#concept-gwh-wlb-mfb)

CEN

Inter-region networks on Alibaba Cloud

[What is CEN?](/help/en/cen/user-guide/what-is-cen-1#concept-jjt-3lz-sdb)

VPCs

Private networks on Alibaba Cloud

[What is VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

## Architecture

SAG uses an SD-WAN architecture based on cloud-native technologies of Alibaba Cloud. Compared with the traditional SD-WAN architecture, SAG offers the following benefits:

-   Zero touch provisioning (ZTP) installation and deployment to facilitate management and O&M
    
    Alibaba Cloud provides you with a software-defined method to manage SAG CPE devices by using the SAG console, API, and CloudMonitor. Managing SAG CPE instances is similar to managing VPCs and Elastic Compute Service (ECS) instances.
    
-   Hybrid networks
    
    SAG provides a data plane based on private WANs on Alibaba Cloud. You can connect private networks to Alibaba Cloud through a hybrid network that consists of Express Connect circuits, broadband networks, and 4G networks. This increases the utilization of Express Connect circuits and improves network performance.
    
-   Integration of networks and cloud services
    
    An architecture that integrates the cloud, networks, and edge:
    
    -   Automatic protocol negotiation between on-premises VPN gateways and cloud VPN gateways. No additional configuration is required.
        
    -   Quick access from on-premises networks to Alibaba Cloud services.
        
    -   End-to-end security policies for both on-premises and cloud networks.
        
    

![云网端](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5706144661/p143345.png)
