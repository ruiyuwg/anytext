MaxCompute SQL provides network functions to process network data of the STRING and BINARY types. You can use these functions to transform IP address formats, parse URLs, and retrieve network masks. This topic describes the network functions and their features.

**Function**

**Feature**

[NET\_HOST](/help/en/maxcompute/user-guide/net-host)

Parses the hostname from a URL of the STRING type.

[NET\_IP\_FROM\_STRING](/help/en/maxcompute/user-guide/net-ip-from-string)

Converts an IPv4 or IPv6 address from the STRING format to the BINARY format.

**Note**

If the input parameter is invalid, an error is returned.

[NET\_IP\_NET\_MASK](/help/en/maxcompute/user-guide/net-ip-net-mask)

Generates an IPv4 or IPv6 network mask from a specified mask length.

[NET\_IPV4\_TO\_INT64](/help/en/maxcompute/user-guide/net-ipv4-to-int64)

Converts an IPv4 address from the BINARY format to the BIGINT format.

[NET\_IP\_TO\_STRING](/help/en/maxcompute/user-guide/net-ip-to-string)

Converts an IPv4 or IPv6 address from the BINARY format to the STRING format.

[NET\_PUBLIC\_SUFFIX](/help/en/maxcompute/user-guide/net-public-suffix)

Parses the public suffix, such as com, org, or net, from a URL of the STRING type.

[NET\_REG\_DOMAIN](/help/en/maxcompute/user-guide/net-reg-domain)

Parses the registered domain name from a URL of the STRING type. The registered domain name consists of the public suffix and the preceding label.

[NET\_SAFE\_IP\_FROM\_STRING](/help/en/maxcompute/user-guide/net-safe-ip-from-string)

Converts an IPv4 or IPv6 address from the STRING format to the BINARY format.

**Note**

This function is similar to [NET\_IP\_FROM\_STRING](/help/en/maxcompute/user-guide/net-ip-from-string). However, it returns NULL instead of an error if the input is invalid.
