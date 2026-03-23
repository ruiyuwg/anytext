ALIYUN::GA::EndpointGroup is used to create an endpoint group.

## Syntax

```
{
  "Type": "ALIYUN::GA::EndpointGroup",
  "Properties": {
    "HealthCheckIntervalSeconds": Integer,
    "EndpointGroupRegion": String,
    "TrafficPercentage": Integer,
    "Description": String,
    "HealthCheckPath": String,
    "HealthCheckProtocol": String,
    "ThresholdCount": Integer,
    "HealthCheckPort": Integer,
    "AcceleratorId": String,
    "EndpointConfigurations": List,
    "Name": String,
    "ListenerId": String
    "HealthCheckEnabled": Boolean,
    "EndpointGroupType": String,
    "EndpointRequestProtocol": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

HealthCheckIntervalSeconds

Integer

No

Yes

The interval between consecutive health checks.

Unit: seconds.

EndpointGroupRegion

String

Yes

No

The ID of the region in which the endpoint group resides.

None

TrafficPercentage

Integer

No

Yes

The weight of the endpoint group when the listener is associated with multiple endpoint groups.

None

Description

String

No

Yes

The description of the endpoint group.

None

HealthCheckPath

String

No

Yes

The path to which health check requests are sent.

None

HealthCheckProtocol

String

No

Yes

The protocol over which health check requests are sent.

Valid values:

-   tcp: the TCP protocol.
-   http: the HTTP protocol.
-   https: the HTTPS protocol.

ThresholdCount

Integer

No

Yes

The number of consecutive failed health checks that must be reached before an endpoint is considered unhealthy.

None

HealthCheckPort

Integer

No

Yes

The port that is used for health checks.

None

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance that you want to query.

None

EndpointConfigurations

List

Yes

Yes

The endpoint.

A maximum of four endpoints can be specified.

For more information, see [EndpointConfigurations properties](#section-7cr-5ej-pq4).

Name

String

No

Yes

The name of the endpoint group.

None

ListenerId

String

Yes

No

The ID of the listener.

None

HealthCheckEnabled

Boolean

No

Yes

Specifies whether to enable the health check feature.

Valid values:

-   true: yes. This is the default value.
-   false: no.

EndpointGroupType

String

No

No

The type of the endpoint group.

Valid values:

-   default: a default endpoint group. This is the default value.
-   virtual: a virtual endpoint group.

**Note** Only HTTP and HTTPS listeners support virtual endpoint groups.

EndpointRequestProtocol

String

No

Yes

The protocol that is used by the backend service.

Valid values:

-   HTTP: This is the default value.
-   HTTPS

**Note**

-   You can set this property only if the listener that is associated with the endpoint group uses the HTTP or HTTPS protocol.
-   For an HTTP listener, the protocol used by the backend service must be HTTP.

## EndpointConfigurations syntax

```
"EndpointConfigurations": [
  {
    "Type": String,
    "Endpoint": String,
    "Weight": Integer,
    "EnableClientIPPreservation": Boolean,
    "EnableProxyProtocol": Boolean
  }
]
```

## EndpointConfigurations properties

     

Property

Type

Required

Editable

Description

Constraint

Type

String

Yes

Yes

The type of the endpoint.

Valid values:

-   Domain: a custom domain name.
-   Ip: a custom IP address.

Endpoint

String

Yes

Yes

The IP address or domain name of the endpoint.

None

Weight

Integer

Yes

Yes

The weight of the endpoint.

None

EnableClientIPPreservation

Boolean

No

Yes

Specifies whether to preserve client IP addresses by using the TCP Option Address (TOA) module.

Valid values:

-   true: yes.
-   false: no. This is the default value.

EnableProxyProtocol

Boolean

No

Yes

Specifies whether to obtain and retain the IP address of the client that accesses the endpoint by using the TCP TOA module.

None

## Response parameters

Fn::GetAtt

EndpointGroupId: the ID of the endpoint group.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AcceleratorId:
        Type: String
        Description: The ID of the Global Accelerator instance with which the endpoint group will be associated.
      ListenerId:
        Type: String
        Description: The ID of the listener to be associated with the endpoint group.
    Resources:
      EndpointGroup:
        Type: ALIYUN::GA::EndpointGroup
        Properties:
          EndpointGroupRegion: cn-beijing
          AcceleratorId:
            Ref: AcceleratorId
          EndpointConfigurations:
            - Type: Ip
              Endpoint: 10.10.10.1
              Weight: 100
          Name: TestEndpointGroup
          ListenerId:
            Ref: ListenerId
    Outputs:
      EndpointGroupId:
        Description: The ID of the endpoint group.
        Value:
          Fn::GetAtt:
            - EndpointGroup
            - EndpointGroupId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AcceleratorId": {
          "Type": "String",
          "Description": "The ID of the Global Accelerator instance with which the endpoint group will be associated."
        },
        "ListenerId": {
          "Type": "String",
          "Description": "The ID of the listener to be associated with the endpoint group."
        }
      },
      "Resources": {
        "EndpointGroup": {
          "Type": "ALIYUN::GA::EndpointGroup",
          "Properties": {
            "EndpointGroupRegion": "cn-beijing",
            "AcceleratorId": {
              "Ref": "AcceleratorId"
            },
            "EndpointConfigurations": [
              {
                "Type": "Ip",
                "Endpoint": "10.10.10.1",
                "Weight": 100
              }
            ],
            "Name": "TestEndpointGroup",
            "ListenerId": {
              "Ref": "ListenerId"
            }
          }
        }
      },
      "Outputs": {
        "EndpointGroupId": {
          "Description": "The ID of the endpoint group.",
          "Value": {
            "Fn::GetAtt": [
              "EndpointGroup",
              "EndpointGroupId"
            ]
          }
        }
      }
    }
    ```
