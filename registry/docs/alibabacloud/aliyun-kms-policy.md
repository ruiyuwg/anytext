ALIYUN::KMS::Policy is used to create a permission policy to configure the keys and secrets that applications are allowed to access.

## Syntax

```
{
  "Type": "ALIYUN::KMS::Policy",
  "Properties": {
    "AccessControlRules": Map,
    "KmsInstanceId": String,
    "PolicyName": String,
    "Permissions": List,
    "Resources": List,
    "Description": String
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

AccessControlRules

Map

Yes

Yes

The names of the network access rules.

For more information, see [AccessControlRules property](#9b703c973a7vd).

KmsInstanceId

String

Yes

No

The scope of the permission policy.

You must specify the Key Management Service (KMS) instance that you want to access for this property.

PolicyName

String

Yes

No

The name of the permission policy.

None.

Permissions

List

Yes

Yes

The operations that are supported by the permission policy.

Valid values:

-   RbacPermission/Template/CryptoServiceKeyUser: cryptographic operations on KMS instances
    
-   RbacPermission/Template/CryptoServiceSecretUser: secret-related operations on KMS instances
    

You can use both the values.

Resources

List

Yes

Yes

The keys and secrets that are allowed to access.

Value formats:

-   Key: Specify a key in the `key/${KeyId}` format. If you want to allow access to all keys of a KMS instance, use key/\*.
    
-   Secret: Specify a secret in the `secret/${SecretName}` format. If you want to allow access to all secrets of a KMS instance, use secret/\*.
    

Description

String

No

Yes

The description.

None.

## AccessControlRules syntax

```
"AccessControlRules": {
  "NetworkRules": List
}
```

## AccessControlRules property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

NetworkRules

List

Yes

Yes

The names of the network access rules.

You can specify up to 40 names.

## Return values

Fn::GetAtt

-   Description: the description.
    
-   AccessControlRules: the names of the network control rules.
    
-   PolicyName: the name of the permission policy.
    
-   Permissions: the operations that are supported by the permission policy.
    
-   KmsInstanceId: the scope of the permission policy.
    
-   Resources: the keys and secrets that are allowed to access.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AccessControlRules:
    AssociationPropertyMetadata:
      Parameters:
        NetworkRules:
          AssociationPropertyMetadata:
            Parameter:
              Type: String
              Description:
                en: The name of the access control rule.
              Required: true
          AssociationProperty: List[Parameter]
          Type: Json
          Description:
            en: NetworkRule list, Supports a maximum of 40 network control rules.
          Required: true
          MinLength: 1
          MaxLength: 40
    Type: Json
    Description:
      en: Network Rules info.
    Required: true
  PolicyName:
    Type: String
    Description:
      en: The name of the permission policy.
    Required: true
  Permissions:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        AllowedValues:
          - RbacPermission/Template/CryptoServiceKeyUser
          - RbacPermission/Template/CryptoServiceSecretUser
        Required: true
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: |-
        The operations that can be performed. Valid values:
        RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
        RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
    Required: true
    MinLength: 1
    MaxLength: 2
  KmsInstanceId:
    Type: String
    Description:
      en: The scope of the permission policy. You need to specify the KMS instance that you want to access.
    Required: true
  Resources:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: true
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: |-
        The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
        Key: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/*. 
        Secret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/*.
    Required: true
    MinLength: 1
    MaxLength: 30
Resources:
  ExtensionResource:
    Type: ALIYUN::KMS::Policy
    Properties:
      AccessControlRules:
        Ref: AccessControlRules
      PolicyName:
        Ref: PolicyName
      Permissions:
        Ref: Permissions
      KmsInstanceId:
        Ref: KmsInstanceId
      Resources:
        Ref: Resources
Outputs:
  Description:
    Description: Description.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  AccessControlRules:
    Description: Network Rules info.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AccessControlRules
  PolicyName:
    Description: The name of the permission policy.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PolicyName
  Permissions:
    Description: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Permissions
  KmsInstanceId:
    Description: The scope of the permission policy. You need to specify the KMS instance that you want to access.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KmsInstanceId
  Resources:
    Description: Resources that allowed access by this policy.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Resources
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AccessControlRules": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "NetworkRules": {
            "AssociationPropertyMetadata": {
              "Parameter": {
                "Type": "String",
                "Description": {
                  "en": "The name of the access control rule."
                },
                "Required": true
              }
            },
            "AssociationProperty": "List[Parameter]",
            "Type": "Json",
            "Description": {
              "en": "NetworkRule list, Supports a maximum of 40 network control rules."
            },
            "Required": true,
            "MinLength": 1,
            "MaxLength": 40
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "Network Rules info."
      },
      "Required": true
    },
    "PolicyName": {
      "Type": "String",
      "Description": {
        "en": "The name of the permission policy."
      },
      "Required": true
    },
    "Permissions": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "AllowedValues": [
            "RbacPermission/Template/CryptoServiceKeyUser",
            "RbacPermission/Template/CryptoServiceSecretUser"
          ],
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The operations that can be performed. Valid values:\nRbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.\nRbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 2
    },
    "KmsInstanceId": {
      "Type": "String",
      "Description": {
        "en": "The scope of the permission policy. You need to specify the KMS instance that you want to access."
      },
      "Required": true
    },
    "Resources": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The key and secret that are allowed to access. Supports a maximum of 30 key and secret.\nKey: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/*. \nSecret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/*."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 30
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::KMS::Policy",
      "Properties": {
        "AccessControlRules": {
          "Ref": "AccessControlRules"
        },
        "PolicyName": {
          "Ref": "PolicyName"
        },
        "Permissions": {
          "Ref": "Permissions"
        },
        "KmsInstanceId": {
          "Ref": "KmsInstanceId"
        },
        "Resources": {
          "Ref": "Resources"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "Description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "AccessControlRules": {
      "Description": "Network Rules info.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AccessControlRules"
        ]
      }
    },
    "PolicyName": {
      "Description": "The name of the permission policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PolicyName"
        ]
      }
    },
    "Permissions": {
      "Description": "RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Permissions"
        ]
      }
    },
    "KmsInstanceId": {
      "Description": "The scope of the permission policy. You need to specify the KMS instance that you want to access.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KmsInstanceId"
        ]
      }
    },
    "Resources": {
      "Description": "Resources that allowed access by this policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Resources"
        ]
      }
    }
  }
}
                        
```
