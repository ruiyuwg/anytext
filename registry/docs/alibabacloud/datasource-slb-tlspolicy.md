DATASOURCE::SLB::TLSPolicy is used to query the information about a Transport Layer Security (TLS) policy.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::TLSPolicy",
  "Properties": {
    "InstanceId": String,
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

InstanceId

String

Yes

Yes

The ID of the TLS policy.

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

-   Ciphers: the supported cipher suites.
    
-   TLSPolicyName: the name of the TLS policy.
    
-   InstanceId: the ID of the TLS policy.
    
-   CreateTime: the timestamp when the TLS policy was created.
    
-   TlsVersions: the supported TLS protocol versions.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the TLS policy.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::TLSPolicy
    Properties:
      InstanceId:
        Ref: InstanceId
Outputs:
  Ciphers:
    Description: The cipher suites supported by the TLS version.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Ciphers
  TLSPolicyName:
    Description: The name of the TLS policy.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TLSPolicyName
  InstanceId:
    Description: The ID of the TLS policy.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  CreateTime:
    Description: The timestamp generated when the TLS policy is created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  TlsVersions:
    Description: The version of the TLS protocol.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TlsVersions
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the TLS policy."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::TLSPolicy",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "Ciphers": {
      "Description": "The cipher suites supported by the TLS version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Ciphers"
        ]
      }
    },
    "TLSPolicyName": {
      "Description": "The name of the TLS policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TLSPolicyName"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the TLS policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The timestamp generated when the TLS policy is created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "TlsVersions": {
      "Description": "The version of the TLS protocol.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TlsVersions"
        ]
      }
    }
  }
}
                        
```
