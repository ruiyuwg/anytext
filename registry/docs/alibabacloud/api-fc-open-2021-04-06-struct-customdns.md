Parameter

Type

Description

Example

object

The custom Domain Name System (DNS) configurations of the function.

nameServers

array

The IP addresses of DNS servers.

string

The IP address of the DNS server.

8.8.x.x

searches

array

The search domains of the DNS server.

string

The search domain of the DNS server.

ns1.svc.cluster-domain.example

dnsOptions

array

The configuration items in the resolv.conf file. Each item is a key-value pair in the key:value format, in which the key is required.

[DNSOption](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-dnsoption)

The configuration item in the resolv.conf file.
