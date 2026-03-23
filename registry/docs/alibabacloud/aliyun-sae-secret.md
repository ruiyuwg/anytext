The ALIYUN::SAE::Secret type is used to create a Secret instance in the namespace.

## Syntax

```
{
  "Type": "ALIYUN::SAE::Secret",
  "Properties": {
    "NamespaceId": String,
    "SecretName": String,
    "SecretType": String,
    "SecretData": Map
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

NamespaceId

String

Yes

No

The namespace ID that the Secret instance belongs to.

If the namespace is the default namespace, you only need to fill in RegionId, such as `cn-beijing`.

SecretName

String

Yes

No

The name of the Secret instance.

Allows a combination of letters, digits, and underscores (**\_**), and must start with a letter.

SecretType

String

Yes

No

Currently supported Secret instance types.

Valid values:

-   **kubernetes.io/dockerconfigjson**: A secret dictionary that stores the username and password of the image repository, used for authentication when pulling images during deployment.
    

SecretData

Map

Yes

Yes

The Secret data.

The Secret field is required and must contain key–value data in the following format:

{"Data":"{"k1":"v1", "k2":"v2"}"}

Here, **k** stands for a key and **v** stands for a value.

Example value:

```
{
  ".dockerconfigjson": "eyJhdXRocyI6eyJyZWdpc3RyeS12cGMuY24tYmVpamluZy5hbGl5dW5jcy5jb20iOnsidXNlcm5hbWUiOiJ1c2VybmFtZSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJhdXRoIjoiZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE9In0sInJlZ2lzdHJ5LmNuLWJlaWppbmcuYWxpeXVuY3MuY29tIjp7InVzZXJuYW1lIjoidXNlcm5hbWUiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiYXV0aCI6ImRYTmxjbTVoYldVNmNHRnpjM2R2Y21RPSJ9fX0="
}
```

## Return values

Fn::GetAtt

-   SecretId: the ID of the Secret instance.
    
-   NamespaceId: The namespace ID that the Secret instance belongs to.
    

## Example

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SecretName:
    Type: String
    Description:
      en: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
    AllowedPattern: ^[a-zA-Z][a-zA-Z0-9_-]*$
    Required: true
  SecretType:
    Type: String
    Description:
      en: |-
        The currently supported Secret instance type.The values are as follows:
        kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
    AllowedValues:
      - Opaque
      - kubernetes.io/dockerconfigjson
      - kubernetes.io/tls
    Required: true
  NamespaceId:
    Type: String
    Description:
      en: The namespace ID where the Secret instance resides. If the namespace you are in is the default namespace, you just need to fill in the RegionId.
    Required: true
  SecretData:
    Type: Json
    Description:
      en: |-
        Secret key-value pair data, required.The format is as follows:
        {"Data":"{"k1":"v1", "k2":"v2"}"}
        k represents the key and v represents the value.
    Required: true
Resources:
  Secret:
    Type: ALIYUN::SAE::Secret
    Properties:
      SecretName:
        Ref: SecretName
      SecretType:
        Ref: SecretType
      NamespaceId:
        Ref: NamespaceId
      SecretData:
        Ref: SecretData
Outputs:
  SecretId:
    Description: The ID of the secret.
    Value:
      Fn::GetAtt:
        - Secret
        - SecretId
  NamespaceId:
    Description: The namespace ID that the Secret instance belongs to.
    Value:
      Fn::GetAtt:
        - Secret
        - NamespaceId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SecretName": {
      "Type": "String",
      "Description": {
        "en": "Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters."
      },
      "AllowedPattern": "^[a-zA-Z][a-zA-Z0-9_-]*$",
      "Required": true
    },
    "SecretType": {
      "Type": "String",
      "Description": {
        "en": "The currently supported Secret instance type.The values are as follows:\nkubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment."
      },
      "AllowedValues": [
        "Opaque",
        "kubernetes.io/dockerconfigjson",
        "kubernetes.io/tls"
      ],
      "Required": true
    },
    "NamespaceId": {
      "Type": "String",
      "Description": {
        "en": "The namespace ID where the Secret instance resides. If the namespace you are in is the default namespace, you just need to fill in the RegionId."
      },
      "Required": true
    },
    "SecretData": {
      "Type": "Json",
      "Description": {
        "en": "Secret key-value pair data, required.The format is as follows:\n{\"Data\":\"{\"k1\":\"v1\", \"k2\":\"v2\"}\"}\nk represents the key and v represents the value."
      },
      "Required": true
    }
  },
  "Resources": {
    "Secret": {
      "Type": "ALIYUN::SAE::Secret",
      "Properties": {
        "SecretName": {
          "Ref": "SecretName"
        },
        "SecretType": {
          "Ref": "SecretType"
        },
        "NamespaceId": {
          "Ref": "NamespaceId"
        },
        "SecretData": {
          "Ref": "SecretData"
        }
      }
    }
  },
  "Outputs": {
    "SecretId": {
      "Description": "The ID of the secret.",
      "Value": {
        "Fn::GetAtt": [
          "Secret",
          "SecretId"
        ]
      }
    },
    "NamespaceId": {
      "Description": "The namespace ID that the Secret instance belongs to.",
      "Value": {
        "Fn::GetAtt": [
          "Secret",
          "NamespaceId"
        ]
      }
    }
  }
}
                        
```
