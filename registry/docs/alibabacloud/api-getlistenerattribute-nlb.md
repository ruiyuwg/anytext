Queries the details of a Network Load Balancer (NLB) listener.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetListenerAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetListenerAttribute)

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

nlb:GetListenerAttribute

get

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ListenerId

string

Yes

The listener ID.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@233

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The region ID of the NLB instance.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The operation to query the attributes of a listener.

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

RegionId

string

The ID of the region where the NLB instance is deployed.

cn-hangzhou

LoadBalancerId

string

The ID of the NLB instance.

nlb-83ckzc8d4xlp8o\*\*\*\*

ListenerId

string

The ID of the listener.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@233

ListenerProtocol

string

The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.

TCPSSL

ListenerPort

integer

The listening port. Valid values: **0** to **65535**. A value of **0** specifies all ports. If you set the value to **0**, you must also set the **StartPort** and **EndPort** parameters.

233

StartPort

string

The first port in the listening port range. Valid values: **0** to **65535**.

233

EndPort

string

The last port in the listening port range. Valid values: **0** to **65535**. The number of the last port must be smaller than that of the first port.

455

ListenerDescription

string

The name of the listener.

The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (\_), and hyphens (-).

tcpssl\_443

ServerGroupId

string

The ID of the server group.

sgp-ppdpc14gdm3x4o\*\*\*\*

IdleTimeout

integer

The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **900**.

900

SecurityPolicyId

string

The ID of the security policy. System security policies and custom security policies are supported.

-   Valid values: **tls\_cipher\_policy\_1\_0**, **tls\_cipher\_policy\_1\_1**, **tls\_cipher\_policy\_1\_2**, **tls\_cipher\_policy\_1\_2\_strict**, and **tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3**.
    
-   Custom security policy: the ID of the custom security policy.
    
    -   For more information about how to create a custom security policy, see [CreateSecurityPolicy](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createsecuritypolicy) .
        
    -   For more information about how to query security policies, see [ListSecurityPolicy](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-listsecuritypolicy) .
        

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

tls\_cipher\_policy\_1\_0

CertificateIds

array

The server certificates. Only one server certificate is supported.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

string

The server certificates.

123157\*\*\*\*\*\*

CaCertificateIds

array

The CA certificates. Only one CA certificate is supported.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

string

The CA certificates. Only one CA certificate is supported.

**Note**

This parameter takes effect only for listeners that use SSL over TCP.

139a00\*\*\*\*\*\*

CaEnabled

boolean

Indicates whether mutual authentication is enabled. Valid values:

-   **true**: yes
    
-   **false**: no
    

false

AlpnEnabled

boolean

Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:

-   **true**: yes
    
-   **false**: no
    

false

AlpnPolicy

string

The ALPN policy. Valid values:

-   **HTTP1Only**
    
-   **HTTP2Only**
    
-   **HTTP2Preferred**
    
-   **HTTP2Optional**
    

HTTP1Only

ProxyProtocolEnabled

boolean

Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers. Valid values:

-   **true**: yes
    
-   **false**: no
    

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

SecSensorEnabled

boolean

Indicates whether fine-grained monitoring is enabled. Valid values:

-   **true**: yes
    
-   **false**: no
    

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

Cps

integer

The maximum number of new connections per second supported by the listener in each zone (virtual IP address). Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.

1000

Mss

integer

The size of the largest TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged.

**Note**

This parameter is supported only by listeners that use SSL over TCP.

166

Tags

array<object>

The tags.

object

The tags for the execution.

TagKey

string

The tag key.

ac-cus-tag-4

TagValue

string

The tag value.

ON

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "RegionId": "cn-hangzhou",
  "LoadBalancerId": "nlb-83ckzc8d4xlp8o****",
  "ListenerId": "lsn-bp1bpn0kn908w4nbw****@233",
  "ListenerProtocol": "TCPSSL",
  "ListenerPort": 233,
  "StartPort": "233",
  "EndPort": "455",
  "ListenerDescription": "tcpssl_443",
  "ServerGroupId": "sgp-ppdpc14gdm3x4o****",
  "IdleTimeout": 900,
  "SecurityPolicyId": "tls_cipher_policy_1_0",
  "CertificateIds": [
    "123157******"
  ],
  "CaCertificateIds": [
    "139a00******"
  ],
  "CaEnabled": false,
  "AlpnEnabled": false,
  "AlpnPolicy": "HTTP1Only",
  "ProxyProtocolEnabled": false,
  "ProxyProtocolV2Config": {
    "Ppv2VpcIdEnabled": false,
    "Ppv2PrivateLinkEpIdEnabled": false,
    "Ppv2PrivateLinkEpsIdEnabled": false
  },
  "SecSensorEnabled": false,
  "ListenerStatus": "Running",
  "Cps": 1000,
  "Mss": 166,
  "Tags": [
    {
      "TagKey": "ac-cus-tag-4",
      "TagValue": "ON"
    }
  ]
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

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.listener

The specified resource %s is not found.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerAttribute#workbench-doc-change-demo) for a complete list.
