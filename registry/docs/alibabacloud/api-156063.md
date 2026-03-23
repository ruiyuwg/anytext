An Elastic IP Address (EIP) is a public IPv4 address you purchase and manage on its own. Associate an EIP with a cloud resource to give it internet access, disassociate it at any time, and move it between resources as your needs change.

You can use EIPs with the following cloud resources in Virtual Private Clouds (VPCs):

-   Elastic Compute Service (ECS) instances
    
-   Internet NAT gateways
    
-   Server Load Balancer (SLB) instances
    
-   Elastic network interfaces (ENIs)
    
-   High-availability virtual IP addresses (HaVips)
    

## Use cases

**Internet access for ECS instances**

Associate an EIP with an ECS instance or ENI to give it internet access.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1560082771/CAEQVBiBgMD30c2M5hkiIGEzN2YyODA4NDhkYTRmMzZhYTM4NjYyYzBlYzk0ZDUz5274221_20250627113930.173.svg)

**Centralized internet gateway**

Associate an EIP with an internet NAT gateway or SLB instance to route all your ingress and egress traffic through a single point.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1560082771/CAEQThiBgIDRuPmgzhkiIDQxZjdmMWU3NWY0ZTQ0ZjdhMzg4NTM0ODQ0MWRkNmI45274221_20250627113930.173.svg)

**High-availability public service**

Associate an EIP with an HaVip to build a public-facing active-standby service.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2560082771/CAEQThiBgMCW_rWhzhkiIDYwODhiMWIwOWQ3MzQ4ZDg5Y2Y5MDNkZTUxOTVmOGY15274221_20250627113930.173.svg)

**Optimized Chinese mainland access**

Use a BGP (Multi-ISP) Pro EIP with dedicated carrier lines to reduce latency for users in the Chinese mainland.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2560082771/CAEQThiBgMDsic2jzhkiIGJiMjI0ODc4NGFkZDQzZWE4ZTU4ZmZjZmY3YjIxMWZk5274221_20250627113930.173.svg)

## Benefits

-   **Flexible management**: Associate and disassociate an EIP at any time to handle failover and traffic changes.
    
-   **On-demand scaling**: Adjust bandwidth instantly to match demand and handle spikes.
    
-   **Cost-effective**: Choose pay-by-bandwidth or pay-by-data-transfer metering. You can also associate a pay-as-you-go EIP with an Internet Shared Bandwidth instance to share bandwidth and cut costs.
    
-   **Secure by default**: Every EIP includes basic DDoS protection. Pick an Anti-DDoS (Enhanced) EIP if you need stronger security.
    

## EIP vs. static public IP address

VPC resources use public IPv4 addresses for internet access. There are two types: static public IP addresses and EIPs.

**Static public IP address**

**EIP**

**Assignment**

Assigned when the resource is created

Purchased and managed on its own

**Lifecycle**

Tied to the resource — released when the resource is deleted.

Independent — you can create, hold, and reassign it freely.

**Flexibility**

Can't be moved between resources

Can be associated and disassociated at any time

> Internet-facing ALB instances, NLB instances, and internet NAT gateways use associated EIPs for internet access.

> You can convert the static public IP address of an internet-facing ECS or CLB instance into an EIP.

## Quick start

> Not sure which billing method to pick? Start with **pay-by-data-transfer** for the most flexibility — you only pay for what you use.

1.  Go to the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/ap-southeast-1/eips) and click **Create EIP**.
    
2.  Find your new EIP on the **Elastic IP Addresses** page and click **Associate with Resource** in the **Actions** column.
