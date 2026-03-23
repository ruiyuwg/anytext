Describes the configurations of a specific listener.

## Operation description

This operation queries the configuration of a specified listener, such as its routing type, status, creation timestamp, and port information.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeListener)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeListener)

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

ga:DescribeListener

get

\*Listener

`acs:ga:{#regionId}:{#accountId}:listener/{#listenerId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The ID of the region where the Alibaba Cloud Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.

cn-hangzhou

ListenerId

string

Yes

The ID of the listener that you want to query.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned information.

Description

string

The description of the listener.

Listener

RequestId

string

The request ID.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

State

string

The status of the listener.

-   **configuring**: The listener is being configured.
    
-   **init**: The listener is being initialized.
    
-   **updating**: The listener is being updated.
    
-   **deleting**: The listener is being deleted.
    

active

CreateTime

string

The timestamp that indicates when the listener was created. Unit: milliseconds.

1577786252000

PortRanges

array<object>

The listener port information.

object

The listener port information.

FromPort

integer

The start of the listener port range that is used to receive and forward requests to endpoints.

20

ToPort

integer

The end of the listener port range that is used to receive and forward requests to endpoints.

20

BackendPorts

array<object>

The backend port information.

object

The backend port range.

FromPort

string

The start port of the backend server that is used to receive requests.

This parameter is returned only when the listener protocol is HTTPS and the listener port is the same as the service port of the backend server.

80

ToPort

string

The end port of the backend server that is used to receive requests.

80

Certificates

array<object>

The list of SSL certificates.

object

The list of SSL certificates.

Type

string

The type of the certificate.

Only **Server** is returned, which indicates a server-side certificate.

Server

Id

string

The ID of the SSL certificate.

449\*\*\*\*-cn-hangzhou

Protocol

string

The network transport protocol that is used by the listener.

-   **TCP**: TCP.
    
-   **UDP**: UDP.
    
-   **HTTP**: HTTP.
    
-   **HTTPS**: HTTPS.
    

TCP

ListenerId

string

The listener ID.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

ClientAffinity

string

Client affinity.

-   If **NONE** is returned, client affinity is disabled. In this case, requests from the same client may be forwarded to different endpoints.
    
-   If **SOURCE\_IP** is returned, client affinity is enabled. When a client accesses a stateful application, all requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
    

SOURCE\_IP

Name

string

The name of the listener.

Listener

RelatedAcls

array<object>

The access control policy groups that are associated with the listener.

object

The access control policy groups that are associated with the listener.

AclId

string

The ID of the access control list (ACL) that is associated with the listener.

123

Status

string

Indicates whether the access control feature is enabled.

-   **Associated**: The access control feature is enabled.
    

Associated

AclType

string

The type of the ACL.

-   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists are suitable for applications that allow access only from specific IP addresses. If you enable a whitelist but do not add an IP address to the ACL, the GA listener does not forward requests.
    
-   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists are suitable for applications that deny access from specific IP addresses. If you enable a blacklist but do not add an IP address to the ACL, the GA listener forwards all requests.
    

This parameter is returned when an ACL is associated with the listener.

white

AcceleratorId

string

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

ProxyProtocol `deprecated`

boolean

Indicates whether the proxy protocol is used to preserve client IP addresses.

-   **true**: The proxy protocol is used to preserve client IP addresses. After this feature is enabled, you can view the original IP addresses of clients on the backend service.
    
-   **false**: The proxy protocol is not used to preserve client IP addresses.
    

false

XForwardedForConfig

object

The configurations of the `X-Forwarded-For` headers.

XForwardedForGaIdEnabled

boolean

Indicates whether the `GA-ID` header is used to retrieve the ID of the GA instance.

-   **true**: yes.
    
-   **false**: no.
    

**Note**

This parameter is available only for HTTP and HTTPS listeners.

false

XForwardedForGaApEnabled

boolean

Indicates whether the `GA-AP` header is used to retrieve information about the acceleration region.

-   **true**: yes.
    
-   **false**: no.
    

**Note**

This parameter is available only for HTTP and HTTPS listeners.

false

XForwardedForProtoEnabled

boolean

Indicates whether the `GA-X-Forward-Proto` header is used to retrieve the listener protocol of the GA instance.

-   **true**: yes.
    
-   **false**: no.
    

**Note**

This parameter is available only for HTTP and HTTPS listeners.

false

XForwardedForPortEnabled

boolean

Indicates whether the `GA-X-Forward-Port` header is used to retrieve the listener port of the GA instance.

-   **true**: yes.
    
-   **false**: no.
    

**Note**

This parameter is available only for HTTP and HTTPS listeners.

false

XRealIpEnabled

boolean

Indicates whether the `X-Real-IP` header is used to retrieve the real IP addresses of clients.

-   **true**: yes.
    
-   **false**: no.
    

**Note**

This parameter is available only for HTTP and HTTPS listeners.

false

SecurityPolicyId

string

The ID of the security policy.

-   **tls\_cipher\_policy\_1\_0**
    
    -   Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2.
        
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
        
-   **tls\_cipher\_policy\_1\_1**
    
    -   Supported TLS versions: TLS 1.1 and TLS 1.2.
        
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
        
-   **tls\_cipher\_policy\_1\_2**
    
    -   Supported TLS versions: TLS 1.2.
        
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
        
-   **tls\_cipher\_policy\_1\_2\_strict**
    
    -   Supported TLS versions: TLS 1.2.
        
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
        
-   **tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3**
    
    -   Supported TLS versions: TLS 1.2 and TLS 1.3.
        
    -   Supported cipher suites: TLS\_AES\_128\_GCM\_SHA256, TLS\_AES\_256\_GCM\_SHA384, TLS\_CHACHA20\_POLY1305\_SHA256, TLS\_AES\_128\_CCM\_SHA256, TLS\_AES\_128\_CCM\_8\_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
        

**Note**

This parameter is available only for HTTPS listeners.

tls\_cipher\_policy\_1\_0

Type

string

The routing type of the listener.

-   **Standard**: intelligent routing.
    
-   **CustomRouting**: custom routing.
    

Standard

ServiceId

string

The ID of the service that manages the instance.

**Note**

This parameter is returned only when **ServiceManaged** is set to **True**.

ALB

ServiceManaged

boolean

Indicates whether the instance is a managed instance. Valid values:

-   **true**: The instance is a managed instance.
    
-   **false**: The instance is not a managed instance.
    

true

ServiceManagedInfos

array<object>

The actions that you can perform on the managed instance.

**Note**

-   This parameter is returned only when **ServiceManaged** is set to **True**.
    
-   When the instance is in a managed state, you cannot perform some operations on the instance.
    

object

The actions that you can perform on the managed instance.

Action

string

The name of the action on the managed instance. Valid values:

-   **Create**: Create an instance.
    
-   **Update**: Update the current instance.
    
-   **Delete**: Delete the current instance.
    
-   **Associate**: Associate the instance with other resources.
    
-   **UserUnmanaged**: Unmanage the instance.
    
-   **CreateChild**: Create a child resource in the instance.
    

Update

ChildType

string

The type of the child resource. Valid values:

-   **Listener**: listener.
    
-   **IpSet**: acceleration region.
    
-   **EndpointGroup**: endpoint group.
    
-   **ForwardingRule**: forwarding rule.
    
-   **Endpoint**: endpoint.
    
-   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
    
-   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
    

**Note**

This parameter is returned only when **Action** is set to **CreateChild**.

Listener

IsManaged

boolean

Indicates whether the specified action is managed. Valid values:

-   **true**: The specified action is managed. You cannot perform the specified action on the managed instance.
    
-   **false**: The specified action is not managed. You can perform the specified action on the managed instance.
    

false

IdleTimeout

integer

The timeout period for idle connections. Unit: seconds.

900

RequestTimeout

integer

The timeout period for HTTP or HTTPS requests. Unit: seconds.

**Note**

This parameter is available only for HTTP and HTTPS listeners. If a backend server does not respond within the timeout period, GA returns an HTTP 504 error to the client.

60

HttpVersion

string

The maximum version of the HTTP protocol. Valid values:

-   **http3**: HTTP/3.
    
-   **http2**: HTTP/2.
    
-   **http1.1**: HTTP/1.1.
    

**Note**

This parameter is available only for HTTPS listeners.

http2

## Examples

Success response

`JSON` format

```
{
  "Description": "Listener",
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8\t",
  "State": "active",
  "CreateTime": "1577786252000",
  "PortRanges": [
    {
      "FromPort": 20,
      "ToPort": 20
    }
  ],
  "BackendPorts": [
    {
      "FromPort": "80",
      "ToPort": "80"
    }
  ],
  "Certificates": [
    {
      "Type": "Server",
      "Id": "449****-cn-hangzhou"
    }
  ],
  "Protocol": "TCP",
  "ListenerId": "lsr-bp1bpn0kn908w4nbw****",
  "ClientAffinity": "SOURCE_IP",
  "Name": "Listener",
  "RelatedAcls": [
    {
      "AclId": "123",
      "Status": "Associated"
    }
  ],
  "AclType": "white",
  "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
  "ProxyProtocol": false,
  "XForwardedForConfig": {
    "XForwardedForGaIdEnabled": false,
    "XForwardedForGaApEnabled": false,
    "XForwardedForProtoEnabled": false,
    "XForwardedForPortEnabled": false,
    "XRealIpEnabled": false
  },
  "SecurityPolicyId": "tls_cipher_policy_1_0",
  "Type": "Standard",
  "ServiceId": "ALB",
  "ServiceManaged": true,
  "ServiceManagedInfos": [
    {
      "Action": "Update",
      "ChildType": "Listener",
      "IsManaged": false
    }
  ],
  "IdleTimeout": 900,
  "RequestTimeout": 60,
  "HttpVersion": "http2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NotExist.Listener

listener %s is not exist

The listener %s does not exist.

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/DescribeListener#workbench-doc-change-demo) for a complete list.
