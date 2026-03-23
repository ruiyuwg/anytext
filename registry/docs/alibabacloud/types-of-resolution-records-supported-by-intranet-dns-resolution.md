The following table describes the DNS record types supported by Private DNS.

**Record type**

**Value**

**Hostname format**

A

An A record maps a domain name to an IPv4 address in the dotted decimal notation format.

A string that contains letters, digits, hyphens (-), underscores (\_), and at signs (@).

AAAA record

An AAAA record specifies an IPv6 address.

A string that contains letters, digits, hyphens (-), underscores (\_), and at signs (@).

MX record

An MX record specifies the domain name of a mail server. You can set priorities for different email servers. Valid priority values: 1 to 99. A smaller value indicates a higher priority. The maximum value is 50 in the Alibaba Cloud DNS console and 99 in API operation calls.

A string that contains letters, digits, hyphens (-), underscores (\_), and at signs (@).

Text (TXT) record

A TXT record must be less than 512 bytes in length. Valid characters include lowercase letters, uppercase letters, digits, spaces, and the following special characters: - \_ ~ = : ; / . @ + ^ !

A string that contains letters, digits, hyphens (-), underscores (\_), and at signs (@).

Canonical name (CNAME) record

A CNAME record maps a domain name to another domain name.

A string that contains letters, digits, hyphens (-), underscores (\_), and at signs (@).

Pointer (PTR) record

A PTR record maps an IP address to a domain name.

A number between 0 and 255.

Service (SRV) record

An SRV record is in the **Priority Weight Port Destination Address** format. Value elements are separated by spaces.

Example: 0 5 5060 sipserver.example.com.

The format is **Service name.Protocol type**.

Example: \_sip.\_tcp.
