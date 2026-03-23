DATASOURCE::SLB::Rules is used to query the forwarding rules that are configured for a listener.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::Rules",
  "Properties": {
    "ListenerPort": String,
    "LoadBalancerId": String,
    "ListenerProtocol": String,
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

ListenerPort

String

Yes

Yes

The frontend listening port that is used by the Server Load Balancer (SLB) instance.

Valid values: 1 to 65535.

LoadBalancerId

String

Yes

Yes

The ID of the SLB instance.

None.

ListenerProtocol

String

No

Yes

The frontend protocol that is used by the SLB instance.

This property must be specified when listeners that use different protocols listen on the same port.

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

-   RuleIds: the IDs of the forwarding rules.
    
-   Rules: details of the forwarding rules.
    

**Property**

**Type**

**Description**

**Constraint**

RuleIds

List

The IDs of the forwarding rules.

None.

Rules

List

Details of the forwarding rules.

None.

HealthCheckHttpCode

String

The HTTP status codes for a successful health check.

Separate multiple HTTP status codes with commas (,).

Valid values:

-   `http_2xx` (default)
    
-   `http_3xx`
    
-   `http_4xx`
    
-   `http_5xx`
    

**Note**

This property takes effect only when HealthCheck is set to on.

HealthCheckUri

String

The Uniform Resource Identifier (URI) that is used for health checks.

**Note**

This property takes effect only when HealthCheck is set to on.

CookieTimeout

String

The timeout period of the cookie.

Valid values: 1 to 86400.

Unit: seconds.

**Note**

This property takes effect only when StickySession is set to on and StickySessionType is set to insert.

RuleId

String

The ID of the forwarding rule.

None.

Url

String

The request path that is specified in the forwarding rule.

None.

ListenerProtocol

String

The frontend protocol that is used by the SLB instance.

None.

HealthCheckTimeout

Integer

The timeout period of a health check response.

If a backend Elastic Compute Service (ECS) instance does not return a health check response within the specified timeout period, the instance fails the health check.

Valid values: 1 to 300.

Unit: seconds.

**Note**

If the value of HealthCheckTimeout is smaller than the value of HealthCheckInterval, the timeout period specified by HealthCheckTimeout becomes invalid, and the value of HealthCheckInterval is used as the timeout period.

This property takes effect only when HealthCheck is set to on.

HealthCheck

String

Indicates whether the health check feature is enabled.

Valid values:

-   on
    
-   off
    

**Note**

This property takes effect only when ListenerSync is set to off. If you set ListenerSync to on, the health check configuration of the listener is used.

ListenerSync

String

Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.

Valid values:

-   on: The forwarding rule uses the configurations of the listener.
    
-   off: The forwarding rule does not use the configurations of the listener. You can specify health check and session persistence configurations for the forwarding rule.
    

UnhealthyThreshold

Integer

The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. When this number is reached, the health check status is changed from successful to failed.

Valid values: 2 to 10.

**Note**

This property takes effect only when HealthCheck is set to on.

HealthyThreshold

Integer

The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. When this number is reached, the health check status is changed from failed to successful.

Valid values: 2 to 10.

**Note**

This property takes effect when HealthCheck is set to on.

HealthCheckInterval

Integer

The interval between two consecutive health checks.

Valid values: 1 to 50.

Unit: seconds.

**Note**

This property takes effect only when HealthCheck is set to on.

HealthCheckConnectPort

Integer

The port that is used for health checks on backend servers.

Valid values: 1 to 65535.

**Note**

This property takes effect only when HealthCheck is set to on. If you leave HealthCheckConnectPort empty and set HealthCheck to on, the backend port configuration of the listener is used by default.

Cookie

String

The cookie that is configured on the backend server.

The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. The cookie cannot contain commas (,), semicolons (;), or spaces. The cookie cannot start with a dollar sign ($).

**Note**

This property takes effect only when StickySession is set to on and StickySessionType is set to server.

VServerGroupId

String

The ID of the vServer group that is associated with the forwarding rule.

None.

Scheduler

String

The scheduling algorithm.

Valid values:

-   wrr (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   rr: Requests are distributed to backend servers in sequence.
    

**Note**

This property takes effect only when ListenerSync is set to off. If you set ListenerSync to on, the scheduling algorithm configuration of the listener is used.

RuleName

String

The name of the forwarding rule.

The name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

**Note**

Forwarding rule names must be unique within a listener.

Domain

String

The domain name that is specified in the forwarding rule.

None.

StickySession

String

Indicates whether session persistence is enabled.

Valid values:

-   on
    
-   off
    

**Note**

-   This property takes effect only when ListenerSync is set to off.
    
-   If you set ListenerSync to on, the session persistence configuration of the listener is used.
    

StickySessionType

String

The method that is used to handle a cookie.

Valid values:

-   insert: inserts a cookie. SLB inserts the SERVERID cookie into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client carries the cookie, and SLB forwards this request to the recorded backend server.
    
-   server: rewrites a cookie. When SLB detects a user-defined cookie, SLB overwrites the original cookie with the user-defined cookie. The next request from the client carries the user-defined cookie, and SLB forwards this request to the recorded backend server.
    

**Note**

This property takes effect only when StickySession is set to on.

HealthCheckDomain

String

The domain name that is used for health checks.

Valid values:

-   $\_ip: the private IP address of the backend server. If you set this property to $\_ip or leave this property empty, SLB uses the private IP address of each backend server as the domain name for health checks.
    
-   domain: a domain name. The domain name must be 1 to 80 characters in length and can contain letters, digits, periods (.), and hyphens (-).
    

**Note**

This property takes effect only when HealthCheck is set to on.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Description: The ID of the CLB instance.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::Rules
    Properties:
      ListenerPort: 3443
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  RuleIds:
    Description: The list of rule IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RuleIds
  Rules:
    Description: The list of rules.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Rules
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "AssociationProperty":"ALIYUN::SLB::Instance::InstanceId",
      "Description": "The ID of the CLB instance."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::Rules",
      "Properties": {
        "ListenerPort": 3443,
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "RuleIds": {
      "Description": "The list of rule IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RuleIds"
        ]
      }
    },
    "Rules": {
      "Description": "The list of rules.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Rules"
        ]
      }
    }
  }
}
```
