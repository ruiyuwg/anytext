ALIYUN::SLB::Rule is used to add forwarding rules to an HTTP or HTTPS listener.

## Syntax

```
{
  "Type": "ALIYUN::SLB::Rule",
  "Properties": {
    "ListenerPort": Integer,
    "RuleList": List,
    "LoadBalancerId": String,
    "ListenerProtocol": String
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

Integer

Yes

No

The frontend listener port that is used by the Server Load Balancer (SLB) instance.

Valid values: 1 to 65535.

RuleList

List

Yes

No

The forwarding rules that you want to add to the listener.

You can create up to 10 forwarding rules in a request.

Each forwarding rule contains the following properties:

-   RuleName
    
-   Domain
    
-   Url
    
-   VServerGroupId
    

You must specify at least one of Domain and URL.

**Note**

The combined value of Domain and URL must be unique within a listener.

LoadBalancerId

String

Yes

No

The ID of the SLB instance.

None.

ListenerProtocol

String

No

No

The frontend protocol that is used by the SLB instance.

None.

## RuleList syntax

```
"RuleList": [
  {
    "Url": String,
    "Domain": String,
    "VServerGroupId": String,
    "RuleName": String,
    "AdvancedSettings": Map
  }
]
```

## RuleList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Url

String

No

No

The path that you want to specify in the forwarding rule.

-   The path must be 2 to 80 characters in length.
    
-   The path must start with a forward slash (/) and can contain letters, digits, and the following special characters:
    
    `- / . % ? # &`
    

Domain

String

No

No

The request domain name that you want to associate with the forwarding rule.

None.

VServerGroupId

String

Yes

No

The ID of the vServer group that you want to associate with the forwarding rule.

None.

RuleName

String

Yes

No

The name of the forwarding rule.

The name must be 1 to 40 characters in length and can contain letters, digits, and the following special characters:

`- / . _`.

Forwarding rule names must be unique within a listener.

AdvancedSettings

Map

No

No

The advanced configurations of the server.

None.

## AdvancedSettings syntax

```
"AdvancedSettings": [{ 
  "Cookie": String,
  "StickySession": String,
  "HealthCheckConnectPort": Integer,
  "StickySessionType": String,
  "HealthCheckTimeout": Integer,
  "HealthCheck": String,
  "HealthCheckURI": String,
  "CookieTimeout": Integer,
  "HealthCheckHttpCode": String,
  "HealthyThreshold": Integer,
  "UnhealthyThreshold": Integer,
  "Scheduler": String,
  "HealthCheckDomain": String,
  "ListenerSync": String,
  "HealthCheckInterval": Integer 
}]
```

## AdvancedSettings Properties

Property

Type

Required

Editable

Description

Constraint

Cookie

String

No

No

The cookie that is configured on the server.

The name must be 1 to 200 characters in length and can contain only `ASCII` letters and digits. It cannot contain commas (,), semicolons (;), spaces, and cannot start with dollar signs `($)`.

You must specify this property when **StickySession** is set to **on** and **StickySessionType** is set to **server**.

StickySession

String

No

No

Specifies whether to enable session persistence.   

Valid values:

-   on: enables session persistence.
    
-   off: disables session persistence.
    

**Note**

You must specify this property when **ListenerSync** is set to **off**. If you set ListenerSync to **on**, the session persistence configuration of the listener is used.

HealthCheckConnectPort

Integer

No

No

The backend port that you want to use for health checks.  

Valid values: 1 to 65535.

**Note**

This property takes effect when **HealthCheck** is set to **on**. If you leave HealthCheckConnectPort empty and set **HealthCheck** to **on**, the backend port configuration of the listener is used.

HealthCheck

String

No

No

Specifies whether to enable health checks.

Valid values:

-   on: enables health checks.
    
-   off: disables health checks.
    

**Note**

This property takes effect when **ListenerSync** is set to **off**. If you set ListenerSync to **on**, the health check configuration of the listener is used.

HealthCheckURI

String

No

No

The Uniform Resource Identifier (URI) that you want to use for health checks.

This property takes effect when **HealthCheck** is set to **on**.

CookieTimeout

Integer

No

No

The timeout period of the cookie.

Valid values: **1 to 86400**. Unit: seconds.

**Note**

You must specify this property when **StickySession** is set to **on** and **StickySessionType** is set to **insert**.

HealthCheckHttpCode

String

No

No

The HTTP status code for a successful health check.

Separate multiple status codes with commas (,).

Valid values: http\_2xx, http\_3xx, http\_4xx, and http\_5xx.

**Note**

This property takes effect when **HealthCheck** is set to **on**.

HealthyThreshold

Integer

No

No

The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.

In this case, the health status changes from **failed** to **successful**. Valid values: **2** to **10**.

**Note**

This property takes effect when **HealthCheck** is set to **on**.

UnhealthyThreshold

Integer

No

No

The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.

In this case, the health status changes from **successful** to **failed**. Valid values: **2** to **10**.

**Note**

This property takes effect when **HealthCheck** is set to **on**.

Scheduler

String

No

No

The scheduling algorithm.

Valid values:

-   **wrr** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **rr**: Requests are distributed to backend servers in sequence.
    

**Note**

This property takes effect when **ListenerSync** is set to **off**. If you set ListenerSync to **on**, the scheduling algorithm configuration of the listener is used.

HealthCheckDomain

String

No

No

The domain name that you want to use for health checks.

Valid values:

-   **$\_ip**: the private IP address of a backend server. If you set this property to $\_ip or leave this property empty, SLB uses the private IP address of each backend server as the domain name for health checks.
    
-   **domain**: a domain name. The domain name must be 1 to 80 characters in length and can contain letters, digits, periods (.), and hyphens (-).
    

**Note**

This property takes effect when **HealthCheck** is set to **on**.

ListenerSync

String

No

No

Specifies whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.

Valid values:

-   **off**: The forwarding rule does not use the preceding configurations of the listener. You can specify custom health check and session persistence configurations for the forwarding rule.
    
-   **on**: The forwarding rule uses the preceding configurations of the listener.
    

HealthCheckInterval

Integer

No

No

The interval between two consecutive health checks.

Valid values: **1** to **50**. Unit: seconds.

**Note**

This property takes effect when **HealthCheck** is set to **on**.

HealthCheckTimeout

Integer

No

No

The timeout period for a health check response.   

If a backend server, such as an Elastic Compute Service (ECS) instance, does not send a response within the specified period of time, the health check fails. Unit: seconds. Valid values: 1 to 300.

StickySessionType

String

No

No

The method that you want to use to handle a cookie.   

Valid values:

-   insert: inserts a cookie.
    
-   server: rewrites a cookie.
    

## Return values

Fn::GetAtt

Rules: details of the forwarding rules.

## Examples

**YAML** **format**

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Rule:
    Type: ALIYUN::SLB::Rule
    Properties:
      ListenerPort:
        Ref: ListenerPort
      RuleList:
        Fn::Split:
          - ','
          - Ref: RuleList
          - Ref: RuleList
      LoadBalancerId:
        Ref: LoadBalancerId
Parameters:
  ListenerPort:
    Type: Number
    Description: |-
      The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
      1-65535
    MaxValue: 65535
    MinValue: 1
  RuleList:
    MinLength: 1
    Type: CommaDelimitedList
    Description: The forwarding rules to add.
    MaxLength: 10
  LoadBalancerId:
    Type: String
    Description: The ID of Server Load Balancer instance.
Outputs:
  Rules:
    Description: A list of forwarding rules. Each element of rules contains "RuleId".
    Value:
      Fn::GetAtt:
        - Rule
        - Rules
```

**JSON** **format**

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Rule": {
      "Type": "ALIYUN::SLB::Rule",
      "Properties": {
        "ListenerPort": {
          "Ref": "ListenerPort"
        },
        "RuleList": {
          "Fn::Split": [",", {
            "Ref": "RuleList"
          }, {
            "Ref": "RuleList"
          }]
        },
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Parameters": {
    "ListenerPort": {
      "Type": "Number",
      "Description": "The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:\n1-65535",
      "MaxValue": 65535,
      "MinValue": 1
    },
    "RuleList": {
      "MinLength": 1,
      "Type": "CommaDelimitedList",
      "Description": "The forwarding rules to add.",
      "MaxLength": 10
    },
    "LoadBalancerId": {
      "Type": "String",
      "Description": "The ID of Server Load Balancer instance."
    }
  },
  "Outputs": {
    "Rules": {
      "Description": "A list of forwarding rules. Each element of rules contains \"RuleId\".",
      "Value": {
        "Fn::GetAtt": ["Rule", "Rules"]
      }
    }
  }
}
```
