Call the AddZone operation to create a built-in authoritative zone. The built-in authoritative zone can be a standard zone or an accelerated zone.

## Operation description

Starting from April 30, 2025 (UTC+8), zones added by new users of Alibaba Cloud DNS PrivateZone are set as accelerated zones by default. Starting from April 30, 2026 (UTC+8), all built-in authoritative standard zones will be automatically switched to accelerated zones. After the switch, the number of DNS queries may increase, which can increase your costs. To reduce the increase in DNS queries caused by the absence of a local cache, [enable NSCD for your ECS instances](/help/en/dns/how-can-the-speed-limit-of-ecs-dns-query-requests).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/pvtz/2018-01-01/AddZone)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/pvtz/2018-01-01/AddZone)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

pvtz:AddZone

create

\*Zone

`acs:pvtz::{#accountId}:zone/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the response. Valid values:

-   **zh**: Chinese.
    
-   **en**: English.
    

Default value: **en**.

en

ZoneName

string

No

The name of the zone to add.

example.com

ProxyPattern

string

No

Specifies whether to enable subdomain recursive proxy. Valid values:

-   **ZONE**: Disables the feature. If a DNS query for a subdomain that does not exist under the current domain name is received, an NXDOMAIN error is returned.
    
-   **RECORD**: Enables the feature. If a DNS query for a subdomain that does not exist under the current domain name is received, the query is processed by the forwarding and recursion modules in sequence. The final result is used to respond to the DNS query.
    

Default value: **ZONE**.

ZONE

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmykd63gt\*\*\*\*

ZoneType

string

No

This parameter is not available to users. You do not need to specify this parameter.

CLOUD\_PRODUCT\_ZONE

ZoneTag

string

No

This parameter is not available to users. You do not need to specify this parameter.

BLINK

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

21079fa016944979537637959d09bc

DnsGroup

string

No

The location of the built-in authoritative zone. Valid values:

-   **NORMAL\_ZONE**: Standard zone. DNS responses are cached. If a cache miss occurs, the query is sent to the built-in authoritative standard zone. The time to live (TTL) value affects the time when a DNS record change takes effect. You cannot use custom DNS lines or weighted round-robin.
    
-   **FAST\_ZONE**: Accelerated zone (recommended). DNS queries are directly responded to with the lowest latency. DNS record changes take effect in real time. You can use custom DNS lines and weighted round-robin.
    

Default value: **NORMAL\_ZONE**.

**Note**

The built-in authoritative accelerated zone is located before the cache module. DNS responses are not cached. This may increase the number of DNS queries and your costs.

FAST\_ZONE

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ZoneName

string

The name of the zone.

example.com

ZoneId

string

The unique ID of the zone.

6fc186295683a131f63bb8b0cddc\*\*\*\*

RequestId

string

The unique ID of the request.

54F10A2A-C3CF-59D4-810F-F18DDD93FE20

Success

boolean

Indicates whether the request was successful.

true

## Examples

Success response

`JSON` format

```
{
  "ZoneName": "example.com",
  "ZoneId": "6fc186295683a131f63bb8b0cddc****",
  "RequestId": "54F10A2A-C3CF-59D4-810F-F18DDD93FE20",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/pvtz/2018-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/pvtz/2018-01-01/AddZone#workbench-doc-change-demo) for a complete list.
