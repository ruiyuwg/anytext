A VPN Gateway establishes secure connections using encrypted tunnels between your on-premises data center, office network, or individual clients and your virtual private cloud (VPC).

## **Use cases**

### **Use case 1:** Connect an on-premises data center to a VPC with IPsec-VPN

IPsec-VPN uses the IPsec protocol to establish a **Site-to-Site** encrypted connection. This is ideal for connecting an on-premises data center to a VPC for hybrid cloud networking and as a backup for Express Connect.

IPsec-VPN comes in two deployment options:

-   **Attach to a VPN gateway**: Connects your on-premises network to a **single VPC**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7365392671/CAEQThiBgMCR4trB0BkiIGY2YTc4ZTQzZTNhYzQ0NzI5NzhjYTg3ZjlkOWEzMTlm4146783_20240109141140.646.svg)
-   **Attach to a transit router (TR)**: Connects your on-premises network to **multiple VPCs**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7365392671/CAEQThiBgMCjlt_B0BkiIGQxYjE2OGE4N2QyNTQ5YzI4MTI4YjdjNTcwOWE2YWZk4146783_20240109141140.646.svg)

### **Use case 2: Allow employees to remotely access a VPC with SSL-VPN**

SSL-VPN uses the SSL protocol to create a **Client-to-Site** encrypted connection. It connects clients, such as laptops and mobile devices, to a VPC and is ideal for remote work. After an administrator grants access, employees can install client software on their computers or mobile devices. Once connected to the VPN, they can securely access applications and services deployed within the VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7365392671/CAEQThiBgID7nODB0BkiIDVkNDMzMTcwZmRmZDRhYWZhNTRmZTE0NGIzNzIzODJj4146783_20240109141140.646.svg)

## Benefits

-   Secure: Encrypts data in transit using IPsec or SSL protocols to ensure data security and integrity.
    
-   Stable: Built on an active-active architecture that provides failover in seconds, ensuring session continuity and uninterrupted business operations.
    
-   Simple: Ready to use on activation. Configurations take effect in real time, allowing for rapid deployment.
    
-   Cost-effective: Establishes encrypted tunnels over the Internet, offering a cost-effective alternative to Express Connect.
    

## Choose a VPN type and get started

**Comparison**

**IPsec-VPN**

**SSL-VPN**

**Connection targets**

Fixed sites, such as corporate data centers and branch offices.

Individual clients, such as personal computers or mobile devices used for remote work.

**Typical use cases**

**Site-to-Site**: Connects an on-premises network to a VPC to build a hybrid cloud environment.

**Client-to-Site**: Lets authorized employees securely access cloud-based applications, office systems, or development environments from any location.

**Client requirements**

Requires professional network devices that support IPsec, such as routers or firewalls.

Users only need to install lightweight client software on their devices.

**Protocol**

Standard IPsec protocol (Network Layer).

SSL/TLS protocol (Application Layer).

**Configuration complexity**

High. Requires coordinated configuration of parameters on both the cloud and on-premises devices.

Very low. After the administrator completes the cloud-side configuration, end users only need to install the client and log in with their credentials.

### **Get started with IPsec-VPN**

An IPsec-VPN connection must be attached to a VPN gateway or a TR:

**Component**

**Description**

**VPN gateway**

When connecting an on-premises network to a single VPC, the VPN gateway serves as the cloud-side gateway. It has a public IP address to communicate with the on-premises gateway device.

**TR**

When connecting an on-premises network to multiple VPCs, the TR serves as the cloud-side gateway. This requires a VPN connection created on the TR and an associated IPsec-VPN connection.

After creating the VPN gateway or TR, you also need to configure a customer gateway and an IPsec-VPN connection in the cloud:

**Component**

**Description**

**Customer gateway**

A logical object on Alibaba Cloud that stores the public IP address of your on-premises gateway device. This object is required to create an IPsec-VPN connection.

**IPsec-VPN connection**

Defines the encrypted tunnel from the **VPN gateway/TR** to the **customer gateway**. In this connection, you configure parameters for both ends, such as the encryption algorithm, authentication algorithm, and Pre-Shared Key (PSK).

For more information, see the following documents:

-   [What is IPsec-VPN?](/help/en/vpn/sub-product-ipsec-vpn/product-overview/what-is-ipsec-vpn)
    
-   [Getting Started with VPN Gateway connections](/help/en/vpn/sub-product-ipsec-vpn/product-overview/overview-of-ipsec-vpn-connections/) and [Getting Started with Transit Router connections](/help/en/vpn/sub-product-ipsec-vpn/product-overview/ipsec-vpn-configuration-overview)
    

### **Get started with SSL-VPN**

An SSL-VPN connection involves the following key components:

**Component**

**Description**

**VPN gateway**

Serves as the cloud-side gateway for the VPN connection. It has a public IP address to communicate with clients.

**SSL server**

A service instance created on the VPN gateway after you enable SSL-VPN. It defines the protocol, port, encryption algorithm, and the client CIDR block for connecting clients.

**SSL client**

Software installed on an employee's personal computer or mobile device. This software establishes an encrypted connection with the **SSL server**, allowing the device to access cloud resources.

For more information, see the following documents:

-   [What is SSL-VPN?](/help/en/vpn/sub-product-ssl-vpn/product-overview/what-is-ssl-vpn)
    
-   [Connect a client to a VPC by using SSL-VPN](/help/en/vpn/sub-product-ssl-vpn/getting-started/connect-a-client-to-a-vpc)
