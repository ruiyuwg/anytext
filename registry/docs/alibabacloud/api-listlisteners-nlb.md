Queries listeners added to a Network Load Balancer (NLB) instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/ListListeners)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/ListListeners)

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

nlb:ListListeners

get

\*Listener

`acs:nlb:{#regionId}:{#accountId}:listener/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ListenerIds

array

No

The listener IDs. You can specify up to 20 listeners.

string

No

The listener ID. You can specify up to 20 listeners.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@443

LoadBalancerIds

array

No

The IDs of the NLB instances. You can specify up to 20 instances.

string

No

The ID of the NLB instance. You can specify up to 20 instances.

nlb-83ckzc8d4xlp8o\*\*\*\*

ListenerProtocol

string

No

The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.

TCPSSL

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of the tag. You can specify up to 20 tags. The tag key cannot be an empty string.

It can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

env

Value

string

No

The value of the tag. You can specify up to 20 tags. The tag value can be an empty string.

It can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

product

NextToken

string

No

The pagination token used to specify a particular page of results. Valid values:

-   Leave this parameter empty for the first query or the only query.
    
-   Set this parameter to the value of NextToken obtained from the previous query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

No

The number of entries to return in each call. Valid values: **1** to **100**. Default value: **20**

20

RegionId

string

No

The ID of the region where the NLB instance is deployed.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SecSensorEnabled

string

No

Specifies whether to enable fine-grained monitoring. Valid values:

-   **true**
    
-   **false**
    

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The operation to query listeners.

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

Listeners

array<object>

The listeners.

array<object>

The listeners.

Tags

array<object>

A list of tags.

object

A list of tags.

Key

string

The tag key.

Created

Value

string

The tag value.

TF

LoadBalancerId

string

The CLB instance ID.

nlb-83ckzc8d4xlp8o\*\*\*\*

ListenerId

string

The listener ID.

lsn-ga6sjjcll6ou34l1et\*\*\*\*

ListenerProtocol

string

The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.

TCPSSL

ListenerPort

integer

The information about the listener port of your server.

443

StartPort

string

The first port in the listener port range.

233

EndPort

string

The last port in the listener port range.

455

ListenerDescription

string

The name of the listener.

The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (\_), and hyphens (-).

tcpssl\_443

ServerGroupId

string

The server group ID.

sgp-ppdpc14gdm3x4o\*\*\*\*

IdleTimeout

integer

The timeout period of idle connections. Unit: seconds. Valid values: **1** to **900**. Default value: **900**.

900

SecurityPolicyId

string

The ID of the security policy.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

tls\_cipher\_policy\_1\_1

CertificateIds

array

The server certificate.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

string

The server certificate.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

123157\*\*\*\*\*\*

CaCertificateIds

array

A list of CA certificates.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

string

A list of CA certificates.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

139a00\*\*\*\*\*\*

CaEnabled

boolean

Indicates whether mutual authentication is enabled. Valid values:

-   **true**
    
-   **false**
    

false

ListenerStatus

string

The status of the listener. Valid values:

-   **Provisioning**: The listener is being created.
    
-   **Running**: The listener is running.
    
-   **Configuring**: The listener is being configured.
    
-   **Stopping**: The listener is being stopped.
    
-   **Stopped**: The listener is stopped.
    
-   **Starting**: The listener is being started.
    
-   **Deleting**: The listener is being deleted.
    
-   **Deleted**: The listener is deleted.
    

Running

RegionId

string

The region ID of the NLB instance.

cn-hangzhou

AlpnEnabled

boolean

Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:

-   **true**
    
-   **false**
    

false

AlpnPolicy

string

The ALPN policy. Valid values:

-   **HTTP1Only**
    
-   **HTTP2Only**
    
-   **HTTP2Preferred**
    
-   **HTTP2Optional**
    

HTTP1Only

SecSensorEnabled

boolean

Indicates whether fine-grained monitoring is enabled. Valid values:

-   **true**
    
-   **false**
    

false

ProxyProtocolEnabled

boolean

Indicates whether the Proxy protocol passes source client IP addresses to backend servers. Valid values:

-   **true**
    
-   **false**
    

false

ProxyProtocolV2Config

object

Indicates whether the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.

Ppv2VpcIdEnabled

boolean

Indicates whether the Proxy protocol passes the VpcId parameter to backend servers. Valid values:

-   **true**
    
-   **false**
    

false

Ppv2PrivateLinkEpIdEnabled

boolean

Indicates whether the Proxy protocol passes the PrivateLinkEpId parameter to backend servers. Valid values:

-   **true**
    
-   **false**
    

false

Ppv2PrivateLinkEpsIdEnabled

boolean

Indicates whether the Proxy protocol passes the PrivateLinkEpsId parameter to backend servers. Valid values:

-   **true**
    
-   **false**
    

false

Cps

integer

The maximum number of new connections per second supported by the listener in each zone (virtual IP address). Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.

1000

Mss

integer

The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the Mss value of TCP packets remains unchanged.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

200

TotalCount

integer

The number of entries returned.

4

NextToken

string

The token that is used for the next query. Valid values:

-   If **NextToken** is empty, it indicates that no next query is to be sent.
    
-   If a value of **NextToken** is returned, the value is the token used for the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

The number of entries returned per page.

20

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "Listeners": [
    {
      "Tags": [
        {
          "Key": "Created",
          "Value": "TF"
        }
      ],
      "LoadBalancerId": "nlb-83ckzc8d4xlp8o****",
      "ListenerId": "lsn-ga6sjjcll6ou34l1et****",
      "ListenerProtocol": "TCPSSL",
      "ListenerPort": 443,
      "StartPort": "233",
      "EndPort": "455",
      "ListenerDescription": "tcpssl_443",
      "ServerGroupId": "sgp-ppdpc14gdm3x4o****",
      "IdleTimeout": 900,
      "SecurityPolicyId": "tls_cipher_policy_1_1",
      "CertificateIds": [
        "123157******"
      ],
      "CaCertificateIds": [
        "139a00******"
      ],
      "CaEnabled": false,
      "ListenerStatus": "Running",
      "RegionId": "cn-hangzhou",
      "AlpnEnabled": false,
      "AlpnPolicy": "HTTP1Only",
      "SecSensorEnabled": false,
      "ProxyProtocolEnabled": false,
      "ProxyProtocolV2Config": {
        "Ppv2VpcIdEnabled": false,
        "Ppv2PrivateLinkEpIdEnabled": false,
        "Ppv2PrivateLinkEpsIdEnabled": false
      },
      "Cps": 1000,
      "Mss": 200
    }
  ],
  "TotalCount": 4,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "MaxResults": 20
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

SystemBusy

System is busy, please try again later.

400

IllegalParam

The param of %s is illegal.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/ListListeners#workbench-doc-change-demo) for a complete list.
