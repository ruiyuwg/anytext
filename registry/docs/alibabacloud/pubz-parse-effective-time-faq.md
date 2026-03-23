This topic explains frequently asked questions about Cloud DNS resolution effectiveness.

## **Why can newly added records achieve real-time resolution effectiveness?**

A: **Newly added records** refer to adding resolution records for a domain name for the first time (excluding scenarios where records are added again after deletion). Because the client's local DNS has never cached the resolution information for this domain name, the local DNS server will initiate a recursive query and eventually retrieve the resolution result from the authoritative DNS server and return it to the visitor. Therefore, adding records takes effect in real-time.

## **Why don't modified/deleted record resolutions take effect in real-time?**

A: Due to the caching mechanism of LocalDNS, domain name resolution updates may not be immediately synchronized to users. LocalDNS is typically deployed within the user's on-premises network or managed by an ISP (Internet service provider), with the purpose of accelerating the DNS query process and reducing the request load on upstream DNS servers.

Suppose you update an A record for a domain name, pointing it to a new IP address. If your LocalDNS server still retains the old resolution record for this domain name (i.e., the cache has not expired), it will continue to return this outdated information instead of immediately obtaining the latest resolution result. Only when the cache reaches its preset validity period will LocalDNS initiate a new query to the authoritative DNS server to obtain updated resolution records. Therefore, operations to modify/delete records need to wait until the client's LocalDNS cache expires before they can take effect.

## **How long does it take for modified/deleted record resolutions to take effect?**

A: After modifying or deleting a domain name resolution record, theoretically, the maximum time for it to take effect is the TTL value set before the resolution record was modified or deleted. For example, if the TTL value of the resolution record is set to 10 minutes, theoretically, the global resolution will take effect in 10 minutes. However, if some carriers' LocalDNS servers forcibly set a longer cache time, this will cause a delay in the effectiveness of the modification or deletion of resolution records, which may take up to 48 hours to fully take effect. Therefore, when making modifications, it is recommended to ensure that both the IP addresses before and after the modification can provide normal service to avoid affecting user experience.

## **After modifying/deleting records, why do some regions take effect quickly while others take longer?**

A: This occurs because domain name visitors come from all over the country, and the cache expiration times of local DNS servers across the country vary. For example, some visitors' local DNS server caches may be about to expire, so the local DNS will initiate a recursive query again, thus obtaining the latest resolution results. This makes resolution appear to take effect quickly in some regions. On the other hand, some visitors' local DNS server cache times may have just started counting, and the local DNS needs to wait until the cache expires before performing a recursive query again and obtaining the latest resolution results. This makes resolution appear to take effect slowly in other regions.

## **How long does it take for DNS server modifications to take effect?**

A: If you want to know how long it takes for domain name DNS server modifications to take effect, you can refer to [How long does it take for DNS server resolution to take effect? Why does it need 48 hours for resolution to take effect?](/help/en/dns/pubz-dns-server-related-faq#09e9b62c4bejw)
