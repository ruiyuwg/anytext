Application Load Balancer (ALB) is available in the following editions:

-   **Basic**: Provides basic application load balancing capabilities and supports forwarding based on domain names, URLs, and HTTP headers.
    
-   **Standard**: In addition to the Basic edition features, the Standard edition offers more capabilities with comprehensive enhancements in forwarding, security, monitoring, and connection management.
    
-   **WAF-Enabled**: In addition to the Standard edition features, the WAF-Enabled edition integrates Web Application Firewall ([WAF 3.0](/help/en/waf/web-application-firewall-3-0/product-overview/what-is-waf)) to provide application-layer security protection for web services.
    

> The [instance performance metrics](/help/en/slb/application-load-balancer/product-overview/what-is-alb/#section-7tj-1bb-ym0) of ALB are independent of the edition.

> [Upgraded ALB instances](/help/en/slb/product-overview/alb) support traffic management through [security groups](/help/en/slb/application-load-balancer/user-guide/add-an-alb-instance-to-a-security-group) or [access control lists (ACLs)](/help/en/slb/application-load-balancer/user-guide/network-acls), while instances before upgrade only support ACLs. To use security groups, [create a new instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances) or contact your account manager to upgrade existing instance.

**Feature**

**Basic**

**Standard**

**WAF-Enabled**

**Listener protocols**

QUIC

Supported

Supported

Supported

HTTP/2

Supported

Supported

Supported

HTTP/3

Supported

Supported

Supported

WebSocket

Supported

Supported

Supported

**Forwarding rules**

Host- or path-based routing

Supported

Supported

Supported

HTTP header-based routing

Supported

Supported

Supported

Query string-based routing

Not supported

Supported

Supported

Cookie-based routing

Not supported

Supported

Supported

HTTP method-based routing

Not supported

Supported

Supported

Source IP-based routing

Not supported

Supported

Supported

Response status code-based routing

Not supported

Supported

Supported

Response header-based routing

Not supported

Supported

Supported

Forward to

Supported

Supported

Supported

Redirect

Supported

Supported

Supported

Rewrite or return fixed response

Not supported

Supported

Supported

Add or remove headers

Not supported

Supported

Supported

Traffic mirroring

Not supported

Supported

Supported

QPS throttling

Not supported

Supported

Supported

CORS

Not supported

Supported

Supported

AScript

Not supported

Supported

Supported

**Server group types**

Server, IP, and Function Compute types

Supported

Supported

Supported

**Security**

Access control allowlist/denylist

Supported

Supported

Supported

Security groups

Supported

Supported

Supported

TLS cipher suites

Supported

Supported

Supported

SNI multi-certificate support

Supported

Supported

Supported

RSA and ECC dual certificates

Supported

Supported

Supported

ECC certificates

Supported

Supported

Supported

End-to-end HTTPS

Not supported

Supported

Supported

Mutual TLS (mTLS)

Not supported

Supported

Supported

Custom TLS security policy

Not supported

Supported

Supported

TLS 1.3

Supported

Supported

Supported

**Monitoring and statistics**

Access logs

Supported

Supported

Supported

Basic monitoring metrics

Supported

Supported

Supported

Tracing analysis

Not supported

Supported

Supported

**Advanced features**

Retrieve real client source IP

Not supported

Supported

Supported

Web Application Firewall (WAF)

Not supported (can [upgrade to WAF-Enabled](/help/en/slb/application-load-balancer/use-cases/enable-waf-protection-for-alb#38e784b4c78dp))

Not supported (can [upgrade to WAF-Enabled](/help/en/slb/application-load-balancer/use-cases/enable-waf-protection-for-alb#38e784b4c78dp))

Supported

Global Accelerator (GA)

Supported

Supported

Supported

Session persistence

Supported

Supported

Supported

Backend persistent connections

Supported

Supported

Supported

Instance cloning

Supported

Supported

Supported

Slow start

Not supported

Supported

Supported

Connection draining

Not supported

Supported

Supported

Disable cross-zone load balancing

Not supported

Supported

Supported
