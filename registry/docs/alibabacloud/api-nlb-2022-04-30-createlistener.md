Creates a TCP, UDP, or TCP/SSL listener for a Network Load Balancer (NLB) instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateListener)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateListener)

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

nlb:CreateListener

create

\*ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/{#ServerGroupId}`

SecurityPolicy

`acs:nlb:{#regionId}:{#accountId}:securitypolicy/{#SecurityPolicyId}`

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadbalancerId}`

-   nlb:ListenerProtocol
-   nlb:SecurityPolicyId

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ListenerProtocol

string

Yes

The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.

TCP

ListenerPort

integer

Yes

The listener port. Valid values: **0** to **65535**.

A value of **0** specifies that all ports are used. If you set the value to **0**, you must also specify **StartPort** and **EndPort**.

80

ListenerDescription

string

No

The name of the listener.

The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (\_), and hyphens (-).

tcp\_80

LoadBalancerId

string

Yes

The ID of the NLB instance.

nlb-83ckzc8d4xlp8o\*\*\*\*

ServerGroupId

string

Yes

The ID of the server group.

**Note**

-   If **TCP** is selected for **ListenerProtocol**, you can select a server group whose backend protocol is **TCP** or **TCP\_UDP**. You cannot select a server group whose backend protocol is **UDP**.
    
-   If **UDP** is selected for **ListenerProtocol**, you can select a server group whose backend protocol is **UDP** or **TCP\_UDP**. You cannot select a server group whose backend protocol is **TCP**.
    
-   If **TCPSSL** is selected for **ListenerProtocol**, you can select a server group whose backend protocol is **TCP** and for which the client IP address retention feature is **disabled**. You cannot select a server group whose backend protocol is **TCP** and for which the client IP address retention feature is **enabled**, or a server group whose backend protocol is **UDP** or **TCP\_UDP**.
    

sgp-ppdpc14gdm3x4o\*\*\*\*

IdleTimeout

integer

No

The timeout period of an idle connection. Unit: seconds.

-   If **ListenerProtocol** is set to **TCP** or **TCPSSL**, the value must be in the range of **10** to **900**. Default value: **900**.
    
-   If **ListenerProtocol** is set to **UDP**, the value must be in the range of **10** to **90**. Default value: **90**.
    

900

SecurityPolicyId

string

No

The ID of the security policy. System security policies and custom security policies are supported.

-   Valid values for system policies: **tls\_cipher\_policy\_1\_0** (default), **tls\_cipher\_policy\_1\_1**, **tls\_cipher\_policy\_1\_2**, **tls\_cipher\_policy\_1\_2\_strict**, and **tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3**.
    
-   Custom security policies: the ID of the custom security policy.
    
    -   For more information about how to create a custom policy, see [CreateSecurityPolicy](/help/en/slb/api-createsecuritypolicy-nlb).
        
    -   For more information about how to query security policies, see [ListSecurityPolicy](/help/en/slb/api-listsecuritypolicy).
        

**Note**

This parameter takes effect only for TCP/SSL listeners.

tls\_cipher\_policy\_1\_0

CertificateIds

array

No

The server certificates. This parameter takes effect only for TCP/SSL listeners.

**Note**

You can specify only one server certificate.

string

No

The server certificates. This parameter takes effect only for TCP/SSL listeners.

**Note**

You can specify only one server certificate.

123157\*\*\*\*\*\*

CaCertificateIds

array

No

The CA certificates. This parameter takes effect only for TCP/SSL listeners.

**Note**

You can specify only one CA certificate.

string

No

The CA certificates. This parameter takes effect only for TCP/SSL listeners.

**Note**

You can specify only one CA certificate.

139a00\*\*\*\*\*\*

CaEnabled

boolean

No

Specifies whether to enable mutual authentication. Valid values:

-   **true**
    
-   **false** (default)
    

false

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a regular request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can create a client token to make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The ID of the region where the NLB instance is deployed.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ProxyProtocolEnabled

boolean

No

Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:

-   **true**
    
-   **false** (default)
    

false

SecSensorEnabled

boolean

No

Specifies whether to enable fine-grained monitoring. Valid values:

-   **true**
    
-   **false** (default)
    

false

AlpnEnabled

boolean

No

Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:

-   **true**
    
-   **false** (default)
    

false

AlpnPolicy

string

No

The ALPN policy. Valid values:

-   **HTTP1Only**: uses only HTTP 1.x. The priority is HTTP 1.1 > HTTP 1.0.
    
-   **HTTP2Only**: uses only HTTP 2.0.
    
-   **HTTP2Optional**: prefers HTTP 1.x, but also supports HTTP 2.0. The priority is HTTP 1.1 > HTTP 1.0 > HTTP 2.0.
    
-   **HTTP2Preferred**: prefers HTTP 2.0, but also supports HTTP 1.x. The priority is HTTP 2.0 > HTTP 1.1 > HTTP 1.0.
    

**Note**

This parameter is required if AlpnEnabled is set to **true**.

HTTP1Only

StartPort

integer

No

The start port for the listener port range. Valid values: **1** to **65535**.

**Note**

This parameter is required if **ListenerPort** is set to **0**.

244

EndPort

integer

No

The end port for the listener port range. Valid values: **1** to **65535**. The value of the end port must be greater than the value of the start port.

**Note**

This parameter is required if **ListenerPort** is set to **0**.

566

Cps

integer

No

The maximum number of new connections that can be created per second on the listener in each zone (VIP). Valid values: **0** to **1000000**. **0** indicates that the number of new connections is unlimited.

100

Mss

integer

No

The maximum segment size (MSS) of TCP packets. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the MSS value of TCP packets is not modified.

**Note**

This parameter is available only for listeners that use TCP or TCP/SSL.

43

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

The tag key. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (\_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).

You can specify up to 20 tags in each call.

KeyTest

Value

string

No

The tag value. The tag value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (\_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).

You can specify up to 20 tags in each call.

Test

ProxyProtocolV2Config

object

No

The configuration of the Proxy protocol to carry the VpcId, PrivateLinkEpId, and PrivateLinkEpsId information to backend servers.

Ppv2VpcIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to carry the VpcId to backend servers. Valid values:

-   **true**
    
-   **false** (default)
    

false

Ppv2PrivateLinkEpIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to carry the Ppv2PrivateLinkEpId to backend servers. Valid values:

-   **true**
    
-   **false** (default)
    

false

Ppv2PrivateLinkEpsIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to carry the PrivateLinkEpsId to backend servers. Valid values:

-   **true**
    
-   **false** (default)
    

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RpcResponse

RequestId

string

The request ID.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

ListenerId

string

The listener ID.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@80

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "ListenerId": "lsn-bp1bpn0kn908w4nbw****@80",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Conflict.Port

The Port \[%s\] is conflict.

The specified port conflicts with an existing port

400

IllegalParam.MssConflictWithUdpAndGeneve

The param of MssConflictWithUdpAndGeneve is illegal.

When the Mss value is not null, the listenerProtocol cannot be udp or GENEVE.

400

QuotaExceeded.%s

The quota of %s is exceeded, usage %s/%s.

400

SystemBusy

System is busy, please try again later.

400

Mismatch.VpcId

The VpcId is mismatched for %s and %s.

The VpcId is mismatched for %s and %s.

400

ResourceNotEnough.%s

The specified resource of %s is not enough.

400

Conflict.Lock

The Lock \[%s\] is conflict.

The specific resource is conflict.

400

IllegalParam.AnyPortListenerConflictWithNonAnyPortServerGroup

The param of AnyPortListenerConflictWithNonAnyPortServerGroup is illegal.

400

IncorrectStatus.loadbalancer

The status of loadbalancer \[%s\] is incorrect.

The current operation cannot be performed on the load balancer as its status is unavailable. Please check if the load balancer is currently undergoing any other operations.

400

ResourceNotFound.Certificate

The specified resource %s is not found.

400

IllegalParam.ServerGroupId

The param of ServerGroupId is illegal.

The parameter ServerGroupId is invalid. Check the input parameters.

400

IllegalParam.NonAnyPortListenerConflictWithAnyPortServerGroup

The param of NonAnyPortListenerConflictWithAnyPortServerGroup is illegal.

The listening port configuration conflicts with the full port forwarding switch.

400

MissingParam.Certificate

The param of certificate is missing.

The parameter Certificate is missing.

400

IllegalParam.Port

The param of Port is illegal.

The port range in the request is invalid. Check the input parameters.

400

QuotaExceeded.QuotaInsufficient

The quota of %s is exceeded, usage %s/%s.

The quota is insufficient, currently used %s/%s. Please modify the quota size in the quota center.

400

Mismatch.Protocol

The Protocol is mismatched for %s and %s.

The protocols of the listener and server group do not match.

400

ResourceNotEnough.CaCertificateApiCount

The specified resource of CaCertificateApiCount is not enough.

400

MissingParam.ServerGroupId

The param of ServerGroupId is missing.

The parameter ServerGroupId is missing, please check the input parameters.

400

IllegalParam.ListenerDescription

The parameter ListenerDescription of listener is illegal.

The listener description does not meet the input requirements. Modify the listener description based on the details in the error.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

IllegalParam.IdleTimeout

The param of IdleTimeout is illegal.

The parameter connection idle timeout configuration is invalid.

400

MissingParam.%s

The parameter of %s is missing.

400

IllegalParam

The param of %s is illegal.

400

IllegalParamSize.certificateIds

The param size of certificateIds or caCertificateIds is illegal.

you can only have one certificate id. check whether the id is entered repeatedly.

400

DuplicatedParam.listener

The param of any port listener is duplicated.

Only one listener of the anyport type can be created. Check the input parameters.

400

IllegalParam.PreserveClientIpSwitch

The server group associated with the tcpssl listener does not support enabling PreserveClientIp.

The server group associated with the tcpssl listener does not support enabling PreserveClientIp.

400

OperationDenied.RegionNotSupportHDMonitor

The operation is not allowed because of RegionNotSupportHDMonitor.

The current region does not support second-level monitoring.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.VSwitch

The specified resource of vSwitch is not found.

The specified vSwitch resource was not found. Please check the input parameters.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.serverGroup

The specified resource of serverGroup is not found.

The specified resource of serverGroup is not found. Please check the input parameters.

404

ResourceNotFound.CaCertificate

The specified resource of CaCertificate is not found.

Ca certificate does not exist, please check the input parameters.

404

ResourceNotFound.HdMonitorConfigNotExist

The specified resource of HdMonitorConfigNotExist is not found.

HdMonitorConfig does not exist, check the input parameters.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateListener#workbench-doc-change-demo) for a complete list.
