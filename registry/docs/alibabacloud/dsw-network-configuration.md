By default, a DSW instance accesses the Internet through a shared gateway. If you have other network requirements, such as connecting to a DSW instance remotely, improving its internet access speed, or accessing services within the DSW instance from the internet, refer to the following solutions.

## Connect to a DSW instance remotely

To connect directly to a DSW instance with VS Code or a terminal for development, use one of the following two options.

**Feature**

### **Option A: Direct SSH (Recommended)**

### **Option B: ProxyClient**

Features

Requires you to configure network components, such as a Virtual Private Cloud (VPC) and a NAT Gateway. This option provides a faster and more stable connection.

No additional network components are required. However, the connection speed and stability are not guaranteed.

Supported instances

-   Pay-as-you-go DSW instances created in public resource groups. Resource specifications cannot start with `ecs.ebm`.
    
-   DSW instances created using Lingjun resources.
    

All instance types.

Authentication method

Uses an SSH public or private key.

1.  Authentication with ProxyClient using your Alibaba Cloud AccessKey pair.
    
2.  Authentication again with an SSH key pair.
    

Access path

-   Access from the internet (requires a NAT Gateway and an Elastic IP Address (EIP)).
    
-   Access from within your VPC over the internal network.
    

Access from the Internet.

Configuration method

[Remote connection: Direct SSH method](/help/en/pai/user-guide/dsw-direct-connection)

[Remote connection: ProxyClient method](/help/en/pai/user-guide/connect-to-a-dsw-instance-over-ssh)

How it works

PAI automatically creates a DNAT rule on the NAT Gateway to forward SSH requests from the internet to your DSW instance.

All traffic is routed through PAI proxy servers.

Billing notice

The associated NAT Gateway and EIP incur charges as long as they exist, even when the DSW instance is stopped. To avoid ongoing charges, delete these resources when they are no longer needed.

This configuration incurs no additional charges.

## Enable internet access for a DSW instance

### Increase internet download speeds

-   **Use case**: The bandwidth of the default shared gateway is insufficient for your requirements, such as downloading large datasets or models at high speed.
    
-   **Configuration method**: [Improve Internet access speed using a dedicated gateway](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway).
    
-   **How it works**: Outbound traffic from the DSW instance accesses the internet through a NAT Gateway and EIP to achieve higher bandwidth.
    
-   **Billing**: The NAT Gateway and EIP incur charges as long as they exist, even when the DSW instance is stopped. To avoid ongoing charges, delete these resources when they are no longer needed.
    

### Accelerate access to resources outside the Chinese mainland

-   **Use case**: You need to pull resources from outside the Chinese mainland in your DSW instance, such as models from Hugging Face or images from Docker Hub.
    
-   **Configuration method**: [Pull models or container images from outside China](/help/en/pai/user-guide/cross-domain-pull-overseas-model-or-container-image-in-dsw).
    
-   **How it works**: When the DSW instance accesses domains outside the Chinese mainland, requests are routed to the acceleration network of Global Accelerator (GA), bypassing congested international links.
    
-   **Billing**: Global Accelerator (GA) is a separately billed service.
    

### Disable internet access for a DSW instance

-   **Use case**: For security and compliance, you need to prevent a DSW instance from accessing the internet, allowing it to access only resources within your VPC.
    
-   **Configuration method**: When you [create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances) or [change the configuration of an existing DSW instance](/help/en/pai/user-guide/manage-dsw-instances#1f293208a1ky4), configure a Virtual Private Cloud (VPC), a vSwitch, and a Security Group. Do not create a NAT Gateway or configure Source Network Address Translation (SNAT) entries.
    
-   **How it works**: The DSW instance cannot access the internet because it lacks a required public egress path. This is because no NAT Gateway or SNAT entries are created.
    
-   **Billing**: This configuration incurs no additional charges.
    

## Access services in a DSW instance from the internet

-   **Use case**: You have deployed a web service in a DSW instance, such as a model API or a WebUI, and you want to access it directly from a public address or share it with others for testing.
    
-   **Configuration method**: [Access services in an instance from the Internet](/help/en/pai/user-guide/custom-services-access-configurations).
    
-   **How it works**: Public requests are sent to an Elastic IP Address (EIP) associated with a NAT Gateway. A DNAT entry on the NAT Gateway then forwards the requests to the private IP address and port of the DSW instance. The Security Group must be configured to allow this traffic.
    
-   **Billing**: The NAT Gateway and EIP incur charges as long as they exist, even when the DSW instance is stopped. To avoid ongoing charges, delete the NAT Gateway and EIP after you have finished testing.
    

## How DSW networking works

The DSW network configuration architecture is shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9585585671/CAEQUBiBgMCAkoWw2BkiIGU1YWEyOGFkOGU3ZjQzMWViN2M0OGNkMzQ2Yzk5Yzg04009755_20230919143424.049.svg)

By default, a DSW instance is created within a DSW-owned public VPC. The instance accesses the internet through a Shared Internet Gateway at no cost. A DSW instance is not assigned a public IP address by default, so it cannot be accessed directly from the internet.

The components involved in the DSW network structure and their functions are as follows:

-   [Virtual private cloud (VPC)](/help/en/vpc/vpc-and-vswitch) **:** Provides a private network on the cloud to isolate your cloud resources.
    
-   [vSwitch](/help/en/vpc/vpc-and-vswitch): A subnet within a VPC. Your DSW instance and other cloud resources, such as databases, are connected to a vSwitch.
    
-   [Security group](/help/en/ecs/user-guide/overview-44): A virtual firewall for your DSW instance. It controls all inbound and outbound network traffic. Incorrect configuration is the most common cause of network connectivity issues.
    
-   **Shared Internet Gateway (NAT)**: The default free egress used by DSW. You share bandwidth with other users, so speed and stability are not guaranteed.
    
-   [Dedicated Internet Gateway (NAT)](/help/en/nat-gateway/product-overview/what-is-nat-gateway): An exclusive public egress. It provides high-speed, stable internet access. **This is billed separately**.
    
-   [Elastic IP Address (EIP)](/help/en/eip/product-overview/what-is-eip): A static public IP address. It is typically used with a NAT Gateway. **This is billed separately.**
    
-   [SNAT](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet): Source Network Address Translation. It is used for outbound traffic and allows DSW instances in a private network to access the Internet.
