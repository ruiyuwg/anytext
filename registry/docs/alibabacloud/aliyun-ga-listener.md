ALIYUN::GA::Listener is used to create a listener for a Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::Listener",
  "Properties": {
    "Description": String,
    "PortRanges": List,
    "Protocol": String,
    "AcceleratorId": String,
    "Name": String,
    "ClientAffinity": String,
    "Certificates": List,
    "SecurityPolicyId": String,
    "ProxyProtocol": Boolean,
    "XForwardedForConfig": Map
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

Description

String

No

Yes

The description of the listener.

None.

PortRanges

List

Yes

Yes

The listener ports.

You can specify up to 10 listener ports.

For more information, see [PortRanges properties](#section-jrn-o4k-5s4).

Protocol

String

Yes

Yes

The network transmission protocol that is used by the listener.

Valid values:

-   tcp: TCP
-   udp: UDP
-   http: HTTP
-   https: HTTPS

AcceleratorId

String

Yes

No

The ID of the GA instance.

None.

Name

String

No

Yes

The name of the listener.

The name must be 2 to 128 characters in length, and can contain digits, letters, underscores (\_), and hyphens (-). The name must start with a letter.

ClientAffinity

String

No

Yes

Specifies whether to enable client affinity for the listener.

Default value: None. Valid values:

-   None: disables client affinity. In this mode, requests from a client IP address are not always forwarded to the same endpoint.
-   SOURCE\_IP: enables client affinity. In this mode, requests from a client IP address to a stateful application are forwarded to the same endpoint regardless of the source port or protocol used.

Certificates

List

No

Yes

The SSL certificate.

For more information, see [Certificates property](#section-1tl-l8e-2pv).

SecurityPolicyId

String

No

Yes

The ID of the security policy.

Valid values:

-   tls\_cipher\_policy\_1\_0
    -   Supported Transport Layer Security (TLS) versions: TLS 1.0, TLS 1.1, and TLS 1.2
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
-   tls\_cipher\_policy\_1\_1
    -   Supported TLS versions: TLS 1.1 and TLS 1.2
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
-   tls\_cipher\_policy\_1\_2
    -   Supported TLS version: TLS 1.2
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
-   tls\_cipher\_policy\_1\_2\_strict
    -   Supported TLS version: TLS 1.2
    -   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
-   tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3
    -   Supported TLS versions: TLS 1.2 and TLS 1.3
    -   Supported cipher suites: TLS\_AES\_128\_GCM\_SHA256, TLS\_AES\_256\_GCM\_SHA384, TLS\_CHACHA20\_POLY1305\_SHA256, TLS\_AES\_128\_CCM\_SHA256, TLS\_AES\_128\_CCM\_8\_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA

**Note** You can specify this property only for HTTPS listeners.

ProxyProtocol

Boolean

No

Yes

Specifies whether to preserve source IP addresses of clients.

Default value: false. Valid values:

-   true: preserves source IP addresses of clients.
    
    If you set this property to true, you can view the source IP addresses of clients on backend servers.
    
-   false: does not preserve source IP addresses of clients.

**Note** This parameter will be deprecated from the API operations that are used to configure listeners. We recommend that you set this parameter when you call API operations to configure endpoint groups.

For more information, see [CreateEndpointGroup](/help/en/ga/api-createendpointgroup#doc-api-Ga-CreateEndpointGroup) and [UpdateEndpointGroup](/help/en/ga/api-updateendpointgroup#doc-api-Ga-UpdateEndpointGroup).

XForwardedForConfig

Map

No

Yes

The configurations of the XForward headers.

For more information, see [XForwardedForConfig properties](#section-8co-ryz-1s2).

## Certificates syntax

```
"Certificates": [
  {
    "Id": String
  }
]
```

## Certificates property

     

Property

Type

Required

Editable

Description

Constraint

Id

String

Yes

Yes

The ID of the SSL certificate.

**Note** This parameter is required only for HTTPS listeners.

## XForwardedForConfig syntax

```
"XForwardedForConfig": {
  "XRealIpEnabled": Boolean,
  "XForwardedForGaIdEnabled": Boolean,
  "XForwardedForGaApEnabled": Boolean,
  "XForwardedForPortEnabled": Boolean,
  "XForwardedForProtoEnabled": Boolean
}
```

## XForwardedForConfig properties

     

Property

Type

Required

Editable

Description

Constraint

XRealIpEnabled

Boolean

No

Yes

Specifies whether to use the X-Real-IP header to retrieve client IP addresses.

Default value: false. Valid values:

-   true: uses the X-Real-IP header to retrieve client IP addresses.
-   false: does not use the X-Real-IP header to retrieve client IP addresses.

**Note** You can specify this property only for HTTP and HTTPS listeners.

XForwardedForGaIdEnabled

Boolean

No

Yes

Specifies whether to use the GA-ID header to retrieve the ID of the GA instance.

Default value: false. Valid values:

-   true: uses the GA-ID header to retrieve the ID of the GA instance.
-   false: does not use the GA-ID header to retrieve the ID of the GA instance.

**Note** You can specify this property only for HTTP and HTTPS listeners.

XForwardedForGaApEnabled

Boolean

No

Yes

Specifies whether to use the GA-AP header to retrieve the information about acceleration regions.

Default value: false. Valid values:

-   true: uses the GA-AP header to retrieve the information about acceleration regions.
-   false: does not use the GA-AP header to retrieve the information about acceleration regions.

**Note** You can specify this property only for HTTP and HTTPS listeners.

XForwardedForPortEnabled

Boolean

No

Yes

Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance.

Default value: false. Valid values:

-   true: uses the GA-X-Forward-Port header to retrieve the listener ports of the GA instance.
-   false: does not use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance.

**Note** You can specify this property only for HTTP and HTTPS listeners.

XForwardedForProtoEnabled

Boolean

No

Yes

Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance.

Default value: false. Valid values:

-   true: uses the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance.
-   false: does not use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance.

**Note** You can specify this property only for HTTP and HTTPS listeners.

## PortRanges syntax

```
"PortRanges": [
  {
    "FromPort": Integer,
    "ToPort": Integer
  }
]
```

## PortRanges properties

     

Property

Type

Required

Editable

Description

Constraint

FromPort

Integer

Yes

Yes

The first port in the range of listener ports that are used to receive and forward requests to endpoints.

None.

ToPort

Integer

Yes

Yes

The last port in the range of listener ports that are used to receive and forward requests to endpoints.

None.

## Response parameters

Fn::GetAtt

ListenerId: the ID of the listener.

## Example

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AcceleratorId:
        Type: String
        Description: The ID of the Global Accelerator instance to which the listener will be added.
    Resources:
      Listener:
        Type: ALIYUN::GA::Listener
        Properties:
          PortRanges:
            - FromPort: 336
              ToPort: 335
          Protocol: tcp
          AcceleratorId:
            Ref: AcceleratorId
          Name: TestListener
          ClientAffinity: NONE
    Outputs:
      ListenerId:
        Description: The ID of the listener.
        Value:
          Fn::GetAtt:
            - Listener
            - ListenerId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AcceleratorId": {
          "Type": "String",
          "Description": "The ID of the Global Accelerator instance to which the listener will be added."
        }
      },
      "Resources": {
        "Listener": {
          "Type": "ALIYUN::GA::Listener",
          "Properties": {
            "PortRanges": [
              {
                "FromPort": 336,
                "ToPort": 335
              }
            ],
            "Protocol": "tcp",
            "AcceleratorId": {
              "Ref": "AcceleratorId"
            },
            "Name": "TestListener",
            "ClientAffinity": "NONE"
          }
        }
      },
      "Outputs": {
        "ListenerId": {
          "Description": "The ID of the listener.",
          "Value": {
            "Fn::GetAtt": [
              "Listener",
              "ListenerId"
            ]
          }
        }
      }
    }
    ```
