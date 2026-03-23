DATASOURCE::SLB::LoadBalancerTCPListeners is used to query Classic Load Balancer (CLB) listeners.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::LoadBalancerTCPListeners",
  "Properties": {
    "LoadBalancerId": String,
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

LoadBalancerId

String

Yes

Yes

The ID of the CLB instance.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   LoadBalancerTCPListeners: the CLB listeners.
    
-   ListenerPorts: the ports of the CLB listeners.
    

Property

Type

Description

Constraint

ListenerPorts

List

The ports of the CLB listeners.

None.

LoadBalancerTCPListeners

List

The CLB listeners.

None.

AclType

String

The type of the access control list (ACL).

Valid values:

-   **white**: whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. You can use a whitelist in scenarios where you want to allow access only from specific IP addresses. Risks may arise if the whitelist is improperly configured. After you configure a whitelist, only the IP addresses that are added to the whitelist can access the listener.
    

If you enable a whitelist but do not add an IP address to the whitelist, the listener forwards all requests.

-   **black**: blacklist. All requests from the IP addresses or CIDR blocks in the ACL are not forwarded. You can use a blacklist in scenarios where you want to deny access only from specific IP addresses.
    

If you enable a blacklist but do not add an IP address to the blacklist, the listener forwards all requests.

HealthCheckUri

String

The URI that is used for health checks.

None.

HealthCheckConnectPort

String

The port that is used for health checks.

None.

ConnectionDrain

String

Indicates whether connection draining is enabled.

Valid values:

-   **on**
    
-   **off**
    

AclStatus

String

Indicates whether access control is enabled.

Valid values:

-   **on**
    
-   **off**
    

Description

String

The description of the listener.

None.

AclId

String

The ID of the ACL.

None.

VServerGroupId

String

The ID of the vServer group that is associated with the listener.

None.

Scheduler

String

The scheduling algorithm.

Valid values:

-   **wrr**: weighted round-robin. Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **rr**: round robin. Requests are forwarded to backend servers in sequence.
    
-   **sch**: consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **tch**: consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
    
-   **qch**: consistent hashing that is based on Quick UDP Internet Connections (QUIC) connection IDs. Requests that contain the same QUIC connection ID are distributed to the same backend server.
    

ConnectionDrainTimeout

String

The timeout period of connection draining.

Unit: seconds.

Valid values: **10 to 900**.

HealthCheckType

String

The protocol that is used for health checks.

None.

HealthCheckDomain

String

The domain name that is used for health checks.

None.

MasterSlaveServerGroupId

String

The ID of the primary/secondary server group that is associated with the listener.

None.

HealthCheck

String

Indicates whether the health check feature is enabled.

Valid values:

-   **on**
    
-   **off**
    

ListenerPort

String

The port of the listener.

None.

HealthyThreshold

Integer

The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.

Valid values: **2** to **10**.

EstablishedTimeout

Integer

The timeout period of a connection.

Unit: seconds.

HealthCheckInterval

Integer

The interval between two consecutive health checks.

Unit: seconds.

BackendServerPort

Integer

The port of the backend server.

None.

HealthCheckHttpCode

String

The HTTP status code that indicates a successful health check.

None.

PersistenceTimeout

Integer

Indicates whether session persistence is enabled.

Unit: seconds.

Valid values: **0** to **3600**.

A value of **0** indicates that session persistence is disabled.

UnhealthyThreshold

Integer

The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.

Valid values: **2** to **10**.

Bandwidth

Integer

The maximum bandwidth of the listener.

Unit: Mbit/s.

LoadBalancerId

String

The ID of the CLB instance.

None.

HealthCheckMethod

String

The health check method.

Valid values: **head** or **get**.

HealthCheckConnectTimeout

Integer

The timeout period of a health check.

Unit: seconds.

Valid values: **1** to **300**.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    Description:
      en: The ID of the CLB instance.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::LoadBalancerTCPListeners
    Properties:
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  LoadBalancerTCPListeners:
    Description: The list of load balancer tcp listeners.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerTCPListeners
  ListenerPorts:
    Description: The list of listener ports.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPorts
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the CLB instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::LoadBalancerTCPListeners",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "LoadBalancerTCPListeners": {
      "Description": "The list of load balancer tcp listeners.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerTCPListeners"
        ]
      }
    },
    "ListenerPorts": {
      "Description": "The list of listener ports.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPorts"
        ]
      }
    }
  }
}
                        
```
