DATASOURCE::SLB::LoadBalancerTCPListener is used to query the configurations of a TCP listener.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::LoadBalancerTCPListener",
  "Properties": {
    "ListenerPort": Integer,
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

ListenerPort

Integer

Yes

Yes

The frontend port used by the Classic Load Balancer (CLB) instance.

Valid values: **1** to **65535**.

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

-   VServerGroupId: the ID of the associated server group.
    
-   SynProxy: indicates whether the SYNPROXY module is enabled to mitigate attacks.
    
-   Description: the description of the TCP listener.
    
-   ProxyProtocolV2Enabled: indicates whether the Proxy protocol is used to pass source client IP addresses to backend servers.
    
-   UnhealthyThreshold: the number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
    
-   Scheduler: the scheduling algorithm.
    
-   HealthCheckUri: the URL used for health checks.
    
-   HealthCheck: indicates whether the health check feature is enabled.
    
-   LoadBalancerId: the ID of the CLB instance.
    
-   BackendServerPort: the backend port used by the CLB instance.
    
-   ConnectionDrainTimeout: the timeout period of connection draining.
    
-   PersistenceTimeout: the timeout period of session persistence.
    
-   HealthCheckConnectPort: the port used for health checks.
    
-   HealthCheckMethod: the method used for health checks.
    
-   Bandwidth: the peak bandwidth of the TCP listener.
    
-   HealthCheckHttpCode: the HTTP status code that indicates a successful health check.
    
-   EstablishedTimeout: the timeout period of a connection.
    
-   ListenerPort: the frontend port used by the CLB instance.
    
-   HealthCheckInterval: the time interval between two consecutive health checks.
    
-   AclId: the ID of the access control list (ACL) associated with the TCP listener.
    
-   HealthCheckConnectTimeout: the timeout period.
    
-   ConnectionDrain: indicates whether the connection draining feature is enabled.
    
-   AclStatus: indicates whether the ACL feature is enabled.
    
-   HealthyThreshold: the number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
    
-   HealthCheckDomain: the domain name used for health checks.
    
-   MasterSlaveServerGroupId: the ID of the associated primary/secondary server group.
    
-   AclType: the type of the ACL.
    
-   HealthCheckType: the health check type of the TCP listener.
    
-   AclIds: the IDs of the ACLs.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ListenerPort:
    Type: Number
    Description:
      en: 'The frontend port used by the CLB instance.Valid values: 1 to 65535.'
    Required: true
  LoadBalancerId:
    Type: String
    Description:
      en: The ID of the CLB instance.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::LoadBalancerTCPListener
    Properties:
      ListenerPort:
        Ref: ListenerPort
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  VServerGroupId:
    Description: The ID of the associated server group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VServerGroupId
  SynProxy:
    Description: Indicates whether the SynProxy feature of CLB is enabled for protection.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SynProxy
  Description:
    Description: The description of the listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  ProxyProtocolV2Enabled:
    Description: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ProxyProtocolV2Enabled
  UnhealthyThreshold:
    Description: 'The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.'
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
    Description: 'The URL that is used for health checks. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckUri
  HealthCheck:
    Description: Indicates whether the health check feature is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheck
  LoadBalancerId:
    Description: The ID of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerId
  BackendServerPort:
    Description: The backend port used by the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BackendServerPort
  ConnectionDrainTimeout:
    Description: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ConnectionDrainTimeout
  PersistenceTimeout:
    Description: The timeout period of session persistence.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PersistenceTimeout
  HealthCheckConnectPort:
    Description: The port that is used for health checks.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckConnectPort
  HealthCheckMethod:
    Description: The health check method.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckMethod
  Bandwidth:
    Description: 'The maximum bandwidth of the listener. Unit: Mbit/s.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Bandwidth
  HealthCheckHttpCode:
    Description: The HTTP status code for a successful health check.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckHttpCode
  EstablishedTimeout:
    Description: The timeout period of a connection.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EstablishedTimeout
  ListenerPort:
    Description: The frontend port used by the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPort
  HealthCheckInterval:
    Description: 'The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckInterval
  AclId:
    Description: The ID of the network ACL that is associated with the listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclId
  HealthCheckConnectTimeout:
    Description: 'The timeout period. Unit: seconds.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckConnectTimeout
  ConnectionDrain:
    Description: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ConnectionDrain
  AclStatus:
    Description: 'Indicates whether access control is enabled. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclStatus
  HealthyThreshold:
    Description: 'The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthyThreshold
  HealthCheckDomain:
    Description: The domain name that is used for health checks.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckDomain
  MasterSlaveServerGroupId:
    Description: The ID of the primary/secondary server group that is associated with the listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MasterSlaveServerGroupId
  AclType:
    Description: The type of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclType
  HealthCheckType:
    Description: The health check method that is used by the TCP listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HealthCheckType
  AclIds:
    Description: The ID list of the network ACL that is associated with the listener.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ListenerPort": {
      "Type": "Number",
      "Description": {
        "en": "The frontend port used by the CLB instance.Valid values: 1 to 65535."
      },
      "Required": true
    },
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
      "Type": "DATASOURCE::SLB::LoadBalancerTCPListener",
      "Properties": {
        "ListenerPort": {
          "Ref": "ListenerPort"
        },
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "VServerGroupId": {
      "Description": "The ID of the associated server group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VServerGroupId"
        ]
      }
    },
    "SynProxy": {
      "Description": "Indicates whether the SynProxy feature of CLB is enabled for protection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SynProxy"
        ]
      }
    },
    "Description": {
      "Description": "The description of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "ProxyProtocolV2Enabled": {
      "Description": "Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ProxyProtocolV2Enabled"
        ]
      }
    },
    "UnhealthyThreshold": {
      "Description": "The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.",
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
      "Description": "The URL that is used for health checks. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckUri"
        ]
      }
    },
    "HealthCheck": {
      "Description": "Indicates whether the health check feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheck"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerId"
        ]
      }
    },
    "BackendServerPort": {
      "Description": "The backend port used by the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BackendServerPort"
        ]
      }
    },
    "ConnectionDrainTimeout": {
      "Description": "The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConnectionDrainTimeout"
        ]
      }
    },
    "PersistenceTimeout": {
      "Description": "The timeout period of session persistence.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PersistenceTimeout"
        ]
      }
    },
    "HealthCheckConnectPort": {
      "Description": "The port that is used for health checks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckConnectPort"
        ]
      }
    },
    "HealthCheckMethod": {
      "Description": "The health check method.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckMethod"
        ]
      }
    },
    "Bandwidth": {
      "Description": "The maximum bandwidth of the listener. Unit: Mbit/s.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bandwidth"
        ]
      }
    },
    "HealthCheckHttpCode": {
      "Description": "The HTTP status code for a successful health check.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckHttpCode"
        ]
      }
    },
    "EstablishedTimeout": {
      "Description": "The timeout period of a connection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EstablishedTimeout"
        ]
      }
    },
    "ListenerPort": {
      "Description": "The frontend port used by the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPort"
        ]
      }
    },
    "HealthCheckInterval": {
      "Description": "The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckInterval"
        ]
      }
    },
    "AclId": {
      "Description": "The ID of the network ACL that is associated with the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclId"
        ]
      }
    },
    "HealthCheckConnectTimeout": {
      "Description": "The timeout period. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckConnectTimeout"
        ]
      }
    },
    "ConnectionDrain": {
      "Description": "Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConnectionDrain"
        ]
      }
    },
    "AclStatus": {
      "Description": "Indicates whether access control is enabled. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclStatus"
        ]
      }
    },
    "HealthyThreshold": {
      "Description": "The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthyThreshold"
        ]
      }
    },
    "HealthCheckDomain": {
      "Description": "The domain name that is used for health checks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckDomain"
        ]
      }
    },
    "MasterSlaveServerGroupId": {
      "Description": "The ID of the primary/secondary server group that is associated with the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MasterSlaveServerGroupId"
        ]
      }
    },
    "AclType": {
      "Description": "The type of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclType"
        ]
      }
    },
    "HealthCheckType": {
      "Description": "The health check method that is used by the TCP listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HealthCheckType"
        ]
      }
    },
    "AclIds": {
      "Description": "The ID list of the network ACL that is associated with the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclIds"
        ]
      }
    }
  }
}
                        
```
