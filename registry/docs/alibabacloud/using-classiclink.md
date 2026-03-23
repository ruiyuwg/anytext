A virtual private cloud (VPC) is a secure and isolated virtual network on the cloud where you can deploy and access cloud resources.

VPCs combine the security and controlability of traditional data centers with the elasticity and scalability of cloud computing. It lets you manage your network environment, including selecting IP address ranges, creating vSwitches, and setting up route tables and gateways.

## **Scenarios**

**Deploy applications in VPCs**

Deploy applications across zones in a VPC to provide highly available services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7438023771/CAEQSBiBgIDFib3.wRkiIDQwYTM2Mzk0ODZhNzRiNjE4Y2FiMGUwZjM1YTY4MjUy5274221_20250627113930.173.svg)

**Provide Internet-facing services**

Use Server Load Balancer (SLB) and NAT Gateway to centrally manage inbound and outbound traffic respectively for your applications.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7438023771/CAEQSBiBgMCP9b_.wRkiIDc2NTcxM2YzZDFiODQ4ZmI4YzBjOGRiYzg1MWRkMDQ35274221_20250627113930.173.svg)

**Connect businesses across regions**

Build cross-region networks using VPCs that are interconnected through Cloud Enterprise Network (CEN).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7438023771/CAEQSBiBgICr_MP.wRkiIGQ1MWU5MzI3MjI2ZjQzNzJiMTBhNmJjZDgzM2E0NTE05274221_20250627113930.173.svg)

**Create a hybrid cloud**

Connect VPC and on-premises network environments through Express Connect circuits.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7438023771/CAEQTBiBgIDVydzqyhkiIDY5NTExYmFhZTQ1MzRiZGFiYzRhOWYzODhhZmE1OGE55274221_20250627113930.173.svg)

## Benefits

-   Security isolation: Achieve secure isolation between VPCs using the tunnel technology.
    
-   Stable and reliable: Support multiple path detection and switching, with fast network failure recovery to ensure business stability.
    
-   Ease of use: Configure networks as needed with customizable IP address ranges, route tables, and security policies.
    
-   Seamless connectivity: Manage hybrid clouds with ease, enabling flexible networking across scenarios.
    

## Components

A VPC typically includes a private CIDR block, at lease one vSwitch, and a route table.

-   Private CIDR block: A range of IP addresses, such as `192.168.0.0/16`, `192.168.1.0/24`, allocated to VPCs and vSwitches. Proper planning is required to avoid conflicts and ensure scalability.
    
-   vSwitch: Divides a VPC into one or more subnets where you can deploy cloud resources and allocate IP addresses for them. A vSwitch must reside in a single zone.
    
-   Route table: Controls traffic routing from VPC to destinations. A system route table is created by default, and system routes are automatically added.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7438023771/CAEQSBiBgMDtg.P.wRkiIDgzNGQzNjU4MTc4MjRjM2I4Mzc0YmNjNzZiNWU0ZDA55274221_20250627113930.173.svg)

## Get started with VPC

-   Beginner guide: Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/vpcs), click **Create VPC** to [create a VPC and vSwitch](/help/en/vpc/vpc-and-vswitch#69a0deefa0eaw) and get ready for cloud service deployment.
    
-   Plan your network: Proper network planning helps avoid CIDR block conflicts and ensures network scalability. Improper planning can lead to high rebuilding costs later. Therefore, we recommend [planning your network](/help/en/vpc/vpc-network-planning) before creating a VPC.
