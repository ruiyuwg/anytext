-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class ConsistentHashLoadBalancerSettings (1.22.1) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class ConsistentHashLoadBalancerSettings.

This message defines settings for a consistent hash style load balancer.

Generated from protobuf message `google.cloud.compute.v1.ConsistentHashLoadBalancerSettings`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ http_cookie`

`[ConsistentHashLoadBalancerSettingsHttpCookie](/php/docs/reference/cloud-compute/1.22.1/V1.ConsistentHashLoadBalancerSettingsHttpCookie)`  

Hash is based on HTTP Cookie. This field describes a HTTP cookie that will be used as the hash key for the consistent hash load balancer. If the cookie is not present, it will be generated. This field is applicable if the sessionAffinity is set to HTTP\_COOKIE. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.

`↳ http_header_name`

`string`  

The hash based on the value of the specified header field. This field is applicable if the sessionAffinity is set to HEADER\_FIELD.

`↳ minimum_ring_size`

`int|string`  

The minimum number of virtual nodes to use for the hash ring. Defaults to 1024. Larger ring sizes result in more granular load distributions. If the number of hosts in the load balancing pool is larger than the ring size, each host will be assigned a single virtual node.

### getHttpCookie

Hash is based on HTTP Cookie. This field describes a HTTP cookie that will be used as the hash key for the consistent hash load balancer. If the cookie is not present, it will be generated. This field is applicable if the sessionAffinity is set to HTTP\_COOKIE. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.

**Returns**

**Type**

**Description**

`[ConsistentHashLoadBalancerSettingsHttpCookie](/php/docs/reference/cloud-compute/1.22.1/V1.ConsistentHashLoadBalancerSettingsHttpCookie)|null`

### hasHttpCookie

### clearHttpCookie

### setHttpCookie

Hash is based on HTTP Cookie. This field describes a HTTP cookie that will be used as the hash key for the consistent hash load balancer. If the cookie is not present, it will be generated. This field is applicable if the sessionAffinity is set to HTTP\_COOKIE. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.

**Parameter**

**Name**

**Description**

`var`

`[ConsistentHashLoadBalancerSettingsHttpCookie](/php/docs/reference/cloud-compute/1.22.1/V1.ConsistentHashLoadBalancerSettingsHttpCookie)`  

**Returns**

**Type**

**Description**

`$this`

### getHttpHeaderName

The hash based on the value of the specified header field. This field is applicable if the sessionAffinity is set to HEADER\_FIELD.

**Returns**

**Type**

**Description**

`string`

### hasHttpHeaderName

### clearHttpHeaderName

### setHttpHeaderName

The hash based on the value of the specified header field. This field is applicable if the sessionAffinity is set to HEADER\_FIELD.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMinimumRingSize

The minimum number of virtual nodes to use for the hash ring. Defaults to 1024. Larger ring sizes result in more granular load distributions. If the number of hosts in the load balancing pool is larger than the ring size, each host will be assigned a single virtual node.

**Returns**

**Type**

**Description**

`int|string`

### hasMinimumRingSize

### clearMinimumRingSize

### setMinimumRingSize

The minimum number of virtual nodes to use for the hash ring. Defaults to 1024. Larger ring sizes result in more granular load distributions. If the number of hosts in the load balancing pool is larger than the ring size, each host will be assigned a single virtual node.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
