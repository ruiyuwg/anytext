Alibaba Cloud DNS provides a complete DNS resolution service for corporate intranet scenarios, primarily within Alibaba Cloud virtual private clouds (VPCs).

## **Overview**

The **Private Domain Name Resolution (Private Hosted Zone)** service is a comprehensive upgrade of the original **Alibaba Cloud DNS PrivateZone** product. This service provides complete DNS resolution for corporate intranet scenarios, primarily within Alibaba Cloud VPCs. It includes functional modules such as **Private Zone**, caching, forwarding, and recursion. This service lets you resolve domain names, accelerate private domain name resolution, define private authoritative domain names, forward resolution traffic between the cloud and on-premises data centers (IDCs), and analyze private resolution traffic logs for various clients, such as ECS instances and containers, in a VPC environment.

## **Product capabilities**

Alibaba Cloud DNS provides a complete private DNS resolution service for VPC environments by deploying its proprietary DNS software in Alibaba Cloud data centers worldwide. This service includes the following functional modules:

### **Private Zone**

This module is based on the original Alibaba Cloud DNS PrivateZone service. It is a private authoritative DNS module built into a corporate intranet environment, such as an Alibaba Cloud VPC. This service lets you create private authoritative domain names that are accessible only within your corporate VPCs and resolve them to IP addresses. You can use private authoritative domain name records to manage Alibaba Cloud resources such as ECS hostnames, SLB instances, and OSS buckets within a VPC. These private authoritative domain names are not accessible from outside the VPC. You can also connect your VPCs to on-premises data centers using methods such as leased lines or VPNs. This connection allows resources in your on-premises data centers and Alibaba Cloud VPCs to access each other using private authoritative domain names.

Based on the service deployment location, the **Private Zone** **service is divided into acceleration regions and standard regions**. Private authoritative domain names created with the original Alibaba Cloud DNS PrivateZone service are stored in standard regions. The authoritative service in acceleration regions is closer to the source of resolution requests. DNS records for authoritative domain names in acceleration regions are stored in the high-speed memory of DNS servers. This design provides the lowest latency for resolving private authoritative domain names in acceleration regions. This makes acceleration regions ideal for domain names that require low resolution latency and high stability. Acceleration regions support [split-zone DNS](/help/en/dns/pvtz-intelligent-analysis-of-sub-line) and [weighted resolution](/help/en/dns/pvtz-intelligent-analysis-of-sub-weight). Standard regions do not support these two features.

### **Cache**

The cache module of the private DNS resolution service is primarily used to accelerate domain name resolution within a corporate VPC. Typically, the resolution results for all domain name resolution requests within a VPC are stored in the high-speed cache memory of the DNS server. This allows for the quick retrieval of results for subsequent requests for the same domain name. The Time to Live (TTL) value determines how long a resolution result is stored in the cache. The cached result is automatically removed when the TTL expires. **You can enable the cache retention feature to force the cache service to retain the resolution results of specific key domain names in the DNS server's memory. If a resolution request arrives after the TTL expires, the cached result is returned first, and then the resolution result is updated in the background.** The cache retention feature improves the resolution speed of your key domain names in a VPC environment. It can also prevent service interruptions caused by resolution failures on the Internet, such as an outage of the domain's public authoritative DNS service. For more information, see [Cache](/help/en/dns/pvtz-cache-management).

### **Forwarding**

The forwarding module of the private DNS resolution service corresponds to the Resolver service of the original Alibaba Cloud DNS PrivateZone product. You can create domain forwarding rules and DNS outbound endpoints to forward DNS query traffic for specific domain names from your corporate VPC to an external DNS system. This feature is useful for scenarios that involve service calls in hybrid clouds and between cloud and on-premises environments. For more information, see [Forwarding management](/help/en/dns/pvtz-forwarding-management).

### **Recursion**

The recursion module of the private DNS resolution service provides recursive resolution for domain names on the Internet for various clients, such as ECS instances, within a corporate VPC environment. This service is provided free of charge by default for Alibaba Cloud VPC internal resolution scenarios but does not come with a Service-Level Agreement (SLA). You can also change the default DNS server IP addresses (100.100.2.136/100.100.2.138) on your ECS instance to use DNS servers from other providers. If you do this, the ECS instance cannot use the private resolution service provided by Alibaba Cloud DNS.

### **Inbound endpoints**

An inbound endpoint is the nameserver address of the private DNS resolution service. It can be configured as the DNS service address for clients within the cloud, such as ECS instances or containers. It can also be configured as the destination IP address for clients outside the cloud, such as on-premises hosts or external DNS servers, to access the private DNS resolution service. Inbound endpoints are divided into two types: system-assigned and custom. The system-assigned default private DNS resolution service addresses are `100.100.2.136` and `100.100.2.138`. These addresses provide DNS resolution services for all VPCs in all regions using anycast. These addresses are free to use and do not incur additional charges.

If you want to use your own planned private IP addresses within a VPC to provide private DNS resolution services, you can create an inbound endpoint to assign custom private DNS resolution service addresses. These addresses are created on demand and are billed on a pay-as-you-go basis. For more information, see [Inbound endpoints](/help/en/dns/pvtz-inbound-endpoint).

### **Traffic analysis**

The private DNS resolution service provides an end-to-end, full-path, and visual network traffic analysis service for domain name resolution. It completely reconstructs the entire process from receiving a DNS query to the final DNS acknowledgement. It provides data analytics from various dimensions, such as resolution latency, number of resolution requests, cache hit rate, hot spot domain names, and hot spot request sources. This data provides a reference for you to optimize your resolution settings.

**Important**

The rules of the private DNS resolution service apply **only to resolution requests from clients within a corporate VPC that use 100.100.2.136/100.100.2.138 or a custom IP address from an inbound endpoint as their DNS server**. If you change the DNS settings of an ECS client to another IP address, the private resolution service rules from Alibaba Cloud DNS will not apply to that ECS instance.

## Resolution rule priority

In a corporate VPC scenario, when a DNS server receives a DNS query, it resolves the domain name according to the following priority rules:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5999875671/CAEQUBiBgMD145GF2RkiIGFkMDEzOGRiYjgwYjRkOThhZDUxMDk5OTlkM2MyZjBj3963382_20230830144006.372.svg)

## **Benefits**

### **Rich product features**

**Split-zone DNS:** Private domain name resolution can return specific IP addresses for DNS queries that originate from a specific IP address range. This feature supports Alibaba Cloud DNS lines and custom DNS lines.

**Weighted resolution:** If multiple IP addresses or domain names are configured for the same hostname record and request source, you can set a weight for each record value. When responding to DNS queries, all addresses are returned based on the preset weight ratio. This distributes resolution traffic across different servers to achieve load balancing.

**Cache retention:** You can enable cache retention for hot spot or key domain names. The DNS records for these domain names are always kept in the cache. This improves the resolution speed of domain names in the private DNS and prevents service interruptions caused by failures of the domain's authoritative DNS provider.

**Cache purge:** During emergency changes to internal services, you may need to promptly refresh the latest DNS records for private domain names. If a domain name has cache retention enabled, you can use the cache purge feature to clear the cached data for that domain name from the cache servers that are within the scope of the cache rule.

**Forwarding management:** You can forward DNS query traffic for specific domain names in a corporate VPC to an external DNS system. This feature is useful for scenarios that involve service calls in hybrid clouds and between cloud and on-premises environments.

**Traffic analysis:** This feature provides an end-to-end, full-path, and visual network traffic analysis service. It reconstructs the entire process from receiving a DNS query to the final DNS acknowledgement and provides graphical reports for easy viewing. You can promptly adjust your service architecture based on changes in resolution traffic data.

### **Security isolation**

Private DNS resolution provides complete data isolation for different VPCs and includes the following security attributes:

-   The domain name (zone) cannot be queried from the Internet. This prevents malicious actors from probing your internal business information and system architecture.
    
-   The domain name (zone) cannot be queried from outside its effective scope. This defines the access border of your internal systems and limits core data access to the smallest possible scope.
    
-   The domain name (zone) data is securely processed in combination with network tunneling features. This prevents your domain name (zone) information from being maliciously compromised.
    

### **Flexible control**

You can add or customize private domain name (zone) files without limitations.

-   You can add any domain name (zone) in the private DNS, such as `taobao.com`. After you set the effective scope for the domain name, `taobao.com` will overwrite the public DNS resolution results from the Internet.
    
-   You can create custom domain names in a VPC that cannot be registered on the public Internet, such as `example.test` and `example.abcd`.
    
-   You can set different effective scopes for domain names (zones) that have the same name. This allows VPCs in different regions to access different cloud resources using the same domain name, which achieves nearest access. For example, when a query for `test.example.com` is initiated from VPCs in China (Huabei 2) and China (Hangdong 2), DNS returns the cloud resource addresses for China (Huabei 2) and China (Hangdong 2), respectively.
    

## **System architecture**

Private domain name resolution consists of two parts: a control layer and a resolution layer.

-   Control layer: The control layer provides external services through the console and OpenAPI. It primarily implements the create, retrieve, update, and delete (CRUD) and storage functions for DNS record data, configuration data, and log data. The control layer is located in the China (Zhangjiakou) and China (Hangzhou) regions in the Chinese mainland.
    
-   Resolution layer: The resolution layer provides external services through server clusters that are deployed in regions worldwide. The resolution layer receives DNS record data that is distributed from the control layer and is primarily responsible for responding to queries for this data. The resolution layer has coverage in all regions and zones where Alibaba Cloud services are publicly available.
    

## **Scenarios**

### **Hostname management**

You can standardize the naming of ECS hostnames to make the purpose of each machine easier to understand. You can use the hostname record feature of the private resolution service to automatically synchronize and configure ECS hostname resolution records. This lets you access ECS instances by their hostnames.

For example, a company (example.com) has 50 ECS instances in a VPC in Zone E of the China (Huabei 2) region. Among them, 20 ECS instances are used for the official website homepage, 20 are used for the mobile app, and 10 are used for the internal test environment. You can plan the hostnames as follows:

-   Website: web01.huabei2-e.example.com to web20.huabei2-e.example.com
    
-   App: m01.huabei2-e.example.com to m20.huabei2-e.example.com
    
-   Test: test01.huabei2-e.example.com to test10.huabei2-e.example.com
    

After this configuration, **you can define a private domain name using the** **Private Zone** **service and enable the automatic synchronization of ECS hostname records. This lets you access ECS instances by hostname in a specific VPC network**, which improves the convenience of daily host management.

### **Split-zone DNS**

The previous version of the PrivateZone service does not support split-zone DNS, custom lines, or Alibaba Cloud lines. The upgraded Private Domain Name Resolution (PrivateZone) supports [split-zone DNS](/help/en/dns/pvtz-intelligent-analysis-of-sub-line). It determines the visitor's source and intelligently returns different IP addresses for different visitors. This allows visitors to receive a user-specified IP address when they access a website, which improves website access speed. Only private domain names in a **Private Zone** acceleration region support split-zone DNS, including Alibaba Cloud lines and custom DNS lines.

### **Weighted resolution**

If a domain name (zone) has multiple A, AAAA, or CNAME records with the same hostname record and DNS line, you may need to dynamically switch service traffic between different IP addresses during a service migration. You can set the weight value of the DNS records. When responding to DNS queries, all addresses are returned based on the preset weights. This distributes the resolution traffic to different servers, **which achieves load balancing**. **Only** private domain names in a **Private Zone** **acceleration region support the** [weighted resolution](/help/en/dns/pvtz-intelligent-analysis-of-sub-weight) **feature**.

### **Cloud service instantiation**

Services that are deployed on the cloud often need to access each other. **You can use the private resolution service to generate a private authoritative domain name within the VPC for each cloud service and resolve it to a specific internal service IP address. This instantiates the cloud service and greatly reduces the development changes that are required when service IP addresses change.**

For example, in an API Management scenario, assume that a company's (example.com) business system needs to obtain account authentication information using an internal API operation. However, this API system involves private data and cannot be exposed to the Internet, so the API uses a private IP address.

You can assign the domain name account.inner.example.com to this API and resolve it to 10.23.45.67. If the API service address changes to 10.45.67.89, you only need to change the resolution of account.inner.example.com to the new IP address.

### **Domain name resolution acceleration and disaster recovery**

As the Internet develops, accessing domain names across enterprises has become more common. This indirectly creates service dependencies. If the resolution of a dependent domain name on the Internet is unstable, for example, due to high resolution latency because the DNS service used by the domain does not have global nodes, or the DNS service is down, the dependent services are also affected.

**You can use the** [Cache](/help/en/dns/pvtz-cache-management) **feature of the private resolution service to greatly improve the resolution speed of domain names in a VPC environment and ensure that domain name resolution is not affected by the stability of the domain's DNS service provider.** After cache retention is enabled, the resolution cache for the domain name is not automatically cleared. This ensures that domain name resolution in the private VPC achieves a 100% cache hit rate, which greatly improves the resolution speed. After the cache TTL expires, a DNS query triggers the system to update the domain's resolution result. If the public authoritative DNS service for the domain is abnormal at this time, the system still uses the old cached resolution result to respond. This ensures normal resolution responses and provides disaster recovery protection when the domain's DNS service is abnormal.

### **Data exchange for resolution between cloud and on-premises environments**

During the process of gradual cloud adoption for large enterprise groups, the smooth migration of domain name resolution in the corporate intranet, which includes cloud VPCs and on-premises data centers, is often a challenge. Before cloud adoption, an enterprise may have its own on-premises DNS service and may have defined many private domain names for internal service access. After cloud adoption, the migrated services must still be able to resolve and access the original private domain names in the on-premises data center.

**You can use the** [Forwarding management](/help/en/dns/pvtz-forwarding-management) **feature (**Resolver**) of the private resolution service to forward DNS queries for specific domain names within a VPC to a specific DNS service for resolution.** When services in the enterprise's cloud VPC access the original private domain names, the resolution requests for these private domain names are forwarded to the original on-premises DNS for resolution. This ensures that the resolution logic for these private domain names remains unchanged, which guarantees a smooth migration of services to the cloud.

**You can use the** [Inbound endpoints](/help/en/dns/pvtz-inbound-endpoint) **feature of the Private Domain Name Resolution service** **to forward DNS queries from an on-premises data center to the corresponding VPC for resolution through an inbound endpoint. You can also customize the destination IP address of the DNS resolution service in the cloud** to avoid conflicts with the address range in the local on-premises data center. This way, you only need to maintain one DNS resolution system for both cloud and on-premises environments, which reduces the operations and maintenance (O&M) workload.

### **Traffic analysis**

Currently, many Alibaba Cloud products are integrated with the private DNS resolution service. However, this service used to be a black box, and users had limited information about the status of private DNS resolution. Users could not promptly adjust their service architecture based on domain name resolution conditions. The new Private Domain Name Resolution service **provides an end-to-end, full-path, and visual network traffic analysis service for domain name resolution**. It reconstructs the entire process from receiving a DNS query to the final DNS acknowledgement. It provides data analytics from various dimensions, such as resolution latency, number of resolution requests, cache hit rate, hot spot domain names, and hot spot request sources. This data provides a reference for you to optimize your resolution settings.
