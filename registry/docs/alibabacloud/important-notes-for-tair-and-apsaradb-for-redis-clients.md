This topic describes the important notes, suggestions, and additional technical support for clients (SDKs) used to connect to Tair (Redis OSS-compatible) (hereinafter referred to as Tair) instances.

In this topic, clients refer to third-party SDKs that are used to connect to Tair and Redis instances over the Redis protocol, as shown in the following figure.![Redis SDK 数据通道](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5182195761/p539730.jpg)

## Important notes

-   The clients that are used to connect to Tair and Redis instances are provided by third parties. You can select a client based on your needs. Alibaba Cloud is not liable for the compliance of the client that you select.
    
-   When you use a third-party client to implement application development, maintenance, and failover, you are responsible for potential security risks.
    
    Alibaba Cloud is not liable for the stability, service limits, or security compliance of these clients. Additionally, the Service Level Agreement (SLA) of Alibaba Cloud does not apply to these clients. We recommend that you follow the updates of these clients on their official websites or software-hosting platforms to cope with potential issues and risks in a timely manner.
    
-   For information about the commands that are supported for Tair and Redis, see [Overview](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb).
    

## Suggestions

-   We recommend that you select a client that provides higher stability and technical support to connect to Tair instances. When it comes to Redis, we recommend that you select a client described in this topic or a client listed in [Clients](https://redis.io/resources/clients/).
    
-   Niche SDKs and niche versions of SDKs are not recommended. Choose a stable version that is backed by an engaged community and has few defects to suit your specific needs. You bear the risks associated with the choice.
    
-   If you choose an open source SDK to use in enterprise-class scenarios, we recommend that you purchase third-party technical support to better serve your needs. This is because enterprise-class scenarios are typically challenging and may involve closed-source code. Alibaba Cloud is under no obligation to provide technical support for third-party clients.
    
-   Consider the following suggestions while using a third-party client:
    
    -   Learn about the existing issues of the client. For information about specific common issues, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868).
        
    -   Learn more about the connection management and thread security of the client to prevent business damage caused by incorrect use of the client or issues of the client.
        
    -   Provide feedback on issues of the client to the corresponding community. We recommend that you play an active role in the community to optimize the client.
        

The following table describes the recommended clients for common programming languages. For more information, see [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db).

Table 1. Recommend clients for common programming languages

**Programming language**

**Redis client**

**Recommended version**

**Tair client**

**Description**

Java

**Jedis** (recommended)

-   Jedis 4.x or later: 4.4.0 or later
    
-   Jedis 2.x or 3.x: 3.10.0 or later
    

**TairJedis** (recommended)

An enhanced client that is developed for Tair based on Jedis.

**Note**

Alibaba Cloud provides free technical support and responds to your needs in a timely manner even though Alibaba Cloud is under no obligation to do so.

Jedis

A client provided by open source Redis. Alibaba Cloud plays an active role in the community to fix issues and recommend features.

Lettuce

6.3.0.RELEASE or later. You must enable the **TCP\_USER\_TIMEOUT** parameter. For more information, see [\[Notice\] Suggestions for upgrading Lettuce](/help/en/redis/product-overview/notice-on-lettuce-update).

Lettuce

Alibaba Cloud engages in the optimization of the client and discovery of defects, but the community response is slow.

Redisson

None

Redisson

A client that is provided by a third-party company. You must handle the related issues on your own or purchase technical support from the third-party company.

C/C++

**Hiredis** (recommended)

1.2.0 or later

**Hiredis** (recommended)

A client provided by open source Redis.

C#

**StackExchange.Redis** (recommended)

2.7.20 or later. For more information, see [Notice on update of StackExchange.Redis](/help/en/redis/product-overview/notice-suggestions-for-upgrading-stackexchange-redis-clients).

**AlibabaCloud.TairSDK** (recommended)

An enhanced client that is developed for Tair based on StackExchange.Redis.

**Note**

Alibaba Cloud provides free technical support and responds to your needs in a timely manner even though Alibaba Cloud is under no obligation to do so.

StackExchange.Redis

A popular thread-safe open source client backed by an engaged community.

ServiceStack.Redis

None

ServiceStack.Redis

A client that is provided by a third-party company. You must handle the related issues on your own or purchase technical support from the third-party company.

CSRedis

None

CSRedis

The CSRedis client is not recommended because support for the client has been ended.

Python

**redis-py** (recommended)

-   Python 3.7: 4.4.4 or later
    
-   Python 3.8 or later: 4.5.4 or later
    

**Tair-py** (recommended)

An enhanced client that is developed for Tair based on redis-py.

**Note**

Alibaba Cloud provides free technical support and responds to your needs in a timely manner even though Alibaba Cloud is under no obligation to do so.

redis-py

A client provided by open source Redis.

Go

**go-redis** (recommended)

go-redis 9.0 or later. If you use a go-redis version earlier than 9.0, an incompatibility error may occur when you connect to a private endpoint. For more information, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#redis-external-sdk-goredis-1101).

**Tair-go** (recommended)

An enhanced client that is developed for Tair based on go-redis.

**Note**

Alibaba Cloud provides free technical support and responds to your needs in a timely manner even though Alibaba Cloud is under no obligation to do so.

go-redis

A well-designed open source client backed by an engaged community.

## Technical support for Tair clients

Tair clients are published to GitHub and related package managers such as NuGet. For more information, see [TairJedis](https://github.com/aliyun/alibabacloud-tairjedis-sdk), [AlibabaCloud.TairSDK](https://github.com/alibaba/AlibabaCloud.TairSDK), [Tair-go](https://github.com/alibaba/tair-go), and [Tair-py](https://github.com/alibaba/tair-py).

Tair provides the following additional technical support for Tair clients.

**Important**

The SLA of Alibaba Cloud does not apply to these technical support services.

-   Maintain the stability of the key features of Tair clients.
    
-   Fix security vulnerabilities.
    
-   Publish best practices and sample code on a regular basis.
    
-   Communicate requirements to the corresponding community and engage users in client optimization.
    

Table 2. Time frames of technical support services for Tair clients

**Category**

**Description**

**Time frame**

Stability issues of key features

-   Crashes caused by Tair clients.
    
-   Vulnerabilities whose Common Vulnerabilities and Exposures (CVE) scores are higher than 7.0.
    
-   Leaks of resources managed by Tair clients.
    

Three business days

Regular fixes

-   Functional errors.
    
-   A lack of specific features.
    

Two weeks

Requirements and feature updates

-   Dependencies of the basic features on the corresponding community.
    
-   Major version upgrades in the corresponding community.
    
-   Personalized requirements such as high-level implementation and establishment of special connections.
    

-   Updates of the basic features depend on the open source community. In theory, for all Tair clients except Jedis, the periodic release of major versions is subject to the community.
    
-   Enterprise-class users can submit personalized requirements to Alibaba Cloud.
