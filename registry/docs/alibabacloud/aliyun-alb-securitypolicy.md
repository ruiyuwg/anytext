ALIYUN::ALB::SecurityPolicy is used to create a custom security policy.

## Syntax

```
{
  "Type": "ALIYUN::ALB::SecurityPolicy",
  "Properties": {
    "Ciphers": List,
    "ResourceGroupId": String,
    "TLSVersions": List,
    "SecurityPolicyName": String
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

The cipher suites that are supported.

Valid values:

-   TLS 1.0 and TLS 1.1 support the following cipher suites:
    
    -   ECDHE-ECDSA-AES128-SHA
        
    -   ECDHE-ECDSA-AES256-SHA
        
    -   ECDHE-RSA-AES128-SHA
        
    -   ECDHE-RSA-AES256-SHA
        
    -   AES128-SHA
        
    -   AES256-SHA
        
    -   DES-CBC3-SHA
        
-   TLS 1.2 supports the following cipher suites:
    
    -   ECDHE-ECDSA-AES128-SHA
        
    -   ECDHE-ECDSA-AES256-SHA
        
    -   ECDHE-RSA-AES128-SHA
        
    -   ECDHE-RSA-AES256-SHA
        
    -   AES128-SHA
        
    -   AES256-SHA
        
    -   DES-CBC3-SHA
        
    -   ECDHE-ECDSA-AES128-GCM-SHA256
        
    -   ECDHE-ECDSA-AES256-GCM-SHA384
        
    -   ECDHE-ECDSA-AES128-SHA256
        
    -   ECDHE-ECDSA-AES256-SHA384
        
    -   ECDHE-RSA-AES128-GCM-SHA256
        
    -   ECDHE-RSA-AES256-GCM-SHA384
        
    -   ECDHE-RSA-AES128-SHA256
        
    -   ECDHE-RSA-AES256-SHA384
        
    -   AES128-GCM-SHA256
        
    -   AES256-GCM-SHA384
        
    -   AES128-SHA256
        
    -   AES256-SHA256
        
-   TLS 1.3 supports the following cipher suites:
    
    -   TLS\_AES\_128\_GCM\_SHA256
        
    -   TLS\_AES\_256\_GCM\_SHA384
        
    -   TLS\_CHACHA20\_POLY1305\_SHA256
        
    -   TLS\_AES\_128\_CCM\_SHA256
        
    -   TLS\_AES\_128\_CCM\_8\_SHA256
        

**Note**

This property takes effect only if you set TLSVersions to Ciphers.

SecurityPolicyName

String

Yes

Yes

The name of the security policy.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

TLSVersions

List

Yes

Yes

The version of the TLS protocol.

Valid values:

-   TLSv1.0
    
-   TLSv1.1
    
-   TLSv1.2
    
-   TLSv1.3
    

ResourceGroupId

String

No

No

The resource group ID.

None.

## Return values

Fn::GetAtt

SecurityPolicyId: the ID of the security policy.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Ciphers:
    Description: 'The supported cipher suites, which are determined by the TLS protocol
      version.

      The specified cipher suites must be supported by at least one TLS protocol version
      that you specify.

      Note For example, if you set the TLSVersions parameter to TLSv1.3, you must
      specify cipher suites that are supported by TLS 1.3.'
    MaxLength: 20
    MinLength: 1
    Type: Json
  SecurityPolicyName:
    Description: 'The name of the security policy.

      The name must be 2 to 128 characters in length, and can contain letters, digits,
      periods

      (.), underscores (_), and hyphens (-). The name must start with a letter.'
    Type: String
  TLSVersions:
    Description: 'The supported versions of the Transport Layer Security (TLS) protocol.
      Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.'
    MaxLength: 5
    MinLength: 1
    Type: Json
Resources:
  SecurityPolicy:
    Properties:
      Ciphers:
        Ref: Ciphers
      SecurityPolicyName:
        Ref: SecurityPolicyName
      TLSVersions:
        Ref: TLSVersions
    Type: ALIYUN::ALB::SecurityPolicy
Outputs:
  SecurityPolicyId:
    Description: The ID of the security policy.
    Value:
      Fn::GetAtt:
      - SecurityPolicy
      - SecurityPolicyId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Ciphers": {
      "Type": "Json",
      "Description": "The supported cipher suites, which are determined by the TLS protocol version.\nThe specified cipher suites must be supported by at least one TLS protocol version that you specify.\nNote For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.",
      "MinLength": 1,
      "MaxLength": 20
    },
    "TLSVersions": {
      "Type": "Json",
      "Description": "The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.",
      "MinLength": 1,
      "MaxLength": 5
    },
    "SecurityPolicyName": {
      "Type": "String",
      "Description": "The name of the security policy.\nThe name must be 2 to 128 characters in length, and can contain letters, digits, periods\n(.), underscores (_), and hyphens (-). The name must start with a letter."
    }
  },
  "Resources": {
    "SecurityPolicy": {
      "Type": "ALIYUN::ALB::SecurityPolicy",
      "Properties": {
        "Ciphers": {
          "Ref": "Ciphers"
        },
        "TLSVersions": {
          "Ref": "TLSVersions"
        },
        "SecurityPolicyName": {
          "Ref": "SecurityPolicyName"
        }
      }
    }
  },
  "Outputs": {
    "SecurityPolicyId": {
      "Description": "The ID of the security policy.",
      "Value": {
        "Fn::GetAtt": [
          "SecurityPolicy",
          "SecurityPolicyId"
        ]
      }
    }
  }
}
```
