This topic explains common questions about modifying domain DNS servers.

## **FAQ**

### **How do I modify domain DNS servers?**

Domain DNS server modification is a feature provided by domain registrars. You need to modify DNS servers through your domain registrar. Common domain server modification tutorials:

-   [Modifying DNS servers for Alibaba Cloud domains](/help/en/dns/pubz-modify-dns-server-for-alibaba-cloud-domain-name)
    
-   [Method for modifying DNS servers for Tencent Cloud domains](/help/en/dns/pubz-method-of-modifying-dns-server-for-tengxun-domain-name)
    
-   [Method for modifying DNS for Xinnet domains](/help/en/dns/pubz-new-network-domain-name-modify-dns-method)
    
-   [Method for modifying DNS for Xinnet Internet domains](/help/en/dns/pubz-new-internet-domain-name-modification-dns-method)
    
-   [Method for modifying DNS servers for Huawei Cloud domains](/help/en/dns/pubz-method-of-modifying-dns-servers-for-huawei-cloud-domain-names)
    
-   [Method for modifying DNS servers for Baidu Smart Cloud domains](/help/en/dns/pubz-baidu-intelligent-cloud-domain-name-modification-dns-server-method)
    
-   [Method for modifying DNS for West Digital domains](/help/en/dns/o1bujg)
    

### **How do I set DNS servers for subdomains?**

You need to navigate to the parsing settings page of the primary domain name and add an NS record for the subdomain to point it to the target DNS server address. For more information, see [Add NS records](/help/en/dns/pubz-add-parsing-record#3dde199674y64).

### **Can I use multiple DNS service providers simultaneously?**

A: This depends on the domain registrar. If the domain registrar's DNS server modification interface supports entering DNS server names from multiple DNS providers, then it is possible. Domains registered with Alibaba Cloud support entering DNS server addresses from multiple DNS providers simultaneously.

**Note:** To use both Cloud DNS and non-Alibaba Cloud DNS servers, try to maintain consistency between the parsing data on both sides to avoid issues such as parsing failures or abnormal parsing.

### **What is the difference between modifying DNS servers and domain name resolution?**

Modifying DNS servers changes the DNS server addresses registered with the domain registrar, while domain name resolution involves configuring resolution records on the DNS server to convert domain names into IP/MX/CNAME or other records.

### **Will modifying domain DNS servers affect parsing?**

Whether it affects parsing depends on the data preparation situation at the time of operation. If you modify domain DNS servers before parsing data migration is complete, it will affect parsing. To achieve smooth migration of domain DNS server parsing, please refer to [How to smoothly migrate domain parsing to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).

### **How long does it take for DNS server changes to take effect? Why does it require 48 hours for resolution to take effect?**

The time it takes for DNS server changes to take effect mainly depends on the TTL (Time to Live) value of the domain DNS server name stored in the LocalDNS cache. Generally, TTL values can range from a few minutes to 48 hours, depending on the top-level domain settings.

For example, DNS servers for the ".com" top-level domain might cache domain DNS server information for up to 48 hours, while DNS servers for the ".cn" top-level domain typically cache for 24 hours. Because DNS servers for different top-level domains may have different TTL values, theoretically, the maximum time for global resolution updates to take effect after modifying domain DNS servers is 48 hours.

### **When modifying DNS servers, I get a prompt saying "There is an operation in progress, please try again later." What should I do?**

This situation generally occurs when Cloud DNS is automatically helping you change from the Free Edition DNS to a paid DNS server. You are recommended to wait for five minutes and then log on to the Cloud DNS console again to check the DNS server status.

### **I purchased a paid DNS version. Will modifying DNS servers affect parsing?**

This depends on your domain registrar. See the details below.

Domain registrar

DNS server change

Impact description

Non-Alibaba Cloud registered domain

Change from Cloud DNS Free Edition to Cloud DNS paid version

No impact on parsing

Non-Alibaba Cloud registered domain

Change from other DNS service providers to Cloud DNS paid version

Smooth migration is possible: See [How to smoothly migrate domain parsing to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).

Alibaba Cloud registered domain

Change from other DNS service providers to Cloud DNS paid version

Smooth migration is possible: See [How to smoothly migrate domain parsing to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).

Alibaba Cloud registered domain

Change from Cloud DNS Free Edition to Cloud DNS paid version

No impact on parsing
