ALIYUN::SLB::TLSPolicy is used to create a Transport Layer Security (TLS) policy.

## Syntax

```
{
  "Type": "ALIYUN::SLB::TLSPolicy",
  "Properties": {
    "Ciphers": List,
    "TLSPolicyName": String,
    "TlsVersions": List
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

Ciphers

List

Yes

Yes

The supported cipher suites.

The valid values of Ciphers vary based on the version of the TLS protocol. You can specify up to 32 cipher suites.

Valid values for TLS 1.0 and TLS 1.1:

-   **ECDHE-ECDSA-AES128-SHA**
    
-   **ECDHE-ECDSA-AES256-SHA**
    
-   **ECDHE-RSA-AES128-SHA**
    
-   **ECDHE-RSA-AES256-SHA**
    
-   **AES128-SHA**
    
-   **AES256-SHA**
    
-   **DES-CBC3-SHA**
    

Valid values for TLS 1.2:

-   **ECDHE-ECDSA-AES128-SHA**
    
-   **ECDHE-ECDSA-AES256-SHA**
    
-   **ECDHE-RSA-AES128-SHA**
    
-   **ECDHE-RSA-AES256-SHA**
    
-   **AES128-SHA**
    
-   **AES256-SHA**
    
-   **DES-CBC3-SHA**
    
-   **ECDHE-ECDSA-AES128-GCM-SHA256**
    
-   **ECDHE-ECDSA-AES256-GCM-SHA384**
    
-   **ECDHE-ECDSA-AES128-SHA256**
    
-   **ECDHE-ECDSA-AES256-SHA384**
    
-   **ECDHE-RSA-AES128-GCM-SHA256**
    
-   **ECDHE-RSA-AES256-GCM-SHA384**
    
-   **ECDHE-RSA-AES128-SHA256**
    
-   **ECDHE-RSA-AES256-SHA384**
    
-   **AES128-GCM-SHA256**
    
-   **AES256-GCM-SHA384**
    
-   **AES128-SHA256**
    
-   **AES256-SHA256**
    

Valid values for TLS 1.3:

-   **TLS\_AES\_128\_GCM\_SHA256**
    
-   **TLS\_AES\_256\_GCM\_SHA384**
    
-   **TLS\_CHACHA20\_POLY1305\_SHA256**
    
-   **TLS\_AES\_128\_CCM\_SHA256**
    
-   **TLS\_AES\_128\_CCM\_8\_SHA256**
    

TLSPolicyName

String

Yes

Yes

The name of the TLS policy.

The name must be 2 to 200 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

TlsVersions

List

Yes

Yes

The supported versions of the TLS protocol.

Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**. You can specify up to four TLS versions.

## Return values

Fn::GetAtt

-   Ciphers: the supported cipher suites.
    
-   TLSPolicyName: the name of the TLS policy.
    
-   InstanceId: the policy ID.
    
-   CreateTime: the time when the TLS policy was created.
    
-   TlsVersions: the supported versions of the TLS protocol.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::SLB::TLSPolicy
    Properties:
      Ciphers:
        - ECDHE-ECDSA-AES128-SHA
      TLSPolicyName: TLSPolicy-test
      TlsVersions:
        - TLSv1.0
Outputs:
  Ciphers:
    Description: The supported cipher suites, which are determined by the TLS protocol version.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Ciphers
  TLSPolicyName:
    Description: The name of the TLS policy.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TLSPolicyName
  InstanceId:
    Description: The ID of the policy.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InstanceId
  CreateTime:
    Description: Creation time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  TlsVersions:
    Description: The version of the TLS protocol.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TlsVersions
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::SLB::TLSPolicy",
      "Properties": {
        "Ciphers": [
          "ECDHE-ECDSA-AES128-SHA"
        ],
        "TLSPolicyName": "TLSPolicy-test",
        "TlsVersions": [
          "TLSv1.0"
        ]
      }
    }
  },
  "Outputs": {
    "Ciphers": {
      "Description": "The supported cipher suites, which are determined by the TLS protocol version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Ciphers"
        ]
      }
    },
    "TLSPolicyName": {
      "Description": "The name of the TLS policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TLSPolicyName"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InstanceId"
        ]
      }
    },
    "CreateTime": {
      "Description": "Creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "TlsVersions": {
      "Description": "The version of the TLS protocol.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TlsVersions"
        ]
      }
    }
  }
}
                        
```
