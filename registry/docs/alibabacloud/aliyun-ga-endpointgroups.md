ALIYUN::GA::EndpointGroups is used to create multiple endpoint groups at a time.

## Syntax

```
{
  "Type": "ALIYUN::GA::EndpointGroups",
  "Properties": {
    "AcceleratorId": String,
    "EndpointGroupConfigurations": List,
    "ListenerId": String
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

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance.

None.

EndpointGroupConfigurations

List

Yes

No

The configurations of the endpoint groups.

For more information, see [EndpointGroupConfigurations properties](#8c925b92a6bqg).

ListenerId

String

Yes

No

The listener ID.

**Note**

If the listener protocol is **HTTP** or **HTTPS**, you can create only one endpoint group at a time.

## EndpointGroupConfigurations syntax

```
"EndpointGroupConfigurations": [
  {
    "HealthCheckIntervalSeconds": Integer,
    "TrafficPercentage": Integer,
    "EndpointGroupName": String,
    "HealthCheckPath": String,
    "ThresholdCount": Integer,
    "HealthCheckEnabled": Boolean,
    "EndpointRequestProtocol": String,
    "PortOverrides": List,
    "EndpointGroupRegion": String,
    "EndpointGroupDescription": String,
    "EnableClientIPPreservationToa": Boolean,
    "HealthCheckProtocol": String,
    "HealthCheckPort": Integer,
    "EndpointConfigurations": List,
    "Tags": List,
    "EndpointGroupType": String,
    "EnableClientIPPreservationProxyProtocol": Boolean
  }
]
```

## EndpointGroupConfigurations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EndpointGroupRegion

String

Yes

No

The region ID of the endpoint group.

None.

EndpointGroupName

String

No

No

The name of the endpoint group.

None.

EndpointRequestProtocol

String

No

No

The protocol that is used by the backend service.

Valid values:

-   **HTTP**
    
-   **HTTPS**
    

EndpointGroupDescription

String

No

No

The description of the endpoint group.

None.

EnableClientIPPreservationToa

Boolean

No

No

Specifies whether to use the TCP Option Address (TOA) module to preserve client IP addresses.

Valid values:

-   **true**
    
-   **false** (default)
    

EndpointConfigurations

List

No

No

The configurations of the endpoints.

For more information, see [EndpointConfigurations properties](#aa66e5bf00mua).

EndpointGroupType

String

No

No

The type of the endpoint group.

Valid values:

-   **default**
    
-   **virtual**
    

EnableClientIPPreservationProxyProtocol

Boolean

No

No

Specifies whether to use the proxy protocol to preserve client IP addresses.

Valid values:

-   **true**
    
-   **false** (default)
    

HealthCheckIntervalSeconds

Integer

No

No

The interval at which the system performs health checks.

Unit: seconds.

HealthCheckPath

String

No

No

The path based on which the system performs health checks.

None.

HealthCheckEnabled

Boolean

No

No

Specifies whether to enable the health check feature.

Valid values:

-   **true**
    
-   **false**
    

HealthCheckProtocol

String

No

No

The protocol over which the system performs health checks.

-   **tcp**
    
-   **http**
    
-   **https**
    

HealthCheckPort

Integer

No

No

The port that you want to use for health checks.

None.

PortOverrides

List

No

No

The port mappings.

For more information, see [PortOverrides properties](#761876a6836yo).

TrafficPercentage

Integer

No

No

The traffic ratio of the endpoint group when the listener is associated with multiple endpoint groups.

None.

ThresholdCount

Integer

No

No

The number of times that a healthy endpoint must consecutively fail health checks before it is declared unhealthy.

None.

Tags

List

No

No

The tags of the endpoint group.

For more information, see [Tags properties](#760571b85a11z).

## PortOverrides syntax

```
"PortOverrides": [
  {
    "ListenerPort": Integer,
    "EndpointPort": Integer
  }
]
```

## PortOverrides properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EndpointPort

Integer

Yes

No

The endpoint port.

None.

ListenerPort

Integer

Yes

No

The listener port.

None.

## EndpointConfigurations syntax

```
"EndpointConfigurations": [
  {
    "Type": String,
    "Endpoint": String,
    "SubAddress": String,
    "Weight": Integer
  }
]
```

## EndpointConfigurations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Endpoint

String

Yes

No

The IP address, domain name, or instance ID that corresponds to the value of the Type property.

None.

Type

String

Yes

No

The endpoint type.

Valid values:

-   **Domain**: a custom domain name
    
-   **Ip**: a custom IP address
    
-   **PublicIp**: a public IP address provided by Alibaba Cloud
    
-   **ECS**: an Elastic Compute Service (ECS) instance
    
-   **SLB**: a Server Load Balancer (SLB) instance
    
-   **ALB**: an Application Load Balancer (ALB) instance
    
-   **OSS**: an Object Storage Service (OSS) bucket
    
-   **ENI**: an elastic network interface (ENI)
    
-   **NLB**: a Network Load Balancer (NLB) instance
    

Weight

Integer

Yes

No

The weight of the endpoint.

None.

SubAddress

String

No

No

The private IP address of the ENI.

None.

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

No

No

The tag key of the endpoint group.

None.

Value

String

No

No

The tag value of the endpoint group.

None.

## Return values

Fn::GetAtt

EndpointGroupIds: the IDs of the endpoint groups.

## Examples

**Note**

You must change the masked values of properties, such as the AcceleratorId and ListenerId properties, based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::EndpointGroups
    Properties:
      EndpointGroupConfigurations:
        - EndpointGroupName: test382
          EndpointGroupDescription: test_endpoint_group_382
          EndpointGroupRegion: cn-beijing
          TrafficPercentage: 100
          HealthCheckEnabled: false
          HealthCheckIntervalSeconds: 0
          EndpointGroupType: default
          EndpointConfigurations:
            - EnableProxyProtocol: false
              Type: OSS
              EnableClientIPPreservation: false
              Endpoint: beijing-test-delete
              Weight: 255
          Tags:
            - Value: c2
              Key: c2
            - Value: d1
              Key: d1
      AcceleratorId: ga-bp1odcab8tmno0hdq****
      ListenerId: lsr-bp1bpn0kn908w4nbw****
Outputs:
  EndpointGroupIds:
    Description: The IDs of the endpoint groups.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - EndpointGroupIds
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::EndpointGroups",
      "Properties": {
        "EndpointGroupConfigurations": [
                {
                    "EndpointGroupName": "test382",
                    "EndpointGroupDescription": "test_endpoint_group_382",
                    "EndpointGroupRegion": "cn-beijing",
                    "TrafficPercentage": 100,
                    "HealthCheckEnabled": false,
                    "HealthCheckIntervalSeconds": 0,
                    "EndpointGroupType": "default",
                    "EndpointConfigurations": [
                        {
                            "EnableProxyProtocol": false,
                            "Type": "OSS",
                            "EnableClientIPPreservation": false,
                            "Endpoint": "beijing-test-delete",
                            "Weight": 255
                        }
                    ],
                    "Tags": [
                        {
                            "Value": "c2",
                            "Key": "c2"
                        },
                        {
                            "Value": "d1",
                            "Key": "d1"
                        }
                    ],
                }
            ],
        "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
        "ListenerId": "lsr-bp1bpn0kn908w4nbw****"
      }
    }
  },
  "Outputs": {
    "EndpointGroupIds": {
      "Description": "The IDs of the endpoint groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "EndpointGroupIds"
        ]
      }
    }
  }
}
                        
```
