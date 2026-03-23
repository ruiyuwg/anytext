Updates the attributes of a listener, such as the name and the idle connection timeout period.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateListenerAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateListenerAttribute)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

nlb:UpdateListenerAttribute

update

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

-   nlb:SecurityPolicyId

none

## Request parameters

Parameter

Type

Required

Description

Example

ListenerId

string

Yes

The listener ID.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@443

ListenerDescription

string

No

The name of the listener.

The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (\_), and hyphens (-).

tcpssl\_443

ServerGroupId

string

No

The server group ID.

**Note**

-   If the listener uses **TCP**, you can specify server groups whose protocol is **TCP** or **TCP\_UDP**. **UDP** server groups are not supported.
    
-   If the listener uses **UDP**, you can specify server groups whose protocol is **UDP** or **TCP\_UDP**. **TCP** server groups are not supported.
    
-   If the listener uses **TCPSSL**, you can specify server groups whose protocol is **TCP** and whose **client IP preservation is disabled**. **TCP** server groups for which **client IP preservation is enabled** and server groups whose protocol is **UDP** or **TCP\_UDP** are not supported.
    

sgp-ppdpc14gdm3x4o\*\*\*\*

SecurityPolicyId

string

No

The ID of the security policy.

**Note** This parameter takes effect only for listeners that use SSL over TCP.

tls\_cipher\_policy\_1\_1

CertificateIds

array

No

The server certificate. Only one server certificate is supported.

**Note** This parameter takes effect only for listeners that use SSL over TCP.

CertificateId

string

No

The server certificate. Only one server certificate is supported.

**Note** This parameter takes effect only for listeners that use SSL over TCP.

12315790212\_166f8204689\_1714763408\_70998\*\*\*\*

CaCertificateIds

array

No

The CA certificate. You can specify only one CA certificate.

**Note** This parameter takes effect only for listeners that use SSL over TCP.

CaCertificateId

string

No

The CA certificate. You can specify only one CA certificate.

**Note** This parameter takes effect only for listeners that use SSL over TCP.

139a00604ad-cn-east-hangzh\*\*\*\*

CaEnabled

boolean

No

Specifies whether to enable mutual authentication. Valid values:

-   **true**
-   **false**

false

IdleTimeout

integer

No

The timeout period for idle connections. Unit: seconds

-   If the listener uses **TCP** or **TCPSSL**, you can set this parameter to a value ranging from **10** to **900**. Default value: **900**
-   If the listener uses **UDP**, you can set this parameter to a value ranging from **10** to **20**. Default value: **20**

900

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
-   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.

**Note** If you do not set this parameter, the value of **RequestId** is used.\*\*\*\* The value of **RequestId** is different for each request.

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

Specifies whether to use the Proxy protocol to pass the client IP address to the backend server. Valid values:

-   **true**
-   **false**

false

SecSensorEnabled

boolean

No

Specifies whether to enable fine-grained monitoring. Valid values:

-   **true**
-   **false**

false

AlpnEnabled

boolean

No

Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:

-   **true**
-   **false**

false

AlpnPolicy

string

No

The name of the ALPN policy. The following are the possible values:

-   **HTTP1Only**: Negotiate only HTTP/1.\*. The ALPN preference list is HTTP/1.1, HTTP/1.0.
-   **HTTP2Only**: Negotiate only HTTP/2. The ALPN preference list is HTTP/2.
-   **HTTP2Optional**: Prefer HTTP/1.\* over HTTP/2. The ALPN preference list is HTTP/1.1, HTTP/1.0, HTTP/2.
-   **HTTP2Preferred**: Prefer HTTP/2 over HTTP/1.\*. The ALPN preference list is HTTP/2, HTTP/1.1, HTTP/1.0.

**Note** This parameter is required if AlpnEnabled is set to true.

HTTP1Only

Cps

integer

No

The maximum number of new connections per second supported by the listener in each zone (virtual IP address). Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.

10000

Mss

integer

No

The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the maximum segment size (MSS) remains unchanged. This parameter is supported only by TCP listeners and listeners that use SSL over TCP.

344

ProxyProtocolV2Config

object

No

Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.

Ppv2VpcIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to pass the VpcId parameter to backend servers. Valid values:

-   **true**
-   **false**

false

Ppv2PrivateLinkEpIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to pass the PrivateLinkEpId parameter to backend servers. Valid values:

-   **true**
-   **false**

false

Ppv2PrivateLinkEpsIdEnabled

boolean

No

Specifies whether to use the Proxy protocol to pass the PrivateLinkEpsId parameter to backend servers. Valid values:

-   **true**
-   **false**

false

## Response parameters

Parameter

Type

Description

Example

object

Updates listener configurations.

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Mismatch.VpcId

The VpcId is mismatched for %s and %s.

The VpcId is mismatched for %s and %s.

400

Conflict.Port

The Port \[%s\] is conflict.

The specified port conflicts with an existing port

400

ResourceNotFound.Certificate

The specified resource %s is not found.

\-

400

IncorrectStatus.listener

The status of listener \[%s\] is incorrect.

The current operation cannot be performed on the listener as its status is unavailable. Please check if the listener is currently undergoing any other operations.

400

IdempotenceSignatureMismatch

The idempotence token of request is same with the prev one, but the signature is different.

The requested idempotent token is the same as the previous one, but the signature is different.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

ResourceAlreadyAssociated.Certificate

The specified resource %s is already associated.

\-

400

IllegalParamSize.certificateIds

The param size of certificateIds or caCertificateIds is illegal.

you can only have one certificate id. check whether the id is entered repeatedly.

400

SystemBusy

System is busy, please try again later.

\-

400

IllegalParam.IdleTimeout

The param of IdleTimeout is illegal.

The parameter connection idle timeout configuration is invalid.

400

OperationDenied.RegionNotSupportHDMonitor

The operation is not allowed because of RegionNotSupportHDMonitor.

The current region does not support second-level monitoring.

400

ResourceNotEnough.CaCertificateApiCount

The specified resource of CaCertificateApiCount is not enough.

\-

400

IllegalParam

The param of %s is illegal.

\-

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.listener

The specified resource %s is not found.

\-

404

ResourceNotFound.HdMonitorConfigNotExist

The specified resource of HdMonitorConfigNotExist is not found.

HdMonitorConfig does not exist, check the input parameters.

404

ResourceNotFound.CaCertificate

The specified resource of CaCertificate is not found.

Ca certificate does not exist, please check the input parameters.

404

ResourceNotFound.securitypolicy

The specified resource of securitypolicy is not found.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2025-02-14#workbench-doc-change-demo)

2024-08-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-08-27#workbench-doc-change-demo)

2024-02-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-02-29#workbench-doc-change-demo)

2024-02-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-02-22#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-02-04#workbench-doc-change-demo)

2024-01-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-01-30#workbench-doc-change-demo)

2024-01-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-01-29#workbench-doc-change-demo)

2024-01-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2024-01-24#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-12-18#workbench-doc-change-demo)

2023-11-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-11-27#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-08-22#workbench-doc-change-demo)

2023-04-04

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateListenerAttribute?updateTime=2023-04-04#workbench-doc-change-demo)
