DATASOURCE::SLB::TLSPolicies is used to query Transport Layer Security (TLS) policies.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::TLSPolicies",
  "Properties": {
    "TLSPolicyName": String,
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

TLSPolicyName

String

No

Yes

The name of the TLS policy.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

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

-   TLSPolicies: details of the TLS policies.
    
-   InstanceIds: the IDs of the TLS policies.
    

**Property**

**Type**

**Description**

**Constraint**

InstanceIds

List

The IDs of the TSL policies.

None.

TLSPolicies

List

Details of the TLS policies.

None.

Status

String

The status of the TLS policy.

Valid values:

-   configuring: The TLS policy is being configured.
    
-   normal: The TLS policy works as expected.
    

TlsVersions

List

The supported versions of the TLS protocol.

Example:

```
[ "TLSv1.0" ]
```

TLSPolicyName

String

The name of the TLS policy.

None.

InstanceId

String

The ID of the TLS policy.

None.

Ciphers

List

The cipher suites that are supported.

Example:

```
[ "ECDHE-ECDSA-AES128-SHA" ]
```

CreateTime

String

The time when the TLS policy was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description: The ID of the TLS policy.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: DATASOURCE::SLB::TLSPolicies
Outputs:
  InstanceIds:
    Description: The list of instance IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceIds
  TLSPolicies:
    Description: The list of tls policies.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - TLSPolicies
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the TLS policy."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::TLSPolicies",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "TLSPolicies": {
      "Description": "The list of tls policies.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TLSPolicies"
        ]
      }
    },
    "InstanceIds": {
      "Description": "The list of instance IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceIds"
        ]
      }
    }
  }
}
```
