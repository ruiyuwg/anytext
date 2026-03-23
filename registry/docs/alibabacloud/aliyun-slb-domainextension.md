ALIYUN::SLB::DomainExtension is used to create a domain extension for an SLB instance.

## Statement

```
{
  "Type": "ALIYUN::SLB::DomainExtension",
  "Properties": {
    "Domain": String,
    "ListenerPort": Integer,
    "ServerCertificateId": String,
    "LoadBalancerId": String
  }
}
```

## Properties

     

Parameter

Type

Required

Editable

Description

Constraint

Domain

String

No

No

The custom domain name.

None

ListenerPort

Integer

Yes

No

The frontend port used by the HTTPS listener of the SLB instance.

Valid values: 1 to 65535.

ServerCertificateId

String

No

Yes

The ID of the certificate corresponding to the domain name.

None

LoadBalancerId

String

No

No

The ID of the SLB instance.

None

## Response parameters

Fn::GetAtt

-   DomainExtensionId: the ID of the created domain extension.
-   ListenerPort: The frontend port used by the SLB instance.

## Sample request

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "DomainExtension": {
      "Type": "ALIYUN::SLB::DomainExtension",
      "Properties": {
        "Domain": "*.example.com",
        "ListenerPort": "443",
        "ServerCertificateId": "123157908552****_166f8204689_1714763408_70998****",
        "LoadBalancerId": "lb-bp1o94dp5i6earr9g****"
      }
    }
  },
  "Outputs": {
    "DomainExtensionId": {
      "Value": {
        "Fn::GetAtt": [
          "DomainExtension",
          "DomainExtensionId"
        ]
      }
    },
    "ListenerPort": {
      "Value": {
        "Fn::GetAtt": [
          "DomainExtension",
          "ListenerPort"
        ]
      }
    }
  }
}
```
