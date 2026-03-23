The Quick UDP Internet Connections (QUIC) protocol provides enhanced security for data transmission between clients and Dynamic Route for DCDN nodes and accelerates content delivery. This topic introduces QUIC and the billing rules, and describes how to enable QUIC.

## What is QUIC?

QUIC is an experimental transport layer network protocol that provides the same security capabilities as TLS/SSL and reduces connection and transmission latency. QUIC is developed based on UDP and has an excellent performance when network connections are weak. When packet loss and network latency issues are severe, QUIC can still ensure service availability. QUIC can implement different congestion control algorithms at the application layer regardless of the operating system or kernel that is used. Compared with TCP, QUIC supports flexible changes based on service requirements. QUIC is a suitable alternative when TCP optimization encounters bottlenecks.

QUIC supported by Alibaba Cloud DCDN is implemented at Layer 7.

## QUIC types

Alibaba Cloud DCDN supports IETF QUIC and Google QUIC (gQUIC). Supported versions of gQUIC are Q39, Q43, and Q46.

-   IETF QUIC is a standard Internet protocol.
-   IETF QUIC is compatible with gQUIC versions Q39, Q43, and Q46. We recommend that you use IETF QUIC.

## How it works

The following figure shows how QUIC works with Alibaba Cloud DCDN. ![Diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5163723061/p54879.png)

## Client requirements

QUIC has the following requirements for clients:

-   If you use Google Chrome, the Alibaba Cloud DCDN already supports the standard protocol of HTTP/3. Google Chrome can directly send QUIC requests to Alibaba Cloud DCDN.
-   If you use a self-developed app, the app must be integrated with a network protocol library such as lsquic-client, Cronet, ngtcp2, or quiche that supports QUIC.

## Billing rules for QUIC

QUIC is a value-added service. You are charged based on the number of QUIC requests. For more information, see [DCDN pricing - QUIC](https://www.alibabacloud.com/zh/product/dcdn/pricing?spm=a3c0i.20793967.8004791080..3f9654acF4xclY).

**Important**

-   Alibaba Cloud DCDN identifies QUIC requests based on whether they are transmitted over UDP.
-   QUIC requests whose header specifies HTTPS: Alibaba Cloud DCDN identifies whether the request is a QUIC request. If it is a QUIC request, you are charged for the QUIC request. If it is not a QUIC request, you are charged for an HTTPS request.

## How to identify QUIC requests

In the following example, Google Chrome is used to show how to identify QUIC requests.

Procedure: Right-click a blank space on a web page and select Inspect > Network. If the Protocol column displays h3-29, it indicates that the request is a QUIC request.

**Note** If the Protocol column is not displayed, refresh the page, right-click, and then select Header Options > Protocol.

The following figure shows that the Protocol column displays h3, which indicates that the request is a QUIC request.

![Example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3377984861/p356060.png)
