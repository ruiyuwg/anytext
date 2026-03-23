DATASOURCE::CloudPhone::KeyPairs is used to query the information about key pairs.

## Syntax

```
{
  "Type": "DATASOURCE::CloudPhone::KeyPairs",
  "Properties": {
    "KeyPairFingerPrint": String,
    "KeyPairName": String,
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

KeyPairFingerPrint

String

No

Yes

The fingerprint of the key pair.

The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in Request for Comments (RFC) 4716.

KeyPairName

String

No

Yes

The name of the key pair.

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

-   KeyPairs: details of the key pairs.
    
-   KeyPairNames: the names of the key pairs.
    

**Property**

**Type**

**Description**

**Constraint**

KeyPairNames

List

The names of the key pairs.

None.

KeyPairs

List

Details of the key pairs.

None.

KeyPairFingerPrint

String

The fingerprint of the key pair.

None.

CreateTime

String

The time when the key pair was created.

None.

KeyPairName

String

The name of the key pair.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  KeyPairName:
    Description: The Key Name.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      KeyPairName:
        Ref: KeyPairName
    Type: DATASOURCE::CloudPhone::KeyPairs
Outputs:
  KeyPairNames:
    Description: The list of key pair names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - KeyPairNames
  KeyPairs:
    Description: The list of key pairs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - KeyPairs
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "KeyPairName": {
      "Type": "String",
      "Description": "The Key Name."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudPhone::KeyPairs",
      "Properties": {
        "KeyPairName": {
          "Ref": "KeyPairName"
        }
      }
    }
  },
  "Outputs": {
    "KeyPairs": {
      "Description": "The list of key pairs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "KeyPairs"
        ]
      }
    },
    "KeyPairNames": {
      "Description": "The list of key pair names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "KeyPairNames"
        ]
      }
    }
  }
}
```
