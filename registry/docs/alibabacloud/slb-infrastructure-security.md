Network isolation is an important security measure in the system of Server Load Balancer (SLB). This measure isolates traffic among networks to improve system security and reliability. The infrastructure of SLB includes network isolation and network traffic control.

## **Network isolation**

Virtual private clouds (VPCs) are virtual networks that are isolated on Alibaba Cloud. A subnet specifies a range of IP addresses in a VPC. When you create an SLB instance, you can specify one or more subnets. You can deploy Elastic Compute Service (ECS) instances in the subnets of your VPC and add the ECS instances to backend server groups. For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc)

-   Application Load Balancer (ALB) and Network Load Balancer (NLB) instances support the following network types:
    
    -   Internal-facing: A private IP address is assigned to each zone of the ALB or NLB instance. The instance is accessible only over internal networks.
        
    -   Internet-facing: A public IP address and a private IP address are assigned to each zone of the instance. Internet-facing ALB or NLB instances can access the Internet by using Elastic IP addresses (EIPs). **Internet-facing** instances are charged an EIP fee and a bandwidth or data transfer fee.
        
-   Classic Load Balancer (CLB) instances support the following network types:
    
    -   Internal-facing: An internal-facing CLB instance is assigned only a private IP address, and is accessible only over internal networks.
        
    -   Internet-facing: An Internet-facing CLB instance is assigned a public IP address and is accessible over the Internet.
        

SLB instances communicate with backend ECS instances over internal networks. If backend ECS instances only receive requests from the SLB instance, no public IP address is required. The ECS instances do not need to be associated with EIPs.

## **Network traffic control**

ALB, CLB, and NLB use different measures to protect network traffic, as described in the following tables.

### **ALB**

**Measure**

**Description**

**References**

SSL-encrypted transmission

Data packets can be encrypted based on SSL to prevent interception and tampering.

-   [Configure HTTPS to encrypt communication](/help/en/slb/application-load-balancer/use-cases/end-to-end-data-transfer-over-https)
    
-   [Configure mutual authentication on an HTTPS listener](/help/en/slb/application-load-balancer/use-cases/configure-mutual-authentication-on-an-https-listener)
    
-   [Configure an ALB instance to serve multiple domain names over HTTPS](/help/en/slb/application-load-balancer/use-cases/configure-an-alb-instance-to-serve-multiple-domain-names-over-https)
    

Web Application Firewall (WAF)

WAF can be used to monitor and filter network traffic in case of attacks.

[Activate and manage WAF-enabled ALB instances](/help/en/slb/application-load-balancer/use-cases/enable-waf-protection-for-alb)

Security groups

Security groups control the traffic that is allowed to reach instances within them.

-   [Add an ALB instance to security groups](/help/en/slb/application-load-balancer/user-guide/add-an-alb-instance-to-a-security-group)
    
-   [Use security groups to control access based on ports](/help/en/slb/application-load-balancer/use-cases/configure-security-groups-for-alb-instances)
    
-   [Use security groups as blacklists or whitelists](/help/en/slb/application-load-balancer/use-cases/use-alb-security-groups-to-implement-blacklist-and-whitelist-access-policies)
    

Access control lists (ACLs)

Whitelists and blacklists can be used to block unauthorized access and malicious requests.

[Network ACLs](/help/en/slb/application-load-balancer/user-guide/network-acls)

Anti-DDoS services

Anti-DDoS services can be used to mitigate large volumes of attacks in real time. Anti-DDoS Origin, Anti-DDoS Pro, and Anti-DDoS Premium are supported.

-   [What is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin)
    
-   [What are Anti-DDoS Pro and Anti-DDoS Premium?](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium)
    
-   [Associate an EIP protected by Anti-DDoS Pro/Premium with an ALB instance](/help/en/slb/application-load-balancer/use-cases/associate-an-eip-protected-by-anti-ddos-pro-or-premium-with-an-alb-instance)
    

TLS security policies

TLS security policies can be used to improve service security.

You can select a TLS security policy when you create an HTTPS listener. Custom and default TLS security policies are supported.

[TLS security policies](/help/en/slb/application-load-balancer/user-guide/tls-security-policies)

### **NLB**

**Measure**

**Description**

**References**

SSL-encrypted transmission

Data packets can be encrypted based on SSL to prevent interception and tampering.

-   [Use NLB to enable SSL offloading over TCP (one-way authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp)
    
-   [Use NLB to enable SSL offloading over TCP (mutual authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp-1)
    

Anti-DDoS services

Anti-DDoS services can be used to mitigate large volumes of attacks in real time. Anti-DDoS Origin, Anti-DDoS Pro, and Anti-DDoS Premium are supported.

-   [Enable an NLB instance to use an EIP protected by Anti-DDoS Pro/Premium to access the Internet](/help/en/slb/network-load-balancer/use-cases/enable-an-nlb-instance-to-use-an-eip-protected-by-anti-ddos-pro-or-premium-to-access-the-internet)
    
-   [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance)
    

Security groups

Security groups can be used to regulate access control.

-   [Add an NLB instance to a security group](/help/en/slb/network-load-balancer/user-guide/add-an-nlb-instance-to-a-security-group)
    
-   [Configure security groups to implement access control for NLB](/help/en/slb/network-load-balancer/use-cases/configure-security-groups-for-nlb-instances)
    

TLS security policies

TLS security policies can be used to improve service security.

You can select a TLS security policy when you create a listener that uses SSL over TCP. Custom and default TLS security policies are supported.

[TLS security policies](/help/en/slb/network-load-balancer/user-guide/tls-security-policy)

### **CLB**

**Measure**

**Description**

**References**

SSL-encrypted transmission

Data packets can be encrypted based on SSL to prevent interception and tampering.

-   [Configure one-way authentication for HTTPS requests](/help/en/slb/classic-load-balancer/use-cases/configure-one-way-authentication-for-https-requests)
    
-   [Configure an HTTPS listener for mutual authentication](/help/en/slb/classic-load-balancer/use-cases/configure-mutual-authentication-on-an-https-listener-1)
    
-   [Configure a CLB instance to serve multiple domain names over HTTPS](/help/en/slb/classic-load-balancer/use-cases/configure-a-clb-instance-to-serve-multiple-domain-names-over-https)
    

WAF

WAF can be used to monitor and filter network traffic in case of attacks.

[How do I enable WAF protection for CLB?](/help/en/slb/classic-load-balancer/user-guide/faq-about-clb#section-6wg-tjm-uys)

ACLs

Whitelists and blacklists can be used to block unauthorized access and malicious requests.

[Enable access control](/help/en/slb/classic-load-balancer/user-guide/enable-access-control)

Anti-DDoS services

Anti-DDoS services can be used to mitigate large volumes of attacks in real time. Anti-DDoS Origin is supported.

[Anti-DDoS Origin Basic](/help/en/slb/classic-load-balancer/user-guide/anti-ddos-origin-basic)

TLS security policies

TLS security policies can be used to improve service security.

You can select a TLS security policy when you create an HTTPS listener. Custom and default TLS security policies are supported.

[TLS security policies](/help/en/slb/classic-load-balancer/user-guide/tls-security-policies)
