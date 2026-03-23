This topic provides answers to frequently asked questions (FAQ) about the time when DNS settings take effect.

## **Modify DNS records**

**When does a DNS record take effect after I add it?**

A DNS record takes effect immediately after it is added.

**When do the updates take effect after I delete or modify a DNS record?**

The maximum theoretical time for a modified or deleted DNS record to take effect is the previously set TTL value. For example, if the time to live (TTL) period is set to 10 minutes, 10 minutes are theoretically required for the updates to the DNS settings to take effect around the world.

However, if a longer TTL period is configured for the local DNS server of a specific Internet service provider (ISP), the updates to the DNS records do not take effect immediately. A maximum of 48 hours is required for the updates to the DNS settings to take effect. Thus, we recommend that you ensure that the IP addresses both before and after the change function normally when you delete or modify a DNS record. This helps prevent service interruption.

**Why does a DNS record take effect immediately after it is added?**

A DNS record takes effect immediately after it is added only if it is the first DNS record added for a domain name. In this case, local DNS servers do not have a resolution result in the cache. If a user visits the domain name, the corresponding local DNS server performs recursive queries until it obtains the resolution result from the authoritative name server. Then, the local DNS server returns the resolution result to the user.

**Why are the updates unable to take effect immediately after I modify, delete, or disable a DNS record?**

The caching mechanism of local DNS server prevents immediate synchronization of updates to users. Local DNS, typically deployed in the user's on-premises network or managed by an ISP, aims to speed up DNS queries and reduce the load on upstream DNS servers.

If you use an A record to point a domain name to a new IP address and your local DNS retains the original record (i.e., the cache hasn't expired), the system returns the outdated information. The local DNS server will initiate a new request and obtain the updated DNS records after the TTL expires. Thus, the updates to DNS records will take effect after the cache of the local DNS server expires. For a deeper understanding the time when DNS settings take effect, see [Terms](/help/en/dns/basic-concepts#topic-2035881).

**Why do the updates take effect faster in some regions than in other regions after I modify or delete a DNS record?**

The cache timeout period varies with local DNS servers.

A local DNS server performs recursive queries only after the cache expires. For example, User A visits a domain name in Region A where the cache of the corresponding local DNS server is about to expire, whereas User B visits the same domain name in Region B where the cache of the corresponding local DNS server just takes effect. The cache of the local DNS server in Region A expires faster. Therefore, User A obtains the new resolution result faster.

## Modify DNS servers

**When do the updates take effect after I modify the DNS server information? Why do the updates take 48 hours to take effect after I modify the DNS server information?**

The time when the updates take effect depends on the TTL period of the DNS server information cached on local DNS servers. The TTL period varies from a few minutes to 48 hours depending on different settings of top-level domains.

For example, the TTL period of the DNS server information for the top-level domain (TLD) .com is 48 hours and that for the TLD .cn is 24 hours. The TTL period varies with TLDs. Therefore, a maximum of 48 hours is theoretically required for the updates to the DNS settings to take effect around the world.
