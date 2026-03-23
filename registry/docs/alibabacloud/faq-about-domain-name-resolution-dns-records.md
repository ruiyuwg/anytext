This topic provides answers to frequently asked questions (FAQ) about Domain Name System (DNS) resolution and adding DNS records.

## **FAQ**

**What do I need to prepare before I configure a DNS record?**

The necessary preparations depend on the scenario, such as website resolution:

1\. Obtain a domain name. You can click [Get Your Domain Name with Alibaba Cloud](https://www.alibabacloud.com/domain).

2\. Select an authoritative DNS service, such as Alibaba Cloud DNS. For more information, see [Alibaba Cloud DNS](https://www.alibabacloud.com/product/dns).

3\. Obtain the IP address of the application server. The **Record Value** parameter will be set to this IP address.

-   If you use an Elastic Compute Service (ECS) instance or an exclusive vSwitch, you can log on to the product console to view the assigned IP address.
    
-   If you purchase a website, we recommend that you contact the website provider to obtain the IP address.
    

4\. Make sure that the domain name passes real-name verification. Make sure that the domain name has an Internet Content Provider (ICP) number if the server is located in the Chinese mainland. For more information about the ICP filing, see ([What is ICP filing](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb)).

5\. After you complete the preceding steps, log on to the [Alibaba Cloud DNS Console](https://dnsnext.console.alibabacloud.com/) to configure a DNS record.

Examples:

-   Website applications
    
    For a website application, you can add an A record or a canonical name (CNAME) record to point the domain name to an IP address.
    
    -   A records provide the simplest way to point domain names to IP addresses. The value of the **Record Value** parameter of an A record is the server IP address that is obtained from your server service provider or website provider.
        
    -   The value of the **Record Value** parameter of a CNAME record is a domain name instead of an IP address. It is used to point a domain name to another domain name **(CNAME)** that is mapped to an IP address.
        
    
    For more information, see [Add an A record for a website domain name](/help/en/dns/add-an-a-record-to-a-website-domain).
    
-   Email applications
    
    For an email application, you must add a mail exchanger (MX) record for its domain name. To ensure that a mailbox can be created, you must also add a CNAME record and a text (TXT) record for the domain name. If you do not know how to specify the parameters including **Hostname**, **Record Type**, and **Record Value** when you add the preceding records, contact your email service provider. For more information, see [Add DNS records for a mailbox](/help/en/dns/configure-dns-records-for-your-mailbox).
    

**What types of DNS records does Alibaba Cloud DNS support?**

Alibaba Cloud DNS supports the following types of DNS records:

-   A record, which is used to map a domain name to an IP address
    
-   CNAME record, which is used to map a domain name to another domain name
    
-   MX record, which is used to specify the email server that receives emails based on the email address suffix of the recipient
    
-   AAAA record, which is used to map a domain name to an IPv6 address
    
-   TXT record, which is used to identify and describe a domain name
    
-   Name server (NS) record, which is used to delegate a subdomain to a different DNS service provider
    
-   Service (SRV) record, which is used to identify a server that uses a specific service
    
-   Certification authority authorization (CAA) record, which is used to specify a certification authority that is authorized to issue certificates for a domain name
    
-   PTR record, which is used to map an IP address to a domain name
    
-   SVCB is short for Service Binding Record, which is mainly used for service discovery
    
-   HTTPS record, which is used to used to describe HTTPS services
    
-   Implicit or explicit URL forwarding record, which is used to map a domain name to another domain name of an existing website.
    

For more information, see [Add DNS Records](/help/en/dns/add-a-dns-record#topic-2035899).

**Does Alibaba Cloud DNS allow a domain name to be mapped to a port?**

This depends on the type of DNS record that you add. When you add an A or AAAA record, Alibaba Cloud DNS does not allow you to enter the record value in the format of Domain name:Port number to map a domain name to a port. For details on adding URL records, see [URL Forwarding](/help/en/dns/add-a-dns-record#b05f23c08b5k3).

**What is IPv6? Does Alibaba Cloud DNS support IPv6?**

IPv6 stands for Internet Protocol version 6. Developed by the Internet Engineering Task Force (IETF), IPv6 is used to replace IPv4 because IPv4 restricts Internet development due to address exhaustion. IPv6 not only offers more network address resources but also allows more types of devices to connect to the Internet.

Yes, Alibaba Cloud DNS supports IPv6. You can configure **AAAA records** on the DNS Settings page of the Alibaba Cloud DNS console to allow visitors to access websites by using IPv6 addresses. All DNS servers of Alibaba Cloud DNS also support IPv6.

For more information, see [Add DNS Records](/help/en/dns/add-a-dns-record#topic-2035899).

**Can after-sales support engineers configure DNS settings for me?**

No, after-sales support engineers are not allowed to log on with user accounts to configure DNS settings due to security concerns. You need to log on to the Alibaba Cloud DNS console to configure DNS settings by yourself. For more information, see [Get started](/help/en/dns/novice-guide-dns#topic-2035889).

**Does Alibaba Cloud DNS provide website building services?**

No, Alibaba Cloud DNS does not provide a website building service. Alibaba Cloud DNS provides a domain name resolution service, which resolves a domain name to the IP address of a website server. For more information, see [Build a Website](/help/en/ecs/user-guide/build-a-website/).

**How do I point a domain name to the IP address of a website server?**

When you build a website, you must configure Domain Name System (DNS) settings. DNS settings can help you point a domain name to the IP address of the server where the website is hosted. This way, users can visit the website by using the domain name that you specify. For more information, see [Get started](/help/en/dns/novice-guide-dns).

**Important**

Configuring DNS settings is only one of the steps in building a website. You must also configure other settings or contact your website service provider.

**How do I configure DNS settings for a domain name that is registered with a third-party DNS service provider?**

For domain names not registered with Alibaba Cloud, you can still use Alibaba Cloud DNS for DNS setting in the following scenarios:

-   If your domain name is registered with a third-party DNS service provider and no DNS record is configured for the domain name, refer to [How do I configure DNS settings for a domain name that is registered with a third-party DNS service provider](/help/en/dns/how-do-i-resolve-a-non-ali-cloud-registered-domain-name-on-the-alibaba-cloud-dns).
    
-   If your domain name is registered with a thrid-party DNS service provider and DNS record is configured for the domain name, refer to [Smooth domain name imgration to Alibaba Cloud DNS](/help/en/dns/smooth-domain-name-migration).
    

**How to map a domain name to another domain name of a website?**

You can map a domain name to another domain name of a website by adding a canonical name (CNAME) record or URL forwarding record. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record#topic-2035899).

**Note**

If a CNAME record conflicts with another DNS record, or if the software on the server of the destination domain name prevents access by other domain names, see [DNS record conflict rules](/help/en/dns/dns-record-conflict-rules#topic-2035957).

**How can I configure DNS settings with a mailbox not registered with Alibaba Cloud?**

The following content describes the solution to different scenarios:

-   **Add DNS records for mailbox in the Alibaba Cloud DNS console with a domain registered through Alibaba CLoud and email services not provided by Alibaba Cloud.**
    
    Contact your email service provider to obtain the DNS records that you need to add for your mailbox. For more information, see [Add DNS records for a mailbox](/help/en/dns/configure-dns-records-for-your-mailbox).
    
-   **Add DNS records for mailbox in the server of a third-party DNS service provider with a domain registered through Alibaba CLoud and email services not provided by Alibaba Cloud.**
    
    Contact your email service provider to obtain the DNS records that you need to add for your mailbox. Then, contact your DNS service provider to configure DNS settings.
    
-   **Add DNS records for mailbox in the Alibaba Cloud DNS console with a domain not registered through Alibaba CLoud and email services not provided by Alibaba Cloud.**
    
    Contact your email service provider to obtain the DNS records that you need to add for your mailbox. For more information, see [Add DNS records for a mailbox](/help/en/dns/configure-dns-records-for-your-mailbox).
    

**What do a hostname and a record value mean?**

-   **Hostname**: A hostname is a prefix that is added for a domain name to create a subdomain. For example, assume that a primary domain is `example.com`. If you want visitors to use `www.example.com` for access, enter `www` as the hostname. If you want to create a DNS record for a domain name, enter @ as the hostname.
    
-   **Record value**: A record value is a specific value for a record and depends on record types. Alibaba Cloud DNS supports the following types of DNS records:
    
    -   **A record**: Enter an IPv4 address to which the domain name is mapped. Enter `192.0.2.0` for this example.
        
    -   **AAAA record**: Enter the IPv6 address to which the domain name is mapped. Enter `2001:db8::` for this example.
        
    -   **CNAME record**: Enter the domain name to which the domain name is mapped. Enter `www.example.com` for this example.
        
    -   **MX record**: Enter the MX record value that is obtained from the email service provider. Enter `mail.example.com` for this example. Enter the MX record priority that is obtained from the email service provider. Enter `10 mail.example.com` for this example.
        
    -   **NS record**: Enter the domain name of an authoritative DNS server. Enter `ns1.example.com` for this example.
        
    
    For more record types, see [Add DNS Records](/help/en/dns/add-a-dns-record#topic-2035899).
    

**Does Alibaba Cloud DNS support weighted round-robin?**

Yes, Alibaba Cloud DNS supports weighted round-robin. If a domain name is mapped to multiple IP addresses, you can use weighted round-robin to set a weight for each IP address. This way, access traffic is forwarded to different IP addresses by weight. During A/B testing, you can use this feature to forward a small portion of traffic to a server on which the software is updated. For more information, see [Set weights](/help/en/dns/set-weights#topic-2035918).

**Does Alibaba Cloud DNS support anycast?**

Yes, Alibaba Cloud DNS supports anycast. Alibaba Cloud DNS responds to DNS requests on DNS servers closest to visitors by using anycast based on DNS servers deployed all over the world. This way, Alibaba Cloud DNS is capable of delivering query performance with a lower latency, and synchronizing DNS record changes to DNS servers around the world within seconds.

**Does Alibaba Cloud DNS support dynamic DNS (DDNS)?**

No, Alibaba Cloud DNS does not support DDNS.

**What is the default TTL period of DNS records? Can I change the TTL period?**

The default TTL period is 600 seconds, which equals 10 minutes, in Alibaba Cloud DNS. The TTL period can be changed. The value range of the TTL period varies based on the edition of Alibaba Cloud DNS:

-   Free/Personal Edition: Minimum TTL is 10 minutes (600 seconds).
    
-   Enterprise Ultimate Edition: Minimum TTL is 1 second.
    

For more information, see [Set the TTL period](/help/en/dns/set-ttl).

**Are there any limits on the quantities of hosted domain names and DNS records?**

Alibaba Cloud DNS does not limit the number of hosted primary domain names. The number of DNS records must meet the following requirements:

For each subdomain, the free edition of Alibaba Cloud DNS supports a maximum of 10 DNS records that have the same hostname and resolution line. A paid edition of Alibaba Cloud DNS supports a maximum of 90 DNS records that have the same hostname and resolution line

-   The maximum number of DNS records configured for a single domain name is 100,000. If you exceed this limit with the Enterprise Ultimate Edition, you can submit a ticket to apply for a larger upper limit.
    
-   For each domain name/subdomain, the free edition of Alibaba Cloud DNS supports a maximum of 10 DNS records that have the same hostname and resolution line. A paid edition of Alibaba Cloud DNS supports a maximum of 100 DNS records that have the same hostname and resolution line.
    
-   The free edition of Alibaba Cloud DNS supports a maximum of 2 explicit or implicit URL forwarding records, the personal edition of Alibaba Cloud DNS supports a maximum of 5 explicit or implicit URL forwarding records, and the enterprise edition of Alibaba Cloud DNS supports a maximum of 10 explicit or implicit URL forwarding records.
    

**Does Alibaba Cloud DNS support wildcard DNS records? If yes, for what types of DNS records does Alibaba Cloud DNS support wildcard DNS records?**

Alibaba Cloud DNS supports wildcard DNS records for all types of DNS records such as A records, AAAA records, CNAME records, NSrecords, MX records, TXT records, CAArecords, URLrecords, SVCBrecords and HTTPSrecords.

**What can I do if the error message "Your traffic in this period reaches the upper limit" is prompted on DNS Settings page?**

When the number of sudden invocations is too large, global throttling is triggered. Fuzzy search is selected by default in the console. To prevent this error, we recommend that you use advanced search.

## A/AAAA records

**Can I map a subdomain to multiple IP addresses?**

Yes, you can map a subdomain to multiple IP addresses. This way, requests for the subdomain can be evenly distributed to the servers that host your website to reduce the load on each server. For example, you can add an A/AAAA record in Alibaba Cloud DNS to map a domain name to multiple IP addresses. When a visitor sends a DNS request for the domain name, Alibaba Cloud DNS returns a list of all the specified IP addresses to the local DNS server of the visitor. Then, the local DNS server determines which IP address will be returned to the visitor. For weighted IP address distribution, refer to [Set weights](/help/en/dns/set-weights).

**Can I use A records to point a domain name to a specific port of the server?**

No, you cannot point an A record to a specific port. Only URL forwarding records in Alibaba Cloud DNS supports pointing a domain name to \[domain name: port number\]. For more information on adding URL forwarding records, see [Explicit or implicit URL forwarding record](/help/en/dns/add-a-dns-record#b05f23c08b5k3).

**Can two or more domain names be resolved to the IP address of one ECS instance?**

Yes, two or more domain names can be resolved to the IP address of one ECS instance, that is, different subdomains can be resolved to the same IP address.

**Are there any limitations on the type of IP address that can be set as a DNS record value?**

No, there is no limitation on the type of IP address for a DNS record value. When you add a DNS record, you can enter a public IP address or a private IP address as the record value. In actual business scenarios, private IP address is provided only for testing.

**Can I enter an IP address outside the Chinese mainland as the record value when adding a DNS record?**

Yes, you can enter an IP address outside the Chinese mainland as the record value. Alibaba Cloud DNS allows domain names to be mapped to IP addresses both in and outside the Chinese mainland.

**How does Alibaba Cloud DNS resolve a subdomain if I configure both an IPv6 address and an IPv4 address for the subdomain?**

The IPv6 address is returned for a DNS query only if the client of a visitor supports IPv6.

**1\. Example DNS record configurations:**

Record type

Hostname

DNS request source

Record value

AAAA

www

Default

ff03:0:0:0:0:0:x:x

A

www

Default

1.1.x.x

**DNS resolution results:**

-   If the client of the visitor supports both IPv6 and IPv4, the client sends two DNS queries for an IPv6 address and an IPv4 address to the local DNS server, the local DNS server forwards the two DNS queries to Alibaba Cloud DNS, and then Alibaba Cloud DNS returns the IPv6 and IPv4 addresses to which the domain name is mapped. The client determines which address to return to the visitor. In most cases, the client returns the IPv6 address to the visitor.
    
-   If the client of the visitor supports only IPv6, the client sends a DNS query for an IPv6 address to the local DNS server, the local DNS server forwards the DNS query to Alibaba Cloud DNS, and then Alibaba Cloud DNS returns the IPv6 address to which the domain name is mapped. In the end, the client returns the IPv6 address to the visitor.
    
-   If the client of the visitor supports only IPv4, the client sends a DNS query for an IPv4 address to the local DNS server, the local DNS server forwards the DNS query to Alibaba Cloud DNS, and then Alibaba Cloud DNS returns the IPv4 address to which the domain name is mapped. In the end, the client returns the IPv4 address to the visitor. The IPv4 address can be in the format of 1.1.x.x.
    

**2\. Example DNS record configurations:**

Record type

Hostname

DNS request source

Record value

AAAA

www

Outside China

ff03:0:0:0:0:0:x:x

A

www

Default

1.1.x.x

-   If the client of the visitor supports both IPv6 and IPv4 and the client is located in a region outside the Chinese mainland, the client sends two DNS queries for an IPv6 address and an IPv4 address to the local DNS server, the local DNS server forwards the DNS queries to Alibaba Cloud DNS, and then Alibaba Cloud DNS returns both the IPv6 and IPv4 addresses to which the domain name is mapped. The client determines which address to return to the visitor. In most cases, the client returns the IPv6 address.
    
-   IIf the client of the visitor supports only IPv4 and the client is located in a region outside the Chinese mainland, the client sends a DNS query for an IPv4 address to the local DNS server, and the local DNS server forwards the DNS query to Alibaba Cloud DNS. However, Alibaba Cloud DNS cannot respond to the DNS query because no IPv4 address is configured for the resolution lines of Alibaba Cloud DNS outside the Chinese mainland.
    
-   If the client of the visitor supports only IPv4 and the client is located in the Chinese mainland, the client sends a DNS query for an IPv4 address to the local DNS server, the local DNS server forwards the DNS query to Alibaba Cloud DNS, and then Alibaba Cloud DNS returns the IPv4 address to which the domain name is mapped. In the end, the client returns the IPv4 address to the visitor. The IPv4 address can be in the format of 1.1.x.x.
    
-   If the client of the visitor supports both IPv6 and IPv4 and the client is located in the Chinese mainland, the client sends two DNS queries for an IPv6 address and an IPv4 address to the local DNS server, and the local DNS server forwards the DNS queries to Alibaba Cloud DNS. However, Alibaba Cloud DNS returns only the IPv4 address to the local DNS server because only IPv4 addresses are configured for the default resolution lines of Alibaba Cloud DNS. In the end, the client returns the IPv4 address to the visitor. The IPv4 address can be in the format of 1.1.x.x.
    

**Can DNS load balancing be implemented by resolving a domain name to the IP addresses of multiple servers?**

Yes, when you resolve a domain name to the IP addresses of multiple servers, you can configure weighted round-robin to set different weights for each address. In this way, DNS requests can be sent to different IP addresses based on a specified ratio. You can set the weight ratio to 1:1 to implement DNS load balancing. For more information, see [Set weights](/help/en/dns/set-weights#topic-2035918).

## **CNAME records**

**What is the difference between CNAME records and URL forwarding records?**

A CNAME record maps one domain name to another, while URL forwarding record redirects a request from one URL to another. URL forwarding can be internal (implicit, using an iframe) or external (explicit, using 301 or 302 redirects). Key differences include the following:

-   CNAME does not change the access domain name, whereas URL explicit forwarding changes the URL in the address bar.
    
-   CNAME is suitable for stable, long-term mappings between domain names. URL forwarding is better for temporary redirections, website migrations, or hiding the actual access address.
    

**Why does the system display a message indicating a conflict between an A record and a CNAME record when I add a record?**

An A record and CNAME record that have the same hostname and DNS request source cannot be used at the same time. We recommend that you use subdomains that have different **hostnames** or **DNS request sources** to create an A record and a CNAME record. For more information on record conflicts, see [DNS record conflict rules](/help/en/dns/dns-record-conflict-rules#topic-2035957).

**Why does the system display a message indicating a conflict between a mail exchanger (MX) record and a CNAME record when I add a record?**

The priorities of DNS records that are used during DNS resolution vary based on the types of DNS records. Some types of DNS records that have the same hostname and resolution line cannot be used at the same time. If these types of DNS records are used at the same time, DNS configuration risks may occur and services may become unavailable. For more information, see [DNS record conflict rules](/help/en/dns/dns-record-conflict-rules#topic-2035957).

**Can I resolve the CNAME records to a specific path?**

No, you cannot resolve the CNAME records to a specific path. CNAME records are designed to point one domain name to another domain name, not to a specific file path or directory.

**Should I add a dot (.) at the end of a domain name when adding a DNS record?**

No, you do not need to add a dot (.) at the end of a domain name. The dot (.) at the end of a domain name represents the root domain. Alibaba Cloud DNS automatically adds a dot (.) at the end of a domain name, so you do not need to add it.

**I cannot configure CNAME records to navigate to Baidu homepage from Alibaba Cloud. Why?**

Most large websites, including Baidu, do not allow external domain names to point to their domain names via configuring CNAME records for security and abuse prevention reasons. We recommend that you use URL redirection (301 or 302) instead of CNAME records to direct traffic to Baidu homepage.

**Can I configure multiple CNAME records that have the same hostname and resolution line?**

Yes, you can configure multiple CNAME records that have the same hostname and resolution line. For more information about how to configure CNAME records, see [Add CNAME records](/help/en/dns/add-a-dns-record#h2-cname-2).

**How does Alibaba Cloud DNS respond to DNS requests if multiple CNAME records that have the same hostname and resolution line are configured?**

If multiple CNAME records that have the same hostname and resolution line are configured, the IP addresses are returned on a round-robin basis. To return the addresses based on weighted round-robin basis, refer to [Set weights](/help/en/dns/set-weights).

## **URL** records

**What can I do to troubleshoot URL forwarding issues?**

URL forwarding is not guaranteed to be as reliable as direct DNS resolution. If you require a stable resolution, we recommend that your create a URL forwarding server. For common troubleshooting steps, see [Troubleshoot URL forwarding issues](/help/en/dns/troubleshoot-url-forwarding-issues).

**How many URL forwarding records can be set?**

The number of URL forwarding records varies based on the edition of Alibaba Cloud DNS. The details are as follows:

-   Free edition: 2
    
-   Personal edition: 5
    
-   Enterprise Ultimate Editions: 10
    

For a edition comparison, see [Editions](/help/en/dns/details#topic-2035883).

**Do domain names involved in URL forwarding support HTTPS?**

Domain names used before URL forwarding support HTTP but do not support HTTPS. Destination domain names support both HTTP and HTTPS.

**Can I specify a URL that includes path parameters when I configure URL forwarding?**

No, you cannot specify a URL that includes path parameters when you configure explicit or implicit URL forwarding.

**Why does the system display a message indicating a URL filing exception when I add a URL forwarding record?**

Adding a URL forwarding record is to resolve a domain name to the Alibaba Cloud forwarding server before URL forwarding. In this way, forwarding proxy is performed on the forwarding server. Alibaba Cloud URL forwarding servers are deployed in the Chinese mainland. You must obtained an ICP filing for the domain name used before URL forwarding. You can apply for an ICP filing for the domain name in another filing system other than the Alibaba Cloud ICP Filing system.

## **PTR** records

**What is reverse DNS lookup?**

Reverse DNS lookup is the process of mapping an IP address to a domain name.

**Is reverse DNS lookup (PTR) free of charge? How do I configure it?**

To configure this feature, you contact the service provider of your data center or DNS server. If your server is deployed on Alibaba Cloud, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?#/ticket/createIndex), and **Alibaba Cloud server** after-sales engineers will help you resolve the issues.

## **TXT** records

**Why is there a text (TXT) record in my DNS records?**

An additional TXT record may be added automatically for domain validation when using certain Alibaba Cloud products. For instance, if you choose **Automatic DNS Verification** under **Domain Verification Method** in the **Certificate-related Information** section on the SSL Certificate Service buy page, Alibaba Cloud will add a TXT record for you. For more information, see [How do I select a method for domain name ownership verificatioN?](/help/en/ssl-certificate/select-a-method-for-domain-name-verification#concept-bsn-f45-ydb)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5245898371/p894746.png)

## **MX** records

**What is the purpose of setting priorities for MX records?**

If there is only one MX record, it is meaningless to set a priority for the MX record. If there are multiple MX records, the email server of the sender preferentially sends an email to the server corresponding to the smallest MX priority value. If this server fails and cannot receive the email, the email server of the sender automatically sends the email to the server corresponding to the second smallest priority value. The process continues until the email is sent successfully or all servers fail to receive the email.

**Can I add MX records for enterprise mailbox?**

You can add MX records for enterprise mailbox. For more information, see [Add DNS records for a mailbox](/help/en/dns/configure-dns-records-for-your-mailbox).

**Why does the system display a message indicating a conflict between a mail exchanger (MX) record and a CNAME record when I add a record?**

The priorities of DNS records that are used during DNS resolution vary based on the types of DNS records. Some types of DNS records that have the same hostname and resolution line cannot be used at the same time. If these types of DNS records are used at the same time, DNS configuration risks may occur and services may become unavailable. For more information, see [DNS record conflict rules](/help/en/dns/dns-record-conflict-rules#topic-2035957).

## **NS** records

**What do I do if an NS record that I want to add for a primary domain conflicts with a subdomain?**

The prompt "the NS record conflicts with a subdomain" typically arises when multiple DNS records of different types exist at the same level. You can query the existing records, remove the subdomain from the primary domain, and add the NS record again. However, **this operation may affect the DNS resolution of the subdomain**. For more information, see [DNS record conflict rules](/help/en/dns/dns-record-conflict-rules#topic-2035957).
