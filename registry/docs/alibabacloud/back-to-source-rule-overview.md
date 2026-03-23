Origin rules allow you to specify different origin hosts, origin ports, origin protocols, Server Name Indication (SNI), Domain Name System (DNS) records, and byte-range segments for user requests with different features.

## **Features overview**

You can configure origin rules for specific user requests as follows:

**Configuration**

**Description**

[Custom origin Host](/help/en/edge-security-acceleration/esa/user-guide/origin-fetch-host)

By default, Edge Security Acceleration (ESA) uses the domain name from a client request as the Host request header when it requests resources from the origin server. If your origin domain differs from the requested domain name, you must modify the origin host to ensure that origin fetch requests are routed to the correct origin.

[Origin protocol and port](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-protocols-and-ports-1)

By default, Edge Security Acceleration (ESA) points of presence (POPs) retrieve content from origin servers using the same protocol as the client. You can create origin rules to configure different protocols and ports, and apply the rules to origin requests that have different characteristics.

[Origin SNI](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-sni)

If multiple domain names are bound to the same origin IP address, you must specify the domain name to be accessed (the origin SNI) when a point of presence (POP) accesses the origin server over HTTPS. The origin server then returns the SSL certificate for the corresponding domain name based on the SNI to ensure a successful origin fetch.

[DNS records](/help/en/edge-security-acceleration/esa/user-guide/dns-record)

If you specify a Uniform Resource Identifier (URI) but the requested resources are stored on different origin servers, you can create a domain name system (DNS) rule to replace the DNS record resolved from the hostname in the request. This ensures that the request is routed to the correct server to obtain the desired resources.

[Byte-range segment](/help/en/edge-security-acceleration/esa/user-guide/range-requests)

With range sharding, an Edge Security Acceleration (ESA) node includes Range information in a back-to-origin HTTP request. When the origin server receives the request, it returns the content for the specified range to the ESA node based on the Range information in the HTTP request header. This feature improves file distribution efficiency, increases the cache hit ratio, reduces back-to-origin traffic and pressure on the origin server, and improves resource response speed.

[Origin HTTP request timeout](/help/en/edge-security-acceleration/esa/user-guide/configuring-the-back-to-origin-request-timeout-period)

Setting an appropriate timeout period for HTTP requests to the origin server enhances response efficiency. If the timeout period is too short, network fluctuations can lead to frequent fetch failures from the origin. If it is too long, it may tie up too many connections when the origin is overloaded or unresponsive, disrupting the handling of regular requests.

[Configure 301/302 redirect](/help/en/edge-security-acceleration/esa/user-guide/pop-handles-301-or-302-redirects)

The 301/302 redirect follow feature supports HTTP 301 and 302 status codes from the origin server. Edge Security Acceleration (ESA) points of presence (POPs) handle these status codes on behalf of users, reducing data interactions and speeding up resource fetch.

## **Availability**

**Feature**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Number of rules

10

25

50

125

[Custom origin Host](/help/en/edge-security-acceleration/esa/user-guide/origin-fetch-host)

Supported

Supported

Supported

Supported

[Origin protocol and port](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-protocols-and-ports-1)

Supported

Supported

Supported

Supported

[Origin SNI](/help/en/edge-security-acceleration/esa/user-guide/back-to-source-sni)

Not supported

Not supported

Supported

Supported

[DNS records](/help/en/edge-security-acceleration/esa/user-guide/dns-record)

Not supported

Not supported

Supported

Supported

[Byte-range segment](/help/en/edge-security-acceleration/esa/user-guide/range-requests)

Supported

Supported

Supported

Supported

[Origin HTTP request timeout](/help/en/edge-security-acceleration/esa/user-guide/configuring-the-back-to-origin-request-timeout-period)

Supported

Supported

Supported

Supported

[Configure 301/302 redirect](/help/en/edge-security-acceleration/esa/user-guide/pop-handles-301-or-302-redirects)

Supported

Supported

Supported

Supported
