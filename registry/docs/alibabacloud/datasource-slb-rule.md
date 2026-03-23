DATASOURCE::SLB::Rule is used to query the configuration details of a forwarding rule.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::Rule",
  "Properties": {
    "RuleId": String,
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

RuleId

String

Yes

Yes

The ID of the forwarding rule.

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

-   CookieTimeout: the timeout period of the cookie.
    
-   Cookie: the cookie configured for the server.
    
-   VserverGroupId: the ID of the server group associated with the forwarding rule.
    
-   ListenerPort: the frontend listener port used by the Server Load Balancer (SLB) instance.
    
-   HealthCheckInterval: the interval between two consecutive health checks.
    
-   UnhealthyThreshold: the number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
    
-   Scheduler: the scheduling algorithm.
    
-   HealthCheckUri: the Uniform Resource Identifier (URI) used for health checks.
    
-   RuleId: the ID of the forwarding rule.
    
-   HealthCheck: indicates whether the health check feature is enabled.
    
-   LoadBalancerId: the ID of the SLB instance.
    
-   HealthCheckTimeout: the timeout period for a health check response. If a backend Elastic Compute Service (ECS) instance does not respond within the specified timeout period, the ECS instance fails the health check.
    
-   Url: the path of the forwarding rule.
    
-   StickySession: indicates whether the session persistence feature is enabled.
    
-   HealthCheckConnectPort: the port used for health checks on backend servers.
    
-   HealthyThreshold: the number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
    
-   HealthCheckDomain: the domain name used for health checks**.**
    
-   ListenerSync: indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
    
-   StickySessionType: the method of handling the cookie.
    
-   Domain: the domain name of the forwarding rule.
    
-   HealthCheckHttpCode: the HTTP status codes that indicate a successful health check. Multiple HTTP status codes are separated by commas.
    
-   RuleName: the name of the forwarding rule.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RuleId:
    Type: String
    Description:
      en: The ID of the forwarding rule.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::Rule
    Properties:
      RuleId:
        Ref: RuleId
Outputs:
  CookieTimeout:
    Description: The timeout period of a cookie.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CookieTimeout
  Cookie:
    Description: The cookie to be configured on the backend server.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Cookie
  VserverGroupId:
    Description: The ID of the vServer group that is associated with the forwarding rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VserverGroupId
  ListenerPort:
    Description: The listener port that is used by the SLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPort
  HealthCheckInterval:
    Description: The time interval between two consecutive health checks.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckInterval
  UnhealthyThreshold:
    Description: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UnhealthyThreshold
  Scheduler:
    Description: The scheduling algorithm.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Scheduler
  HealthCheckUri:
    Description: The URI that is used for health checks.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckUri
  RuleId:
    Description: The ID of the forwarding rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RuleId
  HealthCheck:
    Description: Specifies whether to enable health checks.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheck
  LoadBalancerId:
    Description: The ID of the SLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerId
  HealthCheckTimeout:
    Description: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckTimeout
  Url:
    Description: The URL that is configured in the forwarding rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Url
  StickySession:
    Description: 'Indicates whether session persistence is enabled.  Valid values: on and off.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StickySession
  HealthCheckConnectPort:
    Description: 'The port of the backend server that is used for health checks. Valid values: 1 to 65535.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckConnectPort
  HealthyThreshold:
    Description: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthyThreshold
  HealthCheckDomain:
    Description: 'The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckDomain
  ListenerSync:
    Description: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerSync
  StickySessionType:
    Description: The method that is used to handle a cookie.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StickySessionType
  Domain:
    Description: The domain name that is configured in the forwarding rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Domain
  HealthCheckHttpCode:
    Description: 'The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckHttpCode
  RuleName:
    Description: The name of the forwarding rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RuleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RuleId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the forwarding rule."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::Rule",
      "Properties": {
        "RuleId": {
          "Ref": "RuleId"
        }
      }
    }
  },
  "Outputs": {
    "CookieTimeout": {
      "Description": "The timeout period of a cookie.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CookieTimeout"
        ]
      }
    },
    "Cookie": {
      "Description": "The cookie to be configured on the backend server.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Cookie"
        ]
      }
    },
    "VserverGroupId": {
      "Description": "The ID of the vServer group that is associated with the forwarding rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VserverGroupId"
        ]
      }
    },
    "ListenerPort": {
      "Description": "The listener port that is used by the SLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPort"
        ]
      }
    },
    "HealthCheckInterval": {
      "Description": "The time interval between two consecutive health checks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckInterval"
        ]
      }
    },
    "UnhealthyThreshold": {
      "Description": "The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UnhealthyThreshold"
        ]
      }
    },
    "Scheduler": {
      "Description": "The scheduling algorithm.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Scheduler"
        ]
      }
    },
    "HealthCheckUri": {
      "Description": "The URI that is used for health checks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckUri"
        ]
      }
    },
    "RuleId": {
      "Description": "The ID of the forwarding rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RuleId"
        ]
      }
    },
    "HealthCheck": {
      "Description": "Specifies whether to enable health checks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheck"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the SLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerId"
        ]
      }
    },
    "HealthCheckTimeout": {
      "Description": "The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckTimeout"
        ]
      }
    },
    "Url": {
      "Description": "The URL that is configured in the forwarding rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Url"
        ]
      }
    },
    "StickySession": {
      "Description": "Indicates whether session persistence is enabled.  Valid values: on and off.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StickySession"
        ]
      }
    },
    "HealthCheckConnectPort": {
      "Description": "The port of the backend server that is used for health checks. Valid values: 1 to 65535.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckConnectPort"
        ]
      }
    },
    "HealthyThreshold": {
      "Description": "The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthyThreshold"
        ]
      }
    },
    "HealthCheckDomain": {
      "Description": "The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckDomain"
        ]
      }
    },
    "ListenerSync": {
      "Description": "Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerSync"
        ]
      }
    },
    "StickySessionType": {
      "Description": "The method that is used to handle a cookie.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StickySessionType"
        ]
      }
    },
    "Domain": {
      "Description": "The domain name that is configured in the forwarding rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Domain"
        ]
      }
    },
    "HealthCheckHttpCode": {
      "Description": "The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckHttpCode"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the forwarding rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RuleName"
        ]
      }
    }
  }
}
                        
```
