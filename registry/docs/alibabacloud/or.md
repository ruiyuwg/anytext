Incorrect DNS server configuration is a common cause of domain name resolution failures. This topic describes how to check the DNS server status of a domain name in the Alibaba Cloud DNS console, and how to diagnose and resolve abnormal statuses.

## Background

A **DNS server** for a domain name is the public authoritative DNS server address assigned to the domain name. After you register a domain name, the registrar assigns a default DNS server and synchronizes the address to the TLD name server. When a client resolves the domain name, the local DNS resolver queries the TLD name server for the DNS server address, and then queries that DNS server for the DNS records.

## Check the DNS server IP

You can check the DNS server configuration for a domain name by using one of the following methods.

### Console

1.  Log on to the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page and navigate to the **Public Zone** page.
    
2.  Find the target domain name. In the **DNS Server IP Address** column, view the DNS server status.
    
3.  Hover over the status indicator to view the **Current NS Address** and the **System Assigned NS Address**.
    

### CLI

Run one of the following commands to query the DNS server (NS records) for a domain name:

```
nslookup -type=ns example.com
# or
dig NS example.com
```

Sample output:

```
example.com.	3547	IN	NS	dns30.hichina.com.
example.com.	3547	IN	NS	dns29.hichina.com.
```

### Domain name registrar

Go to your domain name registrar to query the currently configured DNS server address for the domain name. If the domain name is registered with Alibaba Cloud:

1.  Log on to the [Domains console](https://dc.console.alibabacloud.com/). In the domain name list, find the target domain name and click it to go to the details page.
    
2.  In the left-side navigation pane, choose **DNS Modification** to view the DNS server address.
    

## Diagnose and resolve abnormal statuses

The system regularly performs health checks on your domain name's DNS server configuration. It queries the TLD server for the NS records configured at your registrar and compares them with the DNS server addresses assigned by Alibaba Cloud DNS. Possible statuses are described below.

### Status 1: **Query NS failed**

This status indicates that Alibaba Cloud DNS could not locate the DNS configuration information for the domain name.

**Possible cause**

**Impact**

**Solution**

No DNS server is configured for the domain name.

**The domain name cannot be resolved.**

Set the **DNS Server IP Address** to the DNS server assigned by the Alibaba Cloud DNS system. For more information, see [Modify DNS servers](/help/en/dns/change-the-dns-server/#8c64cfec0faey).

The domain name is a subdomain and no NS records are configured for the subdomain on the root domain's DNS server.

**The domain name cannot be resolved.**

Go to the DNS server for the root domain and add two NS records that point the subdomain to the DNS server assigned by Alibaba Cloud DNS. For more information, see [Subdomain management](/help/en/dns/pubz-subdomain-management).

**Important**

If NS records are already configured for the root domain, but the status is still **Query NS failed**, the main reason is that the DNS server status check is periodic and sends asynchronous reminders. Information synchronization takes some time. Wait for 5 minutes and then refresh the page to check again.

### Status 2: **Assigned NS not used**

This status indicates that the domain name is not using the **System Assigned NS Address** provided by Alibaba Cloud DNS.

**Possible cause**

**Impact**

**Solution**

The domain name uses a non-Alibaba Cloud DNS server.

If DNS resolution is set up with another provider, this is expected and resolution works normally. If not, the domain name cannot be resolved.

To use Alibaba Cloud DNS, [modify the DNS servers](/help/en/dns/pubz-modify-dns-server/) for the domain name.

**Important**

If you have already modified the DNS servers, but the **DNS Server IP Address** column still shows the status **Assigned NS not used**, the main reason is that the DNS server status check is periodic and sends asynchronous reminders. Information synchronization takes some time. Wait for 5 minutes and then refresh the page to check again.

The domain name uses Free Edition servers, but the system assigned Paid Edition servers.

Free lines resolve normally, but paid lines cannot. For more information, see [Resolution lines](/help/en/dns/pubz-resolve-line-enumeration/).

Modify the DNS server to the system assigned NS addresses.

The domain name uses Paid Edition DNS servers, but the system assigned Free Edition servers.

The domain name cannot be resolved.

Modify the DNS server to the system assigned NS addresses.

The domain name has expired and the system changed the server to `expire.alidns.com`.

The domain name cannot be resolved.

Renew the domain name at your registrar.

### Status 3: Query timeout

This status indicates that the query for the domain name's DNS server information timed out.

**Possible cause**

**Solution**

The query timed out due to network issues or other intermittent reasons.

This does not affect domain name resolution. Refresh the page after a few minutes to restore the status. You can also use a [network diagnostic tool](https://boce.aliyun.com/detect/dns) to verify that the domain name resolves normally.

## Appendix: System assigned NS addresses

Alibaba Cloud assigns different DNS server addresses based on whether the domain name uses a paid or free edition of Alibaba Cloud DNS.

**Edition**

**System assigned NS addresses**

Paid

vip(1-8).alidns.com

Free

dns(1-32).hichina.com, ns(1-8).alidns.com

## References

-   [DNS server levels](/help/en/dns/basic-concepts-dns2-0#h2-dns-3): Learn more about types of DNS servers and the role of authoritative DNS servers.
    
-   [DNS resolution process](/help/en/dns/basic-concepts-dns2-0#h2-dns-4): Understand the overall DNS resolution process.
    
-   [Smoothly migrate domain name resolution to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns): Reduce migration risks when modifying DNS servers.
