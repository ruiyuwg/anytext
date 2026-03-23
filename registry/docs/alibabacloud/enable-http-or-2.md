HTTP/2, originally named HTTP/2.0, is the first new version of HTTP since HTTP/1.1. HTTP/2 is a binary protocol that supports multiplexing and header compression. It greatly improves web performance and reduces network latency.

## Prerequisites

An SSL certificate is configured. For more information, see [Configure an SSL certificate](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ssl-certificate#task-2339799).

**Note**

-   The first time you configure an SSL certificate, you need to wait until the certificate takes effect before you can enable HTTP/2.
    
-   If you disable the SSL certificate feature, HTTP/2 is disabled and the settings are dimmed.
    

## What is HTTP/2?

HTTP/2, originally named HTTP/2.0, is the latest version of HTTP. Compared with HTTP/1.1, HTTP/2 supports more features, including multiplexing, header compression, request prioritization, and server push. HTTP/2 provides optimized performance and is compatible with HTTP/1.1 semantics. HTTP/2 is supported by major browsers such as Google Chrome, Microsoft Edge, Safari, and Mozilla Firefox.

Benefits of HTTP/2:

-   Binary encoding: Unlike the newline delimited plaintext HTTP/1.x protocol, all HTTP/2 communication is split into smaller messages and frames, each of which is encoded in binary format. The binary encoding mechanism makes HTTP/2 more extensible. For example, frames are introduced to transmit data and instructions.
    
-   Multiplexing: HTTP 1.x requires sprites and multiple domain names to improve performance because browsers limit the number of requests to the same domain name. If a large number of resources on a page are requested by clients, head-of-line blocking (HOL blocking) may occur. If the number of requests reaches the upper limit, the requests must wait in a queue because only one request can be delivered at a time per connection. HTTP/2 is the new framing layer, at which bidirectional streams (requests and responses) can be transmitted over the same TCP connection. Each stream has a unique identifier and headers based on which the stream is encapsulated between the client and server. This mechanism eliminates HOL blocking and improves transmission performance.
    
-   Header compression: Each HTTP message carries a large number of headers that describe the transferred resource and properties. To reduce the overhead, HTTP/2 uses HPACK compression. HTTP/2 requires both the client and server to maintain and update an indexed list of header fields. This list is used as a reference to encode previously transmitted values by transferring index values. This improves the data transmission efficiency and performance.
    
-   Server push: Server push enables a server to send multiple responses to a single client. In addition to the response to the original request, the server can push additional resources to the client.
    

## Enable or disable HTTP/2

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **HTTPS Settings**.
    
5.  In the **HTTP/2 Setting** section, turn on **HTTP/2**.
    
    ![HTTP/2设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4909212461/p69369.png)
