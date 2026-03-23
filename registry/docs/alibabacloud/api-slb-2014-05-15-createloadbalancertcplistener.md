Creates a TCP listener.

## Operation description

**Note**

Newly created listeners are in the **stopped** state. After a listener is created, call the [StartLoadBalancerListener](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-startloadbalancerlistener) operation to enable the listener to forward network traffic.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateLoadBalancerTCPListener)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateLoadBalancerTCPListener)

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

slb:CreateLoadBalancerTCPListener

create

AccessControlList

`acs:slb:{#regionId}:{#accountId}:acl/{#AclId}`

\*LoadBalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

-   slb:tag
-   slb:tag
-   slb:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The ID of the region where the Classic Load Balancer (CLB) instance is deployed.

For the most recent region list, refer to [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones) or call the [DescribeRegions](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-describeregions) operation the retrieve the information.

cn-hangzhou

LoadBalancerId

string

Yes

The ID of the CLB instance.

lb-bp1b6c719dfa08ex\*\*\*\*

ListenerPort

integer

Yes

The frontend port used by the CLB instance.

Valid values: **1** to **65535**.

80

BackendServerPort

integer

No

The backend port used by the CLB instance.

Valid values: **1** to **65535**.

If the **VServerGroupId** parameter is not set, this parameter is required.

80

Tag

array<object>

No

The tags.

object

No

Key

string

No

The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be at most 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestValue

Bandwidth

integer

Yes

The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:

-   **\-1**: For a pay-by-data-transfer Internet-facing CLB instance, this value can be set to -1, which specifies unlimited bandwidth.
    
-   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of the maximum bandwidth values that you set for all listeners cannot exceed the maximum bandwidth of the CLB instance.
    

\-1

Scheduler

string

No

The scheduling algorithm. Valid values:

-   **wrr** (default): Backend servers with higher weights receive more requests than those with lower weights.
    
-   **rr**: Requests are distributed to backend servers in sequence.
    
-   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
    

**Note**

Only high-performance CLB instances support the **sch** and **tch** consistent hashing algorithms.

wrr

PersistenceTimeout

integer

No

The timeout period of session persistence. Unit: seconds

Valid values: **0 to 3600**

Default value: **0**. If the default value is used, the system disables session persistence.

0

EstablishedTimeout

integer

No

The timeout period of a connection. Unit: seconds

Valid values: **10** to **900**.

500

HealthyThreshold

integer

No

The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.

Valid values: **2** to **10**

4

UnhealthyThreshold

integer

No

The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.

Valid values: **2** to **10**

4

HealthCheckConnectTimeout

integer

No

The maximum timeout period of a health check response. Unit: seconds

Valid values: **1** to **300**

Default value: **5**

100

HealthCheckConnectPort

integer

No

The port that is used for health checks.

Valid values: **1** to **65535**.

If this parameter is not set, the backend port specified by **BackendServerPort** is used for health checks.

80

healthCheckInterval

integer

No

The interval between two consecutive health checks. Unit: seconds.

Valid values: **1** to **50**.

3

HealthCheckDomain

string

No

The domain name that you want to use for health checks. Valid values:

-   **$\_ip**: the private IP address of a backend server. If you do not set the HealthCheckDomain parameter or set the parameter to $\_ip, the CLB instance uses the private IP address of each backend server for health checks.
    
-   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
    

172.XX.XX.6

HealthCheckURI

string

No

The URI that is used for health checks. The URI must be 1 to 80 characters in length, and can contain only digits, letters, hyphens (-), forward slashes (/), periods (.), percent signs (%), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).

You can set this parameter when the TCP listener requires HTTP health checks. If you do not set this parameter, TCP health checks are performed.

/test/index.html

HealthCheckHttpCode

string

No

The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,). Valid values:

-   **http\_2xx**(default)
    
-   **http\_3xx**
    
-   **http\_4xx**
    
-   **http\_5xx**
    

http\_2xx,http\_3xx

HealthCheckType

string

No

The type of health checks. Valid values:

-   **tcp** (default)
    
-   **http**
    

tcp

VServerGroupId

string

No

The ID of the vServer group.

rsp-cige6j\*\*\*\*

MasterSlaveServerGroupId

string

No

The ID of the primary/secondary server group.

**Note**

You cannot set both VServerGroupId and MasterSlaveServerGroupId.

rsp-0bfucw\*\*\*\*

AclId

string

No

The ID of the network ACL that is associated with the listener.

**Note**

If **AclStatus** is set to **on**, this parameter is required.

acl-uf60jwfiv6\*\*\*\*\*\*

AclType

string

No

The type of the ACL. Valid values:

-   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application.
    
    Your service may be adversely affected if the whitelist is not properly configured.
    
    If a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener. If a whitelist is configured but no IP address is added to the whitelist, the listener forwards all requests.
    
-   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
    
    If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
    

**Note**

If **AclStatus** is set to **on**, this parameter is required.

black

AclStatus

string

No

Specifies whether to enable access control. Valid values:

-   **on**: yes
    
-   **off** (default): no
    

off

Description

string

No

The name of the listener.

The name must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

tcp\_80

ConnectionDrain

string

No

Specifies whether to enable connection draining. Valid values:

-   **on**: yes
    
-   **off**: no
    

off

ConnectionDrainTimeout

integer

No

The timeout period of connection draining. Unit: seconds.

Valid values: **10** to **900**.

**Note**

This parameter is required if **ConnectionDrain** is set to **on**.

300

ProxyProtocolV2Enabled

boolean

No

Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:

-   **true**: yes
    
-   **false** (default): no
    

false

HealthCheckSwitch

string

No

Specifies whether to enable the health check feature. Valid values:

-   **on** (default): yes
    
-   **off**: no
    

on

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameterValue.SpecNotSupport

The loadBalancer of shared spec does not support the parameter value, %s.

400

OperationNotSupport.Acl

The cloud box instance does not support acl.

400

InvalidParameterValue.RegionNotSupport

The region does not support the parameter value, %s.

400

Abs.VServerGroupIdAndMasterSlaveServerGroupId.MissMatch

The parameters VServerGroupId or MasterSlaveServerGroupId miss match.

400

IpVersionConflict

The ip version of this LoadBalancer and the Acl is conflict.

400

InvalidParameterValue.ZoneNotSupport

The zone does not support the parameter value, %s.

400

ListenerProcessing

A previous configuration of the listener is pending, please try again later.

400

AclNotExist

Acl does not exist.

400

InvalidParameter.ListenerPortConflict

There is conflict listener port exists.

400

InvalidParameter.ZoneNotSupport

The zone does not support the parameter %s.

400

InvalidParam.VServerGroupId

The specified VServerGroupId is invalid.

400

MissingParam.HealthCheckConnectPort

The parameter HealthCheckConnectPort is required.

400

InvalidParam.ListenerPort

The specified ListenerPort is invalid.

400

InvalidParam.StartPort

The specified StartPort is invalid.

400

InvalidParamSize.PortRange

The size of param PortRange is invalid.

400

InvalidParam.EndPort

The specified EndPort is invalid.

400

Duplicated.AclEntry

%s.

%s

400

OperationUnsupported.SetAccessControl

The singleTunnel/anyTunnel loadbalancer does not support config AccessControlList.

400

InvalidParam.PortRange

The specified PortRange is invalid.

400

InvalidParameter.RegionNotSupport

The region does not support the parameter: %s.

400

LbNotSupportTcpssl

You cannot create a TCP SSL type listener for the specified load balancer.

400

LbSupportTcpsslOnly

The specified load balancer supports TCP SSL type listener only.

400

ListenerNotSupportRule

You cannot create a rule for the specified listener.

You cannot create a rule for the specified listener.

400

ListenerPortConflict

The specified ListenerPort is conflict with other listener.

400

ResourceNotFound.VServerGroup

%s.

400

IllegalParam.FailoverThreshold

The parameter FailoverThreshold is illegal.

400

IllegalParam.FailoverStrategy

The parameter FailoverStrategy is illegal.

400

MasterSlaveServerConflict

The servers are conflict for MasterSlaveGroup.

400

OperationDenied.HealthCheckClosedForMasterSlaveMode

The operation is denied because of HealthCheckClosedForMasterSlaveMode.

400

IllegalParam.HealthCheck

The param of HelathCheck is illegal.

400

Mismatch.SlbSpecTypeAndListenerProtocol

The SlbSpecType and ListenerProtocol are mismatched.

400

OperationDenied.FullNatModeNotAllowed

The operation is not allowed because of FullNatModeNotAllowed.

400

OperationDenied.OnlyIpv4SlbSupport

The operation is not allowed because of OnlyIpv4SlbSupport.

400

SpecNotSupportParameter

The instance with share spec does not support FullNatEnabled parameter.

400

InvalidParam.TagValue

%s.

400

InvalidParam.TagKey

%s.

400

SizeLimitExceeded.Tag

%s.

400

MissingParam.TagKey

The param MissingParam.TagKey is missing.

400

MissingParameter

The BackendServerPort or VServerGroupId is required at lease one.

400

AclListenerOverLimit

This acl has reached the limit of binding to listeners.

400

QuotaLimitExceeds.AclAttachedToListener

The number of Acl bound listeners has reached the quota limit

400

QuotaLimitExceeds.TotalAclEntry

The number of Acl entries has reached the quota limit.

400

QuotaLimitExceeds.AclListenerOverLimit

This acl has reached the limit of binding to listeners.

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/CreateLoadBalancerTCPListener#workbench-doc-change-demo) for a complete list.
