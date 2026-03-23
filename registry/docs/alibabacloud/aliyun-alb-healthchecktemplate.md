The ALIYUN::ALB::HealthCheckTemplate resource type creates a health check template.

## Syntax

```
{
  "Type": "ALIYUN::ALB::HealthCheckTemplate",
  "Properties": {
    "HealthCheckInterval": Integer,
    "HealthCheckConnectPort": Integer,
    "HealthCheckCodes": List,
    "UnhealthyThreshold": Integer,
    "HealthCheckMethod": String,
    "HealthCheckPath": String,
    "HealthCheckTemplateName": String,
    "HealthCheckHost": String,
    "HealthyThreshold": Integer,
    "HealthCheckProtocol": String,
    "HealthCheckTimeout": Integer,
    "HealthCheckHttpVersion": String,
    "ResourceGroupId": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updateable**

**Description**

**Constraint**

HealthCheckTemplateName

String

Yes

Yes

The name of the health check template.

The name must be 2 to 128 characters in length. It must start with a letter or Chinese character. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

HealthCheckCodes

List

No

Yes

The HTTP status codes that indicate a healthy backend server.

Valid values:

-   If HealthCheckProtocol is HTTP, valid values are http\_2xx (default), http\_3xx, http\_4xx, and http\_5xx. Separate multiple status codes with commas (,).
    
-   If HealthCheckProtocol is gRPC, valid values are integers from 0 to 99. The default value is 0. You can specify up to 20 ranges. Separate multiple ranges with commas (,).
    

**Note**

This property takes effect only when HealthCheckProtocol is HTTP or gRPC.

HealthCheckConnectPort

Integer

No

Yes

The port used for health checks.

Valid values: 0 to 65535. Default value: 0, which means the health check uses the port of the backend server.

HealthCheckHost

String

No

Yes

The domain name used for health checks.

Default value: $SERVER\_IP.

The domain name must be 1 to 80 characters in length and meet the following requirements:

-   Valid characters are lowercase letters, digits, hyphens (-), and periods (.).
    
-   It must contain at least one period (.). A period cannot appear at the beginning or end.
    
-   The rightmost label must contain only letters. It cannot contain digits or hyphens (-).
    
-   For other labels, hyphens (-) cannot appear at the beginning or end.
    

**Note**

This property takes effect only when HealthCheckProtocol is HTTP.

HealthCheckHttpVersion

String

No

No

The HTTP version used for health checks.

Valid values:

-   HTTP1.0
    
-   HTTP1.1
    

HealthCheckInterval

Integer

No

Yes

The interval between health checks.

Valid values: 1 to 50.

Default value: 2.

Unit: seconds.

HealthCheckMethod

String

No

Yes

The method used for health checks.

Valid values:

-   HEAD (default): Used by default for HTTP listeners.
    
-   POST: Used by default for gRPC listeners.
    
-   GET: If the response message exceeds 8 KB, it is truncated. This does not affect the health check result.
    

**Note**

This property takes effect only when HealthCheckProtocol is HTTP or gRPC.

HealthCheckPath

String

No

Yes

The URL used for health checks.

The URL must be 1 to 80 characters in length. Valid characters include letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and extended characters such as \_;~!() \*\[\]@$^:',+ . The URL must start with a forward slash (/).

**Note**

This property takes effect only when HealthCheckProtocol is HTTP.

HealthCheckProtocol

String

No

Yes

The protocol used for health checks.

Valid values:

-   HTTP (default): Sends HEAD or GET requests to simulate browser access and check if the server application is healthy.
    
-   TCP: Sends SYN handshake messages to check if the server port is active.
    
-   gRPC: Sends POST or GET requests to check if the server application is healthy.
    

HealthCheckTimeout

Integer

No

Yes

The time to wait for a response from the health check.

If the backend server does not respond correctly within this time, the health check fails.

Valid values: 1 to 300.

Default value: 5.

Unit: seconds.

**Note**

If HealthCheckTimeout is less than HealthCheckInterval, HealthCheckTimeout is ignored. The timeout is set to HealthCheckInterval.

HealthyThreshold

Integer

No

Yes

The number of consecutive successful health checks required to change the health check status of a backend server from failed to healthy.

Valid values: 2 to 10.

Default value: 3.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

UnhealthyThreshold

Integer

No

Yes

The number of consecutive failed health checks required to change the health check status of a backend server from healthy to unhealthy.

Valid values: 2 to 10.

Default value: 3.

## Return values

Fn::GetAtt

HealthCheckTemplateId: The ID of the health check template.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  HealthCheckTemplateName:
    Type: String
    Description: |-
      The name of the health check template.
      The name must be 2 to 128 characters in length, and can contain letters, digits, periods
      (.), underscores (_), and hyphens (-). The name must start with a letter.
Resources:
  HealthCheckTemplate:
    Type: ALIYUN::ALB::HealthCheckTemplate
    Properties:
      HealthCheckTemplateName:
        Ref: HealthCheckTemplateName
Outputs:
  HealthCheckTemplateId:
    Description: The ID of the health check template.
    Value:
      Fn::GetAtt:
        - HealthCheckTemplate
        - HealthCheckTemplateId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "HealthCheckTemplateName": {
      "Type": "String",
      "Description": "The name of the health check template.\nThe name must be 2 to 128 characters in length, and can contain letters, digits, periods\n(.), underscores (_), and hyphens (-). The name must start with a letter."
    }
  },
  "Resources": {
    "HealthCheckTemplate": {
      "Type": "ALIYUN::ALB::HealthCheckTemplate",
      "Properties": {
        "HealthCheckTemplateName": {
          "Ref": "HealthCheckTemplateName"
        }
      }
    }
  },
  "Outputs": {
    "HealthCheckTemplateId": {
      "Description": "The ID of the health check template.",
      "Value": {
        "Fn::GetAtt": [
          "HealthCheckTemplate",
          "HealthCheckTemplateId"
        ]
      }
    }
  }
}
```
