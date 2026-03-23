ALIYUN::KMS::Secret is used to create a secret and store the initial version of the secret.

## Syntax

```
{
  "Type": "ALIYUN::KMS::Secret",
  "Properties": {
    "VersionId": String,
    "SecretName": String,
    "Description": String,
    "SecretDataType": String,
    "SecretData": String,
    "VersionStages": List,
    "EncryptionKeyId": String,
    "RecoveryWindowInDays": Integer,
    "ForceDeleteWithoutRecovery": Boolean,
    "SecretType": String,
    "EnableAutomaticRotation": Boolean,
    "RotationInterval": String,
    "ExtendedConfig": Map,
    "DKMSInstanceId": String,
    "Policy": Map,
    "Tags": List
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Enable updates**

**Description**

**Constraint**

VersionId

String

Yes

Yes

The initial version number.

Version numbers are unique in each secret.

SecretName

String

Yes

No

The name of the secret.

None.

Description

String

No

Yes

Description of the credential.

None.

SecretDataType

String

No

No

The type of the secret value.

Valid values:

-   text
    
-   binary
    

SecretData

String

Yes

Yes

The value of the secret that you want to create. Secrets Manager encrypts the secret value and stores the encrypted value in the initial version.

None.

VersionStages

List

No

Yes

Mark indicating the version status.

Default value: ACSCurrent.

You can specify up to seven labels.

EncryptionKeyId

String

No

No

The ID of the customer master key (CMK) that is used to encrypt the secret value.

If you leave this property empty, Secrets Manager uses a CMK that is created by Key Management Service (KMS) to encrypt and protect the secret value.

**Note**

The CMK must be a symmetric key.

RecoveryWindowInDays

Integer

No

Yes

You can schedule a credential for deletion and specify a recovery window.

Default value: 30.

Unit: day.

ForceDeleteWithoutRecovery

Boolean

No

Yes

Specifies whether to forcefully delete the secret. A forcefully deleted secret cannot be recovered.

Valid values:

-   true: Forcibly deletes the credential. The credential cannot be recovered.
    
-   false (default): The credential is not permanently deleted and can be recovered.
    

SecretType

String

No

No

The type of the secret.

Valid values:

-   Generic: generic secret
    
-   Rds: managed ApsaraDB RDS secret
    
-   RAMCredentials: managed Resource Access Management (RAM) secret
    
-   ECS: managed ECS secret
    

EnableAutomaticRotation

Boolean

No

No

Specifies whether to enable automatic key rotation.

Valid values:

-   true: Enables automatic key rotation.
    
-   false (default): Disables automatic key rotation.
    

RotationInterval

String

No

No

The interval of automatic key rotation.

The format is `integer[unit]`, where `integer` represents the length of time and `unit` represents the unit of time. The value for `unit` must be s (seconds). For example, for a 7-day rotation period, the value is 604800s.

**Note**

This property is returned if automatic key rotation is enabled.

ExtendedConfig

Map

No

No

Advanced credential configuration.

None.

Policy

Map

No

No

The key policy.

The value must be in JSON format and have a maximum length of 32,768 bytes.

For more information about key policies, see [Key policy overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-key-policies). If you do not specify this parameter, the default credential policy is used.

A key policy includes the following parts:

-   Version: The version of the key policy. Only version 1 is supported.
    
-   Statement: The statements of the key policy. Each key policy contains one or more statements.
    

The key policy format is:

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

Tags

List

No

Yes

The tags.

The maximum number of tags is 20.

For more information, see the [Tags properties](#title-vnj-i93-cpp) section.

DKMSInstanceId

String

No

No

The ID of the dedicated KMS instance.

None.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property Name**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   SecretName: the name of the secret.
    
-   Arn: the Alibaba Cloud Resource Name (ARN) of the secret.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Secret:
    Type: ALIYUN::KMS::Secret
    Properties:
      VersionId: v1
      SecretName: TestSecret
      SecretData: DemoSecretData
      ForceDeleteWithoutRecovery: false
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Secret": {
      "Type": "ALIYUN::KMS::Secret",
      "Properties": {
        "VersionId": "v1",
        "SecretName": "TestSecret",
        "SecretData": "DemoSecretData",
        "ForceDeleteWithoutRecovery": false
      }
    }
  },
  "Outputs": {
  }
}
```
