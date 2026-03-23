The ALIYUN::KMS::Key resource creates a master key.

## Syntax

```
{
  "Type": "ALIYUN::KMS::Key",
  "Properties": {
    "KeyUsage": String,
    "Enable": Boolean,
    "PendingWindowInDays": Integer,
    "Description": String,
    "KeySpec": String,
    "EnableAutomaticRotation": Boolean,
    "RotationInterval": String,
    "ProtectionLevel": String,
    "DKMSInstanceId": String,
    "KeyUsage": String,
    "Policy": Map,
    "DeletionProtection": Boolean,
    "Tags": List
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

DKMSInstanceId

String

Yes

No

The instance ID of your dedicated KMS.

Your existing KMS is upgraded to a dedicated KMS. For more information about the upgrade, see [\[Upgrade notice\] KMS is upgraded to a dedicated KMS](/help/en/kms/key-management-service/product-overview/kms-is-upgraded-to-dedicated-kms).

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

Valid values:

-   true: enables deletion protection.
    
-   false: disables deletion protection.
    

Description

String

No

Yes

A description of the key.

The description must be 0 to 8192 characters in length.

Enable

Boolean

No

Yes

Specifies whether to enable or disable the key.

Valid values:

-   true (default): enables the key.
    
-   false: disables the key.
    

KeyUsage

String

No

No

The intended use of the key.

Valid values:

-   ENCRYPT/DECRYPT: encrypts and decrypts data.
    
-   SIGN/VERIFY: generates and verifies digital signatures.
    

Default value: SIGN/VERIFY if the key supports signature verification. Otherwise, the default value is ENCRYPT/DECRYPT.

EnableAutomaticRotation

Boolean

No

Yes

Specifies whether to enable automatic key rotation.

Valid values:

-   true: enables automatic key rotation.
    
-   false (default): disables automatic key rotation.
    

KeySpec

String

No

No

The type of the key.

Valid values:

-   Aliyun\_AES\_256
    
-   Aliyun\_SM4
    
-   RSA\_2048
    
-   EC\_P256
    
-   EC\_P256K
    
-   EC\_SM2
    

**Note**

In the Chinese mainland, keys created using managed HSMs default to Aliyun\_SM4. In all other cases, keys default to Aliyun\_AES\_256.

PendingWindowInDays

Integer

No

No

The pending deletion period. During this period, you can revoke the deletion of a key that is in the pending-deletion state. After this period ends, you cannot revoke the deletion.

Valid values: 7 to 30.

Default value: 30.

Unit: days.

Policy

Map

No

No

The key policy.

JSON format. Maximum size: 32768 bytes.

For more information about key policies, see [Overview of key policies](/help/en/kms/key-management-service/security-and-compliance/overview-of-key-policies). If you do not specify this property, the default credential policy is used.

A key policy contains the following elements:

-   Version: the version of the key policy. Only version 1 is supported.
    
-   Statement: one or more statements in the key policy.
    

A key policy has the following format:

```
{
    "Version": "1",
    "Statement": [
        {
            "Sid": "Enable RAM User Permissions",
            "Effect": "Allow",
            "Principal": {
              "RAM": "acs:ram::112890462****:root"
            }
            "Action": [
                "kms:*"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

ProtectionLevel

String

No

No

The protection level of the key.

Valid values:

-   SOFTWARE (default)
    
-   HSM
    

RotationInterval

String

No

Yes

The time interval for automatic key rotation. Example: `365d`.

Format: `integer[unit]`, where `integer` is the time duration and `unit` is the time unit.

Valid values for `unit`:

-   d: days
    
-   h: hours
    
-   m: minutes
    
-   s: seconds
    

Both 7d and 604800s represent a 7-day interval.

Valid values: 7 to 730 days.

Tags

List

No

Yes

label.

You can add up to 20 tags.

For more information, see [Tags property](#title-vnj-i93-cpp).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags property

**Property name**

**Type**

**Required**

**Enable updates**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

Length: 1 to 128 characters. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

Length: 0 to 128 characters. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

KeyId: the globally unique identifier of the key.

## Examples

### Scenario 1: Create a KMS key using an existing KMS instance

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/kms/key-case1.yml&pageTitle=Create a KMS key by using an existing KMS instance&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
Metadata: {}
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  KMSInstance:
    Type: String
    Description:
      en: KMS Instance Id.
Resources:
  KMS-Key-bhs-registry-secret:
    Type: ALIYUN::KMS::Key
    Properties:
      DKMSInstanceId:
        Ref: KMSInstance
      DeletionProtection: false
      Enable: true
      EnableAutomaticRotation: true
      KeySpec: Aliyun_AES_256
      KeyUsage: ENCRYPT/DECRYPT
      PendingWindowInDays: 7
      RotationInterval: 30d
```

JSON

```
{
  "Metadata": {
  },
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "KMSInstance": {
      "Type": "String",
      "Description": {
        "en": "KMS Instance Id."
      }
    }
  },
  "Resources": {
    "KMS-Key-bhs-registry-secret": {
      "Type": "ALIYUN::KMS::Key",
      "Properties": {
        "DKMSInstanceId": {
          "Ref": "KMSInstance"
        },
        "DeletionProtection": false,
        "Enable": true,
        "EnableAutomaticRotation": true,
        "KeySpec": "Aliyun_AES_256",
        "KeyUsage": "ENCRYPT/DECRYPT",
        "PendingWindowInDays": 7,
        "RotationInterval": "30d"
      }
    }
  }
}
```

### Scenario 2: Create a KMS instance and then create a KMS key

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/kms/key-case2.yml&pageTitle=Create a KMS instance and then create a KMS key&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
Metadata: {}
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProductVersion:
    Type: String
    Description:
      en: KMS Instance commodity type (software/software-small/hardware/hardware-small).
    AllowedValues:
      - software
      - software-small
      - hardware
      - hardware-small
    Required: true
Resources:
  KMSInstance:
    Type: ALIYUN::KMS::Instance
    Properties:
      ProductVersion:
        Ref: ProductVersion
  KMSKey:
    Type: ALIYUN::KMS::Key
    Properties:
      DKMSInstanceId:
        Ref: KMSInstance
      DeletionProtection: false
      Enable: true
      EnableAutomaticRotation: true
      KeySpec: Aliyun_AES_256
      KeyUsage: ENCRYPT/DECRYPT
      PendingWindowInDays: 7
      RotationInterval: 30d
  KMSAlias:
    Type: ALIYUN::KMS::Alias
    Properties:
      AliasName: bhs-registry-secretDev
      KeyId:
        Fn::GetAtt:
          - KMSKey
          - KeyId
```

JSON

```
{
  "Metadata": {
  },
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProductVersion": {
      "Type": "String",
      "Description": {
        "en": "KMS Instance commodity type (software/software-small/hardware/hardware-small)."
      },
      "AllowedValues": [
        "software",
        "software-small",
        "hardware",
        "hardware-small"
      ],
      "Required": true
    }
  },
  "Resources": {
    "KMSInstance": {
      "Type": "ALIYUN::KMS::Instance",
      "Properties": {
        "ProductVersion": {
          "Ref": "ProductVersion"
        }
      }
    },
    "KMSKey": {
      "Type": "ALIYUN::KMS::Key",
      "Properties": {
        "DKMSInstanceId": {
          "Ref": "KMSInstance"
        },
        "DeletionProtection": false,
        "Enable": true,
        "EnableAutomaticRotation": true,
        "KeySpec": "Aliyun_AES_256",
        "KeyUsage": "ENCRYPT/DECRYPT",
        "PendingWindowInDays": 7,
        "RotationInterval": "30d"
      }
    },
    "KMSAlias": {
      "Type": "ALIYUN::KMS::Alias",
      "Properties": {
        "AliasName": "bhs-registry-secretDev",
        "KeyId": {
          "Fn::GetAtt": [
            "KMSKey",
            "KeyId"
          ]
        }
      }
    }
  }
}
```

For more examples, see [Public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::KMS::Key).
